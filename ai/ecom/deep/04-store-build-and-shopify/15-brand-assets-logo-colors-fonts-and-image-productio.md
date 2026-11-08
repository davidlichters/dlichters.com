<!-- part of ecom/deep/04-store-build-and-shopify.md -->
Part 15 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/14-shrine-pro-setup.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/16-product-photo-sourcing-and-editing.md

## Brand assets: logo, colors, fonts and image production

### Setup order and file preparation

1. Check the theme's image sizes before you design anything. Each Shopify theme needs its own graphic sizes, and files made for one theme may not fit another [L0098, undated; L0342, 2020-26; L1045, 2020-26].
2. Designing without checking the theme's dimensions produces files that crop, stretch or do not fit [L1045, 2020-26].
3. Look up the theme's sizes in the theme backend and resize to them before uploading. Oversized images can push section titles down the page [L0665, 2022].
4. The theme is called "Manhattan" in one unit and "one source" in others. The size figures below come from both names, so confirm they match your theme before you use them [L0098, undated; L0342, 2020-26; L1045, 2020-26].
5. Upload all brand images in bulk before you edit the theme: Shopify admin > Content > Files > Upload files. Uploaded files are not linked to any section automatically, but you can pick them later in the theme editor without uploading again [L0775, 2020-26; L0857, 2025].
6. For bulk uploads, use the Files section for many images at once. Large uploads can run in the background while you keep working. Image links can also go into the product CSV instead [L1111, 2020].
7. Note the download folder and file name as soon as you save a file. Some computers save to Downloads and others to the desktop [L0342, 2020-26; L1045, 2020-26].
8. Shopify and Canva both ask for files, so keep the Canva originals. Canva stores finished designs under All designs and you can download them again without rebuilding [L0342, 2020-26].
9. Store graphics change with sales, holidays and new collections. Refresh them regularly, and keep the Canva files so the set can be updated quickly [L0342, 2020-26; L1045, 2020-26].

Setup order for the theme:

1. Open Online Store > Themes, click Customize, and go to Theme settings > Logos.
2. Upload the main logo, then the mobile logo.
3. Check the logo in the mobile preview before you continue. About 90% of store traffic is typically on phones [L1331, 2025-26].
4. Go to Theme settings > Colors and paste the brand hex codes into the existing color fields [L1331, 2025-26].
5. Go to Typography, upload the font file, and paste its link into the font field [L1331, 2025-26].
6. In Logos, select the favicon and upload the favicon file made from the logo [L1331, 2025-26].
7. Save after each step and refresh the preview [L1331, 2025-26].

### Canva work

**Free plan limits**
- On the free plan, the Transparent background option in the download menu is greyed out. A PNG downloads with a white background. Transparent PNGs need the paid plan [L1045, 2020-26].
- The white PNG shows as a white box around the logo on any coloured section of the site. Either remove the background before uploading, or use a paid plan with transparent download [L0342, 2020-26; L1045, 2020-26].
- An existing template cannot be resized on the free plan. To get a different banner shape, create a new design [L0342, 2020-26; L1045, 2020-26].

**Working in Canva**
- Start from a template for each asset type, then change text, colours and images to fit the brand. The template links are faster than building from scratch [L1045, 2020-26].
- Text: select the text and use the text colour (A) icon to choose a brand colour. Use the highlight options for font, bold, letter spacing and line spacing [L0342, 2020-26].
- Centring: select several elements, open the three-dot menu, and choose Position > Center [L0342, 2020-26].
- To use a photo as a banner background: search the Elements panel under Photos, drag the photo onto the design, right-click it (or two-finger click on a trackpad), choose Set as background, then move the image to the right position [L1045, 2020-26].
- Once a photo is a background, you can move it inside the frame to position the subject. For example, lower it so a person's head is not cut off at the top [L1045, 2020-26].
- Supplier product photos can be uploaded to Canva the same way as stock photos. This makes all images in a set crop to the same size [L1045, 2020-26].
- Canva's built-in Photos library has many free images for popular niches such as surfing. For niches with few usable stock images, such as basic furniture or mechanical products, download photos from Pexels, upload them to Canva and use them like built-in photos [L1045, 2020-26].
- For a website banner, search the Canva templates for "website banner" and use that size as the starting format. Check the result on mobile first, then adjust the desktop version [L1219, undated].
- Canva is enough to create a simple logo and to edit ebook covers and branding at the start, without a designer [L0871, 2021+].

