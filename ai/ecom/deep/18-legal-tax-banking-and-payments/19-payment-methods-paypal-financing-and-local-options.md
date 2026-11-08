<!-- part of ecom/deep/18-legal-tax-banking-and-payments.md -->
Part 19 of 34 of "18. Legal Tax Banking and Payments: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments.md · Previous: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments/18-shopify-markets-currency-and-local-pricing.md · Next: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments/20-klarna-dispute-risk-by-market.md

## Payment Methods, PayPal, Financing and Local Options

### Payment setup and checkout options

- Offer every common payment method, not card payment alone, because more options mean fewer drop-offs at checkout. [L1098, 2019+; L0268, 2020; L0894, 2020-26]
- In Shopify Payments, turn on Apple Pay, Google Pay, PayPal, PayPal Credit and Amazon Pay so shoppers can pay with the method they prefer. [L1098, 2019+]
- Show the full range of accepted methods: credit card, debit card, and express checkout with Shop Pay, Google Pay or PayPal. [L0894, 2020-26]
- Express wallets such as Apple Pay and Google Pay are especially useful on phones, where one tap can complete the order. [L1098, 2019+]
- Amazon Pay and Shopify Payments add options for customers. They do not produce many sales on their own, but they are worth turning on. [L0856, 2024]
- A checkout guarantee listed these accepted payment methods: Visa, Mastercard, Amex, Discover and PayPal. [L0577, 2023]
- "Accept Multiple Payment Options" was named as a resource in a December 2020 coaching call. The lesson gave no setup steps. [L0426, 2020]
- Additional providers such as PayPal are added under Settings > Payments > Payment configuration. [L0351, 2026]
- Fee examples differ by store:
  - In one example, PayPal charged no transaction fee, but PayPal processing fees still applied. [L0351, 2026]
  - In another example store, PayPal was added with a 2% transaction fee, and its account setup had to be completed before PayPal payouts could be received. [L1167, 2026]
- Installment providers can be added at the bottom of the checkout area, with a link to the provider's terms. Showing the option in the cart warns customers in advance that they can pay in installments at checkout. [L1231, 2025-26]
- Confirm that the local payment methods buyers expect are enabled before launching ads in a country. A missing payment option can lose sales even when traffic and ad results are good. [L1185, 2023]
- One store with a single payment processor saw conversion fall to about half of its previous level. Adding PayPal raised conversion again. [L1345, 2021+]
- A missing PayPal option once halved conversion for one seller. [L1260, undated]
- Shopify Payments and Stripe mainly process credit and debit cards. PayPal is a separate system that customers widely recognise and trust. [L1512, 2023]
- PayPal and Shop Pay redirect customers away from the site during checkout, as Bread and Klarna do. Sales then appear as referral traffic to the payment provider instead of being attributed to the traffic source that brought the customer. [L0256, 2021-22]

### Apple Pay

- Apple Pay usually comes with Shopify Payments once payments are set up in the store. [L0352, 2022]
- Shopify Payments or Stripe bring Apple Pay as a checkout option. If it is missing, check the payment provider settings and test a payment to confirm it works. [L0774, 2023]
- Apple Pay can still fail to appear on a TikTok link even when it is enabled, so check the link on a phone after setup. [L0352, 2022]
- Apple Pay must appear on the link itself to work for TikTok buyers. If it does not show, follow these steps:
  1. Open Shopify Settings > Payments.
  2. Switch Apple Pay off and on again.
  3. Return to the TikTok link, search the link again if needed, and place it once more. [L0352, 2022]

### PayPal

#### Role and timing

Advice on PayPal conflicts across sources, so the conditions for each view are given.

- Most buyers pay with credit cards or Apple Pay, so PayPal is optional for a new store. [L0352, 2022]
- Avoid PayPal as a payment or payout method at the foundation stage. The lesson's reasoning is that PayPal approves transactions slowly and can limit the account after returns or chargebacks, while Shopify Payments is the stable in-house option. [L1327, 2026]
- Offer PayPal Express Checkout alongside Shopify Payments from the start, because some shoppers will not buy from a store without PayPal. If the business is registered in one country and sells into another, PayPal may refuse to work, so this option may not be available. [L0677, 2021-22]
- Offer PayPal as an additional payment option, because a share of online buyers prefer it and it adds trust. [L0667, 2025]
- PayPal can raise trust and conversion, but payouts can take weeks, funds can be held, and buyers can request chargebacks more easily than with credit cards. Weigh these risks against the conversion gain before enabling it. [L0352, 2022]
- One seller disabled PayPal because payouts were slow and chargebacks were harder to contest than card chargebacks. A few PayPal sales may be lost when deciding whether to offer it. [L1381, 2022]
- Credit card chargebacks are easier to contest than PayPal disputes. [L0352, 2022]
- Some buyers will only pay through PayPal. PayPal may hold a new seller's funds for several days, and the length of that hold is not known (2025). [L0472, 2025]
- Germany requires a PayPal account for payments, since most German customers pay with PayPal. [L1184, 2023+]

