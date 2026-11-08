<!-- part of ecom/deep/14-seo-and-content.md -->
Part 11 of 30 of "14. SEO and Content: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/14-seo-and-content.md · Previous: https://dlichters.com/ai/ecom/deep/14-seo-and-content/10-discontinued-and-backordered-products.md · Next: https://dlichters.com/ai/ecom/deep/14-seo-and-content/12-bulk-rewrites-from-search-console-data.md

## Search Listings: Titles, Meta Descriptions and Snippets

### Where the listing is set

- The search engine listing defines what Google shows for a page. The Page title is what Google displays, the meta description is the text shown in results, and the URL handle is the slug after your domain. These fields are optional for demo products and are covered in detail in later SEO modules. [L0036, 2020-26]
- On a product page, the Search engine listing section shows the product's URL and lets you edit how the product appears in search results. [L1167, 2026]
- The section sits at the bottom of the product edit page and is called Search engine listing preview. It contains the Page title, Description, and URL and handle fields. [L1026, 2021-22]
- The preview shows the title, URL and description as they appear in Google and Bing. If no meta description is set, Shopify uses the product description. [L1190, 2020-26]
- Collections have a Search engine listing section. The page title and meta description are what Google shows for the collection's keywords. They can be left empty at first and completed later as part of SEO work. [L0371, 2020-26]
- Pages use the Edit website SEO section, which contains a search engine listing preview and the fields Page title, Description, and URL and handle. Shopify shows a character counter under Page title (limit 70 characters) and Description (limit 320 characters). [L1264, 2021-22]
- The Page title and Description in Edit website SEO are what customers see in Google, so they should be accurate at launch and refined later. Once the business is running, these fields deserve proper SEO work. [L1264, 2021-22]

### Homepage and social sharing settings

- Homepage title and meta description are set in Shopify under Online Store > Preferences > Title and meta description (also reached via Sales channels > Online Store > Preferences). *(2021-22)* The homepage title allows up to 70 characters and the homepage meta description up to 320 characters. [L0370, 2021-22; L1145, 2021-22]
- *(2021-22)* The homepage meta description appears under the page title in Google. It describes what the store sells and why to buy from it, so it must contain real content rather than filler. [L0370, 2021-22]
- *(2021-22)* The homepage title is the clickable headline in Google results and the text in the browser tab. The homepage meta description is the snippet beneath it. Set both for the root domain, and make the description describe what is sold and why to buy there, since it is not a technical field. [L0370, 2021-22]
- *(2021-22)* The title and meta description define how the store appears in search results. [L1145, 2021-22]
- *(2021-22)* Social sharing image: set it under Online Store > Preferences > Social sharing image, sized 1200 x 628 px. Social platforms display it when someone shares a link to the store, and it is used if no other relevant image can be found. [L0370, 2021-22; L1145, 2021-22]

### Character limits and truncation

- Content longer than the limit is truncated in Google results, hiding important information. [L0278, 2025]
- Shopify shows a character counter in the preview. Keep the meta title at or below the displayed limit (the example shows 53 of 70 characters) and the description at or below 320 characters, since overlong text is cut off with an ellipsis. [L1026, 2021-22]

| Element | Limit or target | Where it applies | IDs |
|---|---|---|---|
| Page title, shown in Google | Stay within 70 characters | Search results | [L1190, 2020-26] |
| Page title, writing target | 50-60 characters | When you write the title | [L0226, 2017] |
| Page title field (homepage and pages) | Up to 70 characters | Shopify field and counter | [L0370, 2021-22; L1026, 2021-22; L1264, 2021-22] |
| Meta description field | Up to 320 characters | Shopify field and counter | [L0370, 2021-22; L1026, 2021-22; L1264, 2021-22] |
| Meta description, writing target | 150-160 characters | When you write the description | [L0226, 2017] |
| Meta description, blog prompt | Under 160 characters | Blog post prompt | [L1321, 2020-26] |
| Meta description, display | Search results may show only part of a long description | Search results | [L1190, 2020-26] |

