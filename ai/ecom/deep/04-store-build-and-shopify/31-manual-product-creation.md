<!-- part of ecom/deep/04-store-build-and-shopify.md -->
Part 31 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/30-product-media.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/32-product-page-design-and-templates.md

### Manual product creation

- *Older (2021-22).* Manual method, one product at a time, in this order: [L1166, 2021-22]
  1. Products > Add product.
  2. Title: take the supplier's product title and add the product type and a differentiator such as colour.
  3. Description: paste the supplier's description, then clear the formatting (or set it to paragraph) so no bold styling carries over.
  4. Optional video: in the description editor click Insert video and paste the embed snippet, which starts with `<iframe`.
  5. Product type: use one consistent name per product category.
  6. Vendor: enter the brand or supplier name.
  7. Tags: optional, used to group products with shared traits.
  8. Sales channels: include Online Store.
  9. Product status: set to Active (Draft keeps the product hidden).
  10. Media: resize the supplier images in bulk beforehand, click Add file, upload them and drag them into order; the first image is the main one shown.
  11. Alt text: click each image, enter a short descriptive text and click out.
  12. Pricing: enter the selling price and keep Charge tax on this product ticked; enter Cost per item only if you want margin tracking.
  13. SKU: enter the supplier's model or part number exactly.
  14. Track quantity: enter the stock figure, or 10 as a placeholder when no stock figure is given.
  15. Shipping: tick This is a physical product.
  16. Variants: if the product has options, add the option name (for example range, colour or size) and its values, then set price, stock and SKU per variant.
  17. Search engine listing: check that the title matches, then shorten the description and end it with a call to action.
  18. Save, then open the product page and check that switching options changes the price, the tabs show, and any embedded video plays.

- one source 2026 upload sequence: [L1167, 2026]
  1. Open the Products section in the Shopify admin and click Add product.
  2. Drop the product images into the Media area. Prepare them beforehand (the example used Canva) and check that the logo and branding are correct.
  3. Enter the selling price in the Pricing section.
  4. Set Quantity to 1 for the first stage to keep stock simple. If your supplier manages stock and fulfillment, leave the remaining supplier-side fields empty.
  5. Click Save and confirm the 'Product saved' message.

- one source 2025-26 creation sequence: [L1331, 2025-26]
  1. Go to Products > Add product.
  2. Enter the product title, paste the product copy into the description, and upload the product images.
  3. Set Theme template to Default product.
  4. Set Category, for example Slippers in Shoes, and add Type, Vendor and Tags.
  5. Enter the price, set Charge tax to Yes, and confirm Inventory tracked is on.
  6. Click Save before opening the theme editor.

- one source 2026 adding-a-product order: Products > Add product, then fill Title, Description, Media, Pricing, Inventory, Shipping, Variants, Product organization (Type, Vendor, Tags), Category and product metafields, and Status. Set Status to Active last so the product goes live. [L1188, 2026]
- one source 2026 product page sections: Pricing (Price, Compare-at price, Charge tax on this product, Cost per item, Profit, Margin, Adjustment history); Inventory (SKU, Barcode (ISBN, UPC, GTIN, etc.), Track quantity, Continue selling when out of stock, Quantity by Location); Shipping (This is a physical product, Weight, Add customs information); Variants; Product organization (Product type, Tags, Theme template set to Default product); Category metafields; Search engine listing; and Archive product / Delete product at the bottom. [L1167, 2026]

### Product status and storefront visibility

