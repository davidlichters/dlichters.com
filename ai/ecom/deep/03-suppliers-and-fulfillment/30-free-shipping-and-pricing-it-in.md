<!-- part of ecom/deep/03-suppliers-and-fulfillment.md -->
Part 30 of 51 of "3. Suppliers and Fulfillment: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment.md · Previous: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/29-shipping-setup-policies-and-delivery-expectations.md · Next: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/31-shipping-policy-text.md

### Free Shipping and Pricing It In

#### Deciding whether to build shipping into the price

- Offer free shipping on all products as the base option. Carrier costs are paid by the business, and rates are checked after orders come in rather than calculated at checkout [L0247, 2021].
- Free shipping is paid out of the seller's own margin, so sell a product under a free-shipping threshold (for example under 3,500) only if the margin covers the shipping cost. Shipping fees vary by supplier (2025) [L0472, 2025].
- Because the store offers free shipping on everything, shipping cost must be built into product prices so each order still leaves a minimum of 25 percent net profit [L0466, 2018].
- If a supplier can't be priced to cover shipping, restrict its products in advertising to nearby regions [L0466, 2018].
- If you offer shipping charged to customers, decide whether to build it into the price or charge at checkout by checking what the top 2 or 3 competitors do for the same brand (2023) [L0804, 2023].
- Free shipping is the usual standard in these niches, so it is not a differentiator. Check what the top two to five competitors charge for shipping and price your products to match, since those stores are your direct rivals on Google Shopping (2024) [L0965, 2024].
- Free shipping from suppliers is a plus when launching a store with a few suppliers (2024) [L0836, 2024].
- When a supplier says shipping is free, confirm whether the shipping cost is built into the product price, because that changes the margin calculation [L0359, 2020].
- Passing international shipping costs to the buyer is possible only if the final price still works for the product. Shipping should not cost more than the product itself [L0852, 2020].
- For heavy items, avoid real-time shipping calculation in the store. Build the shipping cost into the product price and offer free shipping, provided the product is still profitable [L1068, 2019].
- Shipping that a supplier charges directly to the customer can be handled by adding the cost to the product price or by creating a separate Shopify shipping profile for that supplier's products (2024) [L0971, 2024].
- Some suppliers require the seller to create and send a shipping label for pickup, so the store pays that shipping cost directly. For heavy items, check this cost before listing, because it can exceed the margin and make the product unprofitable (2024) [L0836, 2024].
- When a competitor advertises free international shipping for a bulky or heavy product, the cost is either built into an expensive price or the seller stocks the same product in warehouses in both countries. Cross-border shipping of large or heavy goods is very costly, so a claim of truly free shipping only works for very high-priced, small items. Check which explanation applies before copying the model [L1090, 2021].
- Free shipping is excluded for Hawaii and Alaska because it is too expensive to offer for free [L0834, 2021].

#### Calculating an average shipping cost (2018 method)

1. Note each approved supplier's shipping origin and where your customers are located, for example the share of sales per state.
2. Ask each supplier for shipping quotes for its most popular product to those regions, ideally while applying for approval.
3. Calculate an average shipping cost per product, weighted by the share of your business in each region (for example a 50 percent split between two regions).
4. Add that average into the product price instead of marking the price up more for shipping.
5. Check that the resulting net margin still meets the 25 percent minimum while free shipping is offered.
6. If the margin still does not cover shipping for a supplier, restrict that supplier's products in advertising to nearby regions (see geo-targeting). [L0466, 2018]

- Example: a stand-up paddle board costs about 50 dollars to ship within the same state and about 150 dollars from a supplier in a distant state. If half of the customers are in each zone, the average of 100 dollars is the figure to build into the price [L0466, 2018].
- If a product's shipping cost can consume nearly all of its net profit per order, for example 150 dollars of profit against 150 dollars of shipping, do not sell it to the expensive regions. This situation should be rare [L0466, 2018].
- If a supplier cannot quote shipping for individual items, ask for package specifications (dimensions and weight of each item and box) in a spreadsheet or CSV and estimate costs from those numbers [L0466, 2018].
- Template for requesting shipping quotes from a supplier [L0466, 2018]:

```
Hi [Supplier name], we have been approved and are preparing our store. Most of our customers are in [State A], about [X]% of our business, and we also sell to [State B]. What would it cost to ship your most popular product, [product name], to a [State A] address and to a [State B] address? Please include the package weight and dimensions with each quote.
```
[L0466, 2018]

- Estimating a typical shipping cost from a supplier's warehouse (2025) [L0966, 2025]:
  1. Get the zip code of the supplier's warehouse.
  2. Request sample shipping quotes from that warehouse to several random US zip codes, for example New Jersey to New York, Florida, Texas and California.
  3. Average the quotes to estimate the typical shipping cost per order.
  4. Use this average, not a single quote, when calculating margins.
- Track the shipping cost against the margin before you cut prices. Shipping costs can quickly erase margin on heavy items, so apply the calculated average, not a single quote, when setting prices [L0966, 2025].
- Shipping costs can jump sharply when a product crosses into a higher shipping size class, so even a one-inch increase in length can matter. Ask suppliers for the dimensions that define each shipping class and the packing materials they use before deciding how to box or group products [L0963, 2022].
- Enter accurate product shipping dimensions for every item, especially large ones. Wrong sizes can make shipping costs higher than needed [L1000, 2017].
- Enter package sizes such as box dimensions in Shopify so that carrier-calculated shipping rates are accurate [L0798, 2026].
- Branded mailer boxes can be sourced from a friend's business in exchange for free packaging, with the parcel carrying that business's branding as part of the arrangement. This lowers packaging cost in the early phase of a small brand [L0492, 2023+].

### Shopify Setup: Locations, Rates, Zones and Profiles

#### Locations and origin address

- Settings > Locations: keep the default location unchanged and do not add supplier addresses. The location represents the business's billing location, not the suppliers [L0096, undated].
- Shipping origin address in Shopify: enter your business address or main fulfillment location. With free shipping offers (no shipping cost charged to the customer), this address does not affect shipping rate calculations and is primarily for documentation purposes [L0243, 2019].

#### Shipping rates and free shipping

- Settings > Shipping and delivery: create one domestic shipping rate with the country United States and the rate Free shipping. Customers then see Free Shipping at checkout. This setup applies when the store offers free shipping [L0096, undated].
- In the shipping rate editor, the Offer free shipping option makes a rate free, and checkout then shows the rate name with FREE instead of a price. A paid rate uses rate type Flat with a Price field [L0798, 2026].
- Settings > Shipping and delivery has a Shipping labels section for buying discounted shipping labels and managing preferred carriers. The Carrier accounts section lets you connect an existing carrier account so its own rates are used at checkout [L0798, 2026].
- Settings > Shipping and delivery > Additional delivery methods offers Local delivery and Pickup in store as options alongside regular shipping. The Sender name on shipping labels field is in the same section [L0798, 2026].

#### Shipping profiles and product templates

- Shopify shipping profiles segment which products ship from which regions or suppliers. Multiple profiles allow assigning Supplier A products to specific states and Supplier B products to others (2025) [L0278, 2025].
- The Shipping profiles section has an Add custom profile button for creating an extra profile for specific products, which can have its own zones and rates. Products not assigned to a custom profile stay in the General profile, which is labeled as covering all products not in other profiles [L0798, 2026].
- Under Settings > Shipping and delivery > General profile > Packages, enter package sizes so that carrier-calculated shipping rates are accurate. The Packages field sits in the same profile view as the shipping zones and estimated delivery dates [L0798, 2026].
- Different suppliers have different shipping speeds and require different delivery windows. Create separate product templates for each supplier group, assign the correct template to products, and set estimated delivery to match that supplier's actual timeline [L0139, undated].
- Set a shipping profile for each supplier that lists its made-to-order lead time (see the made-to-order section below) [L0856, 2024].

#### Customs information in Shopify

- The Customs information section in a Shopify product takes a Country/Region of origin, which is usually where the product is manufactured, and an HS (Harmonized System) code that can be searched by keyword. Border officers use these fields to calculate import duties on international orders, and they appear on the customs forms printed during fulfillment. Demo products can skip this section [L0452, 2021-22].

