<!-- part of ecom/deep/14-seo-and-content.md -->
Part 27 of 30 of "14. SEO and Content: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/14-seo-and-content.md · Previous: https://dlichters.com/ai/ecom/deep/14-seo-and-content/26-link-building-and-off-page-seo.md · Next: https://dlichters.com/ai/ecom/deep/14-seo-and-content/28-link-sources.md

### Prospecting Linkers

- ** Only contact sites that are a likely linker: a site within your broad industry category or niche that already publishes resource or content pages with outgoing links. Sites outside your niche are not worth outreach, even if they have broken links. [L0332, 2021-22]
- ** A likely linker list is built from backlink data. The referring page is the page that links out, and the link URL is the page on your site or a competitor's site that it links to. Both are needed to know which domains to contact. [L0601, 2021-22]
- ** Likely linker lists can contain thousands of referring pages, so an automated email search can produce a large pool of outreach contacts from one list. [L0601, 2021-22]
- ** A likely linker spreadsheet built from a backlink export uses these columns:

| Column |
|---|
| Total Backlinks |
| Domain Rating |
| URL Rating (of referring domain) |
| Referring Domain |
| Referring Page URL |
| Referring Page Title |
| Internal Links |
| External Links |
| Link URL |
| TextPre |
| Link Anchor |
| TextPost |
| Type |

  The Referring Page URL and Link URL columns are the two inputs needed later to match contacts to each linking site. [L0601, 2021-22]
- ** While doing skyscraper research or reviewing resource pages, run Check My Links on every relevant page you visit. Add any invalid link you find to your outreach list, because you can offer the site owner a fix before you ask for a backlink. [L0332, 2021-22]
- ** Each outreach batch should contain only prospects whose content is relevant to your article's topic. Pair each prospect with the URL of the article you want them to link to, so the recipient can read it from the email. [L0946, 2021-22]
- ** Contact details can usually be found for about half of the likely linking domains, not for every one. Plan outreach lists with that loss in mind. [L0601, 2021-22]
- ** Searching each website by hand for contact emails is very slow and often fruitless, because many domains do not publish email addresses on their site. [L0601, 2021-22]

### Finding and Choosing Contact Emails

- ** Hunter.io finds email addresses for sites. Sites where no email address is found are recorded in the No Email Database, since other methods may find an address for them later. [L0422, 2021-22]
- ** Contact first names can be found with Hunter.io and with the Norbert tool, which can also find names linked to email addresses. Paste Hunter results into the Hunter Output tab of the email filtering sheet. Where no name is found, leave the Name cell blank so the Mailshake fallback text is shown instead. [L0946, 2021-22]
- ** In one example, 50 of 78 requested domains returned addresses. A success rate around 50 percent of requested domains is considered an average result. [L0601, 2021-22]
- ** Send only one outreach email per domain, because repeated emails to the same company look spammy and raise the chance of spam filters. [L0601, 2021-22]
- ** For a content or link request, choose an editorial or named contact over a sales or advertising inbox, even when the sales address has a slightly higher confidence score, because the request is unlikely to be answered there. [L0601, 2021-22]
- ** Personal, named addresses are generally more likely to get a reply than generic addresses such as info, admin or customer service. Prefer a named person when the score is comparable. [L0601, 2021-22]
- ** Use first names where available to personalize outreach emails. Names are not found for every address, especially for generic inboxes, so leave those without a name. [L0601, 2021-22]
- ** Choosing the final address for each domain is a manual judgment task that takes time on large lists. It is the step that cannot be left to automation. [L0601, 2021-22]
- ** Selecting one outreach email per domain and transferring it back into the template:
  1. Open the Hunter.io CSV and review every address listed for each domain.
  2. Keep one address per domain, using judgment that combines the confidence score with the best fit for the outreach purpose.
  3. Delete all other rows.
  4. Copy the remaining domain names into the Domain name column of the Hunter Output tab.
  5. Copy the remaining email addresses into the Email Address column in exactly the same order.
  6. Copy the first names into the Name column, in the same order.
  7. Check that the domain, email and name entries line up row by row.
  8. Check the main sheet, where each email and name should now match its referring page root domain.
  9. When finished, remove the URLs from columns A and D. The remaining columns refresh automatically.
  [L0601, 2021-22]
