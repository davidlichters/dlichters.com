<!-- part of ecom/deep/05-apps-and-tools.md -->
Part 18 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/17-product-options-personalization-and-digital-produc.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/19-product-image-editing-and-backgrounds.md

## Design, Branding and Image Tools

### Choosing the design tool

- Canva is the fastest option for simple social posts, product graphics and quick exports. It ships with templates, animated icons, graphics, and stock photos and videos inside the app, so beginners can build without outside assets [L0754, undated].
- Canva is weak at layering and blending. Shadows and gradients come only as presets, and you have little control over how one object blends into another. Plan designs that do not need deep blending when working in Canva [L0754, undated].
- Canva has no pen tool and no real brush, and its draw tool does not auto-correct, so straight lines and custom hand-drawn shapes are hard to make. Build custom shapes in Illustrator or Photoshop [L0754, undated].
- Photoshop works mainly with pixels and is built for image manipulation such as cutouts, colour grading and photo compositing. It can also create vector shapes, which is why many designers choose it when they can learn only one of the two programs [L0754, undated].
- Illustrator creates scalable vector graphics from mathematical paths, so enlarging a logo or shape does not pixelate it. It is the right tool for logos, icons and custom drawn shapes [L0754, undated].
- Choose the tool by the job: Canva for speed and ready-made elements, Photoshop for image manipulation and advanced compositing, Illustrator for custom graphics and shape building. One designer can combine all three and move files between them [L0754, undated].
- Photoshop and Illustrator have a steep learning curve. Do not try to learn every tool first. Learn the basic controls, then look up the specific technique you need for the current problem [L0754, undated].
- Older advice: professional software has unnecessary complexity for basic ecommerce tasks such as resizing and cropping, so simpler online tools are more practical for non-designers [L0300, 2021-22].
- Online editor PicMonkey: resizes, crops and adds text to images with no software installation or design experience needed. Free trial available; $7 per month for the basic plan [L0300, 2021-22].
- Snappa is a simple online tool for custom article images. It has a free version and a paid version with extra features, is much simpler than Photoshop, and includes a curated set of stock photos [L0382, 2017].
- Canva is browser-based. Its free plan is enough for basic store assets such as logos, favicons, banners and icons. Beginners without design training can use it; experienced designers can use Photoshop or another editor [L0342, 2020-26].

### Accounts, plans and costs

| Tool | Price or plan as stated | Notes | Ids |
|---|---|---|---|
| Canva free | $0 | Free plan is sufficient for demo product images and offers a drag-and-drop interface. Crown icons mark paid features. No built-in resize tool. | [L0036, 2020-26; L0098, undated; L0342, 2020-26] |
| Canva paid | About $10 to $12 per month, 30-day free trial | Adds more features, stock photos inside Canva, transparent-background PNG export, and resizing of existing designs. | [L0098, undated; L0342, 2020-26; L0518, undated] |
| Canva trial | One use per account | After the trial, crown elements, transparent PNG downloads, resizing existing designs and stock photos inside Canva need a paid subscription. | [L0342, 2020-26] |
| Photoshop, Canva, PhotoRoom | Roughly $10 per month each | Combined AI tool subscriptions add up quickly. | [L0353, 2023] |
| PhotoRoom | About $10 per month or $49 per year | As stated in the lesson. | [L0353, 2023] |
| Clipping Magic | About $5 per month | Background removal for cut-out product PNGs. | [L0418, 2025-26] |
| Brandfetch free plan | $0 per month, 100 API requests | One website's brand data uses 1 to 2 requests. | [L0322, 2025-26] |
| Placeit | Monthly subscription | Unlimited downloads of mockups. | [L0577, 2023] |
| Bulk Resize | Free browser tool, no sign-up | Batch resize and compress. | [L0418, 2025-26] |
| ImageOptim | Free, Mac desktop app | Older advice (2021 to 2022). | [L0300, 2021-22] |
| Unsplash | Free | Free stock photos. | [L0477, undated] |
| Pixabay | Free | Royalty-free source. Older advice (2020). | [L0468, 2020] |
| 123RF | $2 to $3 per photo | Use when supplier images are unavailable or low quality. Older figure (2021). | [L0270, 2021] |
| Google Fonts | Free | Licensed for commercial use. | [L0317, 2025-26] |

