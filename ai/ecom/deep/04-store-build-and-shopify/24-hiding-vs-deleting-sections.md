<!-- part of ecom/deep/04-store-build-and-shopify.md -->
Part 24 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/23-logo-list.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/25-pre-footer-trust-columns.md

### Hiding vs deleting sections

- Use hide instead of delete when customizing sections in the theme editor while building. Hide removes the section from view without deleting it, allowing you to undo or reconfigure later, while delete removes it permanently. [L0101, undated]
- Each section can be hidden with the eye icon or removed with delete. [L0775, 2020-26]
- Hide the rich text section (not needed for supplier approval). [L0101, undated]
- Hide the image banner until content exists, or add links before it goes live. [L0101, undated; L0775, 2020-26]
- Hide blog posts until content exists. [L0775, 2020-26; L0101, undated]
- Unused default Shopify sections, such as an empty video section or a promotions box with no content, should be removed from the homepage. [L0355, 2020-26]

### Links and dead ends

- Only add hyperlinks or button links to sections if the destination pages already exist, because broken links damage the appearance of a legitimate, professionally managed store. [L0101, undated]
- Include a search bar and continue shopping button on your store. Customers who cannot easily search or navigate to other products abandon the site immediately. Older advice (2020). [L0245, 2020]

### Search bar

- On stores with many products, place a large search bar in the header of every page. It should be easy to find and large enough to use comfortably on desktop and mobile. Older advice (2021-22). [L0409, 2021-22]
- Moving the search bar in the theme requires editing theme code. Copy and paste the original code before editing so the change can be reversed, and preferably have a developer do it. Older advice (2022). [L0963, 2022]

### Cart page

- Customizing the cart page natively in Shopify:
  1. Open the Shopify admin. [L0664, 2020]
  2. Go to Online Store. [L0664, 2020]
  3. Select Cart from the drop-down menu. [L0664, 2020]
  4. Edit elements such as the logo, reviews or contact info. [L0664, 2020]

### Checkout branding

- Checkout customization options available without Shopify Plus include changing the checkout background, the logo and adding a banner at the top of the checkout. A banner with a phone number or support text can be effective in some industries, such as weight-loss products. [L0390, 2019]
- Shopify admin: Settings > Checkout > Editor > Header > Logo. Click Logo and upload the logo formatted with the Trustpilot badge, and it appears in the checkout header. [L0560, 2026]
- Shopify admin: Online Store > Themes > Edit default theme content. Search for checkout, then find the field Checkout alternative payment method banner and enter the low-stock message there. Save the change so it shows at checkout. [L0560, 2026]
- Settings > Checkout > Editor > Color palette: set the Main, Accent and Error colors. The Accent and buttons field controls the color of links, selections and buttons on the checkout page. [L0560, 2026]

### Mobile and preview checks

- Theme editor > mobile view: adjust colors and other mobile theme settings and check that the layout still looks clean. Deeper mobile changes require custom code or a developer. Older advice (2019). [L0663, 2019]
- Mobile logo position is now set natively in the header settings, separately from the desktop position. Always save, then open the store on a phone to check the result. [L0775, 2020-26]
- Preview the slideshow on a phone after making changes, and save only after the mobile view looks right. [L0775, 2020-26]
- Refresh the homepage, scroll through, confirm the store looks legitimate, has no dead links, has consistent branding, and has clean supplier-ready sections. [L0101, undated]

### Custom code, developers and page builders

- Avoid editing theme code unless a change truly cannot be made in the Customizer. [L0595, 2020-26]
- Shopify sanitizes raw HTML, so when the theme editor cannot produce a custom page, a Shopify specialist on Upwork can build the fix for a one-time fee. Third-party landing page builders are usually monthly subscriptions, and some cost more than Shopify itself. Older advice (2024 point of view, applies to the developer choice). [L0666, 2024]
- Native editor versus code: the older mobile and header advice required code [L0663, 2019; L0852, 2020], while the current editor moves elements natively [L0709, 2017+; L0775, 2020-26]. Start with the editor and use code or a developer only for changes it cannot make. [L0595, 2020-26]

### Floating widget

