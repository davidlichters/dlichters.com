<!-- part of ecom/deep/19-metrics-finance-and-tracking.md -->
Part 24 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/23-seasonality-and-volatility.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/25-traffic-source-country-and-product-breakdowns.md

## Diagnosing the store funnel: conversion, bounce and on-site behavior

### Verify tracking and data before you judge

- Record how many visitors arrive per day, how many of them are organic, and where they come from before you diagnose a conversion rate. [L0663, 2019]
- If traffic is high but sales are low, verify the numbers first. Example: 2,000 visits (1,500 from Google Ads and 500 direct) should produce dozens of sales at a healthy conversion rate. [L0663, 2019]
- Blended conversion rates from Shopify or Google Analytics are misleading because they include bot traffic. [L0249, 2022]
- Blended store conversion rate also mixes bot traffic, organic searches and repeat visits, so measure each paid channel separately, such as Google Shopping, Facebook Dynamic Remarketing and Google Remarketing. [L0272, 2022]
- The conversion rate in the default Shopify dashboard blends all sources and understates the performance of controllable sources, especially Google Ads. [L1109, 2018]
- Track add-to-cart, checkout and purchase rates in Shopify to find the exact step where shoppers leave. Dropshipping is largely about reading these numbers after each change. [L0388, 2024+]
- Shopify shows average order value (AOV), add-to-cart percentage, initiate-checkout percentage and session conversion rate in the Analytics section of the dashboard. [L0445, undated; L0875, undated]
- Add-to-cart percentage shows how well the landing page and offer work, because it measures how many visitors take the first purchase step. A weak value points to a page or offer problem before the ads are blamed. [L0445, undated; L0875, undated]
- Store analytics show which products customers view, add to cart, buy and ask about. Google Ads and Google Analytics data are the most valuable sources for understanding real customer behavior. [L1446, 2020-26]
- Shopify analytics show website visitors and the pages they open, so no extra analytics tool is needed at the start. [L1304, 2020-26]
- Review Google Analytics data about every two weeks to track performance trends and make data-driven optimization decisions. [L0293, 2020-26]
- When diagnosing a store with few sales, compare Google Analytics traffic week over week or month over month since launch. This shows whether the problem is traffic volume or conversion. [L0807, 2025]
- Analyze traffic by source over 30 days, such as paid Shopping, organic social, organic search, referrals and unassigned, to find where sales come from before changing anything. [L0855, 2023]
- Review two numbers in analytics: where traffic goes (most visited pages) and where sales come from . Together they show which pages to optimize and which channels to scale. [L0972, 2025]
- When judging a store, focus first on high-intent actions: add to cart, initiate checkout and completed purchase. Traffic source matters mainly when you diagnose a tracking problem or spot unwanted traffic. [L0363, 2022+]
- Conversion rate was the top priority for merchants in the audience poll, but AOV and customer lifetime value should be tracked alongside it when optimizing a cart. [L1231, 2025-26]
- Track revenue per visitor and per sale. A store with about 8,711 visitors and only 8 sales is a warning sign that ad spend is not reaching buyers. [L0854, 2022]
- Unverified industry figures are often quoted: average cart abandonment around 70%, and roughly 70% of website traffic eventually returns to the homepage. Use them only as rough benchmarks and compare against your own checkout and analytics data. [L1208, 2025-26]

### Sample size and traffic bursts

- Judge a store funnel only with at least 150 to 200 visitors; 50 to 100 visitors is too little data to conclude anything. [L1345, 2021+]
- Judge a store's conversion rate only after about 100 to 200 or more visitors per day; 30 to 50 visitors are too few for a reliable conclusion. [L1377, 2022+]
- If traffic is below that level, run ads for two more days before changing the landing page. [L1377, 2022+]
- Check the store after 100 to 150 visitors. If add-to-cart is still low, change the offer; if it stays low after several offers, switch to the next product. [L0363, 2022+]
- Ad platforms send an initial traffic burst when a campaign starts. Remove it from the visitor count before calculating add-to-cart rates. [L1345, 2021+]
- If the burst cannot be separated exactly, an approximation based on the timing of the burst is acceptable. [L1345, 2021+]
- Launch ads six to seven hours before the planned running start time, so the initial burst happens at a known moment and can be excluded. Once the burst is identified, all other visits count as genuine visitors. [L1345, 2021+]

