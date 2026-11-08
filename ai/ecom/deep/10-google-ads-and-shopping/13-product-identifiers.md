<!-- part of ecom/deep/10-google-ads-and-shopping.md -->
Part 13 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/12-product-feed-setup-and-feed-apps.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/14-verification-and-approval.md

### Product Identifiers

#### Priority: which identifier to submit

Sources differ by year and by emphasis. Use the supplier's GTIN or UPC when one exists, MPN when none exists, and a self-made MPN only when the supplier provides neither.

| Situation | Identifier to submit | Source and status |
|---|---|---|
| Supplier provides a GTIN, UPC or EAN | Supplier's barcode | Current advice [L0470, 2023; L0934, 2023; L1115, 2024; L0971, 2024] |
| Supplier provides no barcode, but has an MPN | MPN | Current advice [L0468, 2020; L0803, 2022; L0984, 2024; L1105, 2024] |
| Supplier has no SKU, GTIN or MPN | Self-made MPN | Current advice [L1115, 2024; L1113, 2022] |
| MPN preferred over GTIN for fewer approval issues | MPN | ** [L0270, 2021] |
| MPN used instead of UPC | MPN | ** [L0272, 2022] |
| GTIN is not required; MPN is sufficient | MPN | ** [L1109, 2018] |

- Use the GTIN when a supplier provides one, because Google uses it to match the product to other listings. If no GTIN exists, use the MPN from the manufacturer. SKU is an internal stock code. ISBN applies only to books. UPC is one common product code format. [L0470, 2023]
- Use the supplier's UPC as the product identifier when it has one, because it helps Shopify and Google Merchant Center match your product with identical products. If there is no UPC, use the MPN instead. [L0934, 2023]
- For Google Shopping, UPC codes give an advantage if the supplier has them. If not, use the manufacturer part number (MPN) instead. [L0971, 2024]
- For Merchant Center product identifiers, use the supplier-provided GTIN if available. If no GTIN exists, use MPN instead. If the supplier provides neither, create your own identifier and use the SKU as the MPN. [L1115, 2024]
- Google Shopping supports GTIN or SKU. A store does not need both. Either identifier is enough for listing products. [L0429, 2022]
- Merchant Center accepts the manufacturer part number (MPN) as a product identifier, and it matters most when a product has no GTIN. Provide the brand and MPN for products that lack a GTIN, following Google's guidance. [L1105, 2024]
- In Google Merchant Center, an MPN is used as a product identifier when a product has no GTIN, so enter it for branded products that lack a GTIN. [L0984, 2024]
- MPN identifiers are valid to use when suppliers have no SKU or GTIN, because Google documents when MPN is used. Check competitors' Google Shopping listings to see which identifiers they use before creating your own. [L0856, 2024]
- Use an MPN when a GTIN is not available. MPNs can be used alongside or instead of GTINs in Google Merchant Center. An internal code such as AB1 or AB2 can serve as the MPN for tracking. [L0803, 2022]
- Products that have no GTIN can be listed with their MPN, and Google does not penalize this. Check Google's MPN documentation to see the situations in which an MPN should be used. [L0965, 2024]
- GTIN numbers missing or incorrect in the feed cause a low quality score and lower ad rank. Add GTINs where available. If not available, use UPC, EAN or ISBN equivalents. [L0274, 2023]
- Complete product identifiers in the feed, such as brand, GTIN (barcode number) and manufacturer part number, help Google match your product to the right searches and to competitor listings. Missing identifiers weaken that matching. [L0739, 2021-22]
- Some products require a GTIN, a unique product identifier such as a barcode. Products without a valid GTIN can be disapproved, so ask your feed app provider how to add GTINs to your products. [L0732, 2020-26]
- Provide identifiers in the feed for paid advertising. Barcodes must be entered whenever a supplier provides them, though a missing barcode is not a problem. [L1163, 2021-22]
- Google Merchant Center approval can be delayed when product identifiers are missing from the feed. Submit an MPN for every product, and check the feed if a review drags on. ** [L1109, 2018]

#### Barcodes and suspension risk

