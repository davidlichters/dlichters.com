<!-- part of ecom/deep/19-metrics-finance-and-tracking.md -->
Part 5 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/04-returns-refunds-and-chargebacks.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/06-break-even-and-target-roas-cpa-and-allowable-ad-sp.md

### Cost of goods, shipping and tax per order

- **COGS (cost of goods sold)** is the exact price paid to the supplier for the product units in that order, taken from the supplier invoice. Shipping and fees are not included, because they have their own columns. [L1202, 2021+]
- **Shipping** is the amount you paid to move the order, whether to the supplier, a freight broker, UPS or FedEx, not what the customer paid. If you offer free shipping, enter your own shipping cost anyway and keep the customer's payment in Customer Paid. [L1202, 2021+]
- **Shipping must always be in the supplier total.** Leaving it out overstates net profit, even when the shipping is paid to a third-party freight forwarder or UPS on your own account. [L1201, 2021-22]
- **Margins must be calculated after shipping**, not only on product price and supplier cost, because shipping can make a sale unprofitable. [L1246, 2021-22]
- **Tax Collected** is sales tax that Shopify collected from the customer. It is not your money and must be deducted. Check the order in the Shopify dashboard and enter the exact amount; enter 0 if no tax was collected. [L1202, 2021+]
- **Cost of goods** equals product price plus shipping costs plus import costs plus any taxes due on delivery. Payment processing fees must be included too, for example Shopify processing fees of about 2.4% of the transaction. Include all of these before deciding whether a product is profitable. [L1215, 2023+]

### Processing and merchant fees

- **Per-transaction fees add up.** Fixed fees such as about $0.30 per order grow quickly at high order volumes, so they belong in every margin calculation alongside percentage fees. [L1213, 2023]
- **Fee rates differ by source. Use the rate that matches your processor:**

| Basis | Rate | When it applies | Source |
|---|---|---|---|
| Standard Shopify rate built into the margin sheet | 2.9% of Customer Paid + $0.30 per transaction | Default for the sheet; if you use another merchant account with other rates, change the fee calculation at the top of the sheet rather than overwriting the cell | [L1202, 2021+] |
| Shopify Payments, worked example | 2.9% + $0.30 (for 1,000: 29.30) | Shopify Payments examples | [L1201, 2021-22] |
| Shopify processing fee, one source | About 2.4% of the transaction (100 USD order: about 2.40 USD) | Figure used in the one source course; the source gives no fixed-fee component | [L1215, 2023+] |
| PayPal, worked example | 14.80 on a 500 order | Example of a PayPal fee on a thin-margin order | [L1201, 2021-22] |

- **Processor fee formula:** Order amount × processor percentage + the processor's static fee. [L1201, 2021-22]
- **Merchant fees per order** on the standard sheet = 2.9% of Customer Paid + $0.30 per transaction. This is the standard Shopify rate and is already built into the sheet's formula. [L1202, 2021+]
- **Fraud insurance fee** = order amount × insurance percentage. Example: 1% fraud insurance on 1,000 = 10. [L1201, 2021-22]
- **Payment processing fees** and other small fees are deducted before the sale price is counted as received. [L1481, 2021-22]

### Gross and net profit per sale

- **Gross profit (before overheads)** = selling price − supplier purchase price. Example: $3,000 sale minus $2,000 supplier cost leaves about $1,000 to cover operating costs. [L1481, 2021-22]
- **Gross profit (order-level)** = order amount received − supplier total (product cost plus shipping). Example: 1,000 − 600 = 400. [L1201, 2021-22]
- **Gross profit for pricing** is measured after all per-order costs, not just product cost. Using only product cost overstates the margin and leads to prices that are too low. [L1182, 2026]
- **Net profit (order-level)** = order amount received − supplier total − payment processor fee − fraud insurance fee. Example: 1,000 − 600 − 29.30 − 10 = 360.70. Because the order amount is the amount actually received, the discount is not subtracted a second time. [L1201, 2021-22]
- **Net profit (per order, sheet)** = Customer Paid − COGS − Shipping − Tax Collected − Merchant Fees. [L1202, 2021+]
- **Net profit (full e-commerce formula)** = sale price − sales tax and duties (per region) − payment processing − customer acquisition cost (CAC, can be expressed as MER) − cost per unit of stock (supplier price) − inbound freight (air or sea) − 3PL pick and pack costs − last mile / courier cost − average refunds. 3PL storage costs can be left out of this per-order calculation because they are small and belong elsewhere. [L1404, 2025-26]
- **Net profit with overhead:** Overhead per order = monthly overhead ÷ monthly orders. Net profit per order = selling price − product cost (including product shipping and payment processor fees) − overhead per order. Overhead covers the Shopify subscription, virtual assistants, software and other fixed costs. Example: price $100, cost $60, monthly overhead $1,500 over 100 orders gives $15 overhead per order and $25 net profit. [L1357, 2018]
- **Per-order net profit is measured before ad spend and before fixed costs** such as Shopify subscriptions and app fees. It shows what each sale earns, not the store's final result. Ad spend and monthly fixed costs must be subtracted separately to see the real business profit. [L1202, 2021+]
- **Break-even price** is the selling price at which gross profit per order is zero after product cost, card fees, merchant fees, shipping and fulfilment are subtracted. Any price above it earns a margin, so the 70% target price must sit well above this break-even point. [L1182, 2026]

