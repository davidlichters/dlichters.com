<!-- part of ecom/deep/19-metrics-finance-and-tracking.md -->
Part 40 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/39-personal-investing-and-wealth-building.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/41-year-on-year-seasonality-and-saturation.md

## Health scorecards and benchmarks: the four revenue buckets, MER and report cards

### Pulling the inputs from Shopify and the ad accounts

Use the Shopify reports exactly as listed here, because the report card depends on them.

**New and returning customer data**

1. Go to Analytics > Reports. [L0222, 2025-26]
2. Click "New vs Returning Customers over Time". [L0222, 2025-26]
3. Set period to "Last 90 Days" and "No Comparison". [L0222, 2025-26]
4. Remove the "Total Sales" metric and remove all dimensions (no by-day breakdown). [L0222, 2025-26]
5. Add these metrics: Orders, Gross Sales, Discounts, Total Shipping Charges, Taxes, Sales Reversals (these are returns), Net Items Sold. [L0222, 2025-26]
6. Remove visualization. [L0222, 2025-26]
7. Apply and copy the data. [L0222, 2025-26]
8. In the report card, paste using "Paste Values Only". [L0222, 2025-26]
- In Shopify reports, "Sales Reversals" is the metric name for customer returns. [L0222, 2025-26]

**Conversion rate, sessions and visitors**

1. Go to Analytics > Conversion Rate Breakdown. [L0222, 2025-26]
2. Set period to "Last 90 Days" and "No Comparison". [L0222, 2025-26]
3. Remove dimensions. [L0222, 2025-26]
4. Add metrics: Conversion Rate, Sessions, Online Store Visitors. [L0222, 2025-26]
5. Copy the data. [L0222, 2025-26]
6. Paste into the report card using "Paste Values Only". [L0222, 2025-26]
- Example values for this extraction: conversion rate 0.81%, sessions over 90 days 1,005,049, online store visitors 705,255. [L0222, 2025-26]

**Ad spend and fulfillment**

- Ad spend from TikTok, Snapchat, Pinterest and other platforms goes in the "Other Spend" field. [L0222, 2025-26]
- Combine all channels, such as Facebook, Google and other spend, into one total before it is used for MER and the marketing bucket. [L1235, 2025-26]
- Fulfillment cost is a formula field and must not be entered by hand. The system calculates it from your fulfillment data. [L0222, 2025-26]

**Input checks**

- If homepage data (revenue, ad spend and operating expenses) is wrong, every downstream tab gives wrong results. Verify all inputs before moving to other sections. [L0222, 2025-26]
- Take all revenue, refund, tax and cost inputs from the calculator homepage and check them for accuracy. If the results do not match the P&L, check the inputs before drawing any conclusion. [L1235, 2025-26]
- Use the last 90 days of data and include both new and returning customers, so the report shows total business performance and not one customer group. [L1235, 2025-26]
- Example COGS for a 90-day period: $216,980. [L0222, 2025-26]
- Example return rate: 2.1%. [L0222, 2025-26]

### Report card setup and workflow

**Opening the template**

1. Click the link to the AI Report Card Google Sheet. [L0222, 2025-26]
2. Click "Make a Copy" or go to File > Make a Copy to save a personal version. [L0222, 2025-26]
3. Never edit the original template. [L0222, 2025-26]
4. Only fill cells showing blue text (manual inputs). [L0222, 2025-26]
5. Never modify black text cells, because these contain formulas that calculate automatically. [L0222, 2025-26]

**Reading the colours and time windows**

- Blue font marks manually entered cells. Black font marks formula cells. Change only the blue cells. [L0222, 2025-26]
- The report card uses a 90-day lookback window for all metrics except operating expenses, which is calculated on a 30-day basis and then multiplied by three. [L0222, 2025-26]
- The Fix column records whether each metric must increase or decrease to reach target, and it sets the next priorities. [L1235, 2025-26]
- The report card is a Google Sheets template. It combines the calculator inputs, the four revenue buckets, the benchmarks and the growth metrics. [L1235, 2025-26]
- The benchmark figures and the contribution margin in the report card come from the new customer contribution margin calculator. Its homepage numbers feed the bucket values, so that calculator must be filled in before the report card is read. [L1235, 2025-26]

**90 Day Company Snapshot layout**

Values come from the calculator homepage and the last 90 days of store data. [L1235, 2025-26]

