<!-- part of ecom/deep/17-customer-service-returns-and-chargebacks.md -->
Part 9 of 23 of "17. Customer Service Returns and Chargebacks: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks.md · Previous: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks/08-order-changes-cancellations-and-out-of-stock-handl.md · Next: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks/10-writing-shipping-returns-refund-and-warranty-polic.md

## Backorders, made-to-order items and shipping-delay communication

### Setting expectations before the sale

- Keep accepting orders for an out-of-stock item whose restock is a few weeks away, and add a note at the top of the product description with the estimated restock date. [L0247, 2021]
- Put delayed-shipping information prominently in the product description, not only in checkout. State assembly requirements, shipping duration and installation responsibility upfront. [L0270, 2021]
- Tell customers the exact date an out-of-stock product will be back, both on the product page and right after the order. Customers accept a wait when they know what is happening and are far less likely to email later asking where the product is. [L0942, 2022]
- A customer whose item is delayed should be told on the website and by email that the item is backordered, with the expected ship date. ** [L0468, 2020]
- When a product is backordered, show the expected date on the product page and offer a deposit option so customers can order now. ** [L1069, 2019]
- Make the lead time visible before checkout, and confirm it by email after the order. The risk of a chargeback or complaint rises when a customer does not know a product is built to order. [L0965, 2024]
- Be transparent with customers and suppliers about production and delivery lead times, because customers often expect immediate fulfilment that production cannot provide. Communicate realistic timelines from the start. [L1438, 2023+]
- Customers who order unique products they cannot find locally usually accept a shipping delay of up to about two weeks. Their tolerance is much lower for products needed for a fixed occasion. [L0766, 2020-26]
- Products must be delivered before the promised date to avoid chargebacks. Avoid selling products tied to fixed dates unless delivery is guaranteed in time. [L1184, 2023+]
- Avoid supplier routes with three- to five-week shipping, because long shipping times caused many refunds. [L1108, 2023]
- Avoid launching during holidays that delay shipping. Late orders lead to complaints and payment disputes, which can put a Stripe account and a Facebook account at risk. [L1127, 2024]

### Confirmation emails and made-to-order follow-up

Follow-up procedure for made-to-order sales:

1. After the order is placed, contact the customer by phone or email to thank them.
2. Confirm that the product is made to order.
3. State the estimated manufacturing and delivery time.
4. Check that the customer understands and accepts the lead time.

[L0806, 2024]

Email the customer after the sale to confirm the lead time before the order goes to the supplier, so the customer is not surprised by a delay. [L0856, 2024]

