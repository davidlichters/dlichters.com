<!-- part of research/results.md -->
Part 5 of 6 of "Research results: everything we asked Perplexity, condensed". Map of all parts: https://dlichters.com/ai/research/results.md · Previous: https://dlichters.com/ai/research/results/04-email-popups-and-lead-magnets.md · Next: https://dlichters.com/ai/research/results/06-us-law-ftc-rules-labeling-privacy-imprint.md

## Suppliers and agents: sourcing, hand-off, paying

**Lowest unit price incl. DDP from Chinese agents in the first message** (2026-09-29)  
No magic phrase. Send a professional RFQ: identical spec, product / fulfillment / DDP cost split, honest price tiers, several parallel quotes, then a precise counter-anchor. Do not invent volume ("50 orders/day" only with proof); inflated promises cost trust and priority. Meta-analysis 2025 (90 studies, 16,334 people): first-offer anchoring effect g = 0.42. Price round (deep answer): get 3 comparison quotes first, then counter 5-15 % below a fair first offer; ask tiers as "1/10/30/50/100 orders/day, pricing scenarios, not committed volume".

**Cheapest automatic order hand-off to a private China agent** (2026-09-30)  
DSers Basic (0 USD/month) advertises agent bulk orders and automatic tracking sync, but its own help contradicts free tracking; confirm agent compatibility in writing and test. AutoDS order automation from 36.80 USD/month before credits, does not support arbitrary external agents. CJ has free core features but fulfills itself. A staff account alone creates no automation.

**Price tiers of Chinese agents for stuffed dog beds** (2026-10-01)  
No public DDP-USA price ladder for 1/10/30/50/100 orders/day; agents give individual quotes and possible volume discounts. Peregrine standard shipping alone 19.47 USD at 0.8 kg, 22.25 USD at 1 kg (without goods, possibly plus duties).

**Order hand-off to a private agent (WhatsApp until now)** (2026-10-03)  
Best: connect the existing agent through its Shopify-compatible ERP/app and release processing from prepaid balance or on payment terms; no extra middleware needed (e.g. Dianxiaomi has a "free one store" plan; not proven for our agent). AutoDS is paid. DSers can integrate private agents only if the agent joins the DSers Agent Network or has a supported ERP/API; else a direct agent app or a controlled CSV workflow is more robust. DSers Basic free (bulk order tools, "tracking number sync"), but DSers plan help (29 Jul 2026) marks auto tracking sync to sales channel as not included in free. A Shopify staff account alone automates nothing.

**China Golden Week 2026** (2026-10-03)  
Official National Day holiday 1-7 Oct 2026 (Thu-Wed), make-up working day Sun 20 Sep 2026 (and another). Factories and small sellers need extra days to restart after.

**Stock for a peak of 100+ orders/day (vacuum-packed sleigh beds)** (2026-10-03)  
Correct math: 2,000 pieces over 15 days with 30 % buffer supports about 102.6 orders/day, not 130 (130/day needs 2,535). Counting both days, 20 Nov-5 Dec is 16 days: at 100/day plus 30 % buffer you need 2,080 pieces.

**Order hand-off to the private agent: decision** (2026-10-03)  
Ask the agent for her own Shopify app or ERP that pulls paid orders and writes tracking back; fallback: one WhatsApp line per order. DSers Basic 0, Advanced 19.90, Pro 49.90 USD/month. AutoDS has a Claude MCP connector since 15 Jul 2026 but does not connect private unlisted suppliers; AutoDS Import 26.90, Starter 39.90, Advanced 66.90 USD/month. WhatsApp Cloud API cannot read or write existing WhatsApp groups (Groups API only for groups created via API).

**Paying a Chinese WhatsApp supplier** (2026-10-04)  
Do not prepay 100 %. Market practice 30 % deposit, 70 % after production/inspection before shipping; for 1,000-3,000 USD better a protected test order by card, or at most 30 % to a verified company account. Wise is cheap but only after verifying company name, 18-digit Unified Social Credit Code (USCC), license, account holder and real goods. Stop signals: private account, crypto/Western Union, pressure for 100 % prepayment.

