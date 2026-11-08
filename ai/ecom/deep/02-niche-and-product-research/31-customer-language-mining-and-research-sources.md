<!-- part of ecom/deep/02-niche-and-product-research.md -->
Part 31 of 54 of "2. Niche and Product Research: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/02-niche-and-product-research.md · Previous: https://dlichters.com/ai/ecom/deep/02-niche-and-product-research/30-research-order-before-testing.md · Next: https://dlichters.com/ai/ecom/deep/02-niche-and-product-research/32-attention-matrix.md

## Customer Language Mining and Research Sources

### Why customer language comes first

- Amazon reviews and Reddit threads are the two strongest research sources because they contain unfiltered customer language [L1019, 2026].
- Amazon reviews are the richest source of marketing angles because reviewers describe how they use a product in detail. Competitor comment sections are a secondary source, and their angles can feed headlines, landing pages and ads [L0708, undated].
- Reviews are hard to fabricate. Reviewers, including negative ones, reveal who they are, what they do and why [L0999, 2023; L0995, 2023].
- Reviews and forum posts also reveal new angles, such as a product used for a purpose other than its original one, which can open a separate segment [L0999, 2023].
- Feed AI research tools with manual research, not in place of it. Read Amazon reviews and forums directly, because they show the actual language and scenarios customers use [L0450, 2022+].
- Treat AI as a virtual assistant, not the lead. Human reading of forums and reviews picks up contextual details that AI misses [L0995, 2023].
- AI output can be wrong. Check every product and data point it names against the source data, ask for its sources, and verify them before spending money on a test [L0354, 2026].
- Before building a product test, read the Amazon product reviews and the AliExpress comments to learn what buyers value and where the product falls short. These findings can shape the product page angle, ad hooks and script [L0349, 2024].
- A product's problems, use cases and weaknesses are visible in three places: Amazon reviews, the seller's own website and the comments on its ads. Collecting all three gives a fuller picture before choosing a product [L0708, undated].
- Many sellers say they do market research without collecting any data. Real self-research means grounding each answer in your own store sales by product, customer complaints and comments, and the influencers already linked to your product [L1268, 2026].
- Research with real consumers before writing ads, through interviews, questionnaires and direct sales conversations. Guessing what people want is very expensive [L1261, undated].

#### Source order of recommendation

1. **Amazon reviews for the product category.** Reviews are hard to fake. They reveal the use case, where and when the problem occurs, who the customer is (for example homeowners or pet owners) and the exact language customers use [L0497, undated].
2. **Social media and online forums.** Check competitor pages and niche pages on Instagram and similar platforms. Read comments, what people say and who they are. Forums are a gold mine because people post problems, others relate or push back, and existing solutions and opinions come out, including opinions about your own brand [L0497, undated].
3. **Competitor sites and social accounts.** Check how competitors position the product, find market gaps and opportunities, and read what their customers say about the product and the niche [L0497, undated].

### Amazon review mining

#### Exporting reviews

- Export the reviews with the Chrome extension Amazon Review Export. It collects all reviews into a spreadsheet and downloads it when stopped [L0353, 2023].
- The extension works by clicking through the reviews page, and the export can be stopped at any point [L0995, 2023].
- Export procedure:
  1. Install an Amazon review export extension in Google Chrome [L0999, 2023].
  2. Open the product page and go to the full reviews view through the more reviews link, which shows previous and next paging [L0999, 2023].
  3. Click the extension and start the export, which moves through the reviews in chunks [L0999, 2023].
  4. Watch the progress bar and stop the export once you have enough reviews [L0999, 2023].
  5. Download the resulting file and use it as the review set for analysis [L0999, 2023].
- Amazon review analysis with AI, in order [L0353, 2023]:
  1. Open the product page on Amazon and go to all reviews.
  2. Export the reviews with the Chrome extension Amazon Review Export.
  3. Paste the reviews into ChatGPT about 30 rows at a time, since the whole sheet cannot be pasted at once.
  4. Ask the AI to infer the target audience from the reviews, covering demographics, psychographics, behaviour and goals, needs and motivations.
  5. Supplement the AI output with your own reading of the reviews to find trends.

