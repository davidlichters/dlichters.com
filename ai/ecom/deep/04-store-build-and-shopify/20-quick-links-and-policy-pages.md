<!-- part of ecom/deep/04-store-build-and-shopify.md -->
Part 20 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/19-navigation-and-menus.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/21-search-bar-in-the-header.md

### Quick Links and policy pages

- Quick Links menu must contain these items in this exact order [L0092, undated]:
  1. About Us (Page)
  2. Returns / Exchanges (Refund Policy)
  3. Shipping (Shipping Policy)
  4. Privacy Policy (Policy)
  5. Terms of Service (Policy)
  6. Contact Us (Page)

  [L0092, undated]
- Procedure to build the Quick Links menu [L0092, undated]:
  1. Click Create Menu.
  2. Name it Quick Links.
  3. Add menu items in this order: About Us (Page), Returns / Exchanges (Refund Policy), Shipping (Shipping Policy), Privacy Policy (Policy), Terms of Service (Policy), Contact Us (Page).
  4. Use Pages or Policies when selecting link types.
  5. Save the menu.

  [L0092, undated]
- Second Quick Links procedure, with the policy and page sources spelled out [L1319, 2020-26]:
  1. Go to Shopify Admin > Content > Menus and click Create menu.
  2. Name the menu Quick Links.
  3. Click Add menu item, name it About Us, and link it to the About Us page in the Pages list. Tick the checkbox.
  4. Add an item named Returns/Exchanges and link it to the refund policy in the Policies section.
  5. Add an item named Shipping and link it to the shipping policy in the Policies section.
  6. Add an item named Privacy Policy and link it to the privacy policy in the Policies section.
  7. Add an item named Terms of Service and link it to the terms of service page.
  8. Add an item named Contact Us and link it to the Contact Us page in the Pages list.
  9. Click Save.
  10. Refresh the storefront and check that all six links are present.

  [L1319, 2020-26]
- Policy pages (refund, shipping, privacy, terms) must be selected from the Policies section. About Us and Contact Us are normal pages selected from the Pages list. Choosing from the wrong list links to the wrong page [L1319, 2020-26].
- Quick links menu in the footer: select the correct menu in the theme customizer footer settings, and it will appear [L0836, 2024].
- In the menu setup, the header menu must be set to Main menu, and the footer Quick links block must be set to the Quick links menu via Change menu [L1285, 2024].
- Older top bar menu (2021-2022) [L1303, 2021-22]:
  1. Go to Online Store > Navigation and click Add menu.
  2. Enter a title such as Top Bar menu.
  3. Add menu items linking to your business pages, such as About Us, Contact Us, Shipping, Easy Returns, and Privacy.
  4. Click Save menu.
  5. Make sure the theme supports a top menu before expecting it to appear on the site.

  [L1303, 2021-22]
- The top bar menu runs along the very top of the site, but only appears if the theme supports it [L1303, 2021-22].
- Terms of service and privacy policy pages should appear in more than one navigation location, such as a dropdown under the company item, the top bar, and the footer. Ad platforms may refuse to run traffic if they cannot clearly see these legal pages, so redundancy removes any doubt [L1303, 2021-22; older].
- The phone number, Privacy Policy, Terms of Service, and Contact Us links must appear in the header and footer of the site. Google checks for these, so missing links can cause approval problems [L1145, 2021-22; older].
- Conflict on policy links in the header: the 2025 advice says header menus should use their space for categories and collections, not policy links [L0255, 2025]. Older advice (2021-2022) puts policy and business pages in the top bar and the header, and ad review requires the legal links to be visible [L1303, 2021-22; L1145, 2021-22]. Use the top bar for policy and business pages, and keep the header main menu for categories, as the newer advice describes.
- Menu links may not appear immediately on the website after saving. This is normal, and final menu placement occurs during theme customization [L0092, undated].
- A newly saved menu may not show in the correct spot on the storefront right away. Check the menu placement in the theme settings before assuming the menu is broken [L1319, 2020-26].

### Mega menus

#### Deciding whether to build one

