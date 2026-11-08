<!-- part of ecom/deep/03-suppliers-and-fulfillment.md -->
Part 36 of 51 of "3. Suppliers and Fulfillment: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment.md · Previous: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/35-supplier-location-and-reach.md · Next: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/37-zapier-automation-for-email-orders.md

## Order Processing and Automation

### Why Order Processing Needs a System

- Every order placed on the website must be shipped, which makes order processing a daily recurring task and a prime candidate for automation or delegation. [L0592, 2020-26]
- Automating order placement with suppliers is worthwhile only after the manual process is understood. [L0967, 2020]
- Speed matters more than the time automation saves. The sooner a supplier receives an order, the sooner it ships. Instant submission removes the wait between order receipt and supplier notification, which gets products to customers faster and raises satisfaction. [L0283, 2020-26]
- Track the status of every order at every supplier. Suppliers ship at different speeds, orders can get lost in supplier queues, and placed orders can slip through unnoticed. Proactive monitoring catches these failures and enables customer follow-up and review requests. [L0236, 2018]
- Without a system that records when each order went to the supplier and whether it shipped, customers may contact you one or two weeks later asking where their order is, and you have no proof of what was sent. [L1407, 2023+]
- Payment processors may release money late when fulfillment proof is missing. Ship and track orders quickly, and send tracking information to the payment processor automatically with each fulfillment. [L1512, 2023]
- Write your own process checklists for order handling and similar daily tasks. The right steps differ between businesses, and written steps prevent gaps. Add a new step whenever a problem shows that one is missing. [L0949, 2021-22]

### Daily Order Check in Shopify

#### Checking and processing new orders

1. Open the Orders option in the left main menu of the Shopify Admin. All orders are listed from newest to oldest.
2. To find a specific order, use the search bar at the top of the page. You can search by order number, customer name or ordered product.
3. Always reference the order by its Shopify order number.
4. Check the orders page three times per day: in the morning, around midday, and about one hour before the end of the business day. Constant checking is not needed.
5. Process the morning check first, because many orders arrive overnight.
6. Follow the standard order flow: place the supplier order, capture payment, then fulfill the items.

[L1119, undated]

#### Check schedules in the sources

Sources give different check frequencies. Both are recorded below. The sources do not state which order volume each schedule suits.

| Source | Check schedule | Units |
|---|---|---|
| one source order routine | Three checks: morning, midday, and about one hour before the end of the business day | [L1119, undated] |
| one source fulfillment routine | Once each evening | [L1173, undated] |
| one source status folders | Check the order status folders at the end of each day | [L1000, 2017] |
| Delegated fulfillment routine | Check at the end of each day whether orders have been fulfilled | [L1360, undated] |

- Check the status folders at the end of each day to find stalled orders, such as one a supplier never confirmed. This catches problems before a customer calls to ask where the order is. [L1000, 2017]
- Check supplier fulfillment timing by sampling random orders regularly, since slow fulfillment damages the whole funnel. Sampling random orders and checking that the supplier ships on time, because delays affect performance and the whole funnel. [L1259, undated; L1260, undated]

### Manual Purchase Orders First

#### Process orders manually before you automate

- Process orders manually before automating. Only switch to automated forwarding after you have handled several orders by hand and understand each step. [L0804, 2023]
- For a new store, beginners should forward orders manually rather than rely on automation. Before forwarding, confirm the product is in stock, and check that the order is not high risk. Send the order during the supplier's business hours. Orders that arrive late at night can be sent when the supplier opens. [L0807, 2025]
- Default to one email per order. Send each order to a supplier in its own separate email rather than batching several orders together, so that any problem with one order stays isolated and easy to track. [L1279, 2021] **
- Batching is the exception. If a supplier wants a daily email with a list of orders, send that list every day instead. [L0933, 2020-26]
- Some suppliers take about a week to process a purchase order, even when you pay quickly. Paying immediately by ACH can help, but slow processing can still happen beyond your control. [L1472, 2022]
- Suppliers with slow processing can still be worth working with if they offer good products and good margins. Accept the slower process, but keep customers informed. [L1472, 2022]

