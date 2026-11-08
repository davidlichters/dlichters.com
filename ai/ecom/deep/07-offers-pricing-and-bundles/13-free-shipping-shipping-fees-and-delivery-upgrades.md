<!-- part of ecom/deep/07-offers-pricing-and-bundles.md -->
Part 13 of 40 of "7. Offers Pricing and Bundles: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles.md · Previous: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/12-checking-supplier-rules-before-discounting.md · Next: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/14-optional-services-and-add-ons.md

## Free shipping, shipping fees and delivery upgrades

### Free shipping as the default offer

- Free shipping is standard practice in dropshipping, but every shipping cost still reduces your profit margin. [L0016, undated]
- Free shipping is the default in this model, so each product's shipping cost must be covered by its sale price. Drop or reprice any product whose price cannot absorb its shipping cost before listing it. [L1085, 2018]
- Suppliers never offer free shipping. When a store advertises free shipping, the store pays and the customer does not. This is the standard approach for about 99% of stores. [L1274, 2018]
- Free shipping means the merchant pays the shipping cost, not the customer. That cost must be built into the margin calculation for each product. [L0966, 2025; L0276, 2024]
- Free shipping can be offered on everything, with extra charges only for special services such as white glove delivery. [L0356, 2019]
- Offer free standard shipping on all products, with the shipping cost built into the product price, so customers see free shipping and the cost is covered in the margin. [L1279, 2021]
- Shipping and product prices should be set so the store can offer free shipping and still keep a profit. The customer does not pay shipping, but the supplier's shipping cost must be included in the margin math. [L1111, 2020]
- Free shipping on almost everything means a shipping app connected to a UPS account is not needed. Put shipping costs into the margin calculation instead. [L0664, 2020]
- Shipping is not a separate Shopify charge. When the store offers free shipping and pays for it, the built-in Shopify shipping system is not used. [L0969, 2022]
- Free shipping is often overlooked, but cost-conscious shoppers prefer a store with free delivery over one that charges a few dollars. Absorbing the delivery cost can make your store the first choice over competitors. [L1399, undated]
- Offer free shipping and build it into the product price, because a visible shipping charge makes many buyers abandon the purchase. Buyers accept a higher product price more easily than an extra shipping fee. [L0661, undated]
- For beginners, build shipping into the product price and offer free shipping rather than charging a separate fee, since separate shipping charges are more likely to cause abandoned checkouts, especially on low-priced products. [L1172, 2023+]
- Showing a $5 shipping fee only at checkout can cause buyers to abandon. Offer free shipping, then sell faster shipping as a paid upsell. [L0352, 2022]

### When to offer free shipping

- Free shipping is only worth offering when the margin covers the shipping cost. [L0855, 2023; L0941, 2022]
- Free shipping works on expensive products but loses money on cheap ones of the same size and weight. A three-seater sofa sold at $1,500 can carry free shipping with healthy margin; the same sofa at $500 cannot. [L0429, 2022]
- Free shipping on heavy items is not standard practice. Check what competitors do first, and offer free shipping only when the margin still covers the freight cost. [L0801, 2021]
- Free shipping is very hard to keep profitable when MAP is less than 2x wholesale. [L0963, 2022]
- Free shipping and a price-match guarantee are common in this market, but both costs come out of the spread. Offer them only on products where the spread after average shipping still covers ad costs and merchant fees; otherwise they can erase the margin. [L0854, 2022]
- Do not list products whose shipping costs make free shipping unprofitable. For the guitar example, list only products priced above $200 when shipping is expensive. [L0665, 2022]
- At the first click, price usually matters more than shipping, because customers see shipping only later in checkout. High shipping can still send them back to look for other options, so balance both. [L0470, 2023]
- Before offering free shipping, calculate how it changes your margin on each sale, because it is a cost of the sale. Free shipping works as a purchase incentive, so weigh the margin impact against the extra sales it may bring. [L1480, 2021-22]
- Use free shipping only after checking shipping rates. Lower shipping costs by comparing carriers, shipping direct from suppliers, or getting multiple free quotes. [L1094, 2023]

