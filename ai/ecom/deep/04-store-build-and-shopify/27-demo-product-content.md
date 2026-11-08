<!-- part of ecom/deep/04-store-build-and-shopify.md -->
Part 27 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/26-demo-store-for-supplier-approval.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/28-done-for-you-build-option.md

### Demo product content

#### Descriptions
- Demo product descriptions can be identical across products, using a generic template with placeholders swapped out for each product. Do not overthink the creation process. [L0036, 2020-26]
- Demo product example: name Aloha Blue Longboard Surfboard, weight 13 pounds, with description, key features, and specifications populated from a provided template. [L0036, 2020-26]
- Do not use Lorem Ipsum for product descriptions on demo stores. Write basic but genuine sentences describing actual product attributes and benefits. Older (2020). [L0245, 2020]
- Older (2020) example sentence, given in italics: *This blue eight-foot surfboard accommodates up to 150 pounds and is great for enjoying water activities during favorable weather.* [L0245, 2020]
- Demo product descriptions can be basic placeholders. They do not need persuasive copy at the supplier-approval stage. [L0855, 2023]
- A one- to two-line description lets the supplier picture its product on the site. Do not optimize for sales or conversions. Older (2018). [L1085, 2018]
- Demo products do not need materials, dimensions, technical specifications, or detailed descriptions, since customers cannot buy them. Generic product descriptions are sufficient. Older (2020). [L0268, 2020]
- Mock product descriptions and images can be taken from images labeled for reuse in Google image search, combined with basic descriptions. Older (2020). [L0967, 2020]
- Supplier product descriptions may be used for demo or test products only if they come directly from the brand. Search a sentence from the description in Google; if it appears on many sites, it is the brand's stock text. Older (2019). [L0467, 2019]
- Copying a description that someone else rewrote or paid for, to make it look unique, creates a copyright problem. Write your own description, or use the brand's original text. Older (2019). [L0467, 2019]
- Do not present a demo product as stock you are selling, and do not write a long invented story about it. The demo page only shows suppliers how their product could look on the site. Older (2018). [L0466, 2018]
- Rich text is not needed for supplier approval and can be hidden. Turn it on later for brand story or promotion content once the store is live and the unique value proposition is clear. [L0775, 2020-26]
- Product reviews, vendor names and secondary images need product data that a demo store does not have yet. Leave those options off until the store has the content. [L0775, 2020-26]

#### Names, prices and vendor
- Name pattern: size, product type and color. Example: a clear, descriptive title. Older (2018). [L1085, 2018]
- Example: seven foot blue standup paddle board. Demo products do not need invented brand names or elaborate descriptions. The brand name can be the store name. Older (2021). [L0834, 2021]
- Do not invent a company or brand name that does not match the picture. Older (2019). [L0356, 2019]
- Demo products may have made-up names and invented prices, since they are placeholders and not meant to be sold. [L0767, 2020-26]
- Demo products should be generic items from the same category as the niche, for example a lamp or candlestick for a chandelier store. This lets a supplier see what the catalog page for that category would look like. [L0767, 2020-26]
- Price: use $799 for demo products. [L0219, 2020-26]
- Price: the price can be anything; image size or editing does not matter, because demo products will be deleted later. [L0452, 2021-22]
- Price: the exact price is not critical for demos. [L0088, undated]
- Show average prices and generic inventory numbers on the demo store before launch. Cart is disabled, so no purchases occur. Older (2022). [L0272, 2022]
- Hide discount codes and inventory levels, so suppliers do not see broken or unfinished elements. [L1189, 2020-26] *(Conflict noted below.)*
- Vendor for a demo: your store name. [L0036, 2020-26; L0069, undated]
- Vendor for a demo: your own company name, since it does not matter for demonstration. [L0452, 2021-22]
- Supplier name field: enter your own store name instead of a real supplier's name. Older (2019). [L1069, 2019]
- Conflict on displayed prices and inventory: [L0272, 2022] (2022) says show average prices and generic inventory numbers; [L1189, 2020-26] says hide inventory levels and discount codes. Applies: show plausible generic figures if you want the catalog to look realistic ([L0272, 2022], older); hide them if the goal is to keep the page free of unfinished elements ([L1189, 2020-26]).

