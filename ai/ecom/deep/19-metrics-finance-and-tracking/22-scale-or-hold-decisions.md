<!-- part of ecom/deep/19-metrics-finance-and-tracking.md -->
Part 22 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/21-kill-rules-by-platform.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/23-seasonality-and-volatility.md

## Scale-or-hold decisions

### Proof required before scaling

- Before scaling an ad set, wait until it has about six or more sales. Several ad sets with six or more sales are a stronger signal than one ad set with a single high-performing result. [L0349, 2024]
- Scale an interest only after it has produced about six or more profitable sales. Below that, the pixel does not yet have enough purchase data to optimize. [L0639, 2023]
- A winning audience means two to three interests that each produce at least three purchases at a ROAS above break-even within about 3 to 5 days of data. Test ads with winning creatives together with winning interests, because a winning asset is the combination of an interest and a creative. [L0645, 2023]
- Four or more sales on one audience with a profitable ROAS is the consistency signal to scale that audience. Three to four sales is an early sign that needs more spend to confirm. [L0648, undated]
- A product is ready to be scaled once a winning interest reaches more than six sales. Scaling should start only after the sales signal appears, not after a few clicks. [L1172, 2023+]
- A product has proof of concept when it earns about $100 profit per day consistently for three days, as shown on the profit and loss sheet. This consistency, not a single good day, is the signal to act on. [L1175, 2026]
- Do not scale the ad budget while the metrics are inconsistent or fluctuate strongly. Scale only when the metrics hold steady, because a lack of stable results means no break and no scale. [L1175, 2026]
- Judge ads by hard metrics first (sales, profit and add-to-carts). Soft metrics matter only if an ad is not making money. [L0999, 2023]
- Scale only the ads that are profitable. Do not overspend on unprofitable ads. [L1184, 2023+]
- Check margin and return on ad spend before any ad budget is increased. Spending on ads that do not produce profit drains budget quickly. [L1131, 2018+]
- Ad spend is a real cost, so before scaling any ads, check that the spend is justified by the numbers. Spending on ads without reading the metrics properly burns money without a clear return. [L1038, 2026]
- For a clear winning product, track only ROAS and sales, and ignore CTR, CPC and CPM. Turn off or cut budget for any ad set that stops performing. [L1173, undated]
- Use daily optimization decisions on purchase-related metrics: cost per purchase, total spend, purchase value and ROAS. CTR, CPC, CPM and conversion rate alone should not drive major decisions. [L0290, 2025-26]
- In the first testing days, do not judge the whole campaign by profitability, because product, interest, creative and website are all still variables. ROAS per ad set on daily data is the main decision metric during testing. [L0645, 2023]
- A low CTR combined with a high ROAS shows there is room to improve the creative, but the ROAS still decides whether the ad set stays. Profit comes from ROAS, not from CTR alone. Example: CTR 0.92% with ROAS 3.21. [L0645, 2023]
- Break-even cost per purchase is the reference for whether a campaign is working. A test campaign that spends about one to one-and-a-half times the break-even without a sale should be stopped. [L0349, 2024]

### ROAS thresholds for scaling (conflicting sources)

| Source | Threshold | Applies when | Source ids |
|---|---|---|---|
| one source | 10× ROAS floor, $10 revenue per $1 ad spend | Only increase ad spend when ROAS consistently reaches or exceeds 10×. 10× is the floor for sustainable scaling. | [L0193, undated; L0276, 2024] |
| one source (2024) | 20× example ($1,000 spend, $20,000 revenue) | Exceeds the 10× minimum and signals readiness to increase budget. | [L0276, 2024] |
| one source | Increase only while ROAS stays at 10× or above | Optimize campaigns before each increase. | [L0359, 2020] |
| one source | 2.5× minimum for doubling | If ROAS is only 1.5 to 2.0 (barely above break-even), compare profit between scenarios before deciding. | [L0308, 2023] |
| one source | ROAS above 2.0 for a 20% profit goal (breakeven 1.6) | Safe to increase budget when ROAS is above the target. | [L0445, undated] |
| one source | ROAS 2 or higher for creatives at 1.3 to 1.5% CTR | Creatives can still be scaled. | [L0645, 2023] |
| one source | Break-even ROAS roughly 1.5 to 1.7, operating-expense multiplier about 3 to 3.5× break-even | Below a multiplier of about 3, one speaker does not consider scaling worthwhile. | [L0646, 2023] |
| one source | 2.5× comfort threshold when breakeven is 1.5× | Scale bottom-of-funnel only if ROAS stays above this. | [L0316, 2026] |
| one source (Pinterest) | ROAS above 2.5 with breakeven 1.5 to 1.6 | Two consecutive days of consistent profit before doubling. | [L1134, undated] |

