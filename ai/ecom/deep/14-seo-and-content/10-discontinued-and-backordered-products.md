<!-- part of ecom/deep/14-seo-and-content.md -->
Part 10 of 30 of "14. SEO and Content: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/14-seo-and-content.md · Previous: https://dlichters.com/ai/ecom/deep/14-seo-and-content/09-duplicate-and-thin-content-canonicals-and-urls.md · Next: https://dlichters.com/ai/ecom/deep/14-seo-and-content/11-search-listings-titles-meta-descriptions-and-snipp.md

### Discontinued and Backordered Products

- Two approaches apply to discontinued products, depending on whether the product will come back and whether the page ranks:
  - **Product will not be sold again, page has little ranking value:** delete the product and set a 301 redirect so visitors and Google do not hit a 404 error. [L1414, 2021-22]
  - **Product page still ranks in Google:** keep the page live and redirect visitors to products you can sell, because deleting it wastes the ranking it earned. [L0942, 2022]
- Redirect a discontinued product URL to its upgraded or updated replacement product rather than to a generic page. [L1414, 2021-22]
- Keeping old product pages live and pointing them to a replacement preserves the search rankings they earned. People keep searching old model names for years. Competitors who delete their pages lose those rankings, so your replacement page can capture the traffic. [L1287, 2025]
- Deleting the product page of a discontinued or backordered product wastes the ranking it earned, because Google eventually de-indexes the page and the search traffic is lost. Keep the page and redirect the visitor to products you can sell. [L0942, 2022]
- Popular product pages that rank well organically can keep bringing traffic without paid ads, so they can serve as sales pages for other products. This only works when the page is no longer orderable and points to available alternatives. [L0942, 2022]
- Handling a discontinued or long-backordered product that still ranks in Google:
  1. Keep the product page live but make the product not orderable, so no Add to Cart is possible. [L0942, 2022]
  2. Stop running paid traffic to that page; organic rankings keep sending visitors. [L0942, 2022]
  3. State that the product has been discontinued by its manufacturer. [L0942, 2022]
  4. List the top three similar products that are available and explain why you recommend each one. [L0942, 2022]
  5. Link directly from the page to the product pages of those alternatives. [L0942, 2022]
- When a discontinued product's page still ranks in Google and a newer variation of it exists, keep the old page and point visitors to the new variation. Make the old page non-orderable, state that the older version has been discontinued by its manufacturer, and link to the newer variation. [L0942, 2022]
- Zero-view pages that are not going to change should be deleted and 301-redirected, as described under Thin and Duplicate Content Audit. [L1372, 2021-22]
- A product that is removed from sale should not be hidden for long periods, because Google can drop hidden products from the index. [L1414, 2021-22]

### Redirect Economy and Backlinks

- Before deleting a page with backlinks, check them in Ubersuggest or Ahrefs, since both tools show which pages have backlinks. [L1414, 2021-22]
- Ubersuggest and Ahrefs can show which pages have backlinks, and this should be checked before deleting a page or changing its URL. [L1414, 2021-22]

### Reading the Google Search Console Coverage Report

- Use the Coverage report to identify duplicate pages. The fix for Shopify navigation variant duplicates is generally not required when the main collection URL is the indexed page. [L1283, 2023]
- The Coverage report sorts URLs into four statuses:
  - **Error:** not indexed because of a problem.
  - **Valid with warnings:** indexed but with issues to check.
  - **Valid:** indexed and eligible to appear in search.
  - **Excluded:** not indexed, though Google has found the URL.

  Each status can be opened to see its reasons and affected URLs. [L1333, 2021-22]
- Status Valid means the page is in Google's index and can appear in organic search results. Status Excluded means the page is not indexed, though Google knows it exists. Excluded pages are the priority for SEO fixes. Counts can exceed the real number of store pages because a page can appear under several exclusion reasons at once. In the demo example, 704 pages were valid and 5,480 were excluded for a store with roughly 500 products. [L1333, 2021-22]
- A Coverage report can show Excluded pages for a store with far fewer real pages, because the same page can be counted under several reasons. Use the per-reason breakdown and the Examples table to see the actual affected URLs rather than relying on the total. [L1333, 2021-22]
- The Coverage report has a Primary crawler setting, which is Smartphone by default, so the statuses show how Google's smartphone crawler sees the site. The report displays a Last updated date, so check that date before acting on the counts. [L1333, 2021-22]
- In the Coverage detail view, each example URL row shows a Last crawled date. Use it to judge whether Google has visited a page recently before deciding that the page needs fixing. [L1333, 2021-22]
- Search Console indexing reports often list excluded pages that were never meant to be indexed, such as utility or duplicate pages. Check which URLs show issues and confirm that product pages and main pages are indexed. If only utility-type pages are excluded, it is usually not a problem. [L1115, 2024]
- Check the Google Search Console Coverage report to identify duplicate pages. [L1283, 2023]
- A drop in indexed pages can be caused by duplicates, so review which sitemap pages are indexed before acting. [L0835, 2023]
- Alternate pages with a canonical tag on a young site are not necessarily errors. They are expected when the store has duplicate variations. Check whether real content is missing from the index before acting on them. [L0835, 2023]

