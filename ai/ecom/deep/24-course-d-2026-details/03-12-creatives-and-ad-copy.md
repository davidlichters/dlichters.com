<!-- part of ecom/deep/24-course-d-2026-details.md -->
Part 3 of 5 of "24. Course D 2026: every missing specific, by topic". Map of all parts: https://dlichters.com/ai/ecom/deep/24-course-d-2026-details.md · Previous: https://dlichters.com/ai/ecom/deep/24-course-d-2026-details/02-07-offers-pricing-and-bundles.md · Next: https://dlichters.com/ai/ecom/deep/24-course-d-2026-details/04-16-retargeting.md

## 12. Creatives and Ad Copy

### Change content: custom book content and ads (Lesson 033 "Change content" plus the Drive videos and tool files, file inhalte-von-buechern-bearbeiten-und-ads-erstellen-800cb.md)

#### Strategy (main lesson video)

- [00:58] [01:26] Speed or custom: if you want speed, rip existing videos and test them yourself. If you value custom work, all materials are provided. You can also split test (run some ripped ads against custom ones). Teacher's rule: "always always customize 100", meaning customize fully, every time.
- [00:58] Making your own video ads as a complete beginner is "really really hard" and takes more time than ripping videos.

#### Gemini API setup (Drive video 2)

- [01:14] After you create the Gemini API key, set up billing: link a credit or debit card to Gemini in the billing account, then follow the steps.
- [01:54] To connect the key to Claude, add the image skill under browse/manage skills. Then tell Claude, roughly: "map my API key to this skill … save it to my skills folder".

#### Getting the book's inside pages (Drive video 2)

- [03:33] Method 0, not advised: buy a hard copy on Amazon, have it sent home, tear off the binding and scan it to PDF. This is a double cost (the book plus shipping, then the scanning work).
- [04:03] Method 1, "the easiest": Scribd. Search a related genre and save the books you like. There is a limit on how many files you can download, which a subscription raises. Not every genre is on Scribd. (The teacher named NCLEX-type material as an example to look for.)
- [05:45] [06:36] Method 2: Kindle. Kindle files are encrypted, so there is no print function. The teacher captured each page with Windows+Shift+S, saved each as a JPEG, then compiled them into one PDF with paid Adobe. He does not advise this for long books ("if it's a 300 pages … quite draining"). It only makes sense for a brand scaling very high.
- [07:12] The teacher also called cancelling a Kindle purchase for a refund right after download a "loophole". Note: the site's legal file (18-legal-tax-banking-and-payments.md) treats copying book content you have no rights to as infringement, so this is recorded only as what the lesson says.

#### Prompting the internal pages (Batch Frame Generator, Drive video 2)

- [09:00] [11:24] Prompt elements the teacher used for each page:
  - Remove the original author's name and profile page on every page and replace them with your own author name.
  - Update every year mention (2025 to 2026) so the book reads as that year's latest edition.
  - Follow the reference file's elements: decorative borders and header styling around the existing page content.
  - Rephrase all wording, sentences and images so it does not look plagiarized. Double-check that every sentence uses different words but keeps the same meaning.
  - Render it as a printed page and double-check spelling of newly generated words.
  - Change any photo to cartoon format and change the words inside the cartoon photo too.
- [12:47] Prompts must make sense, so don't prompt blindly. If you are unsure, ask Claude to write the prompt.
- [13:58] [14:38] Run a test of the first five pages first, then raise the batch up to 50 to speed things up. Frames sometimes error (example: frame 3). Map the failed frame back to its original file, regenerate it, and check the download folder for missing pages before stitching.

#### Batch Frame Generator ("Nano Banana: Batch Image Converter · Gemini Image · A4"), settings in the tool file

