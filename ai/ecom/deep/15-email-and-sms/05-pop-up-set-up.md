<!-- part of ecom/deep/15-email-and-sms.md -->
Part 5 of 29 of "15. Email and SMS: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/15-email-and-sms.md · Previous: https://dlichters.com/ai/ecom/deep/15-email-and-sms/04-list-building-and-opt-in-capture.md · Next: https://dlichters.com/ai/ecom/deep/15-email-and-sms/06-lists-segments-exclusions-and-list-hygiene.md

### Pop-up set-up

#### Pop-up timing and triggers

Sources use different triggers, each tied to the tool they describe. Use the setting that matches the platform you are configuring.

| Tool or platform | Trigger | Ids |
|---|---|---|
| Clavio pop-up | Exit intent, plus a 10-second delay after page load | [L0476, undated; L0634, undated] |
| Klaviyo pop-up | Show after 10 seconds, plus a scroll rule at 30 to 50 percent of the page, with the match set to show only when all selected rules are met | [L0573, undated] |
| Shopify theme pop-up | Delay timer, for example after 60 seconds of visitor inactivity | [L0973, 2020-26] |

- A pop-up that appears immediately on landing is considered too aggressive and annoys visitors, so a 10-second delay is preferred. Adding a scroll trigger at 30 to 50 percent ensures the visitor has seen half the content and is more likely interested in the offer. [L0573, undated]
- Delaying the pop-up and not showing it to repeat visitors reduces annoyance and keeps the opt-in rate stable. *Older advice (2022).* [L0803, 2022]
- The email pop-up in the theme settings asks visitors for their email address, which makes it a lead capture tool. The exit pop-up does not ask for an email address; it only shows text, an optional image and an optional discount code. [L0973, 2020-26]
- In the same theme section you can choose an image, attach a discount code and change all of the pop-up text. [L0973, 2020-26]

#### Clavio pop-up procedure

Clavio sign-up form, covering the set-up described in the sources. [L0476, undated]
1. Open Sign-up forms in Clavio and pick a template that works on both desktop and mobile.
2. Keep or rename the form (example name: `Subscribe for coupon`) and choose the list (example: newsletter).
3. Click Create form.
4. Replace the image with your logo, change the headline and the button text so they state the discount, and add your own text where needed.
5. Open Styles and choose Pop-up as the display type, then set the background colour to match your store. Optional: add a background image.
6. Open Targeting and behaviour, choose Show based on rules, and set exit intent plus a 10-second delay after page load.
7. Open the success screen, enter the coupon code you created in Shopify (example: `save five`), and adjust the text and text colour.
8. Click the top-right Publish, then Publish anyway. The pop-up is now live.

- The same Clavio set-up in brief: open Sign up forms, choose a template that works on desktop and mobile, keep the list as Newsletter, set the form Styles to Pop-up, and under Targeting and behaviour use Show based on rules with an exit-intent trigger and a 10-second delay after page load. [L0634, undated; L0476, undated]

#### Klaviyo sign-up form

- Klaviyo sign-up form creation: Create > Email only > select the Newsletter list > Next > choose Pop-up > Next. Do not include a teaser, since teasers can annoy mobile visitors. Add one only if the sign-up rate drops. [L0573, undated]
- Pop-ups are reported to have the highest conversion among Klaviyo sign-up form types, compared with full-page and fly-out forms. [L0573, undated]
- Set the form status from Draft to Live, then check the layout in the mobile preview before publishing. [L0573, undated]
- Test the layout in the mobile preview, since most customers arrive from phones. [L0573, undated]
- Creating a Klaviyo sign-up pop-up with a discount: [L1297, 2023]
  1. Go to Signup forms in the left menu and pick a pop-up design.
  2. Name the form and add it to the newsletter subscriber list, then click Create form.
  3. Replace the offer text with a fixed dollar amount, for example `save $5 with your first order`.
  4. Replace the image with a product photo or a gift image from unsplash.com.
  5. Set the success step to show the discount code you created in Shopify.
  6. Click Publish, then Publish form.
- Klaviyo is an email marketing tool. Its embedded sign-up form on the store lets visitors enter name and email before they download a lead magnet. [L0649, 2019]
- Klaviyo can collect names and email addresses from prospects on lead generation offer forms. [L0238, 2019]

#### Other tools

