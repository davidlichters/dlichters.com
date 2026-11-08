<!-- part of ecom/deep/04-store-build-and-shopify.md -->
Part 9 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/08-shipping-taxes-markets-currency-and-international.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/10-legal-pages-policies-and-trust-pages.md

### Shopify Markets

#### Basics

- Shopify Markets is the built-in feature for selling to customers in other countries from one store. Each market groups one or more regions and can carry its own currency, language, catalog and discount settings. [L0798, 2026]
- Shopify Markets lists 237 regions that can be added to a market. A market can be set to cover specific selected regions instead of all of them. [L0798, 2026]
- Markets > International > Edit: the regions of the International market are changed here. Use Market conditions set to Specific, then pick the countries and press Done. [L0798, 2026]
- The market detail page has Parent market and Sub-market fields, so one market can sit inside another in a hierarchy. The market for the store's own country is labeled as the store default in the Markets list. [L0798, 2026]
- Each market has a Customized section that says "Create unique configurations for customers in this market". It contains Currency, Catalogs, Discounts, Domain and language, and an option for market-specific settings. If nothing is customized, the store configuration applies. [L0798, 2026]
- Example (Singapore store): the International market used Singapore Dollar (SGD) as its currency in its Customized section, while the Markets list showed each market's region count and status. Checking the currency per market before activating it prevents prices from displaying in the wrong currency. [L0798, 2026]
- Market settings have separate areas for Languages and domains, Products and pricing (for example All products included and the market currency), Duties and import taxes, and Store settings (Payments and Taxes). [L1167, 2026]
- Shopify's Markets recommendation says 22% of worldwide online sales are cross-border, and it suggests activating an International market to start selling abroad. Activating that market is what makes the other countries available at checkout. [L1167, 2026]
- Turning on International Active activates geolocation, which converts product prices into the visitor's local currency automatically. Most merchants stop there, but each target country should also get its own market with manually set prices. [L1316, 2024+]
- Activate markets for each country you target so shoppers see prices in their local currency. Do this before running paid traffic to several countries, otherwise conversion suffers in those markets even when the ads perform. [L1171, 2024+]
- In Shopify Markets, set a specific price for each market instead of relying on automatic conversion. Enter prices such as 24.90 or 26.90 for the UK instead of 27. [L1161, 2024+]
- Shopify Markets sets the language and content for each country, but you must supply the translations yourself or install a translation app to fill them in. [L1158, 2023]
- Shopify Markets: go to Settings and use Markets to assign a language and translated content to each country. Markets can also serve separate URLs for each market, such as a subfolder or suffix for France. [L1158, 2023]

#### Setting up the International market

1. In the Shopify admin left menu, click Markets. [L0798, 2026]
2. Click International. The default market for the store's own country is shown; if it is not the market you want, work in the International market. [L0798, 2026]
3. Click Edit. [L0798, 2026]
4. Add the top five countries: United States, United Kingdom, Canada, Australia, New Zealand. Add more regions if needed. [L0798, 2026]
5. Click Done. [L0798, 2026]
6. Check the market status. A new market starts as Draft; change it to Active so it can sell. [L0798, 2026]

- For the first international expansion, add the five largest English-speaking export markets: United States, United Kingdom, Canada, Australia and New Zealand. These five are the recommended starting set. [L0798, 2026]
- A new market often starts in Draft status. A market in Draft does not sell, so it must be switched to Active after the regions are added. [L0798, 2026]

#### Market setup order

1. Go to Settings > Markets > International. [L1167, 2026]
2. Set the market to Active. Only active markets allow customers in those countries to check out. [L1167, 2026]
3. Confirm the countries you sell to are included, for example United States and United Kingdom. [L1167, 2026]
4. Once Shopify Payments is set up, change the base currency to match the currency of the place you sell (USD in the example for US sales). [L1167, 2026]
5. Click Save. [L1167, 2026]

#### Inactive markets block checkout

