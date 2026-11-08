<!-- part of ecom/deep/10-google-ads-and-shopping.md -->
Part 39 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/38-seasonality-and-q4-and-black-friday-patterns.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/40-clicks-without-sales-conversion.md

## Troubleshooting Shopping Campaigns

### Diagnostic order and working principles

1. Check whether the full daily budget is being spent. If it is not, continue with the following steps. [L1254, 2020-26]
2. Check the CPCs against the budget to rule out bids that are too low. [L1254, 2020-26]
3. Check which search terms and keywords the products appear for, and whether they match the searches buyers actually make. [L1254, 2020-26]
4. Check the bounce rate and average time on site to confirm that the traffic reaching the store is the right audience. [L1254, 2020-26]
5. Compare the campaign settings with the intended setup and correct any mismatch. [L1254, 2020-26]
6. Apply product page SEO to all product pages so that products appear for their relevant searches. [L1254, 2020-26]
7. Allow 2 to 3 days for Google Merchant Center to process the changes, then 2 to 3 days of relearning in Google Ads. [L1254, 2020-26]
8. Once the budget spends and enough clicks have accumulated, measure the conversion rate against 2.5 sales per 100 qualified clicks. [L1254, 2020-26]
9. Only then start conversion optimization of the product pages. [L1254, 2020-26]

- The first goal for a campaign is to spend the full daily budget every day, for example $10 per day. Do this before optimizing ads, pages or anything else, because a budget that does not spend gives no usable data. [L1254, 2020-26]
- When a daily budget does not spend, check the CPC first. If the CPCs are reasonable for the budget, the most likely cause is that products do not appear for the search terms buyers actually use, not that the bids are too low. [L1254, 2020-26]
- Fix the root setting in the account before pursuing advanced Google Ads courses or granular optimizations. When the root setting is corrected, downstream symptoms such as low conversions and high bounce rates often resolve as well. [L0837, 2025]
- Low performance should be checked in the ad account first (CTR, CPC, clicks, conversion rate, ROAS below 10x) before investigating competitors on Google Shopping for MAP violations, which are not checked by default. (Older advice, 2024, from a source that treats 10x as the ROAS threshold.) [L0805, 2024]
- Spending on Google Ads without any sales in the first week signals a conversion problem on the store. Fix the store's conversion before raising the budget. [L0663, 2019]
- A daily budget is not the problem if it is not fully spent. Check that the campaign type and budget setting (for example the "spend all money" option) match the blueprint's Google Shopping module before changing budgets or bids. [L0834, 2021]
- If the budget is not being spent, review the campaign for weaknesses that stop spending and check that the traffic reaching the store is the right kind of audience. [L0356, 2019]
- Before blaming the website or the ads for weak conversions, confirm that traffic targeting reaches the right buyer. If the targeting is wrong, the conversion rate will stay low no matter how good the site is, so check the audience and search matches first. [L1228, 2021-22]

### Account health, feed and Merchant Center