#### Deciding whether to keep free shipping when costs are high

Older advice (2019) gives this sequence:

1. Calculate the profit left per order as a percentage of the sale price, including shipping costs.
2. If the margin is only about 5% to 15%, work on the margin with the supplier first, by asking for better product prices or shipping rates.
3. Compare with competitor offers: if they ship free, charging for shipping will reduce conversions noticeably.
4. Only move to paid shipping if the margin cannot be fixed and the product still makes sense.

[L1069, 2019]

#### Competitor-based rules

- If all competitors offer free shipping, charging a shipping fee usually makes the sale harder. Cover the cost by negotiating shipping terms with suppliers or product terms, not by charging extra. [L0960, 2019]
- If all competitors charge for shipping, charging for shipping too is reasonable. Adding a shipping cost into the product price makes the listing look more expensive in ads and reduces clicks. [L0970, 2023]
- If competitors in a specialized niche charge for shipping, you can charge for shipping as well. This is an exception to the standard free-shipping approach. (2018) [L1274, 2018]
- Check competitors' shipping policies before deciding how to price shipping, because shoppers see competitor prices and shipping charges side by side in ads. [L0966, 2025]
- Shipping on large items can be charged to the customer if the market does so, but check this against competitor pricing and whether shipping is built into the price. [L0967, 2020]

### Calculating freight cost

#### Freight Center procedure

To calculate shipping costs for a free-shipping offer:

1. Use Freight Center dot com.
2. Enter the supplier warehouse location.
3. Enter product weight and dimensions.
4. Get shipping quotes to a sample city in California, Florida, and Texas.
5. Average these quotes to determine typical shipping expense.
6. Factor this into product pricing.

[L0249, 2022]

#### Weight-based formula

Weight-based shipping rate = product weight × rate per pound. For example, at $2 per pound, a 50 lb product costs $100 to ship. Product weights must be accurate for this to work. [L0671, 2021]

#### Calculated shipping at checkout

- If shipping costs vary and you do not want to build them into product prices, a Shopify shipping app can charge calculated shipping at checkout. This keeps profit figures closer to the real freight cost of each order. (2024) [L0806, 2024]
- Charge shipping per brand by enabling shipping in Shopify or by adding a surcharge to the product price, for example a $100 product with a $10 shipping surcharge. [L0663, 2019]
- When a supplier has high shipping costs, such as an average of $600, either build the shipping into the product price or charge a brand-specific shipping fee. The choice depends on what competitors do. (2025) [L0857, 2025]
- Shopify requires you to offer either free shipping or paid shipping, not both. Product-specific shipping upgrades must therefore be sold as product options. [L0247, 2021]
- Shopify shipping rules as described in the 2019 course: free shipping over $200 applies to all products $200 and above if the free-shipping rule is activated. For products under $200, configure separate shipping rules: charge a fixed amount per order, or enable real-time calculated shipping based on weight and box dimensions. [L0243, 2019]

> **Note on conflicting Shopify sources:** The 2019 setup (free rule for $200 and above, separate rules below) and the 2021 statement (either free or paid, not both) both describe Shopify behavior from older courses. Check current Shopify settings before relying on either. [L0243, 2019; L0247, 2021]

### Free-shipping thresholds

Sources give different thresholds. Each applies to a different model:

| Source | Threshold | Context | Ids |
|---|---|---|---|
| one source | $200 | Standard minimum order value for free shipping on dropship products | [L0243, 2019] |
| one source | $100 | Example text: "Free shipping to the continental US on all orders over $100," shown on the product page and in the shipping tab | [L1281, 2022] |
| one source | $500 | Start with free shipping on all orders; if margins are too thin, add a $50 flat fee below $500, editable later in Shopify | [L0731, 2021-22] |
| one source | $39 | Example store: free shipping above $39, otherwise a $9.99 fee | [L1172, 2023+; L1176, 2023] |
| one source | 19 euros | Threshold used by a German store, adoptable in another market | [L1161, 2024+] |
| one source (2026) | $25 | Single at $19, two-pack at $29.99 | [L0861, 2026] |

