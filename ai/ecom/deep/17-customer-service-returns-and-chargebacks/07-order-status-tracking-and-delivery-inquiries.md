<!-- part of ecom/deep/17-customer-service-returns-and-chargebacks.md -->
Part 7 of 23 of "17. Customer Service Returns and Chargebacks: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks.md · Previous: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks/06-support-tone-soft-skills-and-handling-difficult-cu.md · Next: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks/08-order-changes-cancellations-and-out-of-stock-handl.md

## Order status, tracking and delivery inquiries

### Why tracking and order status matter

- Order tracking systems prevent orders from disappearing due to supplier delays, lost emails in inbox, or operational oversights. This becomes critical as transaction volume grows and when working with new suppliers whose reliability is unproven. [L0292, 2020-26]
- Tracking questions are the most frequent support request, so prepare standard replies for the common cases: order not shipped yet, order shipped, shipped but not received, and shipped with an angry customer. [L0405, undated]
- Most customer calls are about legitimacy, order status and stock. Detailed product pages, an FAQ and automated tracking emails remove most of these questions. [L1112, 2021]
- An order tracking tool can send tracking information to customers automatically after shipment, which reduces "where is my order" contacts. [L1112, 2021]
- Automatic shipment updates sent through a tracking app reduce customer inquiries about order status. [L0966, 2025]

### Order status check before every reply

1. Look up the order status in the store admin and fulfillment system before replying to any tracking question. [L0405, undated]
2. If the order is not shipped yet, send the not-shipped reply: it is being processed, a tracking email follows once it ships, and orders take about 10-20 days after shipping. [L0405, undated]
3. If the order is shipped and the customer is asking about tracking, send the shipped reply with the shipping date, the 3-5 business day tracking delay, the tracking link and a screenshot of the current status. [L0405, undated]
4. If the order is shipped and the customer says they got no confirmation emails, send the junk/spam version of the shipped reply and ask them to check junk and spam first. [L0405, undated]
5. If the order is shipped but the customer is angry, send the angry reply with the current status, take responsibility for delivery and promise a free reship or full refund if the parcel is lost in transit. [L0405, undated]
6. If the parcel is delivered and the customer wants a refund, offer a free reship first unless they ask for a refund on first contact, in which case process the refund without pushing a reship. [L0405, undated]
7. If the tracking cannot be found at all and the parcel appears lost, send the lost-order refund reply and confirm the refund is already initiated. [L0405, undated]

### Delivery times: processing and transit

Sources give different values for the same stages. Each value applies to the case listed.

| Stage | Value | When it applies | Source |
|---|---|---|---|
| Dispatch of in-stock orders from the warehouse | Within 5 business days from the order date | Warehouse with in-stock items | [L0145, undated] |
| Processing before a dropshipped order ships | About 4 to 7 days | Dropshipping store, order not yet shipped; the value to quote in the AI responder and in the not-shipped replies | [L0477, undated; L1297, 2023] |
| Processing example | About 3 days before shipment (Illinois to Philadelphia example) | Single supplier case used to show processing and transit must be separated | [L1472, 2022] |
| Physical product shipping for dropshipping | 5 to 14 days | General shipping range for physical dropshipped products | [L0911, undated] |
| International transit | 10-20 days after shipping (calendar basis) | Used in the not-shipped and shipped templates that say "after shipping" | [L0405, undated; L0911, undated] |
| International transit | 10-20 business days after processing | Used in the shipped templates that say "after processing" | [L0405, undated; L0911, undated] |
| Transit to final address | 10 to 20 days from the shipping date | Used in the not-shipped reply that cites the shipping date | [L0911, undated] |

