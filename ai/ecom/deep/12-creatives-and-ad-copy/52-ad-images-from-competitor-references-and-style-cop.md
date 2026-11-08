<!-- part of ecom/deep/12-creatives-and-ad-copy.md -->
Part 52 of 63 of "12. Creatives and Ad Copy: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/12-creatives-and-ad-copy.md · Previous: https://dlichters.com/ai/ecom/deep/12-creatives-and-ad-copy/51-limits-of-ai-output.md · Next: https://dlichters.com/ai/ecom/deep/12-creatives-and-ad-copy/53-quality-control-and-proofing.md

### Ad images from competitor references and style copying

**Copying the style of an existing ad**

Procedure for quick AI image ads:

1. Find ad images you like in Meta Ad Library, in a Google image search for a product with the word ad, or in screenshots of ads you see.
2. Upload the image into ChatGPT and ask for a detailed prompt that would recreate it.
3. Edit the prompt text to match your product, offer, colors and text.
4. Generate the image and run it as a quick test.
5. If the test works, send it to your designers and ask for more variations.

[L0972, 2025]

```
Write a thorough prompt that would let someone generate the attached image. Cover the composition, the pixel dimensions, the color palette, the typefaces, and every piece of text word for word, plus where the product sits, how it is lit, and what the backdrop looks like, so the picture can be rebuilt accurately. Return only the prompt itself.
```
[L0972, 2025]

- Use AI-generated images for quick tests, and send winning concepts to your designers for polished variations. Always check the generated text for correct offers before running it. [L0972, 2025]

**Remaking a competitor ad in your colors**

Procedure:

1. Copy a competitor's image ad that you like.
2. Paste it into ChatGPT.
3. Paste one of your own product photos into the same message.
4. Send the prompt to remake the ad in your store's color scheme, with your product photo included.
5. Review the new ad, which will have your images, your colors, and rewritten text suited to your website and niche.

[L1075, 2025+]

```
Please remake this ad in the color scheme of [your brand name / website colors]. Please include our product picture [attached] in the ad so it features our product. Rewrite the text of the ad so it is unique to our website and our niche, and keep the layout of the original ad where it fits.
```
[L1075, 2025+]

- Unprompted visual or layout suggestions from ChatGPT for ads were weak. Generate ad images from a specific, detailed prompt tied to the offer instead. [L1224, 2025+]

### Infographics and text inside images

**Style reference from any niche**

- An infographic from any niche, even outside e-commerce, can be used as a style reference. Get its prompt from ChatGPT, replace the words and icons with your own content, and generate it again. [L0972, 2025]

```
Please write a detailed prompt that would result in the attached infographic being created. Describe the layout, the number of sections, the colors, the fonts, the icons and every piece of text, so the infographic can be recreated faithfully. Output only the prompt text.
```
[L0972, 2025]

- AI-generated infographics can contain small text errors, such as an extra letter added to a word. Check every word of a generated infographic before publishing it. [L1075, 2025+]

### Holiday and seasonal visuals

**Seasonal product scene (example)**

```
Create a true-to-life photo of a surfboard standing under a Christmas tree. Behind the tree, a large window should frame an ocean view with rolling waves. The room should feel modern with a relaxed beach-house style and use bright, cheerful colors. The surfboard must be the image's obvious focal point, and the picture should work both as an ad creative for the Christmas promotion and as an email header.
```
[L1286, 2025]

**Seasonal scene template**

```
Please create a photo-realistic image of [PRODUCT] placed under [SEASONAL SCENE, e.g. a Christmas tree]. There should be a large window behind the scene through which you can see an ocean with waves. The interior of the home should be modern, have a beach house vibe and use bright colors. The image should support the message [PROMOTION MESSAGE, e.g. order now to get it before Christmas]. Adapt the product, scene and message to your own niche and promotion rather than reusing this text unchanged.
```
[L1287, 2025]

```
Please create a photo realistic image of [PRODUCT] [HOLIDAY SETTING, e.g. under a holiday decoration]. There should be a large window behind it from which you can see [VIEW OR SCENE RELEVANT TO THE OFFER]. The interior of the home should be [INTERIOR STYLE] with [COLOR STYLE].
```
[L1224, 2025+]

