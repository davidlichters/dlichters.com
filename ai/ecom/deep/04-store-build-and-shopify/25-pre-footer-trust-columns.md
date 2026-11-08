<!-- part of ecom/deep/04-store-build-and-shopify.md -->
Part 25 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/24-hiding-vs-deleting-sections.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/26-demo-store-for-supplier-approval.md

### Pre-footer trust columns

- Each pre-footer column has an image, a header, an optional description and a link. The example used a gray background, changed to background 1 (white) for a cleaner look. [L1309, 2020-26]
- Pre-footer trust column pattern: each column pairs an icon image with a short benefit header that tells the visitor why the store is reliable, such as shipping threshold, origin or checkout security.
  Example 1: Free shipping over 75 dollars.
  Example 2: Secure payment at checkout. [L1309, 2020-26]
- Security cues such as trust badges belong on the cart and checkout pages as well. They reassure shoppers at the point where they decide to pay. [L1522, 2021-22]
- Homepage section for a single-niche store includes trust signals and a risk-free message. [L1363, 2023]

### Footer

#### Footer structure and content

- Footer structure in the theme editor: Brand description, Text column (contact information), Useful links column, and Legal links column with Privacy Policy, Shipping policy, Refund policy, Terms of service and Contact information. Upload a footer logo from the library and link each policy page. [L1188, 2026]
- Add footer text by opening the footer section, clicking Add block, and choosing Text. Write the About Us text with the brand mission, email address and business address, then click Save. [L1326, undated]
- Add a footer logo by clicking Add block in the footer section and choosing the Image block. Upload the logo, increase its size so it is clearly visible, and click Save. [L1326, undated]
- The footer should contain a customer care section with the links visitors look for, plus an about section. Visitors who land on a product page see the navigation first and scroll to the footer next, so it must support them. [L1325, 2020-26]
- The footer should contain a get-in-touch section, support hours, support email addresses, a live chat link and links to social media pages. Footer links to unrelated pages make the store look untrustworthy. [L1346, 2020-26]
- Footer editing is done in the same customizer sidebar and is a separate step. Cookie consent is a pop-up set in the same sidebar and can be switched on or off. [L1309, 2020-26]
- Do not link any section or footer item to a page that does not exist yet. Suppliers clicking dead links see a broken store, so leave link fields empty until the target page is created. [L1309, 2020-26]
- Repeat the Highlights banner near the bottom of the homepage with a different background color than the footer, so two identical colors do not sit next to each other. Use a second color from the brand palette. (Superstore theme, 2021-2022, older advice.) [L1310, 2021-22]

### Pages and blog (Manhattan theme)

#### Editing a page template

- Open the theme editor, click the template dropdown at the top, switch from home page to Pages, and select the default page (the About Us page) to edit it. A separate Contact page template also exists. [L1265, 2020-26]
- In each page's settings in the Shopify admin, adjust padding, margin and width (full width or narrower, centered). [L1265, 2020-26]
- Each page type has its own template in the theme editor. To give a page different sections than the default page or the contact page, create an additional page template instead of changing the existing ones. [L1265, 2020-26]
- Add a logo list with a heading such as "Brands we've worked with" by clicking Add section and adding logos one by one. [L1265, 2020-26]

#### Blog listing and posts

- Make sure blog posts are published and visible, because hidden posts do not show in the listing. [L1265, 2020-26]
- Blog listing settings: choose Grid or Collage layout. Collage shows the newest post at the top, while Grid shows posts evenly. Featured images are recommended to be shown, and image height can be set. Show or hide date and author, and set card or standard layout in theme settings. [L1265, 2020-26]
- Card or standard layout and the background colour under post titles are set in the theme settings and are separate from the grid or collage choice. [L1265, 2020-26]
- Blog posts template: adjust padding, margin, page width, featured image size (Adapt to image keeps the uploaded size), title, date and author visibility, and the share link. [L1265, 2020-26]
- With Adapt to image, the featured image becomes full size based on the uploaded image size. Keep the page width unchanged so it matches the rest of the site. [L1265, 2020-26]
- Keep the blog post page width at the theme default. A narrower width makes the post text noticeably less wide on large monitors and stops it from matching the rest of the site. [L1265, 2020-26]
- Blog post pages show a share link by default that lets readers copy the post URL. Keeping it visible is recommended. Hiding it is possible but not advised. [L1265, 2020-26]
- Add an Email signup section to the blog posts template: enter a heading, click Save, optionally change the accent color, then Save again. [L1265, 2020-26]
- Hide Rich text and Blog posts sections in the first version of a store with no content yet. Enable them later when content exists. [L1309, 2020-26]

### Cart page

#### Manhattan theme cart setup