- SumoMe (sumo.com) is a free email opt-in pop-up tool that can be added to Shopify, WooCommerce and most other platforms. [L0380, 2014]
- From the first day of the store, collect visitor emails with a pop-up tool such as Privy so you can remarket to them later. *Older advice (2018).* [L1085, 2018]
- OptinMonster is an opt-in tool that can record which page or content piece a subscriber joined from. This makes it simple to place each subscriber into the matching list. *Older advice (2021-22).* [L0603, 2021-22]
- Optimunk's Email input goes to Klaviyo's email property, and its Phone input goes to phone_number. The SMS Club Invite input has no fixed Klaviyo target: you either choose a value from the list or type one in. [L1138, 2025-26]
- Under Custom value, send extra data with each sign-up: Campaign name, URL of campaign (the page where the pop-up appeared) and Variant name. Add more custom values if needed. The URL of campaign is set as the Root URL. [L1138, 2025-26]
- Sending the URL of the page where the pop-up appeared lets follow-up emails return the visitor to that exact page. This is better than sending them to the homepage or a collection page, which forces them to find the product again and adds friction. [L1138, 2025-26]

#### Shopify sign-up section

- Email signup section settings include the colour scheme, heading and subheading text, and the form itself, which cannot be restyled. Emails entered here are stored as subscribers in the Shopify admin. [L0775, 2020-26]
- Email signup section: colour scheme set to accent 2. The heading and short text can be edited, but the email form itself cannot be customised. Addresses entered there are stored as subscribers in the Shopify admin. [L1309, 2020-26]

#### Sign-up pop-up for a discount: copy and layout

- Replace the copy with wording that fits the niche and product, and change the image to one related to the niche or a gifting image. [L0573, undated]

### Pop-up and opt-in copy

#### Headline formulas

- Opt-in pop-up headline formula: name a concrete result the reader wants, then ask for the email directly below in the same box with a clear call to action. It works because it sells the outcome instead of a discount, and asking for the email feels like a useful exchange. New examples: `See the exact five-step plan I used to cut product return rates in half. Enter your email below to get it.` Or: `Learn the three tools that cut my ad testing time by a third. Drop your email to receive the list.` [L0380, 2014]
- Email signup headline pattern: name the community or group the subscriber joins plus a fast benefit, such as inviting them to be first to see new arrivals. Example 1: `Join the Crew and get first access to restocks.` Example 2: `Join the Club for early sale alerts.` [L1309, 2020-26]
- Pattern: replace the generic newsletter line (for example a plain `subscribe to our newsletter`) with a short invitation that names the brand and its community or benefit. The brand name makes the line feel personal and the community word makes joining feel like belonging. Examples: `Join the Harbor Crew` and `Get early access to [Brand] drops`. [L1018, 2020-26]
- An email capture offer works when it pairs a small incentive with a cause the reader already cares about. Two examples in this pattern: `Get 15% off your first order and help fund a reef restoration project` and `Join our weekly rewilding newsletter and receive 12% off when you sign up for our forest-friendly range`. [L1269, 2025-26]

#### Weak and strong opt-in copy

- Weak opt-in copy: `Join our email list today to receive our newsletter and discounts.` Strong opt-in copy: `Join our email list today and we'll send you our 50 page guide to sending emails that convert.` The strong version names one concrete asset that solves a specific problem. *Older advice (2021-22).* [L0571, 2021-22]

#### Standard pop-up copy (sign-up discount)

Copy for a 10 percent sign-up discount, as a starting point to adapt to your brand. [L0573, undated]

```
Headline: "Want to get 10% off your first purchase?"
Sub-line: "Sign up to unlock your discount."
Email field placeholder: "Add your best email"
Button: "Reveal my discount"
Decline link: "No thanks, I'd rather pay full price"
After submitting, the success message should say "Thanks for signing up. Here is your discount code" followed by the code, with the confirmation line removed.
```

#### Exit-intent and pre-exit copy

Pre-exit copy, verbatim, for an exit pop-up that captures an email and unlocks a discount. [L0154, undated]

```
Pause before leaving: share your email address to unlock a special promotional discount from [STORE.COM].
```

#### Welcome copy

Welcome message that confirms the discount code is on its way. [L0418, 2025-26]

```
Welcome to [Brand Name]. You're in. Your [10]% discount code is on its way to your inbox. If it hasn't arrived after a few minutes, check your spam or promotions folder, because our emails don't always land in the main inbox.
```

#### Pop-up principles

- Asking visitors openly for their email in an opt-in pop-up is appropriate when the offer is genuinely useful and matches what the subscriber will receive. [L0380, 2014]
- The email pop-up asks visitors for their email address. The exit pop-up does not. [L0973, 2020-26]
- Keep the heading short and clear about what visitors get. [L0775, 2020-26]

### Lead-gen ads and paid sources

