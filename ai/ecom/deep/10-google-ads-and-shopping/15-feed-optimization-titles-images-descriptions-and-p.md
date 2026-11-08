<!-- part of ecom/deep/10-google-ads-and-shopping.md -->
Part 15 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/14-verification-and-approval.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/16-merchant-center-promotions.md

## Feed Optimization: Titles, Images, Descriptions and Promotions

### Feed Control and Launch Sequence

- The product feed is the only controllable input for Shopping Actions, so titles and descriptions should be optimised. This is the same work as regular Google Shopping and should be done anyway. [L0738, 2021-22]
- Shopping campaigns match searches using the product data sent from Merchant Center, which is built from titles and descriptions. Product data quality therefore determines which searches a product can appear for, and changes to titles and descriptions change ad reach. [L1097, 2025]
- Feed quality determines how well Google understands a product. Inaccurate or thin data makes ads appear for less relevant searches. [L1170, 2021-22]
- Optimise the feed before running Shopping ads. If ads already run, review the feed regularly to find fields that can be improved. [L1170, 2021-22]
- Focus feed work on three fields that carry most of the effect on Shopping performance:
  - Product title (most important)
  - Product description
  - Barcode (GTIN, UPC or EAN) where one exists [L1170, 2021-22]
- Upload supplier product descriptions and images as received and get Google Ads running for every product. Optimise the best performers later, because the top 20% by impressions, clicks and sales usually drive most results. [L0664, 2020]
- Standard Shopping setup uses the product images from your product pages, so no separate ad creatives are needed to start. [L0972, 2025; L0247, 2021]
- Title determines whether the product appears; image determines whether the shopper clicks. Title is the single highest-impact lever for search reach, but all feed elements (images, product types, attributes) feed the same system. [L0220, 2025-26]
- Shopping and search campaigns work differently. In search, ad text and keywords are separate. In Shopping, the product title is the keyword, and Google reads titles to assign products to queries. [L0220, 2025-26]
- Where a product is approved in Merchant Center but gets few organic Shopping impressions after months:
  1. Confirm some impressions occur. This shows the feed works. [L0837, 2025]
  2. Treat the remaining problem as visibility. [L0837, 2025]
  3. Fix it with product page SEO, which improves regular Google organic results and organic Google Shopping listings. [L0837, 2025]
- A title optimised for paid Shopping usually also helps organic product results, so one shared title can save time. The exception is when organic shoppers search with different, non-commercial terms, which could lower organic traffic. [L0510, 2018; L0762, 2020-26]

### Title Structure and Keyword Placement

#### Core rules

- Product title structure determines search visibility. Weak titles with no keywords, or with brand names crowding out search terms, reach fewer searches, which leads to low CTR and wasted impressions. [L0220, 2025-26]
- Core keywords must appear in product titles, because Google scans titles to decide which searches trigger ads. Use terms that actually convert for your store, not only terms that sound good. [L0762, 2020-26]
- Google reads the title from left to right and gives the first words the most weight. Keyword importance decreases along the title, so place the most important search term first. [L1170, 2021-22]
- Titles are the largest-impact element of a feed, because shoppers compare them side by side with competitors in product listing ads. A study cited in the source found that optimised titles produced more clicks and more impressions. [L0762, 2020-26]
- The first words of a title matter most, because the results page often shows only the start of a long title. [L0510, 2018]
- Put customer search terms into the Shopping title, because matching what shoppers type increases clicks and CTR. [L1031, 2018]
- Titles should reflect how buyers search. Google Shopping ads are triggered by buying-intent terms, so words such as `buy` and `online` in product titles can increase Shopping impressions. The benefit comes from matching searchers close to purchase. [L0575, 2014]
- Do not place promotional phrases such as `free shipping` at the start of a title. Customers do not search that way, and the phrase pushes relevant keywords toward the end. [L1170, 2021-22]
- Do not copy competitors' product titles, even if they look good, because competitors often have weak quality scores too. Write titles that stand out while still including searched terms. [L0510, 2018]
- Broad category searches are top of funnel. Send them to an educational category page rather than a single product page. Use product pages for buyers who already know the product they want. [L1170, 2021-22]

#### Title word order

Recommended formula for generic and unbranded products:

