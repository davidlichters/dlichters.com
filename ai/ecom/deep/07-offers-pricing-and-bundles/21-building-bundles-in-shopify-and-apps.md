<!-- part of ecom/deep/07-offers-pricing-and-bundles.md -->
Part 21 of 40 of "7. Offers Pricing and Bundles: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles.md · Previous: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/20-bundle-offers-and-where-to-put-free-shipping.md · Next: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/22-rebuy-smart-cart-tiered-progress-bar-and-discount.md

## Building bundles in Shopify and apps

### Choose the offer type before you build

- Bundle offers outperform Monster Card for average order value. Monster Card and bundle tactics are incompatible and should not run at the same time. [L0298, 2023]
- Bundle apps work better for increasing the quantity of the same product. Monster Card works better when you have different complementary items to cross-sell. Choose by your specific goal. [L0298, 2023]
- Use an automated discount rather than a discount code for a buy-X-get-Y offer. The discount applies in the cart without the customer entering anything, and the offer stays identical at every step from the ad to checkout. [L0650, undated]
- Bundle builders with quantity discounts usually need a paid app. Built-in bundle features in a theme can replace several monthly app costs. [L0709, 2017+]
- One bundle app was estimated to cost about as much per month as the full $249 theme price over roughly six months. Compare total app costs with a one-time theme price to judge the savings. [L0709, 2017+]
- Common conversion features are bundle builders, quizzes, upsells, cross-sells, free shipping options, and discounts for adding more items. They were built into a theme because they were seen converting well across many brand projects. [L0709, 2017+]

### Shopify automatic discounts (no bundle app needed)

- Shopify automatic discount for a quantity rule: go to Discounts, click Create discount, choose Automatic discount, and set a rule such as "buy 2 and get 20% off". Show a banner message on the product page or in the cart. Example: 2 products at 34.99 USD each (69.99 USD) become 59.99 USD at checkout. Apps such as Bundle Bear are optional and not needed at the start. [L0773, 2023]
- Source check: 20% off 69.99 USD is 55.99 USD, not 59.99 USD. The example shows about 14% off. Confirm the discount value in the Shopify rule before you publish the banner. [L0773, 2023]
- Set up the automatic quantity discount in Shopify: Discounts > Create discount > automatic discount. Communicate the offer on the product page, for example "20% off when two items are added to the cart". This works without a bundle or upsell app. [L0774, 2023]
- Create an automatic product discount for a bundle:
  1. Go to Discounts and create a new discount.
  2. Select Amount off products.
  3. Set the method to Automatic.
  4. Enter a Title. Customers see this title in the cart and at checkout.
  5. Set Discount value to Percentage and enter the value (for example 10%).
  6. Under Applies to, choose Specific collections and select the collection that holds all bundle items.
  7. Set a minimum purchase requirement of 4 items so the discount applies only to a full bundle.
  8. Decide whether the discount may combine with other discounts.
  9. Set the start date under Active dates and, if needed, an end date.
  10. Save, then check the Performance section for usage. [L0559, 2025-26]
- The automatic discount summary should read Amount off products, Method Automatic and Details For Online Store, with the percentage and minimum item count listed. The discount must be active before testing, otherwise the cart will not show it. [L0559, 2025-26]
- Set the Shopify minimum purchase quantity to the number of items in the bundle, so the discount triggers only when the full bundle is in the cart. A minimum below the bundle size gives the discount on partial sets. [L0559, 2025-26]
- Formula: Bundle price after discount = list total x (1 - discount %). Example: a list total of $37.00 with a 10% discount gives $37.00 x (1 - 0.10) = $33.30, a saving of $3.70. [L0559, 2025-26]
- If the widget discount percentage and the Shopify discount value differ, the shopper sees one saving on the bundle and gets another at checkout. Keep both values identical for each bundle. [L0559, 2025-26]
- In Shopify, a quantity-based discount can be set to apply when two items are in the cart, so the customer sees the saving immediately. The lesson's amount is 10, but its unit is not stated. Confirm whether it is a percentage or a fixed amount in your store before publishing. [L0436, undated]

### Bundle Bear

**Tool description and offer types**

