<!-- part of ecom/deep/02-niche-and-product-research.md -->
Part 45 of 54 of "2. Niche and Product Research: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/02-niche-and-product-research.md · Previous: https://dlichters.com/ai/ecom/deep/02-niche-and-product-research/44-finding-products-via-marketplaces-and-other-source.md · Next: https://dlichters.com/ai/ecom/deep/02-niche-and-product-research/46-digital-products-validation-and-competitor-researc.md

## Specialty Product Types: Books, Digital Products, Print-on-Demand and Gadgets

### Kalodata book research: filter setup

The base filter set for US book research is shown below. [L0354, 2026]

| Filter | Value |
|---|---|
| Dates | Last 30 Days |
| Category | Books, Magazines & Audio |
| Revenue(S) | 0-10000 |
| Revenue Source (Content) | Video |
| Revenue Growth Rate | >30% |
| Avg. Unit Price($) | 30-100 |
| Region | United States |

Set the filters in this order: [L1175, 2026]

1. Open the product search in Kalodata and set Country to United States.
2. Set Category to Books, Magazines & Audio (the top-level category, not the subcategories).
3. Set Dates to Last 30 Days.
4. Set the Revenue ($) filter to 0 to 10K; a 0 to 100K range gives too many products and is not used as the working range. [L1175, 2026]
5. Set Revenue Source (Content) to Video.
6. Set Revenue Growth Rate to 30% or more.
7. Set Avg. Unit Price ($) to 30 to 100.
8. Leave all other filters (launch date, commission rate, creator number and similar) untouched.
9. Click Submit to apply the filters, then use Save selected filters to keep the setup for reuse.
10. Scan the results, discard products in the excluded categories, bundles and multi-book listings, then check the revenue trend and highest revenue videos and validate the candidates with Reddit, Amazon and emotion valence research. [L1175, 2026]

### Revenue range: which value applies when

The sources give different revenue ranges. Each applies to a different step.

| Range | Where it applies | Source |
|---|---|---|
| 0 to 10K (0-10000) | Filter setting in the base set and in the step-by-step procedure | [L0354, 2026; L1175, 2026] |
| 0 to 100K | Not used as the working range; returns too many products | [L1175, 2026] |
| About 0 to 8K to 10K | Practical working range; winners in this filter are typically low-revenue products, often below about $1,000 over the period | [L1175, 2026] |
| 0 to 8K | Sweet spot for manual selection | [L1175, 2026] |
| Up to 5K or 8K | Only if the manual scan is still manageable; above these values the list grows too quickly to check every product | [L1175, 2026] |

### Revenue growth rate

- A growth rate above 30% narrows results to products whose sales are rising fast. The presenter argued that a higher threshold also means higher margins because costs are lower, but this is not proven, so check unit economics before acting on it. [L0354, 2026]
- Growth rate alone does not decide a product. A book with a negative growth rate can still be a winner, and a trend that looked strong in the past may no longer hold. Check the current revenue trend and treat it as a signal, not a guarantee. [L1175, 2026]

### Ranking screenshot workflow

Use this procedure to feed Kalodata ranking pages to Claude. [L0354, 2026]

1. In Kalodata, set the filters for the category, revenue range, growth rate and unit price.
2. On Windows, press Windows + Shift + S and drag a box around the ranking table.
3. Switch to the Claude chat and paste the screenshot.
4. Switch back to Kalodata, go to the next ranking page (page 2, 3, and so on) and repeat steps 2 to 3 for each page.
5. Once you have sent about six pages, give Claude the research prompt.

- Ranking screenshots can run past six pages, and capturing more pages gives the AI a fuller picture than a shortened sample. Six pages is a time-saving shortcut, not a rule. [L0354, 2026]
- Zoom the browser out before capturing so the full ranking table, including product titles and revenue columns, fits into one screenshot. [L0354, 2026]

### Research prompt for ranking screenshots

Use this prompt, unchanged, after the screenshots are sent. [L0354, 2026]

