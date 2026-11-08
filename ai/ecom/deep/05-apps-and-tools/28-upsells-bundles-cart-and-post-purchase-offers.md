<!-- part of ecom/deep/05-apps-and-tools.md -->
Part 28 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/27-announcement-bars.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/29-rebuy-smart-cart.md

## Upsells, Bundles, Cart and Post-Purchase Offers

### Choosing the offer stack

- Bundles, quantity breaks, upsells and cross-sells are usually built with dedicated apps, and several apps exist for each job, so compare them before choosing one [L0435, undated].
- Bundle and upsell apps are an option once the store has more than one product [L0774, 2023]. Complementary-bundle apps work best when the store has a strong product that can be sold as an upsell [L0650, undated].
- Older advice: add post-purchase and cross-sell apps only once the store grows and average order value matters, because they are not needed on day one [L0968, 2021].
- Older advice: do not use urgency timers or urgency apps unless there is a specific real deadline, such as a delivery date before Christmas [L0968, 2021].
- Timer values in the sources differ by context. Kaching Cart and OCU setups use a 3-minute timer [L0560, 2026; L1141, 2026]. A 20-minute deadline appears as an example in post-purchase SMS and email text [L0789, 2022]. Use any timer only with a real deadline, as the older rule states [L0968, 2021].
- For free-gift content, use ChatGPT to brainstorm bundle names, offer copy and persuasive framing before you build offers in the store [L0232, 2026].
- For free-gift content, use ChatGPT to create instructional eBooks, email sequences, guides and digital resources. They cost nothing to produce but add perceived value to higher-tier bundles [L0232, 2026].
- A native Shopify discount system can apply a discount automatically when a customer adds 2 or 3 units. The discount appears without codes or third-party apps, which reduces friction in multi-buy decisions [L0233, undated].
- Planning helper: the BSGR Product Upsell Planner (Google Sheets) can be exported via File > Download as.xlsx,.ods,.pdf,.html (zipped),.csv (current sheet only) or.tsv (current sheet only) [L0448, 2021].

### Bundle Bear

#### What it does
- Bundle Bear creates product bundles, volume discounts and free-gift offers in Shopify [L0634, undated].
- Offer types, as described by the app: volume discount (more items, bigger discount), mix and match (discount for different products bought together) and cart goal (discount when the cart reaches a set value, e.g. $50) [L0477, undated].
- Bundle and volume discount are the two most-used types [L0476, undated].
- Volume discount example: buy 2 and save 10%, buy 3 and save 15% [L1220, undated].
- Bundle option for two complementary products: save 10 dollars when buying both, or save 20 dollars when buying two items [L0476, undated; L0634, undated].
- Free-gift bundle: set the second product as a free gift and select which product is the gift [L0476, undated; L1220, undated].
- Bundle link with no discount: shows that both items can be bought together [L0476, undated; L1220, undated].
- Example offer from one store: buy two, get 20% off plus a free gift [L0549, undated].
- Discount formats differ by source. Fixed-dollar amounts (10 or 20 dollars) are used for the two-item bundle, and percentages (10% and 15%) for volume tiers. Use the format the offer type requires [L0634, undated; L1220, undated].
- The lesson used the Bundle and Volume discount options. Advanced settings include a must-choose-option rule, country limits, start and end dates and rounded prices [L0634, undated].
- Economics reported in the lesson: a 40 to 50 percent bundle take rate and roughly $40 extra profit per order. Treat these as reported results, not guarantees [L0650, undated].

#### Setup procedure
1. Install Bundle Bear from the Shopify App Store and click Install app.
2. Click Create offer.
3. Choose the offer type. Bundle and volume discount are the two most-used types.
4. For a bundle, select the first product and the second product. Choose the discount: save 10 when buying both items, or save 20 when buying two items. Alternatively, set the second product as a free gift and select which product is the gift. Or choose no discount to show that both items can be bought together.
5. Open advanced settings. Choose whether the customer must choose an option, limit the offer to a country, set a start date and end date, and enable Round discounted prices with.99 as the ending.
6. Save the offer.
7. Open Design to change alignment, colors, and the button color to match your store. Change the text if the ads target a country with a different language.
8. Click save.
9. Open Embeds in the theme editor, check the installed apps, and switch Bundle Bear on.
10. Open the product section, click Add block, and choose Bundle Bear. Drag it below the buy buttons.
11. Check the layout on a mobile phone, then save. [L0476, undated]

