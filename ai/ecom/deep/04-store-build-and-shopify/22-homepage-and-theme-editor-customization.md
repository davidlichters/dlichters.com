<!-- part of ecom/deep/04-store-build-and-shopify.md -->
Part 22 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/21-search-bar-in-the-header.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/23-logo-list.md

## Homepage and theme editor customization

### Theme editor access and basic rules

- The Theme Customizer is Shopify's built-in visual editor for changing a theme without touching code. It adjusts the website font, color scheme, layout and store content from a side panel on the customized themes page. [L0595, 2020-26]
- Use the Customizer's built-in settings for everyday look changes first. Go into the theme's HTML/CSS only for structural changes the Customizer cannot make. [L0595, 2020-26]
- Avoid editing theme code unless a change truly cannot be made in the Customizer. Opening the code editor by accident means you are in the wrong place for ordinary design work. [L0595, 2020-26]
- Admin path: Online Store > Themes > Customize. The one source Manhattan theme must be installed to use this path. [L0595, 2020-26]
- Steps to open the theme customization pages:
  1. Log in to the Shopify account. [L0595, 2020-26]
  2. Click Online Store in the Shopify admin. [L0595, 2020-26]
  3. Click Themes. [L0595, 2020-26]
  4. Find the installed theme named one source Manhattan. [L0595, 2020-26]
  5. If it is the currently published theme, click the Customize button. [L0595, 2020-26]
  6. If you are upgrading from another theme and Manhattan is not yet published, find it in the list of unpublished themes further down the page and click Customize. [L0595, 2020-26]
  7. The side menu that opens lists the elements you can edit, and changes made there alter what visitors see on the store. [L0595, 2020-26]
- Before opening the theme customization pages, the basic store should already have its menus, some collections and a demo product in place. The Customizer then turns that bare structure into the finished look. [L0595, 2020-26]
- To open the homepage editor, go to Online Store > Themes, confirm the active theme is the one you are building, and click Customize. Check that the page dropdown at the top of the editor says Homepage before making changes. [L0775, 2020-26]
- In the sidebar, hovering a section highlights it on the page, and clicking an element in the preview opens its settings. Each section can be hidden with the eye icon or removed with delete, and sections can be reordered by dragging the six-dot handle. [L0775, 2020-26]
- The left sidebar mirrors the homepage layout from top to bottom. Hovering a section name highlights it on the live preview, and clicking an element on the preview jumps to that section in the sidebar. [L0101, undated]
- Click Save after every change in the theme editor, then reload the live product page to confirm the change appears, because the preview does not always show the final result (for example end dates or hidden blocks). [L0976, 2024+]
- Theme settings apply to the whole store, including fonts, buttons and header. Section settings only affect the section they belong to. Each section's color scheme dropdown uses the color schemes defined in Theme settings > Colors, so one color change updates every section that uses that scheme. [L0775, 2020-26]
- Collection pickers in the collection list and featured collection sections only show collections that already exist. Create and fill the collections under Products > Collections first, then add them to the homepage. [L0775, 2020-26]

### Order of work and time budget

- Budget 60 minutes to complete the full homepage customization when image assets are already created, because the work is primarily asset placement. [L0101, undated]
- Work through the homepage in this order:
  1. Upload all images to Files. [L0775, 2020-26]
  2. Set logo and favicon. [L0775, 2020-26]
  3. Set colors and typography. [L0775, 2020-26]
  4. Set layout and buttons. [L0775, 2020-26]
  5. Set header, sticky header and menu colors. [L0775, 2020-26]
  6. Configure slideshow, collection list, featured collection, pre-footer and email signup. [L0775, 2020-26]
  7. Hide unused sections. [L0775, 2020-26]

  After each step, save and check the preview on desktop and mobile. [L0775, 2020-26]
- The same work can also be read as an outline of four blocks: homepage and general customizations, menu customizations (header and footer menus), collection page customizations (layout and visuals), and product page customizations (layout and settings). [L0100, undated]
- Theme customization transforms a Shopify store from its default basic template (gray/white/black appearance) into a branded store by applying image assets and making layout and settings adjustments within the theme editor. [L0100, undated]
- Advanced web design changes are optional final tweaks for a store that already performs well and needs extra gains. They are not necessary to get initial results. [L0544, 2026+]
- Shopify's native editor is moving toward more page-builder flexibility, such as moving elements without code. This reduces the developer work needed for simple layout changes. [L0709, 2017+]

