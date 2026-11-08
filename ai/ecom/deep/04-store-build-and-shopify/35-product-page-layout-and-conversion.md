<!-- part of ecom/deep/04-store-build-and-shopify.md -->
Part 35 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/34-creating-and-assigning-product-templates.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/36-product-templates-for-product-types-and-suppliers.md

### Product page layout and conversion

- About 90-95% of store traffic lands on the product page, and only about 5-10% goes to the homepage or collection pages. The product page is therefore the most important page to optimise. [L1217, 2023+]
- For a niche store with many similar products, a single-product landing page usually converts better than a collection page, because it removes choice friction and continues the emotional journey from the ad. Variants can cover near-identical products. [L1158, 2023]
- Pre-fill the selector with the most popular choices so about 80% is already chosen and the customer keeps about 20% agency. This reduces the feeling of filling out a form from scratch. [L1225, 2025]
- For a variant selector with many options and product cards, start with a drop-down rather than a pop-up. A pop-up is harder to use for a complex choice and can hide the options a shopper needs to compare. [L1225, 2025]

Product page order:

1. Show the product title.
2. Show a short two to three line description that explains the product.
3. Show reviews.
4. Show the variant or option selector in a compact form, on one line where possible.
5. Place the add-to-cart button above the fold, with the price visible near it.

[L1225, 2025]

- Below the product box, add landing-page style sections that tell the brand or product story, such as multi-column, image and text, rich text or video sections. These can be built with Shopify section tools. [L1225, 2025]
- Map a product page to the proven layout in this order: a hero with title bar, brand name, rating line, product name, price with savings label, three checkmark benefit bullets and Add to Cart with payment icons. Then add a See it in action area with 3 to 6 product videos, 3 customer testimonials, feature blocks, a 6-question FAQ, and 3 collapsible tabs. [L1188, 2026]
- Keep the product page simple: product title, short benefit bullets, price and a few proven blocks. Switching on every section the theme offers adds mobile load and more copy to maintain for each product. [L1188, 2026]
- Before publishing, check the product page on mobile as well as desktop: confirm the price, Add to Cart button, carousel, collapsible tabs and FAQ all display, and that font sizes and spacing are readable. [L1188, 2026]

Template for mapping a product page (paste the data and attached screenshots below it):

```
I am giving you the product page template I want (hero with title bar, brand name, rating line, product name, price with savings, three checkmark bullets, Add to Cart with payment icons, See it in action section with three image placeholders, What our customers say with three testimonial cards, two feature blocks with headline and body, a Shop Now button, six FAQ questions, three collapsible tabs titled How It Works, What's Inside and Satisfaction Guarantee, a floating review bubble above the collapsibles, and a newsletter section). Using the product data and images I provide, fill every element of this template exactly, keeping the same order and the same number of blocks. Do not invent statistics, review counts, sales figures, testimonials, guarantees or claims that are not in the data I provide; if a field has no data, write [MISSING: field name] instead. Mark any figure you took from the data with its source. Testimonials must be rewritten from real customer reviews I provide and must not be fabricated. Write the output as clean copy with headings per section, ready to paste into the theme editor. Product name: [PRODUCT NAME]. Price: [PRICE]. Compare-at price: [COMPARE-AT PRICE]. Product images and screenshots: [ATTACHED]. Product data and reviews: [PASTE DATA].
```

[L1188, 2026]

Procedure for building the page from a marketplace listing:

1. Open the product page on the marketplace listing and select all text with Ctrl+A.
2. Copy the selection with Ctrl+C.
3. Open a new Claude chat, paste the copied listing data, and attach the reference screenshots.
4. Paste the page template prompt below the data and send it.
5. Check every price, review count and sold count in the output against the live listing and the current price.
6. Copy each output section into its matching block in the theme editor and save.

[L1188, 2026]

