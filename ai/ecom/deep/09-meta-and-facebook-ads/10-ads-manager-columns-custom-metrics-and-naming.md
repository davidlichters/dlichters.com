<!-- part of ecom/deep/09-meta-and-facebook-ads.md -->
Part 10 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/09-product-catalog-and-commerce-manager-feed.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/11-attribution-settings-and-the-march-2026-changes.md

## Ads Manager Columns, Custom Metrics and Naming

### Column presets: build order and saving

- Build all base columns first, save them as a preset, and only then create custom metrics. Creating a custom metric before the preset is saved deletes all unsaved column work, and you must start over. The correct order is: add columns, save preset, create custom metrics. [L0290, 2025-26]
- Save the column setup as a Column Preset with a consistent name. The standard name is `main dash`. The preset saves automatically and persists across logins, account switches and page refreshes. You can reselect it from the Columns dropdown without rebuilding. [L0290, 2025-26]

#### Base column procedure

1. Log into Ads Manager. [L0290, 2025-26]
2. Click Columns > Customize Columns (at the bottom). [L0290, 2025-26]
3. Delete all columns except Delivery and Actions. [L0290, 2025-26]
4. Add columns in this exact order: [L0290, 2025-26]
   - Bid Strategy
   - Budget
   - Amount Spent
   - Purchase (check the Value checkbox and uncheck the others)
   - ROAS (uncheck other options)
   - Average Purchase Conversion Value (AOV)
   - Cost per Purchase
   - Attribution Setting
   - Reach
   - Impressions
   - Frequency
   - Link Clicks
   - Cost per Link Click (CLC)
   - CTR (Link Click-Through Rate)
   - CPM (Cost per 1,000 impressions)
   - Add to Carts (select Total; uncheck in-app, offline, and Meta versions, keep Website only) [L0290, 2025-26]
   - Cost per Add to Cart
   - Initiate Checkout (select Total and Cost)
   - Cost per Initiate Checkout
   - Results (select Purchases)
   - Cost per Purchase again
5. Do not create custom metrics yet. Save this preset first: click Save as Column Preset and name it `main dash` (or any name you choose). [L0290, 2025-26]
6. The preset saves automatically and remains available across logins and account switches. [L0290, 2025-26]

#### Add to Carts selection

- When adding the Add to Carts column, select Total and uncheck the individual options:
  - in-app add to carts (for app downloads only)
  - offline add to carts (for stores that uploaded purchases to Facebook)
  - Meta add to carts (for Meta Shop or Instagram Shop only)
- Choose Website add to carts for standard e-commerce. [L0290, 2025-26]

#### Tool columns

- Link Ad Settings: add the column to see the landing page used for each ad without editing individual campaigns. Type `link` or `ad` in the search field. The column is visible only at the ad level, not the campaign level. It saves time compared with clicking into each ad to check its landing page. [L0290, 2025-26]
- Place the Link Ad Settings column immediately after Bid Strategy in the main dashboard preset. This keeps setup information together at the top for quick visibility of landing page assignments. [L0290, 2025-26]
- Last Significant Edit: add the column to see changes to campaigns, ad sets and ads, such as bid caps, cost caps, minimum ROAS or cost per goal settings, without checking account history. It is visible at the ad set and ad level and helps identify when a campaign's bidding strategy was last modified. [L0290, 2025-26]

#### Common mistakes

- Do not join calls with a Facebook mentor or account manager without setting up these custom columns beforehand. Setting them up live wastes 5-7 minutes of call time for the mentor. [L0290, 2025-26]

### Custom metrics

#### Definitions at a glance

| Metric | Formula | Source ids |
|---|---|---|
| Hook rate (attention) | 3-second video plays ÷ total impressions × 100, shown as a percentage | [L0067, 2023; L0652, 2023] |
| Hold rate (engagement) | Video plays at 50% ÷ 3-second video plays × 100, shown as a percentage | [L0067, 2023; L0652, 2023] |
| CVR  | Purchases ÷ Link Clicks, format Percentage | [L0290, 2025-26] |
| CVR  | Unique outbound clicks from the Facebook ad that resulted in a purchase, as a percentage | [L0067, 2023] |
| CBR (custom conversion rate) | Purchases ÷ unique outbound clicks × 100, shown as a percentage | [L0652, 2023] |
| ATC% (Add to Cart Percentage) | Add to Carts ÷ Link Clicks, format Percentage | [L0290, 2025-26] |
| IC% (Initiate Checkout Percentage) | Initiate Checkout ÷ Link Clicks, format Percentage | [L0290, 2025-26] |

