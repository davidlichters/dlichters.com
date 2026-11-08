<!-- part of ecom/deep/03-suppliers-and-fulfillment.md -->
Part 22 of 51 of "3. Suppliers and Fulfillment: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment.md · Previous: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/21-minimum-orders.md · Next: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/23-negotiating-better-terms.md

## Pricing, Margin and Profitability Checks per Supplier

### Cost inputs for the margin calculation

- Cost of goods sold (COGS) is only accurate when it is entered per product in Shopify. COGS equals the cost to deliver the product to your 3PL plus the average shipping cost per unit to the customer. [L0222, 2025-26]
- Packaging and supplies cover only the materials used to fulfil an order: the box, tape, polymailer and the cost of the shipping label itself. Postage paid to the carrier is entered separately as shipping cost. [L0433, 2025-26]
- Shipping cost is the average postage paid per order for a typical order size, for example $9.17. Take it from actual carrier costs, not from packaging. [L0433, 2025-26]
- If a 3PL charges per pick, an order with several items incurs one pick fee per item, so the 3PL cost per order must be scaled to the average number of picks. Typical 3PL pick and pack fees run about $1.50 to $2.50 per pick. If no 3PL is used, this input is $0. [L0433, 2025-26]
- Keep COGS as low as possible, but never at the expense of the quality customers notice. Cutting costs that buyers feel will hurt repeat sales. [L0378, 2019+]
- Customisation and rush production options from the supplier carry their own costs. Add a markup to them, and ask suppliers which custom or rush options they offer before building them into your pricing. [L0920, 2018]
- A supplier's percentage margin must be checked for its basis. Ask whether it is a net margin left after the product cost or a markup on that cost. The two give very different selling prices, so confirm which one applies before committing. [L0551, 2020]

**Worked cost examples**

- Ceramic flower pot: sold at $30 (about $29.90) with an $11 COGS including fulfilment costs. [L0642, undated]
- Zendrop: one unit sourced at $20 with $10 shipping to the customer gives a total of $30 entered as COGS + SHIPPING per unit. [L0987, 2025-26]
- CJ Dropshipping: a cost of $17 per item on CJ was entered into profit calculators to check margin. [L0440, 2023+]

**CJ Dropshipping price basis**

- On CJ Dropshipping, after you choose the variant and the target country, the product page shows a field called total dropshipping price. It already includes the product cost and shipping to the customer, so use it as the base cost for pricing instead of the item price alone. [L0436, undated]

**Confirming cost before pricing**

1. Estimate the product cost from AliExpress listicles by checking average prices.
2. Open a sourcing request at CJ Dropshipping to get accurate supplier prices.
3. Use the sourcing result as the real cost basis for pricing.

[L0693, 2024]

- AliExpress prices are only estimates, because sellers without fulfilment can set any price. Use a sourcing request to confirm the cost. [L0693, 2024]

**Shipping outside the MAP**

- Shipping costs are typically not included in a supplier's MAP price, because shipping varies by destination. If a supplier does not explicitly state that shipping is included in its pricing, assume it is not. [L0276, 2024]
- Estimating shipping and margin:

  1. Find the supplier's location and zip code on its website.
  2. Note the product's size and weight.
  3. Get a freight estimate from freightbroker.com between the supplier's zip code and two customer zip codes in the states you plan to sell in, for example one in Florida and one in California.
  4. Average the two estimates to get a shipping cost.
  5. Subtract wholesale cost and shipping from the selling price to see the margin left for ads and fees.

  [L0961, 2020]

- Some suppliers based in Japan charge an average of about $15 shipping per product, which can remove most of the margin on lower-priced items. Add this shipping cost into the spread calculation before listing their products. [L0965, 2024]
- If a supplier adds tax to its wholesale prices, compare competitor prices with that tax included and recalculate the MAP-to-wholesale spread. Keep the products only if the spread still works. [L0965, 2024]

### Retail price basis

- Google Shopping is used for competitor price research: search your product names as a customer, then compare sellers' prices to your wholesale cost. Use store averages, not the lowest prices. [L1051, 2020-26]
- Extremely low competitor prices are often a warning sign rather than a bargain. Stores selling with almost no margin often have poor customer service, late or missing shipments and short business lifespans. Check company names, websites, reviews and ratings before treating their price as market price. [L1051, 2020-26]

