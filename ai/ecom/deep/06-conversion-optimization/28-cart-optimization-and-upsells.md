<!-- part of ecom/deep/06-conversion-optimization.md -->
Part 28 of 40 of "6. Conversion Optimization: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/06-conversion-optimization.md · Previous: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/27-checkout-trust-and-branding.md · Next: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/29-funnel-triggers-branching-and-timing.md

## Cart optimization and upsells

### Cart drawer and cart page design

- Replace the Buy Now button with an Add to Cart button and use a cart drawer. Shoppers stay on the product page, can close the drawer, and keep shopping without losing their place. [L0339, undated]
- Open a slide-out cart on add to cart instead of sending the customer to a separate cart page. This removes one step between product page and checkout and keeps the customer on the page while they read. [L1225, 2025]
- Build the cart and checkout for simplicity:
  1. Use a cart drawer (AJAX cart) that opens on add to cart.
  2. Put a one-click button in the cart that leads directly to checkout.
  3. Do not show extra steps or questions before checkout.
  4. Place the terms and conditions on the checkout page itself, using the Shopify option for this, instead of as a required step earlier in the flow. [L0387, 2022]
- Use this element order in a slide cart:
  1. TrustPilot rating and payment badges placed under the cart.
  2. Urgency message: "Your order reserved for 5-10 minutes."
  3. Free shipping bar.
  4. Progress bar.
  5. Optional cross-sell, added only with care. [L1299, 2026]
- Slide-cart apps: UpCart is the default. AMP Slide Cart is another solid option, and some themes such as Shrine include their own slide cart. [L1299, 2026]
- Choose a single or double column layout based on target market and product mix, not on what is trending. Double column carts were popular for a time but are used less often now. [L1231, 2025-26]
- Components can be moved by drag and drop anywhere in the cart, so placements can be A/B tested later. [L1231, 2025-26]
- A login button in the cart can drive sign-ups and segmentation, for example by linking to a loyalty program form on the customer account page. Customer rules can use login status and customer account tags to target promotions. [L1231, 2025-26]
- The checkout area can show a view cart button linking to a full-page cart, which is useful for products with delivery date rules. A continue shopping button closes the cart modal, and its label can be edited to match the brand voice. [L1231, 2025-26]
- On desktop, shoppers may not know that the X or a click outside the cart closes it. A visible continue shopping button helps; change its label to match brand voice and target market. [L1231, 2025-26]
- A discount code input in the cart lets customers enter a code and see its effect on the subtotal before checkout. A code entered in the cart is already applied at checkout, so it does not need to be re-entered. [L1231, 2025-26]
- Example of a checkout cart: a free shipping progress message, a free product unlock at $40.06 added as a line item, a subscription upgrade offer saving 20%, an SMS sign-up offer of 10% off, and an order notes field. The subtotal of $59.94 was shown with two interest-free installments of $29.97 through Shop Pay, Klarna or Afterpay. [L1231, 2025-26]
- A cart can show that an order includes a free gift. This signals value before checkout and makes the buyer feel they get a lot for the price. [L0919, undated]
- Kaching Cart warning message: set it under Kaching Cart > Cart settings > Top bar. Write it as a stock-scarcity statement that includes a sold-out count and a call to order now. [L0560, 2026]
- Trust badges in Kaching Cart: under Kaching Cart > Cart settings > Trust badges, upload a custom badge image in PNG or JPEG format showing the rating and the Trustpilot logo, and name it "Trustpilot". Set it to show under the checkout button, and adjust the Logo size, Icon size and Text size fields. The lesson's example badge width is 150 px. [L0560, 2026]
- Name custom trust badges clearly so they are easy to find in the badge list, for example "Trustpilot" or "Choice by Trustpilot", matching the uploaded image. [L0560, 2026]

### Cart-page recommendations and reminders

