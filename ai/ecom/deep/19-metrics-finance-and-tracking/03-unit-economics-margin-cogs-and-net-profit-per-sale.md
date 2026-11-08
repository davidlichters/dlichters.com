<!-- part of ecom/deep/19-metrics-finance-and-tracking.md -->
Part 3 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/02-beginner-versus-advanced-finance-path.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/04-returns-refunds-and-chargebacks.md

## Unit economics: margin, COGS and net profit per sale

### Cost of goods sold: what goes into it

- **Definition.** Cost of goods sold (COGS) is the supplier's purchase price for a product, paid only after a sale. In the example, a product sold for 1,000 USD cost 400 USD in COGS. [L0759, 2020-26]
- **Share of revenue.** Track COGS as a percentage of revenue as well as a dollar figure. One unit calls COGS of 25% of revenue high and says to reduce it where possible. [L0208, 2024+; L0327, 2020-26]
- **Benchmark conflict.** Other units treat about 50% of selling price as the typical COGS ratio and the upper limit for a healthy product. [L1179, 2020-26; L0664, 2020] The units do not say which products or channels each figure fits, so use the 25% figure as a direction for reducing cost and the 50% figure as the ceiling for the first check.
- **Dropshipping.** COGS is the product price plus the shipping price to the customer's country, both taken from the supplier's price list. Shipping must always be included, otherwise margin calculations are overstated. [L0445, undated; L0875, undated]
- **PPC definition.** COGS includes all costs to produce and deliver: manufacturer or wholesale cost, taxes, payment processing fees, fulfilment and shipping. Express COGS both as a dollar amount and as a percentage of revenue. [L0327, 2020-26]
- **Blended definition.** Blended COGS includes every cost of fulfilling an order: product, packaging, freight, fees and 3PL charges. It excludes ad spend, which is handled after the gross profit line as customer acquisition cost. [L0433, 2025-26]
- **Full cost per sale.** The unit cost for a per-sale calculation is the full cost of a sale before marketing: product cost, shipping, customer service wages and all other overheads allocated to each sale. Leaving any of these out inflates apparent profit and affordable ad spend. [L0446, 2021-22] **
- **Own shipping.** When you ship on your own account, COGS comes from the supplier and shipping comes from a carrier. Match both to each order to calculate profit per order. [L0803, 2022] **
- **Fees in COGS.** The sources differ on whether payment fees sit inside COGS. The PPC and blended definitions include them [L0327, 2020-26; L0433, 2025-26]; the full-cost-per-order formula lists processor fees as a separate line [L0920, 2018]. For per-sale decisions use the full figure, and for the first screen use product cost alone and then add ads, shipping and other costs. [L0664, 2020; L0920, 2018]

### Keeping cost data accurate

- Enter accurate COGS for every SKU in Shopify's product cost fields before building any calculator. Triple Whale and spreadsheet calculators take these values as the baseline, so wrong values distort every later metric. [L0433, 2025-26]
- In Shopify's product editor, the Pricing section's Cost per item field is hidden from customers and used internally. Once entered, Shopify shows Margin and Profit for the product. Demo products that are never sold can skip it. [L0452, 2021-22] **
- Track COGS for every offer continuously. If COGS rises, raise the price so margin stays intact. Example: a 13 USD cost on a 29.90 price that rises to 20 USD could justify a price of 39.90. [L0502, 2020+]
- Do not treat a guessed cost as fact. A cost of about 20 cents per bar was an unverified estimate; use the real landed cost from the supplier. [L0524, 2023]
- Freight quotes show the product price per unit and the shipping cost for each country (for example US, Canada, Australia, UK). Shipping prices differ by destination. [L0685, undated]
- Enter COGS and selling price for every product. The gap between them sets margin and break-even ROAS. Compare your selling price with the competitor price to see whether you can price higher or lower. [L1159, 2023+]

### Overhead and full cost per order

