<!-- part of ecom/deep/09-meta-and-facebook-ads.md -->
Part 30 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/29-cbo-scaling-structures.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/31-retargeting-by-timing-and-funnel-position.md

## Retargeting, Custom Audiences and Lookalikes

### Audience types and what they are for

- Store audiences are groups of people defined by actions on the Shopify store, such as visiting pages or buying. Once the store and Meta are linked, those actions are passed to Meta so ads can target people by behavior later. [L1023, 2020-26]
- Creating audiences costs no ad spend, and they should already contain people by the time ads launch. [L1023, 2020-26]
- Two store audience types are needed: website visitor audiences (people who visited the site) and customer audiences (people who placed orders). [L1023, 2020-26]
- Custom audiences can come from customer contacts, website traffic, or a mobile app. For store audiences, select the website source. [L1023, 2020-26]
- Website visitor audiences are built from the tracking pixel and can feed retargeting or a lookalike. Customer data files, such as an export of Shopify customer emails, are a second source. The Audience menu offered four audience source options at the time. [L0641, 2014]
- Page and Instagram engagement audiences include people who liked, commented, shared or followed. They can reach shoppers Facebook can no longer track on the website since iOS 14. [L1204, 2022]
- Engagement audiences are used for remarketing and as the base for lookalike audiences. [L0487, 2018]
- Engaged audience: people who added to cart, initiated checkout, visited the website, or are on the email list, but have not completed a purchase. [L0259, 2025-26]
- Existing customer audience: everyone who has made a purchase with the brand, whether tracked through the Facebook pixel or identified through the email list. [L0259, 2025-26]
- Warm audiences with low traffic start with broad 180-day windows. With high traffic, split them into 7, 30, 60 and 90 day windows. [L0649, 2019]
- The six core audiences, based on behavior and timeframe:
  1. Visited website in last 180 days. [L0238, 2019]
  2. Engaged on Facebook in last 180 days. [L0238, 2019]
  3. Engaged on Instagram in last 180 days. [L0238, 2019]
  4. Visited website in last 7 days. [L0238, 2019]
  5. Made a purchase in last 7 days. [L0238, 2019]
  6. Made a purchase in last 180 days. [L0238, 2019]
- High-ticket products: build a custom audience from value purchases, for example buyers who spent more than the average order value (such as 100 USD), and create lookalikes from it. [L0363, 2022+]

### Pixel prerequisites

1. The Meta pixel must already be installed on the Shopify store and linked to the Meta ad account before store audiences can be built. Without that link the pixel will not show as active (green) in the audience source field, and purchase events will not reach Meta. [L1023, 2020-26]
2. A Meta ad account should normally hold only one Meta pixel, so every website-based audience uses that single pixel as its source. If more than one pixel appears, pick the one linked to the Shopify store and the ad account. [L1023, 2020-26]

### Building store audiences in Business Manager and Ads Manager

**Business Manager route (procedure)**

1. Go to business.facebook.com. [L0649, 2019]
2. Click the three-line menu. [L0649, 2019]
3. Click Audiences. [L0649, 2019]
4. Create a website visitors audience named `website visits 180 days`, with the window set to 180 days. [L0649, 2019]
5. Create a Facebook engagement audience with a 180-day window. [L0649, 2019]
6. Create an Instagram engagement audience with a 180-day window. [L0649, 2019]
7. Create a website visitors audience with a 7-day window. [L0649, 2019]
8. Create purchaser audiences for the last 7 days and the last 180 days. [L0649, 2019]

These audiences update automatically as people enter or leave each window. [L0649, 2019]

**Ads Manager route (procedure)**

1. Log in to Meta Business Manager. [L1023, 2020-26]
2. Click the three-line hamburger menu in the top left corner. [L1023, 2020-26]
3. Scroll down the side menu and click Audiences. [L1023, 2020-26]
4. If no audiences exist yet, three creation options appear; choose Create custom audience (the top option). [L1023, 2020-26]
5. Under sources, check the box Website. The next screen opens automatically. [L1023, 2020-26]

**Website visitor audiences (procedure)**

