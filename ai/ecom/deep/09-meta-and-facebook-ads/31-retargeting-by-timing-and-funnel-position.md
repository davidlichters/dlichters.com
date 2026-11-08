<!-- part of ecom/deep/09-meta-and-facebook-ads.md -->
Part 31 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/30-retargeting-custom-audiences-and-lookalikes.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/32-starting-and-restarting-campaigns.md

### Retargeting by timing and funnel position

- Retargeting from the store is limited. Run cold interest targeting as the main strategy. [L1315, 2023]
- Email to a list of customers can drive strong revenue and is a form of retargeting. Use Facebook retargeting mainly during promotions, such as targeting past purchases. [L1315, 2023]
- Facebook retargeting structure cited: top of funnel is cold interest; middle of funnel is engagement audiences (page and Instagram engagement, ad interaction); bottom of funnel is website visitors and add-to-cart audiences. [L1315, 2023]
- Cold interest targeting often outperformed retargeting after the iOS 14 update, so prioritize interests that have worked previously over retargeting channels. [L0308, 2023]
- Run cold interest targeting and retargeting as separate campaigns. Target interests that have worked previously. Retarget website visitors (especially same-day visitors), form fillers, post engagers and anyone who visited the webpage. Run multiple campaigns simultaneously. [L0308, 2023]
- Retargeting can work on Facebook when an offer or message pushes the viewer over an objection: testimonials for trust issues, a discount for price concerns, and proof for doubt about the product's ability to solve the problem. Showing the same ad again rarely works. [L0646, 2023]
- Retarget people who already acted on a page or post, such as page views or engagement. Do not add extra age or demographic restrictions, since the audience was already qualified at the top of the funnel. [L0646, 2023]
- Target engaged shoppers as an audience, which was reported to perform well. Interest targeting by job title was not tested, and the audience may be too small. [L1108, 2023]
- Facebook retargeting ads for store visitors are worth running and are set up in a specific way taught in the course. Retargeting is a standard practice used by the store. [L0967, 2020]
- Set up Facebook remarketing audiences through the remarketing lessons before running remarketing ads. [L1281, 2022]
- Keep Facebook targeting simple at the start. Dynamic retargeting only needs site visitors, so skip age ranges and interest-group testing, and use an ad that shows the product the person previously viewed. [L1203, 2016]
- Segment remarketing by how long ago someone visited without buying. Recent visitors get direct-response ads that bring them back to the product. Older visitors get ads that build trust and credibility. [L1112, 2021]
- Shorter remarketing windows are more profitable. A visitor who left recently is more likely to buy than one who left months ago. [L0969, 2022]
- until Facebook is consistently profitable, run only dynamic product ad remarketing. Avoid promotions segmented for cold audiences. [L0969, 2022]
- The most successful stores also reach people who are not searching for their product, through pre-sales engagement. Search campaigns and site-visitor retargeting reach only people already in market, so cold content is needed to grow beyond them. [L1203, 2016]

**Sales funnel procedure**

1. Serve pre-sales engagement content to a cold lookalike audience. [L1203, 2016]
2. If the visitor buys right away, the sale is done. [L1203, 2016]
3. If the visitor views a product but does not buy, enter dynamic product ad retargeting. [L1203, 2016]
4. If the visitor only reaches the home page, retarget with more commercial pre-sales content, such as comparison charts, buyer's guides, user stories, or uses of products the store sells. [L1203, 2016]
5. At the buying stage, use Product Listing Ads (PLAs), search text ads and search audience ads. [L1203, 2016]

### Exclusions

- Use exclusions to keep specific audiences, such as recent buyers, out of campaigns that should not show them ads. [L0649, 2019]
- To stop showing ads to people who bought in the last 180 days, add a purchasers exclusion in the audience controls. Exclusions matter most when many existing customers are being targeted, and matter less when audiences are mostly new. [L0865, 2025-26]
- For a custom audience of past purchasers, exclude only the 180-day purchaser audience. The 7-day and 30-day purchaser audiences are subsets of the 180-day audience, so they need no separate exclusions. [L0856, 2024]
- Exclude website purchasers from the last 180 days and existing Shopify customers from prospecting campaigns. Use 7-day click and 1-day view attribution for these campaigns. [L1195, 2026]
- Promotion Meta ads should repeat the message of the promotion's emails and be shown to all website visitors from the last 180 days. Exclude all customers who purchased in the last 30 days. [L1222, 2025+]
- For Meta retargeting, use all website visitors from the last 180 days and exclude all customers from the last 30 days. The same audience can show each promotion's offer several times within a three-month span. [L1287, 2025]
- Always exclude purchasers and website visitors from middle-of-funnel retargeting ad sets, and exclude purchasers from bottom-of-funnel audiences, so audiences do not overlap. Remove bias audiences unless retargeting for a new product or special offer. [L1335, 2023+]
- In the remarketing ad set, add `Purchased 180 days` as the ad exclusion. [L1029, 2020-26]
- Existing customers can show as undefined in reporting. Without the Purchased 180 days audience defined there, Meta does not know who has already bought, so set it before publishing. [L1029, 2020-26]

