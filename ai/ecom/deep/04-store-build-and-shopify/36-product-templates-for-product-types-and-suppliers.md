<!-- part of ecom/deep/04-store-build-and-shopify.md -->
Part 36 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/35-product-page-layout-and-conversion.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/37-discounts-offers-email-capture-and-post-purchase.md

### Product templates for product types and suppliers

- Editing the Default product template changes every product that uses it. Create a separate template for products that need different images or sections. [L1331, 2025-26]
- Create a separate template for a new product type, such as sandals:
  1. Go to Products and create a new template.
  2. Base it on the Default product template.
  3. Assign the product to the new template in its Theme template field.
  4. Change the images and sections in that template.

  Editing it does not change products that still use Default product. [L1331, 2025-26]
- Show product-specific content through a custom product page template rather than by editing the main theme code files. Changing the main files can easily break the whole store, while a separate template only affects the products assigned to it. [L1419, 2020-26]
- A product that already uses another custom product template, such as a delivery-time template, loses that template when you assign a new one. Check the theme template field on the product first and note any layout you need to keep, because the new template replaces the old one for that product only. [L1419, 2020-26]

### Variant descriptions

#### When to use them

- Variant-specific descriptions are only worth setting up when the variants differ enough that one shared description does not fit them. If the variants share the same details, a single default description covering all variants works without extra setup. [L1419, 2020-26]

#### Setup procedure

Create the variant metafield definition. Setting: Settings > Metafields and metaobjects > Variants (under Metafield definitions) > Add definition. Name the definition 'variant description' and set Select type to Rich text, then click Save. Shopify creates the key custom.variant_underscore_description, so the name must match exactly, including spelling, lowercase and underscores. [L1419, 2020-26]

1. Log into the Shopify admin.
2. Click Settings.
3. Click Metafields and metaobjects.
4. Scroll to the bottom of the list and click Variants under Metafield definitions.
5. Click Add definition.
6. Enter the name 'variant description'.
7. Click Select type and choose Rich text (search for it if it is not visible).
8. Click Save.
9. Check that the Metafields and metaobjects overview now shows one definition for variants instead of zero. [L1419, 2020-26]

Enter a description for each variant:

1. Go to Products and open a product that has variants.
2. Leave the product page and open it again so the variant fields refresh.
3. Scroll down to the Variants section and expand the list.
4. Click one variant, for example 'seven foot blue'.
5. Scroll to the field named variant description and click it to open the text box.
6. Enter the description for that variant and click Save.
7. Repeat for every other variant.

To edit later, follow the same path and change the text. [L1419, 2020-26]

Create the snippet that reads the variant description:

1. Go to Online Store > Themes.
2. Click the three-dot button next to the theme you use and choose Edit code.
3. Expand the Snippets folder to see the existing snippets.
4. Click the first icon in the toolbar, New file.
5. Name the file variant_description.liquid.
6. Open the new file, paste the snippet code, and click Save.

The file name has to match the name used in the Custom Liquid block later. [L1419, 2020-26]

Create the custom product page template:

1. Go to Online Store > Themes and click Customize (not Edit code).
2. In the top dropdown, choose Home page, then select Products.
3. Open the template dropdown at the top. Most stores only show the template named default product.
4. Click to create a new template, name it 'variants with unique descriptions', and base it on the default product template.
5. Click Create template. [L1419, 2020-26]

- A newly created product template is assigned to zero products, so creating it does not change any live product page. It only takes effect on products you assign to it manually. [L1419, 2020-26]

Prepare the template layout:

1. In the left panel of the new template, hide the Description section so the default description no longer shows.
2. Hover just below the Description area until a blue line with a plus sign appears.
3. Click Add block and choose Custom liquid.
4. In the code box that opens on the right, enter: render variant description
5. Scroll down in the preview to check that the first variant's description appears, then click Save. [L1419, 2020-26]

- The Custom Liquid block displays code you type into it. The entry 'render variant description' tells it to load the snippet variant_description.liquid, so the block name in the code must match the snippet file name without the.liquid extension. [L1419, 2020-26]

Assign the template to the product:

1. Go to Products and open the product that has the unique variant descriptions.
2. Scroll down on the right side to the theme template setting, which shows the template the product currently uses.
3. Click the current template and select 'variants with unique descriptions'.
4. Click Save.

Only the products you assign change. Every other product page keeps its previous template. [L1419, 2020-26]

Test the variant descriptions:

1. Open the product and click Preview.
2. Scroll to the product details and click each variant option, for example seven foot blue.
3. Check that the description and the image change to match the selected variant.
4. Click the other variant options, such as eight foot green, and check each one. [L1419, 2020-26]

#### Naming rule