- AI-generated product page copy often carries stale numbers copied from an earlier product snapshot, such as old review counts, old sold counts or old prices. Before publishing, re-check every number against the current product data and the live price. [L1188, 2026]
- Video Carousel block: separate switches for "Enable autoplay" and "Show navigation dots", and the pagination dots can be placed below the carousel. Autoplay can distract from the buying decision, so test it on mobile before keeping it on. [L1188, 2026]

### Reviews, trust and FAQ blocks

- Customer review block settings: Avatar image, Review content, Reviewer name, Rating, Star colour and size, Background, Text colour, Drop shadow, and carousel settings for "Enable carousel mode", "Show multiple reviews in a swipeable carousel", and Navigation dots placement. Set each reviewer's name and avatar to match the gender of the reviewer so the review looks real. [L1188, 2026]
- Trustpilot rating block: set the Rating Text (for example Excellent), the rating value, and the Trustpilot Star colour. The lesson's advice was to use Trustpilot's official green when showing its badge, because it is their brand colour. [L1188, 2026]
- Product FAQ block options: the "Use product description for question" toggle fills answers from the product description instead of manual answers, and FAQ Appearance covers padding, margins, border radius, border colour and border style. Store FAQ in the footer or sections can use Background Image Mode and Desktop Layout Options such as centring the FAQ when there is no image. [L1188, 2026]
- Keep the review stars or review block in a visible place. Older method (2019): moving review stars or a review block under the product title in a Shopify theme:

1. Before editing code, check the review app's settings, since many apps can show ratings directly under the price or title without code changes.
2. If the app has no such option, open the theme's code editor and open the product.liquid file.
3. Select all of the file's code, paste it into a document, and save it as a backup.
4. Find the block that renders the reviews; the code differs for each review app.
5. Cut that block and paste it directly below the title markup.
6. Save and check the product page; if it breaks, paste the backup back and save.

[L0960, 2019]

- Each brand's warranty should appear on every product page for that brand. Describe its scope clearly, such as parts only, so buyers know what they get. [L0961, 2020]
- Warranty and product claims: show the real product condition so buyers do not expect a finished item. [L0961, 2020]
- The Image with text block in a product template can carry an image, a brand name, a short brand description and a button. Keep the button and link it to a collection that holds that brand's products, or delete it and keep only the text blocks. [L1116, 2025]
- The one source Shopify theme includes an ETA feature that shows the estimated delivery date on the product page. The ETA can update in real time. [L1130, 2020-26]

### Assembly, installation and supplier-specific pages

- For products that need assembly, state clearly on the product page that assembly is required and give an estimated assembly time, such as four hours. Show the real product condition so buyers do not expect a finished item. [L0961, 2020]
- Products requiring professional installation should state on the product page that they must be installed by a professional. Customers typically hire a local installer; offering installation as a service means finding nationwide installation companies and pricing them, which is more manual work. [L0971, 2024]
- For a custom feature such as an extra multi-line text field under the product title, you usually need a small amount of extra code. Hire a Shopify developer on StoreTasker to build it. [L0965, 2024]
- Product Options is a Shopify app that adds customisable option fields, such as size, colour or personalisation inputs, to product pages. [L1007, 2024]
- Product pages use separate tabs named Description, Shipping and Price match. For products from non-MAP suppliers, hide the Price match tab on the product page and list the excluded brands at the top of the general price match policy page. [L0967, 2020]

### Video on product pages

- Path to add a video to a product description: go to Products, open the product, and use the Description editor's code view (the </> button) to paste the script. Add a short paragraph such as an explanation of the shoppable video, then click Save. If you do not want the snippet in the description, use a Custom HTML snippet block instead. [L0959, 2025-26]
- LyveCom embed options: the Widget tab offers the embed code in two steps, Step 1 Copy the code and Step 2 Paste the code on any page of the website. The Embed option (direct embed) is the alternative to the floating widget and is placed where the video should appear, such as a product description. [L0959, 2025-26]
- The widget snippet copied from the LyveCom dashboard has this structure. The key name for the language setting was hard to read in the source screenshot, so verify it against the copy from the dashboard before publishing.

