<!-- part of ecom/deep/14-seo-and-content.md -->
Part 18 of 30 of "14. SEO and Content: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/14-seo-and-content.md · Previous: https://dlichters.com/ai/ecom/deep/14-seo-and-content/17-image-seo-visual-search-and-compression.md · Next: https://dlichters.com/ai/ecom/deep/14-seo-and-content/19-links.md

## Blog and Content Page Writing Standards

### Choosing the Page Type and Focus Keyword

- Decide per content piece whether it becomes a page or a blog post. Use a page for evergreen tools and static resources, such as a height chart calculator. Use a blog post for evergreen guides and how-to articles, such as how long to stand at a standing desk or how to customize one. Blog or page makes little difference to rankings. [L1321, 2020-26]
- Select a focus keyword and identify the relevant search terms before writing. [L0311, 2021-22]
- Choose an informational topic rather than a product page when the keyword is informational, because a product page would not rank for it. Example: the keyword *lined vs unlined running shorts* was handled as an informational article. [L0883, 2025-26]
- Take the topic and target keyword from your keyword research worksheet and from popular threads on community sites in your niche. [L1321, 2020-26]
- Study a strong reference page for its structure (sections, headings, spacing, link placement) rather than copying its design. The structural elements matter, not custom graphics. [L0462, 2021-22]
- There is no one-size-fits-all blog post. The best content depends on the market. A structure checklist defines how the page is built, not what it must say. [L0462, 2021-22]

### Researching the Top Results Before Writing

**Setup**

- Keyword research setup in Firecrawl: search engine Google, country US, analyze the top 10 organic results, and extract page copy and entities from each result. [L0883, 2025-26]
- Firecrawl MCP connected to Claude searches Google, scrapes the top-ranking pages, and returns their copy, headings and entities for Claude to use in the writing. Reddit may block direct scraping. In that case, search snippets and debate articles on the same topic can supply the pain points. [L0883, 2025-26]
- When generating page copy with a web research tool, have the model list the entities it extracted from the top 10 Google US results before it writes. Check that list first, then accept or remove topics, so the draft is built on terms you verified. [L0883, 2025-26]
- Always make the research step part of the prompt. Without an explicit instruction to research the top 10 results, the AI often skips the crawl and writes a generic article that blends all sources. [L0883, 2025-26]

**Pattern analysis**

- Build a pattern analysis table from the top 10 results before writing. Record the median word count and the target range (median plus or minus 100 to 200 words) below the table. [L0883, 2025-26]

| Rank | URL | Word count | H2 count | H3 count | Bullet points | Table | FAQ | Conclusion | Main entities |
|---|---|---|---|---|---|---|---|---|---|
| 1 | [URL] | [number] | [number] | [number] | yes/no | yes/no | yes/no | yes/no | [list] |
|... |... |... |... |... |... |... |... |... |... |
| 10 | [URL] | [number] | [number] | [number] | yes/no | yes/no | yes/no | yes/no | [list] |

[L0883, 2025-26]

- Match the heading structure of the top 10: count H2s and H3s and note whether competitors use bullet points, tables, FAQs or a conclusion. If all competitors use bullets and you use H2 or H3 headings or a table where they do not, the page can lose ground. [L0883, 2025-26]
- Copy the structure of top results, not their text. Aim for the average of the top 10 on length and format, then add a small amount of unique material to pull ahead. [L0883, 2025-26]
- Entities are the related terms and topics that top-ranking pages for a keyword cover, such as features, use cases, activities and measurements. For men's running shorts they included liners, anti-chafing, sprinting, long distance, marathons and mileage. Work these into the copy naturally. [L0883, 2025-26]

**Pain points and originality**

- Forums and Q&A threads (Reddit, Quora, Facebook groups) are a source of real customer concerns and pain points only, never a format to imitate. Use the pain points as substance without mirroring the forum's style. [L0883, 2025-26]
- Put your own angle and research into the content. Rewriting a competitor's reviews with a few words changed counts as plagiarism and is not an acceptable way to compete. [L0961, 2020]
- Blog and product content must be written in the store's own words and based on its own ideas, even when the topic overlaps with competitors. Guest posts from other writers are acceptable. A comparison article such as a top 10 list should use the store's own selection and copy. [L1069, 2019]