- Conflict between sources: the field limits (70 for titles, 320 for descriptions) are what Shopify accepts, while the 50-60 and 150-160 targets are what to write so the full text is displayed. Use the targets when writing and the field limits as the hard ceiling. [L0226, 2017; L0370, 2021-22; L1190, 2020-26; L1321, 2020-26]

### Auto-filled values and common mistakes

- *(2021-22)* When no custom meta data is set, Shopify copies the product title and product description into the meta title and meta description automatically. The description is often truncated mid-sentence and reads like a product spec dump, so it should always be customized. [L1026, 2021-22]
- *(2021-22)* The auto-filled meta title is often acceptable, especially for product pages, because it usually matches what shoppers search for. The auto-filled meta description is rarely usable and should always be rewritten. [L1026, 2021-22]
- *(2021-22)* On platforms that do not fill in meta data, Google chooses the title and description from any text on the page. This can produce an unattractive snippet, so meta data should be set manually. [L1026, 2021-22]
- *(2022)* Changing meta tags does not affect Google Ads product data as long as product names and descriptions stay the same. [L0803, 2022]
- Changing meta descriptions or page names does not break links as long as the URL stays the same. If they are in the wrong format, correct them. [L0964, 2023]
- *(2021-22)* Shopify shows a preview of the product title in the search title field. Check that the search title matches the product title and that the URL is clean, then replace the auto-filled description with a short text. [L1166, 2021-22]

### Writing page titles

**Product titles**

- Product page titles include brand name, product name and SKU. Remove the business name from product pages and keep it in the homepage meta title. If the title is too long, remove extras such as lowest price or free shipping first. [L0804, 2023]
- ** The page SEO title should include the product name, the SKU and the brand name, as this is what is added in most cases. [L0854, 2022]
- Brand-led formula: brand name, then the full product name, then a short click trigger such as free shipping, insurance, or a real offer, kept under 70 characters. [L1190, 2020-26]
  - Example for a bamboo cutting board set: `Northlane Bamboo Cutting Board Set | Free Shipping and Insurance`
  - Example for an oak bookshelf: `Hearth and Co. Oak Bookshelf | Order Today, Free Shipping`
- Benefit-led formula: [Target keyword] + [unique, verifiable claim such as largest, fastest, or most affordable] + [brand or short descriptor], kept within the character limit. It works because the keyword matches the search query and bolds in the snippet, while the claim gives a reason to click over competitors. [L1026, 2021-22]
  - Example for a standing desk: `Standing Desk for Small Offices | Quietest Electric Motor Under $400`
- Purchase-intent words such as buy and online in product titles help those pages rank for searches made by people ready to buy, who convert better than people running broad informational searches. [L0575, 2014]
- Find high-converting keywords in Google Ads and add them to product meta titles and descriptions, so the organic listing matches what buyers already search for and convert on. [L0920, 2018]
- Long-tail phrases: if your best revenue comes from a long-tail phrase such as `handmade German chef knife`, add that exact phrase with its qualifier to the meta title and meta description. This matches search intent more closely and can improve both clicks and conversion for that query. [L1357, 2018]

**Matching the product title versus rewriting it**

- *(2021-22)* Match the meta title to the product title. Make sure the meta title matches the product title. [L1163, 2021-22; L1166, 2021-22]
- The meta title does not need to match the product page title word for word. It can be rewritten to name a specific benefit or unique selling point, for example being the largest product of its type, while still including the target search term. [L1026, 2021-22]
- Use the matching rule when the product title already names the product clearly. Use the rewrite when a verifiable claim gives a reason to click. [L1026, 2021-22; L1163, 2021-22]

**Keywords and headlines**

- Include the focus keyword in the meta title, meta description and URL. [L1026, 2021-22]
- *(2021-22)* Headlines can include keywords for organic ranking without losing their function. The headline should also hint at or state a benefit that follows from the primary promise. [L0416, 2021-22]
- *(2021-22)* The meta title and meta description should each be unique for the page and contain the focus keyword. Write them using the copywriting principles for meta descriptions. [L1191, 2021-22]
- The page title and meta description are read together in search results, so they work as one unit. The title names the product with the target keyword, and the description gives a reason to click, such as a shipping detail or a real offer. [L1190, 2020-26]

**Case example**

