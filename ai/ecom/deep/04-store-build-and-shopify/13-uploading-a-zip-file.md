<!-- part of ecom/deep/04-store-build-and-shopify.md -->
Part 13 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/12-theme-selection-installation-and-migration.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/14-shrine-pro-setup.md

### Uploading a zip file

- Upload a theme to Shopify (current procedure):

1. Go to Online Store > Themes and open the Theme library.
2. Click Add theme.
3. Click Upload zip file.
4. Drag the.zip file into the upload area or select it, then click Upload file.
5. Wait while the message Installing theme appears; this takes about 30 seconds while Shopify processes the file.
6. Check that the new theme appears in the Theme library with its name and version number, for example Manhattan version 2023.
7. Click Publish only if the store has no active theme in use yet, which is the case for a brand-new store.

[L0975, 2023+]

- Processing a theme file takes about 30 seconds, and the progress message Installing theme appears during this time. [L0975, 2023+]
- Large theme files take a while to upload. Wait until the theme shows in the theme library and the installation has finished before clicking Publish. [L0974, 2020-26]
- A theme uploaded to Shopify is unpublished by default. Uploading it does not change what visitors see, so the new theme can be edited safely before it is published. [L0975, 2023+]
- Uploading a theme does not activate it. The previously published theme, usually the default Shopify theme, stays live until you click Publish on the new theme. [L0974, 2020-26]

#### Theme admin upload procedure (course version)

1. Log in to your Shopify account.
2. In the left navigation, click Online store, then Themes.
3. Click Import theme in the top right corner.
4. Click upload a zip file, then either click add file and select the ZIP file, or drag the ZIP file into the upload area.
5. Click upload file and wait for the upload to finish.
6. Find the new theme in the theme library and click Publish on it.

[L0974, 2020-26]

- Online store > Themes > Import theme (top right) > upload a zip file > add file or drag the ZIP file in > Upload file. The uploaded theme then appears in the theme library below the active theme. [L0974, 2020-26]
- Publish the uploaded theme in the theme library to make it the live theme. Publishing replaces the currently active theme, such as the free default Shopify theme, with the uploaded one. [L0974, 2020-26]
- Import theme is the same action as Upload theme or Add theme > Upload zip file in the other sources. [L0974, 2020-26; L0975, 2023+; L0934, 2023; L1292, 2021-22]

#### Upload procedure

1. In the Shopify admin, go to Online Store > Themes.
2. Click Upload theme under Theme library.
3. Click Add file and select the theme file, which must be a.zip archive; re-zip the folder if it was automatically unzipped by macOS, since other folder types fail to upload.
4. Click Upload file and wait for the upload to finish; the theme is added unpublished by default (maximum file size 50 MB).
5. Click Actions on the uploaded theme (use Customize only when editing); do not change the code editor settings in Actions at this stage.
6. Click Publish, then confirm with Publish again; this replaces the current theme and makes it the active theme.
7. Preview the store using the eyeball icon to check the change.

[L1292, 2021-22]

#### Add theme procedure (2023)

- Upload a new theme in the Shopify admin under Themes, using Add theme and then Upload. It stays unpublished and invisible to customers until you click Publish, so you can customize it safely first. [L0934, 2023]
- Setting up a new theme without disturbing the live store:

1. In Shopify admin, open Themes.
2. Click Add theme and then Upload theme.
3. Customize the uploaded theme while it is unpublished.
4. Click Publish only when the store is ready.

[L0934, 2023]

#### Upload and check procedure (2025)

- Uploading a new theme in Shopify: import the theme so it lands in the theme library. Make all customizations there, then click Publish. The published theme replaces the live one and the old theme moves into the library. [L0472, 2025]
- Check the active theme name in Shopify under Online Store > Themes. [L0472, 2025]

#### one source store build (2026)

