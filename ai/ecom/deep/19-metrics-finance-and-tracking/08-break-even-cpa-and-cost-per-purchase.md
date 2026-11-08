<!-- part of ecom/deep/19-metrics-finance-and-tracking.md -->
Part 8 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/07-profitable-traffic-calculators.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/09-traffic-conversion-and-funnel-math-for-planning.md

### Break-even CPA and cost per purchase

- Break-even CPA = selling price − product cost − other per-order costs. Example: $10 product cost and a selling price of at least $30 gives a margin of about $20, so break-even CPA was about $20 to $21 [L1124, 2026].
- Break-even CPA = selling price − (product cost + shipping cost). Example: $30 price with $10 cost gives $20. $40 price with $10 product cost gives $30 [L1436, undated].
- Break-even cost per purchase (the most you can spend to acquire one customer) = selling price − product cost − shipping cost. Example: $30 price, $10 product plus shipping gives $20. A $40 price with a $10 product cost gave $30 before shipping [L1382, undated].
- Target cost per purchase = the maximum you can spend on ads to acquire one sale and still profit. Example: $150 price, $35 COGS gives $115 (price − COGS − other per-unit costs as the sheet defines them). Any cost per purchase above it is unprofitable [L1354, 2025-26].
- Cost per purchase = listing price − COGS. Set the cost-per-purchase and ROAS targets inside the ad account from your actual margin [L1225, 2025].
- Target CPA in the Ecom Margin Calculator = dollar margin per order (listing price − total cost). Cost per purchase in the ad account must stay below it to be profitable. Example: $200 listing, $60 total cost gives a target CPA of $140 [L0987, 2025-26].
- Profitable target CPA: $70 or less when the listing price is $100 and total cost is $30 [L0987, 2025-26].
- Break-even CPA check for a product: compare CPA with profit margin per sale. With a $30 margin, target a CPA of roughly $16 to $20 at most. For VAT-adjusted markets, include the extra VAT (for example 20%) in the break-even calculation before running ads to that market [L0950, 2023].
- Calculate break-even CPA before judging whether an ad set is working [L0950, 2023].
- Plan customer acquisition costs of roughly $15 to $20 per customer on paid platforms, with some estimates as low as $10. Product margin must be high enough to cover these costs [L1174, undated].

### Target ROAS and target CPA

- Set the target ROAS above break-even with a small buffer for unexpected costs. Example: break-even 1.3, target 1.4. The ROAS should never be below break-even [L1215, 2023+].
- Benchmark (profitable) ROAS = break-even ROAS adjusted for profit margin. Example: break-even 1.5 with 20% profit margin gives a benchmark of 1.8 [L1335, 2023+].
- Target ROAS at a given margin is calculated the same way as break-even, with profit set to that margin [L1182, 2026].
- Target ROAS for profitability in the ad account is 1.43 or higher when the product has a 70% gross margin [L0987, 2025-26].
- Target CPA = margin $ ÷ target ROAS. Use it as the maximum CPA for the chosen target ROAS. For a 2+ target, CPA must stay at or below margin ÷ 2. For a 2.5+ target, divide by 2.5 instead [L0986, 2026].

| Offer | Margin $ | Target 2+ ROAS | Target 2.5+ ROAS | Source |
|---|---|---|---|---|
| Buy 1 | 32.50 | 16.25 | 13.00 | [L0986, 2026] |
| Buy 2 get 1 free | 60.30 | 30.15 | 24.12 | [L0986, 2026] |

- Set a specific ROAS goal when choosing products. Choose only products whose break-even ROAS leaves enough room to reach that target [L1217, 2023+].
- When comparing candidates, prefer the lower break-even ROAS. Example: 1.3 over 2.0 [L1174, undated].
- Break-even ROAS should stay around 1.6 to 1.7 at most, which is the maximum that still makes money [L1171, 2024+].
- Break-even ROAS should be below about 1.5 to 1.6 so that a campaign reaching 2 to 2.5 ROAS leaves room for real profit. A product with a high break-even is risky even when ads look good [L1217, 2023+].
- Example: break-even ROAS 1.9 with campaign ROAS 2 gives profit of only about 3 to 5%. The margin is too thin to scale safely [L1217, 2023+].
- Minimum ROAS target for a product is 2.5x. Do not run products below this level [L1171, 2024+].
- Target a break-even ROAS between 1.3 and 1.6 for a product [L1174, undated].
- Profit per order decides how much spend is possible [L0999, 2023].
- Scaling a product with about $23 margin on a $49 sale requires a CPA of $15 to $20 and leaves little room. Increase average order value or margin before aggressive scaling [L0999, 2023].
- A product with a $15 cost on a $45 sale allowed a CPA of about $15. A margin of about $30 was described as strong, but still faced scaling challenges [L0999, 2023].
- The ROAS of 2.0 used in one example was the minimum acceptable return for a 10% profit margin and the threshold for the trim-the-fat rule. Calculate your own ROAS floor before setting that rule [L0977, undated].
- A ROAS of 2.2 (quoted elsewhere as 4.4x) can be profitable. Whether it is depends on break-even, so always compare [L0950, 2023].
- With an aggressive budget, a ROAS near 3:1 is not enough to scale unless break-even is close [L0995, 2023].
- Daily results can be inconsistent. One losing day in a week of mostly profitable days is normal. Keep break-even as low as possible and raise average order value so each order carries more margin [L1127, 2024].

