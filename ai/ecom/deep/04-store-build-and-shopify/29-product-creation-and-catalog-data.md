<!-- part of ecom/deep/04-store-build-and-shopify.md -->
Part 29 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/28-done-for-you-build-option.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/30-product-media.md

## Product creation and catalog data

### Deciding what to upload first

- Upload the approved suppliers' products first, one set per approved supplier, so the starting catalogue covers several brands. Do not wait for every supplier to be approved before listing the ones already approved. [L0689, 2020-26]
- Do not upload a whole supplier catalogue before you know the bestsellers. A small starting ad budget spread across thousands of products is wasted, so identify the bestsellers early and direct the budget there first. [L0360, 2024]
- When a supplier has hundreds of products and no product file, upload the most important items first:
  1. Email the supplier and ask for their top 10 best-selling products.
  2. Upload those 10 products first.
  3. Upload the rest of the catalogue afterwards. [L0808, 2026]
- A new store can start with about 100 products. Established stores often carry hundreds or thousands. Add products gradually after the first batch is live. [L0968, 2021]
- Aim for at least 100 different products. This gives enough variety to rank for enough keywords to see impressions, clicks and sales. [L0359, 2020]
- Ask suppliers which variants sell best and list only those. The 80/20 rule suggests that about 80% of sales come from about 20% of variants. *Older advice (2019).* [L1002, 2019]

### Choosing the upload method

| Situation | Method | Source |
|---|---|---|
| 10 to 20 demo products | Manual copy and paste | [L0036, 2020-26] |
| Small supplier, few products | Manual upload | [L0128, undated] |
| 100s or 1,000s of products | CSV bulk upload, which creates all product pages at once | [L0036, 2020-26] |
| Supplier with 500+ products | Manual entry is impractical | [L0106, 2020-26] |
| 8,000 products | CSV is the only realistic way. *Older advice (2022).* | [L0665, 2022] |

- Manual upload is simplest but most time-consuming. It becomes impractical for suppliers with 500+ products. [L0106, 2020-26]
- Uploading hundreds of products manually is inefficient. [L0128, undated]
- A CSV bulk upload can handle 1,000 or more products in one spreadsheet and creates the product pages automatically. [L0036, 2020-26]
- CSV is generally the better option for large catalogues. Products can be added or edited one by one on each product page, or in bulk through a Shopify CSV. [L0247, 2021]
- CSV is the fastest method when a supplier provides product data. Shopify provides a default CSV template that defines all required columns. [L0128, undated]
- CSV import is significantly faster than manual entry and is the recommended method for adding products. [L0278, 2025]
- CSV is the fastest method besides outsourcing. [L0106, 2020-26]
- You do not need one upload method only. Use manual upload for small suppliers, outsource large catalogues to freelancers, and use CSV upload when spreadsheets are available. [L0128, undated]
- Do not use automated product feed imports from suppliers. Ask suppliers to send product information as Excel sheets or shared Google Sheets. This lets you edit descriptions, pricing and specifications without them auto-updating from the supplier feed. [L0251, 2023]
- Use the Shopify CSV template for bulk creation and updates. It also updates older products. [L0665, 2022]

### Manual product entry

**Steps for manual upload from a supplier's website** [L0106, 2020-26]
1. Log into the Shopify admin and navigate to Products.
2. Click Add products.
3. Enter the product title from the supplier website or product information.
4. Copy and paste the product description.
5. Upload the product images provided by the supplier.
6. Enter relevant tags (created previously).
7. Set your selling price.
8. Enter the supplier's business name in the Vendor field.

**Add product steps** [L0219, 2020-26]
- Open Shopify Admin > Products > Add product (top right button). [L0219, 2020-26]
- Product Title field: paste the product name. [L0219, 2020-26]
- Description field: paste the description into the WYSIWYG editor. [L0219, 2020-26]
- Product Category field: select the category for your product. [L0219, 2020-26]
- Price field: enter the product price. [L0219, 2020-26]
- Product Type field: set to match the product category. [L0219, 2020-26]
- Collections section: select automated tag-based collections to assign the product. [L0219, 2020-26]

