<!-- part of ecom/deep/05-apps-and-tools.md -->
Part 36 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/35-utm-tracking-for-partners-and-banners.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/37-orders-automation-fraud-and-operations.md

## Conversion Testing, Site Speed and Monitoring

### Tool Map and Testing Stack

| Job | Tool | Units |
|---|---|---|
| A/B testing on Shopify, no code | Visually | [L0197, 2025-26; L0389, 2025-26] |
| Controlled A/B testing after site changes | Lively | [L1225, 2025] |
| Price, image and description tests on one product | Lomio | [L0524, 2023] |
| Session recording and heatmaps | Lucky Orange, Hotjar, Smartlook, FullStory, Microsoft Clarity | [L0293, 2020-26; L0390, 2019; L0837, 2025] |
| User testing with real people | User testing services, Usertesting.com | [L0390, 2019; L0423, 2019] |
| Speed testing | GTmetrix, Google PageSpeed Insights, Pingdom | [L0851, 2025; L0390, 2019; L0575, 2014; L1522, 2021-22] |
| Image optimization and SEO app | Smart SEO | [L1190, 2020-26] |
| Broken-link checks | Check My Links (Page Modified) | [L0332, 2021-22] |
| Uptime monitoring | Pingdom | [L0575, 2014] |
| Test tracking | Trello, spreadsheet, Google Sheet, Asana | [L0399, 2021-22] |

### Conversion Testing: Prerequisites

- Testing tools named in the sources include Optimizely, VWO, Convert and Google Optimize. [L0423, 2019]
- Tools for finding conversion problems include Google Analytics with Shopify Analytics, Usertesting.com for user tests, and session recording tools such as Hotjar, Smartlook and FullStory. [L0423, 2019]
- VWO and Google Optimize-style platforms are for running controlled tests. They are only worth the investment once traffic and basic best-practice fixes are in place. [L0886, 2025-26]
- Track conversion rate tests and planned future tests in a Trello board or a spreadsheet, Google Sheet, Asana or similar project management tool. A downloadable Trello template can be used as a starting point. [L0399, 2021-22]

### Conversion Testing: Tools

**Visually (Shopify A/B testing)**

- Visually is a Shopify A/B testing platform available risk-free through one source: no charges until reaching 1.5x to 3x return on investment, which creates zero upfront app cost. [L0197, 2025-26]
- Its recommendation engine uses Shopify purchase data, customer order history and on-site browsing behavior. [L0197, 2025-26]
- Most tests are set up in 3-4 clicks, with toggles for magnifying glass, reviews and design elements. Custom options are available through the Visually team. [L0197, 2025-26]
- Visually runs no-code A/B tests and on-site experiences: promotion bars, social proof, product recommendations, product upsells, custom HTML/CSS/JS components, redirects, Fake Click, and global CSS or JavaScript files. [L0389, 2025-26]
- Results are sent to Google Analytics when the event box is ticked. [L0389, 2025-26]
- The Redirect feature sends visitors to a different URL. This lets you compare two pages, such as two landing pages, and optimize conversions without code. It sits alongside Fake Click, Global CSS and Global JavaScript in the element list. [L0389, 2025-26]

**Lively**

- Lively is an app for A/B split testing on a Shopify store. After major website changes, run the new version against the old one in a controlled test, so each version gets enough visitors to show a clear result. [L1225, 2025]

**Lomio**

- Lomio is used for price and image testing, and for description testing, rather than full page tests. It is a quick way to shift prices and visuals on one product. [L0524, 2023]

**Neat**

- The Neat A/B testing tool is an option for Shopify stores to run conversion tests. It can be used alongside another testing tool to compare results. [L0399, 2021-22]
- Neat AB Testing is a split-testing app from the Shopify App Store. It pulls conversion data from the Shopify checkout and links it to each page version, so results are collected inside the app. [L1364, 2021-22]

**Google Optimize (discontinued)**

