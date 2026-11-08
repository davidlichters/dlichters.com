<!-- part of ecom/deep/05-apps-and-tools.md -->
Part 8 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/07-ai-assistants-and-custom-ai-workflows.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/09-product-competitor-and-ad-research-tools.md

### Connectors and integrations (MCP)

- A connector is the name for an MCP (Model Context Protocol) integration that lets Claude read and write to a software tool. Connectors are managed in `Customize > Connectors`. [L1506, 2025-26]
- To add a custom connector, go to `Customize > Connectors` and choose to add a custom connector. Enter the name and details given in the course. The connector then appears in the list, for example Klaviyo, Slack, Google Drive, Higgsfield and Brandfetch. [L1506, 2025-26]
- Connector tool permissions are set per connector with `Always allow`. The Brandfetch connector offers read-only tools such as Search Brands, Build Logo URLs, Get Brand Details and Get Brand Context, which are set to `Always allow`. [L1506, 2025-26]
- In `Customize > Connectors`, Klaviyo is listed under a `Not connected` heading until it is linked. Check this status before starting any email work. [L1506, 2025-26]

#### Brandfetch

- Brandfetch MCP scrapes a brand's own website and pulls its brand voice, colours, fonts and other identity elements into a brand kit. The kit is then used to style the universal content blocks. [L1361, 2025-26]
- Brandfetch requires a developer account at the Brandfetch developer portal (brandfetch.com), where a private API key and client ID are generated. The MCP is installed with that key, and the Pro plan is recommended for the sign-up. [L1361, 2025-26]

#### Klaviyo

- Klaviyo MCP connects the AI tool to a Klaviyo account, so the AI can read existing data such as campaigns and subscriber information, and write new email content back into Klaviyo. [L1361, 2025-26]
- Klaviyo requires a private API key generated in the Klaviyo developer portal (developer.klaviyo.com) to connect the AI tool. [L1361, 2025-26]
- Do not install the Klaviyo MCP connector for the template workflow. The source calls it flawed and very limiting, and says it does not allow the template and content block work that is needed. [L1506, 2025-26]
- Connect Claude to Klaviyo directly through the Klaviyo API, using the Python scripts supplied inside the skills, rather than through the Klaviyo MCP. The API connection is significantly more capable and covers the full template workflow. [L1506, 2025-26]
- The older setup check still lists the Klaviyo MCP as one of its three checks, so when the two disagree, follow the template-workflow instruction for Claude desktop: use the API. [L1361, 2025-26; L1506, 2025-26]

### Custom AI assistants and Claude projects

#### What a custom assistant is

- A custom AI assistant is a general LLM such as Claude or ChatGPT loaded with your own instructions, product information, templates and step-by-step processes. At minimum it can read and produce any text task. Visuals depend on the platform and LLM used. [L0485, 2025-26]
- In Claude, a project holds the assistant's instructions and reference files. The instructions specify how to create particular ad types or how to research ideas, and the files provide brand-specific information. [L0485, 2025-26]
- A custom assistant's output quality depends on the instructions: a large body of detailed instructions, based on a proven system, keeps the output on the right path. The assistant then produces research documents, scripts and visual assets from the information it was given. [L0485, 2025-26]
- A generic LLM without brand-specific instructions and files produces generic research based on general sources such as platform guidelines or old top search results. This dilutes the messaging and can lead to a poor creative path. [L0485, 2025-26]
- Example kickoff prompt for a market study. Before sending it, upload the product description and the brand's internal strategy documents into the assistant's workspace, so the study follows your own methodology rather than generic sources. Specify that the results arrive in the layout your templates prescribe.

```
Hello Magnus. First go through the attached product description, and afterwards run a market study for our label.
```
[L0485, 2025-26]

#### Files and capacity

- Reference files for a Claude project can be uploaded as Markdown (.md) or Word (.docx) files. The format affects how easily the assistant reads them. Markdown is generally easier for AI to parse, so mixing formats is workable, but plain-text files are the better default. [L0485, 2025-26]
- The Files panel of a Claude project shows a capacity indicator with the percentage of project capacity in use. In the example, about ten brand files used 15% of capacity. [L0485, 2025-26]
- For the script prompt to produce a usable script, add five reference files to the Claude project: a voice guide, a structure library, a banned word list, an avatar, and a psychology lens. Without these files the script stays generic and must be checked by hand. [L1140, 2026]

