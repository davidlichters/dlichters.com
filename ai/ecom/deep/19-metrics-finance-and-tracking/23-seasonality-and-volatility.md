<!-- part of ecom/deep/19-metrics-finance-and-tracking.md -->
Part 23 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/22-scale-or-hold-decisions.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/24-diagnosing-the-store-funnel-conversion-bounce-and.md

## Seasonality and volatility

- Many products sell less in summer because customers spend more time outdoors, so many stores see a dip in that season unless they sell summer products. Plan lower spending for that period rather than treating it as a store failure. [L0949, 2021-22]
- Seasonality changes both demand and ROAS for a product. Outside the selling season, traffic and data are lower. A product that reached 4 to 6:1 ROAS at $50 per day dropped to about 4:1 at $10 per day, which was not enough to scale. Rising in-season demand can lift the same ad's ROAS again. [L0995, 2023]
- Seasonality affects results: demand can be lower outside the peak season, which reduces traffic and ROAS, and rises again during the season, which can push ROAS higher and make scaling easier. [L0999, 2023]
- Outside the season, a product reached about 4:1 ROAS at $10 per day, which was not enough to scale in its own campaign with an aggressive budget. [L0995, 2023]
- With small order volumes, sales vary randomly from day to day and week to week even when traffic and ads stay the same. Do not react to a few quiet days. [L0671, 2021]
- Do not increase ad spend because Pinterest or Google account representatives push for bigger budgets. Their pressure does not lead to more sales. [L0671, 2021]
- Monthly sales are volatile: a few large orders can drive a month, so judge by sample size over several weeks, not one month. [L0969, 2022]
- A campaign with a few large orders can show a very high return in one month and a much lower one the next, so one month of results is not a reliable basis for decisions. Make judgments on a larger sample, usually several weeks of data. [L0969, 2022]
- Early results are unstable, because the pocket and the pixel are still learning. [L0639, 2023]
- Stable campaign versus first day: in a stable campaign the lesson reported CPM of $3.38, CTR of 2.81% and CPC of $0.12, while a campaign on its first day showed CPM of $0.75 and CTR of 0.63%, which shows how much early data fluctuates. [L1135, undated]
- A new Meta campaign sold lower early results (a single sale from four ad sets with about $3.50 each for a $24.99 product) and this is an early start, not a verdict. [L1107, 2023]

### Testing structure and tracking

- Set a weekly spend limit for product testing before any campaign launches. The limit determines how many products you can test in a week. A test that runs out of budget without a winner should be cut quickly. [L1194, undated]
- Run each product in its own campaign rather than sharing one campaign. Testing two products in a shared campaign can record the same sale for both products, which makes it hard to see which product drove add-to-cart, checkout and purchase events. [L1347, undated]
- Install UTM tracking so every sale can be traced to its source campaign. Without it, Business Manager figures alone are not reliable for product comparison. [L1347, undated]
- Analyze results in Business Manager and in your tracking data to see which product performs better. [L1347, undated]
- Change only one variable at a time, such as the creative, the audience or the store, so you can see what caused a result. Once a store and product have proven themselves, test creatives while keeping the audience and settings identical. [L1377, 2022+]
- Optimize in steps so each change can be attributed to a single fix. [L1377, 2022+]

### Product test budgets

- Sources give different test budgets for a single product. Use the figure that matches your decision rule:

| Platform or context | Budget | Notes | Source |
|---|---|---|---|
| Facebook, deciding on one product | 200 to 300 USD | Spend this to test one product before deciding on it. | [L1432, undated] |
| Facebook, with a break-even check | 300 to 600 USD ad spend | After this spend, check whether the store is at least at break-even with a very high add-to-cart ratio. | [L1215, 2023+] |
| TikTok, normal test | 200 to 250 USD (minimum 200 USD per product) | Gives enough spend to judge an ad group over at least two days. | [L1377, 2022+] |
| TikTok, smaller test | 3 to 5 ad groups, about 60 to 100 USD total | Gives roughly 100 to 200 USD of data over two days. | [L1377, 2022+] |
| Beginners, general | 5 to 30 USD per day | Depends on platform and campaign. | [L1285, 2024] |