- Do not build mega menus for a demo store. Mega menus are expanded menus showing categories, skill levels, colours, and price ranges. Build them later, when real products are added [L0102, undated].
- A mega menu shows a dropdown as a multi-column panel that splits categories into sub-groups such as product type, level, or colour. It only pays off once the store has many real products with sizes, colours, or prices, so it can wait until then [L1018, 2020-26].
- In the Manhattan theme, the header settings contain an Add mega menu option. The desktop menu type can stay on mega menu, but adding the mega menu block is optional at the start and can be deleted again [L1018, 2020-26].
- Setting up detailed mega menus before any products are live means the menu will show empty or placeholder content, and links may point to the wrong place. Add the mega menu once products with variations are uploaded and collections exist [L1009, 2020-26].
- Mega menus make product variations such as size, colour, weight, or skill level easy to reach from the top menu. Customers get to the right product page faster, which tends to raise conversion rate. The feature is most useful once supplier products with several variations are on the store [L1009, 2020-26].
- A store can have several mega menus, for example one per main category, plus additional ones for subcategories such as stand-up paddle boards or car racks. Only the main niche category needs a mega menu to start [L1010, 2020-26].
- The mega menu is a multi-column dropdown in the Shopify header. It lets shoppers browse by category, type, skill level, or colour from the hover state of a top-level link, and it is meant to make the store easier to navigate and find products in [L1010, 2020-26].

#### What a mega menu is in the Manhattan theme

- In the Manhattan theme, a mega menu is a built-in dropdown option under the header settings in the Theme Customizer. It turns a top-level menu item into a wide panel that shows subcategories, filters, and featured products. It does not replace the standard menu, and only the items you choose need to be converted [L1009, 2020-26].
- The Manhattan theme includes built-in mega menu support through the Add mega menu option under Shopify Admin > Online Store > Themes > Customize [L0102, undated].
- Each mega menu affects only the item it is linked to. The other dropdowns keep their standard look, and each one needs its own name, link, sections, and featured products [L1009, 2020-26].
- A mega menu supports up to six columns, though fewer can be used [L1010, 2020-26; L0146, undated]. Each mega menu can have up to six columns [L0146, undated].
- A mega menu allows up to six sections, which can fill the full width of the screen. Use only as many sections as help customers filter and find products, because adding more can clutter the menu [L1009, 2020-26].

#### Fields in the mega menu settings

- The Manhattan theme's Theme Customizer under Header > Mega menu has these fields [L1009, 2020-26]:
  - Mega menu name (set to the collection name).
  - Mega menu link (the collection the top-level item links to).
  - Enable mega menu one item (switches the feature on).
  - An image and title for each section.
  - A link for each section title (can be left blank if no collection exists).
  - A select-menu field where a Shopify menu is chosen for that section.
  - At the bottom of each mega menu, you choose up to two products to feature.
- Each section must be switched on with its own toggle. The first toggle is labelled Enable mega menu one item, and the following sections use the same pattern (Enable mega menu two item, Enable mega menu three item, and so on), up to six sections in total [L1009, 2020-26].
- Each mega menu column is configured separately. Enable a mega menu item, which reveals a small caret, then choose an image for the column, set its name, and select the menu it links to. The column name is the heading in the dropdown, and the linked menu's items appear beneath it [L1010, 2020-26].
- When a mega menu item is enabled in the theme editor, it is linked to the main menu by default. Change that link to the menu meant for the column, such as a Skill Level menu, before saving, or the column will show the wrong links [L1010, 2020-26].

#### Creating the mega menu

- Shopify places new mega menus on the right by default because it treats them as new menu items. To control placement, create a new menu first, then assign it to the header [L0146, undated].
- A newly created mega menu is placed on the far right of the header, after all existing menu items. Shopify does not allow drag-and-drop reordering of menu items, so moving it next to Home requires changing which menu the header uses [L1010, 2020-26].
- Procedure in the Shopify theme editor [L0146, undated]:
  1. Go to Shopify Admin > Online Store > Themes and click Edit theme to access the store theme editor [L0146, undated].
  2. In the theme editor, click Header, click Add mega menu, name it (for example Surfboards), and link it to its main collection [L0146, undated].

