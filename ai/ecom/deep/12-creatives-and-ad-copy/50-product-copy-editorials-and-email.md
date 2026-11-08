<!-- part of ecom/deep/12-creatives-and-ad-copy.md -->
Part 50 of 63 of "12. Creatives and Ad Copy: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/12-creatives-and-ad-copy.md · Previous: https://dlichters.com/ai/ecom/deep/12-creatives-and-ad-copy/49-ai-assisted-copy-and-creative.md · Next: https://dlichters.com/ai/ecom/deep/12-creatives-and-ad-copy/51-limits-of-ai-output.md

### Product copy, editorials and email

**Product descriptions**

- ChatGPT can write product descriptions, ad copy, SMS and email templates in many languages. If a response is weak, regenerate it instead of accepting the first output. [L0549, undated]
- Template for a product description, ad copy, SMS or email:

```
Write me [product description / ad copy / SMS / email] for [product], aimed at [target audience, e.g. women above 45 living in Australia]. Write in [language] and use the words and phrases that people in that market use. If the result is not good enough, regenerate it.
```
[L0549, undated]

- Marketing angles:

```
Write 10 different marketing angles for [product, e.g. zodiac jewelry], aimed at [target audience]. For each angle, name the problem it solves, the emotion it targets and a short headline.
```
[L0549, undated]

- Customer problems:

```
List [number] main problems that [target audience] wants to solve with [product category], ranked by how strongly they feel each problem. Give one short sentence per problem.
```
[L0549, undated]

- Gary Halbert style description (as used in the course):

```
I'm building my website homepage and you are Gary Halbert, one of the greatest copywriters of all time, and you can sell anything using words. Rewrite me the entire text in Gary Halbert style.
```
Add the product details, features and benefits after this prompt, and check the output before using it. [L0552, 2023]

- Marketing-principles structure: first give ChatGPT the product, its features, its benefits and its market position, and ask for headline copy in a problem-agitate-solution framework. Then provide a list of psychological principles and ask it to use them where they will sell best. Frame the request with an expert role, such as a marketing expert, and review the output to make sure it matches the audience. [L0552, 2023]

- Product description with human review:

1. Give ChatGPT the product name and product URL (or supplier information) and a direct-response copywriter role. [L0666, 2024]
2. Request the format: headline, one to three sentences, description, features and benefits, and bullet points. [L0666, 2024]
3. Fact-check the output against the product, because AI output is not always accurate. [L0666, 2024]
4. Tweak the wording before publishing. [L0666, 2024]

```
Please act as a direct response copywriter. Please write a product description for [product name] and [product URL]. Use this format: headline, one to three sentences, description, features and benefits, and bullet points. Do research with Bing.
```
[L0666, 2024]

**Editorials (70/30 split, AIDA)**

1. Copy the text of a proven editorial you want to model. [L0578, 2023+]
2. Paste it into ChatGPT and ask for a response with the same structure, adjusted for your own product. [L0578, 2023+]
3. Describe your product in detail, including how it is different, its outcomes and its results. [L0578, 2023+]
4. Check that the output keeps the 70/30 split and the AIDA order, then edit for accuracy and claims. [L0578, 2023+]

```
You are a direct-response copywriter. Below is a proven editorial page that uses a 70/30 split and AIDA order. Write a new editorial for my product, [PRODUCT NAME], in the category [PRODUCT CATEGORY], for this ideal customer: [IDEAL CUSTOMER DESCRIPTION].

Keep the same structure:
1. Headline: benefit-driven, with a bold claim, a curiosity element or a news angle. Give 5 options.
2. Attention and interest: open with a character who fits the ideal customer and tells a story about the problem. Agitate the problem and explain why it happens.
3. Desire: explain why current solutions on the market fail to work well, then present my product as a new approach. Let an expert or a satisfied customer recommend it in the story, and do not name the brand early.
4. Social proof: include one customer result with a timeline (for example after one week and after two weeks), a data point or graph placeholder, and a count of other customers who had good results.
5. Action: in the final 30% of the text, introduce the product and end with the button text [CALL TO ACTION, e.g. check current availability] linking to [PRODUCT PAGE URL].

Use only the facts I provide here: [PRODUCT FACTS: key features, outcomes, measured results, price]. Do not invent statistics, reviews, expert names or customer quotes. Mark any missing information as [PLACEHOLDER]. Add a photo placeholder wherever a picture would help the story. End each paragraph with a hook that leads into the next one.
```
[L0578, 2023+]

