<!-- part of ecom/deep/19-metrics-finance-and-tracking.md -->
Part 9 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/08-break-even-cpa-and-cost-per-purchase.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/10-ad-metrics-glossary-and-how-to-read-them.md

## Traffic, conversion and funnel math for planning

### Conversion rate definitions

- A conversion is one completed purchase by default. The same formula, purchases ÷ sessions × 100, works for any tracked event on the store, such as email signups, add-to-cart clicks or checkout starts. Example: 2 purchases from 100 visitors is a 2% conversion rate. [L0135, undated; L0390, 2019; L0423, 2019]
- Use the conversion rate per product if you have it. If not, use the site-wide rate as a close estimate. Recheck the numbers whenever the conversion rate changes. [L0446, 2021-22]
- The conversion rate is the main KPI for paid ads because it shows what is working. Read it together with cost per click, average order value (AOV), COGS and customer acquisition cost (CAC). [L1038, 2026]
- A conversion rate only means something against its industry and niche, so 2% is not automatically poor. Many visitors are still early in their decision and not ready to buy. [L0423, 2019]

### Measurement base: sessions, visits and unique visitors

Each source uses a different denominator. Pick one and keep it consistent when comparing periods.

| Denominator | Formula | Example | Source (date) | IDs |
|---|---|---|---|---|
| Sessions (Shopify Online Store report) | orders ÷ sessions × 100 | 366 ÷ 64,887 = 0.56%; same example has 58,492 unique visitors | one source | [L0400, 2021-22] |
| Sessions, one month of one store | orders ÷ sessions × 100 | Infrared sauna store 134 ÷ 23,382 ≈ 0.57%; gazebo store 402 ÷ 80,733 ≈ 0.50%; air purifier store 137 ÷ 24,288 ≈ 0.56%; one gazebo day 9 ÷ 716 ≈ 1.26% | one source | [L0771, 2021-22] |
| Unique visitors | orders ÷ unique visitors × 100 | 44 ÷ 2,500 = 1.76% | one source | [L0468, 2020] |
| Unique visits | purchases ÷ unique visits × 100 | 2 ÷ 100 = 2% | one source (undated) | [L0582, 2020-26] |
| Store visits | orders ÷ store visits × 100 | 1 ÷ 161 ≈ 0.6%; 3 ÷ 161 ≈ 1.9% | one source (undated) | [L0650, undated] |
| Qualified clicks | sales ÷ qualified clicks × 100, counting only clicks from campaigns aimed at the products you sell | 2.5 sales per 100 qualified clicks = 2.5% | one source (undated) | [L1254, 2020-26] |
| Unique outbound clicks (Facebook custom metric) | purchases ÷ unique outbound clicks | Used because Facebook tracks outbound clicks more reliably than page views | one source (undated) | [L0950, 2023] |

- Base conversion analysis on unique visitors, not total clicks, because repeat visits from the same people inflate the total. [L0468, 2020]
- In analytics, switch the visitor count from total to unique visitors before calculating the conversion rate. [L0963, 2022]
- An overall conversion rate can look low because of repeat visitors, bots, unrelated traffic and total rather than unique counts. Judge the store by paid traffic instead. [L0963, 2022]
- Measure the paid traffic rate on unique visitors, counting Google Shopping and remarketing on Google, Facebook and Instagram. [L0963, 2022]

### Conversion rate benchmarks

Sources disagree. Each value below applies to the context in its row. Use the row that matches your traffic type and store stage, not the nearest number.