- Canva Pro is listed with a free 30-day trial [L0518, undated].
- Crown-icon elements and Pro-only search results are hidden or unusable on the free plan [L0342, 2020-26].

### Gemini API key setup

Set up the key in Google AI Studio:

1. Open Get API key, then API Keys.
2. Click Create API key.
3. Choose the Gemini API Key option.
4. Select an existing project or create a new one.
5. Click Create key.
6. Copy the key from the API keys list when a tool needs it. [L0794, 2026]

- Treat the Gemini API key like a password. Never share it, paste it only into tools you control, and keep tool files private because the key is embedded in them. If a key leaks, revoke it in Google AI Studio and create a new one before running anything else [L0794, 2026].
- Downloading course HTML tool files from Google Drive: click the three-dot menu on each file and choose Download. Do not open the raw code. Download every file of the set before first use, then open the HTML file locally in a browser [L0794, 2026].
- Gemini image generation (Nano Banana) runs in the browser tools on the model gemini-3.1-flash-image-preview. Model names change. If a request returns a 404 error, check the Gemini API models documentation and update the model field in the tool [L0794, 2026].

Adding the key through a skill file (source procedure):

1. In Claude, open Settings > Customize skills, click Add, and add the image skill folder.
2. Open https://aistudio.google.com/apikey and sign in with a Google account.
3. Click Create API key.
4. Copy the key, which starts with AIza.
5. Open the SKILL.md file and find the API Config section.
6. Replace the placeholder line API KEY = 'YOUR GEMINI API KEY HERE' with your key, then save the file. [L0794, 2026]

- Conflict: the skill-file procedure above places the key inside a file. The same key placed in a skill file travels with that file, so anyone you share the skill with can run jobs on your key and your billing account. Use the file method only for a private skill that is never shared or uploaded. Otherwise enter the key in the tool's key field at run time and never place it inside a file you share or upload [L0794, 2026].

### Brand foundations: colours, fonts and brand kit

**Colour**

- Color Hunt (colorhunt.co) shows pre-made palettes. Search by colour name or browse trending palettes. Hover over a palette to see all its hex codes, ready for design tools and websites [L0317, 2025-26].
- Canva's free resource page at canva.com/learn/100-color-combinations offers curated palettes with hex codes, mood associations and design examples. Useful when unsure of brand colours. Older advice [L0323, 2021-22].
- Canva palettes are arranged around the hue at the top. Tint moves the hue toward white, tone moves it toward grey, and shade moves it toward black. Use these controls to soften a colour instead of choosing a random new one [L0754, undated].
- Browser colour-picker extensions read the exact button colour from a store's website, so a pop-up button can match it [L0418, 2025-26].
- The Eyedropper in the Canva colour palette picks any colour from an image [L0754, undated].
- Photoshop: press X to swap foreground and background colours and press D to reset them to black and white. Brushes, masks and gradients use these colours, so resetting avoids painting in the wrong colour [L0754, undated].

**Canva Brand Kit**

- The Brand Kit is available on the free plan and allows three brand colours. Path: Brand Kit > Brand colours > add colours. Black and white can be used alongside them. Saved colours then appear under the text colour option, so exact codes do not need to be remembered [L0342, 2020-26].
- The Brand Kit lets you upload a logo, a colour scheme and fonts, then apply them to any design with one click. When a brand colour is missing, Canva can pull colours from an uploaded image [L0754, undated].

**Fonts**

- Google Fonts (fonts.google.com) offers free fonts licensed for commercial use. Search by name or filter by style such as serif, sans-serif or display. Download and upload them to design tools or Shopify themes without licence risk [L0317, 2025-26].
- Canva's Text panel lets you search fonts by style, such as handwriting, corporate, display, serif, sans serif, luxury, elegant or vintage, and includes most popular Google Fonts. Speaker favourites named in the lesson were Lato, Montserrat, Open Sans and Rubik [L0754, undated].
- Use Open Sans as a plain sans-serif font for readable ad copy, and swap in your brand font if you have one. Keep body copy in a clean sans-serif rather than decorative fonts so text stays legible on small screens [L0343, 2023].
- Use the brand serif font for packaging text so the packaging matches the brand's typography [L0884, 2025-26].