- Procedure to place a mega menu directly after Home [L1010, 2020-26]:
  1. Go to Content > Menus and create a new menu with a Home item (linked to the homepage) and a category item (linked to the category collection).
  2. Save the new menu.
  3. Go back to Online Store > Themes > Edit theme and open the Header section.
  4. In the menu field that currently says main menu, select the new menu and save.
  5. Click Add mega menu, name it, link it to the category collection, and save.

  [L1010, 2020-26]
- Second procedure to place a mega menu after Home [L0146, undated]:
  1. Go to Content > Menus.
  2. Click Create new menu.
  3. Name it (for example Mega Menu).
  4. Add Home, linking to the homepage.
  5. Add your main category, linking to its collection.
  6. Save the menu.
  7. Go to Online Store > Themes > Edit theme > Header.
  8. Change the Menu dropdown from Main menu to the new menu name.
  9. Save changes.

  [L0146, undated]
- After assigning a new menu to the header, click Add mega menu, name it, and link it to its collection to place the mega menu directly after Home [L0146, undated].
- Setup in the Manhattan theme Theme Customizer [L1009, 2020-26]:
  1. Open the Theme Customizer and go to Header > Mega menu.
  2. Rename the default mega menu item to the name of the collection it belongs to, for example surfboards.
  3. In the mega menu link field, select the matching collection so that clicking the top-level item opens that collection.
  4. Turn on Enable mega menu one item and click Save.
  5. Refresh the published store to check the change. At this point the panel shows only the featured product until sections are added.
  6. Create the section content (images, titles, linked menus) in the mega menu settings.
  7. Assign the menus you created in Shopify to each section and click Save after each change.
  8. Refresh the storefront and hover over the menu item to check the result.

  [L1009, 2020-26]
- Mega menu setting in the 2025 course: a mega menu can be deleted from the Header section of the theme editor and rebuilt from scratch. This is a quick way to restart a menu layout that has become tangled, without repairing each column individually [L1010, 2020-26].
- The Add mega menu button under Header > Mega menu creates an additional mega menu for another top-level menu item [L1009, 2020-26].
- The theme editor preview can show old values after a save. Check the mega menu on the live storefront after saving and refreshing the page, rather than relying on the editor's preview [L1010, 2020-26].

#### Building the columns and sections

- Prepare one small image per mega menu section before you configure the mega menu. The section image field only lets you choose images that are already uploaded. Using a different colour for each section helps you tell them apart [L1009, 2020-26].
- Prepare one image for each mega menu column before building the menu, because the theme editor asks for an image for every column [L1010, 2020-26].
- Create the menus that feed a mega menu section [L1009, 2020-26]:
  1. Click Create menu in the mega menu section selector, which opens Shopify's Menus page.
  2. Give the menu a name that matches the section, for example surfboards.
  3. Click Add menu item for each subcategory, enter the item name, and link it to the matching collection using the Add button.
  4. Add as many items as help visitors find products easily. Keep item names and collection names consistent.
  5. Click Save menu.
  6. Return to the Theme Customizer, open the mega menu, and select the new menu for the section. If it does not appear, refresh the page and make sure the menu was saved.
  7. Click Select, then Save.

  [L1009, 2020-26]
- Procedure to fill a mega menu column with sub-links [L1010, 2020-26]:
  1. Go to Content > Menus and create a menu named after the column, for example Surfboards.
  2. Add one menu item per option, each linked to its own collection, for example Hybrid, Shortboards, Mid-length Boards, and Longboards.
  3. Save the menu.
  4. Return to the mega menu, open the column, click Replace, and select the new menu.
  5. Save and refresh the page to confirm the links show under the column heading.

  [L1010, 2020-26]
- Procedure to fill a mega menu column, with a different sequence [L0146, undated]:
  1. In the mega menu editor, rename the column (for example Surfboards by Type).
  2. Select an image for the column.
  3. Create a new menu with the column name.
  4. Add menu items (for example Hybrid Surfboards, Shortboards, Mid-Length Boards, Longboards).
  5. Link each item to its corresponding collection.
  6. In mega menu settings, assign this menu to the column.
  7. Repeat for other columns (for example Skill Level with Beginner and Pro; Color with Blue, Yellow, Red).

  [L0146, undated]