```
<script src='https://dashboard.lyvecom.com/widget/widget.js'></script>
<script>
LyveComWidget.mount({
  account: 'YOUR_ACCOUNT_ID',
  stories: true,
  lang: 'en',
  position: 'left'
});
</script>
```

[L0959, 2025-26]

- The snippet can be placed in a product description, the Shopify page builder, a Shogun builder, or any block that accepts an HTML snippet. The floating widget suits homepage greetings and new collection launches, while the product-page embed suits engagement on a single product. [L0959, 2025-26]
- Show the See it in action section with 3 to 6 short videos that show the product in use, and include them in the product page carousel with navigation dots. Upload the video files directly in the theme block rather than linking to outside pages. [L1188, 2026]
- Video placement, reconciled: the main media gallery should avoid video because it slows page load [L0976, 2024+], while the See it in action section is the place for 3 to 6 product videos [L1188, 2026]. Use the gallery for images and the dedicated video section for demonstrations.

### Bundles and upsells

- Each product should have its own unique add-on option, and add-ons should come from the same supplier where possible to simplify shipping. [L1092, 2022]
- Google Shopping submits the bundle price as the product price. Use add-on options on the product page instead of default bundles, so the listed price stays lower while average order value still rises. [L0970, 2023]
- Shrine theme supports bundles where a customer can choose different variants, such as size or colour, of the same product in a bundle. It does not upsell a different product, so a hoodie bundle can offer another colour or size but not a t-shirt. [L1173, undated]
- PageFly is recommended for stores with one product plus an upsell, because that product is communicated most. It is not recommended for stores with many products. [L1131, 2018+]

### Page builders (PageFly)

- PageFly is a page builder used to build advertorial pages. It offers templates for blog-style layouts that can be customised to look like a native editorial article. [L1131, 2018+]
- Pagefly is used as the page builder for the store pages (homepage, product page, About us, Contact us), and Ryviu is used to add product reviews. [L1288, undated]
- Whether to build a PageFly landing page depends on the store: a general store selling multiple items with offers like buy two, get the third free may not need one, while testing one product at a time in a general store does benefit from a PageFly landing page. [L1212, undated]

Advertorial page structure:

1. Start with the problem the ad showed, for example a pet losing energy.
2. Educate with facts about the problem and why it happens.
3. Suggest general solutions the reader could try on their own.
4. Introduce your product at the end as the shortcut.
5. Add a clear call-to-action button, such as "Choose your package", that links to the offer page.

[L1131, 2018+]

### Back orders

Back-order delivery note, one source:

> This product is currently on back order until [date]. You can place your order now and pay a deposit of [amount], and we will ship it to you as soon as it arrives.

[L1069, 2019]

Showing a different delivery note on one product (for example a back order with a long ETA):

1. Go to Online store > Themes > Customize.
2. Open the product page dropdown and choose Products.
3. Click Create template and name it, for example "ETA example two months".
4. In that template, hide the estimated delivery section and add a Text block under the Buy it now button.
5. Save.
6. On the product itself, scroll to Theme template and select the new template, then preview it.

[L1285, 2024]

Back-order text (template):

```
Please note, this product is back ordered with an estimated arrival of [date]. You can still place your order, and we will confirm the shipping date by email after purchase.
```

[L1285, 2024]

- Place a back-order ETA note directly beside the add-to-cart button, not lower on the page, so shoppers see the delivery delay before they buy. [L1285, 2024]

### Out-of-stock and discontinued products

- Do not delete a product page when the product is discontinued or unavailable. Set the inventory to zero so no one can add it to the cart. Add a section under the add-to-cart button that says the product is currently unavailable and links to similar in-stock products in the same price range that ship fast. If the supplier replaces the product with a new model, add a prominent note on the old page naming the new model, with a link and a statement that it is in stock and ships fast. [L1287, 2025]

