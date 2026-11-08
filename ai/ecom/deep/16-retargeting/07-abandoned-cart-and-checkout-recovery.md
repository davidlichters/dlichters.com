<!-- part of ecom/deep/16-retargeting.md -->
Part 7 of 10 of "16. Retargeting: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/16-retargeting.md · Previous: https://dlichters.com/ai/ecom/deep/16-retargeting/06-ad-sequencing-timing-and-frequency.md · Next: https://dlichters.com/ai/ecom/deep/16-retargeting/08-promotions-holidays-and-q4-retargeting.md

## Abandoned Cart and Checkout Recovery

### Finding Abandoned Carts in Shopify

- Abandoned carts appear in the Shopify admin under the Orders dropdown menu. [L0470, 2023]
- Abandoned checkouts are listed under Orders > Abandoned Checkouts. The list shows the checkout number, order date, customer, email status and whether the cart was recovered. [L0737, 2020-26]

### Nightly Check Routine

Check abandoned carts every night in the Shopify admin. [L0671, 2021]

1. Open Orders in the admin panel. [L0671, 2021]
2. Click Abandoned carts. [L0671, 2021]
3. Note who abandoned which products. [L0671, 2021]
4. Follow up with each one, or have someone do this for you. [L0671, 2021]

### Speed and Channel Priority

- Following up on abandoned carts is one of the first automations worth building for a dropshipping store. [L0437, 2020-26]
- The follow-up should be sent as quickly as possible after a shopper leaves without buying, ideally within minutes rather than hours. [L0437, 2020-26]
- Abandoned-cart recovery works best through direct calls and text messages as soon as possible, while email runs automatically in the background. (2023) [L0470, 2023]
- A Shopify and Slack integration can send an alert with the customer's name and cart items so you can reach out quickly. [L0470, 2023]

### Email Follow-Up

- At the very least, send an email to every abandoned cart. Early on, calling them directly is a way to recover more sales. [L0671, 2021]
- Once the store is established, run abandoned cart follow-up as an automated email flow, for example one built in Klaviyo. [L0671, 2021]
- The Klaviyo app can run the abandoned cart reminder flow. [L1400, undated]

#### Manual Abandoned Checkout Emails (before automating)

1. In Shopify, click Orders. [L0857, 2025]
2. In the dropdown, click Abandoned checkouts. [L0857, 2025]
3. Open the records that include customer details and email each customer. [L0857, 2025]
4. Start with manual emails before automating this step. [L0857, 2025]

Template for the manual email (replace the bracketed parts before sending):

```
Subject: Quick question about your order

Hi [customer first name], this is [your name], the owner of [store name].com. I noticed you had [items in cart] in your cart but did not finish your order. I wanted to check whether anything stopped you from ordering from our store. If you have any questions or comments that would help us understand why you did not complete the order, please reply. I am happy to help and to do what we can to earn your business.

[Your name]
[Store name]
```

[L0857, 2025]

### Phone and SMS Follow-Up

#### Call Recovery Procedure

1. Keep automated follow-up emails as the first step. [L0429, 2022]
2. Set a delay timer of a few minutes after a cart is started and not completed. [L0429, 2022]
3. Send an alert (for example through Slack, or Zapier as an alternative) with the customer's name, products and phone number. [L0429, 2022]
4. Call as soon as possible and ask whether there are questions or problems with the order. [L0429, 2022]

#### Call Script

```
Hi [customer first name], this is [your name] from [store name]. I noticed you started an order for [product name] but did not finish checking out. Is there anything I can help with, such as a question about the product, the shipping time or the payment options?
```

[L0429, 2022]

#### Personal Outreach

- Contact people who left items in their cart and ask what happened, since a direct conversation can turn them into buyers. [L0709, 2017+]
- Personal outreach can recover sales that automated messages miss. [L0709, 2017+]

### Visitors Without Contact Details

- Visitors who start checkout but leave before entering any contact details cannot be followed up personally. Reach them through remarketing ads only. [L0471, 2024]

### Messenger and Ad Funnel (Day by Day)

#### Tool Stack

- The automated abandoned-cart funnel uses five tools: Facebook, Shopify, an email marketing tool, Minichat as a Facebook Messenger bot, and Zapier to connect Minichat with Shopify. [L1243, 2017]
- Minichat and Zapier both have free plans. Their paid plans were cited at under 20 USD per month. [L1243, 2017]

#### Messenger and Social Retargeting

- Keep Facebook and Instagram retargeting set up properly, because influencer visitors who did not buy can be retargeted to convert later. [L0790, 2017]
- Add Messenger abandoned cart messages to capture visitors who add items but leave. [L0790, 2017]

#### Funnel Steps

