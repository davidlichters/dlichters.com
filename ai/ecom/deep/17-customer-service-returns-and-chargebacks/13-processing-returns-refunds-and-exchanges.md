<!-- part of ecom/deep/17-customer-service-returns-and-chargebacks.md -->
Part 13 of 23 of "17. Customer Service Returns and Chargebacks: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks.md · Previous: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks/12-compliance-check-and-ai-generated-drafts.md · Next: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks/14-damaged-defective-wrong-or-missing-items-and-sizin.md

## Processing returns, refunds and exchanges

### Return policy, ownership and who pays

- Publish a clear return policy that states a return address and who pays return shipping; then refuse fraudulent claims, because a clear policy makes refusal defensible. [L0335, 2023]
- Set your return policy at least as competitive as those of your competitors. [L1113, 2022]
- Return responsibilities follow the supplier agreement made at approval, not who ships the order. Check that agreement, and ask the supplier if the return process is not stated. [L0803, 2022]
- If you ship on your own account and a customer returns an item, create the return label through your carrier and send it directly to the customer. Whether the item goes back to the supplier warehouse depends on the supplier's return policy. [L0803, 2022] **
- Many suppliers do not accept returns, so set up return addresses on your side for customers returning items, and record these addresses in the accounts sheet. [L1000, 2017]
- Do not set up a process that requires shipping returned items to yourself and reselling them. It is messy; match the supplier's policy and keep exclusions in your general return policy. [L0835, 2023] **
- Do not use a personal home address as the return address when using Buy with Google, because the address is shown to the customer and returns can go there if they do not contact you first. Consider carefully whether to use Buy with Google at all. [L1090, 2021] **
- Keep unsold returned items on a list. An assistant can offer them to customers at a lower price when the product is in stock again. [L1000, 2017]

### Change-of-mind returns and category rules

- Returns are accepted in three categories: change of mind, damaged in shipping, and faulty or under warranty. If a return claim fits none of these, inform the person responsible for returns before deciding. [L1291, undated]
- A change-of-mind return is only possible when all of the following apply: the claim is made within 7 days of delivery; the customer pays and arranges the return shipping; the return is for store credit only (no refunds are offered); and the goods are in their original packaging. Requests outside these conditions go to the person responsible. [L1291, undated]
- A change-of-mind claim must be submitted within 7 days of the order being delivered. [L1291, undated]
- Processing an approved change-of-mind return:
  1. Once the claim is approved, give the customer the return shipping address, which is the original supplier.
  2. Notify the supplier that a return is coming.
  3. Do not let the customer use or receive the store credit until the supplier confirms the goods arrived in good order.
  4. After the supplier confirms safe delivery, process any re-order from the customer in the normal way.
  [L1291, undated]
- Store credit from a change-of-mind return cannot be approved or used until the supplier has confirmed that the returned goods were received in good order. [L1291, undated]

### Supplier return workflows (RMA)

- A return requires an RMA number, which the customer requests from the store before sending the item back. Questions about a product's return policy are answered within 24 hours, and refunds go to the original credit card used for the order. [L0556, 2021-22] **
- Benchmark: a competitor's return process typically issues a return authorisation within 2 business days, and where the item qualifies for a free return it also sends reply-paid postage details. Record this response time as a benchmark for your own process. [L0893, 2021-22] **

**Standard supplier flow, version A** (procedure with a 30-day label window):
1. The customer emails the store requesting a return.
2. You contact the supplier with the order number and the return request.
3. The supplier issues a return shipping label, usually within a return window such as 30 days stated in the supplier agreement.
4. Attach the label to the package; the carrier picks it up and returns it to the supplier warehouse.
5. After the supplier receives the item, refund the customer or exchange the product.

[L0469, 2021] **

**Supplier flow, version B** (customer pays return shipping by default):
1. Customer initiates a return request with your company.
2. Contact the supplier with the customer order number and return reason.
3. Request a return shipping label from the supplier via email.
4. Provide the return shipping label to the customer.
5. Customer ships the product back to the supplier (customer typically pays return shipping unless the supplier policy specifies otherwise).
6. Supplier refunds your company.
7. You refund the customer or offer store credit based on customer preference.

[L0251, 2023] *(2023)*

**Supplier flow, version C** (supplier label, refund after receipt):
1. The customer emails the store with a return request at the address listed on the returns policy page.
2. The store acknowledges receipt of the request.
3. The store asks the supplier for a return shipping label for that order number.
4. The supplier sends the label, and the store emails it to the customer.
5. The customer attaches the label, the package is picked up, and it is shipped back to the supplier.
6. The supplier refunds the store, and the store then refunds the customer.