- Page format options: A4 portrait 210×297 mm (default), A4 landscape 297×210 mm, 3:4, 1:1, 4:3, 9:16, 16:9.
- The default format prompt includes a page-number rule. If the source image shows a page number ("3", "Page 3", "3/12", "- 3 -"), the output must show that exact number in the reference's page-number position and style. The tool never renumbers, increments or copies a number from a reference image. If the source shows no page number, the output shows none.
- Images sent to the API are shrunk to a longest side of 1024 px (MAX_DIM) at JPEG quality 0.85. A smaller size means much faster generation.
- Each request has a hard timeout of 90 s (REQUEST_TIMEOUT_MS = 90000).
- Up to 6 attempts per frame (MAX_ATTEMPTS = 6). The waits before attempts 2 to 6 are 2, 4, 8, 12 and 20 s. Retries cover 429, 5xx, timeouts and text-only (no-image) replies.
- Degrade plan: each retry sends a lighter request, because timeouts and 500 errors depend on payload weight. Level 0 sends at most 3 reference images at 1024 px, level 1 sends 2 at 896 px and level 2 sends 1 at 768 px. The tool degrades from the first retry.
- Workers start 2 s apart (a stagger), because simultaneous bursts trigger 500 and 429 errors.
- Outputs are named page-01.png, page-02.png and so on. They are saved in sequential order only after the whole batch finishes. Without a linked folder, browser downloads are spaced 600 ms apart so the order is preserved.

#### Book Scene Studio (file "17.Judgeme_reviews_socialproof.html"), settings in the tool file

- Default Concurrent is 3 and Pause is 0 s. If you get 429 rate-limit errors, lower the concurrency or raise the pause.
- Aspect options: 4:5 portrait (default), 3:4 portrait, 2:3 portrait, 1:1 square, 9:16 vertical, 4:3 landscape.
- Scene count defaults to 50 and is clamped between 1 and 100. A built-in generator writes each scene line as holder, angle, background and light. It draws from 10 holder types, 12 camera angles, 20 backgrounds and 8 lighting styles, skips duplicate lines, and has a Shuffle button.
- [19:27] Reject any output where the image is a 50-50 split. The output must be one full image.

#### Proofsheet · Image (file "17.proof_reading_to_fix_spelling_mistakes.html"), settings in the tool file

- Language options: Auto, English, and Español (Spanish).
- Defaults: Batch size 10 (images per batch), Concurrent 2 (per batch), JPG quality 0.92, Pause between batches 0 s, image model gemini-3.1-flash-image-preview.
- Two steps per image:
  1. The vision model (gemini-2.5-flash, temperature 0, JSON schema output) finds spelling and typo errors only. It ignores grammar, punctuation and style, and leaves brand names, product names and proper nouns alone unless they are clearly misspelled.
  2. The image model regenerates the graphic visually identical (same layout, fonts, sizes, colours, spacing), changing only the listed misspelled words.
- If the key leaks, revoke and replace it at aistudio.google.com/apikey. The tool file embeds the key client-side, so keep the file private and run it locally.

#### Claude skill "generate-images-nanobanana" (SKILL.md and README.md from the zip)

- Trigger phrases: "generate images", "run image gen", "activate image gen", "generate the images", "run the prompts", "imagen", "nano banana", "generate all prompts", "create the images". The skill pulls every image prompt from the conversation and runs them all without asking for confirmation.
- Step 0: if the key is still YOUR_GEMINI_API_KEY_HERE, stop and tell the user to set it. The key must be replaced in two places: the API Config section and the Python block in Step 3.
- Install path in Claude.ai: Settings → Capabilities → Skills → Create Skill (or Upload Skill), then upload the whole generate-images-nanobanana folder.
- Output folder: /mnt/user-data/outputs/generated-images/. Files are named image-01.png, image-02.png and so on, or by label (for example hero-image.png). At the end, all files are shown in one present_files call with a summary: total, failures with reasons, and the aspect ratio used.
- Error handling: a failed image does not stop the batch. Failures are reported at the end. API_KEY_INVALID or 403 Forbidden stops the batch. MODEL_NOT_FOUND means the model name must be updated in both the Endpoint and Model lines.
- Aspect ratio table:

| Use case | Ratio |
|---|---|
| Default or square ad | 1:1 (default) |
| Facebook/IG feed landscape | 4:3 |
| Stories or vertical ad | 9:16 |
| Hero banner or YouTube thumbnail | 16:9 |
| Portrait | 3:4 |

  An obvious context sets the ratio automatically ("vertical TikTok ad" → 9:16).
- A duplicate prompt is generated twice, because the user may want variations.

#### Bottom-of-funnel image ads via Brand Remap (Drive video 2)

- [22:26] Downloading competitor image ads by hand:
  1. In the Ad Library, search the competitor spending the most.
  2. Filter to Images and memes and set a longer date range if wanted.
  3. Right-click the image, choose Inspect and copy the image URL.
  4. Open it in a new tab, right-click and save the image to the desktop.