```
Hey Claude, find me a winning product that is in Kalodata. I am sending you screenshots of the Kalodata ranking with these filters: last 30 days, category Books, Magazines & Audio, revenue 0 to 10000, revenue source video, revenue growth rate above 30%, average unit price 30 to 100, region United States. Read up the demand metrics (revenue, revenue per day, revenue growth rate, items sold, launch date, creator count, creator conversion ratio, video revenue) and find which kids (genre) book has a unique mechanism and solves a specific pain point for parents and children. You may look into TikTok; I want it to be specifically organic content without paid ads. Check whether the book's author has large YouTube subscribers, or whether the book is an old book that has been in the industry for quite some time, and tell me which of these justifies its authority. Also look into the Meta Ad Library: find out whether any competitor is running the same niche title or the same book or author, and tell me how many paid Meta ads each competitor is running. Mark clearly which numbers come from my screenshots and which you could not verify, because you cannot query the Meta Ad Library directly. Then cook it for me and make me money: give me the product concept, the niche reasoning, and the next test steps.
```

[L0354, 2026]

- Before judging a niche in a ranking, remove unrelated genres such as romance, Bible and survival titles that add noise. Only then look at the remaining titles for real organic traction. [L0354, 2026]

### Book winner profile

A winning book candidate should meet several criteria at once. [L0354, 2026]

- A unique mechanism.
- A specific and emotionally charged parent pain point.
- Authority from a big author with large YouTube subscribers, or from an old book established in the market for many years.
- Organic traction on TikTok without paid ads.

Authority can come from two sources:

- An old book, meaning one published many years ago (for example in the 1980s), whose long market presence creates trust and authority for buyers. [L0354, 2026]
- A well-known author with a large YouTube audience. [L0354, 2026]

The winner profile for books is an older title by an aged author with a long market history and proven validation. Strong signals are high YouTube subscriber counts in the niche and active Reddit discussion in the genre niche. [L1019, 2026; L1195, 2026]

For book niches, the strongest profile is an older title by an author born in the 1950s or 1960s (boomers) or the 1970s or 1980s (late millennials), with a long market history and proven validation. Their long-running sales are a demand signal, and high YouTube subscriber counts in the niche add to it. [L1195, 2026]

### Pain point and mechanism

- A strong parent pain point combines the visible problem with a deeper fear behind it. For learn-to-read products, the visible problem is a child who guesses words, and the deeper fear is that the parent will fail at teaching reading themselves. [L0354, 2026]
- Decodable text is a useful mechanism because the child only sees letter-sounds already taught, so the child reads rather than guesses. The method also makes the parent's job scripted, which removes the need for teaching expertise and gives the product a clear hook. [L0354, 2026]
- Before testing a book, understand what the author or the ad is trying to say and which problem the buyer wants solved. The meaning and the audience matter more than the translation or the format of the product. [L1175, 2026]
- Judge each book on whether it solves a durable problem for a clear buyer. Some books tied to specific US requirements stay in demand for years, while others are short-lived fads. [L1175, 2026]
- A book with a map or content tied to a region far from the target market is hard to sell. Example: a map centered on the Middle East is difficult to sell to a US audience unless the buyers want to travel there. [L1175, 2026]

### Niche tailwinds and sub-niches

- A wider trend can strengthen demand for a niche. In the learn-to-read example, US parents rejecting whole-language reading methods and looking for phonics is a tailwind for decodable products. [L0354, 2026]
- Children's books cover many sub-niches: parenting and family, learn-to-read, early activity cards, financial literacy workbooks, Bible stories, handwriting and writing, and emotional or puberty guidance. Each sub-niche can be tested separately. [L0354, 2026]
- The same niche logic can be applied to other book genres such as gardening, construction or handyman DIY. [L0354, 2026]
- In the US, handyman and DIY books can have demand because hiring a contractor is expensive, so people try to do repairs themselves when they can. This is the presenter's reasoning and is specific to the US market. [L0354, 2026]
- Books in the kids, parenting, nursing, survival, independence and practical skills categories tend to sell well and appear among the stronger candidates. Confirm each product with the revenue trend and sales data rather than assuming the category always works. [L1175, 2026]
- Books are a beginner-friendly niche because they are less saturated than supplements, beauty and pet niches. Lower competition and cheaper CPC/CPM make test budgets less painful. [L1175, 2026]
- Spanish-language books are an untapped category, because few sellers test them. This is an opportunity for sellers who have the translation and creative skills. [L1175, 2026]

