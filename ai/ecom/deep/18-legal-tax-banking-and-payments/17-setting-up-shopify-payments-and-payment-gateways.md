<!-- part of ecom/deep/18-legal-tax-banking-and-payments.md -->
Part 17 of 34 of "18. Legal Tax Banking and Payments: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments.md · Previous: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments/16-funding-cash-flow-and-financing-the-business.md · Next: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments/18-shopify-markets-currency-and-local-pricing.md

## Setting Up Shopify Payments and Payment Gateways

### Shopify Payments: What It Is and What It Covers

- Shopify Payments accepts credit cards, debit cards, Apple Pay and Google Pay. [L0096, undated]
- It runs on Stripe, a separate company that handles card processing and can request its own checks. [L0677, 2021-22; L0272, 2022]
- It accepts American Express, Discover and Mastercard, plus Apple Pay and Google Pay, without extra apps. [L0470, 2023]
- Shop Pay Installments is built in and is the equivalent of Klarna. [L0272, 2022]
- The Shopify admin includes Shop Pay as a checkout option, payout and cashflow tracking, and chargeback management. [L1167, 2026]
- It automatically shows options such as Apple Pay, Shop Pay and Mastercard at checkout. [L1377, 2022+]
- Customer payments are deposited into the linked bank account. Customers can also use other payment methods alongside it. [L0934, 2023]
- It is managed under Payments in the Shopify admin. Analytics and finance reports are kept in the same Shopify business admin. [L0934, 2023]
- Shopify Payments is the preferred processor. Linking a third-party merchant account is possible but not recommended. [L0934, 2023; L1111, 2020]
- Use Shopify Payments whenever possible. Third-party processors add Shopify transaction fees on top of their own fees. [L0470, 2023; L0805, 2024]
- Setup needs only bank account details and takes about five minutes. [L1111, 2020]
- Setup is configured under the Shopify settings area and takes only a few minutes. [L0836, 2024]
- The bank details needed are the bank account number, routing number and checking account number. After setup, the processor accepts credit cards from customers worldwide and deposits the sales into the bank account. [L0759, 2020-26]

### Country Availability and Eligibility

- Shopify Payments is available in specific countries only. [L0272, 2022]
- *Older list, 2019:* Merchants in Australia, Canada, Denmark, Germany, Hong Kong, Ireland, Japan, the Netherlands, New Zealand, Singapore, Spain, the UK and the US could use Shopify Payments. Businesses elsewhere were told to use Stripe. [L0357, 2019]
- *Listed in another lesson:* Shopify Payments is available in the USA, Canada, Australia, Germany and the UK. In countries where it is not available, Shopify offers other payment options. [L0759, 2020-26]
- Shopify Payments works in dozens of countries, so banking limitations do not automatically block the store. Check the country's availability before choosing another solution. [L0967, 2020]
- The Netherlands is an available country. A Dutch company with a Dutch bank account can use Shopify Payments to accept payments from customers anywhere in the world. [L1088, 2020]
- Availability may depend on the account's country of residence. If it is not available, PayPal can be added as a second payment option. [L0855, 2023]
- Shopify Payments is not always available to every seller, so check access before planning around it. [L1158, 2023]
- Where Shopify Payments is not available, such as Mexico at the time of the lesson, use a payment gateway from the country's provider list. Switch to Shopify Payments once it is available there. [L0469, 2021]
- If Shopify Payments is not available and 2Checkout cannot be used, connect the main local payment processor to Shopify, because Shopify integrates with almost any processor. Check the local processor's Shopify integration before signing up. [L0359, 2020]
- Shopify integrates with over 100 payment processors. [L1088, 2020]
- Stripe acceptance can differ by country. Stripe India showed lower acceptance and some banks blocked transactions, which led one seller to move to a company abroad. [L1512, 2023]
- Before launching in a new country, enter the shipping details for that country in checkout and confirm that the payment providers work there. A checkout that fails for one target country loses sales before any ads are paid for. [L0661, undated]

### Choosing a Payment Option

- A payment gateway (payment processor) accepts card payments on an online store and forwards the funds to the seller's bank account. Reliable access to one is the basic requirement for receiving store revenue. [L1512, 2023]
- Procedure to choose payment options for a store:
  1. Check which payment options are available in your country at shopify.com/payment-gateways.
  2. If Shopify Payments is available, start with it.
  3. If not, check Stripe as the alternative.
  4. Add PayPal (it needs a business account once business transactions begin, with company details and fulfillment method).
  5. If no suitable gateway is available at home, form a company in a country that offers them, such as the US or Hong Kong.

  [L1512, 2023]