- Products that have a barcode (UPC, GTIN or EAN, depending on the country) must include that barcode number in the product feed. If the supplier provides no barcodes, the product does not need one and should not cause suspension. Missing barcodes on products that have them can lead to individual product or full account suspension. [L0727, 2021-22]
- If a product has a barcode and it is missing from the feed, Google may find it and suspend the product until the barcode is added. Supplying barcodes where they exist tends to increase impressions and can improve ranking. [L1170, 2021-22]
- Barcodes are registered in central databases that Google can query, and each barcode links to product information. A valid barcode helps Google match the product more accurately and use its historical performance data. [L1170, 2021-22]
- UPC is the common term in the US, EAN in Europe, and GTIN is the general term. All three describe the same barcode number. Supply a barcode only if the product actually has one. [L1170, 2021-22]
- Never buy UPC codes. If a product has no UPC or SKU, use the MPN identifier in Google Merchant Center. ** [L1277, 2020]
- If a supplier does not provide a barcode, a competitor's listing or an online barcode search can reveal the product's GTIN. Use this as a fallback when the supplier does not respond. [L0807, 2025]

##### Procedure: Fixing missing barcodes [L0727, 2021-22]

1. Check the Merchant Center product data diagnostics for missing or invalid GTIN issues. [L0727, 2021-22]
2. Contact the supplier and ask whether they have barcode numbers for the products, and request them. [L0727, 2021-22]
3. Enter the barcode in Shopify and make sure the supplier information matches. [L0727, 2021-22]
4. Let the feed update Merchant Center automatically. [L0727, 2021-22]

#### Custom products

- Mark a product as custom only if it truly has no identifiers, such as a self-made product or a unique bundle, or if you are the only seller of it. Marking a product as custom to avoid competition is not a valid reason. [L1170, 2021-22]
- Marking a product as custom while a barcode exists reduces its impressions. Google then ranks it below competitors who supply identifiers, so it rarely helps. [L1170, 2021-22]
- Create product bundles as custom products when you sell a combination no other seller offers. This is the main valid use case for custom submission. [L1170, 2021-22]
- For a self-made bundle or custom product, Google does not require a barcode. In the Shopping feed you can mark it as a custom product. Bundles built from the same base product still compete for the same clicks, so the cost per click for the same search stays the same. [L1456, 2021-22]
- A product with no unique identifiers is submitted with identifier_exists set to FALSE, as shown in the options table below. [L1170, 2021-22]

##### Product identifier management options in the feed app [L1170, 2021-22]

| Option | What is submitted | Use when |
|---|---|---|
| Submit Brand Name, MPN (SKU) and GTIN (Barcode) | All three identifiers; any missing value is not submitted | Products have correct, unique identifiers that match other merchants for the same product or variant |
| Submit Brand Name and MPN (SKU) | Brand and MPN only; GTIN is ignored | No valid barcode exists; this may limit performance |
| Submit Product as Custom Product | No unique identifiers; identifier_exists set to FALSE | You are the only advertiser of the product, e.g. a self-made bundle |
| Check "Adult-oriented" | Flags the product as adult-oriented | The product contains adult merchandise or sexually explicit content |

- The identifier setting in the Google Shopping feed app controls how brand, MPN, SKU and GTIN are submitted. Keep the option that sends brand name, MPN, SKU and GTIN enabled, so a product without a GTIN falls back to its MPN or SKU. Check this setting before troubleshooting missing identifier warnings. [L0855, 2023]
- The app's settings control how product identifiers are submitted to Google, and must be checked when GTIN codes are missing. [L0855, 2023]
- If the supplier provides no identifiers, the product can be set up to submit identifiers from the feed app's default identifier option. [L1165, 2020-26]

##### Procedure: Setting default product identifiers in the feed app [L1165, 2020-26]

1. Open the default product identifier management option. [L1165, 2020-26]
2. Choose the option that submits brand name, MPN (SKU number) and GTIN (barcode) together. [L1165, 2020-26]
3. If some identifiers are missing, the feed still works and submits the ones available. [L1165, 2020-26]
4. Click save, then confirm with yes, save. [L1165, 2020-26]
5. Click sync again so the feed modifiers link to the products from the store. [L1165, 2020-26]

### Identifier Fallbacks and Errors

#### Resolving a GTIN error

