<!-- part of ecom/deep/06-conversion-optimization.md -->
Part 24 of 40 of "6. Conversion Optimization: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/06-conversion-optimization.md · Previous: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/23-collecting-and-displaying-reviews.md · Next: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/25-rules-against-fake-urgency.md

## Urgency, scarcity and promotions

### Why urgency and expiring offers work

- Expiring coupon codes create urgency and force the visitor to decide. They convert better than permanent discount offers. [L0137, undated]
- Expiration forces a binary choice: claim the discount now or risk missing it. This reduces hesitation and speeds up purchase decisions. [L0137, undated]
- In one store, expiring coupon codes doubled sales compared with non-expiring coupons. Introducing coupons without expiration first raised sales by 30%. [L0137, undated]
- Most potential customers decide within two to three days. An expiring coupon accelerates that decision, and estimated delivery dates reduce hesitation and support questions. Both substantially increase conversion rates. [L0139, undated]
- Most visitors decide within two to three days of first finding a store, though some buy immediately and others take much longer. [L1192, 2020-26]
- Visitors are often distracted by other tabs, devices, messages and competitor sites, so they postpone buying. A visible deadline pushes visitors who are close to buying to decide during the visit. [L0531, 2020-26]
- Visitors who arrive from searches for the exact products being sold are already near a purchase decision. A time-limited offer shown at that moment shortens the time between interest and buying. [L0531, 2020-26]
- An expiring coupon on the product page displays a deadline and pushes visitors to decide now rather than postpone. [L1192, 2020-26]
- Urgency should come from the link between the customer's problem and the solution, not from invented scarcity. Discounts, limited stock and time-limited offers create urgency only up to a point. [L0396, 2021-22]
- The strongest urgency comes from the customer's problem: show that the product solves it now and that the purchase is the only step left. Stores with products people genuinely want usually need no countdown timers or fake scarcity. [L0473, 2021-22]
- twice-weekly coupon codes expiring in 2 to 3 days create urgency on product pages, and most first-time visitors decide within that timeframe. [L0249, 2022]

### Which products suit expiring codes

- Expiring codes suit high-ticket products that customers buy only every few years, because about 90% of site visitors are first-time visitors who have never seen the code. [L0531, 2020-26]
- For low-ticket recurring products with many repeat visitors, the same code seen again and again is likely to work less well. [L0531, 2020-26]
- Use scarcity only when it is genuine, and use it sparingly. If a product is always on sale or sales run every week, repeat visitors stop reacting to urgency. [L1522, 2021-22]
- The average e-commerce customer has about seven touchpoints before buying, so many shoppers return several times. A scarcity message that stays on the page for weeks loses credibility. [L1522, 2021-22]

### Expiring coupon settings

| Setting | Value or rule | Source |
|---|---|---|
| Text field | State the discount amount and its scope, such as 5% off all orders, with each word capitalized for consistency | [L1192, 2020-26] |
| Code | Enclose the code in bold brackets so it appears bold, and type the exact name of the discount code created in Shopify | [L1192, 2020-26] |
| Countdown | Set to three days, the recommended value | [L1192, 2020-26] |
| Colour | Choose from the theme colours using the colour icon | [L1192, 2020-26] |
| Date format | Defaults to month, day, year; change it for stores selling outside the US | [L1192, 2020-26] |
| End date | Does not deactivate the Shopify discount code; it only resets the countdown shown on the page, which restarts at the configured number of days | [L1192, 2020-26] |
| Automatic refresh | The box recalculates its deadline every three days, so visitors always see a fresh three-day window; set it once, then edit over time | [L1192, 2020-26] |
| Refresh and checkout | The displayed expiry refreshes every three days, and the code stays active at checkout regardless of the countdown display | [L0139, undated] |

- The discount text and code shown on the product page must match the discount created in the Shopify Discounts section exactly, or shoppers will not get the advertised price. [L1192, 2020-26]
- Keep the coupon text limited to what the code actually grants. Benefits that apply to every order anyway, such as free shipping offered on all orders, should be removed from the coupon message. [L1192, 2020-26]
- Test different discount percentages over time to optimize conversion. [L0139, undated]

