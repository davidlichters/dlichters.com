<!-- part of ourrules/app-factory-full.md -->
Part 1 of 4 of "App factory: the full manual (how we build, test, ship and submit iOS apps)". Map of all parts: https://dlichters.com/ai/ourrules/app-factory-full.md · Next: https://dlichters.com/ai/ourrules/app-factory-full/02-6-tools-what-they-do-so-they-can-be-rebuilt.md

## Contents

1. Status of every app (2026-11-07)
2. Why apps, and the honest numbers
3. Choosing what to build (market-gap method, radar, thresholds)
4. The pipeline from idea to "Waiting for Review", step by step
5. The shared Kit (rebuild guide)
6. Tools: what each one does, inputs, outputs, gotchas
7. App Store Connect: API, what only the web can do, how submission works in 2026
8. Submission cadence and the daily submission job
9. TestFlight, real-device installs and the Natural Intelligence app
10. Simulators and Mac limits (hard-won)
11. Testing: StoreKit tests, test robot, QA
12. Design rules beyond the short file
13. Logo rules in detail
14. Store page rules (texts, images, review screenshot)
15. Money rules in detail (prices, paywall, free limits, math)
16. Defense against Apple's spam rule 4.3
17. Extras inside apps: reviews, sharing, "Made with", easter eggs, partner offers, widgets
18. Localization rules
19. First-time-user rule ("I don't understand anything")
20. Website dlichters.com (support and privacy pages)
21. Bug memory: every lesson, grouped
22. How Claude works in the factory
23. Human-only steps and what is already done
24. Open items as of 2026-11-07
25. Lichters habit app: how it ships and when it is submitted

---

## 1. Status of every app (2026-11-07)

Bundle IDs follow `com.lichtersapps.<slug>`; the slug and SKU keep the original folder name even after a rename (the SKU can never change, customers never see bundle IDs). Product IDs are `<bundleId>.pro` (lifetime, non-consumable), `<bundleId>.yearly` (with trial), `<bundleId>.monthly`. Prices are the same number in EUR and USD.