**Other manual-entry rules**
- Add products one by one: open Products, click Add product, fill in the details and publish. For larger catalogues, importing a CSV is much faster once you have learned its format. [L0968, 2021]
- The Shopify product description editor works like a word processor. It supports text formatting (bold, colour, alignment) and embedded images without leaving the field. [L0036, 2020-26]
- The Shopify product editor is the single place where all product data is entered. This includes the title, description, price, model number, images, videos and every other field that appears to customers. Product edits, image changes and data updates are all made from the Products area in the admin. [L0452, 2021-22]
- Split-screen layout for manual upload: Shopify admin on one side, the supplier's website on the other. Copy titles, descriptions and images directly between the two without switching windows or applications. This reduces transcription errors and speeds up manual uploads for small product counts. [L0106, 2020-26]

### Product fields

- **Category:** search dropdown for your niche. [L0036, 2020-26]
- **Type:** the product type name. Set it to match the category. [L0036, 2020-26; L0219, 2020-26]
- **Custom product types:** the Type field accepts custom text you type. If the type does not yet exist in your store, Shopify creates it and adds it to the product type list for all future products. [L0219, 2020-26]
- **Vendor:**
  - Demo products: the store name.
  - Real products: the supplier's brand name, for example "Surfboards Plus". [L0036, 2020-26; L0106, 2020-26; L0128, undated]
  - Once saved, the vendor name becomes a selectable option (dropdown) for all future products from that supplier. [L0106, 2020-26; L0128, undated]
  - The Vendor field must be completed for every product during upload. [L0106, 2020-26]
- **Collections and tags:** collections are assigned by automated tag-based rules. Enter tags before upload. Product type, vendor, collections and tags should be filled in consistently. [L0219, 2020-26; L0106, 2020-26; L1145, 2021-22]
- **SKU and barcode:** optional for demo products. Suppliers typically provide an SKU or GTIN for real products, and these go in the SKU and barcode fields. [L0036, 2020-26]
- **GTIN or SKU:** enter the supplier's GTIN or SKU in the product identifier fields together with the rest of the supplier product data. [L0836, 2024]
- **Status:** active products are live. Set a product to draft if it still needs work. [L1145, 2021-22]
- **Product type for multi-box products:** products that ship in several boxes can keep one SKU per product, with the separate boxes listed in the description. [L0855, 2023]

### Pricing: price, compare-at, MAP and cost

**Field definitions**
- **Price:** the customer-facing selling price. [L0036, 2020-26]
- **Compare-at price:** a higher price that shows a discount. [L0036, 2020-26]
- **Cost per item:** what you pay the supplier. It is for tracking only and is optional for demo products. [L0036, 2020-26]
- The pricing block contains Price, Compare-at price (shown as a struck-through price next to the sale price), Charge tax, and Cost per item. Enter the compare-at price above the sale price to display a discount. [L1013, 2026]

**Which value goes where**