- Google Merchant Center holds the product feed that Google reads for Shopping ads. Errors or unclear product data in the feed are a common cause of irrelevant search matches. [L0715, 2020-26]
- Changes to product titles and product information only reach Google Ads after Merchant Center has processed them. [L1254, 2020-26]
- After updating product information, expect 2 to 3 days for Google Merchant Center to process the changes, followed by another 2 to 3 days of relearning in Google Ads. Do not judge the results of a change before this window has passed. [L1254, 2020-26]
- If traffic falls without any change in the account, check Merchant Center for product errors or warnings. A drop should not be explained by seasonality alone. [L0934, 2023]
- An account alert (the question mark or exclamation icon at the top right of Google Ads, which turns red for a verification request or an empty account balance) must be checked first. [L0357, 2019]
- Unapproved products, warnings or missing required fields in Google Merchant Center or Microsoft Merchant Center stop products from showing. Clean up the feed and resubmit. [L0272, 2022]
- Feed and product-page data must be complete before any other change. For a product group with no clicks or few clicks, first check the keywords it is shown for, then check the Merchant Center feed for errors or missing data. [L0836, 2024]
- If many products do not show ads in Google Shopping while competitors do, Google may be failing to match your products. Check product page data and Google Merchant Center information so Google can match your products to queries. [L0834, 2021]
- Missing identifiers limit display. Fill in SKU or MPN values from the supplier and judge performance only after traffic increases. (Older advice, 2020, from a case of 124 impressions and one click with Merchant Center warnings for missing identifiers.) [L1088, 2020]
- If a Shopping product gets almost no impressions even with a high bid, Google may be misreading the product. Check that the title starts with the product name, that GTIN or MPN and brand are correct, and that the product page is optimized. Then search in an incognito window to see where it appears. [L0806, 2024]
- A product with high bids but almost no impressions may be misidentified by Google. Check whether the product page carries identifiers such as GTIN, SKU or MPN that help Google match it to the right search results, and compare with competitor pages. [L0856, 2024]
- If a Google Shopping campaign spends about one cent with no errors, raise the default CPC by 5 cents and check the result (see the budget section). Also check Merchant Center for product errors and make sure all products show green. [L1112, 2021]

### Zero impressions

**Procedures**

Zero impressions in a Shopping campaign:
1. Open Google Merchant Center and check that the product feed is all green; fix any errors. [L0247, 2021]
2. In Google Ads, check that products in each product group are approved. [L0247, 2021]
3. If both are approved, wait a couple of days for the products to enter rotation. [L0247, 2021]
4. If there are still no impressions, raise the maximum cost per click in steps of about 0.05. [L0247, 2021]

Zero impressions after launch:
1. Confirm the products are approved and eligible in the Google Ads account. [L0468, 2020]
2. Check the account for errors. [L0468, 2020]
3. Raise the maximum cost per click, for example from $0.25 to $0.35, and leave it for a few days. [L0468, 2020]
4. If impressions stay at zero, contact Google through live chat and ask them to check for a misconfiguration. [L0468, 2020]

Zero impressions in a feed-based Shopping campaign:
1. Open Google Merchant Center and confirm the product feed shows as approved with no errors. [L0801, 2021]
2. If the feed was approved recently, wait, since feeds can take two to three days before Google starts displaying products. [L0801, 2021]
3. If several days have passed, check the campaign settings, since a setting usually needs to be fixed. [L0801, 2021]
4. Try raising the cost per click to generate more volume while you check. [L0801, 2021]

Zero impressions in Alpha or Beta campaigns (undated):
1. Do not just switch the old campaigns back on; recreate both campaigns from scratch using the standard setup process. [L1015, 2020-26]
2. Once submitted, confirm that all products are approved. [L1015, 2020-26]
3. If any products show errors, diagnose them in Merchant Center under feed diagnostics and fix them in Symprosis. [L1015, 2020-26]
4. Expect impressions, clicks and ideally sales within two to three days after the errors are resolved. [L1015, 2020-26]

Diagnosing Alpha/Beta shopping campaigns with no clicks or conversions (2024):
1. Check whether the campaign gets any impressions at all. [L0805, 2024]
2. Check impression share (add it via Columns > Customize columns). [L0805, 2024]
3. If impressions are very low or zero, the budget is probably not being spent; slowly increase the target cost per click. [L0805, 2024]
4. Do not turn back on a general website traffic campaign, since Google will send traffic regardless of whether it is qualified to buy. [L0805, 2024]

Zero or near-zero impressions in a Google Ads campaign with no error (older advice, 2021, for a campaign that stops spending after a pause):
1. Open two windows side by side: the current period since the ads were turned back on, and the same number of days from when they last ran. [L1112, 2021]
2. Compare impressions and spend per product to find where the drop starts. [L1112, 2021]
3. If the cause is still unclear, duplicate both campaigns, turn off the old ones, restart the new ones with a small budget, and raise the budget step by step again as before. [L1112, 2021]

