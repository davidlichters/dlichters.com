<!-- part of ecom/deep/09-meta-and-facebook-ads.md -->
Part 13 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/12-campaign-structure-cbo-abo-objectives-and-budget-s.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/14-schedule-and-start-time.md

### Testing Architecture

#### Testing Structures

- Starting test on Meta: one ABO campaign with 6-10 ad sets, each targeting a single interest, at $10-15 per day per ad set. Each ad set runs 3-5 different creatives. [L0375, undated; L0376, undated]
- Testing campaign structure: an ABO campaign with 7 to 8 ad sets, each targeting one single interest, starting at about $15 budget per ad set, and three ads with different creatives inside each ad set. [L0645, 2023]
- Testing structure: one ABO campaign with five ad sets, each ad set targeting exactly one interest, and at least three creatives (image or video) per ad set, which makes 15 ads in total. [L0647, 2024+]
- Test three CBO campaigns, each with the amount you are willing to spend. When one CBO campaign wins, increase its budget to reach more people from the same audience. [L1212, undated]
- Launch three CBOs with the same budget and targeting, put four ad sets in each CBO with identical settings, and after a few days keep the one or two CBOs that perform and turn off the rest. [L0693, 2024]
- Launch the same ads in two separate CBO campaigns, turn on budget sharing so Meta can split the budget across ad sets, give each ad set one main concept, add 3 to 5 variations per ad set using different hooks, scripts or angles, start with a $75 budget, and scale the budget aggressively in steps of $150, $300, $500, $750 and $1,000, continuing higher if the results hold. The goal of this phase is to identify the winning creatives and angles. [L1021, 2026]
- Testing campaign setup for two CBO testing lanes: Main CBO prepared for bid cap stays unpublished; CBO 1 for Kalo rips and CBO 2 for custom ads. [L1019, 2026]
- Testing lane: ABO testing campaign on cost cap with tROAS or tCPA, one ad set per creative batch, and per creative 3 primary texts, 3 headlines and 1 description. [L1019, 2026]
- Set up the main CBO plus one testing CBO, with one concept per ad set and 3-5 creatives in each ad set. [L1019, 2026]
- The base Meta testing unit is one ad set holding one concept with 3-5 creatives, all inside one CBO. [L1019, 2026]

#### Country-Based Test Structures

- For English-speaking markets such as the US, Australia, New Zealand and Canada, starting with a single-interest ad set at 5 dollars worked better, while several similar interests in one ad set at 5 dollars worked better for German-speaking markets. Choose the test structure per country rather than using one template everywhere. [L0646, 2023]

#### Testing Principles

- Launching a CBO campaign with only one winning creative limits the ad delivery, so add two to three creatives even when one ad keeps producing sales. More creatives give Facebook more options and usually improve overall performance. [L0645, 2023]
- Use ABO for testing because it gives control over how much budget each interest gets. Use CBO only for scaling with known winning interests and creatives. [L0645, 2023]
- Facebook prefers the older creative with more engagement and sales data, so a new creative placed beside a proven winner will receive little spend; always split them into separate ad sets. [L1177, 2023]
- Use separate ad sets for each new creative test, and keep the winning ad set as a control, so the spend follows the new creative results rather than the old winner. [L1177, 2023]
- Testing a product with ABO for multi-product tests: all products in the same campaign and pixel should belong to the same category (for example all construction books, not a mix of nursing and plumbing). Mixing categories under one pixel makes the test harder to read, although Meta's algorithm is capable of handling it. [L0348, 2026]
- Testing campaigns are meant to run for a short window. [L1195, 2026]
- Testing both structures in your own account, with automatic rules running overnight so that no manual checks are needed. [L0693, 2024]
- one source's Sandbox campaign: 2 ads per test (1 control, 1 variation) to split-test creatives without affecting core campaigns. [L0238, 2019; L0649, 2019]
- Mistake: Using a single creative inside a CBO test limits delivery. See [L0645, 2023].
- Power Five framework: start with the recommendations and adjust only where they fail to produce profit. [L0649, 2019]

#### Multi-Product ABO Setup

