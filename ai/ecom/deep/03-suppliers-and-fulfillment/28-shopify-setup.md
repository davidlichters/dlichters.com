<!-- part of ecom/deep/03-suppliers-and-fulfillment.md -->
Part 28 of 51 of "3. Suppliers and Fulfillment: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment.md · Previous: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/27-images-descriptions-and-content-rights.md · Next: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/29-shipping-setup-policies-and-delivery-expectations.md

## Shopify Setup

### Store structure

- Check whether each Shopify store uses a separate Shopify Payments account. Separate accounts make it easier to track each store's payments. *Older advice (2020).* [L0852, 2020]
- On Shopify, you can list 1,000 products on day one without restrictions. [L0280, undated]

### Product fields

- Set the Weight field in the Shopify Shipping section, with a unit selector such as kg. It is used to calculate shipping rates at checkout and to price shipping labels during fulfillment. Demo products can leave it empty, but real supplier products need it filled in correctly. *Older advice (2021-22).* [L0452, 2021-22]
- Enter stock levels on each product page when the supplier provides them. If the supplier gives no stock data, mark the product as in stock with a placeholder quantity, and confirm availability with the supplier. *Older advice (2021-22).* [L1145, 2021-22]
- If no stock figure is available, enter 10 as a placeholder in Track quantity. A quantity of 0 shows the product as out of stock and blocks sales. *Older advice (2021-22).* [L1166, 2021-22]
- Sources differ on the placeholder stock value. Both rules use a placeholder. The 2021-22 one source advice names 10 as the Track quantity value ([L1166, 2021-22]), and the same course's note on the Stock field advises a placeholder quantity ([L1145, 2021-22]). Use 10 when the setting is Track quantity.
- Tick "This is a physical product" for physical goods. Weight and customs fields can be left empty when shipping domestically only. Customs details matter only for cross-border shipping: the country of origin, usually where the product is made, and the HS code used by border officers. *Older advice (2021-22).* [L1166, 2021-22]
- Mark shipped items as physical products and enter their weight. For cross-border sales, add customs information on the product page. *one source 2026.* [L1167, 2026]

### Microsoft Merchant Center feed via the Shopify app

- Submit a Shopify product feed to Microsoft Merchant Center through the feed app 'Feed for Google Shopping', in this order:
  1. In Shopify admin, open the app 'Feed for Google Shopping' and go to the header menu item 'Integrations'.
  2. Under 'Bing Shopping', click the green 'Connect' button (if not yet connected).
  3. Click 'Continue with integration'.
  4. Select the Microsoft Advertising account to use.
  5. Select the Microsoft Merchant Center store to use.
  6. Click 'Confirm your account' and check that the status shows connected and turned on.
  7. In Microsoft Advertising, go to Feeds and refresh the page. Two feeds should appear: the empty default catalog and the new feed named like 'US Bing Shopping Feed by <app name>'.
  8. Wait for the products to be imported. They show as 'pending' in Merchant Center when set up correctly.

  [L1036, 2020-26]
- A default catalog is created automatically when a new store is set up. The feed app's automatic feed is named 'US Bing Shopping Feed by <app name>' and is the feed that carries the Shopify products. The default catalog stays empty and can be ignored for this setup. [L1036, 2020-26]
- In Feeds, the button 'Create feed' allows naming a feed and choosing an upload method. Products can also be imported directly from a Google Merchant Center account. The Shopify feed app route was used instead of the direct import. [L1036, 2020-26]

### Google Shopping variants

- Variant submission to Google Shopping: submit all variants if you want to run ads for all of them, or only the main variant if you want to run ads for one product. *Older advice (2021).* [L1090, 2021]

## Outsourcing Uploads

### Oversight and the first uploads

