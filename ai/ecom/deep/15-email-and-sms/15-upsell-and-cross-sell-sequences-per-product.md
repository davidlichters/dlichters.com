<!-- part of ecom/deep/15-email-and-sms.md -->
Part 15 of 29 of "15. Email and SMS: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/15-email-and-sms.md · Previous: https://dlichters.com/ai/ecom/deep/15-email-and-sms/14-post-purchase-transactional-and-retention-flows.md · Next: https://dlichters.com/ai/ecom/deep/15-email-and-sms/16-source-conflicts-and-version-notes.md

### Upsell and Cross-Sell Sequences Per Product

#### Per-product triggers and setup

- Build an automated post-purchase upsell sequence of three to four emails. It is triggered automatically when a customer buys a specific core product and does not change the purchase confirmation emails, which are sent alongside it. [L1409, 2021]
- Email upsell setup steps:
  1. Download the email template packet, which includes the email templates and timing instructions. [L1409, 2021]
  2. Paste each template into your email tool as a step in the sequence. [L1409, 2021]
  3. Customize the email text with the specific products and details for each core product. [L1409, 2021]
  4. Set the send timing for each email as the instructions specify. [L1409, 2021]
  5. Create one flow per core product from the planner list, with the trigger "Customer buys [that core product]". [L1409, 2021]
  6. Activate each flow so that it runs automatically on each matching purchase. [L1409, 2021]
- Create a separate email flow for each core product in the upsell planner. For example, ten core products targeted with upsells require ten separate flows, each triggered by its own product purchase. [L1409, 2021]
- Drip and Klaviyo both integrate with Shopify and can trigger an email flow when a specific product is purchased. Other major email tools offer similar purchase-based triggers. [L1409, 2021]
- Email flows can be set up to trigger on a specific product purchase, so each product can have its own upsell email. Set this up in Klaviyo using product triggers. [L0970, 2023]
- Segment customers in Klaviyo who purchased a specific product:
  1. Create filter: "Include > Orders > Product is [product name]". [L0274, 2023]
  2. Create filter: "Exclude > Orders > Product is [related product]" (optional). [L0274, 2023]
  3. Set up automation to email this segment with a complementary product offer. [L0274, 2023]
- Plan each product's sequence so the next offer is clear and timed. Choose the interval from Section "Core Principles" above and test it. [L0493, 2021-22]

#### Full four-sequence upsell campaign per core product

- Upsell email setup for each core product, in order:
  1. Sent immediately after the first purchase of the core product: 3 to 4 emails sent automatically in a row. [L1408, 2021]
  2. Sent 15 to 30 days post-purchase: the same 3 to 4 emails again, with minor variations. [L1408, 2021]
  3. Sent 60 days post-purchase: the same 3 to 4 emails again, with minor variations. [L1408, 2021]
  4. Sent 120 days post-purchase: the same 3 to 4 emails again, with minor variations. [L1408, 2021]
- A full upsell email campaign uses four sequences per core product: one immediately after purchase, then at 15 to 30 days, at 60 days and at 120 days after purchase, each containing 3 to 4 emails. [L1408, 2021]
- Formula: automated upsell emails per core product = 4 sequences × 3 to 4 emails each = 12 to 16 emails. Across several core products the total multiplies accordingly, which looks like a large number but comes from copying the same emails. [L1408, 2021]
- In Klaviyo, the four sequences can be built as one flow per product with four email sets inside it, or as four separate flows. Either structure works as long as the emails are sent at the right intervals. [L1408, 2021]
- Each upsell sequence needs a condition that removes the customer from the flow if they have already bought the upsell product, so they stop receiving offers for something they own. [L1408, 2021]
- The 15 to 30 day window is a good time to re-offer an upsell because the core product has usually been delivered and the customer has started using it, so add-ons and bundles are easier to value. [L1408, 2021]
- The 15 to 30 day window also fits customers whose budget was stretched at the first order, since after the next payday or a freed-up credit card limit they may be able to afford the upsell. [L1408, 2021]
- The 60-day and 120-day sends reach customers who have had more time with the product, so their opening email should reintroduce the same upsell with a slightly different angle. Reusing the exact wording from the 15 to 30 day send makes later sends feel stale. [L1408, 2021]
- Creating the sequences efficiently: duplicate the first upsell flow four times, then change only the opening email of each copy slightly (for example the framing of the offer for the later send date). The products and the rest of the emails stay the same. [L1408, 2021]
- Duplicating an upsell flow works differently in each email platform, so check how your tool copies flows, sequences or individual emails before building the four timed sets. Only the opening email of each copy needs small wording changes; the upsell product and the rest of the emails stay the same. [L1408, 2021]
- Setting up the full set of duplicated upsell flows is quick, so it can be spread over several days or a month alongside other work instead of being done in one long session. [L1408, 2021]
- Most email recipients never open a given message, and average open rates sit around 20 to 30 percent, so repeating the same upsell offer across several sends reaches different people each time and raises total conversion. [L1408, 2021]
- Sending an upsell offer only once and not sending enough emails overall is a common error in email marketing. A single send misses the majority of buyers who never open it. [L1408, 2021]
- Repetition is a core marketing principle: the same call to action can be repeated several times on a page or across messages without harm, as long as it stays respectful and consistent. [L1408, 2021]
- Upsell email sequences should run alongside the store's regular customer emails, since those keep the relationship going between upsell sends. Together they keep the brand top of mind and make each later upsell offer feel more natural. [L1408, 2021]

