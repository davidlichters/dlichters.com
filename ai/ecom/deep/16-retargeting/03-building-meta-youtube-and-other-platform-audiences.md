<!-- part of ecom/deep/16-retargeting.md -->
Part 3 of 10 of "16. Retargeting: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/16-retargeting.md · Previous: https://dlichters.com/ai/ecom/deep/16-retargeting/02-planning-audiences-funnel-stages-segmentation-and.md · Next: https://dlichters.com/ai/ecom/deep/16-retargeting/04-dynamic-product-retargeting-on-google.md

## Building Meta, YouTube and Other Platform Audiences

### Audience Tiers by Engagement Depth

one source sorts retargeting audiences into low-level and high-level engagement. Low-level audiences are easy to capture on fresh pixels and ad accounts. High-level audiences need Shopify or Klaviyo data and more historic data. [L0375, undated; L0376, undated]

| Engagement level | Audience | Data needed |
|---|---|---|
| Low level | Video views 50% to 95% | Easy to capture on fresh pixels and ad accounts |
| Low level | All website visitors, 30 days | Easy to capture on fresh pixels and ad accounts |
| Low level | FB/IG engagement | Easy to capture on fresh pixels and ad accounts |
| High level | People who added to cart | Shopify/Klaviyo data, needs more historic data |
| High level | All email subscribers | Shopify/Klaviyo data, needs more historic data |
| High level | Buyers (great for LLAs) | Shopify/Klaviyo data, needs more historic data |

[L0375, undated; L0376, undated]

### Meta Website Visitor Audiences

- Meta website-visitor audiences can be built for 7, 30 or 180 days. A new store with little traffic should use the largest available window, which is the 180-day audience. [L1029, 2020-26]
- Facebook website-visitor custom audiences should be built for the last 7, 30, 60 and 180 days. Each window can carry different ads, and the audience gets less warm as the window grows. [L1076, 2019]
- The sources differ on window sets. [L1029, 2020-26] lists 7, 30 and 180 days. [L1076, 2019] adds 60 days. Use the 7/30/180 set for a new store with little traffic, and the 7/30/60/180 set when each window needs its own ads. [L1029, 2020-26; L1076, 2019]
- one source lists "All website visitors, 30 days" as a fresh-pixel audience. one source recommends 180 days for a new store with little traffic. The sources do not state a traffic threshold between the two. [L0375, undated; L1029, 2020-26]
- A newly created Meta custom audience can take up to 3 days to finish matching profiles. Ads can run during this time, but the audience grows as it populates. [L1029, 2020-26]

### Engagement Audiences on Meta, YouTube and Facebook Pages

- Many ad platforms let you target people who have interacted with a website, YouTube channel or Facebook page. Knowing where your buyers already spend time gives you a shortcut to placing ads and offers in front of them. [L0478, 2021-22] **
- Subscribers of a niche YouTube channel or a Facebook page are a pre-qualified audience for targeting. Because they chose to follow a niche source, they are more likely to engage with your offer. [L0478, 2021-22] **
- Facebook can also build segmented audiences from user behavior on your site and on the Facebook network, in addition to Google segmentation. [L0563, 2021-22] **
- People who engage with a boosted post, through likes, comments or shares, can be saved as remarketing audiences. These audiences can be used later for remarketing campaigns and to show future page posts to some of them. [L0666, 2024]
- A brand that had been posting content built a Facebook engagement audience of about 280,000 people and an Instagram custom audience of about 140,000 people who engaged in the past 365 days. Pools of this size can be shown new content at very low cost per reach, so check their size regularly as the audience grows. [L0487, 2018]

### Cold Video Ads and the BOF Warm Pool

- Cold video ads automatically feed the BOF warm pool. Viewers who complete 50% or more of a cold video are automatically added to a custom audience for BOF retargeting, with no manual setup required. [L0315, 2026]
- one source lists "Video views 50% to 95%" as a retargeting audience. one source uses 50% or more as the entry point to the warm pool. The sources do not explain the 95% upper bound. [L0315, 2026; L0375, undated]