- To edit the cart, open the Theme Customizer, click the page dropdown at the top and scroll to the cart entry. The checkout entry is in the same dropdown but cannot be edited; only the cart can be changed. [L1450, 2020-26]
- Customers reach the cart either by clicking the cart icon after adding a product or by being sent straight to the cart, depending on the add-to-cart behaviour in the product page settings. The cart page must therefore work as a standalone step before checkout. [L1450, 2020-26]
- The default cart page keeps the header, the mega menu built earlier and the footer. These global elements can stay without changes. [L1450, 2020-26]
- Items section: shows the products the customer has added. Its padding and margin controls move the content up or down. No changes are needed in a default setup. [L1450, 2020-26]
- Subtotal section: shows the subtotal, the checkout button and the order special instructions field. Its padding and margin can be adjusted the same way as the Items section. [L1450, 2020-26]
- Cart note: in the cart's theme settings it can be enabled or disabled. When disabled, the order special instructions text disappears from the cart page after saving and reloading the store. [L1450, 2020-26]
- Keep the cart note enabled. Customers sometimes write notes there, and these are saved to the Shopify order information. Disabling it removes a channel for useful customer requests. [L1450, 2020-26]
- Do not modify or hide the checkout button, because customers with items in the cart must always be able to proceed to checkout. [L1450, 2020-26]
- Additional blocks such as a countdown timer or a coupon are added inside the cart template through the add block option. Each block is placed by moving it in the customizer, and its colours and text are set in its own settings. [L1450, 2020-26]
- Adding extra content such as rich text sections to the cart page is usually unnecessary and can distract buyers from checkout. Add sections only when there is a clear reason. [L1450, 2020-26]
- Cart page setup order:
  1. Open the Theme Customizer and select cart in the page dropdown.
  2. Check the Items and Subtotal sections and adjust padding or margin only if spacing needs fixing.
  3. Open Theme settings and keep the cart note enabled.
  4. Leave the checkout button unchanged.
  5. Add any optional blocks such as the urgency timer or the coupon only when they are needed.
  6. Click save and reload the storefront to check the result. [L1450, 2020-26]

#### Cart page content and checks

- Check the cart page by adding a product from the storefront and opening View cart, because the cart page is empty until a product is added. Text on the cart page can be changed through the theme's default content settings. [L1326, undated]
- Optimise the cart page, which many stores neglect, because it is where shoppers start to doubt the purchase. Add USP messaging, shipping details and upsells there, presented the same way as on the product page. [L1522, 2021-22]
- Reconfirm unusual shipping requirements on the cart page as well as on the product page. Upsells that some shoppers missed on the product page can also be shown on the cart page. [L1522, 2021-22]
- Cart in the Superstore theme needed no change in the early-stage settings order. [L1371, 2021-22]

#### Smart Cart

- Layout choice at creation is Single Column or Double Column. A Double Column cart gives cart line items a dedicated area, which suits carts with long item lists such as parts and accessories. The layout can be switched later without starting over. [L1231, 2025-26]
- Advanced settings pull typography from the Shopify theme's typography settings. The title heading level can be changed, for example from H1 to H2, to get the wanted font without custom CSS. The cart title can also be hidden entirely, for example to place a store logo with custom CSS. [L1231, 2025-26]
- The country field in Smart Cart v2 suggests matching countries as you type, so merchants do not need to know the two-letter ISO code. In v1 this code had to be typed in directly. [L1231, 2025-26]
- The order notes component collects a gift message or special instructions. These notes appear in the order attribution section on the right side at the top of the Shopify order, not under the line items. [L1231, 2025-26]
- The cart subtotal has singular and plural label fields, and the item count can be inserted with a variable. Keep the subtotal label simple, since heavy changes are rarely needed. [L1231, 2025-26]
- The Express checkout block in the Smart Cart editor is only a placeholder and does not appear as text on the live store. The buttons that show depend on the accelerated checkout methods connected in the Shopify admin and the express checkout preferences set there. They can display as separate buttons in a row instead of one combined block. [L1231, 2025-26]

### Homepage structure and order of work

#### Principles

- The homepage is the first page visitors see on the root domain and the hub of the site. It should introduce the business, state what is good about it, give reasons to buy, and introduce the products sold. It connects to all other pages through the main menu, the bottom navigation and the search bar. [L1463, 2021-22]
- In high-ticket dropshipping the reseller sells the same products as other sites, so the homepage must sell the business as well as the products. Customers compare where to buy as well as what to buy. At launch the competition is on identical products; a brand's own products come later. [L1463, 2021-22]
- A weak store design holds back sales even when ads perform. Improve the store before running ads, with better images and a clear layout. [L1439, 2024+]
- Homepage imagery must match the store's product type. Show people using the products and link to the category collections of that product type. [L1346, 2020-26]
- A homepage that mixes lifestyle photos unrelated to the products confuses visitors and makes the store look incoherent. [L1346, 2020-26]
- Shopify core components are the announcement bar, header, footer and the main page types (home, product, collection, cart, blog and checkout). Set up these components before adding more content. [L1326, undated]
- The home page can stay simple with two or three sections: a banner related to the current product, the product itself, and a benefits section with badges such as priority shipping and money-back guarantee. [L1412, 2023]