| Block | Fields | Source |
|---|---|---|
| New Customer (NC) | Total Gross Sales NC; Returns; Tax Collected; NC Performance Sales; # of orders; Average Order Value; Tax Obligation/Collected; Tax %; Net Items Sold; COGS Amount; Returns % | [L1235, 2025-26] |
| Returning Customer (RC) | Total Gross Sales RC; Returns; Tax Collected; RC Performance Sales; Shopify COGS Amount; RC Returns % | [L1235, 2025-26] |
| Fulfillment | Cost to Fulfill Orders | [L1235, 2025-26] |
| Ad Spend | Facebook Spend; Google Spend; Other Spend; Total Spend | [L1235, 2025-26] |
| Site Metrics | Visitors; Sessions; Conversion Rate | [L1235, 2025-26] |
| Team | Position; Salary (one row per person, e.g. owner, ops manager, customer service) | [L1235, 2025-26] |
| Software / Subscriptions | Name; Area; Bill (e.g. Klaviyo, Shopify, Gorgias) | [L1235, 2025-26] |
| Totals | MONTH TOTAL; 90 DAY TOTAL | [L1235, 2025-26] |

**Working through the report card**

1. Fill the calculator homepage with the last 90 days of data for new and returning customers, and check the figures against the P&L. [L1235, 2025-26]
2. Fill the 90 Day Company Snapshot with customer blocks, fulfillment cost, ad spend by channel, site metrics, team salaries and software bills. [L1235, 2025-26]
3. Read the four financial buckets (profit, COGS, marketing and advertising, OPEX) and confirm they add up to 100% of total revenue. [L1235, 2025-26]
4. Note each bucket's colour against its benchmark. Before cutting any cost, check whether a strong bucket such as profit can offset a red one. [L1235, 2025-26]
5. Start at the first red bucket and drill down with the decision tree until the most expensive component is found. [L1235, 2025-26]
6. Check the growth benchmarks: MER, contribution margin, ads launched, conversion rate, OPEX, promo events and emails per week. [L1235, 2025-26]
7. Enter an increase or decrease in the Fix column for each metric that is off target. [L1235, 2025-26]
8. Set priorities from the Fix column, make the changes, and repeat the report card later to measure the effect. [L1235, 2025-26]

### Derived metrics

- Performance Sales = Gross Sales − Discounts − Returns + Shipping Charges + Taxes. It is calculated separately for new and returning customers. Tax is included here and is removed in later analysis sections. [L0222, 2025-26]
- Total revenue for the report card = gross revenue − discounts − refunds + shipping charges − tax. Sales tax is subtracted because it is a pass-through cost and not real revenue for the business. [L1235, 2025-26]
- Average Order Value (report card) = Performance Sales ÷ Number of Orders. [L0222, 2025-26]
- Return Rate Percentage = Returns ÷ Total Gross Sales. [L0222, 2025-26]
- Other AOV definitions in the sources:
  - AOV = total revenue ÷ number of orders in the same period. Example: 40 USD rising to 70 USD means each order brings 30 USD more on average. [L0435, undated]
  - AOV = sum of the sale prices ÷ number of sales. Example: sales of $67, $197 and $247 give an AOV of about $170. [L0748, 2020-26]
  - AOV = total revenue ÷ number of orders, compared before and after a change on similar traffic sources. [L0860, 2026]
  - AOV = total sales ÷ number of orders. Examples from 2021 monthly reports: infrared sauna store 227,949.55 / 134 ≈ 1,701 USD; gazebo store 738,209.32 / 402 ≈ 1,836 USD; air purifier store 65,170 / 137 ≈ 476 USD. [L0771, 2021-22]
- Use the definition that matches the sheet. Performance Sales includes tax, and total revenue excludes it. Each is correct for its own section. [L0222, 2025-26; L1235, 2025-26]

### The four revenue buckets

**Structure**

- Split total revenue into four buckets: profit, COGS, marketing and advertising, and OPEX. Together they must equal 100% of total revenue. If the four percentages add up to more than 100%, the input data is wrong. [L1235, 2025-26]
- OPEX is fixed operating cost such as salaries and software subscriptions. The template lists Shopify, Klaviyo and Gorgias. Marketing and advertising is total ad spend. COGS is the cost of the goods sold. [L1235, 2025-26]
- Rapid-growth expenses are a different grouping. OpEx in this view includes courier fees, 3PL warehousing, supplier payments and freight forwarding. Avoid long-term contracts with these vendors, because their unit rates drop sharply as you scale. [L0041, 2025-26]
- The two definitions of OpEx conflict. Use the report card definition (fixed costs) when reading the buckets. Use the rapid-growth definition when planning vendor contracts and scaling costs. The sources do not reconcile them further. [L1235, 2025-26; L0041, 2025-26]
- Traffic is the largest P&L expense in ecommerce, followed by people costs. Automation tools reduce the people category by removing repetitive tasks. [L0286, 2018]