1. Buy the theme license on the vendor site and choose the number of licenses needed for the store.
2. Download the theme file that the vendor emails after checkout.
3. In Shopify admin go to Online Store > Themes and choose Upload theme, selecting the zip file.
4. Uploaded themes are unpublished by default, so open the theme and choose Edit theme or Publish once it is ready.
5. Enter the license number from the vendor into the review app (Judge.me) so reviews work.
6. Adjust header, home page, collection and product page sections in the theme editor.
7. Set logo, colors, typography and button styling under Theme settings.
8. Check the layout in mobile preview before publishing.

[L1188, 2026]

- A theme uploaded as a zip file is placed under Online Store > Themes as an unpublished draft. It must be published before visitors see it. Use the Edit theme button on the draft to open the editor. [L1188, 2026]

#### Adding the Course C theme to an existing store

- Online Store > Add Theme > Upload ZIP file. No new Shopify account is required. [L0298, 2023]

### Draft versus published

- Install a new theme as unpublished, adjust it while unpublished, then publish it when ready. Installing a theme directly onto a live store can break the site. [L0247, 2021]
- When a new theme is uploaded it goes live only as a draft, so the current live store is not changed. The draft can be customized and then published when it is ready. (2024.) [L0360, 2024]
- A new Shopify theme is installed as a draft that only you can see. Design it in the draft, then publish it. Installing a new theme does not carry over the design edits of the old theme. Apps and products do carry over. [L0834, 2021]
- Upload a new theme as a draft first, so the live store is not affected while you check it. [L0470, 2023]
- Uploading a theme as a draft does not change the live store. If the new theme is published by mistake, you can republish the old theme to revert. Themes do not update automatically in the background once installed. [L0804, 2023]
- Publishing a new theme on a store that already gets traffic and sales, before its customization is finished, can change the live site unexpectedly. Finish setup and customization before publishing. [L0975, 2023+]
- Publish a new theme right away only when the store is brand new and no other theme besides the default free one is in use. If the store already has visitors and sales, keep the new theme unpublished until the remaining setup steps are complete. [L0975, 2023+]
- Publishing a new theme replaces the current active theme immediately. Until a custom domain is connected, the store can remain password protected so visitors cannot see the live site. [L1292, 2021-22]
- The replaced theme stays listed in the Theme library. It can be published again if the new theme needs to be reverted. [L1292, 2021-22]
- Shrine Pro setup includes publishing the theme while the store is still password protected. This is the step where the theme goes live behind the password. [L1330, 2025-26]
- Do not change a working theme just to upload products. Uploading products is the same process for any theme, so a redesign suggested for that reason is unnecessary. [L0808, 2026]
- A live store with traffic does not need to switch to a newly released theme. Upgrades only improve usability and should be adopted when convenient, not as an urgent change. [L1114, 2023]
- Switching themes is not urgent. An older one source theme can continue to be used until you have time to change it. Changing to a newer theme later will not break the store if it is not published before testing. [L0934, 2023]
- Changing the theme often disrupts traffic and conversions, so design changes should be made deliberately and mostly during a later conversion-rate optimization phase rather than repeatedly. [L1292, 2021-22]
- Avoid editing the site's code early on. Custom code changes are worth it only once the business is selling and growing, and the theme editor covers the launch phase. [L1292, 2021-22]
- Test a new theme without changing the live store:

1. Go to Online Store > Themes.
2. Add the theme zip to the theme library. It appears as a draft and does not change the store.
3. Click Customize on the draft and edit and preview it.
4. When it is ready, click Publish to make it the live theme.

[L0665, 2022]

- Test a new theme without going live (2023):

1. Download the theme zip file.
2. Upload it in Shopify admin as an unpublished theme.
3. Preview it and make changes.
4. Keep the current live theme until you decide to publish the new one, at which point the current theme becomes a draft.

[L1283, 2023]

- Publish a new theme after customizing it (2025):