**Email and abandoned cart**

Prime the AI before writing abandoned cart copy:

1. Send the brand questionnaire to the client. It takes about an hour to fill in properly. [L0567, 2025-26]
2. Paste the answers into ChatGPT and ask it to learn the brand. [L0567, 2025-26]
3. Use a thread-based approach: edit the first message and restart the thread instead of adding follow-up questions, so the brand instructions are not forgotten. [L0567, 2025-26]
4. Run the email prompt, then the subject line prompt, in the same primed thread. [L0567, 2025-26]
5. If the output drifts from the branding, paste the primer prompt again. [L0567, 2025-26]

- Shopify Email's Generate Text feature is listed under the tools section above for subject lines and body copy. [L0266, 2020-26]

**Cold outreach**

```
Please write me a cold calling email script for my marketing agency for dentists.
```
ChatGPT produced a usable script in one attempt. Use the output as a guideline rather than copying it word for word, and regenerate it if the result is weak. [L0440, 2023+]

**Blog and social content**

```
List 10 blog post ideas for [your store domain]. Use the store's niche and product types in the request if the site was built after the model's cutoff, for example: list 10 blog post ideas for an e-commerce store selling [your product type].
```
[L0804, 2023]

```
Write 10 short, inspiring social media posts for [your niche] that speak to people who buy [your product type]. Each post should be under 280 characters and suggest one simple action the reader can take. If the store was built after your model's training cutoff, describe the store in the request rather than using its domain name.
```
[L0804, 2023]

### Ebooks and free-gift content

**Ebook generation prompt**

```
Act as a seasoned ebook writer and content strategist. Produce a finished, high-grade ebook of 15 to 25 pages to serve as a free giveaway for [TARGET AVATAR: who they are and the problem they have], linked to [PRODUCT NAME], which assists with [PRODUCT PROBLEM]. Pick a widely applicable, timeless theme suited to this readership, for example productivity, mindset, health routines, personal finance basics, or something similar. Execution counts for more than the subject: the piece should demonstrate what a well-crafted free-gift ebook looks like in practice.

Deliver the complete ebook from start to finish, containing:
- An attention-grabbing title and subtitle
- A short welcome note or author introduction
- 4 to 6 chapters of substantial, truly practical material, with no placeholder text
- Practical takeaways or exercises wherever they fit
- A closing section offering one clear, gentle next step

Quality benchmarks:
- A warm, direct, engaging voice, never stiff or generic
- Brief paragraphs, subheadings, and bullet points where they improve readability
- Each chapter provides genuine value rather than padding
- The tone should read like a thoughtful present, not a sales pitch
- The ebook serves as a reference model for others, so its structure, voice, pacing, and the way the content leads into the closing next step should all be polished.

Closing: refer to [PRODUCT NAME] a single time, softly, as support that complements the habits in the ebook, not as a cure or hard sell. Include a call-to-action link only when one is supplied: [OPTIONAL CALL TO ACTION LINK]. Finish with a brief note stating the content is for educational purposes and does not replace advice from a qualified professional.
```
[L0862, 2026]

**Conversion to HTML**

```
Turn the ebook you just wrote into one complete, self-contained HTML file. Make it look high quality and stylish, and readable on desktop and mobile. The product name is [PRODUCT NAME]. Ignore any call-to-action link placeholder and keep the soft closing mention of the product. Add print-friendly CSS for A4 pages with page breaks between chapters. Before the code, give a short list of the design choices (colors, fonts, visual motif) and the reason for each, so a designer can use it as a styling reference.
```
[L0862, 2026]

**Conversion to PDF**

```
Convert the finished HTML ebook into a print-ready PDF in A4 format. Keep the design and fonts from the HTML version, place page breaks between sections, and make sure no text is cut off. Provide the PDF for download.
```
[L0862, 2026]

- When you adapt an ebook generation prompt, do not add the product on top of the original audience sentence. Remove the whole section about the template's original audience, for example beginners learning to make ebooks, and replace it with your own avatar and product. Otherwise the generated ebook talks about creating ebooks instead of solving the reader's problem. [L0862, 2026]

### Product image editing

**Custom cover workflow (ChatGPT image edit)**

