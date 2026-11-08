<!-- part of ecom/deep/19-metrics-finance-and-tracking.md -->
Part 4 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/03-unit-economics-margin-cogs-and-net-profit-per-sale.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/05-cost-of-goods-shipping-and-tax-per-order.md

### Returns, refunds and chargebacks

- **Return rate (orders).** Return rate = (returns + size exchanges) ÷ total orders over the same period. One return or exchange in every five orders is a 20% return rate. For an established fashion brand this was about 30,000 to 35,000 in returns per year (currency not stated). [L0660, 2019+] *(older advice, 2019-22 context not stated)*
- **Return rate (revenue).** Return rate = returns ÷ gross sales before returns × 100. Net sales = gross sales − returns. Examples from 2021 Shopify reports:
  - Infrared sauna store: 23,721.80 ÷ 251,671.35 ≈ 9.4%
  - Gazebo store: 68,596.17 ÷ 806,805.49 ≈ 8.5%
  - Air purifier store: 4,437.60 ÷ 69,607.60 ≈ 6.4% [L0771, 2021-22] **
- **Pre-purchase return option.** Net return economics per order = (share of shoppers who buy the pre-purchase return option × fee charged) − (share of orders returned × cost of one return, including return shipping, return software and handling). A positive result means the fees cover return costs, and any surplus is extra margin. [L0955, 2025-26]
- **Judge fees by cohort.** Do not judge a pre-purchase return fee only by the overall return rate. Opted-in shoppers may return slightly more often and non-opted shoppers slightly less, so track both cohorts separately. [L0955, 2025-26]
- **Klarna refunds.** Klarna buyers can request refunds for about six months after purchase, so a Klarna store's real profit is only visible after that period. A store that looks profitable in month one can still show losses later. [L0660, 2019+]
- **New-customer refund rate.** Take the refund rate from homepage metrics (for example 2.81%). Convert it into a dollar amount per order by applying it to the new-customer average order value. [L0433, 2025-26]
- **Buffer.** No unit sets a fixed buffer percentage. Build the buffer from the refund rate applied per order [L0433, 2025-26] and the return-cost formula [L0955, 2025-26], then subtract returns and refunds in net profit [L0645, 2023].

### Margin targets and thresholds

#### Net margin targets

| Source | Target or floor | Applies when | ids |
|---|---|---|---|
| one source | Net margin at least 20%, target 30%; at $1,000 sale, 20% = $200 minimum, $250 good, $300 ideal; 30% often needs upsells such as product options, add-ons and upgraded shipping | After all costs: COGS, shipping (including free), Shopify, apps, all marketing | [L0664, 2020] ** |
| one source | Target 30% net for a store with profitable product selection | Store built on profitable product selection | [L0834, 2021] ** |
| one source | Target 25% net operating profit, accept no less than about 20% | After all expenses | [L0934, 2023] |
| one source | Target 25% net margin | After COGS, free shipping (if offered), 2.9% transaction fee and other expenses | [L0964, 2023] |
| one source | Beginners aim for 25%; target about 30% later, improved via conversion rate and profit margin | New stores start at 25% | [L1150, 2020-26] |
| one source | Net profit at least 25% of sales | Used with COGS ≤ 50% of MAP and ad cost ≤ 10% of price | [L0247, 2021] ** |
| one source | Do not pursue products below 30-40% profit margin after all costs | Any product before launch | [L0227, 2014] |
| one source | Target profit margin 50% after COGS, Amazon fees and marketing | Amazon FBA context | [L0227, 2014] |
| one source | Average net margin about 30% assumed for dropshipping | Average-based estimates | [L0474, 2020-26] |

- **How to choose.** The 20% floor and 30% target come from the 2020 advice [L0664, 2020]; the 25% operating target with 20% floor from 2023 [L0934, 2023]; the 30% for profitable selection [L0834, 2021]; and 25% for beginners [L1150, 2020-26]. Use 25% as the working target for new stores and 30% once the product selection is proven.
- **Early months.** Net margins are often lower in the first few months as the store is optimised. They improve as ad optimisation, conversion rate, supplier count and email marketing get better. [L1111, 2020]
- **Margin in dollars.** Track profit margins by dollar amount, not just percentage, when deciding which products get paid ad budget. [L0255, 2025]

#### Gross margin tiers

- Benchmark tiers for gross margin percentage:
  - Elite: 80% or more
  - Sweet Spot: 70-79%
  - Workable: 50-69%
  - Insufficient: 0-49% [L0987, 2025-26]