**Ebook assets (tools)**
- Use Canva's ebook template: search "ebook", choose a cover, type the title and author name, and export it for the store [L0513, undated].
- Placeit creates 3D book mockups. Upload the Canva cover, set the book colour to match (for example black), and download the mockup. This needs a subscription [L0513, undated].
- Pexels.com provides free stock photos for ebook covers. All images are free except those from iStock [L0513, undated].

### Logo and favicon formats

**Logo formats**
- Shopify accepts SVG for logos. Upload the SVG to the logo settings rather than a pixelated image [L0952, undated].
- PageFly also accepts SVG uploads for logos and icons [L1462, undated].
- SVG can be enlarged up to ten times without losing sharpness, because it is built from mathematical shapes and angles [L0952, undated].
- PNG is pixel-based and loses quality when enlarged. Use PNG as the fallback logo format where the platform does not accept SVG [L0952, undated].
- Export logos with a transparent background, so they work on white, dark and dark-mode websites without a visible box [L0952, undated].
- Upload PNGs with transparent backgrounds to PageFly, so the logo sits on any section colour without a white box [L1462, undated].
- When a logo goes in a header, export only the logo selection with no extra page margin, so the header height is not affected [L0952, undated].
- Logo for the one source theme: 800 × 300 px, PNG, transparent background [L0075, undated; L0342, 2020-26].
- Fill the artboard close to its edges, with the logo filling the template almost edge to edge at the right proportions. This prevents empty margins or wrong shapes when uploaded [L0342, 2020-26; L1045, 2020-26].
- Keep the logo simple. A text-plus-icon logo is easier to read at small sizes and looks more professional. A logo that is too detailed or showy is hard to read on the site [L1045, 2020-26].
- A designer logo can be very large, for example 1527 × 518 px, which loads slowly at full size. Crop the surrounding white space, then resize to about 500 px wide while keeping the rectangular shape. This suits the header and checkout [L1371, 2021-22].
- Pixel dimensions describe width by height, not file size. A 40 × 40 px image is 40 pixels across and 40 pixels down. Logos and favicons are sized by these pixel dimensions, usually with the Resize function in the editing tool [L1371, 2021-22].

**Favicon**
- Favicon size: 64 × 64 px, JPG or PNG, transparent background [L0075, undated].
- The favicon is the small icon in the browser tab. Using the same icon as the logo is the simplest, most consistent choice [L1045, 2020-26].
- Create the favicon in Canva:
  1. Open the favicon template from the one source templates and click Use Template [L0342, 2020-26; L1045, 2020-26].
  2. Copy the icon from the logo design, paste it into the favicon template, and centre it [L0342, 2020-26; L1045, 2020-26].
  3. Click Download and keep PNG. On the free plan the file keeps a white background, because transparency is not available. JPEG is an alternative and also keeps the white background [L0342, 2020-26; L1045, 2020-26].

### Logo and favicon in Shopify

**Uploading the logo**
1. Open Theme settings (gear icon in the left sidebar), or go to Online Store > Themes > Customize > Theme settings > Logo [L0775, 2020-26; L0954, 2025-26].
2. Under Logo, click Select image and choose the file from Files. Alternatively, in the header section, open the logo setting in the theme settings and upload the file [L0775, 2020-26; L0954, 2025-26; L1326, undated].
3. Click Done and check the header preview. Adjust the size until it displays correctly [L0775, 2020-26; L0954, 2025-26; L1326, undated].
- The default desktop logo width is 200 px. Change it only if the uploaded file is noticeably larger or smaller, and check the preview [L0775, 2020-26].
- The logo appears in the store header after upload [L0954, 2025-26].
- In one example store, the logo height was set back to 100 after being enlarged. The logo should be neither so large it crowds the header nor so small it is hard to read. Mobile uses the same logo image, but its size is set separately [L1371, 2021-22].
- In one source' theme, footer logos are chosen the same way as header logos [L1188, 2026].

**Uploading the favicon**
1. Open Theme settings > Favicon.
2. Click Select image and choose a small version of your logo, or another image that represents the store.
3. Click Done [L0775, 2020-26].
- If the favicon is not replaced, the browser tab shows Shopify's default logo instead of your brand. Setting it takes under a minute and matters even for a demo store [L0775, 2020-26].

