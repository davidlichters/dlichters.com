<!-- part of ecom/deep/06-conversion-optimization.md -->
Part 31 of 40 of "6. Conversion Optimization: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/06-conversion-optimization.md · Previous: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/30-email-and-phone-capture-pop-ups-opt-ins-and-lead-m.md · Next: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/32-recovering-lost-visitors-and-carts.md

### Pop-up design

#### Visual and layout rules

- Baseline case: a starting pop-up with a 0.4% conversion rate and 16,000 views produced only 71 email submissions. This baseline shows the value of a stronger visual pop-up design. [L0418, 2025-26]
- Use a lighter pop-up tool than the Klaviyo embed (OptiMonk was chosen for this reason) because heavier pop-up scripts slow page load time, and page speed affects conversion. [L0418, 2025-26]
- Make pop-up buttons and inputs very clickable: use display manual with a fixed width of about 400 px and a height of 50 to 70 px, and keep buttons larger than inputs on mobile. [L0418, 2025-26]
- Match the pop-up button and input shape, color and shadow to the store's own product-page buttons so the pop-up feels like part of the site. [L0418, 2025-26]
- Set the floating product image and text to be legible and eye-catching. A floating image breaking out of the pop-up frame attracts attention, and a text shadow improves readability on busy backgrounds. [L0418, 2025-26]
- The image on a sign-up pop-up should relate to the niche or the product, or show a gift, because it sits beside the discount offer and supports it. Replace the default image in the Styles section before publishing the form. [L0607, undated]
- Check every pop-up on mobile view and adjust sizes separately for desktop and mobile, because the layout, button size and font size often need different values on each device. [L0418, 2025-26]
- Check the sign-up form on a mobile preview before publishing. Most visitors in a mobile-heavy store arrive from phones, and a form that looks fine on desktop can be hard to use on a phone. [L0607, undated]
- Pure black on a pop-up background can look fake and digital next to a website. A dark charcoal tone that blends into the site looks more natural, so pick the shade by eye beside the store's own colors. [L0418, 2025-26]

#### OptiMonk settings

- Layering: give the email input fields and the Reveal Code button a higher z-index (about 10) than the floating image (about 1), so the overlay image does not capture clicks. [L0418, 2025-26]
- Padding: zero out any leftover column spacing first, then open Column > Advanced and set left and right padding to 0 and top and bottom padding to 50 px. If the result looks cramped or too loose, test 100 px on top and bottom and keep the value that looks more even. [L0418, 2025-26]
- Text shadow: set text shadow under Style > Text shadows, using a medium shadow on all text blocks. A light shadow looked too weak on a sandy background, and applying the same shadow everywhere keeps readability consistent. [L0418, 2025-26]
- Hero image: for a full-width hero background, OptiMonk's image fit options under Style > Image are cover, contain and original, with an alignment choice that can be adjusted. In the tested pop-up the original fit looked most natural, so compare fit modes visually before settling on one. [L0418, 2025-26]
- Container shadow: give the whole pop-up container a soft shadow with a medium size and about 30% opacity so it lifts off the page. Keep the opacity low, because a heavy shadow makes the pop-up look dated. [L0418, 2025-26]
- Mobile layout procedure:
  1. Switch the OptiMonk editor to mobile view and review the pop-up before changing anything.
  2. Select the floating image, go to Display > Position, and set it to Top.
  3. Select the column and set left and right padding to 0, then add back about 25 px if the content touches the edges.
  4. Select Main page and set its size to 95% of the screen.
  5. Set mobile inputs to a fixed width of about 400 px and a height of about 50 px, and set the button to about 60 to 70 px high.
  6. Raise any headline or button text that is too small on mobile; the tested pop-up used sizes around 125 to 150.
  7. Adjust the desktop and mobile layouts separately, because they often need different values.
  - [L0418, 2025-26]
- Preview caveat: a pop-up preview may not show on some themes, and an OptiMonk pop-up does not appear until the app embed is enabled in the Shopify theme settings. Check that the embed is on before assuming the pop-up is broken. [L0418, 2025-26]

### Pop-up tools and platform setup

#### Choosing a tool

