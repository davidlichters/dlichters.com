<!-- part of ecom/deep/19-metrics-finance-and-tracking.md -->
Part 33 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/32-profit-tracking-systems-per-order-sheets-daily-p-l.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/34-profit-apps.md

### Daily P&L and funnel trackers

#### one source daily P&L tracker

- The tracker is a Google Sheets file with a Daily P&L Tracker tab. Open the shared link, use File > Make a copy, and enter all data only in your own copy. [L1123, 2026]
- Sheet layout, in order: [L1123, 2026]

| Block | Columns in order | Input or auto |
|---|---|---|
| Header | one source ELITE title; Daily P&L Tracker tab; Breakeven ROAS (editable); Shopify Fee % (0.055 preset) | Breakeven ROAS input; fee preset |
| Facebook Ads (daily) | Day, Spend, CPC, CTR, CPM, ATC, IC, Purchases, ROAS | Spend, CPC, CTR, CPM, ATC, IC, Purchases input; ROAS auto |
| Shopify Daily Profit (daily) | Day, Revenue, - COGS, - Ad Spend, - Fees, PROFIT, Net Margin %, ATC, IC, Purchases | Revenue, COGS, Ad Spend, ATC, IC, Purchases input; PROFIT and Net Margin % auto; Fees per fee note |
| Cost Metrics (daily) | Cost/ATC, Cost/IC, Cost/Purchase | auto |
| LAST 3 DAYS | Spend, Revenue, Profit, ROAS, Net Margin | auto |
| TOTAL row (above the daily rows) | Spend, Revenue, COGS, Ad Spend, Fees, Profit across all 30 days; cost metrics show totals or dashes | auto |
| AVG row | Averages of Cost/ATC, Cost/IC, Cost/Purchase | auto |

- Daily rows run from 1.0 to 30.0, one row per day. [L1123, 2026]
- The daily grid holds 30 rows, one per day, so the sheet covers a 30-day tracking period. [L1123, 2026]
- The TOTAL row sums spend, revenue, COGS, ad spend, fees and profit over all 30 day rows. The AVG row averages the cost metrics. The LAST 3 DAYS block summarizes spend, revenue, profit, ROAS and net margin for the most recent three days. [L1123, 2026]
- Daily entry routine:
  1. Make a copy of the shared template (File > Make a copy) and work only in your copy. [L1123, 2026]
  2. Set the Breakeven ROAS cell to your break-in RAS target. [L1123, 2026]
  3. Find the row for the current day (1.0 to 30.0). [L1123, 2026]
  4. In the Facebook Ads block, enter Spend, CPC, CTR, CPM, ATC, IC and Purchases. [L1123, 2026]
  5. In the Shopify Daily Profit block, enter Revenue, COGS and Ad Spend. [L1123, 2026]
  6. In the Shopify Daily Profit block, enter ATC, IC and Purchases. [L1123, 2026]
  7. Read the auto-calculated ROAS, PROFIT, Net Margin % and the three cost metrics. [L1123, 2026]
  8. Check the cell color: green means above target, red means negative, zero means breakeven. [L1123, 2026]
  9. Review the LAST 3 DAYS block for the short-term trend and the TOTAL row for the full period. [L1123, 2026]
  10. Do not touch any dark purple cell. [L1123, 2026]

#### Break-in ROAS and status

- Break-in RAS is the minimum daily return target. A day only counts as profitable when its ROAS is above that number. The example target is 1.3, so each ad dollar must bring back more than $1.30 in revenue. [L1123, 2026]
- Enter your break-in RAS in the Breakeven ROAS cell at the top of the Daily P&L Tracker tab. It is an editable parameter, so replace the example value 1.3 with your own target. [L1123, 2026]
- A day with ad spend but no revenue shows red, because a ROAS of zero is below the break-in target. [L1123, 2026]
- Cell colors signal status: green means the day is above the target and winning, red means the day is negative and losing, and zero means exact breakeven. [L1123, 2026]
- The tracker labels each day with one of three statuses: LOSING (red, negative profit), BREAKEVEN (zero, exact break-even) and WINNING (green, above target). Read the color together with the PROFIT value to see the status. [L1123, 2026]
- Judge each day by profit and net margin, not by ROAS alone. A ROAS of 3.0 can still leave a thin margin once COGS and fees are deducted. [L1123, 2026]

#### Cell categories and formulas

