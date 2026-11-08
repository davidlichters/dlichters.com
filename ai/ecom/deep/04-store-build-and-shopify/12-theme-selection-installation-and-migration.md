<!-- part of ecom/deep/04-store-build-and-shopify.md -->
Part 12 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/11-trust-badges-guarantees-and-checkout-banner.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/13-uploading-a-zip-file.md

## Theme selection, installation and migration

### Theme basics and where themes sit in Shopify

- A Shopify theme controls how the store appears, how pages are structured, and how customers interact with the site. Shopify provides the backend functionality, and the theme provides the presentation and user-experience layer. [L0071, undated]
- The theme controls the storefront that visitors see and how it behaves. Products and store content stay the same when the theme changes, and themes are installed as ZIP files through the Shopify admin. [L0974, 2020-26]
- Free and paid themes both change how the storefront looks and functions, while products and store content stay the same. A theme is therefore a separate layer from the store's catalog and settings. [L0974, 2020-26]
- A theme sets the overall design, the page structure, and how far the store can be customized. Any installed theme can be changed to fit the store. A theme is a structure and does not include product images or content. [L0975, 2023+]
- A developer builds the base theme and supplies all site code. The store owner adds branding (colors, images, a few settings) through the theme editor instead of coding from scratch. [L1292, 2021-22]
- A theme provides the basic site layout and structure. After installing it, add your own branding, colors, and fonts. [L0912, 2021-22]
- Themes are managed under Online Store > Themes (the path is written as Sales channels > Online store > Themes in one source). The page shows the active theme and an Add theme button, and the Theme library lower down lists all uploaded themes. [L1292, 2021-22; L0975, 2023+]
- The Themes page has a Visit theme store link near the bottom. The theme store lists free and paid themes, and paid themes are generally better built than free ones. [L0975, 2023+]
- The Themes page also links to Free themes and the Shopify Theme Store. [L1292, 2021-22]
- The Customize button opens the theme editor, where most store layout and branding work happens. [L1292, 2021-22]
- An unpublished theme shows Customize and Actions buttons. Use Customize only when editing. [L1292, 2021-22]
- A store can hold several uploaded themes, but only one can be published and shown to visitors. [L0975, 2023+]

### The default theme on a new store

- New accounts receive the free theme Dawn, which is the active theme from the start and stays active until another theme is published. [L0975, 2023+]
- Dawn is Shopify's free default theme and a common base for a first store. [L0552, 2023]
- The course store in one source used Dawn. The source advised keeping the store simple at first, because the offer and product images matter more than design complexity. [L0492, 2023+]
- The course material of that period says a new store starts with the free theme Debut, which shows only placeholder text and images with no branding, so it must be customized before launch. [L1292, 2021-22]
- Where sources disagree on the default, use Dawn for current accounts and Debut only for stores described in the older 2021-22 material. [L0975, 2023+; L1292, 2021-22]
- The free default theme without customization looks very basic. Changing only the header while leaving default colors in other sections creates an inconsistent look that signals a beginner. [L0656, undated]

### Choosing a theme: criteria