#### Hook rate and hold rate

- Hook rate is the percentage of people watching the first 3 seconds of a video out of total impressions served. Create it via Columns > Create custom metric. [L0067, 2023]
- Hook rate measures the share of impressions where viewers watched the first three seconds of the video ad. [L0652, 2023]
- Hold rate is the percentage of people who watch at least 50% of a video out of those who watched the first 3 seconds. [L0067, 2023]
- Hold rate measures how many viewers who passed the three-second mark kept watching to the halfway point. [L0652, 2023]
- Hold rate is only meaningful with high traffic volume. [L0067, 2023]
- When spend is small, read differences between ads carefully. A CTR of 2.27% against 0.41% can be skewed by low data. [L0640, 2023]

#### CVR and CBR: two denominators

- The sources use different denominators for the conversion rate. Both values are kept here. Do not compare a rate built on unique outbound clicks with a rate built on Link Clicks.
  - one source method: purchases ÷ unique outbound clicks. Use unique outbound clicks, not total clicks, because Facebook tracking of page views is unreliable. Unique clicks count one user once even if they click several times. one source calls this version CBR. [L0067, 2023; L0652, 2023]
  - one source method: purchases ÷ Link Clicks, named CVR, and placed next to AOV. The same source builds ATC% and IC% on the same Link Clicks base. [L0290, 2025-26]
- Meta tracks outbound clicks more reliably than website sessions. This is the reason given for the one source denominator. [L0652, 2023]

#### Creating the custom metrics

Do this only after the base preset is saved. [L0290, 2025-26]

1. Go to Columns > Customize Columns > Create custom metric.
2. Create Conversion Rate (CVR): name it `CVR`, set format to Percentage, enter formula `Purchases ÷ Link Clicks`, press Create metric.
3. Create Add to Cart Percentage (ATC%): name it `ATC%`, set format to Percentage, enter formula `Add to Carts ÷ Link Clicks`, press Create metric.
4. Create Initiate Checkout Percentage (IC%): name it `IC%`, set format to Percentage, enter formula `Initiate Checkout ÷ Link Clicks`, press Create metric.
5. Place CVR next to Average Purchase Conversion Value (AOV). Place ATC% after the Add to Carts column. Place IC% after the Initiate Checkout column.
6. Save the updated preset.

### Funnel column order

#### one source: custom funnel view

- To build a funnel column view in Meta Ads Manager:
  1. Open the campaign view.
  2. Click Customize columns.
  3. Add custom metrics first, then reorder the columns on the right-hand side.
  4. Keep the ad set name, budget per day, amount spent, results and cost per result.
  5. Remove bid strategy when not running advanced bidding.
  6. Save the final selection as a preset (for example `mix funnel`) and apply it. [L0652, 2023]
- Note: the one source base preset keeps Bid Strategy as its first column, while this one source view removes it when no advanced bidding runs. Both apply to different setups. [L0290, 2025-26; L0652, 2023]
- The one source snapshot section includes:
  - ad set name
  - last significant edit
  - daily budget
  - total spend over the period
  - result (conversions)
  - cost per result
- The funnel section includes:
  - impressions
  - CPM
  - 3-second video plays (hook rate)
  - hold rate
  - unique clicks
  - unique CTR %
  - cost per click
  - add-to-cart
  - purchases
  - custom conversion rate metric
  - ROAS [L0067, 2023]

#### Recommended funnel order

Read left to right. Unneeded default columns are unchecked so the funnel is not cluttered.

| Position | Column |
|---|---|
| 1 | Amount spent |
| 2 | Budget per day (summary at top) |
| 3 | Purchases |
| 4 | Cost per purchase (result) |
| 5 | Impressions |
| 6 | 3-second video plays |
| 7 | Hook rate (%) |
| 8 | 50% video plays |
| 9 | Hold rate (%) |
| 10 | Unique link clicks |
| 11 | Unique CTR (%) |
| 12 | Unique cost per click |
| 13 | CBR (%) |
| 14 | Purchases |
| 15 | Return on ad spend (ROAS) |

[L0652, 2023]

- The result column depends on the optimization goal. When optimizing for clicks instead of purchases, the result column becomes cost per click. For purchase-optimized campaigns, the result column is cost per purchase. [L0652, 2023]

#### one source: reporting preset order

The table lists columns with their role. Read the columns left to right in this order so the funnel is easy to follow. [L1030, 2026]