| Context | Benchmark | Source (date) | IDs |
|---|---|---|---|
| Google Shopping and Facebook remarketing combined | minimum 2.5% | one source | [L0249, 2022] |
| Qualified traffic targeted by keyword intent | 2.5% or better | one source (2023) | [L0251, 2023] |
| Google Shopping with quality traffic | 2.5%; below this, investigate traffic quality or the landing page | one source (2023) | [L0274, 2023] |
| Qualified unique visitors from Google Shopping | about 2.5%; 100 qualified unique visitors should produce about 2.5 sales over a longer period | one source (2023) | [L0804, 2023] |
| Google Shopping once dialed in | about 2.5% of visitors | one source (2023) | [L0855, 2023] |
| Qualified paid traffic | about 2.5% | one source | [L0969, 2022] |
| Paid traffic on unique visitors (Google Shopping, remarketing on Google, Facebook, Instagram) | at least 2.5% | one source | [L0963, 2022] |
| Drop-ship store, unique visitors | 2.5% or better (2020 benchmark) | one source | [L0468, 2020] |
| Google Shopping average | about 2.5%; 2% is an acceptable lower benchmark while the store is still being optimized | one source | [L0961, 2020] |
| Controllable, targeted traffic | about 2.5%; Google Ads traffic from specific product searches should convert above this; broad organic searches typically convert lower | one source | [L1109, 2018] |
| Stores on the one source model, set up correctly, optimized, right traffic | 2.5%; reaching it means the store performs well | one source (undated) | [L0582, 2020-26] |
| Planning target for traffic needs | 2.5% (2.5 buyers per 100 visitors) | one source (undated) | [L1147, 2020-26] |
| Minimum conversion target | 2.5% (200 visitors should produce about 5 sales) | one source (undated) | [L0474, 2020-26] |
| Reasonable benchmark from targeted campaigns | 2.5 sales per 100 qualified clicks; compare only after a large enough click sample | one source (undated) | [L1254, 2020-26] |
| Google Product Listing Ads, new store | 2% even for a new store | one source | [L1085, 2018] |
| Qualified organic traffic searching for the product directly | 2% or higher | one source (2025) | [L0278, 2025] |
| Generic website / good website with cold traffic / product-specific landing page | about 2% / about 5% / 15% or higher; check your own rate in Google Analytics before comparing | one source (undated) | [L0643, 2015] |
| Direct-response dropshipping store | 1-2% typical; 2-3% good (roughly 2 to 3 buyers per 100 visitors) | one source (undated) | [L0605, undated] |
| Store minimum target | 1.5% | one source (undated) | [L1212, undated] |
| Store, weekdays / weekends | about 3-3.5% / 4-5% | one source (undated) | [L0693, 2024] |
| Products above $200 | 1-1.5% industry standard; strong stores 2-3% | one source (undated) | [L0788, undated] |
| Store, industry standard | around 2% | one source (undated) | [L1315, 2023] |
| Winning product | 7-9%; a rate near 1% usually means a product or offer problem rather than an ad problem | one source (undated) | [L1316, 2024+] |
| Typical US store | 4-6% (rough benchmark; compare against your own history) | one source (2026) | [L1038, 2026] |
| Typical e-commerce site | around 0.5%, 1% or 2%; most first-time visitors do not buy on that visit | one source | [L1239, 2021-22] |

- The 2.5% target is the reference for paid, targeted, qualified traffic. The 2% figure is the lower benchmark for a new store still being optimized, for Google Product Listing Ads, and for qualified organic traffic searching the product directly. [L0961, 2020; L1085, 2018; L0278, 2025]
- The 1.5% store minimum and the 1-2% typical range for direct-response stores are lower figures from a different source. When they conflict with 2.5%, use the 2.5% figure for paid targeted traffic and the lower figure for the store as a whole. [L1212, undated; L0605, undated; L0249, 2022]
- If ad CTR or store conversion falls below these benchmarks, change the creatives, market or offer. [L1212, undated]
- Price level does not change the expected rate for Google PLA: a $5,000 product should not be expected to convert at a much lower rate than a $500 product. [L1085, 2018]
- Benchmark sample from a new store: about 470 well-targeted visitors should produce roughly 8 sales in the early period (2024); poorly targeted traffic converts below that. [L0471, 2024]
- Google PLA example at a 2% rate: 400 visits give about 8 sales and 320 visits about 6 sales. [L1085, 2018]
- At a 2% rate, 100 unique clicks from Google should produce about 2 sales within 2 to 3 days, as a baseline for judging a campaign. [L0961, 2020]

### Sample-size limits