- A market that is inactive blocks checkout, so customers in its countries cannot buy. The Markets overview shows each market as Primary, Active or Inactive, and the preview displays "Customers can't check out" for inactive markets. [L1167, 2026]
- Shopify does not enable checkout for every market by default, so visitors from other countries may be unable to check out. Check the Markets settings for each country you want to sell to. [L0363, 2022+]
- Targeting countries such as Canada, New Zealand or Australia while only the US is activated in Shopify Markets causes checkout failures. Customers cannot select their country and abandon the cart. [L0773, 2023]
- A new store with inactive markets lost sales: only the primary market (United States) was active, so buyers from other countries could not check out. This caused high add-to-cart numbers without conversion. [L1259, undated]
- A new store with a disabled non-US market lost around 100-200 sales within an hour because visitors from other countries could not check out. Always test the checkout for every target country. [L1260, undated]
- While selling in one country, keep the primary market (for a US store, United States) active and keep International inactive. Over time Markets show which market makes most sales and conversion rates per market. [L1305, 2020-26]

#### Checking markets before sending traffic

1. Go to Settings > Markets. [L1259, undated; L1260, undated]
2. Verify all target countries (for example USA, Canada, Australia, UK) are active. [L1259, undated; L1260, undated]
3. Test checkout with a random address in each country. [L1259, undated; L1260, undated]
4. Ensure the store can take orders in each target market before ads go live. [L1259, undated]

- Disabled markets block checkout and can lose sales. [L1260, undated]

#### Shopify Markets and language

- Shopify Markets lets you assign a language and translated content to each country. [L1158, 2023]
- Use a separate store or market for each target country when the market shows consistent results. Translate not only landing pages but also checkout language and default Shopify text, so the whole experience is in the local language. [L1158, 2023]
- Shopify suggested adding German to a market that already includes Austria, because German converts best there. Match market languages to the countries where a language is most likely to be used. [L1167, 2026]

### Languages and translation

#### Adding languages

- Settings > Languages: add a language to serve customers in their own language. Shopify states that translations improve cross-border conversion by an average of 13% and that adding them is free. The Published languages list shows which languages are active in the markets they were added to. [L1250, 2026]
- Add German for customers in Germany (or other markets where German is used). The lesson says translations improve cross-border conversion by an average of 13%. [L1327, 2026]
- For a multi-language store, begin with one English store and use Shopify's built-in translation feature rather than a second store. Shopify reports traffic sources, which makes it easier to see where customers come from. [L0352, 2022]
- For a multi-language store, use a translation app or Shopify's native translation feature with a language selector instead of building separate content for each language. The language switches automatically when a visitor selects it. [L1113, 2022]
- Keep the default English for a US store. Change only if the site should be in more languages. Settings > Languages. [L1305, 2020-26]
- Stores with foreign-language pages can be translated and edited. This is a viable approach to launch the product in your market. [L0209, 2023]

#### Translating the whole store

- When selling in a non-English market, translate the whole store and ads into the local language. A store fully translated into the target language was recommended for Spain. [L0361, 2024]
- When you run a store for a country where people speak a language other than English, such as Germany or Switzerland, build the store and its messages in the local language. Translation and local wording reduce confusion and lower complaints. The same product can need different wording for each country even when the language is shared. [L0519, 2020+]
- Website, ads and checkout should all be in the local language of the target market. An English store in the Netherlands converts worse than a native-language store. [L0660, 2019+]
- For a single-country test, translate the store into that country's language. For worldwide targeting, keep the store in English. [L1185, 2023]
- Stores in the local language generally convert better than English stores. AI translation tools can handle most of the work when translating into German or another language, but a native speaker should proofread before launch. [L1185, 2023]
- Translate websites into the local language with a human translator, for example through Fiverr, instead of automatic translation apps, which were described as inaccurate. Do this for every country where you sell or run influencer campaigns. [L1214, 2023+]

#### Translation quality risks

- Shopify's Google Translate app was described as not good enough for store translation. Translating an entire store with machine translation without review is a risk to quality. [L0709, 2017+]
- AI translations can be fast but their accuracy is unknown. Have a native speaker check them before publishing a translated store. Publishing unchecked machine translations can hurt trust in the store. [L0709, 2017+]

#### Languages and currency across the store

- Shopify offers localization tools for international sales, including translation apps for multiple languages, a geolocation app that recommends language and currency, and targeting of specific countries or regions. Country-specific domains are presented as a way to improve search ranking and buyer trust in those markets. [L1292, 2021-22]
- Shopify states that about 35% of store traffic comes from international visitors. Localization tools, such as translation apps and a geolocation app for language and currency, are worth considering. [L1292, 2021-22; L1314, 2021-22]
- Shopify Settings > Store currency is paired with language: for a single-country test, keep the language and currency of that country on the store.

