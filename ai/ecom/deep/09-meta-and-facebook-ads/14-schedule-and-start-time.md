<!-- part of ecom/deep/09-meta-and-facebook-ads.md -->
Part 14 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/13-testing-architecture.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/15-bidding-cost-cap-bid-cap-and-automated-rules.md

### Schedule and Start Time

- Do not restrict Facebook ads to particular hours. Facebook learns the best times within about 1-2 days and spends very little, about a dollar, in low-converting hours. [L0363, 2022+]
- Launch Facebook ads about 3-4 hours before the scheduled start time so that the review can finish. The start time is set at the ad set level. [L0363, 2022+]
- Ad delivery can be scheduled around the hours when sales come in. The seller's best hours were 12 AM to 6 AM and 4 PM to 12 AM, and automatic rules paused ads during the midday hours. [L1127, 2024]
- Set the start date to the next day at 12:00 AM in the ad account time zone. A midnight start spreads budget over all 24 hours, while other start times can leave the ad set unspent for hours and then spend the whole budget in one hour. [L0648, undated]
- Starting a campaign late in the evening (for example 10 pm or 11 pm) makes spending abrupt, and the budget can be used up within two to three hours. Set the start date to the next day at midnight so Meta can pace the budget across the day. [L0647, 2024+]
- Set the start date and time to 12am in your local time on the next day. This is the start setting for new test ad sets. [L0376, undated]
- Schedule the start for midnight, local time, on the following day. [L0375, undated]
- Ad set > Schedule: leave the start date empty to launch when Meta approves the ad. To launch at a set time, such as midnight on a sale day, enter that start date and time in the Start date field. [L0865, 2025-26]
- Scheduled start and end times use the time zone of the ad account, not the time zone of the user or the website. When the ad account and the website are in different time zones, convert the times so the ad starts when the website change goes live. [L0865, 2025-26]
- Ad set > Schedule > End date: set an end date for time-limited sales, such as a sale from Saturday midnight to Tuesday midnight. Leave it off for evergreen campaigns. [L0865, 2025-26]
- Budget scheduling: leave it untouched. Keep the A/B test off until you set one up on purpose. [L0865, 2025-26]
- The seller's best-hour practice is a case; the rule against hour restrictions applies to standard setups. [L0363, 2022+; L1127, 2024]

### Advantage+ Settings

- Turn off the Advantage+ sales campaign recommendations at CBO campaign level. [L0348, 2026]
- Advantage+ campaign budget: turn on for CBO and enter the budget at campaign level. [L1193, 2026; L0865, 2025-26]
- Advantage+ audience: leave on for broad audiences. [L0348, 2026]
- Advantage+ placements: keep on. [L0642, undated; L0865, 2025-26]
- Advantage+ placements: use by default. [L0648, undated]
- Advantage+ placement at ad set level in one source's ad set procedure. [L0647, 2024+]
- Advantage+ campaigns: one ad set, several ads, budget on the ad set. [L1161, 2024+]
- Advantage+ sales campaign toggle: shown on in the recommended setup. [L0865, 2025-26]
- Advantage+ campaigns scale with the same strategy as other campaigns. [L1107, 2023]
- Show more settings contains Budget scheduling, A/B test, Audience segment reporting and Special ad categories. Leave Budget scheduling untouched, keep the A/B test off until you set one up on purpose, and only declare a special ad category if the ads are political, employment or finance related, which is rare. [L0865, 2025-26]

### Learning Phase

- Meta's learning phase: the algorithm tests the ad's creative, text and video against audiences and shifts delivery toward people who engage. Choosing a purchase conversion goal gives fewer events than choosing add to cart, but the events are more useful for a dropshipping business. [L0353, 2023]
- Start Facebook ads at a minimum of $50 per day; lower daily budgets do not gather enough learnings to leave the learning phase, so scaling takes longer. [L1016, 2026]
- Optimizing for conversions only after about 30 conversions. Below that, optimize for clicks. [L0643, 2015]
- New creatives in a scaling CBO may receive little or no spend, so they cannot be judged. [L1107, 2023]
- Under CBO, after about a week the campaign shifts most budget to the best interest ad set. [L0649, 2019]
- Learning-phase guidance for a new pixel: ABO keeps spending under control because a new pixel has no purchase data for Meta to optimize with. [L0647, 2024+]

