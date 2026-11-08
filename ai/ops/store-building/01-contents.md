<!-- part of ops/store-building.md -->
Part 1 of 3 of "Store building: the full procedure". Map of all parts: https://dlichters.com/ai/ops/store-building.md · Next: https://dlichters.com/ai/ops/store-building/02-6-images-and-video.md

## Contents

1. Two kinds of store work
2. Fixed rules that apply in every step
3. Part A: building a store preview, steps 0 to 11 (with measured times)
4. The fixed store skeleton (pages, design defaults, buy box)
5. Copy rules (guarantee, delivery dates, Christmas cutoff, prices, placeholders)
6. Images and video
7. Reviews: collecting, proving the same product, filtering, ordering, showing
8. Checks at 390 px (and 1280 px): what is measured and how
9. Judge rounds ("Musk judge") until perfect
10. Domain and store name SOP (the full version)
11. Renaming a store that is already built
12. Publishing a preview on GitHub Pages
13. Part B: going live on Shopify
14. Restyling a live Shopify theme to look like another store (03.10.2026)
15. The three student store previews of 2026-11-07 (GigglePeek, Pantrymoon, PlushSweep)
16. Helping other students: outreach rules
17. What is still missing in the system
18. Reviews: which ones we show and what star average a store must display (2026-11-07)
19. Invented reviews, star counts and customer numbers: never, and the real alternatives
20. Design rules for every store we build (2026-11-07)

---

## 1. Two kinds of store work

- **New store or preview (static build).** We build the whole store as plain HTML/CSS/JS files from a Python build script, check it with headless browser scripts, and publish it as a preview (no checkout). Only after the preview is perfect and every open value is filled does it move into Shopify. Our template store is called **Tuckwell** (a dog product store built 06.11.2026, measured build time 3:59:44 from 21:41:00 to 01:40:44 [MEASURED]; the first finished version stood after 34:27 minutes, the remaining 3:21:56, i.e. 84.2 %, were 12 judge verdicts and 10 rounds of fixes). Curlmoon is our own live dog bed store; Porchnap was the first store (Timo and David, Christmas sled bed for small dogs, October 2026).
- **Restyle a live Shopify store** to look like a competitor (done 03.10.2026: Porchnap restyled in the look of the competitor store Jingle Nap, 19:25 to 22:05, result "website is good"). See section 14.

A store costs about 3 % of a weekly AI usage budget (David estimates about 1.50 EUR). Never save on it: no fewer competitor pages, no fewer judge rounds. Speed only comes from running things in parallel, a fixed checklist and a complete input sheet (David, 2026-11-07).

## 2. Fixed rules that apply in every step

- **Lawyer list first.** Before any build, image, review or ad, read our lawyer list (summarised on the legal page) and follow it strictly: do not question it, do not re-ask, do not add your own extra caution, use every freedom it gives. A new legal question is never judged by the AI: write it as a copy block for David, he asks the lawyer, the answer goes into the list.
- (Older, replaced on 2026-11-07: no yellow anywhere, we decide open questions ourselves; see section 20 in part 3.) **Yellow means unproven.** Every statement without proof is marked yellow in the build (in the build script text, a value written as `[[...]]` is rendered as a yellow `<mark class="offen">`). White text only with proof. A white sentence that depends on a yellow value is also yellow. Before going live the yellow count must be 0. Typical counts in a fresh preview: Tuckwell 205 yellow spots (supplier 149, same-product proof 22, lawyer and operator 19, checkout 15); student previews 34 to 110 per store.
- **Reviews:** only real ones, word for word, from provably the same product. Never invented. Neutral heading, no source note on a single review, no "verified". Below 4.7 average remove the most harmful ones until 4.7 (details in section 7).
- **Source line exactly once**, in small print in the store footer, nowhere else. Ads carry no source line at all.
- **Health:** naming the target group and showing real customer voices is fine; the AI never writes its own healing claim ("helps with ADHD", "relieves pain"). "Feels calming" is subjective and allowed (lawyer, 2026-11-06).
- **Never delete what David built** without asking. Old material is moved into a folder like `fremd/aus_dem_bau_<date>/`, never removed. Back up a file before overwriting it (`<file>.<YYYY-MM-DD_HHMM>.bak`).
- **Sending anything to a person or company** goes through our send gate: a review card plus a real second reader. Money, payment method, currency, price and deadlines are never fixed in a message without comparing two options, otherwise they are asked as a question.
- **Suppliers:** the AI asks pure product questions (dimensions, fabric, shipping days). Rights questions and "are you the supplier of brand X" are never asked by the AI; David asks them on the phone with exact wording, and his report counts.
- **Research never blocks the build.** Market questions go to Perplexity in the background at the start; the spot stays yellow until the answer arrives. Measured: 9:49 minutes of waiting for Perplexity inside a build produced nothing.
- **Numbers** are measured or marked [SICHER]/[WAHRSCHEINLICH]/[RATE] (sure/likely/guess). Count companies and pages separately (one company can run three stores).
- **No long dashes** in any customer text (they look AI-written). The build script aborts if it finds one.
- **Prices of other stores are always measured as a US visitor:** append `?country=US&currency=USD` to the URL and confirm the store currency is USD (in the HTML `Shopify.currency`, or `/meta.json`). A German IP otherwise sees EUR prices.