- For beginners, use Shopify Payments if it is available, because it avoids most chargebacks and saves 1 to 2 percent in fees. [L1158, 2023]
- With Shopify Payments in a country where it is available, a store can often test products and scale to about 1,000 to 15,000 USD in monthly sales without a large company setup. Starting out, the US owner's social security number is usually enough to open it. [L1512, 2023]
- Enable Shopify Payments where it is available. Stripe and PayPal are the other common and trusted processors, and Shopify displays the methods supported by the processor you connect. [L1377, 2022+]
- Alternatives when Shopify Payments is unavailable include Skrill, which is common in some Asian and African countries, plus Amazon Pay and Airwallex. Amazon Pay and Airwallex require creating an account on their websites and connecting their API to Shopify. [L1512, 2023]

### Activating Shopify Payments

- Under Settings > Payments, click the button labeled Activate Shopify Payments. [L0096, undated; L1306, 2020-26]
- Procedure to prepare the store before activation:
  1. Open Settings (gear icon, bottom-left corner).
  2. Open Store details and review the fields (store name, store email, store phone) so you know where to edit them later, without changing email or phone yet.
  3. Go to Settings > Payments and click Activate Shopify Payments.
  4. Choose Shopify Balance as the deposit destination for the initial payouts.
  5. Leave all other settings at their defaults.

  [L0096, undated]
- Procedure for activating Shopify Payments through Shopify Balance:
  1. Open Settings with the gear icon at the bottom left.
  2. Click Payments.
  3. Click Activate Shopify Payments.
  4. Answer the setup questions about where the money should go.
  5. Select a Shopify Balance account as the destination so payments land there instantly.
  6. Withdraw funds from the Shopify Balance account to your bank account.

  [L1306, 2020-26]
- Shopify Payments is set up inside Shopify so customers can pay by credit card, debit card or Apple Pay, and the money is paid out directly to the seller's bank account. [L1304, 2020-26]
- Of all the settings covered, activating Shopify Payments is the one that must be completed before the store is ready to take orders. [L1306, 2020-26]
- The billing address in Store details must match the address linked to the card on file with Shopify, since it is the account's billing address. [L1306, 2020-26]
- Create a separate Shopify Payments account for each store through the payment integration, rather than linking one Stripe account directly. Shopify Payments is powered by Stripe. [L0852, 2020]
- Each Shopify store needs its own Shopify account. Several accounts can share one login email using single sign-on, but one merchant account number cannot be used across several websites. [L0934, 2023]

#### Example: Activation in Australia

- Shopify Payments in Australia costs 1.75% plus $0.30 per card transaction. Other third-party payment gateways typically charge 2% per transaction. [L0677, 2021-22]
- Shopify Payments in Australia accepts major credit cards, Shop Pay, Apple Pay and Google Pay. After activation, the Payments screen shows the last two digits of the connected payout bank account. [L0677, 2021-22]
- Procedure to activate Shopify Payments in Australia:
  1. Go to Settings > Payments.
  2. Click Activate Shopify Payments.
  3. Enter your bank account details (account numbers differ by country).
  4. Enter information about the products you will sell.
  5. Enter personal details and legal business name.
  6. Enter your business number (ABN in Australia, a federal number such as the EIN in the US).
  7. Submit and wait for Shopify to review the account.

  [L0677, 2021-22]
- Bank account fields for Shopify Payments and PayPal differ by country because banking systems are structured differently. Fill in the fields the local form asks for, using the business bank account. [L0677, 2021-22]

### Setup Order and First-Day Readiness

- Set up your payment processors as part of the initial store build, so orders can be taken from the first day the store opens. *Older advice, 2021.* [L0801, 2021]
- Open the business bank account before connecting checkout payments during the store build, because the gateway setup needs it. Payment gateways that take customer checkout payments must be linked to a business bank account, which receives the sales money. *Older advice, 2021-22.* [L0702, 2021-22]
- Checkout is not usable until at least one payment gateway is connected. The recommended pair is Shopify Payments and PayPal. *Older advice, 2021-22.* [L1145, 2021-22]
- Payment setup is the first gate to launch. A merchant account is the intermediary that accepts card payments and forwards the money to the seller's bank account. Shopify Payments works with any bank and can be used without opening a separate merchant account at first. [L0697, 2020-26]

