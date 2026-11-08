<!-- part of ecom/deep/14-seo-and-content.md -->
Part 13 of 30 of "14. SEO and Content: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/14-seo-and-content.md · Previous: https://dlichters.com/ai/ecom/deep/14-seo-and-content/12-bulk-rewrites-from-search-console-data.md · Next: https://dlichters.com/ai/ecom/deep/14-seo-and-content/14-product-page-seo.md

## Structured Data and Rich Results

### Why structured data matters for CTR

- Structured data, schema markup and rich snippets all refer to the same thing: code added to a website that gives search engines extra data about the business, products and stock, which search results can display. [L1349, 2021-22]
- Schema markup can pull review ratings, product price and stock status into search results, and search engines show this data alongside the normal listing. [L1349, 2021-22]
- Structured data is installed separately from the meta title and description. [L1026, 2021-22]
- Product listings can show star ratings from reviews, the product price and the category. These details make a listing stand out and can raise click-through rate. [L1190, 2020-26]
- Structured data passes store information to Google in the format Google expects, so product listings can show more details. Shown details can include the product title, URL, star ratings, price and stock status. [L1337, 2020-26]
- Structured data helps a result look more trustworthy and informative, which tends to lift CTR. [L1026, 2021-22]
- Rich results raise CTR, which signals to Google that the page should rank higher. [L1227, 2020-26]
- CTR from search results is a relevance signal for Google, so more clicks on a listing with strong reviews can also support organic rankings. Review markup is one way to make a listing stand out. [L1012, 2021-22]
- A result with rich snippets draws more attention and clicks than competing results without markup, so it can indirectly help rankings. [L1349, 2021-22]
- Add rich snippets, meaning Schema.org structured data markup, to product pages so that price, availability and ratings appear directly in search results, which increases click-through rate. [L0176, undated]
- Use rich snippet data (reviews, price and stock) in search results. [L0575, 2014]
- CTR improves most when the URL, the title, the meta description and the structured data work together. JSON-LD lets organic listings and blog posts show rich snippets, which can raise CTR on pages and blog posts. [L1321, 2020-26]
- The more business information you enter in the Organization schema, such as email, description, address, social profiles and logo, the more Google can pass along to search results. Complete entries help raise CTR. [L1337, 2020-26]

### Ranking effect: sources disagree

| Source | Claim | When it applies | Ids |
|---|---|---|---|
| one source | Structured data is not a direct Google ranking factor. Adding it does not raise rankings by itself. Its benefit comes indirectly through more clicks. | Always, per this source | [L1349, 2021-22] |
| one source | Higher CTR from rich results signals that the page should rank higher. | Where rich results are shown | [L1227, 2020-26] |
| one source | CTR from richer results can support rankings. | Where rich results are shown | [L1337, 2020-26] |

Use the indirect view as the baseline. Expect ranking support only through clicks. [L1349, 2021-22; L1227, 2020-26; L1337, 2020-26]

### What the rich snippet looks like

- A product search result can show a star rating with review count, the price and an "In stock" status. The stars come from Review schema, the price and stock status from Product schema. The review data may come from a review app, while the markup code is separate. [L1349, 2021-22]
- Review schema displays yellow star ratings that stand out strongly from the rest of a search listing and attract the eye. This only helps when the product's rating is good. [L1349, 2021-22]
- Product schema lets Google show price, stock status, review stars, delivery and return information for product pages in organic results. Smart SEO includes schema, and judge.me adds review stars. [L1116, 2025]
- The handling days, transit days, return policy and shipping details entered in structured data should match what is shown on the store's own pages. Different values can create inconsistent information for Google. [L1337, 2020-26]

### Schema types to enable

| Type | Use | Condition | Ids |
|---|---|---|---|
| Website | Enable as the first step of the setup | Always | [L1337, 2020-26] |
| Organization | Enable with business name, URL, contact and logo | Always | [L1337, 2020-26] |
| Product | Main type for product pages, enabled after Organization | Always for product pages | [L1337, 2020-26; L1349, 2021-22] |
| Review | Star ratings in results (yellow stars) | Only when the product has good ratings | [L1349, 2021-22] |
| Local business | Location data | Only when the business has a physical local presence. Online-only stores keep it off | [L1337, 2020-26; L1349, 2021-22] |
| Collection | Lets Google recognise the page as a collection | Turn on after Product schema | [L1337, 2020-26] |
| Breadcrumbs | Navigation path in results | Turn on after Product schema | [L1337, 2020-26] |
| Article | Blog posts | Turn on after Product schema | [L1337, 2020-26; L1321, 2020-26] |
| FAQ | Questions and answers in results | Only once the store has a growing set of questions and answers, for example from a Q&A app. Not needed at launch | [L1337, 2020-26] |
| Recipe and How-to | Recipe and instructional content | Keep off unless the store publishes that kind of content | [L1337, 2020-26] |

- Only enable structured data types that match real content on the store. [L1337, 2020-26]
- For most e-commerce stores, Review schema and Product schema are the main types. Local business schema is mainly relevant to businesses with a physical location, and only some of their pages need it. [L1349, 2021-22]

### Choosing the implementation: app or theme code

