<!-- part of ecom/deep/04-store-build-and-shopify.md -->
Part 19 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/18-collection-templates.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/20-quick-links-and-policy-pages.md

## Navigation and menus

### Menu basics in Shopify

- Menus are managed in the Shopify admin under Content > Menus [L0092, undated; L1319, 2020-26].
- Older course material (2021-2022) gives the path as Online Store > Navigation [L1303, 2021-22; L1320, 2020-26].
- Menu items can link to collections, products, pages, blog posts, the homepage, the search page, policy pages, or external URLs. Choose the link type in the item's Link field before saving [L1319, 2020-26; L0092, undated; L1320, 2020-26].
- Menu item names are free text and do not have to match the linked page or collection. A refund policy can be listed as Returns/Exchanges [L1319, 2020-26; L1320, 2020-26].
- Policies appear under the Policies heading in the link search once they exist [L1320, 2020-26].
- Shopify does not allow a menu item without a URL [L1009, 2020-26].
- Create all collections, pages, and policies before building menus, because menu items can only link to existing items. This includes shortcut collections such as Bestsellers and On Sale Now [L1319, 2020-26].
- When searching for a collection in the link field, copy its exact name from the collections list and paste it. The search matches text, so a near-miss can return the wrong result [L1320, 2020-26].
- Give each menu a unique name. Two menus with the same name cause confusion [L1285, 2024].
- Each menu gets a handle generated from its title in lowercase with hyphens, for example main-menu. The theme uses the handle to find the menu, so the default handle is what the theme looks up [L1303, 2021-22].
- The header menu title is not displayed on the storefront and can keep a plain internal name. Footer menu titles appear as visible headings and must read as meaningful labels such as Company or Products [L1303, 2021-22].
- Save after every change, because lost connections can discard unsaved work [L1303, 2021-22].
- Save, then refresh the storefront. Menu changes can take a minute or more to appear [L1319, 2020-26; L1320, 2020-26].
- Menus show on the live site only after the theme loads them, so check the live page to catch missing links early [L1303, 2021-22].
- Before replacing a menu, take a screenshot of its items so the original structure can be rebuilt [L1010, 2020-26].
- Deleted menu items can be re-added at any time, so removing a wrong item is not a lasting error [L1320, 2020-26].
- The arrow beside a parent item in the menu editor collapses or expands its sub-items. This only helps while editing and does not change the storefront [L1319, 2020-26; L1320, 2020-26].

### Default menus in a new store

- Sources differ on how many menus a new store starts with. One source says three default menus, and most themes include at least three menu spaces (a main menu and two footer menus) [L1319, 2020-26]. Another says two default menus: Footer menu and Main menu [L1320, 2020-26]. Check the menu list in your own admin.
- The default main menu contains Home, Catalog, and Contact [L1326, undated].
- The default footer menu is initially labelled Search [L1320, 2020-26].
- In older (2021-2022) default setups, the default footer menu loads the main menu items, which is not useful in the footer. Replace it with purpose-built footer menus [L1303, 2021-22].
- If a theme has different menu locations, the menu positions change but the same menu types can still be built [L1319, 2020-26].

### Planning the three menus

- Shopify menus organize site navigation in headers and footers, so visitors can find products and important pages without deep browsing [L0092, undated].
- Menus link to collections, pages, policies, search, and external links. Menus are organized by place: the main menu runs across the header and can hold dropdowns, the sidebar menu filters products on collection pages, and footer menus hold links at the bottom of the site [L0092, undated; L1320, 2020-26].
- Build three menus for a professional store [L0092, undated]:
  - Main Menu: product navigation at the top, using collections.
  - Footer Menu: category and promotional links.
  - Quick Links Menu: required pages and policies.
