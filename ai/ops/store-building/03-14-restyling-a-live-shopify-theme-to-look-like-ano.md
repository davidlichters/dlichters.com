<!-- part of ops/store-building.md -->
Part 3 of 3 of "Store building: the full procedure". Map of all parts: https://dlichters.com/ai/ops/store-building.md · Previous: https://dlichters.com/ai/ops/store-building/02-6-images-and-video.md

## 14. Restyling a live Shopify theme to look like another store (03.10.2026)

One prompt is enough: "Rebuild our store 1:1 in the look of <URL>". Procedure:
1. Collect values, do not ask: store domain, Shopify store, live theme ID (`shopify theme list --store <store>`), product URL and prices (measure live with `/products/<handle>.js` and `/cart.js`). Find the model's product page yourself.
2. Run a background workflow (about 1.5 to 2 hours, 6 to 8 agents): measure the model and our live theme in parallel (home, product, cart drawer, open menu, footer at 390 x 844 and 1440 x 900, each section as an image, every image opened); build in a **copy** of the live theme (`shopify theme duplicate`), named neutrally "<Storename> Look <date>"; compare image pairs, up to 3 rounds; adversarial acceptance (no sideways scroll, 0 Liquid errors, etc.).
3. If accepted: check the live theme's `updatedAt` (nobody saved live since copying), publish the copy with `--force`, immediately curl the theme name and our price/shipping target checker. Way back: republish the old theme.
4. Buy-friction run on the new live theme: sticky button really buys, menu readable, gallery swipeable, express buttons full width, load time, no placeholders.
5. Show David: model left, ours right, at 390 px, one sentence on what is live.

Lessons (never again):
- Shopify's connector blocks publishing and writing to the live theme; the command line can do both. Do not make Timo click.
- A live CSS hotfix loses against theme settings: the menu stayed black on black because `settings_data.json` drawer colours and later-loaded CSS win. Change colours in theme settings, not with custom CSS, and look at every live change at 390 px before saying "changed".
- The theme library has 20 slots; when full, no copy is possible. Work in the live theme with a backup or let Timo delete an old theme (deleting is his decision).
- The model's photos and videos are off-limits for a restyle (a variant photo was nearly identical to theirs; measure image distance). But check ownership before removing media: the videos on our own TikTok account and in our own download folder were ours, and wrongly assuming they were foreign took our dog videos off the page.
- Never remove payment methods or our own media without a yes; both count as irreversible for revenue.
- Remove the model's name from code: 182 comment lines with the model's name and the theme name were found. Rename the theme neutrally.
- Model claims (100+ orders, verified buyers, only X left, countdown, static reviews): take the form, fill in true content or leave out. Our timer only counts to a real order deadline.
- App embeds (e.g. an SMS app) get lost in the copy if they were switched on live after copying: compare against live in the acceptance.
- No video autoplay on first load.
- PayPal is a checkout setting, not a theme matter. A course says start without PayPal; David said "we need PayPal". Mention the course only as a note, never switch PayPal off yourself.

## 15. The three student store previews of 2026-11-07

Context: on 07.11.2026 we analysed three stores of fellow students in the Course D course, wrote a current-state analysis, a 10-competitor table, a gap list with 10 changes, a domain table of 25 checked names each, and a critique pass, then built a full preview of how each store could look, with all open decisions in yellow. Timo approved contacting the owners. Nothing touches their stores. Built with the slim generator (section 4), all live on GitHub Pages (section 12).