## 3. Part A: building a store preview, steps 0 to 11

"Preview" means: no checkout, not sellable, banner on every page. All time targets are [GUESS] until store three measures them, except where marked.

**Step 0. Gate and supplier (a lock, before anything else).**
Input: product, confirmed supplier price, market price (measured with `?country=US&currency=USD`). Run the product gate (formula in the product-testing file: price from 60 USD, at least 6.2x the product cost, at least 70 % contribution after fees and refunds). Output is a gate table saved as `tor_ausgabe.txt` in the new store folder. Time: 4 min (product choice measured 3:35).
Abort: one single unit fails the gate, or the supplier names a different price, or the price is not confirmed in writing: no build, tell David.
Why: agent Tina's 25.16 USD failed the gate and the build started anyway with agent John's 15.95. Quantity tiers (2 or 3 units) may fail the 70 % gate but must still keep the course rule of at least 67 % gross margin (course rule D1).

**Step 1. Folder and input sheet.**
Copy the template store without its product-specific parts (with rsync, excluding the folders for foreign material, competitor captures, supplier, images, raw reviews, review photos, generated pages, products, index.html, the gate output and the two analysis files). Then create an empty `img` folder (the image script fails without it, tested 07.11.). Empty the template's review files (`pool.json`, `auswahl.json`, `weggelassen.json`, `kandidaten.json` to `[]`, `themen.json` and `hand_raus.json` to `{}`); the store then builds error-free with zero reviews (tested).
Fix before starting: quantity tiers, deadlines, sale timing, payment methods, the guarantee in one sentence, name, email, size order. Clarify the review source and the proof that it is the same product.
In parallel: send the supplier request draft (only if the task allows sending, else leave as draft) and put open market questions to Perplexity.
Output: a complete input sheet with no gaps. Time: 3 min. Abort: an open point that would change a price or the guarantee: one line to David.
Why: in Tuckwell 5 decisions were only made during judge verdicts.

**Step 2. Choose the comparison pages.** Rule (David, 2026-11-07, replaces the old "5"): **10 pages**, ranked by ad strength for exactly this product, **at most 2 pages per company**.
Order of choice: (1) ads for exactly this product, (2) run time and new ads in the last 30 days, (3) the market leader's product page and its most-advertised landing page, the product pages of the next 2 to 3 advertisers, and the fastest-growing challenger is mandatory, (4) US price measured and in stock, (5) a good page, not a Chinese supplier page, (6) a store without ads only if fewer than 3 advertisers exist.
How: ad counts from the Meta Ad Library (read-only connector search, or our own Ad Library scrape), note how each number was counted. Google Lens with the product photo by hand in Chrome; confirm each hit via the store's public `/products.json`. The choice is made by the AI, not a script.
Then pull photos and videos with our media collector (see section 6). Output: `KONKURRENZ.md` (competitor table). Time: 4 to 6 min (measured 5:58, collector 377 s extra).
Abort: fewer than 3 advertisers and not even a page without ads: tell David.
Evidence for 10: 5 pages ranked by ads would have given 29 of 32 parts (Tuckwell) and 18 of 21 parts (Curlmoon); all parts appeared only at 9 pages (Tuckwell) and 7 companies (Curlmoon). 5 instead of 10 saves only about 6 minutes [LIKELY].