Confirmation email for made-to-order items (fill in the ETA from the supplier's lead time). Send it after each sale, before the order goes to the supplier:

```
Thank you for your order. You should have received your order confirmation already. We just want to confirm that this product is made to order, and the estimated delivery is [ETA]. Please reply to confirm you are aware of this.
```

[L0856, 2024]

Made-to-order template for the first confirmation, with a lead-time placeholder:

```
Hi [customer name], thank you for your order with [store name]. We have received it. I just want to make sure you saw that [product name] is made to order, and the estimated manufacturing and delivery time is [four to six weeks]. If you have any questions, reply to this email or call us. Thank you!
```

[L0806, 2024]

Made-to-order follow-up sent immediately after purchase, by email or phone. The lead time in the example is 16 weeks. **

```
Thank you for your order for [product name]. Please confirm that you understand this product is made to order, with a current estimated time of [lead time, e.g., 16 weeks] for production and delivery. We will keep you updated throughout the process.
```

[L1281, 2022]

Backorder confirmation that asks the customer to acknowledge the product page note:

```
Hi [customer name], thank you for your order of [product name]. We want to confirm that you saw the note on the product page that this item is on backorder with an estimated ship date of [estimated ship date]. Please reply to confirm that you are okay with waiting until that date, and if you have any questions, just let us know. Thank you again for your order, [store name].
```

[L0805, 2024]

Complaints about delayed shipping should be answered with the lead time. If a supplier delays the order, inform the customer proactively before the shipment date. [L0856, 2024]

Keep customers informed about their order at all times. Shopify's automated emails cover much of this, but you must contact the customer directly in many cases. [L1119, undated]

### Backorders: first contact, escalation and revised dates

Escalation procedure when a backordered product has caused problems:

1. Update the product page with a notice above the Add to Cart button that states the backorder and the expected date.
2. Send a confirmation email right after each purchase and ask the customer to confirm that they are willing to wait.
3. Stop paid ads for backordered products.
4. Restructure the store so the most profitable in-stock products appear first.
5. Run only a small, tight Google Shopping campaign with the best-margin in-stock products until inventory is no longer a problem.
6. Keep looking for and following up on new supplier approvals in the meantime.
7. When stock returns, remove the notices and follow-up emails, restore ad spend on the other products, and rebuild the best sellers.

[L0359, 2020]

Procedure when a customer's backorder has a slipped supplier date:

1. Call each customer who placed the order first.
2. If the customer does not answer, leave a voicemail and say an email will follow.
3. Explain the new ship date and the reason, and offer to cancel the order or keep it.
4. If the customer keeps the order, process it when stock arrives; that customer is first on the list.
5. Send the follow-up email to everyone, even those who were reached by phone.
6. Do not cancel all orders without first trying to keep them.

[L0359, 2020]

Phone call script and voicemail for customers whose backordered order has a new ship date. Replace the placeholders in square brackets before use.

```
Call script: Hi [FIRST NAME], this is [YOUR NAME] from [STORE NAME]. We know you placed order [ORDER NUMBER]. Unfortunately, due to [REASON], the product will not ship until [NEW DATE]. If you would like to cancel your order, we can cancel it for you right away. If you would like to keep it, we will process it when it arrives, and you will be one of the first to receive it because you are already at the top of the list.

Voicemail: Hi [FIRST NAME], this is [YOUR NAME] from [STORE NAME] about your order [ORDER NUMBER]. The product now ships on [NEW DATE] due to [REASON]. Please call me back, and I am also sending you an email with the details.
```

[L0359, 2020]

Procedure for a backorder with a supplier delay. Keep the payment pre-authorized and optionally offer a discount. **

1. Keep the payment pre-authorized at checkout and do not capture it until the item can ship.
2. When a supplier reports a backorder, contact the customer with the expected ship date.
3. Ask whether the customer is willing to wait for the exact product, and optionally offer a small discount (for example 5 percent) for waiting.
4. If the customer will not wait, offer the closest in-stock alternative that can ship within 48 hours.
5. If the customer declines both options, refund the payment.

[L0468, 2020]

Backorder email for customers whose order is delayed. The bracketed refund sentence depends on whether payment has been captured. **

```
Hi [Customer name],

Thank you for your order of [product name] on [order date]. We have just learned that this item is backordered at our supplier's warehouses, and the earliest expected ship date is [ship date].

If you really want this exact product, we can ship it to you as soon as it is back in stock, as one of the first shipments out. Would you be willing to wait until [ship date]? [Optional: As a thank you for waiting, we can give you [discount, for example 5%] off.]

If you would rather not wait, [if payment is not yet captured: you have not been charged yet, so there is nothing to refund; if payment is already captured: we will refund your full payment right away]. We also have [alternative product name], which is extremely similar: [key benefit 1], [key benefit 2], [key benefit 3]. It can ship within 48 hours.

Please reply to this email and tell us which option you would like: wait for [product name], switch to [alternative product name], or receive a refund.

Thank you for your patience,
[Your name]
[Store name]
```

[L0468, 2020]

Phone script for a backorder with a new earliest ship date. It offers the same choice at the later date. **

```
Hi [CUSTOMER NAME], this is [YOUR NAME] from [STORE NAME]. We see you just placed an order for [PRODUCT NAME]. This product is currently backordered, and I'm sorry about that. It's going to be back in stock on [ETA DATE]. If it's about [TIME UNTIL STOCK], we can ship it to you first out the door when the shipment comes in. Would you be willing to wait? If the wait is longer, the earliest date it can ship is [SHIP DATE], and we would make you the same offer then. Please know this ETA is the same no matter where you order this product, because it applies to every seller. If you need it sooner, we have a similar product, [ALTERNATIVE PRODUCT NAME], that can be shipped within 24 to 48 hours with a [PARTIAL REFUND AMOUNT] partial refund. If you'd rather keep your order, we'll make sure you get updates and ship it as soon as possible. Which option would you like?
```

[L0852, 2020]

- For long backorders, you can leave the card uncharged until the product is ready and ask whether the customer wants to wait. Customers generally accept this when they are informed. [L0942, 2022]
- If the payment is only pre-authorized, there is nothing to refund when the customer declines. If it is already captured, refund the full amount right away. [L0468, 2020]
- Customer communication is key, and it is what separates a decent store from a great one. Keep customers informed about delays, replacements, ship dates and arrival dates. ** [L0852, 2020]
- When delivery is delayed, keep the customer updated with each revised estimated arrival date. You can add a helpful extra, such as an installation video or a related article, in a postscript. ** [L0968, 2021]
- Shipping delay communication: be proactive, give regular status updates, explain that the expected date is the same for everyone, and offer a similar in-stock product as a replacement if possible. A free gift is a nice extra, not a substitute for clear communication. ** [L0969, 2022]
- Selling without stock and leaving customers unaware leads to angry follow-up messages after two weeks. Tell customers about the delay automatically at the time of ordering. [L0492, 2023+]
- When a customer will not wait for an out-of-stock product, offer a different design from the slow-selling stock as a gift. Most customers accepted this and waited for their full order. [L0492, 2023+]
- If customers ask about delayed delivery, reply promptly and explain the situation, such as high demand after a viral video or shipping slowdowns. Customers who receive a timely explanation are often understanding. [L1444, 2022]
- Send proactive updates about delays before customers complain, for example a short email saying the order is still late and you are monitoring it. Proactive communication prevents most anger. [L1472, 2022]
- Keep the customer informed at every step when delays occur, and address concerns before the customer gets angry. Frequent, honest communication reduces the number of complaints even when the delay is unavoidable. [L1472, 2022]

Quick update email for an order that the supplier is taking longer to process:

```
Subject: Quick update on your order {order_number}

Hi {customer_name},

I wanted to give you a quick update on your order for {product_name}. Our supplier is taking longer than expected to process it, and I am actively monitoring the shipment. I will send you your next update by {next_update_date}.

Thank you for your patience and understanding. If you have any questions in the meantime, just reply to this email.

{your_name}
{store_name}
```

[L1472, 2022]

### Out-of-stock and delay notices

Handling out-of-stock items or long shipping times:

1. Send a confirmation email as soon as the problem is known, with a clear apology.
2. State the realistic shipping time, which in the example was two to three weeks.
3. Offer an immediate refund if the customer does not want to wait.
4. Answer all customer messages promptly and keep the tone respectful and honest.

[L0519, 2020+]

Informing customers about a long shipping time up front in the operator's German market led to almost no refunds. Staying silent while customers expected fast shipping led to angry emails, refund requests and ultimately the store being shut down. [L0519, 2020+]

Out-of-stock update email (the example gives a delivery window of 2 to 3 weeks):

```
Subject: Update on your order [Order number]

Hi [First name],

Thank you for your order of [Product name]. We just found out that this item is currently out of stock, and we are sorry for the inconvenience. Your order is expected to arrive within 2 to 3 weeks. If you would prefer not to wait, reply to this email and we will refund your payment right away.

Warm regards,
[Store name] Customer Care
```

[L0519, 2020+]

Delay email that offers two choices, a full refund or a wait of about 15 days:

```
Subject: Your order is delayed

Thank you very much for your order. Due to huge demand we are currently out of stock, and we are very sorry for the delay. You have two options: you can request a full refund, or you can wait about 15 days for your order to arrive. Simply reply to this email with your choice, and we will take care of it immediately. Thank you for your patience and for choosing [BRAND NAME].
```

[L0492, 2023+]

Note on the wait windows: the 15-day window in the email above and the 2 to 3 weeks in the other out-of-stock notices come from different stores. Use the realistic date from your supplier in every case.

Digital product delay email for a short fulfilment-system delay:

```
Subject: Thank you for your order

Hi [FIRST NAME],

Thank you very much for your order of [PRODUCT NAME]. We are currently experiencing a short delay in our fulfilment system, and we apologise for the wait. Your digital guide will be sent to [CUSTOMER EMAIL] within two to three days, and sooner if possible. Thank you for your patience, we hope you enjoy it.

Kind regards,
[SHOP NAME] Team
```

[L1131, 2018+]

A seller scaled a mini-winner product last year. The supplier could not ship on time because a flammable lighter item was held in customs, leaving nearly 200 orders unshipped and forcing resends until the third attempt. The seller emailed every customer to say the delivery was delayed, not a scam, and the delivery took nearly six weeks, but only two chargebacks occurred. [L0352, 2022]

Shipping delays from slow suppliers such as AliExpress are manageable in the early stage if you communicate actively with customers. Regular back-and-forth emails keep most buyers patient. Note that the same long routes were also linked to many refunds, so this applies to early-stage stores with active messaging, not to routes with three- to five-week shipping. [L0352, 2022; L1108, 2023]

### Made-to-order lead-time changes and compensation

Handling a made-to-order product whose lead time grows (for example from 4 to 6 weeks to 10 to 12 weeks) and customers cancel. **

1. Show the current lead time on the product page.
2. Tell affected customers the delay comes from the supplier's warehouse inventory, so cancelling and ordering elsewhere gives the same wait.
3. Offer a gift that costs under 100 dollars but has high perceived value to the customer, to keep the order.
4. If there is no suitable gift, offer a partial refund of about 100 dollars to the original card.

[L1279, 2021]

Handling a made-to-order collection on the store. **

1. Create a separate collection called Made to Order, or custom made, for these products.
2. Keep the products also in the main collections.
3. Show the lead time next to add-to-cart and send the follow-up confirmation after purchase.

[L1281, 2022]

Compensation options by situation:

| Situation | Option | Source |
|---|---|---|
| Customer declines a backorder but payment is still uncaptured | Nothing to refund; offer a 48-hour alternative | [L0468, 2020] |
| Customer waits for an exact product | Optional discount, for example 5 percent | [L0468, 2020] |
| Customer will not wait for an out-of-stock design | Gift from the slow-selling stock | [L0492, 2023+] |
| Lead time grows and customer cancels | Gift under 100 dollars, or partial refund of about 100 dollars if no suitable gift | [L1279, 2021] |
| Late Q4 order | 50 percent refund or another gift | [L1220, undated] |
| Alternative product can ship sooner | Partial refund amount to the customer | [L0852, 2020] |

### Split shipments and multiple sources

- When one order ships from two warehouses, send an automated email through Klaviyo after the order is placed. Say that one item is in stock closer to the customer, and include tracking for the item that ships first. [L0524, 2023]
- A split order from two suppliers ships as two parcels, which raises shipping cost compared with one supplier shipping the same items together. Accept this cost or consolidate the catalogue to one fulfilment source. [L0524, 2023]

### Carriers and payment delays

- For a delayed freight delivery, check the shipping company's online reviews before deciding whether to keep using it. Note expected delivery times on the shipping policy page. One-off delays are not a reason to change carrier. *(2023.)* [L0964, 2023]
- For an order paid by PayPal e-check, the payment may take two to three weeks to clear or may not clear at all. Tell the customer the order will ship when the e-check clears. *(2023.)* [L0964, 2023]

### Supplier slowdowns, seasonal peaks and Q4 cutoffs

- During a supplier slowdown such as Chinese New Year, some organic orders still come in, so customers should be told in advance about expected delays. This prevents refund requests caused by silence about shipping times. [L0780, 2024+]
- Procedure for a product that goes viral a few days before Christmas:

1. If a product goes viral a few days before Christmas and customers place orders unlikely to arrive by the holiday, accept the orders.
2. Send follow-up emails to every customer confirming their order and shipping timeline.
3. Update them throughout fulfillment with tracking.
4. Even if products arrive after December 25, consistent communication reduces chargebacks and improves customer satisfaction.

[L0309, 2024+]

- In Q4, customers who buy about 5 days before Christmas hoping for delivery in time often file chargebacks when the product arrives late. This is a major Q4 risk for dropshipping stores. [L1220, undated]
- Procedure for setting a Q4 cutoff and handling late orders:

1. Work out the last order date that still delivers before Christmas, based on supplier and shipping times.
2. State the delivery risk clearly on the store and in emails.
3. If an order will arrive late, email the customer early and explain the plan.
4. Offer a compensation option such as a 50% refund or another gift.
5. Use this plan to avoid chargebacks.

[L1220, undated]

Where the two Q4 sources differ: the viral-product procedure accepts late orders and relies on communication after December 25, while the cutoff procedure sets a last order date based on supplier and shipping times. Use the viral procedure for unplanned demand spikes close to the holiday, and the cutoff procedure for planned Christmas promotions. [L0309, 2024+; L1220, undated]

### Long backorders and cash

A seven-figure store with about 3 million dollars in annual sales handled 300 to 500 orders per month. COVID pushed orders to about 1,000 per month, and many orders went on backorder. The store saved about 500 to 700 of those customers by asking them to wait, but the backorders stretched for months while normal costs and owner pay continued. Customers grew tired of waiting and asked for refunds, and the owner realized the account might not cover both supplier bills and refunds, so the owner asked for help in a panic. ** [L1200, 2021-22]


Part 9 of 23 of "17. Customer Service Returns and Chargebacks: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks.md · Previous: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks/08-order-changes-cancellations-and-out-of-stock-handl.md · Next: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks/10-writing-shipping-returns-refund-and-warranty-polic.md