| Folder | Store name (EN / DE) | Language | Model and prices | Free limit | Status 2026-11-07 |
|---|---|---|---|---|---|
| BracketMaker | Bracket Maker: Tournament Plan / Turnierplaner: Bracket Maker | en-US | Lifetime only 9.99 (reviews of competitors reject subscriptions: "subscription" appears 59 times) | 8 participants, 1 running tournament; knockout and round robin free | **Submitted 2026-10-31 13:55** (David said "submit"), build 261031.1257 with glass logo. Version, purchase and submission all WAITING_FOR_REVIEW, still on 2026-11-07 (measured daily by the submission job). 7+ days is unusually long [guess: first review of a new account]. Next: 1.0.1 darker time/field text in the share image (robot measured 1.4:1). |
| Hourmark | Coinclock: Hours Tracker & Pay / Coinclock: Arbeitszeit & Lohn | en-US | Yearly 29.99 (7-day trial), monthly 4.99, lifetime 49.99 | 1 job, first PDF/CSV report free | Complete at Apple (texts, images, prices, purchases READY_TO_SUBMIT, build 261031.1259). First in queue after Bracket Maker. Renamed 2026-10-25 because "HourMark: 1099 Tracker" exists since 2026-04-21. Web path /coinclock/. |
| Coffer | Coffer: Collection Tracker | en-US | Yearly 14.99 (7-day trial), lifetime 34.99 | 25 entries | Complete at Apple, build 261101.815. Queue #2. Only app with iCloud sync (Pro only). |
| SlowDownMusic | Halfspeed: Slow Down Music | en-US | Yearly 12.99, monthly 2.99, lifetime 29.99 | speed, key, waveform, A-B loop, 1 saved part per song | Complete at Apple, build 261101.817, 3 purchases READY_TO_SUBMIT. Queue #3. Renamed 2026-10-26 (old name "Slow Down Music" was glued from two competitor names). Keeps "Slow Down Music" as a search term in store texts. |
| Ton80 | Ton80: Darts Score Counter | en-US | Yearly 24.99, monthly 3.99, lifetime 49.99 | X01, Cricket, Around the Clock for up to 4 players; checkout trainer, training, history are Pro | Complete at Apple, build 261101.819. Queue #4. Must have reviews before the Darts World Championship mid December. "Darts Scoreboard" was taken by another app. |
| Odograph | Gaugebook: Car Maintenance Log | en-US | Yearly 11.99, lifetime 29.99 | 1 vehicle with all logging and charts | Complete at Apple, build 261101.823, not submitted. Queue #5. Renamed 2026-10-26 ("Odograph: Drive Telemetry" appeared 2026-10-01). Web path /gaugebook/. |
| Schichtrad | Schichtblatt: Schichtkalender | de-DE (DACH only) | Yearly 9.99 (7-day trial), monthly 2.99, lifetime 24.99 | 1 rotation with calendar, holidays, hours account; calendar export is Pro | Complete at Apple, build 261101.833. Queue #6. Renamed ("SchichtRad" by another developer since 2026-04-18). Web path /schichtblatt/. Swiss cantonal holidays reviewed 2026-10-26. |
| Stitchnook | Stitchnook: Row Counter | en-US | Yearly 19.99, monthly 2.99, lifetime 39.99 | all counters, chart editor, PDF reader for 1 project | Complete at Apple, build 261101.837. Queue #7. Added crochet (market lives from crochet). |
| Breedbook | Breedbook: Dog Breeder Log | en-US | Yearly 39.99 (14-day trial), monthly 4.99, lifetime 99.99 | 1 breeding animal with all features | Complete at Apple, build 261101.1325, new logo (open studbook with paw, amber). Queue #8. Violates the 2,000 USD rule (best competitor 972 USD/month). |
| Panelwise | Panelwise: Cut List Optimizer | en-US | Yearly 19.99, lifetime 39.99 | 1 project, unlimited parts | Complete at Apple, build 261101.1335. Queue #9. Small market (active competitor 324 USD/month). |
| Clapnote | Clapnote: Rhythm Trainer | en-US | Lifetime only 12.99 | levels 1 to 3 (of 12) | Complete at Apple, build 261101.1341. Queue #10. Small market, we are the most expensive. |
| Hertzline | Hertzline: Voice Pitch Trainer | en-US | Yearly 19.99, monthly 3.99, lifetime 39.99 | live pitch, all exercises, 3 saved recordings | App entry exists, not filled. Store images 01 to 04 still show old dash texts, retake before submission. "voice pitch" search reach 0. |
| Tallybin | Tallybin: Stock & Inventory | en-US | Yearly 29.99, monthly 4.99, lifetime 59.99 | 50 items | Built 2026-10-25 (new, for one-person sellers). App entry created by Claude 2026-11-01, version 1.0 PREPARE_FOR_SUBMISSION, no build/texts/purchases yet. |
| Spurbuch | Spurbuch: Fahrtenbuch | de-DE | Lifetime only 14.99 | 20 trips (cancelled trips don't count) | Built 2026-10-25. App entry created 2026-11-01, empty. Must be live before about 2026-12-20 (people switch from the 1 % rule at year start [guess]). Never advertise "approved by the tax office". |
| Floorscribe | Floorscribe: Floor Plan Maker | en-US | Yearly 24.99, lifetime 59.99 | 3 rooms | **Paused**: whole-apartment floor plan missing (5+ days of work), LiDAR scan never tested on a device, magicplan has 41,293 ratings. Earliest after day 90. Waits for a partner link (craftsman offers). |
| Regiebericht | Regiebericht: Stundennachweis | de-DE | Yearly 79.99, monthly 9.99 | 3 reports per month | **Stopped**: "regiebericht", "stundenbericht", "arbeitsbericht" all search volume 5, reach 0, name taken (another developer at 0.99/month, ours 10x more). Only with sales via trade guilds. |
| HabitGrid | Lichters (habit app) | en | Free | | David's own app, separate rules, see `app.md`. To be submitted only around Christmas. |
| Hebel | Natural Intelligence | | Internal | | David's task app on his iPhone (section 9). Not for the store. |
| Diktat | Diktat | de | | | David's private tool: turns text into a slow dictation audio file with pauses. Never on the website. |
| LAPDesign | (Zeiterfassung) | de | | | Clickable design draft for a quote to a consulting client, invented data only. Private, never on the website. |

Queue order and dates were planned in the money plan (2026-10-25): Bracket Maker and Coinclock first, then Ton80, Coffer, Halfspeed, Gaugebook, Schichtblatt, Stitchnook, Tallybin, Spurbuch, Breedbook, Clapnote, Panelwise, Hertzline. The actual order now is the submission job's list (section 8).

Expected value per app (money plan, "middle scenario" from AppTweak ranking, all [guess]): Bracket Maker 10,103 EUR/year, Coinclock about 4,000, Halfspeed about 4,500, Tallybin about 4,500, Coffer 3,129, Ton80 2,894, Stitchnook about 2,500, Spurbuch about 2,400, Breedbook 2,017, Gaugebook 1,481, Schichtblatt 1,465, Clapnote 1,131, Panelwise 918, Hertzline 537.

---

## 2. Why apps, and the honest numbers

- Idea: many small iOS apps for proven gaps, no ads, sold only through App Store search. Each app has a free version that really does the basic job, plus Pro.
- By 2026-11-07: 14 money apps built, 1 submitted, 0 sold. Between 2026-10-13 and 2026-10-25, 131 of 171 commits went to the Lichters habit app and none to money apps (measured). Lesson: building is not the bottleneck, distribution and actually submitting are.
- Hit rate (measured from 1,611 radar search terms, 9 countries, apps 12 to 36 months old, then corrected down): of 100 new small apps, roughly **2 to 8 reach 1,000 USD/month and 0 to 1 reach 10,000 USD/month within two years** [guess, derived]. Raw US measurement was 8 of 100 over 1,000 USD/month (95 % CI 4.5 to 13.8), biased upward (survivors only, only top-3 search results).
- Ratings to revenue (fit on 43 AppTweak apps, r = 0.52, spread one order of magnitude): revenue/month ≈ 37 × US ratings^0.55. 1,000 USD/month ≈ 380 US ratings; 10,000 USD/month ≈ 24,000 US ratings.
- 56 % of apps under 12 months have 0 ratings; 28 % of apps 12 to 36 months old still have 0. The typical app earns almost nothing; the average hangs on few hits. So: get as many decent apps out as fast as possible, then find the 2 to 3 that work.
- Money plan expectation (2026-10-25): if two apps a week go out from 2026-10-27, first 90 days roughly 4,100 EUR net, range 600 to 20,000 EUR [guess]. First 1,000 USD net around early December with 8 apps live [guess]. Every week of delay costs about 400 EUR in the 90-day window [guess].
- Apple pays up to 45 days after the end of its fiscal month, so November money arrives around early January [guess].
- Rank buckets of the radar list (100 apps each, $ per year for 100 apps): ranks 1 to 300: 123k to 490k; 301 to 400: 62k to 248k; 401 to 500: 43k to 172k; 501 to 600: 21k to 84k; 601 to 700: 9k to 35k; 701 to 1000: 0 to about 10k. Order of magnitude only.

---

## 3. Choosing what to build

### Hard rule (David)
Before building, competitors must provably make **at least about 2,000 USD/month** (AppTweak "Market Intelligence" or similar). Under that for the top 3 competitors: reinterpret the niche or don't build. Exception decisions are recorded (Breedbook violates it and goes last).

### The gap method (2026-10-04, 460 searches)
- Data, all free: iTunes Search API (`https://itunes.apple.com/search?term=<term>&country=us&entity=software&limit=25`, up to 200), App Store autocomplete (`search.itunes.apple.com/WebObjects/MZSearchHints.woa/wa/hints`, yes/no plus order, no volume), review RSS (`https://itunes.apple.com/<cc>/rss/customerreviews/page=N/id=<ID>/sortby=mostrecent/json`, pages 1 to 5), App Review Guidelines, forums. Pause at least 3 s between queries.
- Key finding: real empty niches barely exist in 2026. Of 6,488 matching apps, 30 % were first released in the last 12 months, 93 % of those with under 20 ratings. In 71 % of searches there were at least 3 such newcomers. Many "tracker for X" ideas are taken by small, often AI-built apps that don't solve it well.
- Definition of a gap: proven demand (apps with many ratings, autocomplete suggestions, legal duties, forums) but weak existing apps (no update for 2+ years, bad recent ratings, data loss, too expensive, missing core feature). Newcomers without ratings count as competition for visibility, not as a solution.
- Scoring 1 to 5 each: demand N, competitor weakness K, willingness to pay Z, build effort B (5 = easy), Apple risk A, legal risk R. Gap core L = (N+K)/2, minus 1.0 if N ≤ 2, minus 0.5 if K ≤ 2. Total = (4L + 1.5Z + 1B + 1.5A + 1R)/9 × 20 (scale 20 to 100).
- Exclude: saturated categories (flashlight, wallpaper, sound effects, simple timers, horoscope, dating), calculator collections, medical/diagnosis (1.4.1), dosage calculators (1.4.2), gambling, kids category, foreign brands, apps with servers/moderation/user content, financial advice.
- Merge similar ideas into one app with modules instead of variants (4.3a).
- Find popular-but-stale apps: broad searches ("tracker", "log", "calculator", "rechner", "tagebuch") filtered to US ≥ 1,000 ratings or DE ≥ 200 ratings and no update in 2 years. This produced vehicle log (Fuelly gone), darts, rhythm, shift calendar, knitting chart, etc.
- Ratings are per country; DE counts are typically 5 to 20x smaller than US.

### AppTweak
A trial was used (ended 2026-10-11) to get August 2026 revenue estimates for 205 apps; that is the basis of the 2,000 USD checks. New apps only after a fresh paid data month; the August data covers only 205 apps.

### The daily gap radar (built, paused since 2026-11-03 to save usage)
- What it does: every night (launchd, 03:30) a script runs free Apple searches in 9 countries (US, GB, DE, FR, ES, IT, JP, BR, NL), stores results, groups candidates by identical top apps (also across countries), estimates competitor revenue from ratings and in-app prices on app pages, and writes an overview plus an "idea of the day". No Claude, no window. It runs in its own git worktree detached on origin/main (never in the working repo, so it can't touch other agents' files) and pushes HEAD:main. Settings: time limit 45 min, cache-only mode, no-git test mode.
- Data by 2026-11-03: 8,975 searches, 96,540 app entries, 3,412 app pages with IAP prices, 3,046 new candidates, 280 with rough estimate ≥ 300 EUR/year; 40 candidates with 196 terms flagged for paid checking.
- Idea-of-the-day threshold: competitors ≥ 2,000 USD/month, strongest app ≥ 10,000 USD/month, rough estimate ≥ 450 EUR/year, relevance ≥ 0.5, at most 3 strong apps in the top 6, not already built, AppTweak not negative. All EUR values are rough (factor ±10) and only for ordering; build only after paid confirmation.
- Recent ideas (2026-11-03): basketball training (competition about 34,481 USD/month), stamp collection, plant watering calendar, French sign language, family tree maker, countries visited tracker. 159 candidates above threshold were open; 20 handed out, 0 built.

### Decided against (with reasons)
- Beekeeping log: market doesn't pay (24 and 475 USD/month).
- Sight-reading trainer: tiny market (187 and 114 USD/month), and a third music app (4.3 risk).
- Ham radio log: no revenue data, measured reach 0.
- Cash book: no revenue data, GoBD liability.
- Shot list: best competitor about 250 USD/month, market leader 204 US ratings in 14 years, search volume 5.
- Tip tracker (better as a Coinclock feature), beer brewing (volume 5), Dry January, exam trainer, grade calculator, reward chart, singing trainer (fourth music app).
- Garden planner: real (Planter 2,210 USD/month in August = off season), but build in January, live by February 1.

---

## 4. The pipeline, step by step

This is the order for a new app. Each step has a tool (section 6) and a lesson behind it (section 21).

1. **Market check**: competitors ≥ 2,000 USD/month. Save the 5 strongest competitor logos and first store screenshots (iTunes API `screenshotUrls[0]`), read their reviews.
2. **Name check**: the name must not exist as a first word of another app in US, DE, GB (iTunes search). Also check trademark registers (DPMA, EUIPO, USPTO). Re-check right before submission: names get taken while you build (Odograph, Hourmark, Schichtrad all collided).
3. **Create the app** from the Kit template: name, slug, primary and accent color, display name. This creates sources, tests (smoke tests, StoreKit primer, store tests), legal texts, privacy manifest, asset catalog, `app.json`, and generates the Xcode project.
4. **Own welcome screen, own navigation, own core feature** (4.3 defense, section 16). Pro offer once right after the welcome.
5. **Design recipe** (section 12): run the design check, auto-fix the mechanical things, fix the rest by hand, switch every color to Apple system colors.
6. **Logo** (section 13): SVG layers plus spec with rule 2, build three variants, pick via the competitor-row test.
7. **Launch screen** without logo, build number +1.
8. **Texts**: German and US English, then other languages via mapping files (section 18). No long dashes anywhere. Plurals with stringsdict. First-time-user read (section 19).
9. **Store texts** (`store/texte.md`): name ≤ 30, subtitle ≤ 30, keywords ≤ 100 UTF-8 bytes, promo text ≤ 170, description ≤ 4,000, review notes ≤ 4,000, purchase name ≤ 30, purchase description ≤ 45. Free and Pro list exactly as the code locks things.
10. **Store images** (section 14): demo data, raw shots per language on the app's own simulator, frames, look at every single image.
11. **Paywall review screenshot** for Apple from a StoreKit test session, 1320x2868, prices visible.
12. **Tests**: all tests, purchase tests separately (section 11).
13. **QA**: code rules, tests, test robot that taps everything with Pro and free, contrast measurement. Zero errors or every error gets a line in the bug memory.
14. **Sales checklist** (in `app-factory.md`): 5-second feature, two-sentence description, user puts in something of their own before the paywall, used ourselves first launch to purchase, second reviewer grades 1 to 5, three logo motifs, no foreign characters or brands in AI images.
15. **Website**: rebuild support, privacy and imprint pages, publish, check live with curl.
16. **Register bundle IDs** (app plus widget IDs) via API.
17. **Create the App Store Connect app entry** (only the web can; we do it through the logged-in browser tab, section 7).
18. **Fill App Store Connect** with the fill script: dry run, then write, then a read-back dry run that must show 0 write calls and 0 errors.
19. **App privacy** "Data not collected" (via browser session script) if true.
20. **Upload the store build** (archive and export with App Store options, build number = date.time), attach it to version 1.0, wait until VALID.
21. **Submit**: purchases and version into a draft review submission, then submit (section 7). Only with David's standing yes (section 8).

---

## 5. The shared Kit (rebuild guide)

- Local Swift package, iOS 18+, no third-party dependencies, default isolation MainActor. The package is called "AppKit" but the module is **FabrikKit**, because "AppKit" collides with Apple's macOS framework.
- **The Kit is only technology.** Every app needs its own design, core feature, navigation and texts (Review 4.2, 4.2.6, 4.3). Never ship two apps with the same look or screen structure.
- Folders:
  - Theme: palette, typography, metrics, `.fabrikRoot(theme:store:onboarding:paywall:)`, button styles, Apple-style building blocks (SettingsIcon, SettingsLabel, ProminentButtonLabel, CloseToolbarButton, ConfirmToolbarButton, `.prominentActionButton()`, keyboard Done button).
  - Purchase: `PurchaseConfig` (lifetime plus subscriptions, free limits, featured product = preselected), `PurchaseManager` (isPro = active subscription OR lifetime; free trial eligibility; buy; restore returns an outcome so "cancel" is not "restored"), `PaywallView` and texts (Apple's required 3.1.2 texts incl. trial end, "7 days free" badge, monthly price and saving on the yearly), `UsageCounter`, `TrialReminder` (local notification 2 days before trial end, only if notifications are already allowed).
  - Onboarding: standard 1 to 4 pages, or custom welcome via `fabrikRoot(...) { finish in OwnWelcome(onFinish: finish) }`; the Kit handles "show once" and the Pro offer after it. Attach the app's `.environment(...)` AFTER fabrikRoot, otherwise a welcome that reads it crashes.
  - Settings: Pro status, restore, data export, support mail plus copy, rate, privacy/imprint/EULA, version, "redeem code", "recommend app", "more apps from us" (only fitting own apps).
  - Export: SwiftUI to multi-page PDF, PDF preview (pinned to top for short documents), CSV (semicolon plus BOM, import with detection), share sheet, mail composer, camera picker.
  - Signature pad (own canvas, always black on transparent).
  - Storage: SwiftData container (local, optional CloudKit), document numbers.
  - Legal: placeholders [APP] [NAME] [ANSCHRIFT] [E-MAIL] filled from one provider config; markdown document view.
  - Templates: legal markdown, privacy manifest (no tracking, UserDefaults reason CA92.1), app template, test templates.
  - Also: `ReviewPrompter`, `SharePrompter`, `MadeWith`, `PracticeStreak`, `valueSummary`, `Surprise`/`Secrets`, `PartnerOffer`, `OurApp` list.
- DEBUG launch arguments: `-FabrikInMemory YES`, `-FabrikDemoData YES`, `-FabrikForcePro YES`, `-FabrikSkipOnboarding YES`, `-FabrikResetOnboarding YES`, `-FabrikShowPaywall YES`, `-FabrikSurprise <id>`, `-FabrikPartnerPreview YES`. **Gotcha:** `-FabrikForcePro YES` is saved in the app's UserDefaults; every test that builds a PurchaseManager must delete that key first, otherwise purchase tests start as Pro.
- Project generation from `app.json`: display name, slug, web slug, developmentRegion, deviceFamily ("1" = iPhone only for 1.0; iPad can't be removed later once shipped, so add it in 1.1), products and subscriptions with prices, periods (P1M, P1Y) and trials (P1W, P2W), Info.plist keys, `"widget": true` (extension plus app group), `"icloud": true`, `"privacyCollectedData"` (checked: data type, purpose, linked, tracking; tracking forbidden), `"formerNames"`, `"distanceUnit"`, `"privat"` (never on website), `"territories"`. The generator also writes the `.storekit` test file so it always equals app.json.
- Paywall layout rule (2026-10-25): with more than one product, product cards and trial are directly under the header, features below. The purchase area sits in a VStack BELOW the scroll view (not as safeAreaInset over it, long lists ran under it). Close button visible immediately. Pill "Popular" or "save 49 %" on the preselected product. Lifetime-only apps show big "Pay once. No subscription. Forever." Trial line "We remind you 2 days before the end" plus mini timeline Today, Day 5, Day 7 (fear of subscription traps is constant in competitor reviews).
- **Grace period bug (fixed 2026-10-25, applies to anyone rebuilding):** never drop a transaction just because `expirationDate < now`. StoreKit still delivers auto-renewing subscriptions in billing grace period in `currentEntitlements` with a past expiry. Auto-renewing subscriptions count without a date check; check the date only for non-renewing ones.
- In the StoreKit test environment `Product.price` with a German locale has no decimals (24 instead of 24.99); `displayPrice` is right.
- Kit tests cannot run with `swift test` (command-line Swift too old, no UIKit on macOS). They run via `xcodebuild` with destination Mac Catalyst (43 tests). The notification center needs an app bundle, so `TrialReminder.cancel()` only touches it inside an .app/.appex. Also it must never call `removePendingNotificationRequests` on the main thread at launch (watchdog 0x8BADF00D killed a test runner after 10 s).

---


Part 1 of 4 of "App factory: the full manual (how we build, test, ship and submit iOS apps)". Map of all parts: https://dlichters.com/ai/ourrules/app-factory-full.md · Next: https://dlichters.com/ai/ourrules/app-factory-full/02-6-tools-what-they-do-so-they-can-be-rebuilt.md
