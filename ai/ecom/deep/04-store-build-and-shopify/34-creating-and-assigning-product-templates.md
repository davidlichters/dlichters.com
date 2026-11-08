<!-- part of ecom/deep/04-store-build-and-shopify.md -->
Part 34 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/33-variant-descriptions-and-variant-selection.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/35-product-page-layout-and-conversion.md

### Creating and assigning product templates

one source procedure, repeated for each product that needs its own page:

1. In Shopify admin, go to Online Store > Themes and open the live theme with Edit theme.
2. In the theme editor, open the page selector and choose the Product page.
3. Scroll down in the product section and click Create a template.
4. Set the new template to be based on Default product, and name it after the product, for example dollar-apocalypse.
5. Refresh the browser page so the new template appears in the template list.
6. Open the matching product in the Shopify admin, find the Theme template field under Product organization, and select the new template instead of Default product.
7. Click Save in the product admin.
8. Return to the theme editor, open the product using its template preview, make your content changes, and click Save.
9. Repeat steps 2 to 8 for every product that needs its own page.

[L1013, 2026]

- The template assignment is made in the Shopify product admin under Product organization, in the field Theme template. The default value is Default product, and the value must be changed to the product's own template, otherwise the product keeps using the shared default. [L1013, 2026]
- In the Product organization section of a Shopify product form, the Theme template field lists Default product and any custom product templates. Select the product's own template there and save the product, otherwise it keeps using the shared default template. [L1013, 2026]
- To preview a product with its own template in the theme editor, open the product URL and add the parameter view followed by the template name, for example /products/product-handle?view=template-name. The theme editor then shows that template so its sections can be edited. [L1013, 2026]

one source procedure (2025), for a supplier or a single product:

1. Go to Online Store > Themes and click Customize on the theme.
2. Click the page selector at the top, which shows Homepage, and choose Products.
3. Open Default product to see the template assigned to all products. Leave it unchanged unless every product should change.
4. Scroll to the bottom of the product template list and click Create template. Name it (only you see the name). It is based on Default product and duplicates it.
5. Add content: hover over a section and click the plus button, or use Add section and pick a block such as Image with text. Upload an image, enter the text, and keep or delete the button.
6. Click Save.
7. Go to Products, open the product, look at the bottom right to see which template it uses, select the new template, and click Save.

Repeat for each supplier or product that needs its own content. [L1116, 2025]

one source procedure (2025), for a product template with a descriptive name:

1. Go to Online store and open Customize for the theme.
2. Open the Products section, where the default product page template is shown.
3. Click Create template and give it a descriptive name, such as product page customer image.
4. Add the sections you want, for example an image with text, and click Save.
5. Open a product, find the Theme template field, which shows default product page, and select the new template.
6. Repeat for as many or as few products as you need.

[L1287, 2025]

Supplier template procedure:

1. In the theme editor, open the template dropdown at the top and select Default product, then click Products.
2. Scroll to the bottom of the list and click Create template.
3. Name the new template after the supplier, and base it on the default product template.
4. Click create. The editor now shows the new template name at the top, and any changes apply only to products assigned to it.
5. In the Product information section, open estimated delivery and change the window to the supplier's real delivery time, such as 7 to 14 days.
6. Click Save.

[L1192, 2020-26]

Assignment procedure:

1. In the Shopify admin, go to Products and open the product that belongs to the supplier.
2. In the theme template setting, select the supplier's template instead of the default product template.
3. Click Save.
4. Click Preview and confirm the estimated delivery dates changed, then scroll down to check the theme template name shown for the product.

[L1192, 2020-26]

### Product page block structure