- ChatGPT can generate promotion images as a starting point. Save them, then open them in Canva to add a logo or text overlays. Canva's Magic Media can also create images directly, and the output can be resized for different ad formats. [L1287, 2025]
- ChatGPT is a good starting point for holiday product images, and Canva's Magic Media can also generate images. A practical workflow is to generate the image in ChatGPT, save it, then add a logo and text in Canva and resize it for each ad format. [L1224, 2025+]

### Canva and other image tools

**Demo product images in Canva**

Procedure:

1. Open Canva and create a new design.
2. In the left navigation, click Apps.
3. Open the text to image app and click Use.
4. Choose a style, for example minimalist, and set the format, for example square.
5. Type the product you want to show, for example standing desk, and click create.
6. Review the generated images and keep the usable ones.

[L0970, 2023]

**Tool overview**

| Tool | Used for | Source |
|---|---|---|
| ChatGPT | Lifestyle scenes from a product photo, ad style prompts, holiday images | [L1075, 2025+; L1224, 2025+; L1287, 2025] |
| Canva (text to image app, Magic Media) | Demo images, logo and text overlays, resizing for ad formats | [L0970, 2023; L1224, 2025+; L1287, 2025] |
| DALL-E | Variations, background edits, print-on-demand designs | [L1428, undated; L1260, undated] |
| Midjourney | Frontal character portraits | [L0888, 2023+] |
| Higgsfield with ChatGPT Image 2 | Hero, product and icon imagery from brand-kit.json and a mockup image | [L1361, 2025-26] |
| Runway ML (Inpainting) | Removing unwanted objects from video | [L1428, undated] |
| Arcads | AI UGC video ads for books | [L1030, 2026] |
| Captions.ai | Automatic subtitles and short-video edits | [L1459, 2026] |
| TopView | Product visuals with a person and the seller's branding | [L1459, 2026] |

- The image and asset stage takes brand-kit.json and a mockup image as inputs and uses Higgsfield and ChatGPT Image 2 to produce hero, product and icon imagery. Its output includes an AI image generation prompt pack that can be reused for later assets. The layer covers scenes, product photography, icons and illustrations. [L1361, 2025-26]
- AI mockup platforms such as TopView can generate realistic images of a person holding or using a product, with the seller's own branding visible on that product. This lets a seller produce product visuals without sending physical samples to influencers. [L1459, 2026]
- Captions.ai automatically generates subtitles and clean, viral-ready video edits. It is used to speed up short-video post-production. [L1459, 2026]

**Runway ML Inpainting**

- Runway ML (runway.ml) has an Inpainting tool that removes distracting elements such as cables, logos or people from a video by brushing over them. The brush size can be adjusted on the right side, and the result is checked with the Preview button. It is useful for cleaning up supplier or marketplace product videos before using them in creatives. [L1428, undated]

Procedure:

1. Log in at runway.ml and open the magic AI tools page.
2. Choose Inpainting.
3. Upload the video.
4. Set the brush size on the right side (bigger or smaller).
5. Paint over the object's full silhouette, covering everything that should disappear.
6. Wait for the processing to finish; the result takes a moment to load.
7. Click Preview to check the full video without the object.
8. Repeat the brushing with more care if parts remain, because a fast first pass gives weaker results.

[L1428, undated]

- Inpainting results depend on how carefully the mask is painted, so a rushed first attempt can look poor. Spend more time on the brushing to get a clean removal. [L1428, undated]

### Avatars, models and characters

**Product photo set with different models**

Procedure for an AI product photo set:

1. In a text chat assistant, ask for one image prompt per photo and state the total count (here eight).
2. List every required photo: five product photos, one homepage hero image, one image for cold mornings, and one image focused on the fleece layer.
3. Require a different setting and a different model in every photo, all designed to appeal to the target consumer in the life she wants.
4. Ask for simple, plain prompts so a photo style can be added afterwards.
5. Review the settings the assistant proposes, for example indoor morning light in a bright living room, an urban but calm coffee room in early morning, a mirror selfie, a hero image, and a fleece detail.
6. Choose the photo style (for example hard flash) or reverse-engineer it from an inspiration image, and keep the style prompt ready.
7. In the image generator, paste the scene prompt, state that the model wears the attached product, attach several product photos as reference, and paste the style prompt.
8. Adjust details that do not fit, for example change a night scene to daylight.
9. Check that every image shows a clearly different model, and regenerate any image that repeats a person.
10. Adjust the model's clothing colors to match the brand palette where possible.

