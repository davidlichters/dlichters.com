<!-- part of ecom/deep/04-store-build-and-shopify.md -->
Part 18 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/17-collections-tags-and-filters.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/19-navigation-and-menus.md

### Collection templates

#### Template basics

- The Theme templates section of the collection editor has a Collection template field set to "collection" by default. This is the template customers see. Leave it at the default unless you have a reason to change it. [L1303, 2021-22]
- The Collection availability section lists the sales channels the collection is published to. On a new store it reads that the collection will be available to one sales channel, Online Store, with a Schedule availability option beneath it. [L1303, 2021-22]
- One template can be assigned to many collections. One default template covered 30 collections in the example. Separate templates are only needed if some collection pages must have a different sidebar or other layout. [L0369, 2020-26]
- Each custom collection template affects only the collection it is linked to. Separate templates can therefore be built for each collection, with different text, images and layout. Layout changes such as alignment, image width, hiding the button or adding sections are made in the template editor. [L0368, 2020-26]

#### Creating a custom template

Procedure, merged from the course variants:

1. Go to Shopify admin > Online Store > Themes > Customize. [L0255, 2025; L0368, 2020-26]
2. Open the template dropdown and select Collections. Click Create template. [L0255, 2025; L0368, 2020-26]
3. Name the template after the collection or its keyword, for example "hybrid surfboards". [L0255, 2025; L0368, 2020-26]
4. Base the template on the default collection. Set the preview to that collection, so the layout shows real products. [L0368, 2020-26]
5. Add sections. Click the plus icon "Add section" and choose the section type, such as Rich text, collapsible content or images. [L0255, 2025; L0368, 2020-26]
6. Drag sections to the desired order. [L0255, 2025]
7. Save the template. [L0255, 2025]
8. Go to Products > Collections in the admin and open the collection. [L0255, 2025; L0368, 2020-26]
9. Under Theme template, change "Default collection" to the new template. [L0255, 2025; L0368, 2020-26]
10. Click Save and check the page with View. The content appears on the collection page. Without step 9 the template stays assigned to zero collections and the custom layout never appears. [L0255, 2025; L0368, 2020-26]

#### Rich text and sections

- Rich text content procedure: in the collection template editor, click the plus icon "Add section" and choose Rich text. Replace the filler text "talk about your brand" with the target keyword, prefixed by a qualifier such as "shop". Paste the edited description into the text box and save. [L0368, 2020-26]
- Sections can be stacked on the same template. Individual buttons inside a section can be hidden by hovering over them, or deleted if they are not needed. [L0368, 2020-26]
- An "image with text" section places an image next to text. Image height and width, text alignment and animation can be changed. It can split a long collection description into blocks, for example one paragraph per column with an image beside it. [L0368, 2020-26]

#### Manhattan theme: template editing

Procedure to edit a collection page in the Manhattan theme:

1. Open the Shopify admin. [L0369, 2020-26]
2. Go to Online Store > Themes. [L0369, 2020-26]
3. Click Customize and confirm that the Manhattan theme is the active theme. [L0369, 2020-26]
4. Open the page dropdown at the top and select Collections. [L0369, 2020-26]
5. Open the default collection template, which is the template used by the collection pages. [L0369, 2020-26]

- Breadcrumbs option: shows Home > current collection above the products. It should stay set to show. The option can be set to hide, but hiding it is not recommended. [L0369, 2020-26]
- Keep breadcrumb navigation enabled, since it helps both SEO and customer navigation. [L0370, 2021-22]
- The Collection banner section can show a collection image above the products. Uploading a collection image is not recommended in this layout, because it pushes the product grid and filters further down the page. [L0369, 2020-26]
- The Collection banner section has settings for image height, a color scheme and padding. The stock scheme is background 1, with a white background and black text. Gray and accent color schemes are available. Padding moves content up or down. Leave these on the stock values unless a change is needed. [L0369, 2020-26]
- The main menu can appear in the sidebar of a collection page, but it is not needed there because the main menu already sits at the top of the store. It can be removed from the sidebar. A different menu can be selected in the same settings if one is needed at the top. [L0369, 2020-26]

#### Description placement

- Place long collection descriptions below the product grid, not above it, so the products stay above the fold. [L0368, 2020-26]
- The description shown above the products is the one left blank at creation and added later. Use it for SEO content. [L0371, 2020-26; L1312, 2020-26]

### Collection images

- Upload collection cover images directly in Shopify Admin > Products > Collections. This stops Shopify from randomly selecting product images as thumbnails, which would look unprofessional and undermine perceived store legitimacy. [L0101, undated]
- A collection without its own image uses the picture of one of its products as the cover. This looks unfinished when the store has few products. Upload a dedicated image to each collection. [L0775, 2020-26; L1309, 2020-26]
- Upload procedure:
  1. Go to Products > Collections and search for the collection. [L0775, 2020-26]
  2. Open it and click Add image under the image area. [L0775, 2020-26; L1309, 2020-26]
  3. Select the file and click Open. [L0775, 2020-26]
  4. Click Save and check the homepage preview. [L0775, 2020-26; L1309, 2020-26]