- The Manhattan theme supports all three menus by default. Other themes typically support similar menu structures [L0092, undated].
- The one source theme uses Main menu, Footer menu, and Secondary footer menu. These are assigned to the header and footer positions separately in the theme customization [L1320, 2020-26].
- The menu structure does not need to be perfect and can change as the store evolves [L0092, undated; L1319, 2020-26].
- Navigation and collections are temporary at an early stage. Revisit and adjust all menus and collections just before launch so they match the products actually on the site [L1303, 2021-22].
- There is no required number of top-level items or dropdowns in a main menu. Build the structure from the real product categories and expect to change it as the catalogue and suppliers grow [L1319, 2020-26].
- Older (2021-2022) reference structure for a store with five collections:

| Menu | Location | Purpose | Items |
|---|---|---|---|
| Main menu | Header | Product category navigation | Five collections, with optional dropdown subcategories |
| Top Bar menu | Very top of the site | Business and policy pages | About Us, Contact Us, Shipping, Easy Returns, Privacy and related pages |
| Company footer menu | Footer | Company and legal pages | About Us, Privacy, Terms of Service, Contact Us |
| Products footer menu | Footer | Entry points to categories | The same five collections, no dropdowns |
| Shopping info footer menu | Footer | Buying information | Shipping, Easy Returns, Price Match |

[L1303, 2021-22]

### Building the main menu

#### Adding top-level category links

- Basic procedure, from the Main Menu in Content > Menus [L0092, undated]:
  1. Open Main Menu.
  2. Leave Home as the first item.
  3. Click Add Menu Item.
  4. Name the menu item after its collection.
  5. Set the link type to Collection.
  6. Select the matching collection.
  7. Click Save.

  [L0092, undated]

- Alternative procedure for the same task, with the default Home item kept [L1319, 2020-26]:
  1. Go to Shopify Admin > Content > Menus and open Main menu.
  2. Keep the default Home item.
  3. Click Add menu item.
  4. Enter the item name (for example Surfboards).
  5. In the Link field, choose Collections, search for the matching collection, and tick its checkbox.
  6. Click Save.
  7. Add each category the same way, one item per collection.
  8. For a dropdown, add the sub-category item the same way, then drag its dot handle to the right so it nests under the item above.
  9. Repeat nesting for every sub-category that belongs to that parent.
  10. Click Save, then refresh the storefront to check that the dropdown shows under the parent item.

  [L1319, 2020-26]

- Older alternative (2021-2022) for five collections [L1303, 2021-22]:
  1. Go to Online Store > Navigation and click the title of the main menu.
  2. Delete the default items you do not want, such as Home and Catalog.
  3. Click Add menu item.
  4. Enter the name exactly as it should appear on the site, matching the collection name.
  5. In the Link field, search for the collection by name or paste its link, then select it.
  6. Click Add.
  7. Repeat steps 3 to 6 for each of the five collections.
  8. Click Save menu.

  [L1303, 2021-22]

- Second alternative [L1320, 2020-26]:
  1. Open the Main menu in Online Store > Navigation and remove unwanted items (for example Contact and Catalog) with Delete or Remove.
  2. Click Add menu item, search the category name, and select the matching collection. Leave the filter collection with tags field empty and click Add.
  3. Click Save menu, then refresh the storefront.
  4. To create a dropdown sub-item, add the item as a normal menu item, then drag its dot handle to the right under the parent item. It then appears as a submenu with a small arrow icon.
  5. Repeat for each subcategory, save, and verify on the store by hovering over the parent.

  [L1320, 2020-26]

- Renaming an existing item: in Online Store > Navigation, change Catalog to Collections, click Apply, then click Save [L1326, undated].

#### Deciding on Home

Sources disagree on the Home item:

- Keep Home as the first item, as in the default main menu [L0092, undated; L1319, 2020-26; L1326, undated].
- Remove Home from the main menu. Open Content > Menus, open the main menu, click delete on the Home item, then click Save. The homepage still works without the link [L0972, 2025].
- one source advice: put Shop first, before Home. Do not highlight Home, because the aim is to send visitors into the shop. Keep the logo as a homepage link, since clicking it already returns to home [L1225, 2025].
- Use Shop-first when the aim is to send visitors into the shop, and keep Home when it is a sensible entry point. Both are described in the sources without a stated rule for choosing between them. [L0972, 2025; L1225, 2025]