[L0884, 2025-26]

```
I need eight distinct product photos, and I'd like your help writing the prompts. Give me one prompt per photo, eight in total. The lineup is five product shots, one hero image for the homepage's main banner, one picture centered on cold mornings, and one picture centered on the fleece layer. Each photo should use a different setting and a different woman, yet all of them should speak to our target consumer, [TARGET CONSUMER NAME AND A SHORT DESCRIPTION OF THE LIFE SHE WANTS]. Build each image so it connects with her within the life she is looking for. Describe each woman's look in detail (rough age, hair, body type, outfit, facial expression) so that no two photos show the same person. Keep every prompt plain and direct so a photography style can be added afterward. The product in every photo is [PRODUCT NAME].
```
[L0884, 2025-26]

- Keep the scene prompt plain and add the photo style as a separate layer. This lets you change the look of the whole set without rewriting every scene. [L0884, 2025-26]
- If every prompt describes the model the same way, the image generator returns the same woman in every photo. Describe a clearly different appearance for each model in every prompt before generating the set. [L0884, 2025-26]

**Copying a photo style**

Step: upload an inspiration image to a chat assistant and ask it to write a prompt that recreates that image's style. Then combine that style prompt with your own scene prompt. [L0884, 2025-26]

```
Here is an inspiration photo. Study its photography style, including lighting, camera look, color, grain, framing, and mood. Write one simple prompt that recreates this style for a new image of [SUBJECT, for example a woman wearing the product]. Keep the style description separate from the scene description so it can be reused for other images.
```
[L0884, 2025-26]

```
Generate this image. [PASTE THE SCENE PROMPT FROM THE CHAT HERE]. She is wearing the attached [PRODUCT NAME]. Use the attached product photos as reference for the garment's design and fit. [PASTE THE PHOTO STYLE PROMPT HERE, for example the hard flash candid style prompt]. Adjust the time of day to [TIME OF DAY, for example daylight instead of night] if needed. Dress her in [BRAND COLORS, for example a dark purple top or a pink sweater] where it fits the scene, so the image reinforces the brand palette.
```
[L0884, 2025-26]

**Fictional spokesperson for a Facebook whitelisting page**

Two versions of the same spokesperson prompt are kept in full.

```
Act as a top-tier brand strategist for a seven-figure online store. Attached are my customer research files and product materials. Within ten minutes, invent a fictional spokesperson for my Facebook whitelisting page and produce the materials I need to set it up.

Phase 1, review the research: identify the product and the problem it fixes; the core buyer's demographics (age, gender, stage of life, income); who that buyer is, what they want, and what they fear; which kinds of people they already put faith in (a peer, a coach, a parental figure, a quiet expert, a former professional); and the main pain the product tackles. Present a three-line recap so I can confirm your grasp. Where the files lack something, state that openly rather than making it up.

Phase 2, select the archetype: choose the persona category that lines up with what the purchaser already believes in. Possible options (the list is not exhaustive) include a coach, trainer or former athlete for fitness, supplements and performance; a mom or dad of a child for babies, parenting and family; a beauty enthusiast or editor for skincare and cosmetics; a wellness advocate with a nurse-like manner for health and self-care; a pet parent or rescue owner for animal products; a home organizer or 'clean-girl' type for home and cleaning; or a retired professional or hobbyist for products tied to identity. Give the chosen archetype on one line and justify it in one sentence. Never design a medical doctor or any persona that suggests medical qualifications.

Phase 3, build the character: provide a complete sheet covering a casual, realistic first name; a page title in the style of 'Coach Sam', 'Mom of 3 Kate' or 'Doc Ellie'; an age range; an ethnicity and physical look kept loose enough for image generators; three to five personality words; a personal backstory of two to three sentences explaining why they entered this field and how they lived the problem themselves; and one sentence on what they help people with.

Phase 4, create the assets:
4a. A copy-ready profile picture prompt for ChatGPT, DALL-E or Midjourney. Specify a headshot-style frame facing the viewer straight on, in a 1:1 square, with age, ethnicity, hair, expression and outfit; a warm, genuine, approachable feel; natural light and a soft, out-of-focus backdrop suited to the archetype. Exclude corporate headshot style, stock-photo polish and over-processed looks. No text overlays, logos or product shots.
4b. A copy-ready cover image prompt. Use a wide 3:1 frame showing a lifestyle setting from the archetype's world (gym, kitchen, park, home office and similar), with a warm, aspirational, editorial mood and a color palette that fits the character's surroundings. The character may appear in the scene or the scene may stand alone. No text, logos or product shots.
4c. A Facebook page bio of 60 to 100 words in first person. Begin with a hook drawn from the backstory, connect it to the product's problem area, and close with what the person shares or helps with. It should read like a real individual rather than a company, with no hashtags, no emojis and no sales language.

Deliver everything in copy-ready form, in this order: the three-line research recap, the archetype choice with its rationale, the profile picture prompt, the cover picture prompt, and the page bio. Start immediately.
```
[L1476, 2026]