- Start with a lightweight theme for site speed. The 2022 advice recommended the Charlotte theme. [L0272, 2022]
- Speed is one of the first things to check when comparing themes. Check a theme on stores that already run it and run speed tests on those stores before buying. [L0853, 2021]
- Check when the theme was last updated and how long its developer has supported it. Themes untouched for four or five years can produce errors with the current Shopify framework. [L0853, 2021]
- Use a mobile-responsive theme, because most purchases now happen on phones. A web-only theme loses sales to competitors and needs a full rebuild. [L0826, 2016]
- Mobile traffic can be 80 to 90 percent of visits, so the theme should work well on phones out of the box. Mobile-only design changes that differ from desktop need a developer, so make them only when a specific error or problem appears. [L1287, 2025]
- Check every key page at laptop-width screens as well as desktop and mobile. If the theme stops at a fixed maximum width, the side margins stay cramped and the white space that keeps the page readable disappears. Choose a theme that scales to wide screens. [L0409, 2021-22]
- Prefer a theme with minimal, clean code. Theme and app code quality varies, and some popular-looking themes are coded inefficiently and slow the page. [L1266, 2021-22]
- Choose a theme with built-in features so fewer third-party apps are needed, since fewer apps generally means faster pages and fewer plugins to maintain. [L1086, 2019]
- A premium theme is worth choosing over a free one when it already includes conversion elements, because the store then needs fewer paid apps to provide the same features. [L1330, 2025-26]
- Before buying a paid theme, check that it supports the features you need, such as bundles with variants and free gift offers. Themes that lack these features may force a costly workaround. [L1173, undated]
- Give the person building the store clear written requirements. Make sure the theme is installed correctly and reviewed before launch, because a poorly installed theme can make a store look messy. [L1173, undated]
- Choose the base theme with your planned amount of custom work in mind. A simpler base with fewer built-in features can be easier to customize heavily than a feature-rich theme. [L0949, 2021-22]
- A dropshipping-focused theme can be more efficient than comparing many general themes, because the theme affects both conversion and setup effort. Treat claims about higher conversions as unverified until tested on your own store. [L0974, 2020-26]
- Manhattan is built specifically for the high-ticket dropshipping model and is optimized for higher conversions and supplier-ready presentation. It includes features that usually require paid apps, which reduces setup cost and complexity compared with choosing and buying individual apps. [L0071, undated]
- The higher-conversion claim for Manhattan is a vendor statement. Test it on your own store. [L0974, 2020-26]
- A dropshipping-focused theme can be customized in every element. The same theme works for an elegant brand look or a playful one, and it is a free download for stores built on the blueprint. [L0852, 2020]
- Pick a theme you expect to be happy with long term, because switching themes costs time that could go to revenue-generating work. Themes from established vendors that do what you need are a sound choice. [L0853, 2021]
- Buy themes only from the Shopify Theme Store or from established theme vendors. Unverified theme code can contain malicious code and cause problems later. [L0853, 2021]
- Choose a theme from the Shopify theme store or from a trusted, certified developer. A developer who builds themes full time, with a team of about 3 to 5 people, is a stronger choice than someone who sells a theme as a side project. [L0390, 2019]
- Before adopting a third-party theme, check community discussions about the vendor's support quality, because poor support can leave customizations broken. Search the store owners' Facebook group for the theme name to see what other users report. [L0356, 2019]
- Shopify planned to separate theme design from store content, so a theme could be replaced without rebuilding all content. Once available, this would make theme updates faster and reduce the need for third-party page builders such as PageFly or Shogun, which may become less useful as native features improve. [L0390, 2019]
- A brand that takes branding seriously usually needs a custom build from a design file, for example a pixel-perfect conversion of a Figma design into a Shopify store. Prototyping in a page builder first and then having a developer make a polished version is a common approach among high-revenue brands. [L0709, 2017+]
- A plug-and-play store theme gets a high-converting store running fast instead of building a website from scratch. It reduces development time so the focus can move to marketing and sales. [L1251, 2024+]
- Shopify beginners do well with a theme that has many built-in features and handles most of the layout work. Its graphics are simple to make and upload and need little design skill. Other themes need their own graphic sizes, so confirm the chosen theme first. [L0342, 2020-26]
- For beginners without web design experience, the one source theme is a strong choice because it has many features and needs little design work from the merchant. Its graphics are simple to upload because the theme handles much of the layout. [L1045, 2020-26]
- Free Shopify themes suitable for beginners include Sense, Refresh and Dawn. They are found under Online Store > Themes and can be used right after sign-up. [L1313, undated]
- The course material pointed to Refresh as a starting theme for a first build. [L0552, 2023]
- Winning Hunter's Sales Tracker Details page shows which Shopify theme a competitor store runs, next to its launch date and shop URL. Note the theme when you study a competitor's build, because it shows what a working store layout looks like on that platform. [L1164, 2026]

### Named themes