1. Open the product detail page of the chosen book in the product research tool and select the product image. [L0333, 2026]
2. Click the copy button on the product image. [L0333, 2026]
3. Open ChatGPT in a new chat and paste the copied image. [L0333, 2026]
4. Send a text request describing the first change, such as a new cover colour or a new title. [L0333, 2026]
5. Compare the returned image with the original cover and check that nothing else changed. [L0333, 2026]
6. Request alternative variations for the element you want to change and pick the best one. [L0333, 2026]
7. Request further small changes one at a time, such as an added decorative element, and check each result. [L0333, 2026]
8. Keep the final version as the customised cover for the supplier. [L0333, 2026]

- ChatGPT can edit an uploaded product image from a text request, for example to change colours, replace text or add small decorative elements. In the example, each edit took roughly 9 seconds to 1.5 minutes to return. [L0333, 2026]

```
I want to make a custom cover for this book. Change the cover colour from red to a darker red. Replace the title with: [NEW TITLE]. Keep everything else unchanged, including the layout, fonts, images and all other text.
```
[L0333, 2026]

```
Give me 10 other variations for [PHRASE TO CHANGE, e.g. the title line on the matchbox]. Keep each variation short enough to fit the same space on the cover, and number them.
```
[L0333, 2026]

```
Edit only the [ELEMENT, e.g. the label and the tips of the matchsticks on the matchbox]. Keep the [BACKGROUND COLOUR] cover, the title, the layout and all other text unchanged.
```
[L0333, 2026]

```
Add a small [COLOUR] heart next to [WORD OR LINE] on the cover. Draw it as rough, uneven handwriting, not as a polished professional graphic, so it looks like a real person wrote it. Change nothing else on the cover.
```
[L0333, 2026]

**Performance image parameters**

When you generate image prompts for AI-created ads, specify exact visual parameters:

- Colours: hex codes sampled from brand assets, for example #FDE734, #0F1034, #FEC941, #2B2A4C, #101041, #DDE9FE. [L0221, 2026]
- Composition: for example, upper 62% photograph, lower 38% solid text panel. [L0221, 2026]
- Lighting angle in degrees, for example 35 degrees. [L0221, 2026]
- Colour temperature in Kelvin, for example 5200k daylight. [L0221, 2026]
- Aperture, for example f/2.2, and lens type. [L0221, 2026]
- Photography style: documentary-reportage rather than styled advertising. [L0221, 2026]
- Product: render it as a fully native scene element, never lifted or composited from reference images. [L0221, 2026]
- Details: describe wood grain direction, shadow edges, worn surfaces, household objects and soft-focus background elements. [L0221, 2026]

**Lifestyle scene prompt (holiday product image)**

```
Please create a photorealistic image of a [product] under a [holiday decoration]. There should be a large window behind the [holiday decoration] from which you can see a view of [scenery]. The interior of the home should be modern and have a [style] vibe with bright colors. Compose the image in the aspect ratio for [placement, e.g. 1:1 square for Meta feed or 16:9 landscape for Display].
```
[L0620, 2025+]

**Midjourney and ChatGPT for creatives**

- Midjourney was judged weak for performance image ads because it did not reliably create the visual hierarchy needed for call-outs, discounts and clear product visibility. It was seen as useful for creative 3D art and effects. ChatGPT was useful for concept research when the input was precise. [L0646, 2023]

### Shopping and Demand Gen images

**Google Shopping image prompt**

Note from the source: the lesson displayed only the first question in full. The lesson states that the prompt also contains the further requirements: aspect ratio, no text, logo or badge overlays, and no borders or colour-wash backgrounds.

```
Act as an AI image generator that makes product pictures for Google Shopping ads. Whenever a user uploads a product photo, your first reply must be a question, before any image is made, asking which style they want: a plain white or neutral backdrop (the most typical choice for Shopping), a lifestyle or in-context setting, a flat lay, or something else they describe themselves. Once they choose, create the image in that style using the uploaded photo as the reference for the product, with an aspect ratio suited to a Shopping listing. Put no text, logos or badges on the image, and no borders or colour-wash backgrounds. Show the product straight on, sharp, and as the clear focal point, leaving visible empty margin around it so Google's automatic cropping and centring does not clip it.
```
[L0882, 2025-26]

- ChatGPT's image generation can create Shopping images directly from a product photo. A custom GPT with a fixed instruction set can enforce the question-first workflow. Other image models such as Gemini or Nano Banana can be used the same way. [L0882, 2025-26]
- A prompt is not strictly required for Shopping images, because current image models can work from the product photo and a described style. A prompt is still useful to enforce the required dimensions, the no-text rule and the no-border rule. [L0882, 2025-26]
- Do not expect a usable Shopping image on the first generation. Results usually need several rounds of refinement. Plan time for iterations, because each round takes a while to generate. [L0882, 2025-26]
- Refine each generation by naming the specific change, such as zooming in on the use case or enlarging the product on one side of the frame. When ideas run out, ask the model for concept ideas for the next round. [L0882, 2025-26]

