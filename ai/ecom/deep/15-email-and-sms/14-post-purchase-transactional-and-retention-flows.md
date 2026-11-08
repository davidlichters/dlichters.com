<!-- part of ecom/deep/15-email-and-sms.md -->
Part 14 of 29 of "15. Email and SMS: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/15-email-and-sms.md · Previous: https://dlichters.com/ai/ecom/deep/15-email-and-sms/13-browse-abandonment-manual-cart-recovery-and-person.md · Next: https://dlichters.com/ai/ecom/deep/15-email-and-sms/15-upsell-and-cross-sell-sequences-per-product.md

## Post-Purchase, Transactional and Retention Flows

### Core Principles of the Post-Purchase Flow

- Transactional emails, meaning order and shipping confirmations, have extremely high open and click rates, so they are a good place to make an offer, ask a question or request feedback. [L0572, 2014]
- Order and shipping confirmations inform rather than persuade, so they do not need copywriting. [L0568, 2021-22]
- Admin emails such as order updates are not copy emails. Their main purpose is service, but an upsell can be added as copy if needed. [L0602, 2021-22]
- Shipping notifications have very high open rates because customers are waiting for their parcel, which makes them valuable for cross-selling and building trust. Default templates can be replaced with personal, friendly wording once the system works. [L0910, 2015]
- A post-purchase flow after the first order serves three purposes: it confirms the brand is legitimate, keeps the buyer informed about the order, and creates room for upsell and cross-sell offers. Keep the message personal and include a link to the brand's social media profiles to grow followers. [L0573, undated]
- After the initial purchase, allow customers time to use what they bought, then move them gradually up the value ladder over a longer period. The funnel type changes over time, for example from a free-plus-shipping buyer into an invisible funnel or a two-step high-ticket backend program. Relationship building matters more than the first transaction. [L0523, 2015+]
- Repeat purchases from existing customers only come when the store has delivered good service. Without good service, announcing new products to past buyers by email and SMS will not produce repeat sales. [L0434, undated]
- Plan post-purchase sequences in advance by mapping the path from one purchase to the next: what to communicate, which next product offer fits, and when to make it. [L0493, 2021-22]
- Each product purchased should trigger its own post-purchase sequence, different from the sequences for other products. [L0493, 2021-22; L0203, 2021]
- After a purchase, segment customers by what they bought and when they bought it, then send related product or service offers that bring them back and increase lifetime value. [L0676, 2020-26]
- Use email to bring existing customers back at key moments such as holidays and new product releases that match their interests. This is part of the post-purchase funnel, not only of the remarketing funnel. [L0676, 2020-26]
- The post-purchase flow should be split into two tracks, one for new customers and one for returning customers. [L0494, 2026]
- The post-purchase flow is aimed at customers who have already bought. It offers a discount to encourage a further purchase, so it is a repeat-purchase flow, not a flow for new visitors. [L0606, undated]
- Timing between post-purchase offers can be set at two weeks, one month or two months. Choose a starting interval and adjust it through experimentation, because the right timing is not known in advance. [L0493, 2021-22]
- Reply emails collect buyer insight and can also produce sales at the same time. Use them with buyers and with people who have not yet purchased. [L0378, 2019+]
- Transactional emails can invite replies that reveal why a visitor did not buy, or gather feedback from customers who did. Replies are a low-cost way to learn about objections and product satisfaction. [L0572, 2014]

### Order Confirmation and Shipping Confirmation

- Send the order confirmation immediately after purchase, then send a separate shipping confirmation when the order ships, typically within minutes to about an hour. Both should trigger automatically from order and fulfillment events, and both are good places to add an offer, a question or a request for feedback. [L0572, 2014]
- Order confirmation steps:
  1. Send the order confirmation right after purchase. [L0572, 2014]
  2. Send the shipping confirmation when the order ships. [L0572, 2014]
  3. About three days after the customer receives the product, email them to ask how the product is going, whether they like it, whether they are happy, and whether they have questions. [L0572, 2014]
  4. Invite them to hit reply to every one of these emails so they can answer. [L0572, 2014]
