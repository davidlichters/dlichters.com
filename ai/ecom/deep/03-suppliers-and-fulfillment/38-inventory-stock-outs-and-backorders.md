<!-- part of ecom/deep/03-suppliers-and-fulfillment.md -->
Part 38 of 51 of "3. Suppliers and Fulfillment: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment.md · Previous: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/37-zapier-automation-for-email-orders.md · Next: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/39-backorders-and-customer-communication.md

## Inventory, Stock-Outs and Backorders

### Tracking top sellers

#### Scope: track only the products that matter

- Only track inventory for the top sellers. Most suppliers rarely go out of stock, so tracking every product live is not needed. [L0671, 2021]
- About 80% of sales typically come from about 20% of products, so focus inventory checks on those top sellers. [L0671, 2021]
- Example: out of 1,000 products, about 200 may sell consistently, and about 10% of those, roughly 20 products from suppliers with weak stock, need close inventory monitoring. [L0671, 2021]
- If stock runs low for a frequently sold item from a supplier with weak stock, update its product pages to show the low inventory. [L0671, 2021]
- Typically 20% or fewer of the products uploaded to a store sell consistently, and those are the ones that need close inventory monitoring. [L1069, 2019]
- Track best sellers, which are typically about 20 percent of products and produce about 80 percent of sales. If they run low, update stock manually on the website, since automated inventory sync is not required for the whole catalog. [L1088, 2020]
- Concentrate inventory monitoring on the top 20% of products, which produce about 80% of sales. Update product pages only when a top seller is sold out or about to sell out. [L1111, 2020]
- Track inventory only for proven bestsellers where stock-outs have historically been a problem, not across the whole catalog. For those items, check supplier stock and update product pages accordingly. [L0808, 2026]
- Inventory tracking: for most products, back-order status is updated manually. Only the top 20 percent of products by sales should be tracked more closely, with inventory updated when stock drops. (2024) [L0856, 2024]
- Track inventory only for the top 20 percent of products that drive about 80 percent of sales. When those best sellers run low, update the product page delivery note and adjust ad budgets. (2024) [L1285, 2024]
- Real-time inventory tracking is not practical for a dropship store. Monitor stock levels only for your best-selling products. (2025) [L0966, 2025]
- Real-time inventory tracking is not needed for most dropship stores, because suppliers rarely offer a uniform inventory feed. A supplier inventory tool is only worth looking into if certain suppliers keep running out of stock. (2023) [L1114, 2023]
- Inventory syncing with supplier systems is usually not worth it because it requires many workarounds. Instead, monitor inventory only for the top 20 percent of products that generate most of the sales, and do not sync the rest in real time. (2023) [L1283, 2023]
- Track inventory for your best sellers instead of trying to automate stock sync across dozens or a hundred suppliers, because full automation has rarely been worth the effort. (2021) [L0968, 2021]
- Full inventory sync with suppliers is not used in the source business. Check supplier stock manually about once a week only for brands from which you sell many SKUs. (2021) [L0962, 2021]
- There is no automated inventory sync from suppliers. Update product pages manually only for best-selling products, using the inventory sheets suppliers send, and mark them out of stock or back-ordered with a date. (2021) [L1279, 2021]
- Ask each supplier which products are its best sellers, and focus marketing on those products. [L1069, 2019]
- Stores with 3,000 or more products often sell only 100 to 200 of them repeatedly. Focus inventory monitoring on products that sell consistently, and skip the rest, including items that have not sold yet. (2020) [L0358, 2020]
- Monitor inventory levels of your best-selling products closely, especially during supply disruptions. Remove a product from ads once its stock falls to roughly 10 units or less, and add it back once the stock is restocked. (2020) [L0358, 2020]

#### Procedure: manage a large catalog

1. Identify the products that get ad impressions, clicks and actual sales. (2021) [L0968, 2021]
2. Build a list of your best sellers, roughly the top 20 percent. (2021) [L0968, 2021]
3. Monitor stock for those products closely. (2021) [L0968, 2021]
4. When stock runs low, state it clearly on those product pages. (2021) [L0968, 2021]