### Book niches to avoid

- Avoid legal, regulation and tax books, financial and investment books, and trading or chart books. These niches do not convert well, and trading content is too subjective. Financial books were specifically excluded by the source. [L1175, 2026]
- Avoid food and beverage (F&B) books for beginners. They show high competition and did not perform in the tested cases. [L1175, 2026]
- Avoid EQ, emotional intelligence, psychology and inner-child books. These niches did not perform in the tested cases. [L1175, 2026]
- Case: an EQ and psychology book was tested with about $1,000 in ad spend and produced little or no profit, so the test was a net loss. Avoid this niche when the budget is small. [L1175, 2026]
- Example: a farming book and a plumbing book were tested and did not work, although some books in the category do convert. Testing a book in an unfamiliar subject can waste budget without a clear reason to expect demand. [L1175, 2026]
- Skip books sold as bundles or as multi-book listings with different content. They are hard to run as a single product, even when the listing has high revenue. [L1175, 2026]

### Sourcing book candidates

Pull three product candidates in the same week, one from each source. [L1019, 2026]

1. Kalodata, filtered to Spanish (Kalodata workflow: filter by language, select Spanish, then find book ads that are already converting). [L1019, 2026]
2. Library or Taobao data.
3. Amazon or eBay bestsellers.

- Besides Kalodata, product sourcing can come from local libraries (books with the highest borrow rates), Taobao (items with the highest purchase counts), and the bestseller lists on Amazon and eBay. [L1019, 2026]
- Building an original product that follows a public method or blueprint, rather than copying an existing book, avoids rights-holder risk. The product can then stand on its own. [L0354, 2026]

#### Spanish-language book workflow

1. In Kalodata, filter products by language, for example Spanish.
2. Find reading-book ads that already convert in that language.
3. Convert the narration to English with an ElevenLabs voiceover swap.
4. Replace the book cover with an English version using GPT image editing.
5. Convert the ad itself to English. [L1195, 2026]

#### Taobao book workflow

1. Open Taobao and search for books.
2. Sort the results by the highest number of purchases.
3. Rip the video and test it.
4. If you can produce custom ads, do that for a better result. [L1195, 2026]

#### Amazon and eBay book workflow

1. On Amazon and eBay, sort books by the highest sales count.
2. If no VSL rips are available to pull from, build a custom VSL yourself. [L1195, 2026]

#### Ripping ads: conflicting guidance

The sources disagree on copying competitor ads. Both apply, depending on the step:

- The Taobao and Amazon/eBay workflows above describe ripping a video and testing it. [L1195, 2026]
- The presenter also warns not to rip ads just for the sake of ripping, and to understand the ICP and USP before testing. [L1019, 2026]
- Kalodata is used to find the competitor ads that sellers of a product run, and copying those ads creates DMCA and competitor-report exposure. Custom covers and custom UGC avoid matching them. [L1030, 2026]

In practice, the source's own guidance favours understanding the ICP and USP first and building custom ads when possible.

### Books: running an uncustomized book

- The default for running books is to customize every book before selling it, rather than listing the generic version as it is. Customization can cover the title, cover, interior content and overall look. [L1255, 2026]
- Customizing books is a strongly recommended best practice rather than a hard rule, so the seller ultimately decides. The recommended default is to customize each book you run. [L1255, 2026]
- Running a book straight off the shelf with no changes means you sell the same product as every other seller, which weakens differentiation. The speed gained by skipping customization is lost if competitors undercut the identical listing. [L1255, 2026]

Test-first approach for an uncustomized book: [L1255, 2026]

