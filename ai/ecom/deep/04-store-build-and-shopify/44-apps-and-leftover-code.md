<!-- part of ecom/deep/04-store-build-and-shopify.md -->
Part 44 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/43-speed-apps-and-technical-health.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/45-pre-launch-testing-and-go-live.md

## Apps and leftover code

### How many apps

- Apps needed with a new theme: very few, typically 4 to 5 in total, and only those mentioned in the blueprint. Most functionality is built in. [L0249, 2022]
- No fixed number of apps slows a store. A single poorly coded app can slow it, while highly rated apps usually do not affect user experience in a meaningful way. [L1092, 2022]
- Use as few apps as possible to keep the store fast and working properly. Automatic discounts built into Shopify are preferred to extra apps. [L0650, undated]
- Every app adds JavaScript and code, so every installed app increases load time. Remove unused apps, ask developers about their load impact, and minimise installed apps. [L1412, 2023]
- Every app and large file slows the store. Heavy session-recording apps add extra load. Avoid adding them until the store has enough traffic to justify the cost and the slowdown. [L1380, 2022]
- Page speed comes mainly from a fast theme, compressed images and removing leftover code from apps you no longer use. Speed apps are not needed for this. [L0853, 2021]
- Two apps that both add review or rich snippet schema data can conflict and cause Google Search Console or Merchant Center warnings. Find the apps that add schema data and disable one of them. [L0801, 2021]

### Review apps

- Review app (Loox) display: go to Shopify Admin > Online Store > Themes > Customize > App embeds and enable the app there if its reviews do not appear on the store. Apps often do not display on PageFly stores that use Theme 2.0 until they are enabled this way. [L0363, 2022+]

### Leftover code after uninstalling

- Apps leave their code in the store even after uninstalling. This adds page weight and slows the site. Contact the app developer through the Shopify app store to have the leftover code removed, or ask where the code is and remove it yourself. [L0806, 2024] (older: 2024 is not old; see note)
- Uninstalling an app from the app dashboard removes it from the app section, but its code may stay in the store theme and keep slowing it down. Ask the app developer which code to delete after uninstalling. [L0551, 2020]
- Uninstalling an app from the Shopify app store does not remove the code the app added to the theme. Remove the leftover code separately and check page speed again. [L1088, 2020]
- Remove and test apps carefully, because uninstalling an app often leaves its injected code on the site. Leftover code can be removed by contacting the app developer through the app's page in the Shopify App Store. [L1092, 2022]
- Revisit the theme after about two years. Stores built by several developers often contain residual code from apps that were uninstalled but not fully removed. This leftover code can cause errors that slow the site or break important features. [L0390, 2019]
- Leftover code from multiple freelancers and removed apps can account for a large share of a theme's code and can create many JavaScript errors. These errors may stop other scripts from running, so features such as upsells on the cart can silently fail. [L0390, 2019]
- Leftover HTML or CSS footer code visible on the storefront, such as raw code text, makes a store look broken and unprofessional. Remove it before going live. [L0656, undated]
- Speed issues caused by uninstalled apps: use GTmetrix to find the slowest-loading code snippet, search for it on Google to identify the app or cookie, and then decide whether to keep it or ask the developer to remove it. [L0971, 2024] (2024)
- Note: a formatting or display bug after installing a theme or app can be found by disabling installed apps one by one, except core apps, and checking after each one. [L1285, 2024] (2024)
- Note: the apps that cause a bug can be found by the same one-by-one method. [L1285, 2024]

### Removing leftover code (procedures)

**Reduce app code that slows the store**

1. Remove apps you do not use.
2. Message each app developer in the Shopify app store to remove the code they injected, because removing an app does not always remove its code.
3. Measure speed on Google PageSpeed Insights and GTmetrix rather than the Shopify speed score. [L0665, 2022]

**Find leftover app code in the page source**

