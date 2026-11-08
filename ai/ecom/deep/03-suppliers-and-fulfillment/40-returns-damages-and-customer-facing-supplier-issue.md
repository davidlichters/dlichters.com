<!-- part of ecom/deep/03-suppliers-and-fulfillment.md -->
Part 40 of 51 of "3. Suppliers and Fulfillment: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment.md · Previous: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/39-backorders-and-customer-communication.md · Next: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/41-dropshipping-platforms-and-agents-cj-hyper-rescue.md

## Returns, Damages and Customer-Facing Supplier Issues

### Setting the Return Policy from Supplier Policies

- Your customer return policy should be the average of your suppliers' return policies. If most suppliers charge return shipping, the customer pays return shipping. [L1277, 2020]
- Choose suppliers based on their return rules, and set your return policy per supplier or per brand. If a supplier accepts no returns, state clearly on those product pages that the item cannot be returned. [L0664, 2020]
- Each supplier's return policy is written into its agreement and states how long returns are accepted and for which reasons. Check it per supplier before you offer refunds. [L0805, 2024]
- Returns are handled supplier by supplier, not by Shopify. Most suppliers offer a 30-day return policy, which is visible when you sign the supplier agreement. [L0666, 2024]
  - The supplier issues a return authorization label.
  - The item ships back to the supplier's warehouse.
  - The supplier credits the sale.
- Before you commit to a supplier with a higher return rate or heavy items, ask about its return policy and fulfillment options. Check whether it accepts returns at all, because a supplier that does not accept returns affects your own return policy. [L0801, 2021]
- Many suppliers in China offer poor return policies, and returns often require the store to pay return shipping. Agree on return and size-change handling with the supplier before launch. [L0660, 2019+]
- Returns can go back to a supplier abroad, but the store then pays the return shipping. A store with its own warehouse in the sales country can receive returns locally, though the goods must be flipped again. [L0660, 2019+]
- Ask each supplier in advance whether it pays for a free replacement when an item is damaged in transit. Some suppliers cover the cost, while others only claim it from the shipping company. This changes how you handle damage claims. [L0352, 2022]

### Return Rate Benchmarks

Two sources from 2021 give different rules. Use the table to see when each applies.

| Rule | Value | When it applies | Source |
|---|---|---|---|
| Fixed target | 1% or lower | Benchmark for every product. If returns consistently exceed it because of supplier packaging or quality, discontinue the supplier regardless of other factors. | [L0270, 2021] |
| Situation-dependent check | No fixed percentage | Assess the product case by case, using the four factors below. | [L0270, 2021] |

Situation-dependent check, four factors:

1. How many units of that product have sold.
2. The root cause of returns: packaging damage, quality control, or customer expectation.
3. If returns are a problem from day one because of supplier quality, discontinue the supplier immediately.
4. If returns come from customer misunderstanding, fix the product page with clearer information. [L0270, 2021]

- Incorrect sizes raise the return rate, so a wrong size chart costs money through refunds and returns. Verify every size against centimeter measurements before you sell. [L0661, undated]

### Free Returns and Restocking

- Offer free returns only when the item is defective or damaged, because then the supplier covers the cost. For other returns, match the restocking-fee norms of your niche. Avoid testing free returns before you have a cash reserve. [L0468, 2020]
- If a supplier has no return policy, state on the product page that the item is not eligible for returns, except for damaged or defective items. [L0468, 2020]

### Product Pages and Policy Pages

- In Shopify, product pages have tabs. The Shipping tab can show the specific supplier's return policy for that product, so make the supplier return policy unique on each affected product page. [L1088, 2020]
- On the main Shipping and Returns page, state that the store's return policy excludes named suppliers. Then add each excluded supplier's own shipping and returns policy below that statement. [L1088, 2020]
- Products from a supplier that does not accept returns can be marked on the product page as not eligible for return. The shipping and return policy can say that some exclusions apply and list them. [L1094, 2023]
- The store's general shipping and return policy should combine its suppliers' policies. If a supplier does not accept returns, the product page says the item is not eligible for returns, and the policy page lists that exception below the general policy. [L1114, 2023]
- When returns go to a third-party warehouse instead of the business address, the refund policy should state that the exact return address is given only after the return is authorized. Without this statement, Google may flag the site for hiding a dropshipping model. [L0724, 2020-26]

