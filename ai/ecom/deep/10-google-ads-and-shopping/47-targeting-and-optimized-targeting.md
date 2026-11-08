<!-- part of ecom/deep/10-google-ads-and-shopping.md -->
Part 47 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/46-remarketing-audiences-display-and-dynamic-campaign.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/48-shopping-remarketing-structure.md

### Targeting and Optimized Targeting

- Targeting for a remarketing display campaign: under Add targeting, open Audience segments and search for the customer exclusion audience. Scroll to the bottom to find the most recently created audiences, then select the 30-day website visitor audience. Turn off optimized targeting before clicking Next. [L0733, 2020-26]
- Turn off optimized targeting for all remarketing campaigns. It spends more money on people outside the audience, despite promising 20% more conversions. [L0210, 2022]
- If optimized targeting stays on, Google may show the ads to people outside the chosen audience. Turn it off so only the qualified remarketing audience sees the ads. [L0733, 2020-26]
- Retargeting audiences can receive their own offers, such as a coupon, instead of the message shown to cold traffic. Because these visitors already know the brand, bids for them can be set more aggressively. [L0720, 2020-26]
- Targeting methods can be stacked, so an audience must meet several conditions at once. For example, show a retargeting ad only to people who visited the site and are also browsing hotel or travel websites. [L0720, 2020-26]

### Exclusions

#### Customer Exclusions

- Always exclude customer lists from remarketing campaigns after publishing. Go to Audiences > Exclusions and select the customer audience that matches the campaign timeframe (for example, 30-day customers for a 30-day remarketing campaign). This avoids wasting budget on people who have already bought. [L0210, 2022]
- Build a 30-day purchase audience and exclude it from remarketing campaigns. This keeps remarketing ads from reaching people who have already bought. [L0934, 2023]
- For monthly promotion campaigns on Google, add recent purchasers as exclusion audiences. All other warm audiences see the promotion ads. [L1204, 2022]
- Promotion Google ads should match the email message and be shown to all website visitors from the last 180 days, excluding customers from the last 30 days. Use Display ads and Demand Gen ads for this audience. [L1222, 2025+]
- Exclude recent customers from both Display - WARM campaigns (Website Visitors and Monthly Promotions). [L1121, 2022]
- Two remarketing audiences of different lengths, such as 30-day and 14-day, must exclude each other, so the same user does not see ads in both. [L0253, 2024]

#### Content Exclusions

- Content exclusions under More settings (version A): exclude content that is not yet labeled and mature audience content. Exclude the sensitive content group in the middle of the list. Under content type, exclude live streaming YouTube videos and parked domains. [L0733, 2020-26]
- Content exclusions under More settings > Content exclusions (version B): exclude content not yet labeled, the entire sensitive content category, and live streaming videos. These keep ads off unlabeled, sensitive and live-stream placements. [L0734, 2020-26]
- Google review extension: exclusions for reviews are not tested in the source. Turn off the Google review extension if it appears, and ask Google Ads live chat to confirm the setting. [L0962, 2021]

#### Placement Exclusions

- Account-level placement exclusions: open the display network placements section and add exclusions for sites or apps that do not convert, such as app traffic. The exclusion applies to the whole account, not one campaign. [L0454, 2019]
- Excluding unwanted placements in a display remarketing campaign:
  1. Open the Google Ads account and go to Display campaigns.
  2. Open the current remarketing campaign.
  3. Go to Insights and reports > Where ads showed.
  4. Sort the placements by Cost to see where the most money goes.
  5. Tick the checkbox next to each placement you do not want, then choose the exclude action.
  6. Check the placement exclusions under Audiences, keywords and content > Content > Placement exclusions to confirm them. [L0805, 2024]
- The placement exclusion view lists all apps and websites excluded from the display campaign. After excluding a placement, a small black bar at the bottom of the screen confirms how many placements were excluded. With many placements at once, that message can take a while to appear. [L0805, 2024]

#### App Placement Exclusions