- The theme editor's Product Details section holds the product-page blocks, such as Title, Price, Add to Cart, Payment icons, Trustpilot Rating, Custom Text, Product FAQ, Customer Review, Video Carousel and Collapsible Tabs. Each block can be reordered, removed or added with the Add block and Add section buttons. [L1188, 2026]
- Collapsible tabs on a product page are edited in the Product Details section of the product template in the theme editor. This section sits in the template's section list alongside Cart Drawer, Scrolling Features Bar and Store FAQ. [L1013, 2026]
- Add block options in the Manhattan product page editor include image, text, shipping text, trust badges, countdown timer, collections list, collapsible row, custom liquid, pop-up, product ratings, complementary products and related products. Add them only when needed, since the theme already includes the most common features. [L0976, 2024+]
- In the Manhattan product page editor, blocks you add can be removed with delete, while built-in elements you do not need are removed with hide. A hidden element can be shown again at any time by reversing the toggle and saving. [L0976, 2024+]
- After hiding a product page block in the theme editor and saving, reload the live product page to confirm the block is gone. Scrolling without reloading can still show the old version. [L1189, 2020-26]
- The shipping text block on a Shopify product page holds your shipping policy wording, such as an expected delivery window like seven to 10 days. It is placed in the product sidebar by default, and it is optional for a demo store because it is not needed for supplier approval. [L0976, 2024+]
- The collapsible row block has a title, row content that can link to a page such as a shipping policy page, and a selectable icon. Create the linked page first, or link it temporarily to an existing page. [L0976, 2024+]
- The related products block shows products related to the one being viewed. Its layout and contents can be customized, it is recommended to keep it on, and it can be hidden at any time. [L0976, 2024+]
- The related products block has a default heading of "You may also like". The heading, size, number of products and colour scheme can be changed. To hide it, hover over the block and click the eyedropper icon; click the eyedropper again to bring it back. [L1189, 2020-26]
- Related products are most useful when the store has add-on products customers might want to buy together. For a demo store without such products, hiding the related products block is acceptable. [L1189, 2020-26]
- A sidebar that changes with the product is not available in standard apps or themes as far as the coach knew. It requires custom code, and you build a separate template for each product category. [L1109, 2018]

### Product information section settings

- Product page sections are edited in a sidebar that opens when you click Product information. Breadcrumbs show the path the visitor took to reach the page; keep them on, and their colour and style can be changed in the same place. [L0976, 2024+]
- The product title and the displayed price cannot be edited in the product page sidebar. Leave those as they are, since changing the title is not recommended anyway. [L0976, 2024+]
- The product title and price are dynamic fields in the Shopify theme and cannot be customized in the theme editor. Changes to them must be made in the product data itself. [L1189, 2020-26]
- Keep the SKU number displayed on the product page, because it is pulled from the product data and helps with SEO once the store has live products. [L0976, 2024+]
- SKU field: the default label is "SKU". The label can be renamed, but it is recommended to keep it as SKU. The field is used to show the product's SKU number. [L1189, 2020-26]
- The vendor text block is dynamic and pulls the vendor name entered for each product, so new supplier names appear automatically. Keep it on; it can be bolded or given extra text, but that is not necessary. [L0976, 2024+]
- Vendor field: it shows the brand name and carries a dynamic icon, so it automatically displays each product's real brand once live products are uploaded. The demo default text is the brand name of the demo products. [L1189, 2020-26]
- In Theme settings you can edit the price label text and turn on currency codes, which show a code such as USD next to prices. Show currency codes only when you sell in several currencies; a store selling to a single country and currency does not need them. [L0976, 2024+]
- Price field: it cannot be customized and should not be hidden. If a product has a compare-at price and a regular price, the compare-at price is shown crossed out above the regular price. [L1189, 2020-26]
- The variant picker has two display options: dropdown, a menu for choosing a variant such as a colour, and pills, small buttons showing each variant name such as sizes or colours. Both work; the lesson used pills. [L0976, 2024+]
- Variant picker: set the display style to "pills" for product variations. No other change is needed. [L1189, 2020-26]
- Keep the quantity selector on so visitors can order several units from the product page; it can be hidden if you do not want it. [L0976, 2024+]
- Quantity selector: keep the style set to "buttons". [L1189, 2020-26]
- The estimated delivery block shows customers how long delivery should take. For a demo store, hide it with the eyedropper icon. [L1189, 2020-26]
- Inventory status can be hidden in a demo store, because stock levels are added later. [L1189, 2020-26]
- Social sharing buttons: keep them turned on so visitors can share product pages on social media. [L1189, 2020-26]
- The description block can be placed at the bottom of the page or on the side, directly under the add to cart buttons. The side option shows the description, key features and specifications in the sidebar. [L0976, 2024+]
- Description block: no changes are needed. It can be placed on the side next to the add-to-cart buttons, which is the preferred placement, or below the product. [L1189, 2020-26]
- Keep the dynamic checkout buttons on, which show the payment methods enabled in the store, such as PayPal or Apple Pay, directly on the product page. Turn off the gift card option if you do not sell gift cards. [L0976, 2024+]

### Media and images

