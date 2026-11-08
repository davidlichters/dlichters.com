<!-- split-map -->
# App factory: the full manual (how we build, test, ship and submit iOS apps)

When to read this: before any work on our iOS apps (building a new one, fixing one, store images, App Store Connect, submitting), or when you need the status of an app. The short version (until 2026-11-07 the page `app-factory.md`) stands right below under "Short version"; the pages are the complete one and is written so the work can continue even if the repo is gone.

Stand: 2026-11-07. Source: the app factory repo (rules file, handover, design recipe, bug memory with ~190 entries, money plan, sales checklist, research, tool headers, submission log). "Measured" means it was measured in a file or log; "[guess]" means the source marked it as an estimate.

## Short version (moved here from ourrules/app-factory.md on 2026-11-07)

> We build many small iOS apps for proven gaps in the App Store, without ads, sold only through App Store search. 14 apps built by November 2026. The lesson so far: building is not the bottleneck, distribution is.

### Before building

- Only build where competitors provably make at least about 2,000 USD a month (measured with an app-store data tool).
- Submit 2 apps a week; similar apps spaced apart, so Apple doesn't treat them as spam (guideline 4.3).
- Never use straw-man or relatives' accounts to get around spam rules. A developer account needs a real adult owner with correct details.

### Design rules

- Inside, the app looks like Apple's built-in apps (Settings, Reminders, Timer). If a specific Apple screen is named, rebuild exactly that one.
- Only Apple system colors through the API, never hex values. All buttons in system blue.
- Colored text only on a light tint; on full color, text is white. No thin fonts.
- Always compare side by side with real Apple apps, light and dark mode.
- Logo: one shape showing what the app does, readable at 60 px, background a full gradient in the brand color or black, never a white tile. One brand color per app, used in logo, store headlines and accents. Build three logo options and pick the best next to the five competitor logos; it may not be the palest or least readable in that row.
- Launch screen without a logo (iOS caches it, and an old logo kept appearing).
- Store images light, with a realistic iPhone frame. The first image shows the one feature a stranger gets in 5 seconds.

### Money rules (free and Pro)

- The Pro offer appears once, after the welcome screen.
- Exactly one value-based free limit that a user reaches in the first days. No nagging after that.
- Ask for reviews only with Apple's own dialog, after positive moments: 3 requests in the first month, at least 6 days apart. Never a custom "rate us 1 to 5" pre-question (forbidden by Apple, guideline 5.6.1, and filtering bad reviews is misleading).
- Revenue before reviews: don't change something for a few reviews if it costs sales.
- No data sales, no ads in apps.
- Price decisions come with a chart: revenue against churn, with the break-even point and sources.

### Quality system

- Every bug found gets an automatic check (code pattern, UI robot or design check) so it never comes back in any app.
- Before showing an app: code rules, tests and a test robot that taps everything, cancels everything and measures contrast.
- Check the real first launch: delete, install, tap through.
- Real lessons: a "restore purchases" cancel showed "your purchases were restored" (an error was swallowed); a button inside an overlay above a list did nothing; store screenshots showed an old version because the script used another simulator; a subscriber in Apple's billing grace period would have lost Pro.

### Distribution checklist before every submission

1. Which ONE feature does a stranger understand in 5 seconds? Store image 1 shows it.
2. A two-sentence description: what it does, for whom.
3. Before the one-time Pro offer, the user has already put something of their own in.
4. We used it ourselves like a customer once, first launch to purchase.
5. A second reviewer graded store images, first launch and checkout 1 to 5; anything under 4 went back.
6. No AI image shows someone else's character or brand.

### The Lichters app itself

How it works: https://dlichters.com/ai/app.md


**This chapter is split into 4 pages of at most about 4,000 words so an AI can open exactly the part it needs. Pick the page whose headings match the question, open it, and answer only from what it says.**

1. https://dlichters.com/ai/ourrules/app-factory-full/01-contents.md (3,626 words)
   Contents · 1. Status of every app (2026-11-07) · 2. Why apps, and the honest numbers · 3. Choosing what to build · Hard rule (David) · The gap method (2026-10-04, 460 searches) · AppTweak · The daily gap radar (built, paused since 2026-11-03 to save usage) · Decided against (with reasons) · 4. The pipeline, step by step · 5. The shared Kit (rebuild guide)
2. https://dlichters.com/ai/ourrules/app-factory-full/02-6-tools-what-they-do-so-they-can-be-rebuilt.md (3,625 words)
   6. Tools (what they do, so they can be rebuilt) · 7. App Store Connect · Access · What only the web (or the web's internal API) can do · How submission works in 2026 (done for Bracket Maker on 2026-10-31) · Gotchas measured · Settings David should switch on per app (recommended 2026-10-12) · 8. Submission cadence and the daily submission job · 9. TestFlight, real-device installs and the Natural Intelligence app · 10. Simulators and Mac limits · 11. Testing: StoreKit tests, robot, QA · StoreKit purchase tests (the hardest part, all measured) · Test robot · Real first launch
3. https://dlichters.com/ai/ourrules/app-factory-full/03-12-design-rules-beyond-the-short-file.md (3,480 words)
   12. Design rules beyond the short file · 13. Logo rules in detail (rule 2, since 2026-10-24) · 14. Store page rules · Texts · Images (stage style since 2026-10-25) · Paywall review screenshot (for every purchase) · 15. Money rules in detail · 16. Defense against Apple's spam rule 4.3 · 17. Extras inside apps · 18. Localization rules · 19. First-time-user rule ("I don't understand anything") · 20. Website dlichters.com
4. https://dlichters.com/ai/ourrules/app-factory-full/04-21-bug-memory-every-lesson-grouped.md (2,464 words)
   21. Bug memory: every lesson, grouped · Purchases and paywall · StoreKit and tests · UI behavior · Numbers · Texts and languages · Store images · Logos and icons · Names and website · App Store Connect tooling · Mac and agents · 22. How Claude works in the factory · 23. Human-only steps and what is already done · 24. Open items as of 2026-11-07 · 25. Lichters habit app (Lichters: Habit Tracker, HabitGrid): how it ships and when it is submitted, CloudKit container gotcha (iCloud.com.lichtersapps.habitgrid), HabitGrid origin with David's seven habits S F M B D T G, Money Idea privacy decision (option A, support copy, never "only you") (moved here from ops/gaps-3-1.md, 2026-11-07)
