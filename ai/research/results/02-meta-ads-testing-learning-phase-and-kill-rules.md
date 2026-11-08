<!-- part of research/results.md -->
Part 2 of 6 of "Research results: everything we asked Perplexity, condensed". Map of all parts: https://dlichters.com/ai/research/results.md · Previous: https://dlichters.com/ai/research/results/01-contents.md · Next: https://dlichters.com/ai/research/results/03-creatives-hooks-video-ugc-ai-images-and-video.md

## Meta ads: testing, learning phase and kill rules

**How many purchases make a 3-day CPA reliable** (2026-09-28)  
Meta gives no minimum. Its ~50 results per ad set per week after the last significant edit is about leaving the learning phase, not CPA precision. With 3 purchases the 95 % interval of the true CPA is 0.34x to 4.85x the observed value; practitioners want 25-50 purchases. With 3-10 purchases a 3-day CPA is a hint, not a verdict.

**Splitting ~100 USD/day across ad sets for a 7-day test** (2026-09-29)  
Two clearly different variants at 50 USD/day each, one ad in its own test group, ideally as a Meta A/B test (own recommendation). At 20 USD CPA that is 17.5 purchases per variant in 7 days, at 30 USD only 11.67: a preliminary read, no guaranteed winner. Meta currently suggests max 5 ads per ad set, ~50 optimization events per group per week; CBO does not split budget evenly; 7 days and few purchases prove no creative winner. The "5x budget" guidance applies only to the cost-per-result goal.

**When to kill a new ad when Q4 CPMs rise** (2026-09-29)  
Pre-set stop-loss beats killing on CPM or calendar; Meta says judge the optimization event and overall result over at least a full week. Working rule: first review after 3 days, zero-purchase cut at 2x target CPA (94.02 USD for us), approved extension to max 3x (141.03 USD) if add-to-cart signals exist. CPM rise alone is no stop reason. Later deep answer (2026-09-30) found 1.5-2x CPA zero-purchase cut too aggressive (13.5-22.3 % false kills) and proposed pausing at 0/1/2/3 matured purchases from 3/5/6.5/8x target CPA, scaling only from 20 purchases and CPA at or below 0.8x target, +20 % per 72 h.

**How long and how much before a kill decision is reliable** (2026-09-30)  
Let a new purchase campaign run a full week; a kill needs matured purchase data plus a pre-set loss cap. Model: one ad set, 3 different creatives, daily budget = 20 x expected CPA / 7: at 45 USD CPA about 130 USD/day, max 910 USD for the first 7-day test. Zero purchases: stop at about 3x allowed CPA is better founded than 1.5-2x.

**Learning phase with a fresh pixel and domain in Q4** (2026-09-30)  
~50 optimization events per ad set per week is a stability guide, not a requirement for Purchase optimization. At 50-100 USD/day only CPAs of 7-14 USD give 50 purchases/week. A 3-day CPA is a direction; judge after 7-10 days (Code3). We deleted "day 3, kill above 47": it would wrongly kill 33.5 % of ads with a true CPA of 33.

**Judging 4 ad sets in CBO at 50 USD/day after 2 days with 1-3 purchases** (2026-10-01)  
No winner can be named; CBO spend gives no fair group comparison. Practical CPA proxy: early cost per checkout times a historical matured checkout-to-purchase rate (if enough checkouts), else calibrated add-to-cart cost; CTR and hook rate are diagnostic.

**Purchases and days until CPA stabilizes** (2026-10-04)  
Meta: about 50 purchases per ad set within a week. At 50-200 USD/day and e-commerce median CPA 38.99 USD only 9-36 purchases/week; 50 purchases take about 39 / 20 / 13 / 10 days at 50 / 100 / 150 / 200 USD/day. Formal learning threshold usually not reached.

**Kill rule for a 69.99 USD product, 18.90 cost, 47.01 break-even CPA** (2026-10-05)  
Pause an isolated test at 94.02 USD spend without a backend purchase (2x break-even, Madgicx 8 Sep 2025), ideally reached after 3 full days at 31.34 USD/day; 141.03 USD without purchase is the absolute emergency brake (3x, AdBid 25 Dec 2025). If 94.02 is hit within 48 h, stop and check tracking. Three-day evaluation with 1-4 purchases: see 2026-10-08.

