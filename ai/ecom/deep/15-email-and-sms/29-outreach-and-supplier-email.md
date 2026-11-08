<!-- part of ecom/deep/15-email-and-sms.md -->
Part 29 of 29 of "15. Email and SMS: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/15-email-and-sms.md · Previous: https://dlichters.com/ai/ecom/deep/15-email-and-sms/28-testing-measurement-and-optimization.md

## Outreach and Supplier Email

### Mailbox setup and profile photo

- Send outreach from a personal address: either a real name at your own domain, or a new personal mailbox on that domain. Generic addresses such as contact@, info@ or support@ read as spam and lower the reply and link rate. ** [L0574, 2021-22]
- A profile photo on the sending Google account appears in recipients' inboxes next to every email. A real face makes outreach feel personal and tends to raise the chance of a positive reply, whether it is your own face or someone else's. ** [L0574, 2021-22]
- If the profile photo upload fails, follow this procedure:
  1. Open your Google account, click the profile picture, choose a photo from your computer, crop it and set it as profile photo.
  2. If the upload fails, open the Google Admin console and type 'profile edit' into the search bar, or go to Apps > Additional Google Services > Directory settings, then open Profile editing.
  3. Tick the Photo option ('Users can customise their public profile photo and cover photo').
  4. Click Save.
  5. Go back to the Admin console home page, wait, and try the photo upload again.
  6. If it still fails with an error code, leave it and retry later, because changes can take up to 24 hours to propagate to all users.

  ** [L0574, 2021-22]

### Warm-up limits

- Sending a large batch of cold emails from a mailbox that normally sends little can make Google suspect unusual behaviour, and it may suspend the account (usually temporarily). Warm the mailbox up by raising the daily sending volume gradually over time rather than jumping straight to hundreds per day. ** [L0574, 2021-22]
- Warm-up ramp for a new outreach mailbox or domain: ** [L0574, 2021-22]

  | Phase | Timing (as taught) | Max emails per day |
  |---|---|---|
  | Start | First campaigns | 20 |
  | Step 2 | After about 2 weeks | 50 |
  | Step 3 | After several more weeks | 100 |
  | Ceiling | Keep increasing over time | up to 300 |

  Mailshake spreads the batch across days up to the limit, so a large list does not need to go out in one day. ** [L0574, 2021-22]
- Start every new campaign with a sending limit of 20 emails per day. A large list can take a week or more to finish, and that is expected. ** [L0946, 2021-22]
- A steady trickle of responses is easier to manage than a single large batch sent at once. Spreading sends over days also protects deliverability and keeps the inbox manageable. ** [L0946, 2021-22]

### Signature and unsubscribe handling

- Use this signature for every outreach email from the connected mailbox. Insert the link on the words 'click here' with the unsubscribe placeholder described in the setting below. Keep the signature simple, with no large fonts, bright colours or many links. ** [L0574, 2021-22]

  ```
  [Your name]
  [Company name]
  [Phone number]
  If you'd like to stop receiving emails from us, click here to unsubscribe.
  ```

- Keep the email signature short and plain. Mailshake advises avoiding large font sizes, colours and images, not adding too many links, and starting with a blank line. A signature may be left empty if you prefer. ** [L0574, 2021-22]
- Add the unsubscribe link to the signature by selecting the words 'click here' and inserting a link. Use {{unsubscribe_url}} as the URL and do not add an http prefix. This placeholder lets Mailshake add the recipient to an unsubscribed list and automatically stop future emails, including follow-ups. ** [L0574, 2021-22]
- An unsubscribe link in every outreach email gives recipients a way to opt out, so they are less likely to mark the email as spam. Including it by default in the signature means it is never forgotten in a template. A visible opt-out is considered common practice and a courtesy. ** [L0574, 2021-22]
- Mailchimp handles opt-outs automatically when a campaign contains its special unsubscribe link, and it compiles a list of contacts who unsubscribed. Outside Mailchimp, the Mailshake {{unsubscribe_url}} placeholder fills the same role for the sending tool. ** [L0574, 2021-22]
- In Mailshake, the left sidebar has an Unsubscribes section that lists contacts who clicked the unsubscribe link. Check it before reusing a contact list, so that people who opted out are not emailed again, including in follow-ups. ** [L0574, 2021-22]
- If you receive emails from a business you are already enrolled with, the signup email may differ from the one on your email list. Send an unsubscribe request from the address that receives the emails, stating that you are already a member. ** [L0960, 2019]

