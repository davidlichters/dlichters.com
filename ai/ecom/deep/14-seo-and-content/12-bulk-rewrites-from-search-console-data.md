<!-- part of ecom/deep/14-seo-and-content.md -->
Part 12 of 30 of "14. SEO and Content: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/14-seo-and-content.md · Previous: https://dlichters.com/ai/ecom/deep/14-seo-and-content/11-search-listings-titles-meta-descriptions-and-snipp.md · Next: https://dlichters.com/ai/ecom/deep/14-seo-and-content/13-structured-data-and-rich-results.md

### Bulk rewrites from Search Console data

- Bulk SEO update workflow with an AI tool:
  1. Pull query-level Search Console data for the chosen pages over about 90 days, including impressions, position and clicks for each query.
  2. Scrape the current title, meta title, H1 and intro of each page so the AI can compare them with the new targets.
  3. Ask the AI to write rewrites for each page, anchored to its highest-opportunity query, and to output a CSV with one row per page.
  4. Export the CSV to a spreadsheet, edit it, and check it critically for topic changes, duplicated text and weak targets.
  5. Verify the CSV before import: every row should have the same number of columns, and quoting should be correct.
  6. Apply the approved changes to Shopify in bulk, either through a bulk import app or a Shopify MCP connection.
  7. Run the internal link rules through the same process: review outside Shopify first, then apply.
  [L1269, 2025-26]
- Bulk rewrite prompt:

```
You are working on an online store. For each page URL in the list below, use its Search Console query data from the last 90 days. Pick the single highest-opportunity query for each page, preferring queries with many impressions and positions just outside the top results. Then write a new H1, a new meta title, a new meta description and a new first paragraph that stay on the page's existing subject, lead with the target query, and capture the secondary queries naturally in the intro. Do not change the subject of a page, and do not optimize a page around just one item from a set of similar topics. Output a CSV with the columns URL, section, clicks (90d), primary target, impressions, average position, current H1, new H1, current meta title, new meta title, new meta description and new intro. Flag any page where the best target query does not fit the page's topic.
```
[L1269, 2025-26]

- The same CSV rewrite pipeline used for blog posts can be extended to product meta titles, product intros, collection meta titles, collection intros and collection H1s. Build each group from its own query data, and rewrite product or collection pages only where search data shows real demand. [L1269, 2025-26]
- Rewriting the title, meta title and first paragraph of a ranking page is among the fastest ways to improve it. Target the highest-opportunity query or the striking-distance query, and capture secondary query variants in the intro. [L1269, 2025-26]
- When a query has many impressions but zero clicks, the snippet is probably not answering what the searcher wants. Rewrite the title and intro to answer that exact question directly, for example by stating the name of the thing being asked about. [L1269, 2025-26]
- Check that an AI rewrite keeps the same subject as the existing page. If the new H1 and meta title describe a different entity than the one ranking now, the page can lose its current rankings. [L1269, 2025-26]
- Click-prompting title framings such as myth-busting can raise CTR. Use them only when the content is accurate and delivers on the promise of the title. [L1269, 2025-26]
- Example: a fear-of-sharks article had about 617 impressions for `phobia of sharks` and about 604 for `fear of sharks`, both near position 8, yet zero clicks. The snippet never named the medical term for the fear that searchers were looking for. Putting that term into the title and opening lines lets the result answer the question directly. [L1269, 2025-26]
- Example: a great-white-shark facts article earned 80 clicks in the last 90 days for the query `facts about great white sharks`, at about position 10.5 with about 814 impressions. The rewrite kept the page on its broad subject and captured secondary queries such as `10 fun facts about great white sharks` and `interesting facts about great white sharks` in the intro. A myth-busting meta title was proposed to raise clicks, but only if the content delivers on that promise. [L1269, 2025-26]

### Pre-publish checks

- Check the listing before publishing: confirm the search title matches the product title, the URL is clean, and the description is a short text rather than the auto-pulled main description. [L1166, 2021-22]
- Run this checklist for every new page, and go back and do it for existing pages that lack custom meta data:
  1. Pick the focus keyword for the page.
  2. Put the focus keyword in the meta title.
  3. Put the focus keyword in the meta description.
  4. Put the focus keyword in the URL.
  5. End the meta description with a call to action.
  6. Make sure structured data is installed and up to date.
  7. Optimize the page for sitelinks where possible.
  8. Repeat this checklist for every new page, and go back and do it for existing pages that lack custom meta data.
  [L1026, 2021-22]
- The Page title and Description in Edit website SEO must be accurate at launch. [L1264, 2021-22]


Part 12 of 30 of "14. SEO and Content: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/14-seo-and-content.md · Previous: https://dlichters.com/ai/ecom/deep/14-seo-and-content/11-search-listings-titles-meta-descriptions-and-snipp.md · Next: https://dlichters.com/ai/ecom/deep/14-seo-and-content/13-structured-data-and-rich-results.md