- Some Shopify themes include schema markup in the Liquid code for product pages. Check the theme for existing markup before adding anything, to avoid duplicating or conflicting with it. [L1349, 2021-22]
- Most Shopify themes have rich snippet data on by default. Verify that it is turned on. [L0575, 2014]
- JSON-LD structured data is added to a Shopify store with an app, not by theme code alone. The app originally recommended for it was rebranded in 2023. Stores that already use JSON-LD can keep it in place. [L1114, 2023]
- Writing schema markup by hand and keeping it updated is a recurring burden, because schema formats change and outdated markup stops showing in search results. Most store owners who are not coders would need to pay a developer for every update. [L1349, 2021-22]
- On Shopify, the recommended way to implement schema markup is a dedicated schema app, not a manual developer job. The app's developers update the markup automatically, so the store owner does not need to request updates. [L1349, 2021-22]
- Even if a Shopify theme already includes some structured data, install a schema app. Theme developers often do not maintain that markup, so a managed app is more reliable. Schema apps cost money, but the course presents them as a worthwhile investment. [L1349, 2021-22]

### Smart SEO setup

Enable JSON-LD in Smart SEO and check each part:

1. Go to Apps > Smart SEO > JSON-LD. [L1321, 2020-26]
2. Check that structured data is valid for blogs and articles and covers every place where rich snippets are needed. [L1321, 2020-26]
3. In the Collections setting, tick the Collections checkbox so the collection structured data is added. [L368.018]

Follow this procedure for the Pro plan:

1. Open the JSON-LD section of the app. [L1337, 2020-26]
2. Turn on Website schema. [L1337, 2020-26]
3. Turn on Organization schema. [L1337, 2020-26]
4. Enter the business name written as words, not as a domain. For example, enter the brand name, not a.com address. [L1337, 2020-26]
5. Enter the store URL. [L1337, 2020-26]
6. Fill in email, description, address and social profiles. These fields are optional but should be filled out as completely as possible. [L1337, 2020-26]
7. Upload the store logo. [L1337, 2020-26]
8. Click Save. [L1337, 2020-26]
9. Keep Local business turned off for a non-local online store. [L1337, 2020-26]
10. Turn on Product schema. [L1337, 2020-26]
11. Click Configure and link your Judge.me product reviews. This requires Judge.me installed on the store. [L1337, 2020-26]
12. Click Save. [L1337, 2020-26]

Then turn on the additional types:

1. Turn on Collection schema. [L1337, 2020-26]
2. Turn on Breadcrumbs. [L1337, 2020-26]
3. Turn on Article schema for the blog. [L1337, 2020-26]

Case: after one setup in Smart SEO, the store has its logo, social URLs, price range, phone number display and Judge.me review connection. Product listings can then show the star rating, price and category directly in Google results, which makes them more attractive than competitor listings. [L1190, 2020-26]

### Reviews in rich results

- In Judge.me, the review widget title can be set to load with the product title through a setting in the app's settings area. In Stamp.io, this requires adding a small piece of code to the site, which the vendor provides. [L1191, 2021-22]
- A review widget title containing the product name, for example "product reviews", can help the product page rank for searches for that product's reviews. This only works when the product actually has reviews to show. [L1191, 2021-22]
- Reviews from supplier websites can be used even if they are 2 to 3 years old. Hiding review dates is not a known policy violation. [L964.135]
- In Google Search Console under Review snippets, all product pages with reviews should be valid (green). Invalid review snippets usually mean a code problem on the site. When reviews come from an app such as Judge.me, valid snippets allow review stars to show with product pages in search results. [L1271, 2020-26]

### Testing and verification

- Google's free Structured Data Testing Tool checks whether Google can read the structured data on a given page URL. It is the reliable way to verify schema installation, instead of judging by search results. [L1349, 2021-22]
- Procedure to check a page:
  1. Open Google's free Structured Data Testing Tool. [L1349, 2021-22]
  2. Enter the URL of the page you want to check. [L1349, 2021-22]
  3. Read whether Google reports that it can see structured data on that page. [L1349, 2021-22]
  4. If Google detects the structured data, the implementation is working, even if the rich snippet does not show in search results. [L1349, 2021-22]
  5. If Google does not detect it, the schema is not installed correctly and needs to be fixed. [L1349, 2021-22]
- The Structured Data Testing Tool named in the lesson has been replaced by newer Google tools, such as the Rich Results Test. Before following the steps above, confirm the current tool Google offers for checking structured data in 2026. [L1349, 2021-22]
- After a JSON-LD app is installed, resubmit and recrawl the sitemap. If Search Console still shows few snippets after that, contact the app's own support, who can check the settings. [L1285, 2024]

### Limits and common mistakes

- Google does not always show structured data in search results, even when it is installed correctly. Results can differ by query and by searcher. Searching your own product and not seeing the rich snippet does not prove that the schema is broken. [L1349, 2021-22]
- Only turn on Local business for product schema if the business has a physical local presence. Online-only stores keep it off. [L1337, 2020-26]
- Recipe and How-to schema should stay off unless the store publishes that kind of content. [L1337, 2020-26]
- FAQ schema is not needed at launch. Turn it on only when the store has a growing set of questions and answers. [L1337, 2020-26]

#### Further details

- Smart SEO app > JSON-LD > Enable structured data: make sure the Collections checkbox is ticked. This adds collection structured data so Google can recognise the page as a collection. [L0368, 2020-26]

- Use the reviews from supplier websites, even if they are 2 to 3 years old. Hiding review dates is not a known policy violation. [L0964, 2023]


Part 13 of 30 of "14. SEO and Content: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/14-seo-and-content.md · Previous: https://dlichters.com/ai/ecom/deep/14-seo-and-content/12-bulk-rewrites-from-search-console-data.md · Next: https://dlichters.com/ai/ecom/deep/14-seo-and-content/14-product-page-seo.md
