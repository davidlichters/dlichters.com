<!-- part of ecom/deep/05-apps-and-tools.md -->
Part 33 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/32-merchant-center-errors-reviews-and-support.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/34-advertising-platforms-tracking-and-attribution.md

### Feed Optimization for CTR and Competitor Monitoring

**Optimization process** [L510.032]

1. Take product data from Shopify.
2. Modify the fields that influence CTR, such as images, titles, descriptions and review data.
3. Send the optimized feed to Google Shopping.
4. Send the same feed to Facebook for dynamic product ads.

- A product feed tool should be used to optimize product titles, which increases traffic and makes data analysis and optimization faster. Feeds can also be distributed to second and third tier shopping sites to improve return on ad spend. [L1033, 2019]
- Feed tools can pool data from Google Ads and Bing Ads to show a combined CTR. [L510.031]
- Feed tools can scan competitor product pages and search results to detect MAP pricing violations and alert you. They can also help manage product ratings and seller ratings. The manual alternative is to have an assistant check for violations. [L454.032]
- Competitor pricing alerts from feed tools notify the seller about possible MAP (minimum advertised price) violations. This helps monitor pricing without manual checks. [L1033, 2019]
- Feed apps update the feed about once a day with stock status, price changes, new images and new titles. Optimizations made to products on the store, such as better titles, then reach Google Ads automatically. [L762.011]

#### Further details

- Advanced Symprosis features-custom labels, additional attributes, and feed segmentation-are designed for high revenue scaling scenarios. Start with the app's default settings and basic product category reviews; add advanced features only when they become necessary for managing large inventories or complex feed rules. [L0182, 2026+]

- Google Shopping allows five custom label slots per product. These labels are invisible to customers and exist only in the product feed data submitted to Google. [L0224, 2024+]

- Custom labels added in Shopify require approximately four hours or longer to appear in Google Ads after applying bulk edits. [L0224, 2024+]

- The Feed for Google Shopping app sends product data from Shopify to Google Merchant Center. Set to auto update, changes in Shopify flow through the content API to Merchant Center and Google Ads in near real time. [L0247, 2021]

- Some Process (or SomeProcess) is used to sync Shopify product catalog to Google Merchant Center. [L0255, 2025]

- Some Process pricing: $4.99 per month for up to 500 products; 21-day free trial available. [L0255, 2025]

- Feed for Google Shopping app (by Someprocess) is the recommended tool for managing your product feed to Google. More reliable and customizable than Shopify's native Google Shopping Channel. Google is taking over the native channel; feed app provides better control. [L0272, 2022]

- Someprocess's Feed for Google Shopping app includes support access. If product feed shows as empty after import, contact Someprocess support directly from within the app; they can diagnose configuration issues quickly. [L0272, 2022]

- Judge.me: review collection app used to pull reviews into Google Shopping star ratings. Minimum 50 store reviews needed. Free app integration with Shopify. [L0274, 2023]

- Some Process: Google Shopping feed management app. Shows product status (red/green), errors, and allows contacting support for issue resolution. [L0274, 2023]

- Google Merchant Center (GMC): required to upload product feed to Google Shopping. Check for warnings, errors, and GTIN/product identifier issues. [L0274, 2023]

- Google Merchant Center is checked for product feed errors (corrupt data or products not being sent) when Google Ads shows no clicks; the product feed is the source of all Shopping ads. [L0357, 2019]

- Re-syncing meta fields in the Feed for Google Shopping app overwrites any meta field changes that were made inside the app, except custom titles and custom descriptions. Check the app-side values before running the re-sync, because they are replaced. [L0402, 2021-22]

- Closing the browser window while the feed app is syncing meta fields can leave the sync incomplete. Keep the window open until the app shows that syncing has finished. [L0402, 2021-22]

- The re-sync pop-up in the Feed for Google Shopping app offers these fields as checkboxes, with a Select All option: Age Group, Custom Labels, Google Product Category, Pattern, SEO Description, Size, Size Type, Color, Gender, Material, Product Condition, SEO Title, Size System, Unit Pricing Measure and Unit Pricing Base Measure. Tick Custom Labels for custom label changes, and tick the other fields only if they were also changed in the CSV. [L0402, 2021-22]

- The feed app's Sync Settings page has product submission options: Variant Submission Preference (First Variant Only or All Variants), Append Variant Name to Product Title (Yes or No), Inventory Policy (Follow or Ignore), Product Title Preference (Default Product Title or SEO Title), Product Description Preference (Default Product Description or SEO Description), Product Image Option, Submit Additional Images, and Submit a Rich Product Description with HTML tags. These options control what the Google Shopping feed sends to Merchant Center for each product. [L0402, 2021-22]