- Add the floating widget to the Shopify homepage:
  1. In the Shopify admin, go to Online Store > Themes and click Customize. [L0959, 2025-26]
  2. Open the homepage and click Add section. [L0959, 2025-26]
  3. Search for Custom Liquid or HTML (the name depends on the theme) and add the section. [L0959, 2025-26]
  4. Set Section padding for Top padding and Bottom padding to 0px. [L0959, 2025-26]
  5. Make the section background invisible (use the section settings in the theme editor). [L0959, 2025-26]
  6. Paste the widget code into the Custom Liquid field. [L0959, 2025-26]
  7. Click Save, then refresh the storefront to see the floating widget. [L0959, 2025-26]
- The section name differs between themes: some call it Custom Liquid, others HTML. If you cannot find the Custom Liquid section, search for HTML in the section list instead. [L0959, 2025-26]

### Theme editor workflow

#### Opening and saving the editor

- Open the theme editor through Online Store > Themes > Customize on the active theme. [L1371, 2021-22; L1265, 2020-26]
- Homepage content is built from sections that can be added, removed and reordered in the editor. [L1371, 2021-22]
- Store changes are kept only after you click Save. Unsaved edits are lost when you leave the editor. [L1371, 2021-22; L1309, 2020-26]
- Save after every change or set of changes, and before moving to another settings area. The preview updates in real time, but only Save keeps the edit. [L1309, 2020-26; L1371, 2021-22]
- Before you edit, check that the dropdown at the top reads Homepage. Theme settings and section edits for the homepage must be made on the Homepage template. [L1309, 2020-26]
- The customizer shows the homepage preview on the left and the editing sidebar on the right. Hovering over a section highlights it on the page, and clicking it opens its settings. [L1309, 2020-26]

#### Preview and device checks

- Always switch the editor to mobile preview before saving. A page can look finished on desktop while the mobile layout is broken. [L1188, 2026; L1219, undated]
- Check the header and footer separately in each view, because their layouts differ between desktop and mobile. [L1188, 2026]
- When testing a store, prioritise the mobile layout over the desktop layout. If a banner or section does not fit, adjust it in the page builder instead of forcing the same image. [L1219, undated]
- Device preview steps:
  1. Click the device preview button.
  2. Choose Mobile, Desktop or Full screen from the dropdown.
  3. Select the same logo image for mobile if needed, then adjust the mobile logo size separately. [L1371, 2021-22]
- Mobile traffic is most of the total, so check the header on mobile. [L1371, 2021-22]
- The Ask for changes button accepts a plain-language request to edit the current section and suits small layout changes. Review the result in the preview before saving, because the change can affect more than the block you meant. [L1188, 2026]

#### Adding, removing and reordering sections

- Shopify themes build the homepage from sections, and each section adds a specific block such as a slideshow, featured collection or grid. The default demo sections are placeholders, and most should be removed for a new store. [L1371, 2021-22]
- To add a homepage section:
  1. Click Add section.
  2. Choose the section type, for example Featured product.
  3. Select the new section, add the content, and choose the product or details it should show.
  New sections are added at the bottom of the page first. [L1371, 2021-22]
- To remove a homepage section:
  1. Click into the section.
  2. Click the three dots at the top of the section panel.
  3. Choose Remove section. [L1371, 2021-22]
- To change section order, click and hold the six-dot handle of a section and drag it to a new position. [L1309, 2020-26]
- In the Manhattan theme, the Add section option is available on every template and offers the same section types as the homepage. Each one can be previewed before it is added. [L1450, 2020-26]
- In the Manhattan theme, any section available on the homepage can also be added to a page template through Add section. This lets a page carry more than rich text. [L1265, 2020-26]

#### Global theme settings