- Send one email immediately after a customer's first purchase, not an order confirmation. Use it to present the next offer while the purchase is still fresh: a higher-priced item, a discount, a warranty or a consultation. [L0334, 2017]
- Order confirmation text to adapt:

```
Thank you for your order. Items from [Brand or supplier A] are usually shipped within [X to Y] business days. Items from [Brand or supplier B] are usually shipped within [X to Y] business days. You will receive tracking updates by email as your order moves, and our team is here if you need anything.
```
[L0910, 2015]

- Adding the expected shipping time for each brand to the order confirmation email eliminated about 70 percent of the store's customer emails. This works because the customer gets the answer before they need to ask. [L0910, 2015]
- Show your own niche store offers after a sale through the order confirmation email and the tracking notification emails. Showing them to visitors through Facebook retargeting before purchase is a gray area that sometimes works and sometimes does not, so test it per niche. [L0923, 2015]

### Shipping Expectations, Tracking and Delivery Alerts

- Post-purchase shipping update flow, in this order:
  1. Connect the tracking app (AfterShip or similar) to Klaviyo. [L0605, undated]
  2. Create a trigger email for the order-shipped status. [L0605, undated]
  3. In the email, give the shipping update, the delivery timeframe (for example within a set number of days) and 2 to 3 lines of benefit-driven text about the product. [L0605, undated]
  4. Add a link to another collection with an extra discount for the customer's next order while they wait for delivery. [L0605, undated]
- Shipping update emails put the customer in a positive mood because they confirm the order is moving and the store is trustworthy. This is the moment to pitch another product or collection with an extra discount, since the customer is most concerned about tracking. [L0605, undated]
- The best offers work well inside fulfillment update emails, so add offers to shipping and delivery updates. [L0604, undated]
- Proactive delivery alerts by SMS, Klaviyo, WhatsApp or another channel protect the customer experience. Telling shoppers about a one-day delay early avoids the frustration of a late order with no update. [L0955, 2025-26]
- Klaviyo flows can fire on delivered and sent events from order tracking. Each event is an extra touchpoint for upsells and cross-sells. [L0955, 2025-26]
- Proactive delivery delay SMS or email template (replace the placeholders). Send it as soon as the delay is known, before the customer asks where the parcel is:

```
Hi {first_name}, a quick update on order {order_number}. Your parcel is running about {delay_length} behind schedule. Your new estimated delivery date is {new_date}. You can follow it here: {tracking_link}. Thanks for your patience.
```
[L0955, 2025-26]

- Add the same cross-promotion block to the AfterShip tracking notification templates, so every tracking update email also shows the related store offer. AfterShip sends a customer email each time UPS, FedEx or another carrier updates the tracking status. [L0923, 2015]
- A customer who buys typically receives around four or five AfterShip tracking emails, so the cross-promotion is shown several times at no extra cost. The number depends on how many carrier tracking updates each shipment produces. [L0923, 2015]
- The Aftership delivery trigger only works if Aftership is installed and connected to Shopify. Without it, the flow must use the Ordered Product trigger with a time delay instead. [L0417, 2020-26]

### First-Time and Repeat Thank-You Flows

#### Structure and triggers

- Thank-you flow trigger: Placed Order, with the first email sent 1 day after the order. [L0607, undated; L0573, undated]
- A first-time buyer sees the thank-you email after one day, using the condition `order equals 1` to separate first purchases from repeat purchases. Repeat customers get a separate email, so the two groups never receive the same message. [L0573, undated]
- Split first-time and repeat buyers in the thank-you flow with a condition: Placed Order count equals 1 (all time) for first-time buyers, and a separate branch for repeat customers. [L0607, undated]
- Sending the same thank-you email to first-time buyers and repeat buyers is a mistake. Split them with a placed-order count condition and write a separate message for each group. [L0607, undated]
- Thank-you flow structure:
  - Email 1 is sent one day after the order to first-time buyers. [L0573, undated]
  - A second email follows roughly two days later. [L0573, undated]
  - A third email can be added for returning customers. [L0573, undated]
  - Use a personalized message with a link to social media to gain followers. [L0573, undated]
  - Set all emails to Live with Smart sending off and UTM tracking on. [L0573, undated]