1. Start a new custom audience and select the source Website. [L1023, 2020-26]
2. Under source, select the store's pixel (the one linked to the store and the ad account) and confirm it shows green. [L1023, 2020-26]
3. Leave Events on the default All website visitors. [L1023, 2020-26]
4. Set Retention to 7 days and name the audience, following the naming pattern, for example `website visitors - 7 days`. [L1023, 2020-26]
5. Click the blue Create audience button at the bottom. [L1023, 2020-26]
6. Repeat steps 1 to 5 with Retention 30 and the name `website visitors - 30 days`. [L1023, 2020-26]
7. Repeat steps 1 to 5 with Retention 180 and the name `website visitors - 180 days`. [L1023, 2020-26]

All other settings stay identical across the three audiences. [L1023, 2020-26]

**Customer (purchased) audiences (procedure)**

1. Click Create custom audience in the Audiences section. [L1023, 2020-26]
2. Select the source Website. [L1023, 2020-26]
3. Select the same pixel, which should be the only pixel in the ad account, and confirm it shows green. [L1023, 2020-26]
4. Under Events, open the dropdown and choose Purchase instead of All website visitors. [L1023, 2020-26]
5. Set Retention to 7 days and name the audience `purchased - 7 days`. [L1023, 2020-26]
6. Click Create audience. [L1023, 2020-26]
7. Repeat steps 1 to 6 with Retention 30 and the name `purchased - 30 days`. [L1023, 2020-26]
8. Repeat steps 1 to 6 with Retention 180 and the name `purchased - 180 days`. [L1023, 2020-26]

- Keeping the Events field on All website visitors builds a visitor audience instead of a buyer audience. Choose Purchase in the Events dropdown so only buyers are included. [L1023, 2020-26]

**Workaround for a new store (procedure)**

Use this when Purchase does not appear under Events because no sale has been recorded.

1. In the Shopify back end, create a test product (any name, for example `test product 123`) priced at $1. [L1023, 2020-26]
2. Open the store as a customer and buy the test product. [L1023, 2020-26]
3. Wait until the purchase is recorded; Shopify then notifies Meta that an e-commerce purchase took place. [L1023, 2020-26]
4. Return to the Meta Audiences section and open the Events dropdown again; Purchase should now be listed. [L1023, 2020-26]
5. Build the purchase audiences with the same settings as above. [L1023, 2020-26]

If the pixel was already active and sales had already come through, Purchase appears by default and no test product is needed. [L1023, 2020-26]

**Checkpoint before ads**

- Six audiences must exist before moving on: `website visitors - 7 days`, `website visitors - 30 days`, `website visitors - 180 days`, `purchased - 7 days`, `purchased - 30 days` and `purchased - 180 days`, with retention of 7, 30 and 180 days. Check all six in the Audiences section of Meta Business Manager before starting ads. [L1023, 2020-26]

| Audience | Source | Event | Retention | Name |
|---|---|---|---|---|
| Website visitors | Website pixel | All website visitors | 7 days | `website visitors - 7 days` [L1023, 2020-26] |
| Website visitors | Website pixel | All website visitors | 30 days | `website visitors - 30 days` [L1023, 2020-26] |
| Website visitors | Website pixel | All website visitors | 180 days | `website visitors - 180 days` [L1023, 2020-26] |
| Purchasers | Website pixel | Purchase | 7 days | `purchased - 7 days` [L1023, 2020-26] |
| Purchasers | Website pixel | Purchase | 30 days | `purchased - 30 days` [L1023, 2020-26] |
| Purchasers | Website pixel | Purchase | 180 days | `purchased - 180 days` [L1023, 2020-26] |

- Name pattern: the Ads Manager procedure uses `website visitors - N days`, while the Business Manager procedure uses `website visits 180 days`. Both use the same windows. [L1023, 2020-26; L0649, 2019]

### Audience windows: the numbers in use

