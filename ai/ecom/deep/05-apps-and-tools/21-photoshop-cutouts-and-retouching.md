<!-- part of ecom/deep/05-apps-and-tools.md -->
Part 21 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/20-logo-creation.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/22-video-ad-creative-and-content-production-tools.md

### Photoshop Cutouts and Retouching

#### Photoshop cutout workflow

For product photos where Canva's quick removal is not clean enough:

1. Select the product with the selection tool. [L1258, undated]
2. Clean up the selection and remove unwanted areas with brushes. [L1258, undated]
3. Refine the edges with the Shift Edge refinement. [L1258, undated]
4. Smooth the edges so no dark outline or rough border remains. [L1258, undated]

#### Select and Mask

- Heavy Photoshop work with many open files can freeze or slow a laptop. For smooth work, use a more powerful machine, and check that the required Lightroom app is available in the Adobe account before starting. [L1132, undated]
- Select Subject creates a fast automatic selection of the main subject and needs enough RAM to run smoothly. On a weak machine it can lag or stall, so save work often before running it. [L1178, undated]
- The Select and Mask left toolbar includes Quick Selection (add or subtract), the Refine Edge brush for hair and fine edges, and Brush and Lasso tools for manual cleanup. Use the Refine Edge brush mainly on hair or a beard, where simple selection leaves stray pixels. [L1178, undated]
- Object Selection tool (square icon in the left toolbar) selects a whole object in one smart step. Use it to add back an item such as a mirror, or to select a full body. It gives less control than the brush, so use it for rough selections, then refine the edges manually. The brush handles small gaps. [L1132, undated; L1178, undated]
- Polygonal Lasso draws straight-line selections, and the freehand Lasso draws free shapes. Both close gaps where enough pixels surround the area. Both leave a jagged, pixelated edge, so smooth the edge only after all cutout edits are finished. [L1132, undated; L1178, undated]
- In Select and Mask, the red overlay marks the unselected area. Change its color in the top-right panel, which also offers other view modes. A different overlay color makes hair and edge gaps easier to see against a dark or light product. [L1132, undated]
- Brush add and subtract: the brush should show a plus icon by default, which adds to the selection. Holding Shift switches it to minus to remove. [L1132, undated] The lesson's modifier keys conflict, so check the icon before each stroke. In Select and Mask, Alt subtracts and Shift adds. [L1178, undated] If the icon appears flipped, add and remove are reversed. Check the icon before painting to avoid cutting away parts you want to keep. [L1132, undated; L1178, undated]
- Output To setting: choose Selection only to keep the background out without hiding it. Choose Layer Mask to hide the background non-destructively. Use Layer Mask for cutouts that can be re-edited later. [L1178, undated]

#### Brush and retouching

- Brush size and feather shortcut: hold Alt, hold right-click, move left or right to change brush size, and move up or down to change feather. Alt plus mouse wheel zooms in and out. [L1178, undated]
- Spot Healing Brush removes small spots, hairs and blemishes by blending them with the surrounding area. Feather it slightly so the fix blends in. Work with short, sharp clicks instead of dragging, since dragging smooths the area out. [L1178, undated]
- Use the Spot Healing Brush with the same Alt plus right-click drag as the brush. Keep the brush small and use a little feather so the repaired spot blends with its surroundings. [L1132, undated]
- Using Spot Healing with a large brush or on high-contrast edges changes the texture around it too much. Keep the brush small and check each click in areas with strong contrast. [L1178, undated]
- Clone Stamp copies pixels from one area to another. Hold Alt to set the source point, release Alt, then paint over the target area. The copied area keeps its lighting, so it can look too bright or too dark when moved. Watch the light direction. [L1178, undated]
- The Clone Stamp source moves with the cursor, so a long stroke copies the sampled spot repeatedly and creates visible duplicates. Sample a new source area with Alt-click often, and avoid dragging across the same sampled spot for a long distance. Sample from different points, and drag the source from the side where the light falls on the same surface. [L1132, undated; L1178, undated]

