<!-- part of ecom/deep/16-retargeting.md -->
Part 4 of 10 of "16. Retargeting: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/16-retargeting.md · Previous: https://dlichters.com/ai/ecom/deep/16-retargeting/03-building-meta-youtube-and-other-platform-audiences.md · Next: https://dlichters.com/ai/ecom/deep/16-retargeting/05-retargeting-ad-types-and-creative.md

## Dynamic Product Retargeting on Google

### Concept and Scope

- Dynamic remarketing on Google targets people who viewed products on your store but did not buy. The ads show those exact products and link to the same product pages [L0163, undated; L0168, undated; L0586, 2020-26].
- Dynamic ads are the most important form of Google retargeting because they perform best. Standard display and YouTube remarketing are also possible, but test them for profitability first [L1357, 2018].
- Dynamic ads are the fifth element of the Power Five and drive dynamic remarketing [L0649, 2019].
- Dynamic ads are the form of Google remarketing to use with Shopping ads so customers see the products they viewed [L0964, 2023].
- Dynamic ads pull images and links from the product feed, so each viewer sees their own products. Each image links to its own product page. A static display ad shows the same image and destination to everyone [L0733, 2020-26].
- Dynamic ads pull products from the Merchant Center feed based on each visitor's views. Clicking an ad opens the exact product, so no product-level setup is needed in the ad itself [L0734, 2020-26].
- Dynamic display retargeting follows visitors across the Google Display Network, including when they browse other websites [L0558, 2020-26].
- Dynamic ads automatically show products the visitor already looked at, including items added to cart [L0276, 2024].
- Google remarketing ads also appear on any website monetised by Google AdSense, including eBay, without special configuration. *(Older advice, 2021. The unit heading names Facebook, but its rule describes Google remarketing.)* [L0270, 2021]

### Feed and Product Requirements

- Dynamic ads show products from your product feed. A new store with an empty feed shows no products, so the feed must contain your products before the ads are useful [L0558, 2020-26].
- Google Display remarketing campaigns update automatically when the product feed changes in Merchant Center [L0189, undated].
- Products used in dynamic display ads must pass Shopping ads policy review. Until they pass, they may show as disapproved or invalid for that destination. ** [L1170, 2021-22]

### Visitor Tagging and Tracking

- Dynamic retargeting requires each visitor to be tagged with the products they viewed. This is what makes product-specific ads possible [L0558, 2020-26].
- Custom code for this tagging often breaks after Shopify platform updates. For non-developers, a maintained app is the lower-risk option [L0558, 2020-26].

### ROI Hunter Setup

Use ROI Hunter as the standard route for non-developers. Installation and sync take a couple of minutes, and no custom code is required [L0558, 2020-26].

1. Search the Shopify App Store for ROI Hunter and open the app by ROI Hunter [L0558, 2020-26].
2. Click Get to install the app [L0558, 2020-26].
3. Run the quick sync. It asks for your starting budget and other initial settings [L0558, 2020-26].
4. Optionally preview the ads and upload your logo [L0558, 2020-26].
5. Confirm that the three display campaigns and their audiences were created automatically [L0558, 2020-26].
6. Manage all further campaign changes in Google Ads, not inside Shopify [L0558, 2020-26].

### ROI Hunter Campaigns and Audiences

- ROI Hunter creates three separate display campaigns [L0558, 2020-26]:

| Campaign | Audience it targets |
|---|---|
| Dynamic Remarketing for Product Viewers | Product Viewers |
| Dynamic Remarketing for Category Viewers | Category Viewers |
| Dynamic Remarketing for Cart Abandoners | Cart Abandoners |

- ROI Hunter creates these smart audiences automatically in Google Ads. The default lookback window is 7 days [L0558, 2020-26]:
  - Cart Abandoners (past 7 days) [L0558, 2020-26]
  - Category Viewers (past 7 days) [L0558, 2020-26]
  - Product Viewers (past 7 days) [L0558, 2020-26]
- At first launch, keep the default audience conditions instead of editing them [L0558, 2020-26].
- Editing conditions is optional and only worth doing once you have data to test against [L0558, 2020-26].
- To edit conditions, open the audience in Google Ads Audience Manager and use the edit list option. The audiences appear under their names, for example Cart Abandoners, Category Viewers and Product Viewers [L0558, 2020-26].

### Management and Optimisation

