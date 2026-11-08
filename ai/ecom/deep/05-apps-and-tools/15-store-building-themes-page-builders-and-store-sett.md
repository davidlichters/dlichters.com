<!-- part of ecom/deep/05-apps-and-tools.md -->
Part 15 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/14-running-a-keyword-search-in-ubersuggest.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/16-product-upload-supplier-data-and-fulfillment-apps.md

## Store Building: Themes, Page Builders and Store Settings

### Shopify plan and admin basics

- Under Settings > Plan the current Shopify plan is shown, and it can be upgraded or downgraded there. Paid app subscriptions are managed in the subscriptions section of the same area. [L1306, 2020-26]
- For a new store the Shopify basic plan is the recommended starting plan, and it can be changed later as needs grow. [L1306, 2020-26]
- Shopify Plus is only for high-volume stores with complex functionality. It is expensive and not needed for the stores this course builds. [L0964, 2023] (2023)
- Shopify hosts the store and offers a 14-day free trial. The Shopify back end shows visitor and session data for analysing traffic and conversion. [L1444, 2022]
- A Shopify partner offer from November 2024 gave three days free, then three months at 1 USD per month for a new account, a total of 3 USD. Check the current Shopify terms before relying on it, because promotional deals change. [L0807, 2025] (2025)
- Shopify includes SSL. A separate SSL check or certificate purchase is not needed; check the website's HTTPS status in Shopify. [L0934, 2023] (2023)
- Shopify also covers email marketing, order tracking, live chat and visitor analytics inside the same platform, so separate tools are not required for these functions. [L1062, 2020-26]
- Under Sales channels only Online Store should be shown by default. If Point of Sale appears and the store does not sell in person, remove it via the three-dot menu and Uninstall. [L1306, 2020-26]
- Installed apps appear automatically under Settings > Apps and sales channels as sales channels. The list grows over time; on a new online-only store only Online Store should be shown. [L1306, 2020-26]
- The store is created first as a demo and made public by removing its password. [L0393, undated]
- A password-protected store cannot run as a live store. The storefront password step only matters for demo or development stores. A live store should not sit behind a password once Smart SEO is set up. [L1337, 2020-26]

### Admin workflow: files and preview

- Content > Files holds all uploaded images in one place. The file picker in each section draws from this list, so upload first to save time. [L1309, 2020-26]
- The theme customizer has a live desktop preview and a separate phone preview. Use the phone preview after each edit to catch layout problems early. [L1309, 2020-26]

### Choosing a theme

- The Shopify Theme Store (themes.shopify.com) lists free and paid themes with search and filter tools. Paid themes typically cost around 180 USD (one example was listed at 180 USD) and usually include more built-in features and design flexibility than free themes. Older advice from 2021 to 2022. [L1292, 2021-22]
- Free theme or paid theme, by use case:

| Situation | Source statement | Ids |
|---|---|---|
| Product testing | A basic free Shopify theme is acceptable if the required sections are on the page. | [L1194, undated] |
| Comparison test | The one source theme is a free Shopify theme used as the comparison for a PageFly-built page. | [L0773, 2023] |
| Full store, many features | A premium theme may include most features that otherwise need separate apps (see below). | [L0709, 2017+] |

- A premium Shopify theme was described as including a bundle builder with a discount for adding more items, upsells, cross-sells, a shipping calculator, free shipping options, a quiz, color swatches, infinite scroll, voice product search, a timeline section and custom headings. Stores that need these features often pay for them as separate apps, so checking the theme first can cut monthly app costs. [L0709, 2017+]
- Some premium themes can be paired with a store mobile app that works with the theme. This is an option for stores that want their own app next to the website. [L0709, 2017+]
- Feature requests can be collected by letting customers vote through a form that asks which feature they need and why. If enough people request the same feature, the theme developer builds it into the product. [L0709, 2017+]
- Conversion apps are often billed monthly, for example around 20 USD per month each. A premium theme is a single one-time payment that can be customized without limit. Replacing several apps with theme sections reduces recurring costs. [L1330, 2025-26]
- Prefer a Shopify theme with a product page you can lightly edit over page builder apps, which often slow the site down and add work. If a page builder is unavoidable, Zipify Pages costs about 80 USD per month, and PageFly is free to start. Older advice from 2019. [L1110, 2019]
- Two themes were named as options: the one source theme and themes from Out of the Sandbox. Custom features such as a related products section or a dynamic checkout button usually need edits to the base theme code. Older advice from 2019. [L0356, 2019]
- Debutify is a Shopify theme and store solution with a plug-and-play setup for quick launches. It is aimed at owners who want to skip long website development. [L1251, 2024+]
- The Shopify theme Shrine has quantity discounts built in, so no extra app is needed for bundles. Use the theme's built-in quantity discount settings instead of installing a separate discount app. [L1316, 2024+]

