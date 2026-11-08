<!-- part of ecom/deep/04-store-build-and-shopify.md -->
Part 43 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/42-4-store-build-and-shopify-full-technical-reference.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/44-apps-and-leftover-code.md

## Speed, apps and technical health

### Theme choice and code weight

- On Shopify, site speed depends on the code weight and efficiency of the theme, apps and images, not on Shopify's infrastructure. Lightweight themes load faster than bloated themes with sloppy code. [L0245, 2020]
- The installed theme is the main factor in page speed, so choose a theme built for fast loading. Manhattan is described as a fast-loading option. [L1190, 2020-26]
- Page speed is a critical SEO ranking factor and conversion metric. Choose a lightweight theme with minimal code and limit installed apps, because each one adds code weight. [L0176, undated]
- Store speed is an SEO ranking factor, so slow pages should be fixed as part of search work. [L1092, 2022]
- Choose a theme with clean, lightweight code. Compare candidate themes' speed before committing, because speed-optimised themes are not all equal. [L1098, 2019+]
- For fast collection pages, use an optimised theme such as Manhattan and install as few apps as possible. Image compression helps, but the theme and the number of apps have the bigger effect. [L0368, 2020-26]
- Free Shopify themes such as Sense and Refresh generally load quickly and are a good base when speed matters. [L1259, undated; L1345, 2021+]
- Page builders such as PageFly add a layer on top of the theme and increase load time somewhat. Weigh that cost against the conversion features they provide. [L1259, undated; L1345, 2021+; L1260, undated]
- Theme updates can shift load time by as much as 10 seconds. Test whether the theme itself causes slowness. If it does, change the theme or invest in improving it. [L1522, 2021-22]
- Custom code in the theme keeps a site faster than stacking extra apps. A developer can add a feature such as sorting when the theme lacks it. Paid apps remain an option when custom development is not affordable. [L0968, 2021]
- Responsiveness directly affects the relative mobile conversion rate. Use a theme from the Shopify Theme Store or a trusted developer, and design with mobile users first. [L0423, 2019]
- Improve speed with quick code changes rather than an expensive hosting upgrade. A costly host for a small speed gain reduces net profit and can lower the sale price. [L1468, 2014]
- Do not hire Fiverr freelancers to boost site speed unless you understand their method. They often inject code that hides the site from speed testing tools, which can be penalised or banned by Google. [L0788, undated]
- The legitimate ways to reduce load time are compressing images and removing apps that are not needed. [L0788, undated]
- Keep JavaScript and theme libraries to an absolute minimum. Use only open-source libraries under the MIT license and avoid bloated libraries, because many premium themes load a large number of them. [L0709, 2017+]
- Use CSS for simple animations instead of JavaScript, for example with the Animate.css library, to keep the page lighter. [L0709, 2017+]
- Use system fonts where possible. They load much faster than custom web fonts, and font loading is one of the biggest factors in store speed. [L0709, 2017+]
- Heavy visual effects such as full-screen video backgrounds, parallax effects and many moving elements slow page loading. Avoid them unless they demonstrably help sales. [L1098, 2019+]
- Keep the number of product variants reasonable. Too many variants can slow a store, so review the speed impact with GTmetrics rather than relying only on the Shopify speed score. [L1283, 2023]

### Theme and admin settings

- Leave the Advanced, Custom styles and scripts, and Performance settings at the Shopify defaults in the early stage, because the default performance settings are already set correctly for the theme. [L1371, 2021-22]
- To change robots.txt or other theme files, go to the theme editor and open the code editor. Shopify support documentation covers the exact process. [L1115, 2024]
- Turn off quick view on collection pages. Its code loads before the customer clicks, it slows the page, and there was no evidence it increased conversion. Customers can open the product page instead. [L1266, 2021-22]
- Avoid sliders. Check whether a carousel is really needed at shouldiuseacarousel.com. [L0423, 2019]
- Remove quick shop functionality. [L0423, 2019]
- Keep homepage slideshows and large hero images only if analytics show visitors click them and buy. If they are not clicked, remove them, because they add load time without helping the sale. [L1098, 2019+]
- Shopify shows an online store speed score only when password protection is disabled. The score can take 1 to 3 days to calculate after that, and it shows as unavailable while the store is password protected. [L1292, 2021-22; L1371, 2021-22]
- Your store's speed score depends on which apps are installed, whether the theme's code has been modified, and how large the images and videos are. [L1292, 2021-22]