- The tracker uses three cell categories: input cells that you fill in each day, AUTO-CALC cells (dark purple) that must not be typed into, and PROFIT/MARGIN cells that are calculated automatically and marked separately. Only the input cells change when you enter daily data. [L1123, 2026]
- Dark purple cells are auto-calculated. Never type into them. Fill only the input cells, because overwriting formulas corrupts the calculations. [L1123, 2026]
- Some auto-calculated cells pass a value through with an IF formula of this form, so they stay blank until the source input is filled:

```
=IF(source="","",source)
```

  Do not overwrite these cells, because replacing the formula breaks the link to the input. [L1123, 2026]
- ROAS (RAS) = Revenue ÷ Ad Spend. Example: revenue $300 with ad spend $100 gives a ROAS of 3.0. [L1123, 2026]
- PROFIT = Revenue − COGS − Ad Spend − Fees. [L1123, 2026]
- Net Margin % = PROFIT ÷ Revenue. Example: profit $140 on revenue $300 gives a net margin of 46.67%. [L1123, 2026]
- Cost per metric = Ad Spend ÷ count of the event. Cost/ATC = Spend ÷ ATC, Cost/IC = Spend ÷ IC, Cost/Purchase = Spend ÷ Purchases. Example with spend $100, 14 ATC, 10 IC and 6 purchases: $7.14, $10.00 and $16.67. [L1123, 2026]
- Worked day-1 example: spend $100, CPC $1.00, CTR 3%, CPM $60, 14 ATC, 10 IC, 6 purchases, revenue $300, COGS $60, ad spend $100. Results: ROAS 3.0 (green, above the 1.3 target), profit $140, net margin 46.67%, cost per ATC $7.14, cost per IC $10.00, cost per purchase $16.67. [L1123, 2026]
- Cost per ATC, IC and purchase show where money is lost in the funnel. Compare them day over day: a cost per IC that rises while cost per ATC stays flat points to the checkout step rather than the ad. [L1123, 2026]

#### Fee-aware daily sheet and the 30-day grid

- Daily P&L tracker in Google Sheets, columns and inputs: [L1030, 2026]

| Field | Use |
|---|---|
| Day | Daily row |
| CPC, CTR, CPM, ATC | Facebook ad metrics from Ads Manager |
| Cost/ATC, Cost/IC, Cost/Purchase | Cost per add to cart, checkout initiated and purchase |
| COGS | Cost of goods sold |
| Ad Spend | Daily ad cost |
| Fees | Payment and platform fees |
| Net Margin | Profit after all costs |
| ROAS | Return on ad spend |
| Breakeven ROAS | Input, the ROAS needed to cover costs |
| Shopify Fee % | Input, set to 5.50% |

- Input cells are filled in by hand, auto-calculated cells update themselves, and colour signals mark rows as WINNING or LOSING. [L1030, 2026]
- To add up profit over the last three days with data, use this formula in the tracker. The formula was partly legible on screen, so check the column letters against your own sheet before relying on it. [L1030, 2026]

```
=IFERROR(SUMPRODUCT((ROW(L9:L38)>=MAX(IF(L9:L38<>"",ROW(L9:L38)))-2)*(L9:L38<>"")*(P9:P38)),"")
```

- A single red day can wipe out several days of accumulated profit. Judge a product on whether its daily profit holds above the threshold across consecutive days, not on the running total. Keeping a weak product also ties up budget that could test another product in the same niche. [L1030, 2026]
- one source 2026, daily ad-and-profit sheet, one row per day: [L0560, 2026]

| Column group | Columns |
|---|---|
| Facebook Ads | Spend, CPC, CTR, CPM, ATC (add to cart) |
| Shopify daily profit | Purchases, ROAS, Revenue after discount, COGS, Ad spend, Fees, Profit, Net margin |
| Summary and signals | Breakeven figure at the top, Color signals, WINNING tab, TOTAL tab |

- Colors flag days that are above or below the breakeven, and the net margin column shows profit as a percentage of revenue. [L0560, 2026]
- Estimated profit for recent days still in the sheet = revenue after discount × 0.9 × 0.25, which equals 22.5 percent of revenue. The cell label reads "As of X days based on revenue, less 10%, less 25%". Check example: 28,199.17 × 0.9 × 0.25 = 6,344.81. [L0560, 2026]

#### one source funnel tracker

