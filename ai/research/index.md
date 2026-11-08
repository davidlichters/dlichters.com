# Research index: what we already paid to find out

When to read this: before asking any research question, to see whether the answer already exists in results.md, and to learn how we run research.

## Contents

- How we research (method and rules)
- The ten findings that matter most
- Topics in results.md (one line each)
- Questions asked but never answered

## How we research (method and rules)

- **Rule (David, 2026-10-03):** everything that can be answered without our own files goes to Perplexity, never to Claude's own web search or memory. Reason: Claude usage is scarce and expensive, Perplexity Max is a flat fee. Own websites are still measured directly (curl).
- **Tool:** Perplexity Max in a separate anti-detect browser profile, incognito chats. Since 2026-09-29 any question may name our shop, suppliers, prices or people (David: "every question should go through, chats are incognito anyway").
- **How a question is written:** start with "As of <month year>", give the full context (shop, price, cost, shipping time, country), ask numbered sub-questions, demand "every number with source and date", prefer sources from 2025 on. For important questions ask for four sections: STUFE 1 (answer in max 3 sentences), STUFE 2 (max 15 lines, key numbers with source), STUFE 3 (full detail, tables, exceptions), ÜBERNAHME (the decision we should take, up to five tasks with steps, tool, cost and duration, ready-to-paste texts). Add "no follow-up questions, make sensible assumptions and state them". Each question also states which decision depends on it.
- **Depth levels:** normal (one answer, minutes), deep research (6-12 min, 50-180 sources), and "triple" (2-3 independent answers to the same question, then the same model checks them against each other and writes a contradiction table). Use triple for anything that moves money, law or a launch rule.
- **Model choice (test on 2026-09-28, 11 models, same question):** GPT-6 Sol / GPT-6.1 Sol Thinking is the default (most sources, careful about what is not measured yet). Grok is a good second opinion. Avoid "Best"/auto, Nemotron, GLM for numbers (old data, undated blogs). Depth does not protect against a wrong key number: check the one figure a decision hangs on at its original source.
- **Inbox flow:** a question is a small JSON file (fields: question, deep yes/no, the decision it serves, category) dropped in the inbox folder `~/timo/recherche/eingang/`; since 2026-09-29 a watcher checks the shared repo with `git ls-remote` every 10 s and starts the question ahead of the queue (measured 20 s from push to start; details https://dlichters.com/ai/ops/tools/02-6-research-perplexity-bridge-toolsuite-adapter-nan.md section 6) (older text, replaced on 2026-11-07: "a job runs every 20 minutes"; that described the queue run before the 10 s watcher). It sends it, stores the answer as a Markdown file with question, thread link, model, source count and fetch time, and writes a status table (waiting / done / failed). Typical failures: browser not running (needs a cold start), answer not finished after 12 minutes.
- **After the answer:** read only STUFE 1 and 2 first. Mark every outside number as a guess for us until our own data or the primary source confirms it. Write the decision and what changed into the decision log. Never ask the same question twice (it happened several times on 2026-10-08; the answers were near identical).

## The ten findings that matter most

1. For narrow questions ("conversion of X at price Y in December") a public measured number almost never exists. Plan with cross-industry benchmarks, replace with own data fast.
2. Meta pets benchmark (Triple Whale, 1 Aug 2025-31 Jul 2026): CPM 16.27 USD (the current figure; the older 9.56 USD is full-year 2025 across all markets, and the Perplexity model test of 2026-09-28 used it as the wrong answer that Claude Opus deep research gave), CTR 2.37 %, CVR 1.63 %, CPA 38.51 USD; all-industry median CPA 38.99 USD, Meta CVR median 1.53 %.
3. Kill rule for a 69.99 USD product with 47.01 USD break-even CPA: check at 47, pause at 94.02 USD spend without purchase, hard stop at 141.03 USD; never kill on CPM alone; a 3-day CPA with under 10 purchases is only a direction.
4. Scale by steps after 3 stable days (75, 150, 300, 500, 750, 1,000 USD/day), or at most +20 % per 72 h; never daily jumps, never identical duplicates.
5. US duty on a textile dog bed from China: 27 % (7 + 7.5 + 12.5) of customs value; de minimis is gone for China since 2 May 2025; ship DDP so the customer never pays on delivery.
6. FTC Mail Order Rule: any shipping promise needs a reasonable basis; if late, send a delay notice with wait-or-cancel choice and refund in full within 7 business days; store credit is not allowed as a substitute.
7. No sales tax registration needed below economic nexus in each state (about a dozen states still count 200 transactions); a German operator still needs a German imprint.
8. Shopify Payments: no fixed reserve or chargeback ban rate is published; first payout 7-14 business days; plan cash as if part of revenue can be held up to 120 days; chargeback program starts at 1.5 % over 90 days.
9. Payment cost on our German Basic store measured at 5.83 % per order (2 % currency conversion plus card fee); USD payout only on Advanced (1.5 %) or Plus (1 %).
10. Creative: about 5 % of new Meta creatives become spend winners (Motion, 578,750 creatives); pet hook rate benchmark about 20-21 %; hook rate barely predicts purchase cost.

## Topics in results.md (one line each)

- **Market and demand:** when US owners buy pet gifts, breed rankings, Amazon search peaks, gift buyers without own pet.
- **Competitors:** US sleigh and Christmas dog bed sellers, prices 19-65 USD, Jingle Nap's organic growth, Chewy/Ruggable Q4 offers.
- **Products:** advent calendars, plush toys, sweaters, blankets, backpacks, strollers (no), December and post-Christmas products, existence checks.
- **Pricing:** 69.99 vs 59.99 vs 79.99, compare-at rules, buy-2 bundles, free shipping vs fee math.
- **Offer mechanics:** printable gift announcements after the cut-off, trading-card inserts, numbered editions, early-bird pricing.
- **Upsells:** blanket and bandana add-ons, realistic take rates (1.4-2.4 % per view, plan 5 %).
- **Meta costs:** CPM by month and week, CTR/CPC/CVR bands, country CPM math.
- **Meta testing:** learning phase, purchases needed, kill and stop-loss rules.
- **Meta structure:** first-campaign setup, optimization event, scaling ladder, countries, defaults to switch off.
- **Meta accounts:** spending limits, payment methods, agency accounts, stable account setup.
- **Meta policy:** breed copy, engagement bait, free-shipping claims, rejection timing.
- **Meta tracking:** test purchases, dataset connection, bulk import columns, UI paths.
- **Creatives:** hooks, hook/hold rates, UGC platforms and prices, AI images and video tools, what not to show.
- **Ad copy:** text lengths and truncation, offer vs story, deadline hooks, cat-tree wording.
- **Customer voice:** what buyers love and fear about pet beds, exact owner words.
- **Product page:** size guides and inner sizes, arrival dates, sticky bars, gallery, buy-button price.
- **Conversion:** mobile conversion medians, page speed effects, element test numbers.
- **Reviews and trust:** FTC review rule, empty widgets, review counts, histograms, trust blocks.
- **Email and popups:** popup offers and timing, abandoned-cart benchmarks, lead magnets.
- **Shopify setup, apps, how-tos:** plans, free delivery-date and bundle apps, app-free order-by dates, Cloudflare 429.
- **Payments:** Shopify Payments fees, reserves and payout timing, PayPal, Whop (no), BNPL options for a German seller.
- **Fraud and chargebacks:** settings for a new store, network thresholds (Visa VAMP, Mastercard ECM, Stripe 0.75 %).
- **Returns:** return and refund benchmarks, keep-it refunds, competitor policies.
- **Customer service:** support load per 100 orders, free tools, Inbox AI agent.
- **Suppliers:** RFQ and price negotiation, order hand-off automation, paying Chinese agents safely, pilot SLA, collaborator access risks, US-warehouse backups.
- **Fulfillment:** US 3PLs for seasonal bulk stock and deadlines.
- **Shipping:** real transit times China to US, DDP providers, holiday carrier deadlines, honest delivery text.
- **Customs:** HTS code, duty stack, CBP postal rule from 22 Oct 2026.
- **Sales tax:** nexus thresholds of the biggest states and transaction-count states.
- **Other countries:** UK VAT, Canada duty and GST/HST, Australia GST, New Zealand GST, Managed Markets (not available).
- **US law:** FTC mail order rule, money-back guarantees, endorsements, product labeling, privacy policy, German imprint.
- **Minors:** age rules of PayPal, Shopify Payments, Whop (historical; David is 18 since November 2026).
- **AI tools:** Claude plans and API prices, Meta and Shopify connectors for agents, Perplexity model test.
- **Other tools:** spy tools, WhatsApp and Workspace pricing, TikTok scanners.
- **Cold email:** safe sending ramp.
- **Idea checks:** four German B2B ideas, all already sold by others.
- **Founders:** what billionaire stories and founder studies really show.

## Questions asked but never answered

About 30 questions from 2026-10-13 to 2026-11-03 were queued but are still marked "waiting" (the Perplexity browser pipeline was often down). Topics: Curlmoon CPA, worldwide dropshippers, money flow without own account, gift tax on 1,000 EUR, faster § 112 BGB court approval, agency ad accounts for minors, Apple developer minimum age, trademark check for a book name, Section 301 tariff detail, review photos, holiday logistics, supplier WhatsApp follow-up etiquette, add-on product compliance (plush CPSC/Prop 65, bandana textile rules), Admin API write-scope risk, theme publish queue, AutoDS winter products, same-product second-product strategy, bank vs card payments to China, silent China suppliers, TopDawg/Gooten blind dropship reviews, Essential Pet Products terms, December lead-time cut-off, DDP backup suppliers, US warehouse stock-out risk, free traffic without ad budget. If one of these matters again, ask it fresh.