- Logo: go to Theme settings > Logo > Select image, choose the uploaded logo from the Files list, and click Done. The Desktop logo width defaults to 200 and should only be changed if the file is much larger or smaller. [L1309, 2020-26]
- Favicon: go to Theme settings > Favicon > Select image. The favicon replaces the default Shopify icon in the browser tab and should be a small version of the logo or a symbol for the store. [L1309, 2020-26]
- Layout width: the default is 1200 px and can be raised to a maximum of 1600 px so the site looks wider on large monitors. [L1309, 2020-26]
- Buttons: border thickness, opacity, corner radius and transparency of all buttons are set in Theme settings > Buttons. The defaults are fine for most stores. [L1309, 2020-26]
- Variant pills, Inputs, Product cards and Collection cards sit next to Buttons. For a supplier-stage demo they can stay at their defaults and be styled later. [L1309, 2020-26]
- Theme settings order for an early-stage high-ticket dropshipping store (Superstore theme, 2021-2022, older advice):
  1. Layout: change the header layout from Minimal to Traditional.
  2. Colors: enter the three brand colors and keep the page background white.
  3. Typography: set the base font size to 18 px, Body font to Helvetica, and the heading font to one simple, readable font.
  4. Icons: change the cart icon from Bag to Shopping cart if preferred.
  5. Products: set Sale badge style to Save $10, Option style to Selectable boxes, Display stock levels to Hidden, Quick shop button to Disabled, Add to cart button to Enable on desktop only, Show dynamic checkout button on, and enable color swatches.
  6. Social media: leave until launch, then add Facebook, Pinterest, email address and Instagram.
  7. Favicon: upload the favicon PNG.
  8. Cart: no change needed.
  9. Custom styles and scripts and Advanced: leave untouched.
  10. Performance: keep the preset defaults.
  11. Checkout: upload the logo as a custom image, set logo size to Medium, change the button color to match the site buttons and the accent color to the main brand color, and leave error messages red.
  12. Click Save before leaving the editor or moving to another settings area. [L1371, 2021-22]

### Header

#### Header layout and settings

- Header settings include Logo position, Menu type, Header borders and a Top Border Style option that can use the theme color or a global section gradient. [L1188, 2026]
- Desktop and mobile font sizes are set separately in the theme settings, so check both views. [L1188, 2026]
- Sticky header set to always on keeps the logo, menu and contact information visible while the visitor scrolls. An option also shrinks the logo on scroll. [L1309, 2020-26]
- Desktop logo position: top left is the default. Other options are top center, middle left and middle center, which rearranges the header elements. [L1309, 2020-26]
- Separator line: a thin line under the header, on by default, can be turned off. [L1309, 2020-26]
- Menu font size 14 and font weight 500 are the typical values. Change the size only if the chosen font looks too small or too large. [L1309, 2020-26]
- Contact details: set opening hours for customer service, and add a phone number and email address once they exist. An email alone is acceptable at the supplier stage. [L1309, 2020-26]
- Mobile layout: logo position can be set separately for phones, for example center or left. Preview on a phone after saving. [L1309, 2020-26]
- Menu field: the default is Main menu. To use another navigation menu, click Change, then Change menu, and select a menu created earlier in Shopify. [L1309, 2020-26]
- The header should contain the brand logo, the main menu links, the search function and the cart. Shopify adds search and cart to the header by default, so for a new store you only need to select the menu to show. Customer login or account links are optional. [L1326, undated]
- Make the logo smaller and place it on the left side of the navigation bar. Visitors care more about the products than the logo, so a large logo wastes space. [L1325, 2020-26]

#### Header layout and mobile search (Superstore theme, 2021-2022, older advice)

- Set the header layout in theme settings under Layout to Traditional instead of Minimal, because only the Traditional header shows a search bar. Changing the layout means header section settings are no longer applied, so check the header after switching. [L1371, 2021-22]
- In the Traditional header layout, the search bar stays visible on mobile in this theme, which many themes do not do. Check on the mobile preview that the search bar and logo still fit the header. [L1371, 2021-22]
- Enable the sticky header in the static header settings, select the logo image in the header so it displays, and adjust the logo height so it is readable without being too large or too small. [L1371, 2021-22]
- Enable the utility bar in theme settings and add a top bar menu to it. Use a background matching the footer, white link color and yellow link hover color. A secondary menu can be placed on the right side. [L1371, 2021-22]

### Announcement bar and promo bar

- Edit the announcement bar under Online Store > Themes > Customize by clicking the announcement bar section. Change the message text there and add an icon such as a shipping symbol if needed. [L1326, undated]
- The header can carry a scrolling promo bar for savings or shipping lines, plus a top row with Track Your Order and Support links and a country and currency selector. [L1188, 2026]
- Set the currency selector so buyers see prices in the currency they will pay in. [L1188, 2026]
- Hide the announcement bar until it is needed. [L1309, 2020-26]
- Older advice (2021-2022) states that in a Shopify theme the announcement bar is fixed and cannot be removed. The Manhattan setup above hides it instead. Use hiding rather than deleting if you are unsure. [L1371, 2021-22; L1309, 2020-26]