**Demand Gen image prompt**

```
Act as a specialist AI image generator for Google Demand Gen. A reference product photo will be supplied. Create one image from one of three angles. 1. INFORMATIONAL: spark curiosity without resolving the problem. Possible directions: problem-focused (a daily frustration), clinical or editorial (anatomy or article-style), or curiosity-driven (unusual or intriguing). 2. COMPARISON: suggest that someone has done the research. Possible directions: editorial flat lay, lifestyle evaluation scene, or side-by-side hierarchy. 3. OFFER-FOCUSED: the product is the hero, and text on the image is permitted. Direction: a high-contrast product hero shot with negative space reserved for headline or urgency text. Rules for ALL angles: photorealistic, no heavy filters, no clutter. Format (choose one): Landscape (1.91:1), 1200 x 628 px (best for YouTube in-feed); Square (1:1), 1200 x 1200 px (works across both); Portrait (4:5), 960 x 1200 px (best for Discover). [User specifies angle and format]
```
[L0882, 2025-26]

**Offer-focused Demand Gen image (single round)**

1. Set the Portrait (4:5) format. [L0882, 2025-26]
2. Ask the tool to extract the brand colours and logo from the brand website. [L0882, 2025-26]
3. Name the product to push and the offers to overlay. [L0882, 2025-26]
4. Paste the actual product image as the reference. [L0882, 2025-26]
5. Review the result and reformat the layout before use, since the first output usually needs adjustment. [L0882, 2025-26]

- Example: an offer-focused image was generated in about 10 seconds from a short prompt. The tool extracted the logo and a few brand colours from the website and added product selling points such as 10 calories per serving, gluten free and keto friendly. The output was treated as a starting point to reformat, not a finished creative. [L0882, 2025-26]
- Keep the prompt as a reference record so you can check the required Demand Gen dimensions and image styles without memorising them. Reading the prompt back works as reverse prompting when you are unsure which image styles to request. [L0882, 2025-26]

### Brand Remap and book scene images

**Output sizes and aspect options**

- A4 portrait is 210 x 297 mm, a ratio of 1:1.414, which the tool uses for page proportions. For 300 DPI print, the page is 2480 x 3508 px. The tool does not produce that size directly, so upscale the PNG output afterwards. [L0794, 2026]
- Brand Remap aspect options:

| Option | Note |
|---|---|
| Match competitor | Default. Keeps the competitor image's ratio. |
| 4:5 portrait | |
| 1:1 square | |
| 9:16 vertical | |
| 16:9 wide | |

[L0794, 2026]

**Content filters**

- Relax content filters is checked by default. It sends permissive safety settings so legitimate brand creative is not falsely blocked. Some server-side filters still apply regardless, so a blocked output must be rerun with an adjusted prompt. [L0794, 2026]

**Brand Remap: competitor layout re-skin**

```
Rebuild the arrangement, composition, element positions, framing, and general visual look of the attached competitor layout so the structure clearly matches it, but fully re-skin it in my brand's colours, logo, fonts, and identity taken from my brand reference. If the competitor layout includes a book or book cover, swap it for my own book cover so the book carries my branding. Never reuse the competitor's logo, brand name, trademarks, or text branding; replace every branded element with mine. Photorealistic, high resolution, clean composition, no watermark, no nonsensical text. All text must stay legible and spelled correctly.
```
[L0794, 2026]

- The Brand Remap tool places the brand images first, then the book cover if one is uploaded, and the competitor layout last so the model knows which image to recreate. The tool also adds a line stating the chosen aspect ratio. Check the instruction and image order before every run. [L0794, 2026]

**Book in user-generated-content style**

```
Create a photorealistic product photo in the style of user-generated content. The attached image IS the book: copy its front cover precisely, matching the title, author, subtitle, layout, artwork, colours, typography, and proportions. It must read as the same physical book in every frame. Do not redesign, restyle, recolour, translate, relabel, crop, or change the cover in any way; only the setting changes. Keep the front cover clearly visible and facing the camera. Natural, realistic hands with the correct number of fingers and realistic proportions, no nonsensical text, no watermark. Adjust this section if the book needs special notes, such as 'hardcover, glossy finish'. Setting: [one line from the scene list]
```
[L0794, 2026]

