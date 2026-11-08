<!-- part of ecom/deep/19-metrics-finance-and-tracking.md -->
Part 32 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/31-instagram-trial-reels.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/33-daily-p-l-and-funnel-trackers.md

## Profit tracking systems: per-order sheets, daily P&L trackers and profit apps

### Why profit tracking is required

- Always track profit with either a Shopify app or a spreadsheet. Without profit visibility you cannot scale effectively, and you risk going negative without knowing it. [L0037, 2026]
- Automate profit tracking once the store runs, so margin is measured per order rather than estimated from totals. [L0532, undated]
- Spreadsheets are hard to keep accurate for profit tracking because every payment and cost source must be connected. Profit apps automate this by pulling data from payment providers. [L1213, 2023]
- Track profit for each individual order, not only total revenue, so that losing products, pricing problems and winning products become visible. A simple spreadsheet is enough while order volume is low, for example a few orders per day. [L1202, 2021+]
- Track the net profit of every sale in a profit spreadsheet, so decisions about which products to scale or cut are based on real per-sale results. [L0970, 2023]
- A clear view of gross spend and net return is essential once sales start. Without it, a seller cannot tell whether a product is making money or losing it. This matters most when a product is being tested and when a store moves into the scaling phase. [L0678, 2023]

### Choosing a tracking system

- Review the current financial tracking system and check whether it gives a clear view of the business. If it does not work or leaves room for improvement, compare it with a proven tracking system and implement that one if it fits the business. [L0441, 2021-22]
- Google Sheets is enough for margin tracking at the start. Accounting software such as Xero can come later. [L0962, 2021]
- The December 2020 coaching call lists Wholesale Cost Tracking as a resource for tracking supplier (wholesale) costs. The lesson names it without describing its setup. [L0426, 2020]
- 2023: A profit tracking spreadsheet is enough for a new store's bookkeeping. It costs nothing and tracks revenue, cost of goods, shipping, ad spend and profit. [L0855, 2023]
- 2023: Use a profit tracking spreadsheet to track business profit. Xero is the accounting platform used for the business. Google Sheets was used for years before that and supported over $10 million in sales. [L0835, 2023]
- 2024: Use Excel for product-level profit tracking to see which products to scale or drop. The team later moved accounting to Xero, which is not day-to-day work. [L0971, 2024]
- Shopify's own analytics shows all store reports and activity. When Shopify Payments is used, payments and finances are also visible in the same admin. [L0934, 2023]
- Profit apps are the alternative to spreadsheets; see the profit apps section below. [L0037, 2026; L1213, 2023]

### Per-order profit sheets (Google Sheets)

- The profit tracking step (Profit tracking) calculates profit margin on every individual order, not just blended profit across all sales combined. Apply it retroactively to all January and February orders. [L0208, 2024+]
- The profit tracking step includes a downloadable Profit Tracking Worksheet, used to track ROI indicators, monitor profitability by product and campaign, and make data-driven scaling decisions. [L0249, 2022]
- Track sales price, COGS, shipping cost and profit per order in separate columns, and calculate profit margin order by order. [L0268, 2020]
- procedure:
  1. Track profit per order in Google Sheets with columns: order date, sale price, COGS, shipping, total profit. [L0268, 2020]
  2. As order volume increases, assign this tracking to a virtual assistant. [L0268, 2020]
  3. Periodically review overall business profit. Take distributions based on monthly or weekly profit, not on a per-order basis. [L0268, 2020]
- procedure:
  1. Build a sheet with one row per order. [L1281, 2022]
  2. Record the sale price, product cost, merchant fees, shipping and ad cost. [L1281, 2022]
  3. Compare profit per order to see which products make real money and which need a higher price or removal. [L1281, 2022]

#### Setting up the order sheet

- Setup procedure:
  1. Open the template link and choose File > Make a Copy. Keep the default name "Copy of" and click OK so the file is editable in your own Google Drive. [L1202, 2021+]
  2. Right-click the tab labelled Duplicate this PNL and choose Duplicate to keep an untouched backup of the formulas. [L1202, 2021+]
  3. Right-click the working tab and choose Rename to give it your own name. [L1202, 2021+]
  4. Enter all order data only in the working tab and keep the backup tab as the reset copy. [L1202, 2021+]