### Measuring speed

#### Which tool to trust

- Use GTmetrix for page speed readings. The Shopify admin score gives a less accurate picture of how fast a store loads. [L0468, 2020]
- Shopify's Speed Score is not a reliable indicator of performance. Use GTmetrix to analyse load speed. [L1092, 2022]
- The Shopify admin speed score drops after any app or script is added, even on a fast theme. The GTmetrix waterfall shows what actually loads slowly for visitors. [L0854, 2022]
- Measure speed on Google PageSpeed Insights and GTmetrix rather than the Shopify speed score. Use fewer apps rather than more, because the speed score is unreliable for judging real performance. [L0665, 2022]
- The key page speed metric is First Contentful Paint, which should be under 3 seconds. Check it in Google PageSpeed Insights or GTmetrix by pasting the product page URL. [L1412, 2023]
- The Shopify online store speed score combines many factors and matters less than First Contentful Paint. Removing unused JavaScript with a developer had little effect in the lesson's experience. Image optimisation and removing apps had the most impact. [L1412, 2023]
- The speed-score numbers in Shopify's Online Store speed report are overall factors and do not matter much. The most impactful steps were image optimisation and removing unused apps. A developer can remove unused JavaScript for a fee. [L1410, 2023]
- Shopify's speed score can show as low even when pages load in under two seconds. Test with several speed tools and look at real load times rather than optimising for the score alone. [L0801, 2021]
- Shopify's own analytics script can show up as very slow in speed tools, sometimes around 30 seconds. It loads in the background and does not hurt the customer experience, so check whether it is the real cause before removing anything. [L0857, 2025]
- GTmetrix provides a free waterfall report for any URL, showing what loads slowest and which elements cause problems. No paid plan is needed. [L1287, 2025]
- GTmetrix measures page load speed and performance scores for a store URL. Use it to check product and landing pages for speed problems before sending paid traffic to them. [L1007, 2024]

#### Which page version and conditions to test

- Mobile and desktop share the same Shopify admin changes, so optimisations made in the admin apply to both devices without separate mobile work. [L0857, 2025]
- Test store speed on both desktop and mobile separately, since a store can load fast on one and slower on the other. Only treat a problem as real if it appears in the test results, not in a single personal impression. [L1446, 2020-26]
- Product page load time should be checked on mobile. [L0801, 2021]
- Test under worst-case conditions, such as a slow 3G mobile connection, not only on home Wi-Fi or good LTE. Check that the site loads fast enough and stays usable in that scenario. [L1098, 2019+]
- Test the final canonical URL. If PageSpeed Insights reports that the requested URL was redirected, for example from http to https or from non-www to www, every visit pays for that extra redirect step. [L1266, 2021-22]
- Test your store regularly with Google PageSpeed Insights, GTmetrix or Pingdom. [L1522, 2021-22]
- Re-run the test after a few minutes, since cached results can change the score. [L0970, 2023] (older: 2023 is not old; see note below)

#### Core metrics and what they mean

- LCP stands for Largest Contentful Paint and measures how long the largest visible element on a page takes to load. Check it in GTmetrix on mobile and desktop and fix the element that loads slowest. [L0857, 2025]
- Layout stability is part of page speed scoring. Elements that move while the rest of the page loads are a sign that the theme code needs a developer review. [L0971, 2024]
- To check layout shift (CLS), reload the page and watch for elements that jump after the initial load. Typical causes are upsell widgets, financing widgets or other apps that inject content late. Removing those apps usually removes the shift. [L1266, 2021-22]
- The standard PageSpeed Insights Opportunities list gives suggestions with estimated savings in seconds. The Diagnostics list gives extra detail that does not directly change the Performance score. Start with the red items, typically removing unused JavaScript, deferring offscreen images, sizing images properly and removing render-blocking resources. [L1266, 2021-22]
- PageSpeed Insights diagnostics can flag text that stays hidden while web fonts load. This does not change the Performance score, but it signals that the font loading setup should be checked. [L1266, 2021-22]