**Benchmarks**

| Category | Benchmark | Reading | Source |
|---|---|---|---|
| Profit | 15% | At or above 15% is good | [L1235, 2025-26] |
| COGS | 40% | At or below 40% is good; above 40% needs work | [L1235, 2025-26] |
| Marketing and advertising | 30% | At or below 30% is good | [L1235, 2025-26] |
| OPEX | 15% | Below 15% is good | [L1235, 2025-26] |

**Colour and reading**

- Each bucket is colour-coded against its benchmark. A healthy result shows green and an unhealthy result shows red. A red category is where to look first. [L1235, 2025-26]
- A bucket below its benchmark frees room. The surplus can go to marketing, OPEX or profit. Example: COGS 7% below benchmark means 7 points of revenue that can fund more ads or more profit. [L1235, 2025-26]
- A bucket above benchmark can be offset by the others. Example: COGS about 3 points over 40% while profit is at double its benchmark. The business is still healthy, but the gap should be recovered in marketing or OPEX, and COGS should still be reduced. [L1235, 2025-26]
- Do not cut costs just because one bucket is red. First check whether another bucket, such as profit, is strong enough to compensate, then decide where the fix is needed. [L1235, 2025-26]

**Decision tree**

1. Look at the four buckets and identify which ones are red. [L1235, 2025-26]
2. If OPEX is red, break OPEX down into its fixed cost lines and find the largest one. [L1235, 2025-26]
3. If COGS is red, break COGS down into shipping, payment processing fees and 3PL fees. [L1235, 2025-26]
4. Identify the most expensive component in that breakdown. [L1235, 2025-26]
5. Continue drilling down, since each sub-cost has its own benchmark, until the root cause is clear. [L1235, 2025-26]
6. Once the bucket problem is clear, move on to the growth metrics (MER, contribution margin, ads launched, conversion rate, emails, promo events) to find the next fix. [L1235, 2025-26]

### New customer contribution margin calculator

**Build procedure**

Build the calculator from the last 90 days of data, in this order:

1. Start with the new customer AOV (last 90 days, new customers only, tax-inclusive, as shown in Facebook). [L0433, 2025-26]
2. Subtract sales tax (GST around 10% if collected; higher if the tax is collected at a higher rate) to get the post-tax AOV. [L0433, 2025-26]
3. Subtract blended COGS: average product cost across SKUs, packaging and supplies (box, tape, inserts), and freight to the customer. [L0433, 2025-26]
4. Subtract payment processing fees (about 2.9% of order value, adjusted for heavy Klarna or PayPal use), plus the fixed transaction fee of $0.30 per order (set to 0 if the card fee is a fixed monthly cost). [L0433, 2025-26]
5. Subtract Shopify Markets fees, weighted by the share of revenue from Markets orders, not the full rate. [L0433, 2025-26]
6. Subtract 3PL pick/pack fees (about $1.50 to $2.50 per pick; 0 if no 3PL). [L0433, 2025-26]
7. Subtract refunds, using the new customer return rate. [L0433, 2025-26]
8. The result is gross profit per order, which is the basis for all later targets. [L0433, 2025-26]

**Key metrics and benchmarks**

- Gross profit per order (after COGS, fulfillment, fees and refunds) should be at least 60% of AOV. Blended COGS including returns should stay at 40% or below. If shipping alone pushes gross profit under 60%, reduce shipping costs by changing 3PL or renegotiating carrier rates. [L0433, 2025-26]
- Customer acquisition cost (CAC) = total ad spend ÷ number of new customers in the period. CAC as a share of new customer AOV should be 30% or below. Example: $400,000 total spend ÷ 6,829 new customers = $58.57 CAC, which is 25.73% of a $227.65 post-tax AOV. [L0433, 2025-26]
- First order contribution margin = AOV (post-tax) − blended COGS (including refunds) − customer acquisition cost (ad spend). It is the profit left before fixed operating expenses (OPEX). Benchmark for a first order: 15% to 25% of AOV. Higher targets suit businesses without repeat buyers. Brands with strong repeat customers can accept a lower first-order margin. [L0433, 2025-26]
- The report card's growth table sets contribution margin at 35%. This is a different measure from the 15% to 25% first-order benchmark, and the sources do not reconcile them. Use 35% for the whole-business view in the report card. Use 15% to 25% for a first order of new customers. [L1235, 2025-26; L0433, 2025-26]