- A daily D2C funnel tracker spreadsheet with three sections (unit economics, Meta ads, website) serves two purposes: finding the bottleneck in the whole e-commerce funnel, and acting as a scaling guide. It is filled in every day with the key funnel metrics, with a tab per month and per day so performance is visible over time. [L1354, 2025-26]
- To calculate unit economics and target metrics: 1) Enter the store listing price per unit, including shipping cost if applicable. 2) Enter the total cost of goods per unit. The sheet then calculates the product margin and the target metrics automatically. [L1354, 2025-26]
- Website section of the daily tracker, columns in order: [L1354, 2025-26]

| Column | Meaning |
|---|---|
| Add to carts (ATC) | Count of add-to-cart events |
| Purchases | Count of orders |
| Conversion rate (CVR) | Purchases as a share of visits or sessions |
| AOV (average order value) | Average revenue per order |
| Store revenue | Total revenue for the day |

- Track daily spend and top-of-funnel metrics in a shared Facebook metrics spreadsheet. It acts as a scaling guide that shows whether to scale or to put focus back on the ads or the website. [L1016, 2026]

### Weekly, monthly and product-level sheets

#### one source daily and weekly profit sheets

- Track profit in a profitability tracker sheet: record revenue, refunds, COGS, ad spend, processing fees and Shopify fees per day or per week. Weekly tracking gives a clearer view of average profit than single-day numbers. [L0445, undated]
- The profitability tracker sheet records revenue, refunds, COGS, ad cost, payment processing fees and Shopify fees per day or per week. Profit equals revenue minus all expenses, and profit percentage is profit divided by revenue. Extra 1% fees apply when Shopify Payments is not used. [L0875, undated]
- Daily profit tracking sheet in Google Sheets, one row per day: [L645.023]

| Column | Content |
|---|---|
| Date | Day of trading |
| Revenue | Total sales for the day |
| Facebook ad spend | Amount spent on ads that day |
| Product plus shipping cost | Cost of goods sold including delivery |
| Stripe and PayPal fees | Payment processor costs |
| Other expenses | App fees and additional costs |
| Returns and refunds | Money returned to customers |
| Net profit | Revenue minus all the costs above |
| Profit % | Net profit divided by revenue |

- A team member can fill in the revenue, ad data and costs daily, so you can see what a given ROAS means in profit. [L645.023]

#### Weekly profit and loss sheet

- Weekly profit and loss sheet layout, with the sample row: [L900.016]

| Date | Revenue | Refunds | COGS | Ads | PP Fee (Stripe + Paypal + Klarna) | Shopify 1% Fee | Profit/Loss | %PROFIT | Paypal | Monthly | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|
| July 22 - July 28 | 22670.38 | 0.0 | 6500.86 | 9765.33 | 846.3542 | 113.3519 | 5444.4839 | 24.01584755 | 235.3842 | (empty) | (empty) |

- Weekly profit = Revenue − Refunds − COGS − Ads − Payment processor fees (Stripe + PayPal + Klarna) − Shopify fee. Profit % = Profit ÷ Revenue. Sample week: 22670.38 − 0 − 6500.86 − 9765.33 − 846.3542 − 113.3519 = 5444.4839 USD, which is 24.02% of revenue. [L900.017]
- Refunds must be subtracted from revenue in the weekly profit calculation, not ignored. A week with zero refunds, as in the sample, overstates profit if returns are expected. Track refunds in the same period as the sales they relate to. [L900.018]
- A PayPal figure of 235.38 sits next to the profit column but is not part of the profit formula. Confirm whether PayPal fees are already included in the payment processor fee column to avoid counting them twice or missing them. [L900.020]
- Example, sample week of July 22 to July 28: revenue was 22670.38 USD, with COGS of 6500.86 USD and ad spend of 9765.33 USD. Payment fees were 846.35 USD and the Shopify fee was 113.35 USD, leaving a profit of 5444.48 USD, or 24.02% of revenue. [L900.024]
- Currency conversion, if the ad account is not USD: enter in the field "1 USD equals (in your currency)" the amount of your currency that equals one US dollar. The default value is 1.0 when the account runs in USD. [L900.022]

#### Simple finance sheet for a dropshipping test

