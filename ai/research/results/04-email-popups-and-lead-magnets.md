<!-- part of research/results.md -->
Part 4 of 6 of "Research results: everything we asked Perplexity, condensed". Map of all parts: https://dlichters.com/ai/research/results.md · Previous: https://dlichters.com/ai/research/results/03-creatives-hooks-video-ugc-ai-images-and-video.md · Next: https://dlichters.com/ai/research/results/05-suppliers-and-agents-sourcing-hand-off-paying.md

## Email, popups and lead magnets

**Holiday shipping deadline planner as lead magnet** (2026-10-01)  
No US shop found offering a current planner free for an email. Closest: Easyship shipping playbook, Day Designer free holiday printable kit. Popup opt-in comparison: Wisepops 6.88 % e-commerce average (not equivalent).

**Popup offer for a 70 USD gift product** (2026-10-04)  
Test a light mobile-optimized 10 % popup (7 USD) after 6-10 seconds against 5 USD off, free shipping and a real no-popup control; decide by incremental contribution per visitor. Omnisend 2025: discount popups capture more emails than no-discount (2.4 % vs 1.7 %), best signup rate at 6-10 seconds (2.4 %).

**Popup decision** (2026-10-04)  
Spin-to-win wheel 3.5 % signups vs 2.0 % without (Omnisend 2025, 1.24 bn impressions). Kept our existing setting: small fixed 3 USD discount code popup (course-based decision), test later against 10 % and no popup.

**Abandoned cart emails** (2026-10-08)  
No reliable revenue share for a new Meta-driven 70 USD shop. Recapture claims about 10 % of store revenue (vendor). Omnisend 2025: abandoned cart emails 1.51 % attributed purchases per delivered email, 2.54 USD revenue per email; Klaviyo 6.77 USD per recipient. No proven winner among send delays.

## Shopify plans and setup

**Selling during trial / Starter plan** (2026-09-30)  
A trial store cannot launch publicly and take real Shopify Payments orders without choosing a paid plan; after choosing a plan it can sell during the remaining free trial (subscription billed after trial). Existing Starter stores may sell; Starter closed for new stores on 29 Sep 2026, no way back. Basic: 39 USD/month monthly or 29 USD/month yearly; US online cards 2.9 % + 0.30 USD standard, 3.5 % + 0.30 USD premium cards.

## Shopify apps

**Post-purchase upsell apps (App Store snapshot Sept 2026)** (2026-09-28)  
ReConvert 3,092 reviews, 4.8, free then 9.99 USD/mo. Selleasy 2,717 reviews, 4.9, free then 9 USD/mo. AfterSell 1,055, 4.8, 34.99 USD/mo. Zipify OCU 564, 4.6, 9.95 USD/mo. Honeycomb 161, 4.6, free then 54.99 USD/mo. Follow-up 2026-09-30 (triple-checked): post-purchase pages need Basic/Grow plan (not Starter), USD shop currency, and card / Shop Pay / PayPal with reference transactions; never shown after Apple Pay or Google Pay. Selleasy free up to 50 orders per 30 days, then 9/19/29 USD; ReConvert free only to 50 orders and 50 USD upsell revenue, its own pages contradict each other. Decision: Selleasy.

**Countdown / order-by apps for Christmas** (2026-09-28)  
No app just for Christmas deadlines. Two kinds work: countdown apps with fixed end date (Essential Countdown Timer Bar 5.0 with 1,718 reviews) and delivery-date apps with daily cut-off. Free delivery-date apps (2026-09-29): Essent free without limits (5.0 with 1,006 reviews), Delivery Timer only 500 views free, AIT. A fixed Christmas cut-off in a free plan was not clearly documented for any app. Daily cut-off is not the same as a fixed Christmas order-by date.

**Essent free plan and a fixed Christmas cut-off** (2026-09-30)  
Free plan can show a fixed date as a self-written note in addition to the daily cut-off; no documented date-bound Christmas countdown, auto switch after the date, or order block. {counter} counts only to the processing cut-off. Weekends/holidays set separately for processing and transit.

**Free app combo: delivery date + fixed Christmas cut-off + auto gift message** (2026-10-01)  
No single free app does all three. Combos: Essent (free, 5.0 with 1,008 reviews) plus Widgetic (free, documented end message, but 1.0 with 1 review), or Essent plus POWR timer (4.1 with 93 reviews).