### Shopify coupon rules

- Coupon codes cannot be combined. If a 5% and a 10% code both exist, the customer picks one and does not receive 15% off. [L1090, 2021]
- A coupon discount is applied in the cart when the code is entered, not on the product page. Product prices shown on the store stay at MAP (the compare-at price), and the discount appears only at checkout. [L1090, 2021]
- Shopify's coupon settings can exclude specific products from a promotion. Set the exclusion in the Shopify promotion settings where coupon codes are configured. [L0964, 2023]
- In the Shopify promotion settings where coupon codes are configured, exclude the products that are not eligible. The discount then applies only to eligible products in the cart. [L0964, 2023]
- Coupon codes can be set to show only on eligible product pages, so the discount is not shown on non-eligible products. [L0964, 2023]
- The code shown in the bar must match a discount code that already exists in Shopify, because the bar only displays the code and Shopify applies it at checkout. [L0531, 2020-26]

### Announcement bar: placement and behaviour

- Show the discount code prominently on every page, in a bar or banner that stands out, so every visitor sees it on arrival. [L0137, undated]
- The announcement bar appears on every page, including the visitor's first view, so use it for the most important site-wide offer or information. [L1326, undated]
- The announcement bar is used for urgency and conversion, so it only makes sense once the store has live products and real traffic. Before that, hide it in the Announcement bar section. [L0775, 2020-26]
- Show the sticky top bar on every page, including product pages, on both desktop and mobile. After saving, refresh the storefront and check that the bar stays visible while scrolling. [L0531, 2020-26]
- Keep the announcement bar non-clickable when it applies sitewide. Visitors should see the code and remember it for the cart rather than leave the page. Do not add a close button, so the offer stays visible. [L0531, 2020-26]
- A promotion bar with light text can get lost on the background. Test a higher-contrast text colour, such as black, to make the sale message stand out. Test the bar on all pages and for all visitors, mobile first. [L0389, 2025-26]
- The bar can also hold a second short text at the start, such as a highlight word like `Hot`. When a discount is running, show the discount code in the bar so visitors see it immediately. [L1326, undated]
- A sample bar could read a weekend sitewide sale of 25% off everything, paired with a code for a free gift on orders over a set amount, running for a limited time. Enter both messages as separate announcements in the same bar. [L1230, 2025-26]
- Hello Bar, or a similar dynamic notification app, can display warehouse status notifications above the Add to Cart button. The text can change based on product collection or supplier, informing customers of shipping status before purchase. [L0245, 2020]

### Announcement bar message patterns

- Pattern: state the discount amount and its scope, then the coupon code, then the expiry day, time and time zone. It works because it gives a concrete saving, a clear action (enter the code) and a visible deadline in one line. [L0531, 2020-26]
  - Example 1: `Take 7% off all orders with code SPRING7. Offer ends Wednesday 11:59 p.m. PST.`
  - Example 2: `Get 5% off your whole order with code HOME5 until Sunday 11:59 p.m. EST.`
- Express the deadline with the day, the time and the time zone, for example Sunday 11:59 p.m. EST. Any time zone works as long as the deadline is clear and consistent. [L0531, 2020-26]
- Announcement bar messages work best when they combine three parts: an offer or benefit, a condition or threshold, and a credibility signal or icon. This keeps the message quick to scan and gives a reason to act. [L1326, undated]
  - Examples: `Free delivery on orders over $60 | 20% off your first order` and `Trusted by 8,000+ happy customers | Free returns within 30 days`.
- Template for a holiday promotion line. Use it in the announcement bar, and keep the same wording and code in the homepage slider and on the product pages' expiring discount code section while the promotion runs. [L1224, 2025+]

```
[HOLIDAY] promotion live now: [OFFER] with code [CODE], guaranteed delivery before [DELIVERY DEADLINE].
```

- If the bar still shows an expired code or an old expiry date after a cycle change, the urgency is lost and visitors may distrust the offer. Update the bar at every Wednesday and Sunday change. [L0531, 2020-26]

### Header space and scarcity lines

