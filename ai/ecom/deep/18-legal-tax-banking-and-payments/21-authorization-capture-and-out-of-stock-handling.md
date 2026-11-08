<!-- part of ecom/deep/18-legal-tax-banking-and-payments.md -->
Part 21 of 34 of "18. Legal Tax Banking and Payments: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments.md · Previous: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments/20-klarna-dispute-risk-by-market.md · Next: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments/22-chargebacks-fraud-prevention-and-processor-holds.md

## Authorization, Capture and Out-of-Stock Handling

### Authorize-only versus automatic capture

- Authorize-only confirms the order and authorizes the customer's payment method, but charges nothing. You capture the payment manually to complete the charge once the product is confirmed in stock [L0243, 2019]
- After checkout, the money is authorised (reserved) on the customer's card or PayPal balance but not yet captured. Capturing transfers it to you and sends it to your bank account [L0677, 2021-22]
- Manual capture authorizes the card without charging it. A new store that is still learning which supplier stock is reliable should use manual capture. Automatic capture is acceptable once stock availability is consistent [L1111, 2020]

### Setting up manual capture in Shopify

1. Go to Settings > Payments [L0677, 2021-22]
2. Scroll to Payment capture [L0677, 2021-22]
3. Select Manually capture payment for orders [L0677, 2021-22]
4. Keep the box Send a warning email when authorizations are close to expiring checked [L0677, 2021-22]
5. Click Save [L0677, 2021-22]

### Capture only after stock is confirmed

- Use manual capture, especially in high-ticket dropshipping where products may be out of stock [L0677, 2021-22]
- Capture only after you have confirmed stock with the supplier and placed the official order. Refunding a captured payment to the customer can take several days [L0677, 2021-22]
- Capture the customer's payment only after you have confirmed that the item will ship. This avoids charging customers for orders you cannot fulfill [L0949, 2021-22]
- Do not capture payment in Shopify until stock is confirmed and the order has been checked for risk warnings. Medium- and high-risk orders must be escalated to the business owner first [L1119, undated]
- Authorize the customer's card at checkout but charge it only after the supplier confirms stock, so the customer is not billed for an item that cannot be delivered. The VA then captures the charge in Shopify [L1473, 2019]

### Core out-of-stock workflows

**Protecting against out-of-stock orders**

1. Set your payment settings to authorize the customer's card without capturing the charge [L0671, 2021]
2. When an order comes in, confirm with the supplier that the item is in stock [L0671, 2021]
3. Capture the payment in the Shopify admin [L0671, 2021]
4. Ship the order, which is when the customer is charged [L0671, 2021]

**Payment capture when stock is uncertain (Shopify payment settings)**

1. In the Shopify payment settings, set the payment mode to authorize, so the card is checked for the order total without taking the money [L0469, 2021]
2. When the customer orders, the order goes through and you receive the usual notification [L0469, 2021]
3. Contact the supplier and confirm the product is in stock and can ship right away [L0469, 2021]
4. If it is in stock, open the order in the Shopify admin and capture the payment, which sends the money to you [L0469, 2021]
5. If it is not in stock, email the customer and ask whether they want to wait or cancel [L0469, 2021]

### Pre-authorization workflow

**Using pre-authorization instead of charging immediately**

1. When an order is placed, pre-authorize the card so the funds are confirmed as available without charging the customer [L0968, 2021]
2. Check with the supplier that the product is in stock [L0968, 2021]
3. If it is in stock, capture the payment, which charges the customer, and process the order [L0968, 2021]
4. If it is out of stock, cancel the order so the customer is never charged and no refund is needed [L0968, 2021]

**Order confirmation and pre-authorization rule**

- When an order is placed, the customer gets an order confirmation email and the card is only pre-authorised, not charged [L1264, 2021-22]
- The store checks stock and charges the card only when the item is available for immediate shipment, within 5 business days [L1264, 2021-22]
- If the item is on back-order, the pre-authorisation is voided and the customer is contacted by email about alternatives [L1264, 2021-22]

**What to do when stock is not available**

The sources give different actions for an out-of-stock or back-ordered item. Choose by the situation:

| Situation | Action | Source |
|---|---|---|
| Out of stock within the pre-authorization workflow | Cancel the order. The customer is never charged and no refund is needed | [L0968, 2021] |
| Stock not confirmed, item not in stock | Email the customer and ask whether they want to wait or cancel | [L0469, 2021] |
| Item on back-order under the 5-business-day rule | Void the pre-authorisation and email the customer about alternatives | [L1264, 2021-22] |

### Seven-day authorization window

- A payment authorisation is valid for 7 days. If it is not captured within 7 days, it is cancelled automatically and the customer must re-enter their payment details [L0677, 2021-22]
- Some credit cards authorize a payment for only about seven days, so the authorization may not last through a long delay (no date given) [L0359, 2020]

| Situation | Consequence | Source |
|---|---|---|
| Not captured within 7 days | Authorization cancelled automatically; customer must re-enter payment details | [L0677, 2021-22] |
| Some credit cards | Authorize a payment for only about seven days | [L0359, 2020] |

### Backorders

- For a backordered product whose supplier has a reliable ETA of about two to three weeks, confirm the backorder with the customer. Capture the payment right away once they confirm they are willing to wait [L0359, 2020]
- Do not charge the customer's card for a backorder that could last months with no reliable date [L0359, 2020]

| Supplier situation | Payment action | Source |
|---|---|---|
| Reliable ETA of about two to three weeks | Confirm with the customer, then capture once they agree to wait | [L0359, 2020] |
| No reliable date, could last months | Do not charge the card | [L0359, 2020] |
| Item on back-order under the 5-business-day rule | Void the pre-authorisation (see pre-authorization section) | [L1264, 2021-22] |

### Split payment for backordered items

**Splitting a payment through PayPal**

1. Confirm the customer's email address [L0247, 2021]
2. Send a PayPal invoice to the customer's email requesting the partial amount [L0247, 2021]

- A basic 29-per-month Shopify plan did not allow partial payments natively, so the PayPal invoice route was needed on that plan [L0247, 2021]


Part 21 of 34 of "18. Legal Tax Banking and Payments: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments.md · Previous: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments/20-klarna-dispute-risk-by-market.md · Next: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments/22-chargebacks-fraud-prevention-and-processor-holds.md
