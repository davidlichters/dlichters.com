<!-- part of ecom/deep/04-store-build-and-shopify.md -->
Part 8 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/07-payments.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/09-shopify-markets.md

## Shipping, taxes, markets, currency and international selling

### Shipping model for supplier-fulfilled stores

- Shipping profiles are rules that decide which products ship to which destinations and what they cost. Manage them under Settings > Shipping and delivery in the Shopify admin. [L0970, 2023]
- Most stores use free shipping on all products through a single profile that covers all products. Upgraded options such as expedited shipping or white-glove delivery are the exception. [L0970, 2023]
- Standard policy (2025 source): free shipping on all orders to the continental USA. The store pays the shipping cost; the customer does not. [L0255, 2025]
- Always offer free shipping to all customers, with the company covering the cost. Handle expedited or upgraded shipping and white-glove delivery as fixed-cost add-on options. [L0268, 2020]
- Free shipping is the norm among competing stores in this niche, so the store offers it and absorbs the shipping cost. [L1305, 2020-26]
- Shopify's built-in shipping rates are not used when suppliers ship on their own accounts, because suppliers usually have better prices. Shopify's discounts with UPS, FedEx, DHL and USPS exist but are rarely used by this business. [L0805, 2024]
- Do not rely on live carrier shipping rates. The store-owner setup is a free shipping option for almost all products, an expedited option as an upcharge, and a white-glove option as a fixed upcharge. [L0359, 2020]
- Counterpoint: when charging for shipping, Shopify's built-in calculator can display real-time carrier quotes. Use it before looking for third-party shipping apps. [L1088, 2020]
- A store on a basic Shopify plan does not need supplier locations entered. The store does not use Shopify shipping calculations and handles freight through suppliers and carriers. [L0854, 2022]
- Shipping abroad only makes sense for small, inexpensive items. Premium and bulky products, which fit the high-ticket model, rarely justify international shipping costs. [L1274, 2018]
- Shipping must be reviewed before launch so checkout shows correct delivery costs for each country served. [L1008, 2025]

#### Multi-supplier procedure

1. For multiple suppliers, use one free shipping rule: "Continental US = free shipping." [L0268, 2020]
2. Use fixed-cost add-ons for expedited delivery or white-glove delivery. [L0268, 2020]
3. For inventory: enter a random inventory number (100-300) if you are not tracking real-time stock. Customers don't see internal numbers. [L0268, 2020]
4. No need for a setup with 4 or more locations. [L0268, 2020]

### Free shipping setup

- Basic principle: set up a domestic shipping rate before launch. Without a rate for your country, checkout does not work properly for customers. For most new stores, free shipping is the simplest starting point. [L0677, 2021-22]
- Shipping is set up in basic form first, with free shipping as the most appealing option. Later, once real costs and the product mix are known, decide whether to charge shipping for certain locations or products. [L0677, 2021-22]
- Free shipping as a general rule: in Shopify admin, open Shipping and create one method named "Free shipping" with a price of 0. Customers see it in checkout and pay nothing; the supplier's shipping cost is paid by you. [L0357, 2019]

#### Free shipping for the US (2023-2025 source)

1. Open General shipping rates in the general shipping profile. [L1305, 2020-26]
2. Check the shipping origin address. It defaults to the address entered at account creation; update it later with the business address. [L1305, 2020-26]
3. Delete all default rates listed under the shipping rates (the default free rate and others). [L1305, 2020-26]
4. Edit the first rate and change its type to Custom flat rate, with no transit time. [L1305, 2020-26]
5. Name the rate "Free shipping" and click Add. [L1305, 2020-26]
6. Set the price to $0 and the minimum order price to $0. [L1305, 2020-26]
7. Click Done. [L1305, 2020-26]
8. Under Shipping zones, keep Domestic (United States) with the Free shipping rate at $0. [L1305, 2020-26]
9. Delete the International zone. [L1305, 2020-26]
10. Confirm that the remaining 27 countries and regions are not covered, so customers can only ship to the United States with free shipping. [L1305, 2020-26]
11. Click Save. [L1305, 2020-26]

- Settings > Shipping and delivery > General shipping rates: delete all default rates, then add one Custom flat rate with no transit time, named "Free shipping", price $0, minimum order price $0. Click Done. [L1305, 2020-26]
- International shipping is not offered at launch because international rates are too expensive. With only the US in the shipping zones, other markets stay uncovered. [L1305, 2020-26]

#### Free shipping for Australia (2021-22 source)

