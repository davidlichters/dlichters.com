<!-- part of ecom/deep/05-apps-and-tools.md -->
Part 31 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/30-bundle-apps.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/32-merchant-center-errors-reviews-and-support.md

## Product Feeds, Google Merchant Center and Shopping Feed Apps

### Before Connecting Anything: Store Readiness and Policy Checks

- Google Gemini can pre-check the store and its policy pages before submission to Google Merchant Center and Google Ads. It is aligned with Google's own requirements and can flag placeholders, missing information and unclear policy wording that Google's crawlers would catch. [L0167, undated]
- Use Gemini, not ChatGPT, to check a Shopify store against Google Ads and Merchant Center policies. Give it the store's home page URL, ask it to check every policy page, and ask whether the store is fully compliant. [L0808, 2026]
- An AI assistant such as Gemini can compare the website's shipping and return policy text against the answers entered in Merchant Center to check compliance before saving. Use it as a cross-check, then verify the match yourself. [L0729, 2020-26]

**Policy-by-policy check with Gemini:**

1. Start with the Returns/Refunds policy and paste the full text into Gemini. [L0167, undated]
2. Apply Gemini's recommended changes in Shopify. [L0167, undated]
3. Repeat the same process for the Shipping, Privacy, Terms and Contact pages. [L0167, undated]
4. After all updates, ask Gemini to re-check and confirm that the pages are clean. [L0167, undated]

**Prompt for the policy review:**

```
Hi, I run YOURDOMAIN.com and am getting ready to send the website to Google Merchant Center and Google Ads for review. Please go through the site and the policy pages I share and point out anything that breaks the rules or looks doubtful. For each issue, state what it is and what update you recommend. Pay particular attention to stand-in text, text in square brackets used as filler, made-up or placeholder contact information (such as dummy phone numbers), vague return or delivery terms, missing or unclear shipping charge details, and absent quick-glance summary information. Where you can, supply the exact replacement wording. Once I have made the changes, I'll paste the revised text back to you, so please tell me whether the page is then fully compliant.
```
[L0167, undated]

**Compliance checklist, in this order, before setting up any Google accounts:**

1. Remove every sample product under Shopify Admin > Products. [L0167, undated]
2. Click through every header, homepage, collection and footer link and repair any 404 errors. [L0167, undated]
3. Take out placeholder pictures and incomplete sections so the storefront appears finished. [L0167, undated]
4. Go through all Shopify policy pages under Settings > Policies and strip out any placeholder text. [L0167, undated]
5. Put real email, phone and opening hours into the contact details on the policy pages. [L0167, undated]
6. Pass each policy page through Google Gemini and implement every fix it recommends. [L0167, undated]
7. Revise the Contact Us page so it shows phone, email and hours in addition to the form. [L0167, undated]
8. Recheck with Gemini until it reports everything as compliant, and only then create the Google accounts. [L0167, undated]

### Choosing a Feed App

**Principles**

- Product feeds to Google Merchant Center should be sent with a separate dedicated app, because it gives more control than the Google & YouTube app's Merchant Center section. [L0722, 2020-26]
- A paid feed app gives more control over product data than a free one. Better product data generally leads to better results in Google Shopping, so the monthly fee is usually worth it as sales grow. [L1165, 2020-26]
- Feed management apps for Merchant Center typically cost a few dollars per month. The fee is considered worth it for reliable, automatically updated feeds. [L732.014]
- Software prices for product feed tools can often be negotiated, so ask the vendor before accepting list pricing. [L454.044]
- Compare tools on pricing model and features rather than picking one only by reputation. [L454.044, L454.026]
- Feed apps for Google, Bing and Facebook are sold separately because each platform has slightly different feed requirements. [L762.010]
- A feed management app that communicates with Merchant Center can find more errors than Google's diagnostics alone, and it tells you exactly which field to fix. Using such an app speeds up error correction and improves product visibility in Google Shopping. [L732.022]

**Native Shopify Google channel versus dedicated app (sources differ)**