[L1432, undated; L1215, 2023+; L1377, 2022+; L1285, 2024]

- Once profitable products are identified, put most of the ad budget into the small group of products that generate most sales. Test the rest with a separate, smaller budget. This concentrates spending where return on ad spend is proven. [L1285, 2024]
- Do not decide how much to spend based on the total ad budget alone, since the budget can be $100 or $100,000. Decide based on ROAS: keep spending while the return meets the target you set. [L1508, 2022+]
- Optimize for profit, not for spend. If a campaign still stays above its profitable ROAS, the usual move is to increase its budget, not to cut costs to lower the bill. [L1203, 2016]

### Ad structure and budget minimums

- Use ABO (ad group budget) as the default structure, so each ad group has its own budget and spends it independently. Use at least $25 per ad group, since the platform's minimum is $20 and new accounts often underspend at lower levels. [L1377, 2022+]
- If ABO ad groups show spending problems, switch to a CBO campaign with about $50 to $60 at campaign level containing about four ad groups. Let the campaign distribute budget across ad groups instead of fixing a budget per group. [L1377, 2022+]
- Optimize an ad group after about every $5 to $10 of spend rather than making large decisions early. Keep a test creative running for at least two days before deciding it has failed. [L1377, 2022+]

### Early signals before purchases

- During product testing the goal is not purchases but early signals: add-to-cart ratio, cost per add-to-cart, highest CTR and lowest CPC. Purchases are expected only after the page and ads are working. [L1194, undated]
- Judge a tested product by its CTR and CPM first (and CPC). CTR shows whether people are interested in the product; a CTR above 1 percent is considered good and 1.5 percent is considered better. [L1432, undated]
- Review click-through rate after about 10 USD of ad spend, and send the ad screenshots for a detailed check, since per-country differences can drag down the overall CTR. [L1432, undated]
- Roughly every fifth or sixth tested product becomes a winner, according to the speaker's experience. [L1432, undated]

### Learning phase and wait times

- Facebook's learning phase requires about 50 purchase events per week for the ad algorithm to find the right people. Below that volume the algorithm lacks data, so the creative, product and offer must carry the early results. [L1315, 2023]
- Traffic systems typically need 2 to 4 weeks after setup and approval before they show their full performance. Do not judge a campaign's results before this window has passed. [L1393, 2020-26]
- Test periods differ by source and by decision. Use the window that matches the decision you are making:

| Decision or context | Window | Source |
|---|---|---|
| Decide on a product or concept, then read website purchases and ROAS | At least 3 days | [L1195, 2026] |
| Scaling decision | 5 to 7 days of consistent data; one good or bad day is not enough | [L1354, 2025-26] |
| Judging a batch of ad creatives | About one week, not a single day | [L1354, 2025-26] |
| TikTok ad groups | At least 2 days, since one day is not enough | [L1377, 2022+] |
| Other platforms | Usually 3 to 5 days | [L1377, 2022+] |
| TikTok review of ad sets | After 3 to 4 days | [L1374, undated] |
| Offer or ad test on break-even cost per purchase | Spread the spend over 3 to 4 days rather than one day | [L1315, 2023] |

[L1195, 2026; L1354, 2025-26; L1377, 2022+; L1374, undated; L1315, 2023]

- Before deciding to quit a product, you must have uploaded consistently for at least about two weeks. [L1444, 2022]

### Kill rules by platform