### The 10% rule and maximum acquisition cost

Sources give different bases for the maximum you may pay to acquire a sale. Use the base that matches your data:

| Rule | Formula | Example | Source | Applies when |
|---|---|---|---|---|
| 10% of sale price | Max CPA ≈ 10% of price | $2,000 item: spend up to $200 | [L1109, 2018] | Quick screen per product |
| Price ÷ 10 at a 10:1 ROAS on Google | Max acquisition cost = price ÷ 10 | $800 → $80; $1,500 → $150 | [L0960, 2019] | Google target of 10x |
| 10% of price per sale | Up to about 10% of price for one sale | $800 → about $80 | [L0965, 2024] | One sale per block of spend |
| 10% of gross profit after COGS | Max ad spend per sale = 10% of gross profit after COGS | $1,000 sale → up to $100 | [L1274, 2018] | When COGS is known |
| Margin ÷ target ROAS | Max CPA = margin $ ÷ target ROAS | Margin $32.50 at 2+ ROAS → $16.25 | [L0986, 2026] | When margin and target ROAS are set |

- Sources give different bases for the cap. The price-based rules are a first screen when costs are not yet known. Use the margin-based rules once COGS, shipping and fees are known [L1109, 2018; L0960, 2019; L0965, 2024; L1274, 2018; L0986, 2026].
- Work backward from the budget per sale to set bids and targets [L1109, 2018].
- Ad budget per sale is what remains after costs: sale price − COGS − shipping − processing fees − team costs − target net profit [L1109, 2018].
- Budgets depend on each product's average click cost and conversion rate, not on price alone. Calculate budgets per product [L0960, 2019].
- Some products above $1,000 have been acquired for under $50 per customer, so high-priced products can still be profitable [L0960, 2019].

### Margin left for ads and ad budget per product

- Margin left for ads = MAP − wholesale cost − shipping cost − 2.9% merchant fee − other expenses. Wholesale cost can be estimated as MAP ÷ 2 for a ballpark figure [L0961, 2020].
- Example: MAP 1,000 USD, estimated wholesale 500 USD, shipping 100 USD. About 400 USD remains for ads, the 2.9% merchant fee and other expenses [L0961, 2020].
- Set the ad budget per product from the margin left after wholesale and shipping are subtracted from MAP, not from revenue. Calculate that amount before choosing a daily or per-order ad spend [L0934, 2023].
- Derive a target CPA from margins:
  1. Write down the selling price of the product.
  2. Subtract supplier cost and other costs per sale.
  3. Decide your profit target. The remaining amount is what you can pay Google per sale, which is your target CPA.
  4. Repeat for each product, since margins differ [L1328, 2015].
- Use break-even math for each product. A higher margin lets you outbid competitors on paid clicks [L1153, 2016].
- On Amazon, a $1.50 bid per click is affordable when the product earns about $9 profit before ads and the competitor's conversion is lower [L1153, 2016].

### Revenue per click and max CPC

- Profitability per click: revenue per click must exceed cost per click. The more revenue per click relative to cost, the better. Example: $6 revenue per click at $1 CPC is a 6x ratio, the target to aim for [L1328, 2015].
- Reducing cost per click by 30% has a very large effect on return on ad spend. Lower click costs are one of the strongest levers for profitable paid traffic [L1226, 2020-26].
- Derive the maximum CPC from the target CPA and the conversion rate (see [L1328, 2015] for the CPA = CPC ÷ conversion rate relation and [L1328, 2015] for the target CPA procedure).

### Calculators, models and the ROAS chart