#### Building workflows with AI

1. Describe the outcome you want in plain language. [L0485, 2025-26]
2. Ask Claude to design the workflow that achieves it. [L0485, 2025-26]
3. Ask Claude to build it in the workflow tool or as code. [L0485, 2025-26]
4. Check the result manually for mistakes and holes in the process before relying on it. [L0485, 2025-26]

### Email AI stack

- The AI email stack in this course has four layers:
  - AI builders for planning and template work: Claude Cowork as the main tool, ChatGPT Codex as an equal alternative, and Claude Code only if preferred. [L1361, 2025-26]
  - An image generation layer, Higgsfield or ChatGPT Image 2, which is optional. [L1361, 2025-26]
  - A brand identity layer: Brandfetch MCP extracts brand voice, colours and fonts from a website. [L1361, 2025-26]
  - The email platform Klaviyo, connected through the Klaviyo MCP (or, for the template workflow, the API) so data can be read and written between the AI tool and the account. [L1361, 2025-26; L1506, 2025-26]
- The email stack's skills run as slash commands inside Claude Cowork:
  - `/email-template-builder` for reusable blocks. [L1361, 2025-26]
  - The email flow builder skill for flows. [L1361, 2025-26]
  - `/email-draft-review` for draft checks. [L1361, 2025-26]
  - `/email-domain-audit` for deliverability. [L1361, 2025-26]
  - `/email-strat-plan` for campaign planning. [L1361, 2025-26]
- Foundation stage: install every tool from the course bundle zip and set up a working stack with a defined folder structure before any email content is built. Nothing else should start until this stage is complete. [L1361, 2025-26]

Setup verification for the AI email stack in Claude Cowork:

1. Ask Claude Cowork to list your Klaviyo campaigns through the Klaviyo MCP. [L1361, 2025-26]
2. Ask it to look up your brand domain with Brandfetch. [L1361, 2025-26]
3. Type `/email-template-builder` to confirm the template skill is available. [L1361, 2025-26]

All three checks should respond. If one fails, fix the corresponding tool or connection before continuing. [L1361, 2025-26]

### AI agent folders (Codex and Claude Code)

#### Concepts and set-up

- Codex is a desktop app from ChatGPT that can run AI agent folders on your computer. As of May 2026 it was recommended for beginners over Claude Code, because you link your existing ChatGPT account and set-up is simpler. [L0366, 2025-26]
- Codex and Claude Code can be compared as follows. Claude Code is the folder-instruction tool with claude.md, and Codex uses agents.md. For the email workflow, the two are comparable in level. [L0366, 2025-26; L1361, 2025-26]
- The agents.md file is the most important file in an agent folder. It holds the standing instructions that shape how the AI behaves in that folder. [L0366, 2025-26]
- Agent folders can be downloaded from GitHub, which also makes it possible to deploy and update them later. A downloaded folder is then opened locally in Codex. [L0366, 2025-26]
- Create one dedicated AI folder on your computer and place agent folders inside it. Anything dragged into that folder structure is visible to the AI, so keep sensitive data such as credit card details out of it. [L0366, 2025-26]
- Keep one master AI folder on your computer and place each agent folder inside it as a subfolder. Open each agent folder separately in Codex, because each opening starts its own chat scoped to that folder. [L0366, 2025-26]
- To connect an agent folder, open Codex and go to `File > Open folder`, then select the agent folder. Codex starts a new chat scoped to that folder. [L0366, 2025-26]
- In the Codex chat window, the access setting is at the bottom and set to `Full access` for this agent, so the agent can run without asking for each action. The model is set to 5.5 with reasoning effort at Extra High, shown in the same selector. [L0366, 2025-26]
- In the Codex chat composer there is a `Toggle /Fast` option that makes responses faster. Codex may suggest enabling it based on past usage, and it increases plan usage. Keep Extra High reasoning for careful agent work where depth matters more than speed. [L0366, 2025-26]
- Review and Undo: after an agent edits files, Codex shows a count such as `Edited 3 files` with Undo and Review buttons. Review lists each changed file with its line changes, for example +9 -2 for nine lines added and two removed. Check every change before keeping it, and use Undo to revert. [L0366, 2025-26]