[L0667, 2025] *(2025)*

**Supplier flow, version D** (drop-shipped item, broken):
1. The customer emails the store to report a broken item and asks for a refund or return.
2. The store emails the supplier and asks for a return shipping label.
3. The supplier sends the return label to the store.
4. The store sends the label to the customer, who ships the item back.
5. The item returns to the supplier's warehouse.
6. The supplier refunds the store, and the store refunds the customer.

[L0853, 2021] **

**Supplier flow, version E** (customer requests, brand label, direct to warehouse):
1. Customer requests a return.
2. Contact the brand and request a return shipping label.
3. The brand sends the label to the customer.
4. The customer ships the item to the supplier's warehouse.
5. The customer is refunded.

[L1111, 2020] **

**Standard supplier flow, version F** (item goes directly to warehouse):
1. Customer asks for a return.
2. Retailer contacts the supplier with the order number.
3. Supplier sends a return shipping label to the retailer.
4. Retailer sends the label to the customer.
5. Customer ships the item back, and it goes directly to the supplier's warehouse.
6. Supplier credits the retailer, and the retailer refunds the customer.

[L1283, 2023] *(2023)*

**Generic flow** (summary of the seven-step pattern):
1. The customer requests a return.
2. You notify the supplier.
3. The supplier sends a return shipping label.
4. The customer ships the item back.
5. You refund the customer, and the supplier refunds you.

[L0247, 2021] **

- Supplier return request email (use for each return; replace the bracketed fields):

```
Subject: Return authorization request, order [order number]

Hi [supplier rep name],

A customer from order [order number] would like to return [product name]. Could you please issue a return authorization number for this return and send the return shipping label directly to the customer?

Thank you,
[your name]
[store name]
```

[L1002, 2019] **

- For suppliers with different return policies, keep one catch-all shipping and returns template for suppliers that share a policy. Create a separate template for a supplier with its own policy and show it in the shipping and returns section of that supplier's product pages. [L1002, 2019] **

### Supplier-side problems: proof, reshipping and missing labels

- Handling refunds and returns with a supplier:
  1. Collect proof that something went wrong, such as the product is broken, incorrect or not delivered.
  2. Ask the supplier for a refund or a free reship when proof exists; good suppliers will do this.
  3. If the product is returned, confirm the return address and contact details before reshipping.
  4. Reship costs are lower than shipping a new parcel from China, so reshipping is often the better option.
  5. Contact the supplier in parallel with answering the customer, without making a definite promise to the customer yet.
  6. Ask the supplier once for their refund policy and publish a link on your store so customers can see the terms.

  [L0780, 2024+]
- When a supplier cannot deliver a return label or the logistics are not working, use this wording. Present it as a planned process, not as a free giveaway, so customers do not learn that they can skip returns and word does not spread through the same postcode:

```
Sure, absolutely, we will refund you now. At the moment our logistics are not working for us, so we will refund you in this instance and send your return label once the process is working again.
```

[L0552, 2023]
- If a customer says they have no return label and asks what to do with the item, suggest they gift it to someone who could benefit from it, or donate it to a local charity or shelter. Customers usually respond well to this, and it turns the refund into a positive story for the brand. [L0552, 2023]

### Refund timing and confirmation

- Refunds are confirmed to the customer by email, and the money is credited to the original credit card within 5 to 7 business days of the refund being processed. Tell the customer this timeframe in every refund reply. [L0911, undated]
- Timing conflict: the one source-sourced material uses 5 to 7 business days for card refunds, while the brands in the one source 2026 examples promised 5 to 10 business days, depending on the bank's processing time. Use 5 to 7 business days as the standard in replies when your card processor and bank data support it; otherwise use the 5 to 10 business day window, and put the same refund window in your refund policy and in replies. [L0911, undated; L0405, undated; L1164, 2026]
- Refund-timing wording used by the one source examples: "5-7 business days, depending on your bank or card issuer." [L0405, undated]
- Refund process after a supplier return: the supplier refunds the store, and the store then refunds the customer. Refund the customer only once the supplier has received the item or confirmed the goods. [L0667, 2025; L0469, 2021; L1291, undated]

### Refund emails and reply templates

- Refund reply template for a delivered order where the product quality is poor. Replace the bracketed fields:

```
Hello [NAME],

Thanks for reaching out, I'm happy to help.

I'm sorry the [PRODUCT] did not live up to your expectations. We aim to give every customer a great experience with [STORE NAME], but we don't always succeed. Our refund policy still applies, and we want to make this right for you.

I have issued a full refund for your order. You should see a confirmation email shortly. The money should return to your credit card within 5-7 business days, depending on your bank or card issuer.

You are welcome to keep the [PRODUCT].

I hope this helps! Let me know if you have any other questions or concerns.

Best wishes,
[AGENT NAME]
[STORE NAME] Customer Support Representative
```