1. Open a store page in Google Chrome and choose View page source.
2. Search the page for the uninstalled app's name (Cmd+F on Mac, Ctrl+F on PC).
3. Check the matches. Leftover code from the app shows up as matches, and some remaining matches may belong to apps still in use.
4. Check the store's URL on BuiltWith to see the tools and software installed on it.
5. Email the app developer through the Shopify app store, ask them to confirm the app is fully removed, and ask whether any remaining code must be removed manually. [L0835, 2023] (2023)

- BuiltWith shows the tools and software installed on a website when you enter its URL. It can help confirm that unwanted apps are no longer present. [L0835, 2023] (2023)

### Custom code instead of apps

- Custom code in the theme keeps a site faster than stacking extra apps. [L0968, 2021]
- Replace simple app features with custom code from a developer where practical. [L1522, 2021-22]

## Scripts, fonts and mistakes in code

- Mistake: heavy session-recording apps and tracking scripts add load time. Check each one against its speed cost. [L1380, 2022; L0854, 2022]
- When copy-pasting code, word processors can convert straight quotes to curly quotes, which breaks the code. Copy the code from the original source and follow its instructions exactly. [L0803, 2022]
- Do not change the tracking or theme code without checking its load time afterwards. [L0807, 2025]

## JavaScript errors

- JavaScript errors can break add-to-cart and ruin the customer experience even when the ads and product are fine. Check the add-to-cart flow after every theme or app change. [L1225, 2025] (2025-26 source)
- Leftover code from multiple freelancers and removed apps can create many JavaScript errors that stop other scripts from running, so cart upsells can silently fail. [L0390, 2019]
- A performance fix can break a page. A sales drop after a speed optimisation app was added was traced to script placement, which kept main product images from loading quickly and lowered conversion. Check the product page visually after any speed change. [L0950, 2023]
- A mandatory terms-and-conditions checkbox added to the cart with a third-party app can add about 0.5 seconds to cart load time. Replacing it with a small HTML addition in the theme avoids that delay. [L0390, 2019]

## Cookie consent

- Cookie consent is a separate section at the bottom of the theme editor sidebar, below Footer. It shows a pop-up at the bottom of the page where visitors accept cookie tracking. [L0775, 2020-26]
- Turn cookie consent on for stores selling into the EU, where cookie opt-in is required. Leave it off if it is not needed. [L0775, 2020-26]
- Cookie consent banners are mainly needed because of EU laws. Ask support how to add one to an older theme rather than building it yourself. [L0934, 2023] (2023)

## Accessibility

- Accessibility means making the store usable for everyone. Analyse colour contrast and component sizes, and use accessibility apps where they add extra support. [L0423, 2019]

## URLs and handles

### Product URL pattern

