<!-- part of ops/product-testing.md -->
Part 1 of 2 of "Product testing: finding, gating and judging products". Map of all parts: https://dlichters.com/ai/ops/product-testing.md · Next: https://dlichters.com/ai/ops/product-testing/02-11-campaign-dry-run-and-the-lock-test.md

## Contents

1. The pipeline at a glance
2. The finder: words from the Meta Ad Library
3. The stock list (Vorrat): results of 2026-11-06
4. The candidate hunt of 2026-11-07: 30 candidates, 0 passed
5. Supplier prices: only in writing
6. Gate 1, the product calculator: formulas, constants, thresholds
7. Worked numbers: Curlmoon (37.50 / 75.00) and bundles
8. The test form and the stages
9. The ad watcher and the rules engine: phases, thresholds, verdicts
10. The reading page and the human steps
11. Campaign dry run and the lock test
12. The course judge (Kursrichter): procedure and past verdicts
13. Open contradictions we know about

---

## 1. The pipeline at a glance

1. **Finder** ranks product words from the Meta Ad Library (who advertises what, how long, how many new ads).
2. **Stock list** turns finder words that pass the filter into one row per product: winner store, measured US price, image, supplier price if any, gate result. Goal: 15 rows that pass gate 1.
3. **David's veto column** "real or fake": once for all 15 rows, then no more product vetoes per test.
4. **Supplier price** in writing from our agents.
5. **Product sheet** (JSON) per product, then **gate 1** (the calculator). Only a pass, with a confirmed supplier price, unlocks a store build.
6. **Store build** (store-building file), **campaign dry run**, David switches on.
7. **Watcher** reads spend and orders every few minutes; the **rules engine** turns them into one verdict per reading; a reading page shows it.
8. **Course judge** answers yes/no questions with course quotes instead of asking David.

Design principle (David): the system works through the list without him; he only does what only a human can (logins, payments, switching campaigns on, phone calls). Everything not read is "not read", never 0. No guess replaces a missing number.

## 2. The finder: words from the Meta Ad Library

- Input: a list of product words (210 words in the 2026-11-02 run). For each word our scraper collects the US ads from the Meta Ad Library and ranks the advertisers.
- Per word it records: points (a combined score), the strongest domain (the "winner" store), the winner's longest running ad in days, new ads in the last 30 days, number of advertisers.
- **Filter:** a word is excluded with **more than 15 advertisers** (too crowded). In the 2026-11-02 run 19 of 210 words passed; 191 failed, 84 of them only because of more than 15 advertisers. Lowering that limit is David's decision, not the AI's.
- The Ad Library blocks plain curl (403). New words need our own Chrome tab; 500 to 750 new words take 2 to 3 days.
- Best words that failed only on the advertiser limit (for reference): muslin blanket (11.08 points, 20 advertisers), cervical pillow (9.45, 19), no pull harness (8.66, 26), dog anxiety (7.23, 23), neck pain (6.92, 25), micro infusion (6.38, 16), retro game console (6.29, 19), at home facial (6.23, 26), filtered shower head (5.77, 21), shower steamers (5.77, 27), foot warmer (5.76, 24), skincare device (5.75, 25), pet hair (5.69, 23), eye massager (5.42, 22), personalized ornament (5.40, 46).
- Course basis: "No Kalodata? Use the Meta Ad Library (free): any ad running for months is a winner" (Course D 2026, lesson 93). Kalodata measures TikTok Shop; a product that sells via Meta is missing there, and a Kalodata zero is not a no.

## 3. The stock list (Vorrat): results of 2026-11-06

How a row is built (stock list script): read the finder ranking and its raw ad data, a manual mapping word to product, the written supplier prices, and a health-word list. Fetch the winner's public Shopify product JSON with curl, one try per product, no disguised browser; a bot check or 403 is noted and never retried. Fetches younger than 7 days are reused. Every row gets a product sheet and runs through gate 1. Without a supplier price the row says "gate provisional" plus the maximum product cost that would still pass. David's veto column survives rebuilds.

