<!-- part of ecom/deep/14-seo-and-content.md -->
Part 8 of 30 of "14. SEO and Content: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/14-seo-and-content.md · Previous: https://dlichters.com/ai/ecom/deep/14-seo-and-content/07-site-structure-navigation-and-internal-linking.md · Next: https://dlichters.com/ai/ecom/deep/14-seo-and-content/09-duplicate-and-thin-content-canonicals-and-urls.md

## Technical SEO: Crawling, Indexing, Speed and Mobile

### Technical SEO: Role in the Overall Process

- Technical SEO covers the work that lets search engine crawlers reach, understand and index a website. If a crawler cannot properly access a site, the quality of on-page content or on-page SEO does not matter, because the pages will never appear in search results. *Older advice (2021-22).* [L1362, 2021-22]
- Technical SEO is the first layer to fix before on-page SEO and content work, since indexing is a prerequisite for ranking. Crawlers also decide which pages belong in the index, so some pages should be kept out of it on purpose. *Older advice (2021-22).* [L1362, 2021-22]
- Fixing access and crawl problems is part of crawl optimization, not just a separate technical issue. If the crawler has trouble accessing pages, it may cover only part of a site on a given visit, leaving some pages uncrawled until a later pass. *Older advice (2021-22).* [L1333, 2021-22; L1362, 2021-22] [L1397, 2025-26]

### Crawl Budget

- Search engines allocate a limited amount of crawl time and a limited number of pages per visit, so they rarely crawl an entire large site in one pass. Pages can be crawled incompletely or skipped, which delays indexing of new pages and updates. *Older advice (2021-22).* [L0397, 2021-22]
- Crawl budget only matters for larger sites, such as e-commerce stores with hundreds, thousands or tens of thousands of pages. A site with about five pages is crawled completely on every visit and needs no crawl budget work. *Older advice (2021-22).* [L0397, 2021-22]
- If a large site contains many low-value pages, the crawler may spend its budget on them and miss the optimized, high-priority pages. The crawler does not follow your priorities by default, so the goal is to make its time as efficient as possible. *Older advice (2021-22).* [L0397, 2021-22]
- Low-value pages that absorb crawl time can push well-optimized pages out of a crawl. Because the same pattern tends to repeat on each later visit, priority pages may be indexed late or missed for a long period. *Older advice (2021-22).* [L0397, 2021-22]
- You cannot increase, reduce or see the exact value of a site's crawl budget. The only lever is to remove obstacles so the crawler works more efficiently. *Older advice (2021-22).* [L0397, 2021-22]
- The overall aim of crawl optimization is to make sure crawl time goes to pages that matter for SEO, and that the site is easy to navigate for crawlers. Pages that add no value should not consume crawl time that better pages need. *Older advice (2021-22).* [L0397, 2021-22]

#### Factors That Make Crawling More Efficient

- **Internal links:** They give crawlers paths between pages and help them understand site structure. Few internal links leave some pages hard to reach and less likely to be found. *Older advice (2021-22).* [L0397, 2021-22]
- **Flat structure:** A flat site structure, where important pages are reachable within few clicks from the main navigation, makes crawling considerably easier. Site architecture and menu structure both influence how effectively a site is crawled. *Older advice (2021-22).* [L0397, 2021-22]
- **Page speed:** Slow page speed increases the time a crawler needs to get through a site, so faster-loading pages let more of the site be crawled in the same budget. Slow loading and slow-to-process pages both lengthen each crawl pass, so a site with heavy pages gets fewer pages crawled in the same time budget. *Older advice (2021-22).* [L0397, 2021-22]
- **Redirect batches:** Large batches of redirects, for example from mass URL changes that were not strictly necessary, slow down crawling. *Older advice (2021-22).* [L0397, 2021-22]

### Site Audits and Indexation Checks

#### Free Crawlers

- Screaming Frog SEO Spider is a free website crawler for up to 500 URLs, useful for on-page SEO audits. Xenu's Link Sleuth is another free, similar crawler. [L0575, 2014]

#### Checking Indexation With a Site Search

1. Search `site:yourdomain.com` in Google.
2. Check the number of indexed pages:
   - The count should roughly match the number of pages on your site.
   - Too few suggests an indexation issue, such as a robots.txt or robots meta tag problem.
   - Too many suggests a canonical problem. This is common on large CMSs such as Magento or self-hosted platforms and less common on Shopify.
3. Check that title tags are not missing, duplicated or unprofessional.
4. Check that product titles and descriptions are optimized. [L0575, 2014]

