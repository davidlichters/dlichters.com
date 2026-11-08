<!-- part of ourrules/app-factory-full.md -->
Part 4 of 4 of "App factory: the full manual (how we build, test, ship and submit iOS apps)". Map of all parts: https://dlichters.com/ai/ourrules/app-factory-full.md · Previous: https://dlichters.com/ai/ourrules/app-factory-full/03-12-design-rules-beyond-the-short-file.md

## 21. Bug memory: every lesson, grouped

Rule: every bug found is not only fixed but gets an automatic check (code pattern, robot behavior, design check, unit test) so it never returns in any app. If no automatic check is possible, the rule is written down as "look at it".

### Purchases and paywall
- Restore → cancel showed "purchases restored" (`try?` swallowed the cancel; test Pro switch counted as purchase).
- Subscriber in billing grace period would have lost Pro (section 5).
- Free users could export unlimited PDFs by "cancel, then share" (share sheet stays open after a cancelled action since iOS 13; count every completed callback per file, clear pending export only on sheet dismiss).
- After the free PDF, other periods opened a full free preview (every button must ask exactly one method of the export counter).
- Settings export wrote the same paid CSV for free (backup must be own JSON).
- Coffer paywall said "100 entries" when the limit was 25; numbers in texts must come from config.
- Ton80 sold CSV export as Pro while privacy text promised export any time; export made free.
- Pro lists sold free features (holidays, costs, "support an indie app"): every Pro line needs a lock in code.
- Paywall purchase area overlapped long feature lists; moved below the scroll view.
- Store-image and robot runs leave `FabrikForcePro` in UserDefaults; tests started as Pro in 13 apps.

### StoreKit and tests
- See section 11 (primer, separate process, parentheses, 0 tests, timeouts, sign-in sheet, load).
- `xcodebuild` screenshot without time limit hung QA 1.5 h; every simctl call gets a 20 s alarm.

### UI behavior
- Alerts with `.constant` bindings didn't close; overlay buttons over List did nothing; mixed navigation destinations pushed under each other; menus without names; search hidden in collapsed bar; 34 pt tap targets next to row links; check icon for action and state; stepper in welcome broke the robot; navigation in `.task` before the sheet was up (wait 600 ms); `.defaultScrollAnchor(.bottomTrailing)` also aligned small content to the bottom (use separate anchors for initial offset and alignment); `.fixedSize()` row set the min width of the whole column (use ViewThatFits); quick plus/minus taps created one log line each (merge taps within 5 s).
- Reminder scheduling: removal of old IDs in the async callback deleted the just-scheduled reminders; remove and add in the same callback.
- Deleting data while a start/sync runs brought the old ID back (check "halt if deleting" after every await; deletion waits until idle).
- One-time import after reinstall overwrote newer iCloud data (import only missing days with backup timestamp; duplicates: newest wins whole record).
- Public CloudKit database can't restrict reads per friend (Lichters: encrypt, keys only for accepted friends).
- `CKContainer.default()` without iCloud entitlement crashes (unsigned simulator).

### Numbers
- Sum ≠ rows (round rows first), amount ≠ minutes × rate (compute from rounded minutes), clock amount from whole seconds, running shift totals to the last full minute, "1.960 mm" became 1.96 mm (input prefilled with German thousands separator; use `.grouping(.never)` in input fields).

### Texts and languages
- Long dashes in hundreds of places (store texts 243, purchase texts 58, app strings, legal texts, Kit texts, PDF footers, share text); British English; plural bugs in apps, widgets, Kit; untranslated concatenated strings; German region names in English; German letters in English shift codes; "book" for stock; "surcharge"; percent with space; widgets without language folders; mapping files missing entries; Kit keys are German, so German users see the key itself.

### Store images
- Old app version shown (script used another simulator); settings changed by the robot leaked into images (uninstall first); sign-in sheet over every image; empty raw images (wait 10 to 15 s, blank detection had top and bottom swapped); status bar moving; grey dots; headline sizes differing 20 %; translated subtitles repeating the format name; English team names in German images; images showing Pro features with "free" pill; crop edge cutting lines or separating a header from its rows; demo data at 2:36 am, fake holidays, impossible shift rest, celebrity names, invalid barcodes, drawn symbols as "photos", the real home address.

### Logos and icons
- Old logo at launch (launch screen cached); "Samsung" white outlines; placeholder letter icons "He", "Fl", "Cl" left in the asset catalog; iOS 18 fill of `fill="none"` shapes; dark-mode tinting killing contrast; watch icon with alpha channel rejected.

### Names and website
- Names taken while building (Odograph, Hourmark, Schichtrad, "Darts Scoreboard", Bracket Maker German variants on other accounts); renames only in Swift left old names in Info.plist strings, purchase names, display name, Kit app list, website, PDF links (now: `formerNames` in app.json, bug-check fails on any occurrence outside store search terms).
- Website builder would have deleted `/ai/`, published private apps, built the habit app as a normal app; live site lagged behind repo.