1. Go to Settings > Shipping and delivery. [L0677, 2021-22]
2. Click Manage rates in the shipping box at the top. [L0677, 2021-22]
3. Choose the Domestic profile for Australia. [L0677, 2021-22]
4. Delete the default Express and Standard rates. [L0677, 2021-22]
5. Delete the Rest of World rate. [L0677, 2021-22]
6. Click Add rate, name it "Free shipping" and leave the price at 0 (zero means free). [L0677, 2021-22]
7. Click Done. [L0677, 2021-22]
8. Click Save. [L0677, 2021-22]

- Do not set a Rest of World shipping rate for a store that only sells domestically. Without it, checkout will not let customers continue with a foreign shipping address, which is the desired effect. [L0677, 2021-22]
- The Shipping from address in the domestic profile comes from the store address in Settings > General. You can edit the address used for rate calculations in the shipping settings. [L0677, 2021-22]
- The Local delivery and Local pickup options on the Settings > Shipping and delivery page are for stores with a physical location and their own warehouse. A dropshipping store does not need to configure them. [L0677, 2021-22]
- To charge a different rate for only certain products, create a new profile in Settings > Shipping and delivery instead of changing the default domestic profile. [L0677, 2021-22]

### Paid upgrades and expedited options

- Priority shipping is set up in Shopify settings as a shipping option. It is free and takes about 5 minutes to configure. Pair it with a visible delivery time so customers can choose it at checkout. [L1076, 2019]
- Expedited shipping is built as a shipping profile in Shopify so customers can select it at checkout. No third-party app is needed for expedited rates. [L1094, 2023]
- Fixed upcharge options: expedited delivery as an upcharge and white-glove delivery as a fixed upcharge. [L0359, 2020; L0268, 2020]
- Example of a free option and a paid faster option side by side:
  - Free option: name "Free Express Delivery", Rate type Flat, Price $0.00, Transit time 3 to 5 business days. It appears at checkout with the estimated delivery dates. [L0798, 2026]
  - Paid faster option: name "Express Priority Delivery", Price $4.95, placed next to the free option. Customers choose between free and paid speed at checkout. [L0798, 2026]
- Pricing limits: aim for a maximum shipping charge of about $10 on low-priced products, and ideally offer free shipping by building the cost into the product price. Expedited shipping should not exceed about 15 to 20 percent of the product price. [L1259, undated]
- Shopify shipping option timeframes are static text, such as "five to seven days". For longer custom production times, put the lead time on the product pages and leave timeframes off the shipping option text. [L0962, 2021]

#### Setting up a shipping option

1. Click Settings at the bottom left of the Shopify admin. [L0798, 2026]
2. Click Shipping and delivery. [L0798, 2026]
3. Click General profile. [L0798, 2026]
4. Check the fulfillment location (the shop location) and the shipping zones. [L0798, 2026]
5. Add a shipping option to the zone with Add shipping option (or Add rate). [L0798, 2026]
6. Name the first option "Free Express Delivery", set Rate type to Flat and Price to $0.00, and set Transit time to 3 to 5 business days. [L0798, 2026]
7. Add a second option, open it with Edit shipping option, and name it "Express Priority Delivery" with a price of $4.95. [L0798, 2026]
8. Save the profile. [L0798, 2026]

#### Custom shipping rates and zones (2019-2022 sources)

- Delete the default shipping rates and create custom rates such as "Free Track Shipping" (0 USD) and "Expedited Shipping" (4.99 USD). For other regions, create zones, for example "ePacket" or "T4" for Canada, Australia and the United Kingdom. [L1259, undated; L1260, undated]
- Weight-based shipping rate formula: product weight × rate per pound. Example: at $2 per pound, a 50 lb product costs $100 to ship. Product weights must be accurate for this to work. [L0671, 2021]

### Shipping profiles and product-level rules

- Create a new profile for a group of products from one supplier: Settings > Shipping and delivery > Create new profile. Choose the shipping zone first, then add the rate. [L0971, 2024]
- Some themes do not support different shipping rates for individual products by default. Ask the store developer or support for custom code before installing a third-party app. [L1279, 2021]
- The Charlotte Shopify theme has one default delivery estimate for all products. Different estimates per supplier, category or product need a custom code change from the developer. [L1281, 2022]
- Dispatch-based estimate: for products shipped from a supplier that dispatches the same or next day with a domestic carrier, 3 to 5 business days is a safe estimate. Suppliers that dispatch only on certain days, such as weekly on Fridays, need a longer window. [L1069, 2019]

### Shipping zones and locations