| Theme | Status and price | Use and notes | Units |
|---|---|---|---|
| Manhattan  | Members only. The 2023 Theme Store listing note is dated 9 November 2023. | Built for high-ticket dropshipping. More user-friendly and somewhat faster than Charlotte. A new store should use it. | [L0975, 2023+; L0966, 2025; L0081, 2023+] |
| Charlotte | Download from the members area, not from the theme store. | Fully capable. Loads in about 645 ms. Used for the stores in the program. Switching from it is optional. | [L0854, 2022; L0806, 2024; L1114, 2023; L0975, 2023+] |
| Dawn | Free default. | Supports Shopify 2.0 drag-and-drop sections. | [L0975, 2023+; L0552, 2023; L0949, 2021-22] |
| Debut | Free, older default. | Shows placeholder content and no branding. Stays listed after replacement as "Not customized yet." | [L1292, 2021-22] |
| Venture | Free. | Compared against paid themes in the store listing. | [L1292, 2021-22] |
| Refresh, Sense | Free. | Beginner-friendly starting themes. | [L1313, undated] |
| Ecomify Lite / Pro | Lite is free. Pro was a one-time payment of $249 at the time of the lesson. | Lite lacks the line item property feature, which is part of Pro. Upgrades to the next major version were announced as about $50. | [L0709, 2017+] |
| Shrine Pro | Premium. One license per store. | Chosen because it has the most sections of the Shrine versions. | [L1330, 2025-26] |
| Superstore (Pixel Union) | Premium. Arrives as a zip; the version suffix (for example superstore-v3) changes with releases. | Demo homepage built from editor sections. | [L1292, 2021-22; L1310, 2021-22] |
| Avenue | Paid. Shown at 180 USD during a spring sale. | Check the current price on the store page. | [L1292, 2021-22] |
| Parallax | Listed at $180 in the Theme Store at the time of the lesson. | Demo showed full-screen video blocks, scrolling image backgrounds and large decorative images. Paid themes are not automatically faster or more usable. | [L1098, 2019+] |
| Turbo | Recommended. | Strong support. | [L1274, 2018] |
| Shoptimize | Listed in the same source. | Suits direct-response stores but looks less premium, which can limit perceived brand quality. | [L1274, 2018] |
| Out of the Sandbox themes | Roughly $300 to $500; Flex around $500. | Recommended for large-inventory stores when the budget allows. All were converted to Online Store 2.0 at the time of recording. | [L0921, 2022; L0245, 2020] |
| one source Charlotte | Mid-range. | Works as an alternative to premium Out of the Sandbox themes for a professional look without the highest price. | [L0921, 2022] |
| Shop (Pixel Union) | Retail around $300. | Budget for this cost if the theme is not included with a course or purchase. | [L0912, 2021-22] |
| the Course C theme | Added to an existing store. | See the procedure below. | [L0298, 2023] |

- Shopify's Charlotte-era advice on speed said the one source Shopify theme was faster than most free themes by default. Paid Out of the Sandbox themes were described as high-quality but expensive. [L0245, 2020]
- The Online Store 2.0 theme that replaces several paid apps with built-in functions reportedly loads in under two seconds. It was still in beta at the time. [L1112, 2021]

### Free versus paid

- A free theme is enough for conversions unless a paid theme has built-in functionality you cannot get elsewhere. Beautiful design alone does not drive sales, and speed plus trust matter most. [L0834, 2021]
- Premium paid third-party themes, some costing around 500 dollars, are not needed to start. A free theme is enough, and the theme is not what makes a store profitable. [L0801, 2021]
- Premium themes are worth the cost because they are highly customizable, load fast and come with strong support. A store with many products benefits most from these features. [L0921, 2022]
- Out of the Sandbox themes are recommended for large-inventory stores when the budget allows. [L0921, 2022]
- Upgrading to a paid premium theme was seen as sensible once the store earns good revenue. One source bought a premium theme for about 200 USD with a 20 USD discount. [L0694, 2024]
- Premium Shopify themes from paid developers can retail for around $300. Budget for this if the theme is not included free with a course or purchase. [L0912, 2021-22]
- Off-the-shelf premium themes are a far cheaper route than a fully custom theme, which can cost thousands of dollars. [L1292, 2021-22]
- Free line item property code snippets exist online and can be added to a Shopify theme by hand. [L0709, 2017+]
- Ecomify Pro was a one-time payment of $249 at the time of the lesson, while Lite was free. Upgrades to the next major version were announced as small fees of about $50 instead of a new $249 payment. [L0709, 2017+]
- Check the current price on the store page before buying. Sale prices can differ from standard prices. [L1292, 2021-22]
- Where sources disagree on premium prices, the values differ by source and date: about 180 USD for a Theme Store listing; about 300 USD for a comparable premium theme (same period); about 200 USD for a premium theme bought at a discount; 300 to 500 USD for Out of the Sandbox themes; and about 500 USD for the high-end paid themes that a free theme replaces. Treat each figure as the price at the time of its source. [L1292, 2021-22; L0694, 2024; L0912, 2021-22; L0921, 2022; L0801, 2021]

### Where sources disagree

