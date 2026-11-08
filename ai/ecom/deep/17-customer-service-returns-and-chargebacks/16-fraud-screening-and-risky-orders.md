<!-- part of ecom/deep/17-customer-service-returns-and-chargebacks.md -->
Part 16 of 23 of "17. Customer Service Returns and Chargebacks: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks.md · Previous: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks/15-reducing-return-and-refund-rates.md · Next: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks/17-responding-to-chargebacks-and-payment-disputes.md

## Fraud screening and risky orders

### Shopify fraud analysis levels

- Shopify Payments ranks the fraud risk of each order through fraud analysis. Medium or high risk orders should be checked before they are shipped. [L0360, 2024]
- Shopify Fraud Analysis scores orders for fraud risk. Use it to review suspicious orders before fulfilling them and to reduce chargebacks. [L1095, 2024]
- Shopify's built-in fraud analysis flags high-risk orders, which usually have a reason to be high risk. Do not process flagged orders without first contacting the customer. [L0934, 2023]
- Shopify's fraud analysis rates orders low, medium, or high. A high rating is almost always fraud. A medium rating needs a check of the reason shown plus verification of the customer. [L0856, 2024]
- Shopify includes risk tools that flag orders likely to be fraud. Use them to reduce stolen-card chargebacks, which are a separate risk from delivery disputes. [L1086, 2019]
- The level scales differ between sources. Both are given below, and the 2019 scale is marked as older. [L0467, 2019; L0856, 2024]

| Source | Levels | Meaning and action | Ids |
|---|---|---|---|
| 2024 | Low, medium, high | High is almost always fraud. Medium needs the shown reason checked and the customer verified. Check medium and high orders before shipping. | [L0856, 2024; L0360, 2024] |
| 2019 | No risk, moderate risk, probably fraudulent | Levels are based on card activity Shopify sees across its network. Probably fraudulent orders are not processed. | [L0467, 2019] |

### Daily checks of new orders

1. Open each new order and read the fraud analysis risk rating that Shopify shows. [L0360, 2024]
2. For a medium or high risk order, contact the customer by phone or email before shipping. [L0360, 2024]
3. For any order you are not comfortable processing, call the phone number the customer entered before shipping. [L0467, 2019]
4. Check the order status and the fraud tool's reason regularly. Do not assume an order went through. [L0807, 2025]

### Verifying flagged orders by phone and email

#### Routine for medium and high risk orders (2024)

1. Check the fraud analysis risk rating that Shopify shows for each new order. [L0360, 2024]
2. For a medium or high risk order, contact the customer by phone or email before shipping. [L0360, 2024]
3. If the customer does not reply, cancel the order and send nothing, since fraudulent orders often use fake phone numbers. [L0360, 2024; L0960, 2019]

#### Routine for flagged orders (2023)

1. Call the customer to find out why the order was flagged. [L0934, 2023]
2. Confirm the identity and details. [L0934, 2023]
3. Process the order only if the risk is resolved. [L0934, 2023]
4. Decline the order if the customer cannot be verified. [L0934, 2023]

#### Chargeback prevention routine

1. Read the risk level that Shopify assigns to the order. [L0467, 2019]
2. For any order you are not comfortable processing, call the phone number the customer entered before shipping. [L0467, 2019]
3. If nobody answers or calls back, treat the order as a major red flag and do not ship it. [L0467, 2019]
4. Optionally add fraud protection, either Shopify's native option or the ClearSale app, so that fraud chargebacks on orders marked safe are covered by the provider. [L0467, 2019]

#### Routine for Shopify-flagged orders

1. Shopify fraud protection flags an order as high risk. [L1111, 2020]
2. Call the phone number the customer provided. [L1111, 2020]
3. If the number is disconnected or no one answers, treat it as a likely fraud case. [L1111, 2020; L0960, 2019]
4. If the customer answers and confirms, ask why the shipping and billing addresses differ. [L1111, 2020]
5. For large orders, request proof of billing address, such as a photo of a billing statement. [L1111, 2020]
- Orders that do not pass Shopify's built-in fraud protection must be checked before they are shipped. Contact the customer and try to verify the order by any means before you decide. [L0961, 2020]
- A phone number that goes unanswered after a suspicious order is a further warning sign. [L0960, 2019]

#### High-fraud orders: request for card and ID (2025)

1. Do not ship the order immediately. [L0472, 2025]
2. Email the customer, thank them, explain that a fraud alert was raised, and ask them to reply with a copy of the card used at checkout and a photo of their driver's license or ID. [L0472, 2025]
3. Ship only once both are received and the name on the card matches. [L0472, 2025]
4. Do not accept an order flagged "high fraud" without verification, even when the shipping address matches the billing address. A mismatched billing address and card holder is a warning sign. [L0472, 2025]

