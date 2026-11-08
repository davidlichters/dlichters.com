<!-- part of ops/playbook-full.md -->
Part 1 of 3 of "Porchnap Playbook (complete, with every rule ID and course source)". Map of all parts: https://dlichters.com/ai/ops/playbook-full.md · Next: https://dlichters.com/ai/ops/playbook-full/02-7-part-d-fixed-number-rules.md

## Contents

1. How to read this file (terms, sources, status markers)
2. Bump ladder (Timo's budget rule, never delete)
3. The numbers everything hangs on
4. Part A: before the first ad dollar (A1 to A10)
5. Part B: day 1 to 14 after launch (daily routine, B1 to B14)
6. Part C: October to 4 December, week by week
7. Part D: fixed number rules (D1 to D32)
8. Part E: the 10 most common course mistakes and where we made them (E1 to E10)
9. Contradictions between area files, and how they were decided
10. Part F: product test and kill rules (rules 1 to 21, the "decision rules" file)
11. Part G: the scaling ladder as decided by the course judge, and the worked ladder table
12. Course abbreviations and lesson titles

---

## 1. How to read this file

- Status: version of Saturday 3 Oct 2026 16:00 (Berlin), built from six cross-checked area files (shop, Meta test campaign, creatives, offer/price/shipping, daily operations, Q4 and scaling; measurements taken 15:24 to 15:46 that day), with dated amendments up to 1 Nov 2026. It overrides every older rule we had.
- Every line names its course lesson. "Own" means our own rule, not a course rule. Abbreviations are explained in section 12. A time stamp like [07:36] is the minute in the lesson video; [PDF], [Document], [Page text] mean lesson text without a time stamp.
- Markers: [RATE] = guessed or from an unverified source. [WAHRSCHEINLICH] = probable. [SICHER] = measured. STRUCK = a rule David or Timo cancelled; it stays visible so nobody re-proposes it.
- Amendment 4 Oct 2026 12:55: B2 and B6 were aligned with D3 (video CBO 50 instead of 150 and 300 USD; start day = account day 3, per course-judge verdict 4 Oct 12:43).
- **Terms.** CPA = ad cost per purchase. ROAS = revenue divided by ad spend. CBO = campaign budget optimization (the campaign distributes its own budget). ABO = budget per ad set. Ad set = ad group. Concept = one message (for example "deadline Dec 4"). Creative = one image or one video. BOF = bottom-of-funnel ad (simple product image ad for people ready to buy). P&L = profit and loss sheet. BM = Meta Business Manager / business portfolio. "BM3" = the third business portfolio we used for Porchnap ads.
- **Course judge ("Kursrichter").** From 3 Oct 2026, any yes/no rule question went to an automated script that searched our full course transcripts and returned a verdict (KEEP / CHANGE / DROP) with lesson quotes. David (3 Oct, 21:20): "yes/no is decided by the course judge". A rule from Timo or David only entered the playbook after the course judge found a lesson for it. You can rebuild this by hand: search the transcripts for the topic, quote the lesson with minute, then decide.

## 2. Bump ladder (Timo, 4 Oct 2026 15:35, NEVER DELETE; David's additions may only be added, never replace it)

- Start a campaign at 50 or 100 USD per day.
- Raise the budget ONLY when ROAS is 2.0 or better, and ONLY at 17:00 New York time (23:00 Berlin) or 05:00 New York time (11:00 Berlin).
- Ladder from 50: 50 > 75 > 110 > 150 > 200 > 275 > 350, then +25 % per raise.
- Ladder from 100: 100 > 150 > 200 > 275 > 350, then +25 % per raise.
- The 25 % rule only applies from roughly 200 to 300 USD per day. Timo verbatim: "it only applies from about 200 to 300 budget, before that we start with 50 or 100 ... always bump only after 2 ROAS at 5 pm eastern time or 5 am eastern time".
- Course check (David's condition on 3 Oct: "check the courses first"): every step lies between +25 % (CD26 CBO [07:36]) and doubling below 500 USD (D12, CD26 Meta101 [Document]). ROAS 2.0 is stricter than our scaling threshold 1.86 (D1). The clock times appear in no course; they are Timo's practice.
- History: David said "+25 %" at 15:05, then "yes" at 15:25 to "double up to 500, every 48 h, from ROAS 2". Now the ladder applies; doubling is only the upper limit.
- If profit falls after a raise: go back one step (CD26 CBO [07:36]).

## 3. The numbers everything hangs on

- **Break-even CPA 47.01 USD (break-even ROAS 1.49)** for one bed at 69.99 USD. Derivation: 69.99 x (1 minus 5.83 % payment fee) = 65.91, minus landed cost 18.90 USD (bed size S, delivered duty paid, from supplier Bonnie) = 47.01 contribution before ads. Above a 47.01 USD CPA every sale loses money.
- **Planned CPA 33.12 USD** (not measured for this product: it is the average ad cost per order of our previous book store, 7,087.48 USD ads / 214 orders, July to September 2026; real only after 20 purchases). It leaves 13.89 USD profit per single bed.
- Honest math: 1,000 USD of ads per day gives about 30 purchases and roughly 419 USD profit per day. The goal of 200,000 USD profit (counted from 0 on 1 Oct 2026 to 31 Dec 2026, 92 selling days) needs about 2,174 USD profit per day. Only more profit per order (bundles, post-purchase upsell), budget above 1,000 USD per day, and from 12 Oct a second product close that gap (area file 06, section 1).
- Payment fee 5.83 % was measured on one Shopify Payments payout (86.42 EUR fee on 1,481.99 EUR), August 2026. It includes currency conversion because payouts went in EUR.
- Meta's "Amount spent" excludes VAT. If Meta adds 19 % VAT on a German EUR ad account and you cannot reclaim it, the real kill line is 39.50 instead of 47.01 USD. Check the Meta invoice before fixing any CPA limit (lesson 30 Sep 2026).

## 4. Part A: before the first ad dollar

**STRUCK 5 Oct 2026 08:4x.** David: "What is still stopping us from launching? ... Something is going very, very, very wrong here"; on 4 Oct 14:19: "stop holding us up". There is NO gate before launch any more. The A points are not conditions; test purchase, shop ticket, domain-registrar tasks and BM3 checks are struck. Ads may run as soon as David and Timo publish them. Course: being too slow is mistake number 1 (E1, CD26 Skalieren [01:10]). Old rule: no sales budget before A1 to A9 are green.

| # | What must be true | Our state (as of 3 to 5 Oct) | Who | Source |
| --- | --- | --- | --- | --- |
| A1 | BM3 checked: active, payment method, USD, time zone, limit, Porchnap page inside. Only from Timo's PC, same IP. | unknown | Timo | CD26 BM [02:01]; CD26 Regeln [00:00]. STRUCK 4 Oct 14:25 (David: "what BM3 pre-check, the BM3 has everything?"): no BM3 pre-check, never remind. |
| A2 | Own dataset (pixel) in BM3, connected in the Shopify channel "Facebook & Instagram", data sharing Maximum; domain verified in BM3. | open: the shop still sent events to the pixel of the old book portfolio; domain unverified | Timo; DNS TXT record David | CD26 PixelShop [01:40]; CD26 Whitelist [30:39]; CD26 PixelBM [00:33]; CD26 Meta101 [02:20] |
| A3 | Shipping has one truth: USA 0.00 USD for every order, 6 to 10 business days; old discount codes and "Free Express Delivery" off. | done 5 Oct [SICHER, Shopify admin]: US zone has exactly one rate "Free US Shipping (tracked)" 0.00 with no condition; 0 active discount codes (SPECIAL15 off) | nobody | CD26 Setup [08:37]; CE26 Shrine [23:43] |
| A4 | Only USA sellable: Canada, UK, Australia, rest of world off in Shopify Markets. | done 3 Oct 23:33 [SICHER]: one market, United States only | nobody | CC23 StoreConv [1:12:45]; own: no duties-paid price for other countries |
| A5 | Stop the bundle-app (Kaching) A/B test; "1 Bed" preselected; 3 beds 167.98 (minus 20 %); free guide in 2-bed and 3-bed tiers; footer without PayPal and Discover icons. | open on 3 Oct: test running, 3-bed 157.50, guide missing, icons in footer | Claude after yes; guide Timo | CD26 Apps [Page text]; CD26 Preis [01:03] [01:36]; CD26 Marge70 [01:13] |
| A6 | Test purchase of 1 bed with a 95 % test code (card, Apple Pay, Shop Pay): Purchase event with value, shipping 0.00, confirmation mail arrives; refund. | no test purchase | Timo pays | CD26 Checkliste [PDF]; CD26 PixelBM [04:15]. STRUCK 4 Oct 14:24 (David): no test purchase, never propose. |
| A7 | Shop review ticket to the Course D coaches right after A6; warm-up runs while waiting; without an answer by Sunday 12:00 the image CBO starts anyway (own). | no ticket | Timo | CD26 Woche1 [03:19] |
| A8 | Supplier Bonnie in writing: payment method, processing time (Chinese Golden Week until 8 Oct), tracking within 48 h, arrival by 22 Dec for orders up to 4 Dec. | open. Until Bonnie confirms in writing (checker 4 Oct 13:10): the Tree Cave design goes to agent John (25.67 USD; US shipping, duties and size S unchecked), course judge 4 Oct 12:43. The Candy Cane design is not shipped until Bonnie answers "gold or white"; if "white", ask the buyer before shipping (course judge 4 Oct 13:03). | David | CD26 Chargeback [03:30]; CD26 Lieferant [00:56]; CD26 Setup [08:08] |
| A9 | support@ mailbox receives mail, Shopify DKIM and DMARC set, tracking page (Track123) shows "Porchnap". | open: support@ accepts mail (SMTP 250), no DKIM, no DMARC; Track123 still showed the old store name | David; Claude after yes | CD26 Apps [Page text]; CD26 Setup [10:19]. STRUCK 4 Oct 14:22 (David): DMARC and Meta's domain code at the registrar are nobody's job on Claude's prompting, never remind. |
| A10 | Warm-up per D2. Image CBO starts after the 8 to 10 USD warm-up with 20 USD per day, from account day 3 with 50 USD (steps own, frame CD26 Regeln). 3 ad sets, 1 concept each, 4 images each (benefit, deadline, two beds). Objective purchase, broad USA 18 to 65+, attribution 7-day click plus 1-day engage-through. Verdict after 48 to 72 h; run a product at least 3 days. | open: draft plan had 1 ad set with 4 images from 4 concepts | Claude builds images, Timo publishes | CD26 Regeln [00:40] [screen text]; CD26 Warmup [01:12]; CD26 Roadmap [02:58]; CD26 Kennzahlen [00:00]; CD26 Fehler [01:47]; CD26 Messaging [PDF]; CE26 Kampagnen [18:00]; CE26 Attribution [04:51] |

## 5. Part B: day 1 to 14 after launch

Counted from the start of the image CBO (planned Sunday 4 Oct). Every delay shifts everything. B = day of the image CBO, V = day of the video CBO.

**Every day (times Berlin, own):**
- 06:30 send orders older than 12 h, batched, to supplier Bonnie and pay.
- 07:00 one row into the P&L sheet: spend, CPM, CTR, CPC, add-to-carts, purchases, revenue, goods cost, fees, profit.
- 07:20 screenshot of that row into the Course D coaching ticket.
- 13:00 tracking numbers.
- Inbox at 07:30, 14:00, 20:30; answer the same business day.
- 18:00 write to customers whose parcel has no new scan, before they ask.
- 21:00 daily accountability form, top 3 for tomorrow.
- Sources: CD26 PL [00:35]; CD26 Report [01:29]; CD26 Form [00:58]; CE26 CSAT [08:19]; times own (area file 05).

| Day | Measure | Decide | Build new | Source |
| --- | --- | --- | --- | --- |
| B1 Sun 4 Oct | Does Meta deliver, no rejections, every purchase arrives as Purchase event | touch nothing | 9 videos: 3 concepts x 3 clips; remove the AutoDS app (D23); note payout rhythm | CD26 Paper [03:02]; CE26 Q4 [1:03:58]; CD26 Setup [05:46] |
| B2 Mon 5 Oct | 24-h report; metrics only for finding faults (D9) | nothing; add-to-cart without purchase: test the checkout yourself | Video CBO per D3: 50 USD, earliest account day 3 (Tue 6 Oct), instead of a second image CBO (course judge 4 Oct 12:43); import file with 9 videos in 2 ad sets, paused; one new concept | CD26 Kennzahlen [04:49]; CD26 Whitelist [37:57]; CD26 BOF [25:04]; CD26 Produkttest [06:23] |
| B3 Tue 6 Oct / V1 | 48-h report | nothing | replacement concepts; install the chargeback app Disputely | CD26 Apps [Page text] |
| B4 Wed 7 Oct / V2 | 72 h of images | D6 per ad set; do not touch winners; budget step per D11 | new concept; 7-day check of competitor ads | CD26 BOF [24:35]; CD26 CBO [06:58] |
| B5 Thu 8 Oct / V3 | numbers for the Course D Q&A at 14:00 | nothing | first tracking numbers there? (D26) | CD26 Chargeback [03:30] |
| B6 Fri 9 Oct / V4 | 72 h of video | D6 for video; video stays 50 USD (D3), raise only per D11 and D12 (from 50 first to 75) | new concept | CD26 Meta101 [Document] |
| B7 Sat 10 Oct / V5 | 7 days of images | D8 product verdict for images | nothing | CE26 Office [45:16] |
| B8 Sun 11 Oct / V6 | frequency per ad | D10; step per D11 | weekly balance | CD26 Spalten [01:50] |
| B9 Mon 12 Oct / V7 | 7-day funnel: which half brakes, ad or page | work only on the weak half; D8 for video | second-product test 1 (D28); new concept | CE26 Funnel [11:22]; CD26 Socks [10:18] |
| B10 Tue 13 Oct | refunds, chargebacks per order | above 1 %: find cause the same day (D27) | winner loop: new message, 2 new formats | CD26 Chargeback [02:54]; CD26 Messaging [PDF] |
| B11 Wed 14 Oct | transit time of the first parcels | step per D11 | new concept; real clips from the product sample | CE26 Q4 [1:08:45] |
| B12 Thu 15 Oct | from 20 purchases: share of 1, 2, 3 beds, repeat-purchase rate, profit per visitor | D30 offer test | nothing | CD26 Validierung [10:17] |
| B13 Fri 16 Oct | daily report | step per D11 | new concept | CD26 BOF [12:03] |
| B14 Sat 17 Oct | 2 weeks: profit against plan | move winning ad sets into one main CBO (D4) | from 10 orders per day: 1 week of stock at the supplier (D26) | CD26 Messaging [PDF]; CC23 BFCM [21:22] |

## 6. Part C: October to 4 December

| Week | What | Source |
| --- | --- | --- |
| 5 to 11 Oct | Read tests, first budget steps, Disputely. Email pop-up live, collect addresses. | CD26 Produkttest [26:16]; CC23 BFCM [1:07:34] |
| 12 to 18 Oct | Second-product tests (D28); winners into the main CBO. | CD26 Socks [10:18] [00:56] |
| 19 to 25 Oct | Scale per D11 to D14, test lane 15 to 20 % of budget. 25 Oct clock change: Eastern Time = Berlin minus 5 h until 1 Nov. | CC23 BFCM [1:04:31] [1:05:22] |
| 26 Oct to 1 Nov | Gift message in shop and evergreen ads, without discount (for us from launch). | CE26 Q4 [10:29] |
| 2 to 8 Nov | Retargeting after 2 to 3 weeks of traffic: 5 to 6 images with the offer. | CC23 George [22:11]; CC23 BFCM [1:09:05] |
| 9 to 15 Nov | By 15 Nov, in writing from Bonnie: beds per day from 27 Nov to 4 Dec; fixed weekly appointment. | WF22 TikTokBF [09:17] |
| 16 to 22 Nov | By Fri 20 Nov put a Black Friday banner on the 2 to 3 best creatives, no new creatives. Schedule the BF campaign in the ad account's time zone. | CC23 BF [11:22]; CC23 George [21:14]; CE26 Kampagnen [15:18] |
| 23 to 29 Nov | Tue 24 Nov 00:00 ET VIP early access for the email list; Thu 26 Nov mail "public tomorrow"; Fri 27 Nov Black Friday (D24). | CE26 Q4 [07:09] [07:57]; CC23 BF [07:23] |
| 30 Nov to 4 Dec | 30 Nov 23:59 ET Black Friday really ends. 1 to 4 Dec normal prices; Black Friday ads re-launched as new ads with Christmas text. 4 Dec 23:59 ET Christmas ads off; from 5 Dec no Christmas delivery promise. | CE26 Q4 [1:27:25] [1:31:00]; CD26 Setup [08:08] |


Part 1 of 3 of "Porchnap Playbook (complete, with every rule ID and course source)". Map of all parts: https://dlichters.com/ai/ops/playbook-full.md · Next: https://dlichters.com/ai/ops/playbook-full/02-7-part-d-fixed-number-rules.md