### Ad Level: Identity, Creative, Destination and Previews

- Ad > Identity > Facebook Page: choose the page the ad runs from. If an Instagram account is linked to the page, Meta selects it automatically. Threads can be connected or the Instagram account can be used for it. Branding can be ignored. [L0865, 2025-26]
- Do not connect an Instagram account to the Facebook ad, because if a viewer taps the brand name and finds a neglected Instagram profile with few followers, the brand may look like a scam; without the connection, clicks go straight to the landing page. [L0642, undated]
- Ad > Ad setup > Create ad with Manual upload: upload your own image or video files from the computer. The option Products from your catalog is for showing catalog products, and Use existing post is for boosting a post that already exists. [L0865, 2025-26]
- Ad > Destination: enter the website URL people go to after clicking. Use a collection page or a product page. Leave the phone number empty for call options unless calls are wanted. [L0865, 2025-26]
- Ad > Destination > Use shop: keep it Default off. Shop checkout is an extra step that keeps people on the platform, and checkouts happen on the website anyway. [L0865, 2025-26]
- Ad > Creative > Source URL: leave empty. Meta can pull promo codes, email signup offers and site links from the website, which is usually not needed. [L0865, 2025-26]
- Ad > Creative > Product catalog: turn off the catalog section if the catalog is not fully optimized. Catalog products should only show below the ad when the catalog is optimized. [L0865, 2025-26]
- Ads Manager autosaves each change and shows 'All edits saved' or 'Verifying your edits' at the bottom of the screen. Wait for the saved message before leaving the page, so that the last change is not lost. [L0614, 2026]
- Draft campaigns and ads always show at the top of Ads Manager, no matter which campaign is selected. They do not mean the account is wrong, but they can make the list hard to read. [L0865, 2025-26]
- Ads Manager shows a campaign score next to new campaigns. A score of 100 with the note that the recommended setup is in use means the current campaign settings match Meta's suggested configuration. It is a setup check, not a measure of performance. [L0865, 2025-26]

### Creative Count and Copy Units

- Testing lane copy per creative: 3 primary texts, 3 headlines and 1 description. [L1019, 2026]
- Fill in primary text, headline, description and the call to action button (Shop now). [L0647, 2024+]

### Meta Account Management Principles

- Meta Ads Manager is used to create and manage the campaign, ad set and ad levels. [L1029, 2020-26]
- Start with the recommended setup, not an improvised one. Meta's Power Five framework: apply the recommendations first, then change only where they fail to produce profit. [L0649, 2019; L0491, 2026]
- Stay on the recommended structure for a first launch. [L0491, 2026]
- Keep the campaign on the default settings that Meta recommends, except where a test calls for a change. [L0348, 2026]
- Audience: Meta's learning is driven by the pixel's purchase data. [L0647, 2024+]
- Placements and schedule: let Meta optimize with automatic defaults. [L0648, undated; L0863, 2022; uncertain]

Remove any broken reference above and rely on the individual units cited.

### Where the Sources Disagree