Email template (2025):

```
Hi [Customer name], thank you for your order with [Store name]. Our system has placed a fraud alert on this order. Sometimes these alerts are wrong, for example because an address was entered incorrectly, but before we ship your order, please reply to this email with a copy of the card you used at checkout, showing your name on the card, and a photo of your driver's license or ID. Once we have both, we can confirm that you are the cardholder and process your order. Thank you for your patience.

[Your name]
[Store name]
```

[L0472, 2025]

#### Declined or voided orders (2025)

- A fraud tool can void a transaction without telling the customer, even when the payment processor marks the order as safe. Check the order status and the fraud tool's reason regularly. [L0807, 2025]
- Handle an order flagged as fraud by the tool as follows:
  1. Find the exact reason the fraud tool gives for the decline. [L0807, 2025]
  2. Decide whether the flag looks justified, especially if the payment processor marked the order safe. [L0807, 2025]
  3. If it looks wrong, contact the customer and explain that the order was flagged for a reason, without blaming them. [L0807, 2025]
  4. Ask for verification, such as proof of address or ID, that matches the flag. [L0807, 2025]
  5. Process and ship the order again once verification arrives. [L0807, 2025]

### Suspicious order patterns

- Suspicious orders often come from emails that ask to pay with an unfamiliar method, such as QuickBooks, and to ship through the buyer's own carrier. Treat this as a likely scam, especially when the buyer wants expensive items shipped to a family member or a vacation home. [L0472, 2025]
- Fraudsters often enter fake phone numbers and do not answer calls. [L0960, 2019]

### Bots testing prices

- Bots that add the cheapest product to the cart repeatedly are often Google or Meta testing checkout prices against the product feed. Ignoring them is usually fine. [L0472, 2025]

### High-fraud regions

- For orders from high-fraud regions, such as the UAE, use Shopify's fraud protection tools, require strong payment confirmation, and remain cautious. [L0245, 2020]
- Shipping costs to these regions often equal or exceed the product price, which makes the orders uneconomical. [L0245, 2020]

### Fraud tools and chargeback insurance

- Shopify's native option and the ClearSale app are the two ways to transfer fraud-chargeback risk away from the merchant. [L0467, 2019]
- ClearSale independently verifies orders and covers the chargeback if an order it marked as safe turns out to be fraud. [L0467, 2019]
- ClearSale is a fraud-screening app for e-commerce orders. It reviews transactions to reduce fraudulent orders and chargeback losses. [L0984, 2024]
- ClearSale reimburses the money if an order it approved is later found fraudulent. One host did not use it personally. [L0804, 2023]
- Chargeback insurance services such as ClearSale pay out only when the provider approved the order as safe and it then turned out fraudulent. They do not cover all disputes. [L0969, 2022]
- Chargeback insurance services work with Shopify. The lesson pointed to one such tool without using it personally. [L0934, 2023]
- Rely on Shopify's built-in fraud protection and review any order it flags as high risk, including the reason. Some members also used the third-party chargeback app Signifyd early on, then stopped once they could spot risky orders themselves. [L0470, 2023]
- Some stores rely only on Shopify's built-in notifications and skip third-party fraud apps, while others use paid fraud tools. Choose based on your chargeback risk. [L0968, 2021]
- A chargeback on a stolen credit card is usually lost by the merchant if the order was shipped and no evidence can counter the claim, so the business absorbs the loss. Fraud protection and careful order checks reduce this exposure. [L0467, 2019]

### Cancelling when in doubt

- If you think an order might be fraud, treat it as fraud and cancel it. This rule of thumb prevents losses from suspicious orders. [L0961, 2020]
- If the customer does not reply to verification, cancel the order and send nothing. [L0360, 2024]
- If nobody answers or calls back, do not ship the order. [L0467, 2019]

## Preventing chargebacks and protecting the payment account

### Chargeback causes