#### Account structure

- PayPal should never be the only merchant account. [L0970, 2023]
- Relying on PayPal alone is risky because accounts can be problematic. PayPal can be used as an additional payment option alongside another processor. [L0967, 2020]
- PayPal should not be the primary payment method. Withdraw PayPal funds to the bank every one to two days so money is not held up. [L1088, 2020]
- A single PayPal business account can handle payments for several Shopify stores, and Stripe allows separate profiles for different stores. [L1382, undated]
- One PayPal account under a company name can handle payments for several Shopify stores. Stripe can use separate profiles for different stores. [L1436, undated]
- A business PayPal account is required because customers commonly pay through PayPal, even if the owner dislikes the platform. [L1415, 2021-22]
- Getting a PayPal account is harder without a registered company. PayPal asks business accounts for business details once sales start. This is a common reason why beginners need a company before they can use PayPal fully. [L1512, 2023]
- Non-US owners of a US company generally struggle to get a US PayPal account, because it requires a US tax ID (EIN) that can take about 2 to 3 months. A PayPal account from the owner's home country is the more practical choice. [L1512, 2023]
- PayPal states on a dedicated Hong Kong page that it supports dropshipping for businesses there. Check this policy directly on PayPal before relying on it, as rules can change. [L1512, 2023]
- PayPal financing should only be used in countries where it is available. For split payments that combine PayPal with other cards, ask support for custom payment links. [L1115, 2024]

#### Setup

- Activating PayPal Express Checkout creates a PayPal account automatically, using the email address from the Shopify signup. PayPal emails instructions for setting up a PayPal business account and claiming funds after the first sale. [L0677, 2021-22]
- Complete PayPal business account setup:
  1. In Settings > Payments, click Complete account setup under PayPal Express Checkout.
  2. Enter the primary business email, country (Australia) and create a password.
  3. Select the business type.
  4. Enter business details: the business type or trust, the primary authorised user and the people associated with the business. Have this information ready; it takes about 5-10 minutes.
  5. Confirm the email address and any identity documents PayPal requests, such as a driver's licence or passport photo.
  6. Log in to the PayPal business back end.
  7. Go to Pay & get paid and link your business bank account (Banks > Link a new bank account). [L0677, 2021-22]
- To withdraw money from PayPal, you need to link a business bank account. A card only needs to be linked if you want PayPal to charge it when paying on other websites, and it cannot receive payouts. [L0677, 2021-22]
- If PayPal is missing in the payment settings, check Settings > Payments, where it should appear as an additional payment option. If it does not, use the live chat on the Shopify help page and ask to speak to a human, who can walk you through adding it. [L1287, 2025]

#### Payout sweeps and balance risk

- Set up a business PayPal account under the LLC or EIN, connect it to the business bank account, then contact PayPal support via live chat and ask them to enable auto sweep. Auto sweep transfers incoming funds to the bank account daily, automatically. [L1415, 2021-22]
- Limiting PayPal balance risk (2023):
  1. When an order ships, mark it as shipped in PayPal and enter the tracking number.
  2. Do this for every order as soon as tracking numbers are available.
  3. Every night, withdraw the PayPal balance to the bank account. [L0970, 2023]

#### Reference table: PayPal share of orders

Share of orders paid via PayPal in two stores of one operator. The advice was that PayPal is good to have but not required.

| Store | Share of transactions via PayPal |
|---|---|
| Store A | 30-40% |
| Store B | 20-30% |

[L1512, 2023]

### Financing: how it pays the merchant

#### Mechanics