- The product feed is submitted in the same currency as the Shopify store's default currency. To change the feed currency, change the currency in the Shopify store settings. [L0402, 2021-22]

- Product feed apps work between the Shopify store and Google Merchant Center to optimize product feeds. Options named in the lesson are Flexify (a free plugin with a Facebook feed focus), Data Feed Watch, Feed Optimize, Feedonomics and Go Data Feed, and one popular app costs about $5 per month. Choose by pricing model and features. [L0454, 2019]

- Feed tools flag issues that Google Merchant Center does not, such as HTML in product descriptions or special characters like the ampersand, which can export as broken characters. Use a feed grade check to catch these problems automatically. [L0454, 2019]

- Feed tools can export one product feed to Google Shopping, Facebook Shop, Instagram product posts, Pinterest buyable pins, eBay, Bing, Amazon and affiliate networks such as ShareASale. They also handle currency conversion and multi-country export. Amazon is only an option where the supplier allows dropshipping there. [L0454, 2019]

- Feed tools can scan competitor product pages and search results to detect MAP pricing violations and alert you. They can also help manage product ratings and seller ratings. The manual alternative is to have an assistant check for violations. [L0454, 2019]

- Software prices for product feed tools can often be negotiated, so ask the vendor before accepting list pricing. Compare tools on pricing model and features rather than picking one only by reputation. [L0454, 2019]

- In the Google & YouTube app on Shopify, connect only your Google Analytics 4 property. If the feed app already manages the Merchant Center connection, the Merchant Center connection should not be linked inside the Google & YouTube app. [L0470, 2023]

- To reconnect a product feed through a feed app such as Simprosys, use the feed app's connect option for Google Merchant Center and select the Content API as the input method, rather than Google Sheets or scheduled fetch. [L0470, 2023]

- A product feed management app connected to Shopify is used to submit products to Google Merchant Center and to manage the tracking tags. [L0472, 2025]

- Shopping feed management tools such as Feed Optimize, Data Feed Watch and GoDataFeed let you change product data before sending it to Google and Facebook. They can also pool data from Google Ads and Bing Ads to show a combined CTR. [L0510, 2018]

Shopping feed management process:
1) Take product data from Shopify.
2) Modify the fields that influence CTR, such as images, titles, descriptions and review data.
3) Send the optimized feed to Google Shopping.
4) Send the same feed to Facebook for dynamic product ads.
[L0510, 2018]

- Google Shopping (formerly Product Listing Ads) is described as the highest-quality, cheapest traffic for e-commerce, and every store should run it. Its main threats are the product feed going offline, prices being disapproved, or poor data quality. [L0575, 2014]

- Google Merchant Center's default feed is free; Go Data Feed is a paid feed-management tool (around $60-70 per month for three feeds, more above that). It distributes the feed to hundreds of channels such as Amazon, eBay and price comparison sites, and lets you set rules to optimize and enrich feed data. [L0575, 2014]

- The Shopify Google Shopping app publishes products to Google Merchant Center when the product availability box is checked. Use one Google Shopping app and avoid mixing duplicates. [L0664, 2020]

- A product feed app should fill in as many columns as possible so Google can match products to searches better. [L0665, 2022]

- Connect the product feed to Google Merchant Center through an app that refreshes it every 24 hours. Do not rely on manual Excel exports, since a price change that is not updated in the feed causes mismatches. [L0671, 2021]

- A built-in TikTok shop feed was offered as a theme feature to replace a paid tool. The speaker claimed that the paid tool costs $10,000 a year, a figure that was not verified during the lesson. [L0709, 2017+]

- The app 'Feeds for Google Shopping' by Simprosys InfoMedia formats Shopify product data to Google Merchant Center's required format and sends it automatically. Manual spreadsheet feeds are error-prone and time-consuming, so an app is used instead. [L0731, 2021-22]

- To install the feed app, open the Shopify App Store from the Apps section of the Shopify menu, search for 'feeds for google shopping', select Feeds For Google Shopping by Simprosys InfoMedia, then click Install app. [L0731, 2021-22]

- Connect the feed app to Merchant Center: 1. Log in with the Google account used to create the Merchant Center account. 2. Allow the app access to the account. 3. Select the Merchant Center ID, checking it matches the ID shown in the top right corner. 4. Confirm the account. 5. In Merchant Center, go to Growth > Manage programs and click Get started under Shopping ads. 6. Return to the app and confirm that programs have been enabled. [L0731, 2021-22]