**Step 3. Measure the competitor pages, in parallel.** One agent per 1 to 2 pages; captures go to `fremd/<shop>/`. Output: `ANALYSE.md`, a table "part, which store it comes from, course source". Time: 5 to 7 min (measured 11:51). Stop rule: open the next page only if the last one still brought a new part, at most 8.
Two separate questions: which store is the model for the **layout**, and which store is a source for **images**. Images only from stores with provably the same product (Tuckwell: all images from a store selling a similar but different product had to be thrown out).

**Step 4. Reviews and customer photos, before the build, in parallel with step 3.** Full method in section 7. Time: 3 to 5 min for the selection script once the data is in. Abort: no proof of the same product: the review pool stays empty and the store builds without a review section (tested with 0 reviews: no errors, fixed review IDs drop out).
Why it is a step of its own: in Tuckwell the pool was rebuilt five times (27, 43, 275, 44, 40 reviews).

**Step 5. Image list before cropping.** Sources in this order: supplier, other AliExpress listings of the same product, competitor stores with the same product, customer photos from step 4, TikTok and Instagram. Editing is allowed. Three checks per image: does it show our product, resolution, any foreign logo or mark. Open every single image. Time: 4 min, parallel to step 3. Abort: no sharp image of the product: ask the supplier for originals, build on with the image marked yellow.
Why: images were 17 of 91 defects in Tuckwell, and a wrong product was only noticed in judge round 7.

**Step 6. Fill the template.** Put the values from the sheet into the copy. Known debt: 135 lines in 31 files of the template still contain the template product name hard-coded (measured 07.11.). After step 7 check that a case-insensitive grep for the template's name over the build and asset folders returns nothing. Prices and sizes are not found by that grep; they live in the build parts and in `shop.js` (constants for price, tiers, sizes) and must be changed by hand.

