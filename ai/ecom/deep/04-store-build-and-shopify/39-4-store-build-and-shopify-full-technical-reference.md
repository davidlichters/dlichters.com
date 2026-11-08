<!-- part of ecom/deep/04-store-build-and-shopify.md -->
Part 39 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/38-4-store-build-and-shopify-full-technical-reference.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/40-social-profiles-tracking-and-google-readiness.md

- Place reviews on product pages, ideally on the products that already get impressions and clicks, because those are the pages shoppers already view. A store-wide review page is an acceptable fallback. [L0968, 2021]

- The review date display and review images are controlled by your review app, not by the theme. Look for date or image options in the review app's settings. [L0968, 2021]

- Add a personal thank-you and a point-of-contact line to the default Shopify order confirmation template rather than sending a separate follow-up email. This covers both messages in one email. [L0968, 2021]

- A page on a Shopify store can show product-specific supplier reviews only with written supplier permission. Enter them through the review app on the product page rather than copying or screenshotting them. [L0970, 2023]

- Customize and reuse supplier reviews: get the supplier's permission first, then enter the review manually in the Judge.me app as if a customer had written it. Judge.me uses no automation here. [L0971, 2024]

- Shopify Inbox setup for live chat: enable it in the Shopify admin; install the Shopify Inbox app to receive messages on the phone; to pause chat on the site, disable the chat box in the Shopify Inbox settings. [L0971, 2024]

- The built-in pop-ups, cross-selling and social proof features are meant for stores that already get traffic and sales. A demo store still being built does not need them and should not spend time on them. [L0973, 2020-26]

- A Shopify store can take sales without any customer ratings or reviews, so reviews are not required before launch. [L1002, 2019]

Hi [Supplier name],

We have just uploaded your products to our website and want to show our customers that they are high quality. Is it okay for us to use the reviews from your website? If you have reviews you could send us, we would appreciate it.

Thank you,
[Your name]
[Company name]
[L1069, 2019]

- Do not import product reviews from Amazon, because those reviews belong to Amazon. Reviews from a supplier's own website can be used after asking the supplier for permission. [L1069, 2019]

- Build the lead generation landing page as a Shopify page with a small amount of code, or use the free version of PageFly, a landing page builder for Shopify. The page usually sits at a store URL such as yourstore.com/freebook. [L1076, 2019]

- Shopify admin > Store > Theme settings is where the store's coupon code and promotion text are edited in the theme. If the option is not visible in the left navigation, check the theme settings path in the admin. [L1088, 2020]

- Hidden add-on products are created in Shopify but left out of every collection and kept out of search. They are shown only as upsells or add-ons through an upsell app such as Bold Upsell. [L1088, 2020]

- Do not set up discount banners or coupons until the store is live, sending traffic, and has products ready to sell. Before that point they have no effect. [L1110, 2019]

- Set the live chat app to show a greeting such as asking the visitor for their question and email address, or hide the chat widget when no one is available. [L1111, 2020]

- Embedded email opt-in page with Klaviyo: 1. Create a sign-up form inside Klaviyo. 2. Copy the embed code Klaviyo provides. 3. Create a new page in Shopify. 4. Paste the embed code into that page so new sign-ups are tagged and can trigger automations. [L1114, 2023]

- The current Shopify theme does not have a built-in opt-in code. If no email tool provides an embed form, a third-party Shopify app is needed to place a sign-up form on a page. [L1114, 2023]

- The automatic shipping confirmation email to the customer is only sent if the "send a confirmation to the customer" tick box is checked in the Fulfil Items popup. If the box is left unticked, the customer gets no fulfilment notice and must be contacted manually. [L1119, undated]

- The Shrine theme includes a built-in quantity discount feature. Use it to offer multi-unit deals on a product test store instead of building a separate bundle page. [L1171, 2024+]

- Expiring coupon (discount code) block in the product information section: it shows discount codes that switch on and off based on dates. For a demo store, keep it disabled or hidden; hide it with the eyedropper icon instead of deleting it. [L1189, 2020-26]