### Identity, Address and Account Verification

- Shopify Payments can be applied for in the payment section of the Shopify admin and is usually approved right away. Shopify can check credit, and if volume grows it may ask for identity verification such as a driver license or passport photo. Account reserves are uncommon. *Older advice, 2021.* [L0968, 2021]
- Shopify or Stripe may ask for further identification at any time after activation, even months later. Provide the requested documents, and the account will be reviewed and activated. *Older advice, 2021-22.* [L0677, 2021-22]
- Both companies review new accounts because anyone can open a Shopify store. The review aims to confirm the owner is a legitimate business that will deliver orders. *Older advice, 2021-22.* [L0677, 2021-22]
- If Shopify Payments places the account on standby for identity checks, make sure the name on the account matches the name on the ID, including any middle name. Update the account and reply to the verification request. *Older advice, 2020.* [L1111, 2020]
- Processors ask for company documents mainly because a business that receives large amounts of money is treated as higher risk. Shopify Payments usually does not ask for a company until volumes become high. [L1512, 2023]
- Without proof of address, a seller cannot open Shopify Payments, so Stripe may be the only processor available. In one case, the seller had PayPal restrict the account and Stripe was used instead. [L1127, 2024]
- Stripe needs a tax number for the business owner or company during account approval, and every platform asks for the same tax number. Have the EIN and tax residency documents ready before applying. [L1127, 2024]

### Payout Destination and Schedule

- The deposit destination can be set to the Shopify Balance account or to a bank account. [L0096, undated]
- Shopify Balance is recommended for the first payouts because funds are instantly accessible and can be transferred to a bank later. [L0096, undated; L1306, 2020-26]
- Shopify Balance receives customer payments instantly, and money is then withdrawn to a bank account. For beginners this payout route is recommended over a direct bank payout. [L1306, 2020-26]
- The payout destination can be changed at any time. [L0096, undated; L1306, 2020-26]
- Shopify Payments can be set to pay out directly to your own bank account, instead of through a third-party processor. The lesson's store uses Shopify Payments only and no third-party gateway for payouts. [L1327, 2026]
- Shopify Payments deposits into the bank account linked in Shopify. You then pay each supplier yourself from that money. *Older advice, 2020.* [L1277, 2020]

#### Payout timing by source

Sources give different timings. Each applies to the period it describes:

| Source | Timing stated |
|---|---|
| 2019 lesson | Usually about 48 hours; can take longer over holidays [L1110, 2019] |
| 2020 lesson | 48 hours, shorter with more established accounts; eventually 24-hour deposits [L0268, 2020] |
| 2021 lesson | About 48 hours after the order [L0247, 2021] |
| 2022 lesson | Within 2 business days of order placement [L0249, 2022] |
| 2023 lesson | Typically within 48 hours; expected timing shown when the account is opened [L1283, 2023] |
| 2024 lessons | Within 48 to 72 hours [L0253, 2024]; typically within 48 hours of an order [L0360, 2024] |
| one source 2026 | New accounts start at 21 days after the sale [L1327, 2026] |

- *Older advice, 2021-22:* A payout schedule of 2 business days from order placement means no upfront capital is required. [L0249, 2022]
- Plan cash flow around the 48-hour delay. [L0247, 2021]
- PayPal payouts typically arrive about one day after withdrawal. [L1283, 2023]
- A longer hold, such as a seven-day hold, typically signals previous chargebacks or a high-risk account. *Older advice, 2019.* [L1110, 2019]
- Payout progression for a new account: payouts start at 21 days after the sale, then move to 14 days, 7 days, 5 days, 3 days and finally daily payouts as the store fulfills orders consistently. A new Shopify account is at the 21-day stage first. [L1327, 2026]

| Payout stage | Days after the sale |
|---|---|
| Start (new account) | 21 |
| Step 2 | 14 |
| Step 3 | 7 |
| Step 4 | 5 |
| Step 5 | 3 |
| Final | Daily [L1327, 2026] |

- Withdrawal limits on Shopify can be raised by asking Shopify support to increase the daily payout limit. At a larger scale, get a proper business bank account to avoid cash flow problems. [L1469, 2023+]
- Amazon payouts go to the seller's bank account every two weeks, and they can go to any bank account in a supported country. Plan cash flow around this two-week cycle when reinvesting in inventory. [L1153, 2016]
- Payouts from the store are converted to the payout account currency. Example: the payout account shows in SGD while the store currency is USD. [L0351, 2026]