- Outsourced product uploads need full oversight, because a single misaligned row can put the wrong price on thousands of products. [L0359, 2020]
- Using Fiverr or external freelancers, never share your Shopify admin username and password. Generate a collaborator code instead, which gives limited access: freelancers can upload products but cannot access payment settings or restricted account areas. [L0106, 2020-26]
- Do not outsource product uploads blindly, because mistakes can make pricing wrong. Upload products yourself via CSV, and add a helper only after you can show the process by recording five to ten products. *Older advice (2022).* [L0665, 2022]
- Procedure to outsource product uploads for approved suppliers, in this order:
  1. Treat each approved supplier as its own separate project.
  2. Create one document per supplier with where its products are accessed, a link to its product feed, CSV or Excel file, and an SOP for the workflow.
  3. Upload the first 10 products yourself while recording your screen (a free tool such as Loom, Google Meet or QuickTime works), and add each step to the SOP as you do it.
  4. Note how long the 10 uploads took, as a baseline for the cost of hiring.
  5. Hire a freelancer on Upwork or onlinejobs.ph for the rest.
  6. Share the project folder with the SOP and recording with the freelancer.
  7. Spot-check every upload: product images must match the right product, and prices and titles must match the right product.

  [L0359, 2020]
- Procedure to hand off product uploads when supplier formats differ, *older advice (2021)*:
  1. Do a few uploads yourself to learn the process.
  2. Record your screen with Loom while uploading 10 to 20 products from one supplier.
  3. Send the recording to whoever will do the uploads.
  4. Treat each supplier as a separate job, because the work differs even when product counts are the same.

  [L0671, 2021]
- Loom is a free Chrome extension that records your browser, microphone and optional webcam with one click. Use it to record a sample task, such as uploading five products, then send the recording to a virtual assistant for training. *Older advice (2021).* [L0801, 2021]

### Freelancer procedures

- Outsourcing supplier CSV and product upload work when supplier files are messy, *older advice (2024)*:
  1. Search Upwork or Fiverr for a Shopify CSV expert.
  2. Send the freelancer your starting data (PDFs, spreadsheets) and tell them the exact format you need.
  3. Ask for a ready-to-upload CSV file.
  4. Review the CSV before uploading it.
  5. Do not give the freelancer access to your store.

  [L0806, 2024]
- Freelance product upload help can be found on Upwork by searching for Shopify product upload. Review the freelancer's reviews and past work before hiring, and check every upload for crossed details. *Older advice (no year given).* [L0941, 2022]
- Procedure for a supplier without a product list, *older advice (2021)*:
  1. Search the supplier's products on Google as a customer and check what other sellers charge.
  2. If other sellers mark them up only slightly, for example around 10 percent, drop that supplier.
  3. If margins are strong, record one product upload on video with a free screen recording extension and hire a virtual assistant to upload the rest.

  [L0801, 2021]

### How many products to upload yourself first

Sources differ on the sample size before outsourcing:

| Source | Year | Upload yourself first |
|---|---|---|
| [L0663, 2019] | 2019 | 5 products, then test import |
| [L0665, 2022] | 2022 | Record 5 to 10 products before adding a helper |
| [L0359, 2020] | undated | First 10 products, recorded |
| [L0671, 2021] | 2021 | 10 to 20 products from one supplier, recorded |
| [L1275, 2019] | 2019 | Roughly the first 100 products, or all products from the first supplier |
| [L0801, 2021] | 2021 | One product upload recorded on video |

The 100-product figure is the oldest and largest. Use the 5 to 10 product test to start, because the sources agree that you should learn the process yourself before handing it off. [L0663, 2019; L0665, 2022; L0359, 2020; L0671, 2021; L1275, 2019; L0801, 2021]

### Quality checks and hiring

- Check every upload carefully, because wrong prices, images, descriptions or SKU numbers can get mixed between products. [L0941, 2022]
- Uploads of supplier products should be spot-checked on images, prices and titles before going live. The procedure is in "Outsourcing Uploads" above. [L0359, 2020]

## Costs of Manual and Outsourced Upload

- Newer figure, read this first: outsourcing the upload of a 500-product brand whose data must be taken from its website costs about $40 to $50, instead of spending a weekend on it yourself. The 2019 table below describes how to structure payment; do not use its per-product minutes to estimate the price of a typical outsourced upload today. (Added 2026-11-07 from the lesson transcript, 07:09.) [L0106, 2020-26]

### Pricing model by data format

Pricing depends on the supplier's data format. *Older advice (2019).*