- Lead ads should collect email addresses first through an opt-in offer, because a subscribed list can be sold to repeatedly over time. Direct sales on the first click are less important than building the list. Offers such as a free gift or discount coupon are used to earn the opt-in. [L0641, 2014]
- Use conversion campaigns with `lead` as the conversion event, not Facebook Lead Ads, because lead form quality is significantly lower than landing page conversions. Lead form integration via Zapier to Klaviyo adds friction and can cause data sync problems. [L0307, 2023+]
- Lead generation traffic should be sent to a page whose only goal is to collect name and email, not to sell a product. [L1076, 2019]
- Use the lead-gen traffic pattern above before sending ads to a discount or best-seller page. [L1076, 2019]
- Procedure for collecting leads and sending remarketing. Collect email addresses on the store, and track visitors with pixels so they can be shown ads on Meta and Google that return them to the store. Use abandoned cart and monthly promotion emails for email follow-up. *Older advice (2024).* [L1115, 2024]

```
1. Collect email addresses on the store.
2. Track visitors with pixels so they can be shown ads on Meta and Google that return them to the store.
3. Use abandoned cart and monthly promotion emails for email follow-up.
```

- Ads that promote a discount or a best-seller page skip the list-building step, so route them to a collection page first. [L1076, 2019]
- Shopping ads are shown after a prospect has signed up for a buyer's guide and received a coupon. [L1142, 2020-26]

### Influencer and partner sources

- Structure influencer incentives (exclusive coupons, free products, free training) to drive email newsletter subscriptions, not just traffic. This extends the relationship beyond the influencer's first promotion and enables long-term marketing to the audience by email. [L0226, 2017]
- Partner with other companies that have a list and run a drop with them, offering their audience an exclusive offer to get started. The partner's audience must match your niche. *Older advice (2021-22).* [L0768, 2021-22]
- Ways to acquire first customers through email: *Older advice (2021-22).* [L0768, 2021-22]
  1. Email your existing customers.
  2. Partner with other companies that have a list and run a drop with them, offering their audience an exclusive offer to get started.
- Legitimate email list sources are existing customers, abandoned checkouts and website pop-ups. Before paying for more subscribers, measure how much revenue an exit-intent overlay opt-in brings in per sign-up, and scale acquisition only after an email campaign already converts well. *Older advice (2024 source).* [L0836, 2024]
- Import an email list from a previous employer only with permission and only if the contacts are relevant to the niche. Then import the list into Klaviyo and send a short introduction broadcast. *Older advice (2021).* [L0247, 2021]

### List structure, naming and sources

#### Naming

- Name lists to show their source clearly: `Optimunk 10% OFF`, `Giveaway XYZ`, `Checkout`, `Customer`. This makes acquisition history traceable when reviewing performance. [L0264, 2025-26]
- Each content opt-in needs its own list or segment, with its own automated email sequence behind it. [L0571, 2021-22]
- Each email opt-in on the site should have its own email list. [L0493, 2021-22]

#### Discount list flow

Procedure for a discount opt-in flow, in this order. *Older advice (2021-22).* [L0571, 2021-22]
1. Create a dedicated list for discount subscribers that feeds automatic discount reminder emails.
2. Send a few emails to encourage completion of the sale if the visitor does not buy immediately.
3. Add a rule that moves any subscriber who becomes a customer out of the discount list into the new customer list, so they stop receiving discount reminders.

#### Source tracking

- Record which page or content piece a subscriber joined from, so each subscriber lands in the matching list. [L0603, 2021-22]
- Send the page URL with each sign-up so follow-up can return the visitor to that page. [L1138, 2025-26]

### Consent settings

#### Opt-in process

- The opt-in process is set per list under Klaviyo list > Settings > Consent > Opt-in process. [L1138, 2025-26]
- Double opt-in is Klaviyo's recommendation. It requires confirmation and helps block invalid and malicious contacts. It needs the list's confirmation email and the global SMS confirmation text kept up to date. [L1138, 2025-26]
- Single opt-in adds subscribers immediately without confirmation. Klaviyo recommends regular list cleaning with it. [L1138, 2025-26]
- Changing the consent setting of a new list is easy to forget. Check the opt-in process on every new pop-up list before the pop-up goes live, because it determines whether subscribers must confirm. [L1138, 2025-26]
- The opt-in form note for a sales event tells visitors they agree to receive emails and may opt out at any time. [L0571, 2021-22]

#### Unsubscribe behaviour

- In Klaviyo, each list has an unsubscribe setting under Settings > Unsubscribes that decides whether an unsubscribe from that list also removes the person from all future emails. Check this option when you create a pop-up list, because the account may apply a default that treats any unsubscribe as a full email unsubscribe. Use the View settings link to review the account-level default before going live. [L1138, 2025-26]

#### Go-live gate

- Go live with the pop-up only after the Klaviyo welcome series is ready, so new subscribers receive their first sequence right away. If a welcome series already exists for the client, copy its structure and adapt it rather than building from scratch. [L1138, 2025-26]

### Never buy lists

