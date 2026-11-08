<!-- part of ecom/deep/03-suppliers-and-fulfillment.md -->
Part 26 of 51 of "3. Suppliers and Fulfillment: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment.md · Previous: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/25-price-setting-without-map.md · Next: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/27-images-descriptions-and-content-rights.md

## Getting Product Data and Uploading the Catalog

### Before the Upload: Data to Expect

- Each approved supplier normally provides three kinds of data: product images, a price list (with model numbers, SKU numbers and barcode numbers), and product data (descriptions, technical specifications such as size and weight, user manuals and possibly videos). The format varies by supplier. [L1163, 2021-22]
- Product images usually arrive through a file-sharing link (Dropbox, Google Drive or WeTransfer) or are downloaded from a supplier website. Price lists come as a spreadsheet (Excel or Google Sheets) or must be copied from the supplier website. [L1163, 2021-22]
- The minimum data per product is images, descriptions, technical specifications and prices. Barcode numbers must be used if the supplier provides them. Videos and user manuals are optional. [L1163, 2021-22]
- Suppliers send price lists as PDFs, spreadsheets, emails or log-in portals and rarely share a standard format. Transfer each supplier's prices into the same pricing sheet so products can be compared consistently. [L1148, 2021-22]
- After approval, expect a package with the price list, stock descriptions with features, and product images. Suppliers often send only one photo, poor photos, or none, so plan to source missing images and rewrite weak feature text yourself. [L1130, 2020-26]
- Check that each supplier provides the details customers need: assembled product dimensions, BPA-free status and country of manufacture. If any is missing from the spreadsheet or member area, ask before listing the product. *Older advice (2019).* [L1069, 2019]

Template for that request (*older, 2019*):

```
Hi [Supplier name],

We have just received your spreadsheet for [product name or SKU] and are preparing the product pages. Could you please send us the product dimensions of the assembled product, whether the product is BPA free, and the country of manufacture? These details are needed for our customers.

Thank you,
[Your name]
[Company name]
```
[L1069, 2019]

- Ask suppliers for product information and images before entering them into your catalog. Some suppliers require you to rewrite descriptions, which you can do with an AI copy tool or manually. [L0468, 2020]
- Supplier descriptions are often only a few sentences. Unique descriptions can be built with AI but must be checked against the supplier information before publishing. [L0666, 2024]
- When a supplier asks what you need instead of providing an application form, request: 1) a spreadsheet with all product information, including prices, and 2) online access to download all product images. *Older advice (2024 call, stated as a step).* [L0276, 2024]
- Ask the supplier how it prefers to send product files, since most suppliers already have a standard system for this. *Older advice (2018).* [L1274, 2018]
- Dealer portal logins give access to product images, descriptions and prices. Without a portal, expect a zip file of product images and a spreadsheet with product data. *Older advice (2018).* [L1274, 2018]
- Dealer portal login, Excel product sheet, or shared Dropbox or Google Drive folder are the usual formats suppliers use for product data and photos after approval. *Older advice (2021).* [L0962, 2021]
- Product data must reach your store before anything else happens with that supplier, so ask for it as early as possible after approval. You cannot do further work with a supplier until its products are on your site. *Older advice (2021-22).* [L0929, 2021-22]
- Once you are authorized to sell a brand, its post-agreement information (descriptions, product names, SKU numbers, GTINs, prices and photos) can be uploaded to the store. [L0836, 2024]
- Ask each supplier whether it has a CSV or spreadsheet of its products that can be uploaded in bulk. Such a file saves large amounts of manual data entry. [L0808, 2026]
- When a supplier's data is in a usable format, use the supplier's own product file and modify it to Shopify's standard. Paper catalogs and PDFs must be entered manually, so the data format depends on each supplier. [L1114, 2023]
- Turning supplier data into uploadable listings involves checking prices, adding meta fields and categories, and reviewing content. Because each supplier packages data differently, there is no single standard process. [L0970, 2023]

### Supplier Data Formats and Connection Methods