- Google discontinued Google Optimize in September 2023. It can no longer be used, and current alternatives must be checked before setup. [L0399, 2021-22; L0423, 2019; L1259, undated; L1364, 2021-22]
- Older sources (2021-22) describe Google Optimize as a free split-testing tool linked to Google Analytics for on-page tests. That method no longer works as described, so a current alternative is needed. [L0399, 2021-22; L1364, 2021-22]
- For landing page split tests in 2026, use a current A/B testing app that works with Shopify instead. [L1259, undated]

### Session Recording: Lucky Orange

- Lucky Orange records your visitors' mouse movements and clicks on store pages in real time. It creates heatmaps showing where visitors interact. [L0293, 2020-26]
- You can watch individual visitor sessions to see scrolling patterns, cursor movements and interaction points. [L0293, 2020-26]
- Lucky Orange records visitor sessions and shows country and location. It can be used to measure average time on site. [L0363, 2022+]
- Lucky Orange offers a 7-day free trial. If you continue after the trial ends, the subscription costs $10 per month. [L0293, 2020-26]
- Use Lucky Orange to show why people bounce. A free trial or free account is enough to start. [L0665, 2022]
- Use it to spot frustrating elements, such as things visitors try to click that are not clickable, which increase bounce rate. (Advice from 2023.) [L0804, 2023]
- It shows where visitors click, where they stop and whether something on the site looks broken. [L1085, 2018]
- A free trial is available for testing. [L0663, 2019]
- Lucky Orange shows how visitors behave on a store, so you can make optimizations based on what they actually do. [L0837, 2025]
- Microsoft Clarity is a free alternative that offers similar behavior tracking. [L0837, 2025]
- It shows how long a visitor has looked at a product before leaving. You can use that information to personalize abandoned cart messages. [L1472, 2022]

**Bot traffic and IP addresses (Lucky Orange)**

- Lucky Orange shows visitor IP addresses. This lets you block bot traffic that inflates visitor counts. [L0941, 2022]
- A seven-day free trial is enough to collect this data. You can cancel afterwards. [L0941, 2022]
- Repeated visits from one IP address with no purchases are most likely a bot. [L1114, 2023]
- To check, search the IP address on Google. Others often identify it as a Google, Microsoft or Meta bot. [L1114, 2023]

### Session Recording: Other Tools

- Hotjar offers heatmaps, scroll maps, user recordings and exit-intent feedback polls. [L0390, 2019]
- Smartlook is a similar session recording tool. [L0390, 2019]
- FullStory is the most expensive option of this group. [L0390, 2019]

**Daily recording review routine (Hotjar, Smartlook or similar)**

1. Install the tool on the store. [L0390, 2019]
2. Once a day, spend about 10 to 15 minutes watching about 5 recordings. [L0390, 2019]
3. Prioritize visitors who added products to cart but did not complete the purchase. [L0390, 2019]
4. Look for buttons that are hard to find, checkout buttons hidden by scrolling, elements visitors click that are not clickable, and rage clicking. [L0390, 2019]
5. Record each flaw and fix the most frequent ones first. [L0390, 2019]

### User Testing

- User testing services let you buy recorded sessions with real users matching a chosen audience, such as age range or interests. [L0390, 2019]
- Assign them a task, such as buying a specific product. You receive recordings with spoken thoughts and notes on why tasks were easy or hard. [L0390, 2019]
- Usertesting.com is named as the tool for user tests when looking for conversion problems. [L0423, 2019]

### Speed Measurement: Which Numbers to Trust

- Shopify's built-in speed test is not a reliable measure. Use Google PageSpeed Insights and GTmetrix for speed checks. [L0665, 2022]
- A Shopify speed score is less useful than the GTmetrix breakdown for finding the cause. (Advice from 2023.) [L1283, 2023]
- GTmetrics and Shopify can show different load times because the tests run from different locations. [L0807, 2025]
- The slowest item in the GTmetrics waterfall is usually the same slow element that shows up in Shopify. [L0807, 2025]

### Speed Measurement: GTmetrix