### Core store rates and benchmarks

**Formulas**

- Add-to-cart rate = add-to-cart events / landing page visitors (sessions that reach the product page). [L0361, 2024]
- Example: 100 visitors and 4 add-to-carts gives 4%, which is the minimum benchmark. [L0361, 2024]
- Per Session Value (PSV) = revenue / sessions. [L0389, 2025-26]
- Average Order Value (AOV) = revenue / transactions. [L0389, 2025-26]
- Conversion rate = transactions / sessions. [L0389, 2025-26]
- Check: $57,286 / 50,970 sessions = $1.12 PSV, and $57,286 / 1,019 transactions = $56.22 AOV, which matches the control figures in the case. [L0389, 2025-26]
- Revenue per session is the metric that matters most in conversion rate optimization, more than conversion rate alone. A test that raises conversion rate can still be unprofitable if it attracts lower-spending customers or lowers AOV. Measure every A/B test against revenue-per-session improvement. [L0197, 2025-26]

**Benchmarks for add-to-cart and conversion**

| Metric | Benchmark | Applies to | Source ids |
|---|---|---|---|
| Add-to-cart rate, minimum | At least 4% of landing page visitors | Any store; anything clearly below is a very bad sign | [L0361, 2024] |
| Add-to-cart rate, winning product | About 4 to 5% of store traffic | A product that is already winning | [L0773, 2023; L0774, 2023] |
| Add-to-cart rate, product page | About 5% of visitors is a reasonable benchmark | Product page check | [L1216, undated] |
| Initiate-checkout rate, winning product | About 4 to 5% of all traffic | A product that is already winning | [L0773, 2023; L0774, 2023] |
| Store conversion rate | About 2% to 3% is ideal depending on industry | General e-commerce | [L0640, 2023] |
| Store conversion rate, dropshipping | Above 4% is good | Dropshipping | [L0640, 2023] |
| Paid channel conversion | 2.5% or more for Google Shopping, Facebook Dynamic Remarketing and Google Remarketing | Each paid channel separately | [L0272, 2022] |
| Product page conversion | Above 1.5% is the target | A product page getting clicks | [L1172, 2023+] |
| Facebook traffic conversion (practice) | Roughly the same percentage as CTR, so 1.5% CTR leads to roughly 1.5% conversion | Rough practice benchmark | [L1017, undated] |
| Example store | About 100 visitors per day gave 3 to 4 sales per day, roughly 3 to 4% conversion | Example only | [L0372, 2022] |

- In dropshipping, the add-to-cart rate should be roughly double the purchase conversion rate because shipping times are long. [L0640, 2023]
- Use the benchmarks as a guide for where to look, not as a verdict on their own. Each benchmark is valid only with enough traffic behind it. [L1345, 2021+; L1377, 2022+]
- A slow traffic week with a healthy conversion rate points to a traffic problem, not a product or checkout problem. [L0372, 2022]
- A store with 20,000 visits and no sales has a conversion issue on the site rather than an ad issue. [L1225, 2025]
- Strong top-of-funnel traffic with no add-to-carts usually means the bottleneck is the website. [L1225, 2025]

### Reading the funnel stage by stage