| Column | Role |
|---|---|
| Amount spent | Base cost of the ad |
| CPM (cost per 1,000 impressions) | Cost of reach |
| CTR (all) | Click rate on all clicks |
| CPC (all) | Cost per click on all clicks |
| CPC (cost per link click) | Cost per link click |
| Link clicks | Soft metric |
| Website adds to cart | Soft metric |
| Cost per add to cart | Soft metric cost |
| Checkouts initiated | Soft metric |
| Cost per checkout initiated | Soft metric cost |
| Purchase ROAS (return on ad spend) | Hard metric |
| Purchases | Hard metric |
| Cost per result | Secondary cost |
| Frequency | Ad fatigue indicator |
| Delivery | Delivery status |

[L1030, 2026]

- Add CTR (link click-through rate) next to CTR (all). Link CTR divides link clicks by impressions, so it shows how many people actually reach the store. [L1030, 2026]

### Video retention columns

- To see video retention metrics, open Customize columns and add the video metrics, such as video plays at 25, 50 and 95 percent, through plays, and video average play time. Facebook has renamed and added columns over time, so the available names may differ. [L1215, 2023+]
- Add the Through plays column via Customize columns. It counts how often a video was played to completion or for at least 15 seconds. Read it together with video average play time. [L1215, 2023+]

### Attribution setting columns

- Use 7-Day Clicks as the attribution setting for all campaigns. The setting must be the same across all campaigns and ad sets. [L0290, 2025-26]
- The attribution setting appears as its own column (Attribution Setting in the base procedure). A dedicated column lets you spot at a glance when campaigns have different attribution windows. [L0290, 2025-26]
- The Columns menu also offers Compare attribution settings, which is useful for checking the effect of different windows. [L1030, 2026]

### Reporting presets and dashboard setup

#### Two presets

- Set up two column presets in Meta Ads Manager:
  - a desktop preset for photo editing, UGC work and managing the ad account
  - a phone preset for checking lifetime data when away from the computer
- Build them via Columns > Customise columns. The menu also offers presets such as Performance and clicks, Engagement and Delivery, plus View your column presets, Compare attribution settings, Conditional formatting and Reset column width. [L1030, 2026]

#### Layout and reading

- Arrange related metrics such as ROAS, purchases and AOV side by side on the dashboard. Do not scroll back and forth between them when making decisions. This reduces decision time significantly. [L0290, 2025-26]
- Compare one ad across several ad sets by sorting the Ads Manager table by ad name, so the same creative appears side by side. [L0640, 2023]
- Use Ads Manager to read ad set and ad performance, check CTR and spend, add interests via the Suggestions function, create and duplicate ad sets, and change budgets. [L0650, undated]
- The Facebook block in the daily record shows CPC (cost per click), CTR (clicks ÷ impressions), CPM (cost per 1,000 impressions), ATC (add to cart), IC (initiate checkout) and purchases for each day, alongside daily ad spend. [L1123, 2026]

#### Reporting principles

- A clean, consistent naming convention is the base of any reliable creative report, because AI analysis is only as good as the data it reads. Start the convention now at any brand size so that year-on-year comparisons are possible later. [L0885, 2025-26]
- Keep one convention stable. Renaming products or changing the naming system midway makes older ads hard to compare. History beyond about 12 months became difficult to read after such changes. [L0885, 2025-26]

### Campaign naming

#### Core rules

- Name campaigns so you can tell from the name what is inside: the product, the brand or account identifier, the budget type (for example CBO), the creative type (for example UGC) and the launch date. This makes it possible to read data later without guessing. [L0865, 2025-26]
- For sales that repeat every year, put the year in the campaign name, for example `Black Friday Sale 2026` instead of `Black Friday Sale`. Without the year, comparing the same sale across years becomes very hard. [L0865, 2025-26]

#### Naming patterns in the sources

- one source: name campaigns and ad sets consistently with these fields: product name, ABO or CBO, objective, date, interest name, country code and age group.
  - Date: only once a product has run for more than about two months. [L0648, undated]
  - Country codes: short codes such as `T4` for the US, Canada, Australia and UK, or `DE` for Germany. [L0648, undated]
  - Age group: for example `20+`. [L0648, undated]
- one source: name Meta campaigns by audience, purpose and budget type, for example `Broad - Scale - CBO` or `Testing ABO`, so test and scale campaigns can be told apart quickly. [L1124, 2026]
- one source: campaign name = `[today's date] [product name] CBO`, for example `2404 SleepMask CBO`. The date is placed first here, unlike the one source rule above, which adds the date only after about two months. [L1193, 2026; L0648, undated]
- one source: name a duplicated campaign that carries a custom cover and custom UGC as `CBO - [product code] / Custom`, so the custom test stays separate from the original in the Ads Manager list. [L1030, 2026]

