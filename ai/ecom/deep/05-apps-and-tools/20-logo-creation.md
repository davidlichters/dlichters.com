<!-- part of ecom/deep/05-apps-and-tools.md -->
Part 20 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/19-product-image-editing-and-backgrounds.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/21-photoshop-cutouts-and-retouching.md

### Logo Creation

#### Quick logo in Canva

- Canva's Elements library includes ready-made logo assets. Search the niche plus "logo", for example "pet logo" or "gardening logo", to get usable icons and shapes. Combine and recolor them. [L0952, undated]
- A white element built into a Canva logo, such as a white circle behind a shape, prevents a transparent PNG export from working on a dark background. Each background then needs its own recolored export. Plan separate light and dark versions from the start. [L0952, undated]

#### Logo with ChatGPT

- Use the ChatGPT thinking model to generate wordmarks, favicons and a color palette in one chat. This replaces separate logo software. It is faster than building a logo by hand in Canva, and keeping subscriptions low matters at this stage. [L0954, 2025-26]
- Use this prompt to generate one concept from the list as a logo icon:

```
Generate concept [NUMBER] from the list as a logo icon, keeping the shape and mood of the concept described in the list.
```
[L1047, 2025-26]

- In ChatGPT, use Edit on an earlier message, change the request and send it. This creates a new branch from that point, so you can try a different version without losing the original branch. [L1047, 2025-26]
- Asking ChatGPT to regenerate a new image at the end of a long thread can make it confused and return an unrelated image. Go back to an earlier message and branch from there to keep results on track. [L1047, 2025-26]
- The ChatGPT 5.1 interface is shown in the lesson. ChatGPT can generate logo images from text prompts, recreate a previous image on request, and branch a conversation from an earlier message. [L1047, 2025-26]

#### Logo from scratch (for owners with design skills)

- Adobe Illustrator or Photoshop can be used to design a logo from scratch. [L1044, undated]
- Adobe Color builds palettes from analogous schemes (similar hues) and monochromatic schemes (one hue, lightened or darkened). [L1044, undated]
- Test colors in a typical website layout to check contrast and harmony before you finalize. [L1044, undated]

#### Logo export in Canva

- A logo can be exported with "Download selection" so that only the logo is exported, without the extra blank space of the page. This avoids pushing a website header out of place. [L0952, undated]
- Export the logo as follows:
  1. Select the logo elements. [L0952, undated]
  2. Use Download selection (right-click, or the download option for the selection). [L0952, undated]
  3. Choose PNG or SVG. [L0952, undated]
  4. Enable a transparent background so the logo works on both light and dark sites. [L0952, undated]
- Compressing a logo file is optional but good practice for website image sizing. Compress the exported PNG or SVG after the design is final, not while it is still being edited. [L0952, undated]

#### Logo cleanup for transparency

- A free online background remover can strip the white background from a downloaded PNG. This gives a transparent logo without paying for Canva Pro. Search for "Google background image remover" or a similar free tool, upload the PNG and download the result as PNG. [L1045, 2020-26]
- After downloading the transparent PNG from ChatGPT, place it on a colored background or a photo to check that no white box remains. If the background is still there, request the transparent version again. [L1047, 2025-26]
- Use this prompt to get a transparent version of the same logo:

```
Generate this same logo again as a transparent PNG with no background. Keep the design, shape, colors and proportions exactly as they are.
```
[L1047, 2025-26]

### Vectorizing Logos