- *Older (2021-22).* New products in Shopify are created with the status Draft by default. A Draft product stays hidden from the storefront and homepage until its status is changed to Active. [L1166, 2021-22]
- *Older (2021-22).* A product saved as Draft stays in the back end and does not appear on the storefront or homepage. Set the status to Active and assign the Online Store sales channel for the product to go live. [L1166, 2021-22]
- A product only shows on the storefront when it is checked for the Online Store sales channel and its Status is Active. Check both before sending traffic to a new product page. [L1188, 2026]
- *Older (2021-22).* The Products list has filters for All, Active, Draft and Archived, which show the status of each product. Use them to confirm which products are live and which are still hidden. [L1166, 2021-22]
- Status timing differs between sources. one source's manual method sets Active at step 9 of the entry sequence, before media and pricing [L1166, 2021-22]. one source 2026 says to set Status to Active last so the product goes live [L1188, 2026]. Both agree that the product must be Active and on the Online Store channel to appear on the storefront [L1166, 2021-22; L1188, 2026].
- Do not publish a placeholder product just to make a header menu link work. The header link points to the real product page, so create the product with its full details, images, and description from the start. [L1326, undated]

### Title, vendor, type and tags

- *Older (2021-22).* A supplier title usually lacks the product type and any descriptor, so add both to the store title, for example a colour or size. Keep the supplier's model name in the title so the product stays recognisable. [L1166, 2021-22]
- Products with dimensions in titles should use a spaced x format, such as 8 space x space 10 instead of 8x10, if the store is not finding searches for that format. Search results depend on the content of the product page. [L1283, 2023]
- *Older (2021-22).* Vendor is the brand or supplier name. Tags are optional and help group products that share characteristics, so collections can be built from them later. [L1166, 2021-22]
- Product tags are not needed in large quantities. Shopify search uses the product name and description, so keep those accurate and descriptive instead of adding 15 to 20 tags per product. [L1283, 2023]
- *Older (2021-22).* Choose one product type name per product category and reuse it exactly for every product in that category. Consistent names make it much easier to sort products into collections later. [L1166, 2021-22]
- *Older (2021-22).* Inconsistent product type names, such as singular and plural versions of the same category, split products across collections and make filtering harder. [L1166, 2021-22]
- *Older (2021-22).* Keep a simple written list of the product types you create. Check it before adding each new product so that items in the same category get the exact same product type name. [L1166, 2021-22]
- Product type determines tax rates and adds metafields that improve search, filters and cross-channel sales. Set it on every product so the product is categorized correctly. [L1167, 2026]
- The Category field on a Shopify product sets tax rates and adds metafields that improve search, filters and cross-channel sales. Choose the category, for example Slippers in Shoes, before saving the product. [L1331, 2025-26]
- Sources name the same job differently. one source 2026 and one source call it Product type [L1167, 2026; L1166, 2021-22]. one source 2025-26 calls it Category, which sets tax rates [L1331, 2025-26]. Set whichever field your admin shows on every product.

### Descriptions and embedded video

- *Older (2021-22).* Pasting text from a supplier website brings its bold and other formatting into the Shopify editor. Clear the formatting or set the text to paragraph before saving, or the description will look wrong. [L1166, 2021-22]
- *Older (2021-22).* To embed a video in a product description, click Insert video in the description editor, paste the embed snippet into the box and confirm. Supplier videos can be used as well as your own. [L1166, 2021-22]
- *Older (2021-22).* Typical embed snippet for a YouTube video, copied from Share > Embed on YouTube and pasted into Insert video. Replace VIDEO_ID with the video's ID: [L1166, 2021-22]

```html
<iframe width='560' height='315' src='https://www.youtube.com/embed/VIDEO_ID' frameborder='0' allowfullscreen></iframe>
```

### SKU, barcode and stock

- *Older (2021-22).* Inventing your own SKU numbers breaks reordering, because the supplier cannot find the product from the order sheet. Always copy the supplier's model or part number. [L1166, 2021-22]
- *Older (2021-22).* The Shopify SKU field is only for internal tracking. Use the manufacturer SKU as the Shopify SKU so orders, supplier products and price lists are easy to match. Made-up products can use any value there, because it does not affect Google Shopping. [L1456, 2021-22]
- *Older (2021-22).* The Barcode field (ISBN, UPC, GTIN) under Pricing is optional. Leave it empty when the supplier provides no barcode, as with many dropshipped products. [L1166, 2021-22]
- one source 2026 defines Barcode as ISBN, UPC, GTIN, etc. within the Inventory section [L1167, 2026].
- Continue selling when out of stock lets orders go through when inventory is at zero or below. It does not affect Shopify POS, where staff see a warning but can still complete sales once available inventory reaches zero and below. [L1167, 2026]
- Track quantity and Sell when out of stock should be set deliberately. The default is off for selling out-of-stock items. [L1188, 2026]