- Manhattan access: one note dated 9 November 2023 tells you to find and download Manhattan from the Shopify Theme Store. Other units say Manhattan is available only to members of the program. Use the members' download link from the lesson. [L0081, 2023+; L0975, 2023+; L0071, undated]
- Charlotte versions: Charlotte 1.0 was the original download from the blueprint's module 3, lesson 3.1 [L0665, 2022]. Version 1.3 is the latest downloadable version, released 21 February 2022 [L0963, 2022]. Earlier versions can be updated to it as a new theme [L0963, 2022].
- one source version: the newest one source theme was last updated 12 December 2022 [L0804, 2023]. A later source named version 1.3 as current and said the course downloads carry it [L0941, 2022].
- Charlotte or Manhattan for an existing store: a new store should use Manhattan, but an existing store on Charlotte does not need to be switched. [L0966, 2025; L0975, 2023+; L1114, 2023]
- Speed: older advice (2022) recommended Charlotte for speed. Later advice says Manhattan is somewhat faster than Charlotte. Use the newer comparison when choosing for a new store. [L0272, 2022; L0966, 2025]
- Premium value: for large-inventory stores, premium themes are worth the cost. For a starting store, a free theme is enough. Use the premium argument only when the store has the volume or features to justify it. [L0921, 2022; L0834, 2021; L0801, 2021]
- Publishing a new theme: publish straight away only on a brand-new store with no other active theme in use. On a store that already has visitors and sales, keep the theme unpublished until setup is finished. [L0975, 2023+]
- Password-protected stores: a new store can be published while still password protected, so visitors cannot see the live site until a custom domain is connected. [L1292, 2021-22; L1330, 2025-26]

### Getting the theme file

- Done For You: if the store was set up through a done-for-you option, the team installs Manhattan for you. Skip the remaining build steps until you receive confirmation. [L0071, undated]
- Done For You: the theme is already installed by the provider, so the manual upload and publish steps are not needed. [L0974, 2020-26]
- Receive the theme file from the course provider before uploading. It arrives as a zip archive by email. [L1292, 2021-22]
- Charlotte is not in the Shopify theme store. Download it from the members area. [L0854, 2022]
- The newest one source theme version is in the members area, module 3, lesson 3.1. It was last updated 12 December 2022. [L0804, 2023]
- The older one source theme still works and does not need an upgrade. The theme is private and not in the Shopify app store, so the newest version must come from the course downloads. [L0941, 2022]
- Download the theme as a zip file and upload the zip directly. Extracting the zip and uploading its folders will not work. [L1283, 2023]
- Shopify accepts theme files only in.zip format, so the file has to end in.zip before you upload it. Uploading a folder or another format will not work. [L0975, 2023+]
- The Shopify theme file must be a zip archive with a maximum size of 50 MB. An unzipped folder fails. [L1292, 2021-22]

#### Download procedure for Manhattan

1. Click the Manhattan theme download link provided in the lesson.
2. Review the theme details on the page if desired.
3. Scroll to the bottom of the page.
4. Check the box to confirm your membership status.
5. Click Download Manhattan to download the ZIP file to your computer.
6. Log into your Shopify account.
7. Click Online Store in the main menu.
8. Click Themes.
9. Click Import Theme in the top right corner.
10. Click Upload a zip file.
11. Upload the Manhattan ZIP file by clicking Add File to select it from your computer, or drag and drop the file.
12. Click Upload File.
13. Wait for the installation to complete; Manhattan will appear in your Theme Library.
14. Click the Publish button on the Manhattan theme (note: newly uploaded themes are not automatically published).
15. Confirm that Manhattan is now set as your active theme and appears at the top of your theme list.

[L0071, undated]

#### Theme store download procedure (dated 9 November 2023)

1. Go to the Shopify Theme Store at https://themes.shopify.com/.
2. Find and download the Manhattan theme (current as of November 9th, 2023).
3. Upload the theme to your Shopify store using Shopify's official documentation at https://help.shopify.com/manual/using-themes/install-themes#upload-theme.

[L0081, 2023+]

### Fixing a zip download on a Mac

- On a Mac, downloading a.zip file can automatically extract it into a folder. The folder shows as a blue folder icon instead of a zip icon. Uploading that folder fails because Shopify needs the.zip file. [L0975, 2023+]
- if macOS unzipped the theme, re-zip the folder, since other folder types fail to upload. [L1292, 2021-22]
- Fix a Mac download that was extracted into a folder:

1. Right-click the blue folder.
2. Choose Compress with the theme file name (for example one source Manhattan) from the menu.
3. Use the new.zip file that macOS creates for the upload.

[L0975, 2023+]


Part 12 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/11-trust-badges-guarantees-and-checkout-banner.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/13-uploading-a-zip-file.md