- Google is taking over the native channel; a feed app provides better control. [L272.016]
- Shopify's native Google sales channel misses some useful feed data points and is harder to edit when feed changes are needed. Switch to a dedicated feed app instead. [L1170, 2021-22]
- The free Google Shopping app published by Shopify has few customization options and a 3.6-star rating in the Shopify App Store. It only makes sense for a quick start and is not suited to growing a Google Shopping business. [L1165, 2020-26]
- The free Google Merchant Center account connects directly to Shopify through the Google sales channel, following a setup process similar to the Facebook sales channel. [L1251, 2024+]
- Use the feed app's submission path, not the Google sales channel's Merchant Center listing option. [L835.133]
- Avoid the old native Shopify Google feed plugin, which had poor reviews. It only worked for US currency, failed for customers in Canada, submitted the highest shipping cost instead of the lowest, and was poorly maintained. [L732.006]

**Naming and look-alike apps**

- Many apps in the Shopify App Store have nearly identical names, such as Google Shopping. Check the developer before installing, because the Shopify-made app and third-party apps can look the same in search results. [L1165, 2020-26]
- The sources spell the feed vendor in several ways (Simprosys, Someprocess, Some Process, Symprosis). Simprosys InfoMedia is named as the maker of "Feeds for Google Shopping". [L731.020, L272.016, L255.056, L732.007]
- "Feed for Google Shopping" (not made by Shopify) is the paid app most sources recommend. [L1165, 2020-26]

**Prices and trials**

| Tool | Price stated | Trial | Source |
|---|---|---|---|
| Feed for Google Shopping (paid third-party app) | $4.99/month up to 500 products; $8.99/month up to 1,000 products; higher above that | 21 days | [L1165, 2020-26] |
| Feed for Google Shopping (2020 recording) | About $5/month | 21 days | [L1277, 2020] |
| Feeds for Google Shopping (Simprosys InfoMedia, 2021-22 recording, older) | About $5/month after trial (price at time of recording) | 22 days | [L731.030] |
| Some Process | $4.99/month up to 500 products | 21 days | [L255.057] |
| Symprosis Google Shopping Feed | $4.99/month | Free trial to start | [L1168, 2026+] |
| Symprosis (other source) | Small monthly fee | Not stated | [L732.007] |
| Google Shopping Feed (feed tool) | $5/month | Not stated | [L1033, 2019] |
| Google Shopping Feed app | Around $3 to $4/month, or free | Not stated | [L788.025] |
| Go Data Feed | Around $60-70/month for three feeds, more above that | Not stated | [L575.007] |
| Dedicated feed services (Data Feed Watch, Feedonomics) | From about 50 USD/month up to several hundred USD/month | Not stated | [L1170, 2021-22] |
| Google Merchant Center default feed | Free | Not applicable | [L575.007] |

- Shopify feed apps are a cheaper option than dedicated feed services for most stores. [L1170, 2021-22]
- Feed for Google Shopping handles feed functions that paid feed services offer at a fraction of their cost. [L1170, 2021-22]

**Other feed tools named in the sources**

- Feed tools named as product feed apps for the Shopify store and Google Merchant Center are Flexify (a free plugin with a Facebook feed focus), Data Feed Watch, Feed Optimize, Feedonomics and Go Data Feed. One popular app costs about $5 per month. Choose by pricing model and features. [L454.026]
- Common product feed tools for Shopping and social channels are Flexify (Facebook product feed), Datafeed Watch, Feedoptimise, Feedonomics and Godatafeed. The lesson treats these as largely interchangeable. [L1033, 2019]
- Shopping feed management tools such as Feed Optimise, DataFeedWatch and GoDataFeed are used to optimize the product feed, including titles and product data, to improve CTR. [L1031, 2018]
- Go Data Feed distributes the feed to hundreds of channels such as Amazon, eBay and price comparison sites, and lets you set rules to optimize and enrich feed data. [L575.007]

**Symprosis (Some Process / Symprosis / Someprocess)**

- Symprosis is a paid Shopify app with a small monthly fee that syncs products to Google Merchant Center. It is recommended for keeping feed data current and reliable. [L732.007]
- Symprosis is the app used to correct product feed errors that Google flags in Merchant Center. It is not the place to diagnose the error first. [L1015, 2020-26]
- Symprosis is a manual control tool for Google Shopping feed management used alongside the Google & YouTube app. [L856.073]
- Some Process (or SomeProcess) is used to sync the Shopify product catalog to Google Merchant Center. [L255.056]
- Some Process shows product status (red/green), errors, and allows contacting support for issue resolution. [L274.033]
- Advanced Symprosis features (custom labels, additional attributes, feed segmentation) are designed for high revenue scaling. Start with the app's default settings and basic product category reviews; add advanced features only when they become necessary for managing large inventories or complex feed rules. [L182.010]