- The header bar is the most visible space on the site. Reserve it for the strongest current offer, such as an expiring coupon code. Do not spend it on a generic message that competitors already show, such as a shipping threshold. [L0894, 2020-26]
- A header with a scarcity line such as `buy now before we run out of stock`, or a limited stock and free shipping today message, can increase conversion. The reviewer reported that customers wrote in asking for the bundle not to be removed after this header was added. [L0530, 2022]
- Scarcity and call-to-action messages in the header are a proven conversion tool and should be used on a store, not left out. [L0530, 2022]
- Scarcity text is less effective now than before, because many shoppers know the tactic. Use scarcity sparingly and test it rather than relying on it. [L0657, undated]

### Cart top bar and checkout banners

- Pattern for an urgency warning in the cart top bar: a warning label, a specific sold-out count over a period, and a call to order now before the product runs out again. The specific count makes the scarcity credible, and the deadline phrasing pushes the decision. [L0560, 2026]
  - Example 1: `Stock alert: this item has sold out 6 times this year. Secure yours now before it runs out again.`
  - Example 2: `Almost gone: we sold out twice in the last 30 days. Check out today before the next batch sells.`
- Pattern for a low-stock banner at checkout: a short stock-level statement that the product is running low, followed by a clear action to finish the order before the stock is gone. It works best in the checkout banner rather than the cart. [L0560, 2026]
  - Example 1: `Units are running low on this bundle. Finish checkout now to lock in today's price.`
  - Example 2: `Only a few units remain. Place your order today to avoid a backorder wait.`

### Promotion consistency across the site

- Promote every offer across the whole website, not only in emails and ads, so all visitors know the offer exists. Use the notification bar and the exit-intent overlay for this. [L0757, 2022]
- The website must show the current promotion's offer in the homepage slider, the announcement bar and an expiring discount code, and it must match the offers in the emails. [L1222, 2025+]
- Use the same promotion message in every place: the announcement bar, the homepage image slider, the discount code section on product pages, and the email and ads. Mismatched codes or percentages, such as 5 percent in one place and 7 percent in another, confuse shoppers and reduce trust. [L1287, 2025]
- Keep the discount code and offer identical across the announcement bar, the homepage, product pages and the discount code section. Never show 5% in one place and 7% or free shipping in another. Mismatched offers confuse buyers and reduce sales. [L1224, 2025+]
- Show active coupons and brand deals with their expiry dates directly on the homepage and category pages. Burying promotions behind a small link such as "see all sales" hides them from shoppers who are not looking for a sale. [L0894, 2020-26]
- Create a permanent collection page for rotating promotions, such as yourstore.com/promotions or yourstore.com/sales. Add and swap products into it as seasonal sales or supplier promotions become available. Customers can bookmark it and return during sales, and you manage the included products without creating new collection pages each time. (2023.) [L0251, 2023]
- Promo bars on product pages must match the product. A generic outdoor sale banner on a chandelier page makes no sense to the shopper, so tailor on-page messages to the product category. [L0894, 2020-26]
- Remove banners for past events, such as a Black Friday banner still showing in May, because stale promotions make the store look neglected. [L0409, 2021-22]
- use a header banner with an expiring coupon to boost early conversions. Once real traffic arrives, replace an earlier free shipping banner with a 10% off banner, but not before suppliers are on board. [L1090, 2021]
- The discount is applied at checkout, so product prices stay at MAP (see the Shopify coupon rules above). [L1090, 2021]

### Free gifts and landing page text

- Template for free gift image text on a landing page (transparent background, brand font, product image). Place it just below the benefit line. [L1363, 2023]

```
Your order comes with a free gift
[gift title]
automatically added to cart
```

- A second promotion message, such as a free gift code on orders over a set amount, can run in the same bar as a separate announcement. [L1230, 2025-26]

### Discount size and margin