- If a product returns a GTIN error, enter the manufacturer part number (MPN) in the MPN column instead, because MPN values are usually approved more easily than GTINs. ** [L0357, 2019]
- When a product has no GTIN, Google Merchant Center can accept manufacturer part numbers (MPN) instead. Use MPNs as the fallback identifier when Merchant Center reports a missing GTIN error. ** [L0468, 2020]
- A product flagged for missing GTIN should be listed with an MPN instead, leaving the GTIN field empty. Google documentation explains the required fields when the MPN is flagged as not one of a kind. [L1283, 2023]
- To fix invalid GTIN errors in Merchant Center, correct the product page on Shopify or disable GTIN in the product feed settings. [L1115, 2024]
- If Google reports a GTIN as having too few digits, add leading zeros in front of it until it reaches the full required length. This is the fix Google itself suggests. [L0470, 2023]
- GTINs must be unique for each product. Do not use the same value, such as the brand name, for several products. [L0964, 2023]
- Product variations that are multipacks of one item cannot share the same GTIN. Give each variation a unique identifier, or sell the item only as bundles. [L1281, 2022]

##### Procedure: Resolving Merchant Center GTIN errors [L0469, 2021]

1. Remove the barcode if it duplicates the SKU, and keep only the SKU value. [L0469, 2021]
2. Resubmit the product feed and check whether the errors clear. [L0469, 2021]
3. If the SKU does not resolve the error, use the MPN (manufacturer part number) instead. [L0469, 2021]

- You do not need every product identifier. Using the same value in multiple fields, such as SKU and barcode, can trigger duplicate-value errors in Merchant Center. [L0469, 2021]

#### Fixing missing identifiers

**

##### Procedure: Fixing missing product identifiers in Merchant Center [L1088, 2020]

1. Check Merchant Center for products flagged with missing values, since they can be limited. [L1088, 2020]
2. Ask the supplier for SKU numbers first, or find them on the price sheets they sent. [L1088, 2020]
3. If no SKU exists, use the manufacturer part number (MPN). [L1088, 2020]
4. If neither exists, create your own consistent naming and numbering convention. [L1088, 2020]
5. After the fix, confirm impressions rise before raising the budget. [L1088, 2020]

#### Creating your own identifiers (MPN)

- Create your own MPNs only for suppliers that lack SKUs, UPCs and MPNs, or when private labeling. [L0247, 2021]
- When private labeling, create your own identifier, such as a brand name plus a number, to use as the MPN instead of the supplier's SKU. This stops Google from matching your products with the supplier's other listings. ** [L0247, 2021]
- To make MPNs, make up a consistent code from the brand's name, for example the brand initial followed by the product letters and a sequence number. Use the same logic for every product. ** [L1277, 2020]
- Use a consistent MPN format per supplier. For example, take the supplier's product reference number or SKU, create an internal prefix from the brand name (such as the first letters of the brand), and join them with an underscore, as in FOV_12345. Apply the same format to every product from that supplier. ** [L1109, 2018]
- Around 99% of suppliers have no UPC, based on nearly 1,000 suppliers worked with. If a supplier does provide a UPC, GTIN or its own MPN, use the supplier's identifier instead. ** [L1109, 2018]
- When a product has no GTIN, use the MPN field in Google Merchant Center. If the supplier has no MPN either, create one from the brand initials plus a sequence number, such as AP-1 and AP-2. [L1113, 2022]
- A custom identifier can be built from brand initials plus a product descriptor, such as AS-blue-one for a blue surfboard. This ensures uniqueness without relying on supplier identifiers. ** [L0245, 2020]
- Use MPN (Manufacturer Part Number) as a unique product identifier when UPC numbers are unavailable or do not exist. You may create MPN numbers if the supplier does not provide them. ** [L0245, 2020]
- Never invent a SKU to fill the identifier field, because SKUs are retailer-specific and are not universal product identifiers. Use a UPC or MPN from the supplier instead. [L0934, 2023]

### SKU Rules