1. Upload the new theme, where it is saved as a draft.
2. Open Customize for the draft theme and change colors, the logo and other settings.
3. When satisfied, click Publish.
4. The new theme becomes the main theme and the old theme moves to the theme library as a draft. Menus, products and pages stay in place, so you do not need to recreate them.

[L1287, 2025]

### Switching themes

- Switching themes requires redoing customizations such as colors and homepage images. Products do not need to be rebuilt. [L0247, 2021]
- Switching themes takes only a few clicks, but custom colors and custom code do not carry over automatically. The effort depends on how far the store has been changed from the default theme. [L0960, 2019]
- When switching themes, products, collections, blog posts and pages are kept. Logo, menus, colors, fonts, homepage images and homepage layout must be set again. [L0665, 2022]
- Switching themes changes the look, not the data. Products, pages and blogs remain. The new theme needs only skinning (colors, logos, images) before publishing. Test the new design in draft mode first. (2024.) [L0806, 2024]
- Switching themes does not change your products, but theme customizations such as layout changes must be applied again in the new theme. [L0968, 2021]
- A theme switch to a newer Shopify theme does not require rebuilding the store. Content pages and product pages carry over, but colors and image placements need to be reset in the new theme. (2023.) [L1114, 2023]
- A new theme migration keeps products, pages and content, but cosmetic items must be reset. These include color scheme, logo, homepage images and layout. [L1112, 2021]
- Switch an established store to a new theme only if you need functions it offers. New stores can start on the newest version, while stores already running well can wait for the final release. [L1112, 2021]
- The Charlotte theme is not expected to be replaced soon, and no major update is planned in the near term. A new theme was expected around a year out, and the current one stays supported. [L1281, 2022]
- Changing themes (for example Charlotte to Manhattan) has no one-click migration. The practical method is to keep both theme editors open side by side, on two monitors or in a split screen, and move settings over manually. (2024.) [L0805, 2024]
- Migrating to a new theme (2021):

1. Install the new theme as a draft so the live store is unchanged.
2. Copy over the color scheme, logo, homepage images and layout by hand. Products, pages and content carry over automatically.
3. Keep the published theme and the draft theme open side by side and transfer things one by one.

[L1112, 2021]

- Install a new theme (for example Manhattan) on an existing Shopify store without losing content (2024):

1. Download the theme from the blueprint's theme lesson.
2. Upload it to Shopify. It is saved as a draft and does not replace the live theme.
3. In the draft, set the color scheme, logo, images, homepage and collection images, and add any custom code.
4. Products, pages and blogs carry over automatically.
5. When happy, publish the draft. The old theme becomes a draft and the new theme becomes active. You can toggle back at any time.

[L0806, 2024]

- Migrating to a new theme, the course checklist (2022):

1. Make changes in draft mode, not live.
2. Visit every page type: homepage, collections, product pages, contact, blog and checkout.
3. Click and interact with everything.
4. Test the entire purchase process.
5. Check that all apps display correctly (for example Klarna financing buttons).
6. Only push live after confirming everything works.

[L0249, 2022]

- Migrating Shopify themes (2022):

1. Create the new theme as a draft in Shopify (this does not affect the live store).
2. Work on design changes in draft mode: colors, logo, layouts.
3. Preview the draft to test all pages.
4. When satisfied, publish the draft as the new live theme.
5. The previous theme automatically moves to draft status and can be reverted if needed.
6. The product catalog, data and content remain unchanged. Only design elements are swapped.

[L0272, 2022]

- When switching Shopify themes, create the new theme as a draft, work on design changes in the background, preview the draft, then publish it as live. The previous theme automatically moves to draft status, and you can revert to it at any time if needed. [L0272, 2022]
- Install a new Shopify theme such as Charlotte without disrupting the live store (2022):

1. Add the theme as a new theme in the Shopify back end, where it appears as a draft.
2. Customize the draft for colors, logo and similar settings.
3. Publish it. The previous theme then becomes the draft.