1. List the book unchanged to test demand quickly.
2. If it sells, decide to customize it.
3. Create a new, completely separate book listing with the changed title, cover or content, since the customized version cannot simply replace the original.

The trade-off is speed now versus extra work later.

### Supplements

- Avoid the supplement category unless you have significant cash reserves. Competitors in supplements generate $1M+ monthly revenue and can engage in predatory tactics. These include mass-buying your entire inventory on day one, opening all units (making them unsellable), posting 2,000 negative reviews, then returning everything for a refund, erasing your investment. This risk is too high for new sellers with limited capital. [L0228, 2015]
- In niches where most advertisers have poor quality scores and low CTRs, such as supplements, the platform can penalize new advertisers from the start. Expect a weaker starting position and factor it into the budget. [L0510, 2018]
- Beginners should first test broad, mass-appeal products such as gadgets. Supplements and other complex niches should be tested only after the beginner has the cash flow and marketing experience to handle them. [L1454, 2026]
- Ingredient-led supplement products such as ashwagandha were skipped during screening in the lesson, so such products need extra scrutiny before testing. [L1187, 2026]

#### Supplement winner screening (after filters are set)

1. Skip the first five result pages and start the review at page 6.
2. Skip products whose video ads are TikTok Shop-only and depend on the TikTok Shop platform.
3. Skip products whose ads are mostly in Spanish if you are a beginner. If you do run them, customize the landing pages and translate everything into Spanish.
4. Check the Last 30 Days revenue graph and prefer a curve that rises and falls with recovering peaks over a flat or steadily rising line.
5. Open the Video & Ad list and check the mix of top-funnel, middle-funnel and bottom-funnel ads.
6. Skip the product if nearly all ads are bottom-funnel with no variety.
7. Check that the ads use a wide range of avatars across genders, ages and ethnicities.
8. Judge the editing and creatives of the strongest ads and note which videos have the highest conversion rates.
9. Compare 30-day revenue, units sold, price, shipping fee and commission rate against the test budget.
10. Check the Last 90 Days graph. If the product peaked and is now slowing, rethink the plan or skip it.
11. Decide to build custom ads rather than copy a competitor, and plan for roughly one to two weeks before the first launch.
12. For supplements, consider timing the test toward the Q4 peak around Black Friday and Christmas.

[L1187, 2026]

### Electronics and gadgets

The sources disagree on electronics. Each statement applies in its own context:

| Statement | Context | Source |
|---|---|---|
| Avoid electronics as FBA products | Amazon FBA; electronics become outdated quickly and have higher defect rates than non-electronic products, limiting their appeal and longevity | [L0227, 2014] |
| Electronic gadgets are strong niches for Facebook ads | Starting hypothesis only; validate each product with competitor research and look for a clear gap a competitor is missing | [L0637, 2023+] |
| Gadgets sell at higher prices | High perceived value; a strong supplier connection is essential because of defect risk | [L0788, undated] |
| Gadgets are the beginner's first test | Broad, mass-appeal products are easier to sell without deep marketing skill | [L1454, 2026] |

- Example: a gadget seen selling on X was reported to be doing around $5K in daily sales. A visible, broad-appeal product like this is a signal worth testing when a beginner is researching what to launch. [L1454, 2026]
- Gadget niches such as locks often get attention without converting. Treat them as low-priority tests unless you have seen them convert. [L1186, 2022]

#### AliExpress electronics criteria

For electronics on AliExpress, choose products with: [L1218, undated]

- An average rating of at least 4.7.
- At least one listing with more than 1,000 orders.
- About 50 to 100 plus ratings.

Check the same product on Amazon for a rating of 4 or higher.

### Digital products: principles and niche selection