- Sale banner image block: it shows a sale message and a discount code at checkout. It is not needed for a demo store and can be hidden. [L1189, 2020-26]

Install the Q&A app on the product page:
1. Install the app from its listing and accept the permissions it requests.
2. Click Add questions and answers when the app offers to add itself to the store.
3. In the product page template, add a section to the page.
4. Choose Apps in the section list, then select Questions and answers.
5. Click Save, and check a product page on the live store to confirm the section appears.
[L1190, 2020-26]

1. In the left navigation under Template, click the arrow next to Product information to expand the section.
2. Hover over the Expiring coupon entry and click the eye icon to make it visible again, since it was hidden when the demo products were uploaded.
3. Click Expiring coupon so its settings open in the right-hand panel.
4. If the right-hand panel does not appear, zoom out in the browser until it shows.
[L1192, 2020-26]

Preparing the store for each promotion window:
1) Replace the notification bar with the current offer.
2) Swap the exit-intent overlay to show the offer.
3) Create a custom product page for a bundle, or modify the existing product page if the offer is small.
4) For an event, create a content page with the details and eligibility rules.
5) Add a progress tracker such as Bold Sales Motivator if the offer depends on a cart threshold.
6) Update the promotions page with the offer, if you use one.
[L1204, 2022]

- Keep one static promotions page and swap its content when a promotion starts, since this is easier to remove later. Bundles and bonus gifts should get their own page, so they can be removed without affecting the rest. Event pages that may rank in search can stay live and later become evergreen content. [L1204, 2022]

Closing a promotion, done manually after the window:
1) Set the notification bar back to the default offer.
2) Restore the previous exit-intent overlay.
3) Remove bundle or bonus content from product pages and return them to their default state.
4) Replace the offer on the promotions page with the default offer or the next offer.
5) Turn off progress trackers such as Bold Sales Motivator, so no shopper reaches a goal that unlocks nothing.
[L1204, 2022]

- Show the same holiday message on every promotional placement during the promotion: the homepage image slider, the announcement bar, and the expiring discount code section on product pages. Change them when the promotion changes. [L1224, 2025+]

- Rebuy's Shopify Functions discounting currently supports Free Product, Order Discount and Fixed Price tiers. It works on all Shopify plans, Basic, Advanced and Plus, while Shopify Scripts require the Plus script editor. [L1231, 2025-26]

- Adding a tracking page with AfterShip on a Shopify store: 1. Install the AfterShip app from the Shopify app store. 2. AfterShip sends automated tracking emails to customers. 3. Copy the embed code that AfterShip provides and place it on a store page, which then works as the order tracking page where customers enter their tracking number. [L1281, 2022]

1. In the Shopify admin, open Apps and then Visit the Shopify App Store.
2. Search for talk to and open the tawk.to Live Chat app.
3. Click Install app. Shopify lists the data the app can view and manage (orders, customers, online store); approve it, because the app cannot work without it.
4. You are redirected to a tawk.to page. Click Sign Up and create a new account, then complete the standard sign-up process.
5. At the Install Widget step, do not paste the tracking code. Open the list of platforms, select Shopify, then click Done.
6. Return to the Shopify app, log in with your tawk.to account, select your widget (the name entered during sign-up) and click Use selected widget.
7. Confirm the success message and open the storefront to check that the chat bubble appears at the bottom of the screen.
8. Adjust the widget appearance in the tawk.to settings (see the widget appearance setting).
[L1298, 2021-22]

- Shopify includes built-in email marketing for follow-up emails to buyers and to visitors who leave without buying, as well as automatic order tracking so customers can follow their shipment until delivery. [L1304, 2020-26]

- Shopify Admin > Discounts lists every discount created by Functions. Product tier discounts appear with the name and type Rebuy Product Discount, and order tier discounts with Rebuy Order Discount. The admin name never matches the text shown at checkout. [L1308, 2025-26]

- All product tiers of one Smart Cart are grouped into one single Rebuy Product Discount in Shopify Admin, so adding a second product tier does not create a second discount. Likewise, all discount tiers are grouped into one Rebuy Order Discount. [L1308, 2025-26]