- A vector file scales to any size without losing quality. SVG is the common vector file format used when exporting a logo as a vector. This is the format the vector step aims to produce. [L1047, 2025-26]
- Kittl is a free design program with a free AI Vectorizer that converts a PNG into a vector file. Search for "Kittl vector generator" and open the AI Vectorizer result on the Kittl site. [L1047, 2025-26]
- Vectorize a logo in Kittl:
  1. Search for "Kittl vector generator" and open the AI Vectorizer result. [L1047, 2025-26]
  2. Upload the transparent PNG by drag and drop. The upload is free. [L1047, 2025-26]
  3. Log in to Kittl and open a project, so you can make variations there. [L1047, 2025-26]
  4. Drag and drop the PNG logo into the project. [L1047, 2025-26]
  5. Click Vectorize. The Colors panel shows the number of colors, and a single-color image converts in a moment. [L1047, 2025-26]
  6. Scale the vector up to check that the edges remain sharp. [L1047, 2025-26]
  7. Repeat the same process for the wordmark logo. [L1047, 2025-26]
- In Kittl, hold Option (Mac) or Alt (Windows) and drag an artboard to duplicate it. Use duplicated artboards as the base for a grid of variations, and delete any copy you do not need. [L1047, 2025-26]
- Select the icon and the text of a lockup, right-click and choose Group so they move and resize together. [L1047, 2025-26]
- Export logo files at 3x size, which the lesson describes as slightly bigger than normal. A larger export gives more pixels for sharper use across print and digital formats. [L1047, 2025-26]
- FigJam is a collaborative whiteboard where you can collect screenshots of finished logo variations on one board for review and reference. [L1047, 2025-26]
- Adobe Illustrator's Image Trace command, found in the Quick Actions panel for a placed image, converts a raster image into vector paths. The same panel offers Embed, Mask and Edit Original. This is another paid route for turning a PNG into a vector. [L1047, 2025-26]

### Colors and Fonts

- To read an exact brand color in Kittl, use the Eyedropper tool and click the color sample to read its hex code. The Project Colors panel lists pure white as FFFFFF and pure black as 000000, each at 100 percent. [L1047, 2025-26]
- A hex color code has six characters made of the digits 0 to 9 and the letters A to F. Copy the full six-character value exactly when matching a brand color across design tools. [L0952, undated]
- In Canva's typeface picker, choose a heading font and a paragraph font separately. A sans serif style is a clean, modern default for most niches. Pick fonts that fit the niche, then check that the text stays clean, readable and balanced in the layout. [L1044, undated]
- Avoid playful script-style defaults such as Comic Sans for website branding. [L1044, undated]

### Adobe Illustrator for Logo Design

#### Setup and tools

- Adobe Illustrator is recommended as the best tool for professional, unique logo design. Place a mood board of reference logos on the artboard as inspiration before designing. [L0952, undated]
- Selection Tool (V) moves and transforms all selected elements together, for example rounding the corners of the whole shape. [L0952, undated]
- Direct Selection Tool (A) selects individual anchor points or line segments so they can be moved without resizing the whole object. [L0952, undated]
- Pen Tool (P) draws straight or curved paths. A single click creates a corner point. Click and drag creates a curve with handles. [L0952, undated]
- Pen Tool controls:
  - Hold Shift to constrain a straight line, or to lock curve handles to 45-degree angles. [L0952, undated]
  - Hold Alt (Option) and drag a handle to change the curve direction. [L0952, undated]
  - Hold Alt (Option) and click the middle of a curve point to convert it to a straight line. [L0952, undated]
  - Hold Command (Mac) or Control (Windows) to move an existing point. [L0952, undated]
  - Click an existing point while the pen is over it (minus sign) to delete it. Click on a path (plus sign) to add a point. [L0952, undated]
  - Press Escape to finish a path. [L0952, undated]
- While the Pen Tool is active, hold the Spacebar to pan the canvas without switching tools. This keeps drawing precise on a zoomed-in part of the artboard. [L0952, undated]
- Shape Builder Tool merges or cuts overlapping shapes. Drag across shapes to combine them into one. Hold Alt (Option) and click a section to delete it. [L0952, undated]
- Width Tool stretches a stroke to a varying thickness along its length. This creates a hand-drawn or sketch-like line, thickened in some spots and thinned in others. [L0952, undated]
- Shift-click adds objects to the current selection, so several shapes can be selected before grouping, aligning or merging them with the Shape Builder Tool. [L0952, undated]