**Kittl brand guidelines**

- Kittl has free brand guidelines templates. Workflow: Templates > search "brand guidelines" > choose a free template > open it. In the left sidebar, open the Project Colors panel, click a colour, replace its hex code with your new one and press Enter. All instances of that colour update automatically [L0317, 2025-26].
- Hold Option (Mac) or Alt (Windows) and drag an element to duplicate it. This is faster than copy-paste when creating multiple texture variations in brand guidelines [L0317, 2025-26].
- Brand guidelines templates do not support batch font replacement across the document. Update each text instance individually and plan for manual font updates [L0317, 2025-26].
- The Brand Guidelines template shows project colours in code format. The lesson's screenshot shows the values 540863 and 24984o, which must be checked before use. The Browse Color Palettes option gives more palettes [L0884, 2025-26].

**Brandfetch MCP (brand data extraction)**

- Brand Fetch MCP is a data extraction tool. It has two main functions: get_brand returns the visual identity as JSON (logos, colours, fonts, social handles, company metadata), and get_brand_context returns voice, ICP, positioning, product catalogue, tagline, mission and target audiences [L0318, 2025-26].
- Brandfetch MCP is a Model Context Protocol connector for Claude. It extracts brand identity from any website: logo, hex colour codes, fonts, social media links and brand summary. It generates two files, brandkit.json and voice.md, in 5 to 7 minutes [L0322, 2025-26].
- Processing takes 5 to 7 minutes before the brand kit and voice files are returned [L0322, 2025-26].
- Naming difference: [L0318, 2025-26] names the two functions get_brand and get_brand_context. [L0322, 2025-26] lists six tools (Search Brands, Build Logo URLs, Identify Merchant from Transaction, Fetch Asset as Base64, Get Brand Details, Get Brand Context). The read-only tools extract logos, hex colours, fonts, social links and merchant data when you run the brand kit prompt [L0318, 2025-26; L0322, 2025-26].
- Competitor research: use Brand Fetch MCP to study competitor brands' positioning, colours and voice. Do not copy their visual identity or tone. Use it as competitive intelligence to understand market positioning [L0318, 2025-26].

Install in Claude (setting):

- Customize > Connectors > click the plus button > enter the name Brandfetch MCP > paste the MCP server URL from developers.brandfetch.com/dashboard into the Remote MCP server URL field > click Add > click Connect and authorise. [L0322, 2025-26]

Full setup procedure:

1. Go to brandfetch.com.
2. Click Join Brandfetch.
3. Click Are you a developer? Get API keys (not Get started).
4. Sign up via Google, GitHub or email to access developers.brandfetch.com/dashboard.
5. Go to Plans & Billing and confirm the free tier ($0 per month, 100 requests).
6. Go to Keys & MCP and copy the Brandfetch MCP URL.
7. Open your Claude Cowork Project.
8. Go to Customize > Connectors.
9. Click the plus button (Add custom connector).
10. Enter Brandfetch MCP as the name.
11. Paste the MCP URL into Remote MCP server URL.
12. Click Add.
13. Click Connect and complete authorisation. [L0322, 2025-26]

Verification after pulling data:

- If Brandfetch returns incomplete data or cannot detect a field such as the heading font, offer to have Claude visit the live website to verify and retrieve the missing information. This is faster than asking the user to supply details they may not recall [L0322, 2025-26].
- Verify in this order before saving the final brandkit.json file, and fix any discrepancies:
  1. Primary brand colour: show the hex code and ask the user to confirm it matches the colour on their main buttons.
  2. Heading or title font: if Brandfetch detected it, confirm with the user. If not, request it directly or retrieve it from the live site.
  3. Social media links: confirm each one (Instagram, Facebook, etc.) is current and correct. [L0322, 2025-26]

### Logos