- Conflict on the collection banner: outside the Manhattan banner, upload a dedicated image to each collection [L0101, undated; L0775, 2020-26]. Inside the Manhattan Collection banner, uploading an image is not recommended, because it pushes the grid and filters down [L0369, 2020-26].

### Collection page layout

#### Opening the collection page editor

- To reach the collection layout editor: Shopify admin > Online Store > Themes > Customize. In the editor's top dropdown, switch the page from Homepage to Collections, then pick the Default collection to preview how any collection page looks. [L0890, 2020-26; L0103, undated; L1010, 2020-26]
- Edit theme > change the page view dropdown from Home page to Collections > select Default collection to manage collection navigation. [L0146, undated]
- Expand the Product Grid section using its expand or collapse arrow. The Product Grid section controls how products display and where filters appear. [L0103, undated; L0890, 2020-26]
- By default, a collection page shows every product in that collection, followed by the footer menu and any other sections added to the page. Tag list filters are added on top of this default layout through the Product Grid section. [L0890, 2020-26]

#### Sidebar and filter layout

- A plain grid is the default. It is functional but basic. Adding filters improves usability and shows potential suppliers a scalable store structure. [L0103, undated]
- Sidebar on or off (sources differ, both apply):
  - Keep the sidebar and filters from the start on a new store with demo or few products. A few simple filter lists are enough and should be set up early, then extended as more supplier products with more variations arrive. [L0369, 2020-26; L1098, 2019+; L1522, 2021-22]
  - Turn the sidebar off when no filters are needed yet. Go to the collection page section in the theme editor and uncheck "Show sidebar" under the SIDEBAR settings. This removes an empty white column. [L0370, 2021-22]
- Collection sidebar filtering helps visitors narrow products by style or print. [L1098, 2019+]
- Effective filters let shoppers narrow similar products by the attributes they actually search for. Without filters, shoppers struggle to tell similar products apart. [L1522, 2021-22]
- The Manhattan theme includes filtering by default, so no third-party filter app is needed. Visitors can filter by availability (in stock or out of stock), by minimum and maximum price, and by Types and Vendors. Vendors shows the brand entered when the product was uploaded. [L0369, 2020-26]
- Product filters based on product tags need no extra cost. Filtering by metafields usually requires custom code and is more expensive. [L0666, 2024]
- Default Types and Vendors blocks can be deleted from the Manhattan sidebar and replaced with custom tag list blocks. The defaults are quick to recreate later if needed. [L0369, 2020-26]
- Settings for the Collection Grid Page in the theme editor include: Enable side filter menu; Collection settings with options to filter products on the page and set text, pricing and stock colors; and Pagination settings with Enable pagination, Products per page and an option to load all products on a single page. [L1013, 2026]
- Pagination source conflict: one source shows the pagination settings in the theme editor [L1013, 2026]. one source says pagination on Shopify is usually set in the theme code, so a developer may be needed to show all products on a category page [L0575, 2014]. Check the theme editor first. If no load-all setting is there, a developer is required.

#### Utility bar and other layout settings

- Theme editor > Collection pages > Utility bar. Options are Show 'Sort by' dropdown, Show products per page links, Show grid/list view toggle and Show product counts. Collection pages also offer a Products per page value, a Pagination method (such as Jump-to-page) and a collection image banner at the top. These can stay at their defaults during the build phase. [L0370, 2021-22]
- A collection page lets shoppers buy several different products in one visit, which raises average order value and makes cross-selling easier. It suits products that customers buy in multiples or alongside each other. [L0388, 2024+]

### Filter setup with tag lists

#### Adding a tag-list filter

Procedure, merged from the course variants:

1. Open Shopify admin > Online Store > Themes and open the theme editor. [L0890, 2020-26]
2. Switch the dropdown at the top from Homepage to Collections and select the Default collection preview. [L0890, 2020-26; L0103, undated]
3. Expand the Product Grid section. [L0103, undated; L0890, 2020-26]
4. Click Add block and choose Tag List. [L0103, undated; L0890, 2020-26]
5. Give the tag list a title, for example "Surfboards by Type", and enter the product tags to filter by, for example shortboards, mid length, longboards, hybrid. [L0103, undated; L0890, 2020-26]
6. Click Save. [L0103, undated; L0890, 2020-26]
7. Go to the live store, open the collection page and refresh it. The filter appears in the left navigation. [L0890, 2020-26; L0103, undated]
8. Repeat steps 4 to 6 for further filter dimensions, for example a "Color" tag list with yellow, red and blue. Drag the new tag list below the existing ones. [L0890, 2020-26; L0103, undated]
9. Click Save and refresh the live collection page to test. [L0890, 2020-26; L0103, undated]