**Low-fee, chargeback-safe payment routes to Chinese suppliers** (2026-10-05)  
For small single orders: a credit card the supplier accepts directly, without foreign transaction fee or supplier surcharge, if the card contract covers business disputes. For verified suppliers compare Wise Business and Payoneer bank routes. Final payment for the supplier and maximum recourse for us are opposite goals. PayPal is no reliable buyer protection for dropship resale goods: user agreement version 26 Jan 2026 excludes items bought for resale.

**Paying the Chinese agent (decision)** (2026-10-05)  
Supplier only took "bank transfer". Decision: ask for a CNY company account plus CNY invoice, card as second route; bundle payments daily. Wise USD to China via SWIFT: 7.41 USD per payment, with correspondent bank 14.34 USD; for one bed at 18.90 USD that is 39 % or more, so bundle. US Data Security / CNY Wise to company account entry 2026-10-09.

**Judging a private Chinese agent in the first 2 weeks (pilot SLA)** (2026-10-08)  
Own pilot SLA: at least 95 % proven physical hand-offs within 2 agreed warehouse working days; at least 98 % correct Shopify tracking uploads within 24 h of hand-off; at least 95 % verifiable carrier scan events within 48 h of claimed hand-off. After 2 weeks you have a provisional release, not proof of low loss: even 0 losses in 100 observed shipments only bound the loss rate statistically (about 3 % upper 95 % bound).

**Paying Chinese private agents (small shops under 50 orders/day)** (2026-10-08)  
Safest: verified contract partner with documented DDP and a protected platform order; else real business card payment via a Payoneer payment request, or PayPal Goods and Services, never PayPal Friends. PayPal excludes goods bought for resale from US buyer protection, even single items. For vetted agents Wise Business is often better. Common routes for US sole traders: PayPal for simple single payments, Wise Business or bank transfer for invoices, Alibaba Trade Assurance for platform orders; get an invoice first.

**Supplier asks for Shopify collaborator access (orders and fulfillment)** (2026-10-09)  
A collaborator with only Orders > View and Orders > Fulfill and ship sees all orders store-wide incl. customer and price data, can edit fulfillment and also change shipping addresses, but gets no product pricing, payouts, refunds or other apps. For ongoing ERP sync use a vetted fulfillment-service app with assigned orders or a merchant-owned data-minimizing interface, not permanent human admin access. Cannot be scoped to "only their orders".

**Supplier access without a Shopify login, and US data rules** (2026-10-09)  
Documented alternative to a collaborator login: send selected shipping jobs by CSV/spreadsheet, or use Shopify's built-in email-based custom fulfillment service, and enter returned tracking yourself; both need no development. US Data Security Program (DOJ bulk data rule, effective 8 Apr 2025): the exemption supports sharing addresses and order info needed to fulfill purchases with a China-based supplier, but not clearly unrestricted ongoing access to all customer order histories; give only what fulfillment needs.

**Wise USD to CNY to a Chinese company account** (2026-10-09)  
Wise supports it but publishes no flat % for USD-CNY; needs a concrete quote with recipient and payout route; general US business price floor currently 0.23 %. No amount or frequency limit stated for Chinese B2B recipients; usually 1-2 working days after Wise receives and converts the money; account limits and document checks apply.

**Supplier refuses a fixed ship date in peak season** (2026-10-09)  
Warning sign, not proof of failure. Seasonal delays and surcharges for peak 2026 are documented (announced transport surcharges). A blanket refusal to give any ship window is not normal; ask for a written dispatch window, daily hand-off proof, and plan a backup supplier.

**US-warehouse backup suppliers and risk check** (2026-10-09)  
Kole Imports: concrete complaints about damaged goods, refunds, minimum order enforcement and a late Christmas delivery (not proven as Shopify blind dropshipping). Doggie Design: no reliable complaints found. Pet Stores USA (Cincinnati, Ohio): own US warehouse and "Blind Drop Shipping" confirmed, own bed category (e.g. K&H Ortho Bolster Sleeper, K&H Superior Orthopedic Pet Bed), no dollar minimum found: best practical candidate; Essential Pet Products second. US fulfillment/POD for December: Pet Wholesale USA (stock goods) and CustomCat (printed blankets) conditional candidates; Printify, Printful, Gooten no MOQ but extra production time. China suppliers guaranteeing at most 10 days to the US in December: none proven; HyperSKU advertises 5-10 days but its after-sales rule only kicks in at "30+ days".

## US warehouses and 3PL

