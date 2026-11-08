<!-- part of ecom/deep/14-seo-and-content.md -->
Part 3 of 30 of "14. SEO and Content: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/14-seo-and-content.md · Previous: https://dlichters.com/ai/ecom/deep/14-seo-and-content/02-outsourcing-agencies-and-ownership.md · Next: https://dlichters.com/ai/ecom/deep/14-seo-and-content/04-keyword-research-and-tools.md

## Search Console, Bing Webmaster Tools and Sitemaps

### Overview: What the Search Tools Do

- Google Search Console is a free Google tool for tracking organic (non-paid) search traffic. It shows how your store appears in Google's organic results, tracks organic clicks and impressions, reveals the search keywords people used to find your site, displays indexed pages and products, and identifies site experience issues such as page speed problems, errors, and usability problems. [L0171, undated]
- It is reached at search.google.com. It reports organic search performance and site errors, and it needs no paid traffic. [L0735, 2020-26]
- It does not run ads or report paid ad performance. It reports free organic listings and their clicks, while paid campaign data lives in the ad platform. [L0736, 2020-26]
- It shows which problems hold back organic rankings, which keywords bring free traffic, and how much free traffic arrives. Its error reports should be fixed so the site can rank higher. [L0735, 2020-26]
- Set it up early. It collects data over time, and data only starts filling in after verification. [L0736, 2020-26]
- Set it up early so organic traffic has time to build. Organic rankings in Google can produce buyers without paid ads. [L1393, 2020-26]
- A newly verified property shows no data at first, because coverage data (valid pages and pages with errors) needs time to accumulate. [L0736, 2020-26]
- Organic search traffic and keyword data appear over time. Only sites that receive organic traffic show meaningful performance reports, and unbranded product stores may see little organic traffic. [L0736, 2020-26]
- ** Google Webmaster Tools, now Search Console, is free and reports errors when Google cannot read the website. It is mainly used for SEO monitoring. [L1275, 2019]
- ** Search Console is listed as a resource in the December 2020 coaching call for monitoring how a store appears in Google search. The lesson names it without describing setup steps. [L0426, 2020]
- ** Search Console is mandatory. It shows how Google crawls the site and which pages are and are not indexed, and the domain must be registered in the tool. [L1272, 2021-22]

### Account, Email and Ownership

- Log in with the same email address used for the Google Analytics account, so that both tools link together. [L0735, 2020-26]
- Use the same Google account email in Search Console as in Google Analytics, so the two tools link without extra work. [L0736, 2020-26]
- One source gives a different login: log in with your store's Google Workspace email. [L0171, undated]
- Email rule in practice: the sources name two emails. The Analytics email is the one that links the tools [L0735, 2020-26; L0736, 2020-26]. The Workspace email is the wording in the setup procedure [L0171, undated].
- Mistake: signing in with a different email than the one used for Google Analytics makes the two tools harder to link. [L0735, 2020-26]
- Mistake: adding a verification TXT record for a domain already verified in another Search Console account can transfer ownership away from the existing account. Check ownership before adding a new verification record. [L0736, 2020-26]
- One Search Console account can hold several domains. After login, every verified property appears, and more store domains can be added to the same login later. [L0735, 2020-26]

### Setup Procedures: Three Source Versions

The sources give three complete setup procedures. They differ in admin path and record wording and are kept as written.

**Version A (16 steps, Settings > Domains)**

1. Go to search.google.com and log in with your store's Google Workspace email.
2. Select Domain as the property type.
3. Enter your full domain (example: yourstore.com) and click Continue.
4. Copy the entire TXT verification record provided by Google.
5. In Shopify Admin, go to Settings > Domains.
6. Click your domain.
7. Open Domain settings.
8. Add a TXT record.
9. Paste the verification record.
10. Click Save/Confirm.
11. Return to Google Search Console and wait for verification to complete.
12. Click Go to Property.
13. Copy your sitemap URL: yourstore.com/sitemap.xml (use your actual domain).
14. In Search Console, click Sitemaps in the left menu.
15. Paste your sitemap URL.
16. Click Submit. [L0171, undated]