- Tools for pop-ups, exit-intent forms, inline forms on content pages and sidebar forms include OptinMonster and OptiMonk. Other options include Sumo and Just You Know. [L0608, 2021-22]
- OptinMonster is used for all pop-ups, including exit-intent, timed, inline forms and opt-ins, and it integrates with Shopify. [L0682, 2021-22]
- The key criterion when choosing a provider is its impact on page speed, because some scripts load slowly and hurt site performance. Privy is named as an example of a slow tool with problematic script loading, so avoid it or switch away from it. [L0608, 2021-22]
- Built-in forms from email platforms such as Klaviyo are weaker than dedicated form tools, because email software is not built around forms and pop-ups and those features feel like an afterthought. A separate specialized form tool is therefore preferred. [L0608, 2021-22]
- Conflict: the 2021-22 advice prefers a dedicated tool, while the one source method builds the sign-up pop-up in Klaviyo. Use Klaviyo's sign-up form when it meets the page-speed test, and use OptiMonk when the Klaviyo embed is too heavy. [L0608, 2021-22] [L0607, undated] [L0418, 2025-26]
- Pop-ups can still collect email addresses if used carefully, although ad blockers and some ad networks reject ads that send traffic to pages with pop-ups. Newer pop-up formats are harder to block than older ones. Check the advertising platform's policy before relying on them. [L0523, 2015+]

#### Klaviyo sign-up form

- Choose Pop-up, not Full page or Flyout, because pop-up has the highest conversion. Choose Email only as the form's channel and select the Newsletter list so new addresses land in the newsletter list. [L0607, undated]
- Teaser: keep the teaser off by default, because a teaser that stays at the bottom of the screen annoys mobile visitors. Turn it on only when the sign-up form conversion rate drops. [L0607, undated]
- Targeting: under Show based on rules, show the pop-up after 10 seconds on the page, and add the rule that the visitor has scrolled 30 to 50 percent of the page. Set the condition to show only when all selected rules are met. [L0607, undated]
- Creation procedure:
  1. Click Create, choose the email-only option and select the Newsletter list.
  2. Choose the Pop-up form type and click Next.
  3. Set the teaser to off, unless the sign-up rate drops.
  4. Choose a static coupon for the incentive and enter the code created in Shopify (for example WELCOME10).
  5. Open Edit form and adjust the layout; check the mobile version, because most visitors come from mobile devices.
  6. Open Styles to change the image, text and styling options.
  7. Open Targeting and set the rules (see the targeting setting above).
  8. Edit the copy: headline, email field text, button text and decline link.
  9. Open the success step, remove the line about claiming the offer and add a line that gives the discount code directly.
  10. Change the status from Draft to Live, then click Exit.
  11. Preview the form on a mobile device before finishing.
  - [L0607, undated]
- Mistake: showing the sign-up pop-up the moment a page loads is too aggressive and annoys many visitors. A delay of about 10 seconds combined with a scroll condition gives better results. [L0607, undated]
- Coupon pop-up copy: use the Klaviyo success message and the Shopify code as described above. [L0607, undated] [L0607, undated]

#### Targeting, segments and reuse

- Targeting: under Select who should see the pop-up, choose a predefined segment such as `Non-subscribers` so people already on the list do not see it. Other predefined options include Now visitors, Active shoppers, All visitors, Engaged visitors, New home page visitors, Just purchased and Custom targeting. Saved segments and Copy from previous campaign are also available. [L1138, 2025-26]
- In the targeting step, Load segment opens your saved segments, and Save as segment stores the rule you built so it can be reused in other pop-up campaigns. Copy from previous campaign reuses targeting from an existing pop-up. Save a segment when the same audience rule is needed across several pop-ups. [L1138, 2025-26]
- Welcome pop-ups can be limited to new visitors only, but this requires a custom code addition in the theme. [L1094, 2023] (2023)

### Shopify automation after capture

- Set up Shopify Email automation triggered by bounced-visit pop-up submissions. It automatically sends captured contacts a coupon code while simultaneously forwarding their contact information to your email for manual follow-up. [L0154, undated]
- The traffic step (Bounce visits) is the setup for the exit-intent overlay that feeds this automation. [L0208, 2024+]
- Captured emails feed abandoned cart and promotion emails. [L0468, 2020]
- Over time, feed contacts from exit-intent overlays into automated flows. [L1092, 2022]
- Remarketing: visitors who leave can be remarketed to once their contact details are captured. [L1002, 2019]

