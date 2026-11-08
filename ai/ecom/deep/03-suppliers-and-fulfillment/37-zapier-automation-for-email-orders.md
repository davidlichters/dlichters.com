<!-- part of ecom/deep/03-suppliers-and-fulfillment.md -->
Part 37 of 51 of "3. Suppliers and Fulfillment: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment.md · Previous: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/36-order-processing-and-automation.md · Next: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/38-inventory-stock-outs-and-backorders.md

### Zapier Automation for Email Orders

#### Rules before you build

- Automation works only for suppliers that accept orders by email. Suppliers that require website ordering cannot use this method. If you have 20 suppliers and 2 require website ordering, you can still automate the other 18 that accept email. [L0283, 2020-26]
- Manual order submission by email takes about 3 minutes per order. With 500 orders in the first year, automating this process saves roughly 25 hours per year. [L0283, 2020-26]
- Create one separate Zap for each supplier that accepts email orders. This ensures each order goes only to the correct supplier and prevents one order from being sent to all suppliers at once. [L0283, 2020-26]
- Do not use one Zap for all suppliers, and do not skip the vendor matching filter. Without vendor filtering, one customer order could be sent to all suppliers instead of only the one whose product was ordered, creating confusion and duplicate work. [L0283, 2020-26]
- Use the "Filter by Zapier" feature with the condition "Line item vendor text exactly matches [vendor name]". This ensures only orders containing products from a specific supplier are sent to that supplier. The vendor name must match exactly what is assigned to products in your Shopify store. [L0283, 2020-26]
- In Shopify, each product is assigned to a vendor in its product settings. The Zapier condition uses these vendor assignments to route orders to the correct supplier. Without vendors assigned to products in Shopify beforehand, the filter cannot identify which supplier should receive each order. [L0283, 2020-26]
- Forwarding orders to suppliers automatically is an advanced step. Set it up only after the store is profitable and receives several orders per day. A connector tool for this costs about $20 per month, so it should save meaningful time to justify the expense. [L0853, 2021] **
- Auto-fulfillment tools (AutoDS-type) send orders instantly, which makes cancellations and returns costly once the supplier has already shipped. Some operators prefer to review orders daily before sending them to the supplier, and to connect the supplier to Shopify directly. [L1315, 2023]
- Automation tools such as AutoDS are better added later, once the store has a high order volume and the main need is automating fulfillment. Starting with them too early adds cost without solving a real problem. [L1172, 2023+]

#### Zap setup procedure

1. Log into zapier.com and create a new Zap.
2. Name the Zap (e.g., "Automated Order Processing Vendor [Supplier Name]").
3. Step 1 - Trigger: Select Shopify as the app.
4. Select "New Paid Order" as the trigger event.
5. Choose your Shopify store from the dropdown.
6. Set Payment Status to "paid".
7. Set Order Status to "any".
8. Set Fulfillment Status to "any".
9. Click "Done Editing".
10. Add Step 2: Click the plus sign to add a new step.
11. Click "Filter".
12. Select "Filter by Zapier" as the app.
13. Set the condition to "Line item vendor text exactly matches".
14. Enter the vendor name exactly as it appears in your Shopify store (e.g., "one source Merch").
15. Add Step 3: Click the plus sign to add another step.
16. Select Gmail as the app.
17. Select "Send Email" as the action event.
18. In the "To" field, enter the supplier's email address.
19. In the "Bcc" field, enter your own email address to receive a copy of every order.
20. In the "From" dropdown, select the email account you want orders sent from.
21. In "From Name", enter a name that will appear in the supplier's inbox (e.g., "one source Orders").
22. In the subject line, type "one source order PO " then click the plus icon to insert a field.
23. Select Shopify "New Paid Order" and select "Order Name" to create a dynamic order reference.
24. In the email body, compose your message and use the plus icon to insert dynamic fields.
25. Insert fields for product name, quantity, SKU, customer name and address from Shopify.
26. Format the email body to include all order details required by your supplier.
27. Click "Continue".
28. Toggle the switch from "off by default" to "on" to activate the Zap.
29. Test by placing a test order in your Shopify store.
30. Check your BCC inbox to verify the email was sent correctly to the supplier.