- Bundle Bear is a Shopify app for volume discount offers, such as buy two and get 40% off. [L1259, undated; L1260, undated]
- In Bundle Bear, the Bundle and Volume discount offer types are the most practical choices for most stores. A bundle can offer a fixed saving on two complementary products, or make the second product a free gift with the first. [L0634, undated]
- Bundle Bear can combine two different products into one deal, such as a cap with a free t-shirt, and can run buy-one-get-one-free offers. Each bundle can use the brand color and brand images, and its performance can be checked in the analytics. [L0635, undated]
- Bundle Bear offer types: bundle with another product, volume discount (the more bought, the less paid), mix and match (discount for different products), and cart goal (discount above a cart value such as $50). [L1297, 2023]

**Setup procedures**

- Create a bundle offer in Bundle Bear:
  1. Install Bundle Bear from the Shopify App Store and click Install app.
  2. Click Create offer and choose Bundle.
  3. Select the first and second product.
  4. Choose the saving. Options: a fixed amount off for both items (for example $10 or $20), the second product as a free gift, or no discount, to show that the products are sold together.
  5. Under advanced settings, set a start and end date for urgency and round prices, choosing 0.99 as the ending.
  6. Click save. [L0634, undated]
- Create a volume discount in Bundle Bear:
  1. Install Bundle Bear from the Shopify App Store.
  2. Click Create an offer and select Volume discount.
  3. Select the specific product and search for it.
  4. Add tiers, for example Buy 1 and save 10%, Buy 2 and save 15%, Buy 3 and save 20%, and customize the text for each tier.
  5. Save. The offer appears just below the product.

  You can also set brand color and images, create buy-one-get-one or free-gift offers, and check bundle analytics. [L0635, undated]
- Create a Bundle Bear volume discount (second procedure):
  1. Install Bundle Bear from the Shopify App Store and click Install app.
  2. Create an offer and name it, for example "offer one".
  3. Choose the offer type: bundle with another product, volume discount, mix and match, or cart goal.
  4. For this example choose volume discount, then pick all products or specific products.
  5. Before setting the discount, calculate the fulfillment cost per unit with your supplier.
  6. Add the discount tiers, then click save and activate.
  7. In the theme editor, add the Bundle Bear block to the product page, usually below the quantity selector. [L1297, 2023]
- Bundle Bear button label: a bundle offer can use a label such as "Get my deal" instead of "Add to cart" or "Buy now". The label and savings text can be edited in the bundle app. [L1410, 2023]

**Tier values and examples**

- Typical volume-discount tiers are buy 2 for 10% off and buy 3 for 15% off. A cheaper alternative to Bundle Bear is the Sketching Bundle app. [L0635, undated]
- Tier values differ between sources. [L0635, undated] uses Buy 1 save 10%, Buy 2 save 15%, Buy 3 save 20%. [L1297, 2023] uses 10% for 2 items, 15% for 3 items and 20% for 4 items. Both are examples. Calculate your fulfillment cost per unit before you choose the tiers. [L0635, undated; L1297, 2023]
- Worked example: 10% off for 2 items, 15% off for 3 items and 20% off for 4 items. Two items were priced at about $201 instead of about $223, so one item cost about $100 instead of about $112. [L1297, 2023]

**Advanced settings and rounding**

- In Bundle Bear advanced settings, you can add custom badges, set a start and end time for urgency, and round discounted prices to 50 cents or $1. The example rounded prices to 50 cents. [L1297, 2023]
- For Bundle Bear discounted prices, enable rounding and choose the.99 ending, for example to show a bundle price as 49.99 instead of 50.00. Set this in the advanced settings of the offer. [L0476, undated]
- Rounding values differ between sources. Use the.99 ending for charm pricing, as in [L0476, undated] and [L0634, undated]. Use 50 cents or $1 when you want whole-amount rounding, as in [L1297, 2023], where the example used 50 cents. [L0476, undated; L0634, undated; L1297, 2023]

### Kaching Bundles

**Setup procedures**