#### Direct Selection and editing

- Select a path with the Direct Selection Tool (A), click an anchor point, and choose Convert in the control panel to turn a corner point into a smooth point. This rounds the edge at that point without changing the rest of the shape. [L0952, undated]
- Selecting all objects and dragging a corner handle resizes the whole shape and can distort it. To reshape only part of a logo, use the Direct Selection Tool to move individual points. [L0952, undated]

#### Strokes, fills and opacity

- In the stroke panel, set Cap and Corner to round so line ends and joints appear rounded rather than flat or sharp. [L0952, undated]
- The fill and stroke swatches sit on the left and right of the toolbar. Use the switch button or the swap icon to toggle between a stroke-only line and a solid fill. [L0952, undated]
- Stroke widths in the example logo: 10 points for circle and line outlines, and about 5 points for finer details such as the dog's head outline. [L0952, undated]
- Lower layer opacity to around 50% while building shapes, so underlying elements stay visible while drawing. Return it to 100% when finished. [L0952, undated]
- Eyedropper copies the format of an object, including its fill color. To apply a fill color safely, double-click the fill swatch to read its hex code, copy it, and paste it into the target's fill. [L0952, undated]
- Using the Eyedropper on a source object with no stroke removes the stroke from the target object. Use the hex-code method above instead. [L0952, undated]

#### Arranging and aligning