### Store-builder tools

- Elixir is the store builder used to create high-converting stores quickly. A full build guide of about 45 minutes covers the store setup. [L0491, 2026]
- Elixir is the tool the one source program uses to build the Shopify store before it is submitted for review. [L1452, 2026]
- ClickFunnels builds product-specific landing pages with payment processing included. It was used with a free plus shipping offer and a follow-up upsell to the store. [L0643, 2015]
- ClickFunnels is a tool for other business models and is not part of the dropship store setup. You do not need to build a dropship store on it. Older advice from 2021. [L0968, 2021]
- Sources disagree on ClickFunnels. [L0643, 2015] uses it as an optional landing page for a free plus shipping offer with upsell. [L0968, 2021] says it is not needed for the dropship store itself. Use it only for a landing page offer; the store does not depend on it. [L0643, 2015; L0968, 2021]

### Shrine theme setup (sequence from the units)

1. Create the account on the register page with an email address, a password and a password confirmation, then click Create Account. Users who already have an account choose Sign in on the same page instead. [L1330, 2025-26]
2. License keys follow the pattern SHRINE-PRO- followed by two five-character groups, for example SHRINE-PRO-4AP05-2X84Z. They arrive by email from a noreply sender with the subject Your Shrine License Keys. Enter them under Add key in the Shrine dashboard to activate the license. [L1330, 2025-26]
3. Whitelist your URLs under Keys > Accounts > Whitelist your URLs. The form has three fields:
   - Main URL, for example https://yourstore.com
   - Secondary URL (Optional), for example https://yourstore.co.uk
   - Shopify URL, for example https://store.myshopify.com
   [L1330, 2025-26]
4. Every URL entered in the whitelist must start with https://. Entering it without this prefix can cause the whitelisting to fail. [L1330, 2025-26]
5. Find the Shopify myshopify.com URL under Settings > Domains in the Shopify admin, in the domain list at the top. The custom domain of the store appears in the same list. [L1330, 2025-26]
6. Whitelist both the Shopify myshopify.com URL and the custom domain of the store in Shrine. This is required to manage the Shrine account and its keys. [L1330, 2025-26]
7. Click Save and generate token. The token is required for the theme download. Save it somewhere safe; losing it means the access steps have to be repeated. [L1330, 2025-26]

### Theme code editing

Procedure for finding and editing code in the theme:

1. In Shopify, go to Online Store > Themes, click the three dots next to Customize, and choose Edit code. [L0667, 2025]
2. Use Filter files to search the theme folders, but note that it may not find text inside files. [L0667, 2025]
3. Open each file one at a time and press Cmd+F on Mac or Ctrl+F on PC to find the text. [L0667, 2025]
4. Before editing or deleting anything in the code editor, copy the entire original code into a document so you can restore it. [L0667, 2025]

- Custom liquid is a block for inserting custom code into the product page. It is an advanced feature that is not needed at the start. [L0976, 2024+]

### Page builders: choice and testing

- Test page builders in this order:
  1. Start with PageFly.
  2. If no results appear, switch to one source Team.
  [L0209, 2023]