### Phone capture and multi-step forms

- An extra incentive, such as an additional 5% off, can be offered in exchange for a phone number. This works because the visitor is already looking for a better deal when they try to leave. [L0363, 2022+]
- Trojan Horse Method for collecting email and phone number in one pop-up:
  1. Ask for the email address first.
  2. Once the email is captured, offer the visitor the option to upgrade by also adding a phone number.
  3. If the visitor adds a phone number, give them the upgraded offer, which is a discount double the basic one.
  4. If the visitor declines, keep only the email and send the basic offer they signed up for.
  - [L0494, 2026]
- Asking for the email first guarantees the email capture, while the optional phone upgrade lets the visitor choose their own reward path. The basic sign-up is never blocked by the phone request. [L0494, 2026]
- Two-step form: step one collects a name and email address, which qualifies the visitor as a subscriber even if they leave. Step two collects credit card details to cover shipping in a free-plus-shipping offer. [L0523, 2015+]
- Case: a Klaviyo pop-up on a store with about 16,000 views produced only 71 email sign-ups, a conversion rate of about 0.4%. The rebuild used an OptiMonk pop-up with a floating product image, a 10% email discount and a follow-up SMS upgrade to 15% with TCPA-style consent text under the button. The reported result was over 30,000 USD in under 10 days. This is a self-reported figure and not independently verified. [L0418, 2025-26]

### Quizzes, surveys, contests and giveaways

#### Quizzes

- Quizzes are a pre-frame tool that engages visitors with personal questions that point toward the offer. Use three to four numbered questions, such as `Step 1 of 4`, to show progress, although some successful quizzes run to 20 questions. Requiring an email address to see the results combines the pre-frame with subscriber qualification. [L0523, 2015+]
- A quiz can segment the audience by answers. Asking whether a visitor owns a dog or a cat splits the list, and a dog owner can then be asked how old the dog is and shown answers by age range. The next ad can then show a dog and recommend food suited to that dog's age. [L0523, 2015+]
- Quizzes and surveys can run on any page: home page, product pages, collection pages and blog posts, as pop-ups or as fixed items such as sidebar or inline forms. Home, collection and product placements suit pop-ups; collection, blog and blog post pages suit sidebar items. Each quiz or survey should have its own list. [L0571, 2021-22]
- Quizzes and surveys work because they are fun or engaging and carry no pressure to buy, so they can reach very high opt-in rates. The quiz does not have to be about the products; it only has to relate to the niche and interest the visitor. Example: a surfboard seller can use `Which world surf pro are you?` and later move these subscribers toward surfboard products. [L0571, 2021-22]
- Tools: Typeform was used to build quizzes and surveys in the course. Qzzr (Quizzer) is an alternative for quizzes. Google Forms is a simple alternative for surveys. Quizzes run on the page or in a lightbox pop-up, and the visitor enters an email address at the end to see the results. [L0571, 2021-22]
- Quiz formula: `Which [recognizable figure or category from your niche] are you?` with a short quiz that the visitor finishes to see the result. The question invites self-identification and fun, so visitors give their email to see the answer even when the quiz does not mention products. [L0571, 2021-22]
  - Example 1: `Which camping style matches your next trip?`
  - Example 2: `Which coffee brewing method fits your morning routine?`
  - [L0571, 2021-22]
- Keep a quiz short, with only a few simple inputs before the email step, so visitors finish quickly. The email request should come after the quiz has already delivered some engagement. [L0571, 2021-22]
- A quiz works as a lead magnet when the results are revealed only after the visitor enters an email address. This turns the quiz into a fast way to grow the list with people who searched for related products. [L0922, 2021-22]
- A quiz built to capture emails can be linked from several places on the store, such as collection pages and the home page, not only from ads. For paid search, use a dedicated quiz page as the final URL so the ad headline and the landing page match. [L0922, 2021-22]

#### Surveys

- A survey asks visitors questions about their industry and preferences. Turn the results into a content piece such as `We surveyed 100 people in this industry`, which is likely to be shared. Send each respondent the results before publishing so they see how their views compare. [L0571, 2021-22]

#### Contests and giveaways