**Brand and metadata**
- Shopify Settings > Brand: logo, brand colours, slogan and description are added after the logo and colours are created. Social media pages are linked here later [L1305, 2020-26].
- Add your logo and update the metadata with your store information. This helps the store look distinct from copycat stores [L0920, 2018].

**one source theme settings**
- Theme settings > General Settings contain Logo, Colours, Typography, Button Styling, Navigation Buttons, Brand information, Search behaviour, Animations and Cart Drawer options. Logo images are chosen with the Select from library button [L1188, 2026].

### Colour palettes

**Shopify colour fields**
- Theme settings > Colors contains: Solid button label, Accent 1, Accent 2, Secondary text, Outline button, Background 1, Background 2 and Price for you save. Click a swatch and type a six-digit hex code [L0775, 2020-26].
- The one source example set includes Text and Background 1 and 2 as well as the fields above [L1331, 2025-26].
- Example A: Solid button label white; Accent 1 brand pink; Accent 2 brand teal; Secondary text black; Outline button brand blue; Background 1 solid white; Background 2 light grey [L0775, 2020-26].
- Example B: Solid button label #FFFFFF; Accent 1 #6D388B, used for solid buttons; near-black #121212 as the dark contrast colour [L1331, 2025-26].
- Keep the theme's default dark and light colours in their roles. Replace only their values with brand colours, so the store stays consistent [L1331, 2025-26].
- Changes show in the homepage preview as soon as you click Save. Scroll through the preview after each change to check buttons, backgrounds and text [L0775, 2020-26].

**How many colours**
- Use a solid palette of 2-4 brand colours for a professional, trustworthy look [L0101, undated].
- Avoid too many colours. Pick a few and reuse them across buttons, menu links, borders and banners, rather than a unique colour for each element [L0775, 2020-26].
- Keep one accent colour for buttons. If you use a gradient, reuse the same accent rather than pasting new colours each time [L1331, 2025-26].
- Gradient options exist for accent colours, but a simple store can leave them off and use solid colours only. Leaving Accent 2 at no colour is valid when no second accent is needed [L0775, 2020-26].

**Choosing colours**
1. Search Google Images for "colour palette" [L0355, 2020-26].
2. Pick a palette whose colours already fit together [L0355, 2020-26].
3. Copy the colour codes from that palette [L0355, 2020-26].
4. Use those codes as the website colours, so the whole design matches [L0355, 2020-26].
- Match colours to the audience. For an older audience, minimal design with white and grey backgrounds and black text usually works better than bright colours [L0656, undated].
- A simple, clean store uses a header announcement bar and a limited set of recurring colours. The example store used green, white and grey consistently [L0657, undated].
- Use the store's colour scheme in AI prompts for section graphics if the section should match the site [L1075, 2025+].

**Problems**
- A near-black page background makes black product photos disappear into the page. Use a background colour that contrasts with the product images on any page showing dark products [L1225, 2025].
- Footer colours are set in Theme settings > Colors, scrolled to the bottom. The Footer group contains: Background, Headings, Text, Text link, Text link hover, Menu list link, Menu list link hover, Additional menu link, Additional menu link hover and Copyright text. Social icon style is set in the same section, with the options Light on dark or Dark on light. Adjust the copyright text colour so it matches the rest of the footer [L0681, 2021-22].

**Brand redesign sequence**
1. Upload the new logo to replace the old one.
2. Open Theme Settings > Colors and update all colour codes with hex codes from the brand guidelines.
3. Open Theme Settings > Typography and change the heading and body fonts to your paired fonts.
4. Rewrite the website copy in brand voice: screenshot each section, paste it into ChatGPT, rewrite it in brand voice, and copy it back to Shopify.
5. Preview all changes and publish [L0317, 2025-26].

### Typography

**Where to set fonts**
- Theme settings > Typography sets the font for all text on the store by default. Click Change, search Shopify's font library, select a font and click Select [L0775, 2020-26].
- Shopify path: Theme Settings > Customize theme > Typography [L0317, 2025-26].
- For each page type (homepage, collection page, product page), open the theme settings and choose the page type. Change fonts and styles page by page from the dropdown [L1111, 2020].