- A "Your cart is ready" reminder box on the homepage, showing cart items, total price and a "Continue to checkout" button, generates a +9.2% conversion rate lift. [L0197, 2025-26]
- The homepage reminder delivers stronger lift when visitors have multiple items in the cart rather than a single item, and the biggest improvement comes from returning customers. [L0197, 2025-26]
- Product recommendations on cart pages with zoom and add-to-cart buttons, which keep customers on the cart page, generate a +4.5% conversion rate lift. [L0197, 2025-26]
- Customers who click cart recommendations to open a full product page interrupt their checkout flow and add friction. Keeping zoom and add-to-cart on the cart page maintains purchase momentum. [L0197, 2025-26]
- Recommendations driven by customer behavior and purchase history outperform manual picks based on bestsellers or store assumptions, because they match individual interests rather than store preferences. [L0197, 2025-26]
- Example: Oodie replaced its 2-item PDP recommendation slider with a 2x3 grid using Visually's behavior-based engine (browsing history plus purchase history), which increased CVR and revenue per session. It then replaced SearchSpring with Visually recommendations across all product detail page and cart regions. [L0197, 2025-26]
- Cross-sell widgets can sit at different points in the cart, such as the top to draw attention, or just above the checkout button so shoppers do not forget free samples. This is the main way to build a selectable gift with purchase. [L1231, 2025-26]
- A new Smart Cart automatically creates and installs a cross-sell widget, so the cart has recommendations from the start. Duplicating a cart keeps the same widget ID, and the data source or layout is edited in the widget settings, not the cart settings. [L1231, 2025-26]
- Several cross-sell widgets can be added to one cart. Use separate widgets to show different recommendations to different customer groups, or to run customer-based discounts that need their own widget ID. [L1231, 2025-26]
- Cart-page offers convert well because the customer is already in buying mode, so upsells placed there are worth testing. [L1410, 2023]
- The cart page is a strong place for pre-checkout upsells because buyers there are close to paying and in a buying mood. The product page suits bundle and buy-one-get-one offers. [L1412, 2023]
- Tiered cart goals with a progress bar in the cart drawer: at about $15 cart value free shipping unlocks, at $30 a free gift, and at $60 to $70 a 20% discount. [L1410, 2023]
- Free-shipping upsell: show the amount still needed to unlock free shipping, for example "add $20 to unlock free shipping" when the cart is under $40, or "add $3.99 for free shipping". This makes customers add an item. [L1410, 2023]
- Checkout message: show the amount needed to qualify for free shipping (for example "Add $11 more to qualify for free shipping") with a suggested product. This encourages customers to raise order value to reach the threshold. [L0298, 2023]

### Pre-selected add-ons and cart cross-sells: conflicting advice

- Pre-selected add-ons on the cart page, such as priority processing, shipping protection or a warranty, are rarely unchecked, reportedly about 80% of the time. Keep add-on prices low, for example $3.90 to $5 or under $5. About 60% of orders may accept an extra $3 to $5 this way. [L1410, 2023]
- one source (2026) advises caution: cart cross-sells can lower conversions and cause complaints about products that were added automatically. Test them carefully, and keep cart upsells off until the store is scaling. [L1299, 2026]
- Both values apply in different situations. Pre-selected, low-priced protection and add-ons suit a store that tests them with a clear benefit and a small price. Unrequested automatic cross-sells belong after the store is scaling and has measured their effect. [L1410, 2023; L1299, 2026]
- one source says upsell recommendations can be placed before the cart rather than at checkout, which reduces clutter at checkout. Test this with an upsell app before removing anything. [L0963, 2022]
- one source says not to add a pre-checkout upsell to a cart page that already carries several extra elements beyond the standard Shopify cart. Add one only when the cart page is otherwise empty, because upsells must not deter the purchase or overload the page. [L1409, 2021]
- Too many cart extensions crowd the cart and distract shoppers. If a store already runs two or three cart extensions, weigh carefully before adding Checkout Plus or package protection. [L0955, 2025-26]

### Upsell and cross-sell placements

- Upsells can be deployed at three moments: on the product page before checkout, in the shopping cart, or on a post-purchase page before the thank-you confirmation. [L0203, 2021]
- Upsells and cross-sells can be placed at four points: pre-sell, the product page, the cart page, and a post-purchase funnel after checkout. Each placement can raise average order value and profit margin. [L0434, undated; L0435, undated]
- Pre-checkout offers appear on the product page or in the cart before payment. Post-purchase offers appear after payment and before the thank-you page. [L1412, 2023]
- Pre-purchase upsell and cross-sell offers can appear on the collection page, product page, cart drawer, cart page or checkout. Test each placement separately. [L1411, undated]
- Post-purchase offers appear after payment and before the thank-you page. The buyer has already entered card and address details, so they can accept with one click. This is why the stage is a must-have funnel. [L1411, undated]
- Post-purchase upsells convert better than pre-checkout upsells because the buyer has already decided to buy. They also need no new card details, only one click on a Pay Now button. [L1410, 2023]
- Post-purchase upsells convert better than pre-purchase offers because the buyer has already committed to the store. Stores with only 1 to 5 orders per day should implement them. [L1412, 2023]
- Post-purchase upsells are worth setting up even for a store with only one to five orders per day, because a customer who has just paid is more likely to accept an extra offer than one still browsing. [L1410, 2023]
- A complementary product added in the cart drawer works well because the buyer is already in buying mode. A supplement or closely related item, such as a matching tool set, is more likely to be added than an unrelated one. [L1411, undated]
- Complementary items convert better than unrelated ones. A second funnel can add another offer on a product compatible with the item the customer is buying. [L1141, 2026]
- Offer add-ons before checkout, on the product page, because customers decide early. Pre-checkout add-ons such as a $200 paddle or $100 case increase order value. [L1109, 2018]
- Add-ons on the product page: add-on product options, bold text highlighting customizable features, and optional product bundles can be built into Shopify without external apps. [L0245, 2020]
- Product page upsell apps with options should be added to product pages, not used to split product variants into separate products when you need one shared product page with different options. [L0856, 2024]
- Show a single clear image on the product page for buy-one-get-one offers and bundles. Cross-selling an unrelated product through a free-item offer lowers conversion unless the product is simple and easy to understand at a glance. [L1410, 2023]
- Free ebooks or guides with purchases, and $1 upsells on nominally free products, raise perceived value and goodwill without eroding margins through percentage discounts. [L0324, 2025+]
- one source's sales sequence for upgrades:
  1. Display comparison charts on product pages showing feature and benefit differences between standard and premium versions.
  2. Offer shoppers the option to upgrade to a premium version directly in their cart before checkout.
  3. Present an extended warranty option at checkout.
  4. Offer priority or expedited shipping as an upgrade.
  5. Follow up with a phone call after purchase to recommend complementary services such as installation, design consultation, or membership programs. [L0240, 2019]