**Health filter ("part 4"):** the share of the winner's ads containing a health word. Words (regex, English and German): adhd, anxiety, therapy, sensory, autism, insomnia, pain, relief, neuropathy, plantar fasciitis, arthritis, sciatica, heal/healing, cure, migraine, inflammation, massage, detox and more. **50 % or more** of the winner's ads with a health claim means the product is out (the winner sells it with a health promise we may not copy). Below 50 % it stays, and our text is written without the claim.

**Result 2026-11-06: gate 1 finally passed by 1 of target 15.** Provisional and could pass: 1. Price open: 5. Under 60 USD: 4. Rejected with a supplier price: 4.

| # | Product | Winner price (measured) | Supplier price | Gate |
|---|---|---|---|---|
| 1 | Sleep Pod (elastic full-body sleeping bag) | 99.99; kids 79.99 | 15.95 (agent John); kids 13.40 | PASS, 70.2 %, product max 16.16, DDP unconfirmed; kids fails at market price. Finder 13.70 points, 171 days, 206 new ads, 9 advertisers; 60 % of winner ads with health claims (our text without) |
| 2 | 24K gold V-line lifting mask, 40 pack | 65.00 | open (9.65 per "1pc", unclear if mask or pack) | provisional, product must be at most 10.51 |
| 3 | Eternity rose box | 399.00, luxury price, not transferable | open | provisional |
| 4 | 3D sleep mask | open (winner ads lead to a travel pillow) | open | provisional |
| 5 | Snuffle mat | open (winner sells digital guides) | open | provisional |
| 6 | Winter work gloves | open (bot check, not bypassed) | open | provisional |
| 7 | Facial steamer | open (not Shopify, price unclear) | open | provisional |
| 8 | Phone case with hidden wallet | 49.99 | open | fails with any cost, under 60 |
| 9 | Pregnancy seat belt | 35.99 | open | fails, under 60 |
| 10 | Measuring spoon scale | 17.99 | open | fails, under 60 |
| 11 | Drain hair catcher | 10.00 | open | fails, under 60 |
| 12 | Inkless portable printer | 149.00 | 48.95 (agent Tina, quote 2026-11-06 16:53) | REJECTED, contribution 53.32 % |
| 13 | Hairline powder | 28.00 | 7.88 (John) | REJECTED, 58.04 %, price under 60 |
| 14 | Jellyfish aquarium lamp | 59.99 | 23.36 (John) | REJECTED, 47.22 %, price under 60 |
| 15 | Ultrasonic retainer cleaner ("Pop On Pro Pod") | 89.00 | 25.16 (Tina, quote 2026-11-06 16:53) | REJECTED, 57.90 % |

Out although they passed the finder: massage insoles (97 % health claims), nurse shoes (62 % health claims; 69.00 vs 37.34 cost, 32.06 %), and two dog bed words (our own product).

Next step if the list stays under 10 rows on 11.11.: check bundles, or run a smaller wave.

## 4. The candidate hunt of 2026-11-07: 30 candidates, 0 passed

Criterion: winner page advertised at least 30 days, US, price from 60 USD, new ads in the last 30 days. From gate 1 follows: **product cost at most 16.17 % of the price** (9.70 at 60 USD).
Method: all 129 finder words with a winner run time of 30+ days and at least 1 new ad, minus the 19 already listed; product = the most frequent `/products/` link of the winner; price from the winner's product JSON with `?country=US`, store currency checked via `/meta.json`; active US ads and newest ad start from the Ad Library (read-only connector); health share as in the stock list. 72 words gave a price, 45 had no product link, 11 no JSON, 1 bot check (not bypassed); 32 were at 60 USD or more, 2 dropped because the link did not match the word.
**Result: 30 candidates, 28 meet the criterion, 0 pass the gate finally**, because none has a written supplier price. No cost was guessed.

