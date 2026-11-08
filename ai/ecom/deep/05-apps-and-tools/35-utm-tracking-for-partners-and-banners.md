<!-- part of ecom/deep/05-apps-and-tools.md -->
Part 35 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/34-advertising-platforms-tracking-and-attribution.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/36-conversion-testing-site-speed-and-monitoring.md

### UTM Tracking for Partners and Banners

- Add a referral or banner partner link with UTM tracking:
  1. Choose the destination URL. [L0971, 2024]
  2. Open a UTM builder. [L0971, 2024]
  3. Set utm_source to banner ad, utm_medium to banner, and utm_campaign to the partner URL. [L0971, 2024]
  4. Leave campaign ID empty. [L0971, 2024]
  5. Copy the generated link and send it to the partner. [L0971, 2024]
  6. Check the traffic, country and sales of that source in Google Analytics. [L0971, 2024]

### Reporting and AI Reporting Limits

- Supermetrics is a Google Sheets add-on that connects to ad accounts such as Google Ads, Bing Ads and Facebook Ads and pulls their data into a sheet. Because the data lands in a regular spreadsheet, Google Sheets formulas and conditional formatting can be applied to it directly. [L1236, 2015+]
- Manus is an AI agent that can connect to a Meta ad account through Meta marketing tools, read the ad-level names and build a report. It processes the exported data with Python code to produce the final file. [L0885, 2025-26]
- Manus is an AI agent that can connect to a Meta ad account and load a Meta Ads analysis skill before pulling data. At the time of recording, it had just been acquired by Meta (Facebook), so its roadmap and features may change. [L0885, 2025-26]
- Setting up an AI creative-count report in Manus:
  1. Go to Manus and integrate (connect) the Meta ad account. [L0885, 2025-26]
  2. Send a prompt that names the ad account, describes the report and attaches an example report. [L0885, 2025-26]
  3. State what to exclude (iterations and new concepts) and which field to group by (product type from the ad-level naming convention). [L0885, 2025-26]
  4. Review the delivered report, which can be produced as a spreadsheet. [L0885, 2025-26]
- Prompt for the creative-count report (use as written, replacing the bracketed placeholders):

```
I need you to look at the ad account [AD ACCOUNT LINK]. I need a report like the attached example that tracks the total number of creatives launched per month per product. Now note that we do not track iterations or new concepts. What I need is the report by product type, which is part of our naming convention at the ad level (for example: Mixed, Oodie, Weighted Blanket, [OTHER PRODUCT TYPES]). Count each ad once in the month it launched, show the monthly totals per product type, and deliver the final report as a spreadsheet.
```
[L0885, 2025-26]

- When asking an AI agent for an ad account report, you can attach a screenshot or recording of an example report, or describe the output in exact words. In the words, state what must be counted, what must be excluded (for example iterations or new concepts), and which naming field to group by. [L0885, 2025-26]
- Conflict note on AI reporting: Manus can connect to and build reports from a Meta account [L0885, 2025-26], but current AI reporting tools such as Manus are not yet reliable for interpreting ad account results. Use the AI for data gathering and file production. Use human analysis from mentors, group calls or one-on-one coaches to interpret the data. [L0885, 2025-26]
- In Excel, the status bar shows Average, Count and Sum for a selected range of cells. Example: selecting 5 values that sum to 273 gives an average of 54.6. [L0885, 2025-26]

### Automation Limits

- Conflict note on automation: Ad Manage.ai offers cross-platform automation rules [L0207, 2025-26]. Older advice (2020) states that automating ads with tools like Zapier is not recommended. Facebook's built-in automated rules are occasionally useful but rarely worth the effort. [L1088, 2020]
- Preflect AI is an ad automation tool that runs campaigns across Facebook, Google and TikTok for about $500 per month, with no minimum ad spend. It suits owners who want a hands-off setup, but someone still has to read the data and decide the next test. [L1184, 2023+]

### Click Fraud Protection

- a separate click fraud app is not necessary. Monitor all ad campaigns and exclude Google Display Network sites that bring in little value or show poor results. [L1068, 2019]
- a click-fraud protection app was tested for one month by one operator and did not save any ad money, so it was not recommended. Compare any savings against the monthly fee within the first month before keeping such a tool. [L1092, 2022]


Part 35 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/34-advertising-platforms-tracking-and-attribution.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/36-conversion-testing-site-speed-and-monitoring.md