- Procedure to add another section to an existing mega menu in the Manhattan theme [L1009, 2020-26]:
  1. Open the Theme Customizer, go to Header > Mega menu, and open the mega menu for the top-level item.
  2. Scroll down and enable the next section toggle, for example Enable mega menu two item.
  3. Select an image for the section from the images already uploaded.
  4. Enter the section title.
  5. Link the title to its collection, or leave the link empty if the collection does not exist yet.
  6. Select the Shopify menu that should appear under the title.
  7. Click Save, refresh the storefront, and hover over the top-level item to check the result.

  [L1009, 2020-26]
- After creating mega menu columns, go to Content > Menus, edit the Mega Menu, add the remaining links (for example Swimwear, Essentials, Car Racks) as simple menu items, then save [L0146, undated].
- To restore the other top-level links after switching to the new menu [L1010, 2020-26]:
  1. Go to Content > Menus and open the menu used by the header.
  2. Click Add new menu item and search for each collection you want, such as Swimwear, Essentials, and Car Racks.
  3. Check the items off and save.
  4. Refresh the storefront to confirm the links appear in the header.
  5. Before replacing a menu, take a screenshot of its items so the original structure can be rebuilt.

  [L1010, 2020-26]
- The menu selector in each mega menu section lists the default Shopify menus, such as Main menu and Quick links, plus any custom menus you have saved. A new menu appears only after it has been saved in Shopify, and the Theme Customizer may need to be reloaded before it shows up [L1009, 2020-26].
- A Shopify menu that is not yet filled or saved may not show in the mega menu selector. Refresh the Theme Customizer after creating a menu, and check that the menu was saved before expecting it to appear [L1009, 2020-26].
- A menu created under Content > Menus does not appear in a mega menu column's menu selector until the list is refreshed. If the new menu is missing, reload the theme editor and check again before assuming it was not saved [L1010, 2020-26].
- Each mega menu section can link to a collection or to nothing. If the matching collection does not exist yet, a section can be left unlinked or linked to a temporary collection, and the link should be updated once the real collection is live [L1009, 2020-26].
- Example from a surfboard shop: the surfboards mega menu can have three sections. Board type (hybrid, shortboard, mid length, long board), skill level (beginner, intermediate, pro), and colour (for example blue, pink, red, white). Sections for skill level and colour can first link to the general surfboards collection until filtered collections are created [L1009, 2020-26].
- Example of a surfboard store with three mega menu columns: Surfboards (Hybrid, Shortboards, Mid-length Boards, Longboards), Skill Level (Beginner, Intermediate, Pro), and Color (Blue, Yellow, Red). Each was built as its own menu and assigned to a column. The Color menu was added to column three after the first two were set up [L1010, 2020-26].
- Choose column types to match how customers sort the products, such as product type, skill level, colour, material, wattage, or price range, based on the attributes the supplier data provides [L1010, 2020-26].

#### Featured products

- A mega menu can show up to two featured products per column or mega menu to highlight best sellers or priority items. Choose the best-selling or highest-profit products, and update them as sales data changes. Choose the products you most want to sell at launch, and replace them with best sellers once sales data exists [L0146, undated; L1009, 2020-26; L1010, 2020-26].

#### Mega menu checklist

1. Create your primary mega menu with logical columns that reflect how customers shop (by type, skill level, colour, brand, and so on) [L0146, undated].
2. Add up to two featured products to each column [L0146, undated].
3. Add remaining menu links as simple items [L0146, undated].
4. Tag all products with relevant attributes [L0146, undated].
5. Expand collection filter tag lists based on your product tags [L0146, undated].
6. Test navigation and filters for usability [L0146, undated].

[L0146, undated]

### Theme settings for menus

#### Header settings