- ** In the email filtering sheet, each Root Domain cell is calculated from its URL. The domain starts after the protocol, skipping a leading www. when present, and ends at the first slash. After the batch is built, paste only values into the outreach batch sheet, because formulas stop working once they are copied there. [L0946, 2021-22]
- ** For skyscraper link-building outreach, bulk sending and automated follow-ups are handled by the outreach tool. The sending mailbox must have good deliverability first, because follow-ups and campaign results depend on it. [L0574, 2021-22]

### Broken Link Building

- ** Broken link building works by helping the owner of another website. You find a dead link on their page, tell them about it, and offer one of your own relevant pages as the replacement. Because you solve a problem for them first, the backlink request is easy to accept. [L0332, 2021-22]
- ** Dead links that return HTTP 404 errors are common on older content, often around two years old. Owners stop updating resource lists, linked pages get deleted, or linked businesses close. Brand-new articles rarely contain broken links, so focus the search on older content and resource pages on sites in your niche. [L0332, 2021-22]
- ** Do not assume a site has no broken links just because its newest article is clean. Older content is where broken links cluster, so check older articles and resource lists as well. [L0332, 2021-22]
- ** A site with many valid redirecting links and no invalid links is being maintained, because the owner updates links when they expire. Such a site is unlikely to offer a broken link opportunity, so move on to the next site. [L0332, 2021-22]
- ** On content pages, check only in-content links, the links inside the article body. Navigation and sidebar links are not relevant for outreach. In-content links on a fresh article usually come back green, so check older articles first. [L0332, 2021-22]
- ** Before outreach, make sure your site has a suitable page to receive the link, such as a content page that covers the same topic. Without a good replacement page you have nothing useful to offer the site owner. [L0332, 2021-22]
- ** Choose the target page on your site to match the broken link. Use your homepage for general links, and a content page or your blog collection for topic-specific links. A product page can work in some cases, but only when it is a sensible replacement for the product being linked. [L0332, 2021-22]
- ** Affiliate links are acceptable, but your own site must run an affiliate program before you ask for a link that is part of an affiliate deal. The site owner may then need to negotiate placement. If a site links to a product page for a product it no longer sells, the link is likely broken and outreach is still worth it. [L0332, 2021-22]
- ** Example: on an Australian home-building site, a resource page with 111 links showed 94 valid, 17 valid redirecting and 0 invalid links. The owner was keeping it current, so it was not a good outreach target. A recent article on the same site with 177 links showed 89 valid, 10 valid redirecting and 0 invalid links, which fits the pattern that new content rarely has broken links. [L0332, 2021-22]
- ** Broken link outreach workflow:
  1. Install the Check My Links Chrome extension from the Chrome Web Store.
  2. While browsing relevant sites in your niche, open a resource page or an older content page.
  3. Click the extension and let it run. The counter shows the links still in the queue.
  4. Read the results panel: Links, Valid links, Valid redirecting links, Warnings and Invalid links.
  5. Look at the page itself. The links highlighted red are the invalid ones.
  6. Keep only in-content links and confirm each broken link fits your niche and your replacement page.
  7. Choose the replacement page on your site: homepage, content page, blog collection or, in some cases, a product page.
  8. Find the site owner's email address on the site. If none is usable, search for it with hunter.io.
  9. Send the outreach email: point out the broken link, offer your page as a replacement, and make clear there is no pressure if they decline.
  10. Send follow-up emails until you get a reply or conclude there will be none.
  [L0332, 2021-22]
- ** Broken link building works best combined with resource page link building and the skyscraper method. Each tactic adds only a few links per month, but together they accumulate into meaningful domain authority and link juice over time. [L0332, 2021-22]

### Broken Content Linking and Resource Pages