**Bulk-shipping seasonal goods into a US 3PL from late November** (2026-10-01)  
Closest models: CJ, NextSmartShip, eFulfillment Service, Fulfillrite, Amazon MCF, ShipBots, Zendrop US 3PL, EPROLO, HyperSKU, USAdrop. Own-sourced goods: try eFulfillment Service first; integrated China-USA: CJ and NextSmartShip. CJ: air freight 10-15 days, sea 25-30 days. For 50-300 beds: quote Fulfillment San Diego (clearest public rate card), Fulfyld (all-in), eFulfillment Service (no order minimums) in parallel; SHIPHYPE 999 USD/month under 500 orders/month usually out. Stock must be sellable by 20-23 Nov 2026, latest 30 Nov; for national delivery by Fri 18 Dec, hand standard orders to carrier by Thu 10 Dec.

## Shipping times and DDP carriers China to US

**China to US transit Nov/Dec 2025** (2026-09-28)  
No public measured data per carrier for Nov/Dec 2025, only guide values: YunExpress 6-15 days by service, 4PX 6-12 / 12-20 days, Yanwen P80 29.3 days. Measured (24hTrack, 19 Aug 2026): YunExpress median 13.3 days / P80 19; Yanwen median 12.9 / P80 29.3. A 60x50x20 cm carton weighs 7.5 kg volumetric at YunExpress. Our working assumption: order by 8 Dec means median arrival 23 Dec (guess).

**December transit for 2-3 kg bulky parcels** (2026-09-30)  
No public December 2025 median/P90 for YunExpress, 4PX or Yanwen with USPS last mile. YunExpress site: USA 5-8 business days (undated). Decide by the concrete shipping product, written size assumption, full import cost and proven USPS delivery, not carrier name.

**Last-mile tracking of DDP lines** (2026-09-30)  
DDP does not include insurance for the buyer (ICC Academy, 25 Feb 2025); agree insurance and compensation separately. Many DDP lines hand to USPS/UPS/OnTrac with a separate last-mile number; check that tracking shows delivery date and address (needed against INR chargebacks).

**China to US DDP providers** (2026-09-30)  
Explicit DDP parcel offers: NextSmartShip (Expedited-US-PRO DDP 7 working days; USPS prepaid DDP 8; Prepaid/Economic-US PRO 13; each "90 % delivered" within that time), Fulfido, ShipAnt. No reliable ranking by final delivery or real compensation. Before first order: confirm DDP, the agent's own liability for loss/damage, its priority over T&Cs, and proof of past payouts. CBP published extra open-ended rules on 24 Jun 2026.

**DDP for two beds in one parcel vs two parcels** (2026-09-30)  
No reliable DDP surcharge published. Yanwen model: 2 x 1.5 kg in 40x30x15 cm each vs one 3 kg 40x30x30 cm: chargeable weight rises 3 to 4.5 kg (+50 %), combining is not automatically more expensive.

**P50/P90 transit China to US 2026** (2026-10-05)  
No public P50/P90 for under-5-kg tracked parcels. YunExpress air standard 5-8 business days; 4PX standard lines 8-15 business days; postal sea/surface much weaker data.

**December 2026 standard tracked shipping China to US** (2026-10-08)  
No general proven figure. Peak example: a 4PX route 12-18 business days transit (RuntoDropship, 10 Jul 2026); with 2-5 days processing 14-23 business days order to delivery. Internal planning budget for an unproven line: 15-30 business days from order.

## Holiday shipping deadlines and delivery promises

**Official carrier holiday deadlines 2026 (US domestic)** (2026-09-28)  
USPS (announced 22 Sep 2026), lower 48: Ground Advantage and First-Class Thu 17 Dec, Priority Fri 18 Dec, Priority Express Sat 19 Dec; Alaska/Hawaii Ground 16 Dec. FedEx published too; UPS had none on 28 Sep. USPS 2025 for comparison: Ground/First-Class 17 Dec, Priority 18 Dec, Express 20 Dec. These are US send-by dates, not China order-by dates.

**Securing Christmas delivery for China direct shipping** (2026-09-29)  
Realistic route-specific promises; monitor pickup, customs and last mile separately; send a solution mail as soon as a risk shows. No proven chargeback effect of specific mails. Send a free printable gift announcement at the first serious risk; after your own cut-off point new orders to digital gift options; keep money refunds separate. First tracking scan DHL eCommerce 24-48 h. 9 English customer mails were drafted (early warning, Christmas risk, printable proof, delay).

