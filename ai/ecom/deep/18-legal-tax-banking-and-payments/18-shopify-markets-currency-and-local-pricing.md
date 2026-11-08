<!-- part of ecom/deep/18-legal-tax-banking-and-payments.md -->
Part 18 of 34 of "18. Legal Tax Banking and Payments: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments.md · Previous: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments/17-setting-up-shopify-payments-and-payment-gateways.md · Next: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments/19-payment-methods-paypal-financing-and-local-options.md

### Shopify Markets, Currency and Local Pricing

- Shopify Markets requires Shopify Payments, so a store that only uses Stripe cannot set up markets and must price everything in one currency, such as USD. Check the payment setup before planning multi-market selling. [L0694, 2024]
- Local pricing shows customers prices in their local currency and requires Shopify Payments to be active. Without Shopify Payments, you cannot manage the base currency for a market. [L1167, 2026]
- Set the store currency in Settings to match the target market. Without Shopify Payments (for example, when using Stripe), customers see only the store currency, such as USD. With Shopify Payments, customers can check out in local currencies. Use USD only for USD-targeted markets. [L1260, undated]
- Set the store currency inside Shopify to your local currency, such as pounds for a UK seller. Shopify Payments converts currency automatically for worldwide sales. *Older advice, 2020.* [L0852, 2020]
- If Shopify Payments is not available and another gateway such as Stripe is used, checkout may show only the store currency, for example USD. Shopify Payments lets customers pay in their local currency. [L1345, 2021+]
- Use the local currency of each target market. Use USD only when the store targets USD markets. [L1345, 2021+]

#### Procedure: check markets before sending traffic

1. Go to Settings > Markets.
2. Check which countries are active, for example United States, Canada, Australia, and United Kingdom.
3. Activate every target country that is inactive.
4. Place a test order with a random address in each target country to confirm checkout works.

[L1345, 2021+]

#### Case: inactive markets blocked sales

- Starting point: a newly created store had traffic and a high add-to-cart rate but almost no sales. Cause: only the primary market was active, and other countries were inactive, so buyers from them could not complete checkout. Result: roughly 100 to 200 sales were lost within one hour before the market was activated. [L1345, 2021+]

### Test Mode and Test Checkouts

- If Shopify Payments is already set up, put Shopify Payments into test mode using Shopify's own guide before placing a test order, so the test runs through the payment system without charging a real customer. [L1302, 2020-26]
- Settings > Payments > Shopify Payments > Test mode: switch it on to place a test order and see how payments and orders flow through the store before launch. [L1327, 2026]
- To test payment providers cheaply, create a 95% discount code, then complete a real checkout using PayPal, Shopify Payments and Stripe (or the other providers in use). [L0773, 2023]
- Procedure after changing the store currency or payment setup:
  1. Make a test purchase yourself.
  2. Check that no error message appears at checkout.
  3. Repeat the test after provider updates, because payment providers sometimes need updates that break checkout.

  [L1185, 2023]

### Fixing a Payment Error That Blocks Checkout

- Procedure for a payment error that blocks checkout:
  1. Check the Shopify orders to confirm customers add their details but fail to pay.
  2. Deactivate the payment provider in Shopify.
  3. Reactivate the payment provider.
  4. Create a 95% or 99% discount code and place a test order yourself to confirm checkout works.

  [L1216, undated]
- Uninstalling and reinstalling a broken payment provider app can fix setup errors. [L0773, 2023]


Part 18 of 34 of "18. Legal Tax Banking and Payments: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments.md · Previous: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments/17-setting-up-shopify-payments-and-payment-gateways.md · Next: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments/19-payment-methods-paypal-financing-and-local-options.md
