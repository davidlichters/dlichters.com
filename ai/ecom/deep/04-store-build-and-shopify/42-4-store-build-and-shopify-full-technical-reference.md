<!-- part of ecom/deep/04-store-build-and-shopify.md -->
Part 42 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/41-4-store-build-and-shopify-full-technical-reference.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/43-speed-apps-and-technical-health.md

- Two stores with the same owner that differ in Google Merchant Center status: compare merchant center settings (shipping, tax, returns), site settings, privacy policy and contact information side by side and make the flagged store match the working one. [L0805, 2024]

- Product descriptions over 5,000 characters can cause Facebook to refuse publishing the product to the catalog, so shorten them or find another route, because the full catalog is needed for remarketing. [L0834, 2021]

- Google Analytics integration in Shopify fails with the newest GA version; revert to the previous GA version to make the Shopify integration work. [L0834, 2021]

- Adding a GA4 measurement ID in Shopify does not require removing the old Universal Analytics ID first, because the old ID is removed by Google over time. [L0835, 2023]

- Social profiles for a new store only need basic setup, which takes about 20 to 30 minutes. They are needed before running ads, but not before contacting suppliers. [L0852, 2020]

- GTIN and UPC are different identifiers, and GTIN is the broader product number. If a supplier provides no GTIN, leave that field empty and enter the manufacturer part number (MPN) instead to avoid a data mismatch. [L0853, 2021]

- Google Tag Manager is not needed on day one for a new store, since it is for advanced server-side tagging. Use Shopify's native integrations first, because they work immediately. [L0941, 2022]

- At the time of the call, the switch to Google Analytics 4 was about 12 months away and needed no action yet. Course materials were to be updated before the switch to show the GA4 setup. [L0941, 2022]

- Google Ads > Audiences > New audience > Custom segments > Add new custom segment. Enter a segment name such as Competitors, add the competitor brand names as searched terms, and save. Then select this segment as the audience for Display, Discovery or YouTube campaigns. [L0941, 2022]

- Use Lucky Orange together with Facebook Events Manager to track the whole funnel, from page view to checkout, and confirm that each event fires correctly. [L0950, 2023]

- SKUs can also be added as Shopify tags, but for Google to read them reliably, place the SKU list in the product description as well. [L0962, 2021]

- Setting the brand in Google Merchant Center via Feed for Google Shopping: open the app settings, go to account linking, and map the brand field to the Shopify Vendor field. [L0962, 2021]

- When a product sync from the store to Facebook is rejected repeatedly, use the process app that alerts on errors to find what must change in the affected products, rather than syncing without it. [L0964, 2023]

- Google Shopping expects the white-background image as the main image, but you can change which image is submitted to the feed in the feed app. Keep white-background photos as the main image for both the store and the feed. [L0965, 2024]

Finding product pages to optimize first:
1. Open Google Analytics.
2. In the left navigation, click Content, then All pages.
3. Choose a period such as one month.
4. Start rewriting descriptions on the pages that receive the most traffic, since a few pages often carry most of the visits.
[L0970, 2023]

- Have a website reviewed by the team before submitting to Google Merchant Center; expect a response within a couple of days on a weekday. If an email gets no reply, check the spam folder and resend it to support. [L0971, 2024]

- Redeem the $100 Google Ads credit: in the Shopify admin, open Discounts in the left navigation, scroll to the bottom of the page, and click the small link to redeem the $100 Google credit, which is still labelled AdWords. [L1002, 2019]

Connect the pixel to Shopify through the Facebook and Instagram channel app:
1. In Shopify, open Sales channels and click Facebook & Instagram, then Install.
2. Click Add sales channel, then Get started.
3. Click Connect account and connect your personal Facebook account.
4. Select the business account you created in Business Manager and grant the maximum available permissions, then click Save.
5. Connect the pixel you created, accept the terms and conditions, and click Submit for review.
6. Once the review is submitted, sales events should flow from the store to Facebook and tracking runs correctly.
[L1024, undated]

- Feed app: Settings > Bing Shopping Settings > field 'sale price with price' should be checked, so the pricing is mapped as follows: Shopify 'compare at price' becomes Microsoft 'price' and Shopify 'price' becomes Microsoft 'sale price'. If the checkbox is unchecked, the app submits the sale price as 'price' even when a discounted price exists. Save the settings afterwards. [L1036, 2020-26]

- The Microsoft Merchant Center connection requires the feed app to link the Shopify store with the Microsoft Merchant Center store; the app acts as a bridge between them. Without this connection the product feed does not reach Bing Shopping. [L1036, 2020-26]

- Missing GTIN errors in Google Merchant Center are fixed by filling the MPN field (manufacturer part number) instead. The MPN appears as a column in the product feed. [L1085, 2018]

Resolving a missing GTIN error in Google Merchant Center:
1. Add a manufacturer part number (MPN) to each product.
2. If the supplier does not provide an MPN, create one for each product yourself, using a consistent pattern (example: a brand letter followed by a sequential number such as V1001, V1002).
3. Save the products and let the feed update.
[L1085, 2018]