| Field | What it holds | When | Source |
|---|---|---|---|
| Price | MAP (minimum advertised price) | Supplier provides a MAP | [L0667, 2025] |
| Price | Your selling price including your markup, not the wholesale price | Price is set by you | [L1111, 2020], *2020* |
| Compare at price | MSRP (manufacturer's suggested retail price) | Supplier provides an MSRP | [L0667, 2025; L1130, 2020-26] |
| Compare at price | Left empty | No MSRP is given | [L0667, 2025] |
| Cost per item | Wholesale price, for profit tracking | Always, when known | [L0667, 2025] |

- When a supplier provides an MSRP, enter it in Compare at price and enter the MAP in the Price field. Enter the wholesale price in Cost per item. Leave Compare at price empty if no MSRP is given. [L0667, 2025]
- Enter two prices: Price for the actual sale price, and Compare-at price for the MSRP. The theme then shows the MSRP as the regular price with the sale price beside it. [L1130, 2020-26]
- ** On the product page, show the MSRP as a crossed-out compare-at price, the MAP as the displayed price, and keep the wholesale cost off the storefront. [L0663, 2019]
- In the CSV, the price column must contain the final selling price including your markup. Enter this before importing. [L1111, 2020]

**How the compare-at price displays**
- A product page can show a list price next to the sale price, with the saving in dollars and percent. Example: list 999 USD, price 799 USD, save 200 USD or 20 percent. [L0966, 2025]
- This shows on the product page by default. It does not show on the homepage, which needs custom code. [L0966, 2025]
- Pages with a clear list price, price and saving show value to shoppers. This can support conversion without changing the MAP. [L0966, 2025]

**MAP and compare-at check (spreadsheet)** [L0854, 2022]
1. Get the supplier price list as a CSV.
2. Sort it by price from high to low.
3. Add a MAP column with the MAP price for each product.
4. If needed, export the full product list from the Shopify store and add the MAP and wholesale columns to it.
5. Check the spread per product with the formula above. *Note: the formula referred to in step 5 is not part of this source unit.*

**Profit columns for older exports** **
1. Export all products from Shopify as a CSV file.
2. Open the file in Google Sheets.
3. Add columns such as wholesale price, cost of delivery, and merchant fees (for example 2.9 percent) to calculate profit per product.
4. Use the Shopify app to add wholesale prices if you prefer to add them product by product. [L0466, 2018]

### Inventory

- **Track inventory:** on each product, the Inventory section has a Track inventory checkbox. [L0972, 2025]
  - Leave it unchecked if you do not want to show stock levels. Set the quantity to zero to make a sold-out product unavailable for purchase. [L0972, 2025]
  - For demo products and products managed manually, inventory tracking can stay unchecked. Enable it only if you want Shopify to track stock levels. [L0036, 2020-26]
- **Google Shopping and out-of-stock items:** [L0667, 2025]
  1. In Shopify admin, open Products and turn on inventory tracking for the product or variant.
  2. Set the inventory of the out-of-stock variant to zero so it stops showing on Google Shopping.
  3. Set the inventory back above zero once the item is back in stock.
- **Sync apps:** if supplier inventory is not fully integrated with the store, do not rely on Shopify inventory-sync apps. Update stock manually only for a bestseller that will sell out that day. [L0359, 2020]
- **Bulk stock update** [L0276, 2024]
  1. Export your product CSV from Shopify.
  2. Edit the inventory columns in Google Sheets or a spreadsheet.
  3. Save the updated CSV.
  4. Reimport into Shopify.
  5. Select "Update existing products" (not "Create new").
  6. Complete the import. All selected products update without creating duplicates.
- **Inventory values:** must be numbers. [L0538, undated]
- **Inventory defaults:** if supplier data has no inventory quantities, ChatGPT defaults inventory to 0 for all products. Before importing, instruct ChatGPT to update inventory values from the supplier data, or edit the spreadsheet manually after downloading. [L0106, 2020-26]

### SKU and identifier rules

- Suppliers' SKUs with dashes: search for the SKU with the dashes in quotation marks. Keep the dashes only if your future competitors use them. [L0855, 2023]
- Product titles include the SKU or model number where this helps buyers find the product. See the title section below. [L0360, 2024]

### Variants and options

**Basics**
- Variants are not needed for demo products. [L0036, 2020-26]
- Use variants for real products when customers can select different options, such as colours or sizes, from a dropdown. [L0036, 2020-26]
- Four colours of the same product are one product, not four. Count variants as part of a single product SKU. [L0270, 2021]
- The variant shown first on a product page is the top variant in the list. Reorder the list to change the default variant. [L0471, 2024]
- Native Shopify variants with colour names are what add the chosen colour to the cart. Swatch apps only change how the options look, so set up native variants first. [L1116, 2025]

**Adding variants in the admin** [L0430, 2023]
1. Open the product in the Shopify admin.
2. Scroll to the Variants section and add option names such as size or colour.
3. Enter the option values, then set price, SKU and inventory for each generated variant.

**Bundle or discount on some option combinations** [L0255, 2025]
1. Create a separate product variant for the bundle combination.
2. Name the variant to show which options it includes (for example "Option 1 + Option 2").
3. Set the price as the discounted price.
4. Customers select this variant to get the discount automatically, rather than selecting individual options.

**Free add-on as a variant** [L0577, 2023]
- Open the product's listing and add the free add-on as a variant. One variant is typical.
- Use the app that connects to the supplier to map the add-on, so both items reach the supplier in a single order.

**Option types and apps**
- Shopify allows only three option types per product. When native option types are not enough, use a product options app. [L0853, 2021]
- Use variations for versions of the same product, such as size. Use separate add-on products for extras, such as a monitor arm. [L0853, 2021]
- Product options and variants within one listing can be added with the app "Product Options" (formerly Bold Product Options, now SC Product Options). [L0971, 2024]

**Reducing a large variant range** ** [L1002, 2019]
1. Install Bold Product Options and work through its setup training, which takes some time to learn.
2. Ask the supplier for its best-selling colours and variants.
3. List roughly 10 to 20 top options on the website instead of all of them, since too many choices can stop buyers from purchasing.
4. Add the chosen variants to the site with Bold Product Options.
- Many near-identical shades, such as ten different reds, confuse shoppers and lower conversions. Trim the variant list to the best sellers. ** [L1002, 2019]

**Variants and SKUs on the page**
- Product pages with colour variants that have different SKUs: list the SKU numbers in a section under the main description. Put the SKU in the product title only when each variant has its own product page. [L0962, 2021]
- If a product has two or more options with different SKUs, choose between one product page with a dropdown and separate pages by checking how the top two or three competitors list it. Match their approach. [L0835, 2023]

**Add-ons**
- Cheap add-on products should not get their own product pages and should not be in the product feed. Offer them only as add-ons on the main product pages. [L0962, 2021]

**Variant rows in a CSV**
- Each extra variant is its own row that repeats the same Handle. Each variant row carries its own SKU, price, inventory quantity and option values. [L0538, undated]

### Product titles

**Default format**
- Default product title format: supplier or brand name, product name, then dash and SKU number (for example "Brand Product Name - 1234"). Check the top three competitors' naming, and adopt their format if it works better. [L0834, 2021]
- Product titles should include the brand name and the product name, and may also include a model or SKU number. The exact order and extra elements differ by brand, so copy the format of the top resellers for each brand. [L0551, 2020]

**Matching resellers**
1. Pick the brand and the product you plan to upload.
2. Search for the product on Google and find the top one or two resellers.
3. Note their title format, such as product name only, product name by brand, or brand plus product name plus SKU or model number.
4. Use the same title format on your site for that brand when uploading products. [L0551, 2020]

**Include the SKU or model number**
- Product titles should include brand name, product name and SKU or model number. Shoppers who search those exact terms are the ones who buy, and that search traffic is worth capturing. [L0360, 2024]

**Short search-matched titles** **
- Formula for supplier-imported titles: [brand] + [main colour or variant] + [core product type]. The long technical name from the supplier is shortened to the words buyers type into Google. Size, material and full specifications move to the description. Examples: "Coleman blue two-person tent" and "Weber black gas grill". This works because short, search-matched titles fit how shoppers search in Google Shopping. [L1085, 2018]

**Where the rules differ:** the 2024 and 2021 sources include the SKU or model number in the title [L0360, 2024; L0834, 2021]. The 2018 source uses a short title with the specifics moved into the description [L1085, 2018]. Use the competitor check [L0551, 2020] to decide between them for each brand. Keep the SKU in the title where the top resellers do.

### Descriptions and copy

**Launch and rewrite**
- Use supplier descriptions at launch. Rewrite the highest-traffic product pages later, with original copy in your brand voice. Rewriting every page at the start is not worth the time. [L0970, 2023]
- Launch with the supplier descriptions. Once traffic arrives, use Google Analytics to find the top 20% of product pages by visits. Hire a freelancer on Upwork to rewrite only those pages. Do not spend a large budget on e-commerce copywriters before you know which pages matter. ** [L1110, 2019]
- Upload products in bulk first to create a starting point. Then go through each product page and optimise it for the customer. ** [L1109, 2018]
- Load product descriptions in bulk through CSV uploads instead of managing them through a third-party description app. This keeps the store faster and reduces app dependencies. [L0853, 2021]

**Source text and AI text**
- AI writing tools can produce product descriptions. Use the output as notes and rewrite it by hand rather than publishing it unchanged. [L0970, 2023]
- AI-generated descriptions often invent materials, sizes, certifications or warranties for a product that does not yet exist. Each specification must be confirmed by the supplier before the page goes live. Otherwise returns and chargeback disputes become likely. [L0535, undated]

**Prompt: product listing for a photo** [L0535, undated]

```
Act as a seasoned eCommerce copywriter who builds high-converting Shopify listings for upscale goods. I'll send a sample photo of an item I'm considering listing. It isn't a real product yet, so infer its details from the picture and assume realistic specifics. Deliverables: (1) Devise a luxurious-sounding title that works as a brand, matches what the photo shows, suits a Shopify storefront, steers clear of trademarked or established brand names, and conveys reliability and professionalism. (2) Draft a complete listing: a brief opening paragraph centered on customer benefits; a 'Key Features' list of 5 to 8 bullets; a 'Why You'll Love It' or 'Benefits' block; a plausible, internally consistent 'Specifications' block; and a concise closing paragraph that nudges the reader toward buying. (3) Provide SEO metadata: a meta title no longer than 60 characters, a meta description no longer than 155 characters, and 3 to 5 search terms that fit the item. (4) End with a list headed 'Assumptions to verify with supplier' that names every material, dimension, color, capacity, function, or feature you inferred from the photo. None of these inferred items may appear in the listing as established fact. Voice: businesslike, self-assured, precise, upscale, ready for Shopify, aimed at sales rather than filler. Ground rules: where the photo is ambiguous, choose the most sensible assumption; treat the item as coming from a dependable supplier of good quality; the goal is a listing that impresses suppliers and looks ready to launch; never fabricate certifications, guarantees, test outcomes, or awards. Formatting: clean and Shopify-friendly, with headings and bullets, easy to scan, no emoji, no overblown hype. Output sequence: product title, meta title, meta description, keywords, product description (sections in the order of point 2), then the supplier verification list.
```

[L0535, undated]

**Pasting supplier text without hidden code**
- Copying description text straight from a supplier website carries hidden HTML code into the product page and can break the whole page. Supplier text may also contain Heading 6 tags that clash with your own structure. [L0921, 2022]
- Procedure: [L0921, 2022]
  1. Copy the supplier description into a Word document.
  2. Retype or clean the text there so no hidden formatting remains.
  3. Paste the clean text into the Shopify rich text editor.
  4. Apply Heading 6 and other headings using the rich text editor buttons, not by pasting supplier headings.
  - Alternatively, paste through an app that strips the code automatically if you are not comfortable with HTML.

**Search listing (SEO)**
- The search engine listing section takes the first paragraph of the product description by default. Edit it with product page SEO best practices so the listing describes the product clearly. [L0806, 2024]

**Spec sheets and contact details**
- Before attaching a supplier's spec sheet to a product, remove the supplier's name and phone number so customers contact your business instead. For simple edits, Canva is enough. [L0808, 2026]

**Bulk-edit descriptions**
- Procedure, for example to remove warranty links: [L0971, 2024]
  1. Export all products from Shopify as a CSV. The export does not change the store.
  2. Use find-and-replace in Google Sheets or Excel to remove the text.
  3. Import the CSV back into Shopify. It updates existing products and does not create duplicates.

**Supplier text reused from a standard template**
- Keep the product page's titles and descriptions matched to their own product rows when uploading a CSV. A mismatched title or description creates wrong orders and angry customers. [L1111, 2020]

**Regional sizing**
- When selling to US customers, convert supplier sizes, such as European numbering, into US sizes and keep the size chart simple. Mismatched size formats make US buyers hesitate. [L0352, 2022]


Part 29 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/28-done-for-you-build-option.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/30-product-media.md