- ** Broken content linking is a variation of broken link building. It uses a content search tool, such as Ahrefs Content Explorer, as the search engine for link targets instead of hunting for dead links directly. Traditional broken link building is used first to build the initial links. [L0462, 2021-22]
- ** Resource page link building is one of the four main methods that can be delegated, and it is combined with broken link building and the skyscraper method to build links over time. [L0945, 2021-22; L0332, 2021-22]

### Guest Posts, Partnerships and Sponsored Placements

- ** A partnership can include backlinks, where you link to the prospect's site and they link back to yours. Backlink exchanges are a low-cost part of a wider deal. [L0525, 2021-22]
- ** Guest posting: a partner with a blog hosts an article you write. You gain exposure to their audience and a backlink to your site, and they gain fresh content. [L0525, 2021-22]
- For a guest post, find a blog that accepts outside authors, write a post that fits its existing topics, and include a short paragraph that points readers to your store with a reason to buy, such as pricing or service. Check first whether a blog publishes posts by named outside authors, because a blog that publishes only in-house content is likely not taking guest posts. [L0528, 2025+]
- A blog with real traffic but no ads and no active advertising section can still be an opportunity. Pitch it for a guest post, a podcast slot or a banner ad, since you could be its only advertiser. [L0528, 2025+]
- Guest post pitch template:

```
If you're interested in any of these top 10 [niche products] of this year, be sure to check out [store URL], where we offer [your key selling points, such as best pricing and best customer service].
```

  [L0528, 2025+]
- ** Guest posts on relevant authority sites, such as top-seven best-of articles, let you borrow their ranking strength to place your product at the top. Guest posts can also compare competing brands and explain why your product is the better choice. This applies only to third-party sites. Your own link-attracting content must still avoid commercial angles ([L0564, 2021-22]). [L0768, 2021-22; L0564, 2021-22]
- Blog hosting on a separate outside domain to earn backlinks rarely pays off. Running several quality blogs with enough domain authority for links to count can become a second business. Buying or taking over established blogs in related niches is a more realistic variant than starting new ones. [L0666, 2024]
- Publishing blog articles about your brand, not just your store or products, on external blogs costs around $100 per article. It builds trust and legitimacy, and customers searching for your brand will find press coverage and articles, not just product pages. [L0280, undated]
- Building a niche authority site as an external blog separate from your store:
  1. Create a standalone website focused entirely on educational content about your niche.
  2. Post in-depth guides, tutorials, reviews, and news about the industry.
  3. Link strategically to your e-commerce store when relevant.
  4. Monetize via Google AdSense and affiliate programs (including your own).
  5. Build backlinks and authority that indirectly drive traffic to your store without appearing promotional.
  [L0226, 2017]
- Example of a paid placement: a $200 banner link on a blog article written five years earlier. The old, established article still received research traffic from customers evaluating products, which made the backlink valuable for search ranking. [L0226, 2017]
- ** If a site declines a link, offer a guest post on their site as a second option. A guest post usually allows a link back to your site, but you must write or outsource the article. [L0946, 2021-22]

### Influencers, Bloggers, Brands and Suppliers

- Fashion bloggers who repost influencer content and tag the brand on their blog create valuable backlinks, even when blog traffic is low. Give them free product, because the backlinks support search visibility. [L0790, 2017]
- To earn backlinks from content, involve your brands and suppliers:
  1. When you create content, ask your brands for quotes, data or special information to include in it.
  2. Once the piece is published, ask the supplier to share the link to it.
  [L0470, 2023]
- Use full URLs when sharing backlink targets instead of link shorteners such as Bitly. Shorteners that are not your own may affect how links are treated. [L0470, 2023]

### Outreach Emails, Follow-ups and Replies