Starting quantity. The sources give different values:

| Value | When it applies | Source |
|---|---|---|
| 1 | First stage of a new product, to keep stock simple; leave supplier-side fields empty if the supplier manages stock and fulfillment | [L1167, 2026] |
| 10 | Placeholder when the supplier gives no stock figure | [L1166, 2021-22] |
| Stock figure from supplier | When the supplier provides one; enter it as stock | [L1166, 2021-22] |

- *Older (2021-22).* Use 10 as a placeholder only when no stock figure is given. [L1166, 2021-22]
- Start with one unit of quantity for a new product to reduce complexity in the first stage. Increase stock only after the product, pricing and checkout are working. [L1167, 2026]
- Set the stock count for every product before publishing it, because the checklist makes stock levels a precondition for adding products. Markets for the store are set for UK, Australia and US. [L1288, undated]

### Pricing fields

- Price fields in Shopify: Price (the selling price), Compare-at price (the higher reference price shown as a strikethrough and used for the savings label), and Cost per item (used for margin reporting). The Compare-at price should be the real price the item was offered at, otherwise the discount is misleading. [L1188, 2026]
- *Older (2021-22).* Keep Charge tax on this product ticked, and enter Cost per item only if you want margin tracking. [L1166, 2021-22]
- Compare-at for MAP-restricted products: see the MAP section below. [L1285, 2024]

### Shipping and product data

- *Older (2021-22).* Tick This is a physical product for physical items. [L1166, 2021-22]
- Shipping section: set Product weight, package dimensions and country of origin, and fill the HS code field for international orders. [L1188, 2026]
- Google metafields such as Age Group, Condition, Gender and MPN can be left empty unless the product needs them for Google Shopping. [L1188, 2026]
- Shopify product metafields can carry custom data such as Custom rating, book cover type, genre, language version and target audience. [L1188, 2026]

### Product media

- *Older (2021-22).* Resize all product images in bulk before uploading them to Shopify. The first image in the media section is the main image, and other images appear as thumbnails; drag images to change the order. [L1166, 2021-22]
- *Older (2021-22).* Besides Add file, which uploads images from your computer, the Media section of a product offers Add media from URL. Use it when the image is already hosted online. [L1166, 2021-22]
- *Older (2021-22).* Click each image, enter a short descriptive alt text and click out. [L1166, 2021-22]
- *Older (2020).* Use the best main image in Shopify for each product, because the same image is sent to Google Merchant Center. Don't set a different image just to differ from competitors. [L1277, 2020]
- The default featured image on a Shopify product page often shows nothing useful about the product. Replace it with an image that explains what the product is at a glance. [L1346, 2020-26]

### Search engine listing

- *Older (2021-22).* In the search engine listing preview of a product, click the Edit SEO link to change the URL and the page title and description by hand. If you leave them alone, Shopify fills the title and URL from the product and copies the main description. [L1166, 2021-22]
- *Older (2021-22).* Leaving the search description on its automatic setting copies the main description, which gets cut off in search results. Replace it with a short text ending in a call to action. [L1166, 2021-22]
- *Older (2021-22).* Check that the search engine listing title matches the product, then shorten the description and end it with a call to action. [L1166, 2021-22]

### Variants and options