Procedure: build a ROAS chart in Excel [L1203, 2016]:
1. Enter how much was spent on paid traffic in a period (example: $1,000).
2. Enter the revenue that spend generated (example: $10,000, a 10x multiple).
3. Plot in the COGS for that revenue, i.e. what it costs to sell $10,000 worth of goods.
4. Calculate the final profit after COGS and ad spend.
5. Plug in other scenarios and find the switch point where ROAS moves from negative to positive profit.
6. Use the resulting minimum ROAS to judge every campaign.

- In the example cost structure, break-even ROAS was 2x. Above 2x the campaign makes money; below 2x it loses money. Calculate break-even from your own store's COGS, because COGS differs per store [L1203, 2016].
- Break-even tools: dropshipping ROAS calculator (BE ROAS per product) [L1159, 2023+]; calculator linked from the testing sheet [L1162, undated]; dropshiptoolkit.com calculator [L1217, 2023+]; Ecom Margin Calculator target CPA [L0987, 2025-26].
- Paid traffic model: spend, conversions, revenue and ROAS [L1455, 2018+].
- one source benchmark ROAS: break-even adjusted for margin [L1335, 2023+].

### Measuring what pays: cost per reply, cost per customer, cost per dollar of sale

- Cost per reply = ad spend ÷ replies. Cost per customer = ad spend ÷ customers acquired. Cost per dollar of sale = ad spend ÷ sales revenue, the most useful measure for deciding whether an ad pays [L1261, undated].
- Example: two ads for a $5 product cost $0.85 and $14.20 per reply. At 250,000 replies a year, the first costs about $212,500 and the second $3,550,000. Cutting cost per reply directly protects profit [L1261, undated].
- An ad producing replies at an average of $0.41 for two years is the benchmark that new ads must beat [L1261, undated].
- Final conclusions about an ad should rest on cost per customer or cost per dollar of sale, not on the number of responses. An ad can bring many worthless replies, while another brings fewer valuable ones [L1261, undated].
- Use sample requests and coupon counts to measure interest, but judge each lead's final value by cost per customer. Cheap inquiries that never convert are not savings [L1261, undated].
- Direct mail: calculate the response rate needed to break even before the mailing goes out. A mailing needing about 0.5% response failed entirely at one-tenth of that rate, so the number must be known in advance [L1366, undated] (merged: true duplicates).
- Cost per order = cost per mailed piece ÷ response rate. Example: a $0.04 piece with a 4.5% response gives about $0.89 per order [L1369, undated].

### Platform bidding steps

- Example cost-per-purchase targets for TikTok manual bidding ad groups: $12, $11.50, $11, $10.50 and $10, starting from an average cost per purchase of $12 [L1376, undated].

### ROAS benchmarks by model and source

The figures below come from different margin structures and eras. Apply each only within the model it describes. Calculate your own floor first [L0977, undated; L1203, 2016].

| Source | Year | Benchmark | Source ids |
|---|---|---|---|
| one source | 2019 | Minimum target 10x for paid campaigns. Well-optimized campaigns reach about 40x, so 10x is a floor, not a ceiling | [L1110, 2019] |
| one source | 2019 | Google: target 10x return; revenue at least 10x ad spend | [L0960, 2019] |
| one source | 2022 | Minimum blended ROAS of 10x across all campaigns; below is a real concern | [L0969, 2022] |
| one source | 2022 | 5 to 8x is a strong starting point for a healthy campaign; a drop to 1.5x after scaling is a warning sign | [L0963, 2022] |
| one source | 2023 | Target at least 10x. A stable 20x is a good target when the store is profitable | [L0970, 2023; L1283, 2023] |
| one source | 2025 | 15x ROAS example on a $30 daily budget | [L0972, 2025] |
| one source | 2024 | Spend up to about 10% of price per sale; judge over several blocks of spend | [L0965, 2024] |
| one source | n/a | Break-even about 1.7 acceptable, about 3 great | [L1107, 2023] |
| one source | n/a | Minimum target 2.5x; do not run below | [L1171, 2024+] |
| one source | n/a | Meta ads expected to reach 2 to 2.5, up to 3 for well-scaled campaigns | [L1174, undated] |
| one source | n/a | Facebook and TikTok ads reach about 2 to 2.5 with consistent sales during scaling | [L1217, 2023+] |
| one source | n/a | One brand targets at least 4x; spending continues while that holds | [L1508, 2022+] |
| one source | 2026 | Example targets 2+ and 2.5+ | [L0986, 2026] |
| one source | 2025-26 | 1.43 or higher at 70% gross margin; Meta break-even 1.30 in the example | [L0987, 2025-26; L1354, 2025-26] |
| one source | n/a | Near-zero-cost digital products: break-even about 1.02 to 1.05, 1.3 a profitable target | [L1431, 2020+] |