- The General profile applies to all products that are not in another shipping profile. New products are added to it by default. Its rules are set under Settings > Shipping and delivery > General profile. [L0798, 2026]
- In the General profile, check the Fulfillment location under the shop location setting, because that location sends the orders. The Shipping zones section lists which countries each zone covers and the rates attached to it. [L0798, 2026]
- A shipping zone can cover many countries at once. In the example store, one zone covered several countries and 234 more, with a paid rate of $3.95 for that zone. [L0798, 2026]
- Check that each target market is included in shipping in Shopify. If shipping is not set up for a country such as Australia, customers may not be able to check out. [L0950, 2023]
- Check shipping and sales regions in Shopify against the markets you advertise to. A store sending paid traffic that could not buy because it only shipped to Australia and New Zealand needs its location settings changed. [L1225, 2025]
- Third-party carrier rates at checkout are switched on under Settings > Shipping and delivery with "Enable third-party calculated rates at checkout". This needs your own carrier account connected. The option showed an "Upgrade your plan" prompt, so check the plan first. The default package under Saved packages feeds these calculations, so enter your real parcel size and weight there. [L1167, 2026]
- one source 2026 packages and local delivery: leave the default settings at the foundation stage, including the packing slip template, the pickup in store option and the sender name on shipping labels. Delivery customizations can be used later to hide, reorder or rename delivery options at checkout. [L1327, 2026]

#### Ask Shopify for setup help before outsourcing

1. Call Shopify support by phone before hiring someone. [L1277, 2020]
2. Ask them to walk you through the shipping zone and location setup, which may take around 30 minutes. [L1277, 2020]
3. Only outsource the setup if Shopify cannot resolve it. [L1277, 2020]

- Use the setup problem above if supplier location ZIP codes are not accepted in Shopify. [L1277, 2020]

### Estimated delivery and checkout display

#### Estimated delivery on product pages

1. In the product template, expand Product information. [L0139, undated]
2. Click the eye icon next to Estimated delivery to enable it. [L0139, undated]
3. Set the earliest delivery day (example: 4 days). [L0139, undated]
4. Set the latest delivery day (example: 7 days). [L0139, undated]
5. Save changes. The system automatically updates these calendar dates each night at midnight based on the current day. [L0139, undated]

- Estimated delivery text appears on product pages when the setting is not hidden in the theme editor and the country, earliest delivery days, latest delivery days, and text are all filled in. [L0971, 2024]
- Show when orders are expected to arrive: in Shipping and delivery > General profile > Estimated delivery dates, switch on "Show when orders are expected to arrive" so customers see the expected delivery window before buying. [L0798, 2026]
- Shopify shows the warning "Not showing transit time may impact conversion at checkout". Hiding the transit time on a shipping option can lower checkout conversion, so keep it visible. [L0798, 2026]

#### Shipping information and trust

- Customers want to know how a product will be delivered, what it costs, and how trustworthy the delivery company is. Shipping should be presented to look better than what competitors offer. [L0411, 2021-22]
- Missing shipping information on the product or cart page weakens trust. Show delivery time and shipping cost clearly before checkout. [L0524, 2023]
- Never add costs at the cart or checkout stage that the shopper did not see earlier, including shipping, taxes or other fees. Hidden costs are the number one reason for abandoned checkouts. Show any delivery costs on the product page. [L1522, 2021-22]
- Rephrase shipping information positively: instead of "free shipping", state "We pay for shipping". Instead of "delivery in 12 to 15 days", state "We ship within 1 to 2 days". If delivery is slow, add an explanation, such as "Due to high demand, delivery takes 7 to 10 business days; you will get a tracking number within 12 to 24 hours". [L1259, undated]
- Add a shipping policy note with typical delivery times, and add a warning that delivery can take longer. [L0964, 2023]

#### Show "Free" at checkout instead of "calculated at next step"

1. In Shopify go to Settings > Languages. [L1345, 2021+; L1259, undated; L1260, undated]
2. Open the edit default theme content option. [L1345, 2021+; L1259, undated; L1260, undated]
3. Search for "shipping". [L1345, 2021+; L1259, undated; L1260, undated]
4. Set the shipping default value to "Free". [L1345, 2021+; L1259, undated; L1260, undated]
5. Save and check the checkout to confirm the text reads "Free". [L1345, 2021+]

- If shipping is free, display "Free" at checkout rather than "calculated at next step", because the latter makes buyers expect extra charges. If shipping is not free, the calculated text can stay. [L1345, 2021+]

### Taxes

- Tax settings are found under Settings > Taxes and duties, where tax collection by location and method is configured. [L0855, 2023]
- Shopify's built-in tax calculation is a starting point. A tax app can track sales thresholds across states as revenue grows. [L0855, 2023]
- Shopify can manage and collect sales tax and other charges paid by the customer. No changes are made at first; it becomes relevant when a sales tax threshold for states or markets is reached. [L1305, 2020-26]
- Shopify adds a default tax setting, such as VAT included at 20 or 21 percent, on new products. If you do not charge taxes, disable the tax setting on each product, because visible tax lines can cause checkout abandonment. [L1259, undated]
- If the exact product category is not in Shopify's list, choose the closest top-level category, since taxes may be calculated from the selected category. [L0970, 2023]
- Change the store owner's tax country in the Shopify admin: open Settings in the bottom left and find the address settings for the account. Update the country to match the business location. [L1111, 2020]