#### Adjustments

- Adjustment layers (circle icon at the bottom of the Layers panel) apply changes such as exposure, hue/saturation, black and white, or whites and blacks above the photo without altering its pixels. Dragging the adjustment layer to the trash removes the change and restores the original image. [L1132, undated]
- In Hue/Saturation, hue sets the color itself, and saturation sets how strong that color is. To reduce a color cast on a garment against a white background, lower saturation so the color moves toward grey or black instead of changing the hue. [L1132, undated]
- Lowering Saturation on a tinted area, such as a blue cast on a white T-shirt, neutralizes it. Used as an adjustment layer, the original photo stays unchanged. [L1132, undated; L1178, undated]

#### Lightroom and Photoshop round-trip

- Edit the image in Photoshop and save with Control+S so the edited version syncs back into Lightroom. Keep the originals in the cloud, so only picked images are downloaded temporarily to the laptop. [L1132, undated]
- After editing in Photoshop, save with Ctrl+S, close the file, and the edited version returns to Lightroom. Quick crops and basic adjustments are faster in Lightroom. [L1178, undated]
- Export a finished Photoshop image as PNG: File > Export > Export As, choose PNG, and save. [L1132, undated]
- Without Lightroom, export with File > Export > Export As > PNG. This keeps the cutout with transparency for use in a store or design file. [L1178, undated]
- Lightroom photos stored in the cloud download only temporarily when you open them. A laptop with limited storage can still work through a large shoot. Open only the shots you are editing. Lightroom must be installed and linked to the Adobe account. [L1178, undated]
- Lightroom Crop tool: grab a corner and rotate or move the image within the frame to straighten a skewed photo. Use this to level the product before applying a 1:1 square crop. [L1199, undated]
- Round-trip from Lightroom to Photoshop and back for a product image:
  1. Select the photo in Lightroom and send it to Photoshop to cut out the product. [L1199, undated]
  2. Make the cut-out and background in Photoshop. [L1199, undated]
  3. Save the file. [L1199, undated]
  4. Close the Photoshop document, so the edited version updates in Lightroom. [L1199, undated]
  5. Apply the final 1:1 square crop and light corrections in Lightroom. [L1199, undated]
- Create a square product canvas in Photoshop:
  1. Select the Artboard tool and draw a square artboard. [L1199, undated]
  2. Set the artboard size to 1080 by 1080 pixels, the standard for product images. [L1199, undated]
  3. Move the cut-out product into the center of the artboard and draw the artboard around it. [L1199, undated]
  4. Save so the file updates in Lightroom. [L1199, undated]

### Image Resizing, Compression and Export

- Pixlr is a free web-based image editor that crops images to exact sizes. It is a free alternative to the more expensive Photoshop and is useful for resizing images before upload. **Older (2019).** [L0960, 2019]
- PicMonkey is an online image editor for resizing and cropping. Its resize function is called Smart resize. **Older (2021-22).** [L1310, 2021-22]
- In PicMonkey, open Edits > Canvas Edits > Smart resize. Enter Width and Height, use the percentage option if needed, then click Apply, or Cancel to discard the change. **Older (2021-22).** [L1310, 2021-22]
- ImageOptim is a desktop app for Mac that compresses images. Drag the image into its window, and it reduces file size without a noticeable loss in quality. **Older (2021-22).** [L1310, 2021-22]
- ImageOptim's default lossy minification is JPEG 84%, PNG 80% and GIF 80%. In the tested case, a JPEG of nearly 300 KB dropped to 102 KB, a saving of about 65 percent. **Older (2021-22).** [L1310, 2021-22]
- ImageOptim is an offsite tool for compressing images before upload. It is more reliable than Shopify apps that compress images inside the store. **Older (2021-22).** [L1522, 2021-22]
- Image processing on a Shopify store can be handled by an outsourced Photoshop automation rather than an app. On-site image apps can slow the store and reduce image quality. **Older (2021-22).** [L1456, 2021-22]
- Compress exported PNG or SVG logo files after the design is final. [L0952, undated]