- Aim for a gross margin of at least 70%. Below that, the margin usually leaves too little room to scale. [L0987, 2025-26]
- Keep COGS at or below 30% of the listing price so that the product lands in the Sweet Spot tier. [L0987, 2025-26]
- Aim for a dollar margin (gross profit per order) of $50 or more. With less than $50, paid ad attribution leaves little room to test and scale efficiently on Meta. [L0987, 2025-26]
- Ad spend per order must stay below the gross margin. The calculator makes ad spend available only at 50% margin or more. [L0987, 2025-26]

#### COGS-to-price thresholds

| Threshold | Value | Use | ids |
|---|---|---|---|
| COGS share of price | ≤ 50% (MAP at about 2× wholesale) | First check; non-MAP benchmark | [L0664, 2020; L0968, 2021; L1115, 2024; L1086, 2019] *([L1086, 2019] older, 2019)* |
| COGS share of listing price | ≤ 30% | Sweet Spot tier, one source | [L0987, 2025-26] |
| Price vs COGS | ≥ 3× COGS | Bare minimum for ad room; $20 COGS sells for about $60 | [L1124, 2026; L0445, undated; L1172, 2023+] |
| Ad budget share | About 10% of product price | Ad planning per product | [L0247, 2021; L1115, 2024; L0359, 2020] |

- **3× rule.** Set the minimum selling price at least three times the product cost, for example a $10 product sold for at least $30, as the bare minimum for leaving room for ad costs. [L1124, 2026] At a 3× ratio the break-even ROAS falls near 1.5 to 1.6, leaving room for ad spend, apps, staff and payment processing fees. [L0445, undated] The 3× formula is used at the start; a winning product achieves better margins as its conversion rate rises. [L1172, 2023+]
- **Break-even ROAS limit.** Only pick products with a break-even ROAS of about 1.4 to 1.5 or lower. A break-even ROAS of 2 makes profitability very difficult, because a consistent Facebook ROAS above 2 is hard to reach. [L0692, 2023]
- **Wholesale spread.** A wholesale-to-MAP spread of 20 to 35% often leaves no margin once advertising costs, merchant fees and shipping are included. [L0665, 2022] **
- **20% margin rule.** If margins are only 20% including all costs, do not run paid ads to those products. Rely only on organic traffic (free Google listings, search). Transaction fees (2.9%), ad spend allocation (up to 10%) and operational costs will consume the entire margin. [L0251, 2023]
- **Prioritise profit.** Concentrating ad budget on products with healthy profit margins ensures that sales growth directly increases net profit. This optimises the profitability of each customer acquisition as volume scales. [L0208, 2024+]

### Price points, MAP and wholesale spread

- **MAP examples.**
  - MAP $2,000, wholesale $1,500, shipping $400 = $100 profit before ad costs.
  - MAP $2,000, wholesale $1,000, shipping $400 = $600 profit.
  - MAP $3,000, wholesale $1,500, shipping $400 = $1,100 profit. [L0278, 2025] *(2025)*
- **MAP formula.** MAP − wholesale cost − shipping cost = gross profit per sale. This profit must still cover advertising costs. [L0278, 2025]
- **Margins by supplier.** Net profit margins do not show an industry-wide decline. Electronics and car seats are exceptions with lower margins. Margins vary by supplier, not by niche in general. [L0278, 2025]
- **Biggest mistake.** The biggest margin mistake is a selling price too close to wholesale cost, which often happens with distributors. If a supplier cannot reach 2× MAP, ask for better pricing. If refused, stop selling that supplier's products. [L1086, 2019] **
- **Cheap price points.** Cheaper price points ($9.97-$12.97) create unsustainably thin margins. You run out of money before you can rank organically, because each sale generates too little profit to sustain paid traffic. This is the primary reason lower-priced products fail in competitive niches. [L0228, 2015]
- **Premium pricing.** Base lid at $16.99 yields $11.05 profit after Amazon fees. A premium version at $24.00 with $3.00 COGS yields $14.00 profit (58% margin). Differentiation can justify the higher price without losing sales. [L0227, 2014]
- **Price alone is no guide.** Do not assume which products are most profitable based on price alone. A $1,500 product may have lower actual margins and higher acquisition cost than a $500 product, which makes the cheaper one more profitable. Base all segmentation on actual sales data and margin calculations. [L0224, 2024+]
- **Non-MAP flexibility.** Non-MAP ad strategy must be more flexible than MAP strategy, because prices can change quickly. Stop spending on products where a competitor accepts a very thin margin, such as around 5% per sale. [L1051, 2020-26]
- **Raise price, not just cut cost.** Bundles and packaged offers can lift effective margin. The calculator suggests a bundle or a higher-margin product when a result is Insufficient. [L0987, 2025-26] Raising the price through a packaged offer can fix a margin that is too low. [L0987, 2025-26]