- A discount should only be offered if your margin still covers it. Test whether the discount raises conversion, and base the size on current margins. [L0468, 2020]
- For high-priced items, fixed-amount offers work better than a percentage with a cap, such as spend 1,000 USD and save 100 USD. [L1090, 2021]
- Percentage discounts on expensive products can still be profitable when margins are large. A 10% discount on a high-ticket sale can still leave thousands of dollars in profit. [L1090, 2021]
- If the margin does not allow a discount in the announcement bar or exit-intent popup, use a free shipping offer for those locations instead. (2023.) [L0855, 2023]
- Traffic from TikTok expects strong discounts. Small offers such as 5 or 10 percent off rarely work, so test discounts of at least 20 to 50 percent. [L1259, undated]
- A small discount such as 5% off a $3,000 product with a six-hour validity will not change the buying decision. Expensive products need a clear value message, not a token discount. [L0409, 2021-22]

### Countdown timers on product pages

- A countdown timer on the product page shows a short validity window for a special offer, for example 10 minutes, after which the offer disappears. It works when no fixed calendar date is used and pushes visitors to act much faster than usual. [L0683, undated]
- A countdown timer set to about 10 minutes worked well for one seller, who had also tested 5 minutes. [L1381, 2022]
- Configure the countdown timer app (Ultimate Sales Boost was named) so the timer disappears after it expires and does not repeat for the same visitor. A repeating timer can make the offer look fake and hurt sales. [L1381, 2022]
- A countdown timer next to a limited-time discount for new customers reinforces the deadline and supports the urgency of the offer. Place it where the offer is visible, such as on the product or landing page. [L1399, undated]
- Show the remaining stock count on the product page with a countdown, so buyers have a reason to decide now instead of later. The author says this works well, using custom code in his Shopify theme. [L1346, 2020-26]
- A countdown timer that restarts with every visit looks fake. A timer that shows three hours and resets on every visit removes trust, and a returning visitor who sees the same three-hour timer will stop trusting the store. [L0355, 2020-26]
- a countdown timer that restarts each day is fake urgency. When a visitor returns and sees the same offer again, trust drops, especially for expensive purchases where people visit several times. [L0409, 2021-22]
- Product pages must show exact shipping time, warranty and full product details, and should not use fake urgency such as a countdown timer that constantly resets. Clear information supports the sale without misleading the buyer. (2025.) [L0807, 2025]

### Cart timers

- Kaching Cart > Cart settings > Timer sets a countdown in the cart, set to 3 minutes in this setup. Turn on "Reset timer when products are added to cart" so the window restarts with each new item. The timer is meant to create urgency at checkout. [L0560, 2026]
- Timer message in the cart (app placeholder kept as shown): [L0560, 2026]

```
Your cart will expire in ((timer))
```

- Show a countdown in the cart that tells the shopper how long their order is held. This adds scarcity and pushes the buyer to act now. [L1207, undated]
- Pattern: [item or cart] is held for [number] minutes while you check out. A visible time limit creates urgency without changing the price. [L1207, undated]
  - Examples: `Your cart is reserved for 5 minutes while you check out` and `Your item is held for 15 minutes at checkout`.
- Add a visible cart timer that tells the shopper their order is held for 10 minutes during checkout. The countdown creates urgency to finish the purchase now. Show this only if the stock or price is actually reserved for that time. [L1207, undated]
- Add a countdown timer in the cart that reserves the order for 10 minutes, to create scarcity and encourage the buyer to act now. Use this timer as an additional trust-and-urgency element on the checkout page. [L1209, undated]
- Cart timer: display a countdown in the cart stating that the order is held for a set time, such as 10 minutes, to create scarcity and urgency that encourages the buyer to complete the purchase now. [L1210, undated]
- The Cart Urgency countdown timer block has settings for the number of minutes the timer runs, the message shown when it expires, the background colour, the timer colour and the headline colour. Its position on the cart page can be changed by moving the block. [L1450, 2020-26]
- The Cart Urgency countdown timer shows the remaining time in minutes and seconds, for example "cart will expire in nine minutes, 55 seconds". When the countdown reaches zero, the block shows the expired message set in its settings. [L1450, 2020-26]
- A countdown timer that runs out in a few minutes creates urgency on the cart page and is expected to raise conversion rates. Test it with your own traffic data before relying on it, since the benefit is not guaranteed. [L1450, 2020-26]
- In a demo store or a store without traffic, the countdown timer adds no value and should be hidden or deleted. Enable it once live traffic arrives so its effect on conversion can be measured. [L1450, 2020-26]
- Use this timer only if the stock or price is actually reserved for that time. Urgency works best when the offer really disappears after the stated window. [L1207, undated]

