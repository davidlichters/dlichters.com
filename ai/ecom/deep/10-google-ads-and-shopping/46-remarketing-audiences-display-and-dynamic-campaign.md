<!-- part of ecom/deep/10-google-ads-and-shopping.md -->
Part 46 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/45-brand-search-and-competitor-protection.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/47-targeting-and-optimized-targeting.md

## Remarketing: Audiences, Display and Dynamic Campaigns

### Remarketing: Audiences, Display and Dynamic Campaigns

### Audience Basics and Prerequisites

- A segment is a user bucket built from website visitors' actions, such as visits, purchases and page interactions. Segments are the building blocks of the remarketing audiences used in retargeting campaigns. [L0187, undated]
- Traffic temperature defines who sits in each audience. Cold audiences are people who may want the store's products, built from keyword searches. Warm audiences are people who have visited the store, built from website visitors. Past-customer audiences are people who have bought, built from customers. [L1121, 2022]
- The core Google Ads strategy for a dropshipping store combines Google Shopping ads with remarketing. Shopping reaches new buyers searching for products, and remarketing re-engages people who already know the store. [L1121, 2022]
- Google remarketing is still worth setting up in countries without Google Shopping. [L0471, 2024]
- Google Ads works best when traffic already comes from other channels and the store has tags, tracking and analytics connected. Google can then retarget visitors across its network, such as YouTube and display placements. [L0637, 2023+]
- To set up Google retargeting, install the Google tag on the website, track user data (add to cart, initiate checkout), then build retargeting campaigns for previous visitors who did not complete a purchase. [L0296, 2021+]
- Before building any audience, check that Google Analytics data collection is active:
  1. Log into Google Analytics 4.
  2. Click the Settings gear icon (bottom left).
  3. Click Data Collection and Modification.
  4. Click Data Collection.
  5. Ensure all toggle switches are ON.
  6. Verify that User Data Collection Acknowledgement is acknowledged.
  7. If not enabled, remarketing will not function. [L0253, 2024]
- The Google Shopping feed app provides three tracking events for Google Ads audiences: add to cart, begin checkout and purchase. These events must be installed through this app, and they are the source for the tag-based segments. [L0420, 2020-26]
- For the purchaser segment, select the purchase event whose name includes the label "purchase in category". This label identifies the correct event when several are listed. [L0420, 2020-26]

### Creating Audiences in Google Ads and Analytics

#### Navigation

- In Google Ads, go to Tools in the left navigation, then Shared library, then Audience manager. If Shared library is collapsed, expand it with the caret before clicking Audience manager. [L0420, 2020-26; L0187, undated; L0253, 2024]

#### Starter Segments in Audience Manager

1. Log in to Google Ads, open the Tools menu from the left navigation, then select Audience Manager within Shared library (expand the section if needed).
2. Go to Data segments and click + to create a new segment. Select Website visitors.
3. Configure the first segment: enter the name [YourStore].com Visitors 30 Days, set Segment members to Anyone who visited a webpage, set Membership duration to 30 days, and leave the Pre-fill option enabled.
4. Click Create segment and allow the audience size to populate over the next several hours.
5. Click + to create another segment and select Website visitors again.
6. Configure the second segment: enter the name [YourStore].com Purchase 30 Days, change Segment members to Visitors of a page with specific tags, then search for and select the Purchase event tag.
7. Set Membership duration to 30 days and click Create segment. [L0187, undated]
- Website visitor segment sizes take hours to populate. Purchaser segment sizes populate only once purchases occur and may take extra time to show initial data. [L0187, undated]
- Create dynamic Google audiences early, such as purchase and website visitor audiences, even with no customers yet. They fill automatically as actions occur, so they can be empty on the day they are created. [L0934, 2023]
- A 180-day website visitor audience or a 30-day purchase audience can be empty on day zero and still populate later. [L0934, 2023]

#### Analytics Audience Definitions

1. Create website visitor audiences in Google Analytics admin under audience definitions: website visitors 180 days, 30 days and 7 days, plus all customers (transactions of at least 1) in the past 30 days and the past 7 days.
2. Link Google Analytics to Google Ads with the same email and linked accounts, so audience data syncs automatically.
3. In Google Ads, select your campaign, then Audiences > Exclusions, to block customer lists from remarketing ads. [L0210, 2022]

