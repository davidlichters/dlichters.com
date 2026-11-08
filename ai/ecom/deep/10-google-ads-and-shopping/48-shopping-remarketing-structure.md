<!-- part of ecom/deep/10-google-ads-and-shopping.md -->
Part 48 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/47-targeting-and-optimized-targeting.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/49-youtube-demand-gen-and-display-prospecting.md

### Shopping remarketing structure

Retargeting bids should be higher than normal bids for the same audience. This lets the retargeting campaign win the auction for returning searchers. Lower bids in normal campaigns keep that traffic from triggering there. [L1242, 2020-26]

The alpha-beta structure first filters the search population to past site visitors, then to those searching again, and only then splits that group further by performance. At monthly Shopping spend below 10,000 USD this extra split is usually unnecessary, so one retargeting campaign can serve the full retargeting list. [L1242, 2020-26]

Keep retargeted visitors out of normal Shopping campaigns (procedure):

1. Go to the normal Shopping campaign (for example, the alpha-beta campaign).
2. Open the Audiences section and add an audience to the ad group.
3. Select the ad group and the campaign, then select the 540-day retargeting list.
4. Set the bid adjustment to minus 100%.
5. Save. Retargeted visitors then get a near-zero bid in normal campaigns and the higher bid in the retargeting campaign.

[L1242, 2020-26]

Setting path: Normal Shopping campaign > Ad group > Audiences > add the 540-day retargeting list > Bid adjustment: -100%. [L1242, 2020-26]

A -100% bid adjustment on the retargeting audience in normal Shopping campaigns is the method for keeping that traffic out of them, so the retargeting campaign receives it. [L1242, 2020-26]

Once a website visitor audience is applied to a Shopping campaign with Targeting selected, the audience appears in the campaign's audience list. Its bid adjustment is set there, directly below the audience entry. Observation mode only adds reporting for that audience. It does not change bids or limit reach. [L1242, 2020-26]

Free traffic from Google product listings and organic results can be used alongside a small remarketing budget. This way paid spend goes to visitors who already found the store. [L1281, 2022]

### Display retargeting campaign setup

Standard display retargeting campaign with static ads:

1. In Google Ads, open Campaigns, go to the Display campaigns view and click to add a new campaign.
2. Choose Create a campaign without a goal's guidance.
3. Select campaign type Display (use Video only for YouTube retargeting).
4. Select subtype Standard display campaign.
5. Skip the website URL step and click Continue.
6. Name the campaign, then set locations and language.
7. Under bidding, choose Manually set bids and pay for Clicks, with Enhanced CPC turned off.
8. Set the daily budget (test budget: 20 USD).
9. Set the delivery method to Standard.
10. Under ad rotation, choose Do not optimize: Rotate ads indefinitely.
11. Under frequency capping, set a limit of 3 impressions per day per ad group.
12. Leave dynamic ads without a data feed and keep the account-level conversions setting.
13. Set content exclusions as needed for brand safety.
14. Create the ad group: give it a name, add the audience Product Viewers 14 Days, turn targeting expansion Off, and set the ad group bid to 0.20 USD CPC.
15. Create the ads: choose Upload display ads (not responsive), enter the final URL and upload the image files.
16. Click Create campaign.
17. Open the new campaign, go to Audiences, then the Exclusions tab, and add an exclusion for Product Viewers 7 Days at ad group level. Save.

[L1342, 2021-22]

You can skip creating an ad during campaign setup and add one later. The campaign will not run until it has at least one ad. [L1342, 2021-22]

### Bidding, budget and delivery