**Worked case: lined vs unlined running shorts** [L0883, 2025-26]

- Keyword chosen as an informational topic, because a product page would not rank for it.
- Firecrawl pulled the top 10 Google US results. The top informational results ran about 1,200 to 1,800 words: one at about 1,800 words (9 min read), one at about 1,600 words (7 min read), and one at about 1,000 words.
- Median target set at about 1,500 words.
- Reddit blocked direct scraping, so pain points came from search snippets and a long forum-style debate article.
- Shared heading skeleton: short intro, what lined and unlined shorts are, a comparison table, when to choose each by activity, distance and climate, care and durability (competitors cited a liner lifespan of 6 to 12 months versus 2 to 3 years), an FAQ, and a conclusion with a soft call to action.
- Pain points used as substance:
  - Short runs favor lined shorts, while ultras of 50K and more favor unlined shorts with your own underwear.
  - Liners exist mainly for support and anti-chafing.
  - A brief liner edge can chafe.
  - A seam in the wrong place can ruin a run for days.
  - Changing in and out of lined shorts in public is a hassle.
  - Some runners prefer their own boxer briefs to an unknown liner.
  - Liners wick moisture and resist odor better than ordinary underwear.
  - In winter, runners wear tights under unlined shorts.
  - Lined shorts need washing every time and dry more slowly.
- One extra angle beyond the top 10 was added.
- The run took about two minutes and produced an article ready for editing.

### Length

**Length by source**

| Source | Figure | Applies when | Ids |
|---|---|---|---|
| one source (undated) | Standard blog article 500 words; about 1,000 words for high-search-volume keywords | Standard keywords: 500. High volume: about 1,000 | [L0380, 2014] |
| one source (undated) | Blog posts at least 1000 words wherever possible | Style guide baseline | [L1467, undated] |
| one source (undated) | Articles of 1,000 to 2,000 words rank best. Shorter articles tend to rank poorly. | The right length depends on the topic. A short article is acceptable when the subject can be fully covered in fewer words. | [L0382, 2017] |
| one source | At least 1200 words; no upper limit | Minimum for blog posts | [L0311, 2021-22] |
| one source | 1800 words or longer performs best in search | Best-performing content | [L0311, 2021-22] |
| one source | At least 1500 words | Minimum for the checklist | [L0462, 2021-22] |
| one source | 300 or 500 word posts are almost always a waste of time; written content should generally exceed 1,500 words | Search results increasingly favor deep content | [L1461, 2021-22] |
| one source 2025-26 | Median of the top 10 results plus or minus 100 to 200 words | Preferred method for each keyword | [L0883, 2025-26] |

**Working rules**

- Calculate the median word count of the top 10 ranking pages and aim for the median plus or minus about 100 to 200 words. Example: if the median is 1,700 words, write roughly 1,500 to 1,900 words. [L0883, 2025-26]
- Overshooting the median is a mistake. A 4,000-word article when the median is 1,700 merges every competitor's points into one long piece that does not match what ranks, so it will not rank. Undershooting is equally wasteful, so keep the length within the median range. [L0883, 2025-26]
- Blog posts are an excellent place to show depth, but the sources differ on the minimum. Apply the median method first. Use the one source floors (1200 or 1500 words) and the one source 1,000-word figure as checks, not as separate targets. [L0883, 2025-26; L0311, 2021-22; L0462, 2021-22; L1467, undated]
- Top results average about 1,443 words on the page for the number one position. This is an average and a trend, not a fixed target. [L1461, 2021-22]
- Pages ranking in positions 1 to 4 on Google had high word counts, and average length fell steadily for lower positions down to page ten. [L1461, 2021-22]
- Length does not hurt a post, since readers scroll. What matters is that the structure is easy to scan. [L0462, 2021-22]
- Long posts (for example around 5,000 words) are fine if they make the content the most complete on the topic. [L1461, 2021-22]
- Avoid thin content and duplicate content. With 1200 or more words of original content, these are not typically concerns, and longer posts tend to be the most comprehensive resource for that search term. [L0311, 2021-22]
- Social shares rose with article length. Articles of 3,000 to 10,000 words earned far more shares than those under 1,000 words, although short articles still received some shares. [L1461, 2021-22]
- In an Ahrefs and Backlinko analysis, a higher content grade from ClearScope, an online content-quality scoring tool, correlated with higher Google rankings on both desktop and mobile. Check content against a grading tool to see whether its quality is likely to rank. [L1461, 2021-22]
- Ranking signals depend primarily on content quality, depth and inbound links, but on-page optimization is still necessary to maximize results. [L0311, 2021-22]
- Also "a blog post is any page with more than 500 words of content." [L0311, 2021-22]