Procedure:

1. Deploy cold video ads to broad audiences. Some viewers convert immediately, but most do not. [L0315, 2026]
2. Automatically, viewers who complete 50% or more of the video are added to a custom warm audience pool. [L0315, 2026]
3. BOF ads immediately retarget this pool with all five concept angles at lower CPMs. [L0315, 2026]
4. As cold video spending continues, the warm pool grows daily, and BOF ROAS increases automatically without BOF campaign changes. [L0315, 2026]

### Audience Growth Cycle: Content, Engagement and Lookalikes

- Retarget the seed audience and the engagement audiences with new content each time a post is published. Then build lookalike audiences from those groups and repeat the cycle. [L0487, 2018]

Procedure:

1. Publish content that is funny or educational and promote it to the seed audience. [L0487, 2018]
2. Build custom audiences from people who liked, commented on, or shared the content. [L0487, 2018]
3. Create lookalike audiences from the seed and engagement audiences. [L0487, 2018]
4. Show new content to the seed, engagement, and lookalike audiences. [L0487, 2018]
5. Repeat until the target market knows the brand. [L0487, 2018]

### Lookalike and Similar Audiences from Retargeting Pools

- Any retargeting audience can be turned into a similar audience in Google or a lookalike audience in Facebook. The platform then finds new users who resemble that group in behavior and demographics, which gives more targeted cold traffic than broad prospecting. [L1390, 2021-22] **
- Buyers are the strongest seed for lookalike audiences. one source marks them as "great for LLAs" and needs Shopify or Klaviyo data to build them. [L0375, undated; L0376, undated]

### Google Remarketing for Cart and Product-Page Visitors

- Set up Google remarketing for cart and product-page visitors using lesson 6.1.8, so you reach the same audience you are targeting on Facebook. [L0276, 2024]

## Audience Size, Eligibility and Troubleshooting

### Minimum Audience Sizes per Platform

Ad platforms won't serve ads to an audience until it reaches a minimum size. The thresholds differ by platform, ad type and source, so check the figure that applies to your setup.

#### Google Ads and the Display Network

| Threshold | Source | Applies to | Ids |
|---|---|---|---|
| 100 unique visitors within the time window | one source | Below this, ads won't show even if the audience is set up correctly | [L0733, 2020-26] |
| 100 active users in the last 30 days | one source | Display remarketing; ads can run only at this level | [L1285, 2024] |
| 100 people | one source | Custom audiences on the Google Display Network | [L0563, 2021-22] |
| 1,000 active members in a network | one source | Remarketing audience; the source specifies the network | [L0804, 2023] |
| 1,000 unique visitors | one source | Audience error means the list is too small | [L1068, 2019] |

- The roughly 100-person minimum for a 7-day audience applies only to some Google Ads ad types, not to every Google option. Check the audience size for each ad type before you choose step-by-step sequencing. [L1241, 2021-22]

#### Facebook (Meta)

- Facebook remarketing audiences need at least about 100 unique people before ads can serve. Facebook counts fewer visitors than Google Analytics, so ads usually start reliably at around 150 to 200 visitors. [L1279, 2021]
- The roughly 1,000-person minimum for a 7-day Facebook audience is a general guideline, not an exact threshold. Newer stores often reach it only with the all-product-viewers audience, while single-product audiences stay below it. [L1241, 2021-22]
- Facebook's minimum is considerably higher than Google's 100-person minimum for custom audiences. [L0563, 2021-22]

#### General principles for small audiences

- Audiences have minimum size thresholds on most networks. If a segment is too small, keep it set up anyway, since it will fill as traffic grows. Start with the largest segment that is still big enough, such as 14 days upward. [L0719, 2021-22]
- A retargeting audience of around 50 people who visited over two weeks is too small to run alone. Combine several related audiences, such as video viewers, engagers and page visitors, into one larger audience. [L0640, 2023]

### Lookback Windows

