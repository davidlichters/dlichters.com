<!-- part of ecom/deep/07-offers-pricing-and-bundles.md -->
Part 8 of 40 of "7. Offers Pricing and Bundles: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles.md · Previous: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/07-pricing-products-from-suppliers-without-map.md · Next: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/09-price-testing-and-price-changes.md

## Deciding which products get ad spend

### Margin gate before any ad spend

- Paid traffic goes only to products where enough money remains after supplier cost. The core test is that cost of goods must be no more than half of MAP, so at least 50 percent of MAP is left after cost. [L0359, 2020]
- MAP must be at least 2X wholesale before a product is advertised. below that, sell the product only through free traffic, and give ads only to products with enough margin to cover ad spend. [L0963, 2022; L0429, 2022]
- if the gap between MAP and cost of goods is only about 30 percent, the product is usually not worth listing. Ask the supplier for a higher margin first, and expect to pass if the supplier refuses. [L0247, 2021]
- if the gap between wholesale and MAP is about 20 percent or less, keep the product on the site but run no paid traffic, because paid traffic makes profit almost impossible at that margin. [L0663, 2019]
- if margins after shipping are only about 10 to 15 percent, keep the product listed but stop advertising it. If competitors seem to advertise it profitably, ask your supplier for a different price sheet. [L0663, 2019]
- Products with margins under 10 percent, or below your goal (for example under 25 percent), do not need to stay on the store. Remove them, apply a higher markup (knowing they will likely not sell), or keep only the high-margin variants from that supplier. [L0253, 2024]
- Healthy margins are 25 to 30 percent or higher. [L0255, 2025]
- Check the spread before adding a product. If the gap between wholesale cost and MAP is too narrow to cover heavy-item freight and advertising, do not list it. [L0667, 2025]
- If the spread between MAP and wholesale is too small to cover shipping and ads, run no paid ads on that product. Rely on free traffic for it, or negotiate better wholesale prices first. [L0966, 2025]
- use the after-shipping spread of each product to decide where ad money goes. Push products with the most money left after shipping, and reduce spend on thin-margin products. [L0854, 2022]

**Quick reference**

| Signal | Action | Source ids |
|---|---|---|
| MAP at least 2X wholesale (cost at or below 50% of MAP) | Eligible for paid ads. Below this, free traffic only. | [L0359, 2020; L0963, 2022; L0429, 2022] |
| Gap of about 30% between MAP and cost | Usually not worth listing. Ask for a higher margin; pass if refused. | [L0247, 2021] |
| Gap of about 20% or less | Keep on site, no paid traffic | [L0663, 2019] |
| 10 to 15% after shipping | Keep listed, stop advertising | [L0663, 2019] |
| Under 10%, or below a 25% goal | Remove, raise price, or keep only high-margin variants | [L0253, 2024] |
| About 9% after product cost and merchant fees | Remove or raise price; no room for ads | [L1281, 2022] |
| 25 to 30% or higher | Healthy; prioritise ad budget by gross margin dollars | [L0255, 2025] |

- The sources disagree on the 30 percent and 20 percent gaps. The 2021 advice would pass on a 30 percent gap when deciding whether to list a new product. The 2019 advice keeps a 20 percent gap product on the site. Both agree that the product gets no paid traffic. Read the 2021 rule as the test for new listings and the 2019 rule as the treatment for products already on the store. [L0247, 2021; L0663, 2019]
- Both the 30 percent gap and the 20 percent gap sit below the 50 percent line in the core test, so neither qualifies for ads. [L0359, 2020; L0247, 2021; L0663, 2019]

### Price and profit floors for paid traffic

- do not list products below a minimum profit of $200, even from brands from suppliers you already have approved. Focus selling only on the products from those suppliers that meet the profit threshold. [L0245, 2020]
- Do not spend on ads for products priced under $200. Exclude them from ad campaigns and use them only as upsells or cross-sells. [L0359, 2020]
- Filter products by net profit per sale, not by revenue or percentage margin alone. Products with a low dollar profit should be excluded from ad campaigns even if they sell well. [L0856, 2024]
- Choosing a minimum net profit threshold is a business decision. Use a fixed dollar amount of net profit per sale (for example $200 or $300) rather than a percentage, and base it on supplier margins and historical sales. The threshold is not universal. [L0856, 2024]
- A low-priced product (for example $100) with a moderate percentage margin still yields little profit per sale. Consider excluding products under a set price point from paid campaigns, unless they are add-ons. [L0856, 2024]
- Products priced below a set point (for example under $1,000) can be excluded from alpha and beta campaigns, so the budget goes to higher-value items. [L0856, 2024]
- Products priced between $3,000 and $5,000 are still eligible for paid ads when their margins meet the criteria. Measure conversion rates for these products on their own. [L0970, 2023]
- do not pay for traffic to low-price products that are too small to earn back ad costs. Keep them on a high-priced store as free bonuses instead. [L1002, 2019]
- Facebook scaling depends on profit per sale. Tests of offers, price, upsells and average order value raise profit. The product must earn enough margin that return on ad spend stays profitable even when it drops. [L0995, 2023]
- How to read the dollar figures: $200 is the floor in the sources, both as minimum profit for products from approved brands and as the minimum price for ads. $300 and $1,000 are examples of stricter cut-offs for a store that has its own sales history. Set your own figure from supplier margins and past sales. [L0245, 2020; L0359, 2020; L0856, 2024]