#### Procedure: identify and monitor the top 20 percent

1. Identify the top 20 percent of products that generate about 80 percent of sales. (2020) [L0468, 2020]
2. Collect the inventory report from each supplier for those products. (2020) [L0468, 2020]
3. When a top product runs out or runs low, update the product page manually. (2020) [L0468, 2020]
4. Leave the rest of the catalog on the regular inventory cycle. (2020) [L0468, 2020]

#### What to watch when supply is disrupted

- During supply disruptions such as factory closures, products with low inventory or no spare stock may sell out for a period. Check stock on your best-selling products first. (2020) [L0961, 2020]
- Demand for home gym and workout equipment spiked during the 2020 COVID-19 lockdowns, and popular items sold out quickly. Factory backlogs from the Chinese New Year shutdown, plus port congestion, can cause best-selling products to run out of stock for weeks or months. (2020) [L0358, 2020]
- Running out of inventory means no sales and no income, so the seller must monitor stock levels closely. This matters even more when the order is large and the sales cycle is long. [L1153, 2016]
- Request a stock list from each supplier you sell heavily, showing inventory for every SKU, since many send these weekly anyway. Use the stock levels to decide how much to advertise each product. (2020) [L0961, 2020]

### Getting stock updates from suppliers

#### Find out how each supplier reports stock

- Ask suppliers how they share stock information, for example through a weekly stock email or a dealer portal login. (2021) [L0968, 2021]
- Ask each supplier how they communicate stock levels: a dealer portal you log into, a weekly inventory spreadsheet, or a shared Google Sheet that updates automatically. Each supplier works differently, so confirm this for every one. (2024) [L1285, 2024]
- Inventory tracking is not automated across brands because every supplier uses a different method, such as weekly spreadsheets, a dealer portal or email. Record each supplier's inventory check method in a shared sheet so staff can follow it. (2020) [L1111, 2020]
- Track how you check inventory with each supplier (daily update, weekly file, online portal, or email request) and document this in a list your team can access. Procedures vary by supplier; normalize them for consistency. [L0272, 2022]
- Do not send your own spreadsheet of products to a supplier and ask them to fill it in; ask the supplier which inventory report they already produce. Some suppliers send weekly or biweekly inventory emails, some send monthly ones, and others offer a members area. (2020) [L0468, 2020]
- The inventory report should show units in stock, units on reorder and the date the reorder arrives. Ask whether the supplier can copy you on an existing report or create one for you. (2020) [L0468, 2020]
- Ask suppliers for stock availability by email, for example asking whether a given SKU is in stock. Each supplier explains its order process when you are approved. (2021) [L0962, 2021]
- Multi-supplier inventory apps require consistent, reliable data from every supplier. Spreadsheets sent weekly are workable, but supplier dealer portals that show inventory often cannot provide real-time inventory feeds. (2023) [L0835, 2023]

#### Procedure: ask for the right inventory feed

1. Ask whether the supplier has a dealer login showing real-time inventory. (2023) [L0964, 2023]
2. If not, ask whether they send a weekly stock spreadsheet. (2023) [L0964, 2023]
3. If they have no way to share it, ask whether they can send low-stock alerts. (2023) [L0964, 2023]
4. Adapt to what each supplier already has rather than sending a template. (2023) [L0964, 2023]

#### Procedure: keep availability accurate when suppliers send updates only on request

1. Ask the supplier whether it has an online dealer portal or weekly inventory report that shows stock levels. (2024) [L1115, 2024]
2. If the supplier provides a weekly spreadsheet, use it to decide which products to exclude from ads. (2024) [L1115, 2024]
3. Re-check stock levels before any new ad spend is allocated. (2024) [L1115, 2024]

#### Procedure: weekly reports for top sellers

