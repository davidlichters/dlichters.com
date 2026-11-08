<!-- part of ecom/deep/18-legal-tax-banking-and-payments.md -->
Part 22 of 34 of "18. Legal Tax Banking and Payments: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments.md · Previous: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments/21-authorization-capture-and-out-of-stock-handling.md · Next: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments/23-resolving-paypal-holds-and-restrictions.md

## Chargebacks, Fraud Prevention and Processor Holds

### Chargeback Rates and Shopify Reserves

- Shopify Payments places a reserve that holds 10% of payouts when the chargeback rate is above 1%. Keeping the rate under 1% avoids this hold. [L0351, 2026]
- Shopify Settings > Payments > Chargeback monitoring shows the current chargeback rate (example: 3.81%) and whether payouts are held in reserve (example: 10% held due to a high number of chargebacks). Check this section to see whether you are over the threshold. [L0351, 2026]
- Two different holds exist and must not be confused: the chargeback-rate reserve (10% of payouts), which is tied to disputes, and the reserve payout for slow fulfillment (25% of payouts), which is tied to delivery speed. [L0351, 2026]
- A reserve payout can hold 25% of the payout balance when Shopify judges that orders are not fulfilled fast enough, for example after about six weeks of slow fulfillment. The hold can last 1, 2, 3 or 4 months depending on the case. [L0351, 2026]
- Shopify Finance > Payouts shows the payout balance and the reserve. The reserve is the portion of the payout balance set aside to cover disputes, refunds and chargeback risk. [L0351, 2026]
- Case: a store selling a niche product had a four-month reserve hold on payouts from roughly $30k in revenue, because orders were not fulfilled quickly enough. The owner expected a payout of about $32k to $33k once the won chargeback disputes were recovered. Lesson: slow fulfillment led directly to a long cash freeze. [L0351, 2026]
- Case: a seller with unfulfilled orders had their Shopify Payments account banned after about two months, and the whole payout was lost. A store with slow fulfillment can lose its payment processing completely, not just a portion of payouts. [L0351, 2026]
- A public accusation by a rights holder that a seller is a fraud can push loyal buyers to dispute charges with their bank. Each dispute adds to the chargeback rate and its fees. [L0351, 2026]
- Threshold figures differ by source. Shopify Payments uses 1% as the reserve trigger [L0351, 2026]. Another source advises keeping the chargeback rate below about 1.5% of transactions, because higher rates lead to fines and damage the payment processor profile. Use 1% as the working target on Shopify Payments, and treat 1.5% as the outer limit cited elsewhere. [L0639, 2023]
- Each chargeback can incur an extra processor fee of roughly $15 to $30, depending on the processor. [L0639, 2023]
- *Older, 2021-22:* A payment processor can hold back money as a reserve, for example an amount such as 60,000 USD, when refunds and chargebacks are high. If the high level continues, the processor can close the account, and you can no longer take sales. [L0632, 2021-22]
- *Older, 2019:* A chargeback happens when a customer tells their bank that an order was fraud and the bank reverses the payment. Chargebacks are the main reason payouts get held. [L1110, 2019]

### Cost of a Dispute

- Shopify charges a fee of $15 per chargeback, and the full order amount is withdrawn from the seller and returned to the customer. Budget for both the fee and the lost revenue when calculating the cost of a dispute. [L0352, 2022]
- The fight window for a chargeback is a few weeks, possibly up to about a month. Respond within this window to contest the dispute. [L0352, 2022]
- Chargeback insurance is only worth paying when a single event could ruin the business financially. An occasional chargeback does not meet that condition. The operator in the lesson chose to keep that money instead of buying the insurance. [L0910, 2015]

### Chargeback Types and Dispute Response

- Chargebacks come in two types: fraud with a stolen card, and customer dissatisfaction caused by a store error. Each needs a different response. [L0963, 2022]
- *Older, 2022:* Avoid chargebacks caused by store errors through good customer support, honest communication and quick responses when problems occur. [L0963, 2022]
- *Older, 2022:* Chargebacks in favor of the customer after proof of fulfillment (tracking, delivery, five-star review, ID, FaceTime verification) are hard to reverse. A chargeback filed for "item not as described" or "fraud" is a different reason code and may require an attorney or small claims action. [L0969, 2022]
- *Older, 2022:* If a customer who received an item files a fraudulent chargeback, consult an attorney. A letter from an attorney or a small claims court can recover the money. [L0969, 2022]
- If a customer files a chargeback after a shipment, first stop the shipment with the carrier and submit evidence to Shopify. Then contact the customer to check whether the chargeback was intentional. Returning stock to the supplier is a cost, but it is better than delivering to a fraudulent customer. [L0856, 2024]