### Benchmarks: MAP, wholesale and the 50% rule

The sources give different thresholds. Each one applies in a different situation, so read them together.

| Benchmark | Value | When it applies | Source |
|---|---|---|---|
| 50% rule (core target) | Wholesale about half of MAP. A $1,000 MAP implies a $500 wholesale cost. | Default test for every supplier. | [L0358, 2020; L0835, 2023; L0967, 2020] |
| Target spread | Wholesale of $1,000 should correspond to a MAP of about $2,000. | Planning target when reviewing a price list. | [L0666, 2024] |
| Minimum multiple | MAP at least 2x wholesale. | Floor after fees, acquisition, shipping and overhead. | [L0268, 2020] |
| Ideal multiple | MAP at least 2.2x wholesale. | Preferred level; thin spreads should be reconsidered. | [L0665, 2022] |
| Formula shown by suppliers | A MAP formula such as 2x wholesale. | When the supplier sheet has no MAP policy. | [L0470, 2023] |
| Shipping-inclusive margin floor | At least 25% margin including shipping. | Listing decision for a product. | [L1046, 2021-22] |
| Average spread in one example | About 25%, against about 50% required by the model. | Reference of what suppliers often offer. | [L0835, 2023] |
| Typical retail discount offered | 15-20% off retail is below target. | Spread check before paid ads. | [L0666, 2024] |
| Floor before expenses | Never settle on a margin leaving about 20% before expenses. | Hard floor during negotiation. | [L0835, 2023] |
| Discount from supplier | 30% insufficient for an online retailer; 30-35% not enough if you also pay shipping and acquisition. | Supplier discounts that still must cover shipping and ads. | [L0967, 2020; L0807, 2025] |
| Discount from supplier | 50% acceptable; 20-40% usually not. | Judged by whether COGS is about 50% of planned selling price. | [L0664, 2020] |
| Affiliate-style margin | 10-20% before payment fees and ad costs. | Sign of an affiliate-style relationship; not enough to build a business. | [L0967, 2020] |
| Affiliate minimum | A minimum affiliate discount of 30% is not profitable; at 20%, decline or price above MAP without paid traffic. | Affiliate offers. | [L0268, 2020] |
| No-MAP starting price | Price around three times wholesale as a starting point. | Only when no MAP is given; revise against margin math and competitor prices. | [L0358, 2020] |
| No-MAP fallback | Set price at least 2x wholesale. | When no clear competitor price can be found. | [L0854, 2022] |

Where sources give different starting points for a supplier with no MAP, use the 3x starting point [L0358, 2020] only as a first guess. Use the 2x fallback [L0854, 2022] when no clear competitor price exists. Revise both against competitor prices and your own margin.

- Under the 50% rule, if a supplier's price is far off and it will not negotiate, the supplier is usually not worth working with. [L0358, 2020]
- The minimum acceptable wholesale margin is about 50%. A wholesale cost above half of MAP should be negotiated or reconsidered. [L0665, 2022]
- Judge a discount by the resulting cost of goods, not by the percentage alone. A 50% discount can be acceptable, while 20-40% off usually is not. [L0664, 2020]
- Off-MSRP example: a supplier offering 50% off MSRP while MAP is 25% off MSRP leaves too little margin. The deal only works if competitors sell at MSRP. [L0671, 2021]

### Net profit and ad-spend thresholds

**Worked profit example at 2x**

- Wholesale $800, sale price $1,000: gross profit $200. Minus 2.9% fees ($29) gives $171. Minus 10% customer acquisition cost ($100) gives $71 profit. Subtracting shipping and operational overhead leaves minimal or negative margin.
- Solution: price at $1,600 instead, and drive only organic and remarketing traffic, not paid ads.

[L0268, 2020]

- Transaction fees (2.9%) and customer acquisition (up to 10% of sale) are the costs that a 2x MAP has to cover. [L0268, 2020]

**Dollar profit matters as much as percentage**