**Worked case**

- Post-tax AOV $227.65, gross profit per order $130.27, CAC $58.57 (Facebook $300,000 plus Google $100,000 spend). First-order contribution margin: 31.63% or $71.69, above the 15% to 25% benchmark. If COGS were set to 80% of the order, the contribution margin turns negative, so COGS is the variable to fix first. [L0433, 2025-26]

**Diagnosis and scope**

- When a metric misses its benchmark, check the line item one step below or above target and fix that first. Example: if CAC is within 30% but COGS is 80%, the problem is product cost, not ad spend. Diagnose the calculator before touching ad accounts. [L0433, 2025-26]
- Build the calculator for the whole business first, then split it by collection, product, drop or month when more detail is needed. Operators should be at or above benchmark before scaling spend, because unprofitable unit economics become harder to fix as volume grows. [L0433, 2025-26]
- If the business sells in several countries, build a separate contribution margin calculator for each region. Taxes, payment fees, shipping and Markets fees differ by market. Build the whole-business version first, then split by region when needed. [L0433, 2025-26]

### Growth benchmarks and MER

**MER**

- MER = total ad spend ÷ total revenue, expressed as a percentage. Target is 30% or below. Example: 400,000 USD ad spend ÷ 1,835,273 USD total revenue = 21.80%, which is 8 points below target and shows green. [L1235, 2025-26]
- The marketing bucket benchmark (30%) and the MER target (30%) use the same logic: ad spend against revenue. [L1235, 2025-26]
- Example: at a 35% MER, a brand spends 35% of revenue on marketing. If 80% of orders then carry a gross margin of only 31% under a BOGO offer, the brand loses money. Adjust the MER target before running the offer, or skip the offer if the margin is too tight. [L1404, 2025-26]

**ROAS**

- Blended ROAS = total revenue ÷ total ad spend, including all traffic sources (organic, referral, paid), not isolated per-channel data. [L0208, 2024+]
- When multi-channel attribution is fragmented, use total monthly revenue ÷ total ad spend. This ratio shows overall ad efficiency regardless of which platform gets last-click credit. [L0257, 2020-26]
- Breakeven ROAS sources differ:
  - A breakeven ROAS of 1.6 or lower leaves enough margin for ad spend, apps, staff and processing fees. At scale, Facebook and TikTok campaigns typically reach a ROAS of 2 to 2.5, and very strong campaigns may go higher. [L0445, undated]
  - Typical benchmarks are a breakeven ROAS of about 1.2 to 1.3 and an average Facebook ROAS of about 1.8 to 1.9 for a store with healthy margins. These figures are for one store and must be checked against your own margin. [L0693, 2024]
- Use 1.6 as a breakeven guide when the cost stack includes apps and staff. Use 1.2 to 1.3 only after checking that the store's margin supports it. [L0445, undated; L0693, 2024]
- Ad spend for one established brand was about 30,000 to 50,000 USD per month, depending on the day and whether the account is scaling. [L1431, 2020+]

**Growth table**

| Metric | Target | Reading | Source |
|---|---|---|---|
| MER | 30% or below of total revenue | Above 30% needs investigation | [L1235, 2025-26] |
| Contribution margin | 35% | Below 35%: check whether COGS or marketing is the cause | [L1235, 2025-26] |
| Monthly number of ads launched | More than 20 for beginners | Below 20 means too few tests | [L1235, 2025-26] |
| Website conversion rate | Above 2.5% | Below 2.5% needs work on the site | [L1235, 2025-26] |
| OPEX | Below 15% | Above 15% needs cost review | [L1235, 2025-26] |
| Marketing promo events per year | At least 3 | Fewer than 3 needs more sales peaks | [L1235, 2025-26] |
| Emails sent per week | About 3, minimum 1 to 3 | Below 1 per week is too low | [L1235, 2025-26] |

**Ads launched**

- Expected monthly ads launched = monthly ad spend ÷ 500 to 1,000 USD. The range reflects the average spend per ad in most accounts, so use it as a rough estimate. [L1235, 2025-26]
- Worked example: a store spending 20,000 USD a month on ads, divided by 500 to 1,000 USD per ad, has an expected 20 to 40 ads launched per month. At the lower end, the store is only just at the beginner minimum of more than 20 ads per month. [L1235, 2025-26]

**Whole-report example**