- Do not invent SKUs. If a brand's products already have SKUs and you sell under that brand, use the supplier's SKU. ** [L0247, 2021]
- Keep SKUs in the product feed as best practice, even if they cause products to appear among competitors in Google Shopping comparisons. Removing them is not the recommended fix. [L0470, 2023]
- Product SKU numbers from the feed can match buyer searches, so you do compete with other sellers on those SKUs in the Google auction. Treat SKUs as part of your competitive exposure. ** [L1090, 2021]
- Listing a product's SKU and barcode in the same identifier fields can trigger duplicate-value errors. See the duplicate-value rule above. [L0469, 2021]
- The Shopify SKU field on the product page is an internal management field and has no effect on Google Shopping. Google uses the MPN and UPC, which can only be set through a shopping feed app or a CSV upload, not on the Shopify product page. ** [L1456, 2021-22]

### Variants

- Sync all variants in the Shopping feed when variants differ in color or similar attributes. Sync only the first variant when variants do not need separate listings. ** [L0247, 2021]
- When each variant should appear as its own product in Google, set the variant submission preference to all variants in the feed app. Choose first variants only if you want a single listing per product. [L0835, 2023]
- Set variant submission preference to all variants if each variant should be its own listing. [L0835, 2023]
- Upload every product and every variant to Google Merchant Center as its own item. Each variant can match a different specific search term, such as material or size. ** [L1092, 2022]
- Product variants set up in Shopify, such as colors, are picked up by the feed if all variants are included. Each variant can then appear for searches that include its attribute, such as a particular color. [L1170, 2021-22]
- For apparel with several sizes or colors, each variant is normally a separate row in the Google feed. Use the item group ID column to group the variants under one product, so Google can show color filters on Google Shopping. [L1328, 2015]

### Google Product Category and Shopping Attributes

#### Setting the category

- Set the Google product category for every product in the feed. A default can be set for the whole feed, but per-product assignment is better when the store carries several product types. [L0879, 2021-22]
- Google Product Category must be set manually for each product in the feed app. Choose the most specific and closest match from Google's predefined taxonomy, for example Hardware > Plumbing > Plumbing Fixtures > Shower Stalls & Kits. The category also influences US tax calculation and campaign targeting. [L1170, 2021-22]
- Default Google product category: in the feed app settings, choose a top-level category that matches the main niche (for an apparel store, a top-level clothing category). This default applies to products without a more specific category. [L1165, 2020-26]
- Product categories and other attributes can be set in bulk by category. This saves time when a catalogue has many products, instead of editing each product separately. [L1165, 2020-26]
- More product data, such as categories, age group and gender, helps Google classify products and match them to more relevant searches. Filling in every detail is not necessary; titles, descriptions and the keywords shoppers use are the priority. [L1165, 2020-26]
- The Shopping tab lets shoppers filter results by price range, category, brand, type and capacity. Which filters a product can appear in depends on the product data sent to Google, so complete and accurate attributes matter. ** [L0741, 2021-22]

#### Custom attributes

- The feed app's Custom Attributes section lets you enter Color, Size, Material, Pattern and COGS. These values are submitted to connected channels but do not write back to Shopify. They apply only when the same attribute is not already defined in Shopify. [L0879, 2021-22]
- For clothing, size and color must be entered in the feed, because ads cannot run without them. Standardized size values matter because customers compare products on size. [L0879, 2021-22]
- For non-clothing products, the Size field means a size category such as small, medium or large, not dimensions. Consistent size values help customers compare products, even though variant setups differ across stores. [L0879, 2021-22]
- Custom attributes are usually not required for high-ticket products, unlike clothing. [L0879, 2021-22]

#### Detailed product characteristics

- Set Condition to New for all high-ticket dropshipping products. Set Age Group to Adult unless the product is for children, in which case use Kids, Infant, Toddler or Newborn as appropriate. ** [L1170, 2021-22]

### Age, Gender and Adult Attributes

- For most high-ticket products, set gender to unisex, age group to adult and condition to new. ** [L0879, 2021-22]
- For unisex products, where any age is not an option, select Adults in the age group setting per product in the feed app. [L1165, 2020-26]
- Age group describes who the product is for. The Adult-oriented checkbox is only for products containing adult merchandise or sexually explicit content. Do not confuse the two. ** [L1170, 2021-22]
- Set Gender only when the product is made specifically for one gender, such as men's apparel, footwear, fashion items or gender-specific makeup. For most products, including those used mainly by one gender, choose Unisex. ** [L1170, 2021-22]
- Check the Adult-oriented box only when the product contains adult merchandise or sexually explicit content, such as nudity, sexually suggestive content, or products intended to enhance sexual activity. ** [L0879, 2021-22]