- GTmetrix is a free speed test that reports page load performance and a waterfall of every page element with its load time. Use it to find the element slowing a product page. [L0801, 2021; L0851, 2025]
- GTmetrix reports a performance score and a waterfall chart. The waterfall shows how each element of the page loads, from fastest to slowest. [L1446, 2020-26]
- It shows the scores, the elements slowing the page, and the code loaded on the site. (Advice from 2023.) [L0970, 2023]
- A free account with no credit card is enough for these tests. [L0857, 2025]
- The free GT Metrics account needs no credit card and allows about 3 speed tests per day. Enter the product or store URL and run the test to get a starting score. [L1190, 2020-26]
- The free version also shows which installed apps or tracking scripts slow the page. [L0551, 2020]

**Benchmarks**

| Metric | Clean store (no code changes, no heavy apps) | Lower results mean |
|---|---|---|
| Performance | About 99% | Room to optimize theme, apps or images |
| Structure | About 95% | Room to optimize theme, apps or images |
| LCP (largest contentful paint) | Under 1 second | Room to optimize theme, apps or images |
| Grade | A |, |

[L1190, 2020-26]

**Reading the waterfall**

- The GT Metrics Waterfall view lists every loaded resource from fastest to slowest. [L1190, 2020-26]
- Scroll down to the lines that stretch furthest to the right on the timeline. These are the slowest items. [L1190, 2020-26; L0272, 2022]
- Optimize or remove the apps or resources that cause them. [L1190, 2020-26]
- Check the waterfall to find slow images or app code, then remove or reduce them. [L0962, 2021]

**Speed check procedure (GTmetrix)**

1. Run the store URL through GTmetrics. [L1283, 2023]
2. Open the waterfall view. [L1283, 2023]
3. Find the item loading slowest, such as a large image or an app script. [L1283, 2023]
4. Fix it or send the code to the developer for identification. [L1283, 2023]

**Finding a slow app (GTmetrix)**

1. Create a free GTmetrics account. [L0807, 2025]
2. Enter your store URL and run the test. [L0807, 2025]
3. Open the waterfall view. [L0807, 2025]
4. Scroll to the bottom of the waterfall to see the slowest-loading items. [L0807, 2025]
5. Note any app or developer names you do not need. [L0807, 2025]
6. Remove the unneeded app from the store. [L0807, 2025]
7. Retest the store speed. [L0807, 2025]
8. Contact the app developer to ask them to remove any leftover code. [L0807, 2025]

### Speed Measurement: PageSpeed Insights

- Google PageSpeed Insights often returns generic speed recommendations that are impractical for a Shopify store. [L0390, 2019]
- Filter its results against your actual app list and image sizes. Start with the heaviest elements, such as apps and unoptimized images. [L0390, 2019]
- The "Remove unused JavaScript" entry lists each script with its host domain, such as a chat widget, pop-up, analytics or finance vendor. [L1266, 2021-22]
- Use those domains to match each slow script to the installed app that injects it before deciding to remove or replace it. [L1266, 2021-22]
- Use Google PageSpeed Insights, GTmetrix and Pingdom to test page speed regularly. They list suggested fixes, though many of those fixes are technical. [L1522, 2021-22]

**WebPageTest waterfall**

- In a WebPageTest waterfall, one slow third-party request, such as a chat widget that stalls on connection, can hold back every request that follows it. This can push the Largest Contentful Paint out by tens of seconds. [L1266, 2021-22]
- Locate the stalled item by its position in the waterfall. Removing that one script can change the result more than any other fix. [L1266, 2021-22]

### Apps, Scripts and What You Control