- Diagnose a weak store in this order: ads shown, clicks, visits, add-to-cart, checkout starts and completed purchases. [L0471, 2024]
- The largest drop between two stages shows where the problem sits. Fix that stage before changing anything else. [L0471, 2024]
- Example: many checkout starts with no purchases points to checkout or trust issues rather than to ad targeting. [L0471, 2024]
- Analyze the funnel in this order: pre-click ad metrics, then website and landing page metrics, then checkout, then customer support and supply chain. If the ads perform well, the problem is usually further down the funnel. [L1260, undated]
- Interpret the funnel in the Shopify report by checking sessions per landing page, add-to-cart rate and conversion rate. This locates the leak between ad click and purchase before you change creatives. [L0640, 2023]
- A typical funnel drop from ad click to add-to-cart to final checkout is about half at each stage. Shipping costs are the most common reason people leave at checkout. [L0640, 2023]
- Check funnel ratios per product and per country: CTR, CPC, CPM, conversion rate, add-to-cart ratio and initiate-checkout ratio. [L1185, 2023]
- The add-to-cart rate is driven mostly by what happens on the store after the click (site quality, product and offer), not by the traffic source alone. Evaluate it per product and per store rather than per ad platform. [L1508, 2022+]
- The add-to-cart rate used to judge a product page is read in the Shopify backend. Check that the page structure is good enough before duplicating it. [L1194, undated]
- In Business Manager, check add-to-cart and initiate-checkout rates per ad asset and compare them with the Shopify dashboard. A drop at one step shows where the funnel breaks. [L1017, undated]
- A profitable funnel needs both parts healthy: strong Meta metrics (CPM, CTR, CPC, cost per purchase) and a converting website. A good website cannot compensate for expensive traffic, and cheap traffic cannot compensate for a website that does not convert. [L1354, 2025-26]

**Funnel leak table**

| Leak location | Indicator | Likely root cause | Action |
|---|---|---|---|
| Pre-click | High CPM and low CTR | Creative not resonating | New hooks or angles |
| Click to LPV | More than 30% drop | Slow page or accidental clicks | Fix page speed |
| LPV to ATC | Under 5% | Page does not match the ad | Improve message match |
| ATC to checkout | Under 30% | Cart friction | Improve cart experience |
| Checkout to purchase | Under 50% | Checkout abandonment | Simplify checkout |

[L0613, 2026]

**Procedure: funnel check with a 3-step order**

1. Check the number of visitors arriving at the store first. [L1508, 2022+]
2. Check whether those visitors add products to the cart. [L1508, 2022+]
3. Check whether people are buying. [L1508, 2022+]
- Use these results to decide whether the price, the product and the website are converting, and look at all three together. [L1508, 2022+]

**Procedure: diagnosing a failed campaign**

1. Check whether tracking is correct by comparing the ad platform numbers with the store analytics, for example Shopify. [L0361, 2024]
2. Check CTR and CPC. A very high CPC points to a creative or audience problem. [L0361, 2024]
3. Check the add-to-cart rate against the 4% benchmark. If it is low, the creative, offer or landing page is the suspect. [L0361, 2024]
4. If add-to-carts are fine, check the step from add-to-cart to checkout: shipping costs, trust signals, and whether the checkout works at all. [L0361, 2024]
5. If people reach checkout but do not buy, test the checkout yourself and review the purchase step. [L0361, 2024]

**Four-scenario diagnosis from the tracker**

1. Ads and website both healthy: all metrics in green, ROAS well above break-even, stable for 5 to 7 days. Action: scale. [L1354, 2025-26]
2. Ads and website both weak: high CPM, expensive clicks, no or few sales, everything in red for 5 to 7 days. Action: improve both parts of the funnel. [L1354, 2025-26]
3. Ads strong (good CPM, CTR and CPC) but website weak (few or no add-to-carts, low conversion rate such as 0.5%). The bottleneck is the website. [L1354, 2025-26]
4. Website strong but ads weak (high CPM, CPC near $6). The funnel is not scalable until traffic cost is fixed. [L1354, 2025-26]

**Examples from the same tracker**