### Net margin and product margin

- **Net margin (order-level)** = net profit ÷ order amount. Example: 360.70 ÷ 1,000 = 36.07%. [L1201, 2021-22]
- **Net margin (sheet)** = Net Profit ÷ Customer Paid, shown as a percentage next to Net Profit. [L1202, 2021+]
- **Net margin on an order** = net profit ÷ amount the customer paid. Example: net profit 370.70 on an order of 1,000 gives 37.07%. [L1246, 2021-22]
- **Net margin (business definition)** = customer price − supplier cost − marketing spend − shipping cost (including free shipping you pay for) − transaction fees − any other cost of the sale. The remainder, as a percentage of the sale, is what stays in the business. [L1480, 2021-22]
- **Product margin** = (listing price − cost of goods) ÷ listing price. Example: $150 price and $35 cost gives 76.67%. [L1354, 2025-26]
- **Example from the lesson:** listing price $150, cost of goods $35 gives a product margin of 76.67%, a target cost per purchase of $115.00 and a break-even ROAS of 1.30 on Meta. [L1354, 2025-26]

**Worked examples**

| Example | Inputs | Result | Source |
|---|---|---|---|
| Good-margin order (Shopify Pay) | Paid 1,000; 50 discount; no sales tax; supplier total 600 incl. 100 shipping | Gross profit 400; processor fee 29.30; fraud insurance 10; total cost 639.30; net profit 360.70; net margin 36.07% | [L1201, 2021-22] |
| Multi-supplier order (Shopify Payments) | Paid 3,000; 300 discount; no sales tax; suppliers 1,500 and 500; combined supplier total 2,000 incl. 200 shipping (products 1,800) | Processor fee 87.30; fraud insurance 30; net profit 882.70; net margin 29.42% | [L1201, 2021-22] |
| Thin-margin order (PayPal) | Gross profit 25; PayPal fee 14.80; fraud insurance 5.00 (1% of 500) | Net profit 5.20; net margin 1.04% | [L1201, 2021-22] |
| Order 1002 (sheet) | Paid $1,000 after 10% off (recorded in Promotions Applied as reference only); COGS $500; shipping $100; no tax; merchant fees $29.30 | Net profit $370.70, shown as $371; net margin just over 37% | [L1202, 2021+] |

### Margin targets and benchmarks

- **Typical high-ticket net margin** is usually between 10% and 30%, and on average closer to 20%. This is the margin after all costs of the sale, not just the product price. [L1480, 2021-22]
- **Judge the business by net margin**, not gross margin. Net margin is what remains after supplier cost, marketing, shipping and transaction fees. Financial tracking and the terms behind it should be set up properly from the start. [L1480, 2021-22]
- **Keep a 3% to 5% gap** in your margin for losses from returns, chargebacks, disputes and payment fees. These costs appear on top of product cost and shipping. [L1213, 2023]
- **Expected versus actual margin:** a store that expected a 20% margin for a full month ended with about 10% to 11% after cash issues and missed costs. Track actual costs per order instead of relying on expected margins. [L1213, 2023]
- **Minimum profit per product:** require about 20 euros per product, because ad costs keep rising and smaller margins will not cover them. Products below this margin are not worth the testing risk. [L1215, 2023+]
- **Health check:** if margins look weak, change the product, the supplier, the price or the discount before scaling ads. Winners are identified the same way, by comparing margins across orders. [L1202, 2021+]
- **Compare net margins** across suppliers and across products from the same supplier, because profit per order varies between both. [L1201, 2021-22]

### Supplier price and wholesale margin

- **Judge supplier margins against ad costs and price spread.** If competitors sell at a 10 percent markup, there is often not enough margin left for profitable advertising. [L1283, 2023]
- **Spread** = selling price − wholesale cost. Net per product = spread − estimated shipping cost. Net is the money left to fund ad spend, so a product with negative or tiny net cannot be run on ads profitably. [L1285, 2024]
- **Verify marketplace commission rates** on the platform's own fee page for your product category before setting prices. Commission rates change over time and differ by category. Using old figures from memory can leave margins negative on low-priced products. [L1441, 2018]

### Channel fees and cost categories

- **Track each sales channel's fees and margin separately.** A product profitable on one channel can lose money on another. Recalculate margins before expanding a catalogue to a new marketplace. [L1441, 2018]
- **Profit calculations must include:** product cost, product shipping, dropshipping fees, handling fees, payment processor fees and paid advertising. In dropshipping, paid advertising is the cost most often left out. [L1357, 2018]