- Installed apps add code that slows a store. The impact depends on how each app is built, not only on how many are installed. [L1190, 2020-26]
- Remove apps that are not needed so their code is removed as well. [L1190, 2020-26]
- Shopify's hosting, CDN and base platform scripts cannot be changed. Focus optimization effort on images, apps, custom code, CSS, HTML and JavaScript that the store controls. [L1266, 2021-22]
- The standard Shopify plan at about 29 dollars per month serves assets from cdn.shopify.com. The store does not need a separate CDN for normal speed. [L0551, 2020]
- Check hosting-level items in PageSpeed Insights, including Google Tag Manager and tracking tools. Hotjar, Privy, Zotabox, Klaviyo, Facebook and Google Analytics scripts add JavaScript cost. Check whether each is still needed, and move tags to Google Tag Manager where possible. [L1266, 2021-22]
- Financing widgets such as Bread load their scripts on every page, including the homepage. Shoppers only need them on product or checkout pages. For high-ticket stores, check whether the financing app's scripts can be limited to those pages. [L1266, 2021-22]

### Image Optimization and Alt Text

- Add image alt text either manually or with a free Shopify app from the Shopify App Store. Compress product images as well, since large images slow the store down. [L0468, 2020]
- Minifier adds metatags (alt text) to product photos automatically. It resets once per month. [L0272, 2022]
- If only some photos get tagged when you expect all to be tagged, contact Minifier's support for a reset, then run it again. [L0272, 2022]
- Crush Picks is an alternative app if Minifier issues persist. [L0272, 2022]

**Smart SEO: optimize images by collection**

1. Open the Collections tab. [L0368, 2020-26]
2. Select all collections. [L0368, 2020-26]
3. Deselect those without images. Only collections that actually have images need this step. [L0368, 2020-26]
4. Click Optimize collection images. [L0368, 2020-26]

Path: Smart SEO app > Configure > Image optimization. [L0368, 2020-26]

**Smart SEO: optimize product images**

1. Open the Shopify admin and open the Smart SEO app. [L1190, 2020-26]
2. Find the Image optimization section and click Configure. [L1190, 2020-26]
3. Open the Products tab. The app pulls in all store products and shows whether each image is optimized. [L1190, 2020-26]
4. Tick the products to optimize, for example all of them. [L1190, 2020-26]
5. Click Optimize product images and wait for the job to finish. [L1190, 2020-26]
6. Check the savings shown afterwards for the combined image size before and after. [L1190, 2020-26]

**Expected results**

- In one test with 10 products, the combined image size dropped from 60.2 MB to 18.1 MB, which saved about 42 MB. [L1190, 2020-26]
- A store with hundreds or thousands of products may need around 30 minutes or longer. The job can run while you work on other tasks. [L1190, 2020-26]

**Smart SEO: add alt text to product images**

1. Open Smart SEO, go to the Alt tags section, and click Configure. [L1190, 2020-26]
2. Select all products with the checkbox at the top and click Edit products. [L1190, 2020-26]
3. Set the alt text to the product title as a dynamic value pulled from the store, then click Save. [L1190, 2020-26]
4. Open each product image and rewrite its alt text to describe what the image shows, such as the view angle (for example, front view, front view with model, back view with model). [L1190, 2020-26]
5. Save each change. [L1190, 2020-26]

### Smart SEO: Features, Plans and Settings

- Smart SEO covers image compression, Instant Page preloading, alt text editing, AI-generated meta titles and descriptions, product SEO scores (0 to 100), and structured data (JSON-LD). [L1190, 2020-26]
- The JSON-LD feature requires a paid plan. [L1190, 2020-26]

**AI meta tag limits by plan**

| Plan | AI meta descriptions per month |
|---|---|
| $10 per month | 100 |
| $20 per month | 200 |
| $30 per month | 300 |

[L0965, 2024]

- Meta tags generated by an AI app stay on the product after you cancel the subscription. You can subscribe for a month or two to generate them, then cancel. [L0965, 2024]
- Structured data (JSON-LD) setting covers product pages. Before saving, upload the logo, add social media URLs, set the price range, enable the phone number, and connect Judge.me reviews to the store. [L1190, 2020-26]
- The 0 to 100 optimization score for each product updates after you edit its title or meta description and refresh the product list. Use the low scores to choose which products to improve first. [L1190, 2020-26]
- Smart SEO > Page speed > Instant page is disabled until it is set up. Click Enable to preload each page just before a user opens it. This makes page loads feel almost instant and improves user experience. Google's Core Web Vitals test is expected to reflect this over time. [L1190, 2020-26]