| Position | Element | Example |
|---|---|---|
| 1 | Keyword (strongest converting term) | `Strappy Wedding Heels` |
| 2 | Brand | (brand name) |
| 3 | Product name | (product name) |
| 4 | Descriptors (colour, size, etc.) | `Lace Ivory Size 8` |

- Shopping title formula: keyword first, then brand, then product name, then descriptors such as colour and size. Example: `Strappy Wedding Heels Lace Ivory Size 8` instead of a brand-first title. [L0510, 2018]
- The old structure was Brand + Product + Description. The improved structure for more clicks and higher CTR is Keyword + Brand + Product + Descriptors. [L1031, 2018]
- Use the customer's words for descriptors. For example, use `gray` instead of a brand colour name such as `afternoon cloud`. [L0510, 2018]
- Include brand names in titles where brands sell items that go together, unless there is a specific reason not to. [L0803, 2022]

Procedure for rewriting titles with search terms:

1. Open the search terms report in the Google Ads interface using the search box at the top, and find the terms that brought buyers to your products. [L0510, 2018]
2. Note which terms have the highest conversion rate and which have the highest CTR. [L0510, 2018]
3. Move the strongest terms to the start of each title, followed by the brand, product name and descriptors such as colour and size. [L0510, 2018]
4. Use the customer's words for descriptors, for example `gray` instead of `afternoon cloud`. [L0510, 2018]
5. Repeat the review regularly, because new search terms appear over time. [L0510, 2018]

Procedure for adding converting terms (quarterly cadence):

1. Pull the search term report and find search terms that already convert. [L0454, 2019]
2. Add those converting terms to the beginning of the relevant product titles to earn more impressions. [L0454, 2019]
3. Repeat this review about once a quarter, around four times a year. [L0454, 2019]
4. Optionally, use a feed optimiser that supports A/B testing to test title changes before rolling them out. [L0454, 2019]

Examples of impressions gained by adding converting generic or brand terms to the front of a title. Use only terms that already appear with conversions in the search term report:

- Adding bridal shoes to a sandal title. [L0454, 2019]
- Adding tuxedo to a tuxedo title. [L0454, 2019]
- Adding a brand name such as Adidas slides to a sandal title. [L0454, 2019]

#### Keyword placement by attribute

- Only put a model or manufacturer part number into a title if customers search for it. Check the search term report for that number. If it appears there, include it. If not, it does not need to be there. [L1456, 2021-22]
- Put SKU and barcode information in the product description, since buyers search for these identifiers and they help the product rank for those terms. [L1281, 2022]
- Keep the product's keyword focus to the brand name, the supplier's name and product identifiers (product name, SKU, MPN or other supplier identifier). Do not chase extra keywords on the product page. (2023) [L0964, 2023]
- Titles that include a SKU are a supplier-by-supplier decision. Check how the top competitors title the same products in search and follow their pattern. [L1283, 2023]
- Google Merchant Center is not supposed to flag SKU numbers in SEO titles. If titles are flagged, check the content against the flagged issue instead of removing SKUs by default. [L0805, 2024]
- Use exact supplier product names and SKUs in listings, because organic search rankings accelerate when you sell specific brands and use those names. [L0163, undated]

#### Titles for variants and bundles

- Google matches Shopping products to search terms mainly through the title, so a variant with a different product title is a different feed item. For bundles, keep the same core product title and add a short suffix such as `Gold Bundle` to differentiate them. [L1456, 2021-22]
- Whether to use separate product pages for each variant, or one page with variants, is decided by checking how the top competitors in the niche structure their products. [L1283, 2023]

### Title Research and Competitor Checks

- Competitor check procedure:
  1. Search incognito on Google for the keywords your ad appears for. [L0551, 2020]
  2. Compare your listing to the competitors that appear. [L0551, 2020]
  3. Improve your listing title and details to match or beat the better listings. [L0551, 2020]
  4. Check the click-through rate again after the changes. [L0551, 2020]
- Shopping competitor exploitation procedure:
  1. Open Google Ads Shopping campaign. [L0208, 2024+]
  2. Check which products receive the most impressions and where clicks land. [L0208, 2024+]
  3. Visit your store's pages for those top-performing products. [L0208, 2024+]
  4. Compare each page to competitors' product pages for identical or similar items. [L0208, 2024+]
  5. Identify specific improvements you can make to win that traffic away from competitors. [L0208, 2024+]