### Shipping Coverage and Geography

#### Alaska, Hawaii and the continental states

Options for Alaska and Hawaii, from the sources, which conflict. Each applies to a different store setup:

| Option | When it applies | Source |
|---|---|---|
| Charge shipping to Alaska and Hawaii; offer free shipping only to the continental 48 states, and state this on the shipping policy (2020) | When you sell to these states at a shipping charge | [L0852, 2020] |
| Exclude Alaska and Hawaii from the free shipping offer (2021) | When free shipping is offered, because free shipping is too expensive to offer there | [L0834, 2021] |
| Exclude Alaska and Hawaii from checkout and do not run ads there (2022); state on the shipping page that quotes for those states are available on request by email | When shipping to these states is not cost-effective | [L1092, 2022] |
| Exclude Alaska and Hawaii from advertising at the start, because shipping costs there differ from the continental US. The continental states generally do not need to be excluded (2025) | When launching ads, to avoid unprofitable regions | [L0966, 2025] |

- For a US store, the shipping region in the shipping policy is set to Continental United States only. Large and heavy items are usually shipped as freight, so the freight option is set to yes for them [L1048, 2020-26].

#### Regional supplier assignment and multi-state profiles

- See regional supplier assignment and shipping profiles above [L0278, 2025].

#### Warehouses in different countries

- When a supplier stocks both a US warehouse and a China warehouse, US stock usually ships faster to US customers. Route orders to US stock where the product is available, and compare delivery times on both warehouses before choosing [L0524, 2023].

#### Unsupported countries

- For a country your supplier will not ship to, check the real shipping cost by entering the item's dimensions, weight and destination address before selling it [L1002, 2019].
- Shipping surcharge test for a country your supplier will not ship to [L1002, 2019]:
  1. Track the actual extra cost per order, for example from reshipping through a relay address, and calculate the average.
  2. Add a surcharge for that country at about the average. Example: average cost $100, surcharge set to $120.
  3. Watch whether orders continue. If they do, the surcharge covers the cost. If they stop, you avoided losing money on shipping.

#### Country-specific notes

- Fast delivery sells more in markets like Spain. Delivering within about 48 hours helps conversion, and cheap prices matter most for buyers there [L0361, 2024].
- Cross-border export: before shipping products from suppliers in other countries to your customers, ask each supplier how it handles export and cross-border shipping, because the process varies by supplier [L0663, 2019].
- For products made abroad with long delivery times, state on the product page where the product is made, what happens after the order, and the estimated delivery time, for example four weeks. Clear disclosure prevents most complaints [L1086, 2019].

### Handling Time, Transit Time and Delivery Estimates

#### Definitions

- Handling time is the number of days between the customer placing an order and the item being processed and ready to ship, not the shipping duration. Dropshippers do not control this, so a single-day handling time is risky and a window should be used instead [L0731, 2021-22].
- Delivery expectations should separate average handling time, average transit time and typical total delivery time, each stated in business days. Giving all three figures sets accurate expectations for large purchases and reduces refund requests caused by surprise delays [L0541, undated].

#### Delivery windows by source

The sources give different windows. Each applies to a different supplier and niche:

| Source | Handling time | Transit time | Total delivery | Applies when | Source ids |
|---|---|---|---|---|---|
| one source, dropshipping store | 1 to 3 days, Monday to Friday only | 1 to 7 days, adjustable over time | Not stated | Most dropshipping stores; very few suppliers ship on weekends | [L0731, 2021-22] |
| one source, in-stock orders | Typically 1 to 3 business days | 1 to 6 business days after shipment | Not stated | In-stock items | [L0556, 2021-22] |
| one source, starting placeholders (no year) | 3 to 5 business days | 3 to 7 business days | 7 to 12 business days | Until supplier timelines are known; can be changed later | [L1048, 2020-26] |
| one source, shipping policy | Dispatch 1 to 2 days, depending on each supplier's cut-off | 1 to 7 days (up to two days dispatch on the long end) | Not stated | Standard parcels; freight takes longer | [L0852, 2020] |
| one source, shipping policy | Dispatch within 48 business hours | 2 to 5 business days | Not stated | General policy average; supplier-specific times go on each product page | [L0469, 2021] |
| one source, example supplier | Supplier needs 2 to 3 days, stated as ships within 72 hours | Tracking follows by email | Not stated | Per-supplier product page, when a supplier needs 2 to 3 days | [L0853, 2021] |

