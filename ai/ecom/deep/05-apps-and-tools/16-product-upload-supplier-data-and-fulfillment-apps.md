<!-- part of ecom/deep/05-apps-and-tools.md -->
Part 16 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/15-store-building-themes-page-builders-and-store-sett.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/17-product-options-personalization-and-digital-produc.md

## Product Upload, Supplier Data and Fulfillment Apps

### Supplier Directories, Sourcing Search and Outreach

- one source membership includes a free drop shipping supplier directory in the Bonuses section. Log in with your membership credentials and do not buy external drop shipping directories. [L0276, 2024]
- TSNN.com is a worldwide trade show directory. Search by keyword or industry, open the trade show websites, and use their exhibitor lists to find manufacturers and suppliers to contact. ** [L0962, 2021]
- The AliExpress camera (image search) finds matching products from a photo. Use it on product images from a competitor store to find the same items on AliExpress. [L0388, 2024+]
- AliTool is a Chrome extension that runs an image search on AliExpress from a competitor's product image. Use it to find the AliExpress listing and supplier price without searching manually. [L1174, undated]
- Taobao is a Chinese marketplace linked to AliExpress that recently added English conversion inside the app. Sorting books by highest number of purchases gives a usable demand signal, since purchase volume counts even on a Chinese platform. [L1195, 2026]
- Avoid Spocket for US suppliers. Overlo, which Shopify once promoted, was shut down and is also not recommended. [L0964, 2023]

#### Supplier contact plan tool

1. Open your completed master supplier list. [L0936, 2020-26]
2. Open the supplier contact plan tool through the link below the lesson. [L0936, 2020-26]
3. In the top section, enter your name, company name (include the LLC name if you formed one), store name, store URL, business phone number and email address. Use the email format firstname@yourstorename.com. [L0936, 2020-26]
4. In the bottom section, enter the supplier company name, supplier website, supplier phone number (if available) and supplier tier. [L0936, 2020-26]
5. Set the supplier tier to Silver. [L0936, 2020-26]
6. Click the button labeled generate my contact plan and wait a few seconds. [L0936, 2020-26]
7. Review the day-by-day schedule, which lists what to say and what to do each day. [L0936, 2020-26]
8. Click the button labeled download contact plan before contacting the first supplier, to keep a saved copy. [L0936, 2020-26]
9. For each further supplier, create another plan in the tool. Your top-section details are stored, so you only replace the supplier fields. [L0936, 2020-26]

### Preparing Supplier Product Data

- Converting supplier product data into CSV files for upload to the store is the most time-consuming part of store operation. ** [L0969, 2022]
- A supplier CSV is not synced automatically with the store. Prices, images and stock must be updated by hand or by re-uploading the reformatted file. ** [L1069, 2019]
- Use Google Sheets, Excel or Apple Numbers to edit CSV files before importing into Shopify, and download the result as a CSV. Use Excel for very large files. [L0964, 2023]
- ChatGPT can write spreadsheet formulas for Google Sheets or Excel. Upload the spreadsheet, describe the result you want, and it returns the formulas or a reformatted spreadsheet. [L0667, 2025]
- Canva is a simple tool for editing documents such as spec sheets, for example to remove supplier contact details. [L0808, 2026]

#### Manual preparation of a supplier spreadsheet

1. Take the spreadsheet the supplier sends. [L1069, 2019]
2. Rename or rearrange the columns to match the Shopify product CSV standard. [L1069, 2019]
3. Check that images, prices and inventory data are included in the file. [L1069, 2019]
4. Upload the file to the store. [L1069, 2019]

If all required data is present, this takes less than an hour. If images must be collected product by product from the supplier's website, the work takes far longer. ** [L1069, 2019]

### ChatGPT CSV Reformatting

#### Procedure (version A)

1. Obtain the 'reformat.csv product upload prompt'. [L0106, 2020-26]
2. Open ChatGPT or your preferred AI tool. [L0106, 2020-26]
3. Attach both files: the supplier's original CSV and Shopify's blank template CSV. [L0106, 2020-26]
4. Paste the complete prompt text. [L0106, 2020-26]
5. Send for processing (typically 2-3 minutes). [L0106, 2020-26]
6. Review the generated import-ready checklist, which notes AI assumptions (for example, inventory set to 0 if missing from source data). [L0106, 2020-26]
7. Ask ChatGPT to correct any assumptions before download if needed. [L0106, 2020-26]
8. Download the converted spreadsheet, ready for Shopify upload. [L0106, 2020-26]

#### Procedure (version B, same workflow)