- A wholesale price of $161 against a MAP of $230 leaves too little dollar profit per sale to justify advertising. Accepting a lower spread is only reasonable for very high-ticket products worth thousands of dollars, where gross profit per unit is still large. [L0835, 2023]
- A lower spread is acceptable only when the dollar profit per sale still makes the sale worthwhile. [L0835, 2023]
- Established industry suppliers offered about $125 profit on a $1,000 product and about $200 on a $4,000 product, which can be too thin for paid ads. [L0671, 2021]
- Do not sell products at very low margins, such as 5% or a flat $50 per sale. This is especially true for suppliers without a price policy, where other retailers race to the bottom. These deals create more problems than sales. [L0835, 2023]
- Products sold below 25% margin including shipping should not be added to the store. Keep the supplier on file for later. [L1046, 2021-22]

**Product-level margin checks**

- Product-only margin in the example was roughly 20% once outbound shipping was removed, showing that shipping was the main reason the margin was low. [L1046, 2021-22]
- Outbound shipping in the example cost about $98,000 to $100,000 per year, roughly 6.3% of total income. It is one of the largest levers for improving margin. [L1046, 2021-22]
- Check each product's margin including shipping before listing it. Add only products with at least 25% margin including shipping. [L1046, 2021-22]
- Small, lightweight products have low fulfilment costs because they ship in small packages. This leaves room for a good selling price and margin, so use it when choosing test products. [L0562, undated]
- Outbound shipping cost in one case was about $98,000 per year; the owner planned to bring it to about $75,000, a saving of about $23,000 per year, while keeping the rest of the cost structure. This was the third of three supplier priorities. [L1046, 2021-22]

**Margin review steps**

1. Contact the supplier and build the relationship before asking for terms.
2. Request the supplier's current pricing sheet.
3. Calculate the margin for each product, including shipping.
4. Add only products with at least 25 percent margin including shipping.
5. Keep low-margin suppliers on file and note any individual high-margin products they offer.
6. Keep searching for higher-margin suppliers as the first priority.

[L1046, 2021-22]

- Products from suppliers with weak sales can stay listed in free Google Shopping listings if they still show margin, so they earn traffic without ad spend. [L0967, 2020]

### Evaluating a supplier before listing

**Supplier margin is set per supplier**

- Margins are supplier-specific, not niche-specific. No actual margin is known before approval, because pricing tiers and credit terms differ by supplier. One supplier may offer 50% margin while another in the same niche offers only 25-30%. [L0274, 2023]
- The profit margin is set by each supplier, not by the niche. Two suppliers in the same niche can offer very different margins, so judge every supplier on its own price list before deciding what to sell. [L0671, 2021]
- Supplier margins are negotiated per supplier, not per niche. A low 20-30% margin from one supplier does not mean the niche is wrong. Keep adding approved suppliers in the niche. [L0429, 2022]
- Margin between MAP and wholesale varies by supplier, not by niche. Calculate each supplier's margin after approval rather than assuming an industry margin. [L0854, 2022]
- Supplier-specific prices, MAP policies and margins are unknown until approval. Use category averages for planning and confirm the real margins after approval. [L0469, 2021]
- Wholesale cost is not known until you are approved, but you can still plan around it. [L0854, 2022]
- A supplier's price list is the fastest way to confirm true profit per supplier. Margins can often only be confirmed after approval, but they can be calculated as soon as the price list is received. [L0967, 2020]
- Approved suppliers typically send an Excel sheet with three columns, or three separate price lists: MSRP, MAP and wholesale. Use these to estimate margins before listing products. [L0663, 2019]

**Checking a supplier with no MAP policy**

1. Get the supplier's price list.
2. Search Google Shopping for several of its products.
3. Check whether anyone already advertises those products and at what markup.
4. If competitors mark them up only 10% or 15%, do not list them; this is a no-go.
5. If there is little competition, become the main seller for those products; if competitors sell them at healthy margins, list them too.

[L0671, 2021]

1. Search the supplier's products in Google Shopping.
2. Check the prices other sellers use for those products.
3. If sellers are selling at no margin, skip the supplier.
4. If sellers still make a healthy margin, sell the products and mark them as ineligible on your price match policy page.

[L0467, 2019]