#### Lengthening a small audience

| Starting window | Extended window | Source | Ids |
|---|---|---|---|
| 30 days | 60 days | one source | [L0251, 2023] |
| 7 or 30 days | 45 or 60 days | one source | [L1094, 2023] |
| 14 days | Up to 180 days | one source | [L0853, 2021] |

- If a remarketing audience is too small, lengthen its window so more people fall into it. A larger audience makes remarketing more effective. [L0853, 2021]
- If a remarketing audience is too small, lengthen its window, for example from 7 or 30 days to 45 or 60 days, so more people fall into the audience. [L1094, 2023]
- If a remarketing audience shows as Not Eligible because it is too small, expand the lookback window from 30 days to 60 days to reach sufficient audience size for ad serving. [L0251, 2023]
- Check both the audience size and the membership time frame in days for each remarketing audience. If the audience is too small or the window is too short, it will not fill up with enough people to show ads. [L0470, 2023]

#### Choosing the starting window

- Create the audience with the longest lookback window, 540 days, and pre-fill it with the past 30 days of visitors. Google remarketing needs at least 1,000 active members in a network. [L0804, 2023]
- Use a 30-day audience for display remarketing, because a 7-day audience usually has too few people to serve ads. A larger audience is needed for impressions to start. [L0972, 2025]
- A new store's 7-day website visitor audience usually contains about 30 to 90 people, which is often below the 100 unique visitor minimum.
  1. Use a 30-day audience to start. A new store can usually build more than 100 unique visitors within 30 days.
  2. Create the 7-day audience anyway so it builds in the background. [L0733, 2020-26]

### Checking Audience Size in Google Ads

#### Where to look

- To check whether remarketing audiences are big enough in Google Ads, go to Tools, then Shared Library, then Audience Manager (the Shared Audience Manager). Audiences that are too small show the message "too small to advertise to". Wait until they grow. [L0429, 2022]
- Navigation labels differ between sources. The 2019 path was Tools, then Audiences. [L1068, 2019]

#### Checking audience sizes

1. In Google Ads, open Shared library.
2. Open Audiences.
3. Click an audience to see the total number of people and how many are eligible to be remarketed to on each Google platform. [L1094, 2023]

- Audiences built from GA4 and linked to Google Ads can show a smaller eligible count than the total audience, because Google can only match some visitors. This gap is normal and cannot be fixed. [L1094, 2023]

#### Estimated sizes in the audience form

- The estimated audience size shown in the audience form is based on past data. It is not always accurate and changes over time. It becomes more reliable as tracking history builds up and data retention is extended. [L1520, 2020-26]
- Newly created audiences often show fewer than 10 users at first, which is normal. They grow as site traffic increases and the audience has time to fill with data. [L1520, 2020-26]

### Not Eligible Status

- A remarketing audience that shows as not eligible because it is too small is normal early in a store's life. Wait for more traffic and check the audience size before expecting impressions. [L0807, 2025]
- If remarketing ads do not serve and there are no errors, the audience is most likely too small. Create a larger audience, such as 60-day website visitors, and add it to the remarketing campaign. [L1094, 2023]
- Google can flag an audience as too small to target on the Display Network, for example a 30-day product viewer list. Check the audience status before launching. A flagged audience cannot be used for display targeting until it is large enough. [L1342, 2021-22]

### Audience Counts That Differ from Analytics

- Drop-off between GA4 or Universal Analytics counts and the audience counts in Google and Meta is normal, and iOS opt-out settings add to it. Keep all tracking and data-sharing settings maximized to get the largest audience possible. [L0965, 2024]
- A retargeting audience includes all visitors to the website, not only traffic from Google Ads. Organic visitors therefore count toward audience size. [L0719, 2021-22]

### No Impressions and Identical Counts

#### First checks

- If the remarketing campaign shows no impressions, check that the audience size is enough for each platform under the audience tools, then recreate the campaign. If it gets a few hundred impressions but no clicks over a month, raise the bids. [L0804, 2023]
- If Google remarketing campaigns serve no impressions and audience counts look identical, check the audiences' creation dates and settings against the process before recreating them. Recreating audiences or campaigns alone may not fix the issue. [L0667, 2025]