#### AI-assisted analysis of reviews

- ChatGPT has a word-count limit. About 30 reviews per prompt worked, while 50 reviews caused errors. Feed reviews in batches of 30 (for example 30, then the next 30, then 60 and 90) and ask the tool to identify the market segment based on the four pillars [L0995, 2023].
- ChatGPT procedure [L0995, 2023]:
  1. Open a new chat, not a chat in which the browser is in use, because the chat may keep browsing the web.
  2. Give the product title and the About text from the product page for context, and tell the model to digest the message and do nothing else.
  3. Feed the first batch of about 30 reviews and ask it to infer the target audience using the four pillars (demographics, psychographics, behaviours, needs).
  4. Ask follow-up questions to get specifics, such as which pets or breeds are mentioned.
  5. Feed the next 30 reviews and repeat until enough data is collected.
  6. Verify the output manually, since the AI output is a starting point and misses contextual detail.
- When a term or behaviour keeps appearing in reviews, ask ChatGPT for a quantitative check, such as which dog breeds shed the most. This shows whether a qualitative mention is backed by general figures. The answer should still be confirmed against source material [L0999, 2023].
- Let the AI first extract the signal from the ranking data, then ask it to verify demand and the competitor ad landscape. This is better than asking it to guess at ad competition [L0354, 2026].

#### Prompt: target audience from reviews (four pillars)

The unit text, unchanged:

```text
Ask the AI to take the pasted Amazon reviews and describe the target audience for this product. Cover four pillars: demographics (who the buyer is, location, income, static information), psychographics (personality, values, psychological profile, attitude toward the product), behaviour (what the buyer is doing when they need the product) and goals, needs and motivations (why they buy, what they want to achieve, what pain they want to escape). Ask for the output under these four headings.
```

[L0353, 2023]

#### Audience from reviews and forums

- Audience procedure for a product that is already listed [L0995, 2023]:
  1. Collect customer reviews from Amazon, since reviews are hard to fabricate and reviewers reveal their demographics, psychographics, situation and reasons.
  2. Search forums such as Reddit for problem-related phrases (for example the product problem plus a phrase like "everywhere") and read cleaning tips or complaint threads.
  3. Look for repeated words, such as a specific breed or a specific behaviour (for example a pet getting onto the bed), that appear many times.
  4. Confirm the frequency of these findings with quantitative searches (for example which dog breeds shed the most).
  5. Write down the top three target audiences that can be targeted, separating groups with different problems.
  6. Build one ad and one landing page per audience, because the creative must speak to a specific audience.
- Case: a pet-hair brush with about 8,000 Amazon ratings showed German Shepherds mentioned three to four times as often as other breeds, and dogs getting onto beds came up frequently. Labradors and German Shepherds were named as the breeds that shed most. This pointed to a segment of large-dog owners whose dogs get onto the bed, which allowed a more specific ad message [L0999, 2023; L0995, 2023].
- The same brush had enough repeated mentions of breeds, shedding places and pet behaviours to shape several separate audience segments. Large review volumes make it easier to find patterns that repeat often enough to trust [L0995, 2023].
- A repeated mention of a breed, use case or situation can reveal a segment worth targeting [L0999, 2023].
- Repeated mentions of surfaces and places, such as stairs, carpet, velvet couches and clothing, show where the product will be used. Those surfaces can be named in copy and in use-case messaging [L0450, 2022+].
- Find the audience for a product not yet on Amazon [L0353, 2023]:
  1. Describe the problem the product solves, not the product itself.
  2. Search forums and Reddit for people talking about that problem and note their own words.
  3. Research similar products on Amazon and read their reviews.
  4. Treat the findings with caution, since people may describe the solution in different terms and use different features.