#### Ordering and shortening the header

- Order header categories from left to right by sales, with the best-selling category first and the weakest last [L1325, 2020-26; L0551, 2020; older].
- In a new store, make an estimate and change the order later based on sales data [L0551, 2020; older].
- Only lead with a category that is clearly the top seller [L1325, 2020-26].
- Shorten the header menu. Start it with a Shop item that opens a dropdown listing the main product categories by plain names, such as bracelets, earrings, necklaces, rings, and blankets. Avoid vague category names that visitors cannot interpret [L1325, 2020-26].
- Keep the menu as simple as possible and include only links customers will actually use. Look at top competitors, then check your own menu from a customer's point of view to decide what to remove [L0551, 2020; older].
- Use the header space for navigation to categories and collections, not for policy links, to maximise navigation options [L0255, 2025].
- Place the logo on the left of the header so the menu takes less space and does not cover product titles [L1225, 2025].
- Test the menu for hover sensitivity bugs before scaling traffic. A product page navigation that forces a visitor into another product page when the cursor hovers over the menu blocks the shopping experience [L1225, 2025].
- Each top-level link can be a plain link, a standard dropdown, or a mega menu, depending on how many subcategories it has. The choice should follow how the shopper navigates the store [L1010, 2020-26].
- The main menu supports plain links and dropdowns, which is enough for an early demo store [L1018, 2020-26].

#### Store types and special items

- A store with only three main navigation items (Shop Now, Track Your Order, and Support) is missing category links. Adding dropdown links for each product category helps visitors find what they want [L0351, 2026].
- Place Subscribe and Bundles in the main top navigation so the recurring and multi-pack options are visible on every page. This keeps higher order values one click away instead of buried in a single product page [L0524, 2023].
- When a store is built around one product category, the top navigation should link straight to the product types within it, such as dress types. Add-on products do not need to take up navigation or homepage space [L0838, 2020-26].
- In a gift store, build navigation and homepage sliders by recipient group, and show the best sellers for each group under its own heading. Questions such as what people buy for men, women, parents, or grandparents each get their own section [L0355, 2020-26].
- Adjust the main navigation to the products you actually have after supplier approvals, because categories from the demo store are often incomplete. Every product must be reachable from the main menu through a category, subcategory, or product type [L1145, 2021-22].
- Add a main menu item called Brands or Our Brands. Its dropdown lists every approved brand, and each entry links to a brand collection that contains only that brand's products [L1145, 2021-22].
- Preinstalled collections that Shopify creates by default do not need to be added to the main menu. Keep the main menu limited to the product categories you actually sell [L1319, 2020-26].
- When the store is live and a collection is empty, remove it from the menus instead of deleting it. Add it back once it contains live products [L0971, 2024].
- In a one-product store, put a direct link to that product in the header. Visitors on any page can then return to the product page in one click [L1326, undated].
- Procedure to add a single product link to the header of a one-product store [L1326, undated]:
  1. Go to Products and create the product, using the product name as the title and uploading its image.
  2. Go to Online Store > Navigation and open the Main menu.
  3. Add a menu item and name it with the product name.
  4. Select the Products option and choose the product.
  5. Click Apply, then Save.
  6. Open Online Store > Themes > Customize and confirm the product link appears in the header.

  [L1326, undated]
- To show a collection link in the navigation, add it as an item in the menu under Online Store > Navigation. The collection link then appears in the header menu [L1326, undated].
- Do not send store visitors to Amazon links, because customers who leave for Amazon are lost sales. Accepting Amazon Pay as a payment method on your store is fine [L0551, 2020; older].

### Dropdowns and nesting

#### Creating a dropdown