```
Act as a senior brand strategist for an ecommerce company with seven-figure revenue. The user has attached customer research and product documents and wants a fictional brand ambassador for a Facebook whitelist page, along with the assets needed to set it up within ten minutes.

PHASE 1, READ THE RESEARCH: From the attached files, pull out the product and the problem it solves; the target buyer's age, gender, life stage and income; the buyer's self-image, goals and fears; the type of person they naturally rely on (peer, coach, parent figure, quiet expert, former professional); and the main pain point the product addresses. Print a three-line recap so the user can check your understanding. Use only what the files say and invent no market details.

PHASE 2, CHOOSE THE ARCHETYPE: Select the character type that fits what the buyer already trusts. The list is illustrative, not exhaustive: coach, trainer or ex-athlete (fitness, supplements, performance); mom or dad of a specific group (baby, parenting, family); beauty enthusiast or editor (skincare, makeup); wellness advocate with a nurse-like vibe (health, self-care); pet parent or rescue owner (pet products); home organizer or clean-girl type (home, cleaning); retired professional or hobbyist (identity-driven products). State your pick in one line and justify it in one sentence.

PHASE 3, BUILD THE CHARACTER PROFILE: Provide a complete profile containing a casual, realistic first name; a page title such as 'Coach Sam', 'Mom of 3 Kate' or 'Doc Ellie'; an age range; an ethnicity and physical look kept flexible enough for image generation; three to five personality words; a personal backstory of two to three sentences covering why they entered this field and their own experience with the problem; and one sentence on what they help people with. The name must not belong to any real, identifiable person.

PHASE 4, CREATE THE ASSETS:
4a. Profile photo prompt for ChatGPT, DALL-E or Midjourney, ready to paste. Specify a portrait, direct-to-camera, square 1:1 image; the character's age, ethnicity, hair, expression and clothing; a warm, genuine, friendly and relatable mood; natural light and a soft, blurred background that suits the archetype. Explicitly exclude corporate headshots, flawless stock-photo looks and heavy polish.
4b. Cover photo prompt for the same tools, ready to paste. Specify a wide 3:1 frame; a lifestyle scene from the archetype's world (gym, kitchen, park, home office and similar); a warm, aspirational, editorial feel; a color palette drawn from the character's world; no text overlays, logos or product shots; the character may appear in the scene or the scene may stand alone.
4c. Facebook page bio of 60 to 100 words written in first person. Open with a backstory hook, connect naturally to the product's problem area, and close with what they share or help with. It should read like a real person rather than a brand, with no hashtags, no emojis and no sales language.

DELIVERY: Present everything in copy-paste-ready form in this order: research recap (three lines), archetype pick with one-line rationale, character profile, profile photo prompt, cover photo prompt, page bio.
```
[L1475, 2026]

Before an AI builds character assets from research documents, have it print a short summary of the product, the buyer, the main pain point and who the buyer trusts. This lets you check that it read the documents correctly before it generates images and bio. The prompt should also tell the AI to flag missing information instead of inventing it. [L1476, 2026]

- Use a frontal portrait for any character that will be lip-synced. A side-view portrait for an avatar that must talk makes the animated face look distorted. [L0888, 2023+]
- Replace obviously AI-generated people with real people using the product, because realistic-looking AI content still builds less trust than real users early on. AI voiceovers from a customer perspective are a quick way to create variants. [L1225, 2025]

### Talking-head videos, voice and comic characters

**Frontal character in Midjourney**