**Font choice and speed**
- System fonts, such as Helvetica, New York, system_ui and SF Mono, are pre-installed and load fast. Downloaded fonts, such as Abel, Abril Fatface, Acme, Alegreya, Poppins and Playfair, load more slowly because visitors must download them. Prioritise system fonts for faster page load [L0317, 2025-26].
- The Shopify font list shows Sans-serif, Serif and Mono fonts, which load faster, and "Other" fonts, which are downloaded to the visitor's computer and can slow load times. Prefer the faster fonts [L1371, 2021-22].
- Adding too many fonts and colours quickly makes a store look messy [L0775, 2020-26].

**Pairing**
- Set the body font to Montserrat or a similar clean, readable sans-serif for accessibility. Choose a distinct display font for the heading font, to create visual hierarchy and brand distinction [L0101, undated].
- Typography includes a Font size scale, which enlarges or reduces all text proportionally. It also includes Body font with weight options such as regular, italic, medium and medium italic. A 110% scale and medium weight are example values that gave bolder, more readable body text [L0775, 2020-26].
- Heading font size is a percentage. It defaults to 130% in the Manhattan theme. Setting it to 100% makes product titles smaller [L0966, 2025].
- A light body font weight can make product descriptions look faint. Take a screenshot before you change the font weight [L0971, 2024].

**Using a brand font**
1. Download the free Deja Vu Serif font (or your brand font) and unzip it [L1331, 2025-26].
2. Upload the TTF file in Shopify admin under Content > Files [L1331, 2025-26].
3. Copy the file link and paste it into the theme's font field, so the store font matches the logo font [L1331, 2025-26].
4. Upload a few options and compare them before choosing [L1331, 2025-26].
- Brand Fetch can report font data wrongly for Shopify sites. Custom fonts often appear as CSS variable names, such as --font-body-family, not real typeface names such as Helvetica or Georgia. Visit the live website or inspect the theme CSS to find the real font. Do not assume the variable name is the typeface [L0318, 2025-26].

### Layout and buttons

- Theme settings > Layout sets the page width. The default is 1200 px and it can be raised to 1600 px. A wider page only shows on larger monitors, so 1200 px is a safe default [L0775, 2020-26].
- Theme settings > Buttons controls border thickness, opacity, corner radius and transparency for all buttons. The same area includes Variant pills (product variant display), Inputs (for example search box size), and Product and collection cards. Default values are fine for a beginner store [L0775, 2020-26].

### Theme image size specifications

| Asset Type | Dimensions | Format | Requirements |
|---|---|---|---|
| Logo | 800px × 300px | PNG | Transparent background |
| Favicon | 64px × 64px | JPG or PNG | Transparent background |
| Mega Menu Icons | 250px × 250px | JPG or PNG | Transparent background |
| Slideshow/Image Banner | 1800px × 400-900px height | JPG |, |
| Product Page Graphic | 1600px × 200-600px height | JPG or PNG | PNG requires transparent background |
| Collection Images (collection page) | 1600px × 400px | JPG |, |
| Collection Images (homepage) | 800px × 800px | JPG |, |
| Blog Images | 1600px × 900px or any 16:9 ratio | JPG |, |
| Pre-Footer | Less than 285px × 285px | JPG or PNG | PNG requires transparent background |

[L0075, undated]

- These specifications are for the Manhattan theme. Confirm the graphic sizes for your specific theme before creating assets [L0098, undated].
- Shopify displays one image per collection on the homepage, in a square format. Wide, banner-style images are poorly cropped in this display [L0098, undated].

### Banners and slideshow images

**Sizes**
- The table gives 1800 × 400-900 px height for slideshow and image banners [L0075, undated].
- For the one source theme, the standard homepage banner is 1800 × 600 px. Banners are full-width graphics used as slideshow images [L0342, 2020-26; L1045, 2020-26].
- A custom banner shape can be made in Canva, for example 1800 × 900 px [L0342, 2020-26; L1045, 2020-26].
- Shopify's slide image field shows a recommended size of 1800 × 1000 px. This differs from the 1600 px hero width in the older PicMonkey procedure below. Compare the theme's hint with the size you prepared, and choose the one that fits your slideshow height before uploading [L1310, 2021-22].
- For a wide hero banner, a 1000 × 500 px result is workable. A 624 × 628 px square cannot fill a full-width banner and should be rejected for that slot, even though it suits a square image area [L1310, 2021-22].