[L0405, undated]

- Refund reply template for a delivered order where the delivery time was unsatisfactory:

```
Hello [NAME],

Thanks for reaching out, I'm happy to help.

I'm sorry the delivery time did not meet your expectations. We aim to give every customer a great experience with [STORE NAME], but we don't always succeed. Our refund policy still applies, and we want to make this right for you.

I have issued a full refund for your order. You should see a confirmation email shortly. The money should return to your credit card within 5-7 business days, depending on your bank or card issuer.

Please feel free to keep your [PRODUCT].

I hope this helps! Let me know if you have any other questions or concerns.

Best wishes,
[AGENT NAME]
[STORE NAME] Customer Support Representative
```

[L0405, undated]

- Shorter reply template for a shipping-time complaint (single paragraph; replace the bracketed fields):

```
Hi [customer name], thanks for getting in touch, happy to help. I'm sorry the shipping duration didn't meet your expectations. We aim to give every customer a great experience, yet we don't always get it right. Still, our refund policy stands, and I want to resolve this for you, so I've issued a complete refund for your order. A confirmation email should arrive soon, and the amount should return to your credit card within five to seven business days. You're welcome to keep the [product name]. Hopefully this helps. Should you have further questions or concerns, don't hesitate to reach out. Best wishes, [agent name], [store name] Customer Support Representative
```

[L0911, undated]

- Structure for a reply to a delivered order with unhappy product quality (structure only; write the text in your own words): thank them and say you are happy to help; apologise that the product did not meet expectations; say the store aims for a great experience but sometimes falls short; state that the store stands by its refund policy and wants to make it right; confirm a full refund has been processed and that an email confirmation will arrive shortly; say the charge should return to the credit card within 5-7 business days, depending on the bank; tell the customer they may keep the product; invite further questions; sign off as the store customer support representative. [L0405, undated]
- Structure for a reply to a delivered order with unhappy shipping time (same structure as above, with the complaint about shipping time): thank them and say you are happy to help; apologise that the shipping time was not satisfactory; say the store aims for a great experience but sometimes falls short; state that the store stands by its refund policy and wants to make it right; confirm a full refund has been processed and that an email confirmation will arrive shortly; say the charge should return to the credit card within 5-7 business days, depending on the bank; tell the customer they may keep the product; invite further questions; sign off as the store customer support representative. [L0405, undated]
- If an order has been delivered and the customer is unhappy with it, you can issue a full refund and let the customer keep the product, so no return is required. Tell the customer the refund has been processed and that the card credit can take 5 to 7 business days. [L0911, undated]

### Partial refunds and keep-the-item deals

- Partial refunds in Shopify (procedure; *older: 2019*):
  1. Go to the order details in Shopify.
  2. Locate the refund section.
  3. Click "Partial refund" (not "Full refund").
  4. Enter the refund amount (for example, $100 off the full product price).
  5. Confirm the refund.

  Do not accidentally select the full refund option. [L0243, 2019]
- When a customer asks for a return, try to offer a deal to keep the item first, since that is easier than sending it back. [L1113, 2022] **
- For a refund request without a defect, charge the customer for return shipping. Alternatively, offer a partial refund of around 30 to 50 percent so the customer keeps the item. [L0352, 2022]
- When negotiating a refund where the customer keeps the item, aim for break-even so the seller does not lose money on the order. A 50 percent refund was used in practice. [L0352, 2022]
- Return shipping for a US customer typically costs about 15 to 20 USD, which often exceeds the value of a cheap product. Quote this real cost to the customer when explaining why a return is not worth it. [L1128, 2023]
- Handling a return request when return shipping is high:
  1. Apologise and explain that shipping the item back to the US is expensive, quoting a realistic rate of about 15 to 20 USD.
  2. If the mistake was yours, send a free replacement.
  3. If the customer is not at fault, offer a replacement in which the customer pays only shipping, for example about 7 to 8 USD, while you cover the product cost.
  4. If the customer insists on a refund and does not want a replacement, offer a partial refund that is lower than the sale price by the return shipping cost, and let the customer keep the product.

  [L1128, 2023]
