<!-- part of ecom/deep/09-meta-and-facebook-ads.md -->
Part 32 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/31-retargeting-by-timing-and-funnel-position.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/33-lead-generation-engagement-and-audience-building.md

### Starting and restarting campaigns

- Start a small Facebook remarketing campaign early, but it needs clicks from Google first to have enough visitors to retarget. [L0941, 2022]
- If a remarketing campaign still does not spend, rebuild it. (Procedure, 2024.)
  1. Leave the existing remarketing campaign running or switch it off later, without changing anything else. [L0971, 2024]
  2. In Meta, create a new remarketing campaign with the same settings as the old one. [L0971, 2024]
  3. Use a 30-day audience window for it, since the store's traffic is large enough to fill it. [L0971, 2024]
  4. Check whether the new campaign starts spending. If it still does not spend, rebuild the campaign again. [L0971, 2024]

### Placements, page followers and reporting

- The Facebook Business Page follower list shows counts, not names, and that is normal. Facebook remarketing campaigns for the full product catalog should be running. [L0834, 2021]
- Page and Instagram engagement audiences can reach shoppers Facebook can no longer track on the website since iOS 14. Use a 180-day window. [L1204, 2022]
- Retargeting based on video watch depth still works after iOS, though fewer people are trackable. [L0353, 2023]

### Store audience setup: summary of settings

- Facebook: Audiences > Create custom audience > Website to build website visitor lists for 7, 30 and 180 days. Use the 7-day and 30-day lists for dynamic remarketing and the 180-day list for monthly promotions. The 7-day and 30-day lists cost nothing to keep populated, so leave them running. [L1204, 2022]
- Purchaser audiences from the website Purchase event: a 7-day list for exclusions and a 180-day list for promotions. Once the store is linked to Facebook, purchases send the data automatically. [L1204, 2022]
- Instagram business profile: Create custom audience > Instagram business profile, select the Instagram account and set engagement criteria over 180 days. Name it for the purpose, for example `Instagram engagement 180 days`. [L1204, 2022]
- Engagement audiences: create a Facebook page engagement audience with a 180-day window, choosing the correct Page for each business in Business Manager. [L1204, 2022; L0649, 2019]

### Older advice (2019 to 2022), marked

- create custom audiences for website visitors in the past 7, 14 and 30 days, then create one ad set per audience. [L1086, 2019]
- reuse audiences, not ad sets. Custom audiences are free to create, update automatically, and are selected inside new ad sets in each campaign. [L1086, 2019]
- use Facebook and Instagram dynamic product ads only for remarketing to past site visitors. [L1086, 2019]
- remarketing budget of about 10% of the total ad budget. [L0468, 2020]
- set the remarketing bidding objective to Reach, not Conversions. [L0551, 2020]
- The Facebook Business Page follower list shows counts, not names. [L0834, 2021]
- retargeting below 1x ROAS should be reduced or ended. [L0854, 2022]
- dynamic product ad remarketing with the 2-day to 28-day audience expansion and the 100-person minimum. [L0969, 2022]
- run only dynamic product ad remarketing until Facebook is consistently profitable. [L0969, 2022]
- avoid oversaturating people with ads. [L0854, 2022]
- small budget of $20 to $30 per day split between Facebook and Google remarketing. [L0854, 2022]

### Funnel stages and audience temperature

- Cold audiences have not interacted yet and are reached through prospecting. [L1335, 2023+]
- Middle-of-funnel (MOF) audiences have engaged with ads, the page or the site, such as likes, comments, post engagement or site visits, without high-intent actions. [L1335, 2023+]
- Bottom-of-funnel (BOF) audiences have taken high-intent actions such as add to cart, initiate checkout or purchase. [L1335, 2023+]

### Video view audiences