**Kill rule confirmed three times** (2026-10-05)  
All three deep answers agree: pause ad set at 94.02 USD spend without purchase = 2 x 47.01 (Madgicx 8/14 Sep 2025); review window 72 h or 3 full days (Zentric 23 May 2026); if 94.02 is reached earlier stop at once and check tracking; 47.01 without purchase is only a check threshold (SocialBaddie 8 Mar 2026); 141.03 (3x) hard ceiling (AdBid 25 Dec 2025). Purchases can appear in Meta with 24 h+ delay. Later (2026-10-08): practitioner guides mostly use 2-3x target CPA for zero purchases; killing at 1x (47 USD) is aggressive.

**When is a CPA judgeable** (2026-10-05)  
Meta: about 50 purchases per ad set in 7 days to exit learning (help page 112167992830700). Triple Whale median CPA 38.99 USD (40,000 e-commerce brands, 1 Aug 2025-31 Jul 2026, published 18 Aug 2026). At 50 USD/day = 9 purchases/week, 50 after 39 days; at 200 USD/day 36/week, 50 after 9.7 days. CPA is directional from 7 days and 5-10 purchases, usable from 10-14 days or 20-30 purchases.

**3-day kill rules with 1-4 purchases at 50 USD/day** (2026-10-08)  
After 3 days 150 USD spend: CPA 150 / 75 / 50 / 37.50 USD at 1-4 purchases. Decide by contribution per order, not price (Nick Theriot, 10 Feb 2025). No public verifiable rule "after 3 days at 1/2/3 purchases".

## Meta ads: campaign structure, scaling, countries

**Launch-day Meta campaign for a new shop, 50-150 USD/day** (2026-09-28)  
One Advantage+ Sales campaign, one broad US ad set, 6 creatives, about 100 USD/day; cost reference 2025 median 38.18 USD per purchase for Pets & Animals, plan more conservatively for a new Q4 shop. Includes rules, UTMs and copy.

**Advantage+ Sales changes and advice for accounts without purchases** (2026-09-29)  
The big change (one unified campaign flow; Advantage+ shown as "on" depending on chosen settings) was announced Feb 2025, not 2026. Advantage+ Sales = Advantage+ audience + placements + campaign budget; audience suggestions optional; budget strategy selectable.

**Campaign type for a fresh pixel with zero purchases** (2026-09-30)  
No proven first-week winner. Decision: one consolidated Sales campaign optimizing directly for Purchase, Advantage+ audience/placements open; campaign budget allowed. No add-to-cart warm-up (the ATC study by Wpromote is from 2020 and favored Purchase). A Reddit cold-start case (24 May 2026): first purchase at about 8x target CPA.

**Campaign structure for a seasonal Christmas dropshipping product** (2026-10-01)  
No public complete case. Start with one consolidated Sales/Purchase campaign, add affordable creative testing, separate retargeting or offer campaign only with proven extra value. Planning math: +20 % every two days after initial observation could reach several thousand USD/day before BFCM (own math).

**Optimization event for a fresh pixel at 50 USD/day (contradicting answer)** (2026-10-01)  
This answer recommended starting on Initiate Checkout (deepest workable proxy) instead of Add to Cart if it fires cleanly; Meta suggests the event with enough volume (about 50 per ad set in 7 days) and mentions switching events when Learning Limited. Our decision (2026-09-30 and 2026-10-04 triple checks) remained: optimize for Purchase from minute 1.

**Countries and budget for the first 7 days** (2026-10-04)  
Only the US for 7 days; put the planned 100 + 50 USD into one broad Purchase ad set at 150 USD/day. Five countries together or five ad sets cannot give a reliable country test at this budget. Then test CA, UK, AU, NZ one by one with at least 70.52-94.02 USD/day, only after shipping, duties, delivery date and country break-even CPA are checked.

**Scaling rule from day 4** (2026-10-04)  
No controlled study proves a fixed CPA increase per budget doubling. Decision: raise budget at most 20 % every 72 hours, only with enough purchase volume and a pre-set CPA brake; no identical duplicates, no early doubling, new countries only as separate controlled expansion. Meta names no "20 % reset" limit (the 20 % is practice).