- [23:12] Big brands' image ads often "look like shit" but still convert best. Their LTV is higher, and referrals and organic customers make their acquisition different. Copy their layouts, not their assumption that ugly ads work for a new brand.
- [24:25] [25:03] Remap prompt practice:
  - Name your brand colour explicitly (the example book's brand colour was green; a pink brand should say pink).
  - Remove elements that don't fit, such as gummies in a supplement layout.
  - State your book's unique mechanism and buyer (example: contractors and DIYers).
  - Drop the logo if you don't want it.
- [26:33] You can dictate the prompt into Claude with the microphone. Then proofread every output for sense, for example whether a building-code disclaimer fits the niche, and re-prompt anything that doesn't fit your brand.
- [28:20] The four tools in workflow order: Brand Remap (BOF ads), internal book pages, then Proofsheet (spelling). Use your own API key in each.

### Winning ad breakdown (Lesson 064 "Winning ad break down", file gewinner-anzeige-analysieren-struktur-breakdown-38c8b.md)

- [07:17] When you edit a ripped Kalodata video, cut the TikTok Shop part and also the spoken price ("18 bucks"), because you are not selling at that price. Every price or offer in the video must match your own store.
- [03:53] [05:08] Skeptic framing builds trust. Lines like "I didn't believe you at first" and "I'm usually so skeptical of skincare products like this" make the speaker read as an authentic creator rather than a company production, and viewers relate to her.
- [09:03] The reference video ran almost two minutes, which the teacher called a little too long. Most of it would not go into the version you launch on Meta, so trim it before use.

### How to make ads that perform, Winning Hunter (Lesson 065 "how to make ads that perform", file hochperformante-anzeigen-erstellen-mit-winning-hunters-d137e.md)

- Lesson page note, verbatim: "THIS ONLY WORKS WHEN UR SCALING." Winning Hunter sign-up uses the the course code (course affiliate code).
- [06:36] Voice-of-customer example: in a problem-aware acne ad, the creator says that when the sun shines on your face, it looks like "Swiss cheese". Only people with acne would use that term; they use it in forums. This is what good use of customer language looks like.
- [10:43] [11:27] What the Lumera ad lacked (seen in its first 10 seconds): a bad person in the story, a "David versus Goliath" concept. The example is ads that cast big pharma as the meanest person in the story. People almost always side with the weak person who wants a change, because that is a better story than someone who already has it all. Use this to market a found product better than the original.
- [04:48] [05:41] Example of a usable reference: an AI-generated hair growth serum ad whose product is nearly identical to DV's scalp serum for hair growth. An ad that copies a known brand's product shows the product is worth taking as a reference.
- [10:43] The Lumera ad sent traffic straight to the product page. That is the gap to exploit: build an advertorial that agitates the problem more, which the teacher calls "twist the knife".

### Ad copy with ChatGPT (ad-copy-mit-chatgpt-erstellen-52c2a.md, lesson 076, video 4:49)

- Lesson page, primary text prompt (teacher's wording): "create me 2 facebook primary texts for [INSERT PRODUCT HERE], make sure it is organic, natural and doesnt come off as an advertisment. something that would come off as a regular facebook post but is still pushing the sale, make sure the desired outcome and [NAME MAIN PROBLEM CUSTOMERS HAVE] problem is mentioned, add a few emojis. at the end add the sentence word for word "click below to get yours here""
- Lesson page, headline prompt: same wording, but "create me 1 facebook headline", no emoji or closing line, and "make it a bit shorter than the primary text".
- Lesson page, description prompt: same wording, but "create me 1 facebook description" and "make it a significantly more shorter than headline".
- [00:00] Why the copy must look organic: people scrolling Facebook or Instagram see the video first and then the text on top, and the goal is for the whole ad to look organic on the platform, not pushy.

### Post Purchase Survey V1 (lesson 092): post-purchase-surveys-fuer-bessere-ad-creatives-32436.md

- [03:37-07:18] Prompt sequence in the Claude project (the script-writing document is added first, then the survey CSV): 1) "Looking at my survey, what is the most common angle and pain point?" 2) "Can you pick the most unique angle?" 3) "Write the script. Make it 90 seconds long." The prompt can stay short because the script-writing document already holds the detailed instructions.
- [08:32] Script revision prompts: "Can you introduce the product by name?" (example name "Parenting 101") and "Don't be too DR heavy." Add the "not too DR heavy" rule to the script-writing prompt, because book ads need very simple scripts, not advanced direct-response copy.
- [02:21] Survey incentive: cash payout is optional; the teacher does not give cash and instead offers a chance to win for answering ("No one's losing anything by answering").

