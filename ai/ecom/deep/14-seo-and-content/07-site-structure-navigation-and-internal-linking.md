<!-- part of ecom/deep/14-seo-and-content.md -->
Part 7 of 30 of "14. SEO and Content: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/14-seo-and-content.md · Previous: https://dlichters.com/ai/ecom/deep/14-seo-and-content/06-category-mapping-and-topical-authority.md · Next: https://dlichters.com/ai/ecom/deep/14-seo-and-content/08-technical-seo-crawling-indexing-speed-and-mobile.md

## Site Structure, Navigation and Internal Linking

### Site structure and link depth

- A basic site structure should be flat rather than deep, and it should contain no orphan pages. An orphan page is a page that no internal link includes in the site structure. [L1465, 2021-22]
- In a flat structure, no page should be more than four internal links away from the home page. [L1465, 2021-22]
- Treat the home page as the hub of the site. Aim for three or even two links to key pages if the structure still makes sense for shoppers, but four links is the maximum, not the target. [L1465, 2021-22]
- Count links, not clicks, when measuring depth. Google follows links and does not click menus, so a mega menu that displays subcategories on the same page still counts each step as a link. [L1465, 2021-22]
- Mega menus can make a deep hierarchy look shallow because all subcategories appear without a click. Collections nested inside collections inside a mega menu add links that search engines follow, so check the link count instead of the number of visible clicks. [L1465, 2021-22]
- The right depth is not a fixed number. It depends on the nature of the products and how customers expect them to be organized, so a flat structure must still make sense from a shopper's point of view. [L1465, 2021-22]
- Site structure should be laid out so that visitors and search engine crawlers can both move through it easily. [L1227, 2020-26]
- Link value passes from a page that receives an external backlink to the pages it links to, so a backlink to one page benefits the linked pages beneath it. Site structure determines how far that value reaches. [L1465, 2021-22]
- Internal site structure matters for SEO for three reasons: it helps search engine crawlers move through the site and discover new pages, it lets link value from backlinked pages flow to other pages, and it helps shoppers find products, which indirectly supports SEO through better user engagement. [L1465, 2021-22]

**Audit procedure to flatten the structure** [L1465, 2021-22]

1. Go through the product pages, which usually sit at the bottom of the structure.
2. For each product page, count the internal links needed to reach it from the home page, including links inside mega menus.
3. Flag every product page that needs more than four links.
4. Restructure menus and collections so each flagged page is reached in four links or fewer, and try for three or two where the product organization still makes sense for customers.

### Orphan pages

- Orphan pages are pages with no internal links pointing to them, which makes them hard for crawlers to find and less likely to be crawled. Orphan pages should generally be avoided, although there are exceptions where they are intentional. (older, 2021-22 for one source; the exception wording is from one source 2021-22) [L0397, 2021-22]
- A page that receives no internal links, and is not reachable from the main menu or homepage, is an orphan page. Search engines find and interpret orphan pages poorly, so every blog or collection needs at least one internal link from the site structure. [L1269, 2025-26]
- Orphan pages are pages with no internal links pointing to them, often created for a single ad or search term. If still needed, add at least one internal link so Google can crawl them; if not needed, delete and redirect to the nearest relevant collection page; if they should stay out of search, noindex them. [L1372, 2021-22]
- Orphan pages can only be discovered by search engine crawlers through the sitemap or through external backlinks, and visitors cannot reach them from any other page on the site. Each orphan page therefore needs either an internal link or a deletion with redirect. [L1372, 2021-22]
- On e-commerce sites with many products, orphan pages are typically collection or category pages, but they can also be product pages, opt-in landing pages for a lead magnet, or admin pages. Orphan pages mess up site structure and crawling and are harder for both shoppers and search engines to find, so avoid them. [L1465, 2021-22]
- Creating collection pages only as landing pages for paid ads (for example Google search text ads or Facebook ads) and leaving them out of all navigation creates orphan pages. Even a landing page should get at least one internal link from another page on the site. [L1465, 2021-22]

**Fix options for an orphan page** [L1465, 2021-22]