**Meta changes June-October 2026** (2026-10-04)  
Relevant: creative updates announced 23 Jun 2026, location fees from 1 Jul 2026, API release 29 Jul 2026. Advantage+ audience and placements preset in the new Sales flow but not mandatory. No new general minimum budget, no new learning threshold, no automatic block of new accounts. Start broad and consolidated, consciously approve attribution and creative defaults.

**Meta setup defaults to switch off** (2026-10-04)  
Attribution 7-day click plus 1-day engage-through still exists; Advantage+ audience/placements preset but optional; no new minimum budget. "Text improvements" (Advantage+ creative) are on by default: switch off and check "For review".

**Scaling ladder (decision, course-based)** (2026-10-04)  
Kept playbook rule: budget steps 75, 150, 300, 500, 750, 1,000 USD/day, next step only after 3 stable days, never raise daily (course sources CD26 Meta101, CE26). "Daily +20 %" rejected: the projected 191,000 USD assumed a flat CPA, unproven.

## Meta ads: ad accounts, limits, payment, agencies

**Stable Meta ad accounts for a new US shop** (2026-09-28)  
Most stable setup: own verified Business Manager as primary, Creator Partnership Ads as a second leg, an agency ad account only later as redundancy. "Ban-proof" bought accounts or anti-detect/cloaking setups do not exist; Meta treats creating new assets to evade earlier restrictions as its own restriction reason. Legal name, address, phone, website, documents and card holder must match exactly; domain verified, HTTPS. Meta publishes no warm-up plan. Conservative practice framework: days 1-7 check infrastructure, days 8-14 start Sales at 20-30 USD/day, days 15-21 go to 30-50 USD/day, then scale at most 20-30 % every 3-5 days.

**Spending limits of a new Meta ad account** (2026-09-29)  
Meta publishes no standard starting daily spending limit (DSL) and no ladder. Agency example (24 Feb 2025): 50 USD/day DSL, raised to about 250 after 600-1,000 USD cumulative spend (12-20 spending days at 50 USD), not a Meta rule (guess). Faster only via offered payment-method or business verification (10 min to 14 business days), no guaranteed amount. Billing threshold triggers a card charge when reached; it is not the daily limit. Account spending limit is set by you.

**Bringing a Page into a business portfolio** (2026-10-03)  
Needs full control on the portfolio, not just the Page. If another portfolio owns the Page: "Request shared access" or remove it there first.

**Daily spending limit growth** (2026-10-04)  
About 50 USD/day is a reasonable assumption for a new account; reports from 2025/2026 also mention 20, 25 or 250 USD. Growing to 3,000-7,000 USD/day by end of November cannot be planned: one public self-report went 20 to 1,200 USD in nine days; no general ladder to 5,000 or "unlimited".

**Payment methods for a EUR ad account billed in the US** (2026-10-04)  
Meta US: Visa, Mastercard, Discover, American Express, PayPal, direct debit. With EUR currency check Visa/Mastercard or PayPal; Amex in EUR needs a billing address outside US/Canada; direct debit needs currency matching the tax country.

**Payment method and limit for a new US USD ad account** (2026-10-05)  
Use a funded business credit/debit card with automatic billing. Direct debit does not raise limits and may need 3-4 days verification. 25 USD is Meta's example of a payment threshold for a new account, not a guaranteed first daily limit; no fixed starting DSL published; it grows with history, policy compliance and spending near the limit.

**Agency ad accounts with prepayment** (2026-10-08)  
250 USD first top-up is a plausible vendor offer, not a standard: GDT 200 USD minimum top-up plus 4 % commission; Clientify 250 USD monthly rent plus 3 %; UpROAS Gold 299 USD/month with 0 % or 6 % spend commission (checked 7 Oct 2026). For a new shop an own ad account is preferred: fixed rent makes small tests expensive and adds dependency on the owner.

## Meta ads: policy and rejections

**Breed-specific copy and the Personal Attributes rule** (2026-09-30)  
"Your Frenchie already claims the warmest spot" / "Dachshunds burrow the second it gets cold": no visible violation; Meta's lists do not include dog ownership or breed, and "you/your" is allowed without prohibited attributes. No documented rejection for breed ownership. First review about 24 h, re-review 24-48 h. Interpretation, not a guarantee.

