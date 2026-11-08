<!-- part of ecom/deep/05-apps-and-tools.md -->
Part 29 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/28-upsells-bundles-cart-and-post-purchase-offers.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/30-bundle-apps.md

### Rebuy Smart Cart

#### What it is
- Rebuy Smart Cart is an app-based, conversion-focused cart that replaces the default cart of a Shopify theme, either a full-page cart or a slide-out cart. It adds features the theme may lack, such as personalized recommendations, progress bars, upsells and subscription options [L1231, 2025-26].
- The recommendations block is powered by Rebuy data sources and its AI recommendation engine. The merchant defines the rules that decide which products appear. The cart also contains a tiered progress bar and an announcement bar, and recommendations can be adjusted in the Rebuy admin [L1231, 2025-26].
- The in-cart cross-sell widget is created automatically with each new smart cart and recommends products in the cart. Recommendations are powered by Rebuy's AI technology by default [L1230, 2025-26]. A new smart cart automatically gets a cross-sell widget [L1230, 2025-26].

#### Versions
- Rebuy no longer lets merchants create new v1 Smart Carts. Existing v1 carts are marked with a Legacy label. A v1 cart can still be duplicated and the duplicate can be edited, but a new cart built from scratch will be v2 [L1231, 2025-26].
- The new cart starts as v2 [L1231, 2025-26].

#### Creating a Smart Cart (v2)
1. Open Smart Cart in the left navigation under Merchandising Widgets.
2. Click New Smart Cart; the new cart starts as v2.
3. Choose either Single Column or Double Column as the layout.
4. Click Create.
5. Configure the cart from top to bottom.
6. Use the preview to check the mobile and desktop views.
7. Toggle Live only when the cart is ready. [L1231, 2025-26]

- Older procedure, same flow with more detail: 1) In the Rebuy admin, open Smart Cart in the left menu and click New Smart Cart. 2) Give the smart cart a name. 3) Choose Single Column or Double Column layout and click Create. 4) Work through the editor's five sections: Fixed Top Bar, Header, Goal Box, Body, Footer. 5) In the Fixed Top Bar, adjust the cart title and the login button. 6) In the Header, click Add and select Announcement Bar. 7) In the Goal Box, click Add and select Tiered Progress Bar. 8) In the Body, click into the Cart Items block for its advanced options. 9) In the Footer, click Add and select Discount Code Input. 10) Drag any draggable component to reposition it. 11) Confirm all changes are saved using the top-right control. 12) Switch the toggle to make the smart cart live. 13) Test the cart on the storefront. [L1230, 2025-26]
- Layout choice is Single Column or Double Column. The cart is named before it is created [L1230, 2025-26].
- The Smart Cart list shows all drafts with Preview, Live toggle and Duplicate options. Use Duplicate to copy an existing cart instead of building a new one [L1231, 2025-26].

#### Cart anatomy (v2)

| Section | Components |
|---|---|
| Fixed top bar | Cart title, login button, mobile/desktop preview, Live toggle |
| Header | Announcement bar, tiered progress bar, discount code input, order notes, custom code block, cross-sell widget (components added via Add Component to Header) |
| Goal box | Area between header and body where the tiered progress bar is typically placed |
| Body | Cart items, empty cart language, subscription upgrade options, cross-sell widgets |
| Footer | Cart subtotal with singular and plural labels |
| Checkout area | Terms and conditions, pre-purchase pop-up, view cart button, continue shopping button, Shop Pay, accelerated checkout buttons, installment payment links |
| Global settings | Custom CSS input, event callbacks (JavaScript event listeners) |
[L1231, 2025-26]

