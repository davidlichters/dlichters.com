<!-- part of ourrules/app-factory-full.md -->
Part 2 of 4 of "App factory: the full manual (how we build, test, ship and submit iOS apps)". Map of all parts: https://dlichters.com/ai/ourrules/app-factory-full.md · Previous: https://dlichters.com/ai/ourrules/app-factory-full/01-contents.md · Next: https://dlichters.com/ai/ourrules/app-factory-full/03-12-design-rules-beyond-the-short-file.md

## 6. Tools (what they do, so they can be rebuilt)

All scripts load the Xcode environment first (xcode-select on this Mac points to CommandLineTools; bare `xcrun simctl` silently fails, set DEVELOPER_DIR to Xcode). There is no `timeout` on macOS; use `perl -e 'alarm shift; exec @ARGV' 20 <cmd>` or run long jobs in the background.

| Tool | Input | Output / effect | Gotchas |
|---|---|---|---|
| new-app | Name, slug, primary hex, accent hex, display name | App folder from Kit template, tests incl. StoreKit primer, generated Xcode project (objectVersion 77, synchronized folders, Kit linked locally), scheme with StoreKit file | Leaves a placeholder icon set; the logo builder moves it away. |
| gen_project | app.json | Xcode project, scheme, .storekit, Info.plist keys, privacy manifest | Run after every app.json change; `--all` after a bundle prefix change. |
| design-check | App, optional code-only | List of non-Apple patterns, comparison images next to Apple apps light and dark, first-launch image | Starts the app via simctl, so StoreKit loads nothing; its paywall shot is NOT a review screenshot. |
| apple-autofix | App | Fixes font weights, ✕/✓ toolbar buttons, shadows, uppercase, theme | |
| apple-colors | App | All fixed colors to system colors, controls to blue | Must never map dark text tones onto strong accent colors (orange on orange happened). |
| apple-icon2 | App, spec.json, optional variant spec and draft folder | Layered `AppIcon.icon` via Apple's Icon Composer tool (`ictool`), preview with light/dark/tinted, AppIconImage for in-app use | Aborts on white/pale tile under rule 2; warns on `fill="none"`, on brand color ≠ store accent, on light layer without dark fill. |
| icon-row | App | Our logo next to the 5 competitor logos at 60 and 180 px, light and dark, scores "strength" and "contrast" | Exit 1 if ours is the palest or least readable; under rule 2 the build ends with code 3. |
| launch-screen | App | Launch screen with background color only, build number +1 | iOS caches launch screens; old logo kept showing. |
| store-images / per-app store-shots | App, `store/frames.json` | Raw simulator shots per language with launch arguments, frames, preview, length checks | Uninstalls the app first (fresh settings) and after (ForcePro leak). Checks status bar and the "Sign in to Apple Account" dialog via OCR. |
| store-frame (Swift) | frames.json, raw shots | Final 1320x2868 images: "stage" style (brand gradient, white headline, pill/tag, phone bleeding off the bottom) or light style | Reports cut text lines at the crop edge (OCR), lines within 8 pt of the edge, nearly blank raw images, pill contrast < 4.5:1, phone top offset changes, one headline size per language. |
| test-app | App | All tests, then purchase tests alone after a full reset, then install on the founders' test phone simulator | Its `fresh()` kills ALL simulators and xcodebuild runs: never run in parallel with anything. Screenshot every 12 s; aborts on the sign-in dialog. 45-min hard limit. Detects "0 tests", "recorded an issue", "TEST FAILED" in any case. |
| bug-check | App or Kit | Code rules from the bug memory (FEHLER = must fix, PRÜFEN = look at it) | Lists: STRICHFREI (no long dashes), USENGLISCH, LOGO2, GEHEIMNIS_APPS. Also runs store-text check and purchase-text check. |
| store-texte-check | App | Apple length limits per language, long dashes, "No cloud" with iCloud, "No subscription" with subscriptions, foreign brands, British spelling, "mileage" in km apps, "70 %" in US texts, keywords in bytes | |
| kauftexte-check | App | Purchase names ≤ 30, descriptions ≤ 45, no dashes, .storekit equals generator output | |
| robo (test robot, XCUITest) | App, pro or free | Explores every screen, taps everything, cancels dialogs, measures text contrast, reports "no effect", overlaps, missing accessibility labels | Shuts down other booted AF simulators. Must report FEHLER on build failure or 0 screens. Fewer than 15 screens = suspicious. |
| qa / qa-alle | App(s) | Everything above → `qa/QA.txt`, overview file | Only when nothing else uses simulators. About 15 min per app. |
| strings | mapping .py files | `write` (Localizable.strings from mapping, aborts if the target has entries missing from the mapping, `--loeschen` to remove deliberately), `plurals` (writes .stringsdict), `export` (mapping from existing .strings with cross-check), `rename` (key in all mappings), `aendern` (change keys and values in all languages, aborts on leftover dashes), `keys` (find unused/missing) | `aendern` once turned `\n` into `\\n` in a key; it now keeps untouched entries byte-identical and does a dry cross-check. |
| name-check | App | iTunes search US/DE/GB for another app whose first name word equals ours | Our own apps excluded by seller name. |
| website | repo | Builds dlichters.com: home page, per app support page, privacy, Datenschutz, imprint, Impressum | Must never delete `website/ai/` or robots.txt; skips private apps and HabitGrid (own site); aborts on placeholders or long dashes; web slug aliases old paths with canonical. |
| asc (API client) | method, path, body | Calls the App Store Connect API with a JWT (ES256, key ID in header, issuer ID, `aud: appstoreconnect-v1`, 15-min expiry); key file and IDs live outside the repo | Retries reads up to 5 times on 5xx, 429, network errors (pauses 2/5/10/20 s, Retry-After wins, max 30 s); writes never on 5xx (Apple executed a POST that returned 500). |
| asc-bundleids | App | Registers bundle ID plus widget ID with capabilities (app group, iCloud) | App groups and iCloud containers themselves are created by Xcode at the first archive with `-allowProvisioningUpdates`. |
| asc-app-anlegen | name, SKU, bundle ID, locale | Creates the app entry through the logged-in App Store Connect browser tab (internal web API), dry run by default | The public API has no POST /v1/apps. Name taken by another account = error, nothing created. |
| asc-fill | App | Plans every write (localizations, age rating, review notes and contact, price schedules, availability, subscription group, purchases with review screenshot, family sharing, store images) into `store/asc-plan.json`; `--write` executes | Dry run blocks every non-GET before the network. Never touches anything with "Submission". After `--write`, a read-back dry run must show 0. |
| asc-datenschutz | App | Reads or publishes "Data not collected" through the browser session | Only if store texts say no data collected. Retries reading Chrome's PID 3x. |
| einreich-takt | (daily) | Submission job, section 8 | |
| testflight | App, `--store`, `--mac` | Archive with build number `yymmdd.HHMM`, export and upload (internal-only TestFlight options, or App Store options with `--store`) | Apple processes 10 to 30 min. |
| device / schnell | App(s) | Build and install on David's iPhone over Wi-Fi (dev bundle IDs `io.github.davidlichters.dev.<slug>` so store IDs stay free; "schnell" uses the store bundle ID with dev signing) | Needs the same Wi-Fi. |
| app-sim / sims / sim-aufraeumen | | Create the per-app simulator `AF-<app>`; find/create AF-1, AF-1-Max, AF-1-iPad by name; delete shut-down one-off simulators unused for 3 h | Never hardcode simulator IDs (scripts broke on another Mac). |
| nachmerge-check | | After merging: Kit tests on Mac Catalyst, builds | Red on "0 tests". |
| contrast (Swift) | screenshot, element frames | Contrast ratio of text vs background per element | Text needs ≥ 0.2 % / 40 pixels of font color; fields with no measurable text tone are skipped, not reported as 1.0. |
| pruefbild | image | OCR: at least two prices, no "not reachable", no "Try again", no "Pro is active" | Counts prices, not whether every product has one: always look at the image. |
| statusleiste, anmeldefenster | image | OCR checks for a moving status bar (Dynamic Island pill, grey time, dots instead of bars) and for the "Sign in to Apple Account" dialog | |
| setup / paket | | Sets up the factory on a fresh Mac (Xcode check, simulator runtime about 8 GB, simulators, rules, test build), and builds the handover zip | Re-runnable; stops with XCODE_FEHLT or XCODE_ZUSTIMMEN for the human. |