Use the threshold that matches the decision. Below the threshold, wait for more data instead of acting.

| Decision | Minimum data | Source (date) | IDs |
|---|---|---|---|
| Conclusions about a product | 150 to 200 real visitors; 50 to 100 is too little | one source (undated) | [L1259, undated; L1260, undated] |
| Suspecting a store conversion problem | about 200 visitors is too few; around 2,000 qualified visitors with no sales justifies investigation | one source | [L1090, 2021] |
| Budget or CPC decisions per product | 100 clicks minimum; 97 clicks is still too small, but small optimizations are fine | one source (undated) | [L0941, 2022] |
| Conclusions about ads | about 100 people is too small; about 1,000 supports conclusions; 2,000 to 5,000 supports firm decisions | one source (undated) | [L1083, 2024+] |
| Stable conversion average | several thousand clicks; 280 clicks is too small; normal variation averages out over time | one source (2023) | [L0274, 2023] |
| Return on ad spend (ROAS) | at least 20 purchases | one source (undated) | [L0649, 2019] |
| Store decision on paid Shopping traffic | about 1,000 visits | one source (2023) | [L0855, 2023] |
| Percentages (CTR, conversion) | several thousand impressions with a meaningful number of clicks | one source (undated) | [L0644, undated; L1426, undated] |
| Split test | enough traffic to show a real change; a 2% change is unreliable, a 40% change is more reliable | one source (undated) | [L0995, 2023] |

- Small samples are unreliable for percentages. Two clicks out of 100 impressions can jump to 3% with one more click, and two clicks can swing CTR from 2% to 3%. [L0644, undated; L1426, undated]
- Small traffic samples are not statistically reliable for conversion rate optimization. Large moves, such as revenue or profit changing sharply, can be trusted more than small percentage changes of around 2%. [L0995, 2023]
- A split test of prices needs a steady traffic volume. A 2% change is not reliable, but a 40% change is more reliable. [L0995, 2023]
- Normal early-stage performance of 1,780 impressions, 36 clicks and zero sales over six days is a typical starting point, not a failure. These numbers are too few to conclude anything about conversion rate or viability. [L0243, 2019]
- A campaign with 110 unique clicks and no sales may just need a larger sample before you judge it. [L0961, 2020]
- Around 46 clicks is too small to estimate a conversion rate. Wait for more traffic, and compare the daily budget with the daily ad spend to judge whether traffic is limited. [L0837, 2025]
- 57 clicks in 30 days (44 Microsoft Ads, 13 Google Ads, on $2.16 spend) is far too little data to draw any conclusion. [L1254, 2020-26]
- A store with 287 visits in 30 days, 116 of them from paid Shopping, should expect about 2.5% of 116, or roughly 2 to 3 sales. That sample is too small to judge the store; a decision needs about 1,000 visits. [L0855, 2023]
- Before judging a product, run ads long enough to gather at least 150 to 200 real visitors. [L1259, undated; L1260, undated]
- A conversion rate cannot be judged from a small number of clicks. Compare against the 2.5 per 100 benchmark only after you have a large enough sample. [L1254, 2020-26]
- Google Ads' estimated click volume, shown after an ad group is saved (about 29 clicks in the example), is a rough check only, not a performance target. [L1352, 2020-26]
- There is no fixed target visitor number. The goal is as many visitors as possible, as long as they are qualified: right country, relevant search terms and buying intent. Paid bot traffic is worthless. [L0971, 2024]

### Funnel stage math

- Each step of the funnel should keep at least about 50% of users. Example: 100 add-to-carts should produce about 50 checkouts and 25 sales. A bigger drop points to hidden costs, a broken checkout or a mobile problem. [L0853, 2021]
- Stage rates are ratios of consecutive steps:
  - Landing page to add-to-cart = add-to-cart visitors ÷ landing page visitors
  - Add-to-cart to checkout = checkout starts ÷ add-to-cart visitors
  - Checkout to purchase = purchases ÷ checkout starts
  - Example: 12 add-to-cart visitors out of 200 landing page visitors is a 6% add-to-cart rate, which is the benchmark threshold in this example. [L1259, undated]
