<!-- part of ecom/deep/04-store-build-and-shopify.md -->
Part 30 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/29-product-creation-and-catalog-data.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/31-manual-product-creation.md

### Product media

**Source and rights**
- Downloading product images directly from an authorised supplier's website is acceptable for use on the store, provided the supplier has authorised the reseller to sell their products. [L0278, 2025]
- Use product photos from the supplier, not from a Google image search, because the store needs authorisation to use them. [L0360, 2024]
- Ask suppliers for lifestyle photos with natural backgrounds, or for photos from trade shows and their office. Do not copy images from other websites, because this can lead to copyright complaints. [L1109, 2018]

**Image standards**
- Product pages should use the supplier's images and product names. Main images should be standard product photos on a white background. Add lifestyle images as extra photos. [L0965, 2024]
- Use extra close-up or detail images from high-resolution supplier photos, for example a crop of hardware or finish detail, to help customers judge the product. Add these only when they are high quality and aid the purchase decision. [L0970, 2023]
- Compress oversized product images before you upload them. [L1002, 2019]
- Check that every product image matches its product page, because images are easily swapped during bulk uploads. Compare each image against the supplier's listing or brochure. [L1145, 2021-22]
- Supplier images stored in Dropbox share links that do not give a direct image URL: download the files, upload them to Shopify Files, then put the resulting Shopify file links into the product CSV. This is easier than uploading each image manually. [L1115, 2024]

**Video**
- Product videos can be filmed by a person demonstrating the product, explaining how it feels, who it suits, and the height or weight it is good for. Post the videos to YouTube and embed them on the product pages. [L0801, 2021]
- Short product clips of about 3 to 10 seconds can be uploaded straight to Shopify. Longer product walkthroughs should be embedded from YouTube. [L0857, 2025]
- Supplier product videos belong in the product description, not in the image carousel with the product photos. [L0835, 2023]
- To use supplier videos hosted on YouTube: [L0857, 2025]
  1. Ask the supplier for permission to upload the videos to your own YouTube channel.
  2. Create a YouTube channel under the store name if you do not have one.
  3. Upload the videos to that channel.
  4. Embed them on the product pages from your channel, and add a link to the product page in the video description.

**3D models and upcoming media features**
- Shopify reports that customers who interact with a 3D product model are more than twice as likely to complete a purchase as customers who do not. The product media feature cited for this is planned to support images, videos, 3D models and augmented reality on product pages. [L0390, 2019; L0423, 2019]
- Prepare videos and 3D models for your top 20 best sellers first, since the media features that support them are expected to deliver the biggest conversion gains on your best products. [L0390, 2019]

### Supplier file cleaning and CSV preparation

**Clean up a supplier CSV** *(2023)* [L0470, 2023]
1. Make a duplicate of the supplier's CSV file on your computer.
2. Open the duplicate and delete all rows for products you do not want, including used items, trade-ins, discontinued and special-order items.
3. Save the file as a CSV.
4. Upload the cleaned file to Shopify.

**Ask the supplier for the right format** [L0470, 2023]
- If a supplier is not technical, request the Shopify CSV product upload format, which the supplier can fill out to save you time. Share the Shopify template with them for this.

**Convert a supplier product feed** [L0274, 2023]
1. Get the supplier product feed (typically a spreadsheet).
2. Download the Shopify CSV template from the Shopify CSV page.
3. Map supplier data to Shopify columns using Google Sheets or Excel.
4. Adjust the data to match the required format.
5. Upload to Shopify.
- If it is complex, hire a CSV expert on Fiber or Upwork for a low cost. [L0274, 2023]

**Mismatched formats**
- Supplier spreadsheets rarely align with Shopify's CSV format. Required columns are often missing, misnamed or structured differently, which makes manual editing confusing and error-prone. [L0128, undated]
- A mismatched CSV causes import errors, so convert it before importing. [L0467, 2019]
- Uploading a supplier's default file unchanged will not work, because Shopify requires its own column names. Reshape the file to match Shopify's sample CSV before upload. [L1002, 2019]