- Do not promise delivery times that are too fast or too slow. Overpromising leads to angry customers when delivery is late, while very long transit times such as 20 to 30 days on average put buyers off [L0731, 2021-22].
- The estimated delivery date shown to customers is calculated from the order time (before or after the order cutoff), the handling time and the transit time. Google adjusts the estimate automatically when a public holiday falls within the delivery period [L0731, 2021-22].
- The order cutoff time in a Merchant Center shipping service is optional. If it is used, set it to the business's local time zone, for example 5 PM in GMT+10 for a business in Brisbane, Australia [L0731, 2021-22].
- Most suppliers should dispatch orders within one to two days. Learn each supplier's daily order cut-off time, since orders placed before the cut-off ship the same day and later orders ship the next day [L0852, 2020].
- Same-day shipping can be offered as an upsell only if the supplier can ship the order by a fixed cutoff time, for example an order placed by noon Eastern time. Suppliers that ship in around three days cannot support this offer without that cutoff [L0923, 2015].
- Record each supplier's time from order submission to dispatch and state it on that supplier's product pages. For example, if a supplier needs 2 to 3 days, tell customers the item ships within 72 hours and that tracking follows by email [L0853, 2021].
- Add processing days to the advertised shipping window. Counting only the advertised shipping days with a supplier underestimates delivery time. Long processing times with a supplier like CJ can lead to angry customers, especially around holidays or long weekends [L0678, 2023].
- Carrier delivery estimates can shift by several days or even a week during the holiday catch-up period, especially with domestic shipping. Set customer expectations around a range and keep the tracking ETA visible rather than promising one fixed delivery date [L0803, 2022].
- Keep the product page estimate for lead time or shipping visible and clear. Customers usually accept longer delivery times when it is stated openly [L0671, 2021].
- Delivery information can be shown as an estimated date range or as typical shipping time. Choose the format that fits your products; custom-made items need different wording than items shipped within 48 hours [L0469, 2021].
- Put a general average shipping time in the shipping policy, such as dispatch within 48 business hours and delivery within 2 to 5 business days. Add the supplier-specific lead time on each product page's shipping tab [L0469, 2021].
- Customers used to fast delivery may see 10 business days as slow, so a 14-day supplier route still carries refund risk. Delivery times of 4 to 6 weeks cause refunds and lasting problems, so avoid those routes [L1108, 2023].
- Fashion dropshipping: keep communication with the supplier very good and make sure products deliver within about 10 days. Slow delivery increases refund and dispute risk [L0660, 2019+].
- Long shipping times can kill viral momentum. Standard dropshipping delivery can take around three weeks, by which time buyers and the seller have often lost interest [L0706, 2020+].
- When shipping times are a problem, check eBay for the same product and consider paying extra for faster shipping. Paying more on CJ Dropshipping or AliExpress has sometimes produced delivery within about one week [L0706, 2020+].
- Customers respond well to fast shipping, so supplier and fulfillment choices should prioritize short delivery times. Fast delivery is a competitive advantage in dropshipping [L0345, 2018].

#### Claims about speed

- Claims of same-day or one-day shipping on dropshipping stores are usually unrealistic, and many stores show three to five days shipping. Plan delivery times and customer messaging around realistic supplier shipping times instead of copying competitor claims [L0372, 2022].
- A competitor stated that most orders are dispatched within 2 hours of being placed. This dispatch-time claim works as a delivery promise. Record stated dispatch times, together with tracking and shipping claims, in the features and deliverables column [L0893, 2021-22].

#### Lead times and long supplier routes

