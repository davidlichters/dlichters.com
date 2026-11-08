<!-- part of ecom/deep/19-metrics-finance-and-tracking.md -->
Part 21 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/20-test-budgets-kill-rules-and-scale-decisions.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/22-scale-or-hold-decisions.md

### Kill rules by platform

#### Meta (Facebook)

- Use CTR as the first gate: a click-through rate of about 1.5% or higher suggests real interest in a product, and around 2% is a stronger sign. Give a product a longer test when the rate sits around 1.5%, and stop it when the rate is well below that. [L0661, undated]
- Primary metric for a new store is CTR: aim for at least 1.5%. The presenter sees 2 to 5% as a sign that the ads are working. [L0642, undated]
- A CTR above 1.5% is considered good for Facebook ads. Creatives at around 1.3 to 1.5% CTR can still be scaled if the ROAS is 2 or higher. [L0645, 2023]
- Day-one ad-level optimization:
  1. After day one, review only the ads inside each ad set, not the ad sets. [L0648, undated]
  2. Find ads that have spent at least 8 USD (normally 8 to 10 USD). [L0648, undated]
  3. Mark an ad as poor if its CPC is above 3 USD or one USD above the average CPC of the account. [L0648, undated]
  4. Turn off ads that have spent that amount with a poor CPC and no sales, so Meta moves budget to the other ads. [L0648, undated]
  5. Keep ads with a good CPC running even if their CTR is lower. [L0648, undated]
- CPC and profitable spend matter more than CTR. A low CTR is acceptable when CPC is cheap, while a high CPC means the budget goes to the wrong ad, and CTR and creatives should be improved. [L0648, undated]
- Do not kill an ad set before it has spent its break-even cost per purchase. At a 5 USD daily budget and a 20 USD break-even, wait 4 days (20 ÷ 5) before judging it. [L0648, undated]
- Use the break-even cost per purchase as the maximum spend an ad set should reach without a sale before it counts as unprofitable. Without a sale after spending the break-even amount, the ad set is unlikely to become profitable in the long run. [L0648, undated]
- Decision after an ad set reaches its break-even cost per purchase:
  1. If there was no sale and the CPC and CTR are poor, turn the ad set off. [L0648, undated]
  2. If there was no sale but the CTR is above average and the CPC is low, give it one more day, then turn it off if it still has no sale. [L0648, undated]
  3. If there is at least one sale, let it spend another break-even cost per purchase to check whether the sales are consistent. [L0648, undated]
  4. Two sales by day two can mark a potential winner. [L0648, undated]
  5. Repeat the same check after each break-even amount until the audience reaches four or more sales with a profitable ROAS, then it is ready to scale. [L0648, undated]
- Meta campaign spending around 150 EUR over three days across several ad sets with only one add-to-cart: stop the campaign and investigate rather than leaving it running. Such a result points to a broken setup, tracking or a fundamentally weak offer. [L0361, 2024]
- The purpose of stopping a losing test early is to cut losses before money is spent on a product that does not work. [L0361, 2024]
- A product with 350 USD spent, a ROAS of 0.42, a link CTR under 1% and a conversion rate under 1% was judged as not worth more spend. Investing the energy in the next product was the recommended choice. [L0363, 2022+]
- Do not judge a test ad by CTR alone, because a high CTR can still be unprofitable. Compare the spend per ad set with the break-even cost per purchase and the resulting sales and ROAS. [L0692, 2023]
- Facebook ads should be judged after the test has spent enough to give data. Without enough spend the data is not reliable, so one can only rely on signals such as add-to-carts for early judgment. [L0995, 2023]
- Cut losing ads early using soft metrics: cost per ATC, CTR, CPC, CPM and engagement rate ranking. Keep an ad only if these metrics improve day over day, otherwise cut it. [L1019, 2026]

#### TikTok

- Product kill thresholds for a TikTok test:
  - If no video passes 10,000 views in the first week after consistent uploading, the product is probably dead. [L0501, 2022]
  - If you cannot reach around 500 followers or a few thousand views in the first week, kill it. [L0501, 2022]
  - If you cannot reach 1,000 followers within two weeks, or if revenue per million views is under 100 USD, drop the product. [L0501, 2022]
  - Kill early to save time. [L0501, 2022]