1. Add the page to the main menu.
2. Add it as a sub-collection inside an existing collection.
3. Add at least one link to it from another page on the site, such as a content page.

- A page audit in an SEO tool such as Ahrefs or Raven Tools finds orphan pages automatically. Fixing them is a medium-priority task rather than an urgent one, but it is worth doing. [L1465, 2021-22]

### Navigation and main menu

- Every product must belong to at least one collection and be reachable from the main navigation, because customers browsing the site would otherwise never find it. Linking products into the navigation also helps search engines reach every page. [L1145, 2021-22]
- Put the most important pages in the main menu so they receive internal links from the home page. Ensure they are linked there as well as from other places. [L1465, 2021-22]
- A well-planned main menu creates many internal links from the home page. Over time the home page usually collects the most backlinks, because people who discover a business often link to its home page, and its link value flows out through the main menu. [L1465, 2021-22]
- A high-value collection page should be featured in the main menu. Sub-collections can also link back up to their parent collection to add internal links. [L1465, 2021-22]
- Do not label main menu items generic terms such as Shop or Catalog. Use product types and keywords that customers search for, such as the specific product names of your store, because generic labels lead to long link dumps that help neither customers nor SEO. [L1303, 2021-22]
- Blog pages are usually added after a store starts growing, because they serve informational purposes. Create the blog post, then add its link to the navigation like any other page. [L1326, undated]
- Keep the home link in the navigation, since most sites link to their homepage and it does not hurt search rankings. Users click the logo, so a separate home link is optional. [L0964, 2023]

### Breadcrumbs

- On Shopify, breadcrumb navigation is a site-wide setting that is either turned on or off in the theme; on other platforms it may need to be implemented page by page. [L1191, 2021-22]
- Breadcrumb navigation helps customers find their way and also builds internal links quickly, which search engines value. [L1191, 2021-22]
- Breadcrumbs can be added to a Shopify store because product categories already exist in the store. Their SEO impact was uncertain at the time of the call, so test before relying on them. [L0835, 2023]
- **Where the sources differ:** one source (2023) calls the SEO effect uncertain and recommends testing; one source (2021-22) treats breadcrumbs as a quick way to build internal links. Both agree on the customer benefit. Enable them, then measure before counting on an SEO gain. [L0835, 2023; L1191, 2021-22]

### Internal link types, anchor text and placement

- Internal links come in two types: navigational links, which come from menus and site navigation, and contextual links, which sit inside the body text of pages such as blog posts. A site needs both types to get the best SEO results. [L1465, 2021-22]
- Contextual links help search engines discover new content and understand which pages are related. If several articles on one sub-topic link to each other, search engines treat the site as more authoritative on that topic. [L1465, 2021-22]
- Internal links between a store's own pages also help Google judge the site's context and relevance, and they are a separate lever from external backlinks. Both need to be planned, since strong external links do not replace a sound internal link structure. [L0944, 2021-22]
- Link to related blog posts, product pages and other pages to keep readers on the site. Suggested-post blocks at the bottom of articles, added with an app, are one way to do this. [L0382, 2017]
- Search engines treat pages with many internal links pointing to them as more important than pages with few. Use this to signal which pages matter most and to give those pages more attention. [L1465, 2021-22]
- The more internal links a page receives, the more important search engines consider it and the more context they have about it. Revenue-driving bottom-of-funnel product and collection pages should therefore receive the most internal links, while blogs should not be treated as equally important. [L1269, 2025-26]
- Link value also flows through contextual links to other pages. Link from content pages to the commercially important pages, such as best-selling products, popular collections, and products with better margins, rather than to pages that add little business value. [L1465, 2021-22]
- Do not point many internal links at low-value pages, such as admin pages linked from every page, because search engines may treat them as important. If such a link must exist, make it a nofollow link. [L1465, 2021-22]
- Do not put internal links to low-value pages, such as admin pages or products that rarely sell and do not convert. Instead, decide which pages are most important and build a strategy to link to them more than to other pages. [L1465, 2021-22]
- Place the focus keyword in one or two internal links per page. Do not stuff keywords into every anchor text, because search engines read the text around a link as well as the anchor text itself. [L1465, 2021-22]
- Over-optimized anchor text, such as keywords in every internal link on a page, looks artificial and can hurt rankings instead of helping them. [L1465, 2021-22]
- Internal links between related product pages are acceptable where they make sense. Place them near the bottom of the product description rather than early in the copy. [L1465, 2021-22]
- **Where the sources differ on product-to-product links:** one source (2025-26) sets the default rule that products must not link to other products, as part of the automation rules (see below). one source allows related product links placed near the bottom of the description. Apply the stricter one source rule to automated linking, and treat one source's placement advice as the reference for manual links written into a product description. [L1269, 2025-26; L1465, 2021-22]