Discontinued product with a replacement:

1. Keep the old product page live with inventory set to zero.
2. Create a new product page for the replacement version and submit it to shopping campaigns and free listings.
3. Add a section below the cart button on the old page saying it was discontinued, with a link to the in-stock replacement, so existing SEO traffic is not lost.

[L1285, 2024]

Replacement note (template):

```
This product has been discontinued. Our updated version, [Replacement product name], is in stock and ready to ship: [link]. You may also like these in-stock options: [Product 1], [Product 2], [Product 3].
```

[L1285, 2024]

Discontinued product with no replacement:

1. Set its inventory to zero on the store.
2. Exclude it from shopping campaigns and organic listings.
3. Keep the page and add a section saying it has been discontinued, with two or three similar in-stock products customers might consider. This keeps the SEO traffic and gives visitors somewhere to buy.

[L1285, 2024]

### Pre-orders

Pre-order model when stock is unavailable, for example before Chinese New Year:

1. Change the Add to cart button on the product page so it reads "Pre-order".
2. Add a description explaining that the product sold out due to demand and when shipments restart, for example in two to three weeks.
3. Take payment now and ship when stock arrives.

[L1214, 2023+]

- To change the button label to Pre-order, edit the button text in the page builder or theme editor if you use a page builder or a current theme. On an old legacy theme, the label has to be changed manually in the Shopify theme settings. [L1214, 2023+]
- Changing the pre-order button text on the Shopify theme (older theme method, admin path as given in the source):

1. In the Shopify admin, open Online Store and then the theme you use (check the exact label in your theme editor).
2. Open the theme settings and the language editing area, and find the button text for buy now.
3. Change the button text from "buy now" to "pre-order now".
4. Note that this changes the button for the whole store, not just one product, so check every product page afterward.

[L1017, undated]

- For a pre-order product, make the status clear on the product page by starting the product description with a large red line such as "pre-order now". Keep the setup manual and avoid installing extra apps, because each app can slow the store down. [L1017, undated]
- Pre-orders can sell well, especially in fashion, where many products are bought before stock arrives. Do not drop the model based on claims that pre-orders do not work. [L1214, 2023+]

### Product page as the main conversion page

- About 95% of paid-ad visitors see only the product page, while only 3 to 5% visit the home page or collection page, so most design and offer effort belongs there. [L1410, 2023; L1412, 2023]
- The product page shows most product details and can be customized heavily through the theme. A collection page displays every product assigned to that collection. [L1326, undated]
- Before traffic is sent to a product page, it should include product images or videos, customer reviews and an FAQ section. [L1324, 2026]
- Prioritize the landing page over checkout tweaks. A strong landing page builds the trust that brings buyers to checkout. Shipping information and similar details are common checkout blockers, to be addressed after the page works. [L1363, 2023]
- Every extra page or click between the landing page and checkout lowers conversion and increases frustration and abandonment. Shorten the path to purchase wherever possible, because making shoppers browse longer does not help when attention spans are short. [L1522, 2021-22]
- Copy belongs on product pages, longer sales pages built with funnel tools such as ClickFunnels or Leadpages, collection and category pages, and marketplace listings on Amazon or eBay. Shopify is named as the standard example of a product-page setup. [L1460, 2021-22]
- When traffic comes from TikTok, build the store mobile first. The lesson estimates that nearly all TikTok buyers shop on a phone, so the desktop layout can receive less attention. [L1412, 2023]

### Page structure and conversion elements