1. Request weekly inventory reports from all suppliers in Google Sheets or Excel format. (2020) [L0268, 2020]
2. Include SKU numbers and quantity available. (2020) [L0268, 2020]
3. For best-selling products (top 20% of products), manually update product pages when inventory runs low or item backordered. (2020) [L0268, 2020]
4. Don't use real-time automated inventory tracking for all products; 80/20 rule applies. (2020) [L0268, 2020]

#### Email updates and check frequency

- Ask every supplier to add you to their inventory update email list. Keep this list in use so you know about stock changes before customers place orders. (2020) [L0852, 2020]
- Do not contact suppliers daily for inventory updates if it is not necessary; instead request a batch update at a set frequency (e.g., daily at noon, or weekly on Monday/Friday) to integrate into their normal schedule. (2020) [L0245, 2020]
- Supplier updates such as discounts, discontinued items and new SKUs usually arrive by email from your supplier contact, sent to all retailers. Some suppliers also provide a members area, so ask your contact how to be notified of changes. (2024) [L0965, 2024]
- Suppliers usually announce discontinuations and new price lists by email, so track supplier emails rather than checking all products each week. Check inventory only for best sellers from suppliers known for stock shortages. [L1281, 2022]

#### Supplier stock timing and lead times

- A supplier's stock timing should come from real ETAs (for example a container on the water with a fixed warehouse arrival date) before accepting orders for backordered items. [L0359, 2020]
- When stock is short, supplier lead times can stretch to 6 to 12 months. Check current availability before you commit to building a store around a product. [L0949, 2021-22]
- Before bulk ordering, track current stock and project sales so you know when the next order must be placed. Because the lead time is 20-30 days, the reorder date must be calculated ahead of time. [L1217, 2023+]

#### Do not rely on the feed alone

- A supplier's system can show stock that does not exist, so do not rely on the inventory feed alone for an order. Verify stock directly with the supplier before you sell or promise delivery. (2026 source; see also case [L1472, 2022]) [L1472, 2022]

### Out-of-stock handling on product pages and in ads

#### Stock thresholds for ads: the sources compared

The sources set different thresholds. Each row shows when that rule applies. Use the threshold that matches the ETA you actually have.

| Source | ETA or situation | Ads | Product page |
|---|---|---|---|
| [L0468, 2020] (2020) | No close restock date | Turn ads off | Not stated |
| [L0468, 2020] (2020) | About 1-2 weeks | Keep running ads | Show expected ship date |
| [L0666, 2024] (2024) | 2-3 week ETA | Keep running ads and selling | Note on back order with estimated ship date near Add to Cart |
| [L0808, 2026] (2026) | About 2-3 weeks | Keep advertising and selling | Note showing the backorder and ETA (short ETAs only) |
| [L0805, 2024] / [L0805, 2024] (2024) | About 2-3 weeks from warehouse arrival | Keep running ads | Show expected ship date |
| [L1111, 2020] (2020) | 2-3 weeks | Keep ads running | Show shipment ETA |
| [L1111, 2020] (2020) | 8 weeks or more, or no ETA | Remove from ad campaigns | Not stated |
| [L0835, 2023] (2023) | About 2 weeks | Keep selling | Show ETA on order page |
| [L0835, 2023] (2023) | About 3 months or no ETA | Stop paid traffic | Keep page live with out-of-stock notice and list in-stock similar products |
| [L0808, 2026] (2026) | No ETA, or 2 months or more | Stop advertising | Note that the product is out of stock until a given date (do not set inventory to zero) |
| [L0965, 2024] (2024) | 3 weeks or more | Stop ads, do not remove product | Note with out-of-stock status and ETA |
| [L1277, 2020] (2020) | Backorder longer than about 3 weeks | Pause ads | Not stated |
| [L1277, 2020] (2020) | Backorder with no clear date | Delete from Google Shopping | Not stated |
| [L1115, 2024] (2024) | Longer than about 2-3 weeks | Reduce ad spend until about 2 weeks before restock | Not stated |
| [L1115, 2024] (2024) | Several months, or no ETA | No paid ad budget | Not stated |
| [L1113, 2022] (2022) | ETA within 3-4 weeks | Keep selling when out of stock is unchecked | Clear out-of-stock note with ETA; email buyers that item is backordered |
| [L1113, 2022] (2022) | Longer ETA | Set Google Shopping cost per click to zero | Set inventory to zero, and zero stock for all variants |
| [L0666, 2024] (2024) | A couple of months | No paid traffic; lower cost per click to 1 cent | Keep product with back-order note and ETA date |
| [L0834, 2021] (2021) | Long backorder | Stop ads | Restart a few weeks before next shipment arrives |