### Links by funnel level and cluster building

- Do not link from product or collection pages to top-of-funnel blog articles that only answer general questions, because that moves shoppers away from checkout. Links that answer a purchase question on the page itself, such as a sizing guide on a product page, keep shoppers closer to buying. [L1269, 2025-26]
- Internal link priority by funnel level:

| Funnel level | Typical pages | Internal link share |
|---|---|---|
| Top of funnel | Informational blog articles | Smallest |
| Middle of funnel | Guides and category-style blog articles, middle-funnel collections | Medium |
| Bottom of funnel | Product pages and collection pages | Largest share, clearly more than every other level |

  Links should flow from top to bottom of the funnel, not in reverse. [L1269, 2025-26]
- Use 3 to 5 internal links on each collection page, placed as a mini navigation. On each blog post, build a couple of internal links to collection pages or other blog posts so content forms clusters. [L0883, 2025-26]
- Plan URLs before writing: list the planned collection URLs (for example /collections/men's-running-shorts) and blog URLs, including pages that do not exist yet. Give that list to the writing prompt so every new page links to the planned pages, which builds clusters as content is produced. [L0883, 2025-26]
- Linking from an older page that already gets daily traffic to a new, related page gives the new page two sources of visitors: link equity from the older page's backlinks and readers who click through from the existing link. This makes internal linking from high-traffic old posts a practical way to kick-start a new page. [L0385, 2021-22]
- Internal linking is the first priority in an SEO clean-up because it shows search engines which pages matter and how they relate to each other. Pages without solid internal links are poorly understood and rarely rank. [L1269, 2025-26]
- Both zero internal linking and excessive, random internal linking hurt SEO. Zero linking leaves pages disconnected, while linking wherever possible dilutes the signal of which pages are important. [L1269, 2025-26]

### Cornerstone content

- Cornerstone content, also called pillar content, is a small set of pages at the heart of the business that are most valuable either financially or as the entry point to a competitive, high-volume search term. These pages are built to rank at the top of page one. [L1465, 2021-22]
- The cornerstone strategy is an advanced SEO method for competitive keywords against established sites. Most sites skip it, so it can help a newer site overtake them. [L1465, 2021-22]

**Cornerstone strategy steps** [L1465, 2021-22]

1. Identify the content pages that sit at the heart of what the business is about.
2. Include those pages in the main navigation, not only in a blog or resources section.
3. Feature those pages on the home page.
4. Send as many internal links as possible from other content and collection pages to the cornerstone content.
5. Build four or five smaller content pieces on related topics, link each of them to the cornerstone content, and build external backlinks to each smaller piece.
6. Build external backlinks directly to the cornerstone content as well.

- A surfboard shop could make an ultimate guide to surfboards its cornerstone page, aimed at a broad keyword that gets tens or even hundreds of thousands of searches a month. The page is large, detailed, and comprehensive, and it sends traffic that can later be retargeted or added to an email list. [L1465, 2021-22]
- Link flow in a cornerstone structure runs upward: supporting pages link up to the cornerstone page. Do not link the cornerstone page back down to them, so that it keeps more internal links than most other pages on the site. [L1465, 2021-22]
- Supporting pages on related angles let you build many more backlinks in total than one page can receive. Their link value flows into the cornerstone page, which raises its page authority or page rank far beyond what direct backlinks alone would achieve. [L1465, 2021-22]
- A cornerstone guide on a high-ticket product can link to sub-guides split by budget, such as best options under $10,000 and under $5,000. This lets one hub page cover several related search intents at different price points. [L1465, 2021-22]
- Cornerstone pages in the main menu also serve shoppers who browse the navigation rather than search for a specific product. Those shoppers are usually in the middle of the funnel, so these pages can support conversion as well as SEO. [L1465, 2021-22]

**Plan cornerstone content from the content plan** [L1465, 2021-22]

1. Review the content plan and identify which pages will be the cornerstone content. There can be more than one.
2. Decide which other content pages will be created and receive backlinks, and link them into the cornerstone content.
3. Decide which collection pages should link into the cornerstone content.

- A collection page can serve as cornerstone content for a high-volume, competitive keyword. Backlinks to collection pages are hard to build, so link to them heavily from content pages that do receive backlinks. [L1465, 2021-22]

**Case: Rain or Shine Golf, cornerstone structure in 2020** [L1465, 2021-22]

Rain or Shine Golf, a golf simulator and accessories store, used a cornerstone structure in 2020. Its main menu showed its main product types, brands, and resource pages, and product drop-downs led to collections, which is the usual setup. Several individual high-priority products were also placed at the top level of the menu, such as the SkyTrak Practice Golf Simulator Package at $3,399.00, the SkyTrak SwingBay Golf Simulator at $7,299.00 (compare-at $7,799.00), and the Uneekor QED SwingBay Golf Simulator at $11,299.00.

The store also placed several guides in the main menu, including Best Golf Simulators of 2020, Best Golf Launch Monitors, and Best Golf Hitting Mats, plus a Best Golf Simulator Screens and Enclosures guide. These guides target keywords with high search volume that shoppers use early in their buying journey.

A Resources page collected dozens of content pages, and many of these pages linked into the few guides in the main menu. The guides also linked to collection and product pages, giving the store a pyramid of internal links.

The guide page opens by saying a home simulator once cost a $20,000 minimum and can now be had for well under $10,000, or even $5,000. It then lists links to sub-guides such as Best Indoor Home Golf Simulator Under $10,000 and Best Golf Simulators Under $5,000.

The coach says the approach gets good traffic and sales results for the store, and the cornerstone pages also serve shoppers in the middle of the funnel who browse the menu rather than searching for a product.

### Internal link automation and review

- Define explicit internal linking rules before any automation: blog URLs may link to other blog URLs or to collections, collection URLs may link to other collections, and products must not link to other products. Four or five such rules are enough to control a store's link structure. [L1269, 2025-26]
- In one audit of 300 AI-suggested internal links from an export of 300 blog articles, about 100 suggestions were usable as they were. About 200 were invalid: the URL existed but the referenced content did not, or the suggested link was poor. This shows AI link suggestions need a manual check before anything goes live. [L1269, 2025-26]

**Safer workflow for internal link suggestions** [L1269, 2025-26]

1. Crawl or export the relevant pages with their URLs and content.
2. Let the AI propose candidate internal links from existing content, based on your linking rules.
3. Review every candidate manually and mark it as green light, needs edit, or delete.
4. Apply only the approved links, and only after the review is complete.

- Small teams and solo operators can accept more automation for internal links, but the AI should still never publish link changes unreviewed. Even with a small site, check suggested links for hallucinated content before applying them. [L1269, 2025-26]

#### Further details

- Internal links show search engines how the site is structured and which pages cover which subjects. They are also a way to move ranking value between pages. [L0462, 2021-22]

- Backlinks to a content page pass part of their value through its internal links to other pages. A content page with many backlinks that links to a collection page can lift that collection page even if the collection page has no backlinks itself. [L0462, 2021-22]


Part 7 of 30 of "14. SEO and Content: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/14-seo-and-content.md · Previous: https://dlichters.com/ai/ecom/deep/14-seo-and-content/06-category-mapping-and-topical-authority.md · Next: https://dlichters.com/ai/ecom/deep/14-seo-and-content/08-technical-seo-crawling-indexing-speed-and-mobile.md