- one source's cross-sell pop-up setup (2025):
  1. In Shopify go to Online Store > Themes > Customize > Theme settings and scroll to the cross sell pop-up settings.
  2. Turn the cross sell option on and enter a heading.
  3. For the first option, choose a collection that contains at least one product, for example a wetsuit collection.
  4. Save the settings.
  5. Open each product that should trigger the cross sell and add the tag cross-sell-1, then save.
  6. Preview the product, add it to the cart and confirm the pop-up appears. [L0667, 2025]
- Gift-with-purchase: a cross-sell widget at the right point in the cart is the main way to build a selectable gift with purchase. [L1231, 2025-26]

### Multi-channel and customer-group upsells

- Make each upsell offer through more than one channel at the same time. Customers engage with different formats, and some only act after hearing the same offer several times. [L1409, 2021]
- Upsells can be presented on-site, by email, and through customer service (phone or chat). Using all three is recommended, but a single on-site position can be skipped if other page elements already fill the site. [L1409, 2021]
- Among the three channels, email and phone or chat customer service have been reported as the highest-converting, so they are the priority when time or resources are limited. [L1409, 2021]
- A post-checkout upsell is the most consistently effective on-site position. The sale is already completed and the customer is in a buying mood, and it interrupts the purchase less than other positions. [L1409, 2021]
- Hyperspenders keep buying from the same business after a first purchase and are the main audience for upsells. For this group, several upsells in a row can work well. [L1409, 2021]
- On-site upsell setup steps:
  1. Decide which on-site positions to use (product page, cart page, post-purchase) based on what already runs on the site.
  2. Install Frequently Bought Together and place its box under the Add to cart button on the product page.
  3. Attach each core product's related upsell products exactly as listed in the upsell planner sheet.
  4. Install One-Click Upsell and assign the post-purchase upsells to each top product.
  5. If the cart page has room, add pre-checkout upsells in the same app.
  6. Design the upsell page and set the offers and quantities per product, using split tests where useful.
  7. Let the apps run and check which upsells appear and convert over time. [L1409, 2021]

### Bundles

- Bundle offers with strong discounts, for example two items for $30 when one costs $25, drive customers to buy multiple units even for simple products, which increases AOV significantly. [L0298, 2023]
- Bundle Bear sends customers directly to checkout without an intermediate bundle-selection page. This reduces friction compared with apps that require a separate step, and the advantage benefits simple two-unit offers. [L0298, 2023]
- Dynamic bundle widget on a product page: the current product is listed as "This item", and each additional bundle item shows its price and a selection control. A "Total Price" line sits above the Add to Cart button, and the shopper can deselect any item before adding the bundle. A separate "What's Trending" section can sit below the bundle. [L0559, 2025-26]
- Savings labels need a visible saving. A saving of only $0.05 in the SAVE label does nothing for conversion, so the compare-at price must be set higher than the bundle price, around $30 to $40 or about 50 percent above the price (for example for a bottle selling near $20). [L0861, 2026; L0862, 2026]
- Showing the saved amount next to the price helps customers see the value of buying more units and raises the chance they move from one unit to two. The compare-at price is the reference point for that saving. [L0861, 2026]
- Savings label pattern: show the amount saved against a higher compare-at price, using the saved-total variable in a label such as "SAVE" followed by the saved amount. It works because customers see the gap between the most expensive reference price and what they pay now.
  - Example 1: a label reading "SAVE $20.00" on a two-pack priced at $29.99 against a $50 compare price.
  - Example 2: a label reading "SAVE $15.00" on a three-pack priced at $44.95 against a $60 compare price. [L0862, 2026]
