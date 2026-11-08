<!-- part of ecom/deep/05-apps-and-tools.md -->
Part 19 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/18-design-branding-and-image-tools.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/20-logo-creation.md

### Product image editing and backgrounds

Canva:

- To set a photo as a background, drag it onto the page, right-click it (or two-finger click on a trackpad) and choose Set image as background. Then move the image so the important part is visible [L0342, 2020-26].
- Canva's undo reverts the last change, which allows experimenting with fonts, colours and sizes without losing work [L0342, 2020-26].
- Canva templates are ready-made layouts searchable by keyword, for example blog. Use Use Template or Add as new page. Templates speed up designs such as blog headers and sale banners [L0342, 2020-26].
- Canva one source templates: open the provided link, which opens a template already sized for the Manhattan theme, then click Use Template to start editing [L0098, undated].
- A free online background remover deletes a white background so the PNG becomes transparent. A transparent PNG is the cleanest option for logos and icons on coloured backgrounds [L0342, 2020-26].

Photoshop:

- Generative Fill can add or change elements of an image using AI, and it can be used alongside AI background tools [L0353, 2023].
- Generative Fill creates or replaces content from a selection and a text prompt. At the time of recording it was at an early stage with uneven results. Expect several iterations before accepting one [L0754, undated].
- Adding realistic light falloff to a composited subject:
  1. Create an Exposure adjustment layer above the subject and lower the exposure so the subject matches the darker background.
  2. Clip the exposure layer to the subject so it affects only that subject.
  3. Press Cmd+I or Ctrl+I to invert its mask, which fills the mask black and hides the effect.
  4. Set a soft brush with low opacity and paint white over the areas that should be darker, such as parts not lit by the background light.
  5. Add a solid colour or Hue/Saturation layer clipped to the subject to match the colour of the background light.
  6. Set the layer to a blending mode such as Overlay or Color Burn, then use the Blend If sliders to blend the colour into the subject. Hold Alt or Option to split the sliders for a smoother blend. [L0754, undated]
- Blend If sliders (in Blending Options) blend a layer based on the brightness of the layer below. Holding Alt or Option while dragging splits the slider for a smooth transition instead of a hard edge [L0754, undated].
- Clipping mask: hold Alt or Option and click the line between two layers to apply an adjustment layer only to the layer beneath it. Without clipping, an adjustment layer affects the whole artboard [L0754, undated].
- Adjustment layers change colour, brightness, contrast, levels, curves, exposure, hue and saturation, photo filters and colour balance without changing the underlying pixels. Each adjustment can be turned off or edited later, so it counts as a non-destructive edit [L0754, undated].
- Scaling a rasterised pixel image makes it pixelated, while a smart object keeps its quality when resized. Convert the layer to a smart object before scaling. A smart object cannot be painted on directly [L0754, undated].
- Right-click a layer and choose Convert to Smart Object. To edit its contents, click the smart object icon at the bottom right of the layer thumbnail, change the content and save. The change updates everywhere the smart object is used [L0754, undated].

### Resizing and compressing for the store

- Canva free has no resize tool. For a different banner size: Canva Home > Create a design > Custom size, enter the dimensions, and recreate the banner [L0098, undated].
- Canva paid resizes existing designs with its built-in resize tool [L0098, undated; L0342, 2020-26].
- Bulk Resize is a browser tool with no sign-up and batch processing. It resizes and compresses image files, converts to PNG or JPEG, and can reduce size from about 2.3 MB to about 54 KB [L0418, 2025-26].
- Hero background image: resize to about 1,200 px wide as JPEG with reduced quality (about 40 to 50 KB) for faster load speed. Set the main page size to about 700 px on desktop [L0418, 2025-26].
- Compress image files before uploading to reduce page-load impact. ImageOptim is a free desktop app for Mac [L0300, 2021-22; older].
- Windows has built-in image compression. Setup and usage instructions are in Microsoft's official support documentation [L0300, 2021-22; older].
- Photoshop: to scale safely, convert to a smart object first. Adjust the Free Transform scale with Ctrl+T or Cmd+T, hold Shift to lock the ratio, and right-click the transform to choose Warp [L0754, undated].

### Batch image tools (Gemini-based)

Set up and run first:

- Keep the HTML tool files and the key private. Enter the key at run time, not in a shared file [L0794, 2026].
- Download the tool files completely and open the HTML locally in a browser [L0794, 2026].
- Browser folder linking (Chrome or Edge only):
  - Click Link download folder, pick the target folder in the Select folder dialog, then click Allow when the browser asks Allow this site to edit files? [L0794, 2026]
  - Without a folder picker, outputs download automatically as JPG files. When a folder is linked, every output is written straight into it, which keeps batch files organised [L0794, 2026].

Tools:

- Brand Remap Studio is a local HTML tool with three inputs: 1 to 3 brand reference images, up to 5 competitor layout images and an optional book cover. It returns one rebranded image per competitor layout that keeps the layout and swaps in your colours, logo and typography [L0794, 2026].
- Book Scene Studio creates up to 50 scene photos of one book in a single batch, keeping the same cover on every shot. Upload 1 to 3 angles of the cover, enter one scene per line, set the aspect ratio and run the batch. A Shuffle button is available for the scene list [L0794, 2026].
- Batch Image Converter (A4) processes up to 50 of your own images in one batch. One reference image teaches the page layout and style. A format prompt is sent with every frame so all outputs look like one set [L0794, 2026].
- Image Proofer uses the vision model gemini-2.5-flash to read the text in an image, correct spelling and regenerate the image with the corrected text. It accepts up to 100 PNG files for ad creatives, advertorials, labels and social posts. It has an AUTO or ENGLISH language setting and outputs corrected JPGs [L0794, 2026].

Procedures:

- Brand Remap Studio run:
  1. Open the HTML file locally and paste your Gemini API key.
  2. Upload 1 to 3 brand reference images into box 1.
  3. Upload up to 5 competitor layout images into box 2.
  4. Optionally upload one book cover into box 3.
  5. Choose the aspect ratio: match competitor, 4:5, 1:1, 9:16 or 16:9.
  6. Set Concurrent to 2 and Pause (sec) to 0 as a start.
  7. Keep Relax content filters checked.
  8. Optionally click Link download folder.
  9. Click Remap all and watch the total, done, ok and failed counters.
  10. Read every output before using it. [L0794, 2026]
- Brand Remap Studio names outputs remap-01.jpg, remap-02.jpg and so on, in the order the competitor layouts were uploaded. If one layout fails, no file is written for that number, so rerun only that layout [L0794, 2026].
- Image Proofer run:
  1. Open the HTML file locally and paste your Gemini API key.
  2. Upload up to 100 PNG images (ad creatives, advertorials, labels, social posts).
  3. Set the language to AUTO or ENGLISH.
  4. Keep the vision model at gemini-2.5-flash.
  5. Set the JPG quality and the pause between batches, and keep concurrency low.
  6. Click Proof and regenerate, then check the corrected JPGs before using them. [L0794, 2026]
- Batch Image Converter run:
  1. Open the HTML file locally and paste your Gemini API key.
  2. Select the A4 portrait page format (210 x 297 mm).
  3. Upload one reference image that shows the wanted layout and style.
  4. Write the format prompt once. It is sent before every frame.
  5. Upload your own batch of up to 50 images.
  6. Optionally link a download folder.
  7. Click Convert all images and wait.
  8. Check every output and rerun any missing frames.
  9. Run the finished pages through Image Proofer, then assemble them into one PDF. [L0794, 2026]

Rate limits and output:

- Concurrency of 2 is the safest setting for the batch tools. Failed requests are retried automatically up to 5 times. If image generation returns 429 rate-limit errors, lower the concurrency or raise the pause in seconds [L0794, 2026].
- Repeated 429 errors mean the batch is sending requests too fast. Running at full concurrency wastes time and retries. Lower the concurrent count or add a pause between requests, then restart only the failed items [L0794, 2026].
- Image Proofer splits uploads into batches. Concurrent sets how many images run at once inside one batch. Pause sets the wait between batches. On 429 errors, lower Concurrent or raise the pause, then rerun only the failed images [L0794, 2026].
- Outputs are saved as JPEG at quality 0.92, with a white background behind any transparent areas. Batch limits: Remap up to 5 competitor images, Converter up to 50, Proofer up to 100 [L0794, 2026].