[L0283, 2020-26]

Zapier email template for a supplier (dynamic fields in brackets):

```
To: [supplier's email address]
Bcc: [your email address]
From: [your email account]
From Name: [Your Business Name] Orders

Subject: one source order PO [Order Name]

Body:

Please process the order for [Quantity] [Product Name].

SKU: [Line Item SKU]

Shipping to:
[Customer First Name] [Customer Last Name]
[Customer Address]
[Customer Address Line 2 - if applicable]
[Customer City], [Customer State] [Customer Zip]

Let me know if you have any questions.

Best regards,
[Your Name]
[Your Business]
```

[L0283, 2020-26]

- Always BCC yourself on every order email sent by automation. This lets you verify that orders are submitted correctly and monitor the automation's performance. Review the BCC emails after a few orders to confirm everything works. [L0283, 2020-26]
- Zapier forwards orders only. The complete workflow includes one manual step: after Zap 1 creates a card in the paid orders list, move it manually to "sent to supplier" once you place the actual purchase order. This list shows which paid orders have been communicated to suppliers and which still need supplier contact, which helps prevent orders from being forgotten in supplier inboxes. [L0292, 2020-26]
- The "delivered and pending review" status is not automated. Zapier handles only the paid and shipped transitions. You or your VA must monitor carrier tracking data and supplier notifications to see when orders reach customers. Once tracking confirms delivery, move the card from shipped orders to "delivered and pending review" to trigger the customer follow-up process. [L0292, 2020-26]

### Order Status Tracking

#### Status flow with Gmail labels

1. Order comes in and is vetted with the fraud-screening service ClearSale.
2. Order is forwarded to the supplier, which must approve it. The order sits in an "awaiting approval" label.
3. Once the supplier confirms stock, the order moves to "approved, awaiting shipment".
4. Send the shipping details to the supplier and move the order to the next stage until it ships.

[L1000, 2017]

#### Status stages across the workflow

| Stage | Where it is tracked | Automated? | Units |
|---|---|---|---|
| Paid | Paid orders list (card created by Zap 1) | Yes, by Zapier | [L0292, 2020-26] |
| Sent to supplier | Moved manually after the purchase order is placed | No | [L0292, 2020-26] |
| Shipped | Shipped orders list | Yes, by Zapier | [L0292, 2020-26] |
| Delivered and pending review | Moved manually after tracking confirms delivery | No | [L0292, 2020-26] |
| Awaiting approval / approved, awaiting shipment | Gmail labels | Labels set by the team during flow | [L1000, 2017] |

- Monitoring catches failures that would otherwise lead to lost orders and missed follow-ups. [L0236, 2018]

### Confirming Shipment and Tracking in Shopify

#### Fulfillment with tracking details

Sources name the Shopify screens differently. The steps are the same: enter the carrier and tracking number, then mark the order fulfilled.

- Confirming shipment when the supplier ships:
  1. Wait for the supplier to confirm that the order has shipped, including the shipping service used and the tracking details.
  2. In the Fulfillment screen of the Shopify Admin, select the shipping service and enter the tracking number in the "Tracking Information" section.
  3. Mark the order as fulfilled, which tells the customer that the order has shipped.

  [L1291, undated]

- Fulfilling an order in Shopify:
  1. Click "Fulfill item".
  2. Enter the tracking number.
  3. Enter the shipping carrier used by the supplier.
  4. Click "Send shipment details to customers".

  Once an item is marked fulfilled, its status changes from unfulfilled to fulfilled, and the customer receives an email with the tracking number. [L1302, 2020-26]