#### Standard manual order process (the most common method)

Sending an order to a supplier by email:

1. Subject line: store name, "Purchase Order" or PO, and the Shopify order number.
2. Body: item name, quantity (usually one), SKU number if one exists.
3. Add a "ship to" line with the customer's address.
4. Ask the supplier to charge the card on file and to send tracking information when shipped.

Some suppliers instead give a dealer-website login to place orders. The method is confirmed during approval. [L0964, 2023]

- Automating supplier order emails uses the automation covered in module seven of the course. For suppliers that require a dealer website login, a team member places the order manually. [L0964, 2023]
- Read the supplier agreement, which states how orders are submitted. [L0966, 2025]
- If orders go by email, send them to the order address listed in the agreement. [L0966, 2025]
- Use a subject line made of your store domain plus the Shopify order number. [L0966, 2025]
- In the body, state the quantity and SKU, the product name, and the customer's full shipping address. [L0966, 2025]
- If the supplier has a dealer portal, log in with the username and password issued after authorization and place the order there. [L0966, 2025]
- If the agreement does not explain the process, ask your supplier rep how to submit orders. [L0966, 2025]
- Typical order fulfillment with a drop-ship supplier: (1) the customer places an order in your store; (2) you send the supplier a purchase order by email listing the SKU, quantity and customer shipping address; (3) the supplier charges you and ships the item; (4) the supplier sends tracking information to you. ** [L0962, 2021]
- Manual fulfillment for early orders: (1) receive the order notification; (2) go to the warehouse where the stock is kept; (3) pick and pack the item; (4) ship it to the customer. This method is time-consuming, so it becomes a bottleneck as volume grows. [L1439, 2024+]
- Pack and ship the first orders personally to learn the correct packaging and shipping process before delegating. When volume grows, hire someone who is shown the process and works at the warehouse on a fixed schedule, for example three times a week. [L1431, 2020+]

#### Email templates for purchase orders

Standard supplier order email (store-wide layout with dynamic fields):

```
Subject: PO [purchase order number]

Hi [supplier contact name],

We would like to place an order for item [supplier item number or SKU], quantity [quantity].

Ship to customer, using the details below:
Name: [customer full name]
Address: [customer full shipping address]
Phone: [customer phone number]

Please charge our card on file and send the tracking information as soon as it is available.

Thank you,
[your name]
[your store name]
```

[L0360, 2024] *(2024.)*

```
Subject: Purchase Order [PO number] - [Store name]

Hi [Supplier contact name],

Please process the order below and charge the card we have on file.

Items:
[Quantity] x [Supplier SKU] - [Product name, size, color]

Ship to:
[Customer full name]
[Street address]
[City, State, ZIP]
[Customer phone]

Thank you,
[Your name]
[Store name] | [Contact email]
```

[L0804, 2023] *(2023.)*

```
Subject: [your store domain] order [Shopify order number]

Body:
This order is for [quantity] unit(s) of SKU [SKU number], product name: [product name].
Ship to:
[customer full name]
[customer street address]
[customer city, state, ZIP code]
[customer phone number, if the supplier requires it]
```

[L0966, 2025] *(2025.)*

```
Subject: [Store name] PO [Shopify order number]

Hello,

Please process the order below and send the tracking number once it has shipped.

Quantity: [quantity]
SKU or item number: [SKU]
Item: [product name]
Ship to: [customer full name], [street address], [city, state or province, postal code], [country], [phone number]

Thank you,
[Your name]
[Store name]
```

[L1279, 2021] **

Place a supplier order by email using this layout and replace every bracketed field with real data. The sender is the company's business address. The recipient is the supplier's address from the supplier details spreadsheet. The subject combines the company name, the word "order", and the Shopify order number. Open with a polite greeting such as Good Morning or Good Afternoon, then ask for the items: one line per product, showing quantity, product name and supplier SKU, with a line repeated for each product in the order. Under a "please ship to" heading, paste the customer's shipping details exactly as they appear on the Shopify order page. Close by asking the supplier to confirm stock and send an invoice for payment, end with a courteous sign-off, and add the full signature block.