### Custom Labels, Shipping Labels and Feed Modifiers

- Ads Label and Ads Grouping have no real use in current Google Ads. Custom Labels structure campaigns, and the Shipping Label links a product to a specific shipping rate in Merchant Center. ** [L1170, 2021-22]
- Google Shopping product tags can be generated by the Google Shopping feed app. When using it, take tag problems to the app developer. [L0971, 2024]
- The Google Ads Shopping feed must include each product's price. Google Ads does not require a separate price field for shipping costs when the cost is included in the product price. [L0971, 2024]

##### Procedure: Setting product-level shipping costs in Shopping feeds [L1170, 2021-22]

**

1. Create a shipping label in Merchant Center for each rate you charge, for example a flat 20 USD rate. [L1170, 2021-22]
2. Enter that exact label in the Shipping Label field of each product that uses the rate. [L1170, 2021-22]
3. Confirm that the shipping rates charged on the site match the rates advertised in the feed. [L1170, 2021-22]

### Which Products to Include

#### Inclusion and exclusion

- The feed app's product inclusions and exclusions let you select products under $200 and remove them from campaigns, so they receive no spend. Setup takes about 10 to 15 minutes. [L0748, 2020-26]
- In Google Merchant Center, you can set the feed to sync only the products from a specific collection. [L0049, undated]
- Exclude unwanted categories, such as accessories, by manually removing them from your product feed or campaign product selection, not via negative keywords. Shopping campaigns do not respond to negative keywords the same way Search does. ** [L0268, 2020]
- Products must have a live product page and a valid URL. Remove old or broken product URLs from the feed. [L0276, 2024]

#### Products that must be in stock

- Listing products you do not have in stock can lead to a suspended Google Merchant Center account. A student reported this after selling a product that was not in stock. Keep product availability accurate before running Google Shopping. [L0502, 2020+]

#### Feed preparation before the first sync

- Optimize the product titles in your Shopify store so they contain the core keywords and the real search terms customers use and convert with. Then set up Merchant Center, install a product feed app for Google Ads, connect it to your store, and let the app keep the feed updated daily so stock, prices, images and titles stay current. [L0762, 2020-26]
- Clicking sync pulls all products into the feed app. Products can then be edited inside the app. [L1165, 2020-26]
- Enable "Submit additional image" for products whose variants use different images, then click sync to generate the feed. [L1165, 2020-26]
- Recheck the feed when identifiers are missing or products are flagged, rather than launching new feeds. Google Shopping's standard reach is only as good as the feed. [L0855, 2023]
- A product feed is the list of product data Google reads. It contains the price, photo, product link, description and title for each product. [L0762, 2020-26]
- Fill in custom attributes or detailed product characteristics only where needed. [L1168, 2026+]
- Most fields filled in when creating a product in Shopify, including product type and brand, are passed to the feed. For most stores the feed needs checking rather than rebuilding. [L1170, 2021-22]
- A Google Shopping product feed is the structured product data you send to Google Merchant Center, usually through a connector or API. Google uses it to fill Shopping ads and to decide which search terms each product matches. [L1170, 2021-22]
- Google Shopping product approval can be affected by feed quality. Check the feed when the review drags on. [L1109, 2018]

#### Ongoing product feed changes

- Changes in product or shipping details in Merchant Center should be checked to confirm the feed is not duplicated. Deleting and re-adding a feed can create a duplicate, so confirm there is only one feed from the feed app. [L0835, 2023]
- Changing product IDs after the feed has been approved makes products count as new, requires re-approval that can take 3 to 5 days, and wipes the performance history of the feed. Do not change the product ID format after approval. [L0731, 2021-22]
- Never change product IDs once ads are running. Google treats a changed ID as a new product, and the historical data for the old product is lost. The only exception is when performance is very poor. [L0747, 2021-22]


Part 13 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/12-product-feed-setup-and-feed-apps.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/14-verification-and-approval.md