- Display ads can run inside free mobile and tablet apps, usually as a small banner along the bottom of the screen. That spot sits close to the phone's own navigation controls, so many clicks there are accidental. [L1137, 2021-22]
- App placements often show a high click-through rate that is largely accidental. This spends budget without bringing in genuinely interested visitors, so excluding app placements from display campaigns is worth doing. [L1137, 2021-22]
- Google Ads does not let you exclude apps during display campaign setup. The exclusion must be built beforehand as a placement exclusion list, then applied to the campaign. [L1137, 2021-22]
- Excluding app placements matters most for cold traffic, lead generation and content promotion on the display network. For retargeting it matters less because the traffic volume is much lower, but it can still be applied. [L1137, 2021-22]
- Placement exclusion lists are found at Tools and Settings > Shared Library > Placement exclusion lists. Click the blue button at the top to create a new list. [L1137, 2021-22]
- A suitable name for the list is Display Network App Placement Exclusions. Once saved, it appears in the Placement exclusion lists table of the shared library. [L1137, 2021-22]
- Create the app exclusion list:
  1. Open Tools and Settings in the Google Ads account.
  2. Under Shared Library, click Placement exclusion lists.
  3. Click the blue button at the top to create a new list.
  4. Enter a list name, for example Display Network App Placement Exclusions.
  5. In the placement selector, open the App categories option. The selector offers YouTube channels, YouTube videos, Websites, Apps and App categories (140). Individual apps can be typed into the search field, but to exclude all apps use the categories.
  6. Expand Apple App Store (84) and tick every category, including the subcategories under Games (19) such as Action, Arcade and Board. Visible Apple categories include Book, Business, Catalogs, Education, Entertainment, Food & Drink, Finance, Music, Navigation, News, Photo & Video, Productivity and Reference.
  7. Expand Google Play (56) and tick every category, including Places & Objects, Social, Sports, Sports & Activities, Tools, Travel, Travel & Local, Utilities, Video Players & Editors and Weather.
  8. Check that the counter shows 140 selected, which is 84 Apple categories plus 56 Google Play categories.
  9. Click Save.
  10. Confirm that the new list appears in the placement exclusion lists table. [L1137, 2021-22]
- Every app category checkbox must be ticked by hand, because there is no select-all option. Ticking a whole category excludes all apps inside it, so there is no need to go through individual apps. [L1137, 2021-22]
- The App categories list contains 140 categories in total: 84 under Apple App Store and 56 under Google Play. All 140 must be selected to exclude all apps. [L1137, 2021-22]
- Individual app names can be added through the search field if only specific apps should be excluded. App suggestions only appear after a search term has been entered. [L1137, 2021-22]
- Placement exclusion lists sit in the shared library, so one list can be applied to several display campaigns. The same list can also be used in YouTube campaigns. [L1137, 2021-22]
- Excluding app categories pushes Google to show display ads mostly on websites. Visitors then arrive from a website, instead of being pulled out of a game or other app by an accidental click. [L1137, 2021-22]
- Apply the list to campaigns:
  1. Select the checkbox of the new placement exclusion list in the table.
  2. Click Apply to campaigns.
  3. Select the display campaigns the list should apply to, including both retargeting and cold traffic campaigns, and confirm. [L1137, 2021-22]
- Apply the list to one campaign:
  1. Open the display campaign, for example a retargeting campaign.
  2. Open the Placements menu and go to Exclusions.
  3. Under Exclude placements, choose Use placement exclusion list.
  4. In the field Search placement exclusions lists, select the list. The field shows how many lists are selected.
  5. Click Save. [L1137, 2021-22]
- The campaign-level Exclusions page has an "Exclude placements on Display Network and YouTube" section with a Use placement exclusion list option. A list selected there applies to both the Display Network and YouTube placements of that campaign. [L1137, 2021-22]
- Creating the list does nothing by itself. It has to be applied to every display campaign that runs ads, otherwise apps remain eligible for those campaigns. [L1137, 2021-22]
- After the list is applied, the campaign's Exclusions view lists the excluded mobile applications with the type Mobile application and the level Ad Group. Entries show the excluded apps by name and store, such as iTunes App Store. [L1137, 2021-22]
- Display ads inside mobile apps usually appear in the free versions of those apps. Users who pay to upgrade often get an ad-free version, so ads in apps mostly reach users who have not paid. [L1137, 2021-22]
- For products that are themselves related to an app, a different approach may make sense. High-ticket products generally do not need app placements excluded this way. [L1137, 2021-22]
- Demo example: a retargeting display campaign with a budget of US$1,500 per day and an enhanced default max CPC of US$0.20. These figures only illustrate the example and are not benchmarks. [L1137, 2021-22]