### Ad spend against margin

- **Ad budget follows margin.** Ad budget per product is set after wholesale and shipping are subtracted from MAP. [L0934, 2023]
- **Keep ad cost within remaining margin.** After product margin is confirmed, the main cost to control is ad spend per sale. Keep ad costs within the margin remaining after product, shipping and processing costs. [L1086, 2019] **
- **Higher-margin products.** Advertising on higher-margin products costs more per customer but is justified by margin. Lower-margin products are more likely to be bought organically through Google search or browsing, so ads on them are less efficient. Keywords that trigger ads typically come from shoppers who already know the product they want. [L0358, 2020] **
- **Low-priced items.** Before removing low-priced items, ask whether they would be profitable with zero ad spend. If they would, put them in their own campaign with a lower budget instead of deleting them. [L0852, 2020] **
- **Historical data.** Use historical sales and margin data from older suppliers to decide which products deserve ad budget. Products with the highest sales volume and best margins stay in paid campaigns. [L0965, 2024]
- **Thin margin first.** Before any shipping or pricing change, look at the profit left per sale as a percentage. A product with a thin margin needs cost fixes before any other change. [L1069, 2019] **
- **Value of a margin point (2021-22).** Extra profit from a margin gain = total revenue × margin points gained. On 1.5 million revenue, each percentage point is worth about 15,000. Raising gross margin by 5 points is worth about 75,000 per year at flat revenue. [L1046, 2021-22] **
- **Margin leak procedure.** If net margin is below 20% after every cost, work backwards to find the leak:
  1. Check whether the product cost is too high as a percentage of revenue.
  2. Check whether shipping costs are too high.
  3. Check whether the return on ad spend is too low.
  4. Fix the leak: improve the ads, negotiate better shipping rates, or ask the supplier for better pricing incentives. [L0664, 2020] **
- **Ad cost tracking.** Track the cost of ads per sale as the single largest variable cost after product and shipping. [L1111, 2020]

### Calculators and spreadsheets

#### Amazon FBA calculator

- **Tool.** Search "FBA calculator" in Google. It calculates Amazon's total fees for any product. Process:
  1. Find the product's ASIN (product ID from the Amazon listing URL or visible on the page).
  2. Go to the FBA Calculator.
  3. Paste the ASIN and click search.
  4. Enter the selling price.
  5. Enter your cost of goods.
  6. The calculate button shows profit per sale after all Amazon fees. [L0227, 2014]
- **Example.** A product selling for $16.99 generates $11.05 profit after Amazon fees.
  - If COGS is $3.00, profit per sale is $8.05. The source labels this a 50% margin; on $16.99 it is about 47%, so treat the 50% figure as approximate.
  - If COGS is $8.00, profit is $3.05 (18% margin).
  - The calculator shows the exact profit before any inventory investment. [L0227, 2014]
- **Amazon benchmark (undated).** FBA sellers in the course group often aim for a monthly profit margin per unit of about $9 before ads, and hoped to lift it above $10 by reducing wholesale and shipping costs and raising the price. [L1153, 2016]
- **Worked FBA example.** A $35.95 FBA product: selling price $35.95 − COGS $5 − shipping $3 − Amazon fees (15%) $5.40 = gross profit about $22 per unit (63%). The subtraction gives $22.55 (62.7%); the source rounds to $22. After reorder costs and reshipping inventory, net profit before ads is $14.55 per unit. At $0.70-$1.50 per ad click (average about $1), break-even requires 1 in 14 buyers to convert from ads, which is conservative against Amazon's 15-20% baseline conversion. [L0228, 2015]

#### Margin calculator

- **Purpose.** Use the margin calculator during product research to check unit economics before testing with paid ads. It shows how much profit the product can make and outputs the target ROAS and CPA for TikTok, Facebook or Google ads. [L0987, 2025-26]
- **Workflow.**
  1. Enter the listing price: the price the product will show on your store, set by perceived value, average order value and the offer you present.
  2. Enter the total cost per unit: cost of goods plus shipping (for example supplier price plus shipping cost).
  3. Read the gross margin percentage and dollar margin the calculator returns.
  4. Read the benchmark tier (Elite, Sweet Spot, Workable or Insufficient) and the target ROAS and target CPA.
  5. If the tier is too low, adjust the listing price or the cost, or add a bundle offer, and recalculate.
  6. Only test the product if the margin supports it. [L0987, 2025-26]
