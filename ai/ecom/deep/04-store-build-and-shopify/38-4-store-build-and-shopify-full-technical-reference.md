<!-- part of ecom/deep/04-store-build-and-shopify.md -->
Part 38 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/37-discounts-offers-email-capture-and-post-purchase.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/39-4-store-build-and-shopify-full-technical-reference.md

#### Further details

- Content templates must be customized and installed before traffic setup to ensure message alignment with your store positioning. [L0040, 2020-26]

- 1. Go to Shopify Admin. 2. Click Discounts. 3. Click Create discount. 4. Select Amount off order. 5. Set discount type to Percentage. 6. Set discount value to 5%. 7. Use discount code SAVE5. 8. Apply to all customers. 9. Do not set a minimum purchase requirement. 10. Do not set usage limits. 11. Do not set an end date. 12. Save the discount. [L0139, undated]

- 1. Go to Sales Channels > Online Store > Themes. 2. Click Edit theme. 3. Switch page view from Home page to Products. 4. Select Default product template. 5. Expand Product information in the left sidebar. 6. Click the eye icon next to Expiring coupon to enable it. 7. Update the text to "5% Off All Orders". 8. Enter coupon code SAVE5. 9. Set expiration to 3 days. 10. Choose a theme color matching your brand. 11. Use Month/Day/Year date format for US sales. 12. Save changes. [L0139, undated]

1. Log in to your Shopify Admin.
2. Click Apps.
3. Search for 'Shopify Messaging' in the App Store.
4. Select Shopify Messaging (best match).
5. Click Install.
6. Approve required permissions.
[L0147, undated]

1. Open Shopify Messaging settings.
2. Click Template branding.
3. Select Customize.
4. Upload your store logo.
5. Choose your store font (default sans-serif is acceptable).
6. Keep email background and text simple.
7. Set button fill color to match your brand.
[L0147, undated]

1. Go to Shopify Settings.
2. Click Notifications.
3. Set sender email to sales@yourdomain.com.
4. This address will be used for all Shopify Messaging emails.
[L0147, undated]

- Access abandoned checkout automation: Shopify Admin → Shopify Messaging app → Create automation → Select template 'Recover Abandoned Checkout' → Turn on automation. Edit the workflow in Shopify Flow via Marketing → Automations → Install Shopify Flow. [L0149, undated]

1. Open the Shopify Inbox app.
2. Click "Turn on chat" to open the theme customizer.
3. Choose a widget color to match your brand.
4. Change the text color and button color.
5. Select an icon (chat bubble, smiley, hand wave, etc.).
6. Keep the widget positioned in the bottom-right.
7. Customize the greeting text (e.g., "Welcome to [Store Name]" with an offer to help).
8. Save changes in the theme customizer.
9. Refresh your storefront.
10. Confirm the chat icon appears.
11. Send a test message to yourself.
[L0151, undated]

- Use the Manhattan Shopify theme to create email capture pop-ups for bounced visits, and configure Shopify Email to deliver the follow-up automation. [L0154, undated]

1. Log in to Shopify Admin.
2. Click Apps.
3. Search for 'Judge.me'.
4. Select Judge.me Product Reviews app.
5. Install the free plan.
[L0155, undated]

- To customize review branding: Open Judge.me settings → Branding → set the primary color to match your store. This color will appear on stars in review emails and widgets. [L0155, undated]

- To position the Review Widget: Go to Online Store → Themes → Edit theme → switch to a product page → find the Review Widget under Apps → drag and drop to position. Recommended placement is under the product description. [L0155, undated]

- On the homepage, create a prominent box labeled 'Your cart is ready' that (1) displays the customer's current cart items; (2) shows the total cart value; (3) includes a single 'Continue to checkout' button to re-engage browsers who navigated away from the cart after adding items. [L0197, 2025-26]

- On cart pages, add a product recommendation section labeled 'You May Also Like' that (1) displays curated product options; (2) includes zoom buttons allowing customers to view product images at larger size without leaving the cart page; (3) includes add-to-cart buttons that add items immediately without navigating away; (4) rank products by best-selling items. [L0197, 2025-26]