### Ad spend cap as a share of MAP

- Spend up to 10 percent of MAP on paid ads per sale. For a $1,000 MAP, the maximum is $100 in ads per sale. [L0359, 2020]
- ad spend per sale should be capped at about 10 percent of MAP. For example, the spend limit on a $600 sale is $60. Anything higher leaves too little margin for operating costs. [L0967, 2020]
- Check the required return before scaling. With a 30 to 35 percent supplier discount and shipping still paid, reaching 20 percent profit required a ROAS of about 12 to 14, which is unrealistic for most stores. Fix margins in pricing or supplier terms before scaling paid traffic. [L0807, 2025]

### Organic-only products

- Products priced around $100 to $150, with a net profit of about $50, can go on an organic-only collection. Promote them through email and social promotions for events such as Black Friday or the 4th of July, instead of paid traffic. [L0359, 2020]
- a supplier promotion of 30 percent off is tricky for dropshipping, because little profit remains after shipping and ad costs. Sell such products through organic traffic, not paid ads. [L0551, 2020]
- Selling above MAP is reasonable only for products that receive organic traffic only. Never put paid ads behind products sold above MAP. (Older advice, 2021; this statement merges two identical units.) [L0671, 2021]
- For discounts on products that cannot be matched on price, do not advertise them. Keep them on the site only if they support the store, and spend the budget on products you can compete on. [L0968, 2021]
- Exclude low-margin products from discounts, coupons and free-shipping promotions, and do not spend paid traffic on them. Rely on free traffic for those sales, and put the paid budget toward products with more profit. [L0968, 2021]
- For low-margin products that are not profitable to advertise, follow this procedure:
  1. Still list the product on the store.
  2. Do not spend money on paid advertising for them.
  3. Rely on organic and free traffic.
  4. If someone finds and purchases organically, margin is still captured. [L0255, 2025]

### Google Shopping rules for low-ticket and add-on items

- for low-ticket items, do not spend money on Google Shopping campaigns. Include them in Google free product listings to get organic visibility without ad spend. [L0249, 2022]
- accessories sold individually should be removed from Google Shopping ad campaigns but kept in Google Merchant Center for free product listings. Charge shipping for items under a certain threshold (for example $100), rather than offering free shipping. [L0249, 2022]
- accessories priced above $200 can be tested in Google Shopping campaigns. Monitor them so they do not consume the budget meant for the more expensive core products, and lower cost-per-click for them if needed. [L0665, 2022]
- Read the two 2022 accessory rules together. Individually sold accessories come out of Shopping ([L0249, 2022]). The exception is accessories above $200, which may be tested under monitoring ([L0665, 2022]). [L0249, 2022; L0665, 2022]
- if a product's margins become too thin after paid ad costs, remove it from your Google Shopping product feed to avoid wasting budget. Keep it in your catalog for free organic traffic (Google organic search and non-paid Google Product Listings). [L0272, 2022]
- If competitor listings are priced differently across product tiers, first check whether the higher tier gets impressions, clicks and sales. If it does not, raise the CPC for that tier, or give each tier its own alpha and beta campaign with its own feed. [L0470, 2023]
- For the lowest-margin supplier's products, raise prices by 20 percent. Exclude those products from Shopping ads, so ad spend does not compete against sellers charging 20 percent less. Keep them on the store, where they add credibility and still sell if customers find them. [L1097, 2025]

### Campaign budgets and bids