**Text on banners**
- The theme can place text over banner images itself. Banners can be plain photos with no text added in Canva [L0098, undated; L0342, 2020-26; L1045, 2020-26].
- Add text to banners only when a design-level message is wanted [L0342, 2020-26].

**Hero banner procedure (PicMonkey, 2021-22, older)**
1. Search a stock source for an image that reflects the outcome your customer wants [L1310, 2021-22].
2. Check the image dimensions and reject images too small for a full-width banner [L1310, 2021-22].
3. Download the image and open it in PicMonkey [L1310, 2021-22].
4. Use Smart resize to set the width to 1600 px, and reduce the height to between 400 and 600 px [L1310, 2021-22].
5. If one dimension is still too large, crop the side you do not need, keeping the main subject [L1310, 2021-22].
6. Download the edited image [L1310, 2021-22].
7. Compress it in ImageOptim [L1310, 2021-22].
8. Upload it to the Shopify slideshow [L1310, 2021-22].

### Collection images

**Sizes**
- Collection page banner: 1600 × 400 px, JPG [L0075, undated].
- Homepage collection image: 800 × 800 px, JPG [L0075, undated].

**Collection page banners**
- Collection page banners are plain banner-format images with no text. Each collection gets one, uploaded to that collection. They act as atmospheric backgrounds at the top of each collection page [L1045, 2020-26; L0342, 2020-26].
- They can show lifestyle scenes, zoomed-in details, or colour and fabric swatches that match the products [L1045, 2020-26].
- Each collection can have its own image. A more specific one (for example living room couches versus living room chairs) helps buyers recognise the category [L0342, 2020-26].
- Before suppliers are connected, generic lifestyle photos are enough for collection banners. Product-specific images can replace them later, and collection images can be refreshed when new products or suppliers are added [L0342, 2020-26].

**One image for two places**
- A collection's image is shared between the collection page and the homepage. The same collection cannot show different images in each place [L0342, 2020-26; L1045, 2020-26].
- Use either the long collection banners or the square homepage collection images, not both for the same collections [L0342, 2020-26; L1045, 2020-26].
- Expecting one image on the homepage and another on the collection page does not work. Plan one image per collection [L1045, 2020-26].
- Homepage collection images are square. A long banner reused on the homepage is cropped from its centre, so place the main subject in the middle of any image used in both places [L0342, 2020-26; L1045, 2020-26].

### Product page graphics, blog images and pre-footer

**Product page graphic**
- Size: 1600 × 200-600 px height, JPG or PNG. PNG needs a transparent background [L0075, undated].
- The product page graphic appears directly above or below the Add to Cart button. Add, change or remove it depending on the season or whether a sale is running [L1045, 2020-26].

**Blog images**
- Size: 1600 × 900 px, or any 16:9 ratio, JPG [L0075, undated].
- Blog images are optional. Create them in Canva only if your store uses blog posts or blog previews [L0098, undated].
- For featured blog tiles, you can use templates with text overlays instead of plain image backgrounds [L0098, undated].
- Keep the same size across all posts so the blog layout stays consistent. A blog template can carry a title over the image, and each post can use a different background image [L1045, 2020-26].

**Pre-footer**
- Size: less than 285 × 285 px, JPG or PNG. PNG needs a transparent background [L0075, undated].

### Mega menu icons

- The one source theme supports up to five mega menu icons. Each icon is a separate page in one Canva design. Downloading the design produces a separate image file for each page [L0342, 2020-26; L1045, 2020-26].
- Size: 250 × 250 px, JPG or PNG, transparent background [L0075, undated].
- Create them in Canva:
  1. Click the mega menu icons template in Canva [L0342, 2020-26].
  2. Open Elements, add an icon (for example the favicon icon or a wave), make it full size, centre it and set its colour [L0342, 2020-26].
  3. Click Add page and repeat for each additional icon, up to five in total [L0342, 2020-26; L1045, 2020-26].
  4. Click Download. Each page downloads as a separate image file [L0342, 2020-26].


Part 15 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/14-shrine-pro-setup.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/16-product-photo-sourcing-and-editing.md