#### Offer templates and patterns

- Post-purchase follow-up for a low-ticket part that belongs to a high-ticket product, sent immediately after the first order:

```
Hi [First name], thanks for your order of [low-ticket item]. It is a part for [high-ticket product]. As a thank-you, we would like to offer you a free consultation with one of our experts. You can book it here: [calendar link]. [Your brand name]
```
[L0334, 2017]

- Warranty reminder email, sent automatically when the warranty checkbox was not ticked at checkout:

```
Hi [First name], you did not add the [warranty name] to your order of [product name]. You can still add it here: [link] and get 25% off the warranty within [time limit]. If you have questions, just reply to this email. [Your brand name]
```
[L0334, 2017]

- Missed add-on reminder pattern: [Name], you did not add [the add-on that protects or completes the purchase] to your order. Here is [a specific discount] to add it now, with a time limit and a reply option. This works because it frames the upsell as a reminder of a missed item rather than a new sale.
  - Example 1: `Hi Sam, you did not add the extended care plan to your standing desk order. Get 20% off within 48 hours: [link].`
  - Example 2: `Hi Maya, you did not add the spare filter set to your air purifier order. Add it today for 15% off: [link].` [L0334, 2017]

- Cross-sell email for repeat buyers, sent 7 to 14 days after delivery together with the dynamic product ad. Pair product X with product Y in the product catalog before sending, so the ad and the email recommend the same item:

```
Subject line: 'Pairs well with your {product X name}'

Hi {first name}, thanks again for your order of {product X name}. Many customers who love it also pick {product Y name}, so we thought you would like to see it. Your code {coupon code from the first email} still works until {expiry date} for {discount}. See the pick here: {link}.
```
[L1243, 2017]

- Post-purchase messages can add a discounted offer for other products to thank-you emails. [L0604, undated]

### Digital Bonuses and Access Links

- Delivering a digital bonus after purchase with Klaviyo:
  1. Create a flow in Klaviyo triggered by a purchase of the product. [L0934, 2023]
  2. Add an email that sends the access link. [L0934, 2023]
  3. Use a Google Drive link to PDFs or an unlisted YouTube video or unlisted page as the link. [L0934, 2023]
  4. Test the flow before going live. [L0934, 2023]

### Review, Photo and Testimonial Requests

#### Timing

- Send post-purchase email sequences over 14 days requesting text reviews, product photos and videos. Incentivize submissions with discount codes, gift cards or physical gifts to increase participation. [L0286, 2018]
- The photo or review request should be sent a few days after the delivery email, not on the day the product arrives. Waiting gives the customer time to use the product before being asked. [L0417, 2020-26]
- Using a time delay that is shorter than the real delivery time sends the request before the product has arrived. Set the delay from the actual average shipping time and add a few days on top. [L0417, 2020-26]
- Judge.me's default review request email is sent 14 days after purchase, so the buyer should already have received the product. [L1245, 2020-26]
- Review requests are also sent after repeat purchases, so customers who buy again are asked for a review too. This keeps the review base growing over time. [L1245, 2020-26]
- Contact customers about three months after purchase to ask for their experience with the product, and collect quotes from several customers into one evergreen blog post. Customer setup showcase pages can be created by year and updated as customers submit photos or reviews. [L1120, 2024+]

