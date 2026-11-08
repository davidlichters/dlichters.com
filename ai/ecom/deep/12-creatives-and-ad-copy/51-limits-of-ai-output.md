<!-- part of ecom/deep/12-creatives-and-ad-copy.md -->
Part 51 of 63 of "12. Creatives and Ad Copy: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/12-creatives-and-ad-copy.md · Previous: https://dlichters.com/ai/ecom/deep/12-creatives-and-ad-copy/50-product-copy-editorials-and-email.md · Next: https://dlichters.com/ai/ecom/deep/12-creatives-and-ad-copy/52-ad-images-from-competitor-references-and-style-cop.md

### Limits of AI output

**Accuracy and claims**

- AI tools can produce the right structure but not the strongest claims. Review the output before publishing, and do not publish a claim you cannot support. [L0516, 2023]
- Output is not always accurate. Fact-check before publishing. [L0666, 2024]
- Using ChatGPT with no product input leads to generic copy. Use the principles and the audience inputs, and check every output. [L0524, 2023; L0552, 2023]

**Volume and tool limits**

- Free AI plans have message limits, and long outputs can be cut off, especially on a weak connection. When the output stops early, retry the request or move to a paid plan before the limit is reached. [L0861, 2026]
- Do not treat a single output as final. Use regeneration for weak outputs and refine each round with specific changes. [L0440, 2023+; L0353, 2023]

**Adapting templates**

- Replace the original audience of a template with your own avatar and product before generating anything. Otherwise the output will address the template's audience. [L0862, 2026]

**Image tools**

- Shopping images do not need a prompt, but a prompt enforces the dimensions, the no-text rule and the no-border rule. [L0882, 2025-26]

### Working with AI before any output

- Keep one AI chat that already holds the brand guidelines, brand voice and target customer, and send every new copy request into it. The assistant then writes in the brand voice without the brand details being repeated each time. [L0992, 2025-26]
- Keep a set of saved ad copy prompts that have already worked, and reuse them on new artboards instead of writing new prompts from scratch. After applying a saved prompt, check that the output still matches the brand voice and the offer. [L0992, 2025-26]
- Decide in advance, and define in the training, the answers to questions that need a trained opinion:
  - where a UGC creator stands in the video
  - how long to wait before introducing the product
  - at what point in the script the hook ends

  Do not let the AI guess these from mixed sources. [L1478, 2025-26]
- Creative tasks that need a defined training source each need their own proven method: product research, idea generation, static ad creation, B-roll, and choosing UGC creators. Mixed opinions from the web would otherwise shape every one of them. [L1478, 2025-26]
- Before you rely on an AI's advice, run the diagnostic prompt below to see which sources it would use. Then decide which proven sources to train it on. [L1478, 2025-26]

```
If I asked you to build a system that generates effective Meta ad creative that makes sales, which specific resources would you study to learn what to do? Name each source, explain why you chose it, and state how reliable you think it is. Also say where you are unsure, and name any sources you would reject and why.
```
[L1478, 2025-26]

- An agent given a goal creates its own tasks, such as researching problems, gathering features and generating copy. It keeps iterating, evaluates its own output and may suggest A/B tests, then stops when it judges the work finished. [L1427, 2023+]

### Copy prompts: product descriptions and feature blocks

**Product descriptions**

Two variants of the same product description prompt. Both are kept in full.

```
Please act as a direct response copywriter. Write a product description for [PRODUCT NAME and/or PRODUCT URL] using this format: 1) a headline; 2) a one to three sentence description; 3) features and benefits; 4) bullet points. Keep it short, simple and to the point. You can work from the product name or the product URL, or paste the copy you already wrote and have it condensed into this format while keeping all facts. Use only facts that appear in the product name, the URL or the pasted copy, and do not invent specifications, materials, sizes or claims.
```
[L1116, 2025]