### Full Manhattan homepage procedure (initial setup)

The complete homepage walkthrough, in order, as taught for the Manhattan theme:

1. Upload all image assets: Shopify Admin > Content > Files, click Upload files, select all Canva assets at once, confirm upload completes. [L0101, undated]
2. Open theme customizer: Shopify Admin > Online Store > Themes, select Manhattan theme, click Customize, confirm Homepage is selected in the top dropdown. [L0101, undated]
3. Hide announcement bar: hover over Announcement bar in sidebar, click eye icon. [L0101, undated]
4. Add logo: Theme settings (gear icon) > Logo, select uploaded logo file, keep desktop logo width around 200. [L0101, undated]
5. Add favicon: Theme settings > Favicon image, select small logo variation file. [L0101, undated]
6. Set global colors: Theme settings > Colors, use brand hex codes, keep palette to 2-4 colors: Accent 1 (primary brand color), Accent 2 (secondary brand color), Text (black), Background (white), Background 2 (light gray), click Save. [L0101, undated]
7. Set typography: Theme settings > Typography, set Heading font to display font, set Body font to readable clean font (example: Montserrat), optionally increase Font size scale to 110%, click Save. [L0101, undated]
8. Adjust layout: Theme settings > Layout, increase page width to 1600 if desired, click Save. [L0101, undated]
9. Remove social media defaults: Theme settings > Social media, remove default URLs if no active accounts yet, save. [L0101, undated]
10. Enable sticky header: Header > Sticky header, turn on Always on, save, preview to confirm header stays visible on scroll. [L0101, undated]
11. Set header menu: leave Menu as Main menu, set Desktop menu type to Mega menu. [L0101, undated]
12. Add header contact details: Header > Contact details, add service hours (optional), add email (example: support@yourdomain.com), replace with phone in later module. [L0101, undated]
13. Customize header colors: Header > Navigation menu color, update Background color, Link colors, Dropdown background, Dropdown link colors, Border colors using only brand palette, save. [L0101, undated]
14. Configure slideshow: use 1 slide only, delete blank slides, Slideshow > Slide height select Adapt to first image, keep full width, add hero image asset, add Heading (example: primary collection focus), add Subheading (benefit-oriented), Button label (example: Shop Now), link button to relevant collection, position content (example: bottom right), align text (example: right), adjust button colors if needed, save. [L0101, undated]
15. Set up collection list: change heading to Shop Our Featured Collections, Image ratio Adapt to image, Columns 3, optional text overlay, add 6 collections (example: Best Sellers, Staff Picks, Top Rated, New Arrivals, On Sale Now, Under $1000), go to Shopify Admin > Products > Collections, open each, add Image, save, refresh theme customizer. [L0101, undated]
16. Hide rich text section (not needed for supplier approval). [L0101, undated]
17. Configure featured collection: change heading (example: What's Trending in Surfing), select collection (example: Best Sellers), Products to show 4, Columns 4, toggle Vendor/Ratings/Secondary image/Quick View as preferred, choose color scheme, save. [L0101, undated]
18. Configure email signup: change headline to branded text (example: Join Shaka Nation), leave default form, choose matching color scheme, save. [L0101, undated]
19. Configure pre-footer: add 4 columns with icon and short benefit headline (example headlines: Free Shipping $100+, Surfer Owned & Operated, Fast & Secure Checkout, Easy Returns), add links only if pages exist, set background to white if cleaner, save. [L0101, undated]
20. Hide blog posts section (not needed for supplier approval). [L0101, undated]
21. Refresh homepage, scroll through, confirm store looks legitimate, no dead links, consistent branding, clean supplier-ready sections. [L0101, undated]

### Global settings: logo, favicon, colors, typography and layout

- Set desktop logo width to 200 pixels in Theme settings > Logo. The default is usually acceptable. [L0101, undated]
- Increase page layout width to 1600 pixels in Theme settings > Layout for a wider, more spacious presentation. [L0101, undated]
- To make the page narrower instead, go to Online Store > Themes > Customize, click the gear icon for Theme settings, and open Layout. Type a value into Page width or drag the slider. Spacing and padding are controlled in the same theme editor section. [L0471, 2024]
- Note on width (2024 advice versus the 1600 setting): the 1600 value is for a wider look, while the Page width field from the same Layout section is the way to narrow it. [L0101, undated; L0471, 2024]
- Keep the global palette to 2-4 colors, using brand hex codes and the roles in the Colors list. [L0101, undated]
- Keep the color changes in Theme settings > Colors, since every section's color scheme draws from there. [L0775, 2020-26]

### Theme settings: search, pop-ups and custom CSS

- Open the theme customizer, click the gear icon labelled Theme settings to reach the additional features, and work through the settings in the order they appear in the panel. [L0973, 2020-26]
- In the Manhattan theme settings panel, the sections appear in this order: Search behavior, Email pop-up settings, Exit pop-up, Cross-sell, Social proof pop-up, the one source tracking option, and Custom CSS. Review them from top to bottom, and click save after changing the tracking option. [L0973, 2020-26]
- Search behavior: keep search suggestions enabled and turn on showing the product price within those suggestions. This setting controls what happens when visitors click the magnifying glass and search the store. [L0973, 2020-26]
- Custom CSS field: paste code here to change how the store looks when the theme editor has no native option for it. Use it only for appearance changes that cannot be made in the normal theme settings. [L0973, 2020-26]

### Social media links

- Remove default social media URLs from Theme settings > Social media if you do not have active accounts, because suppliers must not click social icons that lead to Shopify default pages. [L0101, undated]
- Turn off footer social media icons if you do not have real social profiles yet. Never send suppliers to a store with dead or placeholder social links. [L0102, undated]
- Footer social icons in the Manhattan theme only appear for social channels that have a full URL entered in the theme customizer. Check each link, including the full https:// address, and save. [L0836, 2024]
- Footer > Show social media can stay enabled even with no links, because the social icons only show real links. Add links later through the gear icon, in the social media fields, and make sure the show-link option is on. If no social pages exist yet, delete the empty links. [L0680, 2020-26]
- Do not lead the header navigation with social media links such as Facebook, Instagram, Twitter, YouTube or Pinterest. Shoppers who came to buy should first see shop pages, collections and product categories. [L1098, 2019+]

Conflict on footer social icons, by situation:

| Situation | Setting |
|---|---|
| No real social profiles yet | Off (footer social media icons off) [L0102, undated; L1018, 2020-26] |
| Turning on before accounts exist | Do not do it; visitors reach pages that do not exist [L1018, 2020-26] |
| Profiles exist, full URLs entered | On; icons show only for entered links [L0836, 2024; L0680, 2020-26] |
| Show-social toggle on with no links | Allowed; icons simply do not show [L0680, 2020-26] |

one source's 2025 Manhattan footer reference value is off until social accounts exist. [L1018, 2020-26; L0102, undated]

### Header

- In Shopify Admin, navigate to Online Store > Themes > Customize. Select Header from the left sidebar. Ensure your Menu setting references Main menu. Confirm that your Desktop menu type is configured to Mega menu, the standard theme default. [L0102, undated]
- Header > Sticky header with the Always on option keeps the menu bar visible while visitors scroll. A related option shrinks the logo on scroll and is useful when the logo file is large. [L0775, 2020-26]
- Sticky header set to Always on keeps navigation visible while scrolling, because customers can always access the menu without scrolling back to the top. [L0101, undated]
- Header > Desktop logo position offers Top left, Top center, Middle left and Middle center. Top left is the common default for most stores. [L0775, 2020-26]
- Header > Show separator line adds a thin line under the header and is on by default. Turn it off if you want a cleaner header. [L0775, 2020-26]
- Header mobile layout lets you move the logo to a different position on phones, such as center or left, separately from the desktop position. Always save, then open the store on a phone to check the result. [L0775, 2020-26]
- The header in the one source theme editor has a Menu type setting (for example Sticky header), a Separator line option, an Enable top border option with a color set to Use Theme Colors, and a Middle left position set to Main Menu. Scroll up behaviour is controlled by the On scroll up option. [L1013, 2026]
- Header contact details, as in the default setup: add service hours (optional), add an email, and replace with a phone number in a later module. [L0101, undated]
- Customize header colors: Header > Navigation menu color, update Background color, Link colors, Dropdown background, Dropdown link colors, Border colors using only brand palette, save. [L0101, undated]
- A large header logo that pushes content down wastes vertical space. Use the empty header space for a short message that helps the buyer, such as free personalized note cards included with every order. [L0355, 2020-26]
- A header that only says "welcome to our store" is lazy and generic and wastes the top of the page. Replace it with a call to action or a scarcity message. [L0530, 2022]
- Fast themes often ship with demo homepages and headers that are not built for conversion, such as social media icons first in the header and oversized hero slideshows. Right after installing a theme, reconfigure the header, homepage and collection layout for shopping instead of keeping the demo structure. [L1098, 2019+]
- Older method (2020): changing the header so the logo sits in the same row as the menu was done by editing code. Open the theme editor and the code editor, change the header code by copying and pasting the required code, or hire a Shopify developer on Upwork if not comfortable with code. [L0852, 2020]
- Native option versus older code method: the 2020 approach used header code, while the current Desktop logo position setting in the Header section offers Top left, Top center, Middle left and Middle center without code. [L0852, 2020; L0775, 2020-26]

### Announcement bar

- Default setup hides the announcement bar by hovering over it in the sidebar and clicking the eye icon. [L0101, undated]
- If the theme has a built-in announcement bar section, build the bar there by entering the text and the code in the theme's customization settings. Use a separate app only when the theme does not offer this or when another solution is preferred. [L0531, 2020-26]
- An announcement bar at the top of the store can show a sitewide promotion, for example a 10 percent discount. Competitor stores use it to push a current offer on every page. [L0600, 2026]
- Use the Quick Announcement Bar app only if you want different promotions shown on different supplier pages. A theme's built-in announcement bar is enough otherwise. Older advice (2021). [L0834, 2021]
- The coupon code bar at the top of the store is edited in Shopify admin under Store, then Store settings. If it still appears after the theme is changed, check the store settings first. Older advice (2020). [L0468, 2020]
- In the header bar editor, the text font size can be increased, but the bar height cannot be set directly. If no adjustment is possible at all, the app or theme should be checked for a problem. Older advice (2019). [L0960, 2019]

Conflict on announcement bar, by purpose:

- Hide it while building, if there is no promotion yet [L0101, undated]
- Use the built-in bar for a single sitewide message [L0531, 2020-26; L0600, 2026]
- Use an app only for different messages per page [L0834, 2021]

### Homepage structure and what to show

- Homepage structure, in order:
  1. Show one hero value proposition at the top that states the core benefit for the target audience. [L0524, 2023]
  2. Link straight to best sellers and the product range. [L0524, 2023]
  3. Give a short explanation of what the product does and how it differs from alternatives. [L0524, 2023]
  4. Offer bundles and subscriptions to lift average order value. [L0524, 2023]
  5. Add testimonials and social proof. [L0524, 2023]
  6. Add authority logos from recognised media in the niche, placed higher up the page. [L0524, 2023]
- Arrange the homepage sections in the same order as the demo store of the theme. Copying the working layout reduces setup time. Older advice (2020). [L0664, 2020]
- The home page should not replace the product page. If the home page is the only page a visitor sees, the shop is set up wrong and conversion suffers, so the product should be the main page of a single-product store. [L0530, 2022]
- Group the homepage around one clear store theme. A homepage that mixes unrelated categories, such as gag gifts, surf, apparel and novelties with no gift theme, looks random and makes navigation hard. [L0355, 2020-26]
- A store must make sense within seconds to visitors arriving from a Facebook ad, a Google ad or any other source. Navigation, logo and copy should together show who the store is for and what it sells. [L0355, 2020-26]
- For a single-category fashion store, organize the homepage into collections by dress type, each with a hero image showing a person wearing the items. This gives visitors a clear path into the collections and makes the store look like one focused range. [L0838, 2020-26]
- A homepage layout example uses square collection images in rows of three, followed by a row of three more, with a best-sellers collection placed next to the main product collections. Six square homepage images are needed for that layout. [L0342, 2020-26]
- Homepage collection tiles can be arranged in rows of three, for example six tiles in two rows, with the most popular collections such as a best sellers collection placed where customers see them first. [L1045, 2020-26]
- Unused default Shopify sections, such as an empty video section or a promotions box with no content, should be removed from the homepage. Leftover empty sections add clutter and signal an unfinished store. [L0355, 2020-26]
- Competitor layouts will not map one to one onto a different theme. Rebuild the same section type with your own theme's settings, and keep the purpose of each section, such as proof, FAQ or transformation, even when the design changes. [L0600, 2026]
- Video carousels and slider sections are built into almost every Shopify theme, especially Atlas and Shrine. Use the sections your theme already offers rather than custom development when recreating a competitor layout. [L0600, 2026]
- Quick navigation section above the main banner, as taught for the one source course:
  1. Display 5-6 visual category shortcuts. [L0197, 2025-26]
  2. Style them to resemble Instagram story cards, a visual pattern shoppers recognize. [L0197, 2025-26]
  3. Include current sales and new product promotions. [L0197, 2025-26]
  4. Position the section above the fold for immediate visibility. [L0197, 2025-26]
- Recently viewed products can be enabled in the theme editor under the Recently viewed products section (Settings > Enable recently viewed products). This setting applies to both collection pages and product pages. It is useful for returning customers but shows nothing until a visitor has viewed products. Older advice (2021-22, one source's theme). [L0370, 2021-22]

### Slideshow (hero)

- Steps to set up the homepage slideshow:
  1. Open the Slideshow section in the editor. [L0775, 2020-26]
  2. Delete extra blank slides and keep one. [L0775, 2020-26]
  3. Click the first slide, select an image, click Done. [L0775, 2020-26]
  4. Enter the heading, subheading, button label and button link, then set the desktop and mobile content position. [L0775, 2020-26]
- Full default slideshow steps: use 1 slide only, delete blank slides, Slideshow > Slide height select Adapt to first image, keep full width, add hero image asset, add Heading (example: primary collection focus), add Subheading (benefit-oriented), Button label (example: Shop Now), link button to relevant collection, position content (example: bottom right), align text (example: right), adjust button colors if needed, save. [L0101, undated]
- A new Shopify slideshow comes with three blank slides. For a supplier demo store, one slide is enough, and you can add more later with Add a slide for new suppliers or seasonal sales. [L0775, 2020-26]
- Slideshow settings include Full width or Grid layout, Slide height set to adapt to first image (or small, medium, large), and pagination as dots or numbers. Auto rotate can be set to change slides every 3, 5 or 9 seconds, and animation style controls the transition. [L0775, 2020-26]
- Slideshow accessibility field holds a short description of the slideshow, which screen readers announce to visually impaired visitors. Something like a slideshow about your brand is sufficient. [L0775, 2020-26]
- Slide content settings include Heading, Subheading, Button label, Button link, Desktop content position, Desktop alignment, Show container on desktop, Button color, Button text color, and mobile alignment. In the example, the content sits bottom right, aligned right, and the button label is Shop, linked to a collection. [L0775, 2020-26]
- Button text must contrast with the button color. If you change the button color to a dark brand color, also set Button text color to white. Otherwise the label becomes unreadable on the slide. [L0775, 2020-26]
- Preview the slideshow on a phone after making changes and adjust the mobile alignment if the text covers the image. Save only after the mobile view looks right. [L0775, 2020-26]
- Slideshow images that are cut off on the store are usually the wrong size for the slot. Crop or resize images to the required dimensions before uploading them. Older advice (2019). [L0960, 2019]
- A hero image is one image shown on both mobile and desktop, so you cannot upload separate versions. To enlarge it on mobile, make the image taller in pixels, which also enlarges it on desktop. [L0972, 2025]
- Hero slideshows should follow the conversion layout above, not the demo structure. Oversized hero slideshows are a demo default to replace. [L1098, 2019+]


Part 22 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/21-search-bar-in-the-header.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/23-logo-list.md