Create a standard order discount code in the Shopify admin:
1. Open the Discounts section in the Shopify admin. No discounts exist by default.
2. Click Create discount.
3. Choose Amount off order.
4. Select discount code instead of automatic discount.
5. Enter the code name, for example save 10.
6. Choose percentage (the usual choice) or fixed amount, and enter the value, for example 10%.
7. Under minimum requirements, enter a minimum order value such as 2000, or leave it at no minimum.
8. Under customer eligibility, restrict the code to specific customer segments if needed.
9. Set maximum discount uses: 5 total, 10 total, or once per customer, or leave it unlimited.
10. Keep the combination with other promotions turned off.
11. Keep the start date at the current date and time, or set a later start.
12. For a time-limited promotion, set an end date.
13. Click save discount.
[L1322, 2020-26]

- Shopify offers four discount types: amount off products, amount off order, buy X get Y, and free shipping. Amount off order is the type used most often for order-level discount codes. [L1322, 2020-26]

- A demo store does not need discount codes. Create them once the store is live and taking real orders. [L1322, 2020-26]

- On the Shopify checkout page, the customer sees a discount code field, enters the code, and clicks apply. In the demo, a 10% code gave a 319.60 dollar discount, which implies an order subtotal of about 3196 dollars. [L1322, 2020-26]

- A store can hold as many discount codes as needed, and all of them are listed together in the Discounts overview. This allows one-off codes for individual buyers to be managed alongside general promotions. [L1322, 2020-26]

Test a discount code on the storefront before sending it to a buyer:
1. Add a product to the cart on the store.
2. Open the cart and go to the checkout.
3. In the discount code field on the checkout page, enter the code.
4. Click apply and check the discount amount that appears for the order.
[L1322, 2020-26]

- On-site upsell positions are: (1) on the product page, shown before Add to cart; (2) on the cart page, shown before checkout (pre-checkout upsell); (3) after payment but before the thank-you page (post-checkout upsell), which inserts an extra page into the checkout flow. [L1409, 2021]

- Shopify checkout supports at most two levels of post-purchase upsells; after two offers the customer must land on the thank-you page. [L1410, 2023]

Post-purchase structure (the monster funnel), in order:
1. The customer buys the main item and completes payment.
2. Show the first upsell.
3. If accepted, show the second upsell; if declined, show the first downsell.
4. If the second upsell is accepted or declined, show the thank-you page.
5. If the first downsell is accepted, show the thank-you page; if declined, show the thank-you page.
[L1412, 2023]

- Shopify checkout allows at most two levels of post-purchase upsells, so you cannot show three or four offer pages before the thank-you page. Plan the funnel with a maximum of two offers plus a downsell path. [L1412, 2023]

- Enable a post-purchase funnel in Shopify under Settings > Checkout. Scroll down to the post-purchase page section and select Reconvert upsell and cross-sell. The page may take a while to load after the change. [L1412, 2023]

- Change post-purchase discounts under Discounts and shipping in the upsell app. You can switch the discount between percent and fixed amount per unit, change the timer, and edit the button text. [L1412, 2023]

- A gift card of 80 Swiss francs was sold, and buyers received a code by email. Around Christmas, three to five gift cards were sold, many of them were never redeemed, and that amount became revenue. Gift cards sold poorly outside peak gifting periods but can add revenue during Christmas. [L1439, 2024+]

- Create an automatic discount in the Shopify store so that when two specific products are both added to the cart, one of them is given free. The customer does not need a code. [L1469, 2023+]

- Do not show a review widget that states a product has no reviews. A visible zero-review signal (negative social proof) suggests nobody has bought it or that it is not good, so hide the widget until reviews exist. Most Shopify review apps allow the widget to be hidden when a product has zero reviews. [L1522, 2021-22]


Part 39 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/38-4-store-build-and-shopify-full-technical-reference.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/40-social-profiles-tracking-and-google-readiness.md