Alpha campaign stops getting impressions and clicks:
1. Step 1: check the change history in the sidebar of the Google campaign to see if a change was made on the day it stopped, and click revert if you find a harmful change. [L1090, 2021]
2. Step 2: if there was no change, check Merchant Center for errors. [L1090, 2021]
3. Step 3: check the Google Ads account for other errors or blocks. [L1090, 2021]

Product-level visibility, undated and 2025 sources:
- Confirm that all items in the Google ad account are approved. [L0966, 2025]
- If spend is far below budget, raise the default CPC by 5 cents, for example from 30 cents to 35 cents. [L0966, 2025]
- Wait a few days so Google can relearn the bid and check whether spend and impressions increase. [L0966, 2025]
- Check the negative keywords for blocked terms and correct any broad match negatives. [L0966, 2025]
- Google Shopping products appear at the default CPC, which applies to all products. If that bid is too low to win the auction against other sellers, the ads will not show. [L0966, 2025]
- If the Beta campaign gets no impressions or clicks, check its negative keywords for over-blocking and review its cost per click. Beta still brings traffic and sales for general terms even with campaign priority in place. [L0966, 2025]

**Rules and principles**

- Zero impressions after launch signal an error or a missing setup, while low but non-zero impressions are normal early on. Raise the bid before you assume the product is wrong. [L0468, 2020]
- Zero impressions after two weeks in Alpha or Beta campaigns usually points to an error in the feed submission, the campaign setup, or the negative keyword list, not to a bid that is too low. Even a very low default cost per click should still generate some impressions. [L1015, 2020-26]
- A new campaign can take days to be approved. If a toggle shows paused, switch it to active. If the campaign is still not approved after a few days, email support or ask in the community group. [L0469, 2021]
- If the Google Shopping results do not appear for you, the search itself may be affected by your browser. (Older advice, 2021; procedure is listed in the no-clicks section.) [L0671, 2021]
- If ads get zero clicks no matter how high the cost per click is, the problem is usually missing impressions rather than the bid. Audit the ad account first. If the audit is clean, the brands may lack search demand, so switch to brands with stronger brand awareness. [L1113, 2022]

### Impressions without clicks (low CTR)

**Procedures**

Diagnosing a Shopping campaign with no clicks:
1. Check account health: in Google Ads, look at the question mark or exclamation icon in the top right, which turns red when there is an account alert such as a verification request or an empty account balance. [L0357, 2019]
2. If there is no alert, check Google Merchant Center for product feed errors, corrupt data, or errors that stop products from being sent. [L0357, 2019]
3. If the feed is fine, check the campaign budgets, since Google recommendations can move budget between campaigns without intent. [L0357, 2019]
4. Check impressions for the Shopping campaign. Zero impressions points to a bigger problem. [L0357, 2019]
5. If impressions exist, find the products with the most impressions and search for them on Google to compare competitor prices, promotions, images and positions. [L0357, 2019]
6. Check the search terms that trigger your ads and add irrelevant or overly broad ones as negative keywords. [L0357, 2019]

Checking a Shopping campaign that gets too few clicks (undated):
1. Review impressions, clicks, cost, average CPC and the benchmark max CPC, which is the average CPC of competitors. [L0745, 2020-26]
2. If clicks are low while your CPC sits below that benchmark, raise bids toward the benchmark (example: moving toward about $0.91). [L0745, 2020-26]
3. If impressions stay low at high bids, search the main terms in Google Shopping, sort by review score, and compare product titles and images with the top competitors. [L0745, 2020-26]