#### When display remarketing still shows zero impressions

1. Confirm the audience is a 30-day audience.
2. Confirm there are enough visitors in the audience, such as the thousands of clicks seen over several months.
3. If it still shows zero impressions, delete the remarketing campaign and recreate it from scratch. [L0972, 2025]

### Policy Flags

- Google remarketing can run despite a policy-violation warning, but reach is limited until the flagged content is fixed. [L0855, 2023]

### Shrinking Audiences After Pauses

- Remarketing audiences shrink when ads are paused, so restarting ads can produce very few impressions. Recovery can take two to four weeks before remarketing returns to profitability. [L0972, 2025]

### Fixing a Failing Pixel Setup

#### Checking for an empty audience

- If a remarketing audience is empty or shows zero, the tracking pixel or code is not firing and must be reinstalled. [L1068, 2019]

#### Google Ads pixel procedure

1. Repeat the setup steps in the lesson exactly, one more time.
2. Note the exact error message each time it appears.
3. If the same error keeps appearing, contact Google Ads live chat and share the error message. [L0970, 2023]

## Exclusions and Targeting Controls

### Core rule: exclude recent buyers from retargeting

- Exclude customers who completed a purchase in the last 30 days, so no budget goes to showing ads to recent buyers. [L0189, undated]
- Exclude people who purchased in the last 30 days from the remarketing audience. Once they buy, showing ads for the products they already bought wastes spend. [L0734, 2020-26]
- Build a 30-day purchase audience and exclude it from remarketing ads. This keeps remarketing focused on people who have not yet bought from you. [L0934, 2023]
- Always exclude purchasers from retargeting audiences, and check that the exclusion is set up before the campaign starts. Retargeting people who have already bought annoys them and wastes ad spend. [L0643, 2015]

### Purchaser windows by platform

The sources give two windows: 30 days for Google Display remarketing and 180 days for Meta and TikTok. Use the window listed for the platform you are running.

| Platform or context | Purchaser window to exclude | Ids |
|---|---|---|
| General remarketing and Google Display remarketing | 30 days | [L0189, undated; L0734, 2020-26; L0934, 2023] |
| Meta remarketing ad set | 180 days | [L1029, 2020-26] |
| TikTok prospecting | 180 days (Complete Purchase pixel event) | [L1374, undated] |

### Meta: excluding 180-day purchasers

- Always exclude the purchaser audience of the last 180 days from the remarketing ad set, because showing ads to recent buyers wastes budget. [L1029, 2020-26]
- Add this audience under Ad exclusions and leave the expansion checkbox unchecked. [L1029, 2020-26]

### TikTok: excluding past buyers from prospecting

1. Go to Assets, then Audiences, and click Create new audience. [L1374, undated]
2. Build the audience from the pixel for Complete Purchase over the last 180 days. [L1374, undated]
3. After two to three weeks of successful running, and before scaling, add this audience as an exclusion to the current prospecting ad sets. [L1374, undated]
- TikTok tends to repeatedly show ads to people who already bought, which hurts performance. Buyers from the last 180 days must therefore be excluded manually from prospecting campaigns. [L1374, undated]

### BOF and buyer exclusions during MOF retargeting tests

- When testing MOF retargeting audiences, exclude the BOF audiences. [L0375, undated; L0376, undated]
- Remove buyers from every retargeting ad set. Keep buyers in retargeting only when promoting a new product or a special offer to them. [L0375, undated; L0376, undated]
- Leaving buyers inside retargeting ad sets wastes budget on people who already purchased, unless the ad promotes a new product or special offer. [L0375, undated]

### Time-based remarketing audiences in Google Ads