| Audience | Window in sources | When it applies | Source ids |
|---|---|---|---|
| Engaged (cart, checkout, visitors, email) | 30 to 60 days | Most buying cycles do not run much longer. | [L0259, 2025-26] |
| Add-to-cart retargeting | Test 30, 60, 90 and 180 days | Check results every one to two days, because these audiences can stop delivering sales suddenly. | [L0646, 2023] |
| Existing customers (pixel) | 180 days | 180 days is the maximum lookback the Facebook pixel can use to identify customers, so it is the standard window. | [L0259, 2025-26] |
| Purchasers, Ads Manager set | 7, 30 and 180 days | Created as a set; the 7-day list is used for exclusions and the 180-day list for promotions. | [L1023, 2020-26; L1204, 2022] |
| Website visitors for dynamic remarketing | 7 and 30 days | These lists cost nothing to keep populated, so leave them running. | [L1204, 2022] |
| Website visitors for monthly promotions | 180 days | Used with promotion emails. | [L1204, 2022; L1222, 2025+] |
| Warm audiences, low traffic | Broad 180 days | Start here when traffic is low. | [L0649, 2019] |
| Warm audiences, high traffic | 7, 30, 60 and 90 days | Split once traffic is high. | [L0649, 2019] |
| Instagram engagement | 180 days | Standard window in the setup procedures. | [L1204, 2022; L0649, 2019] |
| Instagram engagement, older lookback | 365 days | Example lookback for Instagram engagers. | [L0487, 2018] |
| Video viewers | 14 to 30 days (common windows 7, 14 and 30) | 14 to 30 days is the usual range: enough data without being too small. | [L1335, 2023+] |
| Page and Instagram engagement | 7, 14 or 30 days (30 used in example) | Created in the Audiences section. | [L1335, 2023+] |
| Page and Instagram engagement | 180 days | Use the correct Page for each business in Business Manager. | [L1204, 2022] |
| Thank-you audience | Purchasers of last 7 days | Free to set up. | [L1076, 2019] |
| Catch-all customer audience | Customers of last 180 days | Free to set up. | [L1076, 2019] |
| Older split (2019) | 7, 14 and 30 days | Website visitors in the past 7, 14 and 30 days for separate ad sets. | [L1086, 2019] |

- The 7-day audience always holds the most recent 7 days, so reuse audiences rather than ad sets. Create them in Business Manager, and select them inside new ad sets in each campaign. [L1086, 2019]

### Engagement and video audiences

- Video retargeting based on watch depth is a classic approach. People who watched 50 percent or 75 percent of a video are retargeted with an offer. It still works after iOS, though fewer people are trackable. [L0353, 2023]
- 75 percent video view depth has performed best. Stack audiences in the middle of the funnel (video viewers, page engagers) and bottom of the funnel (add to cart, engaged with brand). [L0067, 2023]
- Test different view depths (25%, 50%, 75%), or stack them into one large audience to maximize reach. [L0067, 2023]
- A common retargeting option is people who watched 75% of a video. Stack related audiences (video views, engagement, page views, added to cart) into one larger audience, because Facebook tracks retargeting poorly. [L0640, 2023]
- Video-view custom audience (procedure, as described):
  - Go to Ads Manager > All tools > Audiences > Create audience > Custom audience. [L1335, 2023+]
  - Select video engagement and choose the relevant video ads. [L1335, 2023+]
  - Set a people-who-watched-at-least-25%-of-video threshold. [L1335, 2023+]
  - Select a retention window. The common windows are 7, 14 and 30 days, and 14 to 30 days is the usual range. [L1335, 2023+]
- Engagement audiences as seeds: a 1% lookalike built from purchase events shows high intent, and 75 percent video-view audiences may also work as a seed. [L0646, 2023]
- Page and Instagram engagement custom audiences: create them in the Audiences section with a window of 7, 14 or 30 days (30 days in the example). Website audiences are built from pixel events such as add to cart, initiate checkout and purchase. [L1335, 2023+]
- Engagement audience case: a Facebook page engagement audience (past 30 days, about 3,600 engagers) built a top 1% lookalike that reached about 720,000 people. [L0487, 2018]

### Engaged audience and existing-customer segments

**Engaged audience (procedure)**

1. Click Create custom audience. [L0259, 2025-26]
2. Select Website as the source, because that is where the actions happen. [L0259, 2025-26]
3. Click Next. [L0259, 2025-26]
4. Set the time window to 30 to 60 days. [L0259, 2025-26]
5. Select the three events: website visitors, add to cart and initiate checkouts. [L0259, 2025-26]
6. Click Create audience to add it to your engaged audience. [L0259, 2025-26]

- Include three events in the engaged audience: website visitors, add to cart and initiate checkout. [L0259, 2025-26]
- The custom audience form includes an Exclude people field with a limit of 0/50, which excludes certain audiences from the definition. [L0259, 2025-26]
- Engaged audiences are still treated as new customers for targeting and reporting, because they have not yet made a purchase. [L0259, 2025-26]

**Existing customers**