#### Ahrefs Site Audit

- The Ahrefs Site Audit report menu includes Internal pages, Indexability, Links, Redirects, On page, Social tags, Duplicate content, Localization, Performance, Images, JavaScript, CSS and External pages. For finding thin and duplicate pages, the Indexability and Duplicate content reports are the relevant ones. *Older advice (2021-22).* [L1372, 2021-22]
- The audit overview shows Health Score (share of internal URLs without errors), Issues distribution (errors, warnings, notices) and Top issues. Top issues include Orphan page (no incoming internal links), 404 page, 4XX page, Meta description tag missing or empty, Page has links to broken page, Page has no outgoing links, Title tag missing or empty, Duplicate pages without canonical and Redirected page has no incoming internal links. Click View all issues and then View affected URLs to export the list. *Older advice (2021-22).* [L1372, 2021-22]
- Procedure for working through an audit:
  1. Open the Ahrefs site audit overview and read the Health Score, Issues distribution and Top issues.
  2. Click View all issues.
  3. Open the issue you need, for example Orphan page (has no incoming internal links).
  4. Click View affected URLs.
  5. Export the list of affected URLs and their values.
  6. Paste the export into the audit spreadsheet, then check each URL for internal links or content and fix it. *Older advice (2021-22).* [L1372, 2021-22]
- Example audit of a drop-shipping store with about 5,337 internal URLs crawled. *Older advice (2021-22).* [L1372, 2021-22]

| Finding | Count |
|---|---|
| Duplicate pages without canonical | 49 |
| Orphan pages (no incoming internal links) | 330 |
| 404 pages | 275 |
| Pages with missing or empty meta descriptions | 248 |
| Pages with missing or empty title tags | 49 |

- The orphan and duplicate lists were exported into the tracker for review. *Older advice (2021-22).* [L1372, 2021-22]
- Another example audit of an e-commerce store with 5,337 internal URLs had 24,702 issues in total: 1,517 errors, 13,058 warnings and 10,127 notices. Of the internal URLs, 4,502 had no errors and 835 had errors. *Older advice (2021-22).* [L1372, 2021-22]
- The same audit found 406,554 links in total, of which 345,992 were crawled, 55,556 were uncrawled and 5,006 were blocked by robots.txt. Read crawl totals with the uncrawled and blocked share in mind. *Older advice (2021-22).* [L1372, 2021-22]
- Automated audit tools are not always fully accurate, so relying only on them can miss issues. A manual review is recommended to be certain nothing is missed. *Older advice (2021-22).* [L1372, 2021-22]

### Crawl Control: robots.txt, noindex and Redirects

#### robots.txt

- Only robots.txt directives block crawling. A noindex tag does not stop crawling. *Older advice (2021-22).* [L1372, 2021-22]
- Editing robots.txt on Shopify:
  - Current (2024): robots.txt can be edited by adding a theme template named robots.txt.liquid. Go to Online Store > Themes > Edit code, then add the template under Templates. Check the changes in Google Search Console after saving. [L1105, 2024]
  - robots.txt cannot be edited by the merchant on Shopify, so noindex is the practical tool there. This statement reflects older platform behaviour and conflicts with the 2024 method above. [L1372, 2021-22]
- Procedure for a 'Submitted URL blocked by robots.txt' error in Google Search Console:
  1. Click the page in the Examples table to open the side panel, then click 'Test robots.txt blocking'.
  2. The robots.txt tester highlights the rule that blocks the URL.
  3. Click 'See live robots.txt' in the tester to see where the file is located.
  4. Edit the rule only if the block is unwanted. If you lack permission to edit the file, contact your hosting provider or check its documentation. [L1333, 2021-22]

#### noindex

- Place this tag in the head of a page to keep it out of the index:

```html
<meta name="robots" content="noindex">
```

[L1372, 2021-22]

- Google treats noindex as a suggestion that keeps the page out of the index. The page can still be crawled. *Older advice (2021-22).* [L1372, 2021-22]
- Adding noindex by editing theme code can accidentally noindex the whole site. One such error went unnoticed for about two weeks, and recovery requires re-indexing from scratch. *Older advice (2021-22).* [L1372, 2021-22]

#### Redirects

- Use redirects only where they are needed, such as when a page is deleted and should point to a replacement. Large batches of unnecessary redirects slow down crawling. *Older advice (2021-22).* [L0397, 2021-22]
- Minimize redirects as part of Shopify speed work. *Older advice (2021-22).* [L1266, 2021-22]