- **Full cost per order** = product cost + shipping costs + shipping/handling fees + payment processor fees + paid advertising spend on Google, Bing, Facebook and Pinterest. Use this figure, not product cost alone, to judge profitability. [L0920, 2018]
- **Overhead per order** = average monthly overhead ÷ average monthly orders. Overhead includes Shopify, software, virtual assistants and similar fixed costs. Example: $1,500 monthly overhead ÷ 100 orders = $15 overhead per order. [L0920, 2018]
- **Net profit per order** = product list price − (product cost + shipping/handling + payment processor fee) − overhead per order. Example: $100 list price − $60 for product, shipping/handling and payment fees − $15 overhead = $25 net profit. [L0920, 2018]
- **Hidden loss.** A brand can look profitable without paid advertising and still lose money once total paid ad spend is added. Test profitability with aggregate ad spend included. [L0920, 2018]
- **Fixed costs.** Include the yearly domain fee, monthly billed Shopify apps, virtual assistant wages and any other recurring overhead. Spread them over expected sales so each sale carries its share. [L0436, undated]
- **Cost list.** Use a spreadsheet to list all supplier, fee, acquisition, fixed and return costs, so you see the complete picture per month and per sale. [L0436, undated]
- **Own time.** Cover the monthly Shopify subscription and your own time too, because a per-order check alone tends to overstate profit. [L0834, 2021] **
- **Sale overheads.** Every sale carries costs beyond the product and the ad: payment gateway fees, a share of app, virtual assistant and platform subscriptions, shipping and similar overheads. All are paid from the gross profit of that sale, so know each one and how much gross profit each sale can carry for ads. [L0446, 2021-22] **
- **Storage and customer shipping.** Customer shipping and storage costs must both be built into pricing and margin before launch. A product that looks profitable on paper can lose its margin once logistics are paid. [L1154, 2021-22] **

### Gross margin and the cost-to-price check

- **Gross margin** = revenue − COGS. Example: a MAP of 800 with wholesale of 400 leaves 400 before shipping, ads and other costs. [L0934, 2023]
- **Gross margin on MAP.** (MAP − wholesale) ÷ MAP. With MAP 1,000, wholesale 500 gives 50%; wholesale 700 gives 30%. That 30% is a gross figure, not the same as 30% net profit after shipping and ad costs. [L0966, 2025]
- **Gross profit before ads.** Selling price − sourcing cost − any shipping you absorb. Example: a 9.99 USD sale price − a 6 USD sourcing cost leaves 3.99 USD per sale before ads and fees. [L1176, 2023]
- **Gross margin per sale (2019).** Retail price − wholesale cost − shipping cost. Example: $699 − $530 = $169 before shipping; $200 shipping turns that into a loss of $31. [L1002, 2019] **
- **First cost check.** The supplier's cost should be about 50% of the selling price or less. At a $1,000 selling price, product cost should be $500 or lower. This is the first margin check, before counting ads, shipping and other costs. [L0664, 2020]
- **Wholesale rule (2021).** Wholesale cost should be at most half the retail price. Then subtract shipping, card processing at about 2.9% and advertising. Example: on a 1,000 dollar product, wholesale should be 500 dollars or less. [L0968, 2021] **
- **Multiplier check.** Check the wholesale-to-MAP multiplier first when reviewing a product's margin. [L0671, 2021] **
- **Average COGS.** COGS averages about 50% of the selling price.
  - Gross margin (GM) = selling price − COGS
  - Net profit = gross margin − shipping cost
  - Net margin (%) = net profit ÷ selling price × 100 [L1179, 2020-26]

| Scenario | Selling price | COGS (50%) | Gross margin | Shipping (average) | Net profit | Net margin |
|---|---|---|---|---|---|---|
| Folding table | $500 | $250 | $250 | $250 | $0 | 0% | [L1179, 2020-26]
| Premium dining table | $1,500 | $750 | $750 | $250 | $500 | 33% | [L1179, 2020-26]

- **Ad budget per product.** Decide the ad budget from the amount left after wholesale and shipping are subtracted from MAP. Calculate this before setting any ad spend. [L0934, 2023]
- **Non-MAP products.** For non-MAP suppliers, a target of at least 50% margin based on wholesale is the benchmark. On average this means MAP is about double the wholesale price. [L1115, 2024]
- **Spread and remaining money.** Spread = MAP − wholesale. Spread − estimated shipping = money left before ad spend. Then check whether what remains can cover an ad budget of about 10% of the product price while keeping a good margin. [L1115, 2024]
- **Discounts.** Net profit after COGS and fees = sale price − COGS − credit card fees − shipping − ad cost. Discounts are not subtracted again separately, because they already reduce the sale price. [L0969, 2022] **
- **Discount and card fee example.** The source's example: a 10% discount on an item with a 20% margin, plus a 3% card fee, leaves 7%. Check margins after all fees. [L0969, 2022] **
- **Markup vs margin.** Wholesale 500 × 1.3 = 650 is a 30% markup on cost. A 30% margin on a 1,000 selling price (2× wholesale) leaves about 300 after COGS, fees, shipping and ads. Do not confuse the two. [L0969, 2022] **