#### Featuring brands
- Do not feature products from brands you are not yet authorized to sell. Add products to the live store only after the supplier has approved you. [L0276, 2024]
- Demo products are temporary placeholders, removed and replaced with real supplier products once you have brand partnerships. [L0088, undated]

#### AI-assisted content workflow

*Full prompt texts are not part of the source units. Only the opening lines are given, in italics.* [L0088, undated; L0219, 2020-26]

Procedure: Demo product with AI prompts [L0088, undated]
1. Retrieve the image prompt that begins *You are a professional e-commerce product photographer*. Customize it by inserting your product name (for example, Blue Surfboard). Generate the image using Gemini or another AI image generator, then download it.
2. Separately, obtain the description prompt starting with *You are a professional e-commerce copywriter*. Enter it into ChatGPT or your preferred AI tool, and attach the generated product image so the AI can observe realistic details before writing.
3. Copy the resulting product description.
4. Log into Shopify admin, go to Products, and click Add product.
5. Enter your product name in the Title field.
6. Paste the AI description into the description editor, and use Preview to check formatting.
7. If bullets are misaligned, select the bulleted text, remove bullets, reapply them, and preview again.
8. Upload the generated image into product media. One image is sufficient for demos.
9. Select an appropriate category (such as Surfboards).
10. Set a demo price. The exact price is not critical for demos.
11. Specify the product type (such as Surfboards).
12. Add the tag that connects to your automated collections so the product is positioned correctly.
13. Save the product and preview it to confirm the formatting is correct.
14. Repeat this entire workflow (steps 1 to 21) until you have created 10 to 20 demo products.

Procedure: 32-step product workflow [L0219, 2020-26]
1. Access gemini.google.com, click Create Image, paste the complete one source Image Prompt that starts with *You are a professional e-commerce product photographer creating images for a premium Shopify store*, replace product name goes here with your product, and download the result.
2. Enter ChatGPT with the full Demo Product Description Prompt beginning with *You are a professional e-commerce copywriter specializing in high conversion Shopify product pages for premium products*. Use Add photos and files to attach your Gemini image, and submit.
3. Open Shopify Admin and navigate to Products. Click the Add product button in the top right corner.
4. Insert your product name in the Product Title field.
5. Paste your ChatGPT description in the Description field through the WYSIWYG editor, and click Save.
6. Preview the page and look for formatting problems such as misaligned bullet points. If you find any, go back to the editor, select the affected text, remove the formatting, reapply it, save, and preview again until the formatting is correct.
7. Set the Gemini image as the main product image.
8. Fill the Product Category field.
9. Set the Price field to $799.
10. Set the Product Type field to match your category.
11. In the Collections section, select your tag-based automated collection.
12. Save the product, and review your final product page with a preview.
13. Repeat all preceding steps 10 to 20 times across your product range.

Example: a completed demo product with title Aquila Coastline Longboard, price $799, category surfboards, one AI-generated image, a professional description generated by ChatGPT, and collection assignment through tags. [L0219, 2020-26]

### Setting up demo products in Shopify

#### Upload procedure
Procedure: Uploading a demo product to Shopify [L0036, 2020-26]
1. Go to Products > Add products.
2. Enter product title.
3. Paste and customize the product description from the template.
4. Select product category from dropdown.
5. Enter product type.
6. Enter vendor (store name for demos).
7. Add tags (auto-populates collections).
8. Drag product image into media section.
9. Enter selling price, compare-at price, and cost per item.
10. Leave inventory tracking unchecked (unless tracking stock).
11. Enter SKU if provided.
12. Enter product weight.
13. Skip variants for demos.
14. Click Save.