- Post-purchase discount emails are spaced about 24 hours apart after the order is placed: email 1 at once, email 2 about 24 hours later, email 3 about 48 hours later. Send the thank-you email separately as soon as the order is placed, so the discount sequence does not delay it. [L0606, undated]

#### Setup procedures

- Set up the customer thank-you (post-purchase) flow:
  1. Open Flows and click Get started on the post-purchase or customer thank-you flow. [L0607, undated]
  2. Check that the trigger is Placed Order. [L0607, undated]
  3. Set the first wait to 1 day. [L0607, undated]
  4. Add the condition Placed Order count equals 1 (all time) to separate first-time buyers from repeat buyers. [L0607, undated]
  5. In the first-time branch, use the post-purchase template, paste your thank-you copy and add your social media link. [L0607, undated]
  6. Clone the first email and set the second email to send 2 days after the order. [L0607, undated]
  7. Add a third email, or a separate email for returning customers, if needed. [L0607, undated]
  8. Make each email Live and check that Smart Sending is off and UTM tracking is on. [L0607, undated]
  9. Click Exit. [L0607, undated]
- Klaviyo customer thank-you flow: get started on Customer Thank You, edit the first email, turn Smart sending off and UTM tracking on, paste the order-confirmation text, set the subject to "Your order confirmation" with the store name, then set to live. [L0477, undated]
- Building the Klaviyo customer thank-you flow:
  1. Click Get started on customer thank you. [L1297, 2023]
  2. Turn Smart sending off and UTM tracking on for the first email. [L1297, 2023]
  3. Paste the order confirmation text, set the subject to order confirmation with your store name, then click Done. [L1297, 2023]
  4. Switch the email from draft to live. [L1297, 2023]
- Clavio thank-you flow for customers who have already bought:
  1. Go to Flows and click Get started on Customer thank you. [L0476, undated]
  2. Set the timer so the email sends one day after purchase. [L0476, undated]
  3. Edit the email with the three-dot menu, insert the text from your template, and use the saved store template for logo and images. [L0476, undated]
  4. Offer a reward for the next purchase, for example $15 off or 15% off (example code: save 15 during checkout), and add a note that the order is packed and on its way. [L0476, undated]
  5. Click Save, check the email, click Done, set the email from Draft to Live, and exit the editor. [L0476, undated]
- The Clavio thank-you flow sends the email one day after purchase. The lesson presents a 15 dollar or 15 percent discount on the next purchase as the reward; choose the amount you can afford. [L0634, undated]

#### Templates

- First-time buyer thank-you email template, ready to paste (replace the placeholders in braces):

```
Subject line: Thank you for your order, {first_name}

Hi {first_name},

Thank you for your order. It means a lot to us, and we are working on getting it to you.

Here is your thank-you gift: {thank_you_offer}.

We would love to keep you updated. Follow us on social media for news, new products and offers: {social_link}

If you have any questions about your order, just reply to this email.

Cheers,
{signature_name}
{store_name}
```
[L0607, undated]

- Thank-you email, sent 1 day after purchase in the Customer thank you flow:

```
Hey, you put your faith in us, you liked our products and you purchased them. It means a lot to us. We have a custom of thanking our rockstar customers with a gift: a 15 percent discount on your next purchase, whatever makes sense for you and whatever you can afford. Here is a 15 percent discount on your next order. Pick from among our legendary [product] items and use code SAVE15 during checkout. By the way, your order is packed and it is on its way. Keep your love for us intact; we will do whatever it takes to retain your trust. Cheers, [customer representative first name], [store URL].
```
[L0634, undated]

#### Revenue and tone