**Version B (9 steps, Domain settings > Add custom record)**

1. Open search.google.com and log in with the same email address used for the Google Analytics account.
2. Enter the domain in the property field and select the property type 'Domain' (not URL prefix).
3. Click Continue; Search Console shows a DNS TXT verification record. Copy the full text line.
4. In the store admin, go to Settings > Domains, click the domain, then open Domain settings.
5. Click Add custom record, choose the record type TXT, paste the copied value, and confirm.
6. Return to Search Console and click Verify. Propagation can take a minute or so; refresh if it does not pass at once.
7. After ownership is verified, click 'Go to property'.
8. Open Sitemaps in the left navigation.
9. Enter the sitemap URL in the form yourdomain.com/sitemap.xml (the store's own sitemap file, copied from the browser) and click Submit. [L0735, 2020-26]

**Version C (11 steps, Sales channels > Online Store > Domains)**

1. Go to search.google.com/search-console and click 'Start now'.
2. Enter the domain name and click Continue.
3. Choose verification via DNS record and copy the TXT (text) record value that Google shows.
4. In the Shopify admin, go to Sales channels > Online Store > Domains.
5. Click 'DNS settings'.
6. Click 'Add custom record' and choose 'Text record'.
7. In the Name field enter @.
8. In the Text value field paste the code copied from Google.
9. Click Confirm.
10. Return to Google Search Console and click Verify.
11. Once verified, open the Search Console dashboard for the domain. [L0736, 2020-26]

| Element | Version A | Version B | Version C | Source ids |
|---|---|---|---|---|
| Admin path | Settings > Domains, then click the domain, then Domain settings | Settings > Domains, then the domain, then Domain settings | Sales channels > Online Store > Domains, then DNS settings | [L0171, undated; L0735, 2020-26; L0736, 2020-26] |
| Record type | TXT | TXT | Text record | [L0171, undated; L0735, 2020-26; L0736, 2020-26] |
| Name field | Not specified | Not specified | @ | [L0736, 2020-26] |
| Adding the record | Add a TXT record | Add custom record | Add custom record | [L0171, undated; L0735, 2020-26; L0736, 2020-26] |
| Verify step | Wait for verification to complete | Click Verify | Click Verify | [L0171, undated; L0735, 2020-26; L0736, 2020-26] |

Admin paths differ between the sources. Give both paths and use whichever matches the admin menu you see. [L0171, undated; L0735, 2020-26; L0736, 2020-26]

### Verification Details

- Choose the property type Domain, not URL prefix. This verifies the whole domain (all subdomains and protocols) through a DNS text record. [L0735, 2020-26; L0171, undated]
- Add the TXT record on the store's domain in the store admin, using the path shown in the table above. [L0735, 2020-26]
- If the domain is registered outside Shopify, add the same TXT record in that registrar's DNS settings. Look up how to change DNS records for that provider. [L0736, 2020-26]
- Propagation can take a minute or so. Refresh the page if verification does not pass at once. [L0735, 2020-26]
- If the verification TXT record is already present in the store's DNS settings, ownership can show as verified immediately. A page refresh is only needed when the record is not yet visible in the store admin. [L0735, 2020-26]

### Shopify Sitemap: Behaviour and Limits

- Shopify generates the sitemap automatically at yourstore.com/sitemap.xml. You do not need to create it manually. [L0171, undated]
- The sitemap is generated automatically and does not need to be created or edited. [L0736, 2020-26]
- ** Shopify generates an XML sitemap automatically at the store's root domain under /sitemap.xml, so no manual creation is needed. [L1333, 2021-22]
- The sitemap index links to child sitemaps: products (sitemap_products_1.xml), pages (sitemap_pages_1.xml), collections (sitemap_collections_1.xml) and blogs. [L0736, 2020-26]
- In the Search Console Sitemaps page, the submitted Shopify sitemap is listed with type 'Sitemap index'. [L1333, 2021-22] **
- If the store has videos, they are listed in the Sitemaps report too. [L1271, 2020-26]
- To see exactly what is sent to Google, open yourstore.com/sitemap.xml in a browser. The page shows every URL being sent to Google, so you can confirm the right pages are included. [L0965, 2024]
- The sitemap URL follows the format yourdomain.com/sitemap.xml. Copy the full URL from the browser and submit it under Sitemaps. [L0735, 2020-26]

| Limit or behaviour | Detail | Source ids |
|---|---|---|
| Images per product | The standard Shopify XML sitemap lists only one image per product. Product images beyond the first may never be submitted to search engines. Products with many distinct images, each with its own file name and alt text, lose potential image-search visibility. ** | [L1333, 2021-22] |
| Separate image sitemap | For an image sitemap, enter the URL the app provides (for example images.xml) and submit it the same way. ** | [L1333, 2021-22] |
| Sitemap is a convenience | Search engines can still discover pages through internal links. The sitemap speeds up discovery and picks up updates faster. ** | [L1333, 2021-22] |
| Unpublished pages | The sitemap submits unpublished pages by default unless they are excluded. | [L1271, 2020-26] |
| Google without submission | Google will often find and index a store on its own. Submitting helps Google crawl the site consistently. ** | [L0671, 2021] |
| Ranking without submission | Pages can still rank without submission, but Google crawls the whole site regularly once submitted. ** | [L0962, 2021] |

### Submitting the Sitemap

Four procedures are given. Each is kept as written.

**Procedure 1 (undated)**

1. In the sidebar, under Index, click Sitemaps.
2. In the 'Add a new sitemap' field, the domain prefix is already shown; type sitemap.xml after it.
3. Click Submit.
4. Status first shows 'Pending', then 'Success'.
5. Once successful, the report shows how many URLs were found and any errors to fix. [L0736, 2020-26]

**Procedure 2 (*older, 2021-22*)**

1. Verify the website in Google Search Console (usually a quick process when first opening the tool).
2. Open the Sitemaps section in the left menu.
3. In the field "Add a new sitemap", enter the sitemap path only, e.g. sitemap.xml for Shopify, after the domain already shown.
4. Press SUBMIT.
5. Check that the submitted sitemap appears in the list with status Success and a last-read date.
6. For an image sitemap, enter the URL the app provides (e.g. images.xml) and submit it the same way. [L1333, 2021-22]

**Procedure 3 (2023)**

1. Find your sitemap URL, for example yourdomain.com/sitemap.xml.
2. Open Google Search Console and go to the Sitemaps section.
3. Submit the current sitemap URL as a new sitemap.
4. Check that the pages listed reflect the current store. Old 404 pages should disappear because they are no longer in the current sitemap. [L0835, 2023]

**Procedure 4 (*older, 2021*)**

1. Open Google Search Console.
2. Sign in with the same Google account used for Google Analytics and Google Ads.
3. Submit the store's sitemap. Google then crawls the whole site regularly and reports errors that affect organic ranking, although pages can still rank without submission. [L0962, 2021]

**Entry format in the submission form**

- The form shows the domain prefix already. Enter the path only, for example sitemap.xml. [L1333, 2021-22; L0736, 2020-26]
- Other sources say to paste the full sitemap URL, for example yourdomain.com/sitemap.xml. [L0171, undated; L0735, 2020-26]

**Reading the submitted sitemap**

- Status first shows Pending, then Success. Success is expected. [L0736, 2020-26; L1333, 2021-22] *(Older, 2021-22 for the last two.)*
- The submitted sitemaps table shows Type, Submitted date, Last read date, Status and discovered URL count. [L1333, 2021-22] **
- Check the submitted sitemap and the number of discovered pages in Sitemaps. [L1271, 2020-26]
- Submitting a sitemap makes Google crawl the store more often. Updates to pages, collections, blog posts and products are picked up sooner, so ranking changes can happen faster. A regularly updated sitemap is the basis for organic visibility. [L1271, 2020-26]
- Submitting a sitemap lets Google know the site exists and which pages and products it contains, so it can crawl and index them for organic results. Indexing takes time, so data only fills in gradually after setup. [L0735, 2020-26]

### Checking Indexing and Reports

**Check that the right pages are indexed**

1. Open the indexed pages report.
2. Click view examples of indexed pages.
3. Confirm that the homepage, contact page, privacy policy, shipping and returns page, blog posts and all product page URLs appear there. [L0373, 2024+]

**What the reports show**

- Once data populates, the reports show organic impressions and clicks, indexed page counts, the search queries (keywords) that brought visitors, and any site experience issues. [L0171, undated]
- The Coverage report is the most useful free SEO diagnostic, because it reflects what Google's own crawler experienced on the site. Check it regularly to spot pages Google cannot index or cannot reach. ** [L1333, 2021-22]
- Third-party audit tools are useful, but their findings may differ from Google's view. ** [L1333, 2021-22]
- Search Console and Bing Webmaster Tools report which external links point to a site and which search terms generate impressions. This data is limited in both tools, so use it as a basic view next to a third-party SEO tool. ** [L1272, 2021-22]

### Smart SEO Sitemap Control

Smart SEO is a Shopify app that controls which pages go into the sitemap submitted to Google.

1. Open the Smart SEO app from inside the Shopify admin. [L1271, 2020-26]

- Google Search Console must already be set up for the store before Smart SEO is connected to it. The app then adds the website to Search Console and submits the sitemap through that existing property. [L1271, 2020-26]
- The app's sitemap section lists the store's pages individually. To keep a specific page out of the sitemap submitted to Google, click Exclude next to that page. Excluded pages are no longer submitted, so they will not rank. [L1271, 2020-26]
- Excluding a page stops it from being submitted to Google, so it will not rank. Exclusions are useful for inactive products, duplicate pages or pages you do not want in search results. Use them sparingly. [L1271, 2020-26]
- Mistake: excluding pages without need removes them from the sitemap and therefore from Google's search index. Do not exclude products that should rank. [L1271, 2020-26]
- Mistake: do not assume unpublished pages are hidden from Google unless they are explicitly excluded. [L1271, 2020-26]

### Recrawling and Updating After Changes

**Recrawl by resubmitting the sitemap (*older, 2022*)**

1. Open Google Search Console.
2. Click Sitemaps in the left navigation.
3. Delete the old sitemap if needed, then add your sitemap address (yourdomain.com/sitemap.xml).
4. Submit it so Google crawls it again; results appear in real time, usually within minutes. Search Console only offers community support, with answers from forum experts. [L0429, 2022]

**Recrawl old pages after changing collections (*older, 2019*)**

Source wording: Google Webmaster Tools (google.com/webmasters). This name predates Search Console.

1. Log in with the same email address used for Google Ads, Google Shopping and Google Analytics, creating the account if it does not exist.
2. Verify the URL of the website.
3. Use the option to crawl the website so that Google's bots revisit the site and update the pages.

Pages that still show old URLs and return 404 errors are usually still indexed by Google and get updated after the recrawl. [L0467, 2019]

**Timing**

- Resubmitting the sitemap makes Google read it again, and results can appear within minutes. ** [L0429, 2022]
- After changing page content, Google recrawls the site over a few weeks. Request a recrawl after changing product page meta or content to speed up ranking changes. [L0964, 2023]
- The best time to request indexing is after updating product page meta information. Waiting a couple of weeks lets the rankings settle. [L0964, 2023]
- Use both timings together. The sitemap read can show within minutes, while ranking changes from content updates take a few weeks. [L0429, 2022; L0964, 2023]

### Bing Webmaster Tools

**Why add Bing**

- Bing is a second organic search channel that works without paid advertising. It adds traffic on top of Google. [L0303, 2020-26]
- Bing tools work like Search Console for Bing. Register the site there too, because Bing can deliver organic traffic and sales even though it is a smaller search engine. ** [L1272, 2021-22]
- Set up Bing before or alongside paid campaigns. Set it up before building Shopping ads, so organic results can be added alongside the paid campaigns. [L1034, 2021+]
- Most checks available in Search Console have an equivalent in Bing Webmaster Tools. ** [L1333, 2021-22]

**Setup by import from Search Console**

1. Open bing.com/webmasters.
2. Click Get started.
3. Sign in with a Microsoft, Google or Facebook account.
4. On the Welcome to Bing Webmaster Tools page, use the import option for sites already verified in Google Search Console.
5. Click Import.
6. Select the Google account that owns the Search Console property; Bing identifies the account by its email address.
7. Click Allow to approve sharing.
8. If several domains are linked to that Search Console account, select the domain you want and keep it ticked.
9. Click Import.
10. When Bing confirms that one site was imported, click Done.
11. Wait while Bing processes the data, which can take up to 48 hours.
12. Review the dashboard, whose sidebar links mirror Google Search Console. [L0303, 2020-26]

**Sitemap in Bing**

- If the site was imported from Search Console, the sitemap is already carried over and does not need to be submitted again in Bing. [L0303, 2020-26]
- A sitemap can also be submitted manually in Bing, or linked through the Google Search Console account. Both methods work. [L0303, 2020-26]
- Submit the same XML sitemap URL in Bing as in Search Console. ** [L1333, 2021-22]
- Submitting the sitemap makes sure every page of a Shopify store, including product pages, is crawled by Bing and added to its search index. Indexed pages can appear in Bing search results and be checked in the Bing tools. [L0303, 2020-26]

**Mistakes and alerts**

- Mistake: Bing matches the Google account during import by its email address. If you sign in with a Google account that uses a different email than the one that set up the Search Console property, the site will not be available to import. [L0303, 2020-26]
- Bing sends automatic email notifications when it detects problems on a website. Fixing these issues helps the site earn as much organic traffic from Bing as possible. [L0303, 2020-26]

### Ongoing Routine

- Fix the error reports in Search Console so the site can rank higher. [L0735, 2020-26]
- Check the Coverage report regularly for pages Google cannot index or reach. ** [L1333, 2021-22]
- Respond to alerts. Google emails the account owner when it detects errors on the site, so these issues can be fixed promptly. [L0736, 2020-26]
- Bing also sends automatic email notifications for detected problems. [L0303, 2020-26]
- Keep the sitemap current. Submitting a regularly updated sitemap keeps updates to pages, collections, blog posts and products visible to search engines sooner. [L1271, 2020-26]
- Give organic data time. Keyword and performance data fill in gradually after setup. [L0171, undated; L0735, 2020-26]

### Older Procedure (2019)

The following procedure predates the current Search Console interface. It is kept as written.

1. Open Google Webmaster Tools (today Google Search Console) with the same login used for Google Analytics; it is free.
2. Review the report for every URL and any errors, and fix errors on the homepage that stop Google from showing it.
3. Submit the sitemap at yoursite.com/sitemap.xml so Google crawls and indexes every URL, including the homepage. [L0356, 2019]


Part 3 of 30 of "14. SEO and Content: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/14-seo-and-content.md · Previous: https://dlichters.com/ai/ecom/deep/14-seo-and-content/02-outsourcing-agencies-and-ownership.md · Next: https://dlichters.com/ai/ecom/deep/14-seo-and-content/04-keyword-research-and-tools.md