- Revenue per million views after the second week:
  - Keep products that reach at least about 1,000 USD per million views on average. [L0501, 2022]
  - At 500 USD per million, it is still worth it. [L0501, 2022]
  - A product with 10 million views and 5,000 USD in sales (50% profit) is still considered good. [L0501, 2022]
- Strong product test performance (example): CPM $4 to $6 on Facebook ($10 in Germany), under $5 on TikTok; CTR 1 to 2% on Facebook, under 1% on TikTok; add-to-cart ratio 13 to 18%; 4 sales total (1 from Facebook under $100 spend, 3 from TikTok $120 spend). These top-tier metrics indicate creative resonance and audience fit before scaling. [L0307, 2023+]

#### Pinterest

| KPI | Minimum threshold | Source |
|---|---|---|
| CTR | Above 1% on day 3 | [L1133, undated] |
| ATC (add-to-cart) rate | At least 5% | [L1133, undated] |
| Add-to-cart count | At least 1 ATC within 3 days, otherwise test other offers | [L1133, undated] |
| Sales | At least 1 sale within 6 to 7 days, otherwise move to the next product | [L1133, undated] |

- A product without any add-to-cart within 3 days on Pinterest signals that the offer needs testing. A product without a sale within 6 to 7 days should be replaced rather than kept running. [L1133, undated]
- Only conversion campaigns should be used on Pinterest. Consideration and brand awareness campaigns are not used in this approach. [L1134, undated]
- Pinterest test KPIs in the first week:
  - After day three (about $15 spent), CTR should be at least 1%. If not, try new creatives for one or two more days, then switch product. [L1134, undated]
  - Add-to-cart rate should be at least 5% (e.g. 5 add-to-carts per 100 visitors) after day three. Otherwise test another offer for two days. [L1134, undated]
- Pinterest kill rule: at least one add-to-cart within three days, and at least one sale within six to seven days (about $30 spent at $5 per day). If there is no sale within that time, move to the next product. [L1134, undated]

#### Gates at $5 per day (platform not named in the source; the gates match the Pinterest rules)

| Checkpoint | Spend or visitors | Required result | If the result is missed |
|---|---|---|---|
| Day 3 | About $15 spent | CTR of at least 1% | Test new creatives for one or two days; if still weak, switch product |
| After 100 visitors | 100 visitors | Add-to-cart rate of at least 5% | Change the offer and test another two days |
| Day 3 | 3 days of traffic | At least 1 add to cart | Test more offers |
| Day 6 to 7 | About $30 spent | At least 1 sale | Move to the next product |

[L1135, undated]

- Create only conversion campaigns, not consideration or brand awareness campaigns, because the test is built to measure sales. [L1135, undated]
- In a stable campaign, the lesson reported CPM of $3.38, CTR of 2.81% and CPC of $0.12. A campaign on its first day showed a CPM of $0.75 and CTR of 0.63%, which shows how much early data fluctuates. [L1135, undated]

#### Google and YouTube

- If a Google Ads campaign spends budget early but produces no sales, delete it and create a fresh campaign rather than making multiple bid or audience adjustments. The algorithm struggles to recover from poor learning phase performance, so restarting from scratch allows more effective optimization. [L0210, 2022]
- Pause a product or ad group when it has accumulated clicks equal to about twice the expected clicks per conversion without a conversion, provided there is enough data (roughly 10 to 15 conversions per month in the campaign). Example: with 38 expected clicks per conversion, pause at about 70 to 76 clicks without a conversion. [L0745, 2020-26]
- Judging a campaign after only three sales over three months and concluding the ads are not working is a mistake. Three sales with a cost per sale that is too high relative to product prices is still usable data, and it points to product selection rather than a lack of data. [L0748, 2020-26]
- procedure when ads are unprofitable:
  1. If ads are unprofitable (ROAS is too low), first try cutting negative keywords and removing underperforming products. [L0245, 2020]
  2. Monitor for two weeks. [L0245, 2020]
  3. If ROAS still does not improve, consider pausing ads or significantly cutting budget. [L0245, 2020]
  4. Do not pause ads if ROAS is stable just because traffic is low. [L0245, 2020]