- Scale aggressively only when the measured ROAS is above the profit-target ROAS. If it is below, keep the ad spend flat and test new creatives or angles. [L0445, undated]
- Use the desired ROAS to decide on scaling. If the ROAS is below the desired level, do not scale aggressively; keep the spend level and test changes. [L0445, undated]
- Accept the economics, not the headline ROAS: a product with 4 to 6:1 ROAS at $50 per day was the benchmark. The outcome depends on the spend level. [L0995, 2023]
- Break-even ROAS and margin check: £400 spend at 2.5× ROAS equals £1,000 revenue. Cost of goods at 33% of revenue is £330, so profit is £670. The same £400 spend at 1.6× ROAS equals £1,280 revenue. Cost of goods is £422, so profit is £858. Even though 1.6× is lower ROAS, it nets more profit, so keep budget at £800 (double the original) rather than spending at 2.5×. [L0308, 2023]
- A campaign with a few large orders can show a very high return in one month and a much lower one the next. One month of results is not a reliable basis for decisions. [L0969, 2022]
- ROAS typically falls as ad spend grows. Scaling should be preceded by improving the return at the current spend level. [L1111, 2020]
- Average ROAS and conversion: measure against the first-month baseline and adjust budget only when return on ad spend is well above target. [L0665, 2022]
- Increase the ad budget only while return on ad spend stays at 10× or above, and optimize the campaigns before each increase. [L0359, 2020]
- Target ROAS for ad scaling is 10×. Only increase ad spend when ROAS consistently reaches or exceeds this threshold. [L0193, undated]
- Seasonality changes both demand and ROAS. For a worked example, see the seasonality section below. [L0995, 2023]

### Budget ramps

#### Doubling and step ramps

- 4-Hour Budget Doubling Method:
  1. Start one ad with £200 budget. [L0308, 2023]
  2. After 4 hours, calculate ROAS from sales in that 4-hour period only (ignore previous sales). [L0308, 2023]
  3. If ROAS is profitable (above break-even), double budget to £400. [L0308, 2023]
  4. After 4 more hours, calculate ROAS for the new 4-hour period. [L0308, 2023]
  5. If profitable, double again. [L0308, 2023]
  6. Repeat until budget reaches target or ROAS drops below threshold. [L0308, 2023]
  7. Example progression: £200 → £400 → £800 → £1,600 → £3,200 → £4,000. [L0308, 2023]
- Black Friday 2023 scaling: started at £200 and scaled over the day to approximately £4,000. Final weekend (Friday to Sunday) ad spend was £13,491. Total weekly ad spend was £33,661. Revenue was £76,000. [L0308, 2023]
- Pinterest scaling rule: once a campaign is profitable, double the daily budget (e.g. $5 to $10). Require consistent profit for two days, for example ROAS above 2.5 while breakeven ROAS is 1.5 to 1.6. Increase the budget at the start of the day, around 12:00 midnight UTC or up to 4 to 5 a.m. UTC, not in the evening, to avoid a sudden spend spike. [L1134, undated]
- Step-by-step ramp: a first-month test with a $1,000 ad budget produced $20,000 in sales, a 20× return. After optimizing, the budget was raised step by step. At the next step, sales doubled while the return stayed above 10×. A later large increase of tens of thousands of dollars dropped the return well below 10×, which shows why big jumps are risky. [L0359, 2020]
- Avoid abrupt launches and large budget changes, because performance fluctuates on the first day and usually stabilises around day three or four as the account learns the audience. [L1135, undated]
- Ads with a budget of at least 20 USD per day in a dedicated structure: Meta ad sets were fragmenting after a sales milestone, a week of weak results followed, raising the daily budget from 5 to 7 for three to four days did not help, and combining ad sets at about 20 per day still gave a good CTR but no sales. Earlier the store had at least 200 sales a day. Afterward it dropped to zero or one sale a day, which led to a funnel and offer review. [L1017, undated]
- One student reached $1,300 in sales in a single day at a profit margin of about 40%. This shows that a product with healthy margins can produce strong daily sales, but scaling should begin only after the numbers are checked. [L1017, undated]