#### Manhattan theme: adding a tag-list filter

1. Open the collection template in the theme editor. [L0369, 2020-26]
2. In the sidebar section, click Add block and choose Tag list. [L0369, 2020-26]
3. Give the block a name that describes the filter, such as a product type or a color. [L0369, 2020-26]
4. Enter the tag names separated by a comma followed by a space, using exactly the same spelling as the tags on the products. [L0369, 2020-26]
5. Click Save. [L0369, 2020-26]
6. Drag the block to the top of the sidebar if it should appear first. [L0369, 2020-26]
7. Click Save again. [L0369, 2020-26]

#### Updating filters after new products arrive

1. Review newly uploaded products. [L0146, undated]
2. Add relevant tags to each product, for example surfboard type, color or skill level. [L0146, undated]
3. Return to the collection page in the theme editor. [L0146, undated]
4. Expand tag lists in the collection sidebar based on the tags you added. [L0146, undated]
5. Save changes. [L0146, undated]

#### How filters behave

- A tag list block is not shown in the sidebar if none of the products in the store carries any of its tags. It appears once at least one product carries one of those tags. [L0369, 2020-26; L0103, undated]
- Shopify only displays tags as filter options if products with those tags exist in the collection. Tags without matching products do not appear, even if they are defined. [L0103, undated; L0890, 2020-26]
- Multiple tag lists combine. Selecting one value from each list narrows the results to products that carry both tags. For example, Long Boards AND Blue shows only products with both. [L0103, undated; L0890, 2020-26]
- Example of stacked filters: selecting "Longboards" then "Blue" displays only products tagged with both. [L0103, undated]
- When a visitor selects a filter, only products carrying that tag are shown. The other filter blocks then show only options that exist among the remaining products, so the number of options shrinks as more filters are applied. [L0369, 2020-26]
- Visitors can clear a selected filter by unchecking it. This restores the other filter options that were hidden. [L0369, 2020-26]
- One product can carry several tags from the same tag list and then appears under every matching option. For example, a yellow surfboard tagged with both mid length and longboard shows under both options in a product type filter. [L0369, 2020-26]
- Test case: a product tagged with both a product-type tag and a color tag appeared only when both matching filters were selected. The page then returned only the products carrying both tags, here two products in the same collection. [L0890, 2020-26]

#### Filter examples

- A filter block titled "Surfboards by Type" with tags shortboards, mid length, longboards and hybrid appears as clickable options on the left side of the collection page. [L0103, undated]
- A filter block titled "Color" with tags yellow, red and blue can sit below the Surfboards by Type filter. Visitors can refine by color after or instead of board type. [L0103, undated]
- A color filter can be built as a tag list named Color with yellow, red and blue, each added to the matching products. Choosing yellow limits the page to yellow products and can remove other options, such as a product type the yellow product does not have. [L0369, 2020-26]
- A featured filter can be built as a tag list with bestsellers, staff picks, new arrivals and top rated. The tags must already exist on products in the store. [L0369, 2020-26]

#### What to show on a demo store

- For a demo store, add only one filter group: filter by product type to match the main menu structure. This shows a scalable structure while keeping the store simple and clean for supplier review. [L0103, undated]
- Demo-store scope differs by source. Start with one group by product type [L0103, undated] or with a few simple lists [L0369, 2020-26]. Extend the lists as more supplier products with more variations are added [L0369, 2020-26].
- Working collection filters, even on a small demo store, signal to suppliers reviewing it that the store has a complete, usable setup. Set up basic filters before contacting suppliers. [L0369, 2020-26]

#### Checking the storefront

- A newly added tag list may not appear in the theme editor preview after saving. Save, then open the live collection page and refresh it, rather than relying on the preview. [L0890, 2020-26; L0369, 2020-26]
- A tag list only shows on the storefront once the saved changes are live. After saving tag list changes, reload the live collection page to confirm the filter appears and works. [L0369, 2020-26]
- After a product's tags change, the storefront filter may lag briefly. Refresh the live collection page after saving. If the new value is still missing, wait a moment and refresh again before troubleshooting. [L0890, 2020-26]

#### Further details

- Tag-based collections work by assigning each product a relevant tag and setting the collection to automatically include all products with that matching tag. [L0083, undated]

- Collection filters are based on product tags. Only products with matching tags appear in filter options. [L0146, undated]

- A collection works as a category that lets visitors browse and filter products. Collections are usually organized by product type, brand or another attribute that customers would want to filter by. [L1303, 2021-22]


Part 18 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/17-collections-tags-and-filters.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/19-navigation-and-menus.md