- *(2021-22)* Before-and-after case for an RV fridge product on Shopify: the unedited snippet used the auto-pulled product description, which was cut off mid-sentence at the character limit. The edited version used a benefit-led title with the target keyword `RV fridge` and a copy-style description that ends with a call to action, and it displays in full with no truncation. [L1026, 2021-22]

### Writing meta descriptions

**Principles**

- Write for the click, not only for the ranking. Treat the description as a short sales letter. [L0575, 2014]
- *(2021-22)* A search snippet is a sales message only in the sense of getting the click. The actual selling happens on the product page. Treat the meta description like ad copy whose only goal is the click. [L1026, 2021-22]
- *(2021-22)* Write the meta description as short copy addressed directly to the searcher, using a question or a direct statement, instead of listing specifications. End with a clear call to action, for example `Shop online today`, because people do not reliably decide to act on their own. [L1026, 2021-22]
- Use the brand name, product name and SKU number in the meta description. The business name is optional and can be left out to keep the title short. [L1094, 2023]

**Formulas and patterns**

- Capital-letter formula: capitalise a few key words (for example FREE, NEW or LIMITED) so the snippet stands out among 10 to 15 competing results. Remove repeated brand names and shorten words where possible, for example replacing "and" with "&" or "+" if the platform allows. [L0575, 2014]
  - Example: `Handmade Oak Desks | FREE Delivery in 2 Days, 10-Year WARRANTY, Shop Solid Wood Now.`
  - Example: `Organic Cold-Pressed Olive Oil, EXTRA Virgin, Bottled in Italy | FREE Shipping on Orders Over $50.`
- Sensory or benefit-led hook: these beat plain product-fact lists. Hooks can use sounds-fancy wording, ingredient origin, FREE in caps, or same-day dispatch. Generic phrases such as `order online today` add nothing. [L0575, 2014]
  - Example: `Ceremonial Grade Matcha from Uji, Japan | 30g Tin, FREE Delivery, Same-Day Dispatch Before 2PM.`
  - Example: `Hand-Roasted Single-Origin Coffee Beans | FRESH Roasted Weekly, FREE Shipping Over $40, Order Today.`
- Copy-style formula: [direct question or address to the searcher] + [one specific product benefit] + [short proof or feature] + [call to action]. It works because it speaks to a single searcher intent and ends with an action. [L1026, 2021-22]
  - Example for a pet water fountain: `Want a quieter, cleaner water bowl for your cat? Our 2-litre filtered fountain runs whisper-quiet and needs cleaning only once a month. Order today and get free shipping.`
- Short description pattern: one sentence naming the product's main benefit, followed by one short call to action telling the shopper what to do now. Formula: [main benefit sentence]. [action verb] [product] online today. It gives the result a reason to click and a clear next step. [L1166, 2021-22]
  - Own examples: `Quiet cordless vacuum with 60 minutes of runtime and a washable filter. Shop online today.`
  - Own examples: `Hand-stitched leather wallet in three colours. Browse the full range today.`
- Benefit-and-trust formula: call to action, product name, brand name, one real trust or shipping detail, and an optional real offer, written like a short ad. [L1190, 2020-26]
  - Example for a bamboo cutting board set: `Shop the Northlane Bamboo Cutting Board Set today and get free shipping and insurance on your order.`
  - Example for an oak bookshelf: `Order the Hearth and Co. Oak Bookshelf today with free shipping and a 30-day exchange window.`
- Keyword-first formula: start with the target keyword (for example `Order the [keyword]`), then add the brand name, one short benefit, and a real shipping or store offer such as free shipping, and close with the official store. The keyword at the front helps the page rank and gives searchers a faster match, which can raise CTR. [L1271, 2020-26]
  - Example 1: `Shop the [keyword] from the official [brand] store. Soft, durable and in stock, with free shipping on all orders.`
  - Example 2: `Order the [keyword] online from [brand]. Fast delivery and easy returns, with free shipping over [amount].`

**Template for product descriptions**

```
Order the [PRODUCT NAME] today from [BRAND NAME]. [BRAND NAME] offers free shipping and insurance on all orders. [ONLY IF THIS PRODUCT HAS A REAL BONUS: Order today and receive a free [BONUS NAME].] Delete the bracketed bonus sentence if this product has no bonus.
```
[L1190, 2020-26]