- Build separate video-view custom audiences at the 25%, 75% and 95% watch thresholds, each with its own window. [L1335, 2023+]
- The 25% audience is the usual retargeting base. [L1335, 2023+]
- Viewers at 50% and above are the preferred seeds for lookalikes. [L1335, 2023+]
- Video audiences can be built from people who watched a set share of your videos, such as 95% or 75%, within a chosen number of days. Use this for video ad campaigns. [L1390, 2021-22]

### Website visitor audiences

- The website audience option only shows pixel events, so the pixel must be connected first. [L1335, 2023+]
- For a retargeting audience of website visitors without buyers:
  1. Create a Website audience from pixel events with a 90-day window. [L1335, 2023+]
  2. Exclude the purchase audience with the same 90-day window. [L1335, 2023+]
- When creating a website custom audience, the pixel is chosen at the top of the dialog, and URL rules only use data from that pixel. Choose the correct pixel first, or the audience will be empty even if the URL rule is right. [L1390, 2021-22]
- The dropdown "Include people who meet ANY of the following criteria" controls how several rules combine. ANY includes people who match at least one rule, so check this setting whenever you stack more than one condition. [L1390, 2021-22]
- Create a website custom audience:
  1. In Audiences, click Create a Custom Audience and choose Website. [L1390, 2021-22]
  2. Under People who visited specific web pages, choose URL and an operator such as contains, equals or doesn't contain. [L1390, 2021-22]
  3. For Shopify product pages, enter products as the URL value. [L1390, 2021-22]
  4. Set the time range, for example the last 7 days, using Further refine by... in the past X days. [L1390, 2021-22]
  5. Add a second URL condition to narrow the audience, for example product pages that also viewed a content page. [L1390, 2021-22]
  6. Use Include More People or Exclude People as needed. [L1390, 2021-22]
  7. Name the audience, optionally add a description, and click Create Audience. [L1390, 2021-22]

### Customer list audiences

- Create a customer list audience:
  1. Accept Facebook's terms for customer files. [L1390, 2021-22]
  2. Either paste the customer details in or upload a CSV file. [L1390, 2021-22]
  3. Use the customer file template exported from Shopify. It does not include lifetime value. [L1390, 2021-22]
  4. Include at least first name, last name and email. Add zip code and other fields if you have them, because more matching fields improve results. [L1390, 2021-22]

### Page engagement audiences

- Page engagement audiences include people who engaged with your Page, any post or ad, or clicked any call-to-action button. The example uses a window of 365 days. [L1390, 2021-22]

### Audiences overview

- In Facebook Ads Manager, go to Audiences. There are three options:
  - Create a Custom Audience: from customer list, website traffic, mobile app, Facebook page or video. [L1390, 2021-22]
  - Create a Lookalike Audience: from page likers, conversion pixels or existing custom audiences. [L1390, 2021-22]
  - Create a Saved Audience: from demographics, interests and behaviours. [L1390, 2021-22]
- Facebook is said to hold up to about 4,000 data points per user, and lookalike matching draws on that information. [L1390, 2021-22]

### Retargeting campaign timing and structure

- Start retargeting only after the ads have run for more than two weeks, so the pixel and ad account hold enough warm-audience data. [L1335, 2023+]
- ABO with one ad set per retargeting audience is the usual structure. [L1335, 2023+]
- CBO can be tested as an alternative if it performs better. [L1335, 2023+]

### Retargeting budget

| Source | Budget | When it applies | IDs |
|---|---|---|---|
| one source | $10 to $15 per day | Typical retargeting budget, because retargeting audiences are small and higher budgets would show the same ads repeatedly. | [L1335, 2023+] |
| one source | Test budget of 20 USD per day | Test campaign in the setup below. | [L1342, 2021-22] |

### Retargeting creative

- Retargeting ads work best as UGC-style images or testimonial videos with an added offer such as 10% or 20% off. Warm audiences already know the product and mainly need trust and a reason to buy. [L1335, 2023+]

### Step-by-step: retargeting traffic campaign with a static image ad