- To earn extra revenue from thank-you emails, add a gift card to the thank-you email. [L0604, undated]
- To earn extra revenue from thank-you emails, add a discounted offer for other products. [L0604, undated]
- Two thank-you messages can differ greatly. A message that thanks the customer in corporate language feels distant. A message in which the writer says they personally took the order, showed it to the company president and is grateful the customer chose them feels genuine and builds more warmth. Use the first-person version for customer messages. [L1366, undated]
- List VIP perks in the thank-you email only if the store runs a real program that delivers every perk listed, such as discounts, early access and promo alerts. If it does not, remove the list and keep a plain thank-you with the order tracking link. [L0606, undated]

### Post-Purchase Discounts for the Next Order

- The post-purchase flow has three emails offering 15% storewide on the next cart, with deadlines of last 3 days, last 48 hours and last 24 hours. The third email states that the offer ends at midnight. A separate thank-you email runs alongside it. [L0606, undated]
- The post-purchase discount applies to the customer's next order, so it lowers the profit of a repeat sale. Before setting the 15% level, calculate the margin on a typical repeat order to confirm the sale still pays. [L0606, undated]

### Handwritten Notes, Postcards and Physical Thank-Yous

- Select one primary thank-you method: pre-recorded personalized video messages, handwritten or typed letters, or branded postcards with personalized messages and social media sharing instructions. [L0203, 2021]
- Order postcards in bulk at minimal cost, handwrite a personalized message on the back alongside a business image, and include branding elements and instructions for customers to share on social media. [L0203, 2021]
- Include your logo, web address, and a phone or email contact on every handwritten note. Customers often photograph notes and share them on social media or in messages, and the contact details make it easy for others to reach the business. [L0406, 2021]
- Top repeat customers, such as those who had bought four or more pairs, also received handwritten cards from the team. This made the VIP group feel personally valued and supported repeat purchases. [L0790, 2017]

### Full Post-Purchase Sequence Timelines

#### Automated sequence, days 0 to 11

Execute this automated sequence after purchase:

1. Order confirmation: immediately (Shopify default system email). [L0203, 2021]
2. Welcome email: 10 minutes after purchase. [L0203, 2021]
3. Upsell Email 1: 1 hour after purchase. [L0203, 2021]
4. Thank-you message (video, text or postcard): 24 hours after purchase. [L0203, 2021]
5. Upsell Email 2: 25 hours after purchase. [L0203, 2021]
6. Upsell Email 3: 48 hours after purchase. [L0203, 2021]
7. Upsell Email 4: 60 hours after purchase, including urgency messaging such as "12 hours remaining to claim this offer". [L0203, 2021]
8. Loyalty program introduction email: 72 hours after purchase (integrates into the welcome sequence). [L0203, 2021]
9. Post-purchase support call: 7 days after purchase. Adjust to match typical shipping time; if products ship in 14 days, move the call to day 14. [L0203, 2021]
10. Referral program introduction email: 8+ days after purchase, sent after post-purchase calls are confirmed, when customers have had positive experiences. [L0203, 2021]
11. Customer feedback survey email: 10+ days after purchase (final touchpoint in the sequence). [L0203, 2021]

#### Phone, video, email and broadcast sequence

Execute in order:

1. Phone call: thank the customer for their business and explain what to expect during fulfillment and delivery. [L0240, 2019]
2. Facebook video ad: create a short thank-you video setting expectations, using the same messaging as the phone call. [L0240, 2019]
3. Email 1: confirm order details, explain delivery expectations, begin relationship building. [L0240, 2019]
4. Email 2: continue relationship building through educational content related to their purchase. [L0240, 2019]
5. Email 3: engage with relevant content (tips, customer stories, community highlights). [L0240, 2019]
6. Email 4: build anticipation for product arrival or introduce upcoming promotions. [L0240, 2019]
7. Email 5: increase customer lifetime value with a complementary product offer or upsell. [L0240, 2019]
8. Email 6: increase customer lifetime value with a different relevant offer or product angle. [L0240, 2019]
9. Email 7: request a product testimonial or review. [L0240, 2019]
10. Email 8: request a testimonial or review using a different angle or incentive. [L0240, 2019]
11. Email 9: request a testimonial or review (final ask for social proof). [L0240, 2019]
12. Broadcast list: send all product updates, promotions and seasonal offers to the entire customer base. [L0240, 2019]

