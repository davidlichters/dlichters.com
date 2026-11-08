<!-- part of ecom/deep/06-conversion-optimization.md -->
Part 7 of 40 of "6. Conversion Optimization: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/06-conversion-optimization.md · Previous: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/06-customer-research-feedback-and-behavior-analytics.md · Next: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/08-matching-traffic-to-awareness-stage-and-page-type.md

### AI-driven CRO audits: setup procedure and prompts

Running an AI-assisted CRO website audit with three separate prompts in one project:

1. Create an AI project named 'CRO website audit' and add two sources: the audit instructions (a system-style brief defining the auditor role, the audit criteria, and rules) and an input-metrics document.
2. Fill the input-metrics document with the homepage headline, subheadline, primary CTA, key homepage messaging themes, promotional banner examples, social proof, collections, hero product and its positioning, average price range, the metrics conversion rate, AOV, traffic by channel, returning customer rate, add-to-cart rate, checkout completion rate, Meta ROAS and MER, the top customer objections, the main promotional offer, example bundles, the primary target customer, a secondary audience and their psychographics.
3. Open a separate chat for each prompt: Prompt 1 is the customer journey diagnosis, Prompt 2 rewrites weak sections (one section at a time is recommended), Prompt 3 builds the 30-day roadmap.
4. If the AI output is inaccurate, feed it screenshots of the homepage or product page and ask for a deeper look.
5. Before making major theme or website changes, duplicate the theme so you can revert if something breaks.
6. Turn the roadmap into delegated tasks per team member if you have a team.

[L0886, 2025-26]

Input metrics document for the audit (start with text only, add screenshots later if the output is inaccurate):

```
- Store URL
- Homepage copy: hero headline, subheadline, primary call to action, key homepage messaging themes, promotional banner examples
- Social proof: ratings, testimonials, and how many customers trust the brand (historical or current)
- Collections and hero product, including how the hero product is positioned
- Average price range
- Key metrics: conversion rate, AOV, traffic by channel, returning customer rate, add-to-cart rate, checkout completion rate, Meta ROAS, MER (marketing efficiency ratio)
- Top customer objections: the reasons people hesitate or do not buy
- Main promotional offer and example bundles
- Target customer as specifically as possible, secondary audience, and their psychographics
```

[L0886, 2025-26]

Prompt 1, customer journey diagnosis:

```
Take on the role of a seasoned senior CRO specialist for ecommerce and review this store as someone landing on it for the first time. Pinpoint the largest places where visitors drop off, covering clarity, credibility, the deal itself, the product page, the mobile version, points of friction, handling of hesitations, and what pushes someone to buy. Rank these problems by how much revenue they likely cost, and justify each ranking.
```

[L0886, 2025-26]

Audit assistant instructions (the auditor brief):

```
You are a compact, AI-driven assistant for ecommerce conversion rate optimization and customer journey auditing. Your job is to examine the path a buyer takes through an online store so it becomes easier to follow, more believable, less effortful, and more likely to convert. Review these areas:
1. Clarity: does a visitor immediately grasp what the brand sells and why that matters?
2. Trust: is there enough confidence from reviews, social proof, press coverage, the founder's story and similar cues?
3. Friction: where does the shopper have to work too hard?
4. Offer: is the deal attractive and simple to understand, including bundles, discounts and free shipping?
5. Product page conversion: does the product page clearly lay out what the item is, its advantages, its use cases and its objections?
6. Homepage journey: does the homepage orient visitors quickly, build credibility and explain the product category?
7. Mobile experience: assume most visits come from phones and point out anything on a small screen that could slow people down.
8. Objection handling: what must a customer know before purchasing, and does the site answer that plainly?
9. Conversion prioritization.
The five pages in scope are the homepage, product page, collection page, cart and checkout.

Guidelines:
- Be concrete, not generic. Do not hand over a list of stock suggestions.
- Put customer clarity and trust ahead of cleverness.
- Rank recommendations by impact, effort and confidence.
- Do not suggest A/B testing by default if the brand probably lacks the traffic to reach a meaningful result.
- If a change is obvious and low-risk, label it a 'fix' rather than a 'test'.
- Explain the commercial reason behind each recommendation.
- Keep advice workable for a small, lean ecommerce team.
- Aim for a higher conversion rate, higher average order value, stronger customer confidence and more completed purchases.
- Write in plain language that can go straight into call notes, a Slack recap or a CRO checklist.
- Rewritten copy should convert while staying true to the brand voice.
- If information is missing, say what you would need to sharpen the audit.
- When screenshots, website copy or metrics are provided, first ask only for the most critical missing item if one is needed. Otherwise, carry on with what was supplied.

Output layout: open with an executive summary. Then give the customer journey diagnosis with an impression of each core area, the biggest trust gaps, the friction points, copy and messaging improvements, and finally a prioritized action plan.
```

[L0886, 2025-26]

### AI-driven CRO audits: example result

- In an example audit of a premium hair-tool store priced at $149 to $299, the biggest leak was price skepticism. First-time visitors did not see why the product was meaningfully better than well-known branded tools or marketplace tools. The highest-impact opportunities were: clarify the value proposition above the fold; add stronger science and proof for the core technology and damage reduction; add direct comparison content against branded premium tools, marketplace tools and standard hot tools; improve objection handling on the product page; make the offer easier to understand; and reduce checkout hesitation, which was flagged because checkout completion was only 54%. [L0886, 2025-26]


Part 7 of 40 of "6. Conversion Optimization: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/06-conversion-optimization.md · Previous: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/06-customer-research-feedback-and-behavior-analytics.md · Next: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/08-matching-traffic-to-awareness-stage-and-page-type.md