- The merchant receives the full payment immediately as a standard credit card transaction. Shopify handles all customer financing, installment scheduling and payment collection. [L0153, undated]
- With third-party financing, the merchant gets paid in full right away, while the customer repays the financing provider. [L0894, 2020-26; L0971, 2024; L1283, 2023]
- Payments through financing options such as PayPal Pay Later or Affirm pay the store in full right away. The customer repays the financing provider. (2024) [L0971, 2024]
- Even when a customer pays in installments, the merchant receives the full order amount immediately, the same as with a card or Apple Pay. The customer repays the financing to Shopify, so the store does not collect or manage the installment payments. [L1296, 2020-26]
- With Shop Pay Installments, the merchant receives the full order amount immediately, just like a normal sale. Repayment schedule and billing are handled between the customer and Shopify, so the merchant does not chase payments or manage loans. [L1295, 2020-26]
- With third-party financing, the financing company approves the customer and pays the store from day one, as with a credit card. If the customer does not pay the financier in time, the financier handles collection, not the store. [L0551, 2020]
- Affirm, Klarna and PayPal Credit are free to set up, with no setup fee. They pay the merchant upfront and take on the customer's debt, so the merchant has no collection work. [L1069, 2019]
- Financing options such as Shop Pay Installments, Afterpay or Klarna let customers spread payments, while the store is paid right away. This helps during inflation or a recession. [L1092, 2022]
- Customers can pay in installments through Shop Pay Installments, Klarna or Affirm. The merchant receives the full amount right away, as if the customer paid in full, while the customer pays the financing company. (2023) [L1283, 2023]

#### When to offer financing

- Financing can be offered on high-ticket products. [L0894, 2020-26; L0247, 2021]
- Financing is not needed for low-priced products such as t-shirts. Offer it only where order values justify it. [L0894, 2020-26]
- Offering installment payments on expensive products is a good idea because it gives customers more options to pay, even though financing is not a large share of revenue. [L1069, 2019]
- Accepting financing through a credit option such as PayPal Credit can be offered on higher-priced items. It does not require a separate medical or insurance billing setup. [L0664, 2020]
- Installment and credit terms can increase sales, but they are most effective when offered to people whose good standing has been vouched for by a trusted person. Open accounts without investigation only for referred customers. [L1261, undated]
- Apply for a financing app as part of store setup so customers have payment-over-time options at checkout. [L0532, undated]
- A buy-now-pay-later provider application, such as Klarna or Affirm, can be slow. Follow up by email or live chat with the business name you applied under, check the application status in your provider control panel, and apply to a second provider as a backup. [L0801, 2021]
- Shop Pay is approved instantly through Shopify Payments, and it can be turned off in Settings > Payments in the Shopify admin if you do not want it. Buy-now-pay-later options such as Klarna, Afterpay or Affirm usually take about two weeks up to one to three months for approval, but can be swapped in later for higher credit limits. [L1281, 2022]
- Payment expectations by price: Klarna or Afterpay works well for products above 60 dollars. [L1260, undated; L1345, 2021+]
- Show a monthly payment message on product pages with Shop Pay enabled. In the demo, orders over $50.00 can be paid in 4 interest-free installments. A sale price of $22.50 with a compare-at price of $25.00 showed this message below the price. Shoppable video that leads to a native checkout therefore also gets these Shop Pay installment options. [L0959, 2025-26]

#### Financing and fee economics

- Most PayPal Credit approvals are around $2,000 or less, so financing decisions should be based on the average order value. [L1069, 2019]
- Affirm and Klarna perform better when the average order value is about $2,000 or more, so test them for expensive products. [L1069, 2019]
- Klarna fee on a 3,000 order at 3.5% plus a 1.00 static fee: 3,000 × 3.5% = 105, plus 1.00 gives 106.00. With a 2,000 supplier total and 30 fraud insurance, switching that order from Shopify Payments (87.30 fee) to Klarna lowers net profit from 882.70 to 864.00. [L1201, 2021-22]

#### Insurance as payment

- Accepting insurance as payment is only worth exploring if many competitors do it, because it requires an approval process. Selling without insurance acceptance can still perform well. [L0664, 2020]
- Insurance payments are optional for some product categories. [L0664, 2020]

#### Promotion and content

- Financing and installments are promoted with a how-to infographic. A prompt for building one follows. Use it only as written.

```
Please create an info graphic showing how to use [payment option, e.g. Shop Pay Installments] when checking out on a Shopify store. Before creating the infographic, check the current steps for using this payment option online, and show each step in order.
```

[L1075, 2025+]