**Benefit-focused template**

```
To improve your search result click-through rate, construct Meta descriptions that identify the page topic and your brand, then emphasize convertible benefits like free shipping, insurance protection, and a complimentary bonus item. This benefit-focused approach performs better than standard product descriptions.
```
[L0176, undated]

**Calls to action and checks**

- *(2021-22)* End the meta description with a call to action. [L1026, 2021-22]
- *(2021-22)* The meta description must not be cut off and should end with a call to action such as `Shop Online Now`. The meta title, URL and product title should all match. [L1163, 2021-22]
- *(2021-22)* Metadata checks for each product, in order: make sure the meta title matches the product title; make sure the URL reflects the product title (updated title); make sure the meta description is not truncated, and add a call to action such as `Shop Online Now`. [L1163, 2021-22]

**Phone numbers**

- Show a phone number in the meta description only where it makes sense. Higher-priced products with a long sales cycle benefit from call-us messaging, because buyers want to speak to someone first. A phone number is a differentiator when competitors do not show one. [L0575, 2014]

### Snippet elements and what drives clicks

- Search results show the page URL, meta title, meta description and structured data (such as reviews, price and stock status), plus sitelinks that Google generates on its own. Each of these is a place where a searcher decides whether to click. [L1026, 2021-22]
- *(2021-22)* Google bolds search terms that match the query exactly in the snippet. Use the focus keyword in three places: meta title, meta description and URL, so each keyword occurrence adds a bolded word that draws the eye and signals relevance to the searcher. [L1026, 2021-22]
- Meta data is not a direct Google ranking signal, but it strongly affects organic click-through rate (CTR), which is a ranking signal. Optimize meta data mainly to earn clicks from search results. [L1026, 2021-22; L0881, 2021-22]
- The meta description has not been a direct ranking factor since 2003. Its value is mainly the CTR it earns, so spending much time on it for low-traffic pages is usually wasteful. [L1269, 2025-26]
- CTR is the share of people who see a listing in organic search results and click it. A 100% CTR is not realistic, but a higher CTR signals to Google that the listing matches the search, which can help rankings over time. [L1190, 2020-26]
- ** Page titles and meta descriptions should be written for CTR, since more organic clicks lead to higher organic rankings. [L0803, 2022]
- *(2021-22)* Misleading or incomplete snippets, such as showing a product as available when it is out of stock, lead to immediate bounces. High bounce rates hurt SEO because user interaction is also a ranking signal. Accurate snippets filter for visitors who really want the product. [L1026, 2021-22]
- *(2021-22)* On Shopify, Google generates organic search sitelinks completely on its own, and merchants cannot set them in the product or page editor. You can only prepare pages for sitelinks where possible, and Google has said it may add manual control later. [L1026, 2021-22]
- Optimized product page titles and keywords help both organic search traffic and Google Shopping results. Updating them is low priority when product pages already follow the standard structure, but it is unlikely to hurt. [L0748, 2020-26]

### Claims, bonuses and accuracy

- Mention bonuses or promotions in the meta description only if they really apply to that product. A promotion such as `$10 off orders over $50` should not appear on a single product priced under $50, because it cannot be claimed there. [L1190, 2020-26]
- Do not keep claims for bonuses or offers the store does not have. Remove any promotion that is not active before saving the page. [L1271, 2020-26]
- AI tools, including Smart SEO and others, can invent product details. Always check generated meta text against the actual product before saving. [L1190, 2020-26]

### Blog posts and pages

- Set the URL and listing fields for a Shopify blog post or page:
  1. Save the post first.
  2. In the search engine listing preview, check the URL and handle field.
  3. Replace the handle with the target keyword in lowercase, words separated by hyphens.
  4. Set the page title. Keep the product name, or use a clearer phrase such as `A guide to customizing your standing desk` or `The ultimate guide to customizing your standing desk`.
  5. Delete the description that Shopify pulls automatically from the content.
  6. Enter the meta description (see the meta description steps) and save.
  [L1321, 2020-26]
- Ask ChatGPT for a meta description with this prompt:

```
Please write a meta description for a blog post called '[post title]'. The post targets the keyword '[target keyword]'. Keep it accurate to the actual post content, include the keyword naturally, and keep it under 160 characters.
```
[L1321, 2020-26]

- Add a meta description to a blog post:
  1. Ask ChatGPT for a meta description using the post title and target keyword (prompt above).
  2. Read the result and check that it matches the actual post content.
  3. In the search engine listing description field in Shopify, delete the automatically pulled text.
  4. Paste the checked meta description and save.
  [L1321, 2020-26]

### Prioritising pages and testing CTR

- Audit the top 10 pages by page views in Google Analytics first (the 80/20 rule), and improve their meta descriptions and titles before the rest. [L0575, 2014]
- Test and improve each page's listing:
  1. Write compelling, keyword-relevant titles (50-60 characters).
  2. Write descriptive meta descriptions (150-160 characters) that encourage clicks.
  3. Ensure both are unique per page.
  4. Test for click-through rate in Google Webmaster Tools (now Search Console) and improve if CTR is below niche average.
  [L0226, 2017]
- Start with title and meta rewrites on pages that already get many impressions at positions just outside the top results, roughly positions 8 to 11. A CTR lift of 1 to 2 percentage points on 30,000 or more impressions is meaningful traffic without new content. [L1269, 2025-26]
- CTR check example: 90 clicks from 33,858 impressions at an average position of about 8 is a CTR of about 0.27%. A page near the bottom of page one commonly earns 1 to 3%, and reaching just 1% on those impressions would mean about 340 clicks. [L1269, 2025-26]
- Brand search check: if your own brand ranks lower than third-party aggregators in Search Console, for example around position 10 with hundreds of impressions, act on it. Make the homepage title lead with the brand name, set up Organization schema and sitelinks, and confirm the brand's own pages are the ones shown. [L1269, 2025-26]

### Smart SEO and AI-assisted drafts

- Smart SEO gives each product an SEO score from 0 to 100 for its title and meta description. Use low scores to find products to improve first, but do not treat a 100 as proof there is nothing left to improve. [L1190, 2020-26]
- Case: a product named only `100K Club` had a Smart SEO score around 50. The meta title was changed to include the brand name and the full product type, `Brand 100K Club shirt`, and the score rose to about 75. The change was made by editing the meta title field in the product's Smart SEO record. [L1190, 2020-26]
- Generate meta title and description with Smart SEO AI:
  1. Open the product in Smart SEO and click edit on the meta title and description.
  2. Delete any description text you do not want to keep.
  3. Enter keywords for the generation, such as the brand name, product type, and product name.
  4. Choose a tone of voice that fits the brand: expert for a serious brand, playful for a fun one.
  5. Click Generate.
  6. Choose the titles and descriptions you like; you can keep both options.
  7. Check every generated claim against the real product details.
  8. Click Save.
  [L1190, 2020-26]
- Generate meta tags for blog posts: Smart SEO > Meta tags > Articles > Edit > Generate. Pages and special pages can be handled the same way in their own sections. [L1321, 2020-26]
- Generate and choose meta tags in Smart SEO:
  1. Open Smart SEO > Meta tags > Articles and click Edit on the post.
  2. Click Generate.
  3. Enter the target keyword(s) in the keyword field, for example `customizing your standing desk` plus `ultimate guide`.
  4. To change the tone, select a different tone and click Generate again. Each run gives a new meta title option and a new meta description option.
  5. Compare the generated options with the ChatGPT meta description and keep the stronger one.
  6. Enter the chosen meta title and meta description into the post's search engine listing in Shopify and save.
  [L1321, 2020-26]
- The Smart SEO meta tag view may still show old values right after a post has changed. Reload the view or check the saved values in Shopify before relying on them. [L1321, 2020-26]


Part 11 of 30 of "14. SEO and Content: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/14-seo-and-content.md · Previous: https://dlichters.com/ai/ecom/deep/14-seo-and-content/10-discontinued-and-backordered-products.md · Next: https://dlichters.com/ai/ecom/deep/14-seo-and-content/12-bulk-rewrites-from-search-console-data.md