- Field names, the definition name and the snippet file name must be typed exactly. Differences in spelling or capital letters break the connection between the metafield, the snippet and the template. Copy the names from the lesson text rather than typing them from memory. [L1419, 2020-26]

### Product information settings

- In the Shopify theme editor's product settings: Sale badge style set to Save $10, Option style set to Selectable boxes as stated in the lesson, Display stock levels set to Hidden, and Quick shop button set to Disabled. [L1371, 2021-22]
- Enable color swatches in the Shopify theme product settings. Leave other product settings at their defaults when the storefront is in the early stage. [L1371, 2021-22]
- In the Shrine theme's product information settings, Active variant images filtering controls which variant images appear. The Hide other variants' media toggle only works when each variant has one media item assigned in Shopify admin under Products. If you need to hide several media items per variant, use the filtering setting. [L1331, 2025-26]

### Buttons and cart behavior

- For a simple single-product store, the main button can read 'Add to bag' or 'I want it now' and send the visitor straight to checkout. This skips the cart page, which can be a point where visitors leave. [L1345, 2021+]
- A sticky button lets a visitor who is already convinced act immediately instead of scrolling back or leaving. Without a visible call to action, visitors who are almost ready can leave before they buy. [L1345, 2021+]
- Case: a store's add-to-cart rate was lower than expected, and visitors who read the product but did not see a button on mobile were leaving. Action: a sticky add-to-cart button was added to the mobile product page. Result: the add-to-cart rate rose by about 25%. [L1345, 2021+]
- Disable the Quick shop button in the Shopify theme product settings. Quick shop opens a popup with product details and adds JavaScript that slows the site even when customers do not click it, so customers should go to the full product page instead. [L1371, 2021-22]
- Show the dynamic checkout button in the Shopify theme product settings so each customer sees their preferred payment method, such as PayPal or Apple Pay, from those available on the store. Set the Add to cart button to Enable on desktop only. [L1371, 2021-22]

### Bundles and upsells

- A bundle app that requires code must be placed in the product page template. The lesson describes this as a required step when using Bundle Bear. Apps that need no code avoid this manual edit. [L1412, 2023]
- The rule to remove "frequently bought together" blocks from the product page [L1345, 2021+] and the bundle app placement in the product template [L1412, 2023] apply to different situations: the first concerns unrelated suggestions that create friction, the second concerns a bundle offer that the product page must present. [L1345, 2021+; L1412, 2023]

### Out-of-stock and zero-stock handling

#### Keeping the page live with zero stock

- For products from a failing supplier, go to the Shopify product page and turn on inventory tracking. Set the stock to zero (out of stock) instead of deleting the product, so customers cannot buy it. [L1407, 2023+]
- Set a product to zero stock instead of hiding it. The product stays visible on the front end but cannot be bought, avoids indexing problems, and goes live again when stock is added. [L1414, 2021-22]
- Keeping out-of-stock product pages live keeps them indexed and receiving free organic traffic. The links on them can redirect visitors to in-stock products that still sell. [L1407, 2023+]

| Option | Result | Source |
|---|---|---|
| Inventory tracking on, stock set to zero | Product stays live, cannot be bought, goes live again when stock is added | [L1407, 2023+; L1414, 2021-22] |
| Hide the product | Compared with zero stock, hiding is the option that causes indexing problems | [L1414, 2021-22] |
| Delete the product | Not recommended; the lesson says to set zero stock instead of deleting | [L1407, 2023+] |

#### Out-of-stock note template

Place this note above the product description on every out-of-stock product page. Keep the links to 1 to 3 products with similar color, size, quality and price.

```
This product is currently out of stock with no ETA. If you're looking for something similar that is in stock and can ship within 24 to 48 hours, here are our recommendations: [link to similar in-stock product 1] [link to similar in-stock product 2] [link to similar in-stock product 3].
```

[L1407, 2023+]

### Page builders: PageFly and GemPages

#### Choosing a builder

- Custom page builders such as PageFly or GemPages let you change background colors and layout to highlight offers more than theme settings do. Use the theme's own options first if they are enough for the highlight. [L1345, 2021+]
- PageFly is a page builder used to create product pages in Shopify. Build one product page, duplicate it for each new product, then rewrite the copy and replace the imagery. This keeps a multi-product test store consistent without rebuilding each page. [L1428, undated]
- PageFly landing page templates are used to build high-converting product pages with proven copywriting structure and trust elements. [L1436, undated]
- PageFly is used to build landing pages for the store. It helps improve the store's look without needing advanced design skills. [L1439, 2024+]

#### Duplicating a proven page