- The only ongoing adjustment is increasing the daily budget as the store scales [L0189, undated].
- You do not optimise dynamic ads directly. Improvement comes from increasing the volume of qualified visitors to your store [L0276, 2024].

### Expected Clicks, Conversions and Cost

- Dynamic retargeting on the Display Network usually produces cheaper clicks and higher conversion rates than standard retargeting, because the ads show the products the visitor already looked at [L0558, 2020-26].

## Dynamic Product Ads on Meta

### Retargeting Window by Product Price

- Dynamic product ad retargeting window depends on product price. Rule of thumb: [L0510, 2018]

| Product price | Retargeting window |
|---|---|
| Under $100 | 7 days |
| $100 to $500 | 14 days |
| $500 to $1,000 | 30 days |
| Over $1,000 | Longer window |

- For most advertisers, 30 days is a suitable starting point. [L0510, 2018]
- Test the windows. The longer the sales cycle, the longer the retargeting window should be. [L0510, 2018]

### Setup Requirements

- Dynamic retargeting shows people the exact products they viewed on the site. [L1203, 2016]
- It requires the Facebook pixel on the site and an uploaded product feed. [L1203, 2016]
- It is the fourth campaign type to launch. [L1203, 2016]

### Format and Creative

- The usual dynamic retargeting format is a carousel that shows the viewed product and related accessories. The product and price are visible, so people recognize what they looked at, which makes them more likely to click. [L0510, 2018]
- Dynamic product ads are the main Meta remarketing format. They show the products a visitor actually viewed on the store, with product images, descriptions and text filled in automatically per visitor. They run across Facebook, Instagram and Messenger. [L1020, 2020-26]
- Example: a jewelry store visitor views three specific rings or necklaces on the site and then leaves. Later, on Instagram, the visitor sees those three exact products in an ad with a Shop now button that leads back to them. [L1020, 2020-26]

### Improving Dynamic Product Ads

1. Review the dynamic product ads every two weeks and ask what can be improved. [L0510, 2018]
2. Set the audience duration by product price and sales cycle, usually starting at 30 days. [L0510, 2018]
3. Use dynamic text in the primary text that shows the product name and price. [L0510, 2018]
4. Add a price overlay to the image to make the price visible. [L0510, 2018]
5. If the audience is small, use link clicks as the optimization event instead of website conversions. [L0510, 2018]

### Landing Pages

- Mistake: sending paid traffic to the homepage loses buyers. Each product in a multi-product ad should link to its own product sales page where the customer can enter payment, not to the store homepage. [L0643, 2015]
- Dynamic multi-product ads were a fairly new format, about six to twelve months old at the time. Facebook's automatic ordering of products by best sales was being phased out, so do not rely on it to show your top seller first. [L0643, 2015]

### Cross-Device Behavior

- Facebook can recognize the same shopper across devices. A visit on a work desktop can lead to a retargeting ad on a personal phone later. [L0510, 2018]
- Results are less predictable for B2B products with longer sales cycles, because the ad may be seen at a different time and on a different device than the original visit. [L0510, 2018]

### Remarketing Workflow

1. A qualified visitor arrives at the store through a targeted search such as Google or Bing and views a product page. [L1020, 2020-26]
2. The visitor leaves the store without buying. [L1020, 2020-26]
3. Meta Ads Manager shows the visitor an ad for the product or products they looked at. [L1020, 2020-26]
4. The visitor clicks the ad and is sent back to the exact page they were viewing. [L1020, 2020-26]

### Combining with Other Ad Types

- Older advice (2019, so outdated): use Facebook remarketing with a simple dynamic product ad group that retargets visitors who came from Google. Keep the daily budget small, such as $5 per day. [L1002, 2019]

## Retargeting Campaign Structure and Setup

### Campaign Architecture on Meta

Use one ABO campaign for retargeting. A CBO campaign can replace it if it performs better in the account. [L0375, undated; L0376, undated]

```
Retargeting campaign structure:
1 ABO campaign (a CBO campaign can be used if it works better in the account).
Ad sets with MOF (middle of funnel) and BOF (bottom of funnel) audiences:
- 1 ad set for 75% video views and 95% video views.
- 1 ad set for website visitors.
- 1 ad set for FB/IG engagements.
```
[L0375, undated]

The structure is one ABO campaign (CBO is an option if it works for the account) with ad sets for MOF and BOF audiences. Build these ad sets:
- Video views at 75% and 95% (combined)
- Website visitors
- FB/IG engagers