- **Inputs.** Only two inputs are needed: listing price and total cost (cost of goods plus shipping). Both must be filled before the calculator produces results. [L0987, 2025-26]
- **Formulas (as stated).**
  - Gross margin percentage = (listing price − total cost) ÷ listing price
  - Dollar margin = listing price − total cost
  - ROAS needed to break even at target = listing price ÷ total cost, which equals the target ROAS
  - Target CPA = maximum cost per purchase that keeps the product profitable. [L0987, 2025-26]
  - Note: the example figures in the same unit (ROAS 1.43 at $100 with $70 margin, and 2.50 at $100 with $40 margin) match listing price ÷ dollar margin (100 ÷ 70 = 1.43; 100 ÷ 40 = 2.50), not listing price ÷ total cost (which would give 3.33 and 1.67). Verify the target ROAS in the calculator before relying on it. [L0987, 2025-26]
- **Product ROI.** Dollar margin ÷ total cost per unit. For a $100 listing and $30 total cost: $70 ÷ $30 = 233.3%. [L0987, 2025-26]
- **Worked example.** $100 listing, $30 total cost (COGS $20 + shipping $10): gross margin $70 (70.0%), target ROAS 1.43, target CPA $70, benchmark Sweet Spot. [L0987, 2025-26]
- **Too-low margin.** A product with a $60 total cost on a $100 listing gives 40% gross margin and needs a ROAS of 2.50, which is Insufficient. Do not test it at that price without changing the numbers. [L0987, 2025-26]
- **Packaged offer.** The same product with a $60 total cost works at a $200 listing: gross margin $140 (70.0%), target ROAS 1.43, Sweet Spot. [L0987, 2025-26]
- **Optional field.** The AD SPEND PER ORDER field is unlocked only once gross margin reaches 50% or more ("available at 50% + margin"). Use it only after the product margin passes that level. [L0987, 2025-26]
- **Validation tool.** The calculator is a rough check. Adjust listing price and cost inputs to find numbers that work before launching the first campaign. The purpose is to check profitability before spending on ads. [L0987, 2025-26]

#### one source margin calculator

- **Savings.** Savings = Price Before Discounts − Price On Site. Savings % = Savings ÷ Price Before Discounts. Example: a strike-through price of $60 next to a sale price of $40 gives savings of $20 and 33.33%. [L0986, 2026]
- **Entry order.** Reading Margin % or break-even ROAS before the Shipping Price and gateway fee are entered gives a wrong result. Enter the gateway fee, shipping price and all costs first, then read the margin figures. [L0986, 2026]

#### Pricing sheet (Google Sheets)

- **Tool.** A Google Sheets supplier pricing calculator shows whether you can sell a supplier's product at a profit, and it works for any supplier. Copy the shared read-only sheet via File > Make a copy and save it in your own Google Drive. Enter numbers only in the white input cells; typing into the coloured calculated cells breaks the formulas. [L1148, 2021-22] **
- **Structure.** One tab per supplier; duplicate tabs via right-click > Duplicate. [L1148, 2021-22]

| Area | Field | Input or calculated |
|---|---|---|
| Product | Product title, optional SKU | Input (white) |
| Price | List price (selling price) | Input (white) |
| Supplier | Supplier cost per item | Input (white) |
| Shipping | Shipping paid by customer (0 if free shipping) | Input (white) |
| Shipping | Supplier shipping cost (0 if included in item price) | Input (white) |
| Discounts | Options at 5%, 10% and 15% off list price | Calculated |
| Results | Gross Profit, Gross Margin, Net Profit, Net Margin | Calculated (coloured) |
| Setup tab | Payment processor fee % and static fee per transaction | Input (white) |
| Setup tab | Insurance fee % (only if you use fraud insurance) | Input (white) |
| Pricing Research | MSRP/RRP, MAP, competitor price, competitor shipping charge | Input (white) |

*(table from [L1148, 2021-22])*

- **Procedure.**
  1. Open the shared sheet (read-only) and choose File > Make a copy to save your own version in Google Drive.
  2. Enter the product name and, optionally, the SKU.
  3. Enter the list price, which is what you will sell the product for.
  4. Enter the supplier cost for one item.
  5. Enter the shipping paid by the customer; enter 0 if you offer free shipping.
  6. Enter the shipping cost the supplier charges you; enter 0 if shipping is already included in the item price.
  7. Read the calculated Gross Profit, Gross Margin, Net Profit and Net Margin, and check the discount options at 5%, 10% and 15%.
  8. Go to the Setup tab and enter the payment processor fee percentage and static fee, and the insurance fee percentage if you use fraud insurance.
  9. For each additional supplier, right-click the supplier tab and duplicate it, then fill in its values. [L1148, 2021-22]