| # | Audience name | Membership window |
|---|---|---|
| 1 | Website Visitors - 180 Days | 180 days |
| 2 | Website Visitors - 30 Days | 30 days |
| 3 | Website Visitors - 7 Days | 7 days |
| 4 | All Customers - 30 Days | 30 days |
| 5 | All Customers - 7 Days | 7 days |

Create these in Google Analytics before building campaigns. [L1121, 2022]

#### Lists by Platform

| Platform | Audience type | Lists to create |
|---|---|---|
| Google | Website visitors | Website Visitors - 7 Days; Website Visitors - 30 Days; Website Visitors - 180 Days |
| Google | Customers (invisible list) | Purchased - 7 Days; Purchased - 180 Days |
| Facebook | Website visitors | Website Visitors - 7 Days; Website Visitors - 30 Days; Website Visitors - 180 Days |
| Facebook | Customers | Purchased - 7 Days; Purchased - 180 Days |
| Facebook | Engagement | FB Engagement - 180 Days |
| Instagram | Engagement | Insta Engagement - 180 Days |

Visitor and purchaser lists are the core. Engagement lists are Meta-only. [L0757, 2022]
- The Google customer list windows differ between sources: this table uses 7 and 180 days, while the standard table uses 30 and 7 days for all customers. Use the 30-day customer list for a 30-day remarketing campaign. [L0757, 2022; L1121, 2022; L0210, 2022]

#### Missing Audiences

1. Open the Google Analytics account and click the gear icon (Admin) at the bottom left.
2. Under Audience definitions, choose Audiences and confirm the audience is listed.
3. Check that the Google Ads account is linked to Analytics.
4. Under audience destinations, click Edit and select the correct Google Ads account.
5. In Google Ads, open shared audiences and remove any active filters.
6. If the audience still does not appear, create a couple of additional audiences to see whether the issue is specific to one audience. [L0934, 2023]
- A linked Google Ads account can point to the wrong account when several exist, which stops audiences from appearing. Verify that the link points to the account you actually run. [L0934, 2023]

#### Audience Counts

- An audience imported from GA4 into Google Ads shows far fewer users than GA4 counts, because only visitors eligible for remarketing are included. A drop from about 3,000 GA4 users to about 200 in Google Ads is a large gap, but the two numbers are not expected to match one-to-one. [L0965, 2024]
- If an imported audience is too small, widen its date range so more people fall into it. The audience itself offers no setting to narrow or change its eligibility. [L0965, 2024]
- To see the number of users per audience per channel, open Tools > Shared audiences in Google Ads. The list shows the number of eligible users for each channel. [L0965, 2024]
- Google Ads audience sizes are counted per channel (Search, YouTube, Display, Gmail). Never add them together. Check the number for the channel you plan to run, which is usually Display. [L0965, 2024]

### Windows and Minimum Sizes

- Website visitor audiences are defined by window length, such as 2, 5, 7, 10, 14, 21 and 28 days. A 7-day website visitor audience shows ads only to people who visited the site in the last seven days. [L0968, 2021]
- Google requires at least 1,000 people in a 30-day website visitor audience before it allows proper targeting. If your traffic is smaller, increase the window to 90 or 180 days. [L0210, 2022]
- Google remarketing audiences require at least 1,000 people before they can be used. Do not inflate the audience with bot traffic or unique-IP tricks. Instead, use a bigger window or grow the audience faster with more paid cold traffic or SEO. [L0805, 2024]
- For a single store with a remarketing audience, a bigger window (for example 180 days) is the right way to reach the 1,000-person minimum. Inflating numbers with bot traffic defeats the purpose of remarketing to qualified visitors. Faster audience growth comes from more cold traffic spend or more SEO traffic. [L0805, 2024]
- Creating a remarketing campaign with a 7-day audience in a new store can result in no impressions, because the audience is usually too small. Start with the 30-day audience and add shorter audiences only when traffic supports them. [L0733, 2020-26]
- A remarketing campaign only starts receiving impressions once its audience shows as eligible, so budget does not matter until then. If the audience still shows as not eligible after a day, pause the campaign and recreate it. [L0807, 2025]
- In Audience Manager, check each audience's size. If an audience says "too small to serve", it does not have enough users yet. [L1115, 2024]

### Setting Up Dynamic Display Remarketing

#### Campaign Order