- Top of the product page: product image, product name, USP, star reviews, then four or five benefit-driven bullet lines. Lower sections repeat the pattern: a main benefit headline, up to two lines of text, then an image or GIF. [L1345, 2021+]
- Add a FAQ section for problem-solving products, since almost every buyer has questions. [L1345, 2021+]
- Add a risk-free or 30-day money-back guarantee section, which works well for conversion. [L1345, 2021+]
- Remove every element unrelated to the main product, such as a "frequently bought together" block or an unrelated suggestion, because these act as friction and lead visitors away. [L1345, 2021+]
- Show a clear size guide on every product page, and show the shape and fit of each item through mock-ups or model images. For oversized or drop-shoulder cuts, make the fit visible so buyers know what will arrive. [L1438, 2023+]
- Provide accurate measurements for every product category, such as chest width, arm length and shoulder drop for tops, and the equivalent measures for trousers and jackets. Make them visible on the website before checkout. [L1438, 2023+]
- Accurate sizing reduces returns because buyers already know what they are getting. Sizing errors discovered after delivery are a common cause of returns in fashion. [L1438, 2023+]
- Spacing shows which items belong together: related items should sit closer to each other than to unrelated items. [L1462, undated]

### Product description formatting

Format a product description for a short, sales-focused layout:

1. Paste the AI copy into the description editor.
2. Click Paragraph and then Clear formatting.
3. If formatting is still broken, paste the text into Google first to strip formatting, then copy it back.
4. Turn three key points into a bulleted list.
5. Click Preview and cut any text that pushes the Add to cart button too far down. [L1331, 2025-26]

### Collapsible tabs

#### Tab types and when to use them

- Product pages can use tabs for the product description, the shipping policy and, if offered, the price match policy. This lets the buyer find all the information without leaving the page. Path: product template in the Shopify theme, tabbed content section. [L1346, 2020-26]
- Standard tabs are unique for each product, and their content is written directly in Shopify's native Edit Product page. Use this option only when each product needs its own set of tabs. [L1300, 2021-22]
- Static tabs are created once in the app settings and then added to all products or to selected collections. Use them for content that is the same across products, such as shipping terms or a reviews tab. [L1300, 2021-22]
- Content below the tabs appears under the tabs widget on every product page of the store. If you do not need it, select Don't need text below the tabs. [L1300, 2021-22]
- For a new store, start with two static tabs: Shipping and Why Buy From Us. Add further tabs, such as reviews, later once that content exists. [L1300, 2021-22]
- Once the app is installed, tabs are enabled on product descriptions automatically. If they do not show on the product page, open the Installation section for manual steps. The Disable Tabs button turns them off. [L1300, 2021-22]

#### Adding a static tab

1. Open the Static Tabs section in the Easy Tabs settings.
2. Click Add Static Tab; an edit window opens.
3. Enter a title for the tab.
4. Paste in the content and replace the placeholder business name and other details with your own.
5. Click Save static tab.
6. Check the list: each static tab shows its title, Assigned To (for example All Products) and Edit and Delete options. [L1300, 2021-22]

#### Layout, padding and colors

- Under Settings > Layout, the TABS LAYOUT options are Tabs and Accordion. The live preview changes with each option, so compare them before choosing. The Tabs layout is the default and was kept in the example. [L1300, 2021-22]
- Under Settings > Layout > Padding, the example uses 12 px for Tabs Padding (Tab), 12 px for Tab Title and 12 px for Content Padding (Content Box, with values of 12 px and 10 px), and 12 px for Content. A Reset layout settings button restores the defaults. [L1300, 2021-22]
- Under Settings > Layout > Colors, Active Tab has a Background Color and Text Color, and Inactive Tab has a Background Color, Text Color and Border Color. In the example, the inactive tabs used the dark brand brown with white text, and the active tab used the brand yellow as its background. [L1300, 2021-22]
- The live preview shows every layout and color change before it is saved. Check the preview first, then click Save. [L1300, 2021-22]
- The Easy Tabs app's top navigation has Home, Settings, Installation, FAQ and More Apps. The Home page shows whether tabs are enabled on product descriptions and holds the Disable Tabs button. [L1300, 2021-22]


Part 35 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/34-creating-and-assigning-product-templates.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/36-product-templates-for-product-types-and-suppliers.md