- Suppliers may send product data as an Excel file or CSV. There is no EDI setup. Each supplier formats its feed differently, so expect to map each one. *Older advice (2023).* [L0855, 2023]
- Some suppliers provide FTP access: a host (usually an IP address), a username and a password to download the catalog and images from their server. *Older advice (2023).* [L0855, 2023]
- Connecting to a supplier's FTP server with FileZilla (free version):
  1. Download and install FileZilla for your operating system.
  2. Enter the host (the IP address the supplier gave you) in the Host field.
  3. Enter the username and password exactly as the supplier provided them.
  4. Click Quick Connect.
  5. Open the supplier's folders and download the catalog and product images to your computer.

  *Older advice (2023).* [L0855, 2023]
- Prefer suppliers that provide product CSV files. Other formats, such as dealer portals, print catalogs or copy-paste, are slower and work as fallbacks. [L0856, 2024]
- Supplier data is easiest to work with as a spreadsheet, which can be reformatted into the Shopify CSV format. If the data exists only on a supplier website, a freelance data scraper (for example on Upwork) can extract it into a CSV. *Older advice (2023).* [L0835, 2023]
- Bulk CSV uploads are the best starting method for loading products. [L0941, 2022]
- Uploading supplier products is the most manual part of the business. A supplier CSV is usually the fastest route, while manual copy-and-paste or one-by-one uploads take the most time. Hire help and double-check its work. *Older advice (2023).* [L0970, 2023]
- Product uploads take about 10 minutes when a supplier sends a well-packaged spreadsheet and hours when it sends PDFs, because suppliers have no standard data format. Plan time or budget for this work. *Older advice (2024).* [L0806, 2024]

#### Standard CSV procedures

- Bulk CSV upload, *older advice (2019)*:
  1. Prepare a CSV file with product data from the supplier (3,000+ products are feasible).
  2. If the supplier data format is compatible, use Shopify's native CSV upload tool.
  3. If the supplier format is incompatible or the upload is complex, use the freelancer option instead of manual entry.

  [L0243, 2019]
- If a supplier does not provide a CSV product feed, *older advice (2020)*:
  1. Manually scrape the supplier's website data, or hire a VA to do so.
  2. Find a competitor publicly selling the same supplier's products and extract their feed.
  3. Hire a VA to compile the product information into a CSV file.

  [L0245, 2020]
- Product upload procedure, *older advice (2021)*:
  1. Build the supplier product list in Excel or Google Sheets.
  2. Save or export it as CSV, not XLS.
  3. Upload the CSV to Shopify.
  4. Repeat the same steps for each supplier file.

  Manual entry of products is avoided this way. [L0962, 2021]
- Use no more than one supplier per CSV file, so each supplier's products stay separate and easier to manage. You can upload as many CSV files as you need. *Older advice (2021).* [L0962, 2021]
- For large catalogs, split the product list into several smaller CSV files, for example a 1,000-product catalog into 100-product files, and upload each file separately. *Older advice (2021).* [L0962, 2021]
- Sources differ on file size. The 2019 advice says a CSV of 3,000+ products is feasible in one import ([L0243, 2019]). The 2021 advice says to split large catalogs into smaller files ([L0962, 2021]). Both can apply: use one file if it imports cleanly, and split it if the file is hard to manage.

#### Testing a CSV import

- Procedure for a first test import, *older advice (2019)*:
  1. Obtain the supplier's product CSV file, which is the preferred upload method when the supplier provides one.
  2. Make a copy of the file.
  3. Upload only five products first.
  4. Check that the imported products match what you expect.
  5. If anything does not match, delete the five products, correct the file and try again.
  6. Upload the full CSV once the test import works.

  [L0663, 2019]

#### Bulk updates in Shopify

- Process for a bulk product update in Shopify via CSV:
  1. Export all products from Shopify as CSV.
  2. Open the CSV in Google Sheets or Excel and make the edits.
  3. Save the CSV to the computer.
  4. Import it into Shopify. Existing products are updated instead of new products being added.

  *Older advice (2024).* [L0856, 2024]

### Upload Methods and When to Use Each (Manual, Outsourced, CSV; Outsourcing 500 Products Costs About $40 to $50)