- Shopify's own analytics shows visitors, pages opened and time on site, enough to diagnose early traffic problems. On average the first sale comes around 700 visitors, so about 5,000 visitors with no sales signals a serious issue. [L1380, 2022]
- CTR is one of the first and often weakest points in the funnel. Doubling CTR from 1% to 2% doubles incoming target-audience traffic without changing targeting, which can proportionally double revenue if conversion stays constant. [L0327, 2020-26]
- The lesson's quick math uses three levers: a 20% CPC discount on Shopping ads from a CTR boost, a 26% conversion rate lift from dynamic product ads (DPA), and a 10% boost in customer lifetime value (LTV). [L1031, 2018]

### Click volume expectations

- Expected clicks per conversion = 100 ÷ conversion rate in percent. At 2%, expect 1 conversion every 50 clicks. At 2.59%, expect 1 every 38 clicks (100 ÷ 2.59 ≈ 38.6). Expected conversions per 100 clicks = 100 × conversion rate. [L0745, 2020-26]
- Days to first conversion = clicks needed for one conversion ÷ clicks per day, where clicks per day = daily budget ÷ cost per click. Examples: at a 1% rate, 100 clicks are needed; at $10/day and $1 CPC that is 10 clicks/day, so 10 days to one conversion. At 0.5% it takes 20 days; at 0.25% it takes 40 days. [L1341, 2020-26]
- Visitors typically need 2 to 3 days from first click to purchase, because promotions and offers affect the buying timeline. Account for this delay when you compare ad spend to sales. [L0961, 2020]
- At a 2.5% rate, 385 visitors should yield 3 to 4 sales over seven days once the campaign and store are optimized. [L1092, 2022]
  - Source inconsistency: 385 × 2.5% ≈ 9.6 sales, not 3 to 4. Check the visitor base, rate or period before using this figure in a plan. [L1092, 2022]
- Example: 100 qualified clicks to a product page should produce 2.5 sales at a 2.5% rate. If sales are fewer, the product page, pricing or product selection may not match qualified traffic. Optimize the page or pause traffic to that product. [L0253, 2024]
- To determine how long to wait before expecting 2-3 sales per week:
  1. Select one qualified product page (receiving relevant keyword traffic). [L0253, 2024]
  2. Calculate spend per click (Ad Spend ÷ Clicks). [L0253, 2024]
  3. Calculate clicks needed for 2.5% conversion (40 clicks = 1 sale). [L0253, 2024]
  4. Calculate weekly clicks needed for 3 sales (120 clicks). [L0253, 2024]
  5. Example: if $2 per click, 120 clicks = $240 weekly spend needed. [L0253, 2024]
  6. Scale your daily budget to match this; give it 2-4 weeks of consistent traffic. [L0253, 2024]
  7. If conversion rate is lower than 2.5%, optimize the product page before concluding traffic is ineffective. [L0253, 2024]
- Organic traffic growth from zero: a realistic six-month target is around 10,000 monthly organic visits. 50,000 is unrealistic for most people starting from that baseline. [L0447, 2021]
- About 95% of ecommerce store visitors are new each day, and each visitor sees the discount offer only once. Plan traffic as new visitors, not returning ones. [L0137, undated]

### Visitors and units needed

- Units needed per month = target monthly net profit ÷ net profit per sale. Example: a $3,000 monthly target needs 1,000 sales at $3 profit each, or 10 sales at about $300 profit each. Ten sales in a 30-day month is roughly one sale every three days. [L0474, 2020-26]
- Low-ticket vs. high-ticket example: for $3,000 profit, low-ticket products ($10) need 1,000 sales per month, while high-ticket products ($1,000) need only 10 (about one sale every 3 days). [L0012, undated]
- Required monthly visitors = required monthly sales ÷ conversion rate. At 2.5%, 1,000 monthly sales need about 40,000 visitors per month (over 1,000 per day), and 10 monthly sales need about 400 visitors per month. [L0474, 2020-26; L1147, 2020-26]
- Traffic needed at 2.5% for $3,000 monthly profit: about 400 qualified visitors per month for a $300-profit product, versus about 40,000 for a $3-profit product. Buying 400 visitors costs far less than buying 40,000, so paid advertising is far more affordable for high-ticket products. [L0012, undated; L1147, 2020-26; L0474, 2020-26]
- Monthly orders = monthly unique visitors × conversion rate. Example: 191,000 visitors × 2.5% = 4,775 orders per month. [L0524, 2023]