**Shopify CSV template columns**

| Column | Purpose |
|---|---|
| Handle | Product URL |
| Title | Product name |
| Body | Product description |
| Vendor | Supplier name |
| Product category | Product category classification |

All columns must be populated correctly for successful import. [L0106, 2020-26]

- In Shopify CSV imports: Handle is the product's URL path, Title is the product name, Body is the product description, and Vendor is the supplier name. All other columns correspond to fields in Shopify's product editor. [L0128, undated]
- A CSV is a spreadsheet file in which each column holds one product attribute, such as product name, SKU, price and description. Shopify imports these files to create products in bulk. [L1111, 2020]
- The Shopify CSV Template is the file format used to import products in bulk. Use it to prepare product data in a spreadsheet before uploading. [L1095, 2024]

**Template workflow** [L0855, 2023]
1. Download Shopify's sample CSV template from its help documentation.
2. Keep the template's column headers exactly as they are.
3. Fill one row per product or variant, keeping every column in its original position.

**Sample-template preparation** [L0360, 2024]
1. Open Shopify's product documentation and download the sample product CSV template.
2. Open the template in a spreadsheet program such as Numbers, Google Sheets or Excel.
3. Replace the sample rows with the supplier's product data, keeping the column headers.
4. Set "handle" to the product URL ending, which is the part that comes after /products/.
5. Set "title" to the product name, "vendor" to the supplier name, and fill in the product category and type.

**Compare the headers and reshape** ** [L1002, 2019]
1. Get the product data from the supplier, usually as a spreadsheet.
2. Open it in Excel, Google Sheets or Apple Numbers.
3. Download the sample CSV from Shopify's product import documentation and compare its column headers with the supplier file.
4. Rename or rearrange the supplier columns so they match Shopify's headers exactly.
5. Save or export the sheet as a CSV file.
6. Upload the CSV file to Shopify.
- Compress oversized product images before you upload them.

**Google Sheets and Numbers**
- To import products from Google Sheets, save the sheet as CSV. In Google Sheets, go to File, then Download, then choose the CSV format. [L0835, 2023]
- On a Mac, use File > Export To > CSV in Numbers. On Microsoft systems, the same CSV export is done in Excel. [L0402, 2021-22]
- Shopify's own documentation on importing CSV files gives the step-by-step import process and is the reference for formatting your product file. [L0835, 2023]

**Google Shopping columns**
- The Shopify product CSV template includes Google Shopping columns for Age Group, MPN, AdWords Grouping, AdWords Labels, Condition and Custom Product, alongside the five Custom Label columns. These can be filled in bulk in the same spreadsheet as the custom labels. [L0747, 2021-22]

**Keeping product data in line**
- Keep the header row unchanged when editing a CSV. [L0430, 2023]

**Preparing the file for a generic CSV pattern** *(2019 and older variants)*
- Long supplier names and technical product names should be shortened for titles, as described in the title section. [L1085, 2018]

**Master conversion prompt** [L0538, undated]