### Fees and Plan Comparison

#### Shopify Payments rates by plan

Credit card rates by plan, as shown in the lesson:

| Plan | Monthly price | Credit card rate |
|---|---|---|
| Basic | not stated | 2.9% plus 30 cents per transaction |
| Mid plan | 105 USD | 2.6% |
| Advanced | 400 USD | 2.4% |

The rate depends on the plan, not on order size. [L0470, 2023]

- To decide whether a higher Shopify plan pays off, compare the rate saving on your card sales with the monthly plan cost. For example, saving 0.5% on sales must exceed the extra monthly plan fee. [L0470, 2023]
- The Shopify Payments processing rate can be improved by upgrading the Shopify plan. [L0351, 2026]

#### Regional rates

- Singapore-based store, Shopify Basic plan, as shown in the lesson: 3.2% plus S$0.50 per online transaction and 3% plus S$0.50 per in-person transaction. The Basic plan was shown at S$348 per year, with a monthly option. These are the starting baseline for a Singapore setup. [L1327, 2026]
- Shopify Payments in Australia: 1.75% plus $0.30 per card transaction; other third-party gateways typically 2%. *Older advice, 2021-22.* [L0677, 2021-22]
- Typical payment processor fees for new sellers are 2.9% plus $0.30 per transaction. Processors such as Stripe, Shopify Pay and PayPal charge these fees on card payments. *Older advice, 2021-22.* [L1148, 2021-22]
- Stripe has no account fee but takes about 2% of each transaction, so a 40 dollar sale can lose roughly 2 to 3 dollars before payout. [L0678, 2023]
- High-volume and high-risk rates are covered in the section on higher-risk processors below. [L0363, 2022+]

#### Fees when Shopify Payments is not used

- *Older advice, 2021:* Shopify charges a 2 percent transaction fee on the Basic plan when Shopify Payments is not used. [L0469, 2021]
- one source: if Shopify Payments is not used, a fee of about 1 percent, 1.5 percent or 2 percent applies on the basic Shopify plan, on top of the processor's own fees. [L1158, 2023]

#### Calculator and checks

- Check the gateway formula in the calculator against the payment rate your Shopify Payments account shows, which the example sets at 5.5% of the order price plus $0.30. Change the formula if your rate differs, because the gateway fee is the largest variable cost after COGS on a low-priced product. [L0986, 2026]
- Use the net payout in the finance sheet, not the gross order value. [L0678, 2023]
- Worked example: a PayPal fee on a 500 order at 2.9% plus a 0.30 static fee: 500 × 2.9% = 14.50, plus 0.30 gives a processor fee of 14.80. Use this same method to check any processor fee before entering it. [L1201, 2021-22]
- For a store that sells in one market only, the Shopify Markets fee input should stay at zero. A store that uses Markets must weight the Markets fee by the share of total revenue that comes from Markets orders, not apply the full fee rate to all orders. [L0433, 2025-26]

### Plan Costs and Billing

- Shopify Settings > Billing shows the upcoming bill, which is issued at the threshold (example: S$260) or at the end of the billing cycle, whichever comes first. [L0351, 2026]
- Settings > Plan: check the plan, the card rates and the billing cycle. Shopify bills the store in cycles and charges for apps and usage on the same account, so app costs must be counted with the plan. [L1327, 2026]
- Shopify bills app charges and usage-based fees such as transaction fees on the store account at the end of the billing cycle, or earlier once a usage threshold is reached. The Billing page shows the next bill date and the amount due, so check it before installing paid apps. [L1327, 2026]

### Payment Capture

- Procedure to activate payments and test the checkout, in this order:
  1. Go to Settings > Payments and click Activate Shopify Payments.
  2. Choose the payment capture method. Payments were authorized when an order is placed and captured Automatically at checkout in the example.
  3. Open the preview of your checkout and check that products, prices and countries display correctly.
  4. Once Shopify Payments is active, run a test checkout from the test option that appears.

  [L1167, 2026]

### Stripe: Terms, Scaling and Account Rules