### Slideshow and hero banner

#### Hero banner principles

- A homepage banner should show the customer's outcome or passion, so a visitor immediately sees they are in the right place. Its main job is to state what the business does for the customer, and a temporary promotion is a secondary use. [L1310, 2021-22]
- A hero banner needs four elements: a title, a subheader, social proof such as review counts or numbers of items saved, and a call to action. A missing call to action is one of the most serious gaps. [L1225, 2025]
- Homepage banner pattern:
  > [Store name] introducing [top-rated or number one rated] [product] for [customer type] in [country], paired with a benefit-driven image, followed by a short section on why the product helps and what the store stands for. It works because the visitor instantly sees the brand, the product and a clear benefit.
  Example one: Lumora introducing the top rated travel pillow for frequent flyers in Germany.
  Example two: Brinelo introducing the best rated desk mat for home offices in the UK. [L1217, 2023+]
- Homepage structure for a niche store begins with a banner that matches the feeling of the exact customer. Most traffic arrives via ads directly to product pages, so keep the page clean and branded. [L1158, 2023]

#### Slideshow settings (Manhattan and Superstore themes)

- Slideshow layout: full width (used in the example) or grid. Slide height set to Adapt to first image so the image is sized correctly. Options small, medium and large exist. [L1309, 2020-26]
- Pagination can be dots or numbers. Auto rotate can change slides every 3, 5 or 9 seconds. Set mobile content to show below images, and give the slideshow a short accessibility description. [L1309, 2020-26]
- Slide content: heading and subheading go on top of the image, the button label is Shop, and the button link points to a collection. Desktop content position bottom right and alignment right were used in the example. [L1309, 2020-26]
- Slideshow content settings let you set the button colour and the button text colour separately. A container background can be shown behind the text on desktop. Choose a button text colour that contrasts with the button colour so the label stays readable. [L1309, 2020-26]
- Slideshow section margins add space above or below the whole section. Use them to adjust the gap between the slideshow and the sections around it. [L1309, 2020-26]
- Keep one slide for the demo store. Delete the blank default slides and add more with Add slide later for new suppliers or sales events. [L1309, 2020-26]
- Buttons in image banners and slideshows look faded or nearly transparent while they have no link. Their full colour shows only after a real destination, such as a collection, is set in the button link field. [L1309, 2020-26]
- Slideshow settings in the Shopify theme editor include Enable slideshow, Autoplay slideshow, Autoplay slide duration and Slideshow height. The image field recommends 1800 x 1000 px. (Superstore theme, 2021-2022, older advice.) [L1310, 2021-22]
- A slide's BUTTON 1 has the fields Label, Button, Link and Style, and Style is set to Primary. Clearing the Label field hides the button. The same panel holds the Heading, Subheading, Text color and Text alignment (Left) fields. (Superstore theme, 2021-2022, older advice.) [L1310, 2021-22]
- Older advice (2021-2022) states that homepage sliders should not be used. JavaScript slows the page, and the cited figure says about 96% of customers never see the second slide. A single hero image at the top of the homepage is enough. [L1266, 2021-22]
- Older advice (2021-2022) for the early-stage store: the slideshow is used as a single static hero image, which is fixed in the section list. [L1371, 2021-22]
- Conflict: the older no-slider advice [L1266, 2021-22] and the single-static-hero advice [L1371, 2021-22] both point toward one image, while the Manhattan setup keeps a slideshow with one slide [L1309, 2020-26]. A one-slide slideshow matches both; a multi-slide rotation is what the older advice warns against. [L1266, 2021-22; L1371, 2021-22; L1309, 2020-26]
- Four small images side by side on desktop should stack vertically on mobile. On a phone they become too small to read and can trigger Search Console accessibility errors. Keep the stacking instead of forcing a side-by-side layout on mobile. [L1287, 2025]

### Collection lists and featured collections

#### Collection list