**"Buy 2, save 15 %" for free** (2026-10-01)  
Free with a native automatic product discount (minimum quantity 2, 15 % on all eligible units) plus a note on the product page; Bundler offers a free product-page quantity discount without revenue or order limits. Kaching Bundles is not free on a live store: free only on development stores, then 14.99 USD/month after 7-day trial.

## Shopify how-tos

**Christmas order-by date without an app** (2026-09-29)  
Theme announcement bar, product-page text block, native checkout text. Compute backwards: desired delivery day minus conservative transit, processing time and a buffer. Shopify native delivery date ranges = processing + transit. Free-placed checkout banners are not part of the app-free standard.

**Delivery date range on Dawn without a paid app** (2026-09-30)  
Custom Liquid block with JavaScript, or Essent, or CodeRagon free plan. With 1-2 business days processing plus transit, a 30 Sep order gives "Oct 9 to Oct 16" (Mon-Fri calendars, no holidays), while a conservative model with Chinese processing pause and USPS transit gives "Oct 19 to Oct 26". No published A/B test proves causal abandonment drop from a date range alone.

**Delivery date at the buy button on Dawn without a paid app** (2026-10-01)  
Liquid snippet plus own JavaScript under the buy buttons; JavaScript avoids stale Liquid "now" from caching. Also set Shopify's manual/automatic delivery dates for checkout. Shop Promise does not fit a China/Germany shipping path. Maintain a holiday calendar.

**Cloudflare HTTP 429 "Verifying your connection" on a Shopify store** (2026-10-09)  
No public ranking of causes. Best documented: repeated/duplicate cart requests, automated-looking or VPN traffic, misclassification by Shopify-managed protection (Shopify staff posts 10-16 Feb and 6 Mar 2026). 429 is rate limiting, not a permanent IP ban; Shopify has no admin switch to disable it or whitelist buyer IPs. Own storefront monitoring tools should use Shopify's crawler access settings and low request rates.

## Payments: Shopify Payments, PayPal, Whop, payouts

**Shopify Payments fees for a German store selling in USD to US customers** (2026-09-29)  
USD payouts possible on Advanced and Plus; they avoid currency conversion but Shopify still charges a fee for payouts in a non-domestic currency. Currency conversion and payout fees provable from Shopify sources; the German non-EEA card rate could not be verified without contradiction. Later measured (2026-10-03): total payment cost about 5.83 % per order (see payments entries).

**Shopify Payments reserves for new dropshipping stores** (2026-09-30)  
A reserve reduces available payouts; plan cash for 14 days of ad spend, 14 days of COGS, reserve, fees and safety buffer, but do not double count the reserve if you already assume no payouts.

**USD payouts for a German Basic store** (2026-10-03)  
Not available on Basic; only Advanced or Plus. Then the 2 % USD-to-EUR conversion falls away but Shopify charges a foreign-currency payout fee of 1.5 % (Advanced) or 1 % (Plus). A USD account alone does not save the full 2 %.

**Does a PayPal button matter (US, mobile, cold Meta traffic)** (2026-10-03)  
PayPal is big but not dominant in the US. With Shop Pay, Apple Pay, Google Pay and all major cards, some loss without PayPal is plausible but not measurable as a fixed %; "10x fewer orders" is clearly unfounded. US online payment value: digital wallets about 40 %, credit cards direct about 32 %, plus debit cards. Shop Pay is very large on Shopify US. No public Shopify split by method. Follow-up (2026-10-04): PayPal lift not provable; PayPal for a new dropshipper with seasonal spike and 6-10 day delivery is a liquidity and compliance risk (reserves, holds, INR/SNAD); never as the only method; hold 3-4 weeks of goods, ads and refund cost as working capital.

**Whop as checkout for physical dropshipping** (2026-10-03)  
Whop supports Germany as payout country and physical goods; minors 16-17 only via verified legal guardian with consent. Pricing is transaction based, not a 99 USD flat fee. Whop holds funds immediately on disputes, charges fees, uses risk reserves, can freeze payouts. Positive "Whop instead of Shopify Payments" claims are mostly self-promotion/affiliate content. Redirecting the Shopify checkout to Whop and then creating paid orders via API (draft order / orderMarkAsPaid) violates Shopify's API terms (mandatory Shopify Checkout) unless Shopify approves in writing. A purchase completed only on Whop is not reported as Purchase by Shopify's Meta integration; Whop has its own pixel/CAPI support. Verdict: do not use.