- Choose the upload method by supplier data format and product count, not by a single fixed method:
  - Manual method for small counts (20 products) when the supplier data must be scraped from its website.
  - Fiverr outsourcing for large catalogs (500+ products), to avoid spending days on manual uploads. Example from the lesson: a brand with 500 products says "get the information from my website". Instead of spending a weekend on it, pay someone about $40 to $50 to upload them (Added 2026-11-07 from the lesson transcript, 07:09).
  - CSV bulk import when the supplier provides a ready-made spreadsheet.

  Mix methods across suppliers as needed. [L0106, 2020-26]
- Costs and time per method (older 2019 pricing model) are set out under "Costs of Manual and Outsourced Upload" on https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/28-shopify-setup.md . For the price of a typical outsourced upload, use the newer figure above: about $40 to $50 for 500 products. [L1275, 2019; L0106, 2020-26]

### Choosing Which Products to List

#### Approval does not mean listing everything

- Approval to sell does not oblige you to list all of a supplier's products. Select only the items that fit your niche to keep topical focus and conversion rates. *Older advice (2022).* [L0272, 2022]
- After approval, you choose which of a supplier's products to list. You do not have to list the full catalog. *Older advice (2020).* [L1088, 2020]
- You may choose which products from an approved supplier you sell. You do not need to carry its whole range. *Older advice (2022).* [L0854, 2022]
- Approved accounts usually get access to the full catalog, so you select what you want to sell from it. Listing all niche products is still worth it even when the supplier has only two matching products. *Older advice (2018).* [L1274, 2018]
- Supplier approval gives access to the full catalog, but a store needs only the products that match its niche. Uploads are done supplier by supplier because each sends product data in its own format. *Older advice (2024).* [L0805, 2024]
- Being approved does not require listing all of a supplier's products. Pick the products worth selling and skip those whose price spread is too small to justify listing. *Older advice (2024).* [L0666, 2024]
- Only the products a store wants to sell need to be listed from an approved supplier. The full catalog is not required, and variants that fall below the target price point can be left off the store entirely. *Older advice (2023).* [L1114, 2023]

#### Niche filter

- Upload only the products from each supplier that fit your niche criteria. For example, if a supplier makes pool tables and ping pong tables and you only sell pool tables, upload only the pool tables. *Older advice (2023).* [L0470, 2023]
- Upload only products that belong to your niche, even when an approved supplier also makes unrelated items. Leave out the unrelated catalog, such as dining tables for a kitchen island store. *Older advice (2021).* [L0801, 2021]
- After approval, upload only the supplier's products that belong to the niche into that niche store. Other products from the same supplier can be used in a future store. *Older advice (2021).* [L0853, 2021]
- Do not upload all products from a supplier's list. Upload only the products that fit your niche, and do not upload products that are unprofitable. *Older advice (2021).* [L0671, 2021]
- Do not upload all SKUs from a supplier's price list. Select only products that:
  1. Fit your niche criteria.
  2. Have healthy margins (MAP at least 2X wholesale).
  3. Are priced above your niche's average.
  4. Match customer expectations for your store.

  Upload a subset and add more over time based on performance. *Older advice (2023).* [L0251, 2023]
- Products that are too technical to use without support should be avoided, as should items where customers ask post-purchase setup questions. Pre-sale questions are acceptable: take the customer's name, email and phone number, research the answer, reply, and add it to the FAQ. *Older advice (2025).* [L0472, 2025]
- Remove unwanted items from a supplier catalog, *older advice (no year given)*:
  1. When the supplier sends its price list or CSV, mark only the products that match your niche and criteria.
  2. Remove the rest from your upload, including cheap replacement parts and products outside your niche.
  3. Suppliers expect this, so it is normal and does not need explanation.

  [L0941, 2022]
- Filter a supplier's product list in Google Sheets, *older advice (2024)*:
  1. Import the supplier product list into Google Sheets.
  2. Turn on the filter for the product type column.
  3. Filter by keywords for product types that do not belong to your niche.
  4. Select all visible rows and delete them at once.
  5. Continue working only with the remaining products.

  [L0965, 2024]
- Only upload real products from approved suppliers in the niche and remove demo products before turning on ads. *(See "Demo Products and Upload Sequencing".)* [L1094, 2023]

#### Catalog breadth: the sources disagree