### Packaging and mockups

Packaging workflow:

1. Choose the mailer size that fits the product (here a 10 x 13 inch poly mailer).
2. Collect inspiration images of packaging from other brands.
3. Ask a chat AI for packaging text options based on the brand voice, attaching the inspiration images and the brand cover and palette.
4. Select one front line and one side line.
5. Ask a chat AI for a rough mockup using the same references, to get visual direction.
6. In Kittl, create a new artboard at the mailer size in pixels (3000 x 3900 px for 10 x 13 inch).
7. Set the background to the brand colour, for example the main purple.
8. Add the front text in the brand serif font and rotate it if needed.
9. Add supporting elements such as a circular badge, then copy it to the back.
10. Flip the copied element horizontally for the back so the front and back read like a book cover.
11. Optionally add social media app icons from the Illustration panel.
12. Use Smart Board to generate a final mockup on the mailer.
13. Keep the Kittl template so changes can be made later. [L0884, 2025-26]

Kittl packaging tool:

- Kittl is an online design tool used to build packaging artboards, add text and shapes, insert illustrations and generate mockups with its AI features. It also stores a brand guidelines template with project colours [L0884, 2025-26].
- In Kittl, the artboard size is set in pixels in the side panel, not inches. For a 10 x 13 inch poly mailer, set the artboard to 3000 x 3900 px [L0884, 2025-26].
- Formula: Artboard pixels = inches x pixels per inch. For a 10 x 13 inch mailer at 300 pixels per inch this gives 3000 x 3900 px, which matches the artboard size in the lesson's final mockup. Search to convert other sizes if unsure [L0884, 2025-26].
- The Illustration section in the sidebar holds icons, including social media app icons for the packaging design [L0884, 2025-26].
- The artboard side panel shows Front and Back views. The Tools section includes Add Mockup and Add Smartboard. Use Front and Back to build both sides of one mailer in a single project [L0884, 2025-26].
- Generating a Smart Board mockup:
  1. Select the finished artboard, then click the small arrow beside it.
  2. Choose Smart Board, which opens an AI prompt box.
  3. Enter the mockup request, using the prompt below.
  4. Click Generate and let the mockup finish processing.

  The result shows the design as a customer would receive it, because the artboard dimensions match the mailer. [L0884, 2025-26]

```
Create a mockup of this packaging artwork printed on a 10-by-13-inch poly mailer.
```

- While a Smart Board mockup generates, the panel shows a running timer and a percentage. Wait until generation finishes before judging the mockup against the artboard design [L0884, 2025-26].
- Use an AI mockup for inspiration and direction, not as the final design. Build the actual packaging in a design tool at the exact print dimensions [L0884, 2025-26].
- Packaging design does not require professional graphic design skills. Keep the layout simple and use AI mockups plus inspiration images to guide the result [L0884, 2025-26].

Mockup services and box design:

- Placeit is an online mockup tool for product and packaging designs. A monthly subscription gives unlimited downloads, and it provides template dimensions for packaging mockups [L0577, 2023].
- Canva creates custom-size graphics for product images and packaging templates. Each side of a box (top, front, side) needs a separate design because the dimensions differ [L0577, 2023].

### Canva technique reference

Selecting, moving and sizing:

- Hold Shift while clicking elements to select several at once, or drag a box across them to select all within it and move them as a group. Pressing Shift again on a selected object removes it from the selection [L0754, undated].
- Drag a corner handle with Shift held to keep the aspect ratio locked while resizing. Corner handles resize both axes; side handles resize one axis. After the ratio is set, release Shift and drag a handle to reshape [L0754, undated].
- Hold Alt on Windows or Option on Mac while dragging an element or handle to work from its centre point instead of an edge. The same key duplicates an element when dragged, which is faster than copy and paste for repeated items [L0754, undated].
- Hold Shift while dragging to lock movement to one axis, so an element does not move up or down while you move it left or right. Zoom with Ctrl (Windows) or Cmd (Mac) while scrolling [L0754, undated].

Alignment and grouping:

- Pink snap lines appear while dragging an element to align it to the left, centre or right edge of another element [L0754, undated].
- Align and space objects:
  1. Hold Shift and click the objects you want to align, or drag a box around them.
  2. Open the Position menu in the top toolbar.
  3. Choose the alignment you need (left, centre, right, top, middle or bottom).
  4. Choose Space evenly horizontally or vertically to make the gaps equal.
  5. If the spacing still looks uneven, group the objects first and then apply Space evenly. [L0754, undated]
- Press Ctrl+G (Windows) or Cmd+G (Mac) to group selected objects so they move as one unit. Double-click an object inside a group to isolate it. Ungroup with Ctrl+Shift+G or Cmd+Shift+G [L0754, undated].

Layers:

- Right-click an element, open Layer, and choose Bring Forward or Send Backward. Ctrl+[ or Cmd+[ moves an element one layer back; Ctrl+] or Cmd+] moves it one layer forward. Adding Alt sends it to the very back or very front [L0754, undated].
- Every element sits on its own layer, and stacking order decides what is on top. Text placed first sits under shapes placed later, so move layers deliberately when a design looks wrong [L0754, undated].

Effects and editing:

- Shadows and gradients: search Elements for "shadow gradient" or "shadow" to get many ready-made options in dark and light, long and short versions. Place them behind text or a product to add depth [L0341, 2023; L0343, 2023].
- Speech bubbles: Canva has fewer layout and text-bubble options than Photoshop, so speech-bubble testimonials are harder to build in it. Plan the layout around that limit, build the bubble parts elsewhere, or keep the Canva version to plain quote cards [L0341, 2023; L0343, 2023].
- Canva Edit photo's Shadow option adds a shadow to an element [L0754, undated].

### Photoshop technique reference

Shapes and transforms:

- Free Transform: Ctrl+T (Windows) or Cmd+T (Mac). Hold Shift to lock the ratio while scaling. Right-click the transform to choose Warp to bend or distort the shape [L0754, undated].
- Press V to return to the Selection tool. Hold Alt or Option while dragging to duplicate an object. Hold Shift while drawing a shape to keep it square or circular. Alt or Option while dragging a shape from its centre draws it outward from the centre point [L0754, undated].
- To make a shape blurred, such as a soft shadow, rasterise or convert it to a smart object, then choose Filter > Blur > Gaussian Blur. Lower the Fill opacity in the layer panel to make the shadow subtler [L0754, undated].

Layers and blending:

- Double-click a layer to open Blending Options (Layer Properties). Darken removes whites from the layer above, Lighten removes darks, and Overlay merges the two layers [L0754, undated].
- Drop shadow: add it from the FX panel at the bottom of the Layers panel. Settings include angle, opacity, distance, spread and size, which control direction, strength and softness [L0754, undated].

Repair:

- Spot Healing Brush removes blemishes, dust and small unwanted objects with one click or brush stroke. Clone Stamp copies pixels from a sampled area: hold Alt or Option, click the source, then paint over the spot [L0754, undated].

### Illustrator technique reference

- Press V for the Selection tool, which moves whole objects. Press A for the Direct Selection tool, which moves single anchor points or line segments. Use the Pen tool with the anchor point tools to add, remove or convert points on a path [L0754, undated].
- Brush tool: Tool Options has a slider between Accuracy and Smoothness. Move it toward Smoothness for smoother, less exact strokes, and toward Accuracy for strokes that follow the mouse path closely [L0754, undated].
- Clipping mask: place a shape and an image together, press Ctrl+7 (Windows) or Cmd+7 (Mac), which hides everything outside the shape. Double-click the masked image to move or resize the image inside the shape [L0754, undated].
- Polygon tool creates shapes with a chosen number of sides. Press the Up or Down arrow key while dragging to add or remove sides [L0754, undated].
- Text tool: drag to create a text box of a set size, then type or use Lorem Ipsum placeholder text for mockups. Use the Properties panel to set size, line spacing and alignment [L0754, undated].

### Adobe workflow and animation

- Illustrator, Photoshop and Premiere Pro work together. A file placed in one Adobe app can be opened in its original program, edited and saved, and the change updates in the other app. This makes it practical to build a graphic in Illustrator and use it in a video edit [L0754, undated].
- Animation in Photoshop and Illustrator requires a separate program, After Effects. Canva offers simple built-in animations instead, such as rise, pan, fade and pop effects [L0754, undated].
- Practical workflow: start with Canva for speed, switch to Photoshop for photos and composites that need control, and use Illustrator for custom graphics. Keep originals editable with masks, adjustment layers and smart objects so changes can be made later [L0754, undated].