---

## 7. App Store Connect

### Access
- API key named "Claude" with Admin role (David, 2026-10-24); key and IDs stored outside the repo, never on any page.
- Some things the official API cannot do. For those we use the App Store Connect website's internal API (`/iris/v1`) from a tab in David's real Chrome where he is logged in, driven via AppleScript JavaScript-for-Automation by process ID, so no window comes to the front. If Chrome is logged out, the tool writes "log in" into the task file and does nothing. Never copy the Chrome profile (it logged out all Google accounts on 2026-10-31).

### What only the web (or the web's internal API) can do
- Create an app entry ("New App"). Since 2026-11-01 Claude does it via the browser session; before, David did it on his iPhone.
- App Privacy questionnaire ("Data not collected"), since 2026-10-31 via the browser session.
- Add the **first non-consumable** to a submission: the public API refuses with `FIRST_NON_CONSUMABLE_MUST_BE_SUBMITTED_ON_VERSION`, and `reviewSubmissionItems` has no purchase relation.
- Agreements, bank, tax, DSA trader status, Small Business Program (human only).

### How submission works in 2026 (done for Bracket Maker on 2026-10-31)
1. On each purchase's page, "Add for Review" and choose the draft "Draft iOS Submission" (same via the internal API). Same for the version, or via `POST /v1/reviewSubmissionItems`.
2. Find the draft: `GET /v1/reviewSubmissions?filter[app]=<appId>`.
3. Only when the draft contains exactly the version plus all purchases: `PATCH /v1/reviewSubmissions/<id>` with `"submitted": true`. Read back.
4. Prerequisites: build attached and VALID, read-back fill dry run 0 writes and 0 errors, every purchase and subscription READY_TO_SUBMIT.
- Rejection reasons come by mail to David; the API does not show them [guess]. Then fix, answer, resubmit.