**PayPal at checkout: data** (2026-10-03)  
Baymard 2023: 11 % of 2,219 US shoppers abandoned in 3 months because a wanted payment method was missing (all methods, upper bound). PayPal-commissioned: Nielsen +33 % checkout conversion (desktop, large retailers, 2022), Spokeo A/B +20-30 % (cards only before, 2021), Forrester +3 %. PayPal user agreement: funds held "usually up to 21 days", up to 180 days with cases, reserve anytime. Our decision then: start without PayPal, re-check after 30 orders (supplier wants 18.90 per bed within 12 h, Meta charges immediately, PayPal money up to 21 days later).

**Payment mix in US Shopify shops** (2026-10-03)  
No public split. Shop Pay over 50 % of Shopify's US payment volume in Q4 2025 (revenue, earnings Feb 2026); Shop Pay 32 % of orders at BFCM 2025 worldwide. US online 2025: wallets 40 %, direct credit card 32 % of value (Worldpay Global Payments Report 2026).

**Where the measured 5.83 % payment cost comes from** (2026-10-03)  
Measured on our orders: 5.83 % per order. Breakdown: 2 % USD-to-EUR conversion (Shopify help) plus about 3.83 % card incl. fixed fee, fits 3.4 % + 0.30 USD on a 69.99 order. USD payout not possible on Basic/Grow; Advanced 1.5 % payout fee, Plus 1 %.

**Shopify Payments risk for a young German store switching product with China shipping** (2026-10-04)  
Young account, abrupt volume jump, full product change, cross-border China shipping, 6-10 business days and selling before shipping are exactly what Shopify names as reserve risks (volume spikes, long delivery/pre-orders, refunds, chargebacks). No automatic block, but at 50-200 orders/day plan as if parts of revenue may be unavailable for up to 120 days. US payouts typically 3-5 business days to the bank; at least 3 business days settlement plus 1-3 bank days, longer initial times, risk-based 5-20 business days. No documented standard reserve for every new store.

**How Shopify Payments checks a new US store** (2026-10-04)  
Ongoing review, no fixed chargeback ban rate; NDRP-inclusive ratio of 1.5 % over 90 days can trigger automatic program entry with 10 % reserve (minimum-volume exception unquantified).

**Shopify Payments payout accounts and reserves** (2026-10-04)  
Under 18: a parent/guardian sets up Shopify Payments with own data. US payouts only to a US checking account in USD via ACH; Germany: EUR account via SEPA/IBAN. Shopify publishes no fixed reserve rate and no chargeback limit; decisions per account by email/admin. Official examples: fixed reserve 1,000 USD for 120 days, or 10 % of each payment for 120 days; merchant reports 20 % for 120 days (Community 10 Apr 2025, Reddit 4 Dec 2025). Chargeback program: from 1.5 % (incl. pre-disputes) over 90 days, 10 % reserve and 15 USD per case; exit below 1 % over 90 days for 30 consecutive days. First payout typically 7-14 business days; then at least 3 business days settlement plus 24-72 h bank; risk plans 5-20 business days. No published threshold after which holds disappear.

**When the first Shopify Payments money arrives** (2026-10-05)  
First payout typically 7-14 business days after the first sale; then US 2-5 business days per payout plus 24-72 h bank. No revenue/day threshold after which holds vanish; no minimum payout. Reserve only after Shopify emails you; examples 10 % or 1,000 USD for 120 days.

**3D Secure benchmarks** (2026-10-08)  
Evervault 86.4 % successful US 3DS sessions (10 Apr 2025); Ravelin 88 % US success (19 Mar 2026); Stripe 87 % to 82 % in the frictionless path (5 Aug 2024). Different populations; no false-block rate for our shop type.

**Pay-later options for a German sole trader on Shopify selling to the US** (2026-11-07)  
PayPal Express/Wallet: yes (German PayPal business account, verify, allow USD; no US merchant account needed). Shop Pay Installments: no (needs a US or Puerto Rico entity, US Shopify Payments account, USD). Afterpay/Cash App Afterpay and Affirm: not available in this setup. Klarna US Pay in 4: not via German Shopify Payments (buyer countries exclude US/USD); only via a separately approved direct Klarna contract.

