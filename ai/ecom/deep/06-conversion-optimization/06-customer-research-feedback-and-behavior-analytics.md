<!-- part of ecom/deep/06-conversion-optimization.md -->
Part 6 of 40 of "6. Conversion Optimization: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/06-conversion-optimization.md · Previous: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/05-when-to-kill-a-product.md · Next: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/07-ai-driven-cro-audits-setup-procedure-and-prompts.md

## Customer research, feedback and behavior analytics

### Why people buy and why they leave

- Study why customers buy before designing the store and the offer, because the psychology determines what the page must show. [L0914, 2026]
- Market research and emotional framework analysis improve pre-landing pages, bottom-of-funnel ads, the website and overall funnel performance. Scaling advertising works best when every message addresses the actual psychological needs of the target customer. [L0221, 2026]
- Customer knowledge improves conversion because the offer and messaging then match the points customers need to see before buying. It also shows which traffic channels to use, by focusing on the places where ideal customers are most often online. ** [L0872, 2021-22]
- The first customers reveal the real buyer profile. A niche with a specific buyer group can justify building a page for that group, and designing the store around the first customer type can open a repeat business channel. [L0360, 2024]
- Monitoring visitors online works like standing in a physical store and observing customers: track how many enter, how long they stay, what they examine, and what they purchase or avoid, then improve based on observable patterns. [L0293, 2020-26]
- Improvements based on what one visitor tells you benefit all future visitors, so conversion gains compound over time. [L0208, 2024+]
- Objections from visitors who browsed but did not buy, found in complaints, comments and feedback, show the real hesitations that stop purchases. Use them to guide page copy, FAQs and ad messaging. [L1268, 2026]

Example of a primary customer desires framework for a financial product (example: social security):

| Desire | Urgency | Notes |
|--------|---------|-------|
| Not to be the fool who left money on the table | 9/10 | Loss-aversion-driven; stronger than gain-framed version |
| Certainty that the irreversible decision is right | 10/10 | Peaks sharply in the 90 days before filing |
| Protect the spouse who will outlive me | 8/10 | Highest emotional intensity; lowest current awareness |
| Enough monthly income not to be afraid | 7/10 | Chronic, background, always-on desire |
| Avoid a permanent Medicare penalty | Variable | Sharp spike at age 64.5-65 |
| Understand it well enough to stop feeling stupid | High | Dignity desire; massively powerful |
| Get money owed that I didn't know about | High | Fairness-based; divorced-spouse survivor angle |
| Retire before my health goes | High | Drives early claiming against standard advice |
| Not be a burden on my children | High | Identity and family role protection |
| Beat the system that I think is unfair | High | Fairness desire; fuels 'claim early' behavior |

[L0221, 2026]

### Diagnosing from the traffic side and from visitor signals

- When conversion problems are hard to diagnose from the inside, ask visitors and customers directly for feedback. Owners often cannot see their site objectively because they are emotionally attached to it, so customer answers replace internal assumptions. ** [L0682, 2021-22]
- Collect feedback to find recurring patterns across many answers, not to react to a single opinion. One response never justifies a site change, while a problem named by a meaningful share of respondents deserves a plan. ** [L0682, 2021-22]
- Asking customers where they found the site or why they contacted support is a useful signal, but few stores do it, so it is too thin to diagnose a low conversion rate on its own. Do not wait for that feedback. Start the diagnosis on the traffic side and work through the funnel. *Older advice (2021-2022).* Both sources apply together: ask customers when you have enough volume to hear them, and start on the traffic side when feedback is thin. [L0473, 2021-22; L0682, 2021-22]
- In Google Analytics, go to Behavior and open the page as a landing page. Check bounce rate, time on site, time on page, the number of visitors who continue to other pages, and the number who exit from it. ** [L0473, 2021-22]
- Average session duration above 15 seconds indicates customer interest in the product. A session under 15 seconds means the customer left early because of weak images, offer or messaging. [L0321, undated]
- A high bounce rate on a Google Shopping product page can be normal, because these visitors already know what they want. If the page answers every buying question, check session recordings for frustrations rather than assuming the page is at fault. [L0804, 2023]

### Self-testing the store

- Take a week away from the store, then open it as a real customer and try to buy a product, for example pants. Note what prevents you from completing the purchase at each step. Note what demotivates you, such as slow loading, unclear prices, missing shipping information or too many pop-ups. Ask a good friend who will be honest to buy a product while thinking out loud, and watch where they hesitate. Do not rely on family members for honest feedback. [L0390, 2019]
- Make a purchase yourself on your own store. If you would not buy, note why and change it. If you could not buy, note why and fix it. [L0423, 2019]
- If the store looks perfect and you still see no problems, get an outside view. Ask a friend to go through the buying process and have them think out loud, so you hear their hesitations. [L0423, 2019]