- Competitor products may solve the same problem with different features, so the audience's language may differ from the product's own features. Interpret the data with care [L0353, 2023].

#### Emotional and buying-decision mining

- Every claim, quote and insight needs a direct clickable source link. Link to specific competitor product or landing pages (not only homepages), exact Amazon listings and reviews, exact Reddit threads and comments, social posts and videos, and articles or studies. Write links as descriptive markdown text [L0221, 2026; L0613, 2026].
- Research should run at least 5 to 10 minutes and aim for 25+ formatted pages, with depth valued above speed. The output serves as the reference document for all later marketing work [L0221, 2026; L0613, 2026].
- Emotional excavation of the market, in order [L0613, 2026]:
  1. Identify negative self-labels people use (at least 15 to 20 labels with exact quotes and links), labels others applied that still sting, the identity they lost, the identity they fear becoming, and the role the problem forced them into.
  2. Document at least 10 guilt and shame narratives: what they blame themselves for, what they wish they had done, what they hide from close friends, and what they tell themselves at night.
  3. Document at least 10 loss and grief narratives: what was lost, who is lost even if still present, what they miss, the future that now feels impossible, and the milestones they fear missing.
  4. Document at least 10 breaking-point stories: the moment, comment, image or result that made the problem impossible to ignore.
  5. Document at least 10 proxy buyer narratives, where someone buys for another person.
  6. Create at least 5 "secret conversation" scenarios in which a person vents candidly to a close friend.
  7. For each major pain point, map the primary emotion, intensity from 1 to 10, duration (acute, chronic daily or episodic), social dimension, who else is affected, and physical symptoms such as sleep loss or stress eating.
  8. Identify 5 to 7 high-stakes scenarios. For each, describe the situation, the specific emotional flavour, the identity at stake, the guilt or shame, what the person fears others think, and what resolution would mean emotionally.
- Amazon research, in order [L0613, 2026]:
  1. Collect at least 30 direct customer quotes about problems and desires, with links.
  2. Document previously tried products and what disappointed buyers.
  3. Collect at least 15 "a-ha moments" when a product worked.
  4. Note the visual proof buyers look for, and at least 15 objections that cause hesitation.
  5. Record the decision process, time frames for results, emotional impact, feature comparisons, price sensitivity and unexpected secondary benefits.
  6. Mine emotional reviews: crying or "finally" reviews, family and relationship impact, rock-bottom stories, transformation stories, proxy buyer reviews and restored confidence. Collect at least 15 high-emotion quotes.
  7. Collect at least 40 review quotes sorted into six themes: problem description, failed solutions, decision making, results, emotional impact and negative experiences.
  8. For related products, analyse question sections, star distribution and what drives 1-star versus 5-star reviews, top sellers' unique selling propositions, and review velocity over time.
- Across the whole research document, include [L0613, 2026]:
  - The top 30 desire statements, ranked by frequency and emotional intensity;
  - The top 30 problem statements, ranked by urgency and pain;
  - The top 20 hooks adaptable to the product;
  - 15 to 20 common objections with responses;
  - 10 visual proof elements;
  - 10 mechanisms that build belief;
  - The social proof that matters most to the audience;
  - 20+ buzzwords, ranked by frequency and impact, with sources;
  - 15+ customer success story patterns.
- Deliver this emotional landscape summary at the end of the research [L0613, 2026]:

| Summary item | Required content |
|---|---|
| Top 10 identity labels | Label, emotional weight 1-10, example quote, source link |
| Top 10 guilt and shame narratives | Narrative, intensity 1-10, example quote, source link |
| Top 10 loss narratives | Loss, emotional impact, example quote, source link |
| Top 5 breaking-point scenarios | Detailed scenario descriptions |
| Top 5 proxy buyer dynamics | Dynamic, relationship type, emotional drivers |
| Highest-stakes scenario | A detailed narrative of the most emotionally charged situation in the market |