- A Google Merchant Center error saying images are too small is fixed by uploading larger product images. Ask suppliers for high-resolution images, since large images help customers too. [L1085, 2018]

- Google Seller Ratings require a review app from the Shopify App Store, and many of these apps are expensive. After installing one, apply to Google, which typically approves established stores quickly. [L1085, 2018]

- Google Analytics 4 can be connected to a Shopify store so that traffic and sales data are tracked in GA4. This connection should be set up before running paid campaigns so the data is complete from the start. [L1087, 2020]

- Shopify's direct integration did not yet support the newer GA4 property type at the time, so GA4 setup could not be completed in the usual way. [L1088, 2020]

Creating a Universal Analytics property when only GA4 is offered:
1. Log in to Google Analytics.
2. Open the Advanced options link.
3. Click the option to create a Universal Analytics property.
4. Copy the UA number that is generated and use it for the Shopify analytics setup.
[L1088, 2020]

- If the Google Shopping tab is missing, the search location may be a country where Google Shopping is not available. Use a VPN set to the target country to see the results you need. [L1088, 2020]

- Reinstating a suspended Merchant Center account: Step 1: go through the store compliance checklist again and fix every item that is not fully correct. Step 2: request an appeal in Merchant Center, or contact Google through its support pages if no appeal link appears. Step 3: use phone support if it is offered, otherwise use live chat, which is often the most helpful. Step 4: expect to follow up several times until the right person reviews the case. [L1090, 2021]

- Unverified business phone in Google Merchant Center: go to Settings, find the company phone number marked as unverified, click Verify, answer the automated call Google places to that number, then enter the five-digit code it gives you. After that, contact Google support again to clear the account message. [L1090, 2021]

- Google Merchant Center and Google Ads share the same support teams, so a support request can go through Google Ads help. Sign in, describe the problem, and use phone support if it is available or live chat if not. [L1090, 2021]

- Fixing the store image Google shows in search or Shopping results: Step 1: for Google Shopping, choose in the feed app whether to use the default product image or a variant image. Step 2: for organic search results, you cannot assign the image directly, so contact Shopify live chat to check the theme or code settings. Step 3: check whether the change came from a theme or code update. [L1090, 2021]

- A Google Search Console error such as a syntax error in the site links search box cannot be solved from a general answer. Email the support team with the exact message, since they may already have a developer fix. [L1090, 2021]

- Check whether an earlier change caused a Facebook product rejection. Look for changes to Facebook settings, installed apps or the theme made just before the rejections started, since products that were approved for years should not suddenly be rejected. [L1090, 2021]

- Use a separate product description field for Facebook when the main description is too long to display. Many feed apps let you choose which description text is sent to Facebook. [L1090, 2021]

- The Google Shopping feed app can upload product data, and product metafields do not need a separate third-party app to be imported through CSV. [L1094, 2023]

- Product identifiers are needed for Google Shopping: use the UPC when the supplier has one. If there is no UPC, use the MPN (manufacturer part number), which is the model number, as the product identifier. [L1112, 2021]

- Google Merchant Center product approval can fail when the supplier's identifiers do not match Google's required field, such as an MPN being rejected in favor of an SKU. Google's live chat support should check the store and product data directly, and the supplier's identifiers must be entered in the correct field. [L1114, 2023]

- Facebook catalog rejections for some variants can be escalated by contacting Meta support, using the support options for business accounts, and explaining that some variants are approved while others are rejected. [L1115, 2024]

- Install the Pinterest app from the Shopify App Store to connect the store to Pinterest. [L1133, undated]

Claim the website on Pinterest (domain verification) with the HTML meta tag method:
1. In Pinterest, open your profile and click Settings.
2. Go to the claimed account section and select Claim website.
3. Click Claim and choose the option to add the HTML tag in the header.
4. Copy the tag.
5. In Shopify, open the theme code editor and open the theme.liquid file.
6. Paste the tag just below the canonical URL line in the header.
7. Save the file.
8. Return to Pinterest and click Continue.
9. Enter the store name and click Verify.
[L1135, undated]

- The Pin It button lets a visitor save a product image from the store to one of their own Pinterest boards. Each pin links back to the original product page on the store, and the pin shows up on the user's board and in their followers' home feeds. [L1136, 2014]

- On Shopify and BigCommerce, the Pin It button and Rich Pins are built into the store and are supposed to be enabled automatically. Check that both are switched on in the store, because the store owner is still responsible for that setting. [L1136, 2014]

- Rich product pins add live product data to a pin, such as the current price and in-stock status, pulled automatically from the store. This extra information makes buyers more informed before they click, which can improve conversion. [L1136, 2014]

- Add the supplier's SKU, manufacturer part number (MPN) and barcode to each product page where they exist. Matching identifiers help keep products approved in Google Merchant Center. [L1145, 2021-22]