### Returns, chargebacks and refund buffers

- **Keep the 3% to 5% buffer** for returns, chargebacks, disputes and payment fees on top of product cost and shipping. [L1213, 2023]
- **Jewellery** is a low-return category, with return rates typically under 5 percent per month. Returns are mostly caused by sizing issues, such as rings or necklaces that do not fit well. [L1215, 2023+]
- **Footwear:** do not assume zero refunds for shoes. Calculate an expected refund rate into the margin before setting the price. Footwear refunds are a normal cost of the category. [L1219, undated]
- **Average refunds** are a deduction in the full per-order profit formula. [L1404, 2025-26]

### Shipping and bulky-item checks

1. Get a real shipping figure for each product. Shipping cost depends on the distance between the supplier warehouse and the customer, so use an averaged estimate per product. The lesson used a hypothetical $150 average as a placeholder; replace it with real carrier or supplier quotes. [L1285, 2024]
2. Subtract estimated shipping from the spread to get net per product. [L1285, 2024]
3. Check that shipping is in the supplier total and in the net margin before any ad spend. [L1201, 2021-22; L1246, 2021-22]
- **Costs that also apply in the per-order view:** inbound freight (air or sea), 3PL pick and pack, and last mile / courier cost. [L1404, 2025-26]
- **Build the profit sheet per SKU and per region.** Tax, payment, freight, duty and 3PL rates differ by region. Steps: enter the product cost and stock rate; convert to USD using the exchange rate; add inbound freight, payment charges, pick-pack, last mile, refunds and the offer discount to get gross margin per unit. [L1404, 2025-26]
- **BOGO on the same product:** divide the shipping cost (last mile and pick-pack) by two units when calculating per-unit margin, because two items go in one parcel. Dollar-off and percentage-off offers do not change the per-unit shipping cost, but free-gift and BOGO offers do. [L1404, 2025-26]
- **BOGO on the same product:** the effective discount per unit is 50% of the price. The final RRP per unit is the price the customer pays for each item after the discount; gross margin is computed from that. [L1404, 2025-26]

### Calculators and spreadsheets

- **Edit only the input cells.** Do not change any cell marked in red in the margin spreadsheet, because those cells hold the built-in calculations. Only the product cost and selling price input cells should be edited. [L1182, 2026]
- **Compare bundle options** using the conditional formatting rule "Highlight cells greater than the average" on the market and quantity rows (for example US Qty 1, Qty 2 and Qty 3), before choosing a final price. [L1182, 2026]
- **Choose the level of profitability tracking** that fits the catalogue size: per product if you sell only a handful of products, per brand if you sell hundreds of thousands. A spreadsheet or a Shopify app can do this tracking. [L1357, 2018]
- **Use a fixed-fee rate change at the top of the sheet** if your merchant account has other rates, instead of overwriting the cell. [L1202, 2021+]

### Per-product profitability screening

**Procedure: check which products can carry ads before spending on them**

1. Export all products from Shopify as a CSV. This does not delete or change anything.
2. Add a column with the wholesale price from each supplier.
3. Add a column called spread (selling price minus wholesale price).
4. Add a column with an estimated shipping cost per product.
5. Add a column called net (spread minus shipping).
6. Sort by net. Products with negative or very thin net are losing products for paid traffic. [L1285, 2024]

- **Check net margin per product** before the first ad dollar is spent. Spending thousands on ads for products without enough margin after shipping burns budget with no path to profit. [L1285, 2024]
- **Track ad spend at a level more specific than the whole business.** A product or brand can be a net loss that only shows up once its advertising cost is included; without this you can lose money unknowingly. [L1357, 2018]
- **Focus ad budget and time** on products that produce high profit per order. Products that earn little, break even or lose money should get less ad spend, be removed, or be repriced. [L1201, 2021-22]
- **Profit per order differs** between suppliers and between products from the same supplier. [L1201, 2021-22]
- **Know your own unit economics**, because they differ for every business. Without them you cannot judge when to scale Meta ads, when to cut ads, or whether a product will work at all. [L1354, 2025-26]
- **Avoid offers that break the margin.** Brands often launch offers such as a BOGO at a 25-30% MER without adjusting the marketing spend target, then lose money for the month. They also skip proper triple-whale setup and daily profit tracking, so they do not notice the loss on each order. [L1404, 2025-26]

#### Further details

- Discounted price = original price x (1 - discount rate). For example, a 6.5% discount on a price is calculated as the price x 0.935. [L1000, 2017]

- Use a store margin check before adding a product: the price must cover the product, shipping, payment processing and an ad budget, leaving a net profit. If the spread is too small, look for better supplier pricing or drop the product. [L1086, 2019]


Part 5 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/04-returns-refunds-and-chargebacks.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/06-break-even-and-target-roas-cpa-and-allowable-ad-sp.md
