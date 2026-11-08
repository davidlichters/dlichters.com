<!-- part of ecom/deep/19-metrics-finance-and-tracking.md -->
Part 35 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/34-profit-apps.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/36-bookkeeping-p-l-balance-sheet-and-cash-flow.md

### Profit errors after a BOGO launch

- Triple Whale averages cost per acquisition across all orders [L1404, 2025-26].
- When many new customers buy two units under a BOGO, the real average cost per order falls [L1404, 2025-26].
- Because of this, the averages shown in the tracker become inaccurate [L1404, 2025-26].
- Account for this effect when reading profit data after a BOGO launch [L1404, 2025-26].

#### Further details

- B-Profit is a Shopify app that automates profit tracking. Install it from the Shopify App Store, connect ad accounts such as Facebook Ads, and enter the cost per item, handling cost and shipping price. It also picks up Shopify and external gateway fees, and shows gross profit and costs in one dashboard. A free plan (start free) is available. [L0445, undated]

- B-Profit setup for dropshipping: choose niche, select channel (e.g. Facebook Ads), set inventory type to dropshipping, pick supplier (CJ Dropshipping, AliExpress, AutoDS or 'Other'), then enter product cost per item, handling cost (0 in the example) and shipping prices. Finally connect external payment gateways such as Stripe or PayPal. [L0445, undated]

- The B-Profit dashboard shows gross profit, all costs and profit margin, so you can see if you are at a loss or profitable and whether to scale right now. [L0445, undated]

- BeProfit setup as taught: 1) Install app, create or log in. 2) Enter store information (e.g. niche, home and garden). 3) Choose ad platforms (Facebook) and marketing tools (Klaviyo); connect Facebook and Instagram ad accounts and Klaviyo. 4) Inventory: choose I dropship my products, select supplier and drop-shipping management tool (AutoDS). 5) Shipping provider: select if used (e.g. USPS) or I don't use any shipping platform. 6) Production costs: choose individually update and enter the total drop-shipping price for every variant. 7) Connect payment gateways (Shopify Payments, Stripe, PayPal) so fees are calculated automatically. 8) List expenses (e.g. Shopify plan $29, apps, VA, fixed costs) with status and payment frequency. 9) Set calculation preferences (e.g. exclude unfulfilled orders, optional). 10) Choose plan (start with free). [L0477, undated]

- Entering the wrong cost of goods in BeProfit distorts profit figures; enter the actual total dropshipping price for every variant you sell, as quoted by the supplier. [L0477, undated]

- In BeProfit, after entering only the $29 Shopify plan as an expense and no orders yet, the dashboard showed a loss of about $27. A negative profit before the first sale is therefore expected when only fixed costs are entered. [L0477, undated]

Monthly budget sheet layout (one month, values from the example):

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

Top summary block: Start Budget 1000, Start 1000, End 1437, Monthly Result 437, Change in % 0.437 (format as a percentage, 43.7%).
[L0550, undated]

- Monthly Result = total income Is minus total expenses Is (1037 - 600 = 437). End = Start Budget plus Monthly Result (1000 + 437 = 1437). Change in % = Monthly Result divided by Start Budget (437 / 1000 = 0.437). [L0550, undated]

- Difference is calculated differently for each side: on expense lines it is Planned minus Is (500 - 600 = -100), and on income lines it is Is minus Planned (1037 - 700 = 337). In both cases a negative value means the line is behind plan, so overspending on costs and underperforming on income both show as negative. [L0550, undated]

- Each expense category is entered once per line, and the Total row sums all expense lines for Planned and Is separately. The same applies to all income lines, so the totals always match the sum of their categories. [L0550, undated]

- Planned Monthly Result is planned income minus planned expenses, which in the example is 700 - 500 = 200. Comparing this planned result with the actual Monthly Result of 437 shows whether the month beat its plan. [L0550, undated]

Transaction log sheet layout, two side-by-side blocks, each with the same four columns:

| Expenses: Date | Amount | Description | Category | Income: Date | Amount | Description | Category |
|---|---|---|---|---|---|---|---|
| 1 Jun 2023 (stored as 45078) | 500 | Testing | Facebook Ads | 2 Jun 2023 (stored as 45079) | 800 | Sales | Shopify (- Transaction Costs) |
| 2 Jun 2023 (stored as 45079) | 250 | CJ | COGS | 3 Jun 2023 (stored as 45080) | 237 | SP Payout | Shopify (- Transaction Costs) |
| 3 Jun 2023 (entered as 03.06.0203, wrong year) | 100 | Facebook Ads | (empty) | | | | |

Category names in the logs must match the category names in the monthly sheet exactly so that totals pick them up.
[L0550, undated]

- Amounts entered with a currency symbol, such as "$250", are stored as text and are not counted in the totals. Enter amounts as plain numbers and keep the currency in the header or a note. [L0550, undated]

- A date typed with a wrong year, such as 0203 instead of 2023, places the entry outside the month and breaks any date-based filtering. Check every date after entry, and make sure the cell is formatted as a date rather than text. [L0550, undated]

- A log row without a category, like the 100 Facebook Ads entry without a category, will not appear in the category totals of the monthly sheet. Every expense and income row needs a category that matches the sheet. [L0550, undated]

- Tracking planned against actual amounts each month, with the Start Budget carried forward as the running balance, shows whether the business is growing its cash or losing it. The Change in % line turns the monthly result into a simple growth rate on the starting budget. [L0550, undated]

- Shopify income is recorded net of transaction costs, so transaction costs are not a separate income line. Shopify Fees are tracked as a separate expense line in the monthly sheet. [L0550, undated]