## Fraud filters

**Shopify fraud settings for a new US store** (2026-09-30)  
Use Shopify Payments with Shop Pay, "Use automated settings", manual capture and hold supplier hand-off by default. Shopify (22 Aug 2025): decline on CVV fail ON, strict AVS ZIP decline OFF. Own rule: HIGH risk or credible unauthorized: cancel before capture and before ordering from supplier; MEDIUM / pending analysis / conflicting signals: hold and check; a single AVS mismatch or missing CVV check is not proof. Shopify Protect only covers eligible cases incl. fulfillment with valid tracking within 7 days and carrier "in transit" within 10 days. Chargeflow: 27.2 % of BFCM 2025 disputes were "fraud" (share of disputes, not of orders).

**Do fraud filters block real orders?** (2026-10-08)  
No published false-block rate for this case. Shopify Protect: free protection for certain Shop Pay orders already placed. Fraud Analysis gives risk scores, does not auto-cancel; Shopify Payments may block before order creation. Dynamic 3D Secure raised payment success by 0.26 percentage points in Shopify's experiment.

## Chargebacks and dispute thresholds

**Chargebacks in China dropshipping at Christmas** (2026-09-30)  
Main avoidable risks: item not received/late (INR) and significantly not as described (SNAD). Shopify can put a store into its Non-Dispute Resolution Program (NDRP) at 1.5 % or more over 90 days (won cases count), with a 10 % reserve if admitted for the ratio. PayPal high-volume fee mechanism: at least 1.5 % value-based dispute rate and over 100 sales in the prior 3 full months; PayPal SNAD never covered by seller protection. INR share of disputes over BFCM 2025 rose from 19.9 % to 34.7 %, median 25 days. Address-matched delivery proof helps INR, order-time product/offer evidence helps SNAD. Our traffic light: 0.35 / 0.50 / 0.75 / 1.00 %; later tightened (2026-10-08).

**Refund and chargeback thresholds** (2026-09-30)  
No benchmark for small Shopify pet shops shipping from China. Thresholds: Shopify NDRP from 1.5 % over 90 days (with small-shop exception), Visa VAMP from 1.5 % plus at least 1,500 monthly events in the region group, Mastercard ECM from at least 100 cases plus at least 1.5 %. None protects against earlier action.

**Chargeback ratios that trigger action** (2026-10-08)  
No public automatic ban ratio at Shopify Payments or Stripe; action possible below network limits. Orientation: Stripe dispute activity over 0.75 %; Visa VAMP US at least 1.50 % plus at least 1,500 events monthly since 1 Apr 2026; Shopify NDRP possibly from 1.50 % NDRP-inclusive over 90 days (Stripe agreement 28 Sep 2026). We tightened our own warning thresholds after this.

**Own warning thresholds tightened** (2026-10-08)  
Confirmed: no public universal ban ratio at Shopify Payments or Stripe; reviews, reserves, payout holds or termination can come below network limits. Our warning thresholds were tightened below the earlier 0.35/0.50/0.75/1.00 % ladder.

## Returns, refunds and complaint rates

**Return, complaint and chargeback rates, vacuum-packed beds from China** (2026-09-29)  
No public statistic exactly for this case; derived planning bands for Q4: 10-18 % returns, 5-10 % of orders with a real complaint, 0.5-0.9 % chargebacks. Comparison: 2025 US online returns 19.3 % of sales; retail chargeback benchmark 0.52 %; Stripe calls more than 0.75 % dispute activity excessive. Top complaints: size, smell, does not fluff up, late delivery. Page fixes: size by sleeping area, smell note, fluff-up time, stop-loss thresholds.

**Return/guarantee terms of US dog bed shops** (2026-09-29)  
Chewy: long return window, free return shipping, refund-without-return only at Chewy's discretion. K9 Ballistics: normal returns only for practically unused goods, separate chew/damage warranty. Barker Beds: advertised trial is not the same as a proven refund right. Official merchant pages contradict themselves (K9 Ballistics, FurHaven). State law: NY GBL 218-a, CA Civil Code 1723 (must post policy, otherwise default rights), VA, FL.