- The order page offers duplicate, cancel and archive actions, plus print and create shipping label options. Printing and shipping labels matter only if the store owner ships the items personally. In dropshipping the supplier ships, so these are not needed. [L1302, 2020-26]
- Sources differ on the customer email. [L1302, 2020-26] says the customer receives an email with the tracking number. [L1119, undated] says Shopify emails the customer that the order is being fulfilled and then archives the order. Both happen in their respective flows, so check what your customer actually receives.
- If a shipping app is used on top of the standard Shopify fulfillment process, write its steps into the shipping SOP so staff can follow them, including how tracking details reach the customer. [L1291, undated]
- Give the shipping and returns SOP a version number, starting at Version 1, and increase it each time the document is changed. This shows staff which version is current. [L1291, undated]
- When you arrange shipping yourself, add this line to the standard order message to the supplier: "Please provide the dimensions and weight of the parcel(s) so we can organise delivery." [L1291, undated]

### Delegating Order Fulfillment

#### Why and when to delegate

- Outsource order fulfillment early, because it is a low-skill but very time-consuming task. Check the fulfilled orders closely at first, then monitor them routinely once the process runs as planned. [L1358, undated]
- Order fulfillment is one of the first tasks to outsource. It is time-consuming, and it is not a highly skilled task that anyone can learn from online tutorials. It is commonly the first task delegated in a dropshipping business. [L1360, undated]
- A dedicated order processing hire should handle order management and supplier coordination, including placing supplier orders on time. Supplier and order work is a common place where a single person's workload first breaks down. [L1334, 2021-22] **

#### Delegation procedure

1. Make sure everything is set up properly before handing over the work.
2. Give the virtual assistant or team member access to your payment providers.
3. Check at the end of each day whether orders have been fulfilled.
4. For bundles, have the team member create a specific SKU for the variant in CJ, for example when product A is sold at full price and the same variant of product B is added as a free gift.
5. Have them add the SKU to the store, so that incoming orders can be fulfilled.
6. Check closely in the beginning, then reduce oversight once the routine works as planned.

[L1360, undated]

- Bundle example: product A is sold at full price and the same variant of product B is included as a gift. This requires a dedicated SKU for that variant at the supplier CJ. The team member creates this SKU, adds it to the store, and then fulfills the orders that come in. [L1360, undated]
- Bundle setup step: for a bundle that gives product B free with product A, have the team create a specific SKU for that variant on the supplier platform, for example CJ. Add it to the store before orders come in so the bundle can be fulfilled. [L1358, undated]

#### Own-stock fulfillment model

Use this procedure if you hold stock yourself rather than dropshipping. It is a separate model from supplier fulfillment.

1. Rent a warehouse on a monthly basis and store all stock there.
2. Keep a record of every incoming order.
3. Have a small team pack the orders on set days, here Saturday, Monday and Wednesday mornings for about one hour each.
4. Place the blanket inside the branded packaging provided by the box supplier.
5. Take the packed orders to the post office each day.
6. Mark each order as fulfilled in the order system.
7. Stop renting the warehouse once the stock is gone.

[L0492, 2023+]

### Supplier-Specific Procedures

#### Suppliers that ship in bulk to their warehouse

If the supplier insists on bulk orders delivered to their warehouse:

1. Ask why they do not ship direct to customers. It is often just extra admin for them.
2. Offer to pay an extra percentage per order or a flat few dollars per order to cover their admin costs. Some suppliers charge such a fee themselves. You can drop it later once you are making them money.
3. Alternatively, propose shipping to a central freight forwarding location that you arrange, and ask whether that works for them.

[L0929, 2021-22] **

#### Shipping responsibility per brand

- In a dropshipping setup where roughly 80% of brands ship directly from the manufacturer, about 20% of brands must be shipped by the store owner. Record each brand's shipping responsibility so staff know which orders need a manual shipping step. [L1396, 2021-22] **
- Mark brands you ship yourself with a yellow label: open the brand card in Trello, go to Labels, choose Create a new label, pick yellow and add it to the card. Use the card comments to note the extra shipping steps for that brand. [L1396, 2021-22] **
- Suppliers that take uniform emailed purchase orders can be handled by an order-sending tool. Suppliers with members portals go to yourself, a team member, or a Trello board. [L0466, 2018]

#### Supplier platforms