### Broken Links: Check My Links

- Check My Links is a free Chrome extension offered by pagemodified.com. It checks every link on the page you are viewing and marks broken ones. [L0332, 2021-22]
- It finds 404 links on other sites without clicking each link manually, which is too slow on pages with dozens of outgoing links. [L0332, 2021-22]
- Use Check My Links for broken link building. Searching the Chrome Web Store for "check my links" returns similar extensions, such as Link Redirect Trace from linkresearchtools.com and Redirect Link Checker. Use the extension offered by pagemodified.com. [L0332, 2021-22]
- Page Modified also offers a crawl of an entire website instead of only the open page. Use the full-site crawl when you need to audit every page of a site for broken links. [L0332, 2021-22]

**Installation**

1. Install Check My Links from the Chrome Web Store. [L0332, 2021-22]
2. Chrome asks to add it with the permission to read and change all data on the websites you visit. Accept this to add the extension. [L0332, 2021-22]
3. The default options can be left unchanged. [L0332, 2021-22]

**Options**

| Option | Setting | Units |
|---|---|---|
| Method of Request | Keep GET as the default. HEAD is faster but can misreport the true HTTP status of a page. Switch to GET if results look odd. GET is also required to parse hashtag targets by element ID. | [L0332, 2021-22] |
| Autocheck | When enabled, the extension checks links automatically whenever the URL of the current tab changes and the page has loaded. If you enable it, also enable Valid Link Caching. | [L0332, 2021-22] |
| Warnings | Warnings appear in the browser console (F12, then Console tab) and are highlighted yellow. Optional checks: Parse DOM after hashtag (flags a hashtag link whose target element does not exist), Trailing # (flags links ending in #), Empty Link (flags empty href), and Anchor tag without href. | [L0332, 2021-22] |
| Valid Link Caching | Enable it so the extension stops re-checking good links that return HTTP 200. It only checks new links or links that were previously broken. This greatly reduces the time needed to recheck a page. The Clear Cache button resets it. | [L0332, 2021-22] |
| Nofollow Links | By default the extension skips links with the nofollow attribute, so only dofollow links are checked. Leave the option Check Links with rel=nofollow unchecked, because dofollow links are the ones worth pursuing for backlinks. | [L0332, 2021-22] |
| Exclude links from these domains | Enter one domain or URL part per line to skip it. The default list already excludes ad network domains such as googleadservices and doubleclick, and appliedsemantics.com, because these are not sites you would contact about a link. | [L0332, 2021-22] |

- On the options page, change the settings you need, then click the "Save my preferences" button at the bottom so the changes are stored. [L0332, 2021-22]

**Results**

- After running Check My Links on a page, the results panel shows the following counts. [L0332, 2021-22]

| Result | Meaning | Units |
|---|---|---|
| Links | Total on the page | [L0332, 2021-22] |
| Valid links | HTTP 200 | [L0332, 2021-22] |
| Valid redirecting links | Redirects | [L0332, 2021-22] |
| Warnings | Optional warning checks | [L0332, 2021-22] |
| Invalid links | Act on these; highlighted red on the page | [L0332, 2021-22] |

- The counter shows how many links are still in the queue. [L0332, 2021-22]

### Uptime Monitoring: Pingdom

- Pingdom monitors the website every minute and sends SMS or email alerts on downtime. [L0575, 2014]
- The base plan costs about $10 per month or $100 per year and covers up to five sites. [L0575, 2014]
- A common alert threshold is 10 or 20 minutes of downtime, to avoid noise from brief hiccups. [L0575, 2014]


Part 36 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/35-utm-tracking-for-partners-and-banners.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/37-orders-automation-fraud-and-operations.md
