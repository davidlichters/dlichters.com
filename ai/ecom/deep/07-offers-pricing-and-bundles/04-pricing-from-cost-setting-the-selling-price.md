<!-- part of ecom/deep/07-offers-pricing-and-bundles.md -->
Part 4 of 40 of "7. Offers Pricing and Bundles: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles.md · Previous: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/03-unit-economics-and-margin-math.md · Next: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/05-setting-the-base-selling-price.md

### Pricing from cost: setting the selling price

- Selling price = total cost per order ÷ (1 − target margin). Total cost per order includes product cost, credit card fees, merchant account fees, shipping and fulfilment cost per unit. For a 70% margin, price = total cost ÷ 0.30. [L1182, 2026]
- Example: for a product costing $8 with a 70% margin target, raise the price until margin reaches 70% after fees, shipping and fulfilment are added. The sheet shows the resulting selling price and margin, which you check against the 67-70% range before using the price. [L1182, 2026]
- Set the selling price so that gross margin reaches 70% of the price, the main pricing target for every product. If 70% is not reachable, 69%, 68% or 67% is the acceptable minimum. [L1182, 2026]
- Gross margin on the calculator target applies to offers; use the product-level benchmarks above when screening products. The two measure different bases, and a product with product cost at 50% of price will not reach 70% after fees. [L0986, 2026; L1182, 2026; L0551, 2020]
- Price the product at about three times the wholesale cost when it is not MAP-protected and still worth listing. *Older advice (2019).* [L1069, 2019]

**Procedure: fix a product that shows no profit at MAP with flat-rate shipping** **

1. Calculate the profit per sale as the selling price minus the wholesale cost minus the flat-rate shipping cost. [L1069, 2019]
2. If the profit is zero or negative, ask the supplier's sales rep whether a different price list applies to your account. [L1069, 2019]
3. If no different price list exists and competitors sell at break-even, do not list the product. [L1069, 2019]
4. If the product is still worth listing and is not MAP-protected, price it at about three times the wholesale cost, do not run Google ads on it, and rely on organic sales. [L1069, 2019]

### Offers, bundles and discounts

- Every offer must make financial sense. The free item or gift must be affordable, and the offer must still produce profit after ad spend and product costs. [L0650, undated]
- An offer can never reduce the price to zero. Each discount, free item or bonus must still cover product cost, shipping and ad spend, so calculate the margin before running it. A free gift only makes sense when its cost is low compared with the order value it is tied to. [L1204, 2022]
- Example of a cheap novelty product: sold at $13 with a supplier cost of $2 to $3 from AliExpress, leaving roughly $10 gross margin per unit before fees. The presenter judged this healthy for a low-return, low-risk item. [L0655, undated]
- Product cost examples for a bundle: a necklace costs about $4-5 to make, a jewellery box about $1, and a three-item bundle about $13, giving a margin of about $17 on a $29.90 price. [L0502, 2020+]
- Bundles for buy-X-get-Y: enter the total supplier cost of all units in the bundle and the total price the customer pays, not per-unit figures. Mixing per-unit cost with bundle price distorts margin and break-even ROAS. [L0986, 2026]
- For a buy-X-get-Y offer, Price Before Discounts must be the full price of every unit in the bundle, including the free units. With a single unit at $40, Buy 2 get 1 free uses $120 here. An $80 Price On Site then shows a $40 saving and a Savings % of 33.33%. [L0986, 2026]
- Enter Price Before Discounts as the compare-at (strike-through) price the store displays next to the sale price, because the sheet calculates Savings and Savings % from it. The savings then match the discount shoppers see on the product page. [L0986, 2026]
- To compare a bundle with a single unit, divide the bundle's Price On Site and its COGS by all units in the bundle, including free ones. For Buy 2 get 1 free at $80 price on site and $18 COGS across 3 units, this gives about $26.67 revenue and $6.00 cost per unit, against $40 for a single unit. [L0986, 2026]
- Discount test example: Product B, with $450 supplier shipping and free customer shipping, drops to $300 gross profit (12% gross margin) and $202.20 net profit (8.09% net margin) after fees. With a 5% discount, gross profit is $175; with 10%, $50; with 15%, −$75. *Older advice (2021-22 course).* [L1148, 2021-22]
- New stores often do not sell at a profit at first and may only break even. The list price, supplier cost, negotiated supplier cost, and whether shipping is charged to the customer are all adjustable levers that take time to tune. *Older advice (2021-22 course).* [L1148, 2021-22]
- Test different price points and offer structures in the calculator before launching them, because each change moves margin, break-even ROAS and target CPA. Comparing scenarios on paper shows which offer can still pay for ads. [L0986, 2026]
- Bundles raise average order value, which improves profit per order. [L0440, 2023+; L0920, 2018]
- Discount-level spreadsheet: the build-phase product pricing sheet (Product / Supplier Pricing) takes each product's list price, supplier cost and shipping paid by the customer. It shows gross profit and gross margin at 5%, 10% and 15% off. Check it before any discount to see how much margin each level leaves. *Older advice (2021-22 course).* [L1246, 2021-22]