- In the feed app's Quick Sync Settings, choose All Products for which products are submitted, Default Product Title and Default Product Description, and All Variants for variant submission. Set tax to 'Yes, prices include tax' if the shown prices include tax, and enter a notification email. [L0731, 2021-22]

- Product ID format options in the feed app are Global Format (e.g. shopify_US_123456_987654, the default), SKU as Product ID (used when Judge.me reviews are installed), and Variant ID as Product ID (needed for the Facebook product catalog feed). Choose the global format unless one of the exceptions applies. [L0731, 2021-22]

- The feed app has a free trial of 22 days, after which it costs about $5 per month (price at time of recording in 2021). The app must be activated before the trial ends, or it stops sending product data and the ads stop running. [L0731, 2021-22]

- After the Merchant Center connection succeeds, the Feeds for Google Shopping app shows Quick Sync Settings for product submission. A SWITCH TO ADVANCE INTEGRATION button leads to the more detailed feed optimization settings, which are only needed for a non-standard setup. [L0731, 2021-22]

- The feed app needs permission to manage Google Ads campaigns, product listings and Google Shopping accounts. Access must be allowed during sign-in, or the app cannot link Google Ads or insert the remarketing and conversion tags. [L0731, 2021-22]

- Avoid the old native Shopify Google feed plugin, which had poor reviews. It only worked for US currency, failed for customers in Canada, submitted the highest shipping cost instead of the lowest, and was poorly maintained. [L0732, 2020-26]

- Symprosis is a paid Shopify app with a small monthly fee that syncs products to Google Merchant Center. It is recommended for keeping feed data current and reliable. [L0732, 2020-26]

Connect a feed app such as Symprosis to Merchant Center:
1. Install the app and choose to sync your data.
2. Enter your Merchant Center ID (a numeric ID shown in Merchant Center) and confirm the account.
3. Check the warnings the app shows, especially a missing default shipping rate for the country.
4. Wait a few minutes for the data to be processed and check that products appear in Merchant Center.
[L0732, 2020-26]

- Feed management apps for Merchant Center typically cost a few dollars per month. The fee is considered worth it for reliable, automatically updated feeds. [L0732, 2020-26]

- A feed management app that communicates with Merchant Center can find more errors than Google's diagnostics alone, and it tells you exactly which field to fix. Using such an app speeds up error correction and improves product visibility in Google Shopping. [L0732, 2020-26]

- Feeds for Google Shopping is the Shopify app used to submit product feeds. After approval, it hosts the switch that enables Google Shopping Actions and where the additional Shopping Actions feed data is submitted. [L0738, 2021-22]

- Order Sync for Google Shopping, made by Simprosys, brings Shopping Actions orders from Merchant Center into Shopify. Without it, orders are visible only inside Merchant Center and no notification reaches the merchant, so install it only after approval. [L0738, 2021-22]

- Custom labels can be added either in the Feed for Google Shopping app or through the Shopify CSV bulk upload. The CSV method is the quicker option for many products, because the Shopify CSV template already includes the Google custom label fields. [L0747, 2021-22]

- The Feed for Google Shopping app does not automatically pick up changes to certain Shopify meta fields. Shopify does not notify the app when SEO title, SEO description, custom labels, age group, gender or similar fields change, so these must be re-synced manually in the app. [L0747, 2021-22]

- Feed for Google Shopping > Settings options: Which Products Needs to be Submitted in Feed (All Products or Products from a Collection); Product Title Preference (Default Product Title or SEO Title); Product Description Preference (Default Product Description or SEO Description); Variant Submission Preference (First Variant Only or All Variants); Append Variant Name to Product Title (Yes or No); Inventory Policy (Follow or Ignore); Product Image Option (use second image for a product with no variant); Submit Additional Images (checkbox); Submit a Rich Product Description (checkbox, uses HTML tags). The feed currency follows the Shopify store default currency and is changed in the Shopify store settings. [L0747, 2021-22]

- The Feed for Google Shopping app offers a free sign-up for additional attributes to submit rich product data, including to Facebook and Instagram Shops. [L0747, 2021-22]

- The Feed for Google Shopping product list has tabs for Submitted, Submitted with Warnings and Excluded. Above them is a panel titled Errors from Merchant Center with a Refresh Product Errors button, and it shows when the error data was last refreshed, so refresh it before acting on an older error list. [L0747, 2021-22]

- The Feed for Google Shopping app's Settings menu holds Sync Settings From Shopify, Google Shopping Settings, Google Shopping Actions, Bing Shopping Settings, Facebook Catalog Settings, XML Feed Settings and Google Local Inventory. Sync Settings From Shopify is the page that pulls Shopify field changes into the feed. [L0747, 2021-22]