#### Homepage structures by store type

- Niche store (procedure, as the lesson describes it):
  1. A banner that matches the feeling of the exact customer.
  2. An About Us or mission section telling the brand story.
  3. One or two sections for the main product.
  4. A collection of products.
  Keep it clean and branded, since most traffic arrives via ads directly to product pages. [L1158, 2023]
- Single-niche store, in this order:
  1. Headline with the offer and a big benefit, such as a percentage discount.
  2. Striking product visuals.
  3. Review badge that links to the reviews section.
  4. One customer testimonial.
  5. More product images.
  6. A best-sellers section with a link to each product the visitor can choose.
  7. Trust signals and a risk-free message.
  8. Benefit copy describing what the product does for the customer. [L1363, 2023]
- Tested Superstore theme homepage section order:
  1. Utility bar
  2. Header
  3. Slideshow
  4. Highlights banner
  5. Featured collections (Collection list)
  6. Image with text overlay
  7. Featured collection (product grid)
  8. Search
  9. Highlights banner (repeated near the bottom)
  10. Footer [L1310, 2021-22]
- Early-stage high-ticket dropshipping store section list:
  1. Announcement bar (fixed).
  2. Utility bar (fixed).
  3. Header (fixed).
  4. Slideshow used as a single static hero image (fixed).
  5. Highlights banner.
  6. Collection list.
  7. Image with text overlay.
  8. Featured collection.
  9. Footer (fixed).
  All other default sections such as Grid, Rich Text and Testimonials can be removed. [L1371, 2021-22]
- Conflict between structures: the tested Superstore order has 10 positions and the niche procedure has 4 (plus banner). The early-stage order has 9. Use the niche structure for a single-product ad landing store [L1158, 2023; L1363, 2023] and the Superstore order as an example of a full multi-section homepage [L1310, 2021-22]; the older 2021-2022 orders are examples, not requirements. [L1310, 2021-22; L1371, 2021-22; L1158, 2023]
- Start a new Shopify store's public home page from the basic template, which has an Image with text overlay section and no images or design. It is changed from the storefront preview using the Edit home page option, as part of the design work after account setup. [L1314, 2021-22]

#### Supplier-ready demo store setup (Manhattan theme)

- Time: a full homepage customization of a new Shopify theme takes about one hour when the brand images are already finished. [L1309, 2020-26]
- At the supplier-approval stage the homepage only needs to look credible and work. Advanced mega menu, product card and blog settings can wait until the store is live. [L1309, 2020-26]
- Procedure:
  1. Upload all prepared images in one batch under Content > Files > Upload files, select them all and click Open.
  2. Go to Online Store > Themes and confirm the Manhattan theme is active.
  3. Click Customize and check that the dropdown at the top reads Homepage.
  4. Open Theme settings (gear icon) and set logo, favicon, colors, typography, layout, buttons, social media and contact details.
  5. Open Header and set sticky header, logo position, menu, menu type, separator line, menu fonts and navigation colors.
  6. Edit the Slideshow: keep one slide, add image and text, link the button to a collection.
  7. Edit the Collection list: heading, columns, overlay, then add collections and their images.
  8. Edit the Featured collection, Image banner (only if needed), Email signup and Pre-footer.
  9. Hide Rich text, Blog posts and the Announcement bar until they are needed.
  10. Edit the footer and cookie consent, click Save after each section and check the homepage on desktop and on a phone. [L1309, 2020-26]
- Uploading images to Content > Files does not link them to any section. Each image still has to be selected inside its section; the upload only makes them available in the picker. [L1309, 2020-26]
- Imagery and sections should be finished in a supplier-approval demo as credible placeholders; the full store can be refined after launch. [L1309, 2020-26]

#### Build order for the initial site (Superstore theme, 2021-2022, older advice)

1. Set up the homepage with the business message and links to the main sections.
2. Set up the collection page template once so every collection uses the same settings.
3. Set up the product page template once so every product uses the same settings.
4. Create all single pages (About Us, Contact Us, policies, terms) and link them into the navigation.
5. Leave the blog untouched until after the business has launched.
When steps 1 to 4 are done, the site is ready for the next stage. [L1463, 2021-22]

### Social links