- Use one basis for transit time in every template, preferably business days, so customers do not receive conflicting estimates. [L0405, undated]
- Present delivery timelines as estimates, and separate supplier processing time from carrier transit time, so a deadline is not promised that cannot be met. When processing takes about 3 days before a shipment from Illinois to Philadelphia, a 5-business-day deadline cannot be guaranteed, so say that upfront. [L1472, 2022]
- Set expectations with the customer before they become frustrated. [L0911, undated]
- Give customers a rough delivery window once a sale is made, such as one to two weeks, based on the parcel's position in the shipping process (for example, cleared customs and on its way), and update it when possible. [L1315, 2023]

### Tracking numbers and tracking updates

| Stage | Value | When it applies | Source |
|---|---|---|---|
| First tracking information appears | Within 24 hours of shipment, sent to the checkout email | Store that sends tracking itself at dispatch | [L0145, undated] |
| First tracking information appears | Within 3-5 business days of shipping | Standard one source replies, shipped and junk/spam versions | [L0405, undated] |
| First tracking information appears | 3 to 5 days after shipping (no business-day qualifier) | Shipped reply variant | [L0911, undated] |
| Tracking escalation | If no tracking after six business days, contact the support address | Escalation rule in the in-stock template | [L0145, undated] |

- Tracking numbers often do not update until the parcel is close to its destination, so customers should be warned not to panic when the status stays unchanged for a while. [L0405, undated]
- The tracking number does not show precise updates until the parcel is close to its destination; state this in every shipped reply. [L0405, undated; L0911, undated]
- Check the status yourself on a public tracking website first, then send the customer a screenshot of the page. [L0911, undated]
- Give customers the tracking number when they ask for it, because PayPal and other payment providers may ask for it as proof of shipment. [L1347, undated]

#### Tracking tools and apps

| Tool | What it does | Notes | Source |
|---|---|---|---|
| Shopify built-in shipping notifications | Sends tracking numbers entered directly in Shopify to customers | Can replace AfterShip to save its monthly cost (2024) | [L0666, 2024] |
| AfterShip | Sends automatic updates at each carrier status change (in transit to a city, arriving soon, out for delivery, delivery attempt missed) | Enter a tracking number once; prevents many support contacts; more customization than built-in notifications | [L0666, 2024; L1515, 2019] |
| Track123 | Order tracking page app | Every store should have a tracking page | [L1299, 2026] |
| Track123 configuration | Updates order emails automatically and links the tracking page in the store menu | Lets customers check their order at any time | [L1299, 2026] |
| CJ Dropshipping app | Linked to Shopify, sends an email with tracking information once a tracking number is generated | Automatic customer email at tracking generation | [L1347, undated] |
| Public tracking website (e.g. 17track) | Customer enters tracking number to see package location | Used as the source for screenshots and tracking links | [L0911, undated; L0405, undated] |

- A tracking page serves existing customers who want to follow their parcel. It also gives prospects a sign that the business provides real tracking numbers, which adds credibility before they buy. [L1130, 2020-26]

### Confirmation emails and spam checks

- Confirmation emails for order, shipping and delivery can land in the junk or spam folder, so when a customer says they received nothing, ask them to check those folders first. [L0405, undated]
- Automated emails sent by a store or its platform can land in the spam folder. Before reporting a missing confirmation or account email, search both the main inbox and the spam folder for the sender's name. (2025) [L0807, 2025]
- If support emails seem missing, check the spam folder first, since replies may land there. If you are in the mentor program, also post in the member Slack channel to get attention faster. [L0941, 2022]

### Replies for orders not yet shipped

```
Hello [NAME],

Thanks for reaching out, I'm glad to help.

I reviewed your order and it is still in processing. Dispatch should happen soon. Once it has been sent, you will receive a confirmation email containing a tracking link so you can follow the parcel.

Delivery to the final destination usually takes 10-20 days after shipping. I hope this clears things up! If anything else comes up, just write back.

Best wishes,
[AGENT NAME]
[STORE NAME] Customer Support Representative
```
[L0405, undated]