- Eight campaign types across Display, Search, Video and Discovery target cold, warm and past customers. Implement one at a time, starting with dynamic display remarketing. [L0210, 2022]
- Set up the Shopping campaign before the remarketing campaign. Google Shopping is often the largest traffic source for a new store, and remarketing is built on top of that traffic. [L0733, 2020-26]

| # | Campaign name | Channel | Traffic temperature | Audience or focus |
|---|---|---|---|---|
| 1 | Display - WARM - Website Visitors | Display | WARM | Website visitors |
| 2 | Display - WARM - Monthly Promotions | Display | WARM | Monthly promotions |
| 3 | Search - COLD - YourStore.com | Search | COLD | Brand name (store name) |
| 4 | Search - COLD - [Top Shopping Product] | Search | COLD | Best-selling product |
| 5 | Video - WARM - Website Visitors | Video | WARM | Website visitors |
| 6 | Video - WARM - Monthly Promotions | Video | WARM | Monthly promotions |
| 7 | Video - PAST CUSTOMERS - Goodwill | Video | PAST CUSTOMERS | Goodwill |
| 8 | Discovery - WARM - Monthly Promotions | Discovery | WARM | Monthly promotions |

Campaign names use the format Channel - Temperature - Audience or goal. [L1121, 2022]
- Display - WARM - Website Visitors uses dynamic display ads served to the remarketing audiences. Its goal is more exposure to website visitors. Exclude recent customers from this campaign. [L1121, 2022]
- Display - WARM - Monthly Promotions uses standard display ads to raise awareness of limited-time offers. Static image ads for this campaign can be designed in Canva. Exclude recent customers from this campaign. [L1121, 2022]
- Implementation order:
  1. Complete Google Ads training in the Google Ads step.
  2. Create all audience segments in Google Analytics.
  3. Launch Campaign 1 (Dynamic Display Remarketing) with a small budget.
  4. When profitable, add Campaign 2 (Display Monthly Promos).
  5. Then add Search campaigns (3-4).
  6. Then add Video campaigns (5-7).
  7. Finally add the Discovery campaign (8).
  Each campaign can run independently, and minimal maintenance is required after setup. [L0210, 2022]
- Standard display campaigns work well for remarketing and monthly promotions. Dynamic remarketing with Shopping product ads, which show the customer's viewed products, also works well. [L0964, 2023]
- Remarketing is set up for product-specific remarketing with Shopping ads. [L0964, 2023]
- Start the first paid campaigns with remarketing when a store already has heavy organic traffic. Remarketing usually shows the highest ROAS and can be launched quickly, followed by new Shopping campaigns. [L0836, 2024]

#### Campaign Creation Path

- Campaign setup for display or search: select campaign type, choose "without goals guidance", select the campaign category (Display, Search, Video or Discovery), set the conversion goal to Purchases only, select "Standard display campaign" or "Search", and link the Google Merchant Center data feed if using dynamic ads. [L0210, 2022]
- Navigate to Google Ads left navigation > Campaigns > New campaign, then pick "Create a campaign without goals guidance". This path starts every remarketing campaign build. [L0734, 2020-26; L0733, 2020-26]
- Choose Display, not Shopping. Display ads run on websites and apps that are not owned by Google but partner with it to show ads. [L0734, 2020-26]
- The Google Display Network is stated to reach about 3 million websites and apps. Remarketing ads use this network to follow visitors across the web. [L0734, 2020-26]
- A display campaign can reach customers across 3 million sites and apps, as shown on the campaign type selection screen. Remarketing ads appear on any site or app where Google places ads. [L0733, 2020-26]
- Dynamic display ads pulled from the product feed can appear across over 3 million websites and 650,000 apps via the Google Display Network, showing people the specific products they viewed on the site. [L0210, 2022]
- Dynamic remarketing reduces ad fatigue by showing each person the products they browsed, instead of the same ad repeatedly. This increases relevance and conversion likelihood. [L0210, 2022]

#### Full Build: Version A (16 steps)