- Checkout steps to show in the infographic:
  1. After adding items to the cart, proceed to checkout.
  2. Select Shop Pay at checkout.
  3. Complete the purchase using the Shop Pay installment plan. [L1075, 2025+]
- A how-to infographic for a payment option such as Shop Pay Installments can be placed on the financing page, embedded in the standard email that answers customer questions about financing, and used in customer communication. Adding the store's logo and colours makes it the store's own asset. [L1075, 2025+]
- Infographics about payment steps are built from steps ChatGPT finds online, so verify each step against the store's actual checkout before publishing the infographic. [L1075, 2025+]

### Shop Pay Installments

#### Basics and requirements

- Shop Pay Installments is a native Shopify payment option that lets shoppers split a purchase into interest-free installments, usually two to four payments. It requires Shopify Payments and does not need a separate app. [L1296, 2020-26]
- Shop Pay Installments is a Shopify payment option that lets customers split a purchase into several payments at checkout. Check its eligibility rules for your country and order value before enabling it. [L1105, 2024]
- Shop Pay Installments lets customers split a checkout total into several payments. It is available in supported regions and can help sell higher-priced products. [L0675, 2025]
- Availability depends on Shopify Payments. The installment limits have been increased over the last few years, so check the current limits in the Shopify settings. [L0856, 2024]
- Shopify Payments must already be active before Shop Pay Installments can be turned on. Without it, the payment method cannot be configured. [L1296, 2020-26]
- Shop Pay Installments requires Shopify Payments as the payment processor. If a store does not use Shopify Payments, the feature cannot be used. The alternative is applying directly with Klarna or Affirm, which offer similar financing. [L1295, 2020-26]
- Shop Pay Installments is powered by Klarna for the financing part, while the integration is built into Shopify. Once enabled, the option appears on the store and in checkout without custom code. [L1295, 2020-26]
- Shop Pay Installments is the recommended installment option instead of Klarna, which received many negative reviews. Choose it for financing options in the store. (2025) [L1287, 2025]
- Use Shop Pay Installments for financing when Shopify Payments is active, instead of adding Klarna. Without Shopify Payments, contact Klarna support directly if an application is denied for a functioning URL. (2024) [L1115, 2024]
- Shop Pay Installments can replace Klarna for buy-now-pay-later. (2025) [L0667, 2025]

#### Limits: sources differ

| Source and date | Stated limit or condition | When it applies |
|---|---|---|
| one source | Up to $3,000 per order | Older guidance from 2021. Verify in current settings. [L0469, 2021] |
| one source, about three years before the lesson | Maximum around $300, only for low-priced items | Launch-era limit. Older guides listing $300 are outdated. [L1295, 2020-26] |
| one source (later lesson) | Cap raised to $30,000 | Current cap as stated in that lesson. [L1295, 2020-26] |
| one source 2025-26 demo | Message shown for orders over $50.00 | Demo threshold for showing the message, not a limit. [L0959, 2025-26] |

- Shop Pay Installments was available only with a store-age and traffic-based invitation for Shopify Premium Installments, which show a monthly payment estimate on product pages. Merchants who want access can ask Shopify live support to raise the issue, and a supervisor said enough complaints could change the policy. (2025) [L1287, 2025]

#### Interaction with Klarna and direct applications

- Applying directly with Klarna can give a higher customer financing limit from the start, compared with Shop Pay Installments, which starts lower and grows with store history. For high average order values such as around $5,000, direct Klarna may be worth considering. [L0429, 2022]
- Shop Pay Installments is the native option when Shopify Payments is active. Direct Klarna applications are the alternative when it is not (see the conflicting guidance above). [L1295, 2020-26; L0429, 2022; L1115, 2024]

#### Setup

- Settings path: Shopify Admin > Settings (bottom-left corner) > Payments > Shopify Payments > Manage > Manage payment methods > Shop Pay Installments: toggle on. [L1296, 2020-26]
- Apple Pay and Google Pay should be enabled alongside Shop Pay Installments, so that shoppers have all the payment options available at checkout. [L1296, 2020-26]
- Setup procedure:
  1. Open the Shopify admin.
  2. Click Settings in the bottom-left corner.
  3. Click Payments.
  4. In the Shopify Payments section at the top, click Manage.
  5. Click Manage payment methods at the top of the page.
  6. Find Shop Pay Installments in the list of enabled payment methods (it was the second entry in the demo).
  7. If its toggle is off, switch it on.
  8. Confirm that Apple Pay and Google Pay are also turned on.
  9. No separate save click is needed, because the page saves automatically.
  10. Go back to a product page to confirm the installment messages appear. [L1296, 2020-26]

