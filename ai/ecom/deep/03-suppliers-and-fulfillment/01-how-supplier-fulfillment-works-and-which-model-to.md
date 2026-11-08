<!-- part of ecom/deep/03-suppliers-and-fulfillment.md -->
Part 1 of 51 of "3. Suppliers and Fulfillment: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment.md · Next: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/02-supplier-tiers-bronze-silver-gold-and-who-to-avoid.md

## How Supplier Fulfillment Works and Which Model to Choose

### Core Order Flow in Drop Shipping

#### The basic fulfillment sequence

In a drop shipping model the store holds no stock. Each customer order triggers a separate order with the supplier, and the supplier ships the goods directly to the customer [L1119, undated].

Fulfillment is the process in which a connected supplier or fulfillment company receives each order, inspects the product quality, packs the product, ships it directly to the customer, and handles after-sales issues such as refunds and returns [L0685, undated].

The standard sequence is:

1. The customer places an order on your store [L0007, 2023].
2. You pass the order information to your supplier or manufacturer [L0007, 2023].
3. The supplier picks and packs the order [L0007, 2023].
4. The customer receives the order at their doorstep [L0007, 2023].

#### Payment and supplier charging

The 2020 Shopify-based flow works as follows:

1. The customer pays on the Shopify store, and Shopify Payments pays the money out within 48 hours [L0664, 2020].
2. Contact the supplier and ask it to ship the specific products to the customer's address [L0664, 2020].
3. The supplier charges your card and ships the item to the customer [L0664, 2020].
4. Confirm with each supplier when it charges the card, because timing differs per supplier [L0664, 2020].

#### Payment and supplier charging

The 2021-22 flow for a single order is:

1. The customer buys the product on the store and pays immediately [L1481, 2021-22].
2. The seller receives the payment in the bank account [L1481, 2021-22].
3. The seller places an order with the supplier for that exact product and asks the supplier to ship directly to the customer's address [L1481, 2021-22].
4. The seller pays the supplier [L1481, 2021-22].
5. The supplier packs and ships the product from its warehouse, and it is delivered to the customer's home [L1481, 2021-22].

### Choosing and Managing Drop Shipping Suppliers

#### Test first, then specialize

Start testing products with dropshipping suppliers such as CJ or Hyper SKU, which allow low-risk testing of many products [L0562, undated]. Move to a dedicated private supplier once a product has proven demand [L0562, undated].

During the testing phase, use two suppliers: AliExpress for sourcing and CJ Dropshipping as the fulfillment provider [L0642, undated]. Switch to a private supplier only once a product is proven [L0642, undated].

When testing a new product, a dropshipping supplier is a good way to start. The cost per unit is higher, but it removes the need to stock inventory before the product is validated [L1315, 2023].

#### Supplier count

Use one main supplier when you plan custom packaging or simple fulfillment. Multiple suppliers mean separate shipments and no saving from combined orders. Switching suppliers later costs time on packaging and branding [L0524, 2023].

A single Shopify store can also be fulfilled by several suppliers at the same time, for example CJ Dropshipping and another supplier. Testing two suppliers on the same product shows which one gives customers the better experience [L1216, undated].

Both approaches are valid. Use one main supplier when packaging and branding matter and shipment consolidation is valuable. Run two or more suppliers on the same product when you need to compare customer experience [L0524, 2023; L1216, undated].

#### Timing and delivery expectations

Do not worry about exact delivery times in the early stage of a product [L1444, 2022]. Once orders grow, find a new supplier before delivery delays become a problem [L1444, 2022].

When order volume grows, move to a private supplier to cut processing and shipping time. A private supplier with about 10 days to delivery was described as a good target [L1444, 2022].

The fulfillment option should be chosen only after the product is validated. Before that, decide on a shipping method with the supplier [L1108, 2023].

#### Products to keep on drop shipping

Keep expensive, high-ticket products on the traditional dropship model if good suppliers already exist. Check how many customers buy them before committing [L0487, 2018]. Private labeling is not needed when strong products are already available [L0487, 2018].