### Net profit per sale: formulas by source

Each formula is kept with its example. Where two units state the same formula, they are merged and both ids are kept.

- **Dropshipping average (undated).** Net profit per sale = sale price × average net profit margin. For drop shipping an average net margin of about 30% is assumed: a $10 product keeps about $3 per sale, and a $1,000 product keeps about $300 per sale. [L0474, 2020-26]
- **Order formula (2020).** Net profit per order = selling price − wholesale cost − shipping cost − order processing fee − advertising cost per acquired customer. Example: 2,500 − 1,250 − 400 − about 50 (processing) − 100 (ads) leaves about 700 dollars. [L0551, 2020] **
- **All-in cost (2020).** All-in cost per product = wholesale cost + free shipping + about 2.9% credit card merchant fee + app and other fixed monthly costs + ad spend per sale. Target a net margin of about 30% after all of these. Example: on a $1,000 MAP, total all-in cost should not exceed $700, leaving about $300 net. [L0358, 2020] **
- **Cheap vs premium (2020).** On a $1,000 MAP product with a $500 wholesale cost, $500 remains to cover shipping, merchant fees, fixed costs such as apps and Shopify, and ad costs. On a $200 to $500 product the amount left shrinks, so shipping and ad spend must be tightly controlled. Shipping can be cut by comparing rates from different freight carriers. [L0358, 2020] **
- **Revenue-based formula (undated).** Net profit = revenue − ad spend − (product + shipping cost) − payment processor fees (e.g. Stripe, PayPal) − app fees − other expenses − returns and refunds. Profit percentage = net profit ÷ revenue. Example: revenue $1,000, ad spend $500, product plus shipping $300, with fees and refunds subtracted, shows the real margin. [L0645, 2023]
- **Tracker formula (undated).** Profit = revenue − all expenses. Profit percentage = profit ÷ revenue. Expenses in the tracker: refunds, COGS (product plus shipping), ad spend, payment processing fees, and Shopify fees (add about 1% if Shopify Payments is not used). [L0445, undated]
- **Profit per order (2021).** Selling price − supplier wholesale cost − card processing fees (about 2.9%) − advertising cost per sale − shipping cost, if you offer free shipping. [L0671, 2021] **
  - Example: a $500 item costing $250 leaves $250; a $3,000 item costing $1,500 leaves $1,500.
  - If free shipping costs about $300 on a large item, the cheap item drops to about $50 and the expensive one keeps about $1,200. [L0671, 2021] **
- **MAP formula (2023).** Net profit per order = MAP price − wholesale cost − shipping cost − average ad cost − Shopify and app fees − other overhead. Target about 25% net operating profit after all expenses, and accept no less than about 20%. [L0934, 2023]
  - Example: MAP $1,000, wholesale $500 (half of MAP), free shipping $150 and average ad cost about $80 leave $270 before Shopify and other costs.
  - Correction: the intermediate step of $300 after shipping is a subtraction error, since 500 − 150 = 350. [L0934, 2023]
- **Net profit per sale (2019).** Selling price − product cost − shipping − payment processing − ad cost per sale. Example with a $1,000 MAP sale: 1,000 − 500 − 100 − 30 − 70 = $300 net profit. [L1086, 2019] **
- **Card-fee formula (2019).** Net profit per order = sale price − wholesale cost − shipping cost − ad cost per sale − credit card fee, where the card fee is about 2.9% of the sale price. Example: at a MAP of 2,000 USD and wholesale of 1,000 USD, the card fee is about 58 USD before shipping and ads. The exact margin is only known after real sales, so calculate actual net profit for each order as orders come in. [L1110, 2019] **
- **Net profit per order after COGS and shipping (undated).** Net profit per order = selling price − COGS − shipping cost. Customer acquisition cost, payment processing fees and the seller's own time also reduce the result and must be subtracted where they apply. [L1180, 2020-26]
  - Example: a $5,000 sale with $2,000 COGS and $1,000 shipping leaves $2,000 profit, before any customer acquisition or fees.
  - Even a very expensive, heavy item can be profitable if the price covers these costs. [L1180, 2020-26]