- Set Desktop media width to medium and keep Constrain media to screen height on. Media fit has two options, original and fill; choose whichever looks better for your image sizes, and the lesson kept original. [L0976, 2024+]
- Product information section, sticky media settings: turn on "Enable sticky content on desktop" so product images stay in place while the visitor scrolls the text on the right. Set "Desktop media width" to "medium" and turn on "Constrain media to screen height" with the value "original". [L1189, 2020-26]
- Set Desktop layout to thumbnail carousel, which shows a scrollable row of thumbnails below the main image when a product has several images. This setting is recommended. [L0976, 2024+]
- Image behaviour on hover or click has three options: nothing, zoom (magnifies on hover) and pop-up (opens a larger view). Zoom suits high-resolution photos; low-resolution or AI-generated demo images look poor when zoomed, so choose the option that fits your image quality. [L0976, 2024+]
- For the mobile layout, set the mobile image behaviour to none for AI-generated, low-resolution demo images, and set the mobile media display to show thumbnails. [L0976, 2024+]
- To adjust image zoom on product pages, go to Shopify admin > Online Store > Themes > Customize. Change the dropdown from Homepage to Product page, and then use the left navigation to set the zoom options. [L0965, 2024]
- Product image behaviour in the theme editor: under Online Store > Customize > Products > Default product, change the image settings (for example how media fits) and save, then check the result on the store. [L0971, 2024]
- Images added to the product description should scale automatically for both desktop and mobile. If they look wrong on one device, check how the image was uploaded, because a correctly uploaded image resizes itself. [L0970, 2023]
- Lazy loading on product variant images can stop images from loading. If this happens, contact the page builder support (PageFly in this case) and report that images are not loading on the page while they work elsewhere. [L0950, 2023]
- Avoid putting videos in the product media, because they slow down page load times. If you do use a video, the loop-after-end option restarts it automatically once it finishes. [L0976, 2024+]
- Short animated GIFs for product pages can be made by cutting a 1 to 3 second segment from an existing video ad and exporting it as a GIF. Keep these GIFs under the speed limits for images (around 800 KB) to avoid slowing the page. [L1259, undated]
- Add GIFs or short demos to the product description so customers understand how the product works. Visual explanation shortens the path to purchase. [L1171, 2024+]

### Product descriptions and collapsible tabs

Making a collapsible description section without code:

1. In the product editor, highlight the heading text in the description, for example Specs.
2. Open the dropdown above the description box in the rich text editor, which by default shows Paragraph.
3. Select Heading 6, which turns the highlighted text into a Heading 6.
4. The heading becomes the visible top tab, and all content below it up to the next chosen heading sits inside the collapsible section.

[L0921, 2022]

- If you do not know code, use the rich text editor for headings and collapsible sections instead of editing the HTML. When a store suddenly looks broken, check first whether recently pasted code caused it. [L0921, 2022]

Creating expandable sections:

1. Type the section title in the product description, for example Shipping, followed by its text.
2. Highlight the title text.
3. Open the format dropdown and choose Heading 6.
4. Make the title bold to match the other titles.
5. Click Save and preview. The title is now a collapsible section.

Repeat for each section. Description is expanded by default. [L1116, 2025]

- Only text formatted as Heading 6 becomes its own collapsible section. Plain text stays inside the default Additional info section. [L1116, 2025]

Changing an existing description section into an expandable block (Manhattan theme):

1. Open the product in the Shopify admin and go to the description editor.
2. Select the heading of the section you want to collapse, e.g. Key features, and change its format from Heading 3 to Heading 6.
3. Save the product.
4. Repeat step 2 for every other section heading that should collapse, e.g. Why you'll love it and Specifications.
5. Delete the horizontal divider lines that were created between the sections, then save again.
6. Open the product page preview to check the result.
7. If the description intro has no heading above it, add a heading such as Description and format it as Heading 6 so it becomes the first expandable block.

[L1189, 2020-26]

- In the Manhattan theme, any text set as Heading 6 becomes an expandable and collapsible block that controls everything beneath it until the next Heading 6. Each block that should collapse needs its own Heading 6 heading. [L1189, 2020-26]
- The first Heading 6 block on a product description is expanded by default, so the visitor sees at least one section open. Plan the first section so the most important text is visible without a click. [L1189, 2020-26]
- The editor view can look broken after a heading is changed to Heading 6, but the product page shows it correctly. Always judge the result in the saved product page preview, not in the editor. [L1189, 2020-26]
- Leftover horizontal divider lines between description sections make the collapsible layout look messy. Delete them and save again before previewing. [L1189, 2020-26]
- Build three collapsible tabs for the product page, usually labelled How it works, What's inside and Satisfaction guarantee. Each tab should answer one buying question, such as what the buyer gets, how it is used and what protects the purchase. [L1188, 2026]
- Place detailed product content such as description, ingredients, how it is made and what is in the box inside collapsible drop-down menus. This keeps SEO-rich text on the page without overwhelming the customer. [L1225, 2025]
- Product page sections such as measurements, shipping, returns and price match are fine in moderation, and four to five dropdowns or headers is not too many. [L0970, 2023]
- Product description order: set up the product description and features in that order. The description goes first because Merchant Center reads it first, and the features follow for extra keywords. [L0964, 2023]
- Use the supplier's product description as a starting point, but check that it is complete and accurate before publishing the product page. [L1171, 2024+]
- Write unique product sales copy for each product rather than using supplier copy. Add size, colour and variant charts, and offer downloadable PDF files such as warranty terms and installation instructions. [L0920, 2018]
- Shopify's built-in AI suggestions for product descriptions should not be accepted blindly, because they do not follow a product page SEO approach. Use them only as a starting point and optimise the result yourself. [L0966, 2025]
- Write the product map first, then fill the product description field in the Shopify product editor from it. Starting from a blank description box with no guide is what causes writer's block, so the map gives you the material to fill that field. [L1160, 2021-22]
- Starting a product description for a test store (procedure):