### Static and Promotional Remarketing

- Use static remarketing ads (not linked to the product feed) to run promotional remarketing when dynamic product-feed remarketing is not possible or needed. [L0836, 2024]
- Monthly promotions run across all channels at once (Google Shopping, Display Network, Search, Video, Discovery, Email, Meta). This keeps the offer top-of-mind and gives warm audiences several touchpoints to see and act on a limited-time offer. [L0210, 2022]
- A specific offer can also run as a static Google Display Network banner with the same deal message and a Shop Now call to action, shown based on the person's journey stage. [L0799, 2021-22]
- Holiday promotions on Google:
  - Use static Display ads (not dynamic display ads) and static Demand Gen ads.
  - Audience: all website visitors in the past 180 days.
  - Exclusion: all customers who purchased in the past 30 days.
  - The ads should use the same message as the emails. [L1223, 2024+]
- Promotion Google ads should match the email message and be shown to all website visitors from the last 180 days, excluding customers from the last 30 days. Use Display ads and Demand Gen ads for this audience. [L1222, 2025+]
- Running both Meta and Google accounts with remarketing audiences gives more reach for holiday promotions. Having both is not mandatory, but it increases traction considerably. [L1223, 2024+]
- Google Display remarketing for promotions: the Display - WARM - Monthly Promotions campaign is the standard approach. [L1121, 2022]
- The same Google remarketing setup can run while a policy violation warning is active. Reach is limited, but the ads still show. [L0855, 2023]

### Troubleshooting: No Impressions

#### Checks in Order

1. Go to Google Ads > Tools > Shared Library > Audience manager.
2. Check whether the audience is marked as Eligible.
3. If it is not eligible, go to Google Analytics 4 > Admin (gear) > Data Collection.
4. Ensure all data collection toggles are ON.
5. If the audience is eligible in Audience Manager, delete the remarketing campaign and recreate it from scratch.
6. Give it a few days to accumulate impressions.
7. If it still does not work, post in the Discord community or contact support with screenshots. [L0253, 2024]
- Eligible audiences can run remarketing ads. If an audience is not eligible, check Google Analytics settings. [L0253, 2024]
- If an audience says "too small to serve", it does not have enough users yet. If the audience is not labeled too small and the campaign still does not run, recreate the campaign. [L1115, 2024]
- A remarketing campaign only starts receiving impressions once its audience shows as eligible. If still not eligible after a day, pause and recreate it. [L0807, 2025]
- Creating a 7-day remarketing campaign in a new store can produce no impressions, because the audience is too small. Start with 30 days. [L0733, 2020-26]
- Policy disapprovals: Google Merchant Center can disapprove products for dynamic remarketing when ads target personalized advertising around health content or are built to exploit customers' struggles or difficulties. Such products can still be retargeted on Meta. [L0666, 2024]
- Some niches may not be allowed to run Google remarketing due to Google policy. In that case contact Google support to check whether an extra terms form or step is needed. [L0836, 2024]
- Low results are not yet a verdict. A remarketing display campaign that ran three months with 123 clicks at an average CPC of $3.50, CTR 0.11%, zero conversions and total spend of roughly $400-450 was too small to judge. Some clicks are repeat visitors, so the unique audience may be under 100 people. It needed more time, and the CPC needed to come down. [L0805, 2024]
- With only 65 clicks over two months, the sample is too small to judge conversions. The priority at that level is to increase traffic (more impressions and higher CTR), not to optimize who the ads target. [L0805, 2024]
- Old dynamic remarketing lessons were updated in 2024 because Google changed how dynamic remarketing works, not because the method stopped working. A paused legacy campaign may give different results or show an error message when re-enabled. [L0805, 2024]
- Excluding placements by name requires a current view of the campaign. Earlier advice on review placements remains untested. [L0962, 2021]