- Do not buy email lists to acquire customers. *Older advice (2021-22).* [L0768, 2021-22]
- Buying or renting email lists is a serious mistake. Emailing people who never opted in causes spam complaints, which can get your domain blacklisted from major inboxes such as Google and Yahoo. [L0471, 2024]
- Only email people who opted into your store list. Purchased email lists cause spam complaints and damage your sending reputation, so the people you want to reach stop opening your emails. [L1285, 2024]
- Do not buy, rent or email purchased lists, or email people who do not know the brand. Spam complaints quickly get the sending domain blacklisted, and legitimate emails stop reaching inboxes. [L1116, 2025]
- Never send cold emails directly to purchased email lists. Instead: [L0307, 2023+]
  1. Upload the CSV to Facebook or Google as a custom audience.
  2. Run ads sending them to your opt-in landing page.
  3. Let them re-opt-in.
  4. Then send emails to the engaged list.
  This prevents domain blacklisting. If you email a cold list with a low open rate, ISPs (Google, Hotmail, Outlook) interpret it as spam and blacklist your sender domain, blocking future emails. Example: sending to 1,000 with only 5 opens triggers ISP spam flags.
- When uploading existing email lists to email platforms like Klaviyo, recipients may need to re-opt-in depending on setup. Send in Blue allows bypassing this re-opt-in requirement if needed. [L0307, 2023+]

### Measured expectations

| Measure | Value | When it applies | Ids |
|---|---|---|---|
| Visitors who leave without buying | Around 80% (general figure) | Typical store traffic | [L0573, undated] |
| Visitors who leave without buying | Roughly 80 to 90% | Alternative figure for website visitors | [L0607, undated] |
| Pop-up opt-in rate, one store | 0.6 to 1% | Reported from one store | [L0803, 2022] |
| Pop-up opt-in rate, average | About 3 to 5% | Average reported across stores | [L0803, 2022] |
| Target capture of cold-traffic visitors | 15% to 20% | Realistic goal for cold traffic | [L0790, 2017] |
| Free shipping offered on arrival | About 20% captured | Example result | [L0790, 2017] |
| Opt-ins who open and click the lead magnet download | 30% to 40% | Share of opt-ins | [L1076, 2019] |

- A weekly target was 150,000 site visitors and at least 10,000 new emails. [L0790, 2017]
- The lesson links a working opt-in and email program to a 10% boost in customer value. [L1031, 2018]
- Before paying for more subscribers, measure revenue per sign-up from exit-intent opt-ins. [L0836, 2024]
- Early on, a list grows slowly, so expect a long build and keep at it. *Older advice (2021-22).* [L0571, 2021-22]

### Following up new sign-ups

#### Automated follow-up

- Use a welcome series for new subscribers, copied from an existing client series where one exists. [L1138, 2025-26]
- Follow-up sequence after a sign-up: send the welcome email and a discount reminder, then move the subscriber onward. [L0571, 2021-22]
- Use abandoned cart and monthly promotion emails for email follow-up. [L1115, 2024]

#### Daily follow-up schedule

Procedure for follow-up of new email sign-ups. *Older advice (2020).* [L0967, 2020]
1. Email new sign-ups once a day during the first few days.
2. After that, move them to the main broadcast list.
3. Send to the main broadcast list at least once per week, sometimes twice.

#### Manual outreach

Manual outreach to new email sign-ups in the early stage. *Older advice (2022).* [L1092, 2022]
1. Take the email address from an exit-intent or opt-in capture.
2. Send a short personal email from the owner that asks which products or questions the person has.
3. Answer every reply to earn trust and start conversations.

- Reply to new email leads personally, asking if they have questions and offering help. Manual outreach at the start builds trust and sales, and is especially useful before automation is in place. [L0972, 2025]
- Use this follow-up for a new email lead who signed up for your discount. [L0972, 2025]

```
Hi [customer name], this is [your name], the owner of [store name]. I noticed you signed up for our [discount code] offer, and I wanted to see if you have any questions. If there is anything I can help you with, just reply to this email. I'm happy to help.
```

- Use the email list you collect from visitors for follow-up, since a visitor who does not buy on the first visit may still buy later. *Older advice (2019).* [L1002, 2019]

#### Further details

- Collecting email signups before launch is not useful, because nobody finds the store before it goes live. Audiences built in ad platforms before launch do the job of building the pre-launch base. [L0934, 2023]

- See also: the Trojan Horse pop-up (email reveal with 10%, then SMS club upgrade to 15% plus early access to sales and new products) is on https://dlichters.com/ai/ecom/deep/15-email-and-sms/17-sms-marketing-compliance-opt-in-and-flows.md [L0418, 2025-26]

Part 5 of 29 of "15. Email and SMS: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/15-email-and-sms.md · Previous: https://dlichters.com/ai/ecom/deep/15-email-and-sms/04-list-building-and-opt-in-capture.md · Next: https://dlichters.com/ai/ecom/deep/15-email-and-sms/06-lists-segments-exclusions-and-list-hygiene.md