- Quote minimums differ between the sources. Use at least 30 direct quotes as the baseline [L0613, 2026]. Aim for 40+ real quotes [L0221, 2026]. Sort 40 review quotes into the six themes [L0613, 2026]. When the sources cannot support 40+ real quotes, prioritise 20 load-bearing verified insights over 90 plausible-sounding fabrications [L0221, 2026].
- Quote types [L0221, 2026]:

| Type | What it is | Where it may be used |
|---|---|---|
| [VERBATIM] | Actual language pulled directly from sources, with working links | Safe to publish as customer evidence |
| [COMPOSITE] | Language patterns reconstructed from source substance | Safe to inform copy voice; never present publicly as customer testimonials |

#### Marketing angles from reviews

- Research marketing angles on Amazon [L0636, undated]:
  1. Open amazon.com and search for your product.
  2. Open all listings of the product.
  3. From each listing, read the positive and detailed reviews.
  4. List every distinct marketing angle you find, not only five.
  5. Drop the product if it has fewer than 5 distinct angles.
- Marketing angle research on Amazon [L1183, undated]: search the product name on amazon.com, pick a listing with many reviews and a good rating, and read 5-star and 4-star reviews to find benefits (end feelings or outcomes, such as fun time with kids or less screen time), not features. Read 1- and 2-star reviews to find shortcomings. Use the Chrome extension Amazon Reviews Summarizer to summarise pros and cons.
- Marketing angles from reviews of a similar product [L0895, 2021+]:
  1. Search Amazon for a similar product that solves the same problem and has many reviews (for example 46,000).
  2. Read the 5-star reviews.
  3. Extract benefit-driven lines about the experience rather than the features.
  4. Use these lines in product benefit copy.
- Collect 5 to 10 marketing angles from Amazon reviews of the product and of similar products. Similar products provide more reviews and therefore more angles [L0708, undated].
- Marketing angles from benefit searches [L0895, 2021+]:
  1. Google the product name with "benefits of", for example "benefits of [product]".
  2. Read the detailed blog articles that appear.
  3. Extract specific benefits and hidden problem angles the articles cover.
  4. Aim for 10 to 15 or more marketing angles before building the landing page. Products with more angles rank higher than products with only two or three.
- Collect target audience data from competitor website reviews and from Amazon. Search products in your niche or identical products and read customer reviews for the pain points buyers had before purchase, the problems the product now solves and their current issues [L0902, undated].

### Reddit and forums

- Reddit threads are a second source of buyer opinions and use cases, next to Amazon reviews and forums. Read them for the scenarios and frustrations people describe in their own words [L0450, 2022+].
- Forums and Amazon reviews are a goldmine for customer language. Read how buyers describe their problem, the scenario they are in, the pets or situations involved, and which competing products they mention, both positive and negative [L0450, 2022+].
- Read the comments, not only the posts. Note which pains people complain about and the exact language they use [L1019, 2026].
- Search a forum such as Reddit for the problem in plain customer words, for example "dog hair in the house", then read the threads. Customers describe their daily situation, reasons and constraints there, which reveals behaviours and underlying motivations for a segment [L0999, 2023].
- Pair the product category with the problem and the solution when searching forums for buyer questions [L0450, 2022+]:
  - `[product type] forum`
  - `best [product type]`
  - `effective [problem] removal method`
  - `why is [problem] bad`

  Replies to these queries reveal how buyers describe their problem and which products they recommend.
- To find discussion sources, search with the customer's problem followed by the word forum, then check which forums appear [L0464, 2025-26].
- Reddit research procedure, in order [L0613, 2026]:
  1. Identify at least 10 to 15 relevant subreddits and note each one's size, activity level and tone (supportive, skeptical or technical).
  2. Collect at least 30 quotes on desires, at least 20 examples of failed attempts, and at least 10 recurring success and failure patterns.
  3. Document DIY approaches, comparisons between alternatives, decision reasoning, terminology differences between novices and experts, descriptions of ideal solutions, and price discussions.
  4. Search high-engagement threads that begin with "I finally...", "After years of..." or "I can't believe...", plus confession posts, posts about crying or giving up, relationship-impact posts, proxy buyer posts, emotionally supportive comment sections, and "holy grail" product discussions.
  5. Collect at least 20 high-emotion identity-level quotes and at least 50 quotes in total across desires, past experiences, pre-purchase questions, objections, success stories, disappointments and "holy grail" descriptions, each with a thread link.