#### Building the review flow in Klaviyo

- Klaviyo review request flow (Testimonial ask), step by step:
  1. In Klaviyo, open Flows and create a new flow, for example named Testimonial ask. [L0417, 2020-26]
  2. Under the trigger, choose the metric Ordered Product (filters are optional). [L0417, 2020-26]
  3. Add a time delay after the trigger that matches the normal delivery time plus a buffer, for example 10 days when shipping takes about 7 days. [L0417, 2020-26]
  4. Add an Email action after the delay. [L0417, 2020-26]
  5. Edit the email in the drag-and-drop builder: set the sender name, the subject line, images and text, or use the HTML builder if needed. [L0417, 2020-26]
  6. Save the email, set the flow status to Live, then click Save and exit. The flow then sends automatically in the background without further work. [L0417, 2020-26]
- Aftership-based delivery flow:
  1. Install and connect Aftership to the Shopify store. [L0417, 2020-26]
  2. In Klaviyo, open the prebuilt delivery flow that is triggered when a customer receives delivery via Aftership, which loads pre-built emails. [L0417, 2020-26]
  3. Edit the flow so the photo or review email goes out a few days after the delivery email. [L0417, 2020-26]
  4. Save the flow and set it to Live. [L0417, 2020-26]
- A flow that is saved but not set to Live never sends anything. Always switch the flow to Live before saving and exiting. [L0417, 2020-26]
- In a Klaviyo flow with a time delay, each new buyer enters the flow on the trigger and waits in a queue for the full delay before the email is sent. One flow therefore handles every order automatically, with no manual sending per customer. [L0417, 2020-26]
- Klaviyo's built-in post-purchase flow can serve as a starting template for review request emails and can be edited to match the store's wording and timing. Sending review requests through Klaviyo rather than through an app's automated review emails keeps the whole sequence in one place. [L0429, 2022]
- Klaviyo automates review requests and follow-up emails once the business has enough orders to justify automation. Start with manual personal follow-up before automating. [L1111, 2020]

#### Incentives

- A reward for leaving a review must be automatically generated and tied to the review, so the same customer cannot pick up the same incentive repeatedly. Set the incentive in the review app's settings, not handled manually after each order. [L0476, undated]
- To encourage photo reviews without offering a free product:
  1. Send a gift card, typically $25 or $50, that the buyer can use on the next purchase. [L0429, 2022]
  2. Alternatively, send a small niche-related gift worth about $20 to $50 that you can drop-ship along with the order, if it is worth the cost. [L0429, 2022]

#### Review apps (Judge.me and Junip)

- Send product review requests through Klaviyo rather than through Judge.me's automated review emails. Judge.me's emails are not a deal breaker if the store is already happy with them. [L0429, 2022]
- Judge.me sends an automatic review request email to buyers, and it can be edited in the email template section with the built-in editor. Keep the review request turned on so buyers are asked for reviews after they receive their order. [L1245, 2020-26]
- Judge.me sends a confirmation email to a customer after they leave a review. It is part of the email templates and can be edited the same way. [L1245, 2020-26]
- Post-review actions flow:
  1. Open Post-review actions in the Flows section. The flow is set to trigger when a review is submitted. [L1244, 2025-26]
  2. Add an action to the post-review actions flow that sends the customer an email with their discount code. [L1244, 2025-26]
  3. Connect a messaging app under Integrations if you want the email or SMS action to be available. [L1244, 2025-26]
- Junip's Integrations screen offers messaging apps for post-review flows, including Postscript, Omnisend, Klaviyo, Drip and Shopify Flow. Connecting one adds email or SMS functionality to the flow. [L1244, 2025-26]

#### Review request template

```
Getting Value? Please Leave a Review!
```
[L1286, 2025]

### Surveys and Feedback Requests

#### Timing