- Recent advice (2021-2025) says to filter for the niche and skip unprofitable or off-topic items ([L0251, 2023; L0470, 2023; L0671, 2021; L0801, 2021; L0853, 2021; L1114, 2023]).
- Older advice (2020) and undated advice say to upload all quality products from every quality supplier, and to omit a product only if its quality is poor, such as many negative reviews, or if the supplier charges an access fee, which marks a bronze supplier ([L0358, 2020]). Undated advice says to upload as many products as you can find from every approved supplier ([L0582, 2020-26]).
- For non-MAP suppliers, the advice is to upload immediately while waiting for approval from preferred suppliers, because store credibility rises with the number of brands and products on the site ([L0294, 2025+]).
- Use the niche filter for a focused store. Use the broader approach when you are building early store credibility or when a supplier's products all fit your niche. [L0358, 2020; L0582, 2020-26; L0294, 2025+; L0251, 2023]

#### Starting small

- Ten test products are enough to start contacting suppliers. Begin with a small set of products to test before building a large catalog. *Older advice (2020).* [L0551, 2020]
- Before contacting more suppliers, upload the products of your first three approved suppliers and remove the demo products. This increases store credibility when you approach the rest. *Older advice (2025).* [L0966, 2025]

#### Products to avoid or to keep for later

- Only products sold from approved suppliers should be listed. Products you are not authorized to sell must be removed when the store is posted to suppliers for approval. *Older advice (2023).* [L0855, 2023]
- Confirm that the brand authorizes you to resell a product, and that it comes from a verified supplier, before listing it. Demo, fake or unauthorized products can cause Google Merchant Center and Google Ads account problems. [L0167, undated]
- Upload only products from suppliers who approved you as an authorized reseller. These are live, sellable items, not demo products. [L0128, undated]
- After approval, upload all products from the approved supplier that meet your pricing criteria into the initial alpha beta campaigns. Let Google data show which products get clicks, impressions and sales, then optimize from there instead of guessing winners. *Older advice (2022).* [L0854, 2022]
- Silver suppliers often send a generic product CSV that cannot simply be uploaded and left running on one generic Shopping campaign. These products need an optimized feed and campaign structure to be profitable. *Older advice (2018).* [L1085, 2018]
- Suppliers often have the strongest sellers in their range and can name them when asked. This helps set a bestseller list before any sales data exists. Asking which products sell best is a quick way to decide which products get the larger ad budget. *Older advice (2024).* [L0360, 2024]

### Price and Margin Filters

- When a supplier provides both MSRP and MAP, check that MAP is profitable. Show MSRP as the strike-through compare-at price and sell at MAP, which is only a minimum, so a higher price is also allowed. *Older advice (2020).* [L1088, 2020]
- Set the niche's price filter in the product selection. Sources give different thresholds, which apply to different stores:
  - Products priced above $400 from a supplier's full catalog are acceptable to list. Suppliers do not require you to list everything they offer. *Older advice (2025 call).* [L0278, 2025]
  - On a 2024 call, the example was to list only the 10 products over $200, or only the 50 massage chairs from a 1,000-product catalog. [L0805, 2024]
  - The 2023 rule is to upload products priced above the niche average and with a MAP at least 2X wholesale. [L0251, 2023]
- Before listing a supplier's product, check whether other sellers mark it up at all. If other sellers mark it up only slightly, for example around 10 percent, drop that supplier. If margins are strong, go ahead. *Older advice (2021).* [L0801, 2021]

### Bundles, Add-ons and Pairs

- Source physical product bonuses from the same supplier as the main product whenever possible. Both items then ship together in one order, which removes extra fulfillment work and reduces coordination. *Older advice (no year given).* [L0314, 2020-26]
- Add-on products should come from the same brand as the main product where possible. This simplifies shipping and keeps margins higher. Look in the same supplier's catalog first, and search other suppliers only when no related product exists. *Older advice (2023).* [L0964, 2023]
- If suppliers and products are sold as a pair or set, upload them as sold, with photos showing the pair or set. *Older advice (2021).* [L0671, 2021]
- Procedure for a bundle offer, *one source*:
  1. Agree with the supplier on a dedicated SKU for the bundle offer.
  2. Make sure the supplier ships all items of that bundle in one package.
  3. Add that specific SKU to the store so every bundle order triggers the single-package shipment.
  4. Check the bundle's cost of goods and shipping cost before running ads.

  [L0502, 2020+]