### Ad set naming

- Name each ad set after the creative inside it, for example the format, the number of ads, the launch date and the message type. You can see the contents without opening the ad set. [L0865, 2025-26]
- Ad set names in the one source pattern are a broad targeting label, for example `Top 5 Broad`. [L1193, 2026]
- Ad set names in the one source pattern include the interest name, alongside the campaign fields listed above. [L0648, undated]

### Ad naming

#### Principles

- Put the product name first in every Meta ad name, because creative reports group by that field. Keep the other fields (ad type, launch date, creator name) in the same fixed order for every ad, so names can be parsed consistently. [L0885, 2025-26]
- Keep the product type in the ad-level name, because the report groups creatives by product from that field. Use a separate product type, such as `mixed`, for ads that feature several products. [L0885, 2025-26]
- Start the naming now, and do not change it midway. Launch date is recommended from the start to avoid rebuilding names later. [L0885, 2025-26]

#### Fields

- A usable ad name carries the product name (examples: sleep, tea, bathrobe), the ad type (video, UGC or sale ad), the launch date and the creator name. License tags and other extra fields are not needed for a creative-count report. [L0885, 2025-26]
- The launch date is not strictly needed for a creative-count report. It is recommended because the report is pulled from the Meta API. [L0885, 2025-26]
- Name each ad with its creative type and a unique counter, for example UGC followed by a number such as `A123`. This makes it possible to match an ad in Ads Manager to its source file and to its results. [L0865, 2025-26]
- one source pattern: ad name = `[today's date] [product name] CBO > [ad set name] > [number] Ad`, for example `2404 SleepMask CBO > Top 5 Broad > 1 Ad`. [L1193, 2026]

#### Pipe-separated example

A pipe-separated Meta ad name can contain fields such as product type (for example OODIE or BLANKET), audience (ADULTS), license status (LICENSED), format (IMAGE or video), production source (STUDIO), launch type (NEW PRODUCT), a category tag (for example F&B) and a design or character name. For a creative-count report only product type, ad type, launch date and creator name are needed, so the other fields can be left out. [L0885, 2025-26]

#### Older advice

- Older advice, 2021-22: name each Facebook ad so the name shows what differs from the other ads in the ad group. Without this, split test results cannot be linked back to the creative that produced them. [L1342, 2021-22]

### Audience naming

- Name custom audiences with product name, funnel stage, event and window, so they can be told apart later. Example: `product, MOF, 25 plus video views, 30d`. [L1335, 2023+]
- Use the same pattern for engagement audiences, such as `FP engagement` with a 30-day window, and for website visitor audiences. [L1335, 2023+]

### UTM parameters and URL tracking

#### Where the URL goes

- Enter the URL of the product page that belongs to that specific ad in the ad's Website URL field. URL parameters are no longer typed there. They are managed in the Tracking section, which is opened with Go to Tracking. [L0348, 2026]

#### Method A: dynamic placeholders at ad level

- In the ad-level UTM parameters on Meta, `utm_source` is fixed to `Facebook` and `utm_medium` to `cpc`. `utm_campaign`, `utm_content` and `utm_term` are filled with Meta's dynamic name placeholders for the campaign name, ad name and ad set name. [L0376, undated]
- This lets each sale be traced back to the exact campaign, ad and ad set in analytics. [L0376, undated]

#### Method B: Build a URL parameter

1. Go to Ad level > Tracking section > Build a URL parameter. [L0647, 2024+]
2. Set Campaign source = `facebook`. [L0647, 2024+]
3. Set campaign medium = campaign name. [L0647, 2024+]
4. Set campaign name = ad set name. [L0647, 2024+]
5. Set content = ad name. [L0647, 2024+]
6. Optional extra parameters (for example `utm_term`) can be added with Add parameter. [L0647, 2024+]
7. Click Apply so they are embedded in the destination link. [L0647, 2024+]

#### Conflict between the two methods

- The sources give different values for the same parameters:
  - `utm_medium`: `cpc` in Method A [L0376, undated], campaign name in Method B [L0647, 2024+]
  - `utm_source`: `Facebook` in Method A [L0376, undated], `facebook` in Method B [L0647, 2024+]
- Both are kept here. The sources do not say when to use each. Pick one method and use it for all ads, so that the trace in analytics stays comparable. [L0376, undated; L0647, 2024+]


Part 10 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/09-product-catalog-and-commerce-manager-feed.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/11-attribution-settings-and-the-march-2026-changes.md