- Use free shipping on all products instead of a threshold, and keep low-priced products out of the catalog so the store focuses on higher-priced items. [L1069, 2019]
- Free shipping can be offered for a limited day or week, or through a discount code that activates it. For example, normal shipping of $7 can be shown as free for one day only. [L0502, 2020+]
- Free shipping over $75 on a product priced at $85 means every order ships free. The lesson states this only really works for clearance items, because those products are already sold at a low margin. [L0790, 2017]

#### Setting the threshold in the cart

- Set the free-shipping threshold above the single-unit price and below the bundle total, so a customer who buys two qualifies for free shipping. The example uses a single at $19 and a two-pack at $29.99 with a threshold of $25. [L0861, 2026]
- Set the threshold between the price of one item and the price of two, so the customer gets free shipping only by buying two. A threshold above the single-item price but at or below the two-unit total is what pushes the buyer up the ladder. [L0862, 2026]
- A very low product price, such as $9.99, is often a sign that the store charges for shipping separately. Check the store header and checkout for a free-shipping threshold before judging the price. [L1172, 2023+]
- In the lesson's example, the threshold was $39, so customers were encouraged to add items until the cart reached $39. Bundles that reach the threshold in one purchase remove the friction of adding items. [L1172, 2023+]
- Pairing a single item with a complementary trending product as a bundle can lift the total order past the threshold. For example, one item at $19.99 or a bundle with a second product at $29.99 keeps shipping free and preserves margin. [L1172, 2023+]

### Progress bars and threshold display

#### Configuring the free-shipping bar in Shopify

1. Go to Header > Free shipping bar.
2. Turn on Show free shipping bar.
3. Set the background color.
4. Enter the threshold amount, for example 1000 dollars.

The cart then reads "spend X to unlock free shipping" and updates as the cart total changes. [L0775, 2020-26; L1309, 2020-26]

#### Remaining-amount formula

Amount shown on the bar = threshold − current cart total. For example, 1000 − 799 = 201. If the bar shows a different number, check the cart price against the threshold. [L0775, 2020-26]

With a threshold of 1000 and a 799 product in the cart, the bar shows that $201 more is needed, and it updates automatically as items are added. [L1309, 2020-26]

- A free-shipping bar is only useful when a free-shipping offer exists. If all products ship free, it can stay off. [L1309, 2020-26]
- In the cart drawer, show the threshold with the remaining amount. For example, if the cart is under $40, display "add $20 more to get free shipping." This nudges the customer to add an item that raises the order value. [L1412, 2023]
- Show the free-shipping threshold as a set amount next to Add to Cart, not as a vague line such as "qualifying once the threshold is met." Vague shipping wording invites questions at checkout. [L1188, 2026]
- Shipping options left open or enabled while ads are running can let customers order with a shipping setup that was never intended. Check the shipping settings before launching any paid campaign. [L1172, 2023+]

### Charging for shipping on low-ticket items

#### Example rule for low-priced products

- Example store rule: free shipping on orders above $39, otherwise a $9.99 shipping fee is charged. Shoppers who want free shipping must buy several items to reach the threshold. [L1176, 2023]
- For low-priced products (for example $9 or $14), charge a separate shipping fee to keep the margin, then offer free shipping above a higher cart threshold such as $30 or $40 to raise average order value. Example of your own: a $12 gadget with a $7.99 shipping fee, plus free shipping above $35. [L1176, 2023]
- If a product's selling price is low and the margin is thin, raise the price or charge a shipping fee, and pair it with an offer that encourages buying two. [L1176, 2023]

#### Alternatives to a separate fee

- If many dropshippers charge separately, a fee of about $5 to $7 per order is common. Customers who see shipping at checkout may abandon the order if the fee is too high. [L1172, 2023+]
- If many customers start checkout but do not complete it because shipping costs appear, add about $7 to the product price and offer free shipping. This applies when the conversion rate stays poor despite good ad traffic. [L1172, 2023+]
- Charging for shipping while running ads against free-shipping competitors almost never converts. Ads should only go to products where the margin is high enough to absorb the freight. [L0855, 2023]