1. Copy the provided AI prompt and paste it into ChatGPT. [L0128, undated]
2. Attach the supplier's CSV and Shopify's template CSV as files. [L0128, undated]
3. Run the prompt. [L0128, undated]
4. Review the AI's output CSV and assumptions checklist. [L0128, undated]
5. Ask the AI to update any missing or incorrect fields. [L0128, undated]
6. Refine until the CSV is fully correct. [L0128, undated]

#### Example

- Converting a misformatted supplier spreadsheet to Shopify template format took 2 minutes 26 seconds. The AI flagged assumptions made during conversion (inventory defaulting to 0, vendor field left blank) in an import-ready checklist, allowing manual correction before final download and Shopify upload. [L0106, 2020-26]

#### Principle: refine before downloading

- After ChatGPT converts a supplier CSV to Shopify format, keep asking ChatGPT to refine the spreadsheet within the same conversation rather than downloading immediately. [L0106, 2020-26]
- Address multiple flagged assumptions together, for example 'set inventory to [quantities]' and 'fill vendor with [brand name]', before downloading the final version. [L0106, 2020-26]
- This iterative refinement through ChatGPT resolves most CSV issues without requiring post-download manual spreadsheet editing. [L0106, 2020-26]

### Bulk Editing Tools

- Bulk Edit Shopify Products is a free or paid app for bulk tagging, bulk editing and CSV management without exporting and reimporting files. [L0253, 2024]
- Bulk tag editor apps such as Power Tools can change product tags across many Shopify products at once. Before installing one, read recent reviews and search community reports, because some users have reported that the app blocked editing of their products. *(Older, 2024 entry; treat as a current warning.)* [L0856, 2024]
- The Able Star Bulk Product Editor is a Shopify app that can write product descriptions from basic product details using ChatGPT. [L0970, 2023]
- Matrixify is an Excel-based app for bulk product uploads and updates, collections and metafields. When checked in this lesson it had 549 reviews and a 4.8 star rating. [L0667, 2025]
- Matrixify is a Shopify app for bulk importing and exporting products, collections and other store data through spreadsheets. It is useful for managing large catalogs. [L0675, 2025]

#### Bulk price changes

- Bulk price changes can be done by exporting the product CSV from Shopify, editing it, and importing it back to update everything at once. Discount scheduling can be done inside Shopify without extra apps. [L1283, 2023]

### Outsourcing Uploads

#### Fiverr

- Fiverr is a freelance marketplace for outsourcing Shopify product uploads. Freelancers post services with transparent pricing, star ratings and product counts. [L0106, 2020-26; L0255, 2025]
- Example: a freelancer with a 4.9-star rating from 204 reviews offers 50-product uploads for $10. Fiverr Shopify product upload pricing starts at $10 per service. [L0106, 2020-26; L0255, 2025]
- You provide the supplier's product data. The freelancer handles store uploads while you maintain security by issuing a collaborator code instead of login credentials. [L0106, 2020-26]
- Search for 'Shopify product uploads' and review ratings and pricing. [L0255, 2025]

#### Procedure for outsourcing on Fiverr

1. Find a service provider with good reviews. [L0255, 2025]
2. Record a video of your process using Loom.com. [L0255, 2025]
3. Send the Loom video to the freelancer so they understand your exact process. [L0255, 2025]
4. The freelancer uploads products according to your method. [L0255, 2025]
5. Double and triple check their work before publishing. [L0255, 2025]
6. Verify that no information is mixed up between products. [L0255, 2025]

#### Other hiring options

- Upwork and onlinejobs.ph are used to hire people for product uploads or customer service. Check their work, since outsourced uploads can carry pricing mistakes. ** [L0854, 2022]
- If the format is unfamiliar or the upload volume is large, a freelancer can be hired to handle CSV bulk uploads. [L0966, 2025]
- If a freelancer needs more than about two hours to upload a complete supplier CSV with images to Shopify, the work is taking too long and the scope or quote should be questioned. ** [L1069, 2019]

### Native Shopify Import and Troubleshooting

- Shopify does not need an extra app or connector to import supplier products. A CSV in Shopify's product format can be uploaded directly through the Shopify admin. [L1114, 2023]
- Shopify's help pages on importing and exporting products cover Using CSV files, Importing products, Exporting products and Solutions to common import problems. Check the troubleshooting section when a CSV import fails. ** [L1166, 2021-22]
- If the data comes from the Oberlo app, follow Shopify's separate guide on dropshipping with Oberlo instead of the standard CSV steps. ** [L1166, 2021-22]

#### If a large CSV fails to upload

1. Split the file into smaller files. [L0964, 2023]
2. Upload the first 200 rows first and test. [L0964, 2023]
3. Upload the rest in smaller parts. [L0964, 2023]
4. If it still fails, contact Shopify live chat. [L0964, 2023]