### Klarna

- Klarna is a financing option suited to expensive products, with approval depending on the customer's credit. Klarna's average merchant fee was estimated at about 4.5 percent (2021). This is unverified and should be checked on the current pricing page. [L0469, 2021]
- The 3.5% plus 1.00 static fee used in the Klarna example is a different figure from the 4.5% estimate. Use the rate on the current pricing page, and see the fee example under "Financing and fee economics." [L0469, 2021; L1201, 2021-22]
- A Canadian business selling to US customers on Klarna financing should most likely apply with the Klarna US entity, because the customers applying for credit are in the US. This is an informed guess rather than confirmed guidance (2022). [L0429, 2022]
- Klarna's Shopify setup, if the option does not show:
  1. Confirm that your Klarna approval is complete and the Klarna app is linked to your store.
  2. Follow Klarna's Shopify setup documentation step by step.
  3. If it still does not show in the store, contact Klarna support first.
  4. If the problem remains, use Shopify live chat and ask their team to check the Klarna setup on your store. [L0551, 2020]
- Klarna and Afterpay applications were not approved for one seller, so Affirm was recommended. [L0852, 2020]
- Klarna is expected in Germany, so the store should offer it. [L0361, 2024]
- Klarna is not available to a Swiss-based company for German use. A company based in Switzerland could install Swiss providers, but Klarna in Germany was not available from Switzerland. [L0492, 2023+]
- Klarna's dispute risk by market is covered in the next section.

### Afterpay

- Afterpay no longer offers financing for more than 12 months (as of this 2022 call). No other financing option above 12 months was known at that time. [L0429, 2022]
- Adding Afterpay to a Shopify store:
  1. Apply as a merchant on afterpay.com.
  2. Wait about one to two days for approval.
  3. Once approved, add Afterpay as an additional payment provider in your Shopify payment settings. [L0335, 2023]

### Affirm

- Affirm is an alternative to Klarna and Afterpay for buy-now-pay-later options. Klarna and Afterpay applications were not approved for one seller, so Affirm was recommended. [L0852, 2020]
- Affirm, Klarna and PayPal Credit are free to set up, with no setup fee. [L1069, 2019]
- Affirm and Klarna perform better when the average order value is about $2,000 or more. [L1069, 2019]
- PayPal Credit is a steady choice in the US, while Affirm and Klarna are alternatives with deeper Shopify integrations. [L1069, 2019]

### PayPal Credit

- Offer PayPal Credit on big-ticket items, for example above about 1,000 USD: qualifying buyers pay no interest for 6 months, and the merchant receives the money at once. Setup takes about 5 minutes from the PayPal account, and the option should be shown clearly on product pages. [L0356, 2019]
- When PayPal is accepted, PayPal Credit can be offered as a payment option: customers can pay over six months without interest or payments. [L0469, 2021]
- PayPal Credit was described as a US-only financing option, so confirm its availability in your country before offering it at checkout. [L1069, 2019]
- PayPal Credit was believed to work only in the US and UK, so check whether any financing provider works in your country before promising installments. [L0671, 2021]
- Most PayPal Credit approvals are around $2,000 or less, so financing decisions should be based on the average order value. [L1069, 2019]
- In 2019 the stores offered only PayPal Credit as a buy-on-credit option. Klarna was being evaluated but was not yet in use. [L0960, 2019]
- PayPal Credit is a steady choice in the US, and keeping payment volume through PayPal consistent reduces the risk of account issues caused by revenue spikes. [L1069, 2019]

### Shopify Installments (announced, not live)

- Shopify Installments was announced as a built-in payment plan at checkout, where Shopify finances the plan and the merchant gets paid right away. It was not yet live at the time of the call and required a waitlist. [L0852, 2020]
- Shopify Installments, a financing option announced for Shopify Payments, was not yet live at the time of this call. It would let customers finance purchases directly. [L0671, 2021]
- Later units describe Shop Pay Installments as the native option. [L0856, 2024; L1296, 2020-26]


Part 19 of 34 of "18. Legal Tax Banking and Payments: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments.md · Previous: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments/18-shopify-markets-currency-and-local-pricing.md · Next: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments/20-klarna-dispute-risk-by-market.md
