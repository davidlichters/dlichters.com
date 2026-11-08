<!-- part of ecom/deep/05-apps-and-tools.md -->
Part 7 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/06-hiring-and-freelance-talent.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/08-connectors-and-integrations-mcp.md

## AI Assistants and Custom AI Workflows

### Choosing and starting with AI chat tools

- ChatGPT is the most widely used AI chat tool. It works well for writing copy, generating marketing ideas, explaining concepts and learning new topics, and it is very beginner friendly. [L0887, 2026]
- Claude is a strong AI chat tool for longer written content, more structured answers, analysing information, deep thinking and problem solving. Choose it when a task needs careful analysis or a clearly organised output. [L0887, 2026]
- One AI chat tool, either ChatGPT or Claude, is enough to start. Pick one and begin using it daily instead of overthinking the choice. [L0887, 2026]
- For long, structured prompts that must analyse customer reviews, Claude tends to outperform ChatGPT. When the output matters, run the same prompt and inputs in both tools and keep the better result. [L0887, 2026]
- Use AI chat as the first point of contact for any store, marketing or business question, before asking a community or coach. It is available around the clock and can be used whenever a problem appears. [L0887, 2026]
- ChatGPT and Gemini produce equivalent brand name suggestions for dropshipping stores. Choose by personal preference or current access, because output quality does not differ. [L0320, 2026]
- The free version of ChatGPT contains all functions needed for niche brainstorming, so no paid plan is required. It can expand a broad category into specific product ideas. [L1056, 2020-26]
- The free version of ChatGPT is used to create content outlines and bullet points, not finished articles. The output is a starting structure that a person writes out in their own words. [L1321, 2020-26]
- The operator in one lesson reported that ChatGPT is free to use and keeps earlier conversation context, so later requests can build on earlier topics. [L0440, 2023+]
- ChatGPT Professional cost about 20 dollars per month at the time the lesson was recorded (2023). It gives access to browsing and plugins that can pull data such as Amazon reviews. Use the base version when you only need copy generated from your own inputs. [L0516, 2023]
- The free plan of Claude has a message limit that can cut off a long generation mid-output. This happened when an ebook HTML file was truncated. Retry later, or use a paid plan and generate a full ebook in several steps. [L0862, 2026]
- Gemini asks for a login before it imports files. Attach the competitor video and exported brand data from a logged-in account, because file upload in the chat does not work without it. [L0374, 2026]
- ChatGPT Playground at platform.openai.com/playground is a free-to-use alternative when regular ChatGPT sign-up is blocked. It handles the same text tasks: product descriptions, ad copy, ad strategies, and preset answers for live chat. [L1428, undated]
- Chat-based research works best with product context. When asking about any product, describe your current work first (for example that you run a Shopify store) to get more relevant output. [L0972, 2025]

#### Claude chat setup

- On Windows, press Ctrl+V to paste a captured screenshot into the Claude chat. Ctrl+B switched back to the Claude window from the Kalodata tab. [L0354, 2026]
- The Claude chat used for product research ran on Opus 4.8 at High effort, shown in the model selector of the chat. [L0354, 2026]

### Prompting rules and inputs

#### Giving the AI the right context

- A large language model answers from its training material. Always state the exact sources, definitions and step-by-step method the AI should follow, because it otherwise falls back on safe, generic answers. [L1478, 2025-26]
- Give the model as much product information as possible before asking for specific outputs. [L0321, undated]
- When asking AI for help with a store problem, always state the platform (for example Shopify), the theme you use (for example the Elixir theme), the exact element involved and what happens instead. Without this context the answer will be generic. [L0887, 2026]
- When a prompt asks for Amazon listing data, take the title and bullet points from the product's Amazon listing and collect 3-5 detailed real customer reviews. Output quality depends on these inputs, so do not skip them. [L0887, 2026]
- Standard ChatGPT ad writing needs the product facts, the problem, the feeling and the benefit supplied in the prompt. [L1427, 2023+]
- Brand guidelines given to a chat AI: provide only the cover page as a screenshot and the colour palette, not the full PDF. The AI may not read PDFs visually well, and too much information can confuse it. [L0884, 2025-26]
- Do not upload more than two PDF pages to ChatGPT. Upload only what the AI needs to see, because large PDFs reduce the quality of its output. [L0884, 2025-26]