- Digital products such as ebooks have no fulfillment cost and instant delivery, which makes them a low-cost way to test offers. [L1212, undated]
- Digital products often have low competition, so a narrow niche topic that solves a specific problem can be tested with ads and may stand out with little rivalry. [L1212, undated]
- Choose a niche that can make money, where buyers are willing to spend, and where you have real knowledge or the willingness to learn it quickly. Without knowledge you cannot provide the value that makes a buyer pay, so avoid a product about a subject you know nothing about. [L0513, undated]
- Example niche categories with proven demand include health (weight loss, fitness, healthy living), financial investment, making money online, dating and relationship advice, hobbies (for example chess, where buyers may pay 20 to 30 dollars for a good ebook), language learning, and personal development. [L0513, undated]
- Ebook niches suggested for testing include dating advice for young men and dating advice for women above a certain age. [L1212, undated]
- Hobby niches are the easiest place to add information product offers after a physical sale, because buyers already spend money on learning and community around that hobby. Before choosing a niche, check whether paid courses, ebooks or memberships already exist for it, since that shows buyers will pay for extra value. [L0923, 2015]
- Digital products such as Lightroom presets, Apple themes, iPhone wallpapers and ebooks sell well when they match a passion or niche of the seller. They can be made on Fiverr if you do not create them yourself. [L0577, 2023]
- Platforms for digital products: Pinterest, Etsy and Facebook were named the best platforms for digital product sales. Etsy ads can be run via Google. [L0577, 2023]
- Sales counts shown on Etsy listings can serve as a demand signal. For example, one design selling 200 times versus another selling 7,000 times. Compare counts across similar listings before choosing which digital product to test. [L1184, 2023+]
- Etsy hosts digital products such as iPhone icon packs and digital planners, which have no fulfillment cost because the buyer receives a download link to a file. [L1184, 2023+]

### Digital products: ebook sourcing and reselling

- PLR Hustle is a site where private label rights ebooks can be bought, downloaded, branded and resold. ChatGPT can also be used to write an ebook from a chosen outline. [L1212, undated]
- Free ebook libraries can supply ebooks that are resold or used as free upsells after a light rebranding with a new cover and after checking the content first. [L1184, 2023+]
- Use only free-to-use stock images and legally usable templates. Do not download or resell other brands' ebooks or copyrighted content. [L0513, undated]
- Digital products like printable planners or icon packs need no shipping or fulfillment, but resellers must check copyright. Ask the original seller for permission, or hire a designer on Fiverr to create a very similar product. [L1184, 2023+]
- Etsy can be used to download and study existing ebooks in a niche to see how they are structured and what value they include. Use this only to learn the structure and gaps, never to copy the content. [L0513, undated]

The sources disagree on reselling ebooks from free libraries. Use material whose license allows resale, such as PLR or free-to-use content, and never resell others' copyrighted ebooks. [L1184, 2023+; L0513, undated; L1212, undated]

#### Turning a free PLR ebook into a sellable product

1. Download the ebook and check that the content is strong.
2. Replace the cover and reformat the layout in Canva.
3. Export the final PDF for delivery.

Done properly this takes roughly one hour. Sending the unchanged file is not recommended. [L0513, undated]

#### Setting up a PLR or private-label digital product

1. Find digital products by checking free PLR download sites and ebook libraries as a base, then validate demand with Google Trends.
2. Create the product with a copywriter or ebook specialist on Fiverr, and make it specific to the niche and the trend, such as seasonal editions. [L0789, 2022]

- Use seasonal or multiple editions of a digital product, such as winter, summer and fall editions, so that a later edition can serve as an upsell. Bundle editions by category, such as relationships, growth mindset or abundance mindset. [L0789, 2022]
- Free ebooks work well as upsells. Offering a bonus ebook worth about $20 with a purchase increases conversion. Automating delivery through an app that sends a PDF immediately after each order is preferred over manual sending. [L1184, 2023+]


Part 45 of 54 of "2. Niche and Product Research: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/02-niche-and-product-research.md · Previous: https://dlichters.com/ai/ecom/deep/02-niche-and-product-research/44-finding-products-via-marketplaces-and-other-source.md · Next: https://dlichters.com/ai/ecom/deep/02-niche-and-product-research/46-digital-products-validation-and-competitor-researc.md