- Break-even ROAS sits at 1.6 to 1.7 at most, but a target of 2.5x minimum applies to the one source product rule [L1171, 2024+].

### Where sources disagree

- Break-even ROAS for the $6 product at $20: 1.43 from the formula [L0995, 2023] versus 1.5 in the lesson text [L0995, 2023]. Use 1.43 when calculating from the formula.
- Break-even ROAS of 1.5 in the example [L1135, undated] versus 1.2 as "very good" [L1174, undated] and 2 in another example [L1217, 2023+]. Each depends on its cost base (see the formula table above).
- Break-even ROAS upper limits: at most about 1.6 to 1.7 [L1171, 2024+], target 1.3 to 1.6 [L1174, undated], below about 1.5 to 1.6 [L1217, 2023+]. Treat 1.5 as the practical ceiling for scaling. Each unit is from a different example.
- Maximum acquisition cost: 10% of sale price [L1109, 2018], 10% of gross profit after COGS [L1274, 2018], and margin ÷ target ROAS [L0986, 2026]. Apply the margin-based rule once costs are known.
- Target ROAS: 10x across all campaigns [L0969, 2022] and at least 10x [L0970, 2023] versus 2.5x minimum [L1171, 2024+] and 2 to 2.5 Meta [L1174, undated]. These come from different margin structures. Apply each to its own model.
- ROAS of 2.2 [L0950, 2023] versus 4.4x in the same statement, as quoted [L0950, 2023]. Both forms refer to the same ratio and must be compared with break-even.
- Cost per acquisition for Meta: $15 to $20 [L1174, undated] versus as low as $10 in some estimates [L1174, undated].

### KPI baseline sheets and checks

- Set KPI benchmarks from your own history, such as last year or the previous month. Check whether current add-to-cart and other numbers are above or below that benchmark, to judge whether a campaign is improving or declining [L1508, 2022+].
- Stable ROAS of 20x is a good target when the store is profitable. Big budget changes can destroy profitability [L1283, 2023] (2023).
- Before a mailing, calculate the break-even response rate and check whether a test can measure it [L1366, undated].
- Baseline conversion rate in the sample sheet: 0.01666666667 (about 1.67%), equal to 1 ÷ 60 (the AOV used in the example). The sheet presents it as an estimate. Replace it with measured data when available [L0900, undated].
- The CPC GOAL cell in the sheet shows 0.6208 USD. It does not match the hand calculation of about 0.75 USD from the product example. Check which inputs feed the cell before using it as a bid target. The two methods use different inputs and should be reconciled [L0900, undated].
- The hand calculation rounds 25 ÷ 33 down to 0.75 USD. The exact result is 0.76 USD, so the rounded figure understates the allowed CPC [L0900, undated].
- Keep a daily record of break-even, target ROAS and CPA per product, and compare each campaign with them [L1024, undated; L0986, 2026].

### Break-even sales and targets for a first campaign

- one source's break-even example: $100 revenue ÷ $25 net profit per order = 4. Every $1 of ad spend needs $4 in sales to break even, so $25 of spend needs $100 in sales [L0920, 2018; L1357, 2018] (merged: true duplicates).
- Give this break-even ROAS to your paid advertising agency as the target. Any campaign running below it is losing money at that margin [L0920, 2018].
- The same break-even comparison applies to every campaign and offer. Compare ROAS with break-even before deciding to keep or cut [L1024, undated].

#### Further details

- To calculate break-even ROAS: 1. Determine revenue target (e.g., $1,000). 2. Calculate COGS in dollars (e.g., $400) and percentage (e.g., 40%). 3. Calculate profit before ads = Revenue - COGS (e.g., $1,000 - $400 = $600) and as percentage (e.g., 60%). 4. Calculate break-even ROAS = Revenue ÷ Profit (e.g., $1,000 ÷ $600 = 1.67x). 5. ROAS above this number is profitable; below is a loss. [L0327, 2020-26]

- Calculating and using the target cost per sale: 1) Calculate the target cost per sale using the traffic calculator. 2) Write down the resulting numbers. 3) Compare these targets with the actual figures in the financial tracking system. 4) Check profit on a day-to-day basis against the targets. [L0441, 2021-22]


Part 8 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/07-profitable-traffic-calculators.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/09-traffic-conversion-and-funnel-math-for-planning.md