- Align tool: click an object to set it as the anchor so the others align to it. Use it to align shapes top to bottom or to distribute them evenly. [L0952, undated]
- Shape order: Command+Shift+[ (Mac) brings an object to the very front. Command+[ sends it backward, and Command+] brings it forward. On Windows, use Control instead of Command. [L0952, undated]
- To copy an object and paste it directly in front of the original, press Command+C (Control+C on Windows) and then Command+F (Control+F on Windows). This is faster than moving a pasted object forward layer by layer. [L0952, undated]
- For symmetrical shapes, duplicate with Alt (Option) drag, then right-click the object, choose Transform > Reflect, and select Vertical to mirror it. Duplicating first keeps the original. [L0952, undated]
- Group objects with Command+G (Mac) or Control+G (Windows) so they move together. [L0952, undated]
- Smart Guides and snapping can make resizing less exact. Disable them when precise resizing is needed. [L0952, undated]

#### Text and brand colors

- For text, the right-hand control panel shows character size, letter spacing, all caps and line height. Reducing line height compresses a two-line logo name so it sits tighter under or next to the symbol. [L0952, undated]
- Illustrator has a Brand Kit or color palette where colors from an existing brand design can be saved and reused. Copy brand colors in from a Canva design via screenshot to keep the palette consistent. [L0952, undated]

### Canva Design Building Blocks

- To center several elements at once, select all of them, click the three-dot menu, and choose Position, then Center. This centers the whole group on the page. [L1045, 2020-26]
- Make a simple button in Canva:
  1. Go to Elements and search for a square. [L1045, 2020-26]
  2. Add the square to the design, change its size and set its color. [L1045, 2020-26]
  3. Place the square behind the text. [L1045, 2020-26]
  4. Click Text, add a heading and type the button label, for example "Shop now". [L1045, 2020-26]
  5. Make the label smaller and drag it over the square. [L1045, 2020-26]
- Effects > Outline adds a border around the letters of a headline. Check the outline color against the background before saving. A light grey outline on white can look weak. [L1045, 2020-26]
- The Templates tab offers ready-made layouts. Add a template with "Add as new page", then drag a photo into its frame. Some layouts do not accept certain photo shapes, so pick another template if the photo does not fit. [L1045, 2020-26]
- In Canva, open Edit photo > Adjust to correct basic exposure with the Brightness, Contrast, Highlights, Shadows and White sliders. Canva's contrast slider is less precise than Lightroom's, so use Lightroom for fine tuning when it is available. [L1199, undated]

### Kittl Templates and Editing

- Kittl is an online design platform with a large template library for social posts, stories, banners, newsletters and marketing plans. It can hold a brand guidelines document and has its own AI features. Canva or Adobe products can do the same job. [L0992, 2025-26]
- Template formats in a multi-design Kittl template and where each is used: [L0992, 2025-26]

| Format | Use |
|---|---|
| Instagram story | Vertical promo with a short headline and a sale badge |
| Instagram post | Square product image with headline, subheading and badge |
| Website hero banner | Wide banner with a short headline and a SHOP NOW button |
| Email newsletter, hero section | Top block with main headline and image |
| Email newsletter, feature section | Block that highlights a new product line |
| Email newsletter, promo section | Block for a time-limited offer, such as a 24-hour flash deal |

- Color change: select an element, then use the Selection colors panel and pick a color from the document's palette. Click See all colors for the full list, or Browse Color Palettes to find new palettes. Shift-select several artboard titles to change colors on all of them at once. [L0992, 2025-26]
- If you are unsure whether an element is centered, open the alignment tools on the side panel and click center. This moves the element exactly into the middle of its frame. [L0992, 2025-26]
- Read an element's size and position in the Transform panel, where W and H are shown in px. Type exact values to set width and height, for example W 1080 to match the full width of a 1080 px wide artboard. [L0992, 2025-26]
- Image tools on a selected photo: Reframe, Remove Background, Vectorize, Upscale, Border, Shadow and Photo Filter. Remove Background cuts out the subject, and Photo Filter adjusts brightness and saturation. [L0992, 2025-26]
- Extend a photo: open the Remix option on the image, choose Extend Photo, set the format to 9:16 vertical, and click Generate. The lesson's screenshot shows the Nano Banana Pro model used for the extension. If a cut-out is needed afterwards, run Remove Background on the extended image. [L0992, 2025-26]

### Product Photo Cutouts in Canva

- Quick background removal in Canva:
  1. Open the image and go to Edit photo. [L1258, undated]
  2. Choose Remove background and let Canva process it. [L1258, undated]
  3. Check the result. If the cutout is good, it is ready to use. [L1258, undated]
  4. If the cutout misses parts or leaves specks, open Adjust, then Configure. [L1258, undated]
  5. Use Remove to cut out more of the background, or Restore to bring back parts removed by mistake. [L1258, undated]
  6. Change the brush size in the Configure menu and zoom into problem areas for finer work. [L1258, undated]
  7. Use the Erase tool to delete small leftover bits, lumps or blemishes. [L1258, undated]
  8. Optionally set a light grey background color that matches the website's color scheme. [L1258, undated]
- The quick method is fast but limited. It cannot reliably remove blemishes on products or clothing, and shadows are harder to handle than in Photoshop. Use it when speed matters more than perfect edges. [L1258, undated]
- Canva's quick removal is a trade-off of quality for speed. For high-end product photography with clean edges and no visible black lines, the Photoshop workflow gives better results. [L1258, undated]
- Canva's quick cutout can leave thin black lines around edges and small lumps or blemishes. Check every cutout at zoom before publishing. [L1258, undated]
- Standard products with simple shapes, such as a teapot, usually come out well with quick removal. Results depend on the quality and angle of the source photo, so a poor starting image limits the cutout. [L1258, undated]
- Canva's background remover cuts a product photo out to a transparent background in one click. Export the result as PNG so it can be placed over any colored section. [L1462, undated]
- Upload the photo, choose Edit photo, then Remove background. It is faster than Photoshop but gives less control over edges, hair and detail. [L1178, undated]
- Use Canva's quick background removal only when Photoshop is not available. It gives less control over edge refinement and spot repair. [L1132, undated]


Part 20 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/19-product-image-editing-and-backgrounds.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/21-photoshop-cutouts-and-retouching.md