**Chargeback response procedure**

1. Stop the shipment with the shipping company. [L0856, 2024]
2. Submit evidence to Shopify support. [L0856, 2024]
3. Contact the customer to confirm whether the charge was intentional or a misunderstanding. [L0856, 2024]
4. If it was a misunderstanding, the customer can reverse the chargeback with their bank, and the shipment continues. [L0856, 2024]
5. If the customer does not respond, or it was fraud, arrange the return of the stock to the supplier. [L0856, 2024]

### Fraud Analysis and Risk Levels

- Shopify Payments includes built-in fraud analysis at no extra cost. It flags suspicious orders as "high risk", meaning Shopify suspects the order may be fraudulent. The information needed to review the order is on the same order page. [L0960, 2019; L1302, 2020-26]
- *Older, 2020:* Shopify includes built-in fraud detection and risk protection, so a separate fraud protection service is optional and not required at launch. Any order that does not pass Shopify's checks should be verified with the customer before shipping. [L0961, 2020]
- Sources describe the rating differently. One describes three levels: low, medium and high [L0856, 2024]. Another describes the default tool as rating each order as high or low risk, and it is the primary tool for fraud prevention and chargeback control [L0965, 2024]. Read the rating shown on the order and apply the handling below.
- Handling by risk level (2024):
  - **Low:** usually safe. [L0856, 2024]
  - **Medium:** verify with research on the customer's email or phone and the shipping address. [L0856, 2024]
  - **High:** almost always fraud, best canceled without verification. [L0856, 2024]
- *Older, 2022:* High-risk orders are usually fraud, so check them before shipping. [L0963, 2022]
- Sources differ on high-risk orders. The 2024 guidance cancels them without verification [L0856, 2024]. The 2022 advice checks them before shipping [L0963, 2022]. Both agree that an order that cannot be verified should not ship. [L0934, 2023]
- *Older, 2019:* A third-party screening tool... (see the screening section below).
- Medium-risk order check:
  1. Read the fraud analysis reason shown in Shopify. [L0856, 2024]
  2. Contact the customer to verify why the shipping address differs from their location. [L0856, 2024]
  3. Optionally research the customer's email and phone number online to confirm they match. [L0856, 2024]
  4. Cancel the order if verification fails. [L0856, 2024]
- Do not automatically decline orders that fail an AVS (Address Verification System) postal code check. Treat the mismatch as one signal, review the Shopify Payments fraud analysis first, and reserve automatic cancellation for orders rated high risk. [L0856, 2024]
- *Older, 2019:* A billing address that differs from the shipping address is not proof of fraud on its own, since many legitimate buyers bill a business address and ship elsewhere. Treat the mismatch as one signal to combine with others, not as a reason to cancel alone. [L0960, 2019]
- *Older, 2021:* Shopify Payments can hold a first high-value order for up to 120 days when the billing and delivery addresses differ. In one case the hold applied to a 4,700 dollar order. Contact the customer for an alternative payment before fulfilling. [L0962, 2021]
- *Older, 2021:* Handling a payment hold on an order with mismatched addresses:
  1. Contact the customer and confirm the order details. [L0962, 2021]
  2. Ask the customer for an alternative payment method, such as PayPal. [L0962, 2021]
  3. If the customer cannot pay another way, refund and cancel. [L0962, 2021]
  4. Ask the payment provider for the reason and whether there is a threshold for address mismatch holds. [L0962, 2021]
- *Older, 2021:* When PayPal holds a payment, ask PayPal for the reason. Check whether the account is new and whether a tracking number is required. [L0962, 2021]

### Verifying Suspicious Orders

- *Older, 2019:* Fraud check for a suspicious order:
  1. Look for red flags such as fake-looking names, email addresses or phone numbers, an order far above your average order value, or an IP location that does not match the billing or shipping address. [L0960, 2019]
  2. If you are still unsure, call the customer using the phone number on the order. [L0960, 2019]
  3. Ask about the mismatch, for example the shipping state, billing state and IP location, and listen to whether the answers are consistent. [L0960, 2019]
  4. Cancel the order if it is clearly fraudulent or the verification is not convincing. [L0960, 2019]