1. Open the description of a proven competitor product.
2. Copy its structure, such as the sections and their order.
3. Rewrite the wording and improve it for your own store, keeping the structure that the competitor uses.

[L1172, 2023+]

- Build specification tables with Shopify's native editor first. Third-party apps can slow the site, so use custom HTML only if the native editor cannot produce the table. [L0970, 2023]
- Embed a supplier video in a product description by copying its embed code, typically from YouTube, and pasting it into the description. No developer is needed for this step. [L0968, 2021]
- Bullet points in the product description that wrap onto a second line can break their indentation in Shopify. A line of CSS from the Shopify forum can fix the layout. [L0966, 2025]
- Standard Shopify variants share one product description, so a description that differs by colour will not change when the customer selects another variant. Solving this needs an app or custom code, so test each variant in the preview before launch. [L1287, 2025]

Older tab setup with the Easy Tabs app:

1. Open the Easy Tabs app and start the free trial if prompted.
2. Under Standard tabs, click Configure default tab, which builds standard tabs from the product description.
3. Choose the tab title for the default tab (for example Description) or keep the text before the first heading as separate text above the tabs.
4. Click Next, then choose the text below the tabs or select Don't need text below the tabs.
5. Click Next and check the live preview.
6. Under Static Tabs, click Add Static Tab, enter the title and content for each tab (shipping and why buy from us at minimum), and click Save static tab.
7. Open Settings and adjust Layout (padding and colours), then click Save.

[L1300, 2021-22]

- Standard tabs are built from the product description: each heading tagged as H5 becomes a tab title, and the content after that heading becomes the tab content. The app splits the product description into separate tabs this way. [L1300, 2021-22]
- Text placed before the first heading can either become a default tab with its own tab title, such as Description, or stay as separate text above the tabs widget. Choose one option deliberately so the first thing a shopper reads is clear. [L1300, 2021-22]

### Variants, buttons and add-to-cart

- Use Shopify's default variant buttons for colour options. They show the colour name and change the product image on click. True colour swatches require custom code or a swatch app. [L0966, 2025]
- Native Shopify does not change the add-to-cart button colour based on the selected variant. This needs a third-party app and is not a standard feature. [L1116, 2025]
- Variants shown in the video must be set up as real product variants in Shopify, because the shopper selects a variant in the video and checks out through the store's native checkout. A variant that is not configured in the store cannot be sold through the video. [L0959, 2025-26]
- The add to cart button text changes to "view cart" after the button is clicked; keep that setting on. Avoid heavy customisation of the buttons before supplier approval, because little is needed at that stage. [L0976, 2024+]
- Buy buttons settings: turn on "Show dynamic checkout buttons". Keep the two options below it off. "Customise add to cart" and "Enable add to cart icon" are optional; if turned on, the button colours can be changed under the buy buttons settings. [L1189, 2020-26]
- The Buy with Shop Pay button only appears on a store when Shopify Payments is enabled for that store. Demo or test stores without Shopify Payments will not show it. [L0972, 2025]
- Model the product page structure on the top two or three competitors selling the same product. If they use one page with variants, use one page with variant options; if they use separate pages per size, do the same. Google Merchant Center can still submit each variant as its own product. [L0970, 2023]

### Cart behaviour

- The cart type options are dropdown confirmation, slide-out cart, pop-up modal, redirect to the cart page, and skip cart and go directly to checkout. Dropdown confirmation is a suitable default when starting out, and the other options can be tested later. [L0976, 2024+]
- After add-to-cart, most stores send shoppers straight to checkout. Keep them on the product page only when customers are likely to add several items. [L0970, 2023]
- Sticky add-to-cart bar, Manhattan theme: go to Online Store > Themes, click Customise next to Manhattan, open Product and the default product page, click the Buy buttons block, switch off "Sticky add to cart", and click Save. [L0972, 2025]


Part 34 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/33-variant-descriptions-and-variant-selection.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/35-product-page-layout-and-conversion.md
