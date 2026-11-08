<!-- part of ecom/deep/06-conversion-optimization.md -->
Part 33 of 40 of "6. Conversion Optimization: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/06-conversion-optimization.md · Previous: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/32-recovering-lost-visitors-and-carts.md · Next: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/34-testing-methodology-and-the-cro-cycle.md

## Site speed, mobile and technical hygiene

### Page speed targets

- **Older target, 2021: fully loaded page under 2 seconds.** Look for performance gains when a page loads slower than about 2 to 2.5 seconds. [L0962, 2021]
- **Older advice, 2021-22: stop at about 5 seconds on average.** Reduce speed work until the store runs at about 5 seconds on average, and move the remaining time to core conversion work. Chasing 1 to 2 second load times usually costs developer time that does not pay back unless a measurable conversion gain shows up. [L1522, 2021-22]
- **Both values are given because the sources do not reconcile them.** Use the 2-second figure as the aim for individual pages, and the 5-second average as the point where further speed work needs a measured conversion case. [L0962, 2021; L1522, 2021-22]
- **Slow mobile connections:** Shoppers on slow mobile connections may leave a page that takes more than about 3 seconds to appear, so paid ad clicks are wasted. Example: a visitor from Google Shopping ads looking at a $2,500 dining table left after a 3-second spinner and bought from a competitor. [L1098, 2019+]
- **Judge speed on a weak connection:** Mobile traffic is a large share of ecommerce visits, so mobile load speed matters more than a fast desktop or home Wi-Fi test suggests. Judge store speed by how it performs on a phone with a weak connection, such as an airport network or a slow mobile connection. [L1098, 2019+]
- **Already-good stores:** Website speed scores around GTmetrix grade A with a performance score near 97 are considered very good, and further speed work is not a priority compared with competitors. This is a sanity check for stores already at that level and does not replace the targets above. [L0836, 2024]
- **Speed and conversion:** Website load time directly affects conversion rate; slower-loading pages result in fewer purchases, making image file optimization critical to ecommerce profitability. [L0300, 2021-22]
- **Speed and bounce:** Product page bounce is reduced by fast load times and clear details. [L0801, 2021]
- **Speed and experience:** Page speed affects how users experience a store and how many of them buy. Page speed optimization should be checked and improved on store pages. [L1087, 2020]
- **Speed and repeat purchases:** Customers who are dissatisfied with page performance are 79% less likely to buy again. Speed affects repeat purchases and therefore the effect of email and retargeting campaigns. [L0390, 2019]

### Measuring speed

- **Test the page as a customer would:**
  1. Load the page on desktop, mobile and tablet.
  2. Load it on different computers, on cellular data and on home Wi-Fi.
  3. On each, check the page speed and look for loading problems. [L0473, 2021-22]
- **GTmetrix check:**
  1. Run the URL in GTmetrix.
  2. If the scores show a lot of yellow or red, open the waterfall view.
  3. Find the elements that load furthest to the right.
  4. Remove or optimize the slowest items, such as images or app code. Third-party trackers that load late, such as an email platform script, can be acceptable. [L0962, 2021]
- **Fastest route to the bottleneck (no year given):** Run the store through GTmetrix or Google PageSpeed to find the main bottleneck, which is usually images or GIFs. [L1259, undated]
- **GTmetrix recommendations on Shopify:**
  - Recommendations such as leveraging browser caching, reducing DNS lookups, enabling server-side compression and using a CDN are largely controlled by Shopify's hosting, so they can usually be ignored on a Shopify store. Focus on the recommendations about images, scripts, apps and redirects instead. [L1266, 2021-22]
  - GTmetrix ranks its recommendations by impact, and the top rules improve the overall score most. Not every rule applies to a given page, so treat the list as generic best practice rather than a checklist to complete. [L1266, 2021-22]
  - Keep total page size and the number of requests low, since GTmetrix reports both alongside the fully loaded time. A page with more than 100 requests and close to 2 MB of total size, as in typical unoptimized Shopify stores, usually has clear app and image problems to fix. [L1266, 2021-22]
  - Shopify's Largest Contentful Paint (LCP) and CLS are driven mainly by apps and JavaScript (for LCP) and by theme and apps that push page elements around as they load (for CLS). FCP is harder to control and usually not a problem. [L1266, 2021-22]
- **Speed score availability:** The Online store speed score is not available while password protection is on. After the password is disabled, it can take 1 to 3 days for the score to be calculated. Installed apps, edited theme code, and the size of images and videos all affect the score. [L0370, 2021-22]

### Speed fix sequence

Work from easiest to hardest. Procedure from one source:

1. **Reduce homepage slideshows.** Six to ten slides that nobody watches waste resources and annoy visitors, so remove them unless you need them. [L0390, 2019]
2. **Reconsider quick-shop functionality.** It is heavy on resources. Keep it where it helps upselling, such as customers buying several low-price items together, and remove it for high-ticket products where it adds little. [L0390, 2019]
3. **Choose the right image format.** Use SVG for icons and logos, JPEG for photos such as hero images, and PNG only when a transparent background is needed. [L0390, 2019]
4. **Crop and scale product images to the size the site needs.** For example, reduce a 5000 pixel wide supplier image to 2048 pixels, which keeps high definition without loading unnecessary data. [L0390, 2019]
5. **Compress images.** Compression tools can reduce file size by up to 70 to 80% without visible loss, using the manual upload tool TinyPNG or an automatic image app such as RushPix. [L0390, 2019]
6. **Remove apps you do not need.** Review your app list, since apps are among the heaviest elements after images, and keep only the few that the business truly needs. Replace small functions with simple code where possible, for example a terms-and-conditions checkbox on the cart page. [L0390, 2019]
7. **Update the theme if it is old or has been patched by multiple developers.** Check the browser console for JavaScript errors, since broken scripts can stop features like cart upsells from working. [L0390, 2019]
8. **Minify and optimize the code.** This usually takes 2 to 4 hours at most for a skilled developer, so treat longer estimates with caution. [L0390, 2019]
9. **Back up the theme before any change and test the entire store afterwards.** [L0390, 2019]

**one source procedure (no year given):**

1. Run the store through GTmetrix or Google PageSpeed to find the main bottleneck, which is usually images or GIFs. [L1259, undated]
2. Compress images with TinyPNG or Photoshop, targeting image files below 300 KB and GIFs below 800 KB, with product images ideally under 50 KB while keeping visual quality nearly unchanged. [L1259, undated]
3. Remove unused apps and their code, since each active app loads its own JavaScript on every page view. [L1259, undated]
4. Page builders such as PageFly add an extra layer on top of the theme and slow the page somewhat, but can still be worth it for their conversion features. [L1259, undated]

**Image thresholds from both procedures (the sources give different kinds of target and are used together):**

| Item | Value | Source |
|---|---|---|
| Compression reduction without visible loss | Up to 70-80% | [L0390, 2019] |
| Example resize | 5000 px to 2048 px wide | [L0390, 2019] |
| Image file target | Below 300 KB | [L1259, undated] |
| GIF target | Below 800 KB | [L1259, undated] |
| Product image target | Ideally under 50 KB | [L1259, undated] |

### Images, media and video

- **Compress selectively:** Compress image files selectively during website setup. Focus on larger files and those noticeably affecting page load speed. Compressing every image on the site is unnecessary. This refines the blanket compression step above. [L0300, 2021-22]
- **Autoplay and loop:** Turn off video autoplay and video looping in the product page media settings when the store has no videos yet, and turn them off again whenever videos are added later. Autoplay and loop can distract visitors and slow the page down. [L0370, 2021-22]
- **Homepage video test:** Before adding a video to the homepage, test the page with GTmetrics. A video can noticeably raise the load time, so remove it if the score drops sharply. [L0962, 2021]
- **Videos on product pages:** Keep videos where they help buyers, but compress images so they do not slow the page. [L0801, 2021]
- **Self-host or embed:** Embed product videos from your own YouTube channel instead of self-hosting them, because self-hosting slows the page more. Embedding even from YouTube lowers the page speed score, but the page still loads fine for visitors. [L1094, 2023]
- **Social links in a new tab:** Social media links on the store can be set to open in a new tab so visitors do not leave the site. This needs a small code snippet from the store developer. [L1281, 2022]

### Apps, code and theme minimalism

- **Less is more:** Add features and apps one at a time and test whether revenue or sales increase after each change. Without testing, it is impossible to know which feature or app improves conversion. [L0709, 2017+]
- **Avoid extra apps and custom code (2023):** Avoid adding extra apps or custom code that slow down the store, because page speed affects both conversion and search performance. Remove unused apps and verify that no code is left behind after uninstalling them. [L0835, 2023]
- **Leftover code (2024):** Mobile traffic that does not convert can point to page speed issues. Remove leftover code from uninstalled apps and check speed for mobile before adding more apps. [L0806, 2024]
- **Store speed factors:** Shopify store speed depends on how many apps are installed, whether the theme's code has been modified, and how large the images and videos are. To keep the speed score healthy, limit the number of apps, keep custom code lean, and make media files small. [L1371, 2021-22]
- **Plugins and pop-ups (no year given):** Stores with bugs, errors, unused plugins that slow the site, or several stacked pop-ups for the same offer frustrate visitors and push them away. Remove plugins that do nothing and limit pop-ups to one useful message. [L0390, 2019]

### Hidden faults and pre-launch checks