- Small contests and giveaways generate large numbers of opt-ins. The prize does not need to be the main product; cheap items that sell for around $100 can be bought and given away. Offer contests on any page through pop-ups, exit-intent pop-ups or sidebar forms, and promote them on social media to grow entries. [L0571, 2021-22]
- Giveaway prizes can be set so that one prize is awarded for every set number of opt-ins, such as one prize per 1,000 opt-ins. Even a 500 dollar prize can remain profitable under this rule, because collected emails are cheap to market to later. [L0923, 2015]
- Giveaway opt-in text for the newsletter box. Replace the placeholders in square brackets:

```
Enter your email to win [PRIZE, for example a 200 dollar gift card to our store or our best-selling product] at [STORE NAME]. We will give away one [PRIZE] for every [NUMBER, for example 1,000] people who opt in. Full rules: [LINK OR TEXT WITH RULES].
```
[L0923, 2015]

- Replace the default newsletter opt-in with a giveaway offer that names a valuable prize, such as a 200 dollar gift card or your best-selling product, and states the entry rules. [L0923, 2015]

### Sales event and other capture formats

- Sales event opt-ins offer presale or exclusive access to a big sales event such as Black Friday, Easter or Veterans Day. They can appear as pop-up or exit-intent on any page, or as sidebar items on collection, blog and blog post pages. Each sales event should have its own list. Show them only in the one or two weeks before the event. [L0571, 2021-22]
- Squeeze pop: a button placed in blog posts or articles that opens a squeeze-style pop-up when clicked. A visitor who enters an email address moves to the next page. Squeeze pops work anywhere a button can be placed, including places where normal opt-in forms would not fit. [L0523, 2015+]
- Free account: gives visitors access to a membership or a lite version of your software in exchange for signing up. Free accounts are similar to squeeze pages but collect more personal information, such as a physical address and phone number, while keeping conversions high. Use them for software and membership products. [L0523, 2015+]
- Webinar registration is a natural way to collect email addresses, because registrants expect follow-up emails with details. Automated webinars let people pick the day they want to watch, and after entering an email address they become subscribers. Registrants are also primed to look for your emails. [L0523, 2015+]
- Consultation as a bribe: see the bribe section above. [L0514, 2015]

### Page speed and technical considerations

- Choose the pop-up tool by its effect on page speed, not only its features. [L0608, 2021-22]
- Use a lighter pop-up script than the Klaviyo embed where page speed is a concern, because page speed affects conversion. [L0418, 2025-26]
- Check that the pop-up embed is enabled before assuming a pop-up is broken. [L0418, 2025-26]
- Overlays that cover a significant part of the screen can be seen by Google and reduce the chance that visitors stay. Keep overlays off the first 30 seconds of a visit. [L1099, 2021-22] [L1099, 2021-22]
- Pop-ups and overlays can be blocked by ad blockers and some ad networks. Check the ad platform's policy before sending paid traffic to pop-up pages. [L0523, 2015+]
- Measurement: use Lucky Orange, a screen-recording app, to watch visitor sessions and find the average time on site needed for pop-up timing. [L0363, 2022+]
- Do not add Google reCAPTCHA to an email sign-up form to block spam, because it can reduce opt-in rates. Monitor new sign-ups and delete obvious spam manually. [L0836, 2024] (2024)

### Compliance and consent

- Give a fixed-amount or percentage coupon only where the platform terms and local rules allow it. Giving a $50 coupon for signing up to a mailing list is legal. [L0967, 2020]
- SMS upgrades carry TCPA-style consent text under the button. [L0418, 2025-26]
- Ads and pop-up policies: check the advertising platform's policy before relying on pop-ups in paid campaigns. [L0523, 2015+]

#### Further details

- Portugal candles brand: €1,000 total Black Friday ad budget for France market. Used list-building strategy with landing page opt-ins. Achieved €2.89 cost per lead. After €3,000 total investment, still acquiring leads at this low cost, demonstrating that list building remains profitable even when purchase CPCs spike to €20+. [L0307, 2023+]

- Set the pop-up targeting to Show based on rules with two triggers: exit intent (when the visitor is leaving the page) and a delay of 10 seconds after the page loads. The delay gives visitors time to scroll before the offer appears. [L0476, undated]


Part 31 of 40 of "6. Conversion Optimization: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/06-conversion-optimization.md · Previous: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/30-email-and-phone-capture-pop-ups-opt-ins-and-lead-m.md · Next: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/32-recovering-lost-visitors-and-carts.md