- Canva is a simple option for creating a logo yourself when the design is basic [L0357, 2019; older].
- Canva's free plan is enough for logos, favicons and icons [L0342, 2020-26].
- Fiverr is the recommended platform for logo design at startup. It balances affordability with quality and offers a curated marketplace where you can browse portfolios, compare prices and read reviews before buying. Older advice [L0323, 2021-22].
- Filter Fiverr's logo section by your maximum budget (set to 100 USD in the source), desired style and delivery time. This narrows the 183,000+ available services to your needs [L0323, 2021-22].
- When evaluating Fiverr designers, prioritise those with 1,000+ completed jobs and 4.8+ star ratings. Designers with 50+ solid reviews are also dependable [L0323, 2021-22].
- Many Fiverr logo designers specialise in one aesthetic: minimalist, mascot, hand-drawn or vintage. With a specific style preference, search for designers who specialise in that style rather than generalists [L0323, 2021-22].
- Request a source file in Photoshop or Adobe Illustrator format from the designer, so the logo can be edited later without starting from scratch [L0323, 2021-22].

Fiverr logo procedure:

1. Choose three hex colour codes (primary, accent, button) and record them.
2. On Fiverr.com, navigate to Graphics & Design > Logo Design.
3. Filter by budget (under 100 USD) and review designer portfolios, ratings and reviews.
4. Click on a designer whose style you like and review their package details and revision policy.
5. Click Continue to proceed to checkout and provide your business name, colour codes, business description and target market feel.
6. Complete payment via credit card or PayPal.
7. Receive your logo files in the specified timeframe.
8. Request revisions if needed, then download and accept the final files. [L0323, 2021-22]

Building logos by hand:

- Illustrator's Shape Builder merges overlapping shapes into one outline when you drag across them. Hold Alt or Option while dragging to remove unwanted areas. It is the main method for building logos from several overlapping shapes [L0754, undated].
- Use separate shapes for each part of a logo or icon, then combine them with the Shape Builder, rather than drawing the final outline in one go. This makes it easier to correct one part without redrawing the whole mark [L0754, undated].
- Canva logo export: when downloading a logo, choose JPG as the file type and raise the quality slider from the default 80 percent to 100 percent. The default export size shown was 500 by 500 pixels [L0471, 2024].
- For a logo on coloured backgrounds, a transparent PNG is the cleanest option. Make one by using a free online background remover (search for background image remover), which deletes a white background so the PNG becomes transparent [L0342, 2020-26].

### Product images: sourcing

- Use royalty-free image sources for product photos, such as Google's royalty-free image search or the free stock site Pixabay. These are safer than competitor photos. Older advice [L0468, 2020].
- Google Image Search with the filter Labeled for commercial reuse (Settings > Usage rights > Labeled for commercial reuse) gives free, legally usable product images for demo stores without buying licences. Older advice (2020) [L0245, 2020].
- Stock photo route: start with Google Image Search, then refine with free royalty-free stock sites (20+ options listed in the source). You need at most 10 images for 5 demo products plus a homepage banner [L0268, 2020].
- Use Canva for product images and Google royalty-free image search for product images without people when Canva has none. Older advice (2021) [L0834, 2021].
- Unsplash offers free stock photos. For a discount pop-up, search a keyword such as gift. For a chat avatar, search man or woman. Download the image and upload it into the app [L0477, undated].
- 123RF has millions of images at $2 to $3 per photo. Use it when supplier images are unavailable or low quality. Older figure (2021) [L0270, 2021].
- Snappa includes a curated set of stock photos [L0382, 2017].
- Canva's built-in stock photos are paid only on the paid plan (see plans table) [L0342, 2020-26].

### Product images: AI generation

- Gemini (NanoBanana) is the recommended AI image generator for demo product images, although any AI image generator can be used [L0088, undated].
- Visit gemini.google.com for Google's free AI image generation service. Copy the complete one source Image Prompt and replace the placeholder product name with your product name. The unit records only the opening line of the prompt, so the full text must be taken from the source course [L0219, 2020-26].

```
You are a professional e-commerce product photographer creating images for a premium Shopify store
```