- To configure the Charlotte theme's email popup on Shopify, navigate to the admin dashboard, go to Online Store > Themes > Customize, open the gear icon menu, and find Email Pop-up Settings. Activate the popup toggle, enable logo upload and add your store's logo, and set the popup to appear after 60 seconds. Enter your discount code, write the heading as 'wait, don't leave us', and use the body text 'enter your email below to receive a special discount from [Store-Name]'. Leave the countdown timer disabled since it's unsuitable for this campaign. Set the button copy to 'send me the discounts', adjust colors to match your site's branding, and save the changes. [L0201, 2020-26]

- The Shopify Email automation sequence for welcome messages works identically regardless of how you collect the initial email address. You can use Charlotte's built-in popup, any third-party popup app, a landing page form, or any other collection method-the downstream automation flow remains the same. You are not locked into one theme or tool; focus on collecting the email and the automation takes over from that point. [L0201, 2020-26]

- Aftership is used as a tracking website for order tracking notifications. [L0255, 2025]

- Shopify Email is sufficient for promotional email marketing; Klaviyo is not necessary as an additional expense. [L0255, 2025]

- Coupon code bar location: Shopify admin > Online Store > Theme Settings > left navigation panel > find Coupon Code Bar section > enable/disable as needed. [L0270, 2021]

- If the 'Recover Abandoned Checkout' template does not appear first in the Shopify Messaging app templates list when creating an automation, search for it by name using the search field. [L0282, 2020-26]

- 1. Create new Zapier Zap named 'AC to Slack' or similar. 2. Select Shopify as trigger app and choose 'New Abandoned Cart'. 3. Authenticate Shopify account and select store. 4. Confirm delay set to 0 hours. 5. Add action: send Slack channel message. 6. Authenticate Slack and select channel (e.g., #steve). 7. Insert customer fields (name, phone, order total, checkout URL) using Zapier's field insertion tool. 8. Save and activate Zap. [L0286, 2018]

- Use large typography for a headline announcing that customers receive a free bonus item with their product purchase. Display a photograph of the bonus product and state its retail value in dollars. Confirm that this complimentary item is automatically included with purchases made at your store. [L0314, 2020-26]

- An organic store should look professional, branded and simple, with a short purchase path. Avoid stacking pop-ups that force visitors to close windows, although a single email signup is acceptable. [L0352, 2022]

- For reviews on a product page, add many more reviews as view counts grow, since visible social proof is expected to improve conversion. Place the review block right after the description. [L0352, 2022]

- For products on an organic-only collection, use promotions to the email list and social audiences rather than paid traffic. Products under the normal ad threshold can be sold this way. [L0359, 2020]

- Bonjoro integrates directly with Shopify. When a new order is placed, the customer's name and email are sent to Bonjoro and appear in a daily list of thank-yous to record, so the team does not need to look up details in Shopify. [L0406, 2021]

- Scribeless integrates directly with Shopify and pulls the customer's shipping address from the Shopify order. The note is then packaged and mailed automatically without manual address entry. [L0406, 2021]

- Video thank-yous need only a webcam or phone camera with a built-in microphone. A professional microphone is unnecessary, and headphones with an inline mic can be used as well. [L0406, 2021]

Holiday site banner pattern: a seasonal sale headline plus a coupon code that the customer enters at checkout. Formula: [Holiday] sale, enter coupon code [CODE] to check out. The code is unique to the holiday, so you can track its sales, and the banner catches first-time visitors from paid ads.
Example 1: Winter sale, enter coupon code WINTER20 to check out.
Example 2: Summer sale, enter coupon code SUNNY15 to check out.
[L0467, 2019]

Setting up a holiday sale on the store:
1. Create a coupon code that is unique to the holiday sale.
2. Add the sale to the homepage image slider.
3. Show a banner strip across the whole site with the sale name and the coupon code.
4. Check that first-time visitors from Google Ads will see the banner.
5. Link the sale to a dedicated collection page with all the holiday offers.
[L0467, 2019]

- Create one dedicated collection page for the holiday offers and send all emails and remarketing ads there. Do not link them to the homepage or to a single product page. [L0467, 2019]

Create the pop-up coupon in Shopify:
1. Go to Discounts in the Shopify admin and click Create discount.
2. Select Amount off order.
3. Enter the discount code and name (example: save five).
4. Set the value as a fixed amount of $5.
5. Set the usage limit to one use per customer so the code cannot be reused repeatedly.
6. Click Save discount.
[L0476, undated]

- Add a short product quiz when the catalogue is large, so visitors who feel overwhelmed by choice get a recommended product after a few questions. [L0524, 2023]

Create the expiring discount code in the Shopify admin:
1. Open Discounts in the sidebar of the Shopify admin.
2. Click Create discount code.
3. Enter the code name, for example save 10.
4. Choose the discount type Percentage.
5. Enter 10 as the discount value for 10%.
6. Keep all products selected and apply it to all products in all collections.
7. Leave minimum requirements unset.
8. Set customer eligibility to everyone.
9. Leave usage limits unset.
10. Leave the end date empty; a start date may be set.
11. Click Save discount code.
[L0531, 2020-26]

- Do not set an end date on the Shopify discount itself, because these codes are recycled in later cycles. The deadline is controlled through the announcement bar text instead. [L0531, 2020-26]

- All bundle items must sit in one Shopify collection, and that collection must be the Applies to target of the automatic discount. A collection that holds only part of the bundle will leave some items without the discount. [L0559, 2025-26]

- Countdown timers should not be added at launch, because they only make sense once the store is generating sales. Add them later as part of conversion work, not as a standard element of the first test. [L0600, 2026]

- Personalization in Klaviyo emails: use Add personalization to insert the customer's first name, last name or email address into the text. [L0607, undated]

- Mistake: hiding the free gift or offer until add-to-cart on mobile, so visitors do not see the offer before the cart; state the free gift or offer on the product page itself. [L0640, 2023]

- Create an automatic buy X get Y discount in Shopify: Discounts > Create discount > choose Buy X get Y > name it (for example 'Buy 2 items and get the third one for free') > choose Automate discount > set the quantity condition (buy 2 items of a specific collection) > set the free item from the collection > Save discount. [L0650, undated]

- Communicate a discount on a Shopify collection page: 1) Open the collection in Shopify. 2) Edit its description. 3) Add the offer text as a large headline or just above the logo. 4) Format it, for example as Heading 3 and in a clearly visible color. 5) Save the collection page and refresh the store page to confirm the offer shows. [L0650, undated]