[L1119, undated]

- Every order email must use the same format and be sent from the company's business email address. Keep contact names, email addresses, phone numbers and websites for each supplier in a separate supplier details spreadsheet. [L1119, undated]

```
Order {order number}: please ship this order directly to our customer {customer name and shipping address} and charge the card we have on file for this order. Reply to confirm you have received and processed the order, and send the tracking number as soon as it ships.
```

[L1407, 2023+]

```
How do you prefer us to process orders? [If they want a daily email: That sounds great, we will send you a list of orders every day.] [If they have a dealer portal: That sounds great, we will place our orders through your dealer portal.]
```

[L0933, 2020-26]

#### Pre-written forwarding scripts

- Each supplier may require a different ordering method. Keep a pre-written order-forwarding script for each supplier in a shared sheet, so the assistant can forward orders quickly without searching for the procedure. [L1000, 2017]
- Example: a main store used around 35 different suppliers, each with its own ordering procedure. Keeping all of their scripts in one sheet made it possible to place orders quickly. [L1000, 2017]

### Supplier Ordering Channel and Agreement

- The authorized-retailer agreement from a supplier should state how orders are placed: through a dealer portal or by email purchase order. If the agreement does not say, ask the supplier how to submit orders after the first sale. [L0360, 2024]
- Let the supplier choose the order process, then confirm it. Keeping the process as simple as possible removes friction, which reduces the chance that the supplier hesitates to approve your account. [L0933, 2020-26]
- Ask the supplier how they prefer you to process orders. [L0933, 2020-26]
- If they want a daily email with the list of orders, send that list every day. [L0933, 2020-26]
- If they provide a dealer portal login, place your orders on their website through that portal. [L0933, 2020-26]
- Confirm to the supplier that you will work the way they prefer. [L0933, 2020-26]
- Route new orders based on how each supplier accepts them. Suppliers that take uniform emailed purchase orders can be handled by an order-sending tool. Suppliers with members portals can be assigned to yourself, a team member, or a Trello board. [L0466, 2018]
- An order automation can send each new order to Trello as a card, so that you or a team member can make sure it is processed. [L0466, 2018] *(2018.)*
- Some suppliers receive orders by email (for example, a Gmail address) rather than through a portal. This is normal for older, owner-run brands and is not by itself a red flag. [L0805, 2024]
- Supplier orders can be placed by email, through the supplier's own ordering website, or by phone call, depending on what each supplier offers. Whichever channel is used, the supplier confirms the order, then invoices you, and you pay the invoice before the goods ship. [L1480, 2021-22] **
- Each supplier's channel can be summarized as follows:

| Channel | When it applies | Units |
|---|---|---|
| Email purchase order | Supplier accepts email orders; automation via Zapier is possible only for these | [L0283, 2020-26; L0964, 2023] |
| Supplier's online ordering form | Stated as an alternative to email in the supplier details process | [L1119, undated] |
| Dealer portal or dealer website login | Supplier issues login after authorization; order placed manually | [L0964, 2023; L0966, 2025] |
| Phone call | Offered by some suppliers | [L1480, 2021-22] |

### Supplier Payment and Shopify Payment Capture

#### Who pays the supplier and when

Sources describe several models. Each applies to a different supplier arrangement.

| Model | How it works | Units |
|---|---|---|
| Supplier charges card on file | You send a purchase order; the supplier charges your card on file and ships | [L0804, 2023; L0964, 2023] |
| Supplier invoices, you pay before shipping | Supplier confirms the order, invoices you, and you pay before the goods ship *(2021-2022)* | [L1480, 2021-22] |
| Prepay the supplier | Customer pays your store; you verify, ask the supplier to check availability, the supplier confirms, then you prepay *(2023)* | [L0835, 2023] |
| Ship first, charge or bill later | Suppliers ship automatically and charge the company card or bill it later; others require payment confirmed before they ship | [L1119, undated] |