- Keep the blank template tab "DUPLICATE THIS - P&L" unchanged and copy it for each new tracking period or store, so the column structure stays the same across all reports. [L0394, undated]
- Column structure of the order-level profit sheet, tab "DUPLICATE THIS - P&L", with one example row. [L0394, undated]

| Order # | Date | Net Profit | Net Margin | Supplier | Product | QTY | Customer Paid | Promotion Applied | COGS | Shipping | Tax Collected | Merchant Fees |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1200.0 | 36526.0 | 307.7 | 0.3077 | Supplier ABC | Product 12345 | 1.0 | 1000.0 | 10% Off | 500.0 | 100.0 | 63.0 | 29.3 |

- The Date column stores a spreadsheet date serial (36526 = 2000-01-01 in Excel), so format it as a date before reading it. [L0394, undated]
- Net profit per order = Customer Paid − COGS − Shipping − Tax Collected − Merchant Fees. Example: 1000 − 500 − 100 − 63 − 29.3 = 307.7. [L0394, undated]
- Net margin per order = Net Profit ÷ Customer Paid. Example: 307.7 ÷ 1000 = 0.3077, i.e. 30.77%. [L0394, undated]
- Tax collected from the customer must be deducted from order revenue, because it is passed on to the tax authority and not kept as income. Leaving it out overstates net profit and margin on every sale that carries sales tax or VAT. [L0394, undated]
- Record every order on its own row with the supplier, product, quantity and any promotion applied. This shows which suppliers, products and discounts actually produce profit, instead of total revenue only. [L0394, undated]

#### Entering one order

- Entry procedure:
  1. Replace the example data with the Shopify order number and the date the order was placed. [L1202, 2021+]
  2. Enter the supplier name and the product name. [L1202, 2021+]
  3. Enter Quantity as the number of units the customer bought. [L1202, 2021+]
  4. Enter Customer Paid as the amount shown in the Shopify orders section. [L1202, 2021+]
  5. Enter any promotion used in Promotions Applied. [L1202, 2021+]
  6. Enter COGS from the supplier invoice. [L1202, 2021+]
  7. Enter Shipping and Tax Collected, and leave Merchant Fees to the formula. [L1202, 2021+]
  8. Read Net Profit and Net Margin at the top of the sheet, which update automatically. [L1202, 2021+]
- Customer Paid must be the amount the customer actually paid as shown in Shopify, not the product list price. If the customer paid for shipping, that amount belongs in Customer Paid, not in the shipping field. [L1202, 2021+]
- Promotions Applied is only a reference column for spotting trends, such as a 10% off storewide sale. It does not change any calculation. Record each discount so you can later see which promotions were linked to higher or lower profit. [L1202, 2021+]
- To add more orders: highlight the full row with all order data and formulas, then drag the fill handle at the bottom down to copy the row. The copied rows keep the calculation formulas, so you only overwrite the input cells for each new order. [L1202, 2021+]
- Ad spend is not entered in the per-order sheet because it varies from order to order. Track it separately and analyse it with return on ad spend (ROAS) alongside the net margin figures. [L1202, 2021+]
- period-level formulas:
  - Profit per order = sale price − Shopify card processing fee (2.9% for Shopify Payments credit card transactions in the source year 2021) − supplier cost − shipping cost. [L0962, 2021]
  - Profit after ads and overheads = total profit per period − Google Ads, Facebook Ads and Bing Ads costs − 29 dollars per month for Shopify − other fees. [L0962, 2021]
- margin tracking in a spreadsheet:
  1. Create a sheet for each week or month. [L0962, 2021]
  2. For every sale, enter the sale price, Shopify fees, supplier product price and shipping cost. [L0962, 2021]
  3. Calculate profit per order. [L0962, 2021]
  4. Add that period's Google Ads, Facebook Ads, Bing Ads, 29 dollars Shopify fee and other fees. [L0962, 2021]
  5. Calculate the margin for the period. [L0962, 2021]