1. Create one campaign with Campaign budget off (Advantage+ campaign budget off) and set the budget at ad set level. [L0348, 2026]
2. Set the Budget strategy to Ad set budget, and leave Ad set budget sharing and Advantage+ options at default unless a test calls for changes. [L0348, 2026]
3. A common starting budget is $50 per ad set for one product with three creatives, so the money is divided per creative (for example $50 divided by 3 creatives). Products can be set at $25, $50 or $100 depending on how aggressively you test each product. [L0348, 2026]

#### Ad Set Budget Sharing (ABO)

- When ad set budget sharing is turned on, Meta shares up to 20% of an ad set's budget with other ad sets in the same campaign when it is likely to improve performance. Turn it off if you want the budget to stay strictly in each ad set for testing. [L0348, 2026]
- Conflicting setting: one source' CBO testing structure turns budget sharing on, while one source' ABO test turns it off for strict testing. Use budget sharing on for CBO tests and off for strict ABO tests. [L1021, 2026; L0348, 2026]

### Scaling Architecture

- Stay on CBO while scaling with known winning concepts; Main CBO holds only proven concepts, stable spend, winners folded back in. [L1195, 2026]
- Scale proven concepts in the main CBO and test ripped winners in CBO 2. [L1195, 2026]
- Advantage+ campaigns are scaled with the same strategy used for other campaigns. They use a single ad set, so you add new creatives when old ones die out. [L1107, 2023]
- Scaling with ABO is a mistake; move winners to a CBO for scaling. [L0348, 2026]
- Use CBO only for scaling with known winning interests and creatives, because CBO would otherwise concentrate spend on one interest and starve the rest of the test. [L0645, 2023]
- Once an interest is already profitable on ABO, use CBO for scaling. [L0645, 2023]
- When a winner is scaled into CBO or cost-cap campaigns, Meta controls the spend allocation. [L0398, 2023+]
- Testing with Meta's recommended budget first, then scale. [L0491, 2026]

### Campaign Counts and Account Structure

- Meta's guidance prefers a simple account structure with about 2-5 campaigns. The source's practical setup is 1 campaign, 1 ad set and 1 ad, so avoid many complicated ad structures. [L0637, 2023+]
- Use a simplified account structure with a few campaigns and very broad targeting, not dozens or hundreds of hyper-segmented ad sets. Let the pixel find the buyers through its data. [L0649, 2019]
- Hyper-stacked targeting with interest, online-shopper behavior, household income above $100,000, cities, gender, age brackets and single placements produced huge numbers of ad sets. It needed about 50 hours per week from three people. [L0649, 2019]
- Use one CBO with one broad campaign. Do not test different interests or add multiple account strategies. [L0037, 2026]
- Conflicting guidance: one source's new-store procedure tests several interests in ABO ad sets inside one campaign, which contradicts the single-campaign rule in [L0037, 2026]. Apply [L0037, 2026] for a mature account with proven broad targeting; apply the ABO interest tests when a new store must compare interests. [L0037, 2026; L0642, undated]
- Meta's Power Five framework has five parts: auto advanced matching, a simplified account structure with few broad campaigns, campaign budget optimization, automatic placements, and dynamic ads for remarketing. Apply all five first, then change only the parts that fail to produce profit. [L0649, 2019]

#### Testing Campaign Counts

- Recommended campaign structure: a main CBO prepared for bid cap that stays unpublished, plus CBO 1 for Kalo rips and CBO 2 for custom ads. Each additional CBO fragments the data further. [L1019, 2026]
- Running two or more testing CBOs cannibalises CPC and CPM in the short term, but it is still the fastest route to a winning creative. [L1019, 2026]
- Running several CBOs at once causes short-term cannibalization: your campaigns compete in the same auctions and CPC and CPM rise. Accept this as a temporary cost for faster winner discovery, since testing campaigns are meant to run for a short window. [L1195, 2026]
- Run at most two testing CBOs in parallel to avoid data fragmentation. Opening more than three CBOs in total fragments the data across the account. [L1195, 2026]
- Keep the number of CBOs low. Start with the main CBO and CBO 2, and open CBO 3 only when budget allows. Never run four or five CBOs, because that fragments the data. [L1195, 2026]
- Testing campaign for two separate CBOs: the same ads launched in two separate CBO campaigns. [L1021, 2026]

#### Campaign Structure Table