Optimizing a product with impressions but few clicks (undated):
- If a product has low impressions while bids are already high, check whether the product is well optimized for the search terms. Search the target term in Google Shopping, sort by review score, and compare product titles, product images and descriptions with the top competitors. [L0745, 2020-26]
- If a product gets impressions but no clicks, search for it in Google Shopping and compare its photos, price and promotions with competitors. If it gets almost no impressions, the cause is low visibility, so raise the cost per click for that product. [L1112, 2021]
- Before changing your store, compare your Shopping listings with competitors' listings for the same product: photos, prices and promotions. Those differences explain most clicks lost on a product. [L1112, 2021]
- A large gap between impressions and clicks means something is causing shoppers to choose competitors. Search the same keywords in an incognito window in Google Chrome to see why, such as a lower price, a MAP violation, a better promotion, a better main image, or a higher ad position. [L0357, 2019]
- If the account gets no clicks, raising the budget is usually the worst response, because extra spend goes to broad keywords or to competitors violating policies. Diagnose the cause from the account data first. [L0357, 2019]

Product gets impressions with a low search impression share (2024):
- Low impressions with a low search impression share mean the product is under-shown. In that case raise the CPC and optimize the product page, not the daily budget. Raising the budget alone does not fix low impression share. [L0856, 2024]
- A low click-through rate in Shopping can come from low ranking in the results. Products that match the search loosely appear lower on the page, where shoppers rarely scroll, so the ad gets fewer clicks. [L1254, 2020-26]

Ad with high impression share but few clicks (2022):
- When Google Shopping shows high search impression share (90%+) but only a few clicks and low spend despite budget available, the issue is not budget. It is unapproved items or errors in your product feed. Check Merchant Center for unapproved products, warnings or missing required fields, then clean up the feed and resubmit. [L0272, 2022]

Very cheap clicks or low CTR from the wrong audience:
- Very cheap clicks with high traffic volume but almost no engagement are not a success. Check the campaign settings and the search terms that trigger the ads, because the campaign is likely attracting the wrong type of shopper. (Older advice? Undated.) [L1254, 2020-26]
- A campaign with under 1,000 impressions per day, a 0.5% CTR and a $33 daily budget per campaign was not spending its budget. The fix starts with the impression data, not with a higher budget. (Older advice, 2018, from a call.) [L1109, 2018]
- A new Google Shopping campaign for a B2B niche produced about 2,000 impressions and only 2 clicks, a CTR of about 0.1 percent. The advice was to wait a couple of weeks before deciding anything, but to check right away which search terms triggered the ads. Irrelevant or overly broad search terms should be added as negative keywords, because impressions from unrelated searches are wasted. Once the terms were relevant, the next step was comparing competitor listings in incognito search to improve the click-through rate, since 0.1 percent is far below the 1 percent minimum. [L0551, 2020]

**Search-result visibility**

If Google Shopping results do not appear for you (older advice, 2021, listed twice in the source with identical steps):
1. Clear your browser cache. [L0671, 2021]
2. Enable cookies. [L0671, 2021]
3. Search in an incognito window. [L0671, 2021]
4. Try a VPN. [L0671, 2021]

If products are not appearing in Google Shopping:
1. Open the campaign in Google Ads and check whether products receive impressions. Do not search for product names on Google Shopping. [L0429, 2022]
2. If there are no impressions, open Google Merchant Center and confirm every product is approved with no warnings. [L0429, 2022]
3. Resolve all listed warnings so the products get approved and begin showing. [L0429, 2022]
4. Only then move on to SEO work. [L0429, 2022]

If a search ad seems not to show for a keyword:
1. Check whether the ad is actually running, because a low-volume warning does not always mean the ad is blocked. [L0719, 2021-22]
2. Record the search term and check for impressions. [L0719, 2021-22]
3. Search the exact term in Google several times, since one search may not show your ad. [L0719, 2021-22]
4. If your ad does not appear, broaden the targeted search terms for that product. [L0719, 2021-22]

**Bid level for visibility (2025)**
- To appear in Google Shopping results, bids must be competitive. If products don't appear when searching for them in Google Shopping, increase bids by 5 cents and monitor for a week to see impressions increase. [L0278, 2025]


Part 39 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/38-seasonality-and-q4-and-black-friday-patterns.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/40-clicks-without-sales-conversion.md