#### Working in threads

- ChatGPT keeps earlier messages in the same chat, so follow-up requests can refine earlier output without restating the product or business name. Keep one chat per topic so the context stays relevant. [L0440, 2023+]
- ChatGPT keeps the conversation context, so follow-up requests such as making text funnier or more emotional work without repeating the product details. It is useful for copywriting, ad copy, headlines, product descriptions, bullet points, video captions, brand name ideas, and colour palettes or hex codes. [L0605, undated]
- ChatGPT retains context throughout a thread, so you can refer to previous examples and ask for variations. [L0321, undated]
- An AI chat assistant works well as a sounding board. Describe your current work and ask for feedback or ideas, including through phone voice mode. For each specific task, ask the AI to write a detailed prompt for you, then edit it. [L0972, 2025]

#### Reusable prompt patterns

- Use a short, concrete prompt that names the problem, the goal and the number of options you want, so the AI proposes several solutions instead of one guess. Pattern: state the problem, state the desired outcome, then ask for three options. Examples: "My export file opens with broken characters; I need a clean CSV for Excel; what are three ways to fix this?" and "My agent keeps skipping the scoring step; I need every candidate scored; what are three changes I could make to the instructions?" [L0366, 2025-26]
- Beginner prompt for a stuck problem, which asks for options and then for changes to agents.md so the problem does not recur:

```
I am a beginner and I am stuck on this problem: [describe the problem]. I need this solution: [describe the goal]. What are three options you could give me, with the pros and cons of each? Once I choose one, tell me which lines to add or change in agents.md so the same problem does not happen again.
```
[L0366, 2025-26]

- Regularly put these kinds of prompts to an AI tool and tailor the specifics to the product you sell:

```
Regularly put these kinds of prompts to an AI tool and tailor the specifics to the product you sell: ask it to break down a dropshipping idea for someone new to the field, ask it to draft a description for a given item, ask it for five marketing angles worth testing on that product, and ask it why your ads might not be turning visitors into buyers. The more of these questions you ask, the more helpful the AI becomes for your business.
```
[L0887, 2026]

- Using a ready-made prompt from the course library:
  1. Find the prompt that matches your task, for example the one for store building. [L0887, 2026]
  2. Copy the complete prompt, including all instructions and section names. [L0887, 2026]
  3. Paste it into ChatGPT or Claude as a new chat. [L0887, 2026]
  4. Fill every required input: the Amazon listing title and bullets, the product description and 3-5 detailed customer reviews. Add your brand name and product name where the prompt asks for them. [L0887, 2026]
  5. Press send and wait for the full output. [L0887, 2026]
  6. Use the sections in the order the prompt generates them. [L0887, 2026]

#### Checking generated prompts

- A generated prompt must make sense before it is run. Read it, check it against your brand and product, and fix anything unclear. If you are unsure how to phrase a prompt, ask Claude to draft it and review the draft instead of running it blindly. [L0794, 2026]
- Dictating your brand, product and process aloud and having Claude turn that into a prompt is faster than typing. Check that the resulting prompt matches your brand before running it. [L0794, 2026]

#### Structure for product page and ad prompts

- Structure for using ChatGPT to generate product page copy:

```
Structure for using ChatGPT to generate product page copy:
1. Provide product category and name.
2. List product benefits found from competitor research.
3. Define your role: "You are a professional copywriter."
4. Ask specific question: "Provide a one-line USP for this product that shows the benefit and differentiates from normal [alternative]." Then iterate on the response.
5. For bullet points: "Provide four benefit-driven bullet points (not features) describing what customers will experience when using this product."
6. For FAQ: "Generate four common questions and answers for our product."
7. For paragraphs: "Provide a two-to-three-line paragraph that describes [specific aspect] in a benefit-driven tone."
8. For rewrites using another product as reference: "I have this copy for another product [paste example]. Generate similar copy for our product [product name]." ChatGPT retains context throughout the thread, so you can refer to previous examples and ask for variations.
```
[L0321, undated]

- Bottom-of-funnel ad prompts: ask Claude or ChatGPT for four testimonial, free gift or benefit BOF ad prompts, or for primary text variations based on your customer research. You can also analyse a competitor ad. The source states this takes about 20 minutes. [L0316, 2026]