- Replace "product name goes here" in the full prompt with your chosen product name. [L0219, 2020-26]
- Gemini image generation costs little per image, which makes large batches affordable. For photorealistic UGC-style scenes, some 2026 testers rated ChatGPT's image model as more realistic. Run the same scene prompt through both on a small test set before choosing one for a full batch [L0794, 2026].
- ChatGPT (version 5.2 shown in the lesson) is used for generating photo prompts, product photos with image generation, packaging text, and packaging mockups from inspiration images and brand references [L0884, 2025-26].

Canva Magic Media:

- Canva Magic Media (AI image generator) gives 50 free unique images on the free account and 500 per month on the paid account [L0036, 2020-26].
- Canva Text to Image generates unique images from a text description. The images can serve as stock images for demo products without copyright issues, as long as the image is not for sale to anyone else [L0855, 2023].

Creating AI product images in Canva:

1. Open Canva and create a new project.
2. Click Apps in the sidebar and search for Magic Media.
3. Type a descriptive prompt (example: blue surfboard on white background).
4. Click Create your image and wait for generation.
5. Drag the result onto your canvas.
6. Click Share > Download as PNG. [L0036, 2020-26]

### Background removal and cut-outs

Canva background removal (Edit photo):

- Select the product photo, open Edit photo and use the background removal option to cut out the product automatically. The result is not always perfect, so use the adjust options to add back or erase parts of the cutout. Select Remove background, then use Adjust for small areas [L0341, 2023; L0343, 2023].
- Edit photo includes a Background remover that removes the background of an uploaded product image automatically. A brush tool then removes leftover parts. Auto-focus blurs the background around a subject, and the Shadow option adds a shadow to an element [L0754, undated].

PhotoRoom (AI product scenes):

- PhotoRoom is an AI app for product photos. It cuts out an object, such as a coffee cup, and places it on instant backgrounds such as wood countertops, bathrooms and jungles. It creates reflections and shadows and is available on mobile and desktop [L0353, 2023].
- Product photos in PhotoRoom:
  1. Choose Start from photo, then Camera.
  2. Cut out the product.
  3. Choose Instant backgrounds and pick a background from the list. The app fills in several backgrounds.
  4. Adjust the image with the shadows and highlights controls and with background blur. [L0353, 2023]
- A phone snapshot can be pixelated, and a low-resolution source gives a poor result. Use a better source photo [L0353, 2023].
- In PhotoRoom's desktop editor, a Shadows drop-down adjusts shadows and highlights across the whole image. The background options include a blur switch that softens the backdrop behind the cut-out, which makes the product stand out [L0353, 2023].

Photoshop and other cut-out options:

- Clipping Magic (about $5 per month) removes image backgrounds to produce cut-out product PNGs for floating images [L0418, 2025-26].
- Unscreen (video background removal) and similar tools can extend a background image. A generative fill tool expands a cropped hero background [L0418, 2025-26].
- Photoshop's Select Subject command detects the main subject automatically. The Object Selection tool and Lasso tool add or remove areas. Use them together when the automatic result misses parts of the subject [L0754, undated].
- Cut out a subject with Select and Mask:
  1. Open the Select menu and choose Subject, or use the Select Subject button in the toolbar.
  2. Click Select and Mask to open the refinement panel.
  3. Use the brush to add missing parts, and hold Alt or Option to subtract unwanted areas.
  4. In the edge settings, use Smooth to soften jagged edges, Feather for a soft edge, and Contrast to sharpen the edge.
  5. Drag Shift Edge inward slightly to remove white fringing around the outline.
  6. Click Output To and choose Layer Mask so the cutout stays editable. [L0754, undated]
- Photoshop masks hide or reveal areas of a layer: white reveals, black hides. The invert shortcut is Ctrl+I or Cmd+I. Masks cut an object out without deleting pixels, so the edit can be undone at any time [L0754, undated].
- Painting with the eraser on a normal image layer is destructive: removed pixels cannot be restored. Apply the removal to a layer mask so the original image stays intact [L0754, undated].


Part 18 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/17-product-options-personalization-and-digital-produc.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/19-product-image-editing-and-backgrounds.md