### Gotchas measured
- New apps and new purchases get an **empty price schedule**; a schedule only counts as set if it has at least one manual price (`.../manualPrices`). Otherwise status MISSING_METADATA and no price.
- Right after uploading a review screenshot a subscription can show MISSING_METADATA because Apple is still processing (`assetDeliveryState` UPLOAD_COMPLETE vs COMPLETE). Wait a few minutes before calling it an error.
- HTTP 500 on POST may still have created the object (review screenshot reservation stuck in AWAITING_UPLOAD with empty checksum `""`). Detect it, upload the bytes into it or delete and recreate.
- 409 `DUPLICATE.DIFFERENT_ACCOUNT` = name taken by another account. Pick another name; the German name must contain the home-screen name (guideline 2.3.8), e.g. "Turnierplaner: Bracket Maker".
- Apple says "user access settings could not be saved" when creating a new app; the app is created anyway.
- Bundle IDs sent as IOS are stored as UNIVERSAL. In-app purchase capability is switched on automatically.
- Watch app icons must not contain an alpha channel (upload rejected 2026-10-31).
- Store uploads must not use the "TestFlight Internal Only" export option.
- Apple's limits: name 30, subtitle 30, keywords 100 (count UTF-8 bytes; ä/ö/ü count double), promo 170, description 4,000, review notes 4,000, purchase display name 30, purchase description 45 [the 45 is marked guess but enforced].
- Status values that mean "approved": READY_FOR_SALE, PENDING_DEVELOPER_RELEASE and similar. Rejected: REJECTED, METADATA_REJECTED, submission UNRESOLVED_ISSUES. READY_FOR_REVIEW (version in a draft) counts as still editable.

### Settings David should switch on per app (recommended 2026-10-12)
Family Sharing for subscriptions and lifetime; an offer code "1 month free" per subscription app (for friends and support; "Redeem code" is built into settings); win-back offer for the yearly (e.g. 50 % first year for former subscribers); Billing Grace Period 16 days; later price increases always with "keep price for existing subscribers". App groups, widgets, Live Activities need nothing, Xcode creates app groups at signing.

---

## 8. Submission cadence and the daily submission job