#### Timer durations by source

| Duration | Context | Source |
|---|---|---|
| 3 minutes | Kaching cart timer, reset on each new item | [L0560, 2026] |
| 5 minutes | Tested by one seller alongside 10 minutes; example cart reservation | [L1381, 2022; L1207, undated] |
| 10 minutes | Cart reservation during checkout; product page validity window; seller's preferred setting | [L1207, undated; L1209, undated; L1210, undated; L0683, undated; L1381, 2022] |
| 15 minutes | Example item hold at checkout | [L1207, undated] |
| Set by you | Cart Urgency block, configurable minutes | [L1450, 2020-26] |

- Choose the duration from your own data. The sources disagree: the 3-minute setup and the 10-minute recommendations are both reported, and the 10-minute setting was the one that worked for one seller after a 5-minute test. [L0560, 2026; L1381, 2022; L1450, 2020-26]

### Stock messages

- A real stock count on the product page, such as 37 left in stock, is a legitimate scarcity tactic that increases conversions. Only show a number that matches actual inventory. [L0355, 2020-26]
- Add a short stock hint in brackets next to the size selection, such as `only 3 left` or `only 2 left`, to create urgency on the product page. Use only stock levels that are true. [L1219, undated]
- Show urgency on product pages only for best-selling products that are extremely low in stock, not site-wide. This has not caused problems with Google. (2025.) [L1287, 2025]
- Shopify lets you hide stock levels with a single toggle, so customers do not see low-stock alerts. Keep the hidden element rather than deleting it, so it can be restored later. (2025.) [L0472, 2025]
- Competitor stores show low-stock messages such as `Only 9 units left` or `Low stock selling fast`, and some show how many people are viewing the product now. Only display stock or viewer numbers if they reflect the real situation, because false scarcity can trigger refund or platform problems. [L0600, 2026]
- Urgency labels such as a countdown discount or a low-stock message only work when they are true. Use them only when the discount deadline is real and the stock is actually limited. [L1479, 2026]
- Use scarcity messages such as low-stock notices to create urgency, but only when the stock really is low. Combine urgency with real limited-time offers to give the buyer a reason to decide now. [L1209, undated]
- Urgency and scarcity tactics include time-limited offers, such as a `today only` message shown after purchase, and low-stock notices. They aim to raise the buyer's excitement and motivate immediate action. [L1210, undated]
- Use scarcity tactics such as low-stock messages and urgency copy with a clear end, such as today only. [L1207, undated]

### Limited quantity and application-based scarcity

These units come from direct-response sales letters. They apply to high-priced or limited offers only.

- Scarcity can be used to intimidate, through limited-quantity wording, a bandwagon message that most people will buy, a message that only qualified people will be accepted, a qualification process before buying, or a select-group message. Scarcity works best when the offer is honest, because a limited number or application process has to be real. [L1370, undated]
- Limit the offer to a quantity that is actually limited. State that a response arriving after the supply is gone will be returned, uncashed if needed. Use this only when the stock or spot is truly limited. [L1370, undated]
- For high-priced products, use an application or qualification step, such as a questionnaire, reference letters, a required listening period or an interview, because it makes the buyer feel selected. Only state qualification rules you actually enforce. [L1370, undated]
- Most of a sales letter's losses come from the `later` group: readers who want the offer but set the letter aside. Most real response arrives in the first days after mailing, so the letter must create urgency to act now instead of tomorrow. [L1370, undated]
- Use limited availability to create urgency only if the product, premium or discount is truly limited, and say so specifically, for example that the race is on for a limited number of items. [L1370, undated]


Part 24 of 40 of "6. Conversion Optimization: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/06-conversion-optimization.md · Previous: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/23-collecting-and-displaying-reviews.md · Next: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/25-rules-against-fake-urgency.md
