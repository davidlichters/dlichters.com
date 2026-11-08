<!-- part of ecom/deep/04-store-build-and-shopify.md -->
Part 23 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/22-homepage-and-theme-editor-customization.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/24-hiding-vs-deleting-sections.md

### Logo list

- Homepage logo list: in the theme customizer, choose the homepage, click Add section, then select Logo list. Enter a heading such as Brands loved by our customers or Featured brands, upload supplier logos, and link each logo to the matching collection. Use the three-dot menu and Duplicate to add more logos. [L0966, 2025]
- Section spacing: padding adds space inside a section around its content, while margin adds space between sections. In the header example the bottom margin is 0 and the top and bottom padding are 20 px each. Adjust padding to change space inside a section and margin to change space between sections. [L0966, 2025]
- For a horizontally scrolling logo list created with an AI prompt, use the following prompt unchanged:

```
I'm looking to add a logo list for the brands I sell for on my homepage that scrolls horizontally. Please create the code. I would need to create a new section in Shopify, so please send step-by-step installation instructions and show exactly where to put the code. My store link is [STORE URL]. Brand logo files: [LOGO FILES].
```

[L1116, 2025]

### Collection list

- Collection list section settings include Heading (example: Shop our featured collections), Heading size (small in the example), Image ratio set to adapt to image, Collection description (off by default), Number of columns on desktop (3 in the example), Text overlay with position bottom left, and Overlay color. [L0775, 2020-26]
- Set collection list grid to 3 columns when displaying multiple featured collections on the homepage. [L0101, undated]
- Collection list > Enable view all lets mobile visitors swipe through extra collections. Turn it on if you add more collections than fit on the screen. [L0775, 2020-26]
- With 3 columns on desktop, six collections fill two rows on the homepage, which is the count used in the example. Add more collections only if they fit the layout and will be filled with products. [L0775, 2020-26]
- Example names for 6 collections: Best Sellers, Staff Picks, Top Rated, New Arrivals, On Sale Now, Under $1000. These convey an organized, actively managed store to suppliers and customers. [L0101, undated]
- To add collections to the list:
  1. Click Collection in the collection list section. [L0775, 2020-26]
  2. Click Select collection and pick a collection created earlier. [L0775, 2020-26]
  3. Click Add collection to add the next row. [L0775, 2020-26]
  4. Repeat until the list is complete, then click Save. [L0775, 2020-26]
- Default setup step: change heading to Shop Our Featured Collections, Image ratio Adapt to image, Columns 3, optional text overlay, add 6 collections, then go to Shopify Admin > Products > Collections, open each, add Image, save, refresh theme customizer. [L0101, undated]

### Featured collection

- Featured collection section settings include Heading (example: What's trending in surfing), Collection (example: Best sellers), Number of products (4) and Number of columns (4), so four products show in one row. [L0775, 2020-26]
- Display 4 products in 4 columns in the featured collection section on the homepage for balanced visual proportion. [L0101, undated]
- A featured collection section displaying real products directly on the homepage makes the store appear like an active, inventory-carrying business, which is necessary for both supplier approval and customer confidence. [L0101, undated]
- Product card options in the featured collection let you show or hide a secondary image, vendor and product rating. The sale badge position and its color scheme are set here. Quick view opens a product in place with an add to cart button when turned on, or sends the visitor to the product page when turned off. [L0775, 2020-26]
- Use 5 to 10 products for best sellers, top rated and staff picks sections on the homepage. This is 2023 advice and differs from the 4-product featured collection setup above, so apply it to those sections specifically. [L0964, 2023; L0101, undated]

### Image banner

- Image Banner section on the homepage: hide if you don't have content ready. If using it, select image, add heading (example: Buyer's Guide), add description text and button labels, add button links only if destination pages exist, optionally enable ambient movement for subtle motion effect, save. Use this section for buyer's guides or featured content. [L0101, undated]
- Image banner section settings include the image, Banner height (adapt to first image), Desktop position (middle center), a Container toggle that adds a background box behind the text (off makes text sit directly on the image), heading, description, two buttons with labels and links, and Image behavior (None or ambient movement). [L0775, 2020-26]
- Image banner buttons without a link appear transparent and look broken. Add a link before the store goes live, or hide the banner until a real destination page exists. [L0775, 2020-26]
- Image behavior None keeps the banner image still, while ambient movement makes it move very slightly. Movement is an optional effect that can draw attention to the banner. [L0775, 2020-26]

