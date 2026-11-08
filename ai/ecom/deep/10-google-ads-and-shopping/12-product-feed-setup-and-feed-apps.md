<!-- part of ecom/deep/10-google-ads-and-shopping.md -->
Part 12 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/11-setup-sequence.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/13-product-identifiers.md

## Product Feed Setup and Feed Apps

### Choosing a Feed Route

- Google's official Shopify app manages your product feed for Google Merchant Center and syncs the store with it automatically. [L0049, undated]
- In the Google Shopify app, sync either all products or only products from a specific collection. [L0049, undated]
- The Google Shopify app shows each product as `published` (synced successfully) or `warning` (has sync issues), so you can find and fix feed problems. [L0049, undated]
- Symprosis Google Shopping Feed is a Shopify app starting at $4.99/month, with a free trial. It gives granular control over the product data sent to Google, far more than Shopify's free Google & YouTube app. Choose it when scaling a store. [L0182, 2026+]
- Do not use Shopify's free Google & YouTube app for the product feed if you plan to scale. It offers limited manual control and restricted feed customization, so it suits only beginners who will not optimize or scale beyond initial listings. [L0182, 2026+]
- The built-in Google & YouTube app is free but gives less manual control over the feed. Once a store grows and needs frequent feed edits, a dedicated feed app such as Symprosis is the better choice. As of 2026, the built-in app was judged far less advanced for this purpose. [L1168, 2026+]
- Free plugins that push a feed to Merchant Center are a starting point. Feed tools go further, aiming for more traffic through optimized titles, distribution to secondary and tertiary channels, and product-level performance views across platforms. [L0454, 2019]
- A Google Shopping feed app gives far more control over feed fields than the default Shopify sales channels. You can change titles, images and other feed data without editing each product page. [L0965, 2024]
- A free Google Sheets feed is static and updated by hand for every new product. It suits only a small catalogue that rarely changes, because new suppliers and products would otherwise never reach the feed. [L1165, 2020-26]

#### Single feed or several feeds

- Starting setup: keep one feed. Do not run two Google product feeds at once, such as the Shopify Google channel and the Feed for Google Shopping app. Disconnect the Shopify Google channel and keep only one feed. [L0801, 2021]
- Starting setup: use one product feed and one Shopping campaign setup, with product titles, brands and SKUs complete, because the feed determines what Google displays. [L0962, 2021]
- Scaling setup: you can run several feeds at once, for example one free-listings feed with all products and one paid feed with only the most profitable products. Link the paid feed to the paid campaigns and the free feed to free listings. [L0965, 2024]
- The single-feed rule applies to the initial setup. The multi-feed setup applies once a store is scaling and separates products by profitability. [L0801, 2021; L0962, 2021; L0965, 2024]
- Create a separate feed for each channel, such as Instagram Shops, so product descriptions can be limited or customized per platform instead of sending identical content everywhere. [L1283, 2023]

#### Google & YouTube app versus dedicated feed app

- Install the Google & YouTube app to connect GA4 and Google Ads conversion tracking, but submit the product feed through a separate dedicated app. [L0856, 2024]
- In Shopify, Apps > Google & YouTube is used only to connect GA4 and optionally to track sales. Disconnect Merchant Center feed submission there and set it up through a separate Merchant Center feed app. [L0856, 2024]
- If the Google & YouTube app is connected to Merchant Center, it submits a second feed alongside the Google Shopping feed app. This causes daily "please review your file format" emails, even when all products are accepted. [L1116, 2025]
- Do not activate Shopify's built-in Google sales channel for Shopping. It lacks features, gives weaker results, and if set live after the feed setup, it duplicates the product feed. [L0731, 2021-22]
- Do not check the box that submits products to Merchant Center through the Google sales channel, because it duplicates the feed from the feed app. Keep the Google sales channel installed, but leave the product submission option unchecked. [L0835, 2023]

##### Procedure: Remove a duplicate feed [L1116, 2025]

1. Open the Google & YouTube app in Shopify. [L1116, 2025]
2. Go to Settings. [L1116, 2025]
3. If it shows it is connected to Merchant Center, click Disconnect. [L1116, 2025]
4. Keep the Google Shopping feed app as the only product feed sent to Merchant Center. [L1116, 2025]
5. Keep the Google & YouTube app installed, because it is used to connect Shopify to Google Analytics. [L1116, 2025]

### Connecting Shopify to Merchant Center

#### Before connecting

- The Google Merchant Center account must already exist before the Symprosis setup wizard can link it. [L1168, 2026+]
- Create the Google Merchant Center account first, because the app's setup wizard links to an existing account. [L1168, 2026+]
- Do not submit demo or test products to a live Merchant Center account, because they create product warnings. Use a store that is already linked to a real Merchant Center account for demonstrations. [L1168, 2026+]
- The tax and shipping details in Merchant Center must exactly match your Shopify settings. [L1145, 2021-22]