### Heavy and large items

#### Margin requirements

- For large or heavy products, the spread between MAP and wholesale must cover shipping, which can be about $250 per item. Such products should sell for roughly $1,000 or more, with wholesale at half or less of that price, before free shipping is viable. Inexpensive heavy items are a loss. [L0429, 2022]
- Items that are large or heavy can still be sold if the price is high enough to cover shipping and leave a healthy margin after free shipping. [L0671, 2021]
- Example: $300 margin left after wholesale on a product with $250 freight leaves only $50 profit. Charging the customer $250 for shipping keeps the $300 margin at a total of $550, but only works if competitors also charge for shipping. (2023) [L0855, 2023]
- Free shipping on products that cost a lot to freight is only worth offering if the margin still covers the shipping cost. (2023) [L0855, 2023]

#### Listing heavy items with a shipping add-on

- For heavy items where freight is expensive, one method is to list the product at a lower price and add a required shipping add-on at checkout. For example, a $500 product with a required $300 shipping add-on reaches $800, while the advertised product price stays at $500. [L0801, 2021]
- Listing a heavy item at $800 with shipping included in the price usually reduces clicks when the competitor shows $500 with freight calculated later. The lower advertised price with a required shipping add-on keeps the price visible while covering shipping costs. [L0801, 2021]
- For non-MAP products with high shipping costs, raise the product price to include shipping and show free shipping. Customers see the same total at checkout. [L0941, 2022]

#### Matching competitor prices on heavy items

If competitors charge shipping on heavy items and you need to match their price while keeping the item competitive:

1. Set your listed price in line with the competitors' prices for those products.
2. Create a separate shipping profile in Shopify and add the heavy products to it.
3. Set that profile so the products are not eligible for free shipping.

This keeps the price competitive for Google Shopping traffic while shipping is charged separately. [L0470, 2023]

#### Supplier fees and packages

- Supplier shipping fees should be built into the product price rather than shown as a separate fee. Avoid asterisk shipping explanations on product pages. [L0962, 2021]
- When a supplier insists on charging shipping, negotiate shipping and warranty into a single package price. This gives customers one price and supports the store's extended warranty offers. [L0962, 2021]
- Shipping to Hawaii is usually not worth the effort, because costs are so high that most customers will not pay them. [L0963, 2022], see the Alaska and Hawaii section below.

### Excluding Alaska and Hawaii

Sources differ on how to handle these states. Both approaches are shown:

| Approach | Source | Applies when |
|---|---|---|
| Charge a separate surcharge or flat fee for these areas | one source, [L0270, 2021] | You want to ship there and cover the higher cost with a fee |
| Remove them from checkout options and offer a quote by contact | one source, [L1069, 2019]; one source, [L1281, 2022] | Shipping is too expensive for most products |
| Do not advertise to Hawaii for most products | one source, [L0963, 2022] | Most products |

- Offer free shipping to the continental US only. Hawaii and Alaska are excluded from free shipping by default because shipping there is very expensive. [L1281, 2022]
- For Alaska and Hawaii, do not offer free shipping. Remove these states from checkout options and link a contact address on the contact page so customers can request a quote that includes a surcharge. [L1069, 2019]

#### Exclusion procedure

To exclude Hawaii and Alaska from standard free shipping:

1. In the shipping rules, make Hawaii and Alaska unavailable to select at checkout.
2. On the shipping policy page, say that customers who want to ship there can contact the store for a quote.
3. Handle those quote requests manually.

[L1281, 2022]

- Free shipping message example: "Free shipping to the continental US on all orders over $100." The threshold is shown on the product page and in the shipping tab. [L1281, 2022]
- Free shipping to the continental US is the policy in the 2021 course. Alaska and Hawaii shipping is significantly more expensive, so charge a separate surcharge or flat fee for these areas. [L0270, 2021]

### Expedited shipping

#### Setting up an expedited option

1. Offer expedited shipping only with suppliers who can reliably ship fast and with whom you have a strong relationship.
2. Add expedited shipping as an optional toggle on product pages (for example, "Expedited shipping-ships in 24 hours: yes or no").
3. Charge a fixed add-on fee if the customer selects the expedited option (for example, $50).