```
Make me four [testimonial/free gift/benefit] bottom-of-funnel ad prompts for ChatGPT
Based on my customer research, make me primary text variations for a BOF ad.
What makes this ad work? Create a prompt so I can make similar ads for my niche.
```
[L0316, 2026]

- When giving a generated prompt to an AI, a prompt that asks for an urgency offer can be built from the product, price point and niche. [L1382, undated]

### Product copy, descriptions and ads

#### Store copy

- Shopify Magic is a built-in AI tool available in all plans for rewriting product copy. Highlight text, click Shopify Magic, and select Rephrase, Extend or Simplify. [L0036, 2020-26]
- ChatGPT is used to generate product page copy, headlines, benefit points, FAQs and alternative wording for existing copy. [L0321, undated]
- Claude is used to turn copied product data and screenshots into a product page template, product description, testimonials, FAQ and collapsible tab text. Sonnet 4.6 was the model in the lesson. Check every output by hand before publishing, because the model can state things that are not true. [L1188, 2026]
- ChatGPT is used to write copy and scripts for the agency and dropshipping business, including cold calling scripts, cold emails, ad copy, product descriptions, business names, colour combinations and blog posts. [L0440, 2023+]
- Read any generated copy against your store's facts and offer details before publishing. [L1287, 2025]
- Google Docs is the editing stage for AI drafts. Insert a [Product Grid] placeholder where the grid will go, so the copy can be placed above or below it during editing. [L0883, 2025-26]
- Claude MCP can connect Claude to a Shopify store so it can read and write store data. It is used for bulk meta-field and internal link updates, but changes should be reviewed before they are applied. [L1269, 2025-26]

#### Demo and photo-based descriptions

- Demo product descriptions: paste the description prompt into ChatGPT, attach the AI-generated product image, and let the AI infer realistic product details from the visual before copying the completed description. [L0088, undated]
- Enter the full Demo Product Description Prompt, which starts with `You are a professional e-commerce copywriter specializing in high conversion Shopify product pages for premium products`, into ChatGPT. Attach an image file you created in Gemini to generate a professional product description. [L0219, 2020-26]
- AI product descriptions from photos were not possible with the ChatGPT version used at the time, since image input was not allowed. The workaround is to describe the product in text: its features, materials and target customer. Then ask the AI to write the description aimed at that customer. [L0353, 2023]
- After an image is uploaded to ChatGPT, the image view shows Markup, Comment, Remove BG, Erase, Resize and Describe buttons. These make a small area change more precise than a text-only request. [L0333, 2026]

#### Ads, offers and strategy

- ChatGPT can write product descriptions, ad copy and ad strategy ideas for an ecommerce store. It is the main AI writing tool in the lesson, with OpenAI's Playground as an alternative interface. [L1416, 2023+]
- An AI chat tool can suggest which urgency offer fits a specific product. Give it the product, price point and niche, ask for time-limited offers such as a free shipping window, and keep only the ideas that fit the product margin. [L1382, undated; L1436, undated]
- Connecting Claude to the Facebook ad account lets you ask which campaigns are currently above or below break-even ROAS. This is a quick way to check what is working without reviewing every campaign by hand. [L1476, 2026]
- ChatGPT Professional, with web browsing and a review-reading plugin, can pull customer reviews from a product listing to find audience language and objections. [L0524, 2023]

#### Custom store code

- ChatGPT can generate custom Shopify code, such as a custom section that adds AI-powered calculators or widgets, including store locators that search by ZIP code. Native Shopify does not include a ZIP code store locator. [L0472, 2025]
- GPT Engineer is an open-source AI project that can write full code bases from a prompt. AI tools can speed up building, but users still need development knowledge to make the output work properly. [L0709, 2017+]
- AI assistants can build store features from plain text instructions. Someone with development knowledge must check and fix the results, because the code may not work correctly without it. [L0709, 2017+]

### Images, voice and transcription

#### Image tools

- The image generation layer of the email stack uses Higgsfield or ChatGPT Image 2, and is optional. [L1361, 2025-26]
- Higgsfield is also listed among the connectors in Claude, next to Klaviyo, Slack, Google Drive and Brandfetch. [L1506, 2025-26]

#### Voice input