- Pricing options in bundle settings: Show prices per item, Use product compare-at price, Show prices without decimals, and Price rounding. Cart option: Skip cart and go to checkout directly. [L0862, 2026]
- Badge styles per bar: "Simple" for the one-unit bar, "Most Popular" for the two-unit bar, and a "Best Value" badge text for the three-unit bar. The "Show quantity selector" option controls whether the customer can change the quantity on a bar. [L0862, 2026]
- Kaching Bundles has a "Setup A/B test" option in the bundle editor for testing two versions of a deal. Use Save as draft and check Product preview and Country preview before publishing. [L0862, 2026]

### Add-ons, replacement offers and expedited shipping

- Add-ons that raise AOV include an expedited shipping upgrade, an extended warranty, or a related physical product. The best option depends on the product and what the niche buyers want. [L0970, 2023]
- Replacement-item upsell: after the customer clicks Add to Cart, a pop-up offers a larger or better version of the same product, for example a 2 lb bag of coffee instead of a 1 lb bag for $3 more. The buttons are "Replace item", which swaps the cart item, and "No, thanks", which keeps the original. [L1076, 2019]
- Offer expedited shipping upgrades, such as 24-hour delivery for an extra $50, only when the supplier can actually deliver at that speed. Confirm the supplier's capacity before offering it. [L1109, 2018]

### Extended service and protection offers

- An extended service guarantee bought from a supplier at about $20 per year can be resold to the customer for about $100 per year. This works only with a supplier that agrees to the deal, and it is rarely done. [L0468, 2020]
- A guaranteed free return gives shoppers confidence to add an item they are unsure about, which raises AOV. The effect is strongest when the shopper knows a return costs nothing. [L0955, 2025-26]
- Checkout Plus case: a US apparel brand with about $12 million in annual revenue ran a 50/50 A/B test over two weeks. Half of its shoppers saw the Checkout Plus option in the cart and half had a normal cart and checkout. The Checkout Plus group showed a 2.7% increase in checkout conversion, a 2.4% decrease in cart abandonment and a 4% increase in AOV. These are relative changes, not percentage points. [L0955, 2025-26]
- Package protection in the cart: the speaker reported that conversion rate was not adjusted in 99% of cases, while about 70% of checkouts that offered package protection accepted it. Treat these vendor-reported figures as indicative. [L0955, 2025-26]
- Formula for cart offers: state a clear benefit in a few words and attach a small fixed price, so the shopper sees the trade-off at a glance. It works because it turns a vague future cost into a visible, cheap choice now.
  - Examples: "Add free returns for $3.50 before you check out" and "Pay $2.99 now to skip the $12 return fee later". [L0955, 2025-26]

### Post-purchase funnels: structure and discounts

Post-purchase funnel stages and discounts (example structure, one source 2026):

| Stage | Offer | Discount | If accepted | If declined |
|---|---|---|---|---|
| Upsell 1 (Dynamic) | Same product as bought, second unit (buy two) | 25% | Go to Upsell 2 | Go to Downsell |
| Upsell 2 (AI Generated) | Recommended product, bundle of three units (buy three) | 35% | Customer adds the bundle; funnel continues | Go to Downsell |
| Downsell (AI Generated) | Upsell product as the final best offer | 40% | Order gets the added item | Customer goes to the Thank You or Order Status page |

[L1141, 2026]

- The first post-purchase offer on a different item is typically set at 30-40% off so it reads as an add-on deal. The discounted price must also make sense next to the product page price for the same total quantity. [L1141, 2026]
- one source uses a different ladder: a single-item buyer gets the same product at 15% off as the first upsell, and if declined, the same product at 30% off as a downsell. [L1412, 2023]
- Post-purchase funnels can have several levels: if the buyer accepts an offer such as a product at 30% off, the next offer can be a different item at 50% off. Typically two to three post-purchase offers are shown in sequence. [L1411, undated]
- The thank-you page after an upsell can carry aggressive offers, such as 30 to 60% off, alongside the order, address and payment details. The buyer is already in purchase mode, so these deals convert well. [L1411, undated]
- Showing the same price again after purchase is a weak post-purchase offer and is unlikely to convert. The offer needs a visible discount that is clearly better than the original price. [L1411, undated]
- Offering the same item at a discount tends to convert best, even for expensive or heavy products. Test this before assuming the buyer will not repurchase the same item. [L1412, 2023]
- The final downsell line concedes that this is the best deal available. It is shown with the highest discount and a countdown, so the last offer feels like a fair final price instead of pressure.
  - Examples of the pattern: "Okay, this is our final price on the second copy, and it is the lowest we can offer." and "Last chance: this is the best deal we can give you on this add-on." [L1141, 2026]


Part 28 of 40 of "6. Conversion Optimization: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/06-conversion-optimization.md · Previous: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/27-checkout-trust-and-branding.md · Next: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/29-funnel-triggers-branching-and-timing.md