Procedure: Competitor-copy route, one source [L0452, 2021-22]
1. Open the source product page on the competitor site.
2. Copy the title and paste it into the Title field in Shopify.
3. Copy the description and specifications and paste them into the Description field.
4. Save the source images, using no more than two per product, and upload them with Add file under Media.
5. Enter the price, optionally the compare-at price.
6. Set the product type, vendor, tags and status, and tick Online Store.
7. Set the quantity and tick the physical product box, then save.

*Conflict: this route copies images from a competitor. [L0036, 2020-26] and [L1462, undated] forbid this. See the legal rules above.* [L0452, 2021-22; L0036, 2020-26; L1462, undated]

#### Settings reference

| Setting | Where | Demo rule | Ids |
|---|---|---|---|
| Product status | Product editor | Set to Active to show the product on the storefront. Draft hides it from all sales channels. New products are created as Draft by default. | [L0452, 2021-22] |
| Online Store | Sales channels and apps | Must be ticked. Without it, an Active product still does not appear on the front end. | [L0452, 2021-22] |
| Product type | Organization section | Use the name of the collection the product belongs to, for example Solar Power. It must match the collection so the product is grouped correctly. | [L0452, 2021-22] |
| Vendor | Organization section | Your own company name is fine for demos. | [L0452, 2021-22] |
| Tags | Organization section | Several tags per product are allowed. The tag must match the collection name, for example solar. | [L0452, 2021-22] |
| Price | Pricing | The price customers see. | [L0452, 2021-22] |
| Compare at price | Pricing | The original price, shown struck through next to the sale price. Enter a higher value here than in Price to display a sale. Example: Price A$ 2,350.00 with Compare at price A$ 2,450.00. | [L0452, 2021-22] |
| Charge tax on this product | Pricing | Tick if you need to charge tax in your country. For demos, tax can be left for later. | [L0452, 2021-22] |
| Track quantity and Available quantity | Inventory | Tick Track quantity and set Available quantity above zero, for example 10. At zero, Shopify shows the product as out of stock. | [L0452, 2021-22] |
| SKU and Barcode | Inventory | Can be left empty for demos. Enter SKU if provided. | [L0452, 2021-22; L0036, 2020-26] |
| This is a physical product | Shipping | Tick it. Weight, customs information and HS code can be skipped for demos. | [L0452, 2021-22] |
| Media | Media section | Add file from the computer or Add media from URL. In a browser, right-click a source image to use Save Image As or Copy Image Address. | [L0452, 2021-22] |
| Template suffix | Theme templates | The default product template can be left unchanged while the first demo products are uploaded. | [L0452, 2021-22] |

#### Mistakes and checks
- A product with status Draft is not shown on the storefront. A product with Active status but without the Online Store checkbox ticked is not shown either. Check both before expecting a product to appear. [L0452, 2021-22]
- A product with a quantity of zero and tracking on displays as out of stock. Always set a quantity when Track quantity is ticked. [L0452, 2021-22]
- Preview in Shopify shows how a saved product appears on the site. Before the site is designed, the page can look unfinished, but the preview confirms that the product data has loaded. [L0452, 2021-22]
- Do not manually assign demo products to collections. Use the automated tag-based collections created earlier in store setup. [L0219, 2020-26]
- Time: four products took about 10 minutes. [L0452, 2021-22]

#### Theme settings for demo products
- Skip customizing pages and blog templates in the Shopify theme editor. This can wait until the store is live and needs more individual content. [L1265, 2020-26]
- For a basic demo store, only the sticky content and media settings in the Product information section need changes. The other settings can stay at their defaults until the store is ready for live products. [L1189, 2020-26]
- Hide promotional elements and coupons. Keep product pages clean and simple, with professional layout, clean navigation and functional pages. [L0104, undated]
- Hide features that are not yet needed, such as discount codes and inventory levels. At the demo stage, all links should work and every function should behave correctly. [L1189, 2020-26]
- Minimum theme elements: see the minimum set in the first section. Defer announcement bars, mega menu details and advanced product card settings. [L0775, 2020-26]

### Pre-launch checklist before supplier outreach