### Blog posts section

- Blog posts on the homepage are not needed unless you commit to content marketing for the long term. Hide the section until content exists. [L0775, 2020-26]
- Hide blog posts section (not needed for supplier approval). [L0101, undated]

### Email signup (homepage)

- Configure email signup: change headline to branded text (example: Join Shaka Nation), leave default form, choose matching color scheme, save. [L0101, undated]

### Pre-footer trust columns

- Pre-footer section holds several columns, each with an image, header, description and optional link. Set the color scheme to Background 1 (white) for a clean look on a white page. [L0775, 2020-26]
- Configure pre-footer: add 4 columns with icon and short benefit headline (example headlines: Free Shipping $100+, Surfer Owned & Operated, Fast & Secure Checkout, Easy Returns), add links only if pages exist, set background to white if cleaner, save. [L0101, undated]
- Only link pre-footer columns to pages that already exist. Leave a column unlinked until its page is created, because broken or placeholder links look unprofessional when a supplier clicks through. [L0775, 2020-26]
- Link policy pages such as shipping and returns in the pre-footer once they exist. Until then, a temporary link to an existing page such as terms of service is an acceptable fallback, and should be replaced later. [L0775, 2020-26]
- Pre-footer trust column pattern: a short benefit headline followed by one reassuring sentence about how the benefit is delivered. The headline is 2 to 4 words, and the description names the concrete promise. [L0775, 2020-26]
  - Example: Free returns for 30 days, Refunds go back to the original payment method within 5 business days.
  - Example: Secure payment, Checkout is encrypted and card details are never stored on our site.
- The one source theme supports up to seven USP icons in the pre-footer section, and fewer can be used. Each USP should state something that sets the store apart, for example free shipping, a price match guarantee, a women-owned or veteran-owned business, a secure checkout, or 24/7 customer service. [L1045, 2020-26]
- Conflict on pre-footer column count: the one source homepage procedure uses 4 columns, while the one source theme supports up to seven USP icons. Use 4 for the standard setup and up to 7 when that theme is in use. [L0101, undated; L1045, 2020-26]

### Footer: placement, structure and rules