### Choosing a feedback method

| # | Method | Channel |
|---|---|---|
| 1 | Post-purchase survey | Email, sent a set time after purchase (separate from the review request) |
| 2 | Customer service survey | Phone or chat support, asked before the call ends |
| 3 | Exit-intent survey | Pop-up when a visitor is about to leave |
| 4 | On-site survey | Single question sliding onto the page, or on-site survey tool |
| 5 | Online chat survey | Automated chat that asks questions or links to a survey |
| 6 | Browse abandonment survey | Email triggered by a browse abandonment event |

[L0682, 2021-22]

- Method choice depends on order volume and traffic. At around 100 customers per day, asking existing customers about the site is practical. Without customers, the business must reach visitors who have not bought yet. ** [L0682, 2021-22]
- Introduce feedback collection gradually. Start with one or two methods and add more over time, since running all six at once is unnecessary. Sites with different order volumes and traffic levels will find different methods work best. ** [L0682, 2021-22]
- Post-purchase survey answers come only from people who already bought, so they cannot show why non-buyers left. Their suggestions for improvement still help make future visitors more likely to convert. ** [L0682, 2021-22]
- Hotjar is a behavioral tracking tool that also offers on-site surveys that appear on the page. It is the recommended tool for on-site surveys. ** [L0682, 2021-22]
- Google Forms is free for off-site surveys. Paid alternatives are Typeform, RightMessage and SurveyMonkey. Typeform can be embedded directly on a Shopify page so the visitor stays on the domain. ** [L0682, 2021-22]
- Keep surveys and testing running as an ongoing process. Stopping once the first round is done wastes insight into customer friction, so conversion work should be a constant improvement process. ** [L0399, 2021-22]

Setting up the off-site customer survey (*older advice, 2021-2022*):

1. Create emails that invite visitors, opt-ins, pre-purchase prospects and existing customers to complete the survey on your site experience.
2. Choose questions from the survey template list.
3. Build the first survey with these questions.
4. Use the survey in the emails.

[L0399, 2021-22]

Implementation steps for customer feedback (*older advice, 2021-2022*):

1. Set up one off-site survey (e.g. Google Forms or Typeform).
2. Add the survey email and a reminder into the post-purchase thank-you email sequence.
3. Choose one on-site survey method and implement it (Hotjar survey, exit-intent pop-up, on-site pop-up, or online chat survey); test variants later to improve response rate.
4. Task the customer service team to ask key questions during calls, especially pre-purchase.
5. Set up a Q&A tracking tool and give the right people access.
6. If browse abandonment tracking is used, set up a browse abandonment feedback email.

[L0682, 2021-22]

### Survey design rules

- Off-site surveys should be short, with three to five questions and a maximum of five. Three is a good number. State clearly that the survey takes only a couple of minutes. ** [L0682, 2021-22]
- Collect at least 50 responses per question before drawing conclusions or hypotheses. Aim for 100 responses per question for conversion-related decisions. ** [L0682, 2021-22]
- Make each survey question specific enough that every possible answer leads to a clear conclusion. Use yes/no or 1-to-10 rating questions where they are enough to decide whether a problem exists. Use open-ended questions where nuance is needed to find a solution. ** [L0682, 2021-22]
- Recommended pattern: if 10 out of 50 respondents name the same problem, treat it as a pattern worth acting on and plan an improvement for that area. ** [L0682, 2021-22]
- On-site surveys should ask one single question at a time, appearing as a slide-in on the page. Rotate the question over time: keep one question for a few weeks, then switch to another after it has run for a while. ** [L0682, 2021-22]
- Exit-intent or timed pop-ups for feedback can be shown when a visitor leaves or after about 30 seconds to a minute on the site. Ask for a short survey of about two minutes and explain its purpose. Expect only a minority of visitors to respond, so the survey must run long enough to build useful data. ** [L0682, 2021-22]
- Asking visitors why they did not buy with an exit-intent pop-up: only about 5% of visitors usually answer, but the answers can reveal issues such as unclear shipping regions or missing information. Fix these in the FAQ or on the page. [L0390, 2019]
- For an automated chat survey, the chat can trigger on specific pages or after a set time, then run a series of questions in the chat. Each answer triggers the next question, and the answers appear in the chat software. The alternative is a chat message that links out to an external survey, which sends the visitor away from the site. ** [L0682, 2021-22]
- Survey length depends on where the survey appears. Off-site surveys: three to five questions (*older advice*, see above). Single questions fit moments of hesitation, such as the cart or checkout page, and the last abandoned checkout email. Sources differ on count, so match the count to the channel: one question at the point of hesitation, three to five in a full off-site survey. [L0682, 2021-22; L0423, 2019; L0605, undated]

