<!-- part of ecom/deep/04-store-build-and-shopify.md -->
Part 32 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/31-manual-product-creation.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/33-variant-descriptions-and-variant-selection.md

## Product page design and templates

### Product page structure and conversion layout

- Build the product page in this order: product title and images, a bold Buy now or Shop now button directly under the product with an Add to cart button above it, bundles, upsells and urgency elements, a short description with bullet points (more images than text, simple words), customer reviews, then the footer. [L0352, 2022]
- Customers land on product pages rather than separate landing pages, so optimise each product page as the main landing page and build it to convert traffic directly. [L0468, 2020]
- Once ads are running, send traffic to the product page rather than the homepage, because visitors can see the product and buy it immediately. [L0562, undated]
- For a quick test, a minimal viable landing page is enough. Get the page live and tested first, and improve it from customer feedback after launch rather than aiming for a perfect design first. [L0552, 2023]
- Shopify's Dawn theme includes an instant add-to-cart button for collection pages. Enable it in the theme settings; no app is needed. [L0562, undated]
- Place the satisfaction guarantee high on the page, after the key product information, so it reduces purchase risk early. Visitors close to buying often wonder what happens if the product disappoints. [L0524, 2023]
- Show scented or sensory products in a context that suggests the experience, such as on wood or among natural elements. Product images should be sharp and show the product in use. [L0524, 2023]
- Use tabs to compress long information instead of forcing a long scroll. Keep purchase options, reviews and key facts easy to reach from the top. [L0524, 2023]
- Add a question section below the reviews and keep the brand answering questions. This shows active support and gives visitors answers without leaving the page. [L0524, 2023]
- Show the offer clearly: product price, local shipping and delivery time, and bundle deals. State that stock is held in-country. [L0492, 2023+]
- Competitor copying: copying a competitor's product page exactly can outperform a heavily edited version in some stores, with higher CTR and lower CPM. In one case, extra editing and polish reduced sales. Results vary by product. [L0660, 2019+]
- Test each added feature (for example a sticky add-to-cart bar, a gift option or colour swatches) separately to see whether it increases sales, and check these features when comparing themes. [L0709, 2017+]
- Include product identifiers such as SKU, UPC or part number in a dedicated section, so customers can search for the item by part number. [L0855, 2023]
- For fashion stores, add a size guide. Size problems were a likely cause of a chargeback on one fashion store even though a size guide was present. [L0660, 2019+]

### Mobile product pages

- A long block of text before the product image on mobile hurts the first impression. Lead with visuals and the buy action, not paragraphs of details. [L0530, 2022]
- Mobile needs an adaptive layout that rearranges content for the device, not a shrunk desktop page. Keep the product name, what it does or smells like, testimonials and the quantity selector above the fold. [L0524, 2023]
- Check the mobile version of a page separately from desktop. Sections, images and paragraphs may display differently or be missing on mobile. Cross-check and add missing elements to the mobile layout. [L0321, undated]
- When a PageFly product page differs between desktop and mobile, check each section on both versions. Where layouts differ, apply the same customisation on mobile by selecting the image and pasting the text. [L0363, 2022+]
- Layout options in the Shopify theme editor: 3 columns, 2 columns with medium image, and a further 2-column option. The 3-column layout shows as multiple columns on desktop only; mobile always stacks into one column. A two-column layout with a medium image is the traditional e-commerce layout and a sensible default. [L0370, 2021-22]

### Headline, offer and trust elements

- Standard Shopify product page: the product title stays the H1 for SEO and sits at the top with price and image. The headline placed above the product description becomes the H2 and must not replace the product title. [L0416, 2021-22]
- Traditional sales page: the headline is the H1 and the first element a visitor sees. The price usually comes at the end of the sales message on this page type. [L0416, 2021-22]
- Landing pages need a strong offer, several trust elements such as reviews and guarantees, and persuasive copywriting. The source refers to five key elements but does not list them. [L0637, 2023+]
- Free gift on a product page:
  1. Lead the product description with text about the product, because search engines read the opening text.
  2. Below the main text, embed a large image that says the gift is free, shows the gift and states its value.
  3. The image should make clear the customer receives the gift free when ordering from the store. [L0469, 2021]