[L0376, undated]

### Campaign Architecture on Google

- Build the Google remarketing campaign as a separate campaign from Shopping. Its purpose is to bring back visitors who viewed the store but did not buy, show them the products they looked at, and win the sale against competitors. [L0734, 2020-26]
- Use standard display campaigns for remarketing and for monthly promotions to existing audiences. [L0964, 2023] (2023)
- Older advice: build each retargeting ad group around one audience or one message. Name the ad group after its target audience so the campaign list reads at a glance. [L1342, 2021-22]
- Older advice: the same Google display and Facebook setup used for retargeting also works for cold traffic. Only the targeting changes, so campaign structure, budgets and ad formats can be reused. [L1342, 2021-22]

### Step-by-Step Setup on Google Display

1. Log in to Google Ads, click Campaigns in the left navigation, click New Campaign, then select "Create a campaign without guidance." [L0189, undated]
2. Select Display as the campaign type and click Continue. [L0189, undated]
3. Enter your store's homepage URL as the Website. Create a Campaign name in the format [YourStore].com Remarketing. Choose the Country where you sell and set Language to English (or your store's primary language). [L0189, undated]
4. Scroll to More settings, enable Dynamic ads, and check "Use dynamic ads feed for personalized ads." Select your Google Merchant Center product feed and leave Product filter on "No filters" (include all products). [L0189, undated]
5. Under Content exclusions, exclude: Content not yet labeled, All sensitive content categories, and Live streaming videos. Click Next. [L0189, undated]
6. Set Daily budget to approximately 10% of your total Shopping Ads budget (example: $10/day Shopping = $2/day Remarketing). Change Bidding focus to "Viewable impressions" and set Viewable CPM to $10. Click Next. [L0189, undated]
7. Click "Edit Audience segments." Select your [YourStore].com Visitors, 30 Days segment. Disable "Optimized Targeting" (critical; do not skip). Click Next. [L0189, undated]
8. Set Final URL to your homepage and Business name to your store name. Products are pulled automatically from Merchant Center. For the ad:
   - Headline: "Shop [Store Name]"
   - Long headline: "Come back and complete your order"
   - Description: "The official [Store Name] store"

   Turn OFF auto-generated video. Turn OFF native formats. Add 1 landscape image and 1 square image. [L0189, undated]
9. Review for errors and click "Publish campaign." [L0189, undated]
10. Navigate to the new campaign, go to Audiences, keywords, and content → Audiences. Scroll to Exclusions. Add the [YourStore].com Purchase, 30 Days exclusion. Save changes. [L0189, undated]

- In step 7, add the audience under targeting: use the audience segments option to add the 30-day website visitor segment created earlier, and select it so it appears in the targeted audience list. [L0734, 2020-26]

### Static vs. Dynamic Setup

- Static and dynamic remarketing differ only at campaign creation. For dynamic remarketing, link the product feed at the first setup step. For static remarketing, skip the option to link the product feed. [L0836, 2024] (2024)
- A static Google Display Network banner for a specific offer can be set up as a Repeat audience campaign aimed at product viewers. Use a Shop Now call to action, and show the same deal stated in the banner as in the matching Facebook ad. [L0799, 2021-22]

### Bidding Choice

- Google Display, as set up in the procedure, uses Bidding focus "Viewable impressions" with a Viewable CPM of $10. [L0189, undated]
- In the early stage, the goal of remarketing is reach, not conversions. Do not optimize remarketing campaigns for add-to-cart events. Focus on getting ads in front of people, especially when starting out. [L0965, 2024] (2024)
- Conversion bidding often underperforms for retargeting, especially at low volume, because retargeting frequently aims to bring visitors back rather than force an immediate sale. Click-based or traffic-based bidding is the more practical default for these campaigns. [L1342, 2021-22]
- A higher-ticket store may not reach the number of conversions a Facebook conversion campaign needs within its optimization window. In that case, a traffic campaign is the practical choice. Test conversion campaigns once the store has shown sales and steady volume. [L1342, 2021-22]
- How the sources fit together: the Viewable CPM setup applies to Google Display. The click/traffic default and the conversion-later rule describe Facebook campaigns, where the store's volume decides between traffic and conversion bidding. [L0189, undated; L1342, 2021-22]

### Budgets per Ad Set and Campaign