##### Setting: Shopping ads setup in Merchant Center [L0731, 2021-22]

- Adult content: disabled.
- Country of sale and language: select the country and English.
- Destinations: Free listings and Shopping ads.
- Name the feed (for example, "shopify feed") and click Create feed.

#### Setup with the Google Shopping feed app

##### Procedure: Symprosis setup, short version [L0182, 2026+]

1. In Shopify Admin, go to Apps. [L0182, 2026+]
2. Search for "Symprosis Google Shopping Feed". [L0182, 2026+]
3. Click Install. [L0182, 2026+]
4. Access the app from your Apps list. [L0182, 2026+]
5. Follow the guided setup wizard. [L0182, 2026+]
6. Connect your Google Merchant Center account (select the account from the previous lesson). [L0182, 2026+]
7. The app automatically pulls in all Shopify products. [L0182, 2026+]
8. Products initially show as Pending, which is normal. [L0182, 2026+]

##### Procedure: Symprosis setup, detailed version [L1168, 2026+]

1. Create the Google Merchant Center account first, because the app's setup wizard links to an existing account. [L1168, 2026+]
2. Install Symprosis Google Shopping Feed on the Shopify store by searching its name and clicking Install. It then appears in the store's Shopify apps. [L1168, 2026+]
3. Open the app and follow its setup wizard. [L1168, 2026+]
4. In the wizard, choose the Merchant Center account that was created, using the Google login that is already active. [L1168, 2026+]
5. Let the app pull in all products automatically. [L1168, 2026+]
6. Check the Google product category of each product and correct any that are wrong. The category is set inside the product view of the app. [L1168, 2026+]
7. Fill in custom attributes or detailed product characteristics only where needed. Detailed characteristics are mainly used for apparel. [L1168, 2026+]
8. Leave custom labels empty for now. [L1168, 2026+]
9. Wait 2 to 4 days, up to about four, until every product changes from Pending to approved with a green check. [L1168, 2026+]
10. Only after approval, move on to setting up Google Ads. [L1168, 2026+]

#### Data the app submits

- Default fields submitted from Symprosis to Google are Brand name, MPN, and GTIN/SKU number. These are the standard values and should be checked if settings are changed later. [L1168, 2026+]
- Symprosis submits these attributes to Google Merchant Center:

| Attribute | Notes |
|---|---|
| Brand name | From product data |
| MPN | Manufacturer Part Number |
| GTIN | Global Trade Item Number, if available |
| SKU | Stock Keeping Unit |

  [L0182, 2026+]
- Symprosis automatically creates a Content API feed and sends it to Merchant Center. This is why the store's products appear under "Provided by you", and the feed label usually matches the store. [L1168, 2026+]

#### Setup with the Google Shopify app

- Set up the app's feed settings: review the sync options (which products to sync, title and description formats). Most stores can keep the defaults. Enable "Submit additional image" for products whose variants use different images, then click sync to generate the feed. [L1165, 2020-26]
- Clicking sync pulls all products from Shopify into the feed app. This can take only moments for a small store; one example store had 27 products. Products can then be edited inside the app, including Google product category and promotions. [L1165, 2020-26]
- After the app is connected, Google Merchant Center creates a feed named "Content API" automatically. The seller does not need to add or edit it manually. [L1165, 2020-26]
- Once the feed app is connected, Merchant Center checks the domain and shipping setup automatically. Both should show as verified. Run the product sync only after these checks pass. [L0731, 2021-22]

##### Procedure: Publishing a product through the feed app [L0664, 2020]

**

1. Open the product in the Shopify admin. [L0664, 2020]
2. Under product availability, check the box for Google Shopping. [L0664, 2020]
3. Use the Shopify Google Shopping app so the product is published to the Merchant Center. [L0664, 2020]

##### Procedure: Connecting the Google sales channel and feed app (2023) [L0835, 2023]

1. In the Google sales channel, connect your Google account and set emails from Google to off. [L0835, 2023]
2. Set up only the link, and do not click the Google Merchant Center listing option in the Google sales channel. [L0835, 2023]
3. Install the feed for Google shopping app. [L0835, 2023]
4. Use the app to connect to Merchant Center and submit your product feed. [L0835, 2023]
5. Set the feed to pull and update products from your store every 24 hours, so changes appear in Google within that window. [L0835, 2023]
6. Set variant submission preference to all variants if each variant should be its own listing. [L0835, 2023]
7. Keep only one product feed in Merchant Center when starting. [L0835, 2023]

#### Google Sheets feed (free, manual)

- Google Sheets feeds suit only a small, rarely changing catalogue. Manual spreadsheet uploads are not updated in real time and drift from the store, so connect the store through the API instead. [L1165, 2020-26; L0801, 2021]