```
You work as a specialist in Shopify CSV imports.

I have attached two files: a product CSV from my supplier, and Shopify's standard product import template.

Your job is to convert the supplier file into a new CSV that matches Shopify's required format exactly, so it imports without errors.

Follow these rules:
- Treat Shopify's CSV as the master schema.
- The output must use Shopify's exact column names.
- The output must follow Shopify's row layout for products and variants.
- Do not add columns that Shopify doesn't have.
- Do not delete any required Shopify columns.
- Map the supplier's fields to Shopify's fields as precisely as you can:
  - Product Title → Handle / Title
  - Description → Body (HTML)
  - Brand → Vendor
  - Category → Type
  - SKU → Variant SKU
  - Price → Variant Price
  - Compare at price → Variant Compare At Price
  - Inventory → Variant Inventory Qty
  - Weight → Variant Weight + Variant Weight Unit
  - Images → Image Src (one row per image where needed)
  - Options (Size, Color, Model, etc.) → Option1 Name / Option1 Value, Option2 Name / Option2 Value, and so on
- Handle products that have several variants.
- Each product gets one main row.
- Extra variants go in additional rows that reuse the same Handle.
- Every variant needs its own SKU, price, inventory, and option values.
- Handles must be lowercase, use hyphens in place of spaces, and be unique for each product.
- Clean and normalize the data.
- Strip out invalid characters.
- Write prices without currency symbols.
- Make sure inventory values are numbers.
- Remove extra spaces.
- Make sure every URL in an image field is valid.

Apply these Shopify defaults wherever data is missing:
- Published: TRUE
- Variant Inventory Policy: deny
- Variant Fulfillment Service: manual
- Variant Requires Shipping: TRUE
- Variant Taxable: TRUE
- Status: active

Output format:
- Give the final result as one complete CSV table.
- Make it ready to copy and paste.
- Put no explanations inside the CSV.
- After the CSV, list every assumption you had to make.

Validation, before you give the final output:
- Confirm that all required Shopify columns are present.
- Confirm that every variant has Handle, Title, SKU, Price, and Inventory.
- Confirm that the file is ready for a Shopify import.

Your output should contain:
- The fully formatted, Shopify-ready CSV.
- A short checklist confirming that the import will work.
- A short list of any data that could not be mapped cleanly.
```

[L0538, undated]

**Converting a supplier CSV with the master prompt** [L0538, undated]
1. Get the supplier's product CSV.
2. Get Shopify's default product CSV template.
3. Open an AI chat and upload both files.
4. Paste the master CSV conversion prompt into the chat.
5. Check the returned CSV against the checklist: all required Shopify columns present, and every variant row has Handle, Title, SKU, Price and Inventory.
6. Read the list of assumptions the AI made and the list of data it could not map cleanly.
7. Fix or fill the unmapped data by hand.
8. Save the output as a.csv file and import it into Shopify.

**Mapping table** [L0538, undated]

| Supplier field | Shopify column |
|---|---|
| Product Title | Handle / Title |
| Description | Body (HTML) |
| Brand | Vendor |
| Category | Type |
| SKU | Variant SKU |
| Price | Variant Price |
| Compare at price | Variant Compare At Price |
| Inventory | Variant Inventory Qty |
| Weight | Variant Weight + Variant Weight Unit |
| Images | Image Src (one per row when needed) |
| Options (Size, Color, Model, etc.) | Option1 Name / Option1 Value, Option2 Name / Option2 Value, etc. |

Defaults when data is missing: Published TRUE; Variant Inventory Policy deny; Variant Fulfillment Service manual; Variant Requires Shipping TRUE; Variant Taxable TRUE; Status active. [L0538, undated]

**File rules**
- A Shopify product CSV import needs one main row per product. Every extra variant is its own row that repeats the same Handle. [L0538, undated]
- Price columns contain plain numbers without currency symbols. Inventory values are numeric. Trim extra spaces and remove invalid characters before importing. [L0538, undated]
- Import with products that do not exist yet creates new products. Import with existing products updates them. [L0971, 2024]

**Upload via AI conversion (2025)**
1. Get the supplier's product spreadsheet.
2. Use AI to convert the spreadsheet into Shopify's standard product import format.
3. Import the converted file into Shopify in one step to bring in all products at once. This can take about five minutes instead of hours. [L1097, 2025]

**Freelancer conversion (2025)**
1. Download the sample product CSV from Shopify's product import template page.
2. Copy each product's details from the supplier spreadsheet into the matching columns of the template.
3. If that is too complicated, hire a Shopify product upload freelancer on Fiverr for about 5 to 10 dollars. Send them the supplier file and ask for a spreadsheet ready for Shopify import. [L1116, 2025]

**Older CSV workflows**
- Convert a supplier's detailed data **: [L1092, 2022]
  1. Get the product spreadsheet from the supplier, in Excel or Google Sheets.
  2. Save the spreadsheet as a CSV file.
  3. Upload the CSV directly into Shopify to fill in product information in bulk.