**Step 7. Texts of the new parts.** If a course prompt exists for the purpose (product description, shipping page, refund page, about us, etc., list on the course prompt index), use it word for word, fill the placeholders, name the source. Work around untrue prompt sentences by hand (for example "domestic suppliers" or invented founding years and places in Course A's prompts). Mandatory from the Tuckwell defects: the guarantee sentence identical on every page including its limit (also in the terms, which stay a draft for the lawyer); sizes everywhere in the same order as the buttons, also in tabs and graphics; references only to sentences that really exist there; no return words if there is no return; review filters end with a 5-star review; the gift case says where the money goes; payment names as in the real checkout.

**Step 8. Build and machine check.** Run the build script, then the check script. Target `Fehler 0` (0 errors). Errors are fixed, never carried into a judge round. Time: 8 to 12 min together with step 7 (measured 15:14). The check script tests since 07.11.: guarantee sentences without limit, return words on the return page, "before you have to ask" in white, size order, review filter, rating bars, link preview image, icon. Not yet tested by script: font size, 44 px tap targets, missing alt texts, numbers in docs, "Free US shipping" written white while Alaska and Hawaii are open.

**Step 9. Look at it.** Serve it locally (a symlink inside a scratch folder plus `python3 -m http.server <port>` in the background, so the store runs under a sub-path exactly like on GitHub Pages). Run the page check and the measuring script (section 8). Target: 0 console errors, 0 overflow, buy and cart tests passed, screenshots at 390 and 1280 px opened and looked at by you. Time: 3 min. Abort: buy test red: back to step 8. Note: our older German-language page checker gives false alarms on English stores; use the English US rules checker.

**Step 10. Repo knowledge round, then judge rounds.** Mandatory, otherwise the store does not count (David, 2026-11-06: "only counts if built from the best competitor stores, repo knowledge and the Musk judgment"). First rework with all our knowledge: the mobile website checklist from the course (summarised on our course pages), the course library, Curlmoon's analysis; every rule not met is listed in `ANALYSE.md`. Then judge rounds until no defect is left (section 9). Also run the course judge (product-testing file, section on the course judge) on disputed choices.

**Step 11. Publish the preview** (only if the task allows it). See section 12. Then a stopwatch entry with machine time and David time separately, preview and live separately (Tuckwell's "0 minutes David" was false, about 27 minutes off), and a short report: what stands, how many yellow spots, what is missing.

## 4. The fixed store skeleton

**Always the same, never rewritten:** the shared SVG icon sprite, `robots.txt`, the font file (Figtree, woff2), `shop.css` (all colours are 14 CSS variables), `shop.js`, the build parts (header, footer, top bar, drawers, preview banner, payment icons) and the build script.

**11 pages from the start** in a full store: Home, Product, 7 Reasons, Size guide, FAQ, About us, Contact, Shipping, Returns, Privacy, Terms. Shipping, Returns, Privacy, Terms and Contact only get the product words swapped (4 to 9 of 33 to 46 lines carry them). The slim student previews used 6 to 8 pages (Home with product, FAQ, Shipping, Returns, Contact, About, later Privacy policy and Terms of service written in our own words after the Shopify standard templates, with only "operator name and address" left open).

**Slim build (student previews, 07.11.).** One Python build file, about 8 KB CSS, 2 KB JS, one script, no apps, static WebP images, lazy loading for everything below the first image (older, replaced on 2026-11-07: preload all images, no visible lazy loading; section 20 rule 7 in part 3). First load of the home page about 90 KB (HTML, CSS, JS, font, main image) [MEASURED]. All links relative so the folder works under any sub-path. All images under 300 KB.

**Design and buy box defaults that came out of the judge rounds (07.11.):**
- Body text 18 px, secondary text 15 to 17 px, never below 13 to 14 px on phones (Christmas line, badges, per-unit price, table head, footer all moved to 14 px after a judge found 10.5 to 13.5 px).
- Header slim, 52 px.
- Gallery full width on the phone, main image 390 x 390 (or close to square, e.g. 354 x 329 for a book scene). Dots on the phone; on desktop from 900 px a thumbnail row (9 thumbnails, 200 px, about 50 KB together) under the main image, click switches the image.
- Under the title: stars plus "4.7 · N reviews", jumping to the review section. Then one benefit sentence in one line on 390 px.
- Price, stars and the first tiers in the first phone screen. The buy button bottom edge was measured at 746 to 843 px on a 390 x 844 screen; where it falls below the fold, a **sticky buy bar** with price and button is shown. Final rule (PlushSweep round 3): the sticky bar appears only once the tiers and the buy button have scrolled out of view upwards, implemented with a scroll check, not IntersectionObserver (the observer reports nothing when you jump back up).
- Quantity tiers side by side or stacked, one preselected (usually the pair or the "book plus kit" bundle). Badges: "Most popular" only once there is sales data; until then a descriptive badge ("Couch + car", "For 2 kids", "Best value", "GIFT SET"). Badge positioned so it never covers the price.
- Savings shown as "Save $X" directly under the tier price, computed from our own single-unit price. **No strike-through prices, no "was $", no compare-at prices** (our legal rule: a reference price only if it really applied; two courses recommend the opposite, we do not follow them).
- A hook in the tier where it helps: "Buy 1, get the 2nd for $4" (computed: 26.95 minus 22.95).
- Trust lines under the button: a row of self-drawn payment symbols (Visa, Mastercard, Amex, PayPal, Apple Pay, Google Pay, Shop Pay; our own drawings, no original logos) plus a lock "Secure checkout". Only methods the store really has: in one preview the methods were proven by the theme's payment icon list in the live HTML, so they could be white.
- A box with 3 check marks under the button (for example "No refills, no sticky sheets", "Couch, bed, rug and car seat", "Rinse and reuse").
- 3 strong 5-star reviews directly under the buy box (pet, surface, result named; first name plus last initial), these 3 not repeated in the list.
- A comparison table versus the generic alternative (never a competitor brand): e.g. "Glove vs. lint roller", "Beats a chocolate calendar". Rows only with proof; a tie row is replaced by a row that shows a real difference; cost rows only with a measured price (example: a 4-roll lint roller refill pack, 224 sheets, 21.99 USD at Walmart.com, found via Perplexity 07.11.).
- No countdown timers, no "X people looking", no "only X left", no "LOW IN STOCK". A Christmas cutoff bar is fine because it is a real date (section 5).
- The buy button in a preview only shows a toast "Preview only: checkout is not connected yet." and never changes the URL.
- On every preview page: a thin banner "Preview by David: how your store could look. Yellow = your decision.", `noindex,nofollow`, and `robots.txt` with `Disallow: /`.
- Home page = the product (image, price, button), not a slideshow. Course judge 03.10.2026: never redirect the home page to the product page; instead put a "featured product" section with image, price and buy button at the very top.

## 5. Copy rules

- **One guarantee, word for word everywhere:** at the button, in the guarantee block, in the tab, FAQ, Returns, About, footer. Remove contradictions like "no returns on sale items". Typical: "60-day money-back guarantee", "No need to send it back" (yellow until the owner confirms).
- **One delivery truth everywhere.** A delivery line directly under the button. The date is computed: build day (in the build) or the visitor's today (in `shop.js`) plus processing working days plus transit days, e.g. "today + 1 to 3 working days + 7 to 12 days", the same at all 6 places (buy box, tab, FAQ, FAQ page, shipping page, about). The shipping page states transit separately: "Most orders arrive 7 to 12 days after shipping. Packing takes 1 to 3 business days before that."
- **Christmas cutoff is computed, never typed.** Formula: the last day d for which (d plus the maximum processing working days) plus the maximum transit days is on or before December 24. Example 07.11.2026 with 1 to 3 working days and 7 to 12 days: Tuesday 08.12. gives Wednesday 23.12. at the latest, Wednesday 09.12. would already be 26.12., so the cutoff is **Dec 8**, not the "Dec 10" that was written by hand before. If the supplier changes the times, the date moves with the next build. Limit: the build calculates from the build date; built after the cutoff, the bar must be checked by hand. Ad rule stays: never a deadline in an ad.
- **Placeholders never visible.** The build asserts against visible "Operator name", "$X", " __", "[[", TODO, TBD, Lorem, "placeholder" and against strike-through markup. In one preview "Operator name and address" stood visible in 15 places (footer of 8 pages, contact, privacy, terms); it was removed, not filled. The operator comes with the real owner.
- **Notes never as customer text.** Replace internal notes with honest customer sentences: "Every order ships with tracking. You see the carrier in your shipping email." (claims nothing). An unproven "Who we are" section is hidden until the owner gives three true sentences. "Live chat: on this page" only if the free Shopify Inbox chat is really switched on.
- **Measured facts can be white.** Example: "The EPA says the average family of four spends almost $3,000 a year on food that never gets eaten." checked word for word on the EPA page with curl ("family of four", not "household", because the source says only that).
- **Remove promises the product does not keep well.** PlushSweep: clothing was taken out of the main promises because reviews said it is weak on thin clothes; FAQ now says "Best on upholstery and thicker fabric... On thin clothes a quick pass works, but a lint roller is finer there."
- **Product title identical everywhere** (a judge found two different titles in buy box and sticky bar).
- **No German words, no David, no age** in visible US text, no self-sabotaging true sentences ("you can do this yourself in two minutes" above our proof once killed a sale). Our English rules checker scans the finished page, not the input sheet, because a customer can see text from any field.
- **About us, Shipping, Refund pages** built in the structure of the course prompts (Course A, module 3), with their high-ticket and "domestic supplier" assumptions and invented years and places removed, open values yellow.
- **Contact:** a store email on our own domain, never a Gmail address in policies.
- **Free shipping:** "Free US shipping" stays yellow as long as Alaska and Hawaii are not clarified. Course judge 04.10.2026: 0.00 USD shipping for every US order instead of 4.99 on the single unit.


Part 1 of 3 of "Store building: the full procedure". Map of all parts: https://dlichters.com/ai/ops/store-building.md · Next: https://dlichters.com/ai/ops/store-building/02-6-images-and-video.md