Template for a cart or checkout feedback poll (one short question, asked at the moment of hesitation):

```
Place a feedback poll on the cart or checkout pages that asks: What's stopping you from completing this purchase? Keep the question short so visitors answer it at the moment they hesitate.
```

[L0423, 2019]

### Post-purchase and order confirmation surveys

- Add a short survey to the Shopify order confirmation (thank-you) page, using an app or a free Google Form, and send the responses to Google Sheets. Customers are most willing to answer right after buying. [L1204, 2022]

Post-purchase survey for the order confirmation page (answer fields can be multiple choice or short text):

```
1) Why did you buy from us?
2) What was the most important factor for you when choosing a [niche product]?
3) Are you looking to buy any other [niche products]? If yes, which ones?
4) Which websites, podcasts and YouTube channels do you follow?
5) How did you hear about us?
Replace the bracketed parts with your niche. Use the answers to plan monthly offers, find new products to add, and find new advertising channels.
```

[L1204, 2022]

- Use a small prize draw on the survey, for example one monthly cash winner, to give buyers a reason to answer. State on the survey that answers are anonymous. [L1140, 2026]
- On the first screen of a post-purchase survey, state the reward clearly: a monthly cash prize such as $1,000 for one respondent per month, plus a note that all answers are anonymous. A chance to win costs the buyer nothing, so the prize is a reason to answer rather than a payment per answer. [L1140, 2026]
- Survey invitation formula: reward + time needed + number of questions + anonymity note. It works because it lowers the perceived effort and risk of answering, which raises completion rates for post-purchase surveys.
  - Example 1: Tell us why you bought and get 10% off your next order. Three quick questions, under 60 seconds, and all answers stay anonymous.
  - Example 2: Two short questions about your results, about 45 seconds, and one buyer each month gets a $50 gift card.

[L0906, 2026]

- Post-purchase survey rewards in the one source example differ from the older one source case: a 30 to 50 USD gift card was offered for about 30 minutes of time in a pre-launch interview. Choose the reward by the effort asked: short surveys fit a small prize or discount, while long interviews need a clear payment. [L0390, 2019]

### Abandoned checkout and exit follow-up

- Add the survey question to the last abandoned checkout email, after the other emails have addressed price, offer and trust. Ask what stopped the customer from buying and send a simple plain text email rather than an image-heavy one. Split test the survey in the last email against the first email to compare the replies. [L0605, undated]
- Surveys are less useful at the start of an abandoned checkout flow, because customers stop for different reasons and each email must address them all. Once the flow already answers trust, price and offer objections, a survey in the last email shows what remains unsolved. [L0605, undated]
- Call customers who abandoned checkout to ask why they did not complete the order, and record the answers as qualitative data for improving the store. Do not call on Sundays, since many customers do not welcome calls then. ** [L1090, 2021]

### Session recordings, heatmaps and device checks

- Start the Lucky Orange free trial only after active traffic is coming to the store, not during development. You can cancel within the first six days to avoid being charged. [L0293, 2020-26]
- Use Lucky Orange to record individual sessions and heatmaps. Recordings show where visitors click, hesitate and exit. Analyze drop-off points after 150 to 200 sessions to decide whether to improve images, offer, trust factors or product fit. [L0321, undated]
- Recordings show whether people add to cart, click the bundle, or leave at the product page, which helps diagnose a funnel problem. [L0950, 2023]
- Lucky Orange helps find clicks on non-clickable elements or actions you do not want. Use those recordings to make optimizations to product pages. [L0835, 2023]
- Heatmap review, page by page:
  1. Open Lucky Orange and review heatmaps page by page to identify where visitors click most heavily (deep orange areas).
  2. Verify whether areas with high click activity are actually interactive or meant to be.
  3. For non-clickable areas receiving heavy clicks, redesign that section to be clickable or clarify its purpose.
  4. Check your Add-to-Cart button specifically: it should display as deep orange (most-clicked area).
  5. If the Add-to-Cart button is not deep orange, enlarge it, change its color, or increase its visual prominence.

  [L0293, 2020-26]
- Use session recordings to find device-specific bugs, such as a feature that works on desktop but fails on one particular Android phone. Check the recordings for that device, then fix the layout or function and test it on the same device again. [L0390, 2019]
- Online visitor monitoring works the same way as observing customers in a physical store: you track entries, time spent, what they examine, and what they buy or avoid. [L0293, 2020-26]