#### Targets and benchmarks

- Aim for an average page load time under 5 seconds. Observed conversion differences between roughly 3 and 5 seconds were negligible, while a difference between 10 and 5 seconds clearly affected conversion. [L1522, 2021-22]
- Page load time should stay well under 10 seconds. Pages taking longer than about 10 seconds cause visitors to leave before the page fully loads, which hurts conversion and retention. [L1099, 2021-22]
- Most items on a page load within about three seconds. If a page takes around 10 seconds on mobile, find the one slow element with a waterfall test rather than removing everything. [L0801, 2021]
- Only the first product image, title and price need to appear within the first seconds on a product page. Sections lower down may load late without hurting the customer's first impression. [L1410, 2023]
- Speed testing targets by source:

| Measure | Value | Units |
|---|---|---|
| Average page load | under 5 s | [L1522, 2021-22] |
| Load time ceiling | under 10 s; above it visitors leave | [L1099, 2021-22] |
| Most items loaded | within about 3 s | [L0801, 2021] |
| First Contentful Paint | under 3 s | [L1412, 2023; L1410, 2023] |
| Grade during a fix | aim for A or A+ | [L0854, 2022] |
| Grade for a healthy store | A preferred; B or B+ fine | [L0963, 2022] |

- GTmetrix benchmarks judged very good for a Shopify store: performance score 97, structure score 87, Largest Contentful Paint 671 ms, Total Blocking Time 140 ms, Cumulative Layout Shift 0.02. Compare the store against competitor stores on GTmetrix to decide whether further speed work is needed. [L0836, 2024]
- In one case, two embedded videos on a product page dragged the GTmetrix grade down to E with a 48% performance score. Removing them raised the grade to C. Well-built stores typically reach an A with around 99%. [L0970, 2023]
- A speed score around 38 may be acceptable if the cause is minor. Look at what is causing the slowdown before deciding whether the score matters. [L0970, 2023]
- Older stores with heavy code can sit at D+ and still sell well. New stores typically reach B or A. [L0963, 2022]
- Benchmark a store's performance score against the largest e-commerce sites. Run the biggest e-commerce brands through a tool such as GTmetrix, compare their scores with your own, and if your store scores as well as or better than them, treat the score as acceptable. Do not delay launch to raise it further. [L1446, 2020-26] (older: undated, see note below)
- Fix slow pages on your own store before comparing it with a slow-loading competitor. A slow competitor is a weakness you can exploit, but your own store must not have the same problem. [L0894, 2020-26]
- Revenue impact of load time:
  - 79% of customers who are dissatisfied with web performance are less likely to buy. [L0423, 2019]
  - For a store earning $100k per day, a one-second speed improvement adds about $7k in daily revenue. This shows why load time is a direct revenue question. [L0423, 2019]
  - A one-second delay in load time typically causes an 11% loss in page views and an overall 7% loss in conversions. [L0423, 2019]
  - The common claim that each second of load time cuts conversion by about 10% is unreliable. Test your own store. Bringing a site down to a 1 to 2 second load time can require developer time, so it is only worth it when the benefit is measurable. [L1522, 2021-22]

#### Test procedures

**GTmetrix waterfall: find the cause of a slow site**

1. Go to gtmetrix.com and enter your store URL.
2. Create a free account if asked to see the results.
3. Open the Waterfall view.
4. Look at the items loading last, on the right side of the list. Large videos or a single slow app are common causes. [L0470, 2023] (2023)

**GTmetrix: create a free account and read the waterfall**

1. Enter the store URL in gtmetrix.com.
2. Create a free account, which needs no credit card.
3. Run the test and read the scores.
4. Open the Waterfall section, where the bars show what loads from fastest to slowest.
5. Identify the slowest element, such as an image, video or app, and decide whether to remove or replace it. [L0857, 2025]

**GTmetrix: test and fix (grade target)**

1. Run the store URL through gtmetrix.com.
2. Aim for an A or A+ grade.
3. Open the waterfall and look at the slowest items at the bottom of the list.
4. Remove or optimise the items that take the longest, such as large videos, oversized images, unused apps or tracking scripts.
5. Recheck the grade after each change. [L0854, 2022]