### Handling 404 Errors

- A 404 error means the URL points to a page that does not exist. Every 404 found on the store should be resolved, usually by updating the link or setting up a redirect. Smart SEO reports these errors so they can be fixed. [L1271, 2020-26]
- In Search Console, 404 errors mean the page no longer exists. They often remain because the old URL is still listed in the sitemap. Submitting a fresh sitemap usually removes them. [L0835, 2023]
- Use Google Webmaster Tools (called Google Search Console in the 2022-2025 units) to find indexing errors:
  1. Check the Coverage section for 404 errors, server errors and excluded pages.
  2. Review the Performance section to see which queries drive clicks and impressions.
  3. Monitor for manual penalties or security issues.
  4. Submit sitemaps to ensure all pages are crawlable. [L0226, 2017]

### Getting Pages Indexed

#### Submitting New Pages

- Submit new product pages, blog posts and optimized URLs directly to Google for faster indexing. Without this, Google may take weeks or months to discover and index new pages. [L0226, 2017]
- Request indexing in Google Search Console:
  1. Go to search.google.com/search-console.
  2. Log in with your Google account.
  3. Select your property.
  4. Paste the new page URL.
  5. Click 'Request Indexing'.
  6. Google will crawl and index it immediately or very quickly. *Older advice (2022).* [L0249, 2022]
- Request indexing with URL Inspection (2025):
  1. Go to Google Search Console.
  2. Open URL Inspection from the left sidebar.
  3. Paste the product page URL in the search field.
  4. Click 'Request Indexing' to add the page to Google's crawl queue.
  5. Google will recrawl the page faster than waiting for random indexing. [L0278, 2025]

#### Pages Crawled but Not Indexed

- For pages marked crawled but currently not indexed, confirm that they are real pages you want indexed and not duplicates. Only then look for a fix. [L0835, 2023]

#### Sitemaps

- Submit sitemaps to ensure all pages are crawlable. [L0226, 2017]
- A fresh sitemap usually clears old 404 entries from Search Console. [L0835, 2023]

### Page Speed: Ranking, Conversion and Crawling

#### Speed as a Ranking Factor

The sources disagree on how strongly speed ranks. Both views are given below, with the conditions under which each applies.

- **Strong view:** Site speed directly affects Google organic search rankings, and faster pages rank higher. This is independent of Shopify's hosting and depends on theme lightness, app efficiency and image optimization. *Older advice (2020).* [L0245, 2020]
- **Strong view:** Google uses page loading speed as a signal when deciding how high to rank a product page, so a slow page can lose organic position to faster competitors. Speed fixes are among the quickest SEO gains because their effect can show within days. [L1190, 2020-26]
- **Strong view:** Website speed is a ranking factor, and slow pages lose conversions. [L0226, 2017]
- **Weak view:** Page speed is a Google ranking factor, but it is a weak one. Relevant, high-quality content and search intent match outweigh it, and a slow page can still rank first if its content is better than competitors'. *Older advice (2021-22).* [L1266, 2021-22]
- **When each applies:**
  - Speed matters most when competing product pages have similar content, because then experience becomes the tiebreaker. *Older advice (2021-22).* [L1266, 2021-22]
  - The 2018 mobile speed update affects only the slowest pages and a small share of queries. It applies the same standard whatever platform the site is built on. Google has tracked page performance signals since about 2010. *Older advice (2021-22).* [L1266, 2021-22]
- Site speed must be good enough that a mobile visitor on a weak connection still gets the page. Google treats a blank page after a click as a negative ranking signal. [L1227, 2020-26]
- Page speed on Shopify pages and blog posts depends first on the theme and the installed apps. Image optimization is an additional lever on top of a suitable theme and a lean app setup. [L1321, 2020-26]

#### How Much Speed Is Enough

- A store does not need the fastest page online or a perfect score in speed tools. It only needs to load faster than the sites it competes with in the search results for the same queries. Judge speed relative to those competitors before deciding it is a problem. *Older advice (2021-22).* [L1266, 2021-22]
- Benchmark against competitors:
  1. Enter each main competitor's domain into Google PageSpeed Insights.
  2. Compare FCP, LCP and CLS with your own results.
  3. Only the gap to the sites you rank against matters for SEO. *Older advice (2021-22).* [L1266, 2021-22]

#### Speed and Conversion