### App Store Connect tooling
- Fill script crashed on the first error and hid it; price schedules counted as set when empty; 500 on POST still created objects; MISSING_METADATA while screenshots process; Chrome PID lookup returns null under load; review screenshot from simctl showed "App Store not reachable" and would have been uploaded for every purchase.

### Mac and agents
- zsh `${@:-a b c}` does not split words: a script ran all 10 app names as ONE name. Use arrays `(a b c)` or `${=VAR}` and read the overview after every run.
- Scripts with hardcoded simulator IDs only worked on one Mac.
- Process limit (2026-10-25) and disk full (2026-10-27), section 10.
- Never shell `rm` with variables in paths (blocked); move old files to `design/alt/`.

---

## 22. How Claude works in the factory

- In the factory chat: always German, even short status lines.
- Decide product, design, price and order questions yourself and justify in 1 to 2 sentences with data. Never ask "A or B?". Only ask for things only humans may do: logins, payments, sending messages, contracts, legal data like name or address.
- "SS" at the start of a message = look at the newest screenshot in Downloads first.
- Start of work: `git pull`. End of every piece of work: commit and push (private repo `davidlichters/apps`).
- Before each app task: design recipe, bug memory, then QA before showing anything. New insights go immediately into the checklist or a script.
- Nothing is "done" until looked at: every image opened, every number checked against config.
- Long jobs in the background. Never bring windows to the front unless asked.
- Nothing submitted, bought, signed or sent without David's yes (the submission job has his standing yes).
- Morning report rule from night shifts: line 1 is what David has to do, nothing else.

---

## 23. Human-only steps and what is already done

Done:
- Developer account on David's own name (adult, since 2026-10; provider name corrected to "David Lichters" 2026-10-31).
- Paid apps agreement, bank, W-8BEN tax form, DSA trader status, Small Business Program: requested from David on 2026-10-25 (D1 to D3 in the money plan); submission of Bracket Maker on 2026-10-31 implies at least the agreement path was done [guess].
- Domain and HTTPS, 19 bundle IDs registered (12 apps plus 7 widgets), 12 app entries created 2026-10-28, plus Tallybin and Spurbuch on 2026-11-01.
- Trader address and phone are public in the imprint and the App Store (EU trader rules).

Still human-only:
- Partner program sign-ups (craftsman offers for Floorscribe).
- LiDAR scan test of Floorscribe on an iPhone Pro.
- CloudKit schema deploys, accepting Xcode license, downloading Xcode.
- Trademark checks can be researched by Claude, legal judgment is not ours.

---

## 24. Open items as of 2026-11-07

1. Bracket Maker still in review since 2026-10-31; the submission job waits. Everything for the next 9 apps is ready.
2. Bracket Maker 1.0.1: darker time/field text in the share image (1.4:1).
3. Tallybin and Spurbuch: build upload, fill script, privacy, then append to the queue (Spurbuch needs to be live before about 2026-12-20).
4. Hertzline: retake store images 01 to 04 (old dash texts); fill App Store Connect.
5. Floorscribe and Regiebericht store images 02/04/05 and 01/05 still show old texts (only relevant if unpaused).
6. Kit English mapping misses 56 entries that only exist in the Kit's en.lproj; Kit strings are maintained by hand until fixed.
7. Logo dark-mode fills missing for some layers (Bracket Maker tree, Clapnote card, Floorscribe crown and floor, Hertzline head and foot); Clapnote should change color away from Bracket Maker's orange.
8. Watch apps deferred; App Clip for Bracket Maker only after a domain-linked App Clip experience is set up; year-in-review from December.
9. Garden planner build in January.
10. Radar paused (usage); restart when the weekly limit allows.
11. After 60 days live: measure conversion and revenue per download per app and recalculate prices.

## 25. Lichters habit app: how it ships and when it is submitted (moved here from ops/gaps-3-1.md, 2026-11-07)