- Offer options: click Add option to add tiers. Advanced settings include custom badges, start and end time for urgency, and rounding of discounted prices (e.g. to 50 cents or per dollar). Click save and activate [L0477, undated].
- Placement by source (sources differ, so test them):

| Source | Placement | When it applies |
|---|---|---|
| [L0477, undated] | Below the quantity selector on the product page | Offer block placement in the app's setup |
| [L0476, undated] (step 10), [L0634, undated] | Below the buy buttons, not below the discount | Theme block placement via Embeds and Add block |
| [L0549, undated] | Below product image and title, above the regular Buy Now button | One store reported this position drove most of its sales and raised average order value |

- Mobile is the most important view, so check the layout on a phone before publishing [L0634, undated; L0476, undated].

### Kaching Bundles

- Kaching Bundles is a Shopify app for building product bundles with quantity breaks, Buy X Get Y deals, subscriptions and free gifts [L0861, 2026; L0862, 2026].
- It creates quantity-break tiers, such as 2-pack and 3-pack offers with percentage discounts, directly on the product page. It is the tool used to build bundle tiers [L0860, 2026].
- Use it for all bundle offers, starting with a basic setup [L1299, 2026]. It is also listed as the bundle tool in the build [L1149, 2026].
- Find it by searching the Shopify App Store, install it and approve the billing permissions [L0861, 2026].
- Billing: the app bills from the first customer checkout that uses a bundle, with a fee of about $15 in the setup shown [L0861, 2026]. Reported as $15 from the first checkout made through the app [L0862, 2026]. Verify the current price and billing terms inside the app before publishing live bundles [L0861, 2026; L0862, 2026].
- The dashboard shows Added revenue, Orders with bundles, visitors and AOV for each bundle deal. Filters for 24 hours, 7 days, 30 days and All time show deal performance. The Store widget status must read enabled [L0861, 2026].
- The optional store widget displays the bundle offers in the store [L0862, 2026].
- Kaching suite: Kaching Cart, Kaching Bundles, Kaching Upsell, Kaching Popup and Kaching Subscriptions are separate apps. Each adds its own blocks to the product page or cart drawer in the theme editor [L0560, 2026; L1188, 2026].

### Rebuy dynamic bundles

#### Creating the bundle widget
1. In Rebuy, go to Widgets > Product Page > New Widget.
2. Scroll to Dynamic Bundle, click Create new, name it Dynamic Bundle Offer and confirm with Create it! [L0557, 2025-26]
- The default data source rule for a new dynamic bundle is "if anything, return recommended AI". It compares the main product with products other customers bought together with it [L0557, 2025-26].
- A purchase-based recommendation rule works well as a starting point for bundles because it needs no manual product picking. It relies on what customers actually buy alongside the main product [L0557, 2025-26].
- To create or edit a dynamic bundle, go to the product page tile in the Rebuy app and select the widget. If none exists, create the dynamic bundle widget there first, then open its Data Sources page from the widget [L0559, 2025-26].

#### Widget ID
- The widget ID appears in the widget header (e.g. Dynamic Bundle Offer (ID: 117326)) and as the number in the edit page address, /widgets/id/<ID>/edit. Copy this number for the Shopify app block field or the manual div [L0557, 2025-26].