- Base rule: **2 apps per week**, similar apps at least two weeks apart (4.3). A faster plan of 3 per week existed on 2026-10-10 but the rules file says 2.
- First only Bracket Maker (2026-10-31), so the first review shows whether our shared structure passes.
- **David's standing order, 2026-11-01, verbatim (German):** "Reich Coinclock, Coffer, Halfspeed und Ton80 alle zwei Tage ein, sobald Bracket Maker durch ist." Same day 09:35 he said yes to Gaugebook, Schichtblatt and Stitchnook in the same two-day rhythm, and Breedbook, Panelwise, Clapnote hang behind under the same standing yes. Never ask again before these; if Bracket Maker is rejected, fix the reason first.
- The job (launchd, daily 10:00):
  1. Read Bracket Maker 1.0. In review: do nothing. Rejected: submit nothing, write one rejection line into David's task file (max once a day). Approved: continue.
  2. Next app in the queue Coinclock, Coffer, Halfspeed, Ton80, Gaugebook, Schichtblatt, Stitchnook, Breedbook, Panelwise, Clapnote that is not yet submitted. The first goes the day of approval, each further one at the earliest two calendar days after the previous (Apple's submission date, Berlin time).
  3. Pre-checks (build VALID, read-back 0/0, all purchases READY_TO_SUBMIT), else a rejection line.
  4. Submit as in section 7.
  5. Every submission and rejection becomes a line "- David DD.MM.YYYY HH:MM: ..." in the task file (a companion reminds David by WhatsApp).
  6. Every abort is loud (since 2026-11-02, after a silent abort on an Apple 500): log line "ABBRUCH bei <App>", a Claude line in the task file (max once a day per app), exit 1.
- Test modes: dry run (reads only), dry run with an assumed Bracket Maker state (READY_FOR_SALE or REJECTED). Tests run against a fake Apple server on localhost with its own HOME.
- The purchase path through the browser's internal API had never run successfully when built (Chrome was logged out); if it fails, the reason is in the rejection line and the web flow ("Add for Review" → "Draft iOS Submission") has to be rebuilt.

---

## 9. TestFlight, real-device installs and the Natural Intelligence app

- **TestFlight rule (since 2026-10-17):** while David is away from home, every app change for him goes out via the TestFlight upload, never via the Wi-Fi quick install (his iPhone is not on the Mac's Wi-Fi). Switch back to the quick install only when he says he's back. Upload takes about 3 min, Apple processes 10 to 30 min.
- Uploads are "TestFlight Internal Only": only App Store Connect team members in the internal group can test. External testers would need that switch off and a beta review.
- If an invitation becomes invalid ("revoked", e.g. after "Stop Testing"), re-invite in the internal group and use the new mail's link.
- TestFlight/store builds are a different bundle ID than dev builds: they don't see dev data (CloudKit production vs development). New model fields need "Deploy Schema Changes" in the CloudKit console by a human.
- The quick install uses the store bundle ID with dev signing and iCloud production, about 2 min over Wi-Fi.
- Mac Catalyst builds upload with the `--mac` switch; Watch apps ship inside the iPhone build.
- **Natural Intelligence (internal name Hebel):** David's own iPhone app where every task for him appears as a settings-style row with a switch: title (max 28 characters, otherwise it wraps) and a grey explanation that contains everything needed so he never has to ask (how it was prepared, exactly what to do, the full text to send). Switch on = his yes and wakes the chat. New task via a small server command. Installed via devicectl with dev signing (APNs sandbox). Rules: every task for David goes there, never as a copy block in chat (David, 2026-11-07: "Why wasn't the task in the NI app????"); never send many tasks in quick succession; never use `devicectl process launch` to notify (iOS ignores no-activate, the app jumps to the front). Push delivery confirmed by David 2026-11-06. PRODUCT_NAME is "Natural Intelligence" so grouped banners show the right name. After each install the app must be opened once.

---

## 10. Simulators and Mac limits

- **Never use the founders' own iPhone simulator.** **AF-1** is the founders' test iPhone: only install finished apps there, never run tests on it.
- Each app tests on its own simulator `AF-<app>` (Coinclock: "AF-hours").
- **At most 3 simulators booted at the same time.** A booted simulator holds about 150 to 200 processes. On 2026-10-25 six to eight plus Chrome profiles hit the per-user process limit: "fork failed: resource temporarily unavailable", no command started, stopping workflows didn't help because simulators keep running under launchd, and the Mac could not be restarted (no remote access for a week afterwards). Before booting: count booted simulators, wait at 3. Before a new workflow: compare process count with `kern.maxprocperuid`, stay under 60 %.
- **No one-off simulators** (`AF-<App>-<task>`). If unavoidable, delete them at the end with `xcrun simctl delete`; shutting down is not enough. On 2026-10-27, 47 of them used about 85 GB, the disk was 99 % full, and OCR (Vision) hung or failed with "e5rtError 13", which silently broke store-image checks and the fill script. Freed space appears only minutes after deleting (12 → 143 GB). A cleanup script deletes shut-down one-offs unused for 3 h (keeps AF-1, AF-Web, AF-HG-*, AF-<app>); a watchdog runs it when free space falls under 30 GB, at most every 6 h.
- The full test runner and the QA robot kill all simulators: never run them in parallel with other simulator work.
- Night-shift limits (2026-10-25): at most 2 workflows at once, each at most 8 agents; one workflow per app at a time (logo, images and features of the same app one after another); writing work in git worktrees, then merge into main, test, push. After merges never `git pull --rebase` (breaks merge commits); use fetch plus merge.
- Mac usage blocks happen (twice in one night: 01:50 to 02:40, 05:30 to 07:40); plan for them.
- watchOS simulator (several GB) was deliberately not installed; Watch apps for Stitchnook, Ton80, Coinclock are deferred because tests and robot would stop building.

---

## 11. Testing: StoreKit tests, robot, QA

### StoreKit purchase tests (the hardest part, all measured)
- Purchase tests run **separately** from all other tests, in their own `xcodebuild` process after a reset; in the same run they often load no products and then hang.
- **Root cause of the random "Sign in to Apple Account" (found 2026-10-26 in the simulator log):** storekitd fixes the connection type at a process's first StoreKit contact. `SKTestSession(contentsOf:)` makes that contact itself before the test configuration is saved. If the simulator has no saved configuration for the app yet, the connection gets "client type 2" (sandbox): products load from the test file, but `purchase()` goes to the sandbox and wants a login. From the second process on it's "client type 3". Fix: a **StoreKit primer test** runs first and saves the configuration; purchase tests then run in their own process. Scheme entries in the TestAction do not help under xcodebuild. Every app with purchase tests must have the primer (template), checked as error.
- Earlier root cause (2026-10-12): the app's own purchase manager started `Transaction.updates` in the test host before the test session existed; the first PurchaseManager in a test host must not touch StoreKit.
- Never type anything into a sign-in dialog. Abort, reset (restart CoreSimulatorService and storekitd, kills all simulators), repeat.
- Under heavy load (load 460 to 850) or with other apps' purchase tests in parallel, purchases land at the real App Store. Run purchase tests only when nobody else uses simulators.
- The yearly purchase with trial often exceeds 120 s on the first run after boot; second run 1 to 37 s.
- Swift Testing with `-only-testing` needs parentheses: `.../yearlyTrialPurchaseUnlocksPro()`. Without them "0 tests passed" looks green. "0 tests" is never green. A timeout only prints "recorded an issue ... Time limit was exceeded" and the last line can still say "passed".
- Apps started via simctl don't see the .storekit file and ask the real App Store; a simulator without an Apple account then shows the sign-in sheet over every screenshot, persisting across app restarts. Fix: start with `SIMCTL_CHILD_XCTestConfigurationFilePath=/dev/null` so the Kit treats it like a test host and doesn't touch StoreKit.
- Test-runner launch failures after a reset ("failed to launch") produce no result line; treat "no result line" as an error and retry.

### Test robot
- XCUITest that walks the app: taps every element, cancels every dialog, takes screenshots light and dark, measures contrast (< 1.7 = error), reports "no effect", overlaps, missing labels, "suspicious" messages after cancel.
- Lessons built into it: same title = same screen (settings changes don't make the start screen "unreachable"); paged welcome screens are walked through with Next/Continue/Get started; steppers or date pickers in the welcome confuse it (forbidden); photos only when positions are stable; keyboard, stepper buttons and disabled elements are not measured; Apple's edit menu is not an overlap; an element that becomes "selected" after a tap counts as effect; taps within 100 pt above the keyboard aren't findings.
- QA runs with parallel builds produce screenshots mid-animation (142 false contrast findings): QA only on a quiet Mac.

### Real first launch
Delete the app, install, tap through as a customer. The launch screen is cached by iOS, so always bump the build number.

---


Part 2 of 4 of "App factory: the full manual (how we build, test, ship and submit iOS apps)". Map of all parts: https://dlichters.com/ai/ourrules/app-factory-full.md · Previous: https://dlichters.com/ai/ourrules/app-factory-full/01-contents.md · Next: https://dlichters.com/ai/ourrules/app-factory-full/03-12-design-rules-beyond-the-short-file.md