First start of a downloaded agent folder:

1. Download the agent folder, for example from GitHub, and place it inside your dedicated AI folder. [L0366, 2025-26]
2. Open Codex and go to `File > Open folder`, then select the agent folder. [L0366, 2025-26]
3. Set access to `Full access` and the model to 5.5 with Extra High reasoning. [L0366, 2025-26]
4. Start a new chat and send the security-check prompt before anything else runs. [L0366, 2025-26]
5. Open the handoff document and the startup prompt file yourself and read them, if you want to see them directly. [L0366, 2025-26]
6. Read the agent's explanation of what will happen and check that it matches what you want. [L0366, 2025-26]
7. Click go to load the agent and start its workflow. [L0366, 2025-26]
8. Answer the setup questions the agent asks before it begins searching. [L0366, 2025-26]

Security-check prompt:

```
Please explain what is inside this folder and what it is for. It is a project I want to start working on. Check whether anything in it is malicious or could harm my computer or my data. Then explain step by step what will happen when we start, beginning with an analysis of the handoff document and the startup prompt, so I know what I am agreeing to before anything runs. Do not change, send, or delete any files yet.
```
[L0366, 2025-26]

- Running an unfamiliar agent folder with Full access before checking its contents for malicious instructions or files is risky. Always read the handoff and startup files and ask the AI to explain the workflow first. [L0366, 2025-26]

#### Setup questions and what agents do

- The agent's setup questions show what it needs before it searches: the target role or candidate type, what a strong fit and a disqualifier look like, where proof of work can be found, and any example people, companies, websites or keywords to start from. Clear answers make the first pass more useful. [L0366, 2025-26]
- Recruiting-style agents are built to search public sources only, unless you explicitly approve something else. They add qualified candidates to a tracking CSV with evidence, scores, rankings, risks and next steps. [L0366, 2025-26]
- The agent must not contact anyone, submit forms, share lists, change permissions or update outside systems unless you explicitly approve that exact action. Ask for this approval in writing for each external step. [L0366, 2025-26]
- Scope file searches and reads to the agent folder unless you explicitly ask for a wider search. Writing this rule into agents.md keeps the agent from browsing unrelated files on your computer. [L0366, 2025-26]

Files in a recruiting agent folder:

| File | Purpose |
|---|---|
| AGENTS.md | Standing instructions for the agent: rules, boundaries and how to behave in this folder |
| START-HERE-PROMPT.md | Startup prompt that tells the agent how to begin the workflow |
| HANDOFF.md | Beginner-facing setup and execution guide for the agent kit |
| growth-mentor-sourcing.md | Role-specific sourcing playbook with candidate qualification rules |
| role-sourcing-template.md | Copyable template for creating a new role-specific sourcing playbook |
| growth-mentor-candidates.csv | Working candidate tracker, where qualified people are logged |
| starter-candidates.csv | Starting list of candidates the agent works through first |

[L0366, 2025-26]

#### Getting unstuck and improving agents

- When an agent keeps giving wrong answers or misunderstands the task, the fix is usually a change to agents.md rather than repeated prompting. Asking the agent to update agents.md after each repeated error makes its later responses more accurate. [L0366, 2025-26]
- Standing safety prompt for a beginner, which also makes the agent keep agents.md up to date:

```
I am a beginner. Please always run the security checks before doing any work in this folder, and explain each step in simple language. Add these instructions to agents.md so you follow them in future sessions. Update agents.md whenever the same mistake repeats or when we learn something new in this process.
```
[L0366, 2025-26]

- When you get stuck, ask the AI first, for example when a folder asks for an integration that does not exist, before asking a mentor. Agents can usually propose a workaround or a custom tool. [L0366, 2025-26]
- Example: an agent may report that it cannot push files to Google Drive because no Google Drive integration exists. Ask the AI how to work around this, for example by saving a local file that is then uploaded manually or by building a small custom tool. [L0366, 2025-26]
- An agent folder can be used for YouTube scripts, creative ideas and recruiting. A recruiting scraper can search LinkedIn, YouTube and Twitter for potential clients. Any agent can be used for a new project, provided its instructions are set up correctly. [L0366, 2025-26]