Products, collections and pages transfer automatically, and no downtime occurs. [L0963, 2022]

- Switching to a newer theme (2022):

1. Upload the new theme as a draft in Shopify.
2. Re-apply the colors, logo and custom images.
3. Products, collections and content pages carry over, so the store core does not need to be rebuilt.

[L1281, 2022]

- Migrating a live store to a new theme without changing the live store (2024):

1. Upload the new theme, which is saved as a draft.
2. Customize the draft while the current theme stays live.
3. Publish the draft when it is ready. This makes it the live theme and turns the previous live theme into a draft.

[L0360, 2024]

- Traffic after a theme change: the page structure and URLs remain identical, so traffic should not change. If traffic drops after a theme migration, check the Google Analytics acquisition sources to identify which traffic source dropped (organic, paid, direct or referral). [L0249, 2022]
- The Charlotte theme was recommended for its lightweight speed. [L0272, 2022]
- Charlotte loads in about 645 milliseconds, which is already fast. Switching to a newer theme is optional, not needed for speed alone. (2024.) [L0806, 2024]

### Updating a theme

- A new theme version is not an automatic update to an existing store. It has to be uploaded and installed like any other theme, so plan the switch and test the store before going live. [L1086, 2019]
- Theme updates are not applied automatically. The developer notes what changed and how to apply it, because automatic updates could break a customized store. [L0854, 2022]
- Before updating a Shopify store theme, confirm which theme version is installed and ask support whether the update will keep your customizations. Do not assume a theme update will leave custom changes intact. [L1088, 2020]
- Upgrading a theme without losing the live store (2020):

1. Open the Shopify admin.
2. Go to Online Store, then Themes.
3. Upload the newest version of the theme.
4. Adjust colors and layout in the draft, which does not change the live store.
5. Click Publish only when the draft is ready.
6. If needed, republish the previous theme.

[L0664, 2020]

- Theme upgrades reset design choices such as colors and layout, but products and content stay. Plan time to restyle after upgrading. [L0664, 2020]
- Use the newest version of the store theme, which is at least as recent as the last couple of months. Older themes can be upgraded, but the upgrade means redoing the design. [L0664, 2020]
- Update to a new theme without breaking the live store (2021):

1. Upload the new theme, which is saved as a draft.
2. Edit and adjust the draft until it looks right.
3. Publish it. The old theme remains available as an option.

If the current theme works, there is no need to switch. [L0968, 2021]

- Install the newest one source theme version (2023):

1. Go to the members area, module 3, lesson 3.1, and download the newest theme (last updated 12 December 2022).
2. In Shopify, upload it as a draft so customers do not see it.
3. Edit and test it in the draft.
4. When ready, publish the new theme and set the old one to draft.

[L0804, 2023]

- Charlotte v1.3 is the latest downloadable version, released 21 February 2022. Earlier versions can be updated to it as a new theme. [L0963, 2022]
- Charlotte bug fixes arrive as small code snippets. If a live store shows an issue, ask support for the code change rather than downloading and rebuilding the theme again. [L0963, 2022]
- The 1.2 to 1.3 Charlotte update consisted of small bug fixes, not new features. No detailed change log was available at that time. [L0963, 2022]
- Shopify 2.0 redesigned the theme customizer, so the editor looks different from earlier versions. Drag-and-drop sections across the whole page work only on themes whose developers have updated them to support it, and at launch very few themes did. [L0949, 2021-22]
- Dawn supports the Shopify 2.0 drag-and-drop sections feature, and at launch it was one of very few themes to do so. Check which themes support the feature before planning a redesign around it. [L0949, 2021-22]
- Before switching to a Shopify 2.0 theme, ask your theme developer for their timeline for supporting the update. Themes from developers who rarely update may never gain the new features. [L0949, 2021-22]
- Updating a theme usually wipes customizations, including custom code for SEO and custom front-end elements that customers see. Before updating, record where each piece of code was inserted and how, so you can restore it. [L0949, 2021-22]
- A lightly customized store can switch to a new theme with little work. A store with years of layered changes needs a developer or a careful audit. A theme update can also be a good chance to rebuild the store from a clean slate. [L0949, 2021-22]
- Hard-coded edits made directly in theme code are not carried over when a new theme version is migrated. Plan to reapply custom code changes after a theme upgrade, and keep a record of them. [L0709, 2017+]
- A Chrome extension migrates a store's theme changes into a new theme version, except for hard-coded edits. It is a helpful tool when a theme update is released. [L0709, 2017+]
- Theme licensing emails claiming a problem are often phishing. Check that the sender ends in @shopify.com, but note that emails can be spoofed, so verify through the Shopify support page instead of replying to the email. (2025.) [L0472, 2025]