- Generic keywords on product pages can still trigger impressions, even though brand-name searches will be fewer. Google Shopping ads match searches to the keywords on each product page in the feed. [L1088, 2020]
- Keyword discovery procedure for titles:
  1. Use AI to generate multiple product title variants for the same product, each highlighting a different keyword or customer angle (dietary benefits, ingredients, meal context, product type). [L0220, 2025-26]
  2. Extract the primary keywords or benefit angles from each variant (for example `keto-friendly`, `low-calorie`, `gluten-free`). [L0220, 2025-26]
  3. Enter each extracted keyword into Google Ads Keyword Planner, adding product-type suffixes (for example `keto-friendly sauce`, `low-calorie dip`, `gluten-free dressing`). [L0220, 2025-26]
  4. Compare monthly search volumes to identify which keywords or angles have the strongest buyer demand. [L0220, 2025-26]
  5. Deploy the title variants that correspond to the highest-search-volume keywords to your Google Shopping feed. [L0220, 2025-26]
- Use negative keywords where a title names another product. Example: a front bumper titled with a Dodge Ram model may appear for people searching for the vehicle itself, which causes low CTR in the automotive space. [L0879, 2021-22]

### Product Title Duplication and Portfolio Strategy

- Shopping results reward a portfolio of well-titled products over a single optimised listing. Several products from the same seller can appear in one results row, so build strong titles across the whole catalogue rather than perfecting one ad. [L0220, 2025-26]
- Feed duplication means creating multiple titles for the same product that target different keywords, use cases and customer angles. This vastly expands audience and keyword coverage, because one product can appear several times with titles optimised for different search intents. [L0220, 2025-26]

### Branded vs Unbranded Titles

Sources differ on whether brand or keyword comes first. Use the rule that applies to your product type:

| Product type | Title order | Source | Status |
|---|---|---|---|
| Generic or unbranded, keyword-led | Keyword first, then brand, product name, descriptors | [L0510, 2018; L1031, 2018] | Current  |
| Branded product with a searched brand and model | Brand, model number, product type, one or two key dimensions | [L1170, 2021-22] | Older (2021-22) |
| High-ticket with a manufacturer name customers already search | Manufacturer's product name, usually the converting title | [L1170, 2021-22] | Older (2021-22) |

Details for each row:

- **Generic or unbranded:** keyword first. The brand follows, then product name and descriptors. [L0510, 2018; L1031, 2018]
- **Branded products:** the pattern is brand name, then model number, then product type, then one or two key dimensions. Customers search for the brand and model string first, so placing it at the start keeps the most-searched terms in the strongest positions. Examples in the same pattern: `Northwind Aurora 900 Pool Heat Pump 15kW` and `Harbor Lux HL-40 Walk-In Bath Tub 60 x 32 in`. [L1170, 2021-22]
- **Manufacturer name:** for high-ticket dropshipping, the manufacturer's product name is usually the title that converts best, in roughly nine out of ten cases, because customers already search for it. Exceptions exist but are rare. [L1170, 2021-22]
- **Brand inclusion:** including the brand name in the title is typically fine and often useful when brands sell items that go together. Add it unless there is a specific reason not to. [L0803, 2022]
- **Branded titles with a unique brand:** if the Google Shopping price is higher than competitors', the first image and title must signal a more premium brand. Combine a unique brand name with the main product keyword, and collect reviews, since they help justify the higher price in results. [L0788, undated]
- **Branded or unbranded, first image and title:** the first image is the main differentiator because shoppers see it first. Use a branded product name that also contains the main product keyword. [L0788, undated]

Unbranded and invented names:

- A self-invented product name has no search demand. Customers will not find it unless you pay for separate awareness campaigns, which is costly and rarely worth it. [L1170, 2021-22]
- Do not invent product names for high-ticket listings. Listings with invented names received noticeably fewer impressions than listings using the supplier or manufacturer name. [L1170, 2021-22]
- The most converting search terms are the most specific to the individual product, whether or not it has a brand. Titles should describe the product accurately so they match what customers type. [L1170, 2021-22]
- Rewrite supplier titles that do not match what customers type, and fix poor titles before launch, since they can be refined later. [L1145, 2021-22]