### Cold outreach sequence

- Scope: cold email outreach to business decision makers is not part of this approach, so do not use it to sell to B2B buyers. Reach trade customers through a dedicated trade page with a contact form and a phone number instead. ** [L1088, 2020]
- Cold outreach emails must be very short, simple and straight to the point, because a stranger gives only a few seconds of attention. State the exact request in the first email and avoid long explanations. ** [L0946, 2021-22]
- Build a three-email outreach sequence in this order: ** [L0946, 2021-22]
  1. Initial email: makes the first request and is the most detailed of the three.
  2. Follow-up #1: a short reminder that refers back to the first email.
  3. Follow-up #2: a final, short message that closes the loop.

  Send all three, because many responses come only after the follow-ups. ** [L0946, 2021-22]
- Always follow up on any outreach or sales request, because most positive responses come from follow-ups. Mailshake can automate the follow-up sends once they are added to the campaign. ** [L0946, 2021-22]
- Wait 5 days between the initial email and each follow-up, and between follow-up #1 and follow-up #2. Keep the default reply-chain setting unchanged so follow-ups appear as replies in the recipient's inbox. ** [L0946, 2021-22]
- In the Mailshake campaign composer, follow-ups are added with ADD FOLLOW-UP, next to the ADD DRIP and ADD ON CLICK options. Keep the default five-day wait between follow-ups and the default reply-chain setting. Use the recipient counter, such as 1 of 35 recipients, to step through each personalized email before clicking NEXT, because edits are saved when you switch recipients or click NEXT. ** [L0946, 2021-22]

### Subject lines

- Keep subject lines simple and generic so they do not trigger spam filters. Use 'you' and questions to feel personal, but do not mention links, content, outreach or collaboration in the subject, because that makes people skip the email. ** [L0946, 2021-22]
- Subject-line formula: a short, personal question or open phrase that creates curiosity without revealing the request. It works because it looks like a human note, avoids spam trigger words and gets the email opened, after which the body makes the ask. Examples in this pattern: 'Would this fit your post on {{Topic}}?' and 'Any thoughts on an idea for your guide?' ** [L0946, 2021-22]
- Each follow-up subject line starts with 're:' followed by the original subject line. This keeps all three emails in one visible thread for the recipient. ** [L0946, 2021-22]
- Putting links, outreach words or product names in the subject line makes recipients skip the email. Also avoid spammy wording in the subject line, because it can send the email to spam. ** [L0946, 2021-22]

### Outreach templates

- Ready-to-send opening email. Leave every double-brace field as it is, because Mailshake fills them with data from the spreadsheet. Swap each square-bracket prompt for your own words and remove the prompt itself. Mailshake adds the signature automatically. ** [L0946, 2021-22]

  ```
  Subject: [Write your subject line following the subject-line pattern]

  Hi {{Firstname/[Add a creative fallback here]}},

  My name is [Name] and I write for [website], a site that [describe your site in one line].

  I'm getting in touch about your article at {{Prospect URL}} [explain why a link to us is worth their time]

  [Ask them to look at your link]

  [Insert your link here]

  [Ask them for feedback]

  Thanks,
  [Name]
  ```

- In the introduction, state what the site helps people do in one line, and name the specific article that was found using the prospect URL field. Then ask for a link and a reason why it is worth the recipient's time in the same message. ** [L0946, 2021-22]
- Ready-to-send first follow-up. Leave the double-brace field as it is and replace each square-bracket prompt with your own words. The subject line is 're:' followed by the original subject. ** [L0946, 2021-22]

  ```
  Subject: re: [Original subject line]

  Hi {{name/creative fallback}},

  [Introduce yourself again: your name and the site you write for]

  [Ask whether they've had a chance to read my earlier email]

  Thanks.
  ```

- Paste-ready template for follow-up #2, the final message. Keep the double-brace field unchanged and replace each square-bracket instruction with your own text. Use the subject line 're:' followed by the original subject. ** [L0946, 2021-22]

  ```
  Subject: re: [Original subject line]

  Hey {{name/creative fallback}},

  [Remind them who you are and what you are asking them to look at]

  [Ask if they got the chance to check out your proposal]

  [State that this is the last message and that you will leave it there if they are not interested]

  Thanks.
  ```