- Create product page URLs in the format [Brand Name]-[Product Name]-[SKU#] to include keywords in the URL slug and make the URL more descriptive for search engine optimisation. [L0176, undated]
- Product URLs should follow the pattern brand-name-product-name-sku. Use dashes, not underscores. Example: herman-miller-aeron-chair-9876. This matches competitor conventions and helps Google understand products. [L0274, 2023] (2023)
- In Shopify, the domain and the path prefix (/products/ or /collections/) are generated automatically. The only part to edit is the slug that follows them. [L1414, 2021-22]

### Handles: set once, change carefully

- A product's URL handle should be set once and kept unchanged after the store is live, because changing it breaks existing links and rankings. A product title can be changed freely. [L0835, 2023] (2023)
- Changing names and descriptions without changing URLs is safe. Do not change product URLs without setting up redirects. [L0964, 2023] (2023)
- If a product URL handle is changed after the page has ranked or received links, create a redirect from the old URL to the new one. Redirects are needed only for pages that already have traffic, rankings or external links. [L0835, 2023] (2023)
- When you change a product's URL handle in Shopify, a 'Create redirect' checkbox appears. Keep it selected for any product that already has rankings, backlinks or ad traffic, because unchecking it leaves the old URL broken. [L0835, 2023] (2023)

**Change product URLs on a live store**

1. Set up redirects from the old URLs to the new ones.
2. Check in Google Search Console that there are no issues.
3. Resubmit the sitemap to Google Merchant Center as soon as possible.
4. Consider pausing ad campaigns during the change so the old link does not lead to a dead page. [L0964, 2023] (2023)

**Change product titles and handles before launch (order of work)**

1. Make all product title and URL handle changes before submitting the sitemap or feed.
2. Delete the sitemap submitted in Google Search Console.
3. Delete the product feed in Merchant Center.
4. Make the changes you want.
5. Resubmit the sitemap and re-add the product feed after the changes are finished.
6. Create redirects only for pages that already had traffic or links, which is not needed before the store has launched. [L0835, 2023] (2023)

### Hiding products

- Hiding a product from the Online Store sales channel removes it from the homepage and collections, but keeps the product. Google then sees a broken link and 404 errors for that URL. [L1414, 2021-22]

### Finding 404 pages

**Find pages returning 404 errors in Google Analytics**

1. Go to Behavior.
2. Open Site Content.
3. Click All Pages.
4. Find the row for the 404 page and click it.
5. Add the secondary dimension Source to see which source sends traffic to that page. Medium or Term can be added for more detail. [L0941, 2022]

## Redirects

- Use redirects only where absolutely needed, because each redirect adds an extra loading step. [L1266, 2021-22]
- 301 redirects can be created by hand in the Navigation section (Online Store > Navigation) without an app. For redirecting many old URLs at once, a bulk redirect app can be installed. [L1372, 2021-22]
- 301 redirects are set in the Shopify admin under the navigation settings. An app can be used to manage many redirects in bulk. [L1414, 2021-22]

**Redirect for a renamed collection**

1. Rename the collection in Shopify if it is necessary.
2. Add a URL redirect from the old collection address to the new one in Shopify.
3. Confirm the old URL forwards to the new page. [L1114, 2023] (2023)

### Hosting and technical limits

- Shopify is a hosted platform, so technical SEO on it is restricted to the settings and features the platform exposes to the merchant. Advanced server-level changes are outside the scope of a Shopify store owner. [L1362, 2021-22]
- Platforms such as WordPress with WooCommerce or Magento give the owner more control over hosting and server features than Shopify does. Stores on these self-hosted platforms can carry out technical SEO measures that a Shopify store cannot. [L1362, 2021-22]

## Canonical and SEO basics

### Canonical

- The canonical code goes into theme.liquid inside the head section, directly before the closing head tag. Paste it exactly as provided, with no edits. The code itself is not included in this unit; take it from the original course material. [L1414, 2021-22]

### Meta descriptions and Yoast

- Every page on the website needs a unique meta description. Pages without one, such as those that fall back to the menu text, produce weak snippets in search results. [L0575, 2014]
- Do not use Yoast SEO on Shopify, because it is not recommended for Shopify stores. [L0667, 2025] (2025)

### Keeping pages out of Google

- To keep a page out of Google, remove it from the sitemap so it is not submitted, or add a noindex tag via the back end. Pages that already receive clicks, such as a warranty page, are usually better left indexed. [L0963, 2022]
- Use a noindex tag on duplicate test pages so search engines do not treat them as duplicate content. Apply it through a noindex app on Shopify. The duplicate page is marked noindex through a noindex app available for Shopify. [L1364, 2021-22]
- A page that appears too often in on-site search results needs a theme-level fix that is not built into the theme. Email support with the exact question and let developers check it. [L0963, 2022]

### Indexed pages in Search Console

- In Google Search Console, a Shopify store showing around 128 indexed pages and around 2.52K non-indexed pages is normal. Most non-indexed URLs are duplicates created by product variants. [L0971, 2024] (2024)
- Check whether the non-indexed pages are normal:
  1. Count the pages on the store (products, blogs, other pages).
  2. Compare that count with the number of indexed pages.
  3. If they roughly match, the other URLs are variant duplicates that Google should not index. [L0971, 2024] (2024)

### Speed and ranking

- Store speed is a ranking factor for SEO. [L1092, 2022]
- Page speed is a critical SEO ranking factor. [L0176, undated]

## Forms and spam protection

- In Online Store > Preferences > Spam protection, enable Google reCAPTCHA on contact forms. Optionally also enable it on the login, create account and password recovery pages. Some customers may then be asked to complete a reCAPTCHA task. [L0370, 2021-22]

## Where sources disagree

- **YouTube embeds.** One 2020 source says embedded YouTube videos do not slow a site because they are served from YouTube's servers. [L0245, 2020]. Later sources say embeds slow the page: embedded videos load slower on product pages, and the standard Shopify embed loads large JavaScript even when not playing. [L0806, 2024; L1266, 2021-22] (older: 2021-2022 for [L1266, 2021-22]). Use the thin or lightweight embed when a video is needed, and embed only when it helps conversion. [L0806, 2024; L1266, 2021-22]
- **How much the score matters.** Several sources say the Shopify admin score is unreliable and GTmetrix or Google tools are better. [L0468, 2020; L1092, 2022; L0665, 2022; L0854, 2022] One source says the score matters less than First Contentful Paint. [L1412, 2023] Another says its overall factors do not matter much. [L1410, 2023] The score depends on apps, theme code and media size. [L1292, 2021-22] Use the waterfall and First Contentful Paint as the main signals. [L0857, 2025; L1412, 2023]
- **Grade targets.** One source says aim for an A or A+ during a fix. [L0854, 2022] Another says A is preferred, B or B+ is fine, and older heavy stores can sit at D+ and still sell. [L0963, 2022] Aim for A while fixing; accept B when the store already sells. [L0854, 2022; L0963, 2022]
- **App count.** One source gives a typical count of 4 to 5 apps for a new theme. [L0249, 2022] Another says no fixed number slows a store, and one poorly coded app is enough to matter. [L1092, 2022] Use the blueprint list as the limit, and judge each app by its code. [L0249, 2022; L1092, 2022]
- **Revenue per second.** One source gives 11% loss in page views and 7% in conversions per second. [L0423, 2019] Another says the 10% claim is unreliable and advises testing your own store. [L1522, 2021-22] Test your own store before budgeting for speed work. [L1522, 2021-22]
- **WebP.** Shopify serves WebP automatically to supporting browsers, and the advice is to keep using that. [L0390, 2019] Another source says to convert all JPEG, PNG and GIF images to WebP before upload. [L1410, 2023] The units do not explain how the two fit together. Use Shopify's built-in handling for delivery, and convert GIFs and oversized files before upload. [L0390, 2019; L1436, undated]
- **Image compression tools.** Sources name TinyPNG, Crush.Pics, Photoshop and ImageOptim. [L0423, 2019; L1260, undated; L1522, 2021-22] One older source says in-store compression apps are unreliable and recommends an offsite tool. [L1522, 2021-22] Use an offsite tool. [L1522, 2021-22]
- **Sliders and carousels.** One source says avoid sliders. [L0423, 2019] Another says keep a slideshow only if analytics show clicks and sales. [L1098, 2019+] Remove them unless you can measure clicks and sales. [L0423, 2019; L1098, 2019+]
- **Redirects.** One older source says use redirects only where absolutely needed. [L1266, 2021-22] Another says redirect whenever a live product URL changes. [L0964, 2023] (2023) A third says redirects are needed only for pages with traffic, rankings or links, and not before launch. [L0835, 2023] Redirect pages that already have traffic, rankings or links. [L0835, 2023; L1266, 2021-22]
- **Mobile versus desktop.** One source says admin changes apply to both devices. [L0857, 2025] Another says test each device separately because a store can load fast on one and slower on the other. [L1446, 2020-26] Make the change once in the admin, then test both devices. [L0857, 2025; L1446, 2020-26]
- **Cached results.** One source says cached results can change the score, so re-run after a few minutes. [L0970, 2023] Another says Shopify caches content heavily, so a theme change can take a while to appear live. [L0709, 2017+] Wait for the cache to update before judging a change. [L0709, 2017+; L0970, 2023]


Part 44 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/43-speed-apps-and-technical-health.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/45-pre-launch-testing-and-go-live.md