### Static Ads and Banners

- Snappa is a browser-based graphic editor for making static ad images quickly. Text and image elements can be moved and edited individually. Canva, Pixlr and similar simple online editors can do the same job. **Older (2021-22).** [L1169, 2021-22]
- Snappa text settings used for an ad: font Open Sans, text color #454545, line height 1.2. Shadow options include Offset, Blur, Color and Text Opacity, and Letter Spacing is also available. **Older (2021-22).** [L1169, 2021-22]
- Canva is free to use and useful for social media graphics. Adobe Photoshop is a more advanced option for image editing. [L1283, 2023]
- Canva is used to design authorized retailer badges and shipping carrier logo collages. The free version is enough. [L1050, 2020-26]
- Canva's free version is enough to create supplier authorized retailer badges and simple logos. Place the supplier logo with the words "authorized retailer" underneath. **Older (2021).** [L0962, 2021]

### AI Image Generators

#### ChatGPT and Nano Banana

- ChatGPT's built-in image generation renders readable real text inside images. Earlier versions could not do this and produced garbled, captcha-like letters. The lesson states this feature is available on every ChatGPT account. [L1075, 2025+]
- Nano Banana or ChatGPT image tools can generate or modify logo and brand images for the store header and footer. Check that the output is usable as a logo file with a transparent background before uploading. [L1188, 2026]
- GPT image model version 2.0 (paid tier) is used for high-quality image changes, such as book covers and polished product visuals. Nano Banana is used for native static ads. [L1195, 2026]

#### Midjourney and DALL-E

- Midjourney creates unique AI images from text prompts. It is used for ebook visuals so images are not reused from other sources. It costs about 20 dollars per month. [L1131, 2018+]
- Use this Midjourney prompt for a food image for dogs:

```
Create an image of a finished [DISH] made with [INGREDIENTS] for dogs, served in a bowl on a wooden table, bright natural light, appetising, photo style, square format --ar 1:1
```
[L1131, 2018+]

- DALL-E can create variations of an existing image. It can also edit product images and generate new images for a print-on-demand (POD) store. [L1416, 2023+]

#### Product and lifestyle imagery

- Mokker.ai is an AI image tool used to create or edit product and lifestyle images for stores and ads. It is listed as the recommended AI option for image work. (The source also writes it as "Mocker.ai".) [L1093, 2023]
- Mokker's free plan gives 40 free AI-generated product images. Upload a product photo, pick a background, and the tool places the product on it, without a credit card. The images are for social media and email, not for product listing ads. (Written "Mocker.ai" in the source.) [L1094, 2023]
- Canva's text-to-image app uses AI to generate product images that do not exist, which is useful for demo products. Output quality varies, so review each image before use. [L0970, 2023]
- Higgsfield (higgsfield.ai) and ChatGPT Image 2 generate lifestyle, hero, product and icon imagery for emails. Image generation is an optional layer in the stack. [L1361, 2025-26]
- Brand imagery is needed for emails to look distinctive. Emails built only from generic blocks without real lifestyle or brand images look bland. Gather existing lifestyle imagery before building templates, and generate more with image tools only if the brand lacks it. [L1361, 2025-26]

### Mockups and Packaging

- Canva can create product packaging mockups and lifestyle product images for a store, including placing a logo on the packaging. [L1381, 2022]
- Pagdora (pagdora.com) customizes packaging: post your logo, then download the mockups to upload into Shopify. [L1381, 2022]
- Photoshop was used to create initial drawings of designs before the tech pack. Initial mock-ups can be made by yourself. More detailed drawings and graphics are better done by a freelance graphic designer. [L1438, 2023+]

#### Further details

- Canva has a free version that can be used to design simple graphics such as authorized retailer badges. [L0801, 2021]

- Create a mockup of this packaging artwork printed on a 10-by-13-inch poly mailer. [L0884, 2025-26]


Part 21 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/20-logo-creation.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/22-video-ad-creative-and-content-production-tools.md