#### Acting on per-order results

- Example: After two months with 12 sales, six sales earned $400 net profit each, three earned $200, and three earned $50. The $50 sales should be investigated for too much ad spend or higher shipping cost than expected. Then ad spend can be cut or increased on the products that earn most. [L0970, 2023]

### Order-level tracker from one source

- Tool: The Order Profit Tracker is a spreadsheet that calculates net profit and net margin for each order from the sale amount minus supplier cost, shipping, payment processor fees and other costs. It is used to know profit per order, and its instructions include a way to automate the data entry. [L1246, 2021-22]
- Each order is entered with the order amount, any discount, the payment processor fee, sales tax, the supplier total, the cost of products, shipping, other process fees and the amount received. Net profit and net margin are calculated from these entries. [L1246, 2021-22]
- The tracker reports a gross profit margin alongside the net margin. Rely on the net margin for decisions, because it shows what remains after shipping costs and all other order costs are subtracted. [L1246, 2021-22]
- During the early build phase, calculate the profit of every single order, because margins only become clear once real supplier costs, shipping, processor fees and fraud fees are included. [L1201, 2021-22]
- Enter and check the profit of at least the first 5 to 10 orders manually yourself before handing the task to someone else. [L1201, 2021-22]
- Logging procedure for one order in the Order Profit Tracker:
  1. When the store sends a new-sale notification, note the order. [L1201, 2021-22]
  2. Place the order with the supplier and wait for the invoice or order confirmation that lists all costs. [L1201, 2021-22]
  3. Open the Profit Per Order tab and add a new row with the order number and date. [L1201, 2021-22]
  4. Enter the customer name, the product and the quantity. Quantity is for reference only and does not change the calculation. [L1201, 2021-22]
  5. Enter the order amount: the total you actually received from the customer. [L1201, 2021-22]
  6. Enter the discount you gave. It is recorded for reference; the order amount already reflects what was received. [L1201, 2021-22]
  7. Select the payment method so it matches what Shopify fills in automatically. [L1201, 2021-22]
  8. Enter the sales tax. Leave it at 0 if no sales tax was charged. [L1201, 2021-22]
  9. Enter the supplier total: the product cost plus the shipping cost from the supplier invoice, plus the cost of any shipping you paid yourself through a freight forwarder or UPS on your own account. [L1201, 2021-22]
  10. Keep the shipping cost in its own separate cell as a reference note. [L1201, 2021-22]
  11. Read the automatically calculated values: processor fees, fraud insurance, total cost, gross profit, net profit and net margin. [L1201, 2021-22]
- For an order split across several suppliers, enter the supplier total as one sum of all invoices, including each separately paid shipping cost, using a typed equation such as `=1500+500` (or `=1400+100+500` if a 100 shipping cost is paid separately). Example check: 3,000 − 2,000 − 87.30 − 30 = 882.70. [L1201, 2021-22]
- Fraud insurance is entered in the insurance section: Signifyd at 1% of the order amount, with a checkbox column "Insure Checks/Financed Orders?". If you do not use fraud insurance, delete that fee. [L1201, 2021-22]
- dropshipping COGS: Recording COGS on an accrual basis for each individual order is effectively impossible for dropshipping. It requires accurate supplier invoices for every order, invoices change over time, and suppliers do not standardize their data. The work is very large, the benefit is small, and the return on investment is negative. [L0484, 2021-22]
- Using an order profit tracker to calculate profit on every individual order is not recommended for dropshipping. For the same reason as per-order COGS accrual, supplier invoices change and are hard to keep accurate, so the effort is large while the information gained is small. [L0484, 2021-22]
- growth phase: Recording every single order has diminishing returns, because the profit per additional sale of the same item barely changes while the time to collect invoices and costs is large. Weigh tracking time against what it returns. [L1246, 2021-22]
- growth-phase procedure:
  1. If you do not yet have a clear profit per product or order, use the tracker for a while without entering every order. [L1246, 2021-22]
  2. Spot check periodically to confirm that a product line, brand or best-selling product is still profitable. [L1246, 2021-22]
  3. When adding a new supplier or new product, track it for a while until you know how it performs. [L1246, 2021-22]
  4. Return to the tracker after supplier price changes or your own price changes to see how things have developed. [L1246, 2021-22]
  5. If you are still not confident about profit per order, use the tracker for a week at a time instead of continuously. [L1246, 2021-22]