- *Older, 2021:* If an order triggers a fraud warning, verify it before shipping: find the buyer online, check the phone number and IP address, and call the buyer. Cancel any order that cannot be verified, and never accept wires or payments outside Shopify. [L0834, 2021]
- *Older, 2022:* Verify a suspicious order:
  1. Check the risk ranking that Shopify Payments assigns. [L0963, 2022]
  2. Google the shipping address and check whether the customer's name is linked to it. [L0963, 2022]
  3. Call the number given on the order. Fraudsters usually do not answer, or the number is fake. [L0963, 2022]
- *2023:* Handling a flagged high-risk order:
  1. Call the customer to find out why the order was flagged. [L0934, 2023]
  2. Verify identity and order details. [L0934, 2023]
  3. Process the order only once the risk is resolved. [L0934, 2023]
  4. Decline the order if the customer cannot be verified. [L0934, 2023]
- *Older, 2019:* An order far above your average order value is a fraud warning sign. Example: a $12,000 order when the average sale is about $500. Check such an order before it is fulfilled. [L0960, 2019]
- *Older, 2019:* An order with a fake-looking name and an IP address from a country known as a common origin of online scams should be canceled if the suspicion is clear. Cancel when the red flags are obvious and verification cannot resolve them. [L0960, 2019]

### Scam Patterns and Red Flags

- Check and wire payment requests carry a high fraud risk. Verify payments with the customer before goods are released. [L0984, 2024]
- Wire transfers are legitimate for B2B orders, government entities and institutional purchases such as schools. The scam pattern is an unsolicited buyer who makes an unusual request: shipping to an unexpected country, using a freight forwarder, purchasing on behalf of someone else, or mentioning an atypical payment method upfront. [L0294, 2025+]
- Decline international wire transfers from unverified buyers. They carry over 99% probability of fraud. Genuine customer inquiries focus on stock availability and delivery timeline, not payment methods. If any hesitation arises about a wire request from an unknown buyer, refuse the order. [L0294, 2025+]
- Overpayment scam example: a buyer requests a $20,000 wire transfer but sends $40,000, then claims it was an accident and asks for the overage back. After you refund, the original wire is reversed within 2-3 days because it came from a fraudulent account, leaving your account short by the full amount. Always assume this pattern is fraudulent and refuse such requests. [L0294, 2025+]
- *Older, 2021:* Large overseas orders that offer to pay shipping at double the product price are likely scams. Verify the buyer's identity and organization before accepting such an order. [L1279, 2021]
- *Older, 2020:* Large orders from new buyers, such as a university purchase on 30-day terms, should be verified before they are accepted. A safer approach is to have the supplier take the risk and pay a finder's fee or commission of about 10% to 15%. [L1111, 2020]
- *Older, 2021:* Accepting orders by email from unknown customers who want to avoid Shopify checkout is a scam pattern. Delete such requests. [L0834, 2021]
- *Older, 2021:* Do not ship to addresses in Dubai, and do not allow sales outside your store's sales region. Emails from buyers asking for Dubai delivery are often scams designed to cause losses. [L0962, 2021]
- *Older, 2019:* Red flags for a suspicious order include fake-looking names, email addresses or phone numbers; an order far above your average order value; and an IP location that does not match the billing or shipping address. [L0960, 2019]
- *Older, 2019:* When red flags appear together with a fake-looking name and an IP address from a high-scam country, cancel if verification fails. [L0960, 2019]

### Fraud Screening Tools and Fees