- The footer is a global section that appears on every page of the Shopify store, including the home page. It is edited in the theme editor under the Footer section. Its menu blocks, payment icons, language and currency selectors, small footer text and rich text blocks are all configured from there. Older advice (2021-22, one source's theme). [L0681, 2021-22]
- Footer setup in Shopify, using the Manhattan theme:
  1. Open Shopify admin, go to Online Store > Themes, click Customize. [L0680, 2020-26]
  2. Confirm the theme is Manhattan. [L0680, 2020-26]
  3. Stay on the homepage view, scroll to the bottom and click the footer section. [L0680, 2020-26]
  4. Set the main footer settings (color scheme, localization, payment icons, social media). [L0680, 2020-26]
  5. Set the top and bottom padding. [L0680, 2020-26]
  6. Edit the first column as Contact us. [L0680, 2020-26]
  7. Edit the second column with the store name and its linked menu. [L0680, 2020-26]
  8. Edit the third column as Quick Links and link its menu. [L0680, 2020-26]
  9. Edit the fourth column as the newsletter signup. [L0680, 2020-26]
  10. Click Save, open the live store, refresh it and check the footer. [L0680, 2020-26]
  11. Adjust the logo size if needed, save again, then exit the admin. [L0680, 2020-26]
- Footer setup in the theme editor, in this order (alternative sequence with the same goal):
  1. Open the footer section in the left navigation. The footer has four blocks: Contact us, store name, Quick links and newsletter signup. [L1018, 2020-26]
  2. Block 1 (Contact us): open it in the left navigation, so its settings appear in the right sidebar. Set the heading to Contact us and the text to Reach out, or a more playful line that fits the store. [L1018, 2020-26]
  3. Block 1: enter the support email address in the email field, for example support@yourstore.com. [L1018, 2020-26]
  4. Block 1: delete the placeholder phone number, since a phone number is not needed when contacting suppliers. [L1018, 2020-26]
  5. Footer image: click the image box, choose the same logo used as the main logo in the header, and set the image width in percentage to 50%. [L1018, 2020-26]
  6. Click save, then go back to the store and refresh the preview to check the result. [L1018, 2020-26]
  7. Footer styling: choose the color scheme, set the heading size to small, set top padding to 40 and bottom padding to 40. [L1018, 2020-26]
  8. Footer styling: keep payment icons switched on and switch social media icons off. [L1018, 2020-26]
  9. Block 2: rename the block to your store name and choose the footer menu as its menu. [L1018, 2020-26]
  10. Block 3: title the block Quick links and choose the quick links menu as its menu. [L1018, 2020-26]
  11. Block 4 (newsletter signup): replace the default newsletter text with your own wording and click save. [L1018, 2020-26]
  12. Refresh the store and check that all four blocks show the right content. [L1018, 2020-26]
- Footer reference values from this setup:

| Setting | Value |
|---|---|
| Footer image width | 50% |
| Heading size | small |
| Top padding | 40 |
| Bottom padding | 40 |
| Payment icons | on |
| Social media icons | off until social accounts exist |
| Block 1 heading | Contact us |
| Block 1 text | Reach out, or a playful alternative |
| Block 2 | store name, menu: footer menu |
| Block 3 | Quick links, menu: quick links menu |
| Block 4 | newsletter signup with custom text |

  [L1018, 2020-26]
- Footer setup, summarised as two workflows: the Manhattan procedure [L0680, 2020-26] and the alternative sequence [L1018, 2020-26] reach the same end result, with the same reference values [L1018, 2020-26].
- Footer layout is typically a set of four columns: contact details with logo, store name with a menu of shopping links, a quick-links menu with legal pages and contact, and a newsletter signup. Use legal pages such as Privacy Policy and Terms of Service so they are easy to find, which supports trust and compliance. [L0680, 2020-26]
- The Manhattan footer is set up in four blocks, so the layout uses 4 of the available blocks. [L0102, undated]
- Customize four footer blocks: contact block, store-name menu block (Footer menu), quick links menu block, and newsletter signup block. [L0102, undated]
- A store that suppliers visit should show contact details, the store name, quick links and a newsletter signup in the footer. Together these make the store look ready for supplier outreach. [L1018, 2020-26]
- The footer limit in one source's theme is 5 content blocks, so one must be deleted before another can be added. A footer with three menu blocks already fills the layout, so a fourth menu is usually unnecessary. Older advice (2021-22). [L0370, 2021-22; L0681, 2021-22]
- Footer demo limit note: the static footer section allows a maximum of 5 content blocks; the theme's additional menu block (for example a search element) can be removed by clicking Remove so only the copyright text remains. Older advice (2021-22). [L0681, 2021-22]
- Once the footer is set up on the home page, it does not need further changes until launch. The next step is to edit collection and product page layouts. Older advice (2021-22). [L0681, 2021-22]
- Theme demo content in the footer, such as placeholder phone numbers, sample addresses, default text and demo menus, must be replaced before launch because it stays visible on the live store. Check every footer block on the home page against the real business details before going live. Older advice (2021-22). [L0681, 2021-22]
- Each footer menu assignment needs a menu that already exists. Create the footer menu and the quick links menu before assigning them to blocks 2 and 3. [L1018, 2020-26]
- Preparation before editing the footer:
  1. Create the main shopping menu (Search, main product category, New Arrivals, On Sale). [L0680, 2020-26]
  2. Create the Quick Links menu (About Us, Privacy Policy, Terms of Service, Contact Us). [L0680, 2020-26]
  3. Create a business email address. [L0680, 2020-26]
  4. Upload the store logo. [L0680, 2020-26]

  Only then open the footer editor. [L0680, 2020-26]
- Save every footer change before refreshing the preview, because an unsaved change does not appear on the store. [L1018, 2020-26]
- In the theme editor, a footer block can be edited in two ways: select it in the left navigation so its settings open in the right sidebar, or click the block directly in the store preview. Both routes change the same settings, so use whichever is faster. [L1018, 2020-26]
- Do not judge footer size and layout only in the theme editor. The preview can show overlapping elements that do not appear on the full-screen live store, so always refresh and check the live store before changing settings. [L0680, 2020-26]
- The preview can show the footer email text as oversized and overlapping. This is a preview artifact, so check the live store before changing the settings. [L1018, 2020-26]

### Footer block 1: Contact us

- Contact/Contact Us footer block, procedure:
  1. Click the Contact / Contact Us footer block in Theme Customizer. [L0102, undated]
  2. Set Title to Contact Us. [L0102, undated]
  3. Set Subheading text to something simple (example: Reach out). [L0102, undated]
  4. Set Email to support@yourdomain.com. [L0102, undated]
  5. Remove phone number placeholder if you do not have one yet; add the phone number later when available. [L0102, undated]
  6. Set Footer image to the same logo used in the header. [L0102, undated]
  7. Set Image width to 50%. [L0102, undated]
  8. Save and refresh the storefront preview. [L0102, undated]
- Footer first column (Contact us section): set the heading to Contact us and enter a short text such as Reach out, followed by a business email address and optionally a phone number. Upload the store logo as the footer image. [L0680, 2020-26]
- Footer contact block: add a heading "Contact us" with a short prompt line such as "have a question", then list the business email address and the phone number below it. These two contact methods satisfy the requirement for two contact methods in the footer. [L0377, 2020-26]
- Footer should show a contact us block with both a business email address and a phone number. [L0377, 2020-26]
- Create the business email addresses (for example info@ or support@ on the store domain) before contacting suppliers, and place them in the footer contact section. [L0680, 2020-26]
- A phone number in the footer is optional at the start of a store. It can be left out or deleted until the business has a phone line ready for supplier contact. [L0680, 2020-26]
- A phone number in the footer is expected on a customer-facing store, but it can be left out of a store whose only purpose is contacting suppliers. Delete the placeholder number before saving in that case. [L1018, 2020-26]
- Leaving a placeholder phone number in the footer contact block is unnecessary for a store used only to contact suppliers. Remove it before saving. [L1018, 2020-26]
- Block 1 phone: delete the placeholder phone number, since a phone number is not needed when contacting suppliers. [L1018, 2020-26]
- Conflict on the footer phone number, by use:
  - Customer-facing store: include email and phone [L0377, 2020-26]
  - Supplier-contact-only store, or no phone line yet: optional, delete the placeholder [L0680, 2020-26; L1018, 2020-26]
- Contact block sample for the one source theme: open the Rich text block in the footer, set the Heading (e.g. Get in touch), write a call to action such as "Get in touch with us today on any of the contact details below" in the Text field, then add the phone number, email in capitals and postal address on separate lines, save and check the live home page. [L0681, 2021-22]

### Footer block 2: store name menu

- Second footer menu block, procedure:
  1. Click the second footer menu block. [L0102, undated]
  2. Set Title to your Store Name (example: Shaka Surfboards). [L0102, undated]
  3. Set Menu to Footer menu. [L0102, undated]
- Footer second column: replace the default heading with the store name and link it to a menu that holds Search, the main product category, New Arrivals and On Sale. Create this menu beforehand alongside the collections. [L0680, 2020-26]
- Conflict on this block: the procedure in [L0102, undated] sets the menu to Footer menu, while [L0680, 2020-26] specifies the menu contents (Search, main product category, New Arrivals, On Sale). Use both: name the menu Footer menu and fill it with those items. [L0102, undated; L0680, 2020-26]

### Footer block 3: Quick Links

- Third footer menu block, procedure:
  1. Click the third footer menu block. [L0102, undated]
  2. Set Title to Quick Links. [L0102, undated]
  3. Set Menu to Quick Links. [L0102, undated]
  4. Include these links: About Us, Returns / Exchanges, Shipping, Privacy Policy, Terms of Service, Contact Us. [L0102, undated]
- Footer third column: rename the default Main menu to Quick Links and link a menu containing About Us, Privacy Policy, Terms of Service and Contact Us. Create that menu before editing the footer. [L0680, 2020-26]
- Conflict on the quick links menu: [L0102, undated] lists six links, including Returns / Exchanges and Shipping. [L0680, 2020-26] lists four, without them. Use the six-link list when those pages exist, and the four-link list as the minimum. [L0102, undated; L0680, 2020-26]

### Footer block 4: newsletter signup

- Newsletter signup block in the footer, procedure:
  1. Click the Newsletter signup block in the footer. [L0102, undated]
  2. Change the headline to something more engaging (examples: Join [Brand Name], Get Updates, Join Shaka Nation). [L0102, undated]
  3. Keep it simple and brand-appropriate. [L0102, undated]
  4. Save and refresh the storefront preview. [L0102, undated]
- Footer fourth column (newsletter signup): keep the default layout and change only the headline to a short, catchy line. Write the headline yourself, in the same style as the example pattern described in the unit below. [L0680, 2020-26]
- Newsletter headline pattern: a short, playful, lowercase line that gives a reason to join and sounds like a community, not a sales pitch. [L0680, 2020-26]
  - Formula: [action verb] + [group or identity] + [small benefit or hook]. [L0680, 2020-26]
  - New examples in this pattern: join the surf crew and get the first drops; be first in line for new arrivals. [L0680, 2020-26]
  - Keep it under about six words. [L0680, 2020-26]
- Block 4 (newsletter signup): replace the default newsletter text with your own wording and click save. [L1018, 2020-26]

### Footer settings and styling

- Footer global settings, procedure (Click Footer in the Theme Customizer, not a block):
  1. Click Footer in Theme Customizer (not a block) to access global footer settings. [L0102, undated]
  2. Set Heading size to Small. [L0102, undated]
  3. Set Padding top to 40. [L0102, undated]
  4. Set Padding bottom to 40. [L0102, undated]
  5. Turn Payment icons ON. [L0102, undated]
  6. Turn Social media icons OFF. [L0102, undated]
- Footer color scheme: click through the available schemes and pick the one that matches the brand colors chosen earlier. The lesson used background two. [L0680, 2020-26]
- Footer padding: set the padding above and below the footer to 40 each. Changing it only moves the footer content further down, so only change it if you want finer control. [L0680, 2020-26]
- Padding conflict: the reference values in [L0102, undated; L1018, 2020-26] set 40 top and 40 bottom as standard. [L0680, 2020-26] treats padding as a finer-control option. Apply 40 as the standard value and adjust only when the live store needs it. [L0102, undated; L1018, 2020-26; L0680, 2020-26]
- Footer localization (country/region selector): leave it off unless the store sells in several countries or regions. Turn it on only in that case. [L0680, 2020-26]
- Language selector: in the Manhattan theme footer settings, the Language selector toggle sits next to the Localization (country/region) toggle and should stay off for a store that sells in one language and one market. Turn it on only when the store actually serves several languages. [L0680, 2020-26]
- Footer > Show payment icons: keep it enabled. Turning it off removes the payment icons from the footer, and turning it on brings them back. [L0680, 2020-26]
- Payment icons only appear after payment gateways are connected. Visa, MasterCard and American Express show up with connected gateways, and Apple Pay or Google Pay appear only if those are accepted. Older advice (2021-22). [L0681, 2021-22]
- Footer settings also include Mobile alignment (Left or Center), Show payment icons, Show language selector and Show currency selector. Older advice (2021-22). [L0681, 2021-22; L0370, 2021-22]
- Footer logo size: the image width is set as a percentage. The lesson went from 80% to 65% and finally to 50%, which looked best on the live store. Test a few sizes on the live store and pick the one that looks right, since the editor preview can overlap and looks different at full screen. [L0680, 2020-26]
- The footer logo should be the same file as the main header logo so the brand looks consistent. Use it with the image width set to 50%. [L1018, 2020-26]
- Copyright and small text: the copyright year in the footer updates automatically each year, so the year does not need manual changes. The text under the copyright line is set in the field Small footer text, where the default theme credit (theme developer name and Powered by Shopify) can be deleted. Older advice (2021-22). [L0681, 2021-22]
- Removing the Powered by Shopify and theme developer credit from the footer is a branding choice to keep only the store's own brand visible. Leaving Powered by Shopify is considered acceptable now because Shopify is widely known, but it is optional. Older advice (2021-22). [L0681, 2021-22]
- Keep the footer settings in Theme settings consistent with the color decisions above. [L0775, 2020-26]

### Footer text rule summary (checks before launch)

- Check every footer block on the live store, not only in the editor, against the real business details. [L0681, 2021-22; L0680, 2020-26]
- Keep social media off until accounts exist, and turn it on only with full URLs. [L0102, undated; L0836, 2024; L1018, 2020-26]
- Keep the footer phone number only if the business has a phone line for suppliers or customers. [L0680, 2020-26; L1018, 2020-26]


Part 23 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/22-homepage-and-theme-editor-customization.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/24-hiding-vs-deleting-sections.md
