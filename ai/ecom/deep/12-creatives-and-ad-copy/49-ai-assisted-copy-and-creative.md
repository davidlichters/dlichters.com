<!-- part of ecom/deep/12-creatives-and-ad-copy.md -->
Part 49 of 63 of "12. Creatives and Ad Copy: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/12-creatives-and-ad-copy.md · Previous: https://dlichters.com/ai/ecom/deep/12-creatives-and-ad-copy/48-background-fill-and-backdrop-colour.md · Next: https://dlichters.com/ai/ecom/deep/12-creatives-and-ad-copy/50-product-copy-editorials-and-email.md

## AI-assisted copy and creative

### Tools and project setup

- Claude Projects (Claude or ChatGPT) keeps a persistent knowledge base across chats. Upload your reference files once, and every new chat in the project reads them automatically. [L0039, 2026]
- When you run Step 9 and Step 10 of the one source ad workflow, open a new chat inside the project for each angle you test. A new chat keeps the logic of each angle separate, and the project still reads all five reference files. [L0039, 2026]
- Ad Manage.ai can save ad copy templates containing primary text, headlines, description, call-to-action button and URL parameters with UTM tracking. Create a template from an existing ad, write custom copy, import from another ad set or paste a URL. Load a saved template into new campaigns to keep messaging consistent across launches. [L0207, 2025-26]
- The Inspiration Library shows competitor ads across platforms and can be searched by brand name or keyword. You can clone an ad and have Claude regenerate it as a custom version by specifying brand colours, fonts, product name, logo and creative brief. The system adapts design and messaging to your brand identity. [L0207, 2025-26]
- Canva's AI Magic Media generates product images that do not exist and carry no supplier logos or brand names. Describe the product in a text prompt. Use it for demo products or when stock images are unavailable. [L0253, 2024]
- Shopify Email's built-in Generate Text feature creates subject line alternatives and email body copy with selectable tones (playful, formal, professional). Use it to improve abandoned checkout messages while keeping brand consistency. [L0266, 2020-26]
- Voice Control for ChatGPT is a Chrome extension. Hold the spacebar and speak to dictate prompts. It saves a lot of typing when you write long, detailed prompts. [L0353, 2023]

### Briefing the AI before prompting

- Before you ask an AI tool for ad copy, know the product's desire, its features and the benefits those features give the customer, the target persona and the problem it solves. The AI only amplifies the inputs it gets. Weak inputs produce weak copy. [L0353, 2023]
- Copy generated without product inputs comes out generic. Always give the AI the unique selling points, the target audience and the framework before asking for headlines or scripts. [L0524, 2023]
- Generic AI copy written without knowing the target audience stays generic. Give the model the audience, the problem, the market position and the unique features first. Check every output for accuracy before you publish it. [L0552, 2023]
- A general chatbot such as ChatGPT, used to write ad copy without best-practice training or explicit instructions, usually gives weak results. Teams that skip this training often decide AI does not work and go back to human copywriters. Write detailed instructions and best-practice rules first, then judge the output. [L0464, 2025-26]
- Keep one brief in a spreadsheet: the desire, features and benefits, persona, awareness and sophistication stages, and principles. All of these feed the headline and body copy. With the brief kept up to date, you can generate Facebook ad copy, landing page copy and video scripts from the same inputs. [L0516, 2023]
- Start with one long, complete brief covering the product, desire, features and benefits, audience and chosen principles, ideally dictated by voice. Then refine with a few short corrections. In a worked example, strong copy took about five rounds. The number of prompts is not the goal. [L0353, 2023]
- Use short prompts with minimal wording and refine in several rounds. In one comparison, a single long voice prompt followed by a few corrections was faster than many separate prompts. Read this together with the long first brief in [L0353, 2023]: the brief comes first, then short corrections. [L0353, 2023]

### Ad copy workflows

**Basic AI-assisted ad copy workflow**

1. Dictate the product, the problem, the desire, the features and their benefits, and the target audience into the chatbot in one long prompt. [L0353, 2023]
2. Ask for three headlines and three body copy texts for the Facebook and Instagram ad. [L0353, 2023]
3. Check whether the headline names the problem and hints at the solution. If the market is crowded, ask for the unique feature to appear in the headline. [L0353, 2023]
4. Paste the list of psychological principles and ask for the copy to be rewritten with the best ones. [L0353, 2023]
5. Ask for bullet points and emojis to format the ad. [L0353, 2023]
6. Refine in several short follow-up prompts instead of starting over. [L0353, 2023]

**Paid-plan ChatGPT workflow**