| CBO | Purpose | Contents |
|---|---|---|
| Main CBO | Scale proven concepts | Only proven concepts, stable spend, winners folded back in |
| CBO 2 (Kalodata rips) | Test ripped winners | Kalodata winners, ripped and re-cut, 3-5 creatives per concept |
| CBO 3 (custom ads) | Test new messaging | VSLs or statics built from your research: new pain point, avatar, or messaging |

[L1195, 2026]

### Ad Sets per Campaign, Creatives per Ad Set and Concepts

#### Ad Sets and Creative Counts

- Creative count per ad set: a typical CBO test ad set holds 3 creatives, and the first round of a product test uses about 9 creatives in total across ad sets. Creatives are added by duplicating the ad set; a test with 4 products would be repeated for each product. [L0348, 2026]
- Maximum 20-25 ads per Facebook ad set; when adding new creatives to an existing ad set, do not exceed 20 ads total. [L0207, 2025-26]
- Add at least two to three creatives to each ad set in a CBO so delivery is not concentrated on a single ad. [L0398, 2023+; L0645, 2023]

#### Ad Set Naming and Duplication for CBO Test

1. Create one CBO campaign with one ad set and three creatives. [L0348, 2026]
2. Name the first ad set AdSet 1 for reference. [L0348, 2026]
3. Duplicate the ad set as AdSet 2 and rename the ads B1 to B6, testing the first six creatives. [L0348, 2026]
4. Continue with the same method on day 3 with the next creatives, giving a total of nine creatives in the first round (B1 to B9). [L0348, 2026]
5. Keep the same CBO and duplicate it for each further batch of creatives: AdSet 4, AdSet 5, AdSet 6, AdSet 7. [L0348, 2026]

#### Duplicating the Ad Set

1. Tick the first ad set and click Duplicate, choosing four copies. [L0647, 2024+]
2. In each copy, change only the audience: open Suggestions, pick one new related interest, and remove the previous interest so only one remains. [L0647, 2024+]
3. Rename the ad set to match the new interest. [L0647, 2024+]
4. Leave the ads and all other settings as they are, because the duplicate already carries them. [L0647, 2024+]

#### Concepts per Ad Set

- One ad set holds one concept, defined by one avatar and one angle, with 3-5 creatives inside. Never mix different concepts in one ad set, because you will not know which message did the work. [L1195, 2026; L1019, 2026]
- The base Meta testing unit is one ad set holding one concept with 3-5 creatives, all inside one CBO. [L1019, 2026]
- Never mix two concepts inside one ad set, because then you cannot tell which message caused the result. [L1019, 2026]
- A concept can be a specific pain point or promise, a distinct messaging angle, a demographic cut (ethnicity, age group, life stage), or an avatar with different objections. Variations of the same message share one ad set, while a new message gets its own ad set. [L1195, 2026]
- Per creative in the ABO testing lane: 3 primary texts, 3 headlines and 1 description. [L1019, 2026]
- Tests with two CBOs: one concept per ad set and 3-5 creatives in each ad set. [L1019, 2026]
- Creative tests with 3-4 ads per dynamic campaign and 3-4 unique ads per promotion, as in the campaign type table. [L0238, 2019]

#### Ad Set Creation

1. Name the ad set: date first, then audience, then country, then placement. [L0647, 2024+]
2. Under Conversion, choose Website. [L0647, 2024+]
3. Performance goal: Maximize number of conversions. [L0647, 2024+]
4. Pixel: select the pixel connected to your Shopify store. [L0647, 2024+]
5. Conversion event: Purchase. [L0647, 2024+]
6. If Meta shows a warning about choosing another conversion event and your Purchase tracking is set up correctly, ignore it and continue. [L0647, 2024+]
7. Turn off Dynamic creative for the testing phase. [L0647, 2024+]
8. Budget and schedule: set the daily budget for the ad set from the price tier. Start date: the next day, at midnight. [L0647, 2024+]
9. Locations: click Edit and target the top four or five countries, e.g. United States, Canada, Australia, New Zealand and United Kingdom. [L0647, 2024+]
10. Advantage+ audience: click Switch to original audience. [L0647, 2024+]
11. Age: 18 to 65+. Gender: select all unless the product is for one gender only. [L0647, 2024+]
12. Detailed targeting: add one interest only. [L0647, 2024+]
13. Placements: choose Advantage+ placement. [L0647, 2024+]