1. Log into Google Ads and open Campaigns.
2. Click the blue plus button and choose New campaign.
3. Choose "Create a campaign without goals guidance" for manual control.
4. Select the campaign type Display.
5. Under conversion goals, check that the Purchase goal is listed. If it is missing, click Add goal and add the purchase goal.
6. Click Continue and enter your store's homepage URL, even though the ads link to product pages.
7. Name the campaign with the domain, the word display, the purpose and the audience length, for example: domain display campaign remarketing - 30 days.
8. Select the audience of 30-day website visitors who are not customers.
9. Click Continue, set the country where you do business, and set the language.
10. Open More settings and set the dynamic ads data feed from Google Merchant Center, with no product filters.
11. Open More settings > Content exclusions and apply the exclusions listed in the content exclusion units.
12. Set the average daily budget to 10% of your Google Shopping daily spend and review it over time.
13. Change the focus from conversions to viewable impressions.
14. Enter a viewable CPM bid of $10.
15. Add targeting, select the 30-day remarketing audience, and turn off optimized targeting.
16. Add headlines, long headlines and descriptions, create the ad, give it a name, and click Publish. [L0733, 2020-26]

#### Full Build: Version B (18 steps)

1. Open the Google Ads account and go to Campaigns in the left navigation.
2. Click New campaign, then choose Create a campaign without goals guidance.
3. Under campaign type, select Display (not Shopping). Keep the existing conversion goals and click Continue.
4. Enter the homepage as the business website address and click Continue.
5. Give the campaign a clear name (example pattern: store domain plus remarketing) and click Continue.
6. Set the targeting location to the country where you do business and the language to English.
7. Under More settings, leave ad rotation, ad schedule, devices and campaign URL options at their defaults.
8. Change the dynamic ads setting: tick "Use dynamic ads feed for personalized ads" and select the data feed from your Google Merchant Center account.
9. Leave the product filter on no filters so all products are remarketed.
10. Under More settings > Content exclusions, set the exclusions described in the content exclusion units.
11. Click Next to go to budget and bidding.
12. Set the average daily budget (see the budget rule).
13. Change the focus from conversions to viewable impressions.
14. Enter a viewable CPM bid of $10 (see the bid units).
15. Click Next, then click add targeting and select the 30-day website visitor audience segment. Turn off optimized targeting.
16. Click Next to open the ad builder and complete the ad fields.
17. Click Next. If Google reports errors, go back to Ads, add the required images (one landscape and one square), click apply changes, then Next.
18. Click Publish campaign. [L0734, 2020-26]

Versions A and B differ in detail. Version A adds headlines and descriptions as step 16, and Version B adds the images check in step 17. Both use the same budget, bid, focus and targeting rules. [L0733, 2020-26; L0734, 2020-26]

#### Campaign Settings Details

- In the campaign settings, the Purchase goal must appear under conversion goals. If it does not, use Add goal to add it. [L0733, 2020-26]
- For a remarketing display campaign, keep the existing conversion goals already present in the account, then enter the homepage URL as the business website address. Click Continue after each step. [L0734, 2020-26]
- A remarketing display campaign needs the Purchase goal in its conversion goals list. If it is missing, add it so Google treats any purchase signal as a success for performance optimization. [L0733, 2020-26]
- Set the targeting location to the country where the business operates and leave the language on English. Google's EU political ads declaration is a separate requirement that applies only if political ads are run. [L0734, 2020-26]
- Under More settings, leave ad rotation, ad schedule, devices and campaign URL options unchanged. Only the dynamic ads option changes in this section. [L0734, 2020-26]
- Dynamic ads option, Version A: in campaign settings under More settings, the field "dynamic ads, no data feed" must be changed. Click the icon that appears on hover, choose "use dynamic ads feed for personalized ads", and select the data feed from Google Merchant Center. Keep filters off so that every product a visitor viewed can appear in the ads. [L0733, 2020-26]
- Dynamic ads option, Version B: tick "Use dynamic ads feed for personalized ads" and select the data feed from the Google Merchant Center account. The dynamic feed is what makes each ad show the products the visitor actually viewed. [L0734, 2020-26]
- The dynamic ads feed must already exist as a data feed in Google Merchant Center before the remarketing campaign is built, because the feed is selected there during campaign setup. [L0733, 2020-26]
- A dynamic Display remarketing campaign needs a Google Merchant Center product feed already connected to the Google Ads account, usually from an earlier Shopping setup. Connect Merchant Center before building the remarketing campaign. [L0734, 2020-26]
- Product filter: leave on no filters so all products are included in remarketing. Add a filter only if a subset of products should be remarketed. [L0734, 2020-26; L0189, undated]
- The filter option can exclude specific products from remarketing ads if only certain products should appear. For a general remarketing campaign, keep filters off. [L0733, 2020-26]
- Turn off native formats in ad settings. [L0189, undated]
- Once live, the dynamic remarketing campaign updates its products and audience automatically. The only ongoing change needed is raising the campaign's daily budget as shopping spend grows. [L0734, 2020-26]