- Set up a quantity-break bundle in Kaching Bundles (single-product example):
  1. Search "Kaching Bundles" in the Shopify App Store, install it, and approve the billing permissions.
  2. Open the app and create a new bundle deal.
  3. Select the product to bundle (one product, here a single supplement).
  4. Enter a name for the bundle (only visible to you).
  5. Set the Block title to a free-shipping threshold above the one-item price and between the one-item and two-item totals (example: "Free Shipping for orders above $25" for a $19.95 product).
  6. Set the Discount name shown in cart and checkout to "Bundle & Save".
  7. Leave all other settings at default except Price rounding.
  8. Enable Price rounding and choose 95 or 99 cents.
  9. If the product has no variants, turn off "Let customers choose different variants for each item".
  10. Bar #1 (Buy One): set quantity to 1 and keep Full price. Title "Buy One". Delete the subtitle. In the price line, insert the variable for new price per item followed by "/ bottle". In the label, type "SAVE" followed by the variable for saved total. Badge style "Simple", badge text "Great Start!".
  11. Bar #2 (Buy Two): set quantity to 2 and choose Fixed price with a total of 29.99. Title "Buy Two". Subtitle and label identical to each other. Badge style "Most Popular". Optionally select it by default.
  12. Bar #3 (Buy Three): set quantity to 3 and choose Fixed price with a total of 38.95. Title "Buy Three". Badge text "Best Value".
  13. Add a free e-book gift to Bar #2 and Bar #3 (and to Bar #4 if you add one).
  14. Open Style and change colors, fonts and corner radius to your brand.
  15. Click Save as draft, check the preview, then click Publish. [L0862, 2026]
- Set up a bundle deal in Kaching Bundles (generic version):
  1. Search Kaching Bundles in the Shopify App Store, install it and approve the billing permissions.
  2. Open the app, go to Bundle deals, then click Create bundle deal.
  3. Under the product selection, choose the product that the bundle is built around.
  4. In Settings, enter a name (visible only to you), a block title that carries the free shipping message (for example "Free shipping for orders above $25") and the discount name shown in cart and checkout (for example "Bundle & Save").
  5. Keep all other settings at default except Price rounding.
  6. Choose the deal type. Quantity breaks for the same product is the usual default.
  7. Bar #1 Buy One: set Quantity to 1, Full price, title "Buy One", delete the subtitle, Badge style "Simple", badge text "Great Start!", label "SAVE" with the saved total variable, and the price line with the new price per item followed by "/Bottle".
  8. Bar #2 Buy Two: set Quantity to 2, Fixed price with a total of 29.99, title "Buy Two", subtitle and label identical to the title, Badge style "Most Popular", optionally "Selected by default".
  9. Bar #3 Buy Three: set Quantity to 3, Fixed price with the chosen total, title "Buy Three", Badge style "Best Value".
  10. Add a free gift to bars 2 and 3: Add gift, Single gift, rename it "Free e-book" and select the e-book product.
  11. In Settings, turn off the variant selector if the product has no variants.
  12. In Style, change colors, font sizes and corner radius to the brand.
  13. Use Preview to check the product and the country (for example United States) and confirm the prices display correctly.
  14. Click Save as draft, then Publish. A Setup A/B test option is available before publishing. [L0861, 2026]

**Deal types and templates**

- Bundle deal types available in Kaching Bundles:

| Type | Layout | Example labels in the app |
|---|---|---|
| Quantity breaks, same product | 1 / 2 / 3 packs of one product | Complete the bundle, Save $10.00!, Buy 2 |
| Quantity breaks, different products | 1 / 2 / 3 packs of different products | SAVE 15% |
| Buy X, Get Y (BXGY) | Buy 1 get 1 free, Buy 2 get 3 free, Buy 3 get 6 free | Buy 1, get 1 free SAVE 60%; Buy 2, get 3 free SAVE 68% |
| Subscription | Subscribe and save | Subscribe & Save 20% |
| Progressive gifts | Unlock free gifts as the order grows | Free shipping, FREE gift, Locked |

[L0861, 2026]

- Quantity breaks are the usual choice for most products. The other deal types are alternatives for specific products, such as subscription or BXGY offers. Pick the type that matches how the customer will buy the product. [L0861, 2026]
- For supplements, the subscription template is a good fit. For most other products, quantity breaks are good enough. Any bar can be customized, so quantity breaks for 1, 2 and 3 units (optionally 4) is a sound default. [L0862, 2026]
- Available bundle templates in Kaching Bundles: Quantity breaks for the same product, Quantity breaks for different products, Buy X Get Y deals (for example Buy 1 get 1 free, Buy 2 get 3 free, Buy 3 get 6 free), Subscription & Save with 20% off, Progressive gifts that unlock free gifts with an order, a Volume discount with other products, countdown timer and scratch-off styles. [L0862, 2026]
- The deal creator asks you to choose a discount type from Single or Duo templates, with presets such as "You save 15%", "Buy 1, get 1 free" and "Buy 3, get 6 free". Any template can be changed afterwards. Pick the closest preset to speed up setup, then edit the prices and labels. [L0861, 2026]
- Create a highlighted offer: in the Kaching Bundles app, create a bundle offer, add quantity breaks to it, and mark the best-selling offer as highlighted so customers see it first. [L1324, 2026]