- Shopify Payments fraud protection costs 1.2% of order value, for example $12 on a $1,000 order. It reimburses chargebacks from fraud on covered orders. [L0960, 2019]
- *Older, 2018:* Without paying extra, Shopify flags high-risk orders, which you can review and decide to process or cancel yourself. Paying for fraud protection means fraudulent orders are refunded. [L1085, 2018]
- Fraud insurance services such as Signifyd or ClearSale charge a percentage on each order, for example around 1%. Include this fee in the net profit calculation if you use the service. [L1148, 2021-22]
- *Older, 2022:* Fraud screening apps such as ClearSale typically charge a percentage of the sale. If an approved order turns out to be fraud, the provider refunds the money, which makes it a guarantee against chargebacks. [L1281, 2022]
- *Older, 2021-22:* ClearSale is a fraud-screening tool that reviews each order before you act on it. Early in a business it can be used on every order, and you follow its decision before fulfilling or charging anything. [L0949, 2021-22]
- Policy for stores that already screen every order: run every order through an outside fraud-screening service such as ClearSale before forwarding it to a supplier. Orders are only sent to suppliers after they pass the check. [L1473, 2019]
- *Older, 2019:* Use the built-in fraud protection by default, because keeping payment handling close to the payment source makes it simpler and easier to manage. Use a third-party screening tool only when fraud is a real, recurring pattern in your orders. [L0960, 2019]
- Sources differ on screening every order. Use the built-in tool by default and a third-party tool only when fraud is a recurring pattern [L0960, 2019]. Use screening on every order, as in [L1473, 2019], for stores whose supplier process depends on passing the check. In both cases the choice follows order volume and fraud pattern.
- *Older, 2019:* A third-party fraud screening tool is worth considering when you see a pattern of fake names, fake email addresses, fake phone numbers, or messy shipping and billing details. Compare rates, since the tools charge different percentages, and choose based on your order volume. [L0960, 2019]
- *Older, 2019:* The built-in fraud protection was sufficient for the stores described, so a separate fraud app was not used. [L1002, 2019]
- *Older, 2020:* The Fraud Prevention App is listed as a resource in the December 2020 coaching call for screening orders against fraud. The lesson names it without describing how it is configured. [L0426, 2020]
- *Older, 2020:* Fraud protection tools are the right answer to fears about large fraudulent orders, such as a 1,000-dollar order that turns out to be fraud. With these tools in place, the risk of expensive products is manageable. [L0551, 2020]
- Settings > Payments > Fraud prevention: keep CVV verification on to reduce credit and debit card fraud. The lesson also shows Payment capture method and Payment method customizations as options that stay at default at the foundation stage. [L1327, 2026]

### PayPal Holds, Freezes and Rolling Reserves

- PayPal can hold funds for up to 180 days for compliance checks. Exceeding 180 days requires proof of suspicious activity, which is very difficult to trigger. [L0324, 2025+]
- Case: a seller accumulated $324,000 on a PayPal account held for exactly 180 days due to a compliance review. The full amount was released after the hold period, but without capital during that time, operations were strained. [L0324, 2025+]
- If PayPal freezes funds for compliance and you need working capital for fulfillment, your only options are taking a credit loan, finding a personal loan from a friend, or refunding customers. There is no other mechanism to access frozen funds. [L0324, 2025+]
- PayPal accounts can have $2,000 automatically deducted if the processor detects misinformation or policy violations claimed online. This is a recently introduced rule. [L0324, 2025+]
- PayPal processes 30-35% of typical ecommerce store transactions. Reducing this dependency is strategic due to recent policy tightening. [L0324, 2025+]
- *Older, 2018:* PayPal often freezes an account when sales suddenly grow and asks for business documentation. Expect this as a normal event once volume rises. [L0466, 2018]
- *Older, 2018:* After a PayPal account is unlocked, PayPal may apply a rolling reserve of 10 percent to new orders, held for 90 days before release. Example: on a 1,000 dollar order, 100 dollars are held back for 90 days before that money is released. [L0466, 2018]
- *Older, 2022:* PayPal can hold funds for long periods on new accounts with high sales, and may attach a rolling reserve to established accounts. Keep PayPal as one payment option rather than the only method, because a share of buyers prefer it and it increases total revenue. [L0854, 2022]
- PayPal can hold payments at the start of a store's sales and apply a second hold, called a delivery hold, until the product is delivered. Money is only released after delivery, so plan cash flow with these holds in mind. [L1173, undated]
- PayPal can hold funds from an order for up to 21 days when the account has processed few transactions. Expect delayed payouts from a new PayPal account with little history. [L0835, 2023]
- PayPal can hold funds for up to 21 days... Shopify fraud protection: see above.
- PayPal may lock accounts and hold funds, sometimes for two weeks or more, even after a large sale. Plan for this risk, because it is not a question of whether it happens but when. [L0960, 2019]
- PayPal can hold funds in an account when orders look suspicious. In one case the amount held reached $75,000 for up to a year before release. Enabling auto sweep on a business PayPal account reduces the risk of money getting stuck, though it does not eliminate holds. [L1415, 2021-22]
- PayPal can impose a withdrawal limit. In the lesson, the threshold was 18,000 EUR or USD: more than that could not be withdrawn in one go, and the cap applied per month. To lift it, register a tracking app with PayPal to show the business is legitimate. PayPal may withhold funds from stores without tracking numbers. [L1363, 2023]
- *Older, 2021-22:* The PayPal account should be connected to the primary business email, not a personal one. If details such as name, address or email differ between the store, PayPal and other platforms, PayPal may freeze the account. [L0677, 2021-22]
- Logging into Shopify through a VPN made the platform detect a login from two distant locations in a short time, which triggered a fraud check. The first payout was withheld for three months, which is very damaging to a business with high-ticket orders. Avoid logging into Shopify through a VPN and use a separate browser for admin work instead. [L1441, 2018]
- When a payment processor withholds a payout, you may need to prove the item was delivered to get the funds released. Escalating with support may not speed this up, so keep delivery proof for every order. [L1441, 2018]
- *Older, 2021-22:* Processing payments across borders, such as a US store paying out to a bank account in another country, goes against the terms of payment gateways like PayPal and Shopify Payments. They can withhold your funds for up to 90 to 120 days, which is a serious problem for dropshipping. [L1480, 2021-22]