##### Procedure: Building a free feed from a Google Sheets template [L1165, 2020-26]

1. Click add product data. [L1165, 2020-26]
2. Open primary feeds and click the plus button. [L1165, 2020-26]
3. Turn off Shopping actions if you do not plan to use them. [L1165, 2020-26]
4. Click continue. [L1165, 2020-26]
5. Choose to make the product feed from Google Sheets, give it a name and click continue. [L1165, 2020-26]
6. Generate a new Google spreadsheet from the template, click create and grant the requested permissions. [L1165, 2020-26]
7. Click open to edit the spreadsheet. [L1165, 2020-26]

##### Template columns [L1165, 2020-26]

| Column | Content |
|---|---|
| Product ID | Unique identifier of each product |
| Title | Product name |
| Description | Product description |
| Link | URL of the product page |
| Condition | Product condition |
| Price | Product price |
| Availability | Stock status |
| Image link | URL of the product image |

- The template can be filled in by hand, or by pasting a product CSV exported from the Shopify store into the matching columns. It includes example rows and instructions that show how a completed sheet should look. [L1165, 2020-26]

### Sync Frequency and Updates

#### Refresh intervals

Sources agree on a 24-hour cycle. Use the manual update button only when a change must go live immediately.

- Google Merchant Center syncs products from Shopify once every 24 hours. Pricing changes are also synced every 24 hours. [L0255, 2025]
- The Google Shopping feed refreshes automatically every 24 hours with current product information from the Shopify store. [L0276, 2024]
- Products sold through the feed app should be updated automatically every 24 hours, so changes to descriptions or new products appear in Google within 24 hours. [L0835, 2023]
- In the feed app, set the update frequency (for example every 24 hours), and use the manual update button when you need changes live. [L0801, 2021]
- The refresh schedule controls how often products are resubmitted to Merchant Center, often every 24 hours. Find it in the app's sync or Google Shopping settings and change it there. [L0965, 2024]
- Connect the product feed through an app that refreshes it every 24 hours. Do not rely on manual Excel exports, because a price change not updated in the feed causes mismatches. [L0671, 2021]
- In Google Merchant Center, set the product feed to auto-update, so price and stock changes on the store sync automatically. [L0671, 2021]
- Feeds connected through the Content API update automatically, so the last upload date stays current. Use the Merchant Center feeds section to confirm updates are running. [L0732, 2020-26]
- Any edit made to a product inside the Symprosis app is automatically submitted to Google Merchant Center. No manual upload is needed after changing categories or attributes. [L1168, 2026+]
- Manual Excel or spreadsheet product feeds are no longer needed for Merchant Center. Use an automated feed solution, usually an app connected to the store. [L0732, 2020-26]
- Manually maintained feeds were a major problem, because they often missed Google's requirements. Price changes on the website were not reflected in the listings, since every update had to be copied into the feed by hand. [L0762, 2020-26]
- Do not upload product data to Merchant Center by hand through spreadsheets, because those files are never updated in real time and will drift from the store. Connect the store through the API. [L0801, 2021]
- Connect the feed from Shopify to Merchant Center using the Feed for Google Shopping app, through the API connection. [L0801, 2021]

#### Settings checklist for the Feed for Google Shopping app [L0276, 2024]

- Feed refreshes every 24 hours.
- Brand field is mapped to the Shopify brand data.
- Old or broken product URLs are removed.

#### Meta fields changed outside Shopify

- The Feed for Google Shopping app does not pick up custom label changes made in Shopify automatically. Its meta fields must be synced manually from Settings > Sync Settings From Shopify after any custom label update. [L0402, 2021-22]
- The same applies to other meta fields such as SEO title, SEO description, age group and gender that are changed via CSV. [L0402, 2021-22]

#### Timing after a fix

- Shopify product data syncs to Merchant Center automatically every 24 hours. Allow 24 to 48 hours for changes to go through. [L1115, 2024]
- After the first sync, Merchant Center can take up to 10 hours to show products for Google, and up to 4 hours for Facebook. The product section shows "no data" during this time, so wait until active items appear before setting up campaigns. [L0731, 2021-22]

#### Standard flow

- Under the standard setup, new products and changes to existing products, including price, description and variants, flow automatically from Shopify to Google Merchant Center and then to Google Ads. If campaigns are split by brand or price, check that each product is present in the campaigns. [L1097, 2025]
- The feed determines the data Google reads: price, photo, product link, description and title for each product. Google uses it to understand what you sell and to show products in Shopping ads. [L0762, 2020-26]
- Shopping ad elements such as the product image, title, price, sale price, compare-at price, seller name, shipping cost and tax information all come from the Merchant Center feed, not from Google Ads. Merchant Center data must be set up correctly before any Shopping campaign can work. [L0731, 2021-22]


Part 12 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/11-setup-sequence.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/13-product-identifiers.md