- The Feed for Google Shopping Default Settings section sets fallback values for Default Google Product Category, Default Age Group, Default Gender, Default Product Condition and Default Product Identifier Management. These defaults apply to products that do not have their own value in Shopify, so they should be checked before the first feed submission. [L0747, 2021-22]

- Google Product Category values in the feed must be the full Google taxonomy path with ' > ' between each level, for example Health & Beauty > Personal Care > Hair Care. A category that is only the last word, or a path from a different taxonomy version, does not match the Google category list. [L0747, 2021-22]

- Product feed apps automate sending your product data to advertising platforms. Separate apps exist for Google, Bing and Facebook because each platform has slightly different feed requirements. [L0762, 2020-26]

- Feed apps update the feed about once a day with stock status, price changes, new images and new titles. Optimizations made to products on the store, such as better titles, then reach Google Ads automatically. [L0762, 2020-26]

- The Google Shopping Feed app checks each product manually and submits it to Google Merchant Center, helping avoid bans and fix suspensions. It is recommended before starting Google Ads and costs around $3 to $4 per month or is free. [L0788, undated]

- Google Merchant Center is used to receive the product feed for Google Shopping. The store feed is connected through the API so product data stays current. [L0801, 2021]

- Feed for Google Shopping is the Shopify app that sends product data to Google Merchant Center and offers more control than the built-in Google channel. [L0801, 2021]

- Google Merchant Center holds product data for Google Shopping; product details must be complete so Google can match your products with search queries and generate impressions. [L0834, 2021]

- The feed app for Google Shopping is Simprosys, which connects the store to Google Merchant Center and submits the product feed. Use the feed app's submission path, not the Google sales channel's Merchant Center listing option. [L0835, 2023]

- Feed for Google Shopping is a Shopify App Store app that handles the Google product feed and provides conversion tracking. It is the recommended tool for connecting Shopify to Google. [L0852, 2020]

- Google Shopping feed app is used to submit product identifiers, with settings for brand, MPN, SKU and GTIN handling. [L0855, 2023]

- Symprosis is a manual control tool for Google Shopping feed management used alongside the Google & YouTube app. [L0856, 2024]

- Shopify apps can generate and sync a Bing shopping feed from inside the store. The workflow matches the Google feed setup, so the same app and steps can be reused. [L0866, 2020-26]

- Feed for Google Shopping connects the Shopify product feed to Google Merchant Center via the API. It updates stock status, price, title, description, SKU, photos and promotions within about 20 minutes. It is preferred over the Google channel app. [L0962, 2021]

- A product CSV uploaded directly to Google Merchant Center does not update automatically and only holds the data from that file. An API-based feed pushes every store change to Merchant Center in near real time, which is why price and stock changes need it. [L0962, 2021]

- The Feed for Google Shopping promotion setting applies only to Google Shopping campaigns. It does not carry promotions over to Facebook or other connected accounts, so those must be set up separately. [L0962, 2021]

- Feed for Google Shopping lets you modify the product data sent to Google and Facebook. Use it to send only part of a long description or to adjust fields instead of editing product pages. [L0963, 2022]

- If a Facebook feed rejects a product for exceeding character limits, shorten what is submitted through the feed app. Do not delete the content from the product page to make it fit. [L0963, 2022]

- Google Merchant Center holds the product feed for Google Shopping. Custom labels in the feed can be used to group products so that a campaign can be bulk edited. [L0966, 2025]

- Shopify apps that connect the store to Google Merchant Center pull product data automatically. Depending on the settings, the feed can be pushed to campaigns manually or imported automatically, for example once every 24 hours. [L0967, 2020]

- Google Merchant Center holds the product feed used for free product listings and paid Google Shopping ads. Products that are approved there can appear in free listings, which start giving data within days. [L0968, 2021]

- To disconnect Merchant Center from the Google & YouTube app: open the app in Shopify, find Merchant Center under Connected services, click the three dots, click Manage settings, and disconnect it. Keep the Google Analytics connection active, since it is used for sales tracking. [L0972, 2025]

- The Google & YouTube app should be used only to connect the Shopify store to Google Analytics. Product feed management is handled separately through a dedicated feed app. [L0972, 2025]

- A dedicated product feed app gives more control over the feed, such as including or excluding certain products, than the default Google feed. Check its settings for automatic daily sync. [L0972, 2025]


Part 33 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/32-merchant-center-errors-reviews-and-support.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/34-advertising-platforms-tracking-and-attribution.md