### Stock and Price Sync

#### Approaches

| Approach | When the sources use it | Sources |
|---|---|---|
| Manual stock checks | Check inventory on the 20 percent of products that sell consistently, not all listings. | [L0964, 2023] |
| Supplier-specific sync app | Check the Shopify app store for a tool built for your supplier, because each supplier uses a different inventory system. No universal app updates stock from every supplier. ** | [L0469, 2021] |
| Multi-supplier sync app | Stock Sync updates Shopify stock from supplier feeds, including weekly spreadsheet uploads, and can keep stock accurate across multiple suppliers. | [L1115, 2024] |
| Stocksync | Keeps product inventory synced with supplier stock levels, which helps prevent selling items that are out of stock. | [L1105, 2024] |
| Spreadsheet import app | When a supplier sends messy Excel or CSV files, search the Shopify App Store for an app that imports spreadsheet stock levels. Several apps do this, so compare their features before installing one. ** | [L1112, 2021] |

- The sources differ on whether one app fits all: one says no universal app exists, while another describes a sync app that works across several suppliers. Use the supplier-specific option when the supplier has its own tool, and a multi-supplier app when you manage several feeds. [L0469, 2021; L1115, 2024]
- Without a sync app, a supplier CSV does not update the store on its own. [L1069, 2019]

#### Troubleshooting sync apps

- If a product sync app sends repeated 'file format not supported' emails from Shopify, message its live chat while logged into the store admin. These apps usually sync through an API, so the support team can check the account settings. [L1097, 2025]

#### Price monitoring

- Price-monitoring services track competitor and supplier prices and send alerts when prices change. They reduce manual checks of MAP compliance across many SKUs. [L0806, 2024]

### Fulfillment and Dropshipping Apps

#### Fulfillment providers

- Unified Dropshipping is a verified fulfillment agent. Minimum order quantities range from 100 to 1,000 units depending on product cost: higher-priced items have lower MOQs. Access is through Skype with a referral introduction. [L0309, 2024+]
- Other fulfillment companies mentioned as options are Unified Drop Shipping, USA Drop and Zendrop. The lesson only demonstrates CJ Drop Shipping and Hyper Rescue. [L0685, undated]
- CJ Dropshipping is used as a product source and fulfillment supplier, with a processing time of about three days and delivery of about two weeks. AliExpress is used to source products and compare suppliers, and it often has more variety. [L1444, 2022]
- DSers and CJ Dropshipping can set up automatic size conversion on the back end, so the supplier ships a size that fits the customer's order. Check whether your supplier and app combination supports this setting before relying on it. [L1128, 2023]

#### Installing a fulfillment app

1. Go to Apps > Sales channel settings > Shopify App Store. [L0635, undated]
2. Search for the app, for example CJ Dropshipping or Hyper Rescue. [L0635, undated]
3. Click Install. [L0635, undated]
4. Create the supplier account when the app prompts you. [L0635, undated]

#### AutoDS

AutoDS is an automation app that lists supplier products in the Shopify store, imports them and fulfills incoming orders automatically, notifying the supplier when an order arrives. It can map add-on variants so that orders from multiple items are sent to the supplier together. [L0635, undated; L0577, 2023]

It works as an automation system rather than a support system, so it offers little help with refunds, returns or damaged packages. A fulfillment company app with live agent support is preferred for those cases. [L0635, undated]

**Setup: connecting the store and importing products**

Method A: Chrome extension

1. Search Google for 'AutoDS dropshipping helper' and add that extension to Chrome. [L1297, 2023]
2. After installing the app, connect the store in AutoDS. Then install the AutoDS dropshipping helper Chrome extension. [L0477, undated; L1297, 2023]
3. On the supplier product page, click the extension button that appears. [L1297, 2023]
4. Choose your Shopify store in the extension and click Save. [L1297, 2023]
5. Wait for the import. The product then appears under Drafts in AutoDS. [L0477, undated; L1297, 2023]

Method B: single product by URL

1. In AutoDS, click Add products at the top left, then Single product. [L1297, 2023]
2. Choose your store and click Next. [L1297, 2023]
3. Paste the supplier product URL. [L1297, 2023]
4. Click Publish to store. [L0477, undated; L1297, 2023]

**Editing a product in AutoDS before import (saves time)**

Before importing, edit the product in AutoDS:

1. Open the draft with the arrow on the left side. [L1297, 2023]
2. Set the title (from a prepared list), collection and tags. [L0477, undated; L1297, 2023]
3. Delete the default description and paste your prepared description. [L0477, undated; L1297, 2023]
4. Make sure monitoring is on for stock, price and auto order. [L0477, undated; L1297, 2023]
5. Deselect variants you do not want (for example the UK or EU plug) and variants that are out of stock. [L0477, undated; L1297, 2023]
6. Select which images to import, and add more with add image if needed. [L0477, undated; L1297, 2023]
7. Check the item specifications. [L1297, 2023]
8. Click Save and import. The product then appears on the store product page. [L0477, undated; L1297, 2023]

**Shipping methods and automatic fulfillment**

- Shipping methods are found under Settings > Lister and offer three options: cheapest, cheapest with tracking, and fastest with tracking. Pick the option your supplier actually offers. The other settings can be left alone at the start. [L0477, undated; L1297, 2023]
- Under Settings > Orders, turn on both boxes so that orders are marked as fulfilled by AutoDS automatically. The question mark icons next to these options explain what happens. [L0477, undated; L1297, 2023]

**Funding automatic fulfillment**

- Automatic fulfillment is paid from a balance, so the account needs funds. Either link a credit card or top up the balance under Balance, because each automatically fulfilled order is charged to it. [L0477, undated; L1297, 2023]

**Notifications**

- Turn on all order notifications under Notifications: failed orders, tracking numbers received, new orders, and successfully processed orders. [L0477, undated; L1297, 2023]
- Also turn on stock and price change notifications and set the email frequency to daily. [L0477, undated; L1297, 2023]

### Middleman Apps: The Course's Position

- **Position A (direct supplier model):** Shopify dropshipping apps are not used or recommended in this model because they act as middlemen between the store and the supplier. The store should instead work with direct supplier relationships and the tools covered in the store setup. [L0360, 2024]
- **Position B (app-based fulfillment):** one source builds the workflow around AutoDS, CJ Dropshipping and similar fulfillment apps, which automate listing, importing and order forwarding. [L0477, undated; L0635, undated; L1444, 2022]
- **When each applies:** Position A fits when you work with suppliers directly and want no intermediary between store and supplier [L0360, 2024]. Position B fits when you want orders forwarded automatically, accepting that the app is an automation system and not a support system, so refunds, returns and damaged packages need a fulfillment company app with live agent support [L0635, undated].
- Paying for a supplier integration app is worth it only when the brand ranks high on competitor sites and sells well. Check the monthly price first and judge it against expected sales. [L0808, 2026]

### Order Forwarding and Supplier Order Emails

- An order forwarding app works independently of the store theme. A store can change its theme without changing its order forwarding setup. ** [L0960, 2019]
- Shopify Email and Shopify automations may be able to send supplier order emails natively, but this is untested. A separate email platform such as Klaviyo can also handle this, so check both options before choosing one. [L0805, 2024]

### Freight and Shipping Quotes

| Tool | What the sources say | Sources |
|---|---|---|
| Freightcenter.com (quote aggregator) | Returns quotes from several carriers based on origin, destination, package size and weight. | [L0970, 2023] |
| Freightcenter.com (shipments and BOL) | Used to create freight shipments and generate the Bill of Lading (BOL) for supplier-shipped freight. | [L0805, 2024] |
| Freight Center (heavy products) | Enter a warehouse address or zip code and several destination zip codes to get estimates for shipping heavy products. | [L1115, 2024] |
| Freight Club and Freight Center | Described as freight carriers that quote the same carriers with different markups. Compare both quotes. ** | [L0834, 2021] |
| Red Hawk and freightcenter.com | Provide shipping quotes that can be compared against supplier shipping prices. | [L0966, 2025] |
| Interparcel (Australian example) | Online freight broker for booking pickup and delivery of shipments you arrange yourself, with a quick quote showing price options. | [L1291, undated] |

- Freight broker and freight quote sites, for example freightcenter.com, can reduce freight shipment costs considerably. The speaker reported savings of about 100 dollars or more per shipment. ** [L0665, 2022]
- The sources describe Freight Center differently: as a quote aggregator for several carriers [L0970, 2023; L1115, 2024] and as a carrier whose quotes differ in markup from Freight Club [L0834, 2021]. Compare its quote with the other option before choosing a carrier. [L0834, 2021; L0970, 2023]

### Marketplaces and Print on Demand

- Shopify has built-in multi-channel selling that can list products on marketplaces such as eBay and Amazon. Before using it, check every brand's agreement, because many brands prohibit selling through third-party platforms. ** [L0358, 2020]
- Printful is a large print on demand provider with a reputation for good product quality. It is an option if print on demand products are added to a store. [L1097, 2025]


Part 16 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/15-store-building-themes-page-builders-and-store-sett.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/17-product-options-personalization-and-digital-produc.md