- A retargeting ad set can run on a low budget of $10 to $15 per day each. [L0375, undated; L0376, undated]
- Adjust the remarketing ad budget per campaign rather than with one shared budget. Each window should still reach an acceptable return on ad spend. [L1094, 2023] (2023)
- On Google, set the Daily budget at about 10% of the Shopping Ads budget (example: $10/day Shopping = $2/day Remarketing). [L0189, undated]

### Meta Learning Phase and Changes

Procedure:

1. When the campaign launches, Facebook shows a random sample of the audience to set costs. [L0268, 2020]
2. Once costs stabilize at the desired level, don't pause the campaign, because that resets the learning phase. [L0268, 2020]
3. If you modify a campaign, pause the ad set (not the campaign), unpause it after 5 days, let it run 1 day, and pause again if needed. [L0268, 2020]
4. Budget changes over 20% also reset the learning phase. Make large budget changes in small increments. [L0268, 2020]
5. If the campaign is paused for 5-7 days and restarted, the learning phase resets and costs will likely increase. [L0268, 2020]

Pausing strategy (merged with step 3 and step 5 above; both ids kept):

- When an established campaign needs modification, pause the ad set, not the campaign. Unpause within 5-7 days if needed, which preserves learning phase costs. If the campaign itself is paused for 5-7 days and restarted, the learning phase resets and costs likely increase. [L0268, 2020]

### Performance Max Caveats

- Performance Max is not recommended for remarketing. It can work for a few months, but return on ad spend drops once remarketing audiences saturate. [L0837, 2025] (2025)
- For remarketing and monthly promotions to existing audiences, use standard display campaigns instead. [L0964, 2023] (2023)

## Search Retargeting (RLSA) and Branded Search

### Search Retargeting (RLSA) Overview

- Retargeting can be combined with search or Shopping campaigns, so text ads or Shopping ads run only for people who previously visited your website. This allows different ads or offers for returning visitors than for cold traffic. [L0720, 2020-26]
- Google retargeting through a Performance Max campaign plus a branded search campaign caught people who saw a Meta ad and then searched for the product name. [L0646, 2023]
- This Performance Max and branded search combination was described as the main retargeting channel once Facebook retargeting stopped working well for the account. [L0646, 2023]

### Why Returning Searchers Convert Better

- Google search retargeting is very high converting because returning visitors who search again are comparison shopping and close to a purchase. Serving them special ads at this point captures them when they are most ready to buy. [L1203, 2016]
- People who visited the site earlier and are now searching again have higher relevance than cold searchers, even if the earlier visit was months ago. Their earlier research or saved budget for a high-ticket item makes them worth a stronger bid. [L1242, 2020-26]
- The audience should therefore not be split by how recent the visit was. [L1242, 2020-26]
- Multi-session website visitors were reported to convert 2.17 times more often than other visitors. This is the basis for giving this audience higher bids and a wider reach. [L1242, 2020-26]

### Results Compared with Product Listing Ads

| Campaign (same account) | ROAS |
|---|---|
| Search retargeting | 9.4x |
| Product listing ads | 3.5x |

[L1203, 2016]

- In that account, search retargeting was the highest-converting campaign, which is why it is treated as a priority. [L1203, 2016]

### Audience Settings

- Set the membership duration of the website visitor audience used for search retargeting to the maximum of 540 days. This is the longest period Google keeps the cookie. [L1242, 2020-26]
- Shorter windows discard earlier visitors who are still searching. [L1242, 2020-26]

### Setup Steps

1. Find the AdWords retargeting code in the back end of the Google Ads account. [L1203, 2016]
2. Place that code on every page of the website. [L1203, 2016]
3. Create a retargeting list of site visitors. [L1203, 2016]
4. In Google Ads Editor, copy the existing search campaign. [L1203, 2016]
5. Add the retargeting audience to the copied campaign and upload the change. [L1203, 2016]
6. Expand the keyword list, including broad match, because visitors are already in market. Coupon keywords are only worth targeting here if the store actually offers coupons. [L1203, 2016]
7. Rewrite the ad copy for returning visitors, for example with a returning-visitor offer. [L1203, 2016]
8. Apply the same retargeting audience to the product listing ads. [L1203, 2016]


Part 4 of 10 of "16. Retargeting: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/16-retargeting.md · Previous: https://dlichters.com/ai/ecom/deep/16-retargeting/03-building-meta-youtube-and-other-platform-audiences.md · Next: https://dlichters.com/ai/ecom/deep/16-retargeting/05-retargeting-ad-types-and-creative.md