- *Older (2021-22).* Close variants of the same product, such as different colours, sizes or materials, should be set up as variants with a selector on one product page, not as separate product pages. Using your own judgement to decide what counts as a close variant is required, and the question can be asked when unsure. [L1163, 2021-22]
- *Older (2021-22).* Creating a separate product page for each range, colour or size with identical images creates duplicate pages that complicate marketing later. Use variants on a single product page instead. [L1166, 2021-22]
- *Older (2021-22).* Use variants on one product page when a product comes in different ranges, colours or sizes with the same images. Shopify allows up to three options per product, and more options need a separate app in some markets. [L1166, 2021-22]
- Shopify limits a product to 100 variants. For products with more variants, use an app like Infinite Options or list only the 100 most popular variations. [L1279, 2021]
- *Older (2021-22).* Each variant can have its own price, stock quantity and SKU, and different variants often have different supplier model numbers. Enter them in the variant table that appears after the options are set. [L1166, 2021-22]
- Variant procedure, one source 2025: [L1287, 2025]
  1. Open the product and go to the Variants section.
  2. Click the option to add options, such as Color or Size.
  3. Enter the values, for example blue and green, and click Done.
  4. Set the price for each variant.
  5. Set the quantity for each variant, which requires inventory tracking.
  6. Upload a separate image for each variant.
  7. Click Save and then Preview, and swipe through the variants to check the price, image and stock.
- *Older (2021-22).* Use a variant app for products with more options than Shopify's native variant system can handle, and set the app up separately from the standard product variants. Do not mix the app's variants with the native variants on the same product. Test one product before uploading a whole group. [L1396, 2021-22]

### CSV import and export

- *Older (2021-22).* CSV bulk method, in this order: [L1166, 2021-22]
  1. Discard the unsaved product form, then go to Products > Export > All products > Export products. Shopify emails a CSV of existing products, which serves as your template; the template file from Shopify's help pages also works.
  2. Open the file in a spreadsheet. Each line is one product.
  3. Fill the columns from Title through the column before SEO Description. Leave Handle blank.
  4. Paste titles, descriptions, prices and SKUs from supplier spreadsheets into the matching columns.
  5. Enter option names and their values; list option values on the lines below the product in the layout of the template.
  6. Set the taxable and requires-shipping columns to TRUE for taxable physical products.
  7. Upload each image in Settings > Files, copy its URL and paste it into the Image Src column.
  8. Save the file as a CSV file; the exact menu depends on Mac or Windows, and the file must be a CSV.
  9. Go to Products > Import, choose the file, tick the option to overwrite products with the same handle, then click Upload.
  10. Check that the products appear with their data.

- *Older (2021-22).* Columns to fill in the Shopify CSV, one product per line: [L1166, 2021-22]

| Column | What to enter |
|---|---|
| Handle | leave blank; Shopify builds the URL handle from the title |
| Title | product title |
| Body (HTML) | product description |
| Vendor | brand or supplier name |
| Type | product type, named consistently |
| Tags | tags for grouping products |
| Option1 Name / Option1 Value, up to Option3 | option name and values; maximum three options |
| Variant SKU | supplier model or part number |
| Variant Inventory Tracker | shopify |
| Variant Inventory Qty | stock quantity; 10 as placeholder |
| Variant Price | selling price per variant |
| Image Src | hosted file URL from Settings > Files |
| Variant Taxable | TRUE for taxable products |
| Variant Requires Shipping | TRUE for physical products |
| SEO Description and columns to the right | fill up to SEO Description; ignore the columns to the right |