- **Case: a faulty app hid behind a healthy-looking store.** A store had substantial traffic, enough revenue to employ a small team, and a conversion rate of 0.24%. The owners did not see the problem because they were too close to their own site. An outside expert checked the store within about five minutes of trying to check out and found a faulty app plus code left three months earlier by an inexperienced developer. After the expert removed the faulty app and corrected the code, conversion rose roughly eightfold within 24 hours. The expert charged only for a review instead of a fee because the fix had taken five minutes. [L0390, 2019]
- **Buy your own product before launch:** Before launching a store or checkout on a new platform, buy a product through it yourself. Walk through the full customer journey and test each payment method to confirm it works end to end. [L1216, undated]

### Mobile responsiveness and device split

- **Share of mobile visits, by traffic source:**

| Traffic source | Mobile share | Source |
|---|---|---|
| Facebook and Instagram ads (heavy traffic) | 70-80% of visits | [L0390, 2019] |
| Landing page traffic | Roughly 80-85% of visitors by smartphone | [L1259, undated] |
| TikTok | 95-99% of users shop on a phone | [L1410, 2023] |

- **Consequence:** A website that is not responsive will lose most of its potential customers when 70 to 80% of visits come from mobile devices. [L0390, 2019]
- **Responsiveness signal:** A relative mobile conversion rate well below about 30% usually means the website is not responsive. Fix layout and responsiveness problems before drawing conclusions about mobile traffic quality. [L0390, 2019]
- **Landing page top section:** Landing page conversion depends heavily on mobile. The top of the page must convey value within seconds, with product images, star ratings and a benefit-driven headline visible without scrolling. [L1259, undated]
- **Mobile-first design:** When traffic comes from TikTok, 95-99% of users shop on a phone, so the mobile version of the store should be built first. [L1410, 2023]
- **Pre-launch phone check:** Before launch, check the landing page on a phone-sized preview (such as the iPhone 12 screen size) and scroll the full page, because stacked content on mobile can become very long. Confirm that:
  - carousels scroll sideways smoothly,
  - The offer and add-to-cart button stay visible near the top,
  - accordion sections open correctly. [L0918, 2023]
- **Mobile bounce:**
  1. Compare bounce rate and session time on mobile and desktop in Google Analytics. [L1090, 2021]
  2. If mobile is much worse, speed up the site on mobile connections. [L1090, 2021]
  3. Optionally set mobile bid adjustments in Google Ads to reduce spend on the weaker device. [L1090, 2021]
  4. Check which search terms send traffic and add negatives for terms that do not match your pages. [L1090, 2021]
- **Mobile browsing, desktop buying:** Customers often browse on mobile and buy later on desktop. If desktop buying is high, adjust bids by device rather than moving all traffic to desktop. [L0962, 2021]
- **Device review every 30 to 60 days:**
  1. Set a recurring reminder for the review. [L0510, 2018]
  2. Compare the conversion rate for desktop and for mobile in your reports. [L0510, 2018]
  3. Group products by price or sales cycle into separate campaigns. [L0510, 2018]
  4. Adjust device visibility at the campaign level, since device bids are not set per product. [L0510, 2018]

### Bot traffic and quick exits

- **Investigating visitors who leave within seconds:**
  1. Find the pages where many visitors leave right away and test their speed. [L0962, 2021]
  2. Check the traffic source of those visits. [L0962, 2021]
  3. If one source causes the quick exits, adjust or pause those ads. [L0962, 2021]
  4. If the visits are direct or from unknown sources, check the IP addresses and look for bots. [L0962, 2021]
- **Direct and unpaid visits:** Visitors from direct or unpaid sources who leave within seconds are often bots. Verify by looking up their IP addresses, and do not panic over unpaid traffic. [L0962, 2021]

### Tracking and conversion events

- **Phone calls count once per person:** When a single person makes multiple calls to your tracked phone number, it counts as one conversion total, not multiple conversions. [L0234, 2020-26]
- **Revenue value for calls is optional:** Assigning a revenue value to phone call conversions is optional; you can leave this field empty. [L0234, 2020-26]
- **Bundle discounts skip the add-to-cart event:** Skipping the add to cart step through a bundle discount may not be tracked as an add to cart in Shopify tracking, so check whether the bundle path is counted correctly before judging the page. [L0950, 2023]

### Technical hygiene: indexing

- **Duplicate URLs in Search Console (2024):** Google Search Console may report pages as not indexed because Shopify generates duplicate variant and collection URLs. Only the main product URL is meant to be indexed, so a count like 204 indexed out of about 5,000 pages can be normal and needs no fix. [L0836, 2024]


Part 33 of 40 of "6. Conversion Optimization: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/06-conversion-optimization.md · Previous: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/32-recovering-lost-visitors-and-carts.md · Next: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/34-testing-methodology-and-the-cro-cycle.md