- Page speed matters for conversion rate separately from SEO. A visitor who can see and use the page after about three to four seconds is usually fine. Conversion may start to drop once the usable point goes beyond roughly four seconds. *Older advice (2021-22).* [L1266, 2021-22]
- Fully loaded time (often 7 seconds or more) is less relevant, because customers can use the page before everything has finished loading. *Older advice (2021-22).* [L1266, 2021-22]

#### Speed Case Study

- A store had a GT Metrics performance score of 99, a structure score of 95 and an LCP under one second before any changes. After compressing images with Smart SEO and adding descriptive alt text to the product images, scores rose to a performance of 100, a structure of 96 and an LCP of 678 ms, with only small changes. [L1190, 2020-26]

| Metric | Before | After |
|---|---|---|
| GT Metrics performance score | 99 | 100 |
| GT Metrics structure score | 95 | 96 |
| LCP | under 1 second | 678 ms |

### Measuring Page Speed

#### Tools

- Test page speed with at least three tools, because each reports different data:
  - Google PageSpeed Insights: Google's own tool, the one that matters most for search. Free at developers.google.com/speed. It analyzes page load time and gives recommendations for optimization. Use it to identify performance bottlenecks and track improvements. [L1266, 2021-22; L0226, 2017]
  - GTmetrix: technical waterfall and Yahoo-developed YSlow scores. [L1266, 2021-22]
  - WebPageTest.org: real browser runs from chosen locations and devices, e.g. Android or iPhone, with three runs per test. [L1266, 2021-22]
  - Pingdom is similar to GTmetrix and optional. [L1266, 2021-22]

#### Test Order and Scope

1. Test the homepage.
2. Test a random sample of three or four product pages to confirm results are consistent.
3. Test collection pages.
4. Identify which problems to fix based on the results. *Older advice (2021-22).* [L1266, 2021-22]

- Always test each page type separately. A fast homepage does not mean fast product or collection pages. A page-speed test of the homepage URL only tests the homepage. *Older advice (2021-22).* [L1266, 2021-22]
- Always look at both mobile and desktop results in PageSpeed Insights. Mobile scores are usually lower on Shopify, and mobile matters more because most visitors arrive on mobile. *Older advice (2021-22).* [L1266, 2021-22]

#### Reading Scores

| PageSpeed Insights score | Colour | Meaning |
|---|---|---|
| 0-49 | Red | Poor. Priority. |
| 50-89 | Orange | Needs improvement |
| 90-100 | Green | Good |

- Scores in red are the priority. A low score alone is not a reason to panic if competitors score similarly. *Older advice (2021-22).* [L1266, 2021-22]

#### Waterfall Charts

- Each row in a waterfall chart is one asset loaded (HTML, CSS, JS, images, fonts). Long bars and blocking segments show what delays the page. Beige/sandy colour in GTmetrix means waiting for the asset to load. Orange in WebPageTest shows a connection problem. Filter by HTML, CSS, JS or image to isolate the cause. *Older advice (2021-22).* [L1266, 2021-22]

### Core Web Vitals

#### Metrics and Thresholds

- LCP (Largest Contentful Paint) should be under 2.5 seconds for good. This is Google's threshold. *Older advice (2021-22).* [L1266, 2021-22]
- Practical LCP target on Shopify: under 4 seconds. Shopify limits control over some parts of the stack, so the practical goal is 4 seconds even though Google's good threshold is 2.5 seconds. *Older advice (2021-22).* [L1266, 2021-22]
- CLS (Cumulative Layout Shift) above 0.25 on mobile is flagged as a problem. [L1266, 2021-22]
- FID (First Input Delay) is the third metric, measured as input responsiveness. [L1266, 2021-22]
- Field data (real users, 28-day Chrome User Experience collection) and lab data (simulated test run) can differ for the same page. Read both, and treat field data as what Google measures for ranking. *Older advice (2021-22).* [L1266, 2021-22]

#### Core Web Vitals in Search Console

- The Core Web Vitals report in Google Search Console groups URLs as Poor, Need improvement or Good. It is based on Chrome UX Report field data. It names the failing issue per group, such as LCP longer than 4s on mobile or CLS above 0.25 on mobile, and offers a validation step after fixes. *Older advice (2021-22).* [L1266, 2021-22]
- Core Web Vitals and Page experience data only appear in Search Console about one week after the store is set up. A brand-new store will show no data at first. Once data appears, check for errors and resolve any critical issues. [L1271, 2020-26]
- After you submit a sitemap, Core Web Vitals data takes time to appear. If it is still empty after a while, resubmit the sitemap. [L0965, 2024]
- Status of Core Web Vitals as a ranking signal:
  - In the 2020 to 2021 guidance, Core Web Vitals were reported in Search Console and PageSpeed Insights but were not yet a confirmed ranking signal. Google usually gives reporting 6 to 12 months before a metric becomes one. *Older advice (2020-21).* [L1266, 2021-22]
  - Core Web Vitals were framed as mobile-focused user experience metrics. *Older advice (2021-22).* [L1266, 2021-22]