#### Editing components
- Fixed Top Bar > Cart Title: rename the default title to fit the store's wording or theme, e.g. a brand-specific cart title instead of a generic one [L1230, 2025-26].
- Fixed Top Bar > Login Button: enabled by default so customers can log in from the cart. To remove it, use the Hide option on the button [L1230, 2025-26]. The login button can be shown to logged-out customers, or used with customer rules based on login status or account tags for segment-specific promotions [L1231, 2025-26].
- Add components via Add Component to Header. Options: Announcement Bar, Cross-Sell Widget, Custom Code Block, Discount Code Input, Order Notes, Tiered Progress Bar and Smart Cart Apps from partner integrations [L1231, 2025-26].
- Smart Cart > Goal Box > Add Component to Goal Box lists Announcement Bar, Cross-Sell Widget, Custom Code Block, Discount Code Input, Order Notes and Tiered Progress Bar. When no Smart Cart apps are installed, the same panel shows an Add Smart Cart App button instead [L1230, 2025-26].
- Discount Code Input: add it in the Footer via Add and Discount Code Input [L1230, 2025-26] (see procedure above).
- Body > Cart Items > Empty Cart Language: sets the heading and text shown when the cart is empty. A Shop Now link can send customers to a chosen page so they can start shopping immediately [L1230, 2025-26].
- Cart Items > Use Product Metafields: a developer option that lets the cart pull custom product data. It is only useful if custom metafield data is already in use [L1230, 2025-26].
- Switch to Subscription, Product Metafields and Buy More Save More need additional configuration in the editor before they can be published. Keep them disabled until that setup is complete, and follow their setup guides before enabling them [L1230, 2025-26].
- Every component has a Custom Template toggle. When on, the template code is visible and editable inside Rebuy, so customizations are stored in Rebuy rather than the Shopify theme, which makes support easier [L1231, 2025-26].
- Every component has a hide icon that hides it without deleting it, so it can be shown again later. This works like the Shopify theme customizer [L1231, 2025-26].
- Cart subtotal wording: click Cart Subtotal in the footer, open LANGUAGE OPTIONS, and edit Subtotal Label (singular) and Subtotal Label (plural). The item count can be inserted as a variable. Keep the other settings under ADVANCED unchanged unless you need them [L1231, 2025-26].
- Global settings: custom CSS input for styling the cart, and event callbacks for JavaScript event listeners to run custom behavior [L1231, 2025-26].
- Partner integrations extend the cart with social proof and other functions. Examples are reviews apps such as Loox, Yotpo and Judge.me. The partner list includes Klaviyo and Route for better performance [L1231, 2025-26].

#### Checkout area and footer
- Smart Cart footer > Checkout Area Options: under Pre-Checkout Options you can turn on Terms & Conditions and Pre-Purchase Pop-Up. Standard Buttons holds the Checkout Button. Labels and Routing holds the View Cart Button and Continue Shopping Button. Express Checkout Buttons holds Shop Pay and Accelerated Checkout. Additional Options holds Installments [L1230, 2025-26].

#### Tiered progress bar and free products
- Keep Use Shopify Functions (Recommended) switched on. It is on by default under Advanced Bar Settings, powers both product tiers and discount tiers, and is the basis for turning full-priced products into free gifts. The gift area has its own title field under Free Gifts [L1230, 2025-26; L1308, 2025-26]. Keep it on unless you have a specific reason to switch it off [L1308, 2025-26].
- The Use Shopify Functions toggle on a Free Product tier creates a Shopify Functions based discount automatically. This removes the need for a Shopify automatic discount with custom logic or a Shopify Script [L1231, 2025-26].
- Shopify Scripts are being phased out, so discounts that need custom logic should move to Shopify Functions. Rebuy's Functions-based discounts can replace an extra third-party discount app for free product and discount tiers [L1231, 2025-26].
- Mistake: a free shipping tier in the progress bar does not make shipping free by itself. Shipping rates must also be changed in Shopify shipping settings, or free shipping will not apply at checkout [L1230, 2025-26].
- The free shipping tier is a visual element only, with no link to Shopify Functions, so it creates no discount. To give a real free reward, change the tier to a free product tier [L1308, 2025-26].
- Mistake: a product tier with no product selected causes the Tiered Progress Bar to be omitted from the Smart Cart, and an error message appears. Select a product for every product tier, or hide the component [L1308, 2025-26].
- Path: Smart Cart V2 (Main) > Tiered Progress Bar > Configure Tiers > Tier 1. Under Tier 1, use Search Products to pick the product, set the Unlock Price (example: $50), and use Add New Tier to create more tiers. Save the Smart Cart after each change [L1308, 2025-26].
- Free-product reward procedure:
1) Open the Smart Cart, go to the gold box section and add a Tiered Progress Bar.
2) Keep Use Shopify Functions (Recommended) switched on.
3) Switch the free shipping tier to a free product tier.
4) Search for an active, in-stock product that is available on the online store, select it and set the Unlock Price.
5) Save, then preview the Smart Cart and add items until the unlock price is reached.
6) Open the checkout and confirm the reward product is fully discounted. [L1308, 2025-26]
- Product Discount Text: path Tiered Progress Bar > Configure Labels & Text > Product Discount Text. Enter the text that should appear at checkout for the free product reward. If empty, Shopify shows the default name product discount [L1308, 2025-26].
- Mistake: on checkout, the product discount text is taken only from the first product tier, even when several product tiers exist. Give the first tier a generic text such as free gift, because a specific name such as a sandwich will be wrong for the other tiers. Check the tooltip in the tier settings to see this behavior [L1308, 2025-26].
- Emojis can be typed into any text field, including the discount text. On Mac press Control+Command+Space, on Windows press the Windows key and period, then search for the emoji (for example a sandwich emoji) [L1308, 2025-26].
- Discount text update procedure:
1) Save the changed discount text in the Smart Cart.
2) Refresh the checkout page, because the new text only shows after a reload.
3) Check that the text appears next to the discounted item. [L1308, 2025-26]
- Label wording under Configure Labels & Text: the Amount Remaining Label carries a sentence such as "you are ((remaining_amount)) short of ((discount_amount)) off the whole order". The Amount Reached Label is shown once the goal is met, e.g. "you have earned ((discount_amount)) off the full order". Product-tier entries insert ((product_title)), while discount-tier entries insert ((discount_amount)) [L1308, 2025-26].
- Toggles Use Custom Tier Label, Use Amount Remaining Label and Use Amount Reached Label control whether custom texts appear. Enable them to replace the default messages [L1308, 2025-26].