- **App Store Connect name:** "Lichters: Habit Tracker". **Bundle ID: `com.lichtersapps.habitgrid`** (project slug HabitGrid; the old developer build used a different bundle and does not see its data, so David started fresh on the TestFlight build on 2026-10-16). **CloudKit container gotcha (proven 2026-10-16 via CloudKit console > Logs):** the store/TestFlight build uses the container **`iCloud.com.lichtersapps.habitgrid`** through `CKContainer.default()` and SwiftData, although the entitlements name `iCloud.io.github.davidlichters.dev.habitgrid`. All iPhone requests appeared in the com.lichtersapps container, none in the io.github one. For four hours schema changes were deployed into the wrong (io.github) container, which caused "Cannot create new type X in production schema" despite a visible deploy. **Always import and deploy schema changes into `iCloud.com.lichtersapps.habitgrid`**; on any CloudKit puzzle first check console > Logs per container. Claude can do the schema import itself (file upload in the console; the import replaces the whole development schema, so always import the full file; encrypted fields are written `ENCRYPTED STRING` with a space, not `ENCRYPTED_STRING`); the Production deploy is clicked by David (the app's safety classifier blocks Claude there). **Every new model field needs "Deploy Schema Changes" again**, otherwise sync breaks in the store build. Source: memory notes "lichters-cloudkit-container" and "lichters-money-idea", 2026-10-16/18.
  - *Older, replaced on 2026-11-07:* "iCloud container stays fixed on the original development container; the schema was deployed to Production in the CloudKit console." This was wrong: the store build does not use the development (io.github) container.
- **Origin, HabitGrid (2026-09-05):** the app started as a web home-screen app at davidlichters.github.io/habitgrid (full screen): **seven fixed habits S F M B D T G = sleep, friends, meditation, business, documentation, training, gratitude** (David's seven core points, not changeable), on a fixed 2026 year grid of **51 columns x 7 rows filled column-wise** (cell row 1 column 1 = 05-01-2026, row 7 column 51 = 27-12-2026), date format everywhere `05-09-2026`, no weekdays, in David's presentation design. Data in the browser's local storage with an optional private backup copy; the newer copy wins by its update time. It later became the native app "Lichters: Habit Tracker". The public Lichters app lets each user pick their own habits (see https://dlichters.com/ai/app.md); the seven above are David's own. Source: memory note "habitgrid-app", 2026-09-05.
- **Money Idea privacy decision (David's spec 2026-10-18):** ideas are stored separately from day entries (IdeaVault: one JSON per idea in the app group; own sync code with a private CloudKit zone "MoneyIdeas", every field in encrypted values; images encrypted with AES-GCM, key in the iCloud keychain), plus an encrypted **support copy** in the public database readable only with the support key. Entry points: the lightbulb tip, the guide, the share extension, widgets, Control Center, Siri; no habit in the grid. On the afternoon of 2026-10-18 David first wanted hidden support access ("don't mention it"); refused as a false privacy statement toward minors. **He chose option A:** the support copy stays and the texts are calm and true: footer "Friends and other users can't see your ideas…", privacy sheet line "Lichters support can open your ideas to help with problems." **Never write "only you" or "not us".** A red admin button (only the support account, Face ID) sits in the guide. On the evening of 2026-10-18 David saw the app as a way to get the ideas and expert knowledge of smart people (letting rich people in Hamburg test it). Answer: support access is promised only "to help with problems"; reading ideas for our own purposes breaks that promise and the GDPR purpose limit. Offered instead: a voluntary "Share with David" button plus a public TestFlight link. **Never silently use or build the admin access as an idea source.** Source: memory note "lichters-money-idea", 2026-10-18. See also https://dlichters.com/ai/ourrules/working-rules/03-11-verification-before-you-say-done-or-quote-a-num.md section 14 (the AI's own limits).
- **Shipping:** since 2026-10-17 every change goes out via TestFlight, never via the direct-install shortcut, because David's iPhone is not on the Mac's Wi-Fi (he was abroad and steers the Mac remotely). Only switch back to direct install when he says he is back. The upload script archives and uploads through the Xcode account: **about 3 minutes upload, then Apple processing 10 to 30 minutes** [measured]. Uploads are "TestFlight Internal Only" (set in the export options), so only App Store Connect team members (role Marketing is enough) in the internal group can test. External testers would need that switch off and an Apple beta review. A real store upload also needs a build without "TestFlight Internal Only".
- If the invitation becomes invalid ("revoked", "not available for your Apple Account", e.g. after "Stop Testing"): re-invite in App Store Connect > TestFlight > the internal group and use the link from the new mail.
- **Mac and Watch (2026-10-31):** Lichters also runs as a real Mac app via **Mac Catalyst** (`"mac": true` in the app config; upload the Mac build with the same TestFlight script plus a `--mac` flag; the MacBook is registered as a test device since 2026-10-31) and has an **Apple Watch app** (`"watch": true`, embedded in the iPhone build, talks only to the iPhone via WatchConnectivity).
- **Developer name:** shows "David Lichters" since 2026-10-31 (was misspelled; the misspelling never blocked submission, never cite it as a reason to wait).
- **Submission (David, 2026-10-24): Lichters is submitted only around Christmas. Until then ONLY prepare App Store Connect (fill metadata via the API), NEVER press submit.** Weak points found in the 2026-10-24 comparison of all 17 factory apps against competitors: logos and store screenshots (the logo rule "on white, symmetric" was the cause).


Part 4 of 4 of "App factory: the full manual (how we build, test, ship and submit iOS apps)". Map of all parts: https://dlichters.com/ai/ourrules/app-factory-full.md · Previous: https://dlichters.com/ai/ourrules/app-factory-full/03-12-design-rules-beyond-the-short-file.md