- Header > Menu lets you choose which navigation menu appears in the header. The default is Main menu. Click Change to select another menu created earlier in Shopify's navigation settings [L0775, 2020-26].
- The header menu is linked to the main menu by default and should stay linked [L1018, 2020-26].
- Header > Desktop menu type offers Mega menu, Drawer, and Dropdown. Mega menu is the option used in the example. Drawer turns the menu into a hamburger icon that opens in a side panel [L0775, 2020-26].
- The desktop menu type offers mega menu (the default in this example), drawer, and a third option. Drawer shows a hamburger icon and opens the menu in the sidebar [L1309, 2020-26].
- Header menu typography: the menu font size is 14 by default, and font weight 500 is the usual setting for menu text, where weight means boldness. Change the size only if your chosen font looks too small or too large at 14 [L0775, 2020-26].
- Navigation menu colour scheme used in the example: background black, first-level link white, sub menu background white, sub menu link blue, sub menu border pink, active link white [L1309, 2020-26].

#### Checking and troubleshooting

- After saving a menu, reload the live storefront to confirm the new items and any dropdowns appear as intended [L1303, 2021-22].
- Mega menu not appearing: check the Shopify theme customizer to confirm the mega menu option is selected, then compare with the support screenshot [L0836, 2024].
- Test the menu for hover sensitivity bugs before scaling traffic [L1225, 2025].
- In the 2025 course, check whether a top-level item is a mega menu by hovering over it in the live preview [L1018, 2020-26].
- Refresh the storefront after saving. Menu changes sometimes take a minute or more to show on the live store, so refresh before judging the result [L1320, 2020-26].
- Save, then refresh the page. Changes in the menu editor only show on the storefront after you click Save and refresh [L1319, 2020-26].
- Shopify menu link search: use the exact collection name to avoid a wrong match [L1320, 2020-26].

### Common mistakes

- If you save without dragging items to the right, every item stays on the top level and no dropdown appears [L1319, 2020-26].
- Menus with placeholder # links send visitors to the homepage [L1303, 2021-22].
- Mega menu columns showing the wrong links usually mean the column's menu link was left on the main menu [L1010, 2020-26].
- Linking to Amazon sends shoppers away and loses sales [L0551, 2020; older].
- Footer menus with nested items show only top-level links on the live store [L0681, 2021-22; older].
- The default footer menu loads the main menu items, which is not useful in the footer [L1303, 2021-22; older].
- Choosing a policy or page from the wrong list links to the wrong page [L1319, 2020-26].

### Menus and navigation structure

#### Site structure and levels

A typical e-commerce site has three levels, with the homepage at the top:

| Level | Page | Position and links |
|---|---|---|
| 1 | Homepage | Root domain entry point; links to all level 2 pages through the main menu, bottom navigation, and search bar |
| 2 | Collection pages (Shopify: collections) | Grouped product tiles; each tile opens a product page |
| 2 | Single pages (Shopify: pages) | About Us, Contact Us, Shipping Policy, Privacy Policy, Terms of Sale, Returns Policy; linked from the homepage and navigation |
| 2 | Blog page | Lists blog posts; each post opens its own page |
| 3 | Product pages | Reached from collection pages; use one template for all products |
| 3 | Blog posts | Reached from the blog page; created only after launch |

[L1463, 2021-22]

#### When navigation matters

- Site navigation matters most when the store has many products (product numbers in the hundreds or more) or a large amount of content besides product pages. [L1522, 2021-22]
- A single-product store needs little navigation beyond getting shoppers to that product. [L1522, 2021-22]

### Header menu

#### Keeping the header short

- Keep the header menu short when the store sells one main product or only a few items, using just the essential links such as shop, collection, or the product itself. [L1326, undated]
- Stores with many product categories can add more header menu entries to help visitors find each group. [L1326, undated]
- Keep the top menu minimal, for example only Shop and Contact. A focused layout keeps the visitor's attention on the product description and the buying decision. [L1345, 2021+]

#### Changing the header menu

1. Create the new menu under **Online Store > Navigation** with its own items. [L1326, undated]
2. Open the header section in the theme editor under **Online Store > Themes > Customize**. [L1326, undated]
3. Change the menu setting from **Main menu** to the new menu. [L1326, undated]


Part 20 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/19-navigation-and-menus.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/21-search-bar-in-the-header.md