**Scene lines for Book Scene Studio**

Write one scene per line. Each line describes who holds the book, how they hold it, where they are, the camera angle and the light. Examples:

```
a woman in her thirties holding the book at waist height in a bright cafe, shot from a slight low angle, warm window light
a student resting the book on a classroom desk with the cover facing the lens, shot from above, soft overhead light
an older man holding the book toward a camera on a sunny porch, shot at eye level, natural shadows
```
[L0794, 2026]

### Meta AI enhancement settings

Check these settings in Ads Manager before every launch.

1. Go to Ad > Creative > Enhancements. [L0865, 2025-26]
2. Turn off all Meta AI text and creative variation features. [L0865, 2025-26]
3. Click Skip and continue where Meta offers AI-generated text options. Meta then chooses text that is not controlled. [L0865, 2025-26]
4. Turn off Overlays, Visual touch-ups and Add music. [L0865, 2025-26]
5. Keep Show products on only when the catalogue is optimised. [L0865, 2025-26]
6. If you want music, use your own. Otherwise use none, because Meta may add music that does not fit the brand. [L0865, 2025-26]

- Automatic AI changes to ads by Meta often hurt results. Check each automatic enhancement and turn it off unless it is proven to help. [L0865, 2025-26]

### Quality control and proofing

**Review before publishing**

- Read every AI-generated text and image before it is used. AI output can contain spelling errors and awkward sentences. The proofing tool fixes spelling and typos but does not check meaning or whether a claim is true. [L0794, 2026]
- Treat AI output as a starting draft only. Verify the content makes sense for your customers, rephrase unclear sections, and apply business judgement. Never use AI output without review and revision. [L0278, 2025]
- Fact-check product descriptions against the product, because AI output is not always accurate. [L0666, 2024]
- Review the output to make sure it matches the audience. [L0552, 2023]
- Check every headline for the unique feature. Ask the tool to rewrite any headline that does not include it, because AI copy often leaves the mechanism out of the headline even when the body copy contains it. [L0516, 2023]
- Review generated copy against the customer desire, the awareness stage and the principles before publishing. Make sure every claim is one you can actually support. The right structure can still come with weak claims. [L0516, 2023]
- Ask the AI to check the copy against the frame. [L0646, 2023]
- Check the line spacing of primary texts and headlines before you publish. [L0348, 2026]
- Have someone from the target group read the copy to check whether it sounds authentic. [L0353, 2023]

**Image checks**

- Before asking an AI image tool to recolour a real-world object, check a reference photo of that object, for example with a Google image search. This makes the requested colour match how the object really looks. [L0333, 2026]
- Playful phrases repeated several times on one cover line can look like too much. For example, "a lot" five times in a row. Review the rendered cover and cut the repetition back to one or two uses. [L0333, 2026]
- Expect several rounds of refinement for Shopping and Demand Gen images. [L0882, 2025-26]
- Refine by naming the specific change. [L0882, 2025-26]

**Book scene and batch checks**

- A half-and-half frame, where the book is cut across the picture or split with another image, reads as a 50/50 composition and weakens the photo. Rerun any output where the whole book is not clearly the subject of a full image. [L0794, 2026]
- A "no image returned" or safety-blocked message means that frame produced no picture. Rerun only that frame with the same input. If it keeps failing, adjust the wording of the prompt. [L0794, 2026]
- Batch conversion quality check:
  1. Count the outputs against the inputs after the batch finishes. [L0794, 2026]
  2. Compare each output with its source frame to confirm the right page was generated. [L0794, 2026]
  3. Rerun any missing or failed frame, changing only that item. [L0794, 2026]
  4. Skip any frame that is ignored after it was regenerated, and confirm the final set has every page in order before assembling the PDF. [L0794, 2026]

**Video analysis**

- The AI chat warns that it can make mistakes. A frame-by-frame analysis from Gemini or Claude must be checked against the actual video before you act on it. Treat the output as a hypothesis to verify, not as a finished result. [L0374, 2026]


Part 50 of 63 of "12. Creatives and Ad Copy: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/12-creatives-and-ad-copy.md · Previous: https://dlichters.com/ai/ecom/deep/12-creatives-and-ad-copy/49-ai-assisted-copy-and-creative.md · Next: https://dlichters.com/ai/ecom/deep/12-creatives-and-ad-copy/51-limits-of-ai-output.md