Procedure for unbranded product titles:

1. Research the terms customers use to describe the product type. [L1170, 2021-22]
2. List the product's features, such as size, colour, material, shape and model. [L1170, 2021-22]
3. Combine three or four of the most searched features into the title and end it with the product noun. [L1170, 2021-22]

Example of a title that fails and a title that works:

- A title that only says `surfboard` rarely converts on Google Shopping because it is top of funnel. [L1170, 2021-22]
- A title that combines size, colour, material and shape with the noun matches the searches buyers actually enter. [L1170, 2021-22]

Product type and attributes in titles:

- In Google Shopping, the title is a main signal for which searches a product can match. A title naming the product type plus key attributes (capacity, zones, size) makes the product eligible for more relevant searches. You control this through feed data, not by choosing search terms directly. [L0739, 2021-22]
- In Google Shopping you cannot choose keywords directly as you would in Search. Add the relevant keywords into product titles and store content so the product appears for those searches. [L0788, undated]
- For a flip-flop product, keep the core product type and the most important attributes in the title. Put gender, brand, colour, style words and synonyms such as casual sandal, slip-on or thong sandal in the description. This lets one product match many related searches without making the title too long. [L1328, 2015]

### Product Descriptions

- Google Merchant Center may reject products that have no description, so do not paste only the title. Generate a real description as soon as possible. [L0471, 2024]
- Put the description first and the features under it, because Google Merchant Center reads the start of the description first. (2023) [L0964, 2023]
- Google weighs roughly the first 300 words of the description most heavily, so put the key matching terms there. Longer text beyond that matters less for matching. [L1170, 2021-22]
- Put SKU and barcode information in the description, since buyers search for these identifiers. [L1281, 2022]
- Keep the description focus on brand, supplier name and identifiers. Synonym and variant terms (such as casual sandal, slip-on or thong sandal) belong in the description, not the title. The 2023 rule and the flip-flop example apply to different terms, so use both. [L0964, 2023; L1328, 2015]
- If product page data differs from the feed, the mismatch can read as a poor landing page experience. Most high-ticket dropshippers keep page data close to the feed, so this is less likely to be a problem for them. [L0879, 2021-22]
- Complete feed data feeds into Quality Score: title, description, Google product category, MPN and GTIN where they exist, gender, age group, condition and image quality. Gaps or weak data lower the audience quality the ad can reach. [L0879, 2021-22]

### Images: Background and Policy

#### Background

Sources disagree on the background requirement. Both values and their use cases:

| Source | Requirement | When it applies |
|---|---|---|
| one source | Main photo must be white. Get at least one white-background image per product from the supplier before launching. | Use as the default for all Shopping products. [L0972, 2025] |
| one source | Blue background can run without issues, but white or transparent is preferred by feed providers. | Use only where a blue background is already approved and no white version exists. [L1094, 2023] |
| one source | Flat-background images must use plain white, not black, green or patterned. Lifestyle photos may use other backgrounds. | Apply to flat product shots. Lifestyle images are a separate category. [L1163, 2021-22] |

- Google Shopping and remarketing campaigns use white-background product images. [L1115, 2024]
- Google's written image policy may lag behind what is actually accepted for Shopping. Check the current policy before assuming a style is forbidden. Competitor ads with alternative image styles are a signal of what passes review. [L0882, 2025-26]
- Plain white is the safe default, but on a results page full of similar white backgrounds, it is hard to stand out. Lifestyle or in-context images showing the product in use can create differentiation. [L0882, 2025-26]
- Keep the supplier's stock image as the main image unchanged, because Shopping needs a white-background main image. Only supplementary images on the product page can be customised, for example in Canva, to make a private-label product look unique. [L1015, 2020-26]

Procedure for changing a background to white in Canva:

1. Upload the product image with the blue background to Canva. [L1094, 2023]
2. Use the background eraser tool to remove the background. [L1094, 2023]
3. Set the background to white and save the image. [L1094, 2023]

#### Text, logos and overlays