**Length follows the purchase**

- For considered, expensive purchases, a long and detailed explanation sells better than short copy, because buyers want the facts before deciding. Readers who take the time to read long copy are already interested. [L1261, undated]
- Short copy works only for simple, low-cost purchases. For complex products, length should cover every important claim. The rule is to make the story reasonably complete, whatever its length. [L1261, undated]

### Outline and Structure

**Prompts for the outline**

Prompt for the outline [L0178, undated]:

```
Develop a structured outline organizing the main topics and sections for a blog post about [Blog Post Name].
```

Prompt for a standing desk outline [L1321, 2020-26]:

```
Prepare an outline for a blog post on tailoring your standing desk. Provide a proposed headline, a short introduction, and the primary sections in their proper sequence. For each section, supply bullet points that a writer can develop using their own phrasing. Leave out the complete article text.
```

Prompt for subsection strategies [L1321, 2020-26]:

```
Please list strategies for [subtopic from the outline]. Give short bullet points that can be used as subsection headings in the blog post.
```

**Outline procedure with ChatGPT** [L1321, 2020-26]

1. Put the exact target keyword into the outline request, for example *customize your standing desk*.
2. Send the prompt and review the proposed title, introduction and main sections.
3. Check that each section comes with bullet points that can be expanded into paragraphs.
4. For a bullet that needs more depth, send a follow-up request for a list of ideas on that subtopic. One bullet can yield around 14 ideas.
5. Use the ideas as input only and write the final text yourself, in the Shopify blog editor or in a document editor.

**Research and outline sequence** [L0972, 2025]

1. Ask ChatGPT for an outline of what the post should include.
2. For each subsection, search Google for other content covering the same topic.
3. Collect statistics and data from those sources, and cite the source where it fits.
4. Write your own version of each subsection in your own words, rather than copying any single article.

**Topical authority sequence** [L0971, 2024]

1. Use AI to build a topical authority map for the niche.
2. Use AI to brainstorm topic ideas from that map.
3. Use AI to create an outline for each piece of content.
4. Have a human write the actual article based on the outline.
5. Customize the text before publishing it.

**Structure rules**

- After the headline, add a short overview of what the reader will learn. This keeps attention on a long post before the detailed sections begin. [L0462, 2021-22]
- Split the body at logical points: in a how-to, each step becomes a sub-headline, and in a list, each item becomes one. Many readers scan a post for the section that matters to them. [L0462, 2021-22]
- The best structure is the one the market rewards. Use the checklist and the top-10 pattern analysis to decide the skeleton. [L0462, 2021-22; L0883, 2025-26]

**Example: how-to guide page** [L1099, 2021-22]

A how-to guide page that works well shows a clear headline, a date and a short intro of two paragraphs that states what the reader will learn, all above the fold on desktop and mobile. The hero photo is kept small or omitted, because a photo of generic subject matter tells the reader nothing about the content. The body text sits in a narrow reading column even on a wide screen. The steps move from a numbered list to bullets and then to subheadings for each section. [L1099, 2021-22]

### Headings

**Heading levels**