**Pricing and fixed totals**

- Use Fixed price for bundle bars instead of percentage discounts. You can type the exact total, and the per-unit price is then easy to show. Example: a fixed total of 29.99 for two bottles displays as about 14.98 per bottle. [L0862, 2026]
- Source check: 29.99 divided by 2 is 14.995, so the exact per-bottle figure is about 14.995 and the source displays 14.98. Use the price shown in your Preview. [L0862, 2026]
- Reference bundle prices from the example, for a $19.95 single bottle:
  - Buy Two at a fixed total of $29.99 (about $14.98 per bottle, compare-at $40.00).
  - Buy Three at a fixed total of $38.95 (about $12.98 per bottle, compare-at $60.00).
  - Price rounding set to 95 shows prices ending in.95. [L0862, 2026]
- Formula for the SAVE label: Saved amount = compare-at price of the bundle minus the bundle total. Example: a compare-at price of $40.00 and a bundle total of $29.95 shows SAVE $10.05. [L0861, 2026]
- Pricing settings: in Settings > Pricing, the toggle "Update theme product price" sits next to Price rounding and the other price display options. Turn it on only if the theme should show the bundle-adjusted price on the product page. Confirm the result in Preview before publishing. [L0861, 2026]

**Variables for labels and price lines**

- The bracket button in Kaching Bundles label and price fields opens an "Add variable" menu with preset maths. The variables are: New unit price, Saved $ per unit, Original unit price, Unit quantity, Buy quantity, Got quantity, Discount, Saved percentage, Saved $ total, Product title, New total price, New price per item and Original total price.
- Use New price per item with the unit label for the bar price line, and Saved $ total in the SAVE label. [L0861, 2026; L0862, 2026]

**Bars and badges**

- Bar settings: Add upsell, Add gift, Add personalisation, Add highlights, Show as Sold out, Show quantity selector and Selected by default. Each bar can carry its own title, subtitle, label, badge style and badge text. [L0861, 2026]
- Badge styles in the example bundle: Simple for the single-unit bar, Most Popular for the two-unit bar and Best Value for the three-unit bar. Badge text is free to set, for example "Great Start!", "Most Popular" and "Best Value". [L0861, 2026]
- Bundle with a free gift: a free gift on the two-unit and three-unit bars gives the customer both a discount and extra value for buying more. This helps move them from one unit to at least two. Use the same gift logic on any higher-quantity bar. [L0861, 2026]

**Gifts**

- Gifts added to a bundle receive an automatic 100% discount, so the free item costs nothing at checkout. Add the free gift to the Buy Two and Buy Three bars, and to a Buy Four bar if one exists. A buy-four bar needs its own gift. [L0861, 2026; L0862, 2026]
- Gift options in a bar: Add gift offers "Single gift" or "Multiple gifts selector". Toggles: Show original price, Include in compare-at price and Apply only for subscriptions.
  - Leave "Include in compare-at price" on if the free gift's value should count toward the savings shown.
  - Use "Apply only for subscriptions" to limit a gift to subscription orders. [L0861, 2026; L0862, 2026]

**Variants and product selection**

- Leaving the variant selector on for a product with no variants adds an unnecessary step for the customer. Turn it off in the settings when the product has no variants. [L0862, 2026]
- Variant options in Kaching Bundles: "Show variant selection for single quantity deal bar", "Hide theme variant picker", "Hide unavailable variant options", "Don't update other products when a variant is selected", "Set default variants" and "Add swatches". For a product with no variants, turn off "Let customers choose different variants for each item" so the selector does not appear. [L0862, 2026; L0861, 2026]
- Each bar selects its products via "All products", "Selected products" or "Selected collections", with a search filter. A counter shows how many products are selected out of the allowed maximum (200 in the example). [L0862, 2026]

**Visibility, schedule and states**

