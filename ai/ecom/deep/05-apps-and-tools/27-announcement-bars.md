<!-- part of ecom/deep/05-apps-and-tools.md -->
Part 27 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/26-reviews-social-proof-and-surveys.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/28-upsells-bundles-cart-and-post-purchase-offers.md

### Announcement bars

- A Quick Announcement Bar is a thin banner at the top of a store used to show short messages such as shipping offers or promotions. [L1089, 2021]
- Quick Announcement Bar by Hextom is a Shopify app with a free plan. It displays a sitewide bar at the top of the store, and the free plan covers this setup, so premium options are not required. [L0531, 2020-26]
- The app supports promotional messages such as coupon codes or floating bar alerts. It supports dynamic text that changes based on product collections. [L0245, 2020]
- Quick Announcement Bar by Hextom is an expiring coupon banner that can be excluded from specific pages or collections. Use it when some suppliers forbid discount codes, so the banner does not appear on their product pages. [L1090, 2021]
- **Conflict on advanced targeting:**
  - Quick Announcement Bar is the fallback when a store's theme has no built-in announcement bar section. Its free plan covers a sitewide code bar. The paid tier adds advanced page targeting and custom code options that this setup does not need. [L0531, 2020-26]
  - in the app, use the Advanced targeting option to exclude specific vendors or collections so the bar does not show on their pages. The app's conditional logic is free to use. [L0671, 2021]
  - Use the 2021 value only if the free advanced targeting is still available in the app. Otherwise use the paid tier that the other unit describes. [L0531, 2020-26; L0671, 2021]

**Install (procedure):**

1. In the Shopify admin, open Apps and click Visit app store.
2. Search for quick announcement bar and select the app by Hextom.
3. Choose the free plan and click Add app.
4. Grant the requested access and click Install app.
5. To return later, open Apps in the admin and click the app.

[L0531, 2020-26]

**Create and style the bar (procedure):**

1. In the app's dashboard, click create new bar.
2. Choose one of the basic templates. The lesson used a blue template.
3. Enter an internal name for the bar, for example save 10, which is not shown to visitors.
4. Paste the message text into the message field. The preview appears immediately.
5. Replace the old code and date in the message with the current code and the next expiry date.
6. Set "Is the bar clickable?" to no.
7. Set the close button to no.
8. Keep the display position at the top, which makes the bar sticky.
9. Set the background and text colors with the color picker to match the store theme, or enter specific color codes.
10. Keep the font consistent with the store, and leave font size and bar padding at their defaults unless a change is needed.
11. Click Save.

[L0531, 2020-26]

- The bar's target configuration is at its default of showing on all pages. Keep it set to every page for a sitewide code, and make sure the bar is shown on both desktop and mobile. [L0531, 2020-26]
- If different suppliers need different coupon codes, exclude the pages of the brands that should not show the current code. Paste their URLs or a keyword from their URLs into the app's exclusion field. This is optional and depends on the store's profit margins. [L0531, 2020-26]

### Surveys: post-purchase feedback

- A post-purchase survey asks buyers why they bought, what their pain points are, and what they expect. It is useful for stores that do not yet have enough own customer data. Re-convert runs such surveys. [L0902, undated]
- Post-purchase surveys ask customers questions after the purchase flow. Their results show which messages and angles customers respond to. [L1141, 2026]
- A post-purchase survey app can ask buyers why they bought and how they use the product. The exact app name was not clear in the recording. [L1213, 2023]
- Post-purchase surveys reach people who have already paid, not random visitors. Use them to learn why customers bought, what problem they had, and what result they want. [L0906, 2026]
- A single on-site survey can run through an online chat widget or Hotjar. Visitors answer simple questions on the site to give feedback on their experience. [L0399, 2021-22]
- Feedback forms do not need polished design. A simple option such as Google Forms is enough. Spend the effort on writing specific questions, not on the look of the survey. [L0682, 2021-22]

### Surveys: Zigpoll