**GTmetrix: test and fix (short version)**

1. Enter the store URL and click test.
2. Open the waterfall to see the load order.
3. Note the items that take longest, such as apps, large uncompressed images, videos or broken code.
4. Remove unneeded apps, compress images and repair broken code. [L0963, 2022]

**GTmetrix: test and read the waterfall**

1. Enter the store URL with HTTPS and run the test.
2. Open the waterfall view and scroll down. The items loading longest appear furthest to the right, in milliseconds.
3. Optimise those items, for example by compressing images, or remove code from apps no longer used. [L1092, 2022]

**Test and fix page speed with GTmetrix (with script check)**

1. Open gtmetrix.com and run a test on the store URL.
2. Read the report for the elements slowing the page, such as videos, large images or apps.
3. Before removing an app, search the page source (Cmd+F or Ctrl+F) for the app or developer name.
4. Remove or replace the heavy element.
5. Re-run the test after a few minutes, since cached results can change the score. [L0970, 2023] (2023)

**Test with GTmetrix and fix in order**

1. Run the store through GTmetrix.
2. Open the waterfall view and look at how each element loads.
3. Identify the slowest elements at the bottom of the waterfall.
4. Check the likely culprits: embedded videos, oversized images and apps that add extra code.
5. Fix them yourself or outsource the fix. [L1446, 2020-26]

**Find the source of a slow item on a product page**

1. Open the waterfall report for the slow page.
2. Find the item at the bottom of the list, which loads last and takes the longest.
3. Copy that item's code or URL.
4. Search for that code on Google to find its source and see whether others have fixed the same slowdown, for example in the Shopify community forum or in developer documentation. [L0965, 2024] (2024)

**Improve product page speed**

1. Test the page on GTmetrix.
2. Read the waterfall, which shows each element and how long it takes to load.
3. Identify the one or two slow items, such as an app, a large image or a video.
4. Remove or modify those items.
5. Compress all images so they load fast. [L0801, 2021]

**Find what slows a store with GTmetrix (waterfall, product-level check)**

- Use the procedure above for the waterfall and the Opportunities list. The waterfall shows which items load last, and those are the first candidates for optimisation, usually apps, oversized media or broken code. [L0963, 2022]

## Order of work for speed

**Improve store speed in this order**

1. Avoid sliders. Check whether a carousel is really needed at shouldiuseacarousel.com.
2. Remove quick shop functionality.
3. Optimise images: use the proper file format, crop and scale them to the display size, and compress them with TinyPNG or Crush.Pics.
4. Keep only essential apps.
5. Update your theme.
6. Optimise and minify your code. [L0423, 2019]

**Improve page speed in this order**

1. Test the site regularly with Google PageSpeed Insights, GTmetrix or Pingdom. [L1522, 2021-22]
2. Check whether the theme causes slowness. If so, change the theme or invest in improving it, because theme updates can shift load time by as much as 10 seconds. [L1522, 2021-22]
3. Reduce front-end apps, meaning apps that run JavaScript as the page loads. Replace simple app features with custom code from a developer where practical. [L1522, 2021-22]
4. Compress images before uploading them, using an offsite tool such as ImageOptim rather than in-store compression apps, which are unreliable. [L1522, 2021-22]
5. Embed videos from YouTube or Vimeo in a lightweight way instead of with the standard Shopify embed code, which is often the largest element in page load time. [L1522, 2021-22]
6. If fixes are too technical, hire a developer with Shopify page speed experience, for example through onlinejobs.ph, freeup.net or toptool.com. [L1522, 2021-22]

**Improve page speed (image and app focus)**

1. Use GTmetrix or Google PageSpeed to identify the main issue, usually images or GIFs. [L1260, undated]
2. Compress images below 300 KB and GIFs below 800 KB (ideally under 1 MB). [L1260, undated]
3. Target product images under 50 KB while keeping the quality nearly the same, using TinyPNG or Photoshop. [L1260, undated]
4. Install as few apps as possible, since each app adds JavaScript that runs on every page load. Remove unused apps and their code. [L1260, undated]
5. Note that page builders such as PageFly add an extra layer on top of the theme and slow the page, so weigh the speed cost against the conversion features. [L1260, undated]

**Speed check and fix**