Examples (price, max cost to pass): walking pad treadmill 369.00 (59.66, bulky, brand); retro typewriter keyboard 99.00 (16.00); rechargeable hand warmers 4-pack 129.95 (21.01); posture corrector 64.90 (10.49, 44 % health words); cervical pillow 60.99 (9.86, 11,033 active US ads); cat water fountain 74.95 (12.11); muslin blanket throw 69.00 (11.15, 392 new ads in 30 days); no-pull harness kit 89.00 (14.39, 2,605 active ads); dog car seat cover 99.99 (16.16); furniture mover 99.99 (16.16); grill brush 64.95 (10.50); neck massager 199.00 (32.17, 50 % health words); IPL hair removal 199.00 (32.17).
How to read it: brand prices (treadmill, pool robot, luggage, light therapy) prove demand but are not safely transferable to a no-name product [LIKELY]. Bulky goods need DDP prices we have never asked for. Bundles pass only if the supplier delivers the whole bundle under the limit. Two candidates had no ad younger than 30 days and stay as "watch".

**Supplier request (prepared, not sent; sending is David's decision through the send gate).** One message per agent, English, per product the link, the product image (AliExpress links do not open in China) and the maximum DDP USA price for 1 piece = the gate limit, ordered by chance (simple, light goods first):
> Hi {first name}, can you supply these, DDP USA, 6 to 12 business days, 1pc, no MOQ? Yes or no with your price for each is enough:
> 1. {product}, like {link} (picture attached): up to {limit} USD
> The first yes per product gets our orders.

A written yes under the limit means: entry in the supplier price file, build the sheet, run the calculator, gate final.

## 5. Supplier prices: only in writing

- Only written supplier prices count (chat message or price table from the agent). Never estimate. Each entry: product, cost in USD, which unit ("1pc", "1 pair", "40-pack"), agent, delivery time, the screenshot of the offer, and a mark: cost SURE, DDP LIKELY or open, age of the price.
- Example entries (agent John, 2026-11-02, 1 piece, USA): sleep pod adult 15.95, kids 13.40, 7 to 12 working days; hairline powder 7.88, 8 to 12 working days; nurse shoes 37.34, 6 to 12 calendar days; jellyfish lamp 23.36, 6 to 12 calendar days. Curlmoon dog bed (John): 40 cm 10.02, 50 cm 11.86, 60 cm 14.52, 70 cm 18.65, delivery 10 to 16 working days.
- DDP (delivered duty paid) is not written in any of those tables; it must be confirmed before a final gate.
- A lesson from Tuckwell: a store build started on one agent's lower price after another agent's price had failed the gate. Step 0 of every build is now a lock: confirmed price or no build.

## 6. Gate 1, the product calculator

The gate exists so that no store gets built for a product that cannot make money with paid ads. The constants live in the code, not in the product sheet: **a sheet cannot lower the gate.**

**Constants (2026-11-06):**
- Payment fee: **5.83 %** of the price (one payout, from our money flow notes).
- Refunds: **8 %** of the price, product not returned [GUESS, sample size 0].
- Meta shows ad spend **without 19 % VAT**, so every displayed-spend threshold is divided by **1.19**.
- FX: **1.16 USD per EUR** [GUESS].
- Gate: **contribution after fee and refunds at least 70 % of the price**, and **price at least 60 USD**.

**Formulas** (each step rounded to cents, half up; the gate itself compares the unrounded value so rounding never lifts a product over the line):
- contribution before ads = price minus product cost minus price x 0.0583
- after refunds = contribution minus price x 0.08
- **CPA threshold (displayed spend per purchase) = contribution / 1.19**
- CPA threshold with refunds = after-refunds / 1.19 (applies to new products)
- **emergency brake = 2 x CPA threshold**
- stage 1 spend = 100 EUR cap x 1.16 = 116 USD; break-even at the cap = ceil(116 / threshold with refunds) orders
- stage 2 confirmed = ceil(300 / threshold with refunds) orders
- margin room = 1 minus 0.0583 minus 0.08 minus 0.70 = **16.17 %**: max product cost at this price = price x 0.1617 (rounded down); min price at this cost = max(60, cost / 0.1617) (rounded up). That is why the store guide also states the gate as "at least about 6.2x the product cost" (1 / 0.1617 = 6.18).

**Input sheet (JSON) fields:** test name, status, product, lane, variants (each: name, price_usd, cost_usd, test true/false, mark), colours, sources, delivery route (supplier, delivery working days, duties, confirmed true/false, mark), note. Exactly one variant must be the test variant and must have a cost; unknown fields are an error. Exit codes: 0 pass, 1 rejected, 2 sheet incomplete.

**Output (test card):** price, cost, fee, contribution before ads and in %, after 8 % refunds, CPA threshold, CPA threshold with refunds, emergency brake (and whether it is above the cap and can never trigger), the test form (budget per day, days, cap), stage 1 rule, break-even orders at the cap, stage 2 orders, all other variants with pass/fail, a warning if the delivery route is not confirmed, and the final line "GATE: PASS" or "GATE: REJECTED, <reasons>".

**Tiers and existing products:** the 70 % gate is for new products only. Quantity tiers may fail it but must keep the course rule of at least **67 % gross margin before refunds** (Course D 2026, lesson 25 and 55). Never reach 67 % with a strike price; use bundles and free digital gifts (course: buy 1 / buy 2 / buy 3 with progressive discounts instead of BOGO).

## 7. Worked numbers: Curlmoon (37.50 / 75.00) and bundles

Curlmoon dog bed, test variant 20 inch, price 59.99 since 2026-11-06 (live prices: 16" 54.99, 20" 59.99, 24" 69.99, 28" 79.99, 2 beds 20" 108.00 measured in the cart), cost 11.86:
- fee 59.99 x 0.0583 = 3.50; contribution **44.63** per purchase
- **CPA threshold 44.63 / 1.19 = 37.50** displayed per purchase
- **emergency brake 2 x 37.50 = 75.00** displayed; in the EUR account 75.00 / 1.16 = **64.66 EUR**; at 17 EUR a day that is about start + 91 hours
- with refunds: 44.63 minus 4.80 = 39.83; / 1.19 = **33.47**
- The old values at price 49.99 were 35.22 / 29.60 / 59.20 (and 26.23 with refunds); the code never uses them, they are kept only for comparison. Old prices 44.99 / 49.99 / 59.99 / 69.99 and 2 beds 90.00 are obsolete since 2026-11-06 (raised +10 USD before the first impression on David's "decide yourself"); hold the new price until 20 purchases (D17); after 8 % refunds the 20" keeps 66.39 %. Price history: https://dlichters.com/ai/ops/porchnap/02-8-operating-procedures.md section 11.
- Note: Curlmoon itself would fail the 70 % gate as a new product (39.83 / 59.99 = 66.4 %); it is an existing product, so it runs on its own thresholds.

**Bundle plan (proposal 2026-11-06, not live):** cell = price / contribution after fee and 8 % refunds / gross margin before refunds.

| Size | 1 bed | 2 beds, 10 % off | 3 beds, 20 % off (new) |
|---|---|---|---|
| 16" | 54.99 / 37.36 / 75.94 % | 99.00 / 65.27 / 73.93 % | 132.00 / 83.68 / 71.39 % |
| 20" | 59.99 / 39.83 / 74.40 % | 108.00 / 69.34 / 72.20 % | 144.00 / 88.50 / 69.46 % |
| 24" | 69.99 / 45.79 / 73.42 % | 126.00 / 79.53 / 71.12 % | 168.00 / 101.21 / 68.24 % |
| 28" | 79.99 / 50.28 / 70.86 % | 144.00 / 86.78 / 68.26 % | none: 192.00 would be 65.03 % |

- Course range for the 3-pack discount: 10 to 25 % spoken, 20 to 25 % in the document; 20 % fits both, 25 % would push 24" to 66.51 %.
- Free gift only on 2 and 3 beds: a PDF guide (cost 0.00; a physical gift could cost at most 1.82 before 2 x 28" falls under 67 %). No value claim on the gift (no strike price).
- Effect [GUESS, sample 0]: at a 72/22/6 mix and 2 % conversion, 49.24 per purchase and 0.985 per visitor (+11.3 %); it tolerates 10.1 % less conversion and lifts the allowed CPA from 37.19 to 41.38. At 4 orders at the cap it brings only 19.92 USD: the value comes with volume.
- Timing: not before 48 hours after the first impression (course: "He did not touch a single thing"), and only with a reading of "gate open" or "in between".

## 8. The test form and the stages

From our system plan (2026-11-06) and the rules table:
- Test form per product: **34 EUR a day, 3 days, cap 100 EUR** (Meta's minimum we work with). The first Curlmoon test ran at **17 EUR a day** (live budget) with the same 100 EUR cap.
- **Stage 1** up to the cap (116 USD): under 3 orders, the product is out.
- **Stage 2** up to 300 USD, only with David's yes.
- Campaigns are always created paused; David switches them on (standing yes from 2026-11-06: the AI creates paused, David activates).
- Wave plan: a first wave with a 2,000 USD cap needs David's yes after the reading.
- Full test form for new products (stage 2 confirmed from 12 orders, brake only without add-to-carts, 63 % / 7 % detection) and the wave 1 money table (stake, net loss, chance 48/63/74 %, 16 to 19 days): part 2, section 14. Wave 1 calendar and the neutral store: https://dlichters.com/ai/ourrules/decisions-and-state/03-8-lawyer-answers-not-yet-on-the-legal-page.md section 12.

## 9. The ad watcher and the rules engine

**The watcher** runs on a timer (every few minutes), reads Meta spend, clicks, Meta purchases and Shopify orders, and writes one log line per reading in this format:
`DD.MM. HH:MM Kampagne <name>, Gruppe <ad set>, Konto <account>, Ausgaben <spend>, Klicks <clicks>, Meta-Käufe <n>, Bestellungen <n>`
plus a state file with error counters and delivery status. A reading older than 2 x the timer interval produces a warning. It does not read: CPC, link CTR, sessions, carts, checkouts. Those stay `null` (never 0) unless typed in by hand from the Shopify admin. It counts orders with status "any", so cancelled orders are included.

**The rules engine** is pure arithmetic: readings plus a per-test configuration in, one verdict out. All IDs, thresholds and verdict texts are in the configuration; the code only holds the order of decisions. If a deciding number is missing, the verdict is "data missing: <fields>", never an assumption.

**Currency:** the ad account shows EUR, the rules are in USD; spend and CPC are converted with 1.16 [GUESS]. Thresholds near a line therefore depend on the FX guess.

**Phases (hours from start):**
- **D5, 0 to 48 h:** touch nothing except technical problems (rejected ad, broken checkout, missing Purchase event). Verdict "technik".
- **Reading at start + 48 h + 4 min (minute 2,884).** Before that: "waiting for reading".
- **Budget step from start + 53 h** (if gate open and David says yes).
- **Reading at 72 h (minute 4,324).**
- Start is counted from 00:00 New York of the start day (rules table). The watcher's own message counts from first delivery; if delivery starts later, change the start field consciously.

**Thresholds (Curlmoon config, 2026-11-06):** CPA max 37.50 displayed; emergency brake 75.00 displayed; contribution 44.63; CPC good 1.50, bad 2.00; link CTR minimum 1.0 %; orders for "gate open" 1; budget normal 20 USD a day (live 17 EUR), budget gate open 50 USD a day; ROAS for the bump ladder 2.0; cap reached at 99 % of the cap (Meta can stop slightly below).

**Decision order (exactly as coded):**
1. Spend 0: before 48 h "technik" plus the note "0 spend is itself the technical question"; after 48 h "untested" (no rule judges, the calendar moves on).
2. **Emergency brake** (any time, has priority, decided 2026-11-05): spend at or above 75.00 and 0 orders. If carts are 0: "ad set off". If carts are not read: "check emergency brake" (look in the Shopify admin: 0 carts means off, otherwise the test continues). Carts present: no brake.
3. Before 48 h: "technik".
4. Before minute 2,884: "waiting for reading".
5. If a product verdict "stays" has been recorded: after the verdict, above 37.50 per purchase after at least 75.00 spend means "ad set off", otherwise "stays, set up the automatic budget rule".
6. **Stages:** at 300 USD spend, 9 or more orders "stays", fewer "out". At 200 USD: 6 or more "stays" (bump ladder once Shopify revenue / spend is at least 2.0), 4 to 5 "grey, +100 USD", 3 or fewer "product out, next product". If spend is above the configured cap, a note to update the cap. If "stays" but CPA is above 37.50: a contradiction note.
7. **Cap** (100 EUR = 116 USD reached at 99 %): 4 or more orders "stays, break-even reached, new money only by the scaling rule"; 2 to 3 "grey, remaining money into new images, not the same set"; 0 to 1 "diagnosis per funnel stage, no product verdict from the order count alone".
8. From minute 4,324 (72 h): link CTR under 1 % and 0 carts means "replace images, no ad set off because of 0 purchases"; otherwise "no ad set off because of 0 purchases, runs to the cap".
9. 48-hour reading: 1 or more orders = "gate open"; CPC at most 1.50 and link CTR at least 1 % = "gate open" (from 53 h budget 50 USD a day, only with David's yes up to 200 USD); CPC at least 2.00 and CTR under 1 % and 0 carts = "gate closed" (budget stays, the AI builds four new images in the best angle by 72 h); else "in between" (budget stays, read again at 72 h). If gate open but the stages are above the cap, a note that only David can raise the cap.

**Diagnosis at the cap** names where the funnel breaks: clicks (CPC and link CTR, weak if CPC at least 2.00 or CTR under 1 %), sessions to carts, carts to checkouts, checkouts to purchases ("n of m, it breaks here" when 0). Anything not read is said to be not read, never guessed.

**Per-ad view** after D5: each ad with impressions, spend, CPM, link CTR, and "ran" or "untested" (no spend = untested).

**Tested cases (from the test table, examples):** 75.00 USD, 0 orders, 0 carts at start + 30 h = brake (exactly on the line); 74.99 = no brake; 60.00 = no brake (above the old 59.20, below 75.00); 75.00 with 1 order = no brake; 64.66 EUR in the account = 75.0056 USD = brake; 75.00 with 2 carts = test continues; 75.00 with carts not read = check in admin; 100 EUR cap reached, 0 orders, carts not read = check in admin first, no pretend diagnosis.

## 10. The reading page and the human steps

- A build script reads the watcher first, writes a reading file per test, and builds one HTML page: verdict, who acts (David or the AI), the numbers table (spend in EUR and USD, CPC, link CTR, clicks, sessions, carts, checkouts, orders), thresholds with their calculation, which values are still from the old price, open points. Carts typed in by hand from the admin can be rebuilt without re-reading the watcher.
- What only David does (human list, minutes are [GUESS] unless measured): buy the domain (5), create the Shopify account (15), pay the plan (3), submit Shopify Payments (19 measured), install the supplier app (1; the AI's click was blocked on 03.11.), accept the supplier's collaborator request (1), create the Meta business account (3) and ad account (2), switch campaigns on, give one daily fixed slot. The AI prepares every name, mail and text as a copy block before. A test card also tracks David's minutes per test: the first Curlmoon test took 374 minutes of David over 50 steps against a target of 10 [MEASURED].


Part 1 of 2 of "Product testing: finding, gating and judging products". Map of all parts: https://dlichters.com/ai/ops/product-testing.md · Next: https://dlichters.com/ai/ops/product-testing/02-11-campaign-dry-run-and-the-lock-test.md