- Upload a CSV that is already prepared *(2019 and 2023)* [L0106, 2020-26; L0128, undated]
  1. Request the supplier to provide product data as a spreadsheet.
  2. Download Shopify's blank CSV template from the product import documentation.
  3. Copy supplier product data into the matching template columns.
  4. Save the reformatted file as a CSV.
  5. In Shopify admin, navigate to Products.
  6. Click Import.
  7. Drag the CSV file into the import interface. All products upload simultaneously.

**Cost-profit spreadsheet** ** [L0466, 2018]
- CSV product uploads are complex. Check the required and optional fields against an up-to-date step-by-step guide before uploading large batches.

### CSV import

**Import procedure** [L0128, undated]
1. Open Shopify Admin.
2. Go to Products.
3. Click Import.
4. Select and upload the finalised CSV file.
5. All products are added in one batch operation.

**Preview before confirming** [L0402, 2021-22]
- After uploading a product CSV, Shopify shows a preview of the first product and a count of the products, SKUs and images that will be imported.
- If the preview does not look right, change the order of the column headings in the file and upload it again before clicking Import products.

**What the preview shows** [L0747, 2021-22]
- The preview shows the first product with its title, description, status, type, vendor, variant, SKU, weight and price. It states how many products, SKUs and images will be imported.
- If the preview does not look right, change the order of the column headings in the file and check the preview again.

**After import** [L0430, 2023]
- Check the import report for errors.

### CSV export and bulk edits

**Export** [L1007, 2024]
- To export the product list from Shopify, open Products > Export in the Shopify admin. The resulting CSV can serve as a backup or be used to move products to another store.
- Export does not delete products. [L0255, 2025; L0253, 2024]

**Export procedure** [L0255, 2025]
1. Go to Products in the admin.
2. Use the export function. This does not delete products.
3. The CSV file includes all product data, including the tags column.
4. You can filter, sort and edit the CSV.
5. Re-import the CSV to update products without duplicating them.

**Bulk-edit tags, descriptions and other fields** [L0253, 2024]
1. Export all products as CSV from Shopify. This does not delete them.
2. Open the CSV file in Excel, Google Sheets or Apple Numbers.
3. Edit product information in bulk (tags, descriptions, etc.).
4. Import the updated CSV back into Shopify.
5. Shopify automatically updates all products with the new information.

**Bulk-edit prices** [L0470, 2023]
1. Export all products as a CSV file from Shopify.
2. Change the prices in the file, for example by a straight percentage.
3. Import the edited CSV again. Shopify updates the existing products.

**Bulk-edit quantities** [L0276, 2024]
- See the inventory section above for the full steps.

**Keep matched rows** [L1111, 2020]
- Keep product titles and descriptions matched to their own product rows when uploading a CSV.

**Publishing from edited copy** [L0883, 2025-26]
- Edited copy can be published to Shopify directly through a sync or import app such as Matrixify, or through an MCP-based publishing workflow. Run this only after editing, since skipping human review risks publishing errors.

**Products that ship in several boxes** [L0855, 2023]
- Keep one SKU per product, with separate boxes listed in the description.

**Duplicate and sync products**
- Once a product is listed from CJ, it stays synced with CJ. Changes to title, images and prices can be made in Shopify after listing without breaking the sync. [L0685, undated]

### Outsourcing uploads

**Order of work** [L0429, 2022]
1. Upload the first 20 products yourself while screen-recording them with Loom (screen plus microphone, optionally webcam), so the process and its duration are documented.
2. Give that recording to the hire so they know the exact format and workflow.
3. Check the uploads every 100 products to confirm they match your standards before errors multiply.

**Learn first, then outsource** [L1111, 2020]
- Use the Shopify product CSV to learn the upload process by doing the first batch yourself. Outsourcing uploads is acceptable once you can spot-check the results.