#### Horizontal and advanced scaling (Pinterest)

- Horizontal scaling on Pinterest: after a winning interest is found in the Targeting breakdown (Interest view), create new campaigns that target the winning sub-interests, or add 50 to 80 keywords with audience sizes of 10 to 30 million, then judge each new campaign by its profitability. [L1134, undated]
- A more advanced scaling option on Pinterest is CPA-based targeting (a cost-per-acquisition cap, e.g. sales under $20), used after about 10 to 15 days of consistent results, similar to the bid cap on Facebook. [L1134, undated]

#### Bottom-of-funnel and campaign-level ramps

- If you are not profitable at $50 per day on a bottom-of-funnel campaign, the ad concept or product validation is likely the problem, not the budget level. De-scaling further (to $30 or $20) does not solve this. Test new ad concepts, new products or stop and focus elsewhere. [L0316, 2026]
- If you have a video campaign spending $300 per day with a given ROAS, run bottom-of-funnel at roughly $100 per day ($300 × 30%). Monitor ROAS and scale bottom-of-funnel only if it stays above your comfort threshold (e.g., 2.5× if breakeven is 1.5×). This prevents overspending on a limited warm pool. [L0316, 2026]
- Keep ROAS stable as the primary success metric. If costs drop 20% but lead volume increases 20%, and ROAS stays the same, you are succeeding even if absolute profit has not changed. [L0245, 2020]
- Track the daily pixel purchase volume. That number determines when ABO becomes an option. [L1019, 2026]

### Audience, market and ad-type comparisons

- Savings from a cheaper audience = (precise-interest cost per conversion − lookalike cost per conversion) ÷ precise-interest cost per conversion. The reported $0.93 versus $1.20 works out to about 22.5% lower, not 30%, so calculate the saving from your own numbers and do not trust rounded claims. The comparison came from only two days of data, so repeat the split test before relying on it. [L0641, 2014]
- Compare markets by cost per lead and by the first profitable sales. The market with the lowest cost per lead that also produces profitable sales is the one to scale. [L0549, undated]
- A store about 30 days into its ads had around $2,500 in sales and was breaking even, which is typical for the early testing phase. [L0549, undated]
- A German market with a cost per click of about €0.50 and a conversion rate of 2.5 to 3% was judged as a clear candidate to scale, because the margin should allow a decent profit. A low cost per click combined with a healthy conversion rate gives room to increase spend. [L0694, 2024]
- For a Facebook ad to be scaled, check whether its ROAS, cost per acquisition and attention rate are good at a small spend. Most ads that are good at $10 per day do not scale easily and need a higher budget structure to hold. [L0999, 2023]
- In a review of hundreds of ad accounts over roughly 6 to 8 years, each ad was classed as a workhorse or a warhorse, and revenue was attributed to each category with the help of AI. About 80% to 81% of ad revenue (81% by exact figure) came from workhorse-type ads, not warhorses. The result suggests that low-effort, relevant ads drive most sales. [L0483, 2025-26]
- How closely you review performance and how aggressively you bid depend on how much risk you accept. Aggressive operators push bids and fund more testing, while restrained operators keep tighter spend limits. Set ROAS and break-even targets to match that choice. [L0719, 2021-22]

### Account-level allocation (scale score framework)

#### Efficiency vs scale quadrant

| Quadrant | Spend | Efficiency | Action |
|---|---|---|---|
| Scale hard | High | High | Increase budget |
| Unlock scale | Low | High | Investigate why spend is limited |
| Diagnose and fix | High | Low | Find the funnel leak |
| Kill | Low | Low | Turn off immediately |

- Goal: more than 70% of spend should go to ads above target ROAS. ROAS segments: exceeds, meets, below, failing. CPA segments: excellent, good, acceptable, poor, failing. [L0613, 2026]

#### Scale score ranking formula