### Audience Creation Pitfalls

- Create dynamic Google audiences early, before customers exist. They fill as people take the action, so a 180-day visitor audience or a 30-day purchase audience can be empty on day zero. [L0934, 2023]
- Creating a remarketing list and copying a search campaign with an added audience took about 19 to 20 seconds in Google Ads Editor in the demonstration. [L1203, 2016]
- Google Shopping ads convert best when they reach people who already engaged through an earlier touchpoint. [L1142, 2020-26]

### Performance Expectations and Strategy (remarketing ROAS target: above 10x within 2 to 5 days)

- Remarketing campaigns aimed at your best customers should exceed 10X ROAS within the first two to five days, because those buyers already know the brand. Higher ROAS is better, and there is no fixed upper limit. [L0469, 2021]
- Display ads should be remarketed to recent visitors. For the hottest audience, such as seven-day website visitors who did not buy, expect a click-through rate around 5 percent. Broader audiences often reach around 1 percent. Responsive display ads have performed well. [L0801, 2021]
- Google works as a strong retargeting platform because people search the brand after seeing a Facebook ad. The seller reports about 50% of Google visitors search the brand after a Facebook ad. [L0950, 2023]
- Prospects who joined an email list with a coupon convert more often on Shopping ads, because the earlier brand contact and incentive build trust. Use email signup offers as a warm-up step before Shopping campaigns. [L1142, 2020-26]
- Shopping ads convert best when they target people who have already engaged with the brand through an email signup, a guide download or a coupon. Use these warmed prospects as the audience for Shopping campaigns, and keep cold traffic on upper-funnel channels. [L1142, 2020-26]
- Excluding placements and audiences is a cost-control step; it does not replace growing the audience. [L0805, 2024]

### Customer Match and Audience Lists

- Customer Match lets you upload a list of your customers' email addresses to Google. You can then show ads to those people or to lookalike audiences of people who resemble them. [L0720, 2020-26]
- Customer lists from previous customers can be uploaded as audiences on Facebook and Google. These audiences typically perform better than cold campaigns. [L1092, 2022]

### Search and Shopping Retargeting

#### Search Audiences

- Search audience campaigns are an underused tactic. Fewer than 10 percent of advertisers ran them in AdWords and Bing Ads. They allow targeting on Google search by audience lists and demographics, not only by keywords. [L1203, 2016]
- Google's ad preferences page (google.com/ads/preferences) shows the gender, age range and interests Google has inferred from a user's activity, even without profile data. Check it to see what Google expects about your audience. [L1203, 2016]
- Google search campaigns can be targeted by audience in two main ways: retargeting lists built from past site visitors, and demographic groups such as gender, age range and household income. Layering these onto search campaigns allows bid adjustments by segment, which goes beyond keyword targeting alone. [L1203, 2016]

#### Retargeting Shopping Campaign

1. Create a new Shopping campaign with the same steps as a standard Shopping campaign: select merchant and goal.
2. Give it a clear name, for example "Retargeting on search Shopping".
3. Set bidding to Manual CPC.
4. Set the budget and delivery method.
5. Set campaign priority to High so it is checked first.
6. Skip the alpha-beta structure and use one campaign for the whole retargeting audience.
7. Include the Search Network and show ads on all devices.
8. Set the location to the United States.
9. Add an ad group name and a starting bid.
10. Open the Audiences section, apply the audience to the campaign, and choose Targeting.
11. Select the 540-day retargeting list.
12. Make the starting bids in the waterfall more aggressive than in normal campaigns so retargeting traffic is funneled into this campaign. [L1242, 2020-26]
- Campaign settings: Bidding = Manual CPC; Campaign priority = High; Networks = Search Network included; Devices = all devices; Location = United States; Audiences: Apply to campaign > Targeting > 540-day retargeting list for search. [L1242, 2020-26]
- Set campaign priority to High for a retargeting Shopping campaign so it is evaluated before other campaigns that may target the same searches. [L1242, 2020-26]
- In the experience behind this method, an alpha-beta split is not needed when monthly spend is below 10,000 USD. A single retargeting campaign can serve the whole audience at that budget level. [L1242, 2020-26]
- The retargeting campaign should be set to Targeting, not Observation. Targeting narrows delivery to the selected audience and allows bid adjustments. Observation only reports on the audience and keeps the broad reach. [L1242, 2020-26]
- Choosing Observation instead of Targeting means the campaign still reaches all searchers, so the retargeting list does not limit spend. Always apply the audience as Targeting when the campaign should serve only that audience. [L1242, 2020-26]