### Social and email assets

- Free stock photos for signup pop-ups, Klaviyo email headers and Tidio chat avatars can be found on unsplash.com. Search a keyword, such as gift for a discount pop-up or man or woman for an avatar, then download and upload into the app [L0477, undated].
- Canva's Bulk Create takes a spreadsheet and produces many versions of one design, one per row. It is useful for social quotes or product cards in volume [L0754, undated].
- Canva is used for simple social posts, product graphics and quick exports [L0754, undated].
- Canva free is used for demo banners and basic assets. For blog headers and sale banners, use Templates [L0342, 2020-26].

### Choosing Between Your Own Work and an Outsourced Designer

- Canva is free and suits a store owner who has an eye for design, for making a logo and website banners. **Older (2019).** [L1068, 2019]
- Designing logos and banners yourself without design skill can cost many hours without a good result. Outsourcing is usually the better choice for a beginner. **Older (2019).** [L1068, 2019]
- Converting existing badges and logos to one common style is a standardization job on Fiverr that costs around $5. No design skills are needed to order it. [L0921, 2022]
- For an original logo or banner, do not choose a $5 project. Choose a designer in the $20-plus range and check their portfolio to confirm the style matches. Sources disagree on price: $5 applies to standardizing existing assets [L0921, 2022], while $20 and up applies to original design [L1068, 2019]. **Older (2019)** for [L1068, 2019]. [L0921, 2022; L1068, 2019]
- Avoid people who do not know what they are doing and people who overcharge. Both are common risks. **Older (2019).** [L1068, 2019]
- Freelance platforms such as Fiverr or Upwork can commission custom product images that are not copied from competitors. [L1346, 2020-26]
- 99designs is a library of logo designs you can browse for inspiration. You may recreate a style you like, but a fully original mark is preferred. [L1044, undated]
- Initial mock-ups can be made by yourself. More detailed drawings and graphics are better made by a freelance graphic designer. [L1438, 2023+]

### Hiring a Logo Designer on Fiverr

Use this when time is limited:

1. Find a logo designer on Fiverr. [L1044, undated]
2. Share the brand look and feel. [L1044, undated]
3. Share the tone of voice. [L1044, undated]
4. Share the brand values. [L1044, undated]
5. Give examples of the design styles you want. [L1044, undated]
6. Let the designer create the logo. [L1044, undated]

### Canva: Account, Plans and Basics

- A free Canva account is enough to create a basic Shopify store's logo, favicon, banners, mega menu icons, collection images, blog images, USP icons and product page graphics. Designs stay saved and can be re-downloaded later from All designs. [L1045, 2020-26]
- Canva is also used to make badges, logos and product visuals consistent yourself, without a designer. It also changes backgrounds and adapts product images for social media. [L0921, 2022]
- Paid features in the free plan are marked with a small crown icon. Canva offers a 30-day free trial of its Pro plan. [L1045, 2020-26]
- Canva Pro costs roughly 10 USD per month. It adds transparent background export, resizing of designs and paid stock photos. Pro is optional, and the whole asset set can be made on the free plan. [L1045, 2020-26]
- Canva Premium, the paid tier, is treated as a worthwhile investment for a dropshipping business because it covers much of the visual work. [L0953, 2026]
- Items with a crown icon are paid and cannot be used on the free plan. In the Elements panel, Graphics holds icons and simple shapes, and Photos holds stock images that can be set as backgrounds. [L1045, 2020-26]
- To find a logo template, open Designs in the top-left area and type "Logo" into the "Search Logo templates" field. [L0953, 2026]
- Typing "logo" into the search returns many logo templates. You can edit them with custom text, icons and fonts. Take a color from an icon in the design to build the palette around it. [L1044, undated]
- Canva's Brand Kit template outlines the logo, the chosen typeface and the color palette in one place. It also has a section for testing color combinations in different contrasts. [L1044, undated]


Part 19 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/18-design-branding-and-image-tools.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/20-logo-creation.md
