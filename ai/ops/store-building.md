<!-- split-map -->
# Store building: the full procedure

When to read this: before you build, rebuild, rename, review-fill, check or publish any store or store preview for us, or before you help another course student with their store.

This file is the long version. The short rules (name rules, "same product means same size", review count 6,928, the 4.7 rule) now stand in the section "Short rules" right below (moved here on 2026-11-07 from https://dlichters.com/ai/ourrules/shop-building.md, which is now only a pointer), and the lawyer answers are in https://dlichters.com/ai/ourrules/legal.md. Read those first; the pages add the exact steps, numbers, tools and lessons that are not written there. Ads and test budgets are in https://dlichters.com/ai/ourrules/meta-ads-playbook.md and https://dlichters.com/ai/ops/product-testing.md.

Marks used below: [MEASURED] = we measured it; [GUESS] = estimate, not yet measured (our files write [RATE]); [LIKELY] = probable, not proven.

## Short rules (moved here from ourrules/shop-building.md on 2026-11-07)

> Our fixed process for every new Shopify store, from a name to a store we would put ad money behind.

### A store only counts if it is built with the system

1. Find the best competitor stores selling the same product (image search with the product photo, then confirm on each store that it is really the same product).
2. Put about 10 of them side by side and take the best part from each: hero, gallery, offer block, reviews, FAQ, footer.
3. Rework everything with our own rules (this folder) and the course knowledge (https://dlichters.com/ai/ecom/index.md).
4. Run judgment rounds until the verdict is "as perfect as it gets without a test". It must be at least as good as our best store so far.
5. Look at it on a 390 px phone screen before anyone else sees it. Not the code: the page.

Why: one store built in 10 minutes without a single competitor only measured how fast we can make a PDF. A store is about 3% of a weekly AI budget, so never save on it.

### Same product means same size

Before calling another store's photo, video or review "the same product", compare shape, material and the visible size in the frame against our measurements. We once picked 4 videos of a giant bed for our 40 to 70 cm bed.

### Store name and domain (every new store)

Rules, all required:
1. No product or category word in the name (not "DogBeds", "PetHair", "Squishy"). A category word locks you into one product forever.
2. 5 to 10 letters.
3. Two real, soft English words or one made-up word. Examples: Porchnap, Curlmoon (place or feeling plus rest or benefit). Round soft sounds (m, l, u, o) fit round soft products.
4. Radio test: heard once, typed right. No double letter at the word boundary, no two spellings (peek/peak).
5. Only .com, no number, no hyphen, no filler word (shop, store, best).
6. Neutral or positive meaning, also in Urban Dictionary.
7. Not close to a known brand sold to the same buyers.

Steps:
1. Generate 60 candidates from rules 1 to 3, using places and feelings from the buying situation (sofa, nursery, pantry).
2. Check all live: the .com registry lookup (RDAP, 404 means free), the myshopify name and the plural.
3. Cut the free ones with rules 4 to 7 and keep the best 3 with one reason each.
4. Brand check: 10 seconds of Google and Amazon for a known brand in the same category. A full trademark search is not needed for short-lived test stores.
5. Buy where a new customer pays the least (we paid under 1 EUR for the first year of a .com) and set it to expire at the end of the term right after buying, so test domains never renew by accident.

Why the old way failed: a name prompt that forced a niche word produced names like the old store name and LiftPetHair, all rejected.

### Images and ads

- Professional, calm home photos in magazine quality. No sticker boxes, no handwriting fonts, no customer phone photos as ads.
- AI video from real product photos is fine; check every clip frame by frame that the product did not change shape or size.
- Compare every new ad side by side with the competitors' winning ads before it goes out.

### Reviews

- Never invent a review. This is a hard line for us.
- We only show reviews from real buyers of the same product. Where they come from (for example buyers of the same item at other stores) is stated once in small print in the store footer.
- How many reviews per product: our working number is 6,928. Nobody has run an experiment on this; we checked what exists and the best range looks like 5,000 to 10,000, with harm estimated only from about 20,000 upward. 6,928 is our own pick inside that range, not a measurement, so we do not spend more time testing it. A store still only shows as many reviews as real buyers wrote.
- Which reviews: our lawyer told us (November 2026, our case) we may choose freely which real reviews we show. If the average is below 4.7 stars, we remove at least as many of the most harmful bad reviews as it takes to reach 4.7. Harm counts, not stars: "has nothing to do with the picture" (3 stars) hurts more than "ordered the wrong size, but good" (1 star).
- Newer (David, 2026-11-07 18:15): the displayed average must be 4.7 or 4.8 (above 4.8 leave out some 5-star reviews, because a near-perfect score looks fake) and no star bars at all. Full rule: section 18 in part 3, https://dlichters.com/ai/ops/store-building/03-14-restyling-a-live-shopify-theme-to-look-like-ano.md .
- The heading never claims "all reviews" (US FTC rules against hiding bad reviews); keep it neutral.

### Emails, languages, customers

- Store emails use one catch-all domain we own (store name @ that domain), no paid mail package per store.
- Write to a provider in the language of their last email to you.
- Business customers get everything in writing (email, screen recording, test build), never an offer to call or meet.

More: our Meta playbook https://dlichters.com/ai/ourrules/meta-ads-playbook.md · legal answers https://dlichters.com/ai/ourrules/legal.md · full store-building reference https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md


**This chapter is split into 3 pages of at most about 4,000 words so an AI can open exactly the part it needs. Pick the page whose headings match the question, open it, and answer only from what it says.**

1. https://dlichters.com/ai/ops/store-building/01-contents.md (3,801 words)
   Contents · 1. Two kinds of store work · 2. Fixed rules that apply in every step · 3. Part A: building a store preview, steps 0 to 11 · 4. The fixed store skeleton · 5. Copy rules
2. https://dlichters.com/ai/ops/store-building/02-6-images-and-video.md (3,884 words)
   6. Images and video · 7. Reviews: collecting, proving, filtering, ordering, showing · 7.1 Where real reviews come from · 7.2 Proving it is the same product · 7.3 Detecting imported, unproven reviews · 7.4 The filter pipeline (in this order) · 7.5 Ordering · 7.6 Showing · 8. Checks at 390 px (and 1280 px) · 9. Judge rounds ("Musk judge") until perfect · 10. Domain and store name SOP (full version) · 11. Renaming a store that is already built · 12. Publishing a preview on GitHub Pages · 13. Part B: going live on Shopify
3. https://dlichters.com/ai/ops/store-building/03-14-restyling-a-live-shopify-theme-to-look-like-ano.md (3,273 words)
   14. Restyling a live Shopify theme to look like another store (03.10.2026) · 15. The three store previews of 2026-11-07 · 16. Helping other students: outreach rules · 17. What is still missing in the system · Corrections 2026-11-07 evening (newer than the text above; details in sections 18 to 20 below) · 18. Reviews: which ones we show and what star average a store must display (moved here from ops/gaps-2-1.md, 2026-11-07) · 19. Invented reviews, star counts and customer numbers: never, and the real alternatives (moved here from ops/gaps-2-1.md) · 20. Design rules for every store we build (moved here from ops/gaps-2-1.md)