### Backups and exporting

- Create a backup before editing the store code, because a deleted product page can disrupt daily sales. Ask for help with code changes rather than experimenting on the live store. [L0832, 2019]
- Editing theme code without a full backup can break a live product page with no easy way back. Copy the complete original file into a document before changing anything. [L0960, 2019]
- Rewind Backups is a Shopify backup app that stores copies of store data such as products, themes and orders, so the store can be restored after accidental changes or deletions. (2024.) [L1007, 2024]
- Before switching the theme:

1. Back up the store before switching the theme.
2. Change the theme in Shopify. Products do not need to be uploaded again.
3. Redo all custom code and customizations from the old theme, because they are removed with it.

[L0356, 2019]

- Shopify theme code can be exported from one store and imported into another to keep the same design. Look up Shopify theme export for the steps. [L0247, 2021]
- To go back, republish the previous theme in the Theme library. The previous theme remains available as a draft or in the library after a switch. [L0272, 2022; L0360, 2024; L1292, 2021-22]

### Theme support and safety

- A discount code that cannot be removed should be handled by the theme's support team if the theme is their own. For other Shopify themes, Shopify support can access and change the store directly. [L0469, 2021]
- A store built on a Shopify theme such as Dawn can look different on Windows and Mac, and custom code changes can break the store. A problem with a store connection can take a long time to diagnose, and the Shopify support team can send a fix video. [L0552, 2023]
- Shopify support can help with store problems by sending a video that shows how to fix the issue. This option can save hours compared with troubleshooting alone. [L0552, 2023]
- If a styling option such as a tab border color cannot be found in the Shopify theme settings, do not guess at code changes. Ask the theme provider's support, since the change may need the designer. [L0664, 2020]
- Theme code is edited under the edit.html and edit.css files in the Shopify theme editor. This is the route for HTML and CSS changes that fall outside the Customizer's built-in options. [L0595, 2020-26]
- The one source Manhattan theme is the Shopify theme used in this store build. Its Customizer offers built-in settings for font, colors, layout and content. [L0595, 2020-26]
- Edit theme code only after testing on a duplicate theme. The storefront theme in the demo was the live theme, and a broken Liquid edit on the live theme affects real customers immediately. [L0557, 2025-26]
- Before adopting a third-party theme, check community discussions about the vendor's support quality. [L0356, 2019]
- Shopify's approach to theme safety is to buy only from the Shopify Theme Store or established vendors, and to check each theme's developer and update history before choosing it. [L0853, 2021]
- Editing theme code, the safety checklist:
  - Back up the complete original file first. [L0960, 2019]
  - Create a backup before editing the store code. [L0832, 2019]
  - Test on a duplicate theme before editing the live one. [L0557, 2025-26]
  - Ask for help with code changes rather than experimenting on the live store. [L0832, 2019]
  - Avoid editing the site's code early on. [L1292, 2021-22]


Part 13 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/12-theme-selection-installation-and-migration.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/14-shrine-pro-setup.md