- **Budget per ad set:** $50 per ad set for a single product with three creatives [L0348, 2026]; $10-15 per ad set for initial product tests [L0375, undated; L0376, undated]; $15 per ad set [L0645, 2023]; $5 per ad set for a new-store ABO test [L0642, undated; L0646, 2023]; $1/day is the minimum to keep a campaign active [L0643, 2015]; $50/day is the minimum for learning [L1016, 2026]. Use the higher budgets for multi-creative tests and the lower budgets for interest-by-interest tests on ABO.
- **CBO versus ABO:** CBO is the default for beginners, mid-stage accounts and scaling [L1019, 2026; L0865, 2025-26]; ABO is recommended for testing new interests, new stores and creative tests [L0642, undated; L0645, 2023; L0398, 2023+]; one source advises against ABO entirely [L0865, 2025-26].
- **Switching direction:** Move from ABO to CBO after purchase data [L0647, 2024+]; switch to ABO after real purchase data [L1019, 2026]; switch from CBO to ABO after around 80-100 purchases [L1195, 2026]. Read these as different phases: CBO→ABO after the CBO has rich data for cost-cap control [L1195, 2026], and ABO→CBO once Meta can use the purchase data for allocation [L0647, 2024+].
- **Number of testing CBOs:** Two separate CBOs for the test [L1021, 2026]; up to two testing CBOs in parallel [L1195, 2026]; three CBO campaigns in parallel [L1212, undated; L0693, 2024]; a main CBO plus CBO 1 and CBO 2 [L1019, 2026]. Keep at most two testing CBOs in parallel and no more than three in total [L1195, 2026].
- **Campaign count:** one CBO with one broad campaign [L0037, 2026]; 2-5 campaigns as Meta's guidance [L0637, 2023+]; a seven-campaign account structure [L0649, 2019]; a single product per campaign [L0874, 2026]. Use one campaign per product (for multi-product, one campaign per product) [L0874, 2026], and keep the account structure small.
- **Ad sets per test:** 6-10 interest ad sets [L0375, undated; L0376, undated]; 7-8 [L0645, 2023]; 5 [L0647, 2024+]; 4 per CBO [L0693, 2024]; 4 duplicates to make five [L0642, undated]. Use 5 ad sets for a single-interest test with 15 ads [L0647, 2024+].
- **Creatives per ad set:** 3 [L0348, 2026; L0645, 2023]; 3-5 [L1019, 2026; L0375, undated; L0376, undated]; at least 3 [L0647, 2024+]; 2-3 minimum in CBO [L0398, 2023+; L0645, 2023].
- **Age:** usually 21 and above [L0375, undated; L0376, undated]; 18 to 65+ [L0647, 2024+]; 25+ for a Swiss German test [L0642, undated].
- **Start time:** midnight local time or 12:00 AM [L0375, undated; L0376, undated; L0647, 2024+; L0648, undated]; 6:00 a.m. as the presenter's own choice with 12 p.m. or 12 a.m. also working [L0642, undated].
- **Hour restrictions:** do not restrict hours [L0363, 2022+]; seller's best hours were 12 AM to 6 AM and 4 PM to 12 AM [L1127, 2024].
- **Campaign-level audience:** keep one broad campaign with no interest tests [L0037, 2026]; test one interest per ad set in ABO [L0647, 2024+].
- **Advantage+ audience:** leave on [L0348, 2026]; switch to the original audience to keep one interest per ad set [L0647, 2024+].
- **Placements:** Automatic or Advantage+ placements as the default [L0865, 2025-26; L0648, undated; L0642, undated]; manual placements only when data shows a specific placement wins [L0773, 2023; L0648, undated].
- **Conversion objective:** Purchase for every test [L0647, 2024+; L0865, 2025-26]; Clicks while below 30 conversions [L0643, 2015].

### Account Structure and Objectives

- The Sales objective is the setting for Advantage+ shopping campaigns. Select Sales, then Advantage+ shopping campaign [L1335, 2023+].
- For cold traffic selling products on Facebook, conversion campaigns are the usual objective [L1342, 2021-22].
- Retargeting is often run as a traffic campaign, because conversion campaigns need a steady number of conversions in a set period before the algorithm optimizes well [L1342, 2021-22].

### Advantage+ Shopping Campaigns

#### Eligibility

- Use Advantage+ shopping campaigns only with more than 400 purchases over the last couple of months [L1335, 2023+].
- Include the existing-customer setting in account settings once the account has solid sales [L1335, 2023+].
- Advantage+ shopping campaigns require a minimum budget of at least $50 [L1335, 2023+].
- They are based on the account's own purchase and engagement history (pixel data) and use broad targeting [L1335, 2023+].

#### Field Settings

- Conversion location: website. Use website and shop only if Shop is enabled [L1335, 2023+].
- Countries: select the top 5 countries by performance [L1335, 2023+].
- Custom audience: add a custom purchase audience of the last 180 days when the account has enough sales [L1335, 2023+].
- Budget and start: set a minimum budget of $50 and a start time of the next day at midnight [L1335, 2023+].
- Ads: add at least 3 to 5 of the best-performing ads [L1335, 2023+].