- Stripe allows fast-shipping dropshipping (orders arrive in 1-3 weeks) but does not allow slow-shipping dropshipping from overseas (orders take weeks, high chargeback rates). Dropshipping from US suppliers with fast delivery fits Stripe's terms. *Older advice, 2022.* [L0272, 2022]
- Stripe may close accounts it classes as high risk, and drop-shipping from China is one reason. Check the provider's risk policy before building a store around a payment processor. *Older advice, 2021.* [L0469, 2021]
- A Stripe account connected to a business bank account does not require a store URL linked to the LLC or a company web page. An LLC does not need its own website to set up Stripe. [L0808, 2026]
- You can only use one payment processor at a time. Shopify Payments is built on Stripe, so you cannot enable Shopify Payments and a separate Stripe account together. [L1158, 2023]
- Shopify Payments can cause problems once monthly revenue reaches about 20,000 to 30,000 dollars, or up to 50,000 to 60,000 per month, due to chargebacks. Stripe is preferred for scaling stores because it offers more payment features. [L1158, 2023]
- Once a store scales at high volume, consider Stripe or another processor for better features. [L1158, 2023]
- Stripe runs on the same infrastructure as Shopify Payments. If a processor stops supporting a store, check with the bank whether it is due to the industry. *Older advice, 2020.* [L1088, 2020]

### Merchant Accounts and Gateways

- A merchant account is the intermediary that accepts customer card payments (credit or debit) and forwards the money to the seller's bank account. [L0697, 2020-26]
- Authorize.net is only a gateway, so it needs a separate merchant account at a bank or processor to deposit your money. Start with Shopify Payments. *Older advice, 2021.* [L0671, 2021]
- When applying for a merchant account, state a realistic expected monthly volume, for example between $5,000 and $10,000. Very high numbers look like more risk to the processor, and the volume can grow over time. *Older advice, 2021.* [L0671, 2021]
- If Shopify Payments is not available, open a merchant account directly with your own bank and connect it to Shopify, either through a direct integration or a gateway such as authorized.net. Third-party processors such as Checkout.com that integrate with Shopify are a faster alternative. *Older advice, 2021.* [L0968, 2021]
- Linking a third-party merchant account to Shopify is possible but not recommended. Shopify Payments is the preferred processor. [L0934, 2023]
- Shopify Payments has strict terms for supplements, so sellers of such products may need a third-party merchant account instead. *Older advice, 2022.* [L1113, 2022]
- *Older advice, 2019:* Shopify can work with other payment processors, but PayPal Payments Pro is not recommended. You can instead open a merchant account through your bank and compare terms and rates; keeping Shopify Payments is simpler. [L1110, 2019]

### Other Payment Methods and Processors

- Settings > Payments has a Manual payment methods section for payments taken outside the online store. Orders paid this way must be approved before they are fulfilled. *Older advice, 2021-22.* [L0677, 2021-22]
- Settings > Payments also lists Third-party providers, which charge the provider's own rate, and Alternative payment methods, which can be added on top of Shopify Payments or a third-party provider. *Older advice, 2021-22.* [L0677, 2021-22]
- Settings > Payments shows a "See all other providers" option for using a payment provider other than Shopify Payments. Shopify Payments is still required to manage each market's base currency and to offer local currency checkout, so a different provider means giving those up. [L1167, 2026]
- PayPal needs a business account once business transactions begin, with company details and fulfillment method. [L1512, 2023]

### Higher-Risk Processors and Restricted Products

- High-volume payment processing needs a higher-risk payment provider when sales spike suddenly, since PayPal and Stripe may freeze funds. Authorized.net was cited as a high-risk processor, charging about 5-6%. [L0363, 2022+]
- Payment processors may place a store under a standby review. Keep identity documents ready, because the review can occur at any time. [L0677, 2021-22]
- Stripe may close accounts it classes as high risk, and drop-shipping from China is one reason. Check the provider's risk policy before building a store around a payment processor. *Older advice, 2021.* [L0469, 2021]
- Shopify Payments has strict terms for supplements, so sellers of such products may need a third-party merchant account instead. *Older advice, 2022.* [L1113, 2022]

### Checkout Trust Signals

- Anxiety-reducing payment and checkout signals: a 'secure checkout' label on the button, secure payment logos, and a note that transactions are encrypted and protected. These reassure the buyer that they will not be scammed. [L0919, undated]


Part 17 of 34 of "18. Legal Tax Banking and Payments: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments.md · Previous: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments/16-funding-cash-flow-and-financing-the-business.md · Next: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments/18-shopify-markets-currency-and-local-pricing.md