- Bidding for a new retargeting test: Settings > Campaign > Bidding, Manually set bids, pay for Clicks, Enhanced CPC turned off. Audience-based bidding on conversions is not recommended at low volume. [L1342, 2021-22]
- Starting ad group bid for Google display retargeting is 0.20 USD CPC, kept low at the start. Manual CPC bids are the starting point for new campaigns. [L1342, 2021-22]
- For a new Google Ads display campaign, set Settings > Campaign > Delivery method to Standard rather than Accelerated. Monthly spend cannot exceed the daily budget multiplied by the average number of days in a month, although individual days may spend slightly more or less. [L1342, 2021-22]
- When Smart Bidding is active, Google Ads optimizes ad rotation toward the best-performing ads, even if rotation is set to rotate indefinitely. The rotate-indefinitely setting only keeps ads evenly rotated in campaigns that use manual bidding. [L1342, 2021-22]

### Static ad creative and split testing

- Insert a real review text and star rating directly into static Google Display ads. [L1398, 2021-22]
- Use image ads for the display set. Text-only display ads are weak for retargeting in the lesson's experience and tend to underperform image ads. [L1342, 2021-22]
- Standard uploaded display ads are the recommended base. Responsive display ads let Google decide formats, placements and sizes, including text-only and weaker ad sizes, so you have less control over the result. Responsive ads can be tested as an optional extra. [L1342, 2021-22]
- Ad rotation for split tests: choose Do not optimize: Rotate ads indefinitely. Avoid Optimize: Prefer best performing ads, because Google picks a winner very early using data that is not statistically meaningful. [L1342, 2021-22]

Split test procedure on static ads (rotation set to rotate indefinitely):

1. Let the ads run until each one gets a large, even number of impressions.
2. Compare the results once the sample is large enough.
3. Pick the best-performing ad and replace the weaker ones as needed.

[L1342, 2021-22]

### Frequency capping

Under Settings > Campaign > Additional settings > Frequency capping, you can limit impressions for the whole campaign, per ad, or per ad group. For retargeting, the test limit is 3 impressions per day per ad group. [L1342, 2021-22]

### Exclusions

**Content exclusions**

Setting path: Settings > Campaign > Content exclusions. [L1342, 2021-22]

- Digital content labels: DL-G General audiences, DL-PG Most audiences with parental guidance, DL-MA Mature audiences, and Content not yet labeled. [L1342, 2021-22]
- Sensitive content categories: Tragedy and conflict, Sensitive social issues, Profanity and rough language, Sexually suggestive, and Sensational and shocking. [L1342, 2021-22]
- Content types that can be excluded: Games, Inactive, Live streaming YouTube video, Embedded videos, Below-the-fold, Mobile app non-interstitial, Parked domains and In-video. Google states that exclusions are applied as well as possible but may not catch all related content. [L1342, 2021-22]

**Audience exclusions**

Audience exclusions in Google Ads can be applied at campaign level or ad group level. Use the ad group level when different ad groups in the same campaign target different audiences, because a campaign-level exclusion applies to all of them. [L1342, 2021-22]

### Targeting expansion

Keep targeting expansion Off at ad group level. This ensures the ad group reaches only the selected audience. Otherwise Google may expand reach to similar users, which defeats retargeting. [L1342, 2021-22]

### Search remarketing

Google search campaigns accept audience and demographic targeting, similar to Facebook targeting. You can narrow who sees a search ad beyond the keywords. Audience-based search ad clicks were reported to have grown 34% year over year in 2018. [L1455, 2018+]

Remarketing lists for search ads is an advanced Google Ads option that applies retargeting audiences to search campaigns. It is not needed for a standard display retargeting setup and is usually added after display campaigns are running. [L1342, 2021-22]

### Troubleshooting: no impressions and narrow audiences

- If remarketing shows zero impressions after the audiences are built, check the audience size first. Raising bids is a secondary option if the audience is eligible but still not serving. [L1283, 2023]
- Google's weekly estimates can show "Estimates aren't available because your targeting is too narrow" for small retargeting audiences. This message is normal for narrow lists and does not by itself mean the campaign is broken. [L1342, 2021-22]


Part 48 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/47-targeting-and-optimized-targeting.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/49-youtube-demand-gen-and-display-prospecting.md