Sources agree that the main image must contain no text, logos or overlays. Apply the following:

| Element | Rule | Source |
|---|---|---|
| Text on image | Merchant Center rejects product images that have text. Use a clean photo as the feed image. | [L0803, 2022] |
| Text, badges, overlays | Do not put text or overlays, such as free shipping badges, on product images in Merchant Center. This can get products disabled. Free shipping can still show in the ad as a setting. (2023) | [L1094, 2023] |
| Own text or logos | Product images may not contain text except branding that is part of the product itself. Do not add your own logos, slogans or words to the background. | [L1163, 2021-22] |
| Supplier logos | Remove supplier logos or graphics from the primary image, because Shopping does not allow such graphics. (2023) | [L0470, 2023] |
| Borders and overlays | The Merchant Center main image must not contain any extra element. A border or overlay counts as an error and blocks approval. (2024) | [L0971, 2024] |

- Replace images for social platforms with unique themed images, because Shopping and remarketing use white-background product images but social performs better with themed visuals (2024). [L1115, 2024]

#### Image delivery and troubleshooting

- Running Shopping campaigns displays the product image next to the ad by default. Merchant Center submission and Shopping campaign setup are required (2021). [L0247, 2021]
- Shoppers see the image before the click. The photo and visible product carry much of the decision to click. A product that looks like every other listing gets fewer clicks. [L1508, 2022+]
- Image determines whether a shopper clicks, while title determines whether the product appears. [L0220, 2025-26]
- Google Shopping ads use product images from your product pages, so no separate ad creatives are needed in the standard setup. [L0972, 2025]
- Shopping ads depend on custom content, such as professional photos and edited videos. Generic supplier footage is not enough for dropshipping. [L0577, 2023]
- If a feed image is not shown next to listings even though Merchant Center approved it, check the image URL. Click the image links to confirm they open, since a broken link prevents the image from showing. (2023) [L0470, 2023]

Procedure for moving an approved AI image into a Shopping listing:

1. Generate and select the image that meets the front-facing, spacing and no-text requirements. [L0882, 2025-26]
2. Download the image file. [L0882, 2025-26]
3. Upload it to the matching product listing in Google Merchant Center. [L0882, 2025-26]
4. If the product already converts, duplicate the listing and run the new image as a split test instead of replacing the original. [L0882, 2025-26]

Merchant Center is where product images are uploaded to individual Shopping listings, and where a duplicated listing is created for a split test. [L0882, 2025-26]

### Image and Title A/B Tests

Procedure for a clean image split test:

1. Do not simply replace the image of a listing that already converts well. [L0882, 2025-26]
2. Duplicate the product listing in the product feed. [L0882, 2025-26]
3. Swap only the image on the copy. Keep the same title, price and product data. [L0882, 2025-26]
4. Run both listings inside the same Shopping campaign with the same bid, the same budget and the same audience. [L0882, 2025-26]
5. Wait until both have enough impressions for the click-through rate to be meaningful. [L0882, 2025-26]
6. Keep the listing with the higher CTR as the winner and delete the loser. [L0882, 2025-26]

- The image must be the only variable in a Shopping image test. Otherwise the CTR difference cannot be attributed to it. Same price, bid, budget and audience keep both listings competing under identical conditions. [L0882, 2025-26]
- Title tests can be run through a feed optimiser that supports A/B testing before title changes are rolled out. [L0454, 2019]

### Star Ratings and Reviews

- Rich snippets star review apps from the Shopify App Store show star ratings in Google Shopping ads. Prices vary widely, so compare several before choosing one (2020). [L0852, 2020]
- Collect reviews, since Google displays them in Shopping ads. [L0788, undated]
- Reviews help justify a higher price in results, especially where the price is above competitors'. [L0788, undated]
- Google Merchant Center's Review feeds section can be uploaded directly or through an app, and should be reviewed regularly. [L0732, 2020-26]
- Star ratings are among the elements that affect whether a Shopping ad gets clicked, alongside title, image, price and brand. [L1031, 2018]
- In a study of thousands of Shopping ads, the title was the most influential element for CTR, ahead of images, star ratings and price. [L0510, 2018]


Part 15 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/14-verification-and-approval.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/16-merchant-center-promotions.md