#### Ad Level Setup

1. Name the ad after its video or its angle (e.g. Video 1 if nothing better fits). [L0647, 2024+]
2. Select the Facebook Page that represents the brand. If the store has its own Instagram account, use it too; otherwise a Facebook Page can also show ads on Instagram. [L0647, 2024+]
3. Click Create ad, then Manual upload, then Single image or video. [L0647, 2024+]
4. Under Ad media, click Add video and upload the file from your computer. Trimming is optional. Check that the dimensions are shown as fine. [L0647, 2024+]
5. Click Next, then Done. [L0647, 2024+]
6. Fill in primary text, headline, description and the call to action button (Shop now). [L0647, 2024+]
7. Destination: paste the product page URL. [L0647, 2024+]
8. Set up the URL parameters in the Tracking section. [L0647, 2024+]

#### Advantage+ Campaign Creation

1. Duplicate the campaign. [L1161, 2024+]
2. When asked, choose Advantage+ instead of manual settings. [L1161, 2024+]
3. The result is one ad set containing several ads, and the budget is set on that ad set. [L1161, 2024+]

### Bid Strategy and Performance Goal

- Campaign bid strategy: start with Highest volume or value. Other options are Cost per result goal, ROAS goal and Bid cap. Those options change how Meta bids in auctions and should only be used once you know why you need them. [L0865, 2025-26]
- Set the campaign bid strategy to highest volume. [L1193, 2026]
- CBO campaign level: leave Campaign bid strategy at its default. [L0348, 2026]
- Ad set > Conversion > Performance goal: use Maximize number of conversions for nearly all accounts. Maximize value conversions is only for specific cases, and the other options in the dropdown are not used for standard sales campaigns. [L0865, 2025-26]
- Performance goal: Maximize number of conversions. [L0647, 2024+; L1193, 2026]
- Testing lane: ABO testing campaign on cost cap with tROAS or tCPA. [L1019, 2026]
- Bidding to clicks at ad set level while the campaign has fewer than 30 conversions. [L0643, 2015]
- Optimizing an ad set for Conversions only makes sense after it has about 30 conversions. Below that threshold Facebook does not have enough data, so optimize for clicks instead. [L0643, 2015]
- Value rules let Meta value different audiences differently. It is complex and not needed for standard setups, so leave it disabled. [L0865, 2025-26]

### Conversion Event and Conversion Location

- Ad set > Conversion > Conversion location: choose Website. The old Website and shop option no longer exists, so traffic from ads goes to the website where checkout happens. [L0865, 2025-26]
- Use Website as the conversion location and Purchase as the objective. Other objectives such as engagement, traffic or link clicks deliver cheap traffic that rarely converts and gives weak data. [L0648, undated]
- Ad set > Conversion > Conversion event: select Purchase every time for sales campaigns. [L0865, 2025-26]
- Ad set conversion event: set to Purchase, and make sure the conversion location is website. [L0348, 2026]
- Pick your own pixel and set the conversion event to Purchase. [L0375, undated; L0376, undated]
- Optimizing for Add to Cart, Initiate Checkout or Traffic produces many of those events but few purchases, because these attract lower-intent users. For testing, always choose Purchase as the conversion event. [L0647, 2024+]
- Choosing a purchase conversion goal gives fewer events than choosing add to cart, but the events are more useful for a dropshipping business. [L0353, 2023]
- If Meta shows a warning to choose another conversion event and your Purchase event is set up correctly, the warning can be ignored. [L0647, 2024+]
- Confirm the correct pixel dataset is selected at campaign level. [L0348, 2026]
- Select the new pixel for the ad set. [L1193, 2026]

### Ad Set Audience and Targeting

#### Locations and Age