- Procedure, in order: [L678.001]
  1. Enter every expense as it happens, daily if possible, otherwise at least once a week. [L678.001]
  2. Record Facebook ad spend, fulfillment costs (with the platform name in the description) and cost of goods sold per entry. [L678.001]
  3. Record sales not as the gross Shopify sales figure but as the payout amount from Shopify Payments or Stripe, which is already net of transaction fees. [L678.001]
  4. Enter the planned test budget per product (for example 500) in the "planned" field so the summary shows the difference. [L678.001]
  5. Enter the starting budget and read the monthly profit from the summary. [L678.001]
- Monthly profit in a simple store finance sheet = net payouts received (after payment fees) + other income − Facebook ad spend − fulfillment costs − cost of goods sold − other expenses. Each part is entered as its own line so the summary can calculate it. [L678.042]
- Overspending is visible when daily entries exceed the planned budget for a product, so the summary shows the difference immediately. A non-red figure against the planned budget means the plan is on track, and spending should be monitored closely during product tests. [L678.005]
- A personal-finance style spreadsheet can track expenses, income and profit for a store, and the same sheet can also be used for personal income and expenses. Marking unused recurring subscriptions in red as they are entered helps identify ones to cancel. [L678.004]

#### Monthly budget sheet

- Monthly budget sheet layout, one month, values from the example: [L550.001]

| Line | Planned | Is | Difference |
|---|---|---|---|
| Facebook Ads | 500 | 600 | -100 |
| Shopify Fees | 0 | 0 | 0 |
| COGS | 0 | 0 | 0 |
| Other | 0 | 0 | 0 |
| Total expenses | 500 | 600 | -100 |
| Shopify (- Transaction Costs) | 700 | 1037 | 337 |
| Agency Client | 0 | 0 | 0 |
| Total income | 700 | 1037 | 337 |

- Top summary block: Start Budget 1000, Start 1000, End 1437, Monthly Result 437, Change in % 0.437 (format as a percentage, 43.7%). [L550.001]
- Monthly Result = total income Is minus total expenses Is (1037 − 600 = 437). End = Start Budget plus Monthly Result (1000 + 437 = 1437). Change in % = Monthly Result divided by Start Budget (437 / 1000 = 0.437). [L550.002]
- Difference is calculated differently per side. On expense lines it is Planned minus Is (500 − 600 = −100). On income lines it is Is minus Planned (1037 − 700 = 337). In both cases a negative value means the line is behind plan, so overspending on costs and underperforming on income both show as negative. [L550.003]
- Planned Monthly Result is planned income minus planned expenses, which in the example is 700 − 500 = 200. Comparing this planned result with the actual Monthly Result of 437 shows whether the month beat its plan. [L550.005]
- Tracking planned against actual amounts each month, with the Start Budget carried forward as the running balance, shows whether the business is growing its cash or losing it. The Change in % line turns the monthly result into a simple growth rate on the starting budget. [L550.010]
- Each expense category is entered once per line. The Total row sums all expense lines for Planned and Is separately. The same applies to all income lines, so the totals always match the sum of their categories. [L550.004]
- Transaction log sheet layout, two side-by-side blocks, each with the same four columns: [L550.006]

| Expenses: Date | Amount | Description | Category | Income: Date | Amount | Description | Category |
|---|---|---|---|---|---|---|---|
| 1 Jun 2023 (stored as 45078) | 500 | Testing | Facebook Ads | 2 Jun 2023 (stored as 45079) | 800 | Sales | Shopify (- Transaction Costs) |
| 2 Jun 2023 (stored as 45079) | 250 | CJ | COGS | 3 Jun 2023 (stored as 45080) | 237 | SP Payout | Shopify (- Transaction Costs) |
| 3 Jun 2023 (entered as 03.06.0203, wrong year) | 100 | Facebook Ads | (empty) | | | | |

- Category names in the logs must match the category names in the monthly sheet exactly, so that totals pick them up. [L550.006]
- The profit tracking step lesson "Profit Tracking" worksheet: record monthly sales revenue, business expenses (shipping, Shopify fees, transaction fees, ads, COGS), and calculate net profit. [L0272, 2022]

#### Product-level margin

- Track each product's margin in a spreadsheet using the wholesale price, MAP and a shipping estimate. Update it when product prices or shipping costs change. [L1115, 2024]
- Excel is used for product-level profit tracking to see which products to scale or drop (see the choosing section). [L971.067]


Part 33 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/32-profit-tracking-systems-per-order-sheets-daily-p-l.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/34-profit-apps.md