#### Preview and go-live
- Save all changes before switching the smart cart live, since the live toggle publishes the current configuration. The toggle is in the top-right area of the editor [L1230, 2025-26].
- Simulate Products in Cart adds test products to the editor preview, so components that only appear with items in the cart, such as the footer and subtotal, can be seen while editing. It also shows how the progress bar reacts without placing real orders [L1230, 2025-26; L1308, 2025-26].
- The Preview button opens the live online store showing the draft cart, with a bar across the bottom indicating Rebuy preview mode. The visual editor may show fonts and global CSS differently than the store, so check the final result on the store [L1231, 2025-26].
- Mistake: the Smart Cart editor preview does not show how Functions discounts change the cart total. Test discounts on the checkout page or in the storefront preview of the cart instead [L1308, 2025-26].
- To preview a specific Smart Cart on the storefront, use the store URL with the parameters preview_smart_cart=<smart cart ID>, viewcart=true and cart_version=2. This shows that cart's discounts even when it is not the live cart [L1308, 2025-26].
- Troubleshooting: if the smart cart does not appear, the theme's native cart drawer still shows, or both the theme's cart and the smart cart show at once, the cart is not set up correctly. Rebuy provides a separate troubleshooting walkthrough for these cases [L1230, 2025-26].
- Mobile and desktop views should both be checked before going live [L1231, 2025-26].

### Post-purchase offers

#### Tools
- OCU by Zipify is a post-purchase funnel builder considered the best-in-class option, with premium pricing [L0291, undated]. One Click Upsell is an alternative with similar functions that may cost more [L0693, 2024].
- One Click Upsell is a Shopify app that shows extra offers right after checkout, on the thank-you and order-status pages. Customers accept with one click, which raises average order value (AOV) per customer [L1141, 2026].
- OCU is a post-purchase upsell app that shows extra offers after checkout. It can sell more of the same product or add other products to the order [L1107, 2023].
- AfterSell is a budget-friendly post-purchase funnel platform with all essential features for building upsell and downsell sequences [L0291, undated].
- Reconvert is a post-purchase funnel builder for constructing upsell funnels [L0291, undated]. It is also a post-purchase upsell app used to offer extra products after checkout [L0693, 2024].
- ReConvert is a post-purchase app for upsells and a post-purchase survey. The survey asks buyers why they bought and which use cases matter to them. It is repeated weekly to reveal the strongest marketing angle [L1218, undated].
- KickFunnels is a one-time offer upsell funnel builder with built-in downsell features, used for product funnels with multiple upsells and conversion-optimized pages. Shopify alternative: Zipify Pages OCU (one-click upsell app) [L0307, 2023+].
- Zipify is a post-purchase funnel tool that can offer a discounted repeat purchase right after checkout [L0363, 2022+]. Zipify and Convert are apps used to build post-purchase upsell and cross-sell funnels after checkout [L0871, 2021+].

#### OCU funnel setup
1. Install One Click Upsell from the Shopify app store and open its dashboard.
2. Go to Upsell Funnels and click Add New Funnel, or create a Catch-All Funnel in one click.
3. Choose what is sold after checkout: an ebook or other digital product, a similar product, or the same product the customer just bought.
4. Set the triggers that open the funnel (see the trigger settings).
5. Add Post-Purchase Upsell Offer 1 and set its discount, usually 30-40% off the added item.
6. Add Upsell 2 (recommended product) and the Post-Purchase Downsell as the final step.
7. Edit each offer: heading, countdown timer, product, shipping and buttons.
8. Check the preview and run the price check before going live.
9. Enable the funnel and track its views, conversion and revenue. [L1141, 2026]