```
Act as a direct response copywriter. Write a product description for [PRODUCT NAME] and/or [PRODUCT URL] in this format: 1) a headline; 2) a description of one to three sentences; 3) features and benefits; 4) bullet points. Keep it short, simple and to the point. If I paste existing product copy instead, condense it into this format and keep every fact it contains. Use only facts that appear in the product name, the URL or the pasted copy, and do not invent specifications, materials, sizes or claims.
```
[L1116, 2025]

**Feature blocks and problem-solution copy**

```
Using the base product description I provide, write two new feature block variations for [PRODUCT NAME]. Variation 1: a direct, urgent headline and a body of 2 to 3 short sentences that focus on the most concrete benefit in the data. Variation 2: a question-based headline and a body of 2 to 3 short sentences that focus on the buyer's problem. Use only facts from the data I provide, do not add numbers or claims that are not in the data, and give each variation a button label of 2 to 3 words. Output each variation with its headline, body and button label, in clean copy ready to paste.
```
[L1188, 2026]

Use this prompt in Claude after the base copy is fixed. [L1188, 2026]

```
Hi, I am selling a product called [PRODUCT NAME]. It is [SHORT PRODUCT DESCRIPTION]. The main problem it solves is [MAIN PROBLEM], and people usually feel this most during [SITUATION OR TIME]. Please write problem and solution copy from my website so that people feel the problem first and then see the benefit of the product. It has [NUMBER] features: [FEATURE 1], [FEATURE 2], [FEATURE 3]. Please write features that lead to benefits from these, one for each feature, explaining why each feature matters to the customer.
```
[L0917, undated]

```
I sell [product name], which [what it does]. Write one benefit-driven headline in a single line that addresses the pain point of [target customer]. Then write a paragraph of no more than two lines that explains the main benefit. Use these customer phrases where they fit: [paste five-star review phrases]. Rewrite the result in my own words without copying any competitor sentence.
```
[L1345, 2021+]

**Brand names**

Two-step ChatGPT prompt for generating brand name ideas:

1. Step 1, sent first: open by introducing a golf swing aid, a pad where, when you swing your club onto it, it leaves a mark that reveals whether your swing is off. Then say you will share the brand guidelines, the product, what it does and the target audience. Ask for 10 original brand names you could use, and ask ChatGPT to confirm it understands before you paste the product details.
2. Step 2, sent after the assistant confirms: paste the product information (brand guidelines, product, what it does, target audience) and ask for 10 original brand names.

Improvement: replace the golf example with your own product and paste the complete brief in step 2. [L0990, undated]

### Copy prompts: ads, headlines and scripts

**Option sets and brand voice**

```
I have attached screenshots of [NUMBER] design artboards from our brand guidelines. Rewrite all of the copy on every artboard so it matches our brand voice, which is [3 adjectives describing the brand voice]. Write for our target consumer: [who they are, their age or life stage, their main problem or desire]. For each text element (headline, subheading, badge, call to action), give me [NUMBER] different options. Keep the offer in every option: [OFFER, e.g. 50% off, limited time]. Keep the length of each text close to the original and avoid generic slogans that could fit any brand. Use the same options structure for every artboard so I can compare them easily.
```
[L0992, 2025-26]

- Ask the AI for several options per text element, not one. Each option set gives a choice for every section of the design, and it is usually possible to find a strong option for each section. [L0992, 2025-26]
- In one test, three full option sets for one Instagram post gave a choice of headline, subheading and badge for each text slot. Three option sets were enough to find a usable option in every slot. [L0992, 2025-26]
- Template text is often written for a different product or style and may use odd formatting, such as all caps. Rewrite all template copy for the brand instead of keeping the defaults, even when you plan to edit it again later. [L0992, 2025-26]

**Meta headlines and primary texts**

```
Help me generate 5 Meta headlines and 5 primary texts for this product. Highlight the pain points and the benefits of the product. Use only facts from the landing page text below, and keep each headline short and each primary text clear enough to stand alone as an ad. Product name: [PRODUCT NAME]. Landing page text: [PASTE LANDING PAGE TEXT HERE].
```
[L1193, 2026]

**Problem-Agitate-Solution (PAS) framework**

Framework brief for an AI assistant. The quoted prompt is:

```
Write an ad using the problem-agitate-solution framework for this audience: [describe the audience and its problem]. Include these elements: [list required elements, e.g. hook, problem, agitation, solution, call to action]. Use the product title and About text and the audience insights from the review analysis.
```

After this, ask for three Facebook video ad scripts based on the copy, and refine them with the AI tool. [L0995, 2023]

```
I'm going to feed you some Amazon reviews for this product. Here is the product title and description: [title and description]. Digest this message and do nothing but understand it. In the next messages I will send reviews. For each batch, identify the types of target audience in terms of demographics, psychographics, behaviors and underlying needs and motivations, and say who they are, what they do, why they want the product, and what language they use.
```

Repeat this prompt with each new batch of about 30 reviews, and refine the segments. [L0999, 2023]

```
Based on this target audience: [describe the audience segment]. Write three Facebook video ad scripts using the problem, agitate, solution framework, and include these elements: [list the required elements, such as the hook, the problem, the agitation, the solution, the offer and the call to action]. Here is a direct-response script to model the structure on: [pasted script text]. Refine the scripts after each draft.
```
[L0999, 2023]

- A text extractor can pull the text from a direct-response video, so it can be given to ChatGPT, which then writes ad scripts from that text. Use this to avoid retyping the copy. [L0999, 2023]
- ChatGPT can help draft ad scripts. Give it the product, its features and the principles to use, such as social proof, curiosity and authority, and ask for a problem-agitate-solution script. The first draft is not perfect, so iterate by giving feedback and amending the sections you dislike. [L1425, undated]

```
I am selling [PRODUCT NAME]. Its key features are [FEATURE 1], [FEATURE 2] and [FEATURE 3]. Explain what each feature does for the customer in one sentence: [FEATURE 1] makes [CUSTOMER RESULT 1], and so on. The problem it solves is [PROBLEM, e.g. pet hair spread across the house], and the customer feels [EMOTION, e.g. embarrassed when guests visit].

Write a problem-agitate-solution ad script for this product. Start with a hook that names the target audience and the problem. Make the problem worse in the agitate part and attach the emotion. Then present the product as the solution, with its features and the benefits they create. Include social proof, a line that creates curiosity, a bit of authority, and a clear call to action. Keep the script short enough for a 30-second video. Mark where each part starts (hook, problem, agitate, solution, social proof, call to action).

After the first draft, I will give feedback on the sections I dislike. Rewrite only those sections and keep the rest unchanged.
```
[L1425, undated]

```
Write a short video ad script for [PRODUCT] using the problem-agitate-solution framework. Target audience: [AUDIENCE: age range, location, income, what they struggle with]. Product facts: [FEATURES, INGREDIENTS, SIZE, PRICE]. Problem the product solves: [PROBLEM]. Feeling the problem creates: [FEELING]. Benefit: [BENEFIT]. Desired outcome the buyer wants: [OUTCOME]. Structure the script as: 1) state the problem in one line the viewer recognizes, 2) agitate it by describing the frustration or feeling it causes, 3) present the product as the solution, 4) turn the benefit into the desired outcome and amplify it, 5) add a social proof line, 6) finish with a call to action. Keep each line short and written for speech in a natural tone.
```
[L1427, 2023+]

**Ad copy variants with limits**

```
Write [number] short ad copy variants for [product name] aimed at [target customer, for example women over 35] in [country or region, for example Germany]. Write in [language, for example Swiss German or English]. Highlight these product benefits: [list the benefits]. Do not make health, weight, body or age-related promises. Keep each variant under [character limit] characters.
```
[L1431, 2020+]