#### Ad Builder

- In a dynamic remarketing ad builder, the additional images field is meant for regular display ads, not for dynamic remarketing ads. Google may still ask for extra images during its error check, so add them only when the check requires it. Skip video for this campaign type. [L0734, 2020-26]
- If Google reports errors on the review screen, add the required images (one landscape and one square), click apply changes, then click Next. [L0734, 2020-26]
- Complete the headlines, long headlines and descriptions, create the ad, give it a name and click Publish. [L0733, 2020-26]

#### Approval and Go-Live

| Situation | Approval time | Source |
|---|---|---|
| New Google Ads account with a new remarketing campaign | 1 to 2 days | [L0733, 2020-26] |
| Account already running other campaigns | About 1 hour | [L0733, 2020-26] |
| Established account with previously approved ads | Usually under 30 minutes | [L0734, 2020-26] |
| First-time remarketing setup | A couple of days | [L0734, 2020-26] |

- After approval, the ads may take about a day to start getting impressions. Clicks and sales come after impressions. [L0734, 2020-26]
- Set up promotion campaigns one week in advance so they have time to be reviewed and approved by Google. Last-minute setup risks delays or rejection. [L0210, 2022]

### Budget Rules

- Set the average daily budget of a remarketing display campaign to 10% of the daily spend on your Google Shopping campaigns. For example, $30 per day on Shopping means $3 per day on remarketing, and $50 per day means $5. Adjust the number up or down over time based on results. [L0733, 2020-26]
- Set the remarketing campaign's average daily budget to about 10% of the total daily budget spent on Shopping campaigns. If Shopping and remarketing share one budget, use 10% of the combined Shopping total. [L0734, 2020-26]
- Budget examples: with $10 per day on Shopping, the remarketing budget is $1 per day. With a shared $10 per day across Shopping and remarketing, the remarketing budget is $2 per day. [L0734, 2020-26]
- The 10% rule scales as Shopping spend grows, so keep it proportional when profitable Shopping campaigns get more money. At $50 per day on Shopping, the remarketing budget becomes $5 per day. [L0734, 2020-26]
- Core-spend example: a store spending 100 per day on Google Shopping can start remarketing at about 10 per day. [L0969, 2022]
- Google remarketing budgets are usually smaller than Facebook budgets, around $5 to $50 per day, and take a similar amount of time to set up. [L1076, 2019]
- Budget and delivery method are set for retargeting Shopping campaigns during setup. [L1242, 2020-26]

### Bidding Focus and CPM

- For remarketing, change the campaign focus from conversions to viewable impressions. Viewable impressions appear at the bottom of the focus list. The bid is then entered as a viewable CPM for the ad group. [L0733, 2020-26; L0734, 2020-26]
- Configure the bidding focus to viewable impressions so the campaign optimizes for ads actually seen by users rather than counting all impressions. [L0189, undated]
- Set Viewable CPM to $10 when using viewable impressions as the bidding focus in Google Display remarketing. [L0189, undated]
- Set CPM to $10 for display campaigns. Actual spend typically ranges $3-$4 per 1,000 impressions, which lets you outbid competitors and ensures the warm audience sees your ads. [L0210, 2022]
- CPM is the cost to reach 1,000 people. For remarketing, a viewable CPM bid of $10 is a suggested starting value. The full bid is rarely spent, but a high bid helps the ads win impressions in a small, highly qualified audience. [L0733, 2020-26]
- Recommended viewable CPM bid for remarketing is $10. CPM means the cost for every 1,000 people who see the ad, and actual spend is typically far below the bid. [L0734, 2020-26]
- A high CPM bid makes Google show the remarketing ads to more people, since it ranks inventory by the bid it receives. The bid does not mean spending the full amount per 1,000 impressions. [L0734, 2020-26]
- Bid adjustment for low delivery: if the viewable impressions bid does not produce enough impressions, raise the maximum viewable CPM bid. If that still gives few clicks, duplicate the campaign, change its objective to conversions and let it run alongside the original. The original can be re-enabled if needed. [L0805, 2024]
- For retargeting Shopping campaigns, Manual CPC is the bidding strategy at setup. The campaign starts with a bid and is adjusted from there. [L1242, 2020-26]


Part 46 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/45-brand-search-and-competitor-protection.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/47-targeting-and-optimized-targeting.md