| Day after abandoned cart | Shopper status | Action | Channels |
|---|---|---|---|
| 0 to 2 | Has not bought | Reminder that the cart is still waiting. Assume the shopper was distracted, busy or comparing prices. Do not offer a discount yet. | Messenger sequence and Facebook ads |
| 3 to 4 | Still has not bought | Offer the easiest incentive: often free shipping, or 10% off if free shipping is not the lowest-cost option. Include the discount code and a link back to the store. | Messenger, collection ad and email |
| 5 to 7 | Still has not bought | Send the best offer and add scarcity. Use social proof on days 5 and 6. On day 7, make the best discount expire within 12 hours. | Video ads and emails |

Sources: Day 0 to 2 [L1243, 2017]; Day 3 to 4 [L1243, 2017]; Day 5 to 7 [L1243, 2017]

- Reach the shopper through several channels, because many buyers need multiple touchpoints before they purchase and may not check a single channel. [L1243, 2017]
- Each message should show that the store wants the sale, since competition is high. [L1243, 2017]

### Offers

- Abandoned cart reminders work better when they include a valuable offer, because the offer gives the shopper a reason to return and finish checkout. [L1399, undated]

### Cart Audiences and Exclusions

#### Fallback Without Abandoned Cart Data

- When you have no abandoned cart data, use Facebook retargeting ads to target people who viewed your products or added items to their cart. [L0276, 2024]
- Combine Facebook retargeting with Google remarketing using the same audience to maximize visibility. [L0276, 2024]

#### Audience Setup Procedure

1. Create a custom audience of people who visited your cart page. [L0643, 2015]
2. Create an exclusion audience of people who reached the thank-you, confirmation or checkout-complete page. [L0643, 2015]
3. Use a generic retargeting image such as your store logo or a range of your products, and not necessarily the exact product left in the cart. [L0643, 2015]
4. Show a message such as "Did life get in the way? Come back and finish your order." [L0643, 2015]
5. Optionally, after a while, show a 5 or 10 percent discount code to people who have still not bought, and never to buyers. [L0643, 2015]

#### Trigger Setting

- For the abandoned-cart campaign, use the Add to Cart event as the trigger when building Facebook audiences. In the collection ad audience settings, select Add to Cart from the viewed product, add to cart and purchase options. [L1243, 2017]

#### Three-Audience Sequence

Set up these three audiences once so the shopper moves through the funnel automatically. [L1243, 2017]

| Audience | Added to cart | Excludes | Funnel step |
|---|---|---|---|
| 1 | 0 to 2 days ago, not purchased | nothing | Reminder |
| 2 | 3 to 4 days ago, not purchased | last 2 days | Easy offer |
| 3 | 5 to 7 days ago, not purchased | previous 4 days | Best offer and deadline |

- The lesson's wording for audience 2 was ambiguous, but this table matches the funnel timing it describes. [L1243, 2017]

#### Expected Results

- Retargeting abandoned cart visitors on Facebook can recapture up to 25 percent of lost sales, on top of the automated abandoned-cart email sequence. [L0643, 2015]

### Testing and Benchmarks

- The commonly cited average abandoned cart rate is 67%, based on a 2015 study. The presenter estimated the current figure is higher, in the 70s, but gave no source for that estimate. [L1243, 2017]
- Automated follow-up for abandoned checkouts must be tested. A low answer rate (about 1 in 10 calls answered) is normal. [L0806, 2024]
- Phone follow-up by hand often does better than automation alone. [L0806, 2024]

## Capturing Emails and Cross-Channel Follow-Up

### Exit-Intent and Opt-In Capture

- Capturing email addresses from bounced visits, meaning visitors who leave without purchasing, gives a second chance to convert them and reveals customer hesitations and preferences. [L0154, undated]
- Collect email addresses from every visitor who reads content or opts in, so you can follow up later. Email follow-up is what makes peak-season sales strong. ** [L1274, 2018]
- Set up an email pop-up to capture visitors who are not ready to buy. This extends the relationship beyond the visit. [L1136, 2014]
- A browse abandonment feedback survey is an optional extra channel. It is not a required part of collecting customer feedback. [L0682, 2021-22]
- Set up a browse abandonment survey email only if the store already tracks browse abandonment. [L0682, 2021-22]

### Lead Magnets

- Run paid ads to a lead magnet landing page with an email capture form. Offer a piece of content or an ebook sample in exchange for the email address. [L0789, 2022]
- Use this approach to grow the follower base and the email list at the same time. [L0789, 2022]

### Email Lists and Invisible Audiences

- Audiences fall into two groups:
  - **Email lists:** opted-in subscribers, for example in Klaviyo.
  - **Invisible lists:** platform audiences built from site visits, purchases and social engagement. They include people who never opted in.