1. Import a page via Pages (import the template as in the course's import video).
2. Select the page checkbox and choose Duplicate to copy it for a new product.
3. Assign the copy to that product.
4. Duplicate a proven page and tweak it only slightly for products in the same niche, so products can be launched quickly. [L1363, 2023]

- PageFly gives one free page publish. Each additional page costs about 20 USD. PageFly support may reduce this for e-commerce students who plan multiple Shopify stores; the lesson reported this worked for at least one student. [L1363, 2023]
- When removing a PageFly element, check that it is removed on all devices (desktop and mobile), because it can remain on one device. [L1363, 2023]
- On a single-niche store, use global styles (font families and colour scheme) in PageFly so one change updates every page. On a general store testing many products, set custom colours on each page or element instead, so each product can get its own colours quickly. [L1363, 2023]

#### Workflow and drafts

- Sketch the mobile and desktop layouts in a design tool before building in PageFly. Design tools such as Canva or Photoshop let you export the images straight into PageFly. [L1462, undated]
- PageFly is opened from the Shopify admin under Apps, then PageFly. Saving a page keeps the draft, but changes only go live when the page is published, so keep test pages unpublished until the layout is finished. [L1462, undated]
- Test pages in PageFly should stay unpublished while you work on them. Save them as drafts and do not publish until the layout is finished. [L1462, undated]

### PageFly layout system

#### Grid and sections

- Web page layouts are built from stacked rows, and each row holds side-by-side columns. Grid systems usually use 12 columns because 12 divides cleanly into both 3 and 4 columns. [L1462, undated]
- Stacking many sections on mobile makes a landing page very long and tiring to scroll. Decide early which blocks can share a row with two or more columns on mobile. [L1462, undated]
- Uneven grids are built by splitting a row into proportions, such as one full-width row, or a 50% column next to a section split into two 25% parts. Combining rows and nested columns creates complex layouts. [L1462, undated]

#### Building a two-column product section

1. Click Plus, then Layout, and insert a two-column row.
2. Select the row and, in the General tab, turn off Fixed width so the section runs edge to edge.
3. In the General tab, turn off the row's column spacing, which PageFly adds by default.
4. Remove the row's top and bottom padding.
5. Select each column and set its background color under Styling > Background color, using a six-digit hex code.
6. In the first column, add the heading, the star rating icon, the rating text and the review images. Set images to block where they must stack, or to inline and fixed width where they must sit side by side.
7. In the second column, add the product title, the price, the description and the product images, then adjust the image widths.
8. Add inside padding on the columns, not on the section, so colored column backgrounds stay full-bleed.
9. Switch between desktop, laptop, tablet and mobile views and adjust the padding and column counts for each device. [L1462, undated]

- Column background color is set under Styling > Background color, where a hex code can be typed into the field. Use the same hex code for other elements that should match the accent color, such as star icons or borders. [L1462, undated]
- If a column has a background color, padding applied to the parent section pushes the colored background away from the edges. Put the inside padding on the column itself instead. [L1462, undated]

#### Spacing and the box model

- In the box model, padding is the space inside an element between its content and its border, and margin is the space outside the element that separates it from neighbouring elements. [L1462, undated]
- In PageFly, set padding and margin under the element's Styling tab. Enter one value for all four sides, or enter separate values for top, bottom, left or right. [L1462, undated]
- In PageFly, edits made on desktop cascade down to tablet and mobile unless a smaller device has its own value. Edits made on mobile do not flow back up to desktop. [L1462, undated]
- If a mobile value is left empty, PageFly applies whatever padding or margin you add on mobile to that element. To remove inherited spacing on mobile, enter 0 for that value explicitly. [L1462, undated]
- Text placed directly against a border looks cramped. Add inside padding so the content sits clear of the edge. [L1462, undated]
- An inner block groups several elements so one margin or padding value moves them as a single unit. Use this to center a text stack or to space a group of elements from the element above. [L1462, undated]
- A common starting value for inside padding on mobile in PageFly is 15 px on each side. Adjust the value for each individual layout rather than applying it everywhere. [L1462, undated]
- Excess inside padding in a narrow column squeezes text onto too many lines. Reduce the padding on smaller devices before reducing font sizes. [L1462, undated]

#### Borders

- Borders are set under Styling > Border, where you can choose a color, a width and which sides get a border. Border radius rounds the corners, and the More settings option gives the radius value. [L1462, undated]
- To place a border on only one side of a PageFly element, set a border width and color for that side and make the other three sides transparent or zero. This leaves a single accent line, such as a vertical bar on the left of a review or feature block. [L1462, undated]

#### Display, image and text sizing

- Block elements take the full width of their container and stack on top of each other. Inline elements sit next to each other on the same line and only take the width they need. [L1462, undated]
- Inline elements do not accept custom height and width values. Inline-block elements sit side by side like inline elements but accept width and height settings. [L1462, undated]
- Images are inline by default, but PageFly displays them at 100% width. To place several images next to each other, set the image width yourself or switch them to inline display. [L1462, undated]
- To set a fixed image width in PageFly, select the image, open the General tab, and set Enable for width to yes. Then enter a pixel value, for example 100 px for a small logo or icon. [L1462, undated]
- Set PageFly image alignment under Styling to left, center or right. Setting text align to center on a row centers all text and inline elements inside that row. [L1462, undated]
- Use a heading for the page title and smaller headings for sections. Set font family, bold, and size under the element's typography settings to build a clear hierarchy. [L1462, undated]
- Set an embedded video to a 4:3 aspect ratio in the General tab for a shorter, wider frame. Choose a different ratio if the layout needs a taller video. [L1462, undated]
- Applying display flex to an image in PageFly can crop the image when the image has a minimum width. After switching an image to flex, check the preview and adjust its width or switch it back to block if it is clipped. [L1462, undated]
- A review line on a product section can be built from three inline items in one row: a small star icon, a text line with the review count, and a logo. Give the images a fixed pixel width, such as 100 px for small icons, and add a 10 px margin on each side to space them evenly. [L1462, undated]

#### Positioning

- Position relative moves an element away from its original spot using top, bottom, left or right values, and the space it occupied stays reserved. Negative or positive margin, by contrast, moves the elements below it as well. [L1462, undated]
- Position absolute fixes an element inside its nearest container, and that container must have position relative. Without a relative parent, the absolute element will not stay where you place it. [L1462, undated]
- Position static is the default for every element. Set an element back to static to reset positioning that was previously changed, for example on mobile. [L1462, undated]
- Set an element to position fixed with top 0 and left 0 to pin it to the top of the browser window. This makes a sticky navigation bar that stays visible while the visitor scrolls. [L1462, undated]
- A PageFly element set to position fixed may not appear at all until it has a width. Setting a width, such as 50%, makes it visible so the position can be checked, and the width can be changed afterwards. [L1462, undated]
- Use margin and relative positioning for most element placement, because they keep the surrounding layout predictable. Reserve position absolute for small elements inside a container that is already sized and set to position relative. [L1462, undated]

#### Flexbox, grid and centering

- Set display to flex under the element's Styling tab to turn it into a flexbox container. Then use flex direction (row, row reverse, column, column reverse), align items, align content and justify content to control position. [L1462, undated]
- Flexbox creates fluid layouts that wrap items onto the next line when they reach their minimum width. This suits forms such as name, email and submit fields, where the layout should adapt to the screen size. [L1462, undated]
- Grid gives precise control over proportions and placement, while flexbox gives easier control over direction and alignment. Use grid for fixed column layouts and flexbox when items need to reverse order or center easily. [L1462, undated]
- To center content vertically and horizontally in PageFly, set the container to display flex and set align items, align content and justify content to center. This replaces margin-auto and padding hacks. [L1462, undated]

Reorder columns for mobile so the title appears above the product image:

1. Select the row and set its mobile columns per line to 1 so the columns stack.
2. Under the row's Styling tab, set display to flex.
3. Set flex direction to column reverse so the second column appears first.
4. Remove any column padding that is too wide for the narrow screen, then set padding of 15 px on each side as a starting point.
5. Check the layout in mobile preview and adjust the spacing. [L1462, undated]

#### Mobile and device checks

- Check every device view after each change, including desktop, laptop, tablet and mobile. A layout that works on a wide screen can squeeze text into narrow columns on smaller screens. [L1462, undated]
- On mobile, change review text or other inline items to block display when they spill past the screen edge. Block display forces each item onto its own line and keeps the text inside the container. [L1462, undated]

#### Backgrounds and sliders

- Set a background image on a column under Styling > Background. Choose cover to fill the area, set background repeat to no repeat to stop tiling, and center the image position so the main subject is visible. [L1462, undated]
- Opacity applies to the whole element, so lowering it on a background image also fades the background color set on that same element. Pre-darken the image in a design tool with a semi-transparent black overlay instead, and export it. [L1462, undated]
- The PageFly slideshow element holds slides, and each slide can be duplicated after styling. The General tab controls the navigation style, the partial items display, rewind and auto play. [L1462, undated]
- Showing a partial next slide in a slideshow signals to visitors that the content scrolls, which encourages them to swipe or click through the remaining items. [L1462, undated]

#### Further details

- Place free returns messaging (e.g., '30-day Free Returns') as a simple text widget below the Add to Cart button at the moment of purchase decision, ensuring high visibility at the critical conversion point. Implementation: 4 clicks in Visually. [L0197, 2025-26]

- PageFly is a landing page builder used to create the sales page for the digital product on Shopify. [L0513, undated]


Part 36 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/35-product-page-layout-and-conversion.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/37-discounts-offers-email-capture-and-post-purchase.md