1. Describe the product in plain words, its main target audience, the situation the audience struggles with, and its unique features. [L0515, 2023]
2. Send the psychological principles, desire, benefits and persona you wrote. [L0515, 2023]
3. Ask for three headline examples and body copy. [L0515, 2023]
4. Review the output. Remove generic phrases (for example "experience the magic of") and tighten the benefit and the unique mechanism. [L0515, 2023]
5. Give the market awareness and sophistication stage with the competitors' claims, and ask for a rewrite that features the unique mechanism in the headline. [L0515, 2023]
6. For paid social ads, ask for a shorter version with bullet points, a clear call to action, a limited-time offer and fear of missing out, plus emojis if wanted. [L0515, 2023]
7. Ask for variations of a headline using a named principle, for example how to intensify a headline. [L0515, 2023]

**Drafting prompt (ideation)**

```
I want you to write headline and body copy for a [PRODUCT: product name and what it does]. Main target audience: [PERSONA: demographics, behavior, pains and fears]. Desire the customer wants to reach or escape: [DESIRE]. Unique features and benefits: [FEATURE 1 => BENEFIT 1; FEATURE 2 => BENEFIT 2]. Market awareness stage: [AWARENESS STAGE: unaware, problem aware, solution aware, product aware or most aware]. Market sophistication stage: [SOPHISTICATION STAGE 1 to 5] with these existing competitor claims: [COMPETITOR CLAIMS]. Give me three headlines that name the unique mechanism and feature a new mechanism or feature in the headline. Apply these psychological principles where they fit: problem-agitate-solution, curiosity, social proof, authority and presupposition. Then write body copy that moves from the problem, through the features and their benefits, to a call to action with a limited-time offer and fear of missing out. Keep the language plain, specific to the persona, and free of vague phrases.
```
[L0515, 2023]

**Two-step breakthrough prompt**

Send step 1 first, then wait for the confirmation before sending step 2.

```
STEP 1 PROMPT (send first, then wait):
You are an experienced direct-response copywriter. I am selling [PRODUCT NAME AND ONE-LINE DESCRIPTION] to [TARGET MARKET, e.g. owners of large dogs who let them onto the bed]. The main problem I want to solve is [MAIN PROBLEM]. The unique features are: 1. [FEATURE 1: what it is and what it does for the customer]. 2. [FEATURE 2: what it is and what it does for the customer]. Write 3 headline examples for a [AD PLATFORM, e.g. Facebook ad] and 3 pieces of body copy using breakthrough advertising best practices. I will send you psychological principles and my market awareness and sophistication stages next. Do not write any copy until I send them. Confirm that you understand.

STEP 2 PROMPT (send after the confirmation):
Here are my market position and principles. Market awareness stage: [STAGE, e.g. solution aware]. Market sophistication stage: [STAGE, e.g. stage three: prospects have heard all the claims]. Psychological principles to use: [PASTE THE PRINCIPLES LIST]. Using this, rewrite the headlines and body copy. Each headline must include the unique feature or mechanism. Give each headline its own body copy. Format the output for [AD PLATFORM] with bullet points and emojis so it is easy to read. Keep the required elements: [REQUIRED ELEMENTS, e.g. offer, guarantee, call to action].
```
[L0516, 2023]

**Breakthrough-advertising prompt (named principles)**

```
Act as a direct response copywriter. I am selling [PRODUCT]. Its unique selling points are [USP 1], [USP 2] and [USP 3]. The target audience is [TARGET AUDIENCE, including their main problem and what they have already tried]. The desire the customer wants to achieve is [DESIRE]. The market awareness level is [unaware of the problem / aware of the problem but not the solutions / aware of solutions but not this product]. The market sophistication is [how many similar products the audience has already seen]. For each feature, explain why it is included and the benefit it gives the customer. Write three Facebook ad headlines and three body copies for them, using principles from Breakthrough Advertising by Eugene Schwartz, and name the principle each headline uses. Keep the tone of [BRAND TONE]. Do not invent claims, certifications or statistics; if a claim is needed, mark it as [CLAIM TO VERIFY].
```
[L0524, 2023]

**Rewrite prompt for the chosen copy**

```
Rewrite the chosen ad copy in [LANGUAGE], make it [SHORTER / LONGER], and use emojis [YES / NO]. Keep every claim from the original copy and do not add new claims. Keep the same hook and call to action, and list any change that alters the meaning.
```
[L0524, 2023]

**Facebook video script prompt**

```
Write a script for a Facebook video ad that names the problem and then gives the solution, using the problem, agitate, solution framework. Use this product information: [PRODUCT], [USP 1], [USP 2], [USP 3] and the target audience [TARGET AUDIENCE]. Add authority and social proof, and end with a clear call to action. Keep the total length to [LENGTH] seconds, with a hook in the first three seconds, then the problem, the agitation, the solution, the proof and the call to action. Provide the spoken lines and the on-screen text as separate blocks.
```
[L0524, 2023]