- start new Google ad campaigns at $10 to $30 per day, not $50 to $100. Raise the budget step by step (for example $30 to $50, then $80 or $100) only when return on ad spend stays well above the target of at least 10x. [L0665, 2022]
- per-day Google ad budgets should follow profitability. A store on $70 per day should first prove profitability at $30, then at $50, then at $70. [L0665, 2022]
- If high-price products get no impressions while low-price products get heavy traffic, test lowering CPC on the cheap products (for example from 50 cents to 35 cents). Budget then reallocates naturally to the higher-price products. Alternatively, increase CPC on the high-price products. [L0274, 2023]
- Each product in a Google Shopping campaign should start with the same bid, for example $0.50 CPC. Change bids for each product individually once data shows which products have the best margins and sales. Do not change bids for all products at once. [L1114, 2023]
- Low-margin products that take heavy ad spend should get a lower CPC, such as $0.30. High-margin products that get clicks but not enough traffic should get a higher CPC, such as $0.75. This is an ongoing process of adjusting bids to find the most profitable level. [L1114, 2023]
- With healthy margins of 25 to 30 percent or higher, prioritise the paid advertising budget on products with the highest gross margin in dollar amounts, not just percentages, to maximise return on ad spend. [L0255, 2025]

### Excluding thin-margin products

- Upload only the products you want to sell from a supplier catalog. Skip those with too little margin, even if the supplier lists them. [L0962, 2021]
- Do not list products that competitors sell at a loss, and do not list products whose margin is negative at MSRP. They are not worth the time. (Older advice, 2021; this statement merges two identical units.) [L0671, 2021]
- If a supplier requires an inquire-only button and no cart, do not list its products. Google Shopping ads need products that can be bought directly. [L0671, 2021]
- Products whose competitor price is only slightly above wholesale cost, leaving no real profit, should not receive Google ad spend. [L1069, 2019]
- Do not price-match a supplier's MAP products when the margin will not cover it. If ads cannot be afforded at that margin, rely on free traffic sources instead of cutting prices to break-even. [L0853, 2021]
- Older advice: when an order's net margin is very thin, you can raise the product price, start charging for shipping, slow down ad spend on that product, or remove the product from the store. Shipping costs can sometimes almost equal the product cost, so this situation is expected to appear from time to time. [L1201, 2021-22]

### MAP enforcement and non-MAP suppliers

- MAP enforcement by suppliers matters more than the margin figure alone. Products from MAP suppliers can be given ad budget. Non-MAP products should rely on organic traffic. [L0429, 2022]
- Some brands set different MAP prices for stocking and non-stocking dealers. If you cannot match the required price, keep those products on the site without paid ads, and do not spend budget trying to compete on price. [L0968, 2021]
- For suppliers without MAP enforcement, follow this procedure:
  1. Remove products that show only about 9 percent margin after product cost and fees, or raise their price until the margin is acceptable.
  2. Products with about 20 percent or more margin that you match against competitors can stay listed for organic and free Google traffic, but remove them from paid Shopping campaigns.
  3. Include in paid Shopping campaigns only the products with strong margins. [L1281, 2022]
- After product cost and merchant fees, the margin must still leave room for an ad budget. A product with a margin of about 9 percent has no room for ads at all. [L1281, 2022]

### Negotiating supplier terms to improve margins

- Negotiating cost of goods with a supplier is a direct way to increase margins when a product's numbers do not work at the current price. [L0855, 2023]
- Wholesale pricing often has tiered structures based on sales volume. When contacting suppliers, ask whether they have different pricing tiers where you save on wholesale cost based on units sold or annual volume. This opens the negotiation without requiring you to commit or prove yourself first. [L0251, 2023]
- When you need a better price, ask for the exact price you want. Suppliers often do not expect the request and will frequently comply. Phrase any cancellation threat in a friendly, non-threatening way, since most suppliers also want to keep a profit. [L1472, 2022]
- Before offering discounts on products with thin margins, renegotiate the supplier pricing first. Discounting a product with a small margin does not fix the margin problem. [L0960, 2019]
- Skip a supplier that offers only about a 10 percent discount after a minimum purchase, because that leaves too little margin for drop-shipping. [L0469, 2021]
- For low-margin products that cannot carry an ad budget, follow this procedure:
  1. Ask the supplier for tiered or incentive wholesale pricing, framed as a request for better pricing on specific products rather than a complaint.
  2. Keep products with some margin in the store and list them in free Google product listings.
  3. Run ads only for products whose margin supports the ad cost. [L0470, 2023]


Part 8 of 40 of "7. Offers Pricing and Bundles: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles.md · Previous: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/07-pricing-products-from-suppliers-without-map.md · Next: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/09-price-testing-and-price-changes.md