### Advantage+ shopping and catalog campaigns

**Advantage+ shopping**

- Advantage+ shopping campaigns take creatives and a customer list with broad targeting and let Meta find buyers. At the time of the lesson the cost was high and significant budget was needed, so results were not yet proven for many advertisers. [L0646, 2023]
- Advantage+ shopping campaigns (Facebook's Performance Max equivalent) performed well for the speaker, but they require a substantial budget to perform. [L0690, 2022+]
- In Advantage+ campaigns, Facebook asks the advertiser what percentage of the campaign should go to retargeting and what percentage to prospecting. Facebook then assigns time to the retargeting audience. [L0646, 2023]

**Advantage+ catalog ads**

- Advantage+ catalog ads were formerly called dynamic ads. They use machine learning to scale ads automatically when a store has a broad range or a large volume of products. Each person is shown the products they are most likely to want, including people who viewed products on the site. [L1028, 2026]
- The product catalog feeds dynamic ads with product names, images and prices. The catalog must be linked to the campaign, or the carousel cannot show the viewed products. [L1029, 2020-26]
- Advantage+ catalog ads uses the linked product catalog to show relevant products based on each person's interests, intent and actions. For dynamic remarketing, keep this option switched on. [L1029, 2020-26]

### Remarketing campaign build

**Campaign-level principles**

- A Meta remarketing campaign built this way serves ads on Facebook, Instagram, Messenger and the Audience Network from one setup. Meta adapts the single set of inputs to each placement's format. [L1029, 2020-26]
- The remarketing campaign depends on the website-visitor and purchaser audiences and the product catalog built earlier. Do not start it until those are in place. [L1029, 2020-26]
- Manual sales setup is chosen over Advantage+ shopping because it gives precise control over who sees the ads. For remarketing, this control matters more than Meta's broader automated targeting. [L1029, 2020-26]
- Keep the Advantage+ audience switched to original audience options for remarketing. Advantage+ audience expands reach beyond the defined custom audiences, which breaks the control the campaign needs. [L1029, 2020-26]
- Keep Advantage placements on for remarketing, since the audience is narrow and Meta places ads where these people are. Manual placements remain possible if you want to restrict the ads to a single platform. [L1029, 2020-26]
- Build the campaign as evergreen: no spending limit and no end date, so it keeps running and sells consistently as the audience fills. The only regular change is the daily budget. [L1029, 2020-26]
- The Meta pixel, selected under Tracking with Website events, records website activity so visitor audiences and purchase conversions can be built. Choose the main pixel created earlier. [L1029, 2020-26]
- If several product catalogs are linked to the Meta account, the wrong one can be attached to the campaign. Check the catalog dropdown and select the correct catalog. [L1029, 2020-26]
- For a dynamic remarketing campaign, set Buying type to Auction and Campaign objective to Sales. Within Sales, the catalog sales result shows product-specific ads from the store catalog. Other Sales results, such as Messenger, Instagram, WhatsApp and calls, serve different goals. [L1029, 2020-26]
- In a dynamic remarketing carousel, each viewer sees the products they most recently viewed on the store, pulled from the linked catalog, rather than a general selection. The audience and the catalog must be connected for the ads to match each person's browsing. [L1029, 2020-26]

**Campaign level (procedure)**

1. Log in to the Meta Ads account and click the green Create button. [L1029, 2020-26]
2. Keep Buying type on Auction. [L1029, 2020-26]
3. Set Campaign objective to Sales. If it is not preselected, click Sales. [L1029, 2020-26]
4. Click Continue. [L1029, 2020-26]
5. Choose Manual setup (manual sales campaign) instead of Advantage+ shopping campaign, then click Continue. [L1029, 2020-26]
6. Rename the campaign to a descriptive name, for example `Store Name Dynamic Remarketing Campaign`. [L1029, 2020-26]
7. Special ad categories: leave empty and scroll past, unless the business falls under financial products and services, employment, housing, social issues, elections or politics. [L1029, 2020-26]
8. Campaign spending limits: leave empty, because the campaign is evergreen and runs until switched off manually. [L1029, 2020-26]
9. Keep Advantage+ catalog ads switched on and select the product catalog. If several catalogs are linked to the account, pick the correct one from the dropdown. [L1029, 2020-26]
10. Set the Advantage campaign budget as the daily budget (10% of the Google Shopping daily budget). [L1029, 2020-26]
11. Keep Campaign bid strategy on Highest volume. [L1029, 2020-26]
12. Leave time-of-day bidding and day-of-week scheduling at their defaults. [L1029, 2020-26]
13. Keep A/B testing off. [L1029, 2020-26]
14. Under Reporting, check that Existing customers shows Defined. If it does not, click the caret, search for the audience `Purchased 180 days` and select it. [L1029, 2020-26]

**Ad set level (procedure)**

1. Click New sales ad set in the left navigation and rename it, for example `Store Name Dynamic Remarketing Ad Set`. [L1029, 2020-26]
2. Ignore the templates option. [L1029, 2020-26]
3. Set Performance goal to Maximize number of conversions and the conversion event to Purchase. [L1029, 2020-26]
4. Under Show more settings, leave the attribution settings at default. [L1029, 2020-26]
5. Under Product set, keep All products. Do not narrow by product category or any other breakdown. [L1029, 2020-26]
6. Under Budget and scheduling, do not set a future start date beyond immediate start, no end date, and no spending limits. Leave everything at default. [L1029, 2020-26]
7. Under Audience controls, set the location to the country where you do business only. Do not add other criteria and do not set a minimum age. [L1029, 2020-26]
8. Under Advantage+ audience, click Switch to original audience options. [L1029, 2020-26]
9. Keep location on your business country, age range at the default 18 to 65+, and gender on all genders. [L1029, 2020-26]
10. Leave Advantage detailed targeting (demographics, interests, behaviors) completely blank. [L1029, 2020-26]
11. Under Custom audiences, click Search existing audiences and add `Website visitors 180 days` as the included audience. [L1029, 2020-26]
12. Under Ad exclusions, add the `Purchased 180 days` audience. [L1029, 2020-26]
13. Make sure the checkbox that lets Meta reach beyond the custom audience when it predicts better performance stays unchecked. Meta may tick it automatically when you add the exclusion. [L1029, 2020-26]
14. Keep Placements on Advantage placements. [L1029, 2020-26]
15. Leave Show more options at default. [L1029, 2020-26]

- Bidding objective conflict: the ad set procedure uses Maximize number of conversions with the Purchase event. [L1029, 2020-26] An older 2020 source says to set the bidding objective to Reach, not to Conversions, for Facebook remarketing. Conversions would show ads only to the few people most likely to buy, which is too small for a remarketing audience. [L0551, 2020] Example: with 1,000 website visitors from the last 30 days, Reach shows the ad to all 1,000, while Conversions might show it to only about 50. [L0551, 2020] Use Reach if the audience is small and the goal is to fill it; use Maximize number of conversions with Purchase when the audience is large enough to learn from purchases. [L0551, 2020; L1029, 2020-26]

**Ad level (procedure)**

1. Click New sales ad and rename it, for example `Store Name Dynamic Remarketing Ad`. [L1029, 2020-26]
2. Keep Partnership ad switched off. [L1029, 2020-26]
3. Under Identity, confirm the correct Facebook page and Instagram account are linked, so the ads show your business profile. [L1029, 2020-26]
4. Set Format to Carousel and keep Multi-advertiser ads on. [L1029, 2020-26]
5. Leave Show more options at default. [L1029, 2020-26]
6. Under Add creative, choose Multiple products and ignore product categories. [L1029, 2020-26]
7. Select the linked catalog and set the card display to Single image, which shows one image per catalog item. [L1029, 2020-26]
8. Leave Edit creative at default. [L1029, 2020-26]
9. Keep Headline on the dynamic product name field, which pulls the product name from the product feed. [L1029, 2020-26]
10. Product description: leave empty, or click the plus next to ad catalog feed to insert a feed field such as price. Delete any field you do not want. [L1029, 2020-26]
11. Primary text: enter your text. Meta also generates AI rewrites as variations. Select the ones you like and they will be tested alongside yours. [L1029, 2020-26]
12. Set Call to action to Shop now. [L1029, 2020-26]
13. Advantage+ creative: click Edit, toggle to All optimizations, click Save, and confirm it shows 8 out of 8 enhancements on. The default is 6 out of 8. [L1029, 2020-26]
14. Destinations: switch from Manual destination to Advantage destination. [L1029, 2020-26]
15. Enter the store URL. Set Display link to the domain without https. [L1029, 2020-26]
16. Leave Override catalog deep links off. [L1029, 2020-26]
17. Leave Languages off, since ads only show where you do business. [L1029, 2020-26]
18. Leave App blank. [L1029, 2020-26]
19. Under Tracking, select Website events and choose your main Meta pixel. [L1029, 2020-26]
20. Promo codes: optional. Only add a code that will always stay active in the store. [L1029, 2020-26]
21. Click Advanced preview and review the placements. [L1029, 2020-26]
22. Click Publish. [L1029, 2020-26]

**Status sequence and budget changes**

1. The campaign shows Processing under Delivery. [L1029, 2020-26]
2. It then moves to In review, which can take about 30 minutes or a few hours for the first campaign on the account. [L1029, 2020-26]
3. Once approved, it becomes Active. Impressions can take a few days to start on a store with low traffic, then continue daily as the audience fills. [L1029, 2020-26]
- To change the budget later, open the campaign view in Meta Ads Manager, click the pencil icon next to the daily budget, enter the new amount and publish. Keep the budget at 10% of the current Google Shopping daily budget. [L1029, 2020-26]

**Why these settings**

- Manual sales setup is chosen over Advantage+ shopping because it gives precise control over who sees the ads. [L1029, 2020-26]
- Advantage+ audience stays on original audience options for remarketing, as described in the campaign-level principles above. [L1029, 2020-26]

### Dynamic product ad settings and CTR

**Facebook DPA remarketing**

- Send visitors back to the exact product page they viewed. Start with a 2-day audience for people who visited the store recently, then expand to 7, 14 or 28 days if the audience is too small. [L0969, 2022]
- Minimum audience size is 100 people. If fewer than 100 people visit in the window, extend the time window (for example from 2 to 3 days). [L0969, 2022]
- Daily budget starting point: about 10% of the Google Shopping spend (for example 10 dollars with 100 dollars on Shopping). [L0969, 2022]
- Until Facebook is consistently profitable, run only dynamic product ad remarketing. [L0969, 2022]
- Shorter remarketing windows are more profitable. [L0969, 2022]

**Audience size and objective**

- If the dynamic product ad audience is small, optimize for link clicks instead of website conversions. This serves ads more often to people who click, which lifts relevance score and lowers CPC. [L0510, 2018]
- Split retargeting audiences, for example by add-to-cart versus product view, only when the audience is large enough. A list of about 1,000 people is too small to split, while a cookie audience above about 10,000 can support separate campaigns. [L0510, 2018]
- When building a Facebook dynamic product ad retargeting audience for a Shopify store, enter the audience length in days in the audience settings. For most advertisers 30 days is a reasonable starting point, adjusted by product price and sales cycle. [L0510, 2018]
- Improve audience duration: a higher product price supports a longer audience, a lower price a shorter one. [L1031, 2018]

**Improving DPA CTR (procedure, in the order the lesson presents them)**

1. Update dynamic product ads every two weeks. [L1031, 2018]
2. Improve audience duration: a higher product price supports a longer audience, a lower price a shorter one. [L1031, 2018]
3. Use dynamic ad text. [L1031, 2018]
4. Optimize the product feed. [L1031, 2018]
5. Use ad overlays. [L1031, 2018]
6. Use link clicks as the optimization target. [L1031, 2018]

- With dynamic product ads, the advertiser has little direct control over CTR, so it must be improved indirectly through the product feed, audience and creative settings. [L1031, 2018]

**Placements and Google Merchant Center**

- When Google Merchant Center dynamic remarketing is disapproved, use Meta retargeting and select the Audience Network placement, which is suitable for remarketing (not for cold traffic). [L0666, 2024]

**Pattern: dynamic product remarketing (pattern)**

- Show a carousel of the exact products the visitor viewed on the store. The ad text reminds them they have not finished checking out and offers a percentage-off coupon code, with the creative pulled directly from the site. Example variant: a shopper who viewed three ovens sees those three ovens with a 10% coupon. [L1111, 2020]

**where DPA belongs**

- Procedure: 1. In Facebook Business Manager, create custom audiences for website visitors in the past 7, 14 and 30 days. 2. Create a remarketing campaign. 3. Inside that campaign, create one ad set per audience and select that audience in each ad set. 4. Place near-identical ads inside each ad set, changing some of the copy. [L1086, 2019]
- Use Facebook and Instagram dynamic product ads only for remarketing to past site visitors. Do not use them for cold traffic to the store until you have a proven system for that. [L1086, 2019]

### Budget share

**Share of the total budget**

- Facebook remarketing should get about 10 percent of the total ad budget. For example, if Google Shopping gets $30 per day, Facebook remarketing gets about $3 per day. [L0468, 2020]
- The daily budget for a Meta remarketing campaign should be 10% of the daily budget of your Google Shopping campaigns. Example: a $50 per day Google Shopping budget means a $5 per day Meta budget. [L1029, 2020-26]
- Allocate about 10% of the budget to middle-of-funnel and bottom-of-funnel retargeting, especially once the account has reached about 100 purchases. [L1335, 2023+]
- Keep cold interest targeting as the main strategy, and treat retargeting as a share of the budget, not the whole budget. [L1315, 2023; L1335, 2023+]

**Conditions based on return**

- Facebook retargeting below 1x ROAS should be reduced or ended. Above 1x, you can keep retargeting but cap its share of the total budget. [L0854, 2022]
- For lost visitors, use a Facebook dynamic product ad campaign for remarketing, with a small share of the budget, for example about $200 of $300 per month in the 90/10 split. [L0854, 2022]
- The Facebook retargeting spend should not oversaturate people with ads, since too many remarketing impressions lower returns. [L0854, 2022]
- A small budget of $20 to $30 per day split between Facebook and Google remarketing is a good way to bring back visitors who already showed interest, since remarketing is the most profitable spend early on. [L0854, 2022]
- Retargeting campaigns to people who interacted with ads should be kept small, with a maximum budget of 5 dollars in the example given. Retargeting is worth running for every traffic source that engages with the ads. [L0678, 2023]
- Thank-you video ad for new customers only: budget of about 5 dollars per day, and filming and creating the video takes about 1 to 2 hours. Use a simple phone-shot video thanking the customer and restating the shipping time. [L1076, 2019]

**How the numbers differ**

- Share of budget varies by source: about 10% of total budget (2020), about 10% of Google Shopping spend (2022), about 10% of the Google Shopping daily budget (current remarketing build), and about 10% for middle and bottom funnel once the account reaches about 100 purchases. Use the 10% rule as the starting point in every case, then adjust by ROAS. [L0468, 2020; L0969, 2022; L1029, 2020-26; L1335, 2023+; L0854, 2022]

### Frequency, fatigue and window checks

- Check ad frequency. When frequency is about five or higher, the same person sees the ad five times, which lowers performance and can lead to negative reports. Change the creative, the angle or the proof rather than repeating the ad. [L0646, 2023]
- Bottom-of-funnel retargeting can have very high frequency, with people seeing the same ad around 10 times, which annoys them. Set frequency caps or manage the audience budget to avoid repetition. [L1315, 2023]
- Buyers often need six to eight contacts with a product before their first purchase, so repeated ad exposure can still convert for products that seem saturated. [L0502, 2020+]
- For add-to-cart audiences, check results every one to two days, because they can stop delivering sales suddenly. Turn off the audience, let others run, and turn it back on later. Test windows of 30, 60, 90 and 180 days. [L0646, 2023]
- Lookalike and retargeting audiences fill slowly after creation, so a new audience can show low numbers for a while. To test the problem, create a new 30-day website visitor audience and compare its size with the old one. [L0965, 2024]
- A Meta audience created later than the same Google audience shows fewer people, even with the same window, because audiences need time to fill. Give a new audience time before judging its size. [L0965, 2024]

### Creative rotation and promotions

- For retargeting, rotate several different creatives, such as reviews, offers and testimonial videos, for the same audience so people do not tire of the same content. One retargeting audience of around 100k was mentioned with about 10 creatives added to it. [L0650, undated]
- Warm audiences from the last 180 days can see a short carousel or static ad that offers a free bonus product with a mattress or similar main purchase. Bonus-gift angles work well as one of the three to four ads in the static remarketing set, because they give a reason to buy without a direct discount. [L0649, 2019]
- Build the thank-you audience from customers who purchased in the last 7 days, and the catch-all audience from customers in the last 180 days. Both are free to set up in the Facebook account. [L1076, 2019]
- A Facebook thank-you video ad, shown only to new customers, needs a budget of about 5 dollars per day. [L1076, 2019]


Part 31 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/30-retargeting-custom-audiences-and-lookalikes.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/32-starting-and-restarting-campaigns.md