- Send the post-purchase survey email a few days after purchase (for example three or four days). This is different from the review request, which is sent about two weeks after purchase. Do not send both on the same day, to avoid overloading the customer. [L0682, 2021-22]
- Send the first survey request email about 14 days after purchase, adjusted to your typical delivery times. The customer should have received the product first if the survey is meant to rate the product itself. [L1052, 2021]
- If the survey only covers the on-site experience or customer service, it can be sent closer to the purchase date. Sending it further out avoids cluttering the early post-purchase email sequence. [L1052, 2021]
- The customer feedback survey email in the one source sequence is sent 10+ days after purchase as the final touchpoint. [L0203, 2021]

#### Incentive

- Survey reward: small, about $10 to $15; loyalty points preferred, else discount code, cash back or Amazon gift card. [L1052, 2021, 07:04] Details: ../17-customer-service-returns-and-chargebacks/21-post-sale-calls-reviews-and-customer-feedback.md.

#### Reminders

- Every feedback or review request email should be followed by a reminder to those who have not responded yet. A reminder can also reach people who already responded without harm. Email open rates average about 30%, so a single email is often missed. [L0682, 2021-22]

#### Survey questions and examples

- Survey template (ask every caller or buyer in this order):

```
Before you wrap up, I have a few brief questions we put to every caller. While browsing our website, did anything seem broken or not work properly? [If yes: What was it?] Were you checking other websites while looking into this product? [If yes: Which ones?] Please share your candid opinion: did any of those sites appeal to you more, and if so, what made them stand out? What specifically did you like about them?
```
[L0682, 2021-22]

- A post-purchase survey email can ask how the buyer experienced the business, whether they compared other sites before buying, which sites those were, and what could be improved. These questions reveal competitor comparisons and friction points that the store can address. [L0682, 2021-22]

#### Reporting results to customers

- Send an email to the customer list once per quarter summarizing the survey results and the changes made in response. For smaller businesses or fewer responses, every six months is sufficient. [L1052, 2021]
- Quarterly update email structure: state that many people have filled in the survey, share a few points they highlighted about the business, then explain what has been changed internally in response to that feedback. Keep it short and factual, so customers see their feedback matters and get another reason to open future emails. [L1052, 2021]
- Automated survey emails can be sent through any email automation tool connected to your store. The send point after purchase is your choice, and the full follow-up process can be outsourced to a virtual assistant once it is set up. [L1052, 2021]

### Loyalty Program Reminders

- Tell customers about the loyalty program more than once, never only once. Send the first mention at or soon after the first purchase, then remind customers who hold points at least every three months. [L0956, 2021]
- Loyalty program introduction email: 72 hours after purchase, integrated into the welcome sequence. [L0203, 2021]
- Loyalty reminder email flow:
  1. Write one reminder email that says the customer has loyalty points, explains how to use them, and suggests products they can buy with the points. [L0956, 2021]
  2. Add it to the email marketing system as an automated flow. [L0956, 2021]
  3. Set the flow trigger to send to customers with loyalty points once every three months, at a minimum. [L0956, 2021]
  4. Activate the flow and leave it running. Review and adjust the wording occasionally, but do not rewrite it on a schedule. [L0956, 2021]
- Do not treat a loyalty program as a one-time announcement. Customers forget the program quickly, so repeated reminders are needed to produce repeat purchases. [L0956, 2021]
- Formula for a post-purchase message about a loyalty program:
  1. State the points earned on this order.
  2. Name one other action that earns more points, such as a review or a referral.
  3. State what the points can become on the next order.

  Customers are most receptive right after buying, and a concrete balance with a clear next step is easier to act on than a general mention. Examples: `Your order just added 150 points to your account. Leave a review on a product to earn more, then use the total on your next order.` and `Thanks for your order. You now have 320 points, enough for a discount on your next purchase. Refer a friend and you earn points when they buy.` [L0956, 2021]

### Referral Program Emails

- Promote the referral program several times so customers know it exists. Include it in an email sent shortly after a customer's first purchase. [L1234, 2021]
- Referral program introduction email: 8+ days after purchase, sent after post-purchase calls are confirmed, when customers have had positive experiences. [L0203, 2021]
- Place referral program emails after customers have experienced positive post-purchase touchpoints like support calls and loyalty rewards. Customers primed by satisfaction are far more willing to enthusiastically refer your business. [L0203, 2021]
- Connecting referral rewards to the loyalty system makes the process smoother, for example by awarding loyalty points for referrals. Emails can then cover both programs. This integration is helpful but not required. [L1234, 2021]
- Remind customers about the referral reward at least every three months by email. Also mention the referral program in personalized post-purchase messages. [L1234, 2021]
- Reminders about a referral program give customers a simple way to pass something of value on to friends, family or social followers. Framing the reminder around that benefit to the customer, not only the reward, is part of why it works. [L1234, 2021]