### Checks before pausing or cutting

- Before pausing a product, verify its performance across all channels and touchpoints. Check Google Analytics data, Shopify transaction data, and email conversion sequences to confirm the product is truly underperforming and not driving conversions through other customer journeys. [L0299, 2020-26]
- Do not pause a low-performing product variant without checking similar variants of the same product. A weak-converting color or size might be pulling down overall metrics while other variants of the same SKU are strong sellers. [L0299, 2020-26]
- Test and analyze one change at a time when performance drops, because changing creatives, pages and audiences together makes the cause hard to find. [L0950, 2023]
- A creative that worked in the first days but dropped suddenly after a new asset was added suggests a test of the newest creative by cutting it for a few days to see whether the old ads recover. [L0950, 2023]
- Optimize in this order: first check the creatives, then the account structure, then the store. Stop the product only after these steps have been tested within the test budget. [L0363, 2022+]
- Before the store is blamed, check the funnel. If the product does not reach its breakeven KPIs, treat that as a signal to check the funnel and, if no fix works, consider killing the product. [L0445, undated]
- Evaluate ads at two-week intervals rather than switching them off early. A campaign should only be stopped after months of optimization fail, and in the meantime fix negative keywords, bids and budgets. [L0429, 2022]

### Product-level kill thresholds

- Set a kill threshold for each product: stop spending when conversion stays below 1% after optimization, since a conversion rate under 1% is treated as a fatal sign. Test budgets should be limited to about 200 to 250 USD before the decision. [L0363, 2022+]
- Seriously consider dropping a product if its CTR falls below 1.5%, sales are very hard to get, and it is still not profitable after about $10k in sales. Before that threshold, improve the offer and the store first. [L1017, undated]
- A product with a barely profitable cost per acquisition should be tested with new interests and a changed offer before it is dropped. Keep testing until the margin is positive. [L0661, undated]
- Accept break-even in the early stage if the goal is proof of concept and brand positioning, not immediate profit. Judge the product over two to three months or a full year. [L0492, 2023+]
- Decide whether to continue a product by its numbers, not by attachment: continue if the numbers are good and move on if they are not. [L1176, 2023]
- Falling in love with a product and spending too much on it causes losses. Ask what the data says instead of why the product is not working. [L1176, 2023]
- A product that only just breaks even on ROAS and does not reach the break-even point will eventually die out. Do not scale it. Scale only after you find a clear winner. [L1176, 2023]
- Ad-level judgment: a single product was tested with two Facebook interests. The interest around personal-care buyers reached about 40% attention rate but produced no add-to-carts and no sales. The home and garden interest had a poor attention rate but generated the sales, so the decision was based on sales rather than attention. [L0995, 2023]

### Quick kill-threshold comparison

| Platform or context | CTR gate | Conversion or ATC gate | Spend or time gate | Source |
|---|---|---|---|---|
| Meta, new store | At least 1.5% (2 to 5% seen as working) | Not stated | About 4 days or about $20 per ad set | [L0642, undated] |
| Meta, product test | About 1.5% (longer test); well below stops it | ATC or sale needed before break-even spend | Break-even cost per purchase | [L0661, undated; L0648, undated] |
| TikTok | Under 1% signals weak link CTR (kill example) | Conversion under 1% after optimization is fatal | Views: 10,000 in week 1 | [L0363, 2022+; L0501, 2022] |
| Pinterest | At least 1% on day 3 | ATC at least 5%; at least 1 ATC within 3 days | At least 1 sale within 6 to 7 days (about $30) | [L1134, undated] |
| Store conversion (test) | Not applicable | At least 1.5% of visitors buying | Within test budget | [L1171, 2024+] |


Part 21 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/20-test-budgets-kill-rules-and-scale-decisions.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/22-scale-or-hold-decisions.md