- After the order email is sent, suppliers usually confirm stock and send an invoice. Know which group each supplier belongs to before you start the process. [L1119, undated]
- Each supplier may require payment to be confirmed before it ships. Check this before you capture payment. [L1119, undated]

#### Prepayment procedure for supplier-invoiced orders (2023)

1. Customer pays on your store.
2. Verify the payment and the shipping details.
3. Email the purchase order to the supplier and ask them to check availability.
4. The supplier confirms availability.
5. Prepay the supplier for the product.
6. Create the shipment on your own shipping account. For UPS or FedEx, give the supplier your account number so they create the shipment under it. For freight, get quotes from a freight service, pay it, and send the BOL to the supplier.

[L0835, 2023]

#### When to capture payment

Capture timing differs by source, and both are recorded.

- Pre-authorize, verify stock, then capture. Shopify authorizes the customer's card at checkout without capturing. You check whether the item is in stock with the supplier. If it is in stock, you capture the payment, which charges the card and lets you process the order. [L0358, 2020] **
- Pre-authorize, verify stock, then capture, shipping after capture. The same steps are repeated: authorize without capturing, confirm stock with the supplier, capture the payment in the Shopify admin, then ship. [L0671, 2021] **
- Note the conflict on when the customer is charged. [L0358, 2020] says capture is the charge. [L0671, 2021] says the customer is charged when the order ships (step 4), after capture. Test your own setup so you know which event charges the card.
- Choose by stockout frequency. If stockouts are common with your suppliers, pre-authorize, verify stock, then capture. If stock is reliable, capture automatically. [L1090, 2021] **
- Stores can be set not to charge customers until the owner manually selects that option, which ensures all ordered products are in stock before payment is taken. [L0856, 2024]
- Customer payments through Shopify Payments reach the bank account in about two business days (48 hours). For early orders, you can place the supplier order once those funds arrive. Only the first order or two need this workaround. [L0970, 2023] *(2023.)*
- Set the Payment Status to "paid" in the Shopify trigger settings. This prevents orders from being sent to suppliers before payment is confirmed. Only send orders to suppliers once they are confirmed as paid. [L0283, 2020-26]
- Do not process and submit orders to suppliers before payment status is confirmed as "paid". Setting this to "pending" or "any" sends unpaid orders to suppliers, which wastes their resources and creates fulfillment problems. [L0283, 2020-26]

#### Shopify capture and fulfillment procedure

1. Once stock is verified, either through your own records or the supplier, press the blue "Capture Payment" button on the order page.
2. A pop-up opens. Press the blue button a second time to approve it. This transfers the customer's money to the company bank account or PayPal account.
3. Before capturing, check whether the order carries a risk warning. If the risk level is medium or high, send the order to the business owner for direction before taking payment.
4. When the supplier has acknowledged the order, or after you have paid the supplier in cases where payment was required, press the blue "Fulfil Items" button on the order page.
5. In the pop-up, verify that the items being shipped are selected and that the "send a confirmation to the customer" box is ticked.
6. Press the green "Fulfil Items" button.
7. Shopify emails the customer to say the order is being fulfilled and then archives the order. You need to do nothing further.

[L1119, undated]

- Shopify order page buttons: "Capture Payment" is a blue button, and its confirmation popup has a second blue button. "Fulfil Items" is a blue button on the order page. Its popup has a "send a confirmation to the customer" tick box and a green "Fulfil Items" button. [L1119, undated]
- Sequence for fraud-screened stores: wait for the fraud-screening tool's decision and act only on its result; confirm with the manufacturer that the product is in stock, using a stock spreadsheet or a phone call; once you know the order will ship, capture the customer's payment; send the order to the supplier by copying only the needed details from the Shopify order notification email, deleting the parts you do not need, and including the order number. ** [L0949, 2021-22]


Part 36 of 51 of "3. Suppliers and Fulfillment: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment.md · Previous: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/35-supplier-location-and-reach.md · Next: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/37-zapier-automation-for-email-orders.md