Procedure: Supplier-ready store checklist, in order [L0767, 2020-26]
1. Buy a domain name in Shopify and connect it to the store.
2. Remove the demo-store notification bar at the top of the site.
3. Keep the product count small: three to five demo products is enough, more is unnecessary.
4. Replace every generic or fake phone number with a real phone number, or remove the phone number entirely.
5. Delete unneeded default content such as the empty blog that Shopify creates. A blog is not required when contacting suppliers.
6. Open the About Us, Shipping and Guarantee (guarantee/returns) pages, fill in all text so it reads complete, and click every link to confirm it works.
7. Click through the site the way a supplier would and check that it looks presentable and finished.

Procedure: Pre-outreach check, 2023 [L0251, 2023]
1. Is live at your final domain (not Shopify's default URL).
2. Has all internal links working.
3. Does not contain broken pages or placeholder content.
4. Has social media links pointing to actual accounts (not default Shopify links).
5. Looks complete and professional, as suppliers evaluate your credibility based on site quality.

Procedure: Pre-outreach check, 2023 [L0804, 2023]
1. Attach your own domain name, not a myshopify.com address.
2. Remove all blank image placeholders.
3. Make sure the contact page has a working contact form.
4. Five to 10 products is enough, and checkout does not need to be enabled.
5. Remove the store password.

Rules for the checklist:
- Your store must have its own domain name. [L0123, undated]
- Display an actual phone number prominently. Suppliers view a real, reachable phone number as proof that you operate a legitimate, accountable business. [L0123, undated]
- Replace the generic phone number with a real one or remove it entirely. [L0767, 2020-26]
- All links on the store must be working. Broken links suggest neglect and undermine supplier confidence. [L0123, undated]
- The store should look presentable and appear exactly as it will when the site goes live. Do not show it to suppliers while it is under construction or contains placeholder content. [L0123, undated]
- Pre-launch quality: it must look like a real, functioning store, with no test pages, no dead links and no spelling errors. It must be trustworthy enough that a customer would buy from it. [L0964, 2023]
- Before calling suppliers, add a price guarantee page and a privacy policy page. This takes about 15 to 20 minutes using ready-made scripts or a generator. Older (2019). [L0960, 2019]
- Fill the About Us page and the shipping and returns policy page. [L0357, 2019; L0243, 2019]
- Mistakes that signal the store is not real: a demo-store notification bar, a generic fake phone number, or unfinished default pages such as a placeholder blog. [L0767, 2020-26]
- Mistake: using a Shopify subdomain such as store-name.myshopify.com in outreach or on the live store. [L0767, 2020-26]
- Costs for the checklist items: a domain name costs between 5 and 20 USD. [L0771, 2021-22]
- Build-before-contact procedure, one source [L0771, 2021-22]
  1. Set up the store on Shopify, which hosts the store on its own software so no custom platform is needed.
  2. Add branding, a logo and basic design so the site looks like a real e-commerce store.
  3. Make it a demo website. It does not have to be 100 percent complete, but it must look solid when you show it to suppliers.
  4. Use the demo site when you contact suppliers to show that the business is serious.
  5. After approval, upload the supplier's products with their data, pricing and images, then optimize the products and the website.

### Password and sales during the demo stage

#### Remove the storefront password
- A new Shopify store is password-protected by default. Remove the password in the Online Store preferences before suppliers review the store, for example before module four in the course blueprint. [L0971, 2024]
- Remove the Shopify storefront password before contacting suppliers. A live store makes the business look real and avoids an extra step for them. [L0970, 2023]
- Keep the store password off during supplier onboarding. Suppliers and pending suppliers often check the site, and a password blocks them. [L0972, 2025]
- A store with the password page still enabled looks unfinished to suppliers who visit the URL. Disable the password before sending the URL. The store can be live but unpromoted at this stage, since no ads or search visibility exist yet and checkout is not connected. [L0370, 2021-22]

#### Keep real sales off
- The store can be made live with demo products before real products are uploaded. Nobody will find it without marketing, and checkout is not connected, so no one can buy the demo products. Connect checkout only after real supplier products are uploaded. [L0370, 2021-22]
- Demo products are only for showing suppliers how their products will look. They are never sold or marketed, and they must be deleted from the account before the store goes live to customers. [L0452, 2021-22]
- Demo products left live can be pulled into the product feed, cause feed errors, and let customers check out for items you cannot sell. Delete all demo products before launch. [L1145, 2021-22]
- Shopify payment setting: go to Settings > Payments and disable all payment options so no customer can buy. Alternatively, go to Settings > Shipping and delivery and select no shipping zones, so no shipping option can be chosen. [L0856, 2024]
- To stop the store from taking orders, leave every payment method inactive so checkout cannot be completed, or set the inventory of the products to zero. Older (2021). [L0968, 2021]
- Turn off or leave unlinked the payment gateways in the Shopify admin so no real orders can be placed. Older (2019). [L0357, 2019]
- A payment processor does not need to be set up before supplier calls, because no sales are being taken yet. Older (2019). [L0960, 2019]
- Conflict on zero inventory: [L0452, 2021-22] says set quantity above zero for demo products, because zero shows the product as out of stock. [L0968, 2021] says set inventory to zero to stop orders. Applies: keep quantity above zero when the product should show as available ([L0452, 2021-22]), and use zero or inactive payments when orders must be blocked ([L0968, 2021]).

Procedure: Launch the store before suppliers are ready, 2025 [L0255, 2025]
1. Remove password from store (make it accessible).
2. Disable all payment methods so customers cannot complete purchases.
3. Add demo products to show to potential suppliers.
4. Keep demo products for first week while contacting suppliers.
5. Once first supplier is approved, upload their products.
6. Remove demo products.
7. Continue adding supplier products.

### Replacing demo products after supplier approval

Procedure: After the first supplier approves, 2021 [L0247, 2021]
1. Remove the demo products.
2. Upload that supplier's live products.
3. Keep adding products as further suppliers are approved.

Procedure: Replacement, 2019 [L1275, 2019]
1. Before supplier approval, upload about 4 to 5 demo products using stock images.
2. Get approved with real suppliers.
3. Upload the real supplier products.
4. Remove the demo products.

Rules:
- Remove the test or dummy products once the first real supplier is approved and its products are uploaded. [L0359, 2020]
- Remove the demo products as soon as real products from an approved supplier are uploaded. [L0853, 2021]
- Demo products are removed and replaced with real supplier products once brand partnerships are established. [L0088, undated]
- Remove the placeholder products as soon as the first real supplier approves. Older (2020). [L0468, 2020]
- Before contacting a supplier, leave the demo products on the store so the supplier can see how its items would look. Remove only a specific supplier's real products before contacting that same supplier, so the store does not look already approved. Older (2019). [L0356, 2019]
- Replace demo products with real products from approved suppliers as soon as they are approved. Demo products that use another supplier's photos should be deleted once that supplier approves. Older (2021). [L1112, 2021]
- A demo store can be used for real products by deleting the demo products and uploading the real ones. Older (2022). [L0969, 2022]
- Replace the stock images with actual supplier product photos immediately upon supplier approval. [L0270, 2021]
- Replace demo images with real supplier images after the first approval. [L0964, 2023]
- After launch and once suppliers are onboard, swap demo images for supplier and brand lifestyle images that show the actual products. [L1310, 2021-22]
- one source's build route: after approval, upload the supplier's products with their data, pricing and images, then optimize. [L0771, 2021-22]
- Once a supplier is approved, the store continues with its products. A small store does not need rebuilding when the niche changes. [L0247, 2021]
- Build a new demo store for each niche, rather than reusing the store for a different niche. [L0934, 2023]
- Do not feature products from unauthorized brands on the live store. [L0276, 2024]
- Demo products are placeholders, so delete them before the store goes live, and do not leave demo products live. [L1145, 2021-22; L0452, 2021-22]


Part 27 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/26-demo-store-for-supplier-approval.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/28-done-for-you-build-option.md