### Live chat as a signal

- Questions in live chat are a signal of conversion problems. When customers ask for variants that are not available, the variant structure may be confusing. Splitting variants into separate landing pages can clarify what is on offer. [L1315, 2023]

### Competitor and customer research

- Competitor product-page analysis, step by step:
  1. Find your previously best-selling product pages in your store.
  2. Search each product name on Google.
  3. Open the product pages of the top competitors that appear in the results.
  4. Check whether they changed anything compared with last year, and identify the changes that help them overcome obstacles you also face.
  5. Repeat this regularly, because competitors keep adapting and the process becomes an ongoing back-and-forth.

  [L0472, 2025]
- Find the most visited product pages in the store analytics, which are the products receiving the most clicks from ads. Search each product on Google and review the results as a shopper would. Compare competitors on price, product photos, product descriptions and shipping speed. Ask why a shopper would choose the competitor over your store, then adjust your product page so it beats the competitor on those points. [L1083, 2024+]
- Analyze competitors at product-page level:
  1. Pick competitor stores in your niche.
  2. Open their product pages side by side with your own.
  3. Note what competitors do well and where they are weak.
  4. Turn each competitor weakness into a strength on your own product pages.

  [L1116, 2025]
- Before comparing a product across two stores, make sure both listings are the same variant, for example a 12-light model against a 12-light model. Load both product pages with the same SKU or name so the comparison of price, images and policies is fair. [L0894, 2020-26]
- Competitor research findings should directly inform conversion rate optimization work, not stay as a standalone document. Review the research before making any conversion-related change so that changes respond to the market. ** [L0898, 2021-22]
- Customer research case, skincare startup selling its own sustainable cosmetics: it used user feedback tools to form hypotheses before redesigning its website. It spent about 3 months building the new design, then about 3 more months tweaking it. Before launch it asked its top 10 customers for feedback, offering a 30 to 50 USD gift card for about 30 minutes of their time. After the redesign, the store reached a 5% conversion rate for new visitors and 8% for returning customers. [L0390, 2019]

### AI-driven CRO audits: principles and scope

- Run an AI-assisted audit of the full customer journey before hiring an agency or buying complex CRO testing tools. This fits brands doing roughly $500K to $2 million a year that have not yet completed the basic best-practice review of every page from homepage to checkout. [L0886, 2025-26]
- The target store profile for this audit is a brand doing roughly $500K to $2 million in annual revenue that has not yet done the foundational best-practice review of its full customer journey. [L0886, 2025-26]
- ChatGPT Projects can hold the audit instructions and input metrics as sources, with each prompt run in its own chat. Claude can be used the same way. Projects are a container that keeps all three audit prompts and their outputs together. [L0886, 2025-26]
- The audit should cover five customer journey pages: homepage, product page, collection page, cart page and checkout. The criteria are clarity, trust, friction, offer, product page conversion, homepage orientation, mobile experience, objection handling and conversion prioritization. [L0886, 2025-26]
- Audit instructions should demand specific, not generic, recommendations. Prioritize customer clarity and trust over cleverness. State that the output must explain the commercial reason for each recommendation and be usable in call notes, Slack recaps or a CRO checklist. Include that the AI should assume most traffic is mobile and flag small-screen friction. [L0886, 2025-26]
- When metrics, screenshots or copy are provided, the audit assistant should first ask only for the most important missing information, then proceed with the audit using the data given. [L0886, 2025-26]
- Input metrics to supply to the audit: conversion rate, average order value (AOV), traffic by channel, returning customer rate, add-to-cart rate, checkout completion rate, Meta ROAS and MER (marketing efficiency ratio). [L0886, 2025-26]
- The example brand's checkout completion rate of 54 percent was flagged as a key leak, because the audit uses input metrics to decide which opportunities come first. [L0886, 2025-26]
- Fictional or approximated metrics can test the audit flow. For real results, the input metrics should match the actual store as closely as possible, including the URL and real copy. [L0886, 2025-26]
- Feed screenshots of the homepage or product page into the audit whenever AI output hallucinates or is inaccurate, so it can give deeper, more precise feedback. [L0886, 2025-26]
- Run the audit prompts one section at a time, rewriting these separately rather than all at once: homepage hero, above-the-fold messaging, product page headline, benefit bullets, FAQ and objection handling, offer framing, shipping and returns clarity, and trust badge placement. [L0886, 2025-26]


Part 6 of 40 of "6. Conversion Optimization: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/06-conversion-optimization.md · Previous: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/05-when-to-kill-a-product.md · Next: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/07-ai-driven-cro-audits-setup-procedure-and-prompts.md