- You need both, because only a small share of visitors ever give their email address. [L1204, 2022]

### Uploading Customer Lists to Ad Platforms

Procedure for adding your Shopify email list to remarketing (2024):

1. Export your customer email list from Shopify. [L0965, 2024]
2. In both Google Ads and Meta Ads, create a customer list audience from that file. The list may include people who have not bought yet. [L0965, 2024]
3. Upload the list to both platforms. [L0965, 2024]
4. In your remarketing ad group, stack the new customer list together with your website visitor audience so both are included. [L0965, 2024]

Procedure for improving Facebook remarketing performance (*older: 2022*):

1. Set Shopify data sharing to maximum. [L1113, 2022]
2. Upload the Klaviyo list of opted-in people who have not bought yet to a Facebook custom audience. [L1113, 2022]
3. Add that audience to your remarketing campaigns. [L1113, 2022]
4. Check frequency, and reduce spend if the same people see the same ads repeatedly. [L1113, 2022]

### Syncing Email With Ads

- Sync your ads with your emails so that everyone in the broadcast email audience sees the offer message, including people who do not open email. [L0757, 2022]
- Post each email promotion or piece of content to Facebook and run it as an ad at the same time. This way the list and the audiences see the same message, which builds the relationship and moves people closer to buying. [L1076, 2019]
- Run remarketing ads on Meta and Google, and email the visitor audience, to bring back people who visited the store. Use pixel-based audience data to build these lists. [L1115, 2024]

### Retargeting Visitors and Abandoners

- Retarget visitors who did not buy with ads and email campaigns. Use messages that follow up on the page they viewed. [L1016, 2026]
- Follow remarketing visitors and abandoned carts from two angles at once: automated emails in Klaviyo and personal outreach by the owner. ** [L1092, 2022]
- Set up retargeting for visitors who arrive from Pinterest, so they can be reached again after leaving the site. [L1136, 2014]
- Retargeting is a two-part development stage. ** [L0414, 2021-22]
  - Part one: retargeting ads on Google, Facebook and YouTube.
  - Part two: personal communication through email, SMS, push notifications and Messenger.
- Smaller high-ticket businesses often neglect personal communication. ** [L0414, 2021-22]
- Three main follow-up strategies exist: retargeting ads, email marketing and SMS marketing. ** [L1497, 2021-22]
  - Retargeting ads run mainly on a few networks.
  - Email is the classic follow-up channel.
  - SMS is an older channel that can still deliver strong returns when used well.

### Personal Follow-Up Messages

- Use this formula for personal follow-up: name the product, use the real time the visitor spent on that product page from your tracking tool, then ask one simple question about whether they still want it. The specific detail shows a real person is paying attention, so the message feels personal rather than automated. Keep it short and never reuse a fixed script. [L1472, 2022]

```
Hi {customer_name}, you spent about 20 minutes looking at the {product_name} yesterday. Are you still interested, or can I answer a question for you?
```
[L1472, 2022]

```
Hi {customer_name}, I noticed you came back to the {product_name} page several times this week. Would it help if I checked its availability for you before you decide?
```
[L1472, 2022]

### SMS and Push: Channel Limits

- SMS retargeting works only for customers who tick the consent box to receive SMS. If most customers do not tick it, the channel delivers almost nothing. Do not rely on it as the main recovery channel. [L1216, undated]
- SMS retargeting results depend heavily on the market. In the reported experience it worked in the US, Canada and Australia, but not in Switzerland, Germany and Austria. Test the channel per market before relying on it. [L1216, undated]
- Sources differ on SMS. The older one source material calls it a channel that can still deliver strong returns when used well. [L1497, 2021-22] one source limits its use to consenting customers and to specific markets. [L1216, undated]
- Push notifications are one of the personal channels listed alongside email and SMS for follow-up. ** [L0414, 2021-22]

### Multi-Channel Coordination

- Multi-channel marketing across email, SMS, push notifications and retargeting on platforms such as Google, Facebook, Pinterest and Snapchat works best when each message delivers value. Repeating the same product picture across channels mainly annoys customers. ** [L0949, 2021-22]
- Run retargeting ads and personal messages together as one development stage, rather than as separate tasks. ** [L0414, 2021-22]
- Keep ad and email messages consistent so that the list and the audiences see the same offer. [L0757, 2022; L1076, 2019]


Part 7 of 10 of "16. Retargeting: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/16-retargeting.md · Previous: https://dlichters.com/ai/ecom/deep/16-retargeting/06-ad-sequencing-timing-and-frequency.md · Next: https://dlichters.com/ai/ecom/deep/16-retargeting/08-promotions-holidays-and-q4-retargeting.md