- Final follow-up formula: state clearly that this is the last message and that you will leave it there if they are not interested. It works because it respects the recipient's time, reduces unsubscribes and closes the thread politely. Examples in this pattern: 'This is my last note, so I will leave it there if this is not a fit.' and 'Last check-in from me. If the idea is not for your site, no problem at all.' ** [L0946, 2021-22]
- Early follow-up email template for a contact who asked to talk by phone. Use it after a call, and keep the text as written:

  ```
  Today's discussion was valuable. I want to confirm it covered everything I need from you. Here are my contact details. Thank you for your time, and I'm eager to begin our working relationship.
  ```

  ** [L0235, 2021-22]

### Supplier follow-up

- Use an automated email sequence that sends follow-up questions after each reply, which shows which suppliers respond. Use it to get responsive suppliers to reply in English. [L0832, 2019]
- If a supplier asks you to send an email after a phone call, send the day one email from the tool. You can copy it directly and edit it before sending. [L0936, 2020-26]
- If the day one email gets no reply, send the day two follow-up email. It refers to your earlier message, states the launch timing and asks for the application steps. [L0936, 2020-26]
- Formula for a supplier follow-up email: refer to your earlier message, state a near-term launch window, commit to paying by credit card and following the supplier's pricing rules, then ask for the application steps. It works because it reminds the supplier of your request, signals you are a low-risk new account and makes the next reply easy. [L0936, 2020-26]
  - Example 1: 'Following up on my note from last week. We launch in the coming months and want to present your brand properly. We will pay by card and follow your pricing policy. Could you send me the application steps?'
  - Example 2: 'Checking in on my email from Monday. Our store opens within a few weeks and we plan to represent your products carefully. We will pay by credit card and respect your listed prices. What are the next steps to apply?'

### Composer fallbacks, checks and campaign settings

- Mailshake fallback: if the recipient's first name cannot be found, the fallback text entered in the highlighted field is shown instead of the field name. Write a neutral or creative fallback for every name placeholder, because a literal field name looks broken. Fallbacks are never perfect, but they look better than an empty or raw field. ** [L0946, 2021-22]
- The sender name in the email must match the name in the body, and the sending address must match the website named in the introduction. Use only one from-address per campaign, and keep the signature personal. ** [L0946, 2021-22]
- Before clicking Next in the composer, check that every text replacement field exists for all recipients. Mailshake warns when some recipients are missing a field. Use only fields that all recipients have, or add a fallback. ** [L0946, 2021-22]
- Review each email before sending: ** [L0946, 2021-22]
  1. Use the preview to read the subject, the body and the signature, including the unsubscribe line that Mailshake adds.
  2. Confirm the email sounds like a human, the signature is correct and the call to action is clear.
  3. Send a test email and check it on a phone.
  4. Click Next.
- Campaign options in Mailshake: enable Track opens and Track link clicks if you want the data, use Schedule this send to pick a start time in the local time zone, and leave Lead Catcher enabled so replies are captured. Accept the terms about anti-spam laws and the important notes, then click Next to start. ** [L0946, 2021-22]
- Mailshake's composer can save a written email as a reusable template with SAVE AS TEMPLATE, and CHOOSE TEMPLATE loads saved ones, so a template library builds up inside the account. Use SEND TEST before launching to receive the email yourself and check it. ** [L0946, 2021-22]
- When text pasted into the Mailshake composer carries colours or other formatting, Mailshake may offer to auto clean the formatting. You can decline that offer and then check the preview, which shows the subject, body and signature as the recipient will see them. ** [L0946, 2021-22]

### Pitfalls

- Deleting or renaming the double-brace or bracketed fields breaks personalization or leaves raw field names in the email. Only change the square-bracket instructions and the text around them. ** [L0946, 2021-22]
- Long, detailed outreach emails reduce replies because recipients give only brief attention. Keep the request in the first two or three lines. ** [L0946, 2021-22]

### Customer support email

- Customer support email should be answered within 24 hours, Monday through Friday. ** [L1090, 2021]
- Customer emails can be answered any day of the week, but phone calls to customers should not be made on Sundays. ** [L1090, 2021]
- Contact-form and store inbox messages before a purchase are sales leads and should be treated as valuable, possibly more valuable than a paid click. Questions about options or features indicate demand, and repeated requests can be a signal to add that feature. [L0910, 2015]
- When building an AI Workflow to generate automatic email replies, add as much context as possible to the system prompt: details about the recipient, your preferred response tone, how you typically handle similar requests, any specific business information the AI should reference, and any guidelines about what topics you do or do not discuss. Rich context in the prompt dramatically improves the relevance and quality of generated replies. [L0287, 2025-26]