**Google Shopping Feed app**

- The Google Shopping Feed app checks each product manually and submits it to Google Merchant Center, helping avoid bans and fix suspensions. It is recommended before starting Google Ads and costs around $3 to $4 per month or is free. [L788.025]

### Feed for Google Shopping (Simprosys): Setup

**What it does**

- Feeds for Google Shopping formats Shopify product data to Google Merchant Center's required format and sends it automatically. Manual spreadsheet feeds are error-prone and time-consuming, so an app is used instead. [L731.020]
- Feed for Google Shopping connects the Shopify product feed to Google Merchant Center via the API. It updates stock status, price, title, description, SKU, photos and promotions within about 20 minutes. It is preferred over the Google channel app. ** [L962.004]
- Set to auto update, changes in Shopify flow through the content API to Merchant Center and Google Ads in near real time. ** [L247.082]
- It offers more control than the built-in Google channel. ** [L801.109]
- It handles the Google product feed and provides conversion tracking. It is the recommended tool for connecting Shopify to Google. ** [L852.074]
- It publishes products to Google Merchant Center when the product availability box is checked. Use one Google Shopping app and avoid mixing duplicates. ** [L664.075]
- Feed for Google Shopping is a paid app of about 5 USD per month, with a free 21-day trial. It connects directly to Google Merchant Center to send the product feed automatically. ** [L1277, 2020]
- It is the recommended tool for managing your product feed to Google. It is more reliable and customizable than Shopify's native Google Shopping Channel. Google is taking over the native channel; the feed app provides better control. ** [L272.016]
- A product CSV uploaded directly to Google Merchant Center does not update automatically and only holds the data from that file. An API-based feed pushes every store change to Merchant Center in near real time, which is why price and stock changes need it. ** [L962.005]

**Installing**

Install steps (2021-22 recording, older) [L731.021]:

1. Open the Shopify App Store from the Apps section of the Shopify menu.
2. Search for "feeds for google shopping".
3. Select Feeds For Google Shopping by Simprosys InfoMedia.
4. Click Install app.

Install step from the 2026 recording [L1165, 2020-26]:

1. Install Feed for Google Shopping from the Shopify App Store (search for the name, the app is not made by Shopify) and open it under Apps.

**Connecting to Merchant Center (Simprosys / one source)** [L731.022]

1. Log in with the Google account used to create the Merchant Center account.
2. Allow the app access to the account.
3. Select the Merchant Center ID, checking it matches the ID shown in the top right corner.
4. Confirm the account.
5. In Merchant Center, go to Growth > Manage programs and click Get started under Shopping ads.
6. Return to the app and confirm that programs have been enabled.

**Connecting to Merchant Center (2026 recording)** [L1165, 2020-26]

1. Install Feed for Google Shopping from the Shopify App Store (search for the name, the app is not made by Shopify) and open it under Apps.
2. Select the Google Merchant Center account to link. Use the same email address for the app as for the Merchant Center account, because that address links everything.
3. Click confirm your account.
4. Read the notice inside the app about required Merchant Center programs. In Google Merchant Center, enable every program you plan to use, for example dynamic remarketing.
5. Back in the app, confirm that the programs are enabled. The app then verifies the stored data.
6. Check that the connection shows your primary domain and your merchant ID.
7. Open Feed settings to configure the feed.

**Permissions and trial**

- The feed app needs permission to manage Google Ads campaigns, product listings and Google Shopping accounts. Access must be allowed during sign-in, or the app cannot link Google Ads or insert the remarketing and conversion tags. [L731.041]
- The app has a free trial of 22 days in the 2021-22 recording, after which it costs about $5 per month. The 2020 and 2026 recordings give a 21-day trial. [L1277, 2020; L1165, 2020-26]
- The app must be activated before the trial ends, or it stops sending product data and the ads stop running. [L731.030]
- A free sign-up for additional attributes submits rich product data, including to Facebook and Instagram Shops. [L747.019]
- A get support button in the bottom right of the screen helps when setup gets stuck or a change does not go through. [L1165, 2020-26]
- Support is included. If the product feed shows as empty after import, contact Someprocess support directly from within the app; they can diagnose configuration issues quickly. ** [L272.017]

**Initial configuration**