- A buy-X-get-Y offer must be checked against the margin: if the product is high-ticket (for example above $100), giving an item free may not make sense, so the calculation must always work and the store must make profit. [L0650, undated]

- The cart and checkout should show the same offer as the one promised on the website and in the ads, including the discounted price and the free item, so customers see the same deal at every step. [L0650, undated]

- A store with several pop-ups, especially pop-ups stacked on top of each other, pushes shoppers away. Limit pop-ups. [L0656, undated]

Editing or removing a coupon bar in the one source Shopify theme:
1. Open the Shopify admin.
2. Go to Online Store.
3. Click Theme settings.
4. Open the coupon code section and edit the offer, for example to 5% off or free shipping.
[L0664, 2020]

- Do not delete the coupon bar entirely, because it helps conversions. Change the offer instead, for example to 5% off or free shipping. [L0664, 2020]

- Judge.me is the recommended review app for Shopify because of its deep integration; reviews appear on product pages automatically and star ratings can show in Google Shopping ads. Judge.me is a Google-approved partner and its reviews show in Google Shopping. [L0665, 2022]

- Use a free live chat widget that only opens when a visitor clicks a small button in the corner, instead of intrusive pop-up offers; full-screen pop-ups usually look messy on laptops and are not recommended. [L0665, 2022]

- Upfront product pricing matters: a store needs a clear offer and a reasonable price for its products, and overpriced items without a bundle can hurt conversion. [L0678, 2023]

- A poor offer, such as a single item priced high without a bundle or compelling deal, can lower conversion. Test different offers and price points before scaling. [L0678, 2023]

Modify the store so visitors see the active offer:
1. Promote the offer in the notification bar.
2. Promote the offer in the exit intent overlay.
3. If the offer needs one (for example a bundle), create a custom product page for it.
4. If the offer needs one (for example an entered-to-win offer), create a content page that explains the offer details.
5. If the offer needs one (for example a bonus offer), edit the current product pages to show the offer.
6. If the offer needs one (for example spend X to get X), use Bold Sales Motivator to show how far the shopper is from the free bonus.
[L0757, 2022]