Daily profit tracking sheet (Google Sheets), one row per day:
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
A team member can fill in the revenue, ad data and costs daily, so you can see what a given ROAS means in profit.
[L0645, 2023]

- Simple finance tracking sheet for a dropshipping test, in order: 1) Enter every expense as it happens, daily if possible, otherwise at least once a week. 2) Record Facebook ad spend, fulfillment costs (with the platform name in the description) and cost of goods sold per entry. 3) Record sales not as the gross Shopify sales figure but as the payout amount from Shopify Payments or Stripe, which is already net of transaction fees. 4) Enter the planned test budget per product (for example 500) in the 'planned' field so the summary shows the difference. 5) Enter the starting budget and read the monthly profit from the summary. [L0678, 2023]

- Track the payout from Shopify Payments or Stripe, not the gross sales figure, because the payout already has transaction fees deducted. Payment provider fees are typically around 2-3% per transaction, so a 40 dollar sale might yield roughly 2-3 dollars less. [L0678, 2023]

- Use Shopify Payments if it is available in your country, as it is the default payment processor; Stripe is an alternative where Shopify Payments is not available, and in some markets Stripe has been integrated into Shopify Payments. Whether Shopify Payments or Stripe is available depends on the seller's country. [L0678, 2023]

- A personal-finance style spreadsheet can track expenses, income and profit for a store, and the same sheet can also be used for personal income and expenses. Marking unused recurring subscriptions in red as they are entered helps identify ones to cancel. [L0678, 2023]

- Overspending is visible when the daily entries exceed the planned budget for a product, so the summary shows the difference immediately. A non-red figure against the planned budget means the plan is on track, and spending should be monitored closely during product tests. [L0678, 2023]

- Monthly profit in a simple store finance sheet = net payouts received (after payment fees) + other income - Facebook ad spend - fulfillment costs - cost of goods sold - other expenses. Each part is entered as its own line so the summary can calculate it. [L0678, 2023]

- Track real profit per sale in a Google Sheets automation after each sale, using wholesale price plus other costs; the Shopify back end holds only the wholesale price as a starting point. [L0856, 2024]

Setting up B Profit in Shopify for profit tracking:
1. Open the Shopify app store via the recommended apps section and install B Profit.
2. Create an account and open the B Profit dashboard.
3. Select the niche (for example electronics) and the sales channels, for example Facebook Ads, and connect the ad account.
4. Add the inventory source: choose the dropshipping provider (CJ Dropshipping, AliExpress or Auto DS can be connected automatically to fetch cost prices), or select Other for manual entry.
5. Select the fulfillment provider, or choose Other.
6. Enter the shipping prices and product cost per item (example: cost per item $5, handling cost $0).
7. Click Next and connect any external payment gateway such as Stripe or PayPal.
8. Shopify plan fees are fetched automatically; click Finish and start with the free plan to see gross profit and costs on the dashboard.
[L0875, undated]

- B Profit is a Shopify app that automatically tracks profit, KPIs and profit margins, and shows whether the seller is at loss or profitable. Automatic cost fetching is possible for CJ Dropshipping, AliExpress and Auto DS. It can be used for free with a start plan. [L0875, undated]

- Track profit daily at first, then switch to weekly reviews to see the average weekly profit. Weekly data smooths out daily noise and gives a steadier basis for scaling decisions. [L0875, undated]

Weekly profit and loss sheet layout with the sample row:
| Date | Revenue | Refunds | COGS | Ads | PP Fee (Stripe + Paypal + Klarna) | Shopify 1% Fee | Profit/Loss | %PROFIT | Paypal | Monthly | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|
| July 22 - July 28 | 22670.38 | 0.0 | 6500.86 | 9765.33 | 846.3542 | 113.3519 | 5444.4839 | 24.01584755 | 235.3842 | (empty) | (empty) |
[L0900, undated]

- Weekly profit = Revenue − Refunds − COGS − Ads − Payment processor fees (Stripe + PayPal + Klarna) − Shopify fee. Profit % = Profit ÷ Revenue. Sample week: 22670.38 − 0 − 6500.86 − 9765.33 − 846.3542 − 113.3519 = 5444.4839 USD, which is 24.02% of revenue. [L0900, undated]

- Refunds must be subtracted from revenue in the weekly profit calculation, not ignored. A week with zero refunds, as in the sample, overstates profit if returns are expected. Track refunds in the same period as the sales they relate to. [L0900, undated]

- The column header says Shopify 1% Fee, but the sample value 113.35 equals 0.5% of revenue 22670.38, not 1%. Check the actual fee rate before relying on the column. A 1% fee on that revenue would be 226.70 USD. [L0900, undated]

- A PayPal figure of 235.38 sits next to the profit column but is not part of the profit formula. Confirm whether PayPal fees are already included in the payment processor fee column to avoid counting them twice or missing them. [L0900, undated]

- The total cost of running the business is entered as 400 USD, but the listed monthly expenses add up to 606 USD (605 without the designer value of 1). The daily cost is derived from the entered total, so the expense list and the total must be kept in sync. [L0900, undated]

- Currency Conversion (if ad account is not USD): enter in the field '1 USD equals (in your currency)' the amount of your currency that equals one US dollar. The default value is 1.0 when the account runs in USD. [L0900, undated]

- In the sample week of July 22 to July 28, revenue was 22670.38 USD, with COGS of 6500.86 USD and ad spend of 9765.33 USD. Payment fees were 846.35 USD and the Shopify fee was 113.35 USD, leaving a profit of 5444.48 USD, or 24.02% of revenue. [L0900, undated]


Part 35 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/34-profit-apps.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/36-bookkeeping-p-l-balance-sheet-and-cash-flow.md