**Procedure: setting an offer for a new store with no sales history** **

1. Compare the MAP price of each product with its wholesale cost. [L1085, 2018]
2. Ask the supplier for sample shipping costs. [L1085, 2018]
3. Calculate the expected profit per sale from these numbers. [L1085, 2018]
4. Base the offer on that profit. Do not choose a discount without these figures. [L1085, 2018]

### Margin calculators and sheets

**Calculator procedure (Margins & Offers sheet)**

1. Make your own copy of the shared margin calculator sheet. [L0986, 2026]
2. List every offer you run or plan to test, such as Buy 1, Buy 2 get 1 free or Buy 3 get 2 free; the list depends on your product. [L0986, 2026]
3. For each offer, enter the COGS as the total supplier cost of all units the customer receives in that offer. [L0986, 2026]
4. Enter the Pick N Pack cost and the Shipping cost you pay; if shipping is already included in COGS, leave Shipping at 0. [L0986, 2026]
5. Check that the Gateway column uses your Shopify Payments rate, the standard example being 5.5% of the price plus $0.30. [L0986, 2026]
6. Enter Price On Site as the total the customer pays for the offer, for example $80 for Buy 2 get 1 free. [L0986, 2026]
7. If you charge shipping, enter the Shipping Price the customer pays. [L0986, 2026]
8. Read Total Paid / Total Rev, Margin $, Margin % and BE ROAS for the offer. [L0986, 2026]
9. Enter Price Before Discounts to see Savings and Savings %. [L0986, 2026]
10. Read Target CPA for 2+ ROAS and for 2.5+ ROAS. [L0986, 2026]
11. Confirm that Margin % is at least 70%. [L0986, 2026]
12. Fill every cell for each offer you run before you use its numbers. [L0986, 2026]

**The sheet and its columns**

- A Google Sheets margin calculator with a Margins & Offers tab lets you test several offer structures side by side. Each offer is one row, with columns for costs, price, shipping, gateway fee, margin, break-even ROAS, savings and target CPA. Use it to compare prices and bundle structures before you launch an offer. [L0986, 2026]
- Table: Margins & Offers tab, one row per offer, with a Current Offers header row above them. [L0986, 2026]

| # | Offer | COGS | Pick N Pack | Shipping | Gateway | Total Cost For Us | Price Before Discounts | Price On Site | Shipping Price | Total Paid / Total Rev | Margin $ | Margin % | BE ROAS | Savings | Savings % | Target CPA for 2+ ROAS | Target CPA for 2.5+ ROAS |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Buy 1 | 8.00 | 0.00 | 0.00 | 2.50 | 10.50 | 60.00 | 40.00 | 3.00 | 43.00 | 32.50 | 75.58% | 1.32 | 20.00 | 33.33% | 16.25 | 13.00 |
| | Buy 2 get 1 free | 18.00 | 0.00 | 0.00 | 4.70 | 22.70 | 120.00 | 80.00 | 3.00 | 83.00 | 60.30 | 72.65% | 1.38 | 40.00 | 33.33% | 30.15 | 24.12 |
| | Buy 3 get 2 free | blank | blank | blank | 0.30 | 0.30 | blank | blank | blank | 0.00 | -0.30 | #DIV/0! | #DIV/0! | 0.00 | #DIV/0! | -0.15 | -0.12 |