**Primary text process (one chat per product)**

```
Generate Facebook ad copy for a product using the following process. Input: the product page URL, the ad creative description (the hook, the visual and the angle), and the brand name. Output: 3 headlines and 3 primary texts. Headline 1 (Problem-Aware): a headline about the offer. Headline 2 (Solution-Aware): a curiosity gap that makes the reader want the mechanism. Headline 3 (Transformation): an identity shift that makes the reader see themselves already using the product. Primary text V1 (Problem-Aware): open with the reader's pain point, show you understand their struggle, hint at what is possible, create curiosity about the solution, plant a seed of urgency, end with a soft call to action; tone empathetic, understanding, hopeful. Primary text V2 (Solution-Aware): acknowledge they have been looking, address why most solutions fail, show what is different about this product, introduce the mechanism, stack proof and credibility, create urgency, end with a confident call to action; tone knowledgeable, trustworthy, confident. Primary text V3 (Transformation and offer): paint a picture of life after using the product, show the exact transformation, state the core benefits, show what is included in the offer, make the offer undeniable, create urgency to act now. Use the current price, original price and discount percentage from the product page, and keep each text short, scannable and free of unsupported claims.
```
[L0348, 2026]

- Run the ad copy AI prompt in a separate chat for each product. Paste the product URL and the creative description, then run the prompt. Copy the three primary texts and three headlines into the ad with matching version numbers: V1 with the problem-aware headline, V2 with the solution-aware headline, V3 with the identity headline. Check line spacing before you publish. [L0348, 2026]

**Meta primary text and headline prompt (alternative format)**

This prompt sets a stricter layout (12 words per paragraph, four emoji lines). Use it when you want a fixed structure. The process prompt above ([L0348, 2026]) produces three headlines and three primary texts with V1 to V3 labels. Use the process prompt for product pages with full offer details, and this prompt for quick high-intent variations.

```
Act as a direct-response copywriter who focuses on high-converting Meta ads. Your job: review the product or creative you're given, pinpoint its central marketing angle, and then produce three alternative high-intent primary texts plus three headlines.

Input fields: Brand or product name: [Insert brand or product name here]. Audience notes: [Insert any notes about your audience here, or leave blank so the AI infers them]. Creative attached: [Yes or No; refer to the file name if relevant].

Stage 1 - Creative and avatar review. Write a brief analysis in three sections:
1. Marketing angle: the hook (the instant visual, emotional, or vanity payoff) and how it naturally moves the reader toward the functional, long-term, or technical advantage of the product.
2. Avatar: the buyer's core pains and desires, and the precise reason this creative and angle will halt their scrolling.
3. Awareness level: the single main awareness stage this ad aims at (Unaware, Problem Aware, Solution Aware, Product Aware, or Most Aware).

Stage 2 - Primary text. Produce 3 Meta-compliant primary text variations for the brand or product, each following this exact layout:
- Paragraph 1: an arresting hook centered on the main benefit or pain point (12 words at most).
- Paragraph 2: a transition linking the hook to the product's distinctive mechanism, quality, or solution (12 words at most).
- Benefit stack: exactly 4 standalone lines. Every line opens with one fitting emoji, followed by a short, punchy benefit written as [Benefit name].
- Paragraph 3: a clear call to action or a closing value proposition that is hard to dispute (12 words at most).
Hard rules: no paragraph may go over 12 words, so count each paragraph's words before you output it. Keep emojis out of the paragraphs; they belong only at the start of the 4 benefit-stack lines. Do not make any claim the product page fails to back up.

Stage 3 - Headlines. Write 3 headlines: an offer headline aimed at problem-aware readers, a curiosity-gap headline for solution-aware readers, and an identity-shift headline for readers focused on transformation. Where it fits, use the current price, original price, and discount as displayed on the product page.

Deliver the Stage 1 analysis first, then the three primary text variations, then the three headlines.
```
[L0348, 2026]

**Ad copy prompts (short forms)**

```
Write me an ad copy for [your event or offer], offering free [what you offer] if you are not happy with the results.
```
[L0440, 2023+]

```
Write me an ad copy for [your event or offer], offering free [what you offer] if you are not happy with the results. Target audience: [who the ad is for, e.g. adults aged 18 to 65 living within 20 km of the business]. Include a headline, a body text of two to three short sentences that makes the benefit clear, and a call to action such as [call to action, e.g. book a free consultation now]. Write in [language] in a friendly, plain tone, and give me two different versions so I can choose the better one.
```
[L0440, 2023+]

- Use AI-written text as a guideline for what to say, not as copy to paste word for word. Regenerate when the output is weak. [L0440, 2023+]

**Short-form and caption requests**