Where the sources disagree on the 2-3 week and longer ranges, the nearest-matching row applies. The 2026 advice ([L0808, 2026]) is the most recent instruction for setting inventory to zero, and it conflicts with the 2022 advice ([L1113, 2022]).

- A backorder of more than 2-3 weeks calls for sharply reduced ad spend on that product; the lead time itself is usually the same for every store selling the item because they ship from the same warehouse. (2024) [L0805, 2024]
- Stop advertising products that are backordered for long periods, and restart ads a few weeks before the next shipment arrives. (2021) [L0834, 2021]
- Reduce ad spend on a product when its supplier backorder is longer than about 2 to 3 weeks, and keep it reduced until it is about two weeks from being back in stock. Products with no ETA or a backorder of several months should receive no paid ad budget. (2024) [L1115, 2024]
- Turn off ads for a backordered product when there is no restock date that is reasonably close. If the backorder is about one or two weeks, keep running ads and show the expected ship date on the product page. (2020) [L0468, 2020]
- If an out-of-stock product has an ETA of about 2 to 3 weeks, keep advertising and selling it and add a product page note showing the backorder and the ETA. Do this only for items whose ETA is short. (2026) [L0808, 2026]
- If an out-of-stock product has no ETA or an ETA of two months or more, stop advertising it. Do not set its inventory to zero; instead, add a note on the product page saying it is out of stock until a given date. (2026) [L0808, 2026]
- When a product is out of stock with a restock ETA of 2 to 3 weeks, keep the ads running and show the shipment ETA on the product page. When the restock is 8 weeks or more away, or no ETA is known, remove the product from ad campaigns. (2020) [L1111, 2020]
- When a product is out of stock everywhere, pause paid ads for that product and add a backorder note with the date on each product page. Keep the product listed so the status is visible, and do not remove the supplier immediately. (2020) [L0852, 2020]
- Products with a long lead time mean ads stay off; see the procedures below. [L0965, 2024]
- Update a product page's lead time only when a popular product is back-ordered or out of stock for an extended period, such as three weeks. Do not update every ETA regularly. (2021) [L0469, 2021]

#### Procedure: long backorder (8-10 weeks) in a multi-campaign Google Ads setup

1. Do not stop all ads; only reduce the default cost per click for the affected products in the alpha/beta campaigns. (2024) [L0805, 2024]
2. Keep reducing ad spend on those products until they are about 2-3 weeks away from being back in stock, then restore it. (2024) [L0805, 2024]
3. Keep selling the backordered products; directly under the add-to-cart button, show a note that the product is out of stock with an estimated ship date. (2024) [L0805, 2024]
4. After a purchase of a backordered item, send an order confirmation email to the buyer asking them to confirm they saw the backorder note and accept the estimated ship date. (2024) [L0805, 2024]
5. If the item is only a few weeks from arriving at the supplier warehouse (e.g. 2-3 weeks), keep running ads and just display the expected ship date on the product page. (2024) [L0805, 2024]

#### Procedure: backorder of about 2 to 3 weeks

1. Keep the ads running and keep selling the product. (2024) [L0666, 2024]
2. On the product page near the Add to Cart button, add a text block stating that the product is on back order and giving the estimated shipping date. (2024) [L0666, 2024]
3. After the order comes in, manually email the customer to confirm the ETA for shipping. (2024) [L0666, 2024]