### Excluded Reason: Alternate Page with Proper Canonical Tag

- Excluded pages with the reason Alternate page with proper canonical tag are normal and not an error. Shopify creates several URLs for the same product, via collections, tags and similar, and Google indexes one canonical version while excluding the others. [L1333, 2021-22]
- The canonical choice should still be the intended one, for example the short `/products/` URL rather than long collection-path URLs. [L1333, 2021-22]

### Excluded Reason: Crawled, Currently Not Indexed

- Crawled, currently not indexed is the reason to investigate. Google has crawled the page but chosen not to index it, which can indicate duplicate content or thin content. [L1333, 2021-22]
- Check the page for duplicated content, strong similarity to another page, or very little unique content, and improve it. [L1333, 2021-22]
- Such pages do not need to be resubmitted for crawling, since they may be indexed later. [L1333, 2021-22]

### Diagnosing a Problem URL in Coverage

1. Open the reason, for example Crawled, currently not indexed or Alternate page with proper canonical tag, and read the Examples table of affected URLs. [L1333, 2021-22]
2. Click the page in the Examples table to open the side panel, or use the URL Inspection tool on it. [L1333, 2021-22]
3. For robots.txt blocks, run the robots.txt tester, find the blocking rule, and update robots.txt only if the block is unwanted. [L1333, 2021-22]
4. For a noindex tag, remove the tag from the live page if indexing is desired. Then use Test live URL and, if noindex is gone, Request Indexing. [L1333, 2021-22]
5. For 404 errors on pages that were deleted, add a redirect to a relevant page if needed. [L1333, 2021-22]
6. For soft 404s, redirect chains or 5xx server errors, fix the page or server behaviour, then re-check. [L1333, 2021-22]
7. Export the URL list when many URLs are affected for bulk analysis. [L1333, 2021-22]

### Coverage Exclusion and Error Reasons: Standard Fixes [L1333, 2021-22]

| Reason | Status | Meaning / action |
|---|---|---|
| Server error (5xx) | Error | Server returned a 500-level error; fix server |
| Redirect error | Error | Redirect chain too long, redirect loop, too-long URL, or bad/empty URL in chain; debug with Lighthouse |
| Submitted URL blocked by robots.txt | Error | Remove or alter the robots.txt rule if the block is unwanted |
| Submitted URL marked 'noindex' | Error | Remove the noindex meta tag or HTTP header if indexing is wanted; verify with URL Inspection |
| Submitted URL seems to be a Soft 404 | Error | Server returned a soft 404; fix the page |
| Submitted URL returns unauthorized request (401) | Error | Remove authorization requirement or allow Googlebot access; check in incognito mode |
| Submitted URL not found (404) | Error | Non-existent URL submitted; fix or remove it from the sitemap |
| Alternate page with proper canonical tag | Excluded | Normal for duplicate product URLs; Google chose a canonical |
| Page with redirect | Excluded | Page redirects elsewhere; usually no action |
| Not found (404) | Excluded | Deleted page with no redirect; add a redirect if a relevant page exists |
| Crawled - currently not indexed | Excluded | Crawled but not indexed; check for duplicate or thin content |
| Blocked by robots.txt | Excluded | Blocked by robots.txt rule |
| Excluded by 'noindex' tag | Excluded | Noindex tag present on the page |
| Soft 404 | Excluded | Page looks empty or error-like to Google |
| Crawl anomaly | Excluded | Unspecified crawl problem; investigate |


Part 10 of 30 of "14. SEO and Content: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/14-seo-and-content.md · Previous: https://dlichters.com/ai/ecom/deep/14-seo-and-content/09-duplicate-and-thin-content-canonicals-and-urls.md · Next: https://dlichters.com/ai/ecom/deep/14-seo-and-content/11-search-listings-titles-meta-descriptions-and-snipp.md