```
Write a reply to a customer whose tracking shows the order has not shipped yet, using this structure: thank them for the message and say you are happy to help; explain the order is being processed and will ship shortly; state that a shipping confirmation with a tracking link will be emailed once shipped; mention that orders typically take 10-20 days to arrive after shipping; invite any further questions; sign off with the agent name and store name as Customer Support Representative. Do not invent a shipping date.
```
[L0405, undated]

```
Hi [customer name], thanks for reaching out, glad to assist. Our team reviewed your order: it's in processing now and will leave our warehouse soon. After dispatch, you'll get an email with a tracking link so you can follow its progress. Typically, delivery to the final address takes 10 to 20 days from the shipping date. Hopefully that clears things up. If anything else comes up, just write back. Best wishes, [agent name], [store name] Customer Support Representative
```
[L0911, undated]

```
Hello, thank you for reaching out. We try our best to ship every item as fast as we can. Please allow four to seven days of processing time for your order to ship out. If you have any further questions about your order, email us at [your email address] and we will send you all the information you need. Thank you for your patience.
```
[L0477, undated]

```
Hello, thank you for reaching out. We try our best to ship every order as fast as we can, but please allow 4 to 7 days of processing time before your order leaves our supplier. Once it ships, you will receive a tracking number by email. If you have any other questions in the meantime, write to us at [your support email address] and we will send you all the information you need.
```
[L1297, 2023]

- Shipping time message for a dropshipping store: tell customers processing takes about four to seven days before the order ships, and give a contact email for order questions. Use this in the AI responder for "where is my order" type messages. [L0477, undated]

### Replies for shipped orders

```
Hello [NAME],

Thank you for getting in touch, I'm happy to assist.

I checked your tracking details and they show that your order was shipped on [DATE]. Keep in mind that standard international shipping takes 10-20 business days after processing.

Tracking information generally appears within 3-5 business days of dispatch. You can follow the shipment on a tracking site such as 17track using your tracking number: [TRACKING LINK]

You can also view the latest status here: [SCREENSHOT]

Please be aware that the tracking number does not show precise updates until the parcel is close to its destination.

I'm sorry for the slow delivery, since waiting this long is frustrating. Every package is covered by our guarantee: if it is lost in the mail or never arrives, you can choose a full refund or a reship, and with a reship we will also add a complimentary store credit on top.

Thank you for your patience and understanding! Please let me know if there is anything else I can do for you.

Best wishes,
[AGENT NAME]
[STORE NAME] Customer Support Representative
```
[L0405, undated]

```
Write a reply to a customer whose order has shipped, using this structure: thank them and say you are happy to help; give the shipping date [DATE] and note that standard international shipping takes 10-20 business days after processing; explain that tracking information appears within 3-5 business days of shipping and give the tracking link; include a screenshot of the current tracking status; note that the tracking number does not update until the parcel nears its destination; apologize for slow delivery and show empathy; restate the guarantee that lost packages can be refunded or reshipped with a store credit on top; thank them for their patience and offer further help; sign off as the store customer support representative.
```
[L0405, undated]

```
Hey [customer name], thank you for your message, happy to help. I have checked your tracking information, and it states that your order was shipped out on [shipping date]. Please note that our standard international shipping takes 10 to 20 business days after processing. Tracking information becomes available within 3 to 5 days after your order has been shipped. To stay updated, you can check the shipment progress on [tracking website] by entering your tracking number there, and I have attached a screenshot of the current tracking information for you. Please note that the tracking number does not update precisely until the package gets close to its destination. I hope this helps. Please let me know if you have any other questions or concerns. Warm regards, [agent name], [store name] Customer Support Representative
```
[L0911, undated]

```
Write a reply to a customer who says a shipped order never arrived and no confirmation emails were received, using this structure: thank them and say you are happy to help; explain that confirmation emails are sent at order, shipping and delivery and may be in the junk or spam folder; give the tracking information timing of 3-5 business days after shipping and the tracking link; include a screenshot of the current tracking status; note that tracking does not update precisely until near the destination; apologize for slow delivery and show empathy; restate the guarantee that a lost package can be refunded or reshipped with a store credit on top; thank them for their patience and offer further help; sign off as the store customer support representative.
```
[L0405, undated]