**Communicating 6-10 day overseas delivery at Christmas** (2026-09-30)  
Show a realistic address-based arrival window before purchase, mention international origin as extra info, carry the same forecast through product page, cart, checkout and confirmation. Compute the Christmas order-by date from your real total performance. For delays: clear updates, gift announcement, goodwill money for kept late orders, full refund where owed.

**Honest delivery time text for China dropshipping** (2026-10-07)  
With 6-10 transit business days plus 1-3 processing days: "Estimated delivery: 7-13 business days from order placement; ships directly from China". Real shops use "United States & Canada: 5 to 16 business days", "7 - 21 days", "Shipping from China: Estimated to take 7-15 business days".

## US customs, duties and de minimis

**Selling from China to the US after de minimis ended** (2026-09-29)  
De minimis suspended for China/Hong Kong since 2 May 2025 and worldwide since 29 Aug 2025. Textile polyester pet bed HTS 6307.90.9891: working duty rate 7 % + 7.5 % + 12.5 % = 27 % of customs value (CBP ruling 23 Jun 2022, rate confirmed 17 Jul 2026, USTR action 23 Jul 2026 effective 24 Jul 2026); conditional, not universal. Use DDP for B2C so the customer never pays on delivery. Internal rule (29 Sep 2026): sellable US stock by 15 Nov, and from 1 Dec stop promising Christmas arrival for China direct shipping; by 4 Dec at the latest. CBP postal rule changes from 22 Oct 2026.

**CBP postal requirements from 22 Oct 2026** (2026-10-01)  
From 22 Oct 2026, international postal shipments with partner government agency (PGA) requirements, HTSUS chapter 98/99 duties or such claims can no longer stay in the monthly postal table process; eligible shipments up to 2,500 USD can use the voluntary electronic Entry Type 13 test, otherwise formal entry. Filer must be the owner/buyer or a licensed US customs broker, not the carrier by its transport contract alone; the shop supplies goods, transaction, sender, recipient and agency data. Source: Federal Register 24 Jun 2026 (2026-12669), CBP guidance 6/8 Jul 2026.

**Duty on a 69.99 USD dog bed from China, DDP** (2026-10-04)  
HTSUS 6307.90.9891: 7 % base duty + 7.5 % Section 301 (9903.88.15) + 12.5 % Section 301 (9903.05.31) = 27 %, about 18.90 USD on a 69.99 USD customs value (conservative). Shop may write "Duties included" only if the seller really pays all import duties and the customer never pays any customs, disbursement or clearance fee; put "No customs charges on delivery" right next to it.

**De minimis for China parcels** (2026-10-04)  
No general duty-free threshold below the former 800 USD for commercial China-origin parcels: suspended for China/HK since 2 May 2025, worldwide since 29 Aug 2025, now also in CBP rules. Plus extra 12.5 % for non-excluded China goods since 24 Jul 2026, plus fees and possibly taxes.

## US sales tax

**US sales tax without a US entity** (2026-09-30)  
A foreign Shopify seller generally need not collect sales tax on direct sales as long as there is no economic nexus (or other nexus) in the delivery state; foreign seat and China shipping are no exemption by themselves. Shopify: check obligation first, register, then set up collection. "100,000 USD or 200 orders" is not universal: about 12 states still count 200 transactions; IL, KY, UT, AK dropped the count. Vermont requires a notice for non-collecting sellers. Decision: register in no state; weekly check from 1 Nov.

**Economic nexus thresholds in the 5 biggest states (2026)** (2026-10-05)  
California more than 500,000 USD; Texas 500,000 USD or more; Florida more than 100,000 USD; New York more than 500,000 USD AND more than 100 sales; Pennsylvania more than 100,000 USD; measuring periods differ. Direct foreign or dropship deliveries count if the shop is the seller. States still counting transactions (2026-10-08 answer): about a dozen keep "200 transactions" alternatives; decision: register nowhere, monitor.