- In the Shopify back end, paste the Facebook retargeting pixel code directly into the store. Previously a developer had to add tracking code to every product page, the cart and the checkout. With the pixel in place, conversions and audiences can be built from site behavior. [L1203, 2016]

- When you create your own product listing without a GTIN or barcode, use an MPN instead. You can make the MPN from your own SKU with a suffix such as -NO. [L1204, 2022]

- Analytics often show many sessions landing on the homepage even when traffic is sent to product pages, so homepage fixes still matter. Look at total sessions per page, not only landing sessions. [L1225, 2025]

- Shopify admin > Marketing > scroll to the footer menu. There you find the voucher or coupon code for the Google Ads credit (100 USD in 2020), which you use when creating the new Google Ads account. [L1277, 2020]

- Each store also gets its own Google Ads and Merchant Center account. This keeps the numbers of each business separate and easy to see. [L1277, 2020]

- Google Search Console issues like 'unstructured parsable data' on duplicate Shopify URLs are normal. Check that the main collection URLs are indexed, because the error pages are often variants that you do not want indexed. [L1283, 2023]

- Shopify Settings > Customer events: this is where tracking pixels are added to the store later. Nothing needs to be changed at initial setup. [L1305, 2020-26]

- Theme settings > Social media: remove the default Twitter, Facebook, Instagram and YouTube URLs when you do not own those accounts, so the footer no longer links to Shopify. [L1309, 2020-26]

Connecting Shopify to Meta (2022 setup, Facebook sales channel):
1. Log in to the Shopify admin.
2. Under Sales channels, click the plus icon and add Facebook. If Facebook is already installed, open its settings and update it instead.
3. Continue through the install, log in to Facebook with your password, and grant access to everything.
4. Select the correct Business Manager and the correct Facebook page. If an Instagram account is connected, it appears here and can be linked too.
5. When asked to sync product catalogs, choose create new for a store that should have its own catalog, name it, and continue.
6. Select the Facebook pixel used for that store and continue.
7. Check the summary: Business Manager, Facebook page, Instagram profile, product catalog and pixel must all match the store.
8. Turn on Automatic Advanced Matching and continue until the screen shows that you are all set, then click done.
9. Under the Facebook shop option (sell your products on Facebook), click start setup.
10. Enable data sharing and choose the Maximum level.
11. Select the pixel for the store again.
12. Click create new to create the Meta Commerce account, review the terms, accept them, and click finish setup.
13. Back in Shopify under Sales channels > Facebook, confirm the status reads that you are ready to use Facebook shop.
14. Verify the result in Commerce Manager (see the data sources and items checks).
[L1318, 2022+]

- In Shopify, the Facebook sales channel is still labelled Facebook even though the platform is now called Meta, so look for it under Sales channels with that name. [L1318, 2022+]

- Link the store to its social profiles and show an Instagram feed on the site if the store gets traffic from Instagram. Check which social platforms send the most visitors and make those profiles visible. [L1325, 2020-26]

- The displayed price in a search result can use a currency different from the one the local shopper expects. In one example, an Australian searcher saw a price in New Zealand dollars, so check the currency that Google displays for your product price and do not assume it matches your visitors' location. [L1349, 2021-22]

- Set up social media accounts in the Shopify theme at launch for Facebook, Pinterest, email address and Instagram. Twitter is generally not needed for an e-commerce store. [L1371, 2021-22]

- Changing the domain of a Shopify store while keeping the TikTok pixel: in Shopify, open the TikTok channel app, disconnect it, reconnect, and select the same pixel so that the old data is kept. The new domain URL is then entered in the URL field of each new campaign. [L1382, undated]

- On Shopify plans other than Shopify Plus, do not install the Google Analytics tag or the Facebook pixel through Google Tag Manager. Use Shopify's own integration instead, because Google Tag Manager cannot run on the checkout and those tags would miss checkout conversions. [L1390, 2021-22]

- Loading conversion tags on a Shopify store through Google Tag Manager silently drops the checkout events that conversion tracking and retargeting depend on. [L1390, 2021-22]

- Use Google Tag Manager for all tracking code on a WordPress site with WooCommerce, including Google Analytics audience tags. BigCommerce needs similar caution to Shopify, so check whether conversion tags must use its native integration. [L1390, 2021-22]

- If many Instagram followers ask to buy, build a store specifically for Instagram traffic, since Instagram allows a link in the profile. This can be done early, even on the first day of an account. [L1444, 2022]

- Link the TikTok or Instagram profile to a product page, not to the store home page. Many visitors arrive from a video and go straight to the product page without visiting the home page, so a home-page link loses sales. [L1444, 2022]

- Google Analytics is used to compare the conversion and quality of traffic sources, and can be set up with a custom report that shows search terms down to individual product level. [L1456, 2021-22]

- Use the Google Ads search term report in each campaign and ad group to see which search terms produced impressions and clicks for paid traffic. [L1456, 2021-22]


Part 42 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/41-4-store-build-and-shopify-full-technical-reference.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/43-speed-apps-and-technical-health.md