- Nesting a menu item: drag the dot handle on the left side of the item to the right, and it becomes a sub-item of the item directly above it. A nested item shows as a dropdown under its parent in the storefront, with a small arrow beside the parent [L1319, 2020-26].
- Older method (2019): click the menu item that should be the sub-category, drag it slightly to the right under its parent item, then click Save. The sub-items then appear when you hover over the parent item [L1068, 2019; older].
- Older note (2020): nested navigation menus are created by dragging each item where you want it to appear. Nested menus are available in any theme; a custom menu requires an app [L0468, 2020; older].
- Procedure for building a dropdown in the main menu, from the 2025 course [L1116, 2025]:
  1. Go to Content > Menus > Main menu.
  2. Open the parent item, for example Accessories, to see its nested items.
  3. To test or reposition, drag a child item out with its drag handle so it becomes top-level, then click Save.
  4. Drag the item back under the parent so it sits as a nested child. Hold it while moving, then click Save.
  5. Reload the storefront and confirm the parent item now opens a drop-down.

  [L1116, 2025]
- Older procedure (2021-2022) for dropdown subcategories [L1303, 2021-22]:
  1. In the menu editor, click Add menu item and enter the name of the sub-item, such as a product subcategory.
  2. Link the item to a page or collection. If no page exists yet, a placeholder # link can be used, but it only makes the item appear and sends visitors to the homepage.
  3. Drag the new item up and slightly to the right so it sits directly beneath the parent menu item.
  4. Repeat for each subcategory.
  5. Click Save menu.

  [L1303, 2021-22]
- Pattern for a dropdown: the parent item links to a collection, the subcategory items are nested under it, and a final sub-item named All [category] links back to the parent collection [L1320, 2020-26].
- Example structure built in the lesson [L1319, 2020-26]:

| Menu item | Level | Links to |
|---|---|---|
| Home | Top level (default) | Home page |
| Surfboards | Top level | Surfboards collection |
| Hybrid Surfboards | Under Surfboards | Hybrid surfboards collection |
| Shortboards | Under Surfboards | Shortboards collection |
| Mid-Length Boards | Under Surfboards | Mid-length boards collection |
| Long Boards | Under Surfboards | Long boards collection |
| All Surfboards | Under Surfboards | Surfboards collection (catch-all link) |
| Swimwear | Top level | Swimwear collection |
| Bathing Suits | Under Swimwear | Bathing suits collection |
| Wetsuits | Under Swimwear | Wetsuits collection |
| All Swimwear | Under Swimwear | Swimwear collection (catch-all link) |

  The swimwear items are demo examples to show the nesting method and are not a product recommendation [L1319, 2020-26].
- Surfboard example from the same lesson: nest Hybrid Surfboards, Shortboards, Mid-Length Boards, Longboards, and All Surfboards under the main Surfboards item, and nest Bathing Suits, Wetsuits, and All Swimwear under Swimwear [L0092, undated].
- Procedure to add sub-items under Surfboards and check them [L0092, undated]:
  1. Add additional menu items for sub-collections.
  2. Drag sub-items slightly to the right under the main item to nest them as dropdown items.
  3. Save the menu.
  4. Refresh the store to confirm dropdown behaviour.

  [L0092, undated]
- Checking a dropdown: hover over the top-level item in the live preview. A mega menu opens a multi-column panel with sub-groups, while a standard drop-down shows a simple list of links [L1018, 2020-26].
- To restore a moved or wrong item: drag it out again to move it back to the top level. Items can be deleted and re-added at any time [L1320, 2020-26].

#### Price and filter dropdowns

- To build a By Price dropdown in the main menu [L1320, 2020-26]:
  1. Add a menu item named By Price and link it to Products > All products, because no price collection exists under that name.
  2. Under it, add one sub-menu item per automated price collection, using the exact collection names (for example the under $100 range and the 100 to 500 range). Drag each one to the right so it nests under By Price.
  3. Save the menu and refresh the store. Visitors clicking By Price land on all products and can filter by price in the sidebar.

  [L1320, 2020-26]

#### Placeholder links in dropdowns

- Shopify does not allow a menu item without a URL. If the collection for a subcategory does not exist yet, point the item to an existing related collection as a placeholder and replace the link once the real collection is live [L1009, 2020-26].
- A placeholder # link on a dropdown item sends visitors to the homepage. Replace every placeholder with the real collection or page link before launch, or delete the item [L1303, 2021-22].
- If a collection does not exist yet, a mega menu section can be left unlinked or linked to a temporary collection, and the link should be updated once the real collection is live [L1009, 2020-26].
- In a live store, menu items should not all point to the general category page as placeholders. Each option needs its own collection, for example a beginner collection built from products tagged beginner, before the option is linked [L1010, 2020-26].