## Other details

### Inbox and team tools

- In Gmail, create filter rules that send unwanted email straight into a folder, so spam does not clutter your inbox every time you log in. [L1285, 2024]
- To share a Google Docs or Google Sheets file for a team to copy, set the share link to view-only, so anyone with the link can read it. The recipient then opens File > Make a copy to save their own editable version in their Google Drive. [L1223, 2024+]

### Building and owning audiences

- The email list and the lists of followers and engagers are the assets used to attract partners and sales opportunities. A brand with an engaged list can do business with related companies easily. [L0487, 2018]
- Pinterest with a linked store and product pins costs nothing to set up, but it is not a major source of sales compared with Google and Microsoft. [L0855, 2023]
- Instagram Broadcast Channels suit brands with an already engaged audience, and a minimum follower count may be required before a channel can be created. Check whether the format fits the page before investing time in it. [L0576, 2025-26]
- Broadcast Channels work like a VIP club: followers feel they get behind-the-scenes access. The brand can post one-way, run quick polls and ask for future video ideas, while followers can answer but cannot freely send messages to the whole group. [L0576, 2025-26]
- Broadcast messages are a one-way stream, so encourage emoji reactions on them rather than expecting full replies. Reactions are a low-effort way for followers to feel connected to the brand. [L0576, 2025-26]
- Livecom's channel page with the stored RCPs is segmented inside Klaviyo, so the streams can be promoted to those segments. Videos embedded in the bubbles can also be reused in Klaviyo email campaigns. [L0951, 2025-26]
- Messenger broadcasts were presented as having higher open and click rates than email, because most people already have Messenger on their phone. The source figures were shown only as a screenshot, so the exact percentages are not stated in the lesson. [L1243, 2017]

### Affiliate follow-up emails

- Affiliate follow-up emails serve two purposes: building trust through helpful content, screenshots and case studies, and asking the reader to take a specific action. Emails that only give content and never ask for anything usually produce no sales. [L0514, 2015]
- Use this follow-up template:

```
Subject: Quick check-in

Hi {first_name},

How is your progress going? I wanted to see if you have started making money online yet. If you have not, here is the resource I recommend to start: {affiliate_link}

It helped me, and I can personally vouch for it. Let me know if you have any questions.

P.S. If you have not started yet, {affiliate_link} is the best place to begin.
```
[L0514, 2015]

- Place the affiliate link at the end of follow-up emails, usually in a P.S. line, and link to the specific sales page. Owning a subscriber's email gives you a long-term contact until they unsubscribe, so the content must stay valuable enough that they keep opening. [L0514, 2015]

### Collecting extra shipping charges after the order

*Older advice (2020).*

- To collect expedited or upgraded shipping charges after the order, create a draft order in Shopify or a PayPal invoice, then send it to the customer for the additional payment. [L0268, 2020]

### Subscriber opt-out and re-subscription

*not marked as older by the 2019-2022 rule.*

- Opting out of a single email from a membership or course list can stop all further emails from that list. To receive updates again, give written permission to the support team so they can re-add the address. [L0804, 2023]

### Product title tags

- Add the words "buy" and "online" to product page title tags, as long as the store already has some traffic momentum. Expect roughly 10-30% more traffic and a larger sales lift. The typical template is "Buy [Product Name] Online", followed by the brand name if it fits. Some CMSs cannot do that order, so use "[Product Name] Online" instead. [L0575, 2014]
- Add buy/online to product title tags in one of three ways: [L0575, 2014]
  1. Manually edit each product if you have few products (about 10 products in 15 minutes).
  2. On larger CMS stores, use an SEO plugin with a title and meta description template for product pages.
  3. For thousands of products, export to CSV, use formulas in Excel to build the new titles in spare columns, then import the file back.

### Sales claims (not practice rules)

*Older material (2021-22). This is sales copy from a course's own offer, not a practice rule. Do not copy its claims or its urgency tactics into your own store.*

- A the source offer was presented with a 42% discount from a $4,997 annual price to $2,987 annual, or a monthly option of $9.97 for three months, with a 72-hour deadline. The stated 42% does not match the prices: $2,987 is about 40% below $4,997. [L0414, 2021-22]


Part 29 of 29 of "15. Email and SMS: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/15-email-and-sms.md · Previous: https://dlichters.com/ai/ecom/deep/15-email-and-sms/28-testing-measurement-and-optimization.md