**Platforms** [L0429, 2022]
- onlinejobs.ph is a freelancer marketplace for hiring product-upload staff. It charges a monthly fee to post jobs.
- Upwork (upwork.com) is an alternative with no monthly fee in the same sense.
- For CSV help, Fiber or Upwork can be used at low cost. [L0274, 2023]

**Staff access**
- If you hire help, give them a staff account with limited permissions. [L1090, 2021]

**Checking outsourced work** [L0854, 2022]
- Double-check the work for mismatches, such as one product having another product's dimensions or price. A single CSV error can cause pricing problems across the store.

**Efficient bulk upload from a new supplier** [L1090, 2021]
- Step 1: import the supplier's product list via CSV rather than creating each product by hand.
- Step 2: go in and edit the imported products for tags, descriptions and images.
- Step 3: if you hire help, give them a staff account with limited permissions.
- This avoids starting from scratch with every product.

### Checks before publishing

- Check that every product shows the status Active before continuing. Products in Draft status do not appear on the storefront. [L1013, 2026]
- Products set to Active are visible on the Online Store only when they are also included in the Online Store sales channel. In the Products list, bulk actions include "Include in sales channels" and "Exclude from sales channels". [L1013, 2026]
- Confirm that the vendor, type, collections and tags are filled in consistently. [L1145, 2021-22]
- Confirm that the supplier's data matches each product: titles, prices, dimensions and images. [L0854, 2022; L1145, 2021-22]
- Rushing the product upload and getting the data wrong the first time means the work has to be redone later, which is harder than doing it right initially. Upload quality affects both paid traffic and organic search rankings. [L1163, 2021-22]

**Procedure: duplicate and activate products for a multi-product page** [L1013, 2026]
1. In Shopify admin, open Products.
2. Use the duplicate function on the product you want to copy, and repeat until you have one product per title (4 to 10 products in total).
3. In the Products list, select the duplicated products.
4. Open More actions and choose Set as active.
5. Confirm the dialog that asks whether to set the selected products as active.
6. Check that every product shows the status Active before continuing.

**Draft versus active** [L1013, 2026]
- Duplicated products must be set to Active. Products in Draft status do not appear on the storefront. Set as draft is the opposite action in the same More actions menu.

**Digital products** [L0861, 2026; L0862, 2026]
- For a digital product, open the product in Shopify, go to the Shipping section and turn off "Physical product" (shown as "Not a physical product"). Without this, the store treats the e-book as a shipped item.
- Under Product page > Shipping > Not a physical product, tick this box for any digital product, so no shipping is charged or required. Save the product afterwards so the setting takes effect.
- Leaving shipping active on a digital product causes checkout to treat it as a physical item. Always tick "Not a physical product" before publishing. [L0861, 2026]

**Quality rules from the sources**
- Product titles and descriptions must match their own product rows. [L1111, 2020]
- Ask for supplier product photos and check each one against the product. [L1145, 2021-22]
- Products listed from a supplier with a CSV link can be edited in Shopify after listing. [L0685, undated]

### Choosing how to create products

| Situation | Method | Source |
|---|---|---|
| A small number of products, or a team that finds spreadsheets daunting | Manual entry in the admin | [L1166, 2021-22] |
| Hundreds of products at once, with supplier spreadsheets pasted in | CSV import | [L1166, 2021-22] |
| Thousands of SKUs, simple products | CSV import for the simple products | [L1396, 2021-22] |
| Products with more options than Shopify's native variant system handles | Manual upload or a variant app | [L1396, 2021-22] |

- *Older (2021-22).* Shopify accepts product data in two ways: entering each product by hand in the admin, or bulk importing a CSV spreadsheet. Both produce the same product records, so supplier data can be prepared in whatever form it arrives. [L1166, 2021-22]
- *Older (2021-22).* Products > Add product opens the new product form. The Products page also has Export and Import buttons next to Add product. [L1166, 2021-22]


Part 30 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/29-product-creation-and-catalog-data.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/31-manual-product-creation.md