- **Pricing-sheet formulas (2021-22).**
  - Gross profit = (list price + shipping paid by customer) − supplier cost − supplier shipping cost
  - Net profit = gross profit − payment processor fee − insurance fee
  - Payment processor fee = (fee % × total received) + static fee per transaction
  - Insurance fee = insurance % × total received
  - Gross margin = gross profit ÷ total received
  - Net margin = net profit ÷ total received
  - Example check: fee on $1,000 at 2.9% + $0.30 = $29.30. [L1148, 2021-22] **
- **Worked case: the sheet's examples (2021-22).**
  - Product A: list $1,000, supplier cost $600, supplier shipping $150, free shipping to customer. Gross profit $250 (25% gross margin). After the $29.30 processor fee, net profit is $220.70, a 22.07% net margin. [L1148, 2021-22]
  - Product B: list $2,500, supplier cost $1,750, supplier shipping $250, free shipping. Gross profit $500 (20% gross margin). After the $72.80 processor fee, net profit is $427.20, a 17.09% net margin. [L1148, 2021-22]
  - Adding a 1% insurance fee: Product A drops from $220.70 to $210.70 (21.07%), and Product B from $427.20 to $402.20 (16.09%). [L1148, 2021-22]

### Card processing, payment and platform fees

- **Card fee rule.** Include the card processing fee in every margin calculation: about 2.9% plus $0.30 per transaction. [L0834, 2021; L0855, 2023] *([L0834, 2021] is older advice, 2021)*
- **Single sale.** On a 1,000 USD sale, the card fee is 29.30 USD (2.9% + 0.30 USD). This lowers the 370 USD profit example to about 340.70 USD. Card fees are easy to forget on a single sale. [L0759, 2020-26]
- **Batch.** 50 orders worth 50,000 USD carry 1,465 USD in fees: 2.9% of 50,000 is 1,450 USD, plus 0.30 USD per transaction for 15 USD. Net profit after fees and before ad spend falls from 19,970 USD to 18,505 USD. Note that 2.9% of 50,000 is 1,450, not 1,400. [L0759, 2020-26]
- **Other processor rates.**
  - PayPal and Stripe charge roughly 1.5% to 3% per transaction, so this fee must be built into every price. [L0436, undated]
  - Break-even figures need a blended figure of about 4% on average, covering Shopify Payments, Stripe or PayPal. [L0445, undated]
  - one source' calculator uses a gateway of 5.5% + $0.30 per order. [L0986, 2026] Use the figure your own processor charges; the 2.9% + $0.30 standard above is the typical new-seller rate. [L0148, undated; uncertain]
- **one source gateway formula (code, verbatim).**

```
Gateway = Price On Site x 5.5% + 0.30
Total Cost For Us = COGS + Pick N Pack + Shipping + Gateway
Total Paid / Total Rev = Price On Site + Shipping Price
Margin $ = Total Rev - Total Cost For Us
Margin % = Margin $ / Total Rev
```

  Example, buy 1 at $40 with $8 COGS, $0 Pick N Pack, $0 Shipping and $3 shipping charged: Gateway = 40 × 5.5% + 0.30 = 2.50; Total Cost = 8 + 0 + 0 + 2.50 = 10.50; Total Rev = 40 + 3 = 43; Margin $ = 43 − 10.50 = 32.50; Margin % = 32.50 ÷ 43 = 75.58%. [L0986, 2026]