- Product-page graphics such as feature icons can be made by a designer and hard-coded into the site instead of installing an app. Back up the code before editing, or hire a developer on Upwork to do it. [L0469, 2021]
- Duplicated description text (the same text appears in the description and the specifications section): contact a Shopify developer. Find Shopify-certified developers on Fiverr.com or StoreTasker.com, and check spam folders for replies. [L0276, 2024]

### Product information settings (theme editor)

- Product Information block, recommended settings:
  - Enable sticky content on desktop: On
  - Desktop media width: Medium
  - Constrain media to screen height: On (Original)
  - Advanced settings are not needed at this stage. [L0104, undated]
- Product Information subsection settings:
  - Variant Picker: Pills
  - Quantity Selector: Enabled
  - Sharing buttons: Enabled
  - Description placement: Next to Add to Cart button
  - Buy Buttons: Show dynamic checkout buttons: On
  - SKU label: "SKU" [L0104, undated]
- Price on product pages cannot be hidden. When a Compare-at price is set, it automatically displays crossed-out pricing to show the discount. [L0104, undated]
- The product title is pulled from the product name and cannot be edited in the theme customizer. The vendor field is dynamic and updates automatically when real supplier brands are added. [L0104, undated]
- For demo stores, hide these Product Information subsections: Expiring Coupon, Estimated Delivery, Promo Image/Sale Banner, Inventory Status and Trust Badges. [L0104, undated]
- Related Products section: it displays "You may also like" and lets you edit section text, layout, colours and number of products shown. For demo stores, use the eyedropper/hide icon to hide it temporarily and re-enable it later. [L0104, undated]
- Stock levels on product pages:
  1. Open Online Store > Themes > Customize.
  2. Use the drop-down at the top (Home page) and choose Products > Default product > Product information.
  3. Click the eye icon next to Inventory status to hide it.
  4. Do not delete the element, so it can be restored later. [L0472, 2025]
- Inventory numbers can be entered in Shopify even when they are not live. A placeholder value per product (for example 10 or 100) lets the inventory status be hidden on product pages while the back end still tracks stock. [L0472, 2025]
- Shopify has no built-in field for product availability dates. Add the availability or backorder date as text on the product page. [L0468, 2020]
- Shopify free-shipping badge: go to Online Store > Themes > Customize > Products, select a product and look for free shipping under availability. If it is not there, it may have been added to custom code or another setting, so ask Shopify support. [L0856, 2024]
- Product page template edits for notes: under the theme's product template, add a note near the Add to cart button. For a back-order note, insert it in the product template near that button. [L0856, 2024]
- PDF manuals: upload the file to the Files section in Shopify, then add a link to it on the product page or in the description. [L0249, 2022]
- Product comparison table: build a simple table with attributes in rows and products in columns. No specialised app is required. [L0245, 2020]
- Editing product templates: in the theme editor, the product template shows as Default product. Add, remove or reorder the variant selector, quantity selector, product recommendations and announcement bar in the sidebar, then preview before publishing. [L0600, 2026]
- Customising colours with custom CSS (for example the colour of struck-through MSRP prices):
  1. Ask ChatGPT or another AI tool to generate CSS for the specific change.
  2. Copy the generated CSS.
  3. In Shopify, go to Online Store > Themes > Customize > Custom CSS.
  4. Paste the CSS and save and publish. [L0255, 2025]
- Quantity selector: if a supplier sells in a fixed quantity, set the default quantity selector to the most common purchase amount. Base the default on what top competitors show. [L0834, 2021]

### Product information: custom input, files and line item properties

- The file upload option in the theme lets customers upload files directly from the product page, for example a design or photo for a custom product. This avoids a separate app for collecting files. [L0709, 2017+]
- Line item properties store customer input, such as an engraving name, and display it on the Shopify order. A standard supplier order usually carries only variant details, so the property must be mapped to the supplier's API to reach them. [L0709, 2017+]
- Line item properties can be generated dynamically from Shopify metafields, which store extra product or customer data. The supplier's system must recognise the parameter it receives, or the data is lost. [L0709, 2017+]
- Developers are still needed for complex functions such as a bundle builder, which page builders like Replo and PageFly generally cannot produce. Simple landing pages and stock themes with page builders can be enough for brands that do not focus on branding. [L0709, 2017+]
- A simple custom engraving or name field built by a developer was roughly estimated at about $30. A complicated setup or a poorly built theme can cost much more. This figure is a rough guess, not a quote. [L0709, 2017+]