- Use only PageFly and one source Team for page building. Ecomposer has not been tested operationally. [L0209, 2023]
- Ecomposer charges a monthly subscription. PageFly's free tier eliminates this cost. [L0209, 2023]
- PageFly offers a free version covering one store, with included tutorials for all core functions. [L0209, 2023]
- PageFly is a page builder for creating product and landing pages, used for split tests against the standard store page. Prestige and Refresh were the page builders the source recommended most. [L0388, 2024+]
- PageFly is a free landing page builder used to create product pages for split-testing against a Shopify theme. [L0773, 2023]
- PageFly is free and makes sense for single-product tests. For a general store selling several items with a multi-buy offer, a landing page may not be necessary. [L1212, undated]
- PageFly suits single-product storytelling pages for emotional or niche products. It is recommended over a standard collection page setup. [L1158, 2023]
- PageFly and Replo build landing pages without code. They work for prototypes but usually cannot handle complex features such as bundle builders. [L0709, 2017+]
- PageFly and Jam Page can rebuild a product page. Any builder works as long as the required sections are present on the page. [L1194, undated]
- Page 5 (PageFly) was used as the landing page builder instead of GemPages, because it was described as better and cheaper. [L1218, undated]
- Gem Pages or PageFly are product page builder options. Loox reviews offers a two-week free trial for product reviews. [L0820, undated]
- Learning PageFly's basic workflow takes about one hour, so plan a separate block of time for it when building a store. [L1017, undated]
- Gem Pages and PageFly are store design apps. The owner should learn how to use them before delegating store design. [L1358, undated; L1360, undated]
- PageFly has ready-made product page templates. Use one to assemble a landing page with the sections a product page needs: headline, lifestyle images, trust badges, star ratings and short bullet copy. [L1382, undated]
- Use PageFly's manual layout editing when a theme or template does not show a banner or section correctly. [L1219, undated]
- PageFly includes live chat support, even on the free plan. Support is reliable for troubleshooting page build issues, styling problems and design questions. Contact them through the PageFly app dashboard when stuck, instead of resorting to workarounds. [L0321, undated]

### PageFly layout and styling

- In PageFly, click Plus, then Layout, to insert pre-built rows with 1, 2, 3 or more columns. Each row stacks on top of the previous one, and its columns sit side by side on desktop. [L1462, undated]
- Select a row by clicking its name in the breadcrumb at the top of the editor. Set mobile columns per line on the row, and set the desktop column count in the row's General tab. [L1462, undated]
- To make identical elements match in one step:
  1. Copy the style from one element (right-click or the style menu).
  2. Paste the style to all other identical elements.

  This updates colors, sizing and formatting across the page at once and is faster than editing each element individually. [L0321, undated]
- A hex color is a six-character code with a leading hash that encodes red, green and blue values. A Chrome color picker can read any on-screen color and copy its hex code for PageFly color fields. [L1462, undated]
- To set transparency with custom CSS, open the Advanced section at the bottom of the element settings and add this line, where 0 is fully transparent and 1 is fully opaque:

```css
opacity: 0.5;
```
[L1462, undated]

- PageFly's slideshow arrow colors may not be editable in the editor. Ask PageFly support for a custom code snippet to recolor the arrows. [L1462, undated]
- Joy Pixel is a browser extension that inserts emoji and icon symbols into PageFly text fields and buttons without leaving the editor. Use it for call-to-action icons, benefit bullets or section headers instead of searching external icon libraries. [L0321, undated]

### AI page builders and visuals

- Instant AI Page Builder builds listicle pages, which work as pre-landers that warm up customers before the product page. [L1327, 2026]
- Shopify Sidekick theme generator template sections can build the comparison chart or other AI-generated visuals directly into the theme, instead of making them ad hoc. [L0886, 2025-26]
- When an AI tool turns a page section into a visual, it can pick up fonts, colours and style from the live store, so a basic request can already give on-brand output. A more specific request that names colours, fonts and the desired look gives better results. Download the finished visual and upload it to the site, or have the theme build it as a section. [L0886, 2025-26]

### Product page elements

Tabs:

- EasyTabs creates tabbed sections on product pages, so content such as product description, shipping policy, warranty information and return policy sits in separate clickable tabs. Older advice from 2020. [L0245, 2020]
- Product page tabs are built with the EasyTabs app in the theme. Set up and check the tabs for product description, specifications, shipping details and Why Buy From Us. Older advice from 2021 to 2022. [L1145, 2021-22]
- Easy Tabs by NexusMedia adds tabs to product pages in three ways: standard tabs built from the product description, static tabs shown on all products or selected collections, and integration with third-party review apps. It also includes a Layout section for padding, colors, borders, typography, responsive behavior and custom CSS. Older advice from 2021 to 2022. [L1300, 2021-22]

Sticky add-to-cart:

- Sticky Add to Cart is a Shopify app (find it in the Shopify App Store) that keeps the add-to-cart button visible on mobile and while the visitor scrolls. The lesson reports about a 25 percent increase in add-to-cart rate after adding it. [L1259, undated; L1260, undated; L1345, 2021+]

Video and third-party embeds:

- For product page videos, embed from YouTube rather than uploading directly. Suppliers often provide YouTube links; use the embed code in the Shopify product description. Older advice from 2022. [L0272, 2022]
- For app integrations such as scarcity timers (VitaLabs, Countdown Timer) and product reviews (LAI product reviews), place the app's HTML code manually instead of using automatic plugin integration. Automatic integrations often display elements in undesired locations or break page layouts. Copy the HTML the app provides and paste it into the page builder (PageFly, Shopify) to control exact placement. If integration issues persist and consume time, contact app support rather than building workarounds. [L0307, 2023+]

Complementary products:

- The complementary products block recommends items such as paddles, leashes or cases. It needs the Search & Discovery app to link the products you want to show. It is not needed until the store sells products with accessories. [L0976, 2024+]

Filters and price tags:

- Shopify apps for product filtering are available for most requirements. If the theme does not include a filter, install an app rather than building a custom feature. Older advice from 2020. [L0664, 2020]
- To find a filter app for an All products page, search the Shopify App Store for filter and compare the options, since no single app is clearly the standard. Some stores skip a filter app and rely on tags instead. [L0666, 2024] (2024)
- A savings percent tag next to a sale price depends on the theme, and the method differs per theme. On the one source theme it is an option in settings. On other themes, check the theme creator's documentation or search for code. Older advice from 2020. [L0664, 2020]

### Shipping and access rules

- Do not place a shipping app with a UPS account unless you offer carrier-based shipping rates, because free shipping is typically included in the price. Older advice from 2020. [L0664, 2020]
- Shopify shipping profiles set default shipping rates and options for specific products without a third-party app. Use them to offer free standard delivery and upgrades such as white glove delivery. Older advice from 2021. [L0853, 2021]
- Excluding products or collections in specific countries on Shopify may need custom code, since it may not be a built-in function. Contact Shopify support to confirm available options before you plan a launch in multiple countries. Older advice from 2020. [L0961, 2020]
- To restrict collections, search the Shopify App Store for password protected collection access or wholesale password apps. These lock collections or products until a password is entered. Older advice from 2021. [L0962, 2021]

### Apps: cost and integration

- An urgency app and a review app are installed on Shopify to add urgency cues and customer reviews to product pages. A financing app is applied for to offer buy-now-pay-later style payment options at checkout. [L0393, undated]
- Custom features and app choices should follow the cost rule above: check the theme first, then add apps only for what the theme lacks. [L0709, 2017+; L1330, 2025-26]

### Translation and new markets

Procedure for activating a new market with the Shopify Translate app:

1. Use the Shopify Translate app instead of building a new store.
2. Activate a new market, for example the UK, Australia or another market.
3. Translate the store.
4. Run English ads to that market with a budget of about 100 euros to see if performance improves.

[L1161, 2024+]

- Shopify Translate & Adapt is a free app in the Shopify App Store, rated 4.6, for translating the store and adapting content to international audiences. It is listed as an option when adding store languages. [L1250, 2026]
- Adding translations improves cross-border conversion by an average of 13 percent, according to the lesson. [L1327, 2026]


Part 15 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/14-running-a-keyword-search-in-ubersuggest.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/16-product-upload-supplier-data-and-fulfillment-apps.md