### Fees and rates to enter

Sources give different fee rates. Each value applies to the case described.

| Source | Rate given | When it applies |
|---|---|---|
| one source, older (2021-22) | Shopify Payments 2.9% + $0.30; PayPal 2.9% + $0.30; Klarna 3.5% + $1.00 | Setup tab of the order tracker, with the payment method matched to Shopify [L1201, 2021-22] |
| one source, older (2021) | 2.9% Shopify card processing fee on Shopify Payments credit card transactions | Profit per order in the 2021 sheet [L0962, 2021] |
| one source | Payment providers typically about 2-3% per transaction | Estimate of what a payout is reduced by [L678.002] |
| one source | Extra 1% fee when Shopify Payments is not used | Profitability tracker sheet [L875.021] |
| one source | Shopify transaction fee of 0.5%, 1% or 2%, depending on the plan | Extra charges entered in a profit app [L1213, 2023] |
| one source 2026 | Shopify Fee % preset to 0.055 (5.5%); the same tracker lists 5.50% | Daily P&L tracker input [L1123, 2026; L1030, 2026] |

- Payment fees come from the Shopify Fee % setting. Their effect depends on the sheet version (see the following statements). [L1123, 2026]
- one source 2026, worked day-1 example: profit equals revenue minus COGS minus ad spend ($140), so no fee was deducted there. Verify the Fees formula in your copy before relying on profit. [L1123, 2026]
- one source 2026, if the Fees column applies 0.055 to the worked day-1 example: fees would be $300 × 0.055 = $16.50, profit would fall from $140 to $123.50, and net margin would fall from 46.67% to about 41.17%. Check whether your copy deducts this fee before trusting the $140 result. [L1123, 2026]
- one source 2026: Before using the tracker, change its payment processor fee formula to match the fee rates of your own payment processor. [L1124, 2026]
- one source: The Shopify 1% fee column header in a weekly sheet does not match its sample value. The sample 113.35 equals 0.5% of revenue 22670.38, not 1%. Check the actual fee rate before relying on the column. A 1% fee on that revenue would be 226.70 USD. [L900.019]
- one source: Shopify income is recorded net of transaction costs, so transaction costs are not a separate income line. Shopify Fees are tracked as a separate expense line in the monthly sheet. [L550.011]
- one source, older: Changing a fee rate in the Setup tab updates all order rows in real time. [L1201, 2021-22]
- one source, older: The source gives a switch from Shopify Payments to Klarna changing the processor fee from 29.30 to 106.00 on a 3,000 order. Under the same source's rates, a 3,000 order on Shopify Payments gives 87.30 (2.9% of 3,000 + $0.30) and a 3,000 order on Klarna gives 106.00 (3.5% + $1.00). The 29.30 figure matches a 1,000 order at Shopify Payments rates, so verify it before reusing it. The choice of payment method changes net profit either way. [L1201, 2021-22]
- one source, older: Exact processor fees matter only for the automation features. If you do not want to track the fee precisely, leave the payment method set to Shopify Payments, since most processors charge roughly 2.9% plus 30 cents. [L1201, 2021-22]
- one source: Use Shopify Payments if it is available in your country, as it is the default payment processor. Stripe is the alternative where Shopify Payments is not available. In some markets Stripe has been integrated into Shopify Payments. Availability depends on the seller's country. [L678.003]
- one source: Track the payout from Shopify Payments or Stripe, not the gross sales figure, because the payout already has transaction fees deducted. A 40 dollar sale might yield roughly 2-3 dollars less. [L678.002]


Part 32 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/31-instagram-trial-reels.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/33-daily-p-l-and-funnel-trackers.md