| Supplier data format | Category | How to pay | Example from the lesson |
|---|---|---|---|
| CSV file (Excel-style sheet with products, prices, descriptions, image links) | Automated | Hourly rate or fixed project fee, never a fixed price per product | Formatting takes about 20 minutes to 1 hour regardless of whether there are 100 or 3,000 products |
| PDF, supplier website without a feed, or physical catalog | Manual | Fixed cost per product | About 5 minutes per product by hand |

[L1275, 2019]

- Paying a fixed price per product for a CSV feed overpays. Reformatting the file takes roughly the same time whether it has 100 or 3,000 products. *Older advice (2019).* [L1275, 2019]
- Manual upload hours = number of products x minutes per product / 60. For example, 3,000 products at 5 minutes each equals 250 hours of work, which is the basis for a fair per-product price. *Older advice (2019).* [L1275, 2019]

### Preparing Supplier Data

- Use one CSV file per supplier, because each supplier formats its data differently. [L1285, 2024]
- Open each supplier file and rename its columns to the exact headers of the Shopify product CSV template. [L1285, 2024]
- Add or delete columns until they match the template. [L1285, 2024]
- Copy and paste whole columns, not row by row. [L1285, 2024]
- Import the CSV for each supplier separately. [L1285, 2024]

### Rights to Photos and Price Lists

- Supplier photos and a price list are generally low risk to use when the supplier gives written permission, even without a signed contract. [L1283, 2023]
- Ask for that permission in writing before you publish any photos. [L1283, 2023]

### Product Identifiers (SKU, MPN, GTIN)

- Some products have no SKU or barcode. In that case, create an MPN with this procedure:
  1. Take the abbreviation of the brand name, for example ABT for AB Tables. [L1281, 2022]
  2. Add a sequential number for each product, for example ABT123, ABT124, ABT125. [L1281, 2022]
  3. Enter this code as the manufacturer part number in the product data. [L1281, 2022]

### Choosing Which Products to List

- Once you are authorized to sell a brand, you do not have to list its whole catalog. [L1287, 2025]
- Choose the products that give you the best margin. These are often the higher-priced items. [L1287, 2025]

### Uploading to Shopify

- Use Shopify's native CSV import for bulk product uploads and edits. [L1285, 2024]
- Do not add a third-party bulk upload app for this. [L1285, 2024]

### Inventory Settings

- For dropshipping products, set the inventory quantity to 9999 so the product does not show as out of stock. [L1331, 2025-26]
- Confirm with the supplier that the stock actually exists, especially if you work with a private agent. [L1331, 2025-26]

### Shopify Setup for Meta Connections

- The Shopify setup screens for Facebook and Meta connections were recorded in late 2022, so menu names and button labels may have changed since then. [L1318, 2022+]
- Match each step to the label that is actually on screen instead of following the recorded wording word for word. [L1318, 2022+]

### Outsourcing Product Questions to Writers

Older advice, recorded 2021 to 2022: [L1396, 2021-22]

1. Send the manufacturer's contact an introduction email that names the writer and the page or blog being written. [L1396, 2021-22]
2. Tell the writer that they may call that contact directly with product questions. [L1396, 2021-22]
3. Keep these calls away from the project manager, who otherwise handles them on top of CSV uploads. [L1396, 2021-22]

#### Further details

- Ask suppliers for a CSV, Excel or product feed when possible, because a structured file makes product uploads much faster than manual entry. [L0359, 2020]

1. After approval, receive the product data, pricing and other information the supplier provides.
2. Load the product data onto your store.
3. Clean up the website design so the products look neat and consistent.
4. Check the store is complete and ready to take orders.
5. Launch the store and start the traffic funnel.
[L0458, 2021-22]

- When suppliers provide product data through a CSV template, make sure the product information in the file matches what should appear on your store. [L0468, 2020]

- Duplicate products from two suppliers, for example one at MAP and one without MAP, should not both be listed in the same store because it confuses customers. [L1113, 2022]


Part 28 of 51 of "3. Suppliers and Fulfillment: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment.md · Previous: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/27-images-descriptions-and-content-rights.md · Next: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/29-shipping-setup-policies-and-delivery-expectations.md