1. Search the product names on Google Shopping.
2. Compare the prices other sellers charge.
3. Drop the product if many sellers price it at almost no margin, because that is a race to the bottom.
4. If margins hold up, exclude the product from your price match policy before the first sale.

[L0664, 2020]

1. Search for that brand on Google Shopping.
2. Check what prices competitors list the products at.
3. If competitors are listing at very low markup (e.g., 5% margin), list the product on your site but only target free/organic traffic (no paid ads).
4. If competitors have healthy markups, you can list at similar prices and use Google Shopping ads.
5. Decide ad spend based on competitor pricing and your margin.

[L0255, 2025] (2025.)

- When no MAP policy exists, check the supplier's price list, shipping estimate and competitor prices before listing its products. Compare the expected margin for each brand before committing, since margins can still be strong when the brand approves only selected retailers. [L0961, 2020]
- Brands that approve retailers selectively, especially those without a MAP policy, can still offer good margins because other retailers also protect their prices. Do not undercut the best competitor price in these cases, because price wars leave no one profitable. [L0961, 2020]
- Pricing for a brand with no MAP starts from competitor prices. If competitors sell above your planned price, match their price instead of undercutting them, since buyers pay more.

  1. Search Google for a few products of that brand as a normal customer would.
  2. Open Google Shopping and check what competitors list the same products for.
  3. If competitors sell above your planned price, match their price instead of undercutting them, since buyers pay more.
  4. If you cannot find a clear competitor price, set the price at least 2x wholesale.

  [L0854, 2022]

- If competitors sell a popular product at only about 1.5x wholesale, you can still list it at 2x wholesale but run no paid ads for it. Let it earn sales from free Google product listings and SEO instead of spending money where you cannot beat the price. [L0854, 2022]

**Judging a supplier's position and terms**

- Suppliers that sell direct at MSRP and let retailers sell at MAP are good partners. Avoid brands that sell at MAP themselves or below MAP, because this removes your price advantage. [L0961, 2020]
- If a brand sells direct at MAP, look for a unique value proposition (UVP), such as better presentation, trust or customer experience, that sets your store apart. Skip the brand if its own site already sells well and it expects you to match or beat its price. [L0961, 2020]
- Retail margins are usually the same for every reseller, so negotiate only if the numbers do not work. [L0359, 2020]
- Supplier prices are usually fixed once you are approved, so negotiation is rarely possible. Focus on the research and the approval process instead. [L0961, 2020]
- Some manufacturers sell direct at MSRP but allow retailers to sell at MAP, so a retailer can price below MSRP. Get approved, request the price list and confirm the margin before deciding. [L0467, 2019]
- When a brand is only available through a wholesaler, check the margin after the wholesaler's price and whether you have pricing control. Working through the wholesaler is acceptable when margin and pricing are right. [L0801, 2021]
- A supplier that sells the same product direct at the same price with free shipping leaves no room for a value proposition. List such products only if the store offers a bonus or better service; otherwise skip the supplier. (Older advice? Undated, 2023.) [L0964, 2023]
- If a supplier sells direct to consumers and runs its own paid ads, listing its products on your store can still help build credibility when approaching other brands. Do not include them in paid ads, since they are unlikely to become a major earner. (2025.) [L0837, 2025]
- If the supplier also sells directly to consumers at MAP, check its own retail website before deciding: whether it runs ads and whether the site is built to convert visitors. A supplier that does not invest in its retail channel can still be a profitable partner. [L0854, 2022]
- Judge a supplier's offer on its own numbers before listing. Approval does not mean every product is worth selling. [L0663, 2019]

**Supplier with thin margin after shipping**

- If a supplier's margin is too thin after shipping, drop that supplier's products even after approval. Approval does not mean every product is worth selling. [L0663, 2019]
- Supplier margins of 10-20% before payment fees and ad costs signal an affiliate-style relationship. Negotiate with these suppliers or skip them in favour of suppliers that meet the 50% wholesale rule. [L0967, 2020]


Part 22 of 51 of "3. Suppliers and Fulfillment: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment.md · Previous: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/21-minimum-orders.md · Next: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/23-negotiating-better-terms.md