- Lead times of 3 to 6 weeks are acceptable only if your top 2 to 3 competitors have the same lead time. If competitors ship in 24 hours and you ship in 3 to 6 weeks at the same price, customers will buy from competitors. Clearly display the lead time on product pages and confirm it with customers after order placement (2024) [L0253, 2024].
- A supplier with a lead time of several weeks is not automatically a problem if that is standard in the niche. Show the delivery time on the product pages, for example two to three weeks, so customers know what to expect [L0968, 2021].
- Long shipping times are a problem only when they are not standard for the niche. In custom-made product niches, customers accept longer waits, but the custom order process should be clear to buyers before they purchase [L0968, 2021].
- Prefer suppliers with short shipping times. (See the supplier-selection rules above) [L0968, 2021].
- CJ offers about six or seven different shipping methods. Shipping time depends on the supplier and the method agreed [L1108, 2023].
- CJ Sensitive shipping to Australia takes about 7 to 15 days. The speaker used it as the default shipping method for these markets because the delivery time was acceptable to customers [L0661, undated].
- The fastest CJ shipping method typically takes 5 to 11 days when shipping from the US. It costs more than the standard method, so use it only when the extra cost is small [L0661, undated].
- Pay for faster shipping only when the extra cost is small, such as one dollar or a few cents per order. Do not pay several dollars more per order, because it eats up the margin [L0661, undated].

#### Made-to-order products

- Made-to-order products: set a shipping profile for that supplier listing the lead time (for example six to eight weeks), show the ETA by the add-to-cart button, and set the same in Merchant Center. Email each customer after the sale to confirm the made-to-order lead time before sending the order to the supplier (2024) [L0856, 2024].
- Made-to-order fulfillment steps (2024) [L0856, 2024]:
  1. Create a Shopify shipping profile for that supplier that marks items as custom made with the lead time.
  2. Mirror the same shipping lead time in Merchant Center for that brand.
  3. Show a note by the add-to-cart button that the item is made to order with its ETA.
  4. After each sale, email the customer to confirm the made-to-order lead time before the order goes to the supplier.

### Google Merchant Center

- For freight-shipped products in Google Merchant Center, list the shipping method as free shipping with a price of 0 dollars, rather than naming the freight method (2024) [L0471, 2024].
- Google's shipping estimate uses the handling time, transit time and cutoff, and adjusts for holidays. See Handling Time, Transit Time and Delivery Estimates above [L0731, 2021-22].

### Heavy and Freight Items

- For heavy items, avoid real-time shipping calculation in the store. Build the shipping cost into the product price and offer free shipping, provided the product is still profitable [L1068, 2019].
- If real-time shipping is not used for heavy items, a heavy-item shipping surcharge can be added automatically on the product page. For items of 150 to 350 pounds, the surcharge should match the real shipping cost, for example $200 extra for a 350 pound item, and must be checked against actual costs [L1068, 2019].
- For a freight-shipped item, use a freight broker through freightcenter.com, with the supplier providing a freight account or the store creating its own [L0251, 2023].
- Freight shipments should not go through UPS or FedEx, because their rates are too high for large items (2024) [L0971, 2024].
- If a supplier will not ship on its own account, the store must send bills of lading for freight shipments (2025) [L0667, 2025].
- Freight shipments take longer than standard parcels [L0852, 2020].
- Shipping for heavy products can be a large cost. Check the shipping cost and label arrangement before listing (2024) [L0836, 2024].

### Customs, Cross-Border and International Shipping

- See Customs information in Shopify above [L0452, 2021-22].
- Before shipping products from suppliers in other countries to your customers, ask each supplier how it handles export and cross-border shipping, because the process varies by supplier [L0663, 2019].
- Passing international shipping costs to the buyer is possible only if the final price still works for the product [L0852, 2020].
- International UPS shipping is typically very expensive. Check the cost with the supplier's calculator before committing [L0968, 2021].


Part 30 of 51 of "3. Suppliers and Fulfillment: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment.md · Previous: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/29-shipping-setup-policies-and-delivery-expectations.md · Next: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/31-shipping-policy-text.md