The Buy 3 get 2 free row is an unfilled example; its errors show what happens when price and cost cells are empty. [L0986, 2026]

- Worked example, Buy 1: COGS $8, no Pick N Pack or shipping cost, a $40 price on site and $3 shipping charged to the customer. Gateway is $2.50, total cost $10.50, total revenue $43, margin $32.50 (75.58%), break-even ROAS 1.32, and target CPA $16.25 for a 2+ ROAS target or $13 for a 2.5+ ROAS target. [L0986, 2026]
- Worked example, Buy 2 get 1 free: COGS $18 for all three units, no Pick N Pack or shipping cost, an $80 price on site and $3 shipping charged. Gateway is $4.70, total cost $22.70, total revenue $83, margin $60.30 (72.65%), break-even ROAS 1.38, and target CPA $30.15 for a 2+ ROAS target or $24.12 for a 2.5+ ROAS target. [L0986, 2026]
- The sheet's relationships, seen in both examples: Total Paid = price on site + shipping charged; Margin $ = Total Paid − Total Cost For Us; Margin % = Margin $ ÷ Total Paid; BE ROAS = Total Paid ÷ Margin $; Target CPA = Margin $ ÷ 2 for 2+ ROAS and ÷ 2.5 for 2.5+ ROAS. [L0986, 2026]
- Aim for a gross margin of at least 70% on every offer before you run ads for it. The 70% figure is the minimum target in this approach, and an offer below it has little room for ad costs. [L0986, 2026]
- Shipping charged to the customer goes on the revenue side (Total Paid / Total Rev), not into the product price. Shipping you pay for fulfilment goes in the Shipping column and adds to total cost. [L0986, 2026]
- Mistake: leaving a price or cost cell empty makes the sheet show #DIV/0! in Margin %, BE ROAS, Savings % and Target CPA, because the formulas divide by zero. Fill in every cell for each offer, including Pick N Pack and shipping, even when they are 0. [L0986, 2026]
- Profit calculator tool: Dropship Toolkit takes product cost and selling price and returns break-even ROAS. [L0661, undated]

### Filtering products by net profit per sale

- Start from the spread: MAP minus wholesale, then take out shipping, fees and ads. A product that does not leave enough after these is not a candidate. [L0966, 2025; L0854, 2022; L0970, 2023]
- Keep a product only if its net profit per sale is above roughly 10%. Products below this are not worth listing. *Older advice (2019).* [L1069, 2019]
- Net profit per sale check (target 30% net, 20% floor): use the net-profit formula for each candidate, then compare against the threshold. [L0962, 2021; L0966, 2025]
- Compare candidates by profit per order and by how many orders the same total profit requires, not by margin % alone. [L0771, 2021-22]
- For a catalogue with hundreds of products, do not calculate every item. Focus on the best sellers, which are often fewer than 20 out of 500 products and give the highest leverage. For large catalogues, group products into price buckets, such as $2,000, $1,700, $1,500 and $1,300, and use averaged targets per bucket. *Older advice (2021-22 course).* [L0446, 2021-22]
- Shipping-heavy items with high shipping costs need the net check before listing, because margins can be very thin. [L0468, 2020]
- Amazon net check: profit before ads = sale price − wholesale − shipping − Amazon fees. [L1153, 2016]
- Products whose net profit is below the threshold and that show no profit at MAP with flat-rate shipping: see the procedure above. [L1069, 2019]
- Do not launch a store on a supplier list where most products are around 10% margin before ads. [L0962, 2021]


Part 4 of 40 of "7. Offers Pricing and Bundles: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles.md · Previous: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/03-unit-economics-and-margin-math.md · Next: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/05-setting-the-base-selling-price.md