- Define existing customers as people who made a purchase in the last 180 days, based on the Facebook pixel. [L0259, 2025-26]
- Existing customers include email-list purchasers as well as pixel-tracked ones. [L0259, 2025-26]

**Syncing a Klaviyo purchaser segment (procedure)**

1. In Klaviyo, create a segment for everyone who made a purchase, so the segment continuously updates. [L0259, 2025-26]
2. Go to Klaviyo's APIs and integrations section. [L0259, 2025-26]
3. Connect Facebook to Klaviyo. [L0259, 2025-26]
4. Follow Klaviyo's steps to complete the synchronization. Your Klaviyo audience will then sync as a Facebook custom audience. [L0259, 2025-26]

### Audience segment reporting

**Setup and display**

- Audience segments let you define groups of customers and receive performance reporting broken down by those definitions, so you can track how ad spend flows between new and existing audiences. [L0259, 2025-26]
- In Ads Manager, go to Advertiser Settings > Audience Segments to define and edit the engaged audience and the existing customer audience. [L0259, 2025-26]
- At campaign level, the Audience segment reporting section displays the defined segments. Click Edit in advertiser settings from there to modify the definitions. [L0259, 2025-26]
- After changing segment definitions, allow a few minutes for the changes to reach reporting. The confirmation message states that changes typically happen within a few minutes. [L0259, 2025-26]

**Breakdown (procedure)**

1. Go to the campaign level in Ads Manager. [L0259, 2025-26]
2. Click Breakdown. [L0259, 2025-26]
3. Search for `audience segments`, or navigate to Demographics > Audience segments. [L0259, 2025-26]
4. Campaign performance is displayed broken down by new audience, engaged audience and existing customers. [L0259, 2025-26]

**Check of spend split (procedure)**

1. Break down your campaign by audience segments. [L0259, 2025-26]
2. Verify that the majority of ad spend goes to new and engaged audiences. [L0259, 2025-26]
3. If the majority does not go to new audiences, investigate whether campaign exclusions exist and whether they are configured tightly enough. [L0259, 2025-26]

- Rule: ensure the majority of ad spend goes to new and engaged audiences, not existing customers. [L0259, 2025-26]

### Customer list uploads and seed sources

**Creating a custom audience from an email list (procedure)**

1. Go to Audiences in the Ads Manager sidebar and create a custom audience. [L0641, 2014]
2. Choose the data file option, then give the audience a name and description. [L0641, 2014]
3. Upload the file as a CSV or TXT file containing only one column of email addresses. [L0641, 2014]
4. If the audience shows as not ready, wait about 10 seconds, refresh the page and wait again. Processing can take a couple of hours. [L0641, 2014]
5. When ready, check how many profiles matched the email addresses. [L0641, 2014]

**Uploading a customer list**

- To upload a customer list: go to Audiences, click Create Audience, choose Custom Audience, then select the existing customer list option instead of website traffic. Facebook accepts email addresses or phone numbers, and names are not needed. [L0643, 2015]
- A customer list needs a minimum of 100 customers before Facebook will create a lookalike audience from it. Upload the list and Facebook returns the audience in about 35 seconds. [L0643, 2015]
- Upload an existing customer list to Meta, even a small one of about 100 orders, to give the pixel a head start in finding similar buyers. [L0649, 2019]
- Use a customer list uploaded to Facebook as a custom audience when running Advantage+ campaigns. In the lesson's case, broad targeting with the list still underperformed, so test it rather than assume it works. [L0999, 2023]

**Mistakes and match rates**

- Uploading an email list unrelated to your niche gives weak results, because the lookalike built from it will not represent your buyers. [L0641, 2014]
- Match rates are not guaranteed. In one example, 1,300 of 2,000 emails (65%) matched. [L0641, 2014]
- Do not use custom audiences in the early testing phase. Start with interest targeting and add custom audiences later. [L0648, undated]

**Opted-in leads and LinkedIn**

1. Build your LinkedIn connections with the people who fit your target buyer. [L0643, 2015]
2. Export that contact list. [L0643, 2015]
3. Upload it to Facebook (and Twitter) as a custom audience. [L0643, 2015]
4. Market a product that is relevant to their office or role. [L0643, 2015]

- Cold ad sets use interest audiences and lookalikes. Build lookalikes from customers when there is enough data, otherwise from opted-in leads, and if needed from website visitors. [L0649, 2019]

### Lookalike audiences