- ** Always send follow-up emails after the first outreach email. Recipients may not open the message, may delete it by accident, may misread it or may simply forget to reply. A single email without a follow-up wastes most of the outreach effort. [L0332, 2021-22]
- ** Track who was contacted, when, and about which content. Repeated outreach to the same site within a short period lowers email deliverability and frustrates recipients. [L0422, 2021-22]
- ** Sending several outreach emails to the same person within one week, asking for different content each time, annoys recipients and increases the chance that emails land in the spam folder. [L0422, 2021-22]
- ** Skyscraper outreach can be run once a month, once every couple of months, or more often. The data must be recorded regardless of how frequently it is done. [L0422, 2021-22]
- ** Link negotiation can be largely handed to a VA by providing:
  1. Clear rules on what the VA may agree to and what they must not agree to.
  2. Ready response templates for replying to prospects.
  With these, the VA can handle nearly all replies. The owner only needs to step in for tricky questions the VA cannot answer. [L0945, 2021-22]
- ** About 90% of link negotiation can be done fully hands-off once a VA has rules and response templates. Only the few tricky questions need the owner. [L0945, 2021-22]
- ** The standard link-building SOPs cover the task steps but do not include a template for every outreach email. Before handing outreach, follow-ups and link negotiation to a VA, the owner must write the email templates for each situation, including replies to prospects. [L0945, 2021-22]

### Paid Links and Agencies

- ** Google's position is conservative. Google increasingly detects manipulated links, such as purchased ones. A link bought today may be devalued or penalized after a later algorithm update, so a conservative approach to paid or swapped links protects long-term rankings. [L0947, 2021-22]
- ** Operators who accept paid links do so at their own risk. The decision should weigh price against expected value. The course rule itself is never to buy links. [L0947, 2021-22; L0565, 2021-22; L0944, 2021-22]
- Paid off-page SEO link-building agencies were judged not worth their cost. One costly contract in the thousands of dollars per month produced results that did not justify the price. Affiliate outreach to niche blogs is a cheaper link-building alternative. [L0666, 2024]

### Tracking Outreach

- ** Track every contact in one place. The Master Database lists every contact ever reached through the skyscraper method. Check it before each new outreach project to avoid contacting the same site too often. [L0422, 2021-22]
- ** The Outreach Batch folder in Google Drive keeps one sheet per outreach batch, building a history of all outreach campaigns. [L0422, 2021-22]
- ** The Success Database records every site that gave a backlink after outreach. These contacts are good candidates for future relationships and further requests. [L0422, 2021-22]
- ** Duplicate outreach risk begins with the second outreach project, because the first campaign has no earlier contacts to conflict with. From the second project onward, check the Master Database before every new campaign and record every new contact in it. [L0422, 2021-22]
- ** The Master Database in Google Drive includes two duplicate-check tabs, one named Duplicate Check (Shotgun) and one named Duplicate Check (Guest Post). Use them to see whether a prospect was already contacted in the same outreach type before adding it to a new batch. [L0422, 2021-22]
- ** Each Master Database row links a prospect site to your own article and to the competitor URL that the prospect already links to. Recording both sides shows which competitor pages earned links and which of your articles were pitched to them. [L0422, 2021-22]
- ** Setting up the outreach tracking sheets in Google Drive:
  1. Make a copy of each of the four template sheets (Master Database, No Email Database, Backlink Success Database, Outreach Batching template) into your own Google Drive, or download them as Excel files if you prefer offline work.
  2. In My Drive, create a folder named Outreach Batching.
  3. Save the Outreach Batching YYYY.MM.DD (Template) sheet inside that folder.
  4. For each new outreach batch, make a copy of the template inside the folder.
  5. Name each copy "outreach batch" followed by the date of the batch.
  [L0422, 2021-22]
- ** Master Database columns, in order:

| Your Article | Topic | Prospects URL | Prospects Root Domain | Competitors URL | Competitors Root Domain | Email Address | Name |
|---|---|---|---|---|---|---|---|

  [L0422, 2021-22]
- ** No Email Database columns, in order:

| Your Article | Topic | Prospects URL | Prospects Root Domain | Competitors URL | Competitors Root Domain | Email Address | Name | Date |
|---|---|---|---|---|---|---|---|---|

  [L0422, 2021-22]
- ** Backlink Success Database columns, in order:

| Date Linked | Date Outreached | Type | Followup No. | Prospect URL | Our URL | Email | Name |
|---|---|---|---|---|---|---|---|

  [L0422, 2021-22]
- ** Outreach Batching YYYY.MM.DD (Template) columns, in order:

| Your Article | Topic | Prospects URL | Prospects Root Domain | Competitors URL | Competitors Root Domain | Email Address | Name |
|---|---|---|---|---|---|---|---|

  [L0422, 2021-22]

### Outsourcing Link Building

- ** Link building becomes worth outsourcing once it is affordable and the owner has run the tasks personally enough to understand them. Outsourcing is a point to reach over time, not something to do on day one. [L0945, 2021-22]
- ** Consistent outsourcing of link building leads to a steady flow of backlinks, which speeds up SEO progress and organic traffic growth. The benefit comes from regular work, not from occasional bursts. [L0945, 2021-22]
- ** The four main link-building methods that can be delegated are the Skyscraper method, resource page link building, broken link building and personal link outreach. Each can be outsourced with its own SOP and tasks. [L0945, 2021-22]
- ** The E-commerce Skyscraper Method is adapted for online stores. Parts of it, including much of the process, can be delegated to a virtual assistant. [L0944, 2021-22]

### Backlink Basics

- A backlink is any clickable link on another website that leads to your store's homepage or any other page of the store. [L1227, 2020-26]
- Backlink quality depends on the authority of the linking site. One link from a strong, relevant site with high domain authority can give a bigger boost than hundreds or thousands of links from sites with low domain authority. [L1227, 2020-26]
- A healthy link profile mixes several link sources, but the links are not equal in value. [L1227, 2020-26]
- Social profiles on YouTube, Facebook, Instagram and Pinterest that link to the store feed into domain authority. Posts by other people that share product pages or blog posts with a link back to the store count too. [L1227, 2020-26]
- Search engine friendliness, meaning how well the site is optimized on-page, is a third factor that feeds into domain authority alongside backlinks and social signals. [L1227, 2020-26]
- In a Backlinko and Ahrefs analysis, the number one Google result had 3.8 times more backlinks than positions 2 to 10. [L1461, 2021-22]
- Page authority is a third-party score, such as the one Ahrefs publishes, that estimates a page's strength. Google does not use it, and the closest Google concept is PageRank. Domain Authority is likewise a third-party metric rather than a Google one. [L1465, 2021-22]
- Organic backlinks usually point to the home page, while proactive link building should target content pages and cornerstone pages. As a store grows, its home page collects most of the backlinks, and that link value reaches other pages through the main menu. [L1465, 2021-22]

### Domain Authority

- Domain authority is a score from 1 to 100 built from on-site optimization together with external links pointing to the store. A higher score improves the chances of ranking well, especially for competitive keywords. [L1227, 2020-26]
- Broad, competitive keywords need a high domain authority. Niche keywords, collection-style keywords, most product pages and some blog posts need much less, because competition for them is lower. [L1227, 2020-26]
- Track domain authority over time and aim for steady upward movement as more websites link to the store. Check it periodically rather than once. [L1227, 2020-26]
- Running competitor sites through the same tool shows which domain authority level you should aim for when targeting broad keywords in your niche. [L1227, 2020-26]

**Steps to check a domain's authority**

1. Enter the domain into Moz.com's domain analysis tool.
2. Click check authority. [L1227, 2020-26]

**Reference points**

| Example | Domain authority | Context | Source |
|---|---|---|---|
| New, unlaunched demo store | 8 out of 100 | Score on Moz.com | [L1227, 2020-26] |
| Established store, more than 10 years old, over 2,200 linking websites, rankings for over 794 keywords | 42 | Still receives a lot of organic traffic | [L1227, 2020-26] |


Part 27 of 30 of "14. SEO and Content: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/14-seo-and-content.md · Previous: https://dlichters.com/ai/ecom/deep/14-seo-and-content/26-link-building-and-off-page-seo.md · Next: https://dlichters.com/ai/ecom/deep/14-seo-and-content/28-link-sources.md