### Pre-Purchase Return Option (Checkout Plus)

- Checkout Plus is an unfulfillable product on the order. The main operational step is making sure the 3PL or warehouse understands this. No return label is included at purchase because of Checkout Plus. [L0955, 2025-26]
- Steps:
  1. Create the pre-purchase return option in Shopify as a product so it appears on the order. [L0955, 2025-26]
  2. Tell the 3PL or warehouse that this line is unfulfillable and must not be picked or shipped. [L0955, 2025-26]
  3. Confirm that the line is visible on the order for customer service staff. [L0955, 2025-26]
  4. Set a separate price per Shopify Market if the offer runs in several markets. [L0955, 2025-26]
  5. Do not include a return label at purchase because of the option. The label is issued only when the return is submitted. [L0955, 2025-26]

### Damaged Deliveries and Claims

- Before you sell a product, check whether its type is prone to shipping damage:
  1. Search Google for the brand names of your future competitors.
  2. Read their reviews and look for complaints that items arrived damaged.
  3. If many competitors have such complaints, assume the problem affects most suppliers in that industry. [L0769, 2020-26]
- Shipping damage depends more on the supplier and its packaging than on the niche itself. Industry-wide damage patterns can still show up in competitor reviews. [L0769, 2020-26]
- Claim routing for damaged deliveries. The shipment must be insured in both cases. [L1281, 2022]

| Who ships from its account | Who files the claim | What the seller still does |
|---|---|---|
| Supplier | Supplier, which processes the replacement or exchange | Handles the customer and the claim |
| Seller, with insurance | Seller, with the shipping carrier | Handles the customer and the claim |

- If a supplier repeatedly sends damaged goods, especially for fragile products, change suppliers rather than accepting the losses. [L1251, 2024+]
- For a cheap product, the cost of goods plus shipping to the US can be about 7 to 8 USD per unit. Use this figure to decide whether a replacement or a partial refund costs less than a return. [L1128, 2023]

### Freight Deliveries and Refusals

- For damaged large items delivered by freight:
  1. The customer photographs the damage on arrival.
  2. The customer notes the damage on the delivery receipt.
  3. The customer reports the damage to the carrier.
  - Carrier reporting applies to freight or LTL shipments, not to parcel carriers such as UPS, FedEx or USPS.
  - Large freight items require a signature on delivery, and the shipping company calls the customer to set a delivery time. [L0556, 2021-22]
- Freight deliveries require the buyer to be present to inspect the package and sign the receipt. If the outer packaging is clearly damaged, tell the customer to refuse the delivery. A refused shipment can be replaced by the supplier without repacking or return shipping. [L0667, 2025]
- For a freight shipment from a supplier, follow the freight carrier's guidance for damage claims and refusals. A damaged item that is accepted and then opened creates a much bigger return ordeal than one refused at delivery. [L0667, 2025]

### Supplier Errors and Substitutions