- **Shopify plan costs.** Shopify costs include a monthly plan fee and, depending on the chosen plan, an additional charge per sale. Both belong in the cost calculation. [L0436, undated]
- **Shopify transaction fee.** One seller reported a Shopify transaction fee of 2.3% on the plan they were on, against a normal rate of 2.5%, and expected to pay the higher rate the following month. [L1127, 2024]
- **Third-party processors.** Payment processors outside Shopify Payments (Stripe, Square and others) charge 1% of transaction value on top. [L0251, 2023] Shopify fees add about 1% if Shopify Payments is not used. [L0445, undated]
- **Plan switch break-even (2021-22).** Break-even monthly sales for a higher Shopify plan = monthly plan price difference ÷ difference in transaction fee rate. Example: a USD 50 price gap with a 1 percentage point fee gap breaks even at USD 5,000 in monthly sales. The lesson's rough estimate of USD 30,000 to 40,000 monthly revenue for switching implies a fee gap of only about 0.13 to 0.17 percentage points, so check the real fee gap before deciding. [L0370, 2021-22] **
- **Hidden costs in break-even.** Break-even figures must include payment processing fees, app fees, Shopify transaction fees and VAT. Ignoring these makes the break-even ROAS too low. [L0445, undated]
- **Commissions (2021-22).** Commission cost per sale = sale price × commission rate. Example: a $6,000 sale at 10% costs $600 in fees. Percentage commissions make high-ticket products expensive to sell through this channel. [L0738, 2021-22] **
- **Tax-inclusive revenue.** Ad platforms report revenue including tax. Start from the tax-inclusive average order value and then remove sales tax, otherwise tax inflates profit: a $200 product with $10 tax shows as $210 in Facebook. [L0433, 2025-26]
- **Shipping fee to customer.** A shipping fee of $4.99 does not significantly reduce conversion. Customers are less price-sensitive to shipping than sellers assume, so charging shipping on lower tiers protects margins without hurting conversions. [L0232, 2026]
- **Chargebacks and refunds.** If chargebacks and refunds become too high, the payment processor may close the account. Track the chargeback and refund rate and act early to keep it low. [L1128, 2023]
- **Optional insurance.** The pricing sheet has an insurance fee percentage, applied only if you use fraud insurance (for example 1%). [L1148, 2021-22]

### Shipping, freight and bulky items

- **Shipping always in.** Shipping in dropshipping is part of COGS. Break-even calculations that leave out shipping, payment fees or app fees give an overly optimistic margin. Include them before scaling. [L0875, undated]
- **Free shipping.** Free shipping is a cost. Net margin calculations subtract it, and the all-in cost includes it. [L0358, 2020; L0671, 2021]
- **Shipping as a lever.** Ad spend and ROAS are usually the largest costs and the biggest levers for net margin. Shipping costs are the second lever, especially for freight shipments. [L1111, 2020]
- **Shipping quotes.** Shipping prices differ by destination, so quote several. [L0685, undated]
- **Mid-priced heavy items.** Watch mid-priced but heavy or bulky products, since shipping can wipe out the margin. Example: an item bought for $200 and sold for $400 loses money if shipping costs $200. [L1086, 2019] **
- **Small margin gap.** A product with a MAP of 300 USD and an estimated wholesale of 150 USD leaves about 50 USD after 100 USD shipping for ads, the 2.9% merchant fee and other costs. That is a weak choice unless its shipping is cheaper. [L0961, 2020] **
- **Worked example: MAP 1,000 vs MAP 400.** Both have 150 USD shipping, COGS at 50% of MAP and ad budget at 10% of MAP.
  - The 1,000 item keeps 500 after cost, 400 after ads and 250 after shipping.
  - The 400 item keeps 200 after cost, 160 after ads and only 10 after shipping.
  - Heavy or bulky products fail when the gap between MAP and wholesale is too small to absorb shipping and ads. [L0359, 2020] **
- **Accessory check (2021-22).** Before deciding on an accessory, calculate the real margin after shipping, all platform fees and CapEx. Example: a $30 product with a 30% margin leaves $21; shipping of about $8 turns it into a loss once fees and CapEx are subtracted. [L1152, 2021-22] **
- **Transit stress test (2021-22).** Stress-test each product for a transit problem that ends in a refund combined with a discount. That combination can wipe out remaining profit on a product that already has high shipping costs. Products that fail should be repriced, renegotiated or dropped before listing. [L1148, 2021-22] **
- **Shipping estimate procedure.** Use this procedure before launching a product:
  1. Ask the supplier for shipping quotes to a few destination cities, such as New York and Los Angeles, when the supplier ships on its own account.
  2. If you ship on your own account, use a freight quote comparison site, enter the supplier's warehouse address or zip code, then request estimates for several zip codes across the U.S.
  3. Average the estimates to get a shipping figure for the profit spreadsheet. [L1115, 2024]
- **Freight tool.** FreightCenter.com offers free instant freight quotes. Enter the product size and weight, the supplier's warehouse location and several US zip codes to estimate shipping cost and check whether the spread covers it. [L0965, 2024]


Part 3 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/02-beginner-versus-advanced-finance-path.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/04-returns-refunds-and-chargebacks.md