High-ticket dropshipping has three main risks that must be managed: freight cost to get the product into the country, return risk, and damage risk. Managing these three keeps the model viable [L0660, 2019+].

#### Products to avoid

Used or second-hand products should not be sold, because inventory is always limited and the business cannot scale [L0967, 2020].

Understand how suppliers, product sourcing and fulfillment work before choosing products, because they determine how orders reach the customer [L0914, 2026].

### Hybrid Model and Own Warehousing

#### Hybrid model

The hybrid model combines direct dropshipping from suppliers with your own fulfillment center. It is a valid business model. All blueprint teachings apply, but fulfillment operations are a separate business requiring more capital and time. It is not recommended for a first store [L0268, 2020].

#### Early in-house fulfillment

In the early phase, fulfillment can be done in-house with friends and a rented warehouse. This costs less than an outside 3PL. Consider outsourcing once volume grows [L0492, 2023+].

For reference, a warehouse of about 50 square meters in Switzerland cost about 200 per month. Warehouse costs depend strongly on the country [L0492, 2023+].

#### Three fulfillment setups

Three fulfillment setups exist. Each trades off cost, delivery time and capital risk [L1217, 2023+]:

| Setup | Description | IDs |
|---|---|---|
| Single-order dropshipping | Supplier such as CJ Dropshipping or Zendrop ships each order | [L1217, 2023+] |
| Bulk stock in a Chinese warehouse or 3PL | Stock held centrally and shipped from there | [L1217, 2023+] |
| Bulk stock shipped to your own address | You hold the stock and ship it yourself | [L1217, 2023+] |

#### Transit times and market coverage

From a Chinese warehouse, delivery takes about 5-7 days to the US and about 3-5 days to the UK and Europe [L1217, 2023+].

A Chinese warehouse holding bulk stock can ship to the US, UK, Europe, Australia and New Zealand from one stock pool. Managing many SKUs across several markets becomes hard to keep in sync, so this suits a few main products [L1217, 2023+].

Shipping stock to a warehouse in the target country can improve conversion rates compared with shipping from China. Holding stock is only worthwhile while the season continues [L1315, 2023].

#### Benefits of holding stock in a warehouse

A warehouse that holds your stock lowers the risk of bulk buying. Unsold units can be returned, or new stock can be sent quickly [L1217, 2023+]. You avoid waiting weeks for a restock after selling out fast [L1217, 2023+].

#### Third-party logistics providers

Deliver is a 3PL that offers Prime-like 1-2 day shipping. It is only worth using at heavy daily volume from a single country [L1217, 2023+].

ShipBob is a US-based third-party warehousing company used to store and ship stock. The speaker reported poor customer support and unnecessary charges, and planned to test another warehouse, ShipDudes, which is based on the US East Coast [L1315, 2023].

### Amazon FBA

#### When Amazon FBA fits

Amazon FBA is an option for dropshipping if you sell in a limited set of countries. Amazon takes about 30% commission, and customer data is limited [L0637, 2023+]. Consider ordering inventory only with a clear sales forecast from the last 2-3 months [L0637, 2023+].

Amazon offers its own warehousing and third-party logistics services to sellers who use Fulfillment by Amazon. This can reduce handling for sellers who buy inventory in bulk. Inventory decisions still require a clear sales forecast, because the upfront stock is a financial risk [L0637, 2023+].

Amazon can hold your inventory in its fulfillment warehouses and ship customer orders from there. This makes it a practical starting option for a product that you sell on Amazon first [L1154, 2021-22].

#### Amazon FBA workflow

1. Place order with supplier [L0227, 2014].
2. Wait for lead time, typically 4-8 weeks [L0227, 2014].
3. Receive inventory [L0227, 2014].
4. Send products to the Amazon fulfillment center [L0227, 2014].
5. Amazon handles all storage, packing, shipping, customer refunds, and payment processing [L0227, 2014].
6. Receive wire transfer to bank account every 14 days [L0227, 2014].

Your role is marketing and inventory management only [L0227, 2014].