1. Create separate remarketing audiences by time period: 7-day, 14-day, 30-day, and so on. [L0253, 2024]
2. In each audience, exclude users from the shorter time periods to prevent overlap. [L0253, 2024]
3. Example: the 14-day audience excludes users from the 7-day audience. The 30-day audience excludes users from both the 14-day and the 7-day audiences. [L0253, 2024]
4. This prevents the same user from seeing ads in multiple time-based remarketing audiences. [L0253, 2024]

### Turning off Optimized Targeting

- Disable Optimized Targeting in the audience segment configuration. Leaving it enabled is a critical error because it prevents proper audience precision. [L0189, undated]
- Always turn off optimized targeting in remarketing campaigns. When it is left on, Google may show the ad to audiences outside the remarketing list. [L0734, 2020-26]

### Turning off targeting expansion

- Targeting expansion must be switched off for retargeting ad groups. Otherwise the platform can reach cold users who never visited the site, so only the chosen retargeting audience should see the ads. [L1342, 2021-22]
- Leaving the option that lets Meta reach people beyond the custom audience turned on broadens the ads to anyone Meta predicts will buy. This defeats a remarketing campaign, which should only reach people who already visited the site. [L1029, 2020-26]

### Adding audience exclusions in Google Ads

1. Go to Display campaigns and open the remarketing campaign. [L0734, 2020-26]
2. Open Audiences, keywords, and content, then click Audiences. [L0734, 2020-26]
3. Click show table to see the audience segments. A new audience shows as not eligible while it is under review. [L0734, 2020-26]
4. Scroll to the bottom to the Exclusions section and click edit exclusions. [L0734, 2020-26]
5. Search for the purchasers audience (people who bought in the last 30 days) and select it. [L0734, 2020-26]
6. Click save and check that the exclusion appears in the list below the targeted audience. [L0734, 2020-26]
- An audience exclusion cannot be added while the campaign is being created. Add it after the campaign exists, under the campaign's Audiences section and its Exclusions tab. [L1342, 2021-22]

### Negative keywords

- Remarketing campaigns should remain wide open with minimal negative keywords. Only exclude audiences of recent purchasers. Do not limit remarketing by keywords or other filters, because everyone who visits your site is a potential repeat customer. [L0251, 2023] (2023.)
- Remarketing does not use negative keywords. Its targeting is based on audiences, so the setup only needs recent website visitors and the exclusion of recent customers. [L1094, 2023] (2023.)
- The two 2023 sources differ on whether any negative keywords are used: minimal ones according to [L0251, 2023], none according to [L1094, 2023]. Both agree that keyword or other filters should not narrow remarketing. [L0251, 2023; L1094, 2023]

### Location, demographic and placement settings

- Retargeting usually does not need narrowing by location beyond the target country, or by demographics, because the people in the audience have already visited the store. [L1342, 2021-22]
- Automatic placements are the default choice for these campaigns. [L1342, 2021-22]

### Audiences for visitors who did not convert

1. Open Audience Manager and create a website visitors audience: any page visited, matching the URL. [L1510, 2020-26]
2. Exclude visitors of a page with the thank you text, which is the Shopify order confirmation page. [L1510, 2020-26]
3. Combine the two into a single audience. An optional time window of up to 60 days can be set. [L1510, 2020-26]

Formula:

Combined audience = all website visitors (any page, matching the URL) minus visitors to a page containing the thank you text

- The thank you page is the Shopify order confirmation page, which usually includes the thank you text unless it has been changed. [L1510, 2020-26]
- The time frame can be extended to 60 days. [L1510, 2020-26]
- Remarketing audiences should exclude customers, so people who just bought are not shown ads asking them to complete an order. Exclusions for buyers are applied automatically when the audience uses the non-purchaser setting. [L1520, 2020-26]


Part 3 of 10 of "16. Retargeting: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/16-retargeting.md · Previous: https://dlichters.com/ai/ecom/deep/16-retargeting/02-planning-audiences-funnel-stages-segmentation-and.md · Next: https://dlichters.com/ai/ecom/deep/16-retargeting/04-dynamic-product-retargeting-on-google.md