- Market labels in bundle rows: do not use a cost or price row labelled for another market, such as UK, for USA pricing. Change the market label to US before entering any values in a bundle row. [L1182, 2026]

### Product Identifiers: GTIN, UPC, MPN and SKU

#### Which identifier to use

- Use the supplier's UPC as the product identifier when it exists, since it lets Shopify and Google Merchant Center match your listing against identical products. Use the MPN when there is no UPC. *Older advice (2023).* [L0934, 2023]
- Use the supplier's SKU only when the supplier has no GTIN (a product identifier that competitors and Google use to index products). If the supplier has a GTIN, use the GTIN. *Older advice (2023).* [L0835, 2023]
- Do not create a made-up SKU to fill in the product identifier field. SKUs are retailer-specific and not universal, so use the supplier's UPC or MPN instead. *Older advice (2023).* [L0934, 2023]
- Use the identifier the supplier actually has, and do not invent codes. A supplier without GTIN codes can be used with its MPN or SKU as the identifier. *Older advice (2023).* [L0855, 2023]
- Google Merchant Center requires a GTIN for listings. If a supplier provides none, use the manufacturer part number (MPN) in that field and generate your own internal identifier for these products. *Older advice (2021).* [L1279, 2021]
- If a product has no GTIN and Google Merchant Center reports an error for it, use the MPN, as Google's own guidance describes. An MPN does not hurt Google Shopping when no GTIN exists. *Older advice (2023).* [L0835, 2023]
- Enter the supplier's model or part number as the SKU, and never invent your own. The SKU appears on the internal order sheet, and the supplier needs that exact number to fulfil the order. *Older advice (2021-22).* [L1166, 2021-22]
- Only ask suppliers for barcode numbers (UPC, GTIN or EAN) when Merchant Center product diagnostics show a barcode problem, not for every product upfront. Products with no barcode from the manufacturer do not need one and should not be suspended for that. *Older advice (2021-22).* [L0727, 2021-22]

#### Sources disagree on the supplier SKU

- Older advice (2020) says to use the supplier's SKU number as the MPN, and to create an internal identifier for products with no SKU, GTIN or UPC ([L0664, 2020]).
- Older advice (2020) says that when a SKU is missing, you create an internal identifier from the MPN and record it consistently ([L1111, 2020]).
- The 2023 advice orders the identifiers: UPC first, then MPN when no UPC exists, and the supplier SKU only when no GTIN exists ([L0934, 2023; L0835, 2023]).
- The 2021 advice says to use the MPN in the GTIN field when no GTIN exists, and to generate an internal identifier for these products ([L1279, 2021]).
- The newest advice (2023) is the most specific. Use it first, and use the older rules only for stores set up under them. [L0664, 2020; L1111, 2020; L0934, 2023; L0835, 2023; L1279, 2021]

#### Finding a missing GTIN or UPC

- Procedure to find a GTIN or UPC that the supplier does not provide, *older advice (2024)*:
  1. Search the supplier's product name or brand name plus product name on Google Shopping.
  2. Open the product pages of the stores that appear and look for a UPC, part number or SKU in the description.
  3. Search that code on Google and check whether other stores list the same product under it.
  4. If other stores confirm the code, use it.
  5. If no code can be found at all, use the MPN instead, following Google's documentation on MPN.

  [L0965, 2024]
- Procedure to identify a product by the supplier's SAKU-style SKU, *older advice (2023)*:
  1. Take the SKU the supplier gives you, which may be its GTIN, and search for it on Google.
  2. Check the results to see which competitors sell from the same supplier.
  3. If competitors use that number as the product identifier, use it too.
  4. If there is no GTIN, use the SKU as the product identifier. It will not affect Google Ads.

  [L0835, 2023]


Part 26 of 51 of "3. Suppliers and Fulfillment: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment.md · Previous: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/25-price-setting-without-map.md · Next: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/27-images-descriptions-and-content-rights.md
