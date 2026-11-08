<!-- part of ecom/deep/18-legal-tax-banking-and-payments.md -->
Part 20 of 34 of "18. Legal Tax Banking and Payments: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments.md · Previous: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments/19-payment-methods-paypal-financing-and-local-options.md · Next: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments/21-authorization-capture-and-out-of-stock-handling.md

### Klarna dispute risk by market

- Klarna disputes can lead to full refunds even when tracking shows delivery, especially if delivery takes around 10 days. Klarna can also hold merchant funds, which creates cash flow problems. [L0660, 2019+]
- Klarna is the most used payment method in Sweden, but it is risky for beginners. Only use Klarna in Sweden if you can ship within about 4 to 5 days, and ideally one day. [L0660, 2019+]
- A beginner should avoid Sweden and start in the Netherlands or Germany instead. The risk of Klarna disputes is high in Sweden. [L0660, 2019+]
- The UK was described as the worst market for Klarna disputes, so Klarna should be avoided there. Stores that do not offer Klarna at all avoid this risk. [L0660, 2019+]
- Offering only credit card and PayPal at checkout lets a store avoid Klarna exposure. Some stores have operated this way since 2017 without issues. [L0660, 2019+]

| Market | Klarna guidance | Source |
|---|---|---|
| Sweden | Use only with shipping in about 4-5 days, ideally 1 day; beginners avoid | [L0660, 2019+] |
| UK | Worst market for Klarna disputes; avoid | [L0660, 2019+] |
| Netherlands or Germany | Recommended starting markets for beginners | [L0660, 2019+] |

### Cryptocurrency

- Use Coinbase Commerce to accept cryptocurrency payments such as Bitcoin. About 4.5% of customers typically adopt this option, and chargebacks are impossible via crypto, which eliminates chargeback disputes. [L0324, 2025+]
- Cryptocurrency payments remove chargeback risk entirely. Customers can pay in crypto, and you can receive in crypto or convert to fiat (dollars, pounds). This is best for high-value orders or dispute-prone products. [L0324, 2025+]
- Accepting Bitcoin is possible through a wallet, but it is unlikely to add meaningful sales. Bitcoin buyers often hold it rather than spend it. [L0247, 2021]
- Cryptocurrency was not a built-in checkout option on these stores in 2019. It could be enabled manually if needed. Only a couple of crypto transactions occurred during a peak period, so it is not recommended as a payment method. [L0960, 2019]
- The 4.5% adoption figure and the low-volume findings (2019 and 2021) conflict. Apply the Coinbase Commerce route for high-value or dispute-prone sales, and expect low volume for general stores. [L0324, 2025+; L0960, 2019; L0247, 2021]

### Local payment methods by market

#### General principles

- Know the main payment methods of each target market. For the top markets, offer PayPal and credit cards through Shopify Payments or Stripe, and add Klarna or Afterpay when the product price is more than $60. [L1345, 2021+; L1260, undated]
- Install payment providers that make sense in each specific target country. Local payment options build trust and conversion. [L1108, 2023]
- Buyers expect the payment methods they know. Payment methods matter for expanding to a new country. [L0361, 2024]
- Before expanding into a European country, check which local payment methods buyers use, because conversion depends on them. In Germany, Klarna and PayPal are widely used, and in the Netherlands, Bancontact is a major method alongside credit cards. [L0645, 2023]
- Targeting European countries can produce some sales in English but usually lower conversion, and Facebook's cheaper CPMs there attract low-intent traffic. Check the local payment methods first. [L0645, 2023]
- Target countries where card payments through Stripe or PayPal are available, since the lack of these options in some markets limits sales. [L1212, undated]
- Offer a local payment provider in the target market. Buyers trust a store more when they can pay with a method they know, and this was the most important local advantage in the example. [L0549, undated]
- Trust can be built when the business is visibly local. A registered local company, local payment methods and visible local products in the content all reduce buying hesitation. [L0492, 2023+]

#### Switzerland