- Example: for a product sold at 50 USD where return shipping would cost the customer 20 USD, offer a partial refund of 30 USD and let the customer keep the item, avoiding the trip to the post office and the wait for the return. The seller stated this may not be the best method, and customers accepted it with mixed reactions. [L1128, 2023]
- For a low-cost product where return shipping costs 15 to 20 USD, a replacement with the customer paying about 7 to 8 USD for shipping was accepted by most customers. Partial refunds drew more complaints. Lead with the paid-shipping replacement option. [L1128, 2023]
- When you handle return and replacement emails yourself, read the customer's first message to judge whether they will accept paying for shipping. Offer a paid-shipping replacement to those who seem willing, and a free replacement or a refund to those who do not. [L1128, 2023]
- Landed cost of a cheap item shipped to the US: supplier price (about 2 to 3 USD) + shipping to the US (about 5 USD) = about 7 to 8 USD. If the customer pays about 7 to 8 USD for shipping on a free replacement, the seller's cost is covered. [L1128, 2023]

### Store credit and exchange-first returns

- When customers request refunds, offer store credit instead. Store credit keeps revenue on your books, retains the customer within your ecosystem, and lets you fulfil their purchase need with an alternative product or brand you control, maintaining the sale. [L0309, 2024+]
- Return credit options in Loop: store credit delivers a gift card code by email once the return is set up, while a refund to the original payment method is issued minus applicable fees. Refund timing varies. [L0955, 2025-26]
- Choose the model that fits the return type:
  - Change-of-mind returns under the 7-day rule are store credit only. [L1291, undated]
  - Loop's exchange-first model offers refund or exchange, with bonus credit on refunds. [L0955, 2025-26]

### Exchange-first logic in Loop (Checkout Plus)

- Customer return flow with Checkout Plus:
  1. The customer enters the order number and zip code.
  2. Loop detects that the customer is covered for a free return.
  3. The customer selects the return reason and the item to return.
  4. The summary page removes the handling fee for a customer who opted in.
  5. The customer submits the return and chooses store credit or a refund to the original payment method.
  6. The customer buys a label from the preferred carrier, and the label is billed to the brand's FedEx or USPS account.
  7. The customer attaches the label and ships the item back.

  [L0955, 2025-26]
- Exchange-first return logic in Loop:
  1. The shopper selects the item to return.
  2. The shopper gives a reason, such as too big, too small or did not like it.
  3. The shopper chooses refund or exchange.
  4. If the shopper wants a refund, Loop offers bonus credit to shop again now.

  [L0955, 2025-26]
- A bonus credit of about $5 or $10 for shopping again, added on top of the refund value, can turn a refund into an exchange. The credit works across the full catalogue. [L0955, 2025-26]
- Shoppers who want an item in a different size are more likely to exchange than to refund. This is why the return reason question comes before the refund-or-exchange choice. [L0955, 2025-26]
- Shoppers who pay for free returns in Loop's model are not charged the handling fee at return. Those who did not opt in pay the handling fee on return. [L0955, 2025-26]

### Cross-border returns

- Returns from a customer in another country are usually sent to a local return centre, and the customer pays return shipping. This applies in the UK, the Netherlands and elsewhere. [L0660, 2019+]
- Global return solutions are lacking in dropshipping. Returning a product to a facility where it can be handled matters most for fashion, because fashion return ratios are higher. [L0780, 2024+]
- Returns from overseas dropshipping suppliers are very hard to process. Some stores absorb the cost of a return instead of chasing the supplier, especially when the return is requested after the order has already shipped. [L1315, 2023]
- Refund process for a customer who requests a refund:
  1. Check whether the customer is in the same country as the store's target market.
  2. If yes, ask the customer to send the product back so it can be resold.
  3. If no, which is the usual case, tell the customer to keep the product.
  4. Refund the customer if the reason for the request is valid.

  [L1439, 2024+]

### Refund abuse and requests outside policy

- Most customers do not abuse refund policies. The minority who do is small, and generous service tends to pay off in brand goodwill. Design the service policy around the honest majority, and handle the few abusers with stricter rules only when they become a real cost. [L0552, 2023]
- Refund abuse without returning the item is a risk mainly for low-priced items, such as those under about $50. For expensive products it was not seen in practice. [L0970, 2023] *(2023)*
- Responding to a return request outside the policy:
  1. Send a polite first email that explains the policy.
  2. Include a screenshot of the return policy page and a link to it.
  3. If the customer stays unreasonable, consider accepting the return.

  [L0962, 2021] **
- Customers ask for returns of unopened product during a recall, and they get frustrated when refused. Define a clear recall and unopened-product return process before it is needed. [L1164, 2026]


Part 13 of 23 of "17. Customer Service Returns and Chargebacks: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks.md · Previous: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks/12-compliance-check-and-ai-generated-drafts.md · Next: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks/14-damaged-defective-wrong-or-missing-items-and-sizin.md
