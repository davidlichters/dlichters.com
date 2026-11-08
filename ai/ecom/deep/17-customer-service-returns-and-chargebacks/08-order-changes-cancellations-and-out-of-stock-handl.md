<!-- part of ecom/deep/17-customer-service-returns-and-chargebacks.md -->
Part 8 of 23 of "17. Customer Service Returns and Chargebacks: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks.md · Previous: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks/07-order-status-tracking-and-delivery-inquiries.md · Next: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks/09-backorders-made-to-order-items-and-shipping-delay.md

## Order changes, cancellations and out-of-stock handling

### Order states and what can still change

| Order state | Change possible? | What to do |
|---|---|---|
| Not yet processed by fulfillment, not shipped | Quantity, variant, items and shipping details can usually still be changed, and cancellation is possible | Make the change or cancel now |
| Processed by fulfillment, in transit or shipped | Changes are usually impossible | Offer the replacement or return route for the situation |

[L0405, undated; L0911, undated]

Once an order has been processed by fulfillment, changes to quantity, variant, items or shipping details are usually impossible. The requested change should still be made as soon as possible if it is still allowed. [L0405, undated]

### Payment authorisation and capture timing

#### Order flow from authorisation to tracking

1. The customer places the order and receives a confirmation email with a credit card pre-authorisation. [L0145, undated]
2. Supplier stock is verified automatically. [L0145, undated]
3. If the item is unavailable or on backorder, the pre-authorisation is voided and the customer is notified by email immediately. [L0145, undated]
4. If the item is available, charges are processed and the order is submitted for shipment within 5 business days. [L0145, undated]
5. Tracking information is emailed within 24 hours of shipment. [L0145, undated]
6. If tracking has not been received within 6 business days, the customer may contact orders support. [L0145, undated]

#### Order confirmation email

```
Order confirmation emails send immediately upon checkout, indicating your order is in our system and your card is pre-authorized. We immediately contact suppliers to verify stock availability. Backordered or unavailable items trigger authorization reversal and email notification to you. Items available for shipment within 5 business days proceed through charge processing and dispatch to the warehouse.
```
[L0145, undated]

#### Capture only after stock is confirmed

Process orders as follows: pre-authorise the payment when the order comes in but do not charge yet. Confirm the items are in stock with the supplier, then process the charge. If an item is out of stock, contact the customer with the expected wait time and charge only if they still want it. [L1112, 2021]

This 2021 advice is older. It matches the 2025-era flow above, which also charges only after availability is confirmed. [L1112, 2021; L0145, undated]

If a customer orders while a supplier stock is unfinished, do not forward the order until stock is confirmed. Verify stock, then capture payment. [L0964, 2023]

### Unconfirmable orders

#### Cancelling an order that cannot be confirmed

1. Call the number on the order and email the customer about the attempts. [L1285, 2024]
2. If there is still no response before processing, cancel the order. [L1285, 2024]
3. Send a cancellation email that lists the email and call dates and explains that the order was cancelled. [L1285, 2024]
4. Consider adjusting product pricing in the meantime. [L1285, 2024]

```
Hi [Customer name], we contacted you by email on [dates] and called you on [dates] about your order [order number]. We did not hear back before we needed to process it, so unfortunately we have cancelled the order. If you still want the product, please reply or order again through our store.
```
[L1285, 2024]

### Order modifications before shipment

#### Confirming a change that was made

```
Hello [NAME],

Thanks for reaching out, I'm happy to help.

I have now made the change you requested: [DESCRIBE ORDER MODIFICATION PERFORMED].

I hope this helps! Let me know if you have any other questions or concerns.

Best wishes,
[AGENT NAME]
[STORE NAME] Customer Support Representative
```
[L0405, undated]

```
Write a reply after a successful order modification that has not shipped yet, using this structure: thank them and say you are happy to help; state that the requested change was made and describe it; invite further questions; sign off as the store customer support representative.
```
[L0405, undated]

### Order modifications after processing or in transit

#### Declining a change and offering a replacement