- Zigpoll is a post-purchase survey tool. It asks customers about their pain points, wants and objections. The responses help decide what to say in ads. [L0351, 2026]
- Zigpoll is a survey app that asks customers questions after they have bought, so answers come from people who already paid. Responses can be exported as a CSV file for analysis. [L1140, 2026]
- Zigpoll connects to third-party tools such as Slack, so survey responses can be passed on to other business apps. Check the integration options in the app before building a separate export process. [L1140, 2026]
- A Zigpoll post-purchase survey appears on its own for buyers right after they buy. No separate invitation link is needed. Set it up as a post-purchase survey so responses come from people who have already paid. [L0906, 2026]
- Zigpoll setup rules:
  - Set at most five questions per survey, each with four to five answer options. [L0906, 2026]
  - Reorder questions with drag and drop under Slide Management, and check the Survey Preview before publishing. [L0906, 2026]
  - Set open-ended questions to the Long Answer question type, and keep closed questions as multiple-choice with four to five options. Use Long Answer where you want the customer's exact words about their problem, trigger or result. [L0906, 2026; L1140, 2026]
  - Reorder the slides with Slide Management by dragging and dropping them into place. [L1140, 2026]
- Rewards: a Zigpoll survey can show a promo code on its completion screen as the reward for finishing. Alternatively, offer a monthly cash prize draw for one respondent, for example $1,000, if a discount is not suitable for your margin. [L0906, 2026]
- Export: open the survey's responses in the Zigpoll dashboard and use the export button to download a CSV file. If the button is hard to find, Zigpoll support can point it out. [L1140, 2026]
- Analysis setup: create a Claude project for the product, add the exported survey CSV to the project's knowledge, and start all analysis chats inside that project so the file stays available. [L1140, 2026]

**Analysing responses (procedure):**

1. Wait until you have a usable number of survey responses, around 50, 100, or 200 or more.
2. Download the responses from Zigpoll.
3. Paste the responses into Claude.
4. Add the responses to your Claude project knowledge.
5. Ask Claude to find common pain points, common desires, objections, frequently used phrases, emotional patterns, new ad angles and new hooks.

[L0906, 2026]

### Referral and loyalty

- Smile.io is the recommended loyalty app for Shopify stores. It is simple to set up, highly customizable, and lets the store owner set the reward rate for their products. Other loyalty apps exist in the Shopify App Store if Smile.io does not fit. [L0956, 2021]
- Luke's Reviews includes a referral program, set up as described in the Luke's Reviews section above. [L0634, undated]
- a referral app gives each customer who signs up the tools needed to refer others, such as a link or code and ready-made shares. The app tracks every referral made through that link or code. [L1234, 2021]
- Referral tracking works like affiliate marketing. Each participating customer uses a unique link or code, and the system attributes purchases to that customer. This is how a referral is credited to the person who made it. [L1234, 2021]
- Setup of a referral app is largely automatic. Install it, then configure it for the business and the chosen reward model. Once configured, the app generates the materials customers need to refer others. [L1234, 2021]
- Refersion is a referral tool that can also run affiliate arrangements. This is useful when working with bloggers or forum owners. It is one of the recommended tools for referral programs. [L1234, 2021]
- Referral Candy is another recommended referral app. Further referral apps are available in the Shopify app store. [L1234, 2021]
- Talkable is a referral and rewards app that costs about $2,000 and includes fraud protection. It is useful when referral volume becomes too high to approve each referral manually. [L0790, 2017]
- Friendbuy is an affordable referral app for running a friend-referral program in your own store. It is an alternative to Talkable for a similar purpose. [L0790, 2017]
- Klaviyo can automate review request emails once manual follow-up volume becomes too high. Use it after the first reviews are collected manually. [L1111, 2020]

### Trust badges

- Trustpilot Reviews adds external review ratings to the store. It is a download-only install at the foundation stage. [L1327, 2026]
- Judge.me badges can give the homepage a more authoritative look, as described in the Judge.me section above. [L1363, 2023]

#### Further details

- Judge.me is used for product reviews on Shopify stores. [L0857, 2025]

- Judge.me is a Shopify app for collecting, managing and displaying product reviews on a store. It is the review tool used when setting up customer reviews on a Shopify shop. [L1008, 2025]


Part 27 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/26-reviews-social-proof-and-surveys.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/28-upsells-bundles-cart-and-post-purchase-offers.md