- The Chrome extension `Voice Control for ChatGPT` lets you press the space bar and speak your prompt instead of typing it. It speeds up long briefs, such as long product and customer descriptions. [L0516, 2023]
- A browser voice-input extension for ChatGPT lets you dictate a prompt with a hotkey instead of typing it. This speeds up back-and-forth iteration on ad copy when you supply product details. [L0524, 2023]
- Dispatch (Beta) connects Claude Cowork to the Claude mobile app, so a running content task can be checked and answered from a phone. Keep Claude open on the laptop while the task runs, check progress every few minutes on the phone, and return after 20 to 30 minutes to edit the finished articles. [L0883, 2025-26]

#### Transcription

- Grok (X/Twitter's free AI) is used to transcribe long videos and coaching call replays. It is faster and more reliable than ChatGPT for long-form transcription. [L0255, 2025]
- For long transcripts that ChatGPT repeatedly cut off, Grok (grok.com, free) completed the job in a single pass. Use it when you need a full, uninterrupted text conversion. [L0972, 2025]
- Otter.ai can convert a recorded video or call into a text transcript. Paste the transcript into an AI tool for summaries and search. [L0966, 2025]
- rev.com is a transcription service used for long recordings, priced at about $1.25 per minute. Dictation on your computer works for short texts, and a recording can be sent for longer material. Older advice from 2020. [L0852, 2020]

### Other AI writing and marketing tools

- copy.ai is an AI copywriting tool that scans the web for best-performing copywriting. It provides inspiration for writing ad copy and product descriptions. [L0206, undated]
- Copy.ai is an AI writing tool used to generate ideas and draft product descriptions. It is not a substitute for editing and human copywriting. Older advice from 2021. [L0801, 2021]
- An AI product-description tool based on GPT-3 cost $97 per month and offered a seven-day free trial without a credit card. It produced a unique description in about five seconds per product. Older advice from 2020, so check current pricing. [L0468, 2020]
- An AI Tool for Product Descriptions and More was listed as a resource in the December 2020 coaching call for generating product copy. The lesson names it without naming the tool or describing its use. Older advice from 2020. [L0426, 2020]
- Grammarly, as a free Chrome plugin, checks grammar, repeated words and writing quality in real time as you compose emails to suppliers. Available at grammarly.com. [L0251, 2023]
- Grammarly flags written copy that can be stated more clearly or succinctly. Its paid version shows more suggestions than the free one. An AI can perform the same tone rewrite on request, so a separate grammar or tone-checking step is optional. [L0353, 2023]
- Compose.ai can draft marketing emails for an ecommerce store. It can also write texts and SEO blog articles. [L1416, 2023+]
- An agent wrapper for ChatGPT (reworked.ai) can research a product from its website and write ad copy on its own. It needs a paid account, an OpenAI API key and billing details, and it charges per task. The lesson's example of 25 tasks cost about 14 cents. [L1427, 2023+]

#### Setting up an agent-style ad writer

1. Get a paid account for the agent tool. [L1427, 2023+]
2. Create an OpenAI API key. [L1427, 2023+]
3. Add billing details, since each task is charged. [L1427, 2023+]
4. Enter the API key into the agent tool. [L1427, 2023+]
5. Give a goal, such as researching the product from its website and writing an ad with the problem-agitate-solution framework. [L1427, 2023+]

#### Free tiers and recommended tools

- ChatGPT Playground was among four AI tools recommended in the lesson, with Runway ML, Compose.ai and DALL-E. All four were presented as free to use, though free tiers and access terms can change. Verify each platform before relying on it. [L1428, undated]
- Workflow automation tools such as n8n or Claude Code connect AI assistants and platforms with other software. Not every software has an open API, so some connections need a different approach. [L0485, 2025-26]
- Zapier is an automation tool that can connect the AI workflow to other services. It is mentioned as a reason to consider a paid ChatGPT plan. [L0353, 2023]
- Zapier connects apps to automate workflows, such as moving generated copy into a spreadsheet. [L0524, 2023]
- Google Sheets can integrate with Claude Code via API, for example by pushing updated forecasts to new sheets. The integration is not yet fully reliable and may require setting up Google APIs manually. Expect this capability to improve significantly. [L0218, 2025-26]

### Claude desktop app, Cowork and Claude Code

#### Installing and plans

- The Claude desktop app bundles Chat, Cowork and Claude Code in one application. It is available for macOS and Windows (x64 and arm64), and the Claude mobile apps for iOS and Android can be paired with it. [L1506, 2025-26]
- Cowork and Claude Code on the Claude desktop app require the Claude Pro plan. [L1506, 2025-26]
- Sign up for Claude with a paid plan, which the stack recommends, before using Claude Cowork. Alternatives are ChatGPT Codex at chatgpt.com/codex and Claude Code at claude.com/claude-code. [L1361, 2025-26]
- Download Claude only from the official claude.com download page, because look-alike sites are used for phishing. On a Mac, use the Download for macOS button on that page. [L1506, 2025-26]
- Terminal is needed to install and run Claude Code and to run the Claude CLI. The check command `claude -version` confirms the installation. [L1361, 2025-26]
- Claude Cowork is the native desktop app, which the source calls Cord. Use the desktop app, not the web browser version, to access Opus 4.6 and the large context windows needed for P&L processing. [L0218, 2025-26]
- Watch the complete walkthrough once before setting up anything in this email workflow. Then reread the written instructions and follow them step by step in order. [L1506, 2025-26]

#### Cowork

- Claude Cowork is a project management interface within Claude. You create dedicated projects, manage file folders, set model preferences (for example Opus 4.7), and invoke MCPs to gather and process brand data. [L0318, 2025-26]
- Model choices recorded across the courses differ by date, so use the model the current interface offers:
  - Opus 4.6 for Cowork processing of P&L files. [L0218, 2025-26]
  - Opus 4.7 for Brandfetch MCP tasks, selected because it was the most powerful model available at the time. [L0318, 2025-26]
  - Opus 4.8 High shown in the project model selector for the email template workflow. [L1506, 2025-26]
- When invoking an MCP tool such as Brandfetch, the `act without asking` toggle controls warnings and confirmations. With it disabled, all warnings are shown and Claude pauses for review. With it enabled, the tool runs immediately without stopping. [L0318, 2025-26]
- Approval mode is chosen per project under the model selector. `Ask before acting` makes Claude pause for approval of each action. `Act without asking` lets Claude work without pausing, which is the mode used for the email template setup. [L1506, 2025-26]
- Leave `Act without asking` switched off for Chrome, because the email template workflow does not need browser control. [L1506, 2025-26]
- The project page has a `Set up recurring tasks` option, which schedules repeated work for that project. [L1506, 2025-26]
- After a skill is started from the slash menu, Claude asks follow-up questions for each input it needs and then builds the templates. The user does not need to type an extra prompt. [L1506, 2025-26]
- If Cowork blocks some commands, open the Claude Code terminal and run the command there. This is the fallback for commands Cowork refuses to execute. [L1506, 2025-26]

#### Claude Code and VS Code

- Visual Studio Code is a free IDE that integrates Claude Code for advanced financial forecasting beyond what Cowork can handle. [L0218, 2025-26]
- Claude Code uses a `claude.md` file, where Codex uses an `agents.md` file, for the same purpose: standing instructions for a folder. Both work in a similar way. [L0366, 2025-26]
- Cowork and ChatGPT Codex perform at roughly the same level for the email workflow, so the choice comes down to personal comfort. Claude Code is an acceptable alternative for users who already work in it. [L1361, 2025-26]
- Claude Code file management: use Python to read and write xlsx and csv files directly from the project folder instead of asking the user to copy and paste. When new files appear in the folder, immediately identify them, add them to DATA_INVENTORY.md, and surface the top 3 insights. [L0218, 2025-26]

Setup procedure for Claude Code in VS Code:

1. Download Visual Studio Code (free). [L0218, 2025-26]
2. Open Extensions and search for `Claude`. [L0218, 2025-26]
3. Install Claude for VS Code by Anthropic. [L0218, 2025-26]
4. Click Trust Publisher to allow the extension. [L0218, 2025-26]
5. Open the Claude website to authorise your subscription. [L0218, 2025-26]
6. Create a new folder named `Claude_CFO` (no symbols). [L0218, 2025-26]
7. Open the folder in VS Code and select Trust. [L0218, 2025-26]
8. Drag the CFO operating prompt MD file into the project folder. [L0218, 2025-26]


Part 7 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/06-hiring-and-freelance-talent.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/08-connectors-and-integrations-mcp.md