### Footer menus

#### Building the footer

- Procedure from the Shopify admin [L1319, 2020-26]:
  1. Go to Shopify Admin > Content > Menus and open Footer menu.
  2. Keep the default Search item.
  3. Click Add menu item and name it after the main category, for example Surfboards.
  4. Link it to the matching collection in the Collections list, and tick the checkbox.
  5. Add more common shortcuts the same way, such as Bestsellers and On Sale Now, each linked to its collection.
  6. Click Save and refresh the storefront to check the footer.

  [L1319, 2020-26]
- Another procedure with a different example set [L0092, undated]:
  1. Open Footer Menu.
  2. Remove or keep the default Search link.
  3. Add these menu items: Surfboards (collection), Best Sellers (collection), On Sale Now (collection).
  4. Save changes.
  5. Refresh the store to confirm updates.

  [L0092, undated]
- Starting footer content in one course [L1320, 2020-26]: rename the default footer menu (initially labelled Search) to the store name, for example Shaka Surfboards. Starting items are Search, the main niche category collection (for example Surfboards), the New Arrivals collection, and the On Sale Now collection. Save the menu. These four items are described as a sufficient starting point.
- Footer menus should contain common shortcuts such as bestseller and sale collections, the main product niche, and the search item. The exact contents can change over time and depend on your store [L1319, 2020-26].
- Footer links from an ecommerce course example: FAQ, Return and Refund Policy, Terms and Conditions, Shipping Policy, Delivery Times, Privacy Policy, and Contact Form. The example store also had a Sign Up and Save email box offering early access and special discounts [L0347, 2026].
- The store footer menu must link all five required pages (shipping, returns, privacy, terms, and contact us) so they are easily accessible [L0377, 2020-26].
- Older (2021-2022) footer setup [L0681, 2021-22]:
  1. Create the three footer menus in the navigation settings beforehand, for example Company, Our Products, and Useful Info.
  2. In the footer section, open each menu block and click Change.
  3. Select the matching menu (Company, Our Products, Useful Info) and click Select.
  4. Verify that each block now lists real pages or collections that exist on the site.

  [L0681, 2021-22]
- Older example content from the same course store [L0681, 2021-22]: the Company menu has About Us, Contact Us, Privacy, and Terms of Service. The Our Products menu has the product collections set up for the store. The Useful Info menu has Shipping, Easy Returns, Price Match, and Why Buy From Us.
- Footer menu rules:
  - Create at least two, and preferably three, footer menus, each with its own distinct title. Avoid generic titles such as Footer menu or Main menu [L1303, 2021-22].
  - Footer menus must stay flat, with no dropdown submenus, because nested items look poor in the footer [L1303, 2021-22].
  - Footer blocks display only the top-level links of a menu. Any drop-down items added to a footer menu will not appear on the live store, so build footer menus with the links that should be visible directly [L0681, 2021-22].
- Many themes support a second footer menu displayed in an additional column [L1320, 2020-26].
- Footer menu titles appear on the site as visible headings [L1303, 2021-22].

#### Secondary footer and policy menus

- A secondary footer menu is created via Online Store > Navigation > Add menu, named Quick Links. Typical items are About Us (Pages > About us), Privacy Policy and Terms of Service (both under the Policies section in the link search box), and Contact Us (Pages > Contact us) [L1320, 2020-26].
- To replace the footer quick links with a policy menu [L1326, undated]:
  1. Go to Online Store > Navigation and create a menu named Our policies.
  2. Add the policy pages to that menu.
  3. In the theme editor, open the footer and click the menu block.
  4. Click Change menu and select the Our policies menu.
  5. Click Save.

  [L1326, undated]


Part 19 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/18-collection-templates.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/20-quick-links-and-policy-pages.md