```
Hello [NAME],

Thanks for reaching out, I'm happy to help.

Looking into your order, our fulfillment team has already processed it and it is now in transit. Once an order reaches that stage, we are unable to change the [ADDRESS | DETAILS | X]. I apologize for the inconvenience.

To make up for it, you can purchase another [PRODUCT] at 50% off using this link: [DISCOUNT LINK].

Please let me know if you have any other questions or concerns!

Best wishes,
[AGENT NAME]
[STORE NAME] Customer Support Representative
```
[L0405, undated]

```
Write a reply to a customer asking to change an order that has already been processed and is in transit, using this structure: thank them and say you are happy to help; explain that the order was processed by fulfillment and is now in transit; state that the address or detail cannot be changed once processed; apologize for the inconvenience; offer a replacement purchase at 50% OFF using a discount link; invite further questions; sign off as the store customer support representative.
```
[L0405, undated]

### Cancellations before shipment

#### Cancelling an order that has not shipped

1. Open the order on the fulfillment platform and check whether it has shipped. [L0911, undated]
2. If it has not shipped, cancel it on the fulfillment platform and refund the customer's payment. [L0911, undated]
3. Confirm to the customer that the order is cancelled and that the refund will be credited to their credit card within 5 to 7 business days. [L0911, undated]
4. If it has already shipped, do not promise a cancellation. State the shipping date and that the order is in transit. [L0911, undated]
5. Explain that the store's refund and returns policy can be used once the order is delivered, and link the refund and returns policy page. [L0911, undated]

#### Cancellation confirmation

```
Hello [NAME],

Thanks for reaching out, I'm happy to help.

I have canceled your order and refunded your payment. You will soon receive an email confirming the updated status of your order. The refund should appear on your credit card within 5-7 business days, depending on your financial institution.

Please let me know if you have any other questions or concerns!

Best wishes,
[AGENT NAME]
[STORE NAME] Customer Support Representative
```
[L0405, undated]

```
Hi [customer name], thanks for writing, glad I can help. I've cancelled your order and returned your payment. A confirmation email about the status of your order should reach you shortly, and the money should appear back on your credit card within five to seven business days. If there's anything else you need, just let me know. Best wishes, [agent name], [store name] Customer Support Representative
```
[L0911, undated]

```
Write a reply confirming that an order which has not shipped was cancelled and refunded, using this structure: thank them and say you are happy to help; confirm the order was cancelled and the payment refunded; state that a status email will arrive shortly and the charge should appear on the credit card within 5-7 business days, depending on the bank; invite further questions; sign off as the store customer support representative.
```
[L0405, undated]

#### Refund timing: two values

- Quote 5 to 7 business days to the customer, depending on the bank. [L0405, undated; L0911, undated]
- Shopify's "Cancel and refund" screen may show up to 10 days. Tell the customer that timeframe, and expect refunds to usually arrive faster than the stated maximum. [L0972, 2025]

Use the 5 to 7 business day figure in customer messages. Use the Shopify figure as the outer limit. [L0405, undated; L0972, 2025]

#### Cancelling an unshipped order in Shopify

1. Open the order in Shopify Orders. [L0972, 2025]
2. Click Cancel and refund. [L0972, 2025]
3. Check the refund timeframe Shopify displays, which may say up to 10 days, and tell the customer about that timeframe. [L0972, 2025]
4. Expect refunds to usually arrive faster than the stated maximum. [L0972, 2025]

Refunds are credited only to the original credit card used for the purchase. [L0145, undated]

### Cancellations after shipment

#### Declining a cancellation of a shipped order

```
Hey [customer name], thanks for your message, happy to help. Taking a look at your order, it appears that it was shipped on [shipping date] and is currently in transit. Unfortunately, we are unable to cancel your order once it has shipped. That being said, if you find that you do not absolutely love your [product name], our [refund policy summary] applies, and you may start a return once your order is delivered. For more information on how to do this, please see our refund and returns policy at [link to refund and returns policy page]. I hope this helps. Please let me know if you have any other questions or concerns. Warm regards, [agent name], [store name] Customer Support Representative
```
[L0911, undated]

```
Hello [NAME],

Thanks for reaching out, I'm happy to help.

Your order left us on [DATE] and is currently on its way, so we are no longer able to cancel it. If you find that the [PRODUCT] isn't something you truly love, our [RETURN POLICY] can be started once the order arrives. You can read the full details in our refunds and returns policy: [LINK].

I hope this helps! Let me know if you have any other questions or concerns.

Best wishes,
[AGENT NAME]
[STORE NAME] Customer Support Representative
```
[L0405, undated]