- **Break-even cost per purchase (both TikTok and Facebook).** This is the strict rule for media buying: once an ad or campaign has spent that amount with no sale, it should be cut, especially in the scaling phase. A campaign that gives sales consistently at or before each break-even interval is the kind worth keeping. [L1382, undated]
- **Facebook, no-sale threshold.** Once ad spend passes about $60 without any sales, the store is likely not converting. At that point test new offers and new marketing angles before spending more. [L1216, undated]
- **Facebook, near break-even.** A product that is less than about 100 USD away from break-even after roughly 300 USD of ad spend, with a poor add-to-cart ratio, is not close enough to move forward with. A product that is nowhere near break-even after the test budget should be dropped. [L1215, 2023+]
- **Facebook, stop rule.** After roughly 300 USD of ad spend, if the store is not at break-even and the add-to-cart ratio is poor, stop the product. [L1215, 2023+]
- **Facebook, lesson kill rule.** Turn off an ad after six days if it has spent less than $50 and sits below break-even ROAS. This is the lesson's own kill rule and is a starting point to adapt to the product's margins. [L1476, 2026]
- **Per offer.** Before judging a new offer or ad, spend at least one break-even cost per purchase on it. Around $20 per ad is a minimum example. [L1315, 2023]
- **TikTok, review.** After 3 to 4 days, check each ad set against your break-even return on ad spend. Turn off ad sets below break-even and keep the ones with a good positive ROAS, then scale them by horizontal or vertical scaling. [L1374, undated]
- **TikTok, ad group reduction.** Check the campaign about 8 to 12 hours after launch and note spend per ad group. Compare CPC, CPM and CTR across the ad groups. Cut ad groups whose CPC is clearly above the others, for example $1.50 to $2 or more against $0.50 to $0.77. [L1377, 2022+]

**TikTok ad group review steps:**

1. Check the campaign about 8 to 12 hours after launch and note spend per ad group. [L1377, 2022+]
2. Compare CPC, CPM and CTR across the ad groups. [L1377, 2022+]
3. Cut ad groups whose CPC is clearly above the others, for example $1.50 to $2 or more against $0.50 to $0.77. [L1377, 2022+]
4. Let the remaining ad groups run and review again after one day. [L1377, 2022+]
5. Duplicate the winning ad groups and replace the weak ones with new creatives. [L1377, 2022+]

- **Content and video thresholds.** Kill a product when any of these metrics fall below the threshold:

| Metric | Threshold | Checked after |
|---|---|---|
| Views | No video reaches at least 50k views | 2 weeks |
| Engagement rate | Below 3% | 1 month |
| Click-through rate to the website | Below 1% | 1 month |

[L1367, undated]

### Quit checklist for organic and content tests

**Checklist before quitting a product:**

1. Confirm you uploaded consistently for at least about two weeks. [L1444, 2022]
2. Rule out your store, your content type, the region where the video went viral, and a shadow ban. [L1444, 2022]
3. If views are still low and the factors in step 2 are excluded, the product is a candidate to quit. [L1444, 2022]
4. If a product reaches 1 million views with zero sales after steps 1 to 3, treat it as a strong sign the product is wrong. [L1444, 2022]
5. If the store has more than 1,000 Shopify sessions with no sale, treat that as another strong quit sign. [L1444, 2022]

- On average about 700 to 750 Shopify store sessions were needed before the first sale. A store with 1,000 sessions and no sale is a warning sign for the product. [L1444, 2022]
- A low view count that is not caused by shadow banning, content or region can also mean the product is not attracting attention. Once that is ruled out, low views are a reason to stop the product. [L1444, 2022]

### Hard and soft metrics

- **Hard metrics (decide on these):** break-even ROAS and break-even cost per acquisition, profit, and purchases once the page and ads work. [L1382, undated; L1203, 2016; L1194, undated]
- **Soft metrics (diagnose with these):** add-to-cart ratio, cost per add-to-cart, CTR, CPC, CPM and views. They signal whether a product is worth more spend, but they do not prove profitability. [L1194, undated; L1432, undated; L1367, undated]
- Use the break-even ROAS, not revenue or spend, as the threshold for keeping or cutting a campaign. [L1476, 2026]
- A consistent profit of about $100 per day is a real proof of concept, and $1k per day is not needed yet. [L1195, 2026]

### Scale or hold