#### Installing with Shopify App Blocks
1. Copy the widget ID shown in the widget header (e.g. Dynamic Bundle Offer (ID: 117326)).
2. Click Install (top right) in the Rebuy widget editor, then click add block to my online store.
3. In Shopify's theme customizer, open the product page template.
4. Add a block (new section or existing section) and choose Rebuy Widget under APP BLOCKS.
5. Paste the widget ID into the Widget ID field.
6. Click Save.
7. Open a product page to confirm the bundle shows. [L0557, 2025-26]
- The Rebuy Widget app block has these fields: Enable Widget (on), Widget ID, Enable Product ID (lets the widget use the product ID to return products based on the data source) and Enable Collection ID (lets the widget use the collection ID for the same purpose) [L0557, 2025-26].
- App blocks only appear in themes built for Shopify Online Store 2.0. Use the manual code method if the app block cannot be installed [L0557, 2025-26].

#### Installing manually in theme files
1. In the widget editor, open Placement, expand Manual installation and copy the widget div.
2. Open the theme's three-dot menu and click Edit Code.
3. Open layout/theme.liquid.
4. Add the line RenderRebuyExtensions to theme.liquid, checking the exact Liquid call against Rebuy's install guide.
5. Create a new file snippets/rebuyExtensions.liquid.
6. In that file, write an "if product" block that contains the copied widget div and close it with "end if".
7. Save, open a product page and scroll down to check the widget. [L0557, 2025-26]

#### Editor layout
- Widget editor tabs: General, Language, Data Source, Discount, Timer, Layout, Placement and Images. Preview toggles between Desktop and Mobile, Live Mode is available, and Install and Save sit at the top right [L0557, 2025-26].

### Rebuy data sources for bundles

#### Setting up a data source
1. Open the Widgets section in Rebuy and select the dynamic bundle widget (create one first if none exists).
2. Open the widget's Data Sources page.
3. Click Add Rule and choose the rule type: Product Tags, Collection or Specific Products.
4. Set the condition: for tags use Contains Any and enter the tag; for a collection select the collection; for specific products select the products.
5. Enter the rule title that shoppers will see.
6. If the bundle should show a discount, set Widget Discount to Percentage and enter the value.
7. Turn on Exit if Matched if rules below this one should be ignored when it matches.
8. Click Save and confirm the message that the data source was saved.
9. Create the matching automatic discount in Shopify (see the Shopify procedure) and test the bundle on the storefront. [L0559, 2025-26]

| Rule type | Use it to | Example | Condition used |
|---|---|---|---|
| Product Tags | Pull in every product that carries a shared tag | Tea products | Contains Any + tag name (tea) |
| Collection | Pull in all items of one collection | Jewelry collection | Collection selected |
| Specific Products | Build a fixed set around one product | Supercharge drink plus accessory products | Individually selected products |
[L0559, 2025-26]

- Tag rule example: Product Tags, Contains Any, value tea makes every tea product appear as bundle items on a tea product page. The shopper picks which teas to include before adding the bundle to the cart [L0559, 2025-26].
- Collection rule example: a jewelry collection fills the bundle with options from that collection. Adding the bundle puts all selected items in the cart at once, which reduces shopper fatigue on large ranges [L0559, 2025-26].
- Specific-products rule example: a hand-picked set, such as a main product plus complementary accessories, suits a single high-margin product that should always be sold with the same add-ons [L0559, 2025-26].
- The rule editor shows the rule type, a condition field with operators such as Contains Any, a title field, a sort option (Smart Sort or Recommended (AI)) and the Exit if Matched toggle. Further buttons are Add Before, Add After, Duplicate, Remove and Collapse. Save the data source with Save [L0559, 2025-26].
- Rules are evaluated in order. When Exit if Matched is enabled on a rule, every rule after it is ignored if that rule matches. Put narrow or specific rules above broad ones so the broad rule does not swallow them [L0559, 2025-26].
- Each rule's conditions can be joined with AND or OR. Add rules at a position with Add Before or Add After. Use connectors to combine several tags or products in one rule instead of building many separate rules [L0559, 2025-26].
- Under the data source's filter settings, Filter out of stock products and Filter out of stock variants keep unavailable items out of the bundle. An Add Exclusion filter option removes specific items from the input [L0559, 2025-26].
- The data source name is only visible internally, so use a name that makes the bundle purpose clear to your team. A Clear Cache button on the data source page helps if the widget does not update after changes [L0559, 2025-26].
- Mistake: testing before the Shopify automatic discount is active shows the widget discount but no discount in the cart, which looks like a bug. Create and activate the Shopify discount first, then test in a cleared cart [L0559, 2025-26].
- Bundle items are added to the cart as separate products, not as one bundle SKU, so there is no separate bundle inventory. Stock is managed per item as usual [L0559, 2025-26].
- Shopify automatic discounts apply without a code. They are the method used to make a Rebuy widget discount real, and they can combine with other active discounts if that option is enabled [L0559, 2025-26].
- Rebuy on a product page lets shoppers tick several products and variants and bundle them together. When this builder adds too many clicks, replace it with ready-made bundles that carry a fixed extra discount [L1225, 2025].