**Hold durations at a glance**

| Hold | Duration or amount | Trigger | Source |
|---|---|---|---|
| Compliance review, PayPal | Up to 180 days; beyond that requires proof of suspicious activity | Compliance check | [L0324, 2025+] |
| New PayPal account with few transactions | Up to 21 days | Little transaction history | [L0835, 2023] |
| Volume jump, PayPal | 7 or 30 days of payout delay | Sudden volume increase | [L0468, 2020] |
| Rolling reserve after unlock, PayPal | 10% of new orders held 90 days | Account unlocked | [L0466, 2018] |
| Rolling hold, PayPal | 21-day rolling hold | Monthly volume about $30k-40k | [L1512, 2023] |
| Hold after sudden growth, PayPal | Release 10-20 days after accepted proof | Growth without proof of shipment | [L1512, 2023] |
| Suspicious-order hold, PayPal | Up to $75,000 held for up to a year | Orders look suspicious | [L1415, 2021-22] |
| Large-sale hold, PayPal | Two weeks or more | Large sale | [L0960, 2019] |
| First high-value order, Shopify Payments | Up to 120 days | Billing and delivery addresses differ | [L0962, 2021] |
| Cross-border payout, processors | 90 to 120 days | Payout to a bank in another country | [L1480, 2021-22] |
| Stripe hold | About 30 days, extendable by 30 days | Dispute rate keeps rising | [L1512, 2023] |
| Account with high volume, new | 180 days | Sudden high volume after adding PayPal | [L0970, 2023] |

- Sales growth from about 200 to 300 USD per day to 5,000 USD per day is a typical trigger for holds. Processors hold funds to protect themselves from unfulfilled orders, so growth should be matched with proof of delivery. [L1512, 2023]
- A PayPal rolling hold released funds up to about 15,000 USD to the bank, and held the amount above that for a set period. The release limit rose from about 15,000 USD to 20,000 USD, then 30,000 USD, with consistent volume and a good dispute history. [L1512, 2023]
- A seller at about 30,000 to 40,000 USD in monthly PayPal volume had about 40,000 USD held on a 21-day rolling hold. See the Hong Kong case in the processor section. [L1512, 2023]
- Case: a new store with traditional merchant accounts later added PayPal, and within a short time it processed about $50,000 in sales. PayPal flagged the account as high risk and held the balance for 180 days. [L0970, 2023]
- *Older, 2018, PayPal:* PayPal account holds can start at a few thousand dollars, and the volume at which holds appear varies by platform. [L0468, 2020], (see the scaling section for the volume guidance.)


Part 22 of 34 of "18. Legal Tax Banking and Payments: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments.md · Previous: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments/21-authorization-capture-and-out-of-stock-handling.md · Next: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments/23-resolving-paypal-holds-and-restrictions.md