#### Email-only sequence

- Thank-you email after purchase, then a few days later ask why the customer bought, whether the product is helping, and whether it arrived in good condition. [L0572, 2014]
- Move the customer onto the main or house list. [L0572, 2014]
- Send helpful tips on using the product, such as how to get the most from it. [L0572, 2014]
- Use post-purchase emails that resemble pre-purchase emails to stay on the customer's radar. [L0572, 2014]
- Include other products to sell to them over time. [L0572, 2014]
- Sending one thank-you email after purchase and then forgetting the customer wastes the post-purchase opportunity. Buyers should be moved onto the main list and receive useful content. [L0572, 2014]
- One example order-based sequence contained 72 emails. Some subscribers have received a daily email for over two months, and others for a full year. [L0572, 2014]
- Post-purchase sequence built as a Klaviyo flow triggered by a purchase:
  1. Send an order confirmation with shipping info, a short company intro and a mission statement. [L1076, 2019]
  2. Send an education email, such as how to install or safely use the product. [L1076, 2019]
  3. Send an email with engaging content, such as a helpful video or blog post. [L1076, 2019]
  4. Send a dispatch email with tracking details, then send coupon codes that the buyer can use or share with friends and family. [L1076, 2019]
  5. Send three testimonial requests, one for text, one for a photo and one for a video. [L1076, 2019]
  6. Move the customer into the main broadcast list for regular updates and promotions. [L1076, 2019]

#### Post-purchase set-up steps for the first order

1. Send one email immediately after a customer's first purchase, not an order confirmation. [L0334, 2017]
2. In that email, make the next offer: a direct upsell to the higher-priced item with a discount or warranty, a consultation booking, or a quantity increase such as 3 or 6 units instead of 1. [L0334, 2017]
3. If the upsell does not convert, test a store-wide discount on the first order with a short deadline, such as one hour. [L0334, 2017]
4. After a second purchase, send a plain-text email flow that restates the brand's core claims. [L0334, 2017]
5. Build the flow in Klaviyo so it runs automatically. [L0334, 2017]
- Build a post-purchase email flow that runs automatically: after the first purchase, send an email to test an offer (for example, a full-store discount with a short deadline), and after a second purchase, send a plain-text email flow that reinforces the brand message. The flows should repeat the brand's core claims in each step. [L0334, 2017]
- Klaviyo is used for all post-purchase and customer email sequences in the example brand, including the personalized follow-up flows. [L0334, 2017]

### Post-Purchase Customer Feedback and Reply Questions

- Hello, I have a small question for you. What prompted your purchase of [PRODUCT NAME]? Your insight will help me improve how we support you and our other customers. Just respond to this message.

Your reply can be a single phrase such as "great price" or a long story, whatever you prefer. Every bit of feedback helps us refine what we sell.

Use this as a reply-email template:

```
Hello, I have a small question for you. What prompted your purchase of [PRODUCT NAME]? Your insight will help me improve how we support you and our other customers. Just respond to this message.

Your reply can be a single phrase such as "great price" or a long story, whatever you prefer. Every bit of feedback helps us refine what we sell.
```
[L0378, 2019+]

- Ask customers one question after their second or third weekly design: "Would you recommend us?" [L1153, 2016]
- If they answer yes, send them a message the next day with a link to share the brand on Facebook, Instagram or Pinterest, such as a banner or the Facebook group. [L1153, 2016]
- If they answer no, do not send them the next question and put them in a separate funnel. [L1153, 2016]
- The single question "Would you recommend us?" is the most useful survey question, because people who say yes will usually answer the other feedback questions too. This comes from a Harvard Business Review article used in the course. [L1153, 2016]


Part 14 of 29 of "15. Email and SMS: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/15-email-and-sms.md · Previous: https://dlichters.com/ai/ecom/deep/15-email-and-sms/13-browse-abandonment-manual-cart-recovery-and-person.md · Next: https://dlichters.com/ai/ecom/deep/15-email-and-sms/15-upsell-and-cross-sell-sequences-per-product.md