```
Hello [NAME],

Thanks for writing in, I'm happy to help.

We send confirmation emails when an order is placed, when it ships, and when it is delivered. If you have not seen them, first check your junk or spam folder.

Tracking information usually shows up within 3-5 business days after dispatch. You can follow the shipment on a tracking site such as 17track using your tracking number: [TRACKING LINK]

Here is the most recent tracking status: [SCREENSHOT]

Note that the tracking number only gives exact updates once the parcel nears its destination.

I'm sorry for the slow delivery, as a long wait is frustrating. All packages are protected by our guarantee: if one is lost in the mail or fails to arrive, you can pick a full refund or a reship, and a reship also comes with a complimentary store credit on top.

Thank you for your patience and understanding! Let us know if we can help with anything else.

Best wishes,
[AGENT NAME]
[STORE NAME] Customer Support Representative
```
[L0405, undated]

### Replies for angry customers and parcels not arrived

```
Write a reply to an angry customer whose shipped order has not arrived, using this structure: thank them and say you are happy to help; apologize that the package has not arrived; say that although every order is processed and shipped on time, delays sometimes occur; state the current order status [STATUS]; take full responsibility for delivery and promise a free reship or full refund if the package is lost in transit; apologize for the inconvenience and thank them for their patience while the issue is resolved; invite further questions; sign off as the store customer support representative.
```
[L0405, undated]

```
Hello [NAME],

Thank you for reaching out, I'm glad to help.

I'm sorry your package has not arrived yet. We work to process and ship every order on time, but delays can still happen. Your order currently reads: [STATUS].

That said, we take full responsibility for getting our packages delivered. If a parcel is lost in transit, we will offer you either a free reship or a full refund.

I apologize for the trouble this has caused and appreciate your patience while we work through it.

I hope this helps! Reply anytime if you have other questions or concerns.

Best wishes,
[AGENT NAME]
[STORE NAME] Customer Support Representative
```
[L0405, undated]

```
Hey [customer name], thank you for your message, happy to help. I am sorry to hear that you have not yet received your package. Although we do our best to ensure every order is processed and shipped in a timely fashion, unexpected delays can sometimes occur. Taking a look at your order, it appears that it is currently [current status and location]. That being said, we take full responsibility for the delivery of our packages, and if the package is lost in transit, we will offer you a free reship or a full refund. I apologize for any inconvenience you may have experienced, and thank you for your patience while we sort things out. I hope this helps. Please let me know if you have any other questions or concerns. Warm regards, [agent name], [store name] Customer Support Representative
```
[L0911, undated]

- The standard response to a delivery complaint takes responsibility for the shipment, apologizes for the inconvenience, and then offers a free reship or full refund if the package is lost in transit. [L0405, undated]
- For a package lost in transit, offer the customer either a free replacement shipment or a full refund. Make this offer explicitly in the reply to an impatient customer whose order is still moving. [L0911, undated]

### Guarantees and refund policy

- A guarantee covering every package should be stated to customers: if a parcel is lost in transit, they may choose a full refund or a free reship, and the store can add a store credit on top of the reship. [L0405, undated]
- The default refund policy is that a customer can get either a free reship or a full refund. The preferred first offer is a free reship, but if the customer asks for a refund on first contact, give the refund without pushing a reship. [L0405, undated]

### Lost parcels and refunds

- For lost shipments, send the tracking information that shows the item was lost, then keep the customer updated on replacements, when they ship and when they arrive. Most customers only panic when they are not kept informed. [L0852, 2020]
- If the fulfillment platform can no longer track an order and the package is considered lost, issue a full refund and tell the customer it has already been initiated. Do not wait for the customer to ask for a replacement before refunding. [L0911, undated]