```
Write a reply to a customer asking to cancel an order that has already shipped, using this structure: thank them and say you are happy to help; state the shipping date and that the order is in transit; explain that cancellation is not possible after shipping; point to the return policy the customer can start once the order is delivered, with a link to the refunds and returns page; invite further questions; sign off as the store customer support representative.
```
[L0405, undated]

#### Do not promise cancellation after shipping

Do not promise to cancel an order after it has shipped. Offer the store's return or refund policy instead, which the customer can use after delivery. Cancellation promises for shipped orders lead to disputes and chargebacks. [L0911, undated]

#### Cancellation fee model (differs from the return-policy model)

```
Cancellations initiated after 48 hours incur a $20 administrative fee regardless of whether the order has shipped. If already shipped, the buyer covers return postage. Refunds are credited only to the original credit card used for the purchase.
```
[L0145, undated]

Two models are documented:
- Fee model: a $20 administrative fee for cancellations after 48 hours, shipped or not. For shipped orders, the buyer pays return postage. [L0145, undated]
- Return-policy model: no cancellation once shipped; the customer starts a return after delivery under the store's refund and returns policy. [L0405, undated; L0911, undated]

The sources do not say which model is preferred. Use the one that matches the store's written policy, and state it the same way in every reply.

### Asking why customers cancel

- When a customer cancels, ask the real reason instead of only refunding. The answer can reveal product, price or experience barriers that affect conversion. [L1016, 2026]
- Handle cancelled orders as a learning opportunity:
  1. Contact the customer and ask why they cancelled. [L1357, 2018]
  2. If they bought from a different retailer, ask what you could do better and use that to win the next sale. [L1357, 2018]
  3. If they bought from a brand you do not carry, contact that brand as a possible new supplier. [L1357, 2018]
- After a cancellation, work in this order:
  1. Look for ways to improve the customer experience so the customer is more likely to return. [L0920, 2018]
  2. Find new suppliers so you can fill future orders for that product. [L0920, 2018]
- Without an automated cancellation system, handle cancellation and refund requests manually and respond quickly. Offer an updated ship date and alternatives before issuing a refund. [L1277, 2020]

### Out-of-stock: listing and customer notice

#### Keep out-of-stock products visible

Do not remove out-of-stock products from the store. Either label them as out of stock with an expected availability date, or accept orders if you are willing to backorder and notify customers of the timeline. [L0249, 2022]

#### Stock problem on an existing order

Suppliers sometimes run out of stock of products that are still listed for sale. When a customer orders such a product, the order must go through the out-of-stock process rather than being shipped late without notice. [L1119, undated]

#### Early warning email (2023)

```
Thanks for placing your order. Our warehouse confirmed that this product is on backorder. The next delivery lands on [date], and we could dispatch the item to you on [date]. If you'd rather keep the order open, be aware that all online sellers source [brand]'s products from the same place, so the backorder applies at other shops too. If you need the product sooner, we suggest [similar product], which is comparable because [reason], with a price gap of [amount]. You can: 1) wait for the item on [date], 2) switch to [similar product], or 3) cancel the order.
```
[L0964, 2023]

Send this email so the customer has time to consider before replying. [L0964, 2023]

### Out-of-stock: handling the order

#### Standard out-of-stock handling

1. Ask the supplier when the product will be available again. Also ask whether a faster special order is possible and whether it costs extra. [L1119, undated]
2. Contact the customer as soon as possible. Tell them the product is not immediately available and how long the wait will be, then ask whether they are willing to wait. [L1119, undated]
3. If the customer is undecided about waiting, offer an authorised discount by refund if they wait. [L1119, undated]
4. If the customer cannot wait, look for a similar product that is in stock and suits their needs. If needed to close the sale, offer an authorised discount on the similar product. [L1119, undated]
5. If the customer will neither wait nor accept a similar product, cancel the order in Shopify. If payment was already captured, refund it. [L1119, undated]
6. If the customer is willing to wait, confirm with the supplier that you want to backorder the product, and ask the supplier to ship immediately once the product is back in stock. [L1119, undated]
7. If the supplier requires partial or full payment to place a backorder, consult the business owner and get authorisation before confirming any payment. [L1119, undated]
8. Once a backorder is placed, email the customer to confirm the order is on backorder and give the expected arrival date. [L1119, undated]