- Visibility and activity settings: Markets set to All, Exclude B2B customers, and the checkbox "Apply discount only via bundle widget", kept as shown in the default setup. Set Active dates (Start date, optional End date) only if the bundle has a limited run. [L0861, 2026; L0862, 2026]
- Active dates: the Other settings > Active dates section has Start date, Set end date and Start time fields. The start time is shown with the store's time zone (the example store showed GMT+9:30). Set both a start and an end date for limited-time bundles, and check the time zone before relying on the schedule. [L0861, 2026]
- Bundle deal states in the Kaching Bundles list: Active, Inactive and A/B test archive. Use Save as draft to keep changes unpublished and Publish to make the bundle live. [L0861, 2026]
- Mistake to avoid: leaving the variant selector on for a no-variant product, as above. [L0862, 2026]

### Bundle widgets on the product page (Rebuy and general)

**Principles**

- A dynamic bundle lets customers add several related products to the cart with one click. This shortens the path to a larger basket on the product page. [L0557, 2025-26]
- A dynamic bundle widget lets shoppers add several products to the cart with one click, and change the set by selecting or removing items first. Suggesting frequently bought together items, complete-the-look sets or curated product bundles reduces shopper decision fatigue and raises average order value. [L0559, 2025-26]
- Bundle offers on the product page can be built with the Kaching Bundles app. Use quantity tiers (for example buy 2 or buy 3 with a percentage off) and gift-style tiers (for example buy 3 and give 2 to someone). Place the bundle widget above the Add to Cart button so the offer is seen before purchase. [L1188, 2026]
- Use the same offer set across product pages and the cart, so the customer sees a consistent deal. Bundle apps can build buy-one-get-one-free, buy-X-get-Y-free and volume-discount offers. [L1411, undated]

**Example data source (demo)**

- In the demo bundle, the Rebuy Mug ($10.00, White), T-shirt ($25.00, White / XS) and Bold Brew ($10.00, 1lb) add up to a total price of $45.00. The data source preview lists recommended items under the label "Frequently Bought Together" with their individual prices and a combined total, and the total is shown above the Add to Cart button before any discount is applied. [L0557, 2025-26]
- The bundle's total price is calculated from the included products and shown above the Add to Cart button before any discount. Discount settings sit in a separate Discount tab in the widget editor, so they can be adjusted without changing the product list. [L0557, 2025-26]

**Discount values in the widget**

- A Widget Discount only shows the saving visually on the bundle. It does not reduce the price in the cart. Real discounting requires either a Shopify Scripts discount (Shopify Plus only) or a Shopify automatic discount. [L0559, 2025-26]
- To set a discount per rule: open the rule, choose Widget Discount, select Percentage and enter the value. Each rule can have its own percentage. Rule titles should state the saving, so the shopper sees the discount in the bundle heading. [L0559, 2025-26]
- Setting one discount for a whole widget: if all bundles of one widget share the same discount, set it once in Widget Settings under the Discount field (for example 10% or 15%). Use rule-level Widget Discount percentages on the data source only when different bundles need different savings, and keep each percentage identical to the matching Shopify automatic discount. [L0559, 2025-26]
- Each bundle must be its own Shopify product, so bundle counts grow quickly. Five accessories with one bundle per accessory means at least five bundles, and every added combination multiplies that number. Keep the set small and limited to the best-selling accessories so shoppers are not overwhelmed. [L1357, 2018]

**Rebuy merchandising tools**

- ReBuy merchandising widgets include personalized product carousels, product add-ons and dynamic bundles. Add-ons and bundles are the offer types to use when raising order value on product pages and in the cart. [L0593, 2025-26]

### Page-builder embeds (PageFly and others)

- Integrate a bundle app such as White Bundle or BundleBear into PageFly pages:
  1. Find the HTML/Liquid section in PageFly.
  2. Copy the embed code from the bundle app.
  3. Place the code in the HTML section, positioned right after the "Add to Cart" button.
  4. The app widget will display on the product page.

  Different apps provide different code formats. Consult the app's documentation. [L0321, undated]


Part 21 of 40 of "7. Offers Pricing and Bundles: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles.md · Previous: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/20-bundle-offers-and-where-to-put-free-shipping.md · Next: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/22-rebuy-smart-cart-tiered-progress-bar-and-discount.md