```
Write a reply for a lost order where the tracking has gone missing, using this structure: explain that the package appears to have disappeared from the system and that the reason the tracking cannot be found is unknown; state that a full refund is being provided and has already been initiated, with an email notification to follow; apologize for the inconvenience and thank the customer for their patience; sign off as the store customer support representative.
```
[L0405, undated]

```
Hello [NAME],

Unfortunately, your package seems to be missing from our system, and we cannot tell why we are unable to track it. Because of this, we are issuing a full refund. The process has already begun, and you should receive an email about it.

I'm sorry for any trouble this has caused, and thank you for your patience while we resolve this.

Thanks,
[AGENT NAME]
[STORE NAME] Customer Support Representative
```
[L0405, undated]

```
Hey [customer name], unfortunately, it seems as though your package has gone missing from our system, and we are unsure why we cannot track your order. In light of this, we are providing a full refund. It has already been initiated, and you should receive an email notifying you of this. We apologize for any inconvenience and appreciate your patience during this issue. Thanks, [agent name], [store name] Customer Support Representative
```
[L0911, undated]

### Late delivery and delay responses

- When a customer complains about a late delivery, first find the cause before deciding on a remedy. Possible causes are outdated product page delivery times, slow order submission, or a supplier that took longer than usual, and each has a different fix. [L0853, 2021]
- If a supplier never ships a paid order and the customer becomes upset, a partial refund such as 5% combined with a firm delivery date can settle the situation. The exact remedy depends on what went wrong. [L0853, 2021]
- For delivery questions, promise only what the supplier and carrier can deliver. Contact the store team when a customer needs a quote instead of guessing a price. [L1281, 2022]

```
Hi [Customer name], thank you for your message and for your patience. Your order is on its way, but delivery is taking a little longer than usual. We are sorry for the delay and will keep you updated until it arrives. [Store name] Customer Support
```
[L0661, undated]

```
Use a reply to customers who ask why an order takes so long, adjusted to your own situation: I apologize for this. Due to shipping, customs or Covid we will do our best to get your order to you on time. In the meantime, since you are patiently waiting, here is a discount code for your next purchase: [CODE].
```
[L0820, undated]

```
Hi [CUSTOMER NAME], thank you for your patience, and I am sorry your order is taking longer than expected. It is not something you did; the delay comes from [shipping times / customs / Covid-19 delays], and we are doing our best to get your order to you on time. While you wait, here is a [DISCOUNT %] discount code for your next purchase: [CODE]. If you have any questions, reply to this email at any time and I will keep you updated on your order. Best regards, [YOUR NAME]
```
[L0820, undated]

### Delivery promises and Christmas

- Setting delivery times that are too short for the real transit time is over-promising. Shorter estimates may raise conversion, but customers who receive the parcel later than promised lead to complaints and chargebacks. Set the estimate to what the fulfillment center can reliably meet and improve it as the setup matures. [L1327, 2026]

```
Write a Christmas guarantee message for a shipment expected before the holiday: greet the customer by name; say the order is on its way and is promised to arrive before Christmas; state that if delivery takes longer, a full refund will be given; sign off with the agent name and store customer support representative title.
```
[L0405, undated]

```
Hi [NAME],

Your order is currently on its way to you, and we promise it will arrive before Christmas. If it takes any longer than that, we will happily provide a full refund.

Warm regards,
[AGENT NAME]
[STORE NAME] Customer Support Representative
```
[L0405, undated]

### Origin and trust after purchase

- Customers who do not know their parcel is shipping from China become more anxious when they discover it later, so hiding origin on tracking and emails protects trust after the purchase. [L1315, 2023]

### Tracking from day one

- For dropshipping with physical products, shipping can take 5 to 14 days, so customers will often ask where their order is. Plan customer service for these tracking questions from the start. [L0911, undated]


Part 7 of 23 of "17. Customer Service Returns and Chargebacks: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks.md · Previous: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks/06-support-tone-soft-skills-and-handling-difficult-cu.md · Next: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks/08-order-changes-cancellations-and-out-of-stock-handl.md