- Behaviour clues reveal the solutions customers already use and their frustrations with them. Repeated complaints about a common alternative, such as sticky lint rollers that waste paper, point to a usable selling point, for example "no more sticky rollers" [L0450, 2022+].

### Language into copy

- Mirror the words your target market already uses. Study them in their videos, competitions and gathering places, and use that language in content and ads from the start, because people respond to familiar wording [L0487, 2018].
- Scenario descriptions from real customers, such as a pet jumping onto the bed right after the sheets were changed, can become copy that speaks to the buyer's moment of frustration [L0450, 2022+].
- Customer reviews on Amazon and eBay and Reddit discussions are additional sources for avatars, pain points and customer language. Use them alongside survey answers to map the market. Their language can also feed hooks and objection handling [L0906, 2026].
- one source research form, procedure for a product or book [L1195, 2026]:
  1. Scrape the reviews of the product and its competitors on Amazon, and on eBay where reviews exist.
  2. Note how buyers say the product helped them, in their own words. These outcomes are your USP proof.
  3. Note who writes the reviews. This sharpens the ICP.
  4. Read Reddit threads, especially the comments, since they are unfiltered user feedback.
  5. Record which pain points users vent about and the exact language they use.
  6. Copy their exact phrasing for hooks and headlines.
  7. Fill the research form (pain points, exact customer language, USP, ICP) and build the creative structure around one main message.
- Book research [L1019, 2026]: on Amazon, scrape the reviews of the book and of its competitors, and note how the product helped buyers in their own words. Use these quotes as USP proof. Run one focused research session on Amazon and Reddit for the niche and fill the research form with exact customer quotes.
- Health-condition research, as a procedure [L0906, 2026]:
  1. Search the condition or problem on Google.
  2. Read the AI overview and authoritative sources, such as Psychiatry.org for ADHD, to get the official names, symptom categories and subtypes.
  3. Note the exact terms customers use, and compare them with the official terms.
  4. Use both sets of terms when building avatars and hooks.
- Example: an engagement campaign on a community page for parents of children with ADHD can gather how the child's hyperactivity affects daily life and what outcomes parents want. Use the collected comments to find what the children actually face, and to write advertorials, image ads or video ads. Then test the resulting angles [L0906, 2026].

### Customer feedback and differentiation

- Monitor customer emails and product review comments for feature requests and complaints. Example: customers of resistance bands asked for extra handles for couple workouts. The supplier quoted $0.60 extra per pair. The solution was to add handles and raise the price by $3-5, which created differentiation without a drop in demand. Allocate time each week to scan reviews and emails for patterns in customer requests [L0228, 2015].
- Customer pain point research can reveal ways to improve existing products and opportunities for new products. Resellers such as dropshippers can use it to choose which new products to source [L0872, 2021-22]. **
- Find a differentiation idea for a private-label product [L1155, 2021-22]. **
  1. Survey your customers repeatedly and keep detailed notes of their requests, complaints and suggested features.
  2. Mine the product reviews on your own store, which should number in the hundreds by this stage.
  3. Mine reviews on Amazon and on competitor sites.
  4. Ask your customer service team what customers say and what they request.
  5. Identify features customers want that no product on the market offers, and design a version that addresses them.


Part 31 of 54 of "2. Niche and Product Research: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/02-niche-and-product-research.md · Previous: https://dlichters.com/ai/ecom/deep/02-niche-and-product-research/30-research-order-before-testing.md · Next: https://dlichters.com/ai/ecom/deep/02-niche-and-product-research/32-attention-matrix.md