#### Procedure: backorder of a couple of months

1. Keep the product on the site with a back-order note showing the ETA date. (2024) [L0666, 2024]
2. Do not run paid traffic to it. (2024) [L0666, 2024]
3. In the campaigns, lower the cost per click to 1 cent so no real spend goes to it. (2024) [L0666, 2024]

#### Procedure: long backorder with a longer lead time, three weeks or more

1. Stop running ads for the product, but do not remove it from the store. (2024) [L0965, 2024]
2. Add a note on the product page stating that the product is currently out of stock and giving the ETA for shipment. (2024) [L0965, 2024]
3. If a customer still orders organically, email them after the order to confirm they accept the ETA. (2024) [L0965, 2024]
4. Restart ads about two weeks before the product is expected to be back in stock. (2024) [L0965, 2024]

#### Procedure: out-of-stock product with no ETA

1. Cut paid ad spend for the product page. (2024) [L1115, 2024]
2. Add a note next to the add-to-cart button saying the item is out of stock and showing the ETA if one is known. (2024) [L1115, 2024]
3. Keep the page live so free organic traffic can still arrive. (2024) [L1115, 2024]
4. Below the note, show a section with similar products that are in stock and ship within 24 hours, so organic visitors can still buy. (2024) [L1115, 2024]

#### Procedure: ETA of about two weeks, three months, or none

1. If the supplier gives a restock date about two weeks away, keep selling and show the ETA on the order page. (2023) [L0835, 2023]
2. If the product will be out of stock for about three months or has no ETA, stop running paid traffic to it. (2023) [L0835, 2023]
3. Keep the product page live with an out-of-stock notice, and list similar products that are in stock. (2023) [L0835, 2023]
4. When the product is almost back in stock, promote it again. (2023) [L0835, 2023]

#### Low-stock thresholds for top sellers

- Monitor inventory levels of your best-selling products closely, especially during supply disruptions. Remove a product from ads once its stock falls to roughly 10 units or less, and add it back once the stock is restocked. (2020) [L0358, 2020]
- When a fast-selling product runs low at the supplier, update its product page manually to a back-order status with the expected date and an option to place a deposit. Inventory updates from the supplier are not synced automatically and must be handled by hand. [L1069, 2019]
- Back-in-stock notification apps can be used to let customers sign up for alerts when a product returns. [L1113, 2022]
- Check stock on your best-selling products first, and remove them from ads when stock runs low. [L0961, 2020]

#### Product page display rules

- Do not display the stock count on the product page for a backorder of 8-10 weeks, because a visible number such as three in stock makes buyers assume it ships immediately. (2024) [L0805, 2024]
- Show the expected ship date on product pages for out-of-stock or backordered items, and link to similar in-stock products that ship within about 24 hours. Never display a normal shipping time on a product that is actually backordered for weeks. (2020) [L1277, 2020]
- Do not hide, unpublish or delete out-of-stock product pages that will return. Keep them live, state the back-order status and expected return date, and block ordering, because removing pages hurts SEO. (2021) [L1279, 2021]
- Update product pages only when a supplier reports a change, not on a fixed weekly or monthly schedule. (2026) [L0808, 2026]

#### Zero inventory and Google Merchant Center

- Marking products as sold out with zero inventory while customers can still buy them can lead Google to suspend a Merchant Center account. The store then cannot advertise its products until the problem is fixed. (2021) [L0853, 2021]
- Set inventory to zero only when the product is not orderable. The 2022 rule sets inventory to zero for longer ETAs and zeroes all variants [L1113, 2022]. The 2026 rule keeps the product listed with an out-of-stock note and does not set inventory to zero (2026) [L0808, 2026]. Both can apply: the 2026 rule governs the note and ordering, and the 2022 rule governs the zero setting when the product cannot be ordered.


Part 38 of 51 of "3. Suppliers and Fulfillment: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment.md · Previous: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/37-zapier-automation-for-email-orders.md · Next: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/39-backorders-and-customer-communication.md