- Use exactly one H1 per page, and make it the headline of the blog post. [L0462, 2021-22]
- Use H1 only once per piece of content, for the title. Use H2 tags for secondary headings that separate sections, as many as needed. [L1467, undated]
- H1 tags contain the main heading of a page. H2 tags organize subcategories or subtopics within H1. H3 tags further subdivide topics within H2 sections. [L0278, 2025]
- Use H2 tags for all headings after the post title, not H1. [L0311, 2021-22]
- Use H2 tags for the main sub-headlines of the body and H3 tags for sub-headlines nested under an H2. Never leave the body as one large block of text. [L0462, 2021-22]
- Use H3 tags only as subheadings inside a section marked by an H2. H4, H5 and lower heading levels should not be needed. [L1467, undated]

**Single H2 group (conflict with many H2s)**

- Use a single H2 subheading group per page to break content into chunks, since subheadings help SEO. Only at least one H2 needs the focus keyword. [L0881, 2021-22]
- Many H2 subheadings are also recommended to chunk long text. Read [L0881, 2021-22] as one H2 set for the body, and use many H2s for chunking as in the rule below. [L1099, 2021-22]

**Shopify heading setup** [L0429, 2022]

- Shopify product pages automatically wrap the product name in H1, so no changes are needed for product pages.
- For content pages, select the main title in the WYSIWYG editor and choose H1 from the text dropdown (options: body text, H1, H2, H3, H4). Then use H2 to H4 for subheadings.

**Heading content**

- Put keyword variations, synonyms and related search terms from keyword research into sub-headlines. [L0462, 2021-22]
- Use synonyms and related keywords in other H2 headings to avoid repetition of the exact focus keyword in every heading. [L0311, 2021-22]
- Format some H2 headings as questions to capture question-and-answer featured snippets. [L0311, 2021-22]
- Do not place the primary keyword in every sub-headline. Stuffing it into every sub-headline looks unnatural and is seen as overuse. [L0462, 2021-22]
- Include the focus keyword in at least one H2 heading. [L0311, 2021-22]
- AI output can add headings you did not ask for, such as a fourth H3 under a three-H3 structure. Check each output's heading count against your template and remove or merge extra headings before publishing. [L0883, 2025-26]

### Title, Headline and URL

**Title rules**

- Use the post title as an H1 heading and place the focus keyword at the front of the title. [L0311, 2021-22]
- The H1 should state clearly what the content covers or what the reader will learn, and include the primary keyword if possible. [L0462, 2021-22]
- Avoid hype, power words, over-the-top claims and click-bait headlines. Platforms such as Google and Facebook have anti-click-bait policies, and a headline that promises more than the article delivers works against the page. [L0462, 2021-22]
- Include the publication year or an update reference in the title (for example *2020 update* or *updated for 2020*), because Google prioritizes fresh content and this signals recency. [L0311, 2021-22]
- Append the word updated to the title only after the post has been genuinely revised, and do this at least once a year. [L0658, 2021-22]

**Title conflict:** [L0311, 2021-22] asks for a year or update reference in every title. [L0658, 2021-22] allows the word updated only after a real revision. Use the year on new posts. Add updated only after a genuine revision.

**Guide headline formula** [L0462, 2021-22]

- Formula: [primary keyword] + [content type such as Guide, Checklist or How-to] + optional [reader qualifier such as who it is for], with no filler words.
- Examples: *Complete Guide to Standing Desks* and *Standing Desk Checklist for Small Offices*.
- It works because the reader sees the topic, the format and the target audience at once and can judge fit immediately.

**URL**

- Create the post URL to include the focus keyword and keep it short. [L0311, 2021-22]
- Set the URL handle to the target keyword in lowercase with hyphens. [L1321, 2020-26]
- Check the URL and handle, title and description fields before saving. [L1321, 2020-26]

### Keyword Placement

- The focus keyword must appear within the first 100 words of body text. [L0311, 2021-22]
- Stuffing the primary keyword into every sub-headline looks unnatural and is seen as overuse. Use related terms and variations instead. [L0462, 2021-22]
- Work the entities from the research step into the copy where they fit, so the page covers the terms top results cover. [L0883, 2025-26]

### Paragraphs, Font and Readability

**Paragraph length (sources differ)**

| Source | Rule | Applies when | Ids |
|---|---|---|---|
| one source | Use short sentences and short paragraphs | General readability | [L0311, 2021-22] |
| one source | Maximum of four lines, shorter where possible | Checklist limit | [L0462, 2021-22] |
| one source | Short paragraphs of two to three lines | Content areas and readability | [L1099, 2021-22] |
| one source (undated) | About 3 lines, never more than 4 | Style guide | [L1467, undated] |