### Rebuy product-page widgets

| Widget type | What it does |
|---|---|
| AI Recommendations | Shows items customers also bought, based on the product being viewed |
| Recently Viewed | Shows cross-device browsing history so customers can buy previously viewed products |
| Add to Cart Upsell (Popup) | Popup at add-to-cart offering a higher-value alternative |
| Add to Cart Subscription Upsell (Popup) | Popup at add-to-cart offering a subscription instead of a one-time purchase |
| Add to Cart Cross-Sell (Popup) | Popup at add-to-cart asking if extra items should be added |
| Product Add-Ons | Lets customers add accessories to the cart when the main product is added |
| Featured Items | Shows specific products or collections, e.g. new products, top sellers or sale items |
| Buy It Again | Shows previously purchased items, falling back to top-selling items |
[L0557, 2025-26]

### ReBuy as a platform

- ReBuy is a Shopify app that uses AI to personalize product recommendations across the shopping journey. Stated goals: higher average order value, conversion rate and customer lifetime value [L0593, 2025-26].
- According to the vendor, ReBuy can be set up on a Shopify store in minutes without coding or developer skills. Treat this as a vendor claim and verify it on your own store [L0593, 2025-26].
- Custom rules can be stacked on top of each other to control which products appear where and how often. This supports a deliberate merchandising strategy instead of default recommendations [L0593, 2025-26].
- ReBuy connects directly to other tools in the store's tech stack and works with several third-party integrations. Check the integration list against your own apps before installing [L0593, 2025-26].

### Product-page upsells and cross-sells (Bold and related apps)

#### Bold apps
- Bold Upsell, sold by Bold under the name Product Upsell, adds upsell products to product pages to present complementary items at the point of sale [L0247, 2021].
- Bold Product Upsell is a paid Shopify app that shows related accessories to shoppers. It offers a 14-day free trial, then costs just under $10 per month [L0469, 2021].
- Bold Upsell costs 10 to 90 dollars per month depending on how many people see the upsells. A store with low traffic typically pays 10 to 20 dollars per month. Each upsell takes about 15 to 30 minutes to configure [L1076, 2019].
- Different app, same kind of offer: the Shopify product upsell app shows add-on offers after an item is added to cart and at checkout. It has a 30-day free trial, then costs about 10 to 60 dollars per month, depending on traffic and sales volume [L0923, 2015].
- Bold Product Options and Bold Product Upsell are the cross-selling and product-option apps recommended for upsell and variant-option needs [L0429, 2022]. Both are apps for cross-sell and upsell offers in the Shopify app store [L0963, 2022].
- Bold Product Options and Bold Product Upsells let customers add options and extra items to the order. They are preferred over creating new bundle SKUs in Shopify [L0967, 2020].
- Bold Upsell is used for upselling and Bold Product Options for cross-selling bundles [L1113, 2022].
- Bold Upsell is used for post-purchase upsells. Bold Product Options is used for cross-sells [L0968, 2021].
- Bold Upsell adds upsell and add-on products, and is used to increase average order value [L1087, 2020]. The speaker reported long-term use without issues [L1088, 2020].
- Bold Cross Sell shows add-on products as add-to-cart options on the product page, which raises cart value. Use it for add-ons the buyer needs that are too expensive to give away. Example: a 200 USD product with 30 USD straps and a 50 USD cover raises the cart to 280 USD [L1110, 2019].
- Upsells and cross-sells on the product and post-purchase pages were built with custom code on Shopify, with Bold Upsell for upsell functions [L1109, 2018].
- Rule: enable the cross-sell app only after you have selected a collection for it, otherwise it has nothing to show. It is not needed on a demo store and is covered once the store has live products [L0976, 2024+].