- Add social media links in theme settings, next to the logo, colors and contact details. Social media is part of the Supplier-ready demo procedure at step 4. [L1309, 2020-26]
- Leave social media until launch, then add Facebook, Pinterest, email address and Instagram. [L1371, 2021-22]
- The footer should link to social media pages, and links to unrelated pages make the store look untrustworthy. [L1346, 2020-26]

### Hiding vs deleting sections

- Deleting or hiding a section is reversible in the customizer, but deleting removes its settings. For a first version it is safer to hide sections with the eye icon than to delete them. [L1309, 2020-26]
- While building a theme, hide a section you are unsure about with its visibility toggle instead of deleting it, so you can restore it without rebuilding. Delete a section only when you are sure you will not need it. (Shrine theme.) [L1331, 2025-26]
- Hide Rich text and Blog posts in the first version of a store with no content yet, and enable them later when content exists. [L1309, 2020-26]
- Removing a section: click into it, click the three dots at the top of the panel, and choose Remove section. [L1371, 2021-22]
- In a Shopify theme the header, announcement bar, utility bar and slideshow sections are fixed and cannot be removed, and the footer is always part of the site. Only the optional sections in between can be removed. (Superstore theme, 2021-2022, older advice.) [L1371, 2021-22]
- The Shrine theme editor's Add section panel has a Search sections box that filters the whole list of section groups. A section can be found by typing its name instead of scrolling through the Header, Footer, Sections, Others and Apps groups. [L1330, 2025-26]

Sections available in the Shrine Pro theme editor, grouped as shown in Customize > Add section:

| Group | Section names |
|---|---|
| Header | Horizontal Ticker, Announcement bar, Header |
| Cart drawer | Cart drawer |
| Home page template | Slideshow, Comparison table, Icon Bar, Results, Contact Form, Instagram stories, Promo Pop-Up, Scroll to Top Button, Global Music Player |
| Footer | Section divider, Footer |
| Sections (main list) | Featured product, Collection list, Rich text, Image with text, Image banner, Slideshow, Collage, Multicolumn, Multirow, Collapsible content |
| Others | Email signup, Contact form, Video, Blog posts |
| Apps | 3D Parallax hero, Announcement bar, Before & After slider, Bundle deals, Comparison table, Content tabs, Custom Columns V2, Facebook testimonials, Featured on, Horizontal Ticker, Icons with content, Image/Video Slider, Instagram stories, Music Player, OLD Custom columns, Page scroll progress, Custom Liquid, Page |
[L1330, 2025-26]

### Checkout branding

#### What can be changed

- The Shopify checkout cannot be fully redesigned because Shopify controls it for security, using 256-bit encryption. Store owners can only add a custom logo, a background image of about 1000 x 400 px, and some color and button changes. [L1371, 2021-22]
- Shopify Plus (about 2,500 USD per month) is required to customize the checkout. Otherwise the checkout is the same for all Shopify stores. Within that limit, upload the brand font in Shopify so it appears at checkout, set the logo in the checkout settings, and use a logo with trust signals such as free shipping or a money-back guarantee. [L1363, 2023]
- Conflict on access: one source says full checkout customization requires Shopify Plus [L1363, 2023], while another describes adding a checkout banner under Settings > Checkout without naming a plan [L1259, undated; L1260, undated]. Check your plan before you promise a custom checkout.
- Conflict on size: the checkout banner is 1500 × 300 px [L1259, undated; L1260, undated], while the older source gives a background image of about 1000 × 400 px [L1371, 2021-22]. Use 1500 × 300 px for the checkout banner under Settings > Checkout; use the 1000 × 400 px background only where the older Superstore-era guidance applies. [L1259, undated; L1260, undated; L1371, 2021-22]

#### Checkout banner and trust elements

- Shopify checkout image: go to Settings > Checkout and add an image (checkout banner). Recommended size is 1500 × 300 px. Create it in Canva with custom size 1500 × 300, add the logo, and add trust badges such as Privacy Protected, Secure Checkout and Satisfaction Guaranteed from Canva's Elements section. Add payment icons (Visa, Mastercard, PayPal) and optionally a 30-day money-back guarantee. [L1259, undated; L1260, undated]
- Case: a store that changed nothing except adding checkout trust elements (secure checkout, guarantee, payment logos) moved from a conversion rate of 0.29% to 2.15% in one day, with an Add to Cart rate around 8%. [L1260, undated]

#### Checkout settings procedure (Superstore theme, 2021-2022, older advice)

1. Open Checkout in the theme settings.
2. Upload the logo as a custom image, set it to Medium size, and place it in the center.
3. Leave error messages red.
4. Change the button color to match the site buttons and the accent color to the main brand color.
5. Click Save before leaving the editor, because unsaved changes are lost. [L1371, 2021-22]


Part 25 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/24-hiding-vs-deleting-sections.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/26-demo-store-for-supplier-approval.md