- After the Merchant Center connection succeeds, the app shows Quick Sync Settings for product submission. A SWITCH TO ADVANCE INTEGRATION button leads to the more detailed feed optimization settings, which are only needed for a non-standard setup. [L731.038]
- Quick Sync Settings: choose All Products for which products are submitted, Default Product Title and Default Product Description, and All Variants for variant submission. Set tax to "Yes, prices include tax" if the shown prices include tax, and enter a notification email. [L731.024]
- Which products are submitted: All Products or Products from a Collection. [L747.018]
- Product Title Preference and Product Description Preference: Default or SEO. [L747.018, L402.014]
- Variant Submission Preference: First Variant Only or All Variants. [L747.018, L402.014]
- Append Variant Name to Product Title: Yes or No. [L747.018, L402.014]
- Inventory Policy: Follow or Ignore. [L747.018, L402.014]
- Product Image Option: use second image for a product with no variant. [L747.018]
- Submit Additional Images (checkbox). [L747.018, L402.014]
- Submit a Rich Product Description (checkbox, uses HTML tags). [L747.018, L402.014]
- Product Image Option and Submit Additional Images are the sync options for images. [L402.014]
- Settings menu contents: Sync Settings From Shopify, Google Shopping Settings, Google Shopping Actions, Bing Shopping Settings, Facebook Catalog Settings, XML Feed Settings and Google Local Inventory. [L747.022]
- Sync Settings From Shopify is the page that pulls Shopify field changes into the feed. [L747.022]
- Channel Submission Control: keep Google Shopping, Google Display Ads and Surface Across Google ticked. Google Display Ads enables dynamic remarketing, and Surface Across Google covers YouTube, Google Discover and Shopping Actions. [L1170, 2021-22]
- Custom Attributes in the feed app: Color, Size, Material, Pattern and COGS. They are sent to connected channels only, do not write back to Shopify, and are used only when the same attribute is not defined in Shopify. [L1170, 2021-22]

**Default settings**

- The Default Settings section sets fallback values for Default Google Product Category, Default Age Group, Default Gender, Default Product Condition and Default Product Identifier Management. These defaults apply to products that do not have their own value in Shopify, so they should be checked before the first feed submission. [L747.023]

**Product ID formats**

| Format | Example | When to use | Source |
|---|---|---|---|
| Global Format (default) | shopify_US_123456_987654 | Choose the global format unless one of the exceptions applies | [L731.025] |
| SKU as Product ID |, | Used when Judge.me reviews are installed | [L731.025] |
| Variant ID as Product ID |, | Needed for the Facebook product catalog feed | [L731.025] |

**Shopping Actions (only after approval)**

- After approval, Feeds for Google Shopping hosts the switch that enables Google Shopping Actions and where the additional Shopping Actions feed data is submitted. [L738.023]
- Order Sync for Google Shopping (by Simprosys) brings Shopping Actions orders from Merchant Center into Shopify. Without it, orders are visible only inside Merchant Center and no notification reaches the merchant, so install it only after approval. [L738.024]

**Symprosis connection procedure** [L732.008]

1. Install the app and choose to sync your data.
2. Enter your Merchant Center ID (a numeric ID shown in Merchant Center) and confirm the account.
3. Check the warnings the app shows, especially a missing default shipping rate for the country.
4. Wait a few minutes for the data to be processed and check that products appear in Merchant Center.

### Data Fields, Identifiers and Categories

**Fields sent to Merchant Center**

- A Shopify product feed sends these fields to Google Merchant Center: product title, description, price, image, brand, MPN (SKU), GTIN barcode, unique product ID, variant data and product type. Most of them come directly from the Shopify product record, so complete them when the product is created. [L1170, 2021-22]
- Complete product details so Google can match your products with search queries and generate impressions. ** [L834.056]
- A product feed app should fill in as many columns as possible so Google can match products to searches better. ** [L665.050]
- Shopping feed identifiers are set in the Google Shopping feed app with settings for brand, MPN, SKU and GTIN handling. *(2023)* [L855.112]
- Feed tools flag issues that Google Merchant Center does not, such as HTML in product descriptions or special characters like the ampersand, which can export as broken characters. Use a feed grade check to catch these problems automatically. [L454.029]

**Editing data**

- Manage Products > select product > EDIT PRODUCT changes details in the Shopify admin. SYNC FROM SHOPIFY pulls Shopify changes into the feed. Fields such as title, description, product type and vendor (brand) come from Shopify. [L1170, 2021-22]
- Feed for Google Shopping lets you modify the product data sent to Google and Facebook. Use it to send only part of a long description or to adjust fields instead of editing product pages. ** [L963.048]
- Feed apps let you change product data before sending it to Google and Facebook. [L510.031]