**Creating a lookalike (procedure)**

1. Go to Audiences, choose create audience and then lookalike audience. [L0641, 2014]
2. Select the custom audience you created as the source. [L0641, 2014]
3. Select the country to target. [L0641, 2014]
4. Set the audience size to similarity, not reach. Reach-based optimization gave the opposite effect in testing. [L0641, 2014]
5. Create the audience and wait, usually a couple of hours, until it shows as ready. [L0641, 2014]
6. Enter the lookalike audience into the custom audience field of your precise interest ad set to narrow it, rather than targeting the lookalike alone. [L0641, 2014]

**Size bands and seeds**

- Choose the top 1% of similar people for the largest reach, or narrower bands such as the top 1 to 2% or top 2 to 4% for closer matches. [L0487, 2018]
- Create the lookalike with engagers as the source, for example people who engaged with the Facebook page in the past 30 days. [L0487, 2018]
- Split purchaser lookalikes into size ranges such as 0 to 1, 1 to 2 and 2 to 3 percent, to test which pool converts best. [L0549, undated]
- The 1% band gives the largest reach, so start there before testing narrower bands. [L0487, 2018]
- Build lookalikes from both seed audiences and engagement audiences, then rotate new content through all of them. Lookalikes are a cheap way to start on Facebook without wasting money on guesses. [L0487, 2018]
- Lookalikes are less effective than before. One-percent lookalikes for purchase events show high intent. [L0646, 2023]
- Lookalike audiences are built after a product has several proven audiences, usually three to four winners. Each winner can be scaled on its own, and lookalikes made from those winners help Meta find similar people at a larger size. [L0648, undated]

**Reach and results**

- A lookalike built from a small customer list (even around 100 emails) typically landed near 2 million people. It works best as a narrowing layer on top of an interest-based ad set, not as a stand-alone target. [L0641, 2014]
- With a niche-relevant list, the combined audience was expected to fall to about 200,000 to 250,000 people. [L0641, 2014]
- In another example, a customer list of 100 or more people produced a lookalike of about 170,000 people. The maximum reach can go up to 2 million. [L0643, 2015]
- Narrowing that lookalike to people who also like a proven interest reduced it to about half or a third, but made the audience far more targeted. [L0643, 2015]
- Run a split test between a precise interest campaign and a lookalike campaign. Compare cost per conversion, and test the lookalike against interest targeting rather than assuming it is better. [L0641, 2014]

**Case: CrossFit equipment store (case)**

- Starting point: the whole United States audience of about 150 to 250 million people. [L0641, 2014]
- Targeting a large niche brand page narrowed it to about 500,000 to 600,000 people. Adding related pages raised it to about 700,000 to 800,000. [L0641, 2014]
- The lead ad set on a single precise interest showed a potential audience of about 560,000 people. [L0641, 2014]
- A customer email list of about 2,000 addresses, mostly not CrossFit-related, matched 1,300 profiles (65%) and produced a lookalike of about 2.1 million people. [L0641, 2014]
- Combined with the precise interest ad set, the potential audience dropped to about 38,000 because the list was off-niche. A niche-relevant list was expected to bring it to about 200,000 to 250,000. [L0641, 2014]
- Over two days, the lookalike campaign reached a cost per conversion of 0.93 dollars, against 1.20 dollars for the precise interest campaign, a saving of about 30%. Savings of up to half were seen in other cases. [L0641, 2014]

**Formula and seeds (formula)**

- Lookalike audience: give Facebook a seed audience, such as a retargeting list of past site visitors, ideally people who converted, and ask it to find new people with similar attributes. These are cold users who have not visited the site yet. An example lookalike reached 1.2 million people. [L1203, 2016]

**Size and sources: a note on conflicts**

- Lookalike size depends on the seed. One source gives top 1% as the largest reach, another shows about 2 million from a small generic list, and a third shows about 170,000 from a 100-person-plus list. Use the size band that matches your seed, and test before scaling. [L0487, 2018; L0641, 2014; L0643, 2015]
- The processing time differs by source. A customer-list lookalike returned in about 35 seconds in one lesson, while another said a couple of hours. Expect a couple of hours for a lookalike to show as ready, and check the status before launch. [L0643, 2015; L0641, 2014]


Part 30 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/29-cbo-scaling-structures.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/31-retargeting-by-timing-and-funnel-position.md