- Install a local payment provider that Swiss customers recognise, such as one that accepts QR-code payments and is registered only in Switzerland. This builds trust and raised sales. [L0492, 2023+]
- Local payment providers require a company registered in the country with a local bank account. [L0492, 2023+]
- Adding TWINT in Switzerland raised the conversion rate of ads targeting Switzerland. It builds trust because buyers recognise the provider and use it daily, and payment is quick by scanning a QR code. [L0502, 2020+]
- Show the local payment method logo (TWINT in Switzerland) on the store to build trust with local customers who already use it daily. [L0642, undated]
- Twint can only be offered on a store run by a Swiss company, since it is a payment provider used only in Switzerland. A Swiss merchant account is required before the logo can be shown. [L1439, 2024+]
- Swiss customers who pay in euros instead of Swiss francs face a conversion fee of about 3 percent. This matters when pricing a Swiss-facing store. [L0660, 2019+]

#### Germany

- Offer PayPal in Germany because buyers value its security, especially if a supplier problem leads to a refund request. [L0519, 2020+]
- Germany requires a PayPal account for payments, since most German customers pay with PayPal. [L1184, 2023+]
- Klarna is expected in Germany, so the store should offer it. [L0361, 2024]
- Germany and the Netherlands are the recommended starting markets for beginners. [L0660, 2019+]

#### Netherlands

- Bancontact is a major method in the Netherlands alongside credit cards. [L0645, 2023]

#### Spain

- In Spain, PayPal, Klarna and Scalapay are used alongside standard Shopify Stripe payments. [L0361, 2024]

#### Australia

- In Australia, a credit card provider such as Stripe was necessary, since about 90 percent of sales came through Stripe in this experience. [L0519, 2020+]
- Beam and We Pay were named as popular payment providers in Australia. Check which local providers your store can integrate with before relying on them. [L0549, undated]

#### Gulf Cooperation Council (GCC)

- Cash on delivery (COD) is typically the only payment option in GCC countries, while card payments via Stripe or PayPal are the other option. Running ads in GCC countries may be weak without COD, even though CPM can be low, around 1 USD per 1,000 impressions. [L1212, undated]

#### Hong Kong

- PayPal states on a dedicated Hong Kong page that it supports dropshipping for businesses there. Check this policy directly on PayPal before relying on it. [L1512, 2023]

#### Multi-country European providers

- Mollie is a provider that bundles many European payment options in one service. It suits sellers who scale or run ads in several European countries. [L1512, 2023]

### Phone, bank transfer and card data

- Never record a customer's credit card details in any form unless the business owner gives express permission. If card details must be written down, destroy them immediately after the order is completed. [L0404, undated]
- A PayPal payment cannot be processed on a customer's behalf over the phone, so phone orders must be paid by credit card or bank deposit. [L0404, undated]
- For bank transfer payments, the customer must send payment confirmation to the business email address before the order is shipped. [L0404, undated]
- For tax-exempt organisation buyers, one option is a Shopify draft order for the order. Another option is sending an invoice payable through PayPal. [L0551, 2020]

### B2B payment terms

#### Terms and third-party financing

- Do not offer net 30 payment terms to customers, because you carry the collection risk and many businesses struggle to collect. Instead, offer a third-party financing option, such as Klarna. [L0551, 2020]
- With third-party financing, the financing company approves the customer and pays the store from day one, as with a credit card. If the customer does not pay the financier in time, the financier handles collection, not the store. [L0551, 2020]

#### Wires, deposits and checks

- A B2B buyer placed an order of about 66,000 USD and asked to pay by check after delivery. The seller refused this and accepted a deposit of 30 percent, roughly 20,000 USD plus, wired before shipping. The remaining balance was wired on delivery the same day, and the seller never accepts payment by check after receipt. [L1277, 2020]


Part 20 of 34 of "18. Legal Tax Banking and Payments: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments.md · Previous: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments/19-payment-methods-paypal-financing-and-local-options.md · Next: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments/21-authorization-capture-and-out-of-stock-handling.md