- Optimal funnel: $100 daily Meta spend, ROAS of 4.5 (versus break-even 1.30), 10 add-to-carts, 3 purchases, and a cost per purchase below the $115 target. [L1354, 2025-26]
- Weak funnel: $100 daily spend with high CPM, traffic costs too high, some add-to-carts but few or no sales, and all values in the red. Action: fix both the ads and the website. [L1354, 2025-26]
- Website bottleneck: $100 spend with good CPM, CTR and CPC, but zero or very few sales and a conversion rate around 0.5%. Action: focus on the website, such as trust elements (testimonials), the chosen price point, and what stops people from buying. [L1354, 2025-26]
- Ads bottleneck: a website with many add-to-carts, purchases, a positive ROAS and a good conversion rate, but terrible Meta metrics such as high CPM and a cost per click near $6. Action: the funnel is not scalable until traffic cost is reduced, even though the website is good. [L1354, 2025-26]

### Add-to-cart and checkout drop-offs

- Check the funnel when add-to-carts are low or when there is a large drop between add-to-carts and initiate-checkouts. These drop-offs point to causes in the store or offer. [L0349, 2024]
- If add-to-carts are at or above 4% but there are zero sales, the problem lies after add-to-cart: checkout, shipping costs, trust or checkout setup. A problem in the checkout area is far more likely than a problem in the ad or product page. [L0361, 2024]
- Track add-to-carts alongside sales, because a store can show cart activity without enough purchases. In one example, four carts led to two sales, which pointed to the checkout experience and trust factors as the next place to look. [L0650, undated]
- Add-to-cart and checkout activity can be high while sales are zero. The speaker suggested this is unusual and worth investigating. Add-to-cart to checkout conversion of around 71% was considered strong. [L0552, 2023]
- Use the 71% figure as the strong end of add-to-cart to checkout conversion. The leak table treats under 30% as cart friction, so below 30% is a clear problem and 71% is a clear strength. [L0552, 2023; L0613, 2026]
- When add-to-cart and checkout are both healthy and click-through is healthy too, but sales are still missing, the remaining problem is more likely the product or the ad angle. [L1382, undated]
- Healthy add-to-cart and checkout rates suggest the landing page works, which moves the problem toward the offer, the creative or the product. [L1436, undated]
- When CTR is high but add-to-cart and checkout ratios are low, the product page is failing to hold the visitor. Typical causes are an unattractive offer, a weak product description or any reason that makes visitors leave before adding to cart. [L0774, 2023]
- If ads drive add-to-cart activity but few visitors complete checkout, the problem may be the offer rather than the ad. Test a clearer or stronger offer first. [L0918, 2023]
- When an ad gets clicks but no add-to-carts or purchases, the page or checkout is a likely cause. Testing the same ad again after a fix helps separate an ad problem from a checkout or page problem. [L1426, undated]
- A product page that gets clicks but does not convert needs work on the product page, price, bundles or copy. [L1172, 2023+]
- If content views are far below link clicks, the landing page may load too slowly, so visitors leave before the product page registers. Content views should normally be somewhat lower than link clicks, and a big gap is a warning sign for site speed. [L1024, undated]
- A good add-to-cart rate with zero sales points to a problem after the cart, not in the ad or the product. [L1216, undated]
- Track each step against a benchmark before deciding. The stage with the largest gap to its benchmark is where you start. [L0471, 2024; L0613, 2026]

### Site versus ad: where the problem sits

**Core split between ad and store**