### AI limits and verification

#### How AI produces answers

- A large language model such as ChatGPT or Claude predicts the most useful next output based on the text it was trained on. It does not produce original insight from nothing, so its answers are only as good as its source material. [L1478, 2025-26]
- AI output quality depends entirely on the training material it is given. If the sources are wrong, outdated or unproven, the answers will be unreliable even when they sound confident. [L1478, 2025-26]
- When a general AI model draws on many conflicting marketing opinions, it averages them into a watered-down answer that commits to no clear path. Broad questions without a defined source for marketing topics produce this diluted result. [L1478, 2025-26]
- Because AI is trained to avoid mistakes, it falls back on safe, generic answers when it is unsure which source is best. Always state the exact sources, definitions and step-by-step method the AI should follow instead of leaving this open. [L1478, 2025-26]
- A single trained person can only do one task at a time, whereas trained AI agents can apply the same proven instructions across many tasks at once. This is the main reason to build a repeatable, well-instructed system for AI. [L1478, 2025-26]
- Generative AI works by predictive generation: the model outputs what would be most useful to say next, based on the question and everything it was trained on. Terms such as predictive modelling describe the same process, so a different label does not change how the answer is produced. [L1478, 2025-26]
- Large language models such as ChatGPT and Claude are trained on mixed text sources, including books, blogs, essays, forum and social media posts, Wikipedia, and other web pages. Their answers reflect that mix, so topics with conflicting opinions, like marketing, produce inconsistent results. [L1478, 2025-26]
- A model trained only on a 300-year-old science book can answer questions from that book well, but it cannot propose new experiments or ideas beyond what the book contains. Its output is limited to the scope of its training material. [L1478, 2025-26]
- Chat assistants perform well on general questions largely because they can draw on the wider internet. Broad access to sources does not mean the answer is proven for a specific business task, so the source material for that task still needs to be chosen deliberately. [L1478, 2025-26]

#### Verification

- Every generated list, email or statement must be checked before publishing. AI tools such as ChatGPT and Gemini sometimes produce incorrect answers. [L1287, 2025]
- ChatGPT is not reliable for current trend data, such as lists of the top dropshipping products for the coming period or exact market numbers. Verify any figures it gives before using them, and use it mainly for text and ideas. [L0605, undated]
- Many prepackaged AI dropshipping tools are thin wrappers around general chat models such as ChatGPT, Claude, Copilot or Grok, and are often built on outdated technology. Using the general models directly is usually cheaper and more current. [L0972, 2025]
- Do not use an unfamiliar agent folder with Full access before checking its contents. [L0366, 2025-26]

#### Changing features and limits

- ChatGPT's web browsing was switched off temporarily after users found ways to bypass privacy controls through links. AI tool features such as web search can be removed or changed without notice, so check current availability before building a workflow on them. [L0353, 2023]
- Pro plans have character limits, so long documents may need to be shortened. [L1427, 2023+]
- The four AI tools recommended in this lesson (ChatGPT Playground, Runway ML, Compose.ai and DALL-E) were presented as free to use. Free tiers and access terms can change, so verify each platform before relying on it. [L1428, undated]
- Free-plan limits and file import rules, such as the Gemini login requirement and the Claude free-plan message cap, change over time. Check them on the platform before planning a large job around them. [L0374, 2026; L0862, 2026]

#### Security and sources

- Download AI apps only from the official site. Look-alike sites are used for phishing. [L1506, 2025-26]
- Scope agent access to the folder you opened, and keep sensitive data out of any folder the AI can read. [L0366, 2025-26]

#### Further details

Quick comparison of the two recommended AI chat tools for beginners:

| Feature | ChatGPT | Claude |
|---|---|---|
| Ease of use | Very beginner friendly | Also simple |
| Best for | Marketing, ideas, copywriting | Deep thinking and structured answers |

Both tools are strong enough for store work, so the choice matters less than starting to use one daily.
[L0887, 2026]


Part 8 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/07-ai-assistants-and-custom-ai-workflows.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/09-product-competitor-and-ad-research-tools.md