- Connect the store to a supplier platform such as CJ, HyperSKU or Best Dealer, depending on the product. Check open orders each evening. Place orders with the supplier using the payment method for the supplier account. Send shipping updates to customers. [L1173, undated]
- one source course setting: under Settings > Shipping and delivery, the Custom order fulfillment section lets you add an outside fulfillment service by entering its email address. Click "Add fulfillment service" to connect a supplier or fulfillment partner that ships orders for you. [L1167, 2026]

#### Free gifts and promotions

- Free-gift promotion that ships from a different source (2020):
  1. Set up the promotion (for example, spend over 1,000 USD and get a free rash guard).
  2. Send each qualifying customer's details to a Google Sheet or directly to the supplier using an automation.
  3. The gift ships separately from the main order.

  [L1277, 2020] **
- A free gift can be sold as a bundled SKU with the supplier. Ask the supplier to ship the product and gift together as one combined item (for example, CJ can create a unique SKU for two products). This avoids a gift app. It works only if there is no sizing conflict for the gift. [L1363, 2023]

#### Custom sizes and size conversion

- For custom-sized products, the store must capture each buyer's individual measurements, such as width and height, on the order so the supplier can produce the item. Product option apps can collect these values. [L0467, 2019] **
- For clothing and shoes, you can convert sizes on the back end. When a customer orders a size, the supplier ships a size that fits better, such as one size up (for example, US 9 ordered, US 9.5 or 10 shipped). The label will not match the order, but the item fits. This can be set up through instructions to a private supplier or inside the DSers or CJ Dropshipping apps. [L1128, 2023]

#### Personalized products

- Sending a customer personalization such as an engraved name to the supplier:
  1. Ask the fulfillment provider which line item properties they need on the order and obtain their exact field names from their API documentation.
  2. Define each property in Shopify so the customer's input is captured on the product page before checkout.
  3. Check that the property appears on the Shopify order.
  4. Have a developer map the property into the supplier's endpoint so the value is sent with the order.

  [L0709, 2017+]

- Many suppliers provide only an API document rather than a ready-made integration. Connecting a custom field to the supplier's order usually needs a developer to read the endpoint and send the parameter correctly. [L0709, 2017+]
- On personalized products, vague or incomplete customization instructions can lead to wrong prints or wording. Send the exact text and every required detail, and confirm them before the order goes into production. [L1108, 2023]
- Customization workflow for personalized products:
  1. Let the customer enter the personalization, such as a first name, on the product page.
  2. Hire a designer, for example on Fiverr, to create the design from the customer's information.
  3. Send the design to the customer for approval before printing.
  4. After approval, send the order to the fulfillment provider to print and ship the product.

  [L1172, 2023+]

#### Suppliers where you arrange shipping

- A supplier that ships with your shipping account requires a prepayment and a shipment created on your account, as set out in the 2023 procedure. For UPS or FedEx, give the supplier your account number. For freight, pay the freight quote and send the BOL to the supplier. [L0835, 2023]
- Add the parcel dimensions and weight request to the standard order message to these suppliers. [L1291, undated]

#### Suppliers that require sales or order checks before shipping

- Fraud screening: wait for the screening decision before acting, and place the order with the supplier only after payment capture (see the checklist above). [L0949, 2021-22]
- Medium or high risk: before capturing payment, send the order to the business owner for direction. [L1119, undated]

#### Slow suppliers

- Some suppliers take about a week to process a purchase order even when you pay quickly. Pay by ACH to speed it up, but the delay can still happen. [L1472, 2022]
- Accept a slower process from a supplier with good products and margins, and keep customers informed. [L1472, 2022]

### Quality Monitoring

- Check supplier fulfillment timing by sampling random orders regularly, because slow fulfillment damages the whole funnel. Sample random orders and check that the supplier ships on time, since delays affect performance and the whole funnel. [L1259, undated; L1260, undated]
- Payment processors may release money late when fulfillment proof is missing, so ship and track quickly. [L1512, 2023]


Part 37 of 51 of "3. Suppliers and Fulfillment: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment.md · Previous: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/36-order-processing-and-automation.md · Next: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/38-inventory-stock-outs-and-backorders.md