### Fixing Page Speed on Shopify

#### Fix Order

Work through these steps in order:

1. Compress images as far as possible in a lossy way, up to the point where quality starts to suffer. Do this offline before uploading, using a bulk offline tool such as ImageOptim, instead of relying on compression apps that may run JavaScript or compress less.
2. Load videos in a thin way so their JavaScript only loads when the user clicks play. Use the provided code snippet or a lightweight app. Code is the preferred option.
3. Implement lazy loading for images so they load only when the user scrolls near them.
4. Remove unused apps and their leftover code from the theme.
5. Use a theme with minimal, clean code.
6. Minimize redirects.
7. Minimize JavaScript, e.g. do not use homepage sliders or quick view on collection pages. *Older advice (2021-22).* [L1266, 2021-22]

#### Images and Media

- Remove slideshows, carousels and heavy media elements from product pages if they slow page load time. Website speed is a ranking factor, and slow pages lose conversions. [L0226, 2017]
- Videos placed in the product description should use a thin (lazy) load so they do not noticeably slow down the product page. *Older advice (2021-22).* [L1191, 2021-22]
- The default Shopify video embed adds at least 1 MB to the page size and a large amount of JavaScript, which significantly hurts page speed and therefore SEO. *Older advice (2021-22).* [L1191, 2021-22]

#### Apps and Code

- Installing unnecessary apps or plugins on your Shopify store increases load time, because each app adds to it. Only keep apps that are essential to store function. [L0226, 2017]

### Mobile Optimization

- Mobile visitors and mobile results matter most. Mobile scores are usually lower on Shopify, so review mobile results first. *Older advice (2021-22).* [L1266, 2021-22]
- Mobile optimization steps:
  1. Test your store on mobile devices (phones, tablets).
  2. Ensure images, banners, titles and CTA buttons render correctly on small screens.
  3. Check mobile page speed using Google PageSpeed Insights.
  4. Optimize font sizes and touch targets (buttons) for mobile users. [L0226, 2017]
- Check mobile Core Web Vitals in Search Console, where the report names failing mobile issues such as LCP longer than 4s on mobile or CLS above 0.25 on mobile. *Older advice (2021-22).* [L1266, 2021-22]
- A site must load well enough on mobile that a visitor on a weak connection still gets the page, because a blank page after a click counts as a negative ranking signal. [L1227, 2020-26]

### Removing Deleted Pages and Old URLs From Google

#### After a Site Rebuild

Older procedure (2021):

1. Submit the site map to Google.
2. Request a recrawl so Google re-examines the store.
3. Google then removes the old pages from its index and adds the new ones. *Older advice (2021).* [L0853, 2021]

#### After Deleting Products

1. Delete the product from your store. The sitemap updates automatically at yourstore.com/sitemap.xml.
2. Wait for Google to re-crawl the sitemap. The deleted page then drops out of it and no longer shows as an error in Search Console.
3. Optional: open Google Search Console, click Sitemaps and resubmit yourstore.com/sitemap.xml to request an immediate re-scan.
4. Google Merchant Center also stops receiving deleted products, because the feed resubmits on its schedule and skips missing pages. [L0965, 2024]

#### Redirects for Deleted Pages

- Use redirects where a deleted page should point to a replacement. Do not redirect in large batches that are not needed. *Older advice (2021-22).* [L0397, 2021-22]
- Every 404 found on the store should be resolved, usually by updating the link or setting up a redirect. [L1271, 2020-26]

#### Further details

- If the crawler has trouble accessing pages, it may cover only part of a site on a given visit, leaving some pages uncrawled until a later pass. Fixing access and crawl problems is therefore part of crawl optimization, not just a separate technical issue. [L0397, 2021-22]


Part 8 of 30 of "14. SEO and Content: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/14-seo-and-content.md · Previous: https://dlichters.com/ai/ecom/deep/14-seo-and-content/07-site-structure-navigation-and-internal-linking.md · Next: https://dlichters.com/ai/ecom/deep/14-seo-and-content/09-duplicate-and-thin-content-canonicals-and-urls.md