### Affordable cost per visitor

- Traffic is purchased only when profit per sale covers the cost per visitor, because not every visitor buys. A product earning $3 profit cannot support paid traffic at about $1 per visitor, while a $300 profit can. [L1147, 2020-26]
- Maximum affordable cost per visitor = profit per sale × conversion rate. At 2.5%, a product earning $3 can afford about $0.075 per visitor, and a product earning $300 can afford about $7.50. Paid traffic only makes sense below this limit. [L1147, 2020-26]
- Typical clicks should cost 20 to 50 cents. Example: at $1 per click, 1,000 clicks cost $1,000; the same traffic produced 20 sales on a generic website, 50 on a good website and 150 on a product-specific landing page, so page design changes cost per sale. [L0643, 2015]
- Ad spend for traffic = visitors × CPC. Example: 500,000 visitors × $0.50 CPC = $250,000 spend. ROAS = revenue ÷ ad spend, so $1,000,000 ÷ $250,000 = 4x. [L0871, 2021+]
- Judge return on ad spend only for ads with at least 20 purchases. [L0649, 2019]

### Early months and ramp-up

- A first-month revenue target of $20,000 is achievable only when the store is live, supplier products are uploaded, conversion is optimized and paid traffic is running. Missing it early does not mean the model failed; stores keep improving over time. [L0663, 2019]
- The first month after launch is mainly for collecting data with small ad budgets. Revenue grows after campaigns are optimized, so do not expect the first month to match later months. [L0667, 2025]

### Revenue and profit forecasts

- Revenue = visitors × conversion rate × AOV, where AOV = total revenue ÷ number of orders. Example per 100 visitors: 2% at a $60 AOV gives $120; 3% at a $50 AOV gives $150. [L1164, 2026]
- Calculate changes carefully: $150 against $120 is 25% more revenue, not 30%. Moving conversion from 2% to 3% is a 50% rise, not a doubling. [L1164, 2026]
- Estimated monthly revenue = sales per month × AOV. Example: 20 sales a month at an average order of $800 gives about $16,000 per month. Use this to check whether a high-ticket store grows as expected. [L1472, 2022]
- Estimated monthly net profit = monthly orders × customer value × net margin. Example from the session: about $622,000 gross customer value per month; at a 20% net margin, roughly $124,000 per month. Recompute with real data, because rough inputs multiply into large errors. [L0524, 2023]
- Present revenue and profit estimates as a range, not a single number. Rerun the estimate with a higher conversion rate (for example 3.5%) and with a higher average order value from bundles to see the spread. [L0524, 2023]

### Refunds and guarantees

- Net sales = gross sales − refunds, where refunds = gross sales × refund rate. Without a guarantee: 100 sales at a 5% refund rate gives 95 net sales. With a guarantee: 130 sales at a 10% refund rate gives 13 refunds and 117 net sales. [L0683, undated]
- In this worked example, the guarantee produced 117 net sales against 95 without it: 22 more sales, roughly a 23% revenue increase. The result assumes the guarantee lifts orders from 100 to 130 while the refund rate rises from 5% to 10%. [L0683, undated]
- Test a guarantee by calculating net sales under the expected higher conversion rate and the expected higher refund rate together. A guarantee is worth adding when net sales still rise after refunds are subtracted. [L0683, undated]

#### Further details

- The minimum benchmark is 2 sales per 100 unique visits, a 2% conversion rate. [L0582, 2020-26]


Part 9 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/08-break-even-cpa-and-cost-per-purchase.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/10-ad-metrics-glossary-and-how-to-read-them.md