- Late fulfillment and customers who believed the product was not authentic or not as described were the main causes in one documented case. Some customers also disputed charges after the brand owner publicly called the seller a scammer. [L0351, 2026]
- A low-quality product can lead to high chargebacks. Enough of them can get the payment processor to shut the account down, even after the store reaches high sales. Check quality before scaling. [L0335, 2023]
- Selling a seasonal product outside its season increases chargebacks, because buyers dispute orders for items they do not need in the current weather. Plan the sales window so the product is sold only while its season matches the buyer's need. [L0347, 2026]
- Dropshipping models with long delivery times and difficult returns carry more chargeback risk, because customers who wait weeks often dispute payments. [L0357, 2019]
- Customers file chargebacks through their bank or card issuer, not through Shopify. The merchant receives a notification and can respond with evidence, but the card network or the bank decides the outcome. [L1086, 2019]
- Chargebacks stay rare when products arrive quickly, the store responds to customers, and the product matches what the customer expected. Most chargeback losses come from delays and unclear product expectations. [L1086, 2019]
- A chargeback can be lost even after delivery if a stolen card was used to order an item shipped to a reachable address. Prevent this with fraud prevention measures on the store, because evidence submitted after the dispute is often not enough. [L1112, 2021]
- Higher order volume brings more returns, complaints and chargebacks, especially on Shopify Payments or Stripe. Products with thin margins become a risk as sales grow. [L0440, 2023+]
- Orders paid with credit or debt carry higher chargeback risk. The store's economic exposure is higher during a downturn, when customers are panicking. [L1440, 2021+]
- In fashion and streetwear, younger UK buyers (about 21 to 30) converted very well, but refunds and chargebacks were much higher with them. Older UK buyers were easier to sell to. [L1440, 2021+]
- A supplier dispute or a quality problem can raise the PayPal dispute rate. Changing suppliers can therefore cause temporary spikes in disputes. [L1440, 2021+]
- Most German buyers pay with PayPal. Poor customer support leads to many chargebacks in Germany. [L1184, 2023+]
- Chargebacks rise during peak and holiday seasons. A single chargeback can threaten a small merchant. [L1231, 2025-26]
- Unsupported health claims may pass for a while, but they eventually cause trouble with platforms. When the promised result does not happen, customers become angry and more likely to return the product or dispute the charge. [L0416, 2021-22]

### Chargeback rate thresholds

The sources give different figures because they describe different contexts. Use the reference that matches your account and payment method.

| Reference point | Value | When it applies | Source |
|---|---|---|---|
| Visa and Mastercard expectation | Below 1%, meaning no more than about 1 chargeback per 100 orders. Above that, card networks issue warnings and the processor may close the account. | General card network rule | [L0468, 2020] |
| US Stripe and PayPal accounts | About 1% dispute rate described as the point of risk for holds or closure | US accounts, account-specific | [L1512, 2023] |
| Hong Kong accounts | Up to 6% described as tolerated (account-specific, verify before relying on it) | Hong Kong accounts only | [L1512, 2023] |
| Reserve case | 3.36% chargeback rate over the last 90 days led Shopify to place 10% of payouts in reserve | Shopify Payments store that had unfulfilled orders charged back | [L1327, 2026] |
| Example ratio | 17.5% for the period without alert prevention | Lesson example, not a benchmark | [L0351, 2026] |
| Occasional chargebacks | Two chargebacks across more than 1,000 orders | Treated as a normal cost of business that sales volume covers | [L0910, 2015] |
| Shopify shutdown trigger | Three chargebacks in one week | Can get a Shopify store shut down | [L1299, 2026] |

- The chargeback rate is disputes divided by orders. Raising average order value spreads the same number of disputes over more revenue, which is the main practical way to bring the rate back below 1%. [L0351, 2026]
- Keep chargeback rates low. A high chargeback ratio is one of the main triggers for a merchant account to hold a reserve. [L0671, 2021]
- Excessive chargebacks can cause a payment provider to stop supporting a store. [L1088, 2020]

### Account holds and closures

- Shopify rarely closes stores. Closures mostly happen for prohibited products or serious chargeback problems. [L0671, 2021]
- Account closures for chargebacks are rare. They usually follow from unanswered customers, missed shipments or repeated fraud. To stay within the limits, respond to customers, ship on time and avoid prohibited products. [L0468, 2020]
- Three chargebacks in one week can get a Shopify store shut down. Shopify may ban the store immediately, without refunding the money it holds. [L1299, 2026]
- A wrong Disputifier setup can let chargebacks through, which can lead to this situation. [L1299, 2026]

**Case: Stripe hold.** A seller's Stripe account was placed on a 30-day hold. The seller contacted customers early to resolve complaints, and the disputes were resolved quickly. About 20 days after the hold, the money was released, the dispute rate fell, and no further holds followed. [L1512, 2023]

**Case: PayPal hold.** A seller with PayPal holds at about 27,000 USD in volume uploaded fulfillment documents when requested, and the funds were released about a week later. The store also found that PayPal made up only about 5% of its payments. The seller paused PayPal for a few days and saw no drop in conversion. Judge holds against how much a payment method actually contributes to sales. [L1512, 2023]

### Prohibited products

- Products on Shopify's prohibited list, such as supplements, can cause the processor to cancel the account and hold funds. Check the prohibited products list on Shopify's legal page before listing a product. [L0468, 2020]
- Avoid unsupported health claims. They create platform trouble and lead to angry customers who dispute charges. [L0416, 2021-22]