### Store currency

#### Which currency to choose

- Store currency should match the country where the business is based and where it sells, not the country of the website's audience. Once the first sale is made, the store currency is locked and cannot be changed. [L0677, 2021-22]
- Set the store's currency to the currency of the primary selling market (for example USD for a US store). If the account defaulted to another currency such as CAD but the store sells in the US, change it to USD. Settings > Store currency. [L1305, 2020-26]
- Set the store's default currency to the currency used by customers in the country being targeted. This keeps prices and checkout consistent for those buyers. [L0853, 2021]
- When targeting a new market, set the store currency to the local currency. Showing USD or another foreign currency at checkout causes buyers to lose trust and leave. [L1185, 2023]
- Currency display for a US market: in Settings > General > Store defaults > Currency display, set US Dollar (USD $) if you sell to the US market. If the store currency is left on a local currency (for example SGD), US customers see the local currency on the website and at checkout, which discourages purchases. The currency customers see is managed under Markets, where the backup region is set to United States. [L1327, 2026]
- Set the default display currency to the currency of the main traffic source. If most visitors come from the United States, show US dollars by default, because visitors who see unfamiliar prices often leave before buying. [L1325, 2020-26]
- Check the default currency: open your own store from the country where most of your traffic comes from, without a VPN, and see which prices appear. If visitors would see an unfamiliar currency, change the store's default to the local one. [L1325, 2020-26]
- Keep currency consistent across the whole buying path. Showing prices in one currency on the product page and switching at checkout confuses buyers and makes them leave, especially in markets like the UK. [L0694, 2024]
- Competitor stores show prices in the visitor's currency and place a country and currency selector in the header, for example CAD for Canada. Set this up before selling into a second market so the displayed price matches what the customer pays. [L0600, 2026]
- Orders from Canada can be taken in US dollars without conversion. Currency conversion apps exist but are not required to start. [L1092, 2022]

#### Without Shopify Payments and with it

- Without Shopify Payments, checkout may show only the store currency (for example USD). With Shopify Payments, buyers see prices in their local currency. Use the same currency as the target market and check the main store currency under Settings. [L1259, undated]
- Shopify Payments shows the visitor's currency automatically. For other countries, set up tax and shipping rules in Google Merchant Center first, and keep the other country's Google Shopping campaigns separate from the US ones. [L0834, 2021]
- Shopify Multi-Currency Support lets a store display and charge prices in several currencies, which matters when selling to customers in more than one country. [L1089, 2021]
- Base currency: each market can have its own base currency, which only Shopify Payments can manage. [L1167, 2026]

#### Changing the store currency

- To change the store currency for a new market, contact Shopify support on Twitter (X), which replied fastest in this case. Then open a support ticket asking to change the store currency for the new market. The currency can be switched back to the original one later. [L1185, 2023]
- Changing the store currency can be requested from Shopify support by opening a ticket. It can be switched back later. [L1185, 2023]

#### Currency conversion apps

- Bucks Currency Converter (free) setup procedure:
  1. Install the app from the Shopify App Store. [L0635, undated]
  2. Copy the modified money format HTML with currency and the HTML without currency from the app. [L0635, undated]
  3. Go to Shopify Settings > Store currency, click Change formatting, and paste both HTML snippets into the matching fields. [L0635, undated]
  4. Save. [L0635, undated]
  5. Go to Theme app extension settings, turn on the currency converter option, click Save, confirm with "I have done this", then click Enable app. [L0635, undated]
- Once the currency converter is active, visitors from other countries (for example Canada or Australia) see product prices in their own currency on the product page. [L0635, undated]
- Currency-conversion apps only convert the displayed price. This conflicts with MAP pricing in dropshipping, so they do not solve custom USD pricing for a Canadian store. Before creating a second store for another currency, ask Shopify support through live chat whether its native features or an app can set separate prices per currency. [L0854, 2022]
- Shopify Markets can show prices in visitors' local currency automatically, if enabled. Enabling it does not solve shipping costs, which decide whether selling to a distant market is worth it. [L0360, 2024] (2024)

#### Currency conversion in a spreadsheet

1. Put USD prices in column A. [L0429, 2022]
2. In column B, enter a formula multiplying column A by the current exchange rate (CAD cell = USD cell × exchange rate). [L0429, 2022]
3. Drag the formula down. [L0429, 2022]
4. Update the rate, because exchange rates change. [L0429, 2022]


Part 8 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/07-payments.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/09-shopify-markets.md