- Ad set audience: choose the top 4 countries by sales (for example only the United States if the product ships only there), set the age range wide, and leave Advantage+ audience on. [L0348, 2026]
- Target ePacket or T5 countries (US, UK, CAN, AU, NZ). [L0375, undated; L0376, undated]
- Usually the age range begins at 21. [L0375, undated]
- Age normally 21 and above. [L0376, undated]
- Locations: United States, United Kingdom, Australia, New Zealand and Canada. [L1193, 2026]
- Locations: United States, Canada, Australia, New Zealand and United Kingdom. [L0647, 2024+]
- Age 18 to 65+. Gender: select all unless the product is for one gender only. [L0647, 2024+]
- Test location example: Switzerland, age minimum 25+, with German as the language because the ads are in German. [L0642, undated]

#### Interests and Audience Structure

- Use one interest only per ad set; each ad set targets exactly one interest. [L0647, 2024+; L0645, 2023]
- Leave the audience settings broad. [L1193, 2026]
- Leave the first ad set as Broad (no interests) with German as the language. [L0642, undated]
- Testing with interests versus broad: one source's practice is simplified, very broad targeting; one source's tests use one interest per ad set. [L0649, 2019; L0647, 2024+]
- Example ad set with three ads, so the platform compares three creatives against the same audience. Testing several creatives in one ad set is a common way to find which ad gets engagement and conversions. [L0353, 2023]
- Use placement and device targeting at ad set level to show ads only on mobile, desktop, iPhone or iPad, and even on specific device models. Combined with interest targeting, this makes the message very specific, for example a Star Wars phone case shown only to people with the matching phone model who like Star Wars. [L0643, 2015]
- Hyper-stacked targeting produced huge numbers of ad sets and needed about 50 hours per week from three people. [L0649, 2019]
- Facebook ad campaigns run on Facebook and Instagram together, so a product tested on Facebook also reaches Instagram placements by default. [L1212, undated]
- Under ABO test campaigns, each ad set targets one precise interest. [L0641, 2014]
- Expand the audience to the broadest set and let the pixel find the buyers. [L0649, 2019]

#### Advantage+ Audience

- Advantage+ audience: leave it on. [L0348, 2026]
- Advantage+ audience: click Switch to original audience. [L0647, 2024+]
- Advantage+ audience and manual interests produce conflicting instructions: one source keeps Advantage+ audience on, while one source's ad set procedure switches to the original audience to keep one interest per ad set. Use Advantage+ audience on for broad-audience accounts and switch to the original audience when a single interest test is required. [L0348, 2026; L0647, 2024+]

### Placements

- Start on automatic placement. After a few days with sales, break down by placement and, if Facebook Feed and Instagram Feed perform best, switch from automatic to manual placement and choose only Facebook Feed and Instagram Feed. Story ads should be kept only if they show traffic or sales. [L0773, 2023]
- Placements must stay on Automatic with Advantage+ placements on. Choosing individual placements manually restricts delivery and should not be done. [L0865, 2025-26]
- Use Advantage+ placements by default. Switch to manual placements only when you know your audience uses specific placements, for example Facebook feed only for a product aimed at people aged 50+ with knee pain. [L0648, undated]
- Advantage+ placements let Meta test feeds, Instagram, Marketplace and other placements, then move budget to the best-performing placement after one to two days of data. This removes the need to find the best placement manually. [L0648, undated]
- Manual placements restrict delivery to the placements you pick, such as only Facebook Feed and Instagram Feed, and Meta does not recommend this. Advantage+ placement lets Meta find the best placements automatically across feeds, stories, Messenger and Reels. [L0647, 2024+]
- Leave placements on Automatic (ad set level). [L0375, undated; L0376, undated]
- Automatic placements: let Meta distribute one ad across all placements instead of building separate ad sets per placement. Meta moves budget to the placement where return is highest and pulls it back when that return drops. [L0649, 2019]
- Meta placements include Facebook desktop and mobile news feed, the right-hand column, Facebook Stories, Instagram Stories, Audience Network (ads on partner apps and websites), Marketplace, Messenger and WhatsApp. [L0649, 2019]
- Ad previews list the placements where the ad can appear: Feeds, In-stream ads for reels, Stories, Status, Reels, Apps and sites, and Facebook Search results. Advantage+ placements chooses these automatically, so the preview is the quickest check of where the warm-up ad will be shown. [L0614, 2026]
- Leave placements on Advantage+ placements. [L0642, undated]


Part 13 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/12-campaign-structure-cbo-abo-objectives-and-budget-s.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/14-schedule-and-start-time.md