### Responsiveness and proactive communication

- Not replying to customer emails is the most common cause of chargebacks. Answer every message quickly, reassure the buyer and show empathy. A customer who receives no answer will often dispute the charge. [L0352, 2022]
- Ignoring customers who ask where their order is leads to chargebacks. Even a reply that only explains a delay keeps the customer from disputing the payment. [L0661, undated]
- Contact the customer as soon as a delay is known. Most chargebacks from legitimate customers can be avoided this way, because the frustration that leads to disputes is prevented. [L0360, 2024]
- Most chargebacks may be prevented with better communication: clear product descriptions, accurate shipping times and a friendly, responsive contact channel. Angry customers who dispute a payment often have unrelated problems, but the store controls what it communicates before the dispute. [L0910, 2015]
- Unanswered customer tickets make customers angrier. This raises the share of refunds. A rising share of refunds leads to a rising share of chargebacks, so the damage grows faster than sales. [L0632, 2021-22]
- Chargebacks and refunds mostly happen when customers are not answered in time. A fast email reply with a discount code for the next order protects against chargebacks, even with long shipping. [L0820, undated]
- Put in the shipping and refund policies that customers must contact the store before filing a chargeback. Keep records of all customer emails. A bank can use a screenshot of the customer's email and an unanswered reply as evidence. [L1381, 2022]

### Terms checkbox and evidence

- Turn on the terms and conditions checkbox in the checkout area, so customers must agree before checkout. Link it to your terms pages using inline HTML. [L1231, 2025-26]
- A recorded terms checkbox and a screenshot of it are evidence to include in a chargeback response. They may not win every dispute. [L1231, 2025-26]
- For orders that were shipped as planned, enter the tracking number as evidence to win the dispute. Keeping proof of shipment is what makes this possible. [L0360, 2024]

### Disputifier, Disputely and RDR settings

**Disputifier**

- Disputifier is an app that blocks chargebacks and helps handle disputes when orders go wrong. Set it up before the store starts scaling. [L1299, 2026]
- A wrong setup can let chargebacks through. [L1299, 2026]

**Disputely**

- Disputely is a chargeback monitoring and dispute tool. It connects to the store, sends chargeback alerts and fights disputes to recover funds. The lesson presents it as one of the cheapest options. Its billing page lists alert types RDR, CDRN and Ethoca, with prices of $16.00 and $25.00 per alert. [L0351, 2026]
- Each chargeback costs about $30 in total. Fighting a chargeback with Disputely costs about $20 to $30. The merchant pays these fees even when the chargeback is won. [L0351, 2026]
- The Disputely dashboard shows the chargeback ratio over time, chargebacks prevented, and the true cost of avoided chargebacks. [L0351, 2026]
- The Disputes view lists each case with a status such as Enriching or Evidence Ready and a countdown to the deadline. The tool submits evidence automatically about 5 days before the deadline, so review cases and add notes or extra evidence before that point. [L0351, 2026]

**RDR setting**

- In Disputely Billing, the RDR (Rapid Dispute Resolution) alert setting must show Not active. When it is Not active, the automatic actions read: No refunds will be issued and no subscriptions will be canceled. [L0351, 2026]
- If RDR stays active, customers can be refunded automatically even after the order has shipped, when the order is seen as not fulfilled fast enough. The merchant then loses the ad spend, the cost of goods and the sale. [L0351, 2026]

**Procedure: stop automatic RDR refunds**

1. Open the Disputely billing page and check the RDR alert status. [L0351, 2026]
2. Write an email to Disputely support asking them to disable RDR on your account. [L0351, 2026]
3. Wait for confirmation, then check that the RDR alert shows Not active and that the automatic refund action reads No refunds will be issued. [L0351, 2026]

### Pre-dispute refunds and early resolution

- Automatic refunds triggered by RDR are a loss, not a protection, so keep RDR at Not active. [L0351, 2026]
- Mitigator sends signals before a chargeback is filed to a Stripe or Shopify Payments account. This allows earlier resolution. Third-party gateways with better merchant protection were reported to cost around 400 to 500 (period and currency not stated). Their lower acceptance rate can reduce conversion, so they fit mainly when holds or disputes already occur. [L1512, 2023]
- Replying quickly with a discount code, before a customer opens a dispute, is the earliest form of resolution available. [L0820, undated]


Part 16 of 23 of "17. Customer Service Returns and Chargebacks: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks.md · Previous: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks/15-reducing-return-and-refund-rates.md · Next: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks/17-responding-to-chargebacks-and-payment-disputes.md
