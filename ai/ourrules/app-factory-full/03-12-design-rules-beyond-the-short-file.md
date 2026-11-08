<!-- part of ourrules/app-factory-full.md -->
Part 3 of 4 of "App factory: the full manual (how we build, test, ship and submit iOS apps)". Map of all parts: https://dlichters.com/ai/ourrules/app-factory-full.md · Previous: https://dlichters.com/ai/ourrules/app-factory-full/02-6-tools-what-they-do-so-they-can-be-rebuilt.md · Next: https://dlichters.com/ai/ourrules/app-factory-full/04-21-bug-memory-every-lesson-grouped.md

## 12. Design rules beyond the short file

- Models to copy: Bracket Maker (light) and Ton80. Settings-style lists (`List` + `.insetGrouped`), rows with colored symbol tiles (each row its own color), sheet toolbars with ✕ left and ✓ right (glass on iOS 26), big in-screen buttons via the prominent style, empty states via `ContentUnavailableView` with one short sentence and one button, segmented picker in the top accessory for switching views, Apple's TabView for main areas.
- Theme: system colors plus ONE accent; heading weight bold; corner radius 14; no borders. Remove custom navigation bar appearances and custom fonts.
- Light or dark: follow the system. Forced dark only if the app runs almost only in dark rooms AND competitors do it (Ton80 was forced dark, switched to system because the strongest competitor with 24,800 ratings is light).
- App name on screen = normal large navigation title, never a logo word, no gradients or rainbow on text, no uppercase wordmark.
- Status colors fixed: green done/success, red delete/error, orange warning.
- Hex only for logos and PDFs, then David's values: blue #0091FF, green #32D15A, red #FF4245, orange #FF9200, yellow #E4AF0A, indigo #787AFE. No colored glows, no gradient backgrounds in the UI.
- Text: system font with text styles, no italics, no black/heavy, no thin/light, no uppercase headings. In list buttons `.primary` becomes the accent color, use `Color.primary`.
- Shadows/gradients behind white text use fixed `Color.black.opacity(...)`, never the text token (it turns white in dark mode).
- Glass APIs only behind `if #available(iOS 26, *)`; apps run from iOS 18.
- Touch targets at least 44 × 44 pt even if the visible button is smaller.
- Never draw an action as a checkmark when a checkmark elsewhere means "done"; never distinguish states by color alone.
- Empty values "--" (like Apple Fitness), ranges "15-20", scores "2-1", never long dashes.
- Every sum equals the displayed rows: round each row to the displayed precision first (minutes, cents/smallest currency unit), then add. Every amount = displayed quantity × rate, computed from the already rounded minutes or whole seconds. Demo rates in whole cents per minute ($24/h, 16.80 €/h).
- Number and label separated (stat tile): choose singular label for 1.
- Date columns with equal digit counts ("Tue, 09/01" under "Wed, 09/30").
- Charts with a legend must add up to the total: from the 6th group on everything goes into "Other" (grey) in ring and legend.
- Keypads grow into free space on big iPhones (min/max height, bottom-aligned), no Spacer gap.
- Search visible: on iOS 26 a search toolbar item at the bottom bar; before, navigation bar drawer always displayed.
- After denying a permission: only a calm hint on screen, no second dialog. Ask microphone permission BEFORE starting the audio engine (Clapnote crashed in AURemoteIO).
- Menus with icon-only labels have no accessibility name on iOS 27: use `Menu("Title", systemImage:)`.
- Never `isPresented: .constant(...)`. Never a button in an `.overlay` over a `List` (it does nothing). Never mix `navigationDestination(isPresented:)`, item and value destinations in one stack: one path, every push a value.
- If a specific Apple screen is named ("Timer"), rebuild exactly that one; find a picture ("iOS 26 <app> <screen>"), copy the structure (Coinclock clock = Apple's Timer counting up), put it next to the original. On 2026-10-09 a stopwatch was built instead of the timer and David was annoyed.
- Prints/exports: light and plain (app icon, bold title, grey details).
- Don't change revenue-relevant things (paywall, prices) because of complaints; only take free improvements and arguments.

---

## 13. Logo rules in detail (rule 2, since 2026-10-24)

- Why it changed: next to competitors our logos looked cheap. All followed one recipe (white tile, one pastel object), white disappears on the white store page. Competitor comparison 2026-10-24: average logo score 4.5/10, store images 4.4/10, while UI scored 6.2 and features 5.8. 7 of 15 logos were the palest or least readable in their competitor row.
- Motif shows the app's job and is recognizable at 60 px (dartboard or dart, yarn ball with needle, habit grid, bracket). Nothing that looks like an Apple app (green rings = Fitness, stopwatch = Timer, half circle = contrast icon, white note on red = Music).
- Background: full gradient in the brand color or black (like Messages, Wallet, Fitness). Never a white or pale tile. Lighter at top, stronger at bottom, slightly angled.
- Tilted, asymmetric and up to two overlapping parts allowed; each part its own glass group with its own shadow.
- One brand color per app, the same in the logo, the store headlines (frames.json accent) and accents. Each app a different color family (warning 2026-10-25: Clapnote and Bracket Maker were almost the same orange; with Breedbook and Halfspeed the developer page looked like a template series again).
- Filled shapes, no outlines. White line drawings on color = "Samsung, cheap" (verdict 2026-10-09 by the founders). A white filled motif on color is fine.
- No `fill="none"` in SVG layers: Xcode builds the iOS 18 icon from the same icon file and fills such shapes (microphone arc became a bowl). Draw strokes as lines with round caps or as filled shapes.
- Don't hide anything behind a translucent part; it shows through like a stain.
- Small marks on a colored shape are not pure white (Apple tints white layers in dark mode; a white check became blue on green). Large light areas with dark parts on them need a dark-mode fill (`fill_dark`).
- Motif fills 60 to 75 %, centered, round corners, no thin lines, no text, no SF Symbols (license). No own shadows/highlights; Apple's glass does it. Never a flat PNG as the logo.
- Colorful motifs on dark: colored soft shadow and translucency 0.2, else colors look dull.
- Mandatory test: the competitor row at 60 and 180 px, light and dark; ours may be neither the palest nor the least readable. Look at it yourself: at 60 px, do you know what the app is for?
- Build three motifs, pick the best with one sentence of reason (sales checklist).
- What the founders liked before rule 2: trophy, box, paw, waveform, paper on yellow. What failed: weird motifs (Stitchnook looked like a beach ball, Coffer like a moving box, Schichtrad like a dark-mode switch).

---

## 14. Store page rules

### Texts
- Primary language en-US for international apps; Schichtblatt, Spurbuch, Regiebericht are DACH only (German first, English only as translation).
- US English everywhere in app and store: organize, color, center, license, practice, canceled, cataloged, favorite, gray, "pay stub" not "payslip", "soccer" not "football", "70%" without space. British spelling is an error in name, subtitle, keywords, promo, image texts and description.
- German "buchen" is never "book" in English (log, update, add, take out, apply). German "Zuschlag" on US payroll is "night differential", "Sunday premium", "holiday pay", umbrella "premiums".
- No foreign brands (LEGO, Pokémon, "supershift") in name, subtitle, keywords, promo or image texts (2.3.7, 5.2.1); hint level in description.
- No long dashes anywhere (David's rule: they look like AI). Comma, colon, period instead.
- Never "No subscription"/"Kein Abo" in an app that sells subscriptions; never "No cloud"/"stays on your device" in an app with iCloud sync; "No ads" warning for apps with partner offers; never "mileage"/"miles" in a km-only app.
- The free/Pro feature list follows the code: every Pro line must have a lock in the code (`isPro`/`allows`); "All future Pro features included" instead of selling free things as Pro. Every line with a Pro keyword above "FREE AND PRO" must say "(Pro)" (2.3.2).
- Review notes are written from the code, not from memory (Coffer's note described a paywall that didn't exist).
- Never claim iPad when 1.0 is iPhone only.
- ASO keyword examples (money plan): Coinclock `gig,work,shift,overtime,punch,calculator,timecard,earnings,salary,job,break,hourly,paycheck,in,out`; Schichtblatt `wechselschicht,konti,4-schicht,pflege,polizei,nachtschicht,feiertage,zuschläge,rhythmus,urlaub`; Bracket Maker `elimination,double,league,schedule,fixtures,seeding,draw,group,pickleball,cornhole,chess,pong,darts`. Don't repeat words from name and subtitle.
- Store title pattern: 2 lines, second line = keyword. Name like "Brand: keyword phrase".

### Images (stage style since 2026-10-25)
- Apple size 6.9 inch, 1320x2868. Brand-color gradient background, ONE white headline with at most 5 words, no subline, at most one pill or one tag. Phone at the same top position in every image, bleeding off the bottom (`phone 1100, top 720`; or the light large-crop layout `title 128, sub 54, phone 1060, bleed`). All headlines of one language in ONE size (the largest where all fit, max 176 px); shorten the one title that limits it.
- Pill: white with text in a darkened brand color, at least 4.5:1, at most two short facts ("8 teams free · No subscription"). Tag "With Pro" only above a headline that names a Pro feature (2.3.2).
- Image 1 shows the one feature a stranger gets in 5 seconds and must be readable in the search list. If an image shows more than the free version allows, image 1's pill names the free limit.
- Crop edge: no text line cut, no line within 8 pt of the edge, a list ends after a complete entry (no time header without matches), a scrolled list starts with a section header, never a half-hidden header under the bar, a bottom bar is fully in or fully out. Fix by scrolling inside the app (debug launch args), never by moving the phone. Negative launch-arg values need quotes (`'"-69"'`), otherwise UserDefaults treats them as a key.
- Demo data: only what the free version can do (else tag "With Pro"); realistic (shifts with 8 h rest, holidays only on real holidays, plausible darts averages: 0.5 % 180s, checkout rate 12 to 40 %); invented names, never celebrities ("Alex Morgan" was a footballer); German images with German names; same totals in every image; fixed demo dates with a fixed "today" the app clock jumps to (Sunday 2026-10-25 09:41), not "now minus x"; daytime timestamps; valid barcode check digits; recognizably invented addresses ("Musterstraße 1", "Beispiel AG"), never the real imprint address (it once leaked into demo data); real-looking photos where users take photos (SceneKit renders without brands or text, only in debug builds).
- Status bar: 9:41, full bars with cellular mode active (else grey dots); retake shots where the Dynamic Island is animating. App time zone set so the app also shows 9:41; Monday week start via `-AppleLocale "en_US@fw=mon"`.
- Look at every raw image and every final image. Sheets sometimes don't open under load. Nothing is recorded while something else builds.
- After every text change, retake all store images (new explanation lines push lists under the crop edge).

### Paywall review screenshot (for every purchase)
- Must show the buy button and prices, never "App Store not reachable", "Try again", "Pro is active". Recorded from a StoreKit test session in a test, on an iPhone 17 Pro Max at exactly 1320x2868, light, US storefront and `-testLanguage en -testRegion US` (else German date formats). Minimum width for Apple 640.
- Scroll anchor depends on the list length: center for most, `UnitPoint(x: 0.5, y: 0.3)` for long Pro lists (Breedbook); check that the title isn't blurred under the scroll edge and the close button isn't on a price.

---

## 15. Money rules in detail

- Pro offer once directly after the welcome, with trial, easy to dismiss. Then only at the free limit, with a reason ("Your second project is Pro").
- Free really does the basic job (people stay and rate well). No ads, no nag pop-ups, no waiting.
- Exactly ONE value limit that normal users reach in the first days (Coffer: 100 entries nobody reached → 25). One-off apps (one tournament) charge at first real use; daily apps run free longer, Pro sits on history, stats, multiple projects.
- Apps with a clear paywall convert about 5x more downloads to purchases (RevenueCat, quoted in the design recipe). Most purchases happen on day one.
- The limit is named like what is counted (Coffer counts entries, not pieces: "25 entries free" everywhere, one word per language).
- **Backup is never the paid report:** "Export data" in settings stays free and unlimited (never lock data in), but writes the app's own full JSON, not the timesheet/CSV that is sold. If import/export is Pro, there is still a free backup with restore.
- Model: yearly with 7-day trial plus lifetime; monthly as an anchor for music, darts, knitting, hours. Lifetime-only where competitor reviews reject subscriptions (Bracket Maker, Clapnote) or where lifetime is the gap (Spurbuch: competitor sells 8.99 € without trial; Vimcar/Driversnote sell subscriptions).
- Price justifications always come with a chart (David, 2026-10-13): break-even curves, assumptions and sources visible.
- Break-even lifetime vs yearly: renewal rate r where yearly equals lifetime is r = 1 − P_year / P_lifetime. Coinclock 40 %, Schichtblatt 60 % (open-ended). Below that lifetime earns more per buyer. Real renewal is more like 30 to 50 % [guess].
- **Net per EUR price in Germany: price / 1.19 × 0.85 = 71.4 %** (Apple remits 19 % VAT and takes 15 % of the net under the Small Business Program). 49.99 € → 35.71 €. An early chart forgot the VAT (42.49 instead of 35.71).
- Without the Small Business Program Apple takes 30 % in year one and on lifetime, 15 % from year two of a subscription.
- Pricing anchors used: Coinclock both market leaders 29.99 $/year; Ton80 under DartCounter 39.99 $/year; Schichtblatt monthly as anchor ("72 % cheaper"), lifetime 15 € under Supershift (39.99 €), Supershift proves 33,775 ratings at 9.99 €/year; Bracket Maker half of the cheapest competitor lifetime (20 $).
- Checkpoint after 60 days live: real conversion and revenue per download per app, then recalculate prices.
- Revenue before reviews: never change something for a few reviews if it costs sales.

---

## 16. Defense against Apple's spam rule 4.3

The biggest risk: many apps from one kit on one account. Apple rejected 1.93 M of 7.7 M submissions in 2024 and terminated 146,747 developer accounts; only 421 of 26,224 appeals succeeded (AppleInsider, 2025-05-30).
- Every app: own welcome (e.g. Panelwise plan builds itself plus unit question; Floorscribe floor plan draws itself; Clapnote three swipe pages; Hertzline goal choice like Health), own navigation (list / card grid / tab bar / single screen / player), own logo color, own category for similar apps (Halfspeed = Music, Clapnote = Education, Hertzline = Health & Fitness), own data model and screenshots.
- Max 2 submissions per week, similar apps at least two weeks apart.
- Never straw-man or relatives' accounts to get around it. An account needs a real adult owner with correct details. No fake reviews, no bot profiles, no fake ID.

---

## 17. Extras inside apps

- **Reviews:** only Apple's dialog via the Kit after positive moments, 3 requests in the first month, at least 6 days apart. Every app needs at least one positive moment. Never a custom "1 to 5" pre-question (5.6.1, and filtering bad ratings misleads).
- **"Made with <App>" block** on every PDF and image export (symbol, sentence, benefit, QR to dlichters.com/<slug>), always on for free, switchable off with Pro. Rare "Do you know someone..." share prompt (max 2x). Settings "Recommend app" and "More apps from us" (only fitting own apps; add store IDs once live). Ton80 "Share result" card, Bracket Maker "Share results" in the winner banner.
- **Easter eggs / secrets** (David, 2026-10-27): only in hobby apps Ton80, Bracket Maker, Clapnote, Stitchnook, Halfspeed, Coffer, Hertzline, and Floorscribe (stick runner). Never in work apps Coinclock, Schichtblatt, Gaugebook, Breedbook, Panelwise, Regiebericht: people logging wages, shifts, cars, breeding or construction want a serious tool. Celebrations: Ton80 180 (gold on the third), Bracket Maker winner crown, Stitchnook cat at goal.
- **Retention:** practice streak with pause day (Clapnote, Hertzline, Halfspeed, Ton80 training, Stitchnook), value summary 14 days before subscription renewal (all apps), reminder the evening before a shift (Schichtblatt), widgets (Schichtblatt, Gaugebook, Stitchnook, streak widgets), Siri shortcuts (clock in/out, count row, shift tomorrow), Live Activity for a running shift (Coinclock), "Redeem code" in all subscription apps. Year-in-review open (useful from December).
- **iCloud sync** (Pro, opt-in) only in Coffer so far. Before rolling out: test on a real iPhone plus iPad with the same Apple ID; every model field optional or with default, every relationship with an inverse, no `.unique`; update the privacy text.
- **Partner offers** (decided 2026-10-11): no ads, no data sales, except one partner moment per app, always labeled "Anzeige"/ad, no data to the partner, DE/AT only. Floorscribe: craftsman quotes after measuring (partner program sign-up is human-only, link not entered yet, invisible until then). Breedbook's insurance tip was dropped on 2026-10-26 (no real partner).

---

## 18. Localization rules

- Languages: de, en, plus es, fr, it, pt-BR, nl, ja for international apps; DACH apps only de and en.
- Texts live in mapping files per language (`Localization/<lang>.py`) and are written into .strings with the strings tool; never edit .strings directly (a later write would silently delete those entries; it now aborts instead).
- Plurals always via stringsdict ("1 shifts", "1 Tage" bugs everywhere). In the Kit there is no stringsdict, so use explicit singular keys. Number-label tiles choose the label by count.
- `Text(a + "...\(n)")` with a concatenated string goes into Text literally and is never translated: use `String(localized:)`.
- Widgets and extensions need every language folder the app has, otherwise iOS shows them in the development language.
- Proper names with an English exonym are translated (Bavaria, Geneva, Ticino).
- Shift codes and abbreviations per language (E/L/N in English, not German F/S/N); PDF legend letters must match the column letters per language.
- Date formats: use local time zone, never `.iso8601.year().month().day()` without time zone (a trip at 00:30 Berlin landed on the previous day); timestamps carry the offset.
- After each translation, look at that language's store images (Dutch "Undo" and "Reset" both became "Herstel"; German "Zurücksetzen" wrapped).
- Japanese and French get cut most often.

---

## 19. First-time-user rule ("I don't understand anything")

- 2026-10-27, Bracket Maker on TestFlight, David: "I don't understand anything, what does this mean. Do you think people using the app know what all this is?" Then: "What is the app for, what do you do with it and for which people? Tennis players? I understand nothing."
- Rule: the first welcome line names purpose, audience and the first tap ("Plan a tournament" for game night, club, office, school; empty start page "Your first tournament" with examples: foosball, darts, chess, table tennis, video games). Jargon only in brackets after an everyday word ("Knockout with second chance (double elimination)", "Everyone plays everyone (round robin)"). Pictograms instead of meaningless SF Symbols. Legends under tables. Tests enforce "jargon only in brackets" and "welcome says what and for whom" in all languages.
- Applied 2026-11-01 to Gaugebook ("The log for your car", explain partial fill-up, charge target, mpg, L/100 km), Schichtblatt (nursing, police, industry, rotating shifts; explain balance, premiums, codes; English "rotation" not "rhythm"), Stitchnook (knitting AND crochet, beginners too; write out RS/WS, sts; counter says "Rounds" for projects in the round), Breedbook (all 8 languages), Coinclock (explain US payroll terms next to them, no "mini-job" in US texts).
- Read every new text as someone who has never done the activity.

---

## 20. Website dlichters.com

- Domain bought 2026-10-11 at checkdomain. Hosted via a public GitHub Pages repo with a CNAME; HTTPS working since 2026-10-25 (certificate approved after clearing and re-setting the custom domain via the GitHub API, then "enforce HTTPS"). The domain hung in ICANN registrant verification until the verification mail link was confirmed on 2026-10-22.
- Per app: support page `/<slug>/` (= Support URL), `/privacy/`, `/datenschutz/`, `/imprint/`, `/impressum/`. Apps with a web slug (coinclock, halfspeed, gaugebook, schichtblatt) get the pages at the new path, the old path stays with canonical.
- Support mail support@lichtersapps.com. Provider name "David Lichters" (corrected at Apple by 2026-10-31 from a typo "Lichtera"; the typo never blocked submission).
- Privacy link in app and App Store Connect by user language: German `/datenschutz`, otherwise `/privacy`.
- The build is committed in the private repo but only mirrored to the public site by a separate push: before each submission, curl the live privacy page and check it contains the current text (Coffer's live page still said "stays on your device" while the repo was correct). A bug-check rule fails if the website lags behind the app's legal or store text.
- `/ai/` on this domain is the AI knowledge page you are reading.

---


Part 3 of 4 of "App factory: the full manual (how we build, test, ship and submit iOS apps)". Map of all parts: https://dlichters.com/ai/ourrules/app-factory-full.md · Previous: https://dlichters.com/ai/ourrules/app-factory-full/02-6-tools-what-they-do-so-they-can-be-rebuilt.md · Next: https://dlichters.com/ai/ourrules/app-factory-full/04-21-bug-memory-every-lesson-grouped.md