- Dropshipping means you have no warehouse of your own, so supplier mistakes land on you as refunds, complaints and reputational damage. Chinese suppliers may promise much and later deny the promise, so verify quality before you scale. [L0694, 2024]
- If a supplier ships a different product than the one you specified, the supplier is responsible for the mismatch. Before shipping, the supplier should send a photo or video of the product from the factory. Supplier quality varies by agent, so judge each agent on its own record. [L0694, 2024]
- A supplier that sends wrong materials, such as silver instead of gold, leads to negative reviews and can force a store to close. Confirm supplier quality before you scale. [L0492, 2023+]
- Wrong or low-quality items from a supplier can create enough complaints and disputes that the brand's Facebook account and its ads are lost. Check samples and order accuracy before you increase ad spend on a new supplier. [L0492, 2023+]
- Ask dropship suppliers to contact you before sending any replacement or substitute item when the original is out of stock. Suppliers may send a similar item or another brand's product to protect their own profit, which can damage your brand. Make this explicit in the agreement and in regular communication. [L0552, 2023]
- A dropship supplier substituting a different colour, variant or branded item for the ordered product can trigger chargebacks and customer complaints. In one case, around 300 units went out with another brand's label, which nearly crippled the business. [L0552, 2023]
- When a supplier is backlogged, ask it to ship the existing orders instead of issuing refunds, since refunds often create more problems. Resume ads only after the backlog is cleared or a new supplier is confirmed. [L1173, undated]
- For an AliExpress order that needs a refund, the seller can ask AliExpress to refund the supplier payment. In the reported case the money came back almost immediately. Handle the buyer's refund separately, since the item may never need to return to the supplier. [L1128, 2023]
- Whether to cancel an order and request a refund depends on the relationship with the supplier. If the supplier appears to be stalling or lying, request the money back immediately. [L0967, 2020]
- Long shipping times are less of a problem early on. Reply quickly to customer emails, apologize, give a reason such as customs or Covid delays, and offer a discount code for the next purchase to prevent chargebacks. [L0820, undated]
- Case: A seller started a store with necklaces that had strong click-through rates. A buy one get one free offer produced around 60,000 within two months. The seller then switched to a random new supplier, which shipped the wrong product: gold necklaces arrived in silver, and some African-country orders went to the wrong country (Egypt orders received Ethiopia products). About 200 orders were affected. Some customers kept the product, others requested refunds, and the seller shut the store and restarted. [L0780, 2024+]

### Supplier Packaging and Invoices

- Expect supplier boxes and product manuals to display the brand name and supplier information. This signals authenticity. Suppliers never include invoices or receipts showing your wholesale cost, because they do not sell directly to consumers. [L0249, 2022]
- Authorized brands that do not sell direct to the public typically include only packing slips in shipments, not invoices or receipts. This is normal for authorized retailers and has not caused problems in almost 15 years. [L0806, 2024]
- Default supplier packaging shows the supplier's name, which is normal for dropshipping. Only worry if a packing slip or invoice contains the supplier's name. [L0834, 2021]
- Shein's logo on a package is a branding problem when reselling Shein products, the same as with normal dropshipping. Branded dropshipping or a packaging solution is needed so the competitor's name does not reach the customer. [L1439, 2024+]

### Return Procedures

- Supplier return handling:
  1. The customer contacts you by email or phone to request a return.
  2. Email the supplier rep with the order number and ask for a return authorization number.
  3. The supplier usually sends a shipping label directly to the customer.
  4. When the item arrives back, refund the customer.
  5. Ask the supplier to refund you. Return policies differ by supplier. [L1002, 2019]
- Return procedure for damaged or unwanted items:
  1. The customer reports the damaged or unwanted item by email.
  2. The store emails the supplier about that order and asks for a return shipping label.
  3. The supplier sends the return shipping label to the store.
  4. The store sends that label to the customer.
  5. The customer ships the product, and it goes directly back to the supplier's warehouse.
  6. Check each supplier's exact return process and policy during the approval process. [L1277, 2020]
- Handling a supplier return request:
  1. Send the supplier the order number and the return request. Ask for a prepaid return shipping label or the instructions the customer needs. [L0910, 2015]
  2. Set a reminder in your email tool to check for a reply after two or three days. [L0910, 2015]
  3. If there is no reply, follow up politely and ask the supplier to confirm that the return was handled. [L0910, 2015]
  4. Repeat the follow-up until the return is actually processed, because suppliers often delay returns. [L0910, 2015]
- Suppliers dislike processing returns even more than the store does. A return request should never be assumed to be done just because it was sent. The store is responsible for following up until the supplier acts. [L0910, 2015]

### Samples

- When customers ask for product samples, such as fabric swatches, ask the brand whether it will ship samples to your customers for you. Competitors may already do this, and the brand may ask you to pay the shipping. [L0962, 2021]


Part 40 of 51 of "3. Suppliers and Fulfillment: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment.md · Previous: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/39-backorders-and-customer-communication.md · Next: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/41-dropshipping-platforms-and-agents-cj-hyper-rescue.md
