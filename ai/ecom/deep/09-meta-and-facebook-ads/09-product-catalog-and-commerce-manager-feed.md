<!-- part of ecom/deep/09-meta-and-facebook-ads.md -->
Part 9 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/08-pixel-events-conversions-api-and-shopify-integrati.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/10-ads-manager-columns-custom-metrics-and-naming.md

### Product Catalog and Commerce Manager Feed

**Making products sellable on Facebook and Instagram**

- Procedure:
  1. Set each product's status to active. [L1027, 2026]
  2. Select the Facebook sales channel for each product. [L1027, 2026]
  3. Publish the products. [L1027, 2026]
  4. Wait until the catalog shows Catalog in sync, which confirms the products were synced to the catalog for ads and shops. [L1027, 2026]
- Procedure (before the catalog sync):
  1. In Shopify, set the product status to active for the Facebook & Instagram sales channel. [L1028, 2026]
  2. Publish the products to that channel. [L1028, 2026]
  3. Sync products to your Meta catalog so they can be featured in ads and shops. [L1028, 2026]
  4. Wait until the catalog shows as in sync before running ads. [L1028, 2026]
- The product catalog must contain the full catalog, since remarketing needs every product to be available. If products are rejected, shorten the description below the 5,000-character limit. [L0834, 2021]
- Facebook product descriptions must stay under 5,000 characters, or the product will not publish to Facebook. [L0834, 2021]

**Checking the catalog in Commerce Manager**

- Meta Commerce Manager, reached through a Meta Commerce account linked to the Business Manager, holds the product catalog that allows dynamic remarketing with products. Data sources and items show whether the Shopify products arrived correctly. [L1318, 2022+]
- For a store with its own brand, create a new product catalog during the sync step rather than adding it to a catalog that belongs to another business. Name it after the store domain. [L1318, 2022+]
- Choose the Business Manager, Facebook page, Instagram profile and pixel that belong to the store. Several businesses or pixels may be listed, and picking the wrong one connects the store to the wrong account. [L1318, 2022+]
- The Shopify product feed in Commerce Manager should be named Shopify dynamic Facebook ads product feed and show an all good status with its latest update time. [L1318, 2022+]
- Data sources can still show an old manually uploaded feed that has not been updated for 365 days. Ignore that stale feed and check the newly updated Shopify feed instead. [L1318, 2022+]
- Procedure for checking products in Commerce Manager:
  1. Open Commerce Manager from the Business Manager. [L1318, 2022+]
  2. Click data sources and find the Shopify dynamic Facebook ads product feed with its latest update time and an all good status. [L1318, 2022+]
  3. Click items to confirm all Shopify products are listed. [L1318, 2022+]
  4. Expand a product to see whether it is in stock or out of stock and to see its content details. [L1318, 2022+]
- Connecting the Shopify store to Meta, enabling data sharing and checking the Commerce Manager feed only prepares the account and spends no ad budget. Confirm that the product feed and items are correct before building audiences or launching any ads. [L1318, 2022+]

**Feed content and dynamic ads**

- Dynamic product ads require the account to be linked to the store's product feed, which may need more account activity first. Posting a few times a week on Instagram builds this activity. [L0429, 2022]
- Meta dynamic remarketing works when the store connects directly to Meta through Shopify, which shares the product catalog. A custom feed can be used instead for more control, submitted as a catalog URL in Meta. [L0429, 2022]
- Meta ads can run before dynamic product ads are possible. [L0429, 2022]
- Facebook Marketplace is a default placement for Meta ads run from a Shopify catalog. Separate Marketplace listings are not needed. [L0429, 2022]
- Running an ad to a product with no shop page is risky. A catalog-based ad with checkout inside Facebook is an alternative that avoids a landing page, but it requires setting up a catalog first. [L0552, 2023]
- Connect the store to the Facebook page and import the product catalog there, so products can be viewed on Facebook and visitors can return to the store. Post content on the Facebook page that matches what the successful reference store posts. [L1325, 2020-26]

### Catalog and Feed Errors

- Conversion errors (wrong conversion types, ID issues) are often platform-level Facebook issues that affect multiple users. Contact Facebook support by clicking the question mark (?) icon at the bottom right of the campaigns page. [L0209, 2023]
- Procedure when Meta reports a product feed error such as "add product description":
  1. Check how the product feed is submitted to Meta. [L0429, 2022]
  2. If submitted through a Shopify app, open the app's feed and check that the product description column contains data. [L0429, 2022]
  3. Fix the blank column so Meta reads the correct field. [L0429, 2022]
- Procedure when a Facebook catalog reports products without descriptions although they have text:
  1. Check whether all products or only a subset are affected. [L0470, 2023]
  2. If all products are affected, check in the feed app (for example Simprosys) that the correct Shopify section is linked to the product feed. [L0470, 2023]
  3. If only a subset is affected, check whether those descriptions are too long for Facebook or contain HTML that Facebook does not accept. [L0470, 2023]
  4. For the affected products, write custom descriptions inside the feed app so that the feed sent to Facebook carries them. [L0470, 2023]
- Procedure when Facebook rejects a product catalog without a clear reason:
  1. Do not repeatedly request reviews from the rejection notice. [L0853, 2021]
  2. Open the Facebook support page and click Get started. [L0853, 2021]
  3. Use the live chat there to learn the reason and ask for the issue to be resolved. [L0853, 2021]

### Tracking Errors and Common Mistakes

- Pixel ID mismatch: if the pixel ID selected in Shopify is wrong, optimization does not work. Compare it with the ID in Meta Events Manager before confirming. [L1028, 2026]
- Missing Purchase event: check the Shopify sales channel settings and data sharing, as in the Pixel Helper procedure. [L0837, 2025]
- Setup seems complete but sends no events: test events must show up in Events Manager before the setup counts as finished. [L1028, 2026]
- Interrupting Finalizing channel setup by refreshing the page can leave the channel incomplete. [L1028, 2026]
- Blocked parameters and events: data sharing category and domain controls in Events Manager can block parameters and events. If no category is assigned, set the dataset category via Edit. The allow list or block list controls which domains can send events to Facebook. [L1027, 2026]
- Bot and non-buying traffic: newly launched ads, UTM parameters or platform crawlers can inflate visitor counts. Launch ads at least six to seven hours before the planned start, so the platform's bot traffic arrives before measurement begins. Exclude it from funnel analysis. [L1260, undated]
- Stale feed: an old manually uploaded feed (not updated for 365 days) can be mistaken for the live feed. Check the newly updated Shopify feed. [L1318, 2022+]
- Accuracy after iOS: maximum data sharing recovers only part of the tracking lost after iOS 14.5, so do not expect all lost conversions to return. [L1318, 2022+]

#### Further details

- Online Store > Preferences > Facebook Pixel: click 'Set up Facebook' to connect the pixel through the Facebook app. The app handles the setup and enables advanced tracking options that help target new and existing customers, including retargeting. The pixel tracks visitor behaviour on the store to support marketing. [L0370, 2021-22]

- The Facebook Pixel is set up in Shopify under Online Store > Preferences > Facebook Pixel by clicking Set up Facebook. Connecting through the Facebook app ensures correct setup and enables advanced tracking for retargeting audiences. [L0726, 2021-22]

- In Online Store > Preferences, the Facebook Pixel section lets you connect your pixel through the Facebook app. The app handles the setup and enables advanced tracking that supports retargeting of new and existing customers. [L1145, 2021-22]


Part 9 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/08-pixel-events-conversions-api-and-shopify-integrati.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/10-ads-manager-columns-custom-metrics-and-naming.md