**Keep-it (returnless) refunds** (2026-09-30)  
No representative cost or abuse rate for keep-it under 100 USD. Normal return handling costs about 12-33 USD (Claimlane, 10 Jul 2026). NRF 9 % / Appriss 14 % fraud apply to all returns. Asendia (2 Jun 2025): 33 % of 1,000 global merchants offered returnless returns, 28 % planned to. Pet examples: Native Pet full refund without return within 30 days; MYOS and Small Pet Select case by case; Birdie & Louie money only for damage, else store credit. Recommendation: one-time guarantee for items up to 25 USD, claim within 30 days of delivery, one per household. Our trigger: if keep-it cases exceed 5 % after 50 orders, switch to policy B.

**Refund/return share between Black Friday and Christmas** (2026-09-30)  
No exact US figure. Use 19.3 % online returns on revenue as broad US ceiling, 17 % expected holiday returns, 8-12 % only as a weak pet-category indicator. Chargebacks: Sift benchmark 0.26 % Q3 2025; "not received" was 34.7 % of disputes in BFCM window (not of orders). Without own P95 delivery data no blanket Christmas guarantee from Asia; conservative policy: "arrives by 24 Dec" ends 5 Dec.

**Return rates for dog clothing** (2026-09-30)  
No US statistic for dog clothing. US online returns all categories 19.3 % (2025); apparel 24.4 % of online orders (Coresight, 2023); in a 2025 survey 56 % of apparel/footwear brands reported high return rates.

**Complaints when gifts arrive after 24 Dec** (2026-09-30)  
No reliable US rate for late Christmas gifts. Clear cut-off and realistic date improve expectations and dispute evidence, but effect not quantified. China direct shipping must not auto-create a Christmas promise.

**Refund and chargeback rates 2025, Christmas goods from China** (2026-10-01)  
No public rate. Separate comparisons: 1.4 % of WooCommerce orders partially or fully refunded in 2025 (Metorik, 28 Jul 2026); 2.89 % global retail refunds in December (ACI, 3 Feb 2026); 0.26 % cross-industry network chargebacks Q3 (Sift, 11 Dec 2025).

**Return, cancel and damage rate for China pet beds, Nov/Dec** (2026-10-08)  
No public rate. Best substitutes: 19.3 % of online sales value (US full-year forecast) and 17 % of holiday sales value (all channels), NRF/Happy Returns 15 Oct 2025; 8-12 % for pet products is weakly sourced.

**Neighbor return values** (2026-10-08)  
15-20 % returns for "home goods and furniture" (per items sold, Red Stag, 19 May 2025); 19.3 % US online, 17 % holiday (NRF/Happy Returns, 15 Oct 2025, by revenue).

## Customer service

**Free contact page and customer service setup** (2026-09-30)  
Start with Shopify contact form (every theme: Pages > Add page > template "contact"), Shopify Inbox and a published support email; Zoho Desk Free only when several people must handle tickets. Publish operator name, business/contact address, phone, support email, service hours with time zone, "within 1 business day", links to shipping, returns/refund, privacy, terms. Shopify expects name, address, phone, email.

**Shopify Inbox AI agent** (2026-09-30)  
Needs Shopify Inbox, active online store, new customer accounts, plan Basic/Grow/Advanced/Plus; answers in customer's language incl. German; free in App Store. Can look up order status but needs customer login; "Track my order" also works without the agent. Not autonomous handling of delivery problems.

**Support load for China dropshipping in Q4** (2026-10-04)  
No public sample. Plan 50 customer contacts per 100 orders, stress case 90 (own assumptions).

**Customer service load and tools** (2026-10-04)  
Plan 50 contacts per 100 orders, 40 % "where is my order"; stress 90 per 100, 70 % WISMO (Gorgias 19 May 2026, parcelLab 2020, Ringly 2 Oct 2026). One person handles about 6-8 tickets/hour (Head West, 10 Jan 2025): at 200 orders/day that is 7.5-18 support hours per day. AI helpdesk: Shopify Inbox free, Tidio Lyro from 32.50 USD/month for 50 conversations, Gorgias Pro higher.


Part 4 of 6 of "Research results: everything we asked Perplexity, condensed". Map of all parts: https://dlichters.com/ai/research/results.md · Previous: https://dlichters.com/ai/research/results/03-creatives-hooks-video-ugc-ai-images-and-video.md · Next: https://dlichters.com/ai/research/results/05-suppliers-and-agents-sourcing-hand-off-paying.md