#### No response to an unavailable-item email

1. If a customer does not answer emails about an unavailable item, try calling and texting. [L0857, 2025]
2. If there is still no reply and the item is unavailable, cancel and refund. [L0857, 2025]

#### Offering alternatives: two price values

- Procedure from 2025: when an item is out of stock with no clear delivery date:
  1. Tell the customer about the stock problem. [L0857, 2025]
  2. Offer similar alternatives at about the same price. Example: between 800 and 1,200 dollars for a 1,000 dollar order. [L0857, 2025]
  3. If the customer wants a more expensive available item, send a Shopify draft order for the difference. [L0857, 2025]
  4. If the customer declines, cancel the order and refund it. [L0857, 2025]
- Rule for supplier failures: offer 2 or 3 alternative products that match the original in size, color, quality and price and are in stock and ready to ship now. Ask whether they want to swap their order for one of them. [L1407, 2023+]

Use the 800 to 1,200 band in the 2025 procedure when the customer's order value is the reference. Use the "match size, color, quality and price" standard when the customer must receive a like-for-like product. [L0857, 2025; L1407, 2023+]

#### Supplier cannot fill the order

```
Hi {customer name}, I am following up about your order {order number}. We recently ran into a problem: our supplier is currently out of stock on this product and has no estimated restock date, [or: our supplier is not responding to us and we are unable to fulfill this order for this specific product]. We would like to offer you two or three alternative products that are similar in size, color, quality and price and that are in stock and ready to ship right away: {alternative product 1}, {alternative product 2}, {alternative product 3}. Would you be willing to swap your order for one of these in-stock items? Please reply with your choice and we will ship it to you as soon as possible.
```
[L1407, 2023+]

Orders placed before you learned of a supplier problem are the first ones to fix. Those customers are already waiting and can be offered a swap. [L1407, 2023+]

#### Supplier stock and payment on backorder

- Do not confirm any supplier payment for a backorder without the business owner's authorisation. [L1119, undated]
- Discounts must be authorised by the business owner. [L1119, undated]

### Discounts, partial refunds and extra payment

- Only offer discounts that have been authorised by the business owner. A discount for waiting can be given as a refund, and a discount for a similar product can be used to close the sale. [L1119, undated]
- To ask a customer for extra payment (for example, the price difference on an upgrade):
  1. Create a draft order in Shopify with the amount you need. [L0857, 2025]
  2. Send it to the customer from Shopify so they can pay by the link. [L0857, 2025]
- Offer the 50% OFF replacement purchase only through the discount link used in the template for in-transit orders. [L0405, undated]

### Product test orders and pre-order follow-up

When an order came from a short product test, tell the customer directly. Offer a pre-order option so they can keep the item. The following email is the 2025-26 template for that case.

```
Subject: Thank you for your order - important update about [Product name]

Hi [Customer name],

Thank you very much for your order of [Product name] (order number [Order number]). We really appreciate your trust in us.

We need to tell you something important: this order was part of a short product test to find out whether the product sells before we buy it in larger quantities. Your payment of [Order amount] will be refunded in full to your original payment method. You should see the refund within [Refund timeframe].

If you would still like to receive this product, please reply to this email and tell us. We will then place you on a pre-order list, and the expected delivery is around [Expected delivery window]. You will be the first to know if anything changes, and you can cancel at any time before shipping.

Thank you for your patience and understanding.

Best regards,
[Your name]
[Store name]
[Support email]
```
[L1017, undated]

### Gifts for delayed orders

- Gifts from Amazon: do not ship free gift items directly from Amazon to the customer, because the Amazon origin is visible. Have the items shipped to yourself, repackage them, and include a note for the customer. [L0972, 2025]
- When a product is out of stock but already ordered, a gift of a different slow-selling design keeps the customer happy until the stock arrives. Once the stock comes in, resend the item the customer originally bought. [L1439, 2024+]


Part 8 of 23 of "17. Customer Service Returns and Chargebacks: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks.md · Previous: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks/07-order-status-tracking-and-delivery-inquiries.md · Next: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks/09-backorders-made-to-order-items-and-shipping-delay.md