- Install a one-click upsell app such as Zipify on Shopify so that the post-purchase page shows a one-time offer before the regular thank-you page. The upsell should be a different product, not a bundle of the original, and priced at or below 14 dollars, because higher prices can hurt conversion. [L0789, 2022]

- Add a Messenger opt-in to the product page so visitors can subscribe to messages when they add to cart. This lets abandoned cart messages reach them through Facebook Messenger instead of only email. [L0790, 2017]

- Product review apps should display reviews only when you have permission. Use reviews provided by the supplier. Do not copy reviews from competitors' sites, since they can report the store and cause a suspension. [L0801, 2021]

- A supplier's reviews can be used on your product pages when the supplier gives permission. Suppliers often do not collect reviews themselves because they rely on retailers for marketing. [L0801, 2021]

- Enable product reviews and product ratings only after the store has about 50 product reviews, because some eligibility requirements depend on a minimum number of reviews. Promotions can be enabled earlier. [L0835, 2023]

- Use countdown timers only for real promotions with an end date, such as a monthly promotion or a Black Friday or Cyber Monday sale, and not as a permanent feature. [L0835, 2023]

- An order-tracking app can add an order tracking page to the store, using a code provided by the app. Look for a tracking option that does not slow down the store. [L0835, 2023]

- Shopify email to add SMS is coming; SMS apps are not needed for a new store at the start. [L0856, 2024]

Steps to produce and deliver the ebook bonus:
1. Generate the full ebook text with Claude (claude.ai) using the ebook prompt.
2. Copy the generated content.
3. Paste it into Canva and apply a simple ebook template.
4. Export the design as a PDF.
5. Upload the PDF to Shopify.
6. Deliver it automatically with every order.
[L0860, 2026]

1. Open the Digital Downloads app and select the product you use as the free gift (for example a product named e-book).
2. Click Add asset, then File.
3. Upload the PDF file that was generated for the ebook.
4. Confirm the file appears under Assets.
5. Open the product page and go to the Shipping section.
6. Tick Not a physical product so the order carries no shipping.
7. Click Save.
8. In the bundle, attach this product as the free gift for bars 2 and 3 and confirm it is available.
[L0861, 2026]

- Judge.me widget color is set in the app under Settings, by opening the review widget section and using the color picker. Choose the store's main brand color so the stars and widget match the color scheme. [L0908, 2020-26]

- A Shopify theme does not sell digital products by itself. For free bonuses, you can deliver links to PDFs or unlisted videos without an app, and paid digital products need a Shopify app that handles automated delivery. [L0934, 2023]

- The chat button appears in the bottom right corner of the store by default, on both mobile and desktop. The recommended button style is the plain chat icon only, which saves space and is recognizable without text. [L0948, 2020-26]

- Chat greeting example used in the store: "Hi, message us with any questions. We're happy to help." This text can be set as the welcome message in the chat settings. [L0948, 2020-26]

- On Shopify Plus, Checkout Plus can be shown in the cart and in checkout, and the shopper can change the choice in checkout, using Shopify's checkout extensibility. Without Shopify Plus, it only shows in the cart and the choice cannot be adjusted in checkout. Package protection has the same limit. [L0955, 2025-26]

- Checkout Plus is set up as a product in Shopify, so it appears on the order. Shopify Markets allows a different price per market, and the offer does not have to run in every market. [L0955, 2025-26]

- Setting up a branded tracking page with Wonderment: 1. Use the Wonderment block provided for Shopify. 2. Create a new page the same way as a collection, product or about-us page. 3. Insert the tracking block on that page. 4. Add subscriptions, upsells or cross-sells to the page. 5. Send customers to this page instead of the carrier's tracking page. [L0955, 2025-26]

- Shopify forced a migration of the thank-you and order status pages, and these pages can hold tracking blocks, upsells and cross-sells. Treat them as a sales channel instead of leaving them at the default setup. [L0955, 2025-26]

- Create a dedicated loyalty program page on the Shopify store with the program details. Link it in the footer and/or the main navigation so customers can find it while browsing. Optionally add a link to the page on product pages, though this takes space and is not required. [L0956, 2021]

- Use a tracking tool called After Ship for order status. Logged-in customers can see their order status on the site. [L0964, 2023]


Part 38 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/37-discounts-offers-email-capture-and-post-purchase.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/39-4-store-build-and-shopify-full-technical-reference.md