- Generate the character as a frontal portrait in Midjourney, because a side view makes the character look odd once animated. Use a portrait prompt with a described shot and lighting, and create the image in square or portrait format. Convert it to 16:9 in Canva instead of generating 16:9 directly, because the direct 16:9 output looked poor. [L0888, 2023+]
- A 16:9 image generated directly in Midjourney did not look good for this use. Generate a square or portrait image and reshape it into the landscape layout in Canva. [L0888, 2023+]

**Script for a spoken video**

```
Write a spoken video script of at most 5000 characters about {TOPIC_OR_PASSAGE} for an audience aged 20 to 30. Make it educational and engaging, in the style of {REFERENCE_CREATOR}, and speak from a neutral perspective. Keep sentences short and easy to listen to, and write the script in {LANGUAGE}. Write every number as words in the spoken language. Write names and foreign or religious terms phonetically, so that a text-to-speech tool pronounces them correctly. Cover only {SPECIFIC_POINT}, and output plain spoken text without headings, titles or stage directions.
```
[L0888, 2023+]

- Use the ChatGPT script prompt with a maximum script length of 5000 characters. This is the requested length of the script and not a limit of the prompt. Specify the target audience of 20 to 30 years old so the wording fits that age group. [L0888, 2023+]
- ElevenLabs reads numbers aloud correctly only in English, not in German or other languages, so digits in a non-English script are mispronounced. Write all numbers out as words in the spoken language before generating the audio. [L0888, 2023+]

**Full workflow: niche to vertical video**

Procedure for a talking-character video:

1. Choose a niche and a specific angle that has little existing content in the target language.
2. Generate a frontal portrait of the character in Midjourney, create variations, pick the best one and download it.
3. Build a 16:9 layout in Canva by placing the portrait on one side, keeping free space for on-screen text and adding a logo.
4. Create a thumbnail in Canva from a template, using the character and the topic or passage.
5. Write the script in ChatGPT using the prompt, have a knowledgeable reviewer check the facts, and polish the language in a document.
6. Spell out all numbers in words and write names and foreign terms phonetically for the text-to-speech tool.
7. Paste the script into ElevenLabs, choose a voice, generate the audio and download the mp3.
8. Upload the portrait and the mp3 to D-ID, generate the talking video and download it.
9. Upload the video to Vide.io, generate subtitles, choose style, size and font, correct errors against the script in a second window, and download the video.
10. Edit in Final Cut Pro: cover the watermarks, add the logo bottom left, add extra clips if needed, and export.
11. Change the project format from YouTube to TikTok, move the character to the left so it stays in frame, export the vertical version and upload it.

[L0888, 2023+]

**Comic character with voice-over**

Procedure:

1. Create a comic-style character image with an AI image tool that relates to the product.
2. Add the image in Canva and place a name or text on it.
3. Write a script of about 300 words in ChatGPT, telling a short story that teaches something related to the product.
4. Turn the script into audio with an AI voice tool.
5. Combine the audio with the character image in an AI lip-sync tool so the character appears to speak.
6. The result is a video of about three minutes that you can test as an ad creative.

[L1017, undated]

- AI UGC video ads for books were produced with Arcads. A second AI video generator is also mentioned, most likely Kling 3.0. Confirm the second tool name before relying on it. [L1030, 2026]

### Video ad scripts and angles

- Have a knowledgeable person check every script for factual accuracy before publishing, since ChatGPT output may contain false statements. This is especially important for religious, health or other sensitive content. [L0888, 2023+]
- Write all numbers as words and write names and foreign terms phonetically, so the text-to-speech tool pronounces them correctly. [L0888, 2023+]
- Choose the angle first from the research sheet, then have the AI draft the script around it. [L0902, undated]

### Brand naming and character decisions

- Replace the example product in the brand name prompt with your own product and paste the complete brief in step 2. [L0990, undated]
- Decisions that need a trained answer, such as UGC creator placement and hook timing, belong in the training, not in the AI's guesses. [L1478, 2025-26]


Part 52 of 63 of "12. Creatives and Ad Copy: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/12-creatives-and-ad-copy.md · Previous: https://dlichters.com/ai/ecom/deep/12-creatives-and-ad-copy/51-limits-of-ai-output.md · Next: https://dlichters.com/ai/ecom/deep/12-creatives-and-ad-copy/53-quality-control-and-proofing.md