- Use a short sentence and paragraph structure throughout, with paragraphs of about 3 lines and never more than 4. [L0311, 2021-22; L1099, 2021-22; L1467, undated]
- Avoid dense blocks of text. Dense blocks make reading and comprehension harder. [L0462, 2021-22]

**Font size**

- Set primary body text to a font size of 18 point. [L0311, 2021-22]
- Use a minimum font size of 18 pt for body text, because smaller text becomes hard to read, especially on mobile devices. [L0462, 2021-22]
- Set body text to font size 18 so the page has more white space and is easier to read. [L1099, 2021-22]
- Small text makes readers give up. The same problem appears on mobile when the font is smaller than 18 pt. [L0462, 2021-22]

**White space and column width**

- White space around text helps the eye process a page. Generous line spacing is part of the same readability rule. [L0462, 2021-22]
- Narrow long text blocks with a CSS max-width so paragraphs do not span a full wide desktop screen. Narrower columns are easier to read because the eyes travel less. [L1099, 2021-22]

### Lists

- Use bulleted lists and numbered lists in the post content. Google favors these formats and they improve user engagement. [L0311, 2021-22]
- Use bulleted or numbered lists wherever you make a series of short points. Google often pulls numbered lists and bullet points into featured snippets on the results page. [L0462, 2021-22]
- Use plenty of bullet points, numbered lists, images and videos in content areas. Embedded videos in content keep visitors on the page longer and help dwell time. [L1099, 2021-22]

### Images

**Image frequency (sources differ)**

| Source | Rule | Applies when | Ids |
|---|---|---|---|
| one source | Insert images or video approximately every 300 words. Do not let difficulty sourcing images prevent publication. | Default for long posts | [L0311, 2021-22] |
| one source | At least one image every 500 words (five in a 1,500-word post). Many publishers prefer one every 300 words. No maximum. | Minimum floor | [L0462, 2021-22] |
| one source | An image every 100 words is acceptable. A listicle can place one image per list item followed by a short text block. | Listicles and image-heavy content | [L0462, 2021-22] |
| one source (undated) | Blog posts start with a main image where possible, followed by at least one image in every section marked by an H2 | Style guide baseline | [L1467, undated] |

- Images break up long text, keep readers on the page, and help visual learners understand the content faster. [L0462, 2021-22]

**Image production and style**

- Blog images should share one size and style so the blog looks consistent. Keep a fixed image set in Canva and add new photos from it each time a blog post is written. [L0342, 2020-26]
- Blog header formula: a short headline that names the reader's decision or problem, a one-line benefit subline in smaller text, and a background photo that matches the topic. Examples: *Pick Your Perfect Tent* with *Find the right size for your group and season* over a campsite photo, and *Choose the Right Running Shoe* with *Get support that fits your stride* over a trail photo. [L0342, 2020-26]
- Use unique images whenever possible. Infographics created by freelancers add significant value to blog posts. [L0311, 2021-22]
- Images that you personally edit, retouch or modify count as unique assets, even if based on stock photos or other sources. Self-edited images are as valuable as original photography for visual variety. [L0311, 2021-22]
- Use a royalty-free image or an AI-generated image for the header. [L1321, 2020-26]
- On content pages, a large hero image is less important than a clear headline and introductory copy. [L1099, 2021-22]

**Image technical rules**

- Compress all images to minimize file size. All images require unique file names and alt text. Place the focus keyword in the file name and alt tag of the first image. [L0311, 2021-22]
- Compress existing images in Smart SEO: open Image optimization, click Configure, and optimize the images in the Files and Articles sections. [L1321, 2020-26]


Part 18 of 30 of "14. SEO and Content: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/14-seo-and-content.md · Previous: https://dlichters.com/ai/ecom/deep/14-seo-and-content/17-image-seo-visual-search-and-compression.md · Next: https://dlichters.com/ai/ecom/deep/14-seo-and-content/19-links.md