**Sales tax threshold table and timing** (2026-10-05)  
California over 500,000 USD (foreign sellers explicitly included; current or prior calendar year, cdtfa.ca.gov/industry/wayfair); Texas from 500,000 USD (prior 12 months, obligation from the first day of the fourth month after); Florida over 100,000; New York over 500,000 and over 100 sales; Pennsylvania over 100,000. Decision: no registration, monitor revenue per state.

**States still counting transactions for economic nexus (Oct 2026)** (2026-10-08)  
Arkansas, Connecticut, Georgia, Hawaii, Maryland, Michigan, Minnesota, Nebraska, Nevada, New Jersey, New York, Ohio, Rhode Island, Vermont, Virginia, West Virginia, plus Washington D.C.; Connecticut and New York need revenue AND transaction count; Kentucky dropped its transaction threshold on 1 Aug 2026; others reviewing.

## Other countries: UK, Canada, Australia, New Zealand

**Other markets: Canada, Australia, UK** (2026-09-30)  
Order: Australia first as small test, Canada only after import/provincial tax structure is confirmed, UK after a VAT process exists (compliance-driven, not profit). No verified all-in DDP prices. YunExpress guide transit: CA 8-10, AU 4-7, GB 3-5 business days. AU GST registration from AUD 75,000 turnover; CA duty/tax-free only up to CAD 20, plus provincial tax; UK VAT collected at point of sale for consignments up to GBP 135. Pet CPA USA 38.51 USD (Triple Whale 2026).

**UK VAT for direct sales from Germany to Great Britain** (2026-10-03)  
Non-established taxable persons must register for UK VAT with no threshold (no GBP 90,000 threshold), at the latest with the first taxable sale or when a sale is expected within 30 days; dog beds are standard 20 % (HMRC Notice 700/1, 5 Aug 2026). Register online yourself with HMRC; you may keep selling during processing but must account for VAT from the correct effective date and may not show VAT separately before you have the number. Consignments up to GBP 135: 20 % VAT charged at checkout (point of sale), not as import VAT; the DDP carrier must not charge a second import VAT (put the VAT number on the customs declaration). HMRC service standard 40 working days. Quarterly returns, Making Tax Digital, records. Late-registration penalty scheme: 0-30 % for unprompted non-deliberate disclosure within 12 months (one answer's old 5/10/15 % scheme was outdated).

**Merchant of record for CA/UK/AU/NZ** (2026-10-04)  
Shopify Managed Markets is not available for a German-based merchant with USD store currency (needs a US, Canada or UK business and that country's currency). A direct contract with Global-e is the only route with a real merchant-of-record model; acceptance for German merchant with China-origin dropshipping textiles unproven.

**New Zealand GST** (2026-10-04)  
Register for NZ GST (15 %) once supplies of low-value goods to NZ consumers reach NZD 60,000 in the last 12 months or are expected to in the next 12. Below that, a normal single low-value parcel usually has neither checkout GST nor import GST for the customer, but since 1 Apr 2026 a new Customs/MPI levy applies to low-value freight, paid by carrier/forwarder.

**Canada duty and tax per bed** (2026-10-04)  
Working classification 9404.90.90, 14 % MFN duty (CBSA Customs Tariff 2026, ch. 94); fallback risk 6307.90.99 at 18 %. Example customs value CAD 96.60: duty CAD 13.52; Ontario HST 13 % = 14.32, total 27.84 CAD; Alberta 19.03 CAD; Quebec and BC 19.03 plus QST or PST. Become importer of record only with CARM, broker, valuation/classification docs and returns process. Courier low-value: duty/tax-free only up to CAD 20.

**Christmas beds in CA, UK, AU, NZ and the country decision** (2026-10-04)  
Beds are buyable in all four; local offers mostly UK and AU, CA and NZ mostly international marketplaces and cross-border Shopify shops. Decision (4 Oct 2026): sell only to the US. UK only after VAT registration; Managed Markets impossible for a German entity with USD. A documented 2025 case: top-5 countries in one ad set sent 99 % of clicks to one country (France); practitioners say 70-80 % of budget drifts to one country.


Part 5 of 6 of "Research results: everything we asked Perplexity, condensed". Map of all parts: https://dlichters.com/ai/research/results.md · Previous: https://dlichters.com/ai/research/results/04-email-popups-and-lead-magnets.md · Next: https://dlichters.com/ai/research/results/06-us-law-ftc-rules-labeling-privacy-imprint.md