[L0243, 2019]

- Priority shipping or priority processing can be offered as an add-on fee of about 10% of the product price (for example $2.95 to $3.95) to add extra margin. [L1436, undated]
- If competitors deliver in 5 to 10 days, arrange with the supplier to dispatch within 24 hours and deliver in 3 to 5 days. Faster delivery is a visible value that helps the store stand out. [L0852, 2020]
- Free expedited shipping is a monetary promotion where the store waives a fee it normally charges, typically worth $25 to $50 for expedited shipping. Orders above a set amount placed by a set date ship expedited for free. It works well just before Christmas, when gift buyers pay attention to shipping speed. The offer can be limited to certain suppliers or to orders above a price threshold. [L1205, 2020-26]
- Shopify's default checkout does not allow easy assignment of specific shipping offers to specific products. Use the product upsell app for same-day shipping instead of the shipping page; the upsell app can target each offer to specific products. [L0923, 2015]

### White glove delivery and assembly

#### Ways to offer white glove

White glove can be placed in three ways: free on product pages to lift conversion, as a paid shipping upgrade at checkout, or as a custom quote requested before or after the order. The right choice depends on the niche and on whether margins are high enough to absorb it. [L1281, 2022]

- Offering free white glove on high-ticket products only makes sense when the product margin is high enough to pay for it. If competitors do not offer the same service, showing it on the product page can noticeably raise conversion rates. [L1281, 2022]
- White glove delivery can be sold as a paid upgrade, or given away as a free bonus for very expensive products when it helps win sales in the niche. Compare several white glove providers, since prices vary widely, and choose one with good reviews and the lowest cost. [L0664, 2020]
- For a custom desk that sells for $5,000 where three competitors use standard delivery, offering free white glove delivery (costing $100 to $300 extra) can win the sale. Each sale won this way adds the margin of that order, so the extra cost can pay off. [L0961, 2020]
- A low-cost paid option at checkout is white glove delivery sold as an upgrade the customer can add to the order. Use this when your margins cannot absorb a free version. [L0961, 2020]
- Shipping upgrades such as white-glove delivery, for example $50 to $80 extra, can be used as perceived value on higher-priced products. This can justify a price above a competitor that does not offer them. [L1002, 2019]
- Do not apply a flat markup for premium services such as White Glove across all orders. Costs differ by supplier and product, so a flat charge can lose money. Offer these services per product page. [L0247, 2021]
- Do not charge flat shipping fees above the product price unless offering an upgraded service such as expedited shipping, white-glove delivery, or installation. Flat fees without added value don't match competitor offerings. [L0272, 2022]
- Free white glove delivery suits products where the customer values installation, not just curbside drop-off. Free extended warranties suit products you already sell with a paid warranty. Test whether a temporary free warranty attracts the audience that has been sitting on your list. [L1204, 2022]

#### Free white glove as a monetary promotion

- Free white glove in-home delivery can be used as a monetary promotion in the same way as free expedited shipping. It can be restricted to certain suppliers or to orders above a certain price. [L1205, 2020-26]

#### Product page banner template

Place the banner directly on the product page where the offer applies.

```
Limited time: free white glove in-home delivery on purchases of [minimum amount, e.g., $1,500] or more. No code necessary. Includes bringing the product into your home, setting it up, and removing all boxes and packaging.
```

[L1281, 2022]

#### Assembly and installation

- Clearly state assembly requirements, shipping format, and customer responsibility on product pages. Consider offering assembly as a paid upsell by partnering with assembly services used by competitors. [L0270, 2021]
- For products requiring assembly or installation, research what your competitors use for assembly services. Partner with the same service provider. Offer assembly as a paid upsell on the product page so customers can add professional installation if desired. [L0270, 2021]


Part 13 of 40 of "7. Offers Pricing and Bundles: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles.md · Previous: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/12-checking-supplier-rules-before-discounting.md · Next: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/14-optional-services-and-add-ons.md