### 10-step system for AI-generated ad scripts with Claude (10-schritte-system-fuer-ai-generierte-werbeskripte-mit-claud-47582.md, lesson 093, PDF)

- Inputs rule: across the whole system you only ever supply 4 things: (1) your product, (2) your 5-10 winning scripts, (3) your research, (4) the angle you pick. Everything else is generated.
- Every file prompt (Steps 4-8) ends with the instruction to deliver the finished file as a downloadable file you can save and re-upload, not just text in the chat. Download it, then upload it to the project knowledge under its exact name ("Voice Guide", "Structure Library", "Banned List", "Avatar", "Psychology Lens").
- Step 3 (find your angles) is a creative-strategist prompt that must NOT write new copy. For each swiped ad it names: FEAR DIRECTION (the fear or desire targeted), MECHANISM (the central idea that makes the promise believable), HOOK MOVE (what the opening does to stop the scroll, the move, not the words), STRUCTURE (rough beat sequence). Then it zooms out to CONCEPT FAMILIES (ads grouped by shared fear + mechanism, each family named), GAPS (fears or mechanisms the avatar likely has that none of the ads hit: these are the openings to test) and AWARENESS STAGE in one line. The reply must end with exactly: "Winner analysis complete. Ready for the market pass."
- Step 7 (Avatar) decides the awareness stage for you; you do not decide it. Default is Stage 2 if ever unsure. The Avatar prompt has an optional input "SURVEY QUESTIONS ASKED (if any)" and must say where the data is thin instead of inventing.
- Structure Library section 0B, STANCE vs FORMAT: separate NARRATIVE STANCE (constant across winners) from PRODUCTION FORMAT (varies per concept). Warn against defaulting to any one format, and give the failure example of right format but inverted stance.
- Structure Library section 3, HOW TO USE: pick a skeleton, follow its beats, use proven moves with fresh words, run against the Voice Guide, check against the exemplar.
- Structure Library section 4, WINNERS LOG: a section to log new winners that do not fit the existing skeletons.
- Each skeleton entry lists: its name, its beat sequence in order, the angle it fits, and the strongest exemplar from the scripts.
- Step 9 (angle list) combines the Avatar's ANGLE MAP with the CONCEPT FAMILIES and WHITE SPACE from the competitor research, and writes no copy. Each angle gets: NAME (short, memorable), FEAR + MECHANISM (one line each), WHY NOW (the avatar data or market gap that makes it worth testing), SATURATION (is the market already running it, or is it white space). Rank by expected strength: heavily supported fears that the market is NOT yet serving go to the top. The reply ends with "Angle bank built." You pick one angle from it.
- Step 10 brief fields: ANGLE, FORMAT, BROUGHT STRUCTURE (if any).
- Step 10 process, in this order: (1) identify the build MODE (rebuild brought structure / build from idea / judgment call); if it is a judgment call, flag it and give a read before writing. (2) Lock the structure (skeleton name or the brought structure). (3) Confirm the angle against the Avatar: which fear + mechanism, one line. (4) Write the FULL script in Style Guide voice, reproducing proven moves with fresh words by default; keep narrative stance and production format separate and use the format given. (5) MANDATORY SELF-AUDIT against the Banned Blacklist, rewriting any match before showing anything, then apply the Style Guide's one-line test.
- Step 10 delivery format: mode call, skeleton + angle (one line each), then the full script written out in full.
- Want another ad: open a new chat in the project and run Steps 9-10 again with a different angle.

### How to make ads that perform, part 2 (competitor-ads-analysieren-und-winning-konzepte-replizieren-08de2.md)