**Product IDs and offer IDs**

- In Merchant Center each variant gets its own offer ID, following the pattern shopify_[country code]_[Shopify product ID]_[variant ID], for example shopify_DE_1001_2002. Use this ID to find the exact variant when checking its status or diagnosing a suspension. [L1170, 2021-22]

**Google Product Category**

- Google Product Category values in the feed must be the full Google taxonomy path with " > " between each level, for example Health & Beauty > Personal Care > Hair Care. A category that is only the last word, or a path from a different taxonomy version, does not match the Google category list. [L747.024]
- For the Facebook product feed, the Google product category uses the same taxonomy as Google Merchant Center. Search for the Google Merchant Center product category list and choose the category that best fits your product. ** [L1068, 2019]

**Currency and tax**

- The product feed is submitted in the same currency as the Shopify store's default currency. To change the feed currency, change the currency in the Shopify store settings. [L402.015, L747.018]
- Tax is set in Quick Sync Settings: choose "Yes, prices include tax" if the shown prices include tax. [L731.024]

**Images**

- If a Facebook feed rejects a product for exceeding character limits, shorten what is submitted through the feed app. Do not delete the content from the product page to make it fit. ** [L963.049]
- When a product feed app pulls the wrong image, check its settings for image selection, since many feed apps let you choose which image to submit. [L1277, 2020]
- In Smart SEO, enable the additional images option so that images from the Shopify media section are submitted to the Google feed; for products without variants this is enough. For products with variants, set the variant name or SKU as the alt text of each variant image in Shopify, so the images map to the correct variant in the feed. [L1097, 2025]

**Title and description preference**

- When syncing the Google Shopping feed app, choose the search engine optimized title and search engine optimized description options rather than the standard product title and product description. The difference was not seen as decisive, but the SEO options are used. ** [L1068, 2019]

**Reviews**

- Judge.me is a review collection app used to pull reviews into Google Shopping star ratings. A minimum of 50 store reviews is needed. It is a free app integration with Shopify. *(2023)* [L274.028]

### Re-Sync, Sync Timing and Meta Fields

**How often data reaches Google**

| Method | Timing | Source |
|---|---|---|
| Content API with auto update on | Near real time | [L247.082] |
| Content API via Feed for Google Shopping | Stock, price, title, description, SKU, photos and promotions within about 20 minutes | [L962.004] |
| Feed pulled on a schedule | Once a day | [L967.054], [L671.084], [L762.011] |
| Manual CSV upload to Merchant Center | Does not update automatically | [L962.005] |
| Manual Excel export | Not reliable, see below | [L671.084] |

- Feed apps update the feed about once a day with stock status, price changes, new images and new titles. Optimizations made to products on the store, such as better titles, then reach Google Ads automatically. [L762.011]
- Connect the product feed to Google Merchant Center through an app that refreshes it every 24 hours. Do not rely on manual Excel exports, since a price change that is not updated in the feed causes mismatches. ** [L671.084]
- Depending on the settings, the feed can be pushed to campaigns manually or imported automatically, for example once every 24 hours. ** [L967.054]
- Use the connection option that selects the Content API as the input method, rather than Google Sheets or scheduled fetch. [L470.050]
- Check the app's settings for automatic daily sync. [L972.029]

**Meta fields that do not sync on their own**

- Shopify does not notify the app when SEO title, SEO description, custom labels, age group, gender or similar fields change. These must be re-synced manually in the app. ** [L747.017]
- Re-syncing meta fields overwrites any meta field changes that were made inside the app, except custom titles and custom descriptions. Check the app-side values before running the re-sync, because they are replaced. ** [L402.011]
- Keep the browser window open while the app is syncing meta fields. Closing it can leave the sync incomplete. Keep the window open until the app shows that syncing has finished. ** [L402.012]
- The re-sync pop-up offers these fields as checkboxes, with a Select All option: Age Group, Custom Labels, Google Product Category, Pattern, SEO Description, Size, Size Type, Color, Gender, Material, Product Condition, SEO Title, Size System, Unit Pricing Measure and Unit Pricing Base Measure. Tick Custom Labels for custom label changes, and tick the other fields only if they were also changed in the CSV. ** [L402.013]


Part 31 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/30-bundle-apps.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/32-merchant-center-errors-reviews-and-support.md