- Total revenue 1,835,273 USD, ad spend 400,000 USD. MER 21.80%, below the 30% target and green. OPEX 4.12%, well below 15%. COGS about 3 points above the 40% benchmark, and profit roughly double its benchmark, so the surplus covered the COGS gap. Contribution margin 35%, on target. The priority is to bring COGS down further to raise profit. [L1235, 2025-26]

### Customer value: new versus returning, AOV and LTV

**Measuring each customer group**

- Track repeat-customer order value separately from first-order value. Repeat customers typically have an AOV about 20 to 30% higher than first-time buyers, according to the estimate given. [L1251, 2024+]
- Measure customer value per buyer by tracking each customer's order count and cumulative spend over time (1st, 2nd, 3rd order and so on). AOV alone hides whether customers return, which matters most for repeat-purchase consumables. [L0334, 2017]
- Use the per-customer view to find where customers stop buying, and fix that step. [L0334, 2017]
- Example from a supplement brand: AOV about $70, the most expensive product $49, and one loyal customer spent $7,436 over 3 years. Repeat purchases matter for consumable, high-margin products. [L0334, 2017]
- Measure success on orders and revenue together, not revenue alone. A single high-value customer does not show consistency. Look for repeating daily patterns (e.g. 20-30 orders daily). [L0324, 2025+]
- Keep profit margins stable week to week alongside revenue. Scaling without margin stability indicates unsustainable growth. [L0324, 2025+]
- Track refund rate and chargeback rate as percentages of orders, not only as raw counts. A rising percentage is the early warning, because each extra order is more likely to become a refund or chargeback, and the damage grows faster than sales. [L0632, 2021-22]

**Lifetime value**

- LTV per year = units bought per year × price per unit. Example: 17 units × $8 = $136 per year. [L0524, 2023]
- LTV is driven by three levers: AOV, churn and how often customers come back. Improving only one usually leaves the others unchanged, so track them together. [L1232, 2025-26]
- LTV is the most powerful lever in paid traffic because it improves the other metrics. The strongest advertisers combine high CTR, high Quality Score, high Relevance Score and cheaper CPCs. [L1031, 2018]
- Know profit per customer and LTV, because these decide how much you can spend on acquisition. A customer who buys repeatedly can justify a first purchase that loses money. [L0643, 2015]
- Your AOV and LTV set the maximum you can spend to acquire a customer. Raising either lets you spend more on traffic and grow faster than competitors. [L0378, 2019+]
- Judge loyalty rewards over the customer's lifetime, not on one order. A customer who earns points by referring new buyers can be profitable even when the repeat order has a thin margin, because each referred first order brings full-price revenue. [L0956, 2021]
- Cost per acquisition for cold customers can stay high for established brands and remain sustainable, as long as returning-customer value is strong. Judge acquisition costs against the lifetime value of repeat buyers, not only the first order. [L1251, 2024+]
- In the early bootstrapped phase, the brand needed a 3x to 5x return on each marketing dollar to stay solvent. A 25% returning-customer rate showed that LTV exceeded AOV. [L0790, 2017]

**Returning-customer rates by niche**

- Subscription model: 61% returning customers. Traditional dropshipping: 2-8%. Subscriptions are 7-30x more effective at retention. [L0324, 2025+]
- Health-related niches are often around 10% to 15% returning, compared with 50% to 60% in fashion. New-customer acquisition therefore matters more in health. [L0871, 2021+]

**Margins and store economics**

- Dropshipping gross margin has an absolute minimum of about 20%. Below that, the business is very hard to run profitably. A gross margin near 14% is a serious warning sign. [L1046, 2021-22]
- A typical full-year net profit margin after all costs is 15 to 20%. Stores that do not actively work on margins rarely exceed about 20%, so a net margin of about 9% signals a profitability problem. [L1046, 2021-22]
- Net profit margins in the examples ranged from 14 to 22%. In high-ticket dropshipping, margins can reach the 20s and up to 30%. A 14% margin is still meaningful at high sales volume. [L0771, 2021-22]
- Gazebo store, about 3 years old (June example year): 402 orders produced 738,209.32 USD in sales (806,805.49 USD gross minus 68,596.17 USD returns) and 103,201.65 USD net profit at a 14% margin. The business needed one to two hours per day of management. [L0771, 2021-22]
- A store doing $15,000 to $20,000 monthly revenue with a few thousand dollars of net profit can be a working outcome. Compare with stores doing hundreds of thousands in monthly revenue and tens of thousands in net profit to see the range. [L0803, 2022]


Part 40 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/39-personal-investing-and-wealth-building.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/41-year-on-year-seasonality-and-saturation.md