#### Setup From a Proven Campaign

Setting up an Advantage+ campaign from a proven campaign:

1. Choose the campaign that is performing best with your strongest ads. [L1316, 2024+]
2. Duplicate that campaign. [L1316, 2024+]
3. When Facebook offers a manual setup or Advantage+, select Advantage+. [L1316, 2024+]
4. Set only the country, age and gender targeting. [L1316, 2024+]
5. Leave all other targeting decisions to Facebook. [L1316, 2024+]

### CBO and ABO: Choosing the Budget Level

- Use CBO when it works for the account. The platform then shifts budget to the best-performing audience pocket [L1335, 2023+].
- If CBO does not perform, ABO is the fallback [L1335, 2023+].
- Campaign-level budgets hand control to the algorithm. Ad-set budgets keep control with the advertiser [L1335, 2023+].
- Use ABO when testing, because it gives control over spend per ad set [L1345, 2021+].
- CBO works when the account already has winning audiences and winning creatives. It may fade after about a week [L1345, 2021+].

### Testing Campaign Architecture

#### ABO Product Test

- A product-testing ABO campaign with five ad sets at 8 GBP daily budget each (UK) gives a total daily spend of 40 GBP [L1220, undated].
- The campaign-level daily spending limit must also be at least that amount, or it will cap spend [L1220, undated].

#### CBO Creative Test

- If you run creative testing as a CBO campaign to spend more, set a minimum ad spend per ad set of 3 to 5 USD [L1316, 2024+].
- This forces Meta to spend roughly evenly on each ad, so every creative gets enough data [L1316, 2024+].

#### CBO Audience Test on a Small Budget

- When testing with a CBO campaign on a budget of about $50 to $100 per day, set a minimum spend per ad set of roughly $15 to $20 [L1345, 2021+].
- This ensures each audience gets enough spend to show its performance and stops one audience from taking the whole budget before the others are tested [L1345, 2021+].
- The goal of this kind of test is to find winning audiences and creatives, not to be profitable yet [L1345, 2021+].

Which minimum applies: use 3 to 5 USD per ad set for creative tests [L1316, 2024+]. Use roughly $15 to $20 per ad set when the CBO budget is about $50 to $100 per day and the test is for audiences [L1345, 2021+].

### Pockets and Audience Splitting

- In a CBO (Advantage campaign budget) or ABO setup, a pocket is the slice of an ad set's audience the platform is currently delivering to [L1335, 2023+].
- The algorithm moves spend toward the pockets that perform best on a given day [L1335, 2023+].
- For this reason, one broad audience can be split across several ad sets to reach different pockets [L1335, 2023+].

### Editing Launch Dates and Budgets in CBO

- To change the launch date of several ad sets in a CBO campaign at once, click the first ad set, hold Shift and click the last ad set, then edit the date. The change applies to all of them [L1335, 2023+].
- Leave ad-set budgets empty, because the budget is set at campaign level [L1335, 2023+].

### Learning Phase and Edits

- The ad algorithm keeps optimizing in the background [L1445, 2026].
- Changing campaigns too early resets that optimization [L1445, 2026].
- Let a campaign finish learning before judging or editing it [L1445, 2026].

### Retargeting Settings

- For a traffic retargeting test, set Settings > Campaign > Campaign Budget Optimization to Off. Campaign Spend Limit is optional and was left unset in this setup [L1342, 2021-22].
- Set Settings > Ad set > Optimization for ad delivery to Link clicks. Other options such as Landing page views, Impressions or Unique daily reach exist, but link clicks is the setting used here [L1342, 2021-22].
- Set Settings > Ad set > Dynamic creative and offers: leave dynamic creative off and do not add an offer for standard static retargeting. An offer such as a coupon can be tested later in an irresistible offer ad [L1342, 2021-22].
- Set Settings > Ad set > Schedule: for ordinary retargeting, run continuously from the start date. For a time-limited campaign, such as a Black Friday offer, use a start and end date that matches the promotion length [L1342, 2021-22].


Part 14 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/13-testing-architecture.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/15-bidding-cost-cap-bid-cap-and-automated-rules.md