### Cross-Platform Notes

- Facebook remarketing campaigns can be set up right after the first Google campaign is live. They are small-budget campaigns that amplify Google Shopping results. Bing can be added later. [L0834, 2021]
- Match the Google video to the Facebook thank-you video so the message is the same on both platforms. [L1076, 2019]

### Setting up audiences in GA4 and Google Ads

Use this order when you connect GA4 to Google Ads for the first time:

1. Link Google Ads to GA4 under Admin > Product links > Google Ad Links > Link.
2. Turn on all options under Data settings > Data collection, and accept the user data collection acknowledgement.
3. Change Data settings > Data retention > Event data retention from 2 months to 14 months, then click Save.
4. Create the three non-purchaser audiences (website visitors who exclude customers, 7, 30 and 180 days) under Audiences. [L1520, 2020-26]

The Google Ads remarketing tag and the Google Analytics tag both need to be installed. Add both as audience sources. Google shows a warning when you enable the second source. Confirm it, because the two tags feed different audiences. [L1390, 2021-22]

The Google Ads remarketing tag builds audiences only from pages a visitor viewed. Google Analytics can also segment by session duration, technology, location and other behaviour, which makes it the main audience source. The Google Ads tag still helps with dynamic product ads, where it is easier to set up. [L1390, 2021-22]

Google Analytics Audience Builder offers these options:

- **Traffic Sources:** filter by Campaign, Medium, Source or Keyword. This works with UTM parameters, so you can target visitors from one specific ad campaign, such as a bottom-of-funnel shopping campaign. [L1390, 2021-22]
- **Advanced Google Ads conditions:** Ad Content, a specific Google Ads campaign and ad group, Targeting Type, and Ad Slot. Sequences are advanced and not needed for basic audiences. [L1390, 2021-22]
- Audiences built in Google Analytics appear in Google Ads as remarketing lists for Search Ads and the Google Display Network. They show up as targeting options only after the Google Ads account is selected as an audience destination. [L1390, 2021-22]

Audience rule example: the rule *Visitors of a page who did not visit another page* builds a list of people who viewed a product page but never reached the checkout page. You can limit it to chosen dates or tags. This is a narrower alternative to a plain page-visit audience when the goal is to target shoppers who stalled before buying. [L1242, 2020-26]

### Audience windows and minimum sizes

Google Ads remarketing audiences need at least 100 unique people before ads start serving. Repeat visitors count only once. Check eligibility in Google Ads under shared audiences by opening the audiences you created. Check Meta Business Manager under Audiences. [L1283, 2023]

Example audience sizes for reference: a website visitor list of about 1,000 to 1,500 people, built from all site traffic in the last 30 days, and a retargeting list of about 7,100 people used for search retargeting. Actual sizes depend on your site traffic. [L1242, 2020-26]

Recommended windows by stage:

| Remarketing audience | Window |
|---|---|
| All website visitors, 90 days | Start here if traffic is low |
| All website visitors, 180 days | Use if the 90-day audience is still too small |
| Visitors, 7 days | Build once traffic is high |
| Visitors, 30 days | Build once traffic is high |
| Visitors, 60 days | Build once traffic is high |
| Visitors, 90 days | Build once traffic is high |

[L1279, 2021]

Window procedure:

1. Create a remarketing audience of all website visitors covering 90 days.
2. If Google says the audience is too small, widen the window to 180 days.
3. As traffic grows, create more recent audiences with 7, 30, 60 and 90-day windows and adjust spend accordingly.

[L1279, 2021]


Part 47 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/46-remarketing-audiences-display-and-dynamic-campaign.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/48-shopping-remarketing-structure.md