- Lesson page: Winning Hunter sign-up through the course link, with discount the course code.
- [04:40] After you add a brand to the tracker, wait at least 48 hours for all data to be tracked before you use it. The brand in the lesson was added 22 hours earlier, so the counts were still incomplete.
- [05:25] Image ad concepts include a native ad, a static ad and "just a black screen with a text on it". Video concepts include VSLs, listicle videos ("five reasons why"), unboxing and before-and-after.
- [08:52] Love angle example: Dr. Squash (Dr. Squatch) sells men's soap with a love/attraction angle shown from the female perspective, sexualized in a fun way, so men buy it.

### Research Prompts (emotionsbasierte-research-prompts-fuer-bof-ads-81c59.md)

Emotional Valence Targeting Framework (Google Doc):
- Part 3: identity labels create persistent emotional states. Someone who labels themselves "lazy" lives in a chronic state of shame or guilt that affects how they process all later information.
- Part 4, high-distress deep dive: collect at least 10 belief-threshold statements with source quotes. These cover what proof they need to believe again, what would break through their skepticism, what would make them feel "this is different", and what has restored hope for others like them.
- Part 4: collect at least 10 defensive-mechanism examples with source quotes. These cover how they protect themselves from disappointment, the cynicism they have built, the walls they have put up, and how they dismiss solutions before trying them.
- Part 5, emotional sequencing: document at least 15 CTA emotional patterns with examples. Note which emotion drives the final action, whether the CTA uses urgency (narrowing) or possibility (broadening), which approach works for which distress level, and when fear-based urgency or opportunity-based expansion is appropriate.
- Part 7 and the final checklist: find at least 7 to 10 high-stakes scenarios ("High-Stakes Scenario Library: 7-10 maximum-intensity emotional situations"), described as "the stories that would make your ideal customer cry". The Elite Market Research Framework asks for 5 to 7.
- Final checklist item 5, High-Distress Deep Dive: 2AM thoughts, failed solution history, belief thresholds, breaking points and defensive mechanisms.

Target Avatars prompt (Google Doc), Part 8, market psychology:
- 8.2 Comfort zone losses: document at least 5 hidden comforts with sources. These cover what excuse the problem gives them, what it protects them from, what identity or story it supports, what attention or sympathy it provides, and what they would have to face if it were gone.
- 8.3 Blame architecture: list at least 5 external blames with sources (industry/system, government/institution, expert/authority figure, family/upbringing, circumstance/timing). List at least 5 internal blames with sources (genetic/biological, character/willpower, intelligence/capability, past decisions, age/life stage).
- 8.4 Objection inventory: list the top 10 objections. For each, give the stated objection, the real concern underneath, the emotional driver, how to address it, and a source quote and link.

### Second Prompt In V2: post-purchase survey (post-purchase-befragung-fuer-anzeigentexte-3a55d.md)

The deep files already hold the "what it extracts / how to use it" table. The exact question wording (PDF "15.Post Purchase Survey") is missing. Variables: {BRAND}, {PROBLEM}, {CATEGORY_BEHAVIOR}.

- Q1: "Before you found {BRAND}, what were you using to deal with {PROBLEM}, and why wasn't it working?"
- Q2: "Walk me through what was actually happening in your life when you realized you needed to do something different. What was going on?"
- Q3: "What does {CATEGORY_BEHAVIOR} actually look like for you: what does it feel like in your body, your mind, and how does it affect the people around you?"
- Q4: "What had you tried before that you thought might help but didn't, and what was missing?"
- Q5: "What made you decide to try {BRAND} specifically: what was it that finally made you click?"
- Q6: "If a close friend asked you why {PROBLEM} was this bad for you, what would you tell her: whose fault is it, really?"
- Q7: "What do you most want to feel like on a daily basis: what does a version of you with {PROBLEM} handled actually look like?"
- Q8: "What was the moment you first noticed something was actually shifting after you started taking {BRAND}?"
- Q9: "Is there anything about your life, what you've been going through, or what you've been feeling that you feel like most people don't understand or talk about?"
- Q10: "How would you describe {BRAND} to a friend who's never heard of it: what would you actually say to her?"
- Q11: "What made you almost NOT try [brand]?"


Part 3 of 5 of "24. Course D 2026: every missing specific, by topic". Map of all parts: https://dlichters.com/ai/ecom/deep/24-course-d-2026-details.md · Previous: https://dlichters.com/ai/ecom/deep/24-course-d-2026-details/02-07-offers-pricing-and-bundles.md · Next: https://dlichters.com/ai/ecom/deep/24-course-d-2026-details/04-16-retargeting.md