**Ad rejections and restrictions for new pet ad accounts** (2026-09-30)  
No public ranking for week one. Check in order: account/payment security, misleading claims, landing pages, product eligibility. Meta: first ad review usually 24 h; ad appeals 24 h or target 48 h; account reviews typically 48 h; no guaranteed maximum. No CBD pet products via the general flow.

**Engagement bait in paid ads** (2026-10-04)  
Meta lists engagement bait as a low-quality attribute for ads too: worse quality ranking and auction, rejection if a policy breach. No word list, no penalty %, no exception for Feed/Reels/Stories. Diagnostics from 500 impressions over 35 days. "What's on your pet's record this year?" lowest risk; "Comment your pet's name and we'll reply with Santa's verdict" avoidable comment-bait; "Send this to..." avoidable.

**"Free US Shipping" and 6-10 business days in ads** (2026-10-07)  
Allowed if shipping costs and restrictions are truthful and the delivery claim is substantiated at publication with real order-to-delivery data (FTC), not supplier marketing. No special Meta rule for China dropshipping times. Meta "Prohibited Commercial Practices" is the relevant consolidated policy (announced around 9 Sep 2026).

## Meta ads: pixel, CAPI, bulk import, UI paths

**Meta bulk import column names** (2026-09-30)  
Documented by Meta: Body (primary text), Title (headline), Link Description, Link, URL Tags, Ad Status / Ad Set Status / Campaign Status, Ad Set Daily Budget or Ad Set Lifetime Budget. Values seen: Paused/Off, Sales, Auction, budget X.XX; third-party docs use Ad Set Run Status, PAUSED, OUTCOME_SALES. No current full template proven: always export from the target account and build the file from that export. Native template about 2 MB.

**Does a test order fire the Meta Purchase event** (2026-09-30)  
A normal Shopify order with 100 % discount and truly free total (needs free shipping too) can fire Purchase without real payment. Bogus/test gateway: checkout pixel test officially intended but receipt by Meta over all browser and server paths not guaranteed (no test-code field in the native integration). Check: Events Manager > data source > Test Events > open website, then verify Purchase, connection type, value, currency; check CAPI path separately. test_event_code does not stop events from being used.

**Shopify Facebook & Instagram app: pixel switch, currency, VAT, domain** (2026-10-03)  
Pixel switch: Settings > Share data settings > Change > Create new. Data sharing levels: Standard / Enhanced / Maximum ("Conservative" no longer). Official integration needs a Business Portfolio. USD purchase values are converted into ad account currency for reporting. For an ad account flagged as private (not business) in Germany, 19 % VAT is charged on top, outside "Amount spent". Domain verification path: Settings > Brand safety > Domains.

**Meta Ads Manager UI paths** (2026-10-03)  
Currency and time zone: Payment settings > Business info > Edit. "Review and publish" first opens pending changes; select before Publish. Bulk import: whether the "Image" column links a file name already in the account's media library is not publicly specified.

**Video and image in Meta bulk import** (2026-10-03)  
A not-yet-uploaded video can be referenced via "Video file name" and uploaded in the same import under "Videos"; max 10 videos per import, max 10 MB each. For already uploaded images use "Image Hash" per a freshly downloaded template, not the file name. Bulk import does not set separate 9:16 creatives for Stories/Reels; check placement creatives in the editor after import.

**Connecting Shopify to the right Meta dataset** (2026-10-05)  
In "Facebook & Instagram by Meta" connect the productive dataset by numeric ID, set data sharing "Maximum", and under Settings > Customer events > Facebook & Instagram set "Always on"; remove other installed Meta pixels so pixel and CAPI deduplicate the same purchase (Shopify/Meta, 12 Jan 2026). One correctly received Purchase in the chosen dataset is enough to start purchase optimization.


Part 2 of 6 of "Research results: everything we asked Perplexity, condensed". Map of all parts: https://dlichters.com/ai/research/results.md · Previous: https://dlichters.com/ai/research/results/01-contents.md · Next: https://dlichters.com/ai/research/results/03-creatives-hooks-video-ugc-ai-images-and-video.md