#### Bold Sales Motivator (threshold display)
- Bold Sales Motivator shows a shopper how close they are to a free bonus, for example in a spend X to get X offer, so the threshold is visible and encourages the shopper to reach it [L0757, 2022].
- It shows how far shoppers are from a cart threshold as they add items. Use it for offers such as a free gift over 1,000 dollars, and turn it off as soon as the promotion ends [L1204, 2022].

### Cart drawers and cart-stage upsells

#### Cart drawers
- Slide Cart (Slide Cart Drawer) slides the cart out over the current page. Its cart function is free, while its upsell function is paid [L0339, undated].
- The cart drawer opens on the same page as the product, so customers do not need to go to a separate cart page and press back. Cart and checkout feel faster and more fluid [L0339, undated].
- Monster Cart Upsell is a cart app that shows complementary product offers and slide-out cart blocks. It works best when the store has several complementary products [L0871, 2021+].
- Upcart automates upsell prompts at checkout when the cart value reaches set thresholds, encouraging customers to add items or upgrade to higher bundles, which increases AOV [L0232, 2026].
- After a customer clicks add to cart, a product recommendation app can show related items on the cart step to raise average order value. Use it alongside a post-purchase upsell page, not instead of one. The app named in the lesson for the post-purchase upsell is AfterSell [L1131, 2018+].

#### Free-gift threshold messages
- Shopify apps can show a cart message that says how much more is needed to unlock a free gift. Search the Shopify App Store for free gift threshold apps [L1094, 2023].
- Monster App adds free gift offers to orders, but its usage fees are high. Operators may look for a theme with built-in free gift options to replace it [L1173, undated].

#### Kaching Cart
- Kaching Cart is a Shopify app that controls the cart and checkout entry point. It adds urgency messages, timers, promotion progress bars, upsells and trust badges [L0560, 2026].
- Cart settings sections in the left menu: General, Top bar, Timer, Promotions progress bar, A/B test, Edit translations, Product upsell, Products in cart, Side product upsell, Footer, Discount, Sticky Cart and Kaching Upsell [L0560, 2026].
- Make sure Cart is enabled is on. Cart mode is set to Previewing items in this setup, and Cart is enabled must be switched on before any other cart setting takes effect [L0560, 2026].
- Side product upsell: on mobile, the side upsell appears inside the cart drawer and can be dragged into position. Options include Hide upsell if product already in cart, Automatically remove when the cart is empty, Automatically add the upsell product and Show Saved N badge [L0560, 2026].
- Upsell toggles (used for shipping protection): set Display mode to Standard in checkout button. Fill Text when is not in the cart with ((upsell_toggle_price)) ((upsell_toggle_title)) and Text when is in the cart with Includes ((upsell_toggle_price)) ((upsell_toggle_title)). The add-on then appears as a toggle next to the checkout button [L0560, 2026].

#### Kaching Cart setup sequence
1. Open Apps > Kaching Cart > Cart settings and confirm Cart is enabled.
2. Under Top bar, enter a warning message about stock scarcity.
3. Under Timer, set the countdown to 3 minutes and turn on Reset timer when products are added to cart.
4. Under Promotions progress bar, set the threshold, the reward and any tiers.
5. Under Trust badges, upload the Trustpilot badge image and set it to show under the checkout button.
6. Switch off Shipping protection and Footer while testing a product.
7. Go to Settings > Checkout > Editor > Header > Logo and upload the Trustpilot-formatted logo.
8. Go to Online Store > Themes > Edit default theme content, search for checkout, find Checkout alternative payment method banner and enter a low-stock message. [L0560, 2026]


Part 28 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/27-announcement-bars.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/29-rebuy-smart-cart.md