### Win-Back

- Win-back email template for customers who have not bought for a while (replace the placeholders in braces):

```
Hey {billing first name}, it has been a while since your last purchase from {store name}, and we miss you. As a thank you, here is $15 off your next order. Use code {discount code} at checkout: {store URL}. We hope to see you back soon. Reply STOP to opt out.
```
[L0477, undated]

- Repeat purchases come only from good service, so a win-back offer should follow a store that has delivered it. [L0434, undated]

### Cross-Store and Own-Niche Promotion

- Cross-promotion placed in the order confirmation email reaches customers after they have bought, so it does not interfere with the conversion rate of the main store. It also brings free traffic to the second store. [L0623, 2020-26]
- Add a note to the order confirmation email that refers customers to a related store with a return-customer discount code. This drives cross-store sales. [L0964, 2023]
- Cross-promoting two related stores:
  1. Add a note to the order confirmation email linking to the second store with a return-customer discount code. [L0964, 2023]
  2. Once both stores run well, use monthly store-wide promotions (module six, creating promotions) to mix audiences that have been customers longest. [L0964, 2023]
- Show own niche store offers after a sale is made, through the order confirmation email and the tracking notification emails. [L0923, 2015]
- Post-sale value example: a 100 dollar gun safe sale can become a 40 dollar ebook sale, plus a recurring 30 dollar per month subscription. Each buyer then brings in more revenue than the initial sale, which makes a higher cost per click affordable. [L0923, 2015]

#### Affiliate offers after purchase

- Affiliate links can be sent directly in emails, because you control your autoresponder and the buyer can click straight to the offer. This removes friction, although sending people to a blog review first also works. [L0923, 2015]
- Coupon codes from your own stores cannot be used for affiliate offers, because the buyer is sent to a different website. Own-store offers therefore come first in the sequence, and affiliate offers follow only if you have no suitable own store. [L0923, 2015]
- Offer placement after purchase:

| Offer type | When to show it | Where to show it | Tool or channel |
|---|---|---|---|
| Own related niche store | After a sale | Shopify order confirmation email and AfterShip tracking emails | Shopify, AfterShip |
| Affiliate store (affiliate network or Amazon Associates) | After a sale, after own-store offers | Order confirmation email and tracking emails, with direct links allowed | Commission Junction, ShareASale, Amazon Associates |
| Information product | Three-day autoresponder sequence after purchase, plus Facebook retargeting to blog posts for about 30 days | Email with direct affiliate link; blog review as retargeting target | ClickBank and niche affiliate programs, Facebook pixel |
| Upsell add-on | After an item is added to cart, and at checkout | Cart and checkout | Shopify product upsell app |
| Intangible item (warranty, same-day shipping, white glove delivery, assembly) | Same as upsell add-on | Upsell app, or a product page option for lower-priority offers | Shopify product upsell app |

[L0923, 2015]

- Cross-sell and cross-promotion sequence after a sale:
  1. Send the first own-store offer in the order confirmation email after a sale. [L0923, 2015]
  2. Add the same offer to the AfterShip tracking notification emails, so it appears in each tracking update. [L0923, 2015]
  3. Send affiliate store offers after the own-store offers, using the same post-sale emails if you have no own store. [L0923, 2015]
  4. Send an autoresponder sequence of about three days after the purchase that mentions information product offers. [L0923, 2015]
  5. Keep retargeting the buyer with Facebook ads to blog posts for about 30 days. [L0923, 2015]
  6. Keep the buyer on the email list and send broadcast emails for new offers and holidays such as Memorial Day and Black Friday. [L0923, 2015]


Part 15 of 29 of "15. Email and SMS: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/15-email-and-sms.md · Previous: https://dlichters.com/ai/ecom/deep/15-email-and-sms/14-post-purchase-transactional-and-retention-flows.md · Next: https://dlichters.com/ai/ecom/deep/15-email-and-sms/16-source-conflicts-and-version-notes.md