### Descriptions and formatting

- Expandable sections in the Manhattan theme (Heading 6):
  1. Shopify Admin > Products > select the product.
  2. Highlight section headers (for example Key Features, Why You'll Love It, Specifications).
  3. Change the heading format to Heading 6 (H6).
  4. Remove divider lines between sections.
  5. Click Save. [L0104, undated]
- Heading 6 creates expandable sections in the Manhattan theme. This keeps long descriptions readable and organised. [L0104, undated]
- Creating expandable tabs with Heading 6:
  1. In the product description editor, highlight a section heading (for example Description).
  2. Click the formatting dropdown (currently showing Paragraph).
  3. Select Heading 6.
  4. Click Save.
  5. Repeat for other sections (Key features, Specifications).
  6. Click Preview. Sections now collapse and expand when clicked. [L0036, 2020-26]
- Heading 6 formatting with Manhattan presents long product information cleanly without overwhelming customers. It improves both usability and page digest. [L0036, 2020-26]
- Expanded state in Manhattan: the first section (the description) displays expanded by default. All other sections display collapsed and expand only when clicked. [L0036, 2020-26]
- Optional Description toggle: add a new heading labelled Description, set it to Heading 6, and place it above the main product description. [L0104, undated]
- Theme customisations apply to all product pages:
  1. Shopify Admin > Online Store > Themes > Customize.
  2. Change the page selector from Home page to Products > Default Product.
  3. Make customisations, which then apply to all product pages. [L0104, undated]
- ChatGPT-generated descriptions with bullet points often display with misaligned or badly spaced bullets when pasted into Shopify's description editor. Fix this by highlighting the affected text, removing the bullet formatting from the editor menu, and reapplying the bullets. [L0219, 2020-26]
- Copywriting prompt (2024):

```
Please act as a direct response copywriter. Write a product description for [product name] and/or [product URL] using this format: a headline; a one to three sentence description; a features and benefits section; and bullet points. Base every feature and claim on the supplier information provided, and do not invent specifications.
```
[L0360, 2024]

Note: the prompt above is the verbatim text of [L0360, 2024]; [L0360, 2024] covers the custom-made product page that uses the description.

- Product description template (seasonal one-size product, 2026). Fill every bracket with facts about the product and your actual policies before publishing:

```
[PRODUCT NAME] is one of the best [PRODUCT TYPE] for [SEASON]. [MATERIAL AND FEEL, e.g. soft, warm, high quality]. [SIZE STATEMENT, e.g. one size that fits most adults, stated only if true]. [RETURN AND EXCHANGE PROMISE, only if your policy supports it]. [SHIPPING TIME, e.g. fast shipping to the USA].
```
[L0347, 2026]

- Product description template (core strengths and technical details). Replace the bracketed fields with product facts:

```
The [Product Name] merges durability, practical utility, and contemporary design to address [specific need or use] with reliable performance and extended product longevity.

Core Strengths:

Robust Material Composition: Fabricated from premium-grade [material] engineered for sustained use and extended lifespan.

Adaptable Use Cases: Performs effectively for [common use] while remaining suitable for [secondary uses].

Refined Aesthetic: Incorporates current design trends with a clean profile that integrates naturally across different environments.

Accessible Operation: Straightforward to use with included documentation for setup and reference.

Environmentally Responsible Manufacturing: Produced using sustainable methods designed to reduce ecological footprint.

Technical Details:

Size: [Length] x [Width] x [Height]

Mass: [Weight]

Composition: [Material Type]
```
[L0091, undated]

### Expandable tabs, accordions and policy blocks

- Typical product page tabs: description, specifications, shipping info, warranty and price match guarantee. Copy the supplier's warranty text, but swap the contact email for your own. [L0808, 2026]
- Built-in tabs: the new Charlotte theme includes product tabs, so no tab app is needed. An alternative tab app costs about $5 per month. [L0665, 2022]
- Tabs built with the theme's own code keep the page lighter and faster. Use apps only for features too hard to code directly. [L0853, 2021]
- Accordion setup in Visually:
  - Auto-expand the details accordion on page load only for first-time visitors.
  - Leave the details collapsed by default for returning customers.
  - Implementation requires 3 clicks in Visually. [L0197, 2025-26]
- Policy blocks in the Manhattan default template (2024):
  1. Shopify Admin > Online Store > Themes > Customize.
  2. Change the dropdown from Homepage to Products.
  3. Click into the Default Product template.
  4. Click Add Block and select Collapsible Row.
  5. Drag it under the product description.
  6. Change the title to Shipping Policy or Price Match Policy.
  7. Add the content text in the editor.
  8. Choose an icon (checkmark, heart, etc.).
  9. Click Save.
  10. Repeat steps 4 to 9 for additional policies. Because this is the default template, it applies to all product pages. [L0253, 2024]
- Policy information (2025): to add policy information, go to the theme editor, click customise, select the collection or product template and add sections using rich text or collapsible content. Include financing, customer support, return policy and price match information as expandable sections. Drag them below the product images and save. [L0255, 2025]
- Accordions can hold an extra paragraph, such as a free shipping reminder placed below the description and dimensions. This is a theme-level change and usually needs the theme developer. [L0855, 2023]
- Tabs on product pages compress long information and keep purchase options, reviews and key facts near the top. [L0524, 2023]
- Duplicated descriptions in the default product layout: see [L0276, 2024] under Product page structure.

### Supplier-specific product page templates

- Create a template per supplier:
  1. In the theme editor, click the Default product template.
  2. Click Create template.
  3. Name the template after the supplier (example: Brand B).
  4. Base it on the Default product template.
  5. Save the new template.
  6. Expand Product information.
  7. Enable and edit the Estimated delivery settings.
  8. Set a custom delivery window for this supplier (example: 7-14 days).
  9. Save changes. [L0139, undated]
- Assign the template to products:
  1. Go to Shopify Admin > Products.
  2. Select a product from the target supplier.
  3. Scroll to the Theme template field.
  4. Select the correct template name for that supplier (example: Brand B).
  5. Save the product. [L0139, undated]
- Product templates control estimated delivery dates, coupon display variations and other layout and content changes as needed. [L0139, undated]
- Slower or custom-made products that cannot be returned: go to the theme editor, duplicate the default product page template, rename the copy (for example custom made or supplier), change the delivery estimate and returns text there, then assign that template to the affected products. [L0360, 2024]
- Shipping or lead-time differences:
  1. In the theme code, duplicate the product page template.
  2. Give the copy a clear name, such as product page template followed by a number.
  3. Change the tabs or shipping-date information in the copy.
  4. Assign the new template to the products with longer shipping times. [L0671, 2021]

  Note: [L0671, 2021] and [L0671, 2021] are identical units and are merged here.
- Warranty templates (2024):
  1. Go to Shopify Admin > Online Store > Themes > Customize.
  2. Switch to Products.
  3. Click Create Template.
  4. Name the template after the supplier and warranty type (for example Supplier ABC 90-day).
  5. Click Create Template.
  6. Add Block > Collapsible Row.
  7. Rename it to Warranty Information.
  8. Add the warranty details in the content editor.
  9. Save.
  10. Repeat for each warranty duration (90-day, 1-year, 3-year, 5-year).
  11. Assign each product to the correct template from the template dropdown on the product page.
  12. Multiple templates allow different warranty information on different products. [L0253, 2024]
- Product page template without free shipping (2025):
  1. In the theme customizer, open the product page template.
  2. Click Default product, then Products, scroll to the bottom and click Create template.
  3. Name the new template, for example no free shipping.
  4. Change every reference to free shipping on the page (such as an offer saying free shipping) to a different offer, for example 10% off.
  5. Save and check the page for any other free shipping references.
  6. Assign this template to all products from the brand that cannot ship free.

  The announcement bar can still say that most products ship free. [L0857, 2025]
- Free-gift offer placed elsewhere on the page (2025):
  1. Go to Products and create a template based on the default product page, named for the offer.
  2. Click Add section, choose Image with text and drag it to the desired position.
  3. To add a block under the discount code, hover over the expiring coupon block, click the plus and add a block with text or custom liquid.
  4. Save, then assign the template to the products that should show the offer. [L0667, 2025]
- Shipping selection dropdown: default to free curbside drop-off at $0, with paid options such as in-home delivery at $100 and second-floor delivery at $300, explained next to the dropdown. [L0663, 2019]
- Copy warranty text from a supplier but swap the contact email for your own. [L0808, 2026]


Part 32 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/31-manual-product-creation.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/33-variant-descriptions-and-variant-selection.md