1. Run the store through GTmetrix or Google PageSpeed.
2. Identify the main issue, which is usually large images or GIFs.
3. Compress the images and GIFs with TinyPNG or Photoshop.
4. Remove apps that are no longer used, together with their code.
5. Re-test the page speed. [L1345, 2021+]

## Images

### Compression and format

- Compress product images to small file sizes to reduce product page load time. This improves both search engine rankings and user experience. [L0176, undated]
- Compress all images so they stay high quality on screen but have small file sizes. [L1098, 2019+]
- Compress all product images before uploading them, for example with TinyPNG, and use lower resolution so pages load within a few seconds. Slow-loading product images cause visitors to bounce. [L0950, 2023]
- Shopify has begun serving the WebP image format automatically to supporting browsers such as Chrome. This speeds up loading without any action from the store owner. Continue using Shopify's built-in handling and focus your own optimisation on other areas. [L0390, 2019]
- Convert all JPEG, PNG and GIF images to WebP. A 1 to 2 MB JPEG can drop to about 200 KB or less. Use an online converter for bulk conversion instead of an image app. [L1410, 2023]
- Speed up animated GIFs by converting each GIF to WebP. GIFs of 1.5 to 5 MB typically drop to about 200 to 500 KB as WebP. [L1436, undated]
- Compress oversized supplier images before uploading them, for example files around 20 MB, because heavy media slows the store. [L0857, 2025]
- Oversized image files force the browser to shrink them, which slows page loading. This matters once the store goes live, even if it does not matter for a demo site used to call suppliers. [L1310, 2021-22]
- Speed tools often flag oversized images on mobile. A 1000 by 1000 pixel image that looks fine on desktop can be too large on a small screen. Serving a smaller image to mobile devices fixes this warning. [L0709, 2017+]
- A reliable approach for device-specific images is to load a separate desktop version and a separate mobile version, switched with media queries. Responsive srcset attributes were described as not always reliable. [L0709, 2017+]
- Lazy loading for images is a code feature. Shopify's Turbo theme and some other themes have it built in. Other themes need a developer to add lazy loading code or a theme change. No reliable app for this was known to the lesson's author. [L1266, 2021-22]
- Crop and scale images to the display size before upload, and use the proper file format. [L0423, 2019]

### Image alt text (SEO and accessibility)

- Every image on the site needs an image alt tag. In Shopify this is easy to add in the image settings. [L1467, undated]
- Image alt tags must be descriptive and should include at least one keyword relevant to the content where the image appears. [L1467, undated]

## Video and embeds

- Embedded YouTube videos do not slow site loading because they are served from YouTube's servers. Uploading videos directly to your Shopify server will slow your site. [L0245, 2020] (older: 2020; see the disagreement note below)
- Do not upload the video directly to Shopify or embed it like a YouTube or Vimeo player, because this slows the site. Hosting the video through LyveCom keeps load times lower and gives e-commerce analytics. [L0959, 2025-26]
- Embedded videos on product pages load slower and lower page speed scores, even though they do not hurt the user. Embed a video only when it helps conversion. Otherwise upload it to a YouTube channel, link it from the product description, and link the social profiles in the store footer. [L0806, 2024]
- The standard Shopify YouTube embed loads a large JavaScript file even when the video is not playing, which adds seconds to load time. Use a thin embed that loads the JavaScript only after the user clicks play, either through custom code (preferred) or a light app. [L1266, 2021-22]
- Standard YouTube or Vimeo embeds are often the largest element of a page's load time. Embed them with a lightweight method instead, especially on product pages that use video. [L1522, 2021-22]
- Common speed problems are large page videos, oversized images, unused app code and tracking scripts from Google or Microsoft. Background tracking scripts often add load time even when visitors don't notice. [L0854, 2022]
- Do not embed large PDFs directly in product pages. Upload the file to Shopify Files or Dropbox and link to it with a text link or a PDF icon image. [L0970, 2023]
- A new Shopify store loads very quickly at first. Slowdown comes from many videos, uncompressed high-resolution images and apps. Check speed after each batch of content or app changes. [L0807, 2025]


Part 43 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/42-4-store-build-and-shopify-full-technical-reference.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/44-apps-and-leftover-code.md