- *Older (2021-22).* Leave the Handle column blank in the CSV, because Shopify creates the handle automatically from the product title. The handle becomes the product URL. [L1166, 2021-22]
- *Older (2021-22).* When importing with the overwrite option ticked, products with the same handle are updated instead of duplicated. Use this when re-importing products that already exist in the store. [L1166, 2021-22]
- *Older (2021-22).* Settings > Files stores images uploaded to the store and gives each file a URL. Paste that URL into the Image Src column of the CSV; a local file path will not import the image. [L1166, 2021-22]
- *Older (2021-22).* A CSV image link must be a hosted URL from Settings > Files; putting a local file name in the Image Src column will leave the product without an image. [L1166, 2021-22]
- *Older (2021-22).* Shopify's help pages include a CSV template file with a description of each column and what it must contain. Use it when a column is unclear before importing. [L1166, 2021-22]
- *Older (2019).* Shopify publishes the required column format for product CSV imports. Search for the Shopify CSV format, then reformat the supplier's file to match it. [L1275, 2019]
- *Older (2021-22).* Manual entry suits a small number of products or a team that finds spreadsheets daunting. CSV import suits hundreds of products at once, and supplier spreadsheets can be pasted straight into it. [L1166, 2021-22]

### Supplier file cleaning

- *Older (2021).* Supplier file cleaning, in this order: [L1279, 2021]
  1. Open the supplier CSV and the Shopify product CSV template side by side.
  2. Reorder and rename the supplier columns to match the Shopify columns; copying and pasting covers most of the work.
  3. Fill in any remaining fields and upload the file.
  4. If manual entry is needed, first list the competitors' best-selling products that come from your approved supplier, then upload everything else in the background.

### Bulk edits

- *Older (2022).* Bulk updating product fields via Shopify CSV import: [L1281, 2022]
  1. Add a column for the product guarantee or description to a product CSV.
  2. Fill it in for every product from the same supplier.
  3. Import the file to update existing products in one step. The same import can create new products.
- *Older (2021-22).* Keep all catalog changes organized in a single supplier list, and note whenever a manufacturer updates its price list so the uploads and quotes stay current. Update the price list in every place where it is stored. Assign this update to a staff member as part of their regular tasks. [L1396, 2021-22]

### Outsourcing uploads

- *Older (2021-22).* Set up each new product using the product upload board in this order: [L1396, 2021-22]
  1. Enter the supplier name.
  2. Enter the product description or a link where the description can be found.
  3. Enter the source for product images, such as a shared Dropbox link.
  4. Enter the pricing rule: use the MAP price list if one exists, or otherwise add a fixed markup, such as 20%, and match prices from named competitor sites.
  5. Move the supplier card to the next stage once the upload is finished.
- *Older (2021-22).* Split large catalog imports into two roles: one staff member assembles the CSV for simple products, and a second person checks product features before the import. CSV errors are hard to trace after import, so products with many options should be uploaded manually or through a variant app instead. [L1396, 2021-22]
- *Older (2021-22).* For bulk catalog uploads of thousands of SKUs with many options, use CSV imports for simple products and manual uploads or a variant app for products that exceed Shopify's native options. A store with about 3,000 SKUs and products with up to 18 options needed this split. Put only the simpler products into a CSV, since errors in CSV files are hard to find. [L1396, 2021-22]

### Which products to upload first

- *Older (2021).* If manual entry is needed, first list the competitors' best-selling products that come from your approved supplier, then upload everything else in the background. [L1279, 2021]
- Products that are not in the first batch can be uploaded afterwards, in the background, once the first batch is live. [L1279, 2021]

### MAP and compare-at pricing

- Products should be listed at MAP as the selling price. Enter the MSRP in the compare-at price field so customers see MSRP struck through and pay the MAP. [L1285, 2024]
- The compare-at price should be the real price the item was offered at, otherwise the discount is misleading. For MAP-listed products, the compare-at price is the MSRP. [L1188, 2026; L1285, 2024]
- *Older (2021-22).* Pricing rule for uploads: use the MAP price list if one exists, or otherwise add a fixed markup, such as 20%, and match prices from named competitor sites. [L1396, 2021-22]

### Store-level rules

- *Older (2020).* There is no fixed maximum for products in a store. Stores with about 100 products and stores with 3,000 products both work, as long as the products are quality items from good brands in the niche. [L1277, 2020]
- one source: markets for the store are set for UK, Australia and US. [L1288, undated]


Part 31 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/30-product-media.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/32-product-page-design-and-templates.md