### Pre-order, Made-to-Order and Print on Demand

#### Definitions

Pre-order fulfillment means ordering from the supplier only after the customer has paid, so no stock is bought in advance [L0779, 2023+].

Made-to-ship fulfillment is a production model in which the garment is made and shipped to the customer as orders come in [L0779, 2023+].

Print on demand (POD) is a fulfillment method in which designs are printed onto garments only after an order is placed [L0779, 2023+].

#### Production time and customer communication

Made-to-order and custom products can be sold. Make the production time very clear on the product page, and follow up after purchase so the customer knows the lead time [L0806, 2024].

#### Print-on-demand books

Print-on-demand book suppliers can often customize the cover and the inner content of a book on request. This typically costs little or nothing extra and needs little time. Ask the supplier which customizations they offer before editing anything [L0333, 2026].

#### Personalized products

Personalized products such as custom Christmas ornaments need a designer to create the designs and a personalization form, usually added through a Shopify app. These products are harder to dropship than standard products because they require more setup work [L1185, 2023].

#### Digital products without fulfillment

Digital ebooks need no shipping or stock. Create the PDF with ChatGPT for content, Midjourney for images and Canva for layout. Upload it to the Digital Downloads app so it is delivered to the buyer automatically after purchase. The buyer receives the PDF immediately [L1131, 2018+].

A staged launch of an ebook product works as follows [L1131, 2018+]:

1. Create only one ebook first and run ads to test demand [L1131, 2018+].
2. After the first sale, email the buyer that fulfillment is delayed [L1131, 2018+].
3. Create and send the ebook within two to three days, or the same day if possible [L1131, 2018+].
4. After the first and second sale show demand, create the full ebook range, improve the offer, refine interest targeting and then scale [L1131, 2018+].

### Brand Partnerships as an Alternative

#### How brand partnerships work

Brand partnerships through Karo let you list another Shopify store's product on your own store without holding inventory or handling fulfillment. The order is recorded in both systems and labeled as fulfilled by the brand partner. The model is similar to dropshipping but works like affiliate marketing, where you earn a cut of the sale [L0869, 2021-22].

#### Adding partner products

1. Open Karo's Brand Partnerships side [L0869, 2021-22].
2. Search for another Shopify store in the network that sells a product you want to offer but cannot source from a dropshipping supplier [L0869, 2021-22].
3. Add that product to your store [L0869, 2021-22].
4. When a customer buys it, the order is created in both systems and marked as fulfilled by the brand partner [L0869, 2021-22].
5. The partner handles fulfillment, and you receive a sales commission [L0869, 2021-22].

### Moving Between Models

#### Triggers for moving to a 3PL

Switch a SKU to a 3PL when it sells about 1,000 units per month. Alternatively, switch when it gets at least 10 orders per day for that unit, sustained for at least three weeks [L1217, 2023+].

#### Stepwise progression

1. Start with supplier dropshipping, for example CJ Dropshipping or Zendrop, while you are still testing products [L1217, 2023+].
2. When a product reaches about 5-10 orders per day, move it to a personal agent that has a minimum volume requirement [L1217, 2023+].
3. When a SKU reaches about 1,000 units per month, or about 10 orders per day for at least three weeks, move it to a 3PL with bulk stock [L1217, 2023+].
4. For stock arriving by sea, project needs about 20-30 days ahead and reorder accordingly [L1217, 2023+].

#### Moving to a private supplier or own warehousing

Once a product has proven profitable, consider moving to a private supplier or your own warehousing [L1315, 2023]. Use this step only after validation, because the upfront commitment is larger than with dropshipping [L1315, 2023].

#### Moving from drop shipping to a private supplier

When order volume grows, move to a private supplier to cut processing and shipping time [L1444, 2022]. Find the new supplier before delivery delays become a problem [L1444, 2022].


Part 1 of 51 of "3. Suppliers and Fulfillment: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment.md · Next: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/02-supplier-tiers-bronze-silver-gold-and-who-to-avoid.md