1. In Ads Manager, create a new campaign and choose the objective Traffic (send people to a website). [L1342, 2021-22]
2. Enter a campaign name. [L1342, 2021-22]
3. Turn off Create Split Test and turn off Campaign Budget Optimization. [L1342, 2021-22]
4. Set the daily budget (test budget: 20 USD). [L1342, 2021-22]
5. Set the bid strategy to Lowest cost. No bid cap or cost cap is used in this setup. [L1342, 2021-22]
6. Create the ad set and name it to describe the audience, for example the 7 to 14 day product viewers. [L1342, 2021-22]
7. Set the destination to Website. Do not turn on dynamic creative, and do not add an offer. [L1342, 2021-22]
8. Under audience, add the custom audience Product Viewers 14 Days and exclude Product Viewers 7 Days. This gives an audience of people who viewed products 7 to 14 days ago. [L1342, 2021-22]
9. Set location to the target country, and skip extra demographics. [L1342, 2021-22]
10. Keep placements on Automatic. [L1342, 2021-22]
11. Set optimization for ad delivery to Link clicks. [L1342, 2021-22]
12. Leave the schedule running continuously, unless it is a time-limited promotion that needs a start and end date. [L1342, 2021-22]
13. Create the ad: choose the Facebook page and the connected Instagram account so the ad can show on Instagram. [L1342, 2021-22]
14. Choose a single image or video, and add the media. [L1342, 2021-22]
15. Fill in primary text, headline and description, then set the destination website URL, display link and call to action. [L1342, 2021-22]
16. Facebook pixel tracking is loaded automatically from the store. Click Confirm to finish. [L1342, 2021-22]

### Lookalike audience principle

- A lookalike audience reaches new people who share characteristics with an existing source audience: customers, purchasers, video viewers, website visitors or engagers. [L1335, 2023+]
- It is created from custom audiences only. [L1335, 2023+]
- It is tested inside a campaign by selecting it at ad-set level. [L1335, 2023+]

### Creating a lookalike audience

- Create it from the Audiences section, or from a custom audience's actions menu by choosing Create lookalike. [L1335, 2023+]
- Choose the source and the countries, for example United States, United Kingdom, Australia or Canada. [L1335, 2023+]
- Select a percentage range: 0-2%, 2-4%, 4-6%, 6-8% or 8-10%. The 5 ranges give audiences of about 3 to 5 million people. [L1335, 2023+]

### Lookalike source quality

- Strong lookalike sources include 50%+ video viewers, 30-day website visitors, Facebook and Instagram engagers, and purchasers. [L1335, 2023+]
- Buyer lookalikes are the highest quality, so 0-1% and 1-2% lookalikes of purchasers are recommended. [L1335, 2023+]

### Testing lookalikes

- Test a lookalike audience in an audience testing campaign by adding it at ad-set level instead of any interest targeting. Winning creatives go inside. [L1335, 2023+]
- Add countries at ad-set level if they were not set in the lookalike. Otherwise the ad set is identical to a normal interest ad set. [L1335, 2023+]

### Advantage+ Shopping and remarketing measurement

- A new Meta Advantage+ Shopping campaign was launched with a starting budget of $20/day and an expected target of more than 10x ROAS. [L1509, undated]
- Updated creative for Meta remarketing ads was measured against a 90-day trailing CTR baseline of 5%, with the goal of raising CTR. [L1509, undated]

#### Further details

- Hot Traffic Dynamic campaign settings: buying type Auction, objective Catalog Sales, and campaign budget optimization turned on. A built product catalog is required before it can run. [L0649, 2019]

- Retargeting campaign structure: create a Sales campaign with manual setup and ABO budget, add one ad set per custom audience (middle-of-funnel video views, page engagement, Instagram engagement, website visitors), and place a start date of next day at midnight. [L1335, 2023+]


Part 32 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/31-retargeting-by-timing-and-funnel-position.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/33-lead-generation-engagement-and-audience-building.md