- Scale Score = (ROAS Index × 30) + (CPA Index × 30) + (Spend Velocity × 20) + (Fatigue Index × 20).
- ROAS Index = Ad ROAS / Target ROAS, capped at 1.5.
- CPA Index = Target CPA / Ad CPA, capped at 1.5.
- Spend Velocity = Ad daily spend / account average daily spend.
- Fatigue Index = 1 − (Frequency / 6), with a minimum of 0. [L0613, 2026]

#### Dollar allocation output

1. For each scale candidate, state the percentage budget increase. [L0613, 2026]
2. For each ad to kill, state the budget freed. [L0613, 2026]
3. List ads to monitor with explicit triggers. [L0613, 2026]
4. State the expected impact on ROAS and CPA. [L0613, 2026]
5. For each scale candidate, also assess fatigue risk (frequency and age), concentration risk (what the backup is) and learning-reset risk if scaling too fast. [L0613, 2026]

## Hard versus soft metrics

### Hard metrics decide, soft metrics diagnose

- Hard metrics such as sales outrank soft metrics. If an ad makes sales, a high CPC is acceptable, and you should keep improving the soft metrics. If there are no sales, improve all the metrics across the funnel. [L0639, 2023]
- Hard metrics such as profitable sales matter more than soft metrics such as attention rate or click-through rate. An ad that makes sales should be kept even if its soft metrics are weak, and soft metrics are improved afterwards. [L0995, 2023]
- A low attention rate and low click-through rate can still be acceptable when the ad makes sales, because the people who engage may be more qualified buyers. A high attention rate with no sales is not a good sign. [L0999, 2023]
- Soft metrics are early funnel signals: link clicks, add to cart and initiate checkout, together with their cost columns. Hard metrics are purchases and ROAS. Read the soft metrics first to judge whether an ad is worth scaling or needs more budget. [L1030, 2026]
- Read soft metrics (engagement and early signals such as cost per click and CVR) alongside hard metrics (ROAS, CAC and profit) to decide what to fix. A product that fails may need better landing page, creative or product detail page work before it is judged dead. [L1038, 2026]
- Add-to-cart activity signals real buyer interest. If CPC, CPM and CTR look bad but add-to-carts are happening, let the campaign run another day before cutting it. [L0874, 2026]
- The primary decision metric for a new Facebook product test is CTR in the first phase. CTR is read before sales, since sales need more spend and time to show up. [L0562, undated]

### Conflicts on the metrics that matter

- Daily decisions : use only purchase-related metrics for daily optimization. Do not make major decisions based on CTR, CPC, CPM or conversion rate alone. These secondary metrics inform analysis but should never drive primary decisions. [L0290, 2025-26]
- Early test phase: CTR is the main early metric in the first phase of testing a product on Facebook because it compares the people who saw the ad with those who clicked it. [L0562, undated]
- New store: primary metric for a new store is CTR, at least 1.5%. [L0642, undated]
- Add-to-cart classification: one source lists add-to-carts among hard metrics (judge ads by sales, profit and add-to-carts). [L0999, 2023] one source lists add-to-cart among early soft signals, with purchases and ROAS as the hard metrics. [L1030, 2026] Use add-to-carts as early signals and not as the final verdict, since the sources differ on the label.
- Phase 5 ad testing: optimize using four metrics: CTR (click-through rate), CPM (cost per thousand impressions), ATC (add-to-cart rate) and conversion rate. These indicate creative strength, targeting efficiency, funnel engagement and sales conversion. [L0199, 2026]
- Ad metrics targets for a test: CPM below $25, CTR above 1.5% (ideally 2%), and CPC below $1. [L1171, 2024+]
- Store conversion rate target during a test is at least 1.5% of visitors buying. [L1171, 2024+]
- For a clear winning product, track only ROAS and sales. [L1173, undated]

### Cut-early signals and metric discipline

- Cut losing ads early using soft metrics. Keep an ad only if these metrics improve day over day, otherwise cut it. [L1019, 2026]
- CPC and profitable spend matter more than CTR. [L0648, undated]
- Do not judge a test ad by CTR alone. [L0692, 2023]
- Judge ads by hard metrics first; soft metrics matter only if an ad is not making money. [L0999, 2023]
- Judge performance using a product's numbers, not by attachment. [L1176, 2023]


Part 22 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/21-kill-rules-by-platform.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/23-seasonality-and-volatility.md