- Collection list settings (Manhattan theme): heading "Shop our featured collections" in a small heading size, image ratio set to Adapt to image so mixed image sizes fit, and desktop columns set to 3. [L1309, 2020-26]
- Text overlay on, placed bottom left, overlay colour teal from the brand palette, text white. Enable view all lets mobile visitors swipe through extra collections. [L1309, 2020-26]
- Adding collections:
  1. Click Collection and choose a collection with Select.
  2. Click Add collection to create a new row for more items.
  3. Repeat until all collections are set, then Save.
  The example used six collections in rows of three. [L1309, 2020-26]
- Superstore theme setup:
  1. Add the Collection list section and set the heading to Our Featured Collections.
  2. Set Desktop section spacing to 100 px (the maximum) and Mobile section spacing to 60 px.
  3. Keep four collections per row and delete any extra blocks.
  4. For each block, click Change, select a collection that has products, and click Select so its product image loads automatically.
  5. If a collection has no products, upload a custom image of a similar product type. Otherwise it shows a blank image.
  6. The collection title fills in automatically. Overwrite it with a custom title if needed.
  7. Click Save. [L1310, 2021-22]
- A collection without products shows a blank image in the featured collections section. Use a custom image as a temporary placeholder and replace it with real supplier products when the store goes live. (Superstore theme, 2021-2022, older advice.) [L1310, 2021-22]
- A simple homepage can feature the newest collection and a section with trending products. These two sections give a first-time visitor a clear starting point. [L1325, 2020-26]

#### Featured collection

- Featured collection (Manhattan theme): change the heading to a short phrase such as What's trending, select a collection such as Bestsellers, and show 4 products in 4 columns. Product card options include secondary image, vendor and rating. [L1309, 2020-26]
- Quick view shows a button that opens product details in place with an add-to-cart option. If turned off, the button leads straight to the product page. [L1309, 2020-26]
- Sale badge: the product card settings include a sale badge position, a sale badge colour and an editable badge text. The badge defaults to a dark gray background and can be switched to a theme accent colour such as the pink accent. [L1309, 2020-26]
- Keep featured collections linked only to collections that exist and contain products. [L1310, 2021-22; L1309, 2020-26]
- The Featured collection section in the Superstore theme started with a beige background set by the theme. A white background is acceptable, and a light contrasting background can break up a long white homepage. Either can be changed in section settings. [L1310, 2021-22]

### Image banners and image-with-text sections

- Image banner (Manhattan theme): set the image as background, banner height Adapt to first image, desktop position middle center, container turned off so text sits directly on the image, and buttons linked to a collection once it exists. [L1309, 2020-26]
- Image banner > Image behavior: None keeps the image still. Ambient movement makes the image move very slowly, which draws the eye to the banner. [L1309, 2020-26]
- Highlights banner (Superstore theme, 2021-2022, older advice): desktop section spacing starts at 36 px and mobile at 20 px, with banner text centered. The tested build raised desktop spacing to 60 px. [L1310, 2021-22]
- Create the destination pages first, such as Shipping, Contact us, Returns and Price match guarantee, before building Highlights banner blocks. Each block link must point to an existing store page. [L1310, 2021-22]
- Shrine theme Image with text settings: Heading, Text, Link button, Image or Video, Media height (Adapt to media), Color schemes (Content color scheme and Section color), Desktop layout (Full page width) and Remove section. Use autoplay mp4 video that is muted and looping instead of GIFs or animated WEBPs. [L1331, 2025-26]
- Icon Bar: each icon uses the Check available icons search, so search for a soft word like pillow first. If no icon matches, scroll to the custom icon option and paste the icon code to replace the icon. [L1331, 2025-26]
- Shrine sections such as Image with text have a Display section ID field. Paste that ID into any button link so the button scrolls to the section, or use it to merge two sections. [L1331, 2025-26]
- Logo list for shipping carriers as proof: go to Online store, open Customize for the theme, click Add section, search for Logo list and add it, then upload the logos. You can delete the text to make it smaller, change the size, background and padding, and drag it to any position. [L1287, 2025]
- Logo lists can show well-known customers. This is useful for business-to-business products. [L1265, 2020-26]


Part 24 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/23-logo-list.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/25-pre-footer-trust-columns.md