- **Setup values.** Enter the payment processor fee percentage (2.9% for typical new sellers), the static fee per transaction ($0.30), and the insurance fee percentage if you use fraud insurance (for example 1%). If you have several processors with different fees, choose one; the difference is small. [L1148, 2021-22]

#### Average profit per sale (niche and spreadsheet)

- **Formula.** Average profit per sale = average selling price × 0.25, where 0.25 is a 25% profit margin on the average price. [L1150, 2020-26]
  - Example: an average price of $2,319.13 gives about $580 average profit per sale. [L1081, 2020-26]
  - Example: at a $305.49 average price, chandeliers yield about $76.37 profit per sale at 25%. At the average price, standup desks yield about $83 profit per sale at the same margin. [L1150, 2020-26]
- **Spreadsheet.** In Excel, Google Sheets or Apple Numbers enter =[average price cell]*0.25, for example =C2*0.25 if the average price sits in C2. The result is the net profit per sale at the 25% target. Drag the formula down the column so every niche row calculates automatically. [L1081, 2020-26]
- **Niche procedure.**
  1. Open the niche research worksheet and go to the average profit column.
  2. Click the cell in the average profit column for the first niche.
  3. Type an equals sign.
  4. Click the average price cell for the same niche in column B.
  5. Type times 0.25 after the cell reference.
  6. Press Enter to confirm the formula.
  7. Drag the formula down for all niches that still pass the $200 average price threshold. [L1150, 2020-26]
- **Why 25%.** The 25% calculation estimates profit per sale after all expenses are paid, so it gives a conservative lower-end figure rather than an inflated one. This reduces the risk of selecting niches on false positives. [L1150, 2020-26]

#### Shopify CSV margin check

- **Procedure.**
  1. In Shopify admin, go to Products and click Export to download a CSV of your product data. The export does not delete or change any products.
  2. Open the CSV in Excel or Google Sheets.
  3. Keep the price column, which holds the selling price.
  4. Add a column named Wholesale and enter the supplier's wholesale price for each product.
  5. Add a column named Spread with the formula Price minus Wholesale.
  6. Sort the Spread column from low to high.
  7. Find products where the spread is too small to cover shipping cost, which you can estimate with a freight quote.
  8. For each such product, either raise the price or remove it from the store. [L0965, 2024]

### Per-product profitability screening

- **Confirm before you scale.** Before you scale a product, product category or brand, confirm it is profitable. Track this in a spreadsheet or similar tool, and choose the method based on how many products you sell. [L0920, 2018]
- **Best sellers only.** Run the per-product calculation only for your best sellers. A catalogue of several hundred products usually has fewer than 20 that sell well, and these give the biggest return on the effort. [L0686, 2021-22] **
- **First screen vs decision.** A MAP divided by 2 gives only a ballpark wholesale cost. It is good enough for a first screen but not for decisions. Use the supplier's actual price list and real shipping quotes before you commit. [L0961, 2020] **
- **Two-step screen.**
  1. Spread = MAP − wholesale; spread − estimated shipping = money left before ad spend.
  2. Check whether what remains covers an ad budget of about 10% of the product price while keeping a good margin. [L1115, 2024]
- **Non-MAP screen.** Use a target of at least 50% margin on wholesale as the benchmark. [L1115, 2024]
- **Break-even ROAS screen.** Pick only products with a break-even ROAS of about 1.4 to 1.5 or lower. [L0692, 2023]
- **Test gate.** Test a product with paid ads only if the margin calculator supports it. Read the Insufficient tier as a stop. [L0987, 2025-26]
- **Break-even CPA.** Calculate break-even CPA from the margin before a test can be called profitable or not. [L1124, 2026]
- **Pricing research inputs.** For each product record MSRP/RRP, MAP, competitor price and competitor shipping charge. Compare your price with the competitor price to see room to price higher or lower. [L1148, 2021-22; L1159, 2023+]
- **Stress test.** Run the transit-refund-discount test before listing. [L1148, 2021-22]
- **Channel fees.** On high-ticket products, check percentage commissions against the sale price before choosing the channel. [L0738, 2021-22]


Part 4 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/03-unit-economics-margin-cogs-and-net-profit-per-sale.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/05-cost-of-goods-shipping-and-tax-per-order.md