**GigglePeek (squishy advent calendar, 24 squishy cubes).** https://davidlichters.github.io/gigglepeek.com/
- Main problem found: shipping policy said "processed within 14 business days" plus 14 to 21 business days delivery, so an order on 07.11. could land after December 1, the whole point of an advent calendar.
- Critique: all 10 competitors initially chosen sold dumpling squishies, not cubes ("cube" 0 times in their texts), so their price, images and reviews were not the same product. The same product was then found on Amazon US (identical listing images; the store had only changed "ADVENT CALENDAR" to "CALENDAR" on the box). Amazon price measured 41.99 USD.
- Built: one delivery promise everywhere with an "order by" line at the top and under the button (dates yellow); price ladder with price per calendar, "Most popular" on 2, "Best value" on 3, a fourth tier "4+ calendars, $25 each" with a quantity field (button price = 25 x quantity) for classes; kid-with-the-box photo first instead of the cube collage; size image plus a size table in inch and cm; "Beats a chocolate calendar" comparison; "Screen-free" benefit; material and age proven from Amazon listings ("thermoplastic elastomer (TPE)", "Ages 3 and up. Small parts: not for children under 3. Play under adult supervision."); 5 free e-books and an unrelated book shelf removed from menu and footer (name promises squishies; one book was a publisher's title without proof of resale rights). Buy test price 79.99.
- Reviews: 116 from 5 sources (two European Judge.me stores of one company with the same article number, translated; a UK store; Amazon US public part; Amazon.de, advent variant only), average 4.698, so the single most harmful one went; later one more removed for naming the foreign brand: shown **114, average 4.737**.
- Domain: GigglePeek.com (alternatives Plumpeek.com, DimpleJoy.com), replacing HoneySquishy.

**Pantrymoon (book "Freeze Fresh" about freezing 55 fruits and vegetables).** https://davidlichters.github.io/pantrymoon.com/
- Main problem found: a well-known magazine shop sells the same book for 19.99 USD and the author's name is on the cover, so one search shows it next to the store's 43.95 USD.
- Built: book plus a printable "Freezer Kit" (3 one-page US Letter PDFs: blanching times copied word for word from the US National Center for Home Food Preservation, a freezer log, a seasonal produce calendar based on the USDA SNAP-Ed seasonal guide; winter only as a notes field because the source list was reconstructed) so the offer is no longer 1:1 comparable; tiers "Book + Freezer Kit" $35 (preselected) and "2 Books + 2 Kits" $52 GIFT SET ("Save $18 vs. two Book + Kit"); Black Friday prices with a fixed end and the regular price from Dec 2 shown per tier; buy button moved from 1,676 px to 746 to 843 px on 390 x 844; author photo and author line from the publisher's author page; two blurbs from the back cover word for word; "More than 100 recipes" proven from the back cover; EPA food-waste figure.
- Reviews: 138 raw (Goodreads 107, Amazon 22, Target 2, Walmart 2, the magazine shop 2, B&N 3), 133 after duplicates, 2 removed by the 4.7 rule, later reduced by the book selection layer to **123 shown, average 4.748**. All 9 reviews in the original store were removed: two were word-for-word Goodreads reviews of other people under different names, two more were found on Amazon under other names, five were nowhere.
- Domain: Pantrymoon.com, replacing HomesteadPreserving.

**PlushSweep (pet hair removal glove, black mesh with yellow side trim).** https://davidlichters.github.io/plushsweep.com/
- Main problem found: a competitor that runs Meta ads for what looks like the same glove sells the 2-pack for 26.99 USD on its site; the student's 2-pack was 45.95.
- Built: pair preselected (yellow suggestion $26.95, "Buy 1, get the 2nd for $4"), 4 tiers, brush and gift bag in the bigger bundles instead of only discounts; "Stop buying lint roller refills." hook with the measured refill price; main image a hand in the glove on a car mat, one half clean, one half full of hair; looping clip; 3 review voices under the button; one 60-day guarantee everywhere; privacy and terms pages.
- Reviews: **3,700 shown, average 4.7003**, from 6,846 raw across 10 files (details in section 7.4), 452 customer photos.
- Domain: PlushSweep.com (LiftPetHair was the interim pick; SweepPetHair rejected for the double p at the word boundary and reading as a command).

**What all three still lacked (critique):** a confirmed supplier price and supplier with delivery time (step 0 is a lock, not optional); a real Christmas order cutoff from the supplier's delivery time; raw RDAP files and a registrar price before buying; a clean separation of what is course rule and what is our own rule (one analysis cited our own 60 USD / 70 % gate as a "course gate" and cited a course line for the opposite of what it says).

## 16. Helping other students: outreach rules

- Start with "I saw your website", a compliment on the product choice, then one concrete finding with a fact the owner can check (a policy sentence, a competitor price), then "I'm a student in the course too and made a mockup of how I'd fix it, nothing touches your store. Want screenshots?". About 60 words. Never say who asked us to write. No "for free", no domain in the first message, screenshots instead of a link, finding first (changed after two second readers, 07.11.).
- After the yes, within the hour: screenshots, the preview link, "Yellow parts are your decision, nothing is live or connected to your store", and 3 to 4 bullet points of the biggest changes.
- Day 2 to 3: domain help with the Shopify steps (section 10), offer to check DNS together. Next days: answer every question, one change at a time, no new topics he did not ask for. Target: answer 85 % of messages within 1 hour.
- Only after a first sales jump or visible joy: ask once, never again, whether he would tell the course founder in one or two sentences that we helped.
- In the course community group: never message anyone on our own; only together with Timo.

## 17. What is still missing in the system

1. Variables instead of the 135 hard-coded template-name lines (one-time 30 to 45 machine minutes [GUESS], afterwards step 6 takes 1 minute).
2. An automatic Judge.me fetch and the step from raw files to the review pool for the template (the student previews have their own scripts).
3. Photos attached to reviews in the template's selection script and check script (both currently forbid review photos).
4. An image list script (step 5).
5. Remaining checks: font size, 44 px targets, alt texts, numbers in docs, "Free US shipping" white while Alaska and Hawaii are open.
6. Several previews side by side in one repository.
7. An automatic path from preview to a Shopify theme (the theme template builder only knows the Curlmoon template).
8. A campaign script that really creates campaigns (today only a dry run, see the product-testing file).

## Corrections 2026-11-07 evening (newer than the text above; details in sections 18 to 20 below)

- **No yellow markings anywhere** (David, 2026-11-07): "Yellow means unproven", the `[[...]]` yellow convention, "Remove all yellow", the banner text "Yellow = your decision" and the outreach line "Yellow parts are your decision" are replaced. We decide every open question ourselves; if a line would need invented company data or an unkeepable promise, drop the line.
- **No visible lazy loading:** preload images; never "lazy loading for everything below the first image".
- **No star breakdown (rating bars 5 to 1)** in any store we build (David, 2026-11-07 18:15); this replaces 7.6. Displayed average must be 4.7 or 4.8: below 4.7 drop the most damaging bad reviews, above 4.8 drop some 5-star reviews.
- One font family, at most 3 colors plus grey, one spacing grid, calm first image, mobile first, never "perfect" without a side-by-side with the best competitor stores.

## 18. Reviews: which ones we show and what star average a store must display (moved here from ops/gaps-2-1.md, 2026-11-07)

Sources: David after about an hour with his lawyer, 2026-11-05, confirmed in writing; David 2026-11-07 18:15 after reviewing three fellow-student stores we had built.

- **We choose freely which reviews we show** (lawyer, 2026-11-05). Nothing obliges us to show every review we imported.
- **The displayed average must be 4.7 or 4.8** (David, 2026-11-07 18:15). This replaces "4.7 is the floor" as the only rule:
  - Below 4.7: leave out the most damaging bad reviews until 4.7 is reached. Damage counts, not stars: "has nothing to do with the picture" (3 stars) hurts more than "ordered the wrong size, but good" (1 star). Sort the candidates for removal by damage, not by star count.
  - Above 4.8 (4.9 or 5.0): leave out some 5-star reviews on purpose until the average is 4.7 or 4.8. Why: a perfect or near-perfect score looks fake to buyers.
- **No star breakdown in any store we build** (David, 2026-11-07 18:15). The bars per star count (5 to 1 star histogram) are removed. Why: random 1-star bars visible at the top of the review section cost trust. This overrides `ops/store-building.md` section 7.6 ("Rating bars 5 to 1 star only from 6 shown reviews"): do not build rating bars at all.
- Still valid from the older rules: the last star is filled proportionally and the number is never rounded up; the heading stays neutral and never claims "all reviews" (US FTC rule against suppressing negative reviews); reviews of the same product from other stores may be copied verbatim with the source only as one small-print line in the footer, no note on the single review, no "verified" badge (lawyer, 2026-11-02, answer to a question we wrote ourselves: implement exactly that, no extra compromise on top).
- Procedure per store: import the same-product reviews, compute the average, then cut by damage (below 4.7) or cut some 5-stars (above 4.8), remove the histogram, check at 390 px.

## 19. Invented reviews, star counts and customer numbers: never, and the real alternatives (moved here from ops/gaps-2-1.md)

**Rule (the AI's own line, 2026-11-02, held after David and his lawyer disagreed):** the AI never writes invented reviews, invented star averages or invented customer counts into a real store or an ad that buyers see, even when David explicitly asks. It says so in one sentence and immediately offers the real routes below. It never uses reviews of a different product. If David or someone else puts reviews in themselves, the AI does not remove them and does not raise the topic again.

**Why:** buyers read them as real customers. Fake consumer reviews and fake testimonials are explicitly banned in the USA by the FTC rule on fake reviews and testimonials, in force since October 2024 (civil penalties per violation); in Germany the same under unfair-competition law. The lawyer decides legal questions; the AI's refusal here is about its own participation, not a legal judgement, and the lawyer is never second-guessed.

**What happened (2026-11-02):** the Curlmoon preview on GitHub Pages (davidlichters.github.io/curlmoon, not the real store) carries ten invented review texts and "4.7 from 46" under a visible banner "PREVIEW, stars and reviews are placeholders". David wants them to stay there, so they stay and are never removed without asking. The real store curlmoon.com was built without them from the start (review widget off until the first real review). When David asked to put the ten into the real store, the AI declined and offered the alternatives.

**Real alternatives, in the order to offer them:**
1. Review app (Judge.me) with an automatic review request after delivery.
2. A discount for a review with a photo.
3. Give beds to dog owners in exchange for honest reviews that are visibly labeled as gifted.
4. Family purchases: when people close to David buy the product directly from the supplier, their reviews may go in as real reviews once the bed has arrived and been used, in their own words, with a visible family note (for example "Mom of the founder"), never as "Verified buyer" and never as a replacement for the placeholders. Even more valuable: their photos and videos of the dog in the bed for the store and ads.
5. Same-product reviews from other stores (AliExpress, a competitor selling the identical item), copied verbatim under section 18's rules. Example 2026-11-02: Mersjo (Poland, Judge.me, 281 reviews, same image, 60 cm, anti-slip base, shipped flat) gave 10 reviews, faithfully translated, marked "Poland (translated)", Anonymous. How to find them: Google Lens with our product image, check candidate store domains via `/products.json`, load Judge.me reviews through its public review widget endpoint. Proof of sameness: fabric, closure, measurements, own photos or a sample; a supplier photo that is really another brand's photo is not proof (David's lawyer says "very similar" suffices, 2026-11-06; the AI still only uses reviews of the proven same product and says this is its own line).

## 20. Design rules for every store we build (moved here from ops/gaps-2-1.md)

Source: David 2026-11-07, after reviewing the three fellow-student previews (GigglePeek, Pantrymoon, PlushSweep), and David 2026-11-01. The AI had called the stores "perfect"; David saw in seconds that the design was off ("noch nicht komplett durchdacht").

1. **No yellow markings, anywhere** (David 2026-11-07: "Why is everything marked yellow? We decide these things. The people who own the store have no idea and will be grateful."). Yellow marks make a finished store look unfinished. This **overrides** on /ai: "Yellow means unproven" (`ops/store-building.md`), the `[[...]]` yellow render convention, "Remove all yellow" as a later step, the preview banner text "Yellow = your decision", and the outreach line "Yellow parts are your decision". New banner wording: "Preview by David: how your store could look." Nothing else.
2. **We decide every open question ourselves.** Limits: never invent company data (address, registration, phone, team) and never make a promise nobody can keep (delivery date, guarantee, stock). If a line would need either, drop the line instead of marking it.
3. **One font family.** Weights may vary, families may not.
4. **At most 3 colors plus grey.**
5. **One spacing grid** (one base unit, every gap a multiple of it; unequal gaps were a named defect).
6. **Calm, clear first image.** GigglePeek's first image was overloaded; David moved image 2 to the front. The first image shows the product clearly, little text, no collage.
7. **Images preload; no visible lazy loading.** Images that pop in while scrolling were a named defect. This **overrides** "lazy loading for everything below the first image" in the slim-build description of `ops/store-building.md`: preload all product and section images (eager loading, preload hints for the first screens, correctly sized WebP), and never let the visitor see an image arrive late.
8. **Mobile first** (David 2026-11-01: "Almost nobody opens the store on a computer"). Design for the phone in the Facebook/Instagram in-app browser, which has a shorter screen: price directly under the title, no thumbnail strip on mobile (dots and "1 / 6" on the image instead, saves 72 px), tap opens fullscreen with pinch zoom, header hides on scroll down, sticky buy bar from the first screen ("Choose your size" jumps to sizes if none is chosen), size help as a bottom sheet, all buttons at least 44 px high, smallest text 12 to 13 px, main image under 4 s on slow 4G (Curlmoon measured 1.5 s with 4x CPU throttling, layout shift 0).
9. **Check at 390 px before delivery** and look at it yourself (screenshots, not reports).
10. **Never call a store "perfect" or "done" without comparing it side by side with the best competitor stores** (rule from 2026-11-06: a store only counts if built from the best competitor stores side by side, revised with all our knowledge, and passed by the strict judge round; at least as good as Curlmoon). About 10 comparison pages and judge rounds until nothing is left; a store costs about 3 % of the weekly AI limit, never save on stores; faster only by parallel work.


Part 3 of 3 of "Store building: the full procedure". Map of all parts: https://dlichters.com/ai/ops/store-building.md · Previous: https://dlichters.com/ai/ops/store-building/02-6-images-and-video.md
