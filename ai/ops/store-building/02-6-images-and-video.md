<!-- part of ops/store-building.md -->
Part 2 of 3 of "Store building: the full procedure". Map of all parts: https://dlichters.com/ai/ops/store-building.md · Previous: https://dlichters.com/ai/ops/store-building/01-contents.md · Next: https://dlichters.com/ai/ops/store-building/03-14-restyling-a-live-shopify-theme-to-look-like-ano.md

## 6. Images and video

- **Source order:** supplier, other AliExpress listings of the same product, competitor stores with the same product (including their own lifestyle photos), customer photos from reviews of the same product, TikTok and Instagram. All allowed in store and ads by the lawyer; all may be edited (background away, logo away, colour, text on top, AI regeneration).
- **Proof of same product per image:** compare shape, material, colour details and visible size against our measurements. Variants matter: one AliExpress listing had a "Plus" variant with yellow side trim (ours) and a "Basic"/"black" variant without it; 103 reviews of the wrong variant were excluded. 4 videos of a giant bed were once chosen for our 40 to 70 cm bed.
- **Retouch foreign marks:** a brand print on a glove's trim was removed by script (zoom checked, unreadable); a cat logo in a corner removed with ffmpeg's `delogo` filter (cut-out enlarged three times to check); a printed "Stress Relief Toy" text replaced by our own line via a small Node script. Originals kept as `*_vor_retusche.*`.
- **AI scenes with the real product inserted:** for a book store, AI backgrounds (Gemini image model, 4 calls, a few cents each [GUESS]) showed the book under a Christmas tree and in front of a freezer; the AI-drawn cover had wrong lettering, so the real cover image was inserted with a perspective transform and matched to the light. AI video from real product photos is allowed; check every frame that the product did not change shape or size.
- **Short loop clip in the gallery** (image 2): muted, looping, WebM with MP4 fallback, 3.0 s, 400 x 400, cut from a competitor GIF; no autoplay of heavy videos on first load (saved 3 MB on Porchnap).
- **Customer photo row:** squared to 400 px; shown only with the review they belong to, or as a photo row without text when the text cannot be proven to belong to the photo (WagMitt case in section 7).
- **Do not use:** photos of a different product even from the same niche; hardcover mockups when the book is a paperback; a back cover showing a lower list price; an image with a faint foreign watermark; images showing a brand on the package that is not ours (one competitor's "dumpling" box with its brand over our cube calendar).
- **Media collector (our tool).** Input: the product's sheet. It reads which stores advertise with the product's keyword (from our Ad Library scrape), fetches the stores' public Shopify product JSON and pages with plain curl, downloads photos and videos, and classifies each file: usable, customer photo (locked), graphic, foreign product, price image, duplicate, preview thumbnail, unproven. Rules built in: no browser disguise; a bot check, 403, 429 or 503 means the domain is noted in a block list and never asked again (not even through a redirect, not in the next run); on shared CDNs the block only affects that one store; review services are never called by the collector; photos from review blocks are stored locked and only released by hand per photo; foreign products are filtered via the store's own catalogue; nothing is deleted, rejects go to an `_aussortiert/` folder. Image comparison uses ffmpeg plus Apple Vision; thresholds were measured on 224 hand-checked Sleep Pod entries and are unproven for other products. Target score in its acceptance test: 100.

## 7. Reviews: collecting, proving, filtering, ordering, showing

### 7.1 Where real reviews come from
- **Judge.me stores:** public endpoint `api.judge.me/reviews/reviews_for_widget` (per store and product, paginated). Our own script fetches all pages.
- **AliExpress:** the public feedback endpoint `feedback.aliexpress.com/pc/searchEvaluation.do` per listing ID. Find listings with Google Lens on the exact product image ("Exact matches" tab: 400 hits for the glove), resolve redirects, check each listing.
- **Amazon:** top reviews on product pages are public in 13 country sites; the full list needs a login. We never type a password and never touch a captcha; if David's Chrome is not logged in, those reviews stay out (noted with the exact command to fetch them later).
- **Goodreads, Target, Walmart, Barnes & Noble (Yotpo)** for books.
- **Not usable:** Temu, Lazada, Shopee, some Shein pages (captcha or block page, never bypassed); stores with hard-coded review cards in the theme ("Response from <store>" cards, "637 reviews" on a product created 2 days earlier) are not proof of real buyers.

### 7.2 Proving it is the same product
Per source: same images (the product image used as the first image on two products of one store means the same product), same box layout (the cube calendar was proven by the identical number layout on the box front and the door grid on the back), customer photos of the buyers, measurements. Two box prints of the same layout were both accepted after a buyer's photo showed the seller ships the second print. For bundled listings take only reviews with the right variant name (e.g. "Colour Name: Advent Calendar"), never Easter or Halloween variants of the same listing. Write the proof into a `beweis.md` per store.

### 7.3 Detecting imported, unproven reviews
Judge.me marks imported reviews with `review_collected_from_another_provider`. Other signals: timestamp exactly 00:00, dates before the product was created (check `/products.json` created_at), photo files named "chatgptimage..." or "screenshot...", many uniform one-liners on the same day, Amazon-style names ("UserKB"), texts praising another brand, texts that do not match the attached photo ("I'd show a photo but it's disgusting" with a photo attached). Rule: imported texts are not used as buyer reviews; their photos may be used as a photo row if the photo visibly shows the same product (6 photos taken that way, texts not).

### 7.4 The filter pipeline (in this order)
1. Raw from all sources (PlushSweep: 6,846 from 10 files).
2. Remove empty texts without a photo (1,434, all AliExpress star-only).
3. Remove duplicates: same text after normalising to letters and digits, or over 90 % similar; keep the version with a photo (766).
4. Remove reviews that reveal another store or brand (255): any competitor brand in all its misspellings, marketplace names (Amazon, Temu, AliExpress, "on Ali", eBay, Walmart), store domains, review-service links, other brand names; plus the "fake vs. the real one" class (fake, knock-off, counterfeit, imitation, copies, dupes, "the original", trademark, "real one"), with a few hand-checked exceptions that reveal nothing. Keep: Facebook/Instagram mentions (we advertise there), pet names that look like brands, typos like "Lindt" for lint, "hoover" as a verb. Read every hit by hand. Also remove reviews that talk about the other store's service (shipping, delivery speed, seller, price, package, "as described", "like in the video", "buy 1 get one free").
5. Remove reviews of a different size or variant ("large glove").
6. Apply the 4.7 rule: while the average is below 4.7, remove the most harmful bad reviews first: "looks different from the picture / scam / fake / never arrived / refund" before "does not work / junk / sent back" before the rest by stars. PlushSweep: 691 removed in that order (99, 434, 158); every 1-star review went. Books: only 2 removed. Cube calendar: only 1 (a 1-star "This is not an advent calendar." with a photo of another box).
7. Result: PlushSweep **3,700 shown, average 4.7003** (2,909 x 5, 511 x 4, 242 x 3, 38 x 2), 288 with photos, 452 unique customer photos after AI-looking and screenshot images were removed.

### 7.5 Ordering
- Top of the list: 5 stars with photo and a concrete surface or use (sofa, couch, car, seat, bed), then the rest by stars. Weak reviews (price talk, "$", cheap, scam, free comb, machine wash, "not used yet", "not magical", only one glove arrived, delivery time, seller, expensive, repetition spam) only from position 201. Assert in the build: positions 1 to 200 contain no weak review.
- In smaller pools: reviews with 3 stars or less only from position 21, with 6 good ones between each; the build aborts if any review under 4 stars is in the first 20. Reviews mentioning a different variant (figures, personalisation, desk decor) go behind all other good ones.
- Mix: photo reviews first, then the 10 longest (from 100 characters), then short ones mixed with a fixed random seed; identical short texts ("super", "top") never next to each other (checked in script and browser).
- Never delete a review just because it is weak; move it back. Only the 4.7 rule and the brand/store rule remove.

### 7.6 Showing
- Text word for word including typos ("vwry", "boght"); foreign languages as a faithful English translation (the platform's own translation is fine), original kept in the data file.
- Names as the source shows them (masked "N***s" stays masked). Default platform names reveal the source: "Amazon Customer", "Kindle Customer", "AliExpress Shopper" become "Customer" or an initial. When Judge.me fills an empty photo review with the foreign product title ("Pet Grooming Gloves - Buy 1 Get 1 Free"), the text is set empty. Transcript leftovers ("No spoken audio content", copied listing titles, "5*", "$29.99") are trimmed.
- No date, no "Verified", no source per review. Headline neutral ("What pet parents say"), never "all reviews".
- Count next to the stars = number of shown reviews, the same number everywhere on the page; the average is computed from the shown file and the last star is filled proportionally, never rounded up.
- (Older, replaced on 2026-11-07 18:15 by David: no rating bars at all, because random 1-star bars at the top of the reviews cost trust; see section 18 in part 3.) Rating bars 5 to 1 star only from 6 shown reviews; counts, not percentages; each bar row is a tappable star filter, 44 px high on 390 px, an empty row is not tappable; a filtered list ends with a 5-star review.
- Large pools: 10 reviews in the HTML, the rest in a JSON file (498 KB for 3,915) loaded on the first click of "Show more reviews", 20 per click; for `file://` viewing, the data is also inlined as `<script type="application/json">`. Add `overflow-wrap:anywhere` to the review card (one review with 110 exclamation marks pushed the page to 574 px width after 61 clicks).
- Books: advance-copy reviews (NetGalley, ARC, "received a free copy in exchange for an honest review") are flagged and moved to the end; a selection layer shows the longest block of whole sentences without NetGalley, library, blog or publisher sentences, verified word for word against the raw text by an assert. Reviews that hint the content is "common sense" or "could easily look up" are left out. A Goodreads account named like a test author was flagged.
- Our working target is 6,928 reviews per product (David's pick inside an estimated good range of 5,000 to 10,000; harm estimated only from about 20,000; not measured). A store still shows only as many as real buyers wrote.

## 8. Checks at 390 px (and 1280 px)

Rule (from David's 10 messages that were 4 avoidable mistakes): nobody else sees a page before we have looked at it on a 390 px phone screen ourselves. Not the code: the screenshots, opened and read.

**What the page check script measures (Playwright, headless Chromium), every page at 390 x 844 and 1280 x 800:**
- console errors = 0, failed requests = 0, horizontal overflow = 0 px (`scrollWidth` equals viewport), dead links = 0, `noindex` present, preview banner present, `robots.txt` Disallow.
- Buy test: choose tier 3 or 4, check the button price and the sticky bar price change (e.g. tier 4 gives $49.95), click buy, the preview toast appears, the URL stays the same.
- Sticky test: bar hidden on load when the button is visible, shown after the buy box scrolled away; also tested at 390 x 750 where the button is below the fold.
- Position of the buy button bottom edge and the price in pixels (e.g. price ends at 707 px, button at 827 px on 390 x 844).
- Review test: click "Show more" until the button disappears (185 clicks for 3,700), count cards, check width stays 390, 0 errors, identical neighbours 0, photo gallery count.
- Gallery test on desktop (columns end together at scroll 900).
- Screenshots per screen ("s01" to "s16" at 390 px, full page at 1280 px), which you then open one by one.

**Gotchas:** Playwright `fullPage` screenshots show a fixed sticky bar in the middle of the image; that is a capture artefact, measure the live state instead. A text search over the visible text (without script and style) catches leftovers: strike-through, "$X", "__", "[[", old store names (must be 0 after a rename).

**Proof that someone really looked (our page acceptance tool).** A local renderer with a fresh profile and network blocked creates the screenshots and writes a random code into the image only (its hash goes into a JSON file). A "looked at on 390 px" note can only be recorded by entering that code plus who looked and what was seen; any byte change in the page or images invalidates the note. Why: earlier the scripts stamped "seen" on their own, and on 02.11. "Musk approved" was claimed for 12 images nobody had opened.

**Before live:** a real iPhone in Safari.

## 9. Judge rounds ("Musk judge") until perfect

- A separate judge agent with a demanding owner's attitude (we call it the Musk judge: co-owner view, everything measured against the 200k profit goal, deadlines in hours) reads all pages and changes nothing. Output: a numbered defect list, each marked as buy-killer, strong or small.
- Verdict 1 runs in parallel per page group, all pages, compared against our best store (Curlmoon). Fix. Verdict 2 only on changed pages. Fix. A verdict costs about 7:30 minutes regardless of the number of defects [MEASURED].
- Acceptance (David, 2026-11-07, applies again): judge and fix until the judge names no defect ("absolutely perfect"), no fixed number of rounds. Never wait for a "perfect=true" flag (it never came in 12 rounds). If a verdict still names a buy defect (buy button, price, cart, size choice, guarantee, wrong product), fix only that spot and repeat that verdict; list other defects for David.
- Every change after the last verdict gets judged again (the Tuckwell clip was not, and that was a mistake).
- Fix only the named defects in a round, back up before each round (`*_vor_richter<n>.*`), keep old screenshots in a subfolder, then rebuild, recheck, reopen screenshots.
- Typical judge findings in the three student previews (useful as a checklist): no reviews or empty review box; main image not showing the result; delivery date hard-coded; price copied instead of measured; payment methods only as text; fonts too small; benefit line in two lines; badge covering the price; sticky bar visible on load; the same review shown twice; hook not above the fold; placeholder in a dark block; first "Show more" click showing the weakest reviews; notes instead of customer text on sub-pages; a hand-written Christmas date not matching our own delivery times; missing privacy and terms pages; "family-run" or "we test every calendar" claims without proof.

## 10. Domain and store name SOP (full version)

Fixed procedure since 2026-11-07, do not rethink it. Sources: Course D lesson 46 (brand names with ChatGPT), Course E 2026 (choosing a brand name), Course A 3.2 and the domain lesson, Course B.

**Lesson of 07.11.:** HoneySquishy, HomesteadPreserving and LiftPetHair came from the old Course A "Domain Name Prompt", whose line "The niche keyword itself must be included" forces a category word. All three failed our rules and were replaced by GigglePeek, Pantrymoon and PlushSweep. When using that course prompt, use it word for word but deliberately overrule that one line and write that you did.

**Rules** (in the short file): no product or category word; 5 to 10 letters; two soft real English words or one made-up word (pattern: place or feeling plus rest or benefit; round soft sounds for round soft products, "bouba" over "kiki"); radio test (no double letter at the word boundary, no two spellings); only .com, no number, no hyphen, no filler; neutral or positive meaning also in Urban Dictionary; not close to a known brand of the same buyers (Harvest is too close to Harvest Right, Tidy to Tidy Cats, Peepmoon to Peeps, Wigglemoon to The Wiggles, Gleemoon to Glee, anything with "merry" next to a competitor called merrysquish).
**Best-practice extra (Curlmoon standard):** the name carries the benefit and becomes the ad line. GigglePeek: the child giggles when peeking behind the door, ad line "A giggle behind every door", and the name still fits if the product changes from cubes to dumplings or birthday boxes.

**Steps:**
1. Generate 60 candidates (places and feelings from the buying situation: nursery, pantry, sofa). For GigglePeek 105 names were checked, 30 were free.
2. Check all live:
   - `.com` registry: `curl -s -o /dev/null -w '%{http_code}' https://rdap.verisign.com/com/v1/domain/<name>.com` (404 = free, 200 = taken). Save the raw results in a TSV (name, letters, RDAP .com, RDAP plural, myshopify).
   - the plural `.com` and `<name>.myshopify.com`.
   - no website (no DNS).
3. Cut the free ones with the rules, keep the best 3 with one reason each and a weakness each (GigglePeek: 10 letters, right at the limit, "peek" sounds hard; Plumpeek: spoken as "plump peek", so also buy plumppeek.com).
4. Brand check: 10 seconds of Google and Amazon for a known brand in the category. Better: Trademarkia search (gigglepeek and plumpeek: "No results"; control search "squishmallows" gave 54 marks, proving the search works). A full USPTO search per class is not required for short-lived test stores (David, 07.11.). Optional: Wayback history (archive.org answered 429 once; retry later) and a `site:` search.
5. Buy: David buys at checkdomain as a new customer for 0.84 EUR the first year (renewal for .com is about 2.39 EUR a month). Give him the name as a copy block and have him check the cart against it before paying. Price is not a selection criterion. Right after buying, cancel to the end of the term (never delete immediately), so test domains never renew. Exceptions: our mail domain and dlichters.com. Record the domain and account (never passwords) in our account list and put an expiry reminder line with "David" and a date in our open-items file.
6. Store email: `<storename>@` our catch-all mail domain, no paid mail package.

**Connecting a domain to Shopify (for students or a store bought elsewhere):**
- Variant A, buy inside Shopify: Settings > Domains > Buy new domain, type the name, check it costs about 16 to 20 USD a year (skip "premium" domains), Buy; Shopify sets it as primary; confirm "Primary" in Settings > Domains; wait up to 48 hours and open it on a phone with https.
- Variant B, registrar: Settings > Domains > Connect existing domain; at the registrar delete old A records for `@` and parking records; add **A record `@` -> 23.227.38.65** and **CNAME `www` -> shops.myshopify.com** (values from a course screen, measured on porchnap.com 03.10.2026 with nslookup); Verify connection; Set as primary; wait up to 48 hours for DNS and SSL.
- After: keep the old domain as a redirect until the new one loads with https and old ad links land; only then turn off its auto-renew. Create the shop email on the new domain and put it on contact, shipping and returns pages. In Meta Business Settings add the domain under Brand safety > Domains and verify via meta tag in `theme.liquid` `<head>` or a DNS TXT record [LIKELY, menu names can differ]. Update ad links and page website links.

## 11. Renaming a store that is already built

Checklist used for all three previews on 07.11.:
- In the build script: the NAME and MAIL constants (mail stays yellow until the domain is bought), the word mark in header and footer (two-part logo, one part accented in the brand colour; on a black footer use coloured text instead of a dark band, the band looked dull), titles, og:title, meta descriptions, product name, comparison table, about page, legal pages, copyright, image alt texts, comments in `shop.js`, the CSS class names that contained the old name, generated PDFs or printables (brand top right and footer line).
- New icon if the old one carried the name (GigglePeek got a smiling gift box).
- Check: a case-insensitive grep for the old name over the output folder, the build script and generated files returns 0; diff against the previous state shows only name, mail and logo; screenshots at 390 px of header, footer and about page opened. Older lines in the build log that mention the old name are history, not errors.
- Images where the name is only 2 to 3 px and unreadable can stay.

## 12. Publishing a preview on GitHub Pages

- One public repository per preview, named after the domain, so the URL is `https://davidlichters.github.io/<domain>.com/`. Never publish a new store over an existing preview repository.
- Copy only the public files: `index.html`, `robots.txt`, `assets`, `img`, `fonts`, `pages`, `products`, `kit` (if any), `.nojekyll`. Never the build folder, raw competitor captures, review raw data, supplier files.
- Push with the GitHub CLI credential helper. Then verify: every file byte-identical to the source (sha per file), and run the page check once against the live URL. If a hash differs, do not report it as live.
- Every page keeps the preview banner, `noindex,nofollow`, and robots Disallow. `og:image` needs an absolute URL after upload.
- Live and measured 2026-11-07 (HTTP 200): https://davidlichters.github.io/gigglepeek.com/ , https://davidlichters.github.io/pantrymoon.com/ , https://davidlichters.github.io/plushsweep.com/

## 13. Part B: going live on Shopify

No time measured yet (Tuckwell never went live).
- **12. Remove all yellow.** Input: supplier answers. Each answer turns a yellow spot white or deletes the sentence. For "the same product" the sample or David's phone report counts, not a written line from the supplier. Abort: one yellow spot left means not live.
- **13. Name and domain** as in section 10.
- **14. Shopify and checkout.** Own account and own identity per store; David creates the account (60 to 70 minutes of David [GUESS]; payments onboarding measured 19 min). We publish the theme ourselves from the command line (`shopify theme publish --theme <id>`), because the Shopify connector blocks publishing. Review app filled from the selected review file. Operator details per lawyer. Payment methods that are not set up are removed from the page. Test the contact mailbox with a test mail. A supplier agent (e.g. via the Dianxiaomi app) gets collaborator access with limited rights only: orders (view, edit, fulfil, add tracking), view products, view inventory; never settings, payments, payouts, apps, themes, discounts, customer export or staff (course judge 03.11.2026). Markets: only US active at the start (GB, AU, CA, International off until a UK VAT number, duties and delivery times stand; course judge 03.10.2026).
- **15. Ads:** own Meta identity per store (never another store's page), no source line, never "small pets", never a deadline, never shipping in ads, professional magazine-like look, AI video only from real product photos with the product unchanged. No foreign video 1:1 (cut and mix). If an ad is removed, the replacement goes up first so the course minimum (12 ads for Curlmoon) never drops. Money only with David's yes; campaigns are created paused.


Part 2 of 3 of "Store building: the full procedure". Map of all parts: https://dlichters.com/ai/ops/store-building.md · Previous: https://dlichters.com/ai/ops/store-building/01-contents.md · Next: https://dlichters.com/ai/ops/store-building/03-14-restyling-a-live-shopify-theme-to-look-like-ano.md