- AI tools can produce usable ad copy for a specific product and region, even in dialects such as Swiss German. Review and adapt every output, and build your own copywriting skills, for example by reading a persuasion book such as Influence by Robert Cialdini. [L1431, 2020+]
- copy.ai and ChatGPT can produce ad copy drafts quickly. Every generated text still needs to be tested against real conversion results before it is scaled. [L1184, 2023+]
- AI text tools such as ChatGPT can produce ad copy variations and ad strategy ideas, so a store can test several angles quickly. [L1416, 2023+]
- AI can write hooks and ad scripts based on proven frameworks. This speeds up creative production compared with writing every script from scratch. [L1459, 2026]
- Use an AI tool to draft ad copy and social posts from the audience research, but feed it the right inputs: the quality of the output depends on the quality of the information given. [L0995, 2023]
- An AI chat can draft a full video script from a chosen storyline, but only after the angle has been picked from the research sheet. Without research-based angles, the AI output stays generic and weak for testing. [L0902, undated]

### Copy prompts: promotions, emails and seasonal offers

**Holiday sale emails**

```
We're holding a three-day holiday sale on our e-commerce store at [store URL]. It begins [start date, e.g. October 29, 2024] and closes [end date, e.g. October 31, 2024]. Each day of the sale, we'll email subscribers a site-wide [10%] discount using the code [COUPON CODE]. Write three distinct emails that feature the code, close each with a holiday wish such as 'Happy [holiday]', and invite readers to visit the store to claim the deal. Give them a [funny] tone that draws in people shopping for a new [niche product, e.g. surfboards]. If humor isn't right for us, replace [funny] with whatever tone fits our marketing.
```
[L1115, 2024]

**Sale ad sets for remarketing**

```
We'll also run Facebook and Google ads during the sale, aimed at remarketing audiences so they come back to the store for the offer. Produce three ad sets, labeled Ad set 1, Ad set 2, and Ad set 3, each with a headline and primary text. Match the voice of the emails above, but keep them shorter and written for pay-per-click advertising. Each set must stand on its own so it can run as a separate ad.
```
[L1115, 2024]

**Sale ad image prompt**

```
I run a Shopify [product type] store. This is my URL: [store URL]. We have a [holiday or promotion name] coming up. Please make me an ad that shows [products] on sale for [discount amount] off, with the exact offer text [offer wording], and keep the layout, colors and size of the reference ad I attached.
```
[L0972, 2025]

- AI copy can drop the offer, such as a sale, from the design. When this happens, ask the AI to keep the sale theme, for example a winter sale, while still matching the brand voice. Check that the offer is visible in the final design. [L0992, 2025-26]
- Review the copy against the brand voice, the offer and the target customer before using it in ads. [L0992, 2025-26]

### Product images: hero and clean product shots

**Hero shot prompt (square, white backdrop)**

```
Create a square picture of the uploaded item on a plain, pure white backdrop. Position the item in the middle of the frame with soft shadows that give it a sense of depth. Because this serves as the primary hero shot, it must be sharp, evenly lit, and contain no text, props, or background scenery.

Product fidelity: reproduce the item's exact form, dimensions, color, texture, and surface finish. Do not add branding or packaging that cannot be seen in the uploaded photo.
```
[L0887, 2026]

**Lifestyle scene from a product photo**

Procedure for a lifestyle image in ChatGPT:

1. Open the product page of the product and copy its product image.
2. Open ChatGPT and paste the prompt for a lifestyle image, adding the product image to the message.
3. Send the message and wait about 30 seconds while ChatGPT generates the image.
4. ChatGPT removes the white background, creates a transparent background, upscales the product, and places it in the requested scene at the requested square size.
5. If the result is not right, ask for more versions, for example with different backgrounds, and pick the best one.

[L1075, 2025+]

```
Please create a square image of the attached product, exactly 1080 by 1080 pixels. Show the product [describe the scene, e.g. a surfboard on a beach at sunrise, sticking out of the sand], with the product clearly visible in the scene and its shape, colors and proportions kept as they are. Please do not change the text or graphics on the product in any way. Remove the white background from the product photo and place the product naturally into the scene.
```
[L1075, 2025+]