- Check CTR and CPM first in Facebook ads. High CTR with no sales points to the offer, not the ad. [L0519, 2020+]
- Track CTR for ads and store conversion rate for the website separately. A good CTR with a low conversion rate points to the website or offer. A poor CTR points to the ad. [L0650, undated]
- A strong CTR with no sales means the ad is working and the store or offer is the problem. [L1017, undated]
- If CTR is at least 1.5% and CPC is below 1 USD but there are still no sales, the problem is the store. If CTR or CPC are off target, change the ads. [L1220, undated]
- If ads reach a click-through rate above 1.5% but produce no add-to-carts or sales, the problem is likely the offer. Test different offers before changing anything else. [L1399, undated]
- A good CTR of around 3% with many add-to-carts but no sales points to a problem after the add-to-cart step, such as currency or checkout. [L1185, 2023]
- After you have a good CTR and a good offer, check store conversion rate and then decide whether to scale or move on, in that order. [L0650, undated]
- Apart from the creative, the only other lever under the advertiser's control is the post-click part: landing page and funnel. Improving the conversion of visitors into buyers is a way to win the same audience pocket as competitors. [L0639, 2023]
- When ad CTR and CPC are acceptable but sales are missing, check the add-to-cart and initial checkout rates on the store. [L1436, undated]

**Hook, desire and interest**

- Diagnose a funnel problem in this order: first check that attention (hook rate) is strong. If clicks are good but sales are poor, the problem is in desire. [L0950, 2023]
- Possible causes of poor desire are an ad that does not sell the idea, unexpected fees, a price that is too high, a product page that does not sell well, a functional problem on the page, or a lack of trust. [L0950, 2023]
- A high click-through rate with poor sales shows real interest, so the next step is to fix the product page, checkout fees or trust signals rather than the ad. [L0950, 2023]

**Case: a launch with clicks and no sales**

- A product launched with a wow factor and a strong landing page got €190 in ad spend over four days without a single sale. Sessions were about 50 per day, then rose to 100 to 120 per day after new ad sets were added, but sales fell to zero. [L0950, 2023]
- Before the drop, the account had ROAS of about 2.2 and 4.4x return on ad spend, with a click-through rate of about 2 to 3%. [L0950, 2023]
- The first step was to check that the page and checkout functioned correctly and to use Lucky Orange to watch screen recordings. [L0950, 2023]

**Low conversion despite traffic**

1. Check which keywords are driving impressions and clicks in your Shopping campaign keyword report. [L0210, 2022]
2. Search Google for the product yourself and analyze what competitors show: messaging, offers and product photos. [L0210, 2022]
3. Compare your product page with competitor pages: pricing, descriptions, images, shipping and returns. [L0210, 2022]
4. Fix product page conversion elements, not just the ads. [L0210, 2022]

- A low conversion rate on a product page often means the page's traffic is at an awareness stage the page does not address. Check the traffic source and stage before changing the page itself. [L0481, 2021-22]
- A high bounce rate on a high-traffic page can also point to a gap between what visitors expected and what the page shows. [L0473, 2021-22]

**Unexplained sales drop**

1. Check whether the drop is seasonal or market-wide by comparing with previous years and with competitors. [L0949, 2021-22]
2. Look at what competitors are doing, including new products, better offers and stronger traffic. [L0949, 2021-22]
3. Check your own traffic, conversion and offer for changes, and fix what has shifted. [L0949, 2021-22]
- When a profitable store turns unprofitable after months of work, identify the root cause with data before changing things. Persistent problems usually come from specific parts of the funnel. [L0963, 2022]
- Before you change the store, check whether a poor result is a traffic problem or a conversion problem by comparing against the previous period. [L0807, 2025]
- When asking a mentor or coach to diagnose weak ad performance, send screenshots of the ad results and screenshots of the Shopify analytics showing how visitors behave on the store. This lets the reviewer see whether the problem is in the ads or in the store. [L1347, undated]

**Advertorial route (see also the advertorials section below)**

- Check how many visitors move from the advertorial to the offer page. [L1131, 2018+]
- If that number is low, rewrite the advertorial copy to strengthen the argument. [L1131, 2018+]
- Alternatively, split test sending ad traffic directly to the offer page against the advertorial route, and keep the stronger one. [L1131, 2018+]


Part 24 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/23-seasonality-and-volatility.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/25-traffic-source-country-and-product-breakdowns.md