- For ad copy, ask ChatGPT for short two-line ad texts and for video captions for Facebook or TikTok ads. Then choose the tone, for example emotional or funny. Regenerate the response when the first result is weak, and keep specifying exactly what you want. [L0605, undated]
- To draft a request in a single prompt, use this template:

```
To draft ad copy, you can speak or type a request that says you sell [product], its core purpose is [main purpose], your audience is [target audience], and its key features are [feature 1] and [feature 2], which translate into [benefit 1] and [benefit 2]. Ask for three headlines and three body texts for a Facebook and Instagram ad. For stronger copy, send a list of psychological principles and ask for a rewrite that uses the most effective ones to sell the product. For presentation, request bullet points and emojis so the ad looks appealing.
```
[L0353, 2023]

- UGC scripts: name the product and use a problem-agitate-solution framework. Refine the output before you send it to creators or agencies. [L0353, 2023]
- Ask the AI to rewrite copy in a casual tone or translate it into another language, for example French. For direct rewrites, this can replace a separate grammar or tone-checking tool. [L0353, 2023]
- Before you name a persuasion framework in a prompt, ask the AI whether it knows that framework by name. If it confirms, it can apply the framework directly. If not, describe the framework briefly inside the prompt. [L0353, 2023]
- Refine iteratively. Treat the AI as an assistant for back-and-forth refinement, not as a one-shot writer. The first output is often broad or misses the unique feature. Steer it with specific corrections such as "this word is too much" or "surface the feature in the headline". [L0353, 2023]
- Ask for a specific tone of voice or persona, for example a friendly everyday person, a mum, or a target group. Then have someone from that target group read the copy to check whether it sounds authentic. [L0353, 2023]

**Worked example: pet hair removal brush**

- Starting point: a pet hair removal brush with a static microfiber head and a storage lid, aimed at owners of German shepherds who let their dogs on the bed. [L0353, 2023]
- Step 1: the first AI brief produced broad headlines and body copy that named the problem but not a unique feature. [L0353, 2023]
- Step 2: because the market was solution-aware, the headline was rewritten to name the microfiber head as the differentiator. [L0353, 2023]
- Step 3: a list of persuasion principles was added and the copy was rewritten. This introduced future pacing, scarcity and curiosity angles. [L0353, 2023]
- Step 4: bullet points and emojis were requested for the Facebook ad format. [L0353, 2023]
- Outcome: copy much more competitive than the first draft, but it still needed a human check for tone and claims. [L0353, 2023]

**Principles for AI-assisted creative**

- AI has changed ad creative more than any shift since social media took hold. It lets a team produce ideas, variations and finished assets much faster, with more variety and far less manual effort. [L0498, 2025-26]
- Using AI to generate ads without knowing how to direct it usually produces low-quality ads that perform worse. The tool alone does not create good creative. The operator's strategy decides the result. [L0498, 2025-26]
- Brands that keep winning with AI-assisted creative follow a small set of underlying principles, not a single tool or prompt trick. Understanding those principles lets an advertiser adapt when platforms change their rules. [L0498, 2025-26]
- Input quality decides the result of ChatGPT concept work, and a human must check the output. Overreliance makes the work weaker, so write the core copy yourself and check it against customer pain points. [L0646, 2023]
- Adjust copy and creative direction to match your brand voice and the customer psychology insights from your research. [L0221, 2026]

### Research-first ad creative (Claude Project)

Run this procedure in one Claude project named after your product.

1. Create a Claude project and name it after your product. [L0221, 2026]
2. Set up three prompts as project instructions: Market Research, Emotional Valence Framework, and Target Evidence. [L0221, 2026]
3. For the Market Research prompt, provide your website and product information, then add information about customer surveys, personas and behaviour data. More detail produces better output. [L0221, 2026]
4. Run the Market Research prompt, review the full research document to understand your market, and add the insights to the project. [L0221, 2026]
5. Copy and paste the Emotional Valence Framework prompt into the same project. Review the analysis thoroughly to understand your customers' psychological drivers. [L0221, 2026]
6. Copy and paste the Target Evidence prompt and provide your Facebook ad account data from 2 to 3 days of running the product. Include gender and age breakdowns, spend patterns, top creative themes and geographic concentration. [L0221, 2026]
7. Ask Claude to generate bottom-of-funnel ads using all the research insights you have gathered. [L0221, 2026]
8. Customise and refine the generated ads with specific tweaks and details suited to your business. [L0221, 2026]


Part 49 of 63 of "12. Creatives and Ad Copy: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/12-creatives-and-ad-copy.md · Previous: https://dlichters.com/ai/ecom/deep/12-creatives-and-ad-copy/48-background-fill-and-backdrop-colour.md · Next: https://dlichters.com/ai/ecom/deep/12-creatives-and-ad-copy/50-product-copy-editorials-and-email.md