- Square product and lifestyle images are generated at 1080 x 1080 pixels. State this exact pixel size in the prompt. [L1075, 2025+]
- A product photo does not need a transparent PNG to work. A JPG with a white background can be used, because the image generator removes the background itself. This works for any product photo that shows the product clearly. [L1075, 2025+]
- AI-generated product scene images are useful as ad images, remarketing images, email images, extra product page photos, and unique images for About Us or Contact Us pages. Multiple variants can be generated in minutes instead of waiting for designer revisions. [L1075, 2025+]
- A designer creating a custom scene image in Photoshop might need about an hour. An infographic might take two to three hours plus revision rounds. In the lesson's example, ChatGPT generated the infographic text and image in about two minutes. [L1075, 2025+]

**Pixel sizes and placements**

| Use | Size or position | Source |
|---|---|---|
| Square product and lifestyle image | 1080 x 1080 pixels | [L1075, 2025+] |
| Banner (example) | 1800 x 600 pixels, text position stated in the prompt | [L0972, 2025] |
| One promo image for several placements | Exact size of a homepage slider, an email section or a social post, with a separate version per placement | [L0972, 2025] |
| Profile picture | 1:1 square | [L1476, 2026; L1475, 2026] |
| Cover image | 3:1 wide frame | [L1476, 2026; L1475, 2026] |
| Landscape from a square or portrait source | Generate square or portrait, then reshape to 16:9 in Canva | [L0888, 2023+] |

- Specify the exact pixel size of the image in the prompt, and state where the text should sit. This gives more predictable output. [L0972, 2025]
- One AI-generated promotional image can be made at the exact size of a homepage slider, an email section or a social post. Create a separate version for each placement by stating the target pixel size and text position in the prompt. [L0972, 2025]

**Changing details after generation (highlight editing)**

Procedure for editing a generated image:

1. Click the generated image.
2. Use the highlight tool to mark the section that needs to change.
3. Describe what to add, remove, or replace in the box, and include the exact new text in quotes.
4. Send the change; only the highlighted section is changed.
5. Repeat for other errors and download the final image by clicking it.

[L1075, 2025+]

```
Please update this text to say '[exact replacement text]', and change nothing else in the highlighted section or the rest of the image. For example: 'select Shop Pay at checkout and choose Pay in installments'.
```
[L1075, 2025+]

- Changing the background, or showing more people or use cases in a product image, can add usable content for a product with little imagery. Expect to refine several times to get a usable result. [L1428, undated]

**Background and detail changes with DALL-E**

Procedure for changing the background or details:

1. Upload the image.
2. Click Edit image.
3. Mark the part to change, or remove the background.
4. Write the replacement instruction in text, for example replace the background with a forest.
5. Click Generate and check the result.
6. Refine the text prompt and generate again if the result is weak, since first results are often not usable.

[L1428, undated]

**Product image variations with DALL-E**

Procedure for carousel variations:

1. Upload a clear, high-quality photo of the product.
2. Crop the image to the area you want to keep.
3. Click Generate variations.
4. Review the similar versions that are created.
5. Choose the ones suitable for the carousel and save them.

[L1428, undated]

- DALL-E variation results are only as good as the uploaded image. Use a clear and well-lit product photo, because blurry or low-quality uploads produce weak variants. [L1428, undated]
- DALL-E generates images from text input and can create variations of an uploaded product photo. It is useful for print-on-demand designs, such as art pieces for shirts or cups, and for extra product images when a supplier provides only one picture. [L1428, undated]
- AI image generators such as DALL-E can create product-style visuals from a text description, which helps when supplier photos are weak. Check that the output looks realistic and does not misrepresent the product before using it in ads or on the store. [L1260, undated]

**Prompt pattern for image variants**

AI image prompts work well when one short text combines three parts: the subject, the art style and the scene. Examples: `a cat, watercolour, reading a book` and `a turtle, pixel art, riding a skateboard`. Changing one part, such as the style, produces a new variant for print-on-demand products like shirts and cups. [L1428, undated]


Part 51 of 63 of "12. Creatives and Ad Copy: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/12-creatives-and-ad-copy.md · Previous: https://dlichters.com/ai/ecom/deep/12-creatives-and-ad-copy/50-product-copy-editorials-and-email.md · Next: https://dlichters.com/ai/ecom/deep/12-creatives-and-ad-copy/52-ad-images-from-competitor-references-and-style-cop.md