#### Offer editor
- Blocks in the Post-Purchase Upsell Editor: Display Offer, Heading, Countdown Timer, Upsell Product and Add Content Block. Fields include Background Color, Full width, Image Size, Image Resizing, Fit, Image Border, Badge Label, Badge Color, Badge Position (Above Product Title), Discount (Percentage), Savings Label, Hide Quantity Selector, Predefined Quantity, Buttons Position (set to Accept above decline) and Payment Disclaimer [L1141, 2026].
- Countdown Timer block: set Time Limit to 3 minutes. This gives urgency without feeling rushed [L1141, 2026].
- Price block: the original price is struck through, followed by the discounted price and a savings label such as 25% Savings (Discount set to Percentage, with a Savings Label field). The accept button reads Pay now followed by the discounted total. The countdown label reads Exclusive offer expires in: above the timer [L1141, 2026].
- Post-purchase offers inherit the Shopify checkout styles automatically, so set checkout branding in Shopify before judging how an offer looks. The offer editor preview uses a product placeholder until a real product is selected in the upsell product block. Preview settings can be adjusted to match the checkout more closely [L1141, 2026].

#### Digital upsell as Funnel 2
1. Create the PDF or ebook as its own product in Shopify.
2. In the upsell funnel, click Add Product(s) and select that product.
3. Add a further upsell with a compatible product that complements what the customer is buying. [L1141, 2026]

#### Follow-up across channels
1. Show the one-time upsell offer on the post-purchase page immediately after checkout.
2. Send an SMS through an SMS app such as SMS Bump at the same time, reminding the buyer that the order is being prepared and that the upsell is available for a limited time.
3. Send an email through Klaviyo at the same time with the same offer and a countdown.
4. Retarget the buyers with Facebook ads for the upsell offer. [L0789, 2022]
- SMS and email text should state a deadline, such as 20 minutes left to buy the upsell at 14 dollars instead of 49 dollars, and the remaining stock count, such as only five left [L0789, 2022].
- Post-purchase discount ranges differ by example: 30 to 40% off the added item in the OCU setup [L1141, 2026], and a 14 dollar price against a 49 dollar original in the follow-up example [L0789, 2022].

### Checkout replacement

- Better Cart is a third-party checkout app that replaces the Shopify checkout. It is worth considering when monthly sales exceed about 20,000 USD. Its monthly fee then costs less than Shopify checkout fees, and it allows upsells and bump offers that Shopify's checkout does not [L0387, 2022].
- Switching from Shopify's checkout to a replacement checkout app is typically cheaper once monthly revenue is above roughly 20,000 USD, because you pay the app's monthly fee instead of Shopify checkout fees [L0387, 2022].
- Below that revenue level, keep Shopify checkout and use the cart and post-purchase tools above, since upsells and bump offers can be added at the cart and after purchase [L0387, 2022; L0789, 2022].

### Retention and subscription platforms

- ReCharge is an all-in-one app platform that combines subscriptions, product bundles, rewards programs and customer analytics in one place. It is used to raise average order value, reduce churn and increase lifetime value [L1232, 2025-26].
- Procedure:
1. Run all retention programs (subscriptions, bundles, rewards) inside one platform.
2. Test quickly to see which program moves the key metric.
3. Keep the programs that work for the specific store and drop the rest.
4. Use the unified customer data and analytics view to optimize offers continuously. [L1232, 2025-26]

### Choosing an upsell or bundle app

- Choose by budget first. AfterSell suits a budget under $20 per month, ReConvert comes next, and Zipify OCU is the choice for advanced features. Post-purchase upsell apps such as ReConvert, AfterSell and Zipify OCU offer similar plans with 30-day free trials. [L1411, undated]
- Most of these upsell and bundle apps start with a 14-day or 30-day free trial, then charge a monthly fee. Compare the monthly price against your budget before installing, because the cheapest option can be under $10 per month and the advanced option can cost $35 per month. [L1411, undated]
- Install a bundle app when you sell bundles, since bundles are a core part of the store's average order value approach. [L1327, 2026]
- Kaching's post-purchase upsell is an advanced tool. Install it when scaling, not at the foundation stage. [L1327, 2026]
- Some sellers prefer single-purpose apps. Vitals bundles many apps, including upsell tools, in one package, and it is a good choice if it covers all the upsell and cross-sell features you need. [L1410, 2023; L1412, 2023]
- Vitals is an app suite that bundles upsells and cross-sells into one subscription. It suits a store that wants many apps together, but some sellers prefer a single-purpose app. [L1412, 2023]
- Some post-purchase upsell app support teams will build a funnel for you if you send them your requirements. This reduces setup time for non-technical sellers. [L1410, 2023]


Part 29 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/28-upsells-bundles-cart-and-post-purchase-offers.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/30-bundle-apps.md