- Scale a product or ad set only when its ROAS is at least breakeven ROAS plus 1. For example, with a breakeven ROAS of 2.5, scale once the ROAS reaches 3.5 or higher. [L1185, 2023]
- Scale a campaign only based on its break-even ROAS. Campaigns below break-even ROAS are not profitable, and campaigns above it can be scaled. [L1476, 2026]
- During a sale, check ROAS every four hours to decide whether to add budget. Continue scaling only while the ROAS is still strong. [L1363, 2023]
- Judge ads only after testing a batch of creatives over about a week, not on a single day. A ROAS that holds at or above break-even over that period signals profitability. [L1354, 2025-26]
- Products of this type can show a high ROAS when they are scaled fast. Speed of scaling matters because the product's window of demand is short. [L1211, 2026]
- A high ROAS after two or three purchases usually falls back to a lower plateau. Expect a drop from an early high (for example 9 ROAS) toward a more realistic level (for example 4 to 5) and plan around that, not the early number. [L1315, 2023]
- Facebook ads were expensive and inconsistent even early on, which made profitable scaling difficult. Test budgets and expectations with this in mind before committing large spend. [L1251, 2024+]
- A successful TikTok ad winner is not required to be a unique product, since a widely dropshipped product can perform well if the ad itself is well executed. Judge the ad on execution, not on product uniqueness. [L1374, undated]
- A store running three campaigns at about $230 a day had seven-day ROAS values of about 4.3, 3.1 and 5. The owner saw this as good enough, and the lesson advised building more cash flow before adding a new campaign structure. [L1225, 2025]

### Budget ramps and ROAS targets

- Use different ROAS targets for different funnel stages. Bottom-of-funnel YouTube campaigns (retargeting) should use a different return-on-ad-spend target than top-of-funnel awareness campaigns, because top-of-funnel campaigns are judged on cheap views and later retargeting, not direct sales. [L1510, 2020-26]
- Scaling example from the formula: with a breakeven ROAS of 2.5, the scale trigger is a ROAS of 3.5. [L1185, 2023]

**Case: TikTok product launch, Day 1 to Day 2 ramp:**

Case: a product was launched with $100 of Day 1 sales, then scaled to about $1,000 in Day 2. Day 1 results: $75 ad spend, two sales, $95.80 revenue. Average order value was about $48, cost per acquisition about $12, and ROAS of roughly 3.5x was reached on Day 2 after about $290 spend against about $920 revenue. [L1382, undated]

**Case: TikTok dropshipping, new product, April:**

Case study (TikTok dropshipping, new product, April). Starting point: a new product tested with a single reused creator video that had not yet gone viral (about 23,000 to 30,000 views). Day 1: the testing structure of four ad groups at $25 to $30 each with three creatives per group ran; about $75 was spent for two sales and about $95.80 revenue, and the winning creative had a CTR above 1 percent. Day 2: five CBO campaigns at $150 each on manual payment, four ad groups each, only the winning creative and copy; the campaign with a CPC of $0.62 produced sales at a CPA of about $12 on an AOV of about $48. Other campaigns were cut, the winner's budget was raised to $300, and the product price was raised by $5. Results: about $920 revenue on about $290 spend on day 2 (about 3.5x ROAS on that day), and total revenue around $900 to $1,000 across two days. [L1436, undated]

- Case results on TikTok: average order value about $44 on day 1 and about $47.69 to $48 on day 2; cost per acquisition about $12 with the winning campaign. [L1436, undated]

### Seasonality, volatility and red days

- Mixed green and red days are normal, so do not kill a campaign on one red day. [L1195, 2026]
- When a campaign has a red day, pump out more creatives, sharpen the messaging through research, and keep CBO 2 and CBO 3 fed so the system can spend and learn. [L1195, 2026]
- Do not judge a TikTok test on one day of data; give ad groups at least two days. [L1377, 2022+]
- Single days can be off, so spread the spend over three to four days rather than one day when testing an offer or ad. [L1315, 2023]
- Cut a product if demand is weak, the messaging does not work, or the market is saturated in Meta Ad Library, but only after testing for at least three days. [L1195, 2026]
- Per-country differences can drag down the overall CTR, so check creatives by country before deciding. [L1432, undated]


Part 23 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/22-scale-or-hold-decisions.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/24-diagnosing-the-store-funnel-conversion-bounce-and.md