#### Language and currency selectors

- Currency selectors and language selectors are only needed for multi-country selling. A currency selector is only needed when selling across borders. For a store selling mainly in one country it can be turned off, and the language selector can also be left off if not used. Check the need for currency conversion later, once real customers from other countries appear. [L0681, 2021-22]
- The Language selector in the footer appears only once at least one additional language is added in Settings > Languages. If the store sells in one language, leave "Show language selector" unchecked. [L0681, 2021-22]
- The Currency selector in the footer needs currencies to be added first, in Settings > Payments. Keep "Show currency selector" off unless the store sells across borders in more than one currency. [L0681, 2021-22]
- Header > Country/region selector and translation options are switched off unless the store sells in several markets or languages. [L1309, 2020-26]
- The free shipping bar is not needed for a supplier demo store and can stay off until you run a free shipping promotion. Many stores offer free shipping on all products and never use the bar. [L0775, 2020-26]
- Enable the country/region selector only if you sell in multiple markets, and enable the translation option only if you serve several languages. Both are off by default. [L0775, 2020-26]

### Payment methods

- Before launching in a new country, offer the local payment methods shoppers use, such as Klarna in Sweden. Missing a common local payment option can hurt conversion even when the offer is good. [L0692, 2023]
- Klarna (pay in 4) is available in Canada. Use the Canadian page of Klarna for details. [L0971, 2024]
- Shopify Payments can change the displayed currency and accepted payment methods by visitor country, but it cannot show different products per country. [L1090, 2021]

### Multi-country decisions

#### One store, multiple markets, or separate stores

- Shopify Payments: the US and Canada can run from one store with the same products, while a UK store is typically a separate store. Do not use one multi-country store when the product range differs by country. [L1090, 2021]
- To sell different products in another country, build a separate store on a country domain, such as a.co.uk version of the.com store. [L1090, 2021]
- Do not start a second store for a new country in most cases. Make sure shipping to the new country is cost-effective and that shipping is set up so you do not lose money. [L0834, 2021]
- When a store needs to sell in a second country, one option is to build a separate copy of the existing store for that market with a different name, the same suppliers and policies, and only the country swapped. Keeping markets in separate stores also keeps analytics cleaner than mixing both countries in one store. [L0805, 2024]
- Create new Google Ads campaigns for each country rather than adding a new country to existing campaigns. Separate campaigns make it much easier to track which country is profitable. [L1090, 2021]
- Shopify Markets: each target country can get its own market with manually set prices. [L1316, 2024+]

#### Separate market per target country (procedure)

1. Open the Markets section of the Shopify admin. [L1316, 2024+]
2. Click Add market. [L1316, 2024+]
3. Name the market after the country (e.g. Australia) and search for that country in the country field. [L1316, 2024+]
4. Click Add market. [L1316, 2024+]
5. Open the new market and set specific product prices for that country, instead of relying on the automatic conversion. [L1316, 2024+]
6. Click Save. [L1316, 2024+]

#### Changing a second currency or country without native per-currency pricing

1. Ask Shopify support via live chat whether the current plan or an app can set custom prices per currency. [L0854, 2022]
2. If a solution exists, keep one store and duplicate the ad campaigns, changing only the country targeting on the copy. [L0854, 2022]
3. If no solution exists, export the store's products and settings. [L0854, 2022]
4. Build the second store and import everything into it. [L0854, 2022]
5. Run the second store's ad campaigns for its own country and currency. [L0854, 2022]

#### Shipping and market fit

- Shipping abroad only makes sense for small, inexpensive items. [L1274, 2018]
- Check whether shipping to each new country is cost-effective before you open it. Shipping costs, not the market price setting, decide whether a distant market is worth serving. [L0360, 2024; L0834, 2021]
- For Canada, the Shop page sales channel (Facebook/Instagram shop page) is recommended. [L0969, 2022]
- Shopify's shipping settings are where a store defines its shipping rates and shipping zones. Review them before launch so checkout shows correct delivery costs for each country served. [L1008, 2025]


Part 9 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/08-shipping-taxes-markets-currency-and-international.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/10-legal-pages-policies-and-trust-pages.md
