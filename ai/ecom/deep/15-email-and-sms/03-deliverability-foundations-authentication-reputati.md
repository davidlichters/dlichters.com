<!-- part of ecom/deep/15-email-and-sms.md -->
Part 3 of 29 of "15. Email and SMS: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/15-email-and-sms.md · Previous: https://dlichters.com/ai/ecom/deep/15-email-and-sms/02-platform-choice-account-setup-and-sender-identity.md · Next: https://dlichters.com/ai/ecom/deep/15-email-and-sms/04-list-building-and-opt-in-capture.md

## Deliverability Foundations: Authentication, Reputation and Warm-up

### Separate sending domains by list type

- Send existing brand subscribers from the main domain. Send cold purchased lists and re-engagement campaigns from a secondary sending domain or a separate email service, such as Send in Blue, to protect the primary domain's reputation. [L0307, 2023+]
- If a cold list has low engagement, ISPs flag the domain as spam. [L0307, 2023+]

### Authenticate the sending domain before the first send

- A campaign that warns that its emails are not authenticated using DNS records must be fixed before sending. Authentication through DNS records is required for providers such as Gmail or Outlook to show a sender identity. [L0864, 2025-26]
- The three authentication methods are SPF, DKIM and DMARC. SPF checks whether the sending server is on the domain's list of approved senders and flags the email if it is not. DKIM checks that the email has not been altered in transit. The sources name DMARC but do not explain how to set it up. [L0864, 2025-26]
- An SPF TXT record and a DKIM TXT record let receiving servers verify that mail from your domain is legitimate, which raises deliverability. ** [L0574, 2021-22]

#### Google Workspace SPF and DKIM setup

Before you start, check that the setup is ready:

1. In the Google Admin console, go to Apps > G Suite > Settings for Gmail and open Authenticate email. Before this, check under Apps > G Suite that the Gmail service shows ON for everyone in the organisation. [L0574, 2021-22]
2. The Authenticate email section may not appear until 24 hours after a new G Suite sign-up. Do not panic if it is missing. [L0574, 2021-22]

Then add the records:

1. Open the DNS settings of your domain at your domain host. The layout differs by provider, but the method is the same. [L0574, 2021-22]
2. Copy the existing TXT record that starts with `v=spf1 include:_spf.google.com`. G Suite adds this record automatically when it is connected to the domain. [L0574, 2021-22]
3. Add a new TXT record with host `SPF` in uppercase and paste the copied value as the TXT value. [L0574, 2021-22]
4. Click Save. [L0574, 2021-22]
5. In the Google Admin console, go to Apps > G Suite > Settings for Gmail and open Authenticate email. [L0574, 2021-22]
6. Select your sending domain and set the DKIM key bit length to 1024. [L0574, 2021-22]
7. Click Generate to create the new DKIM TXT record. [L0574, 2021-22]
8. Back in the DNS settings, add a new TXT record with host `google._domainkey` and paste the whole generated TXT value string into the TXT value field. Click Save. [L0574, 2021-22]
9. Return to Authenticate email and click Start authentication. Leave it running while DNS updates. [L0574, 2021-22]

Rules for the setup:

- **DKIM key length:** The lesson sets the key bit length to 1024 and stresses changing it from the default. The screen showed 2048 as the default. Do not keep that default when following this setup. [L0574, 2021-22]
- **DKIM record format:** The DKIM record host is `google._domainkey`, and the value begins with `v=DKIM1; k=rsa; p=`. [L0574, 2021-22]
- **Do not regenerate during authentication:** Generating a new DKIM TXT record stops email authentication until you click Start authentication again and DNS has updated. Do not regenerate the key while authentication is running unless you are prepared to restart it. [L0574, 2021-22]
- **Propagation time:** After Start authentication, DNS changes can take up to 48 hours to propagate. The status shows Authenticating email while it runs. [L0574, 2021-22]
- **One SPF record per domain:** A domain should publish only one SPF TXT record. If a record starting with `v=spf1` already exists, edit it instead of adding a second one. Two SPF records can make SPF checks fail. This check is an addition to the lesson's steps, not something it teaches. [L0574, 2021-22]
- **SPF qualifier:** The Google SPF value is `v=spf1 include:_spf.google.com` followed by a qualifier. The screens show `~all` (soft fail) before the change and `-all` (hard fail) after it. Choose the qualifier your policy needs and keep only one SPF record per domain. [L0574, 2021-22]
- **Keep the verification record:** Keep the existing `google-site-verification` TXT record in the DNS zone. It proves domain ownership to Google, and removing it can break the G Suite domain verification. [L0574, 2021-22]
- **Keep the mail routing records:** Leave the MX records in place when adding the SPF and DKIM TXT records. They route incoming mail to Google. [L0574, 2021-22]

Google Workspace mail routing (MX) records, as shown in the DNS panel of a G Suite domain at GoDaddy in 2021-2022:

| Host | Priority |
|---|---|
| aspmx.l.google.com | 1 |
| alt1.aspmx.l.google.com | 5 |
| alt2.aspmx.l.google.com | 5 |
| aspmx2.googlemail.com | 10 |
| aspmx3.googlemail.com | 10 |

[L0574, 2021-22]

### Keep the domain's history clean

- If a domain is blacklisted before use, check its history with the Wayback Machine and by searching the domain name for reviews before buying a premium domain. [L0665, 2022]

### Understand sender reputation

- Sender reputation scores are bad, low, medium and high. Aim for medium or high at all times, because low and bad scores send most mail to spam. [L0633, 2025-26]
- A new provider does not assign a starting grade such as bad. The score is empty at first and needs a few weeks of sending to populate. The goal of the warm-up is to reach a positive reputation that you can carry forward before opening larger segments and volume. [L0633, 2025-26]
- Switching to a new email service provider resets your sender reputation to zero, even if you have mailed the same list for years. The reset applies at domain level, so the old reputation does not carry over to the new platform. [L0633, 2025-26]
- A newly registered sending domain also starts with no reputation, even when it uses the same IP addresses and infrastructure as before. A new domain needs its own warm-up. [L0633, 2025-26]
- The reset happens because the new provider sends through different servers and IP addresses. Mailbox providers have never seen this combination of domain, IP and infrastructure. They cannot use past performance, so the sender must build a new history through positive signals such as opens, clicks and replies. [L0633, 2025-26]
- Most email platforms with shared IPs, such as Klaviyo or ActiveCampaign, already manage warmed IP addresses, so IP warming is normally not needed. Only a business that manages its own dedicated IP or server needs a separate IP warm-up strategy, which should follow the provider's advice closely. [L0633, 2025-26]
- Each email provider publishes its own onboarding guidance for new domains, such as Klaviyo, Mailchimp or SendGrid. Follow that guidance, verify the domain and set up authentication protocols, because they differ by provider. [L0633, 2025-26]
- Google shows a domain reputation level, such as High or Medium, for each sending domain. During the warm-up, check this level alongside the email provider's own numbers, since the provider's metrics are not always fully accurate. [L0633, 2025-26]
- Continuously follow deliverability best practices after the warm-up. Keep cleaning the list, avoid spammy or misleading content, respect subscriber preferences, and make unsubscribing easy. These habits keep the sender reputation strong. [L0633, 2025-26]

### Prepare the list before a provider switch

Procedure before closing the old email provider:

1. Record the deliverability baseline for 30, 60 and 90 days: open rate, click rate, bounce rate, unsubscribe rate and spam complaints. [L0633, 2025-26]
2. Clean the list if it has not been cleaned in the last six months. Run all lists through a third-party email validator. [L0633, 2025-26]
3. Remove invalid addresses and addresses that cannot be reached, including hard bounces, before importing. [L0633, 2025-26]
4. Export the engagement data from the old provider: segments, suppression list and performance history. [L0633, 2025-26]
5. Tag every subscriber who opened or clicked in the last 90 days as engaged. Record behaviour (opens, clicks) and product interests where available. [L0633, 2025-26]
6. Import the list together with the tags so the new provider can separate engaged from unengaged subscribers. [L0633, 2025-26]
7. Set up email authentication (SPF, DKIM and DMARC) for the new provider, following its setup guide. [L0633, 2025-26]

Reasons behind the steps:

- Clean the list before import. Email addresses go invalid, mailboxes fill up, and Microsoft and Google delete inactive mailboxes. Bounces to such addresses count against your reputation, even if the list was double opt-in or verified at signup. [L0633, 2025-26]
- Old, unverified addresses cause bounces, which count negatively against your reputation. Mailboxes that Microsoft or Google have deleted for inactivity will bounce as well. [L0633, 2025-26]
- Migrating segments and engagement history matters because a new provider knows nothing about your subscribers beyond what you import. Without tags, the new list is one undifferentiated block and you cannot target the engaged group first. [L0633, 2025-26]
- Failing to migrate engagement data forces a random first send. This lowers opens and clicks and weakens the new reputation. Without history, the provider cannot separate engaged from unengaged subscribers. [L0633, 2025-26]
- Engaged subscribers are those who opened or clicked within the last 90 days. They should receive the first campaign on the new platform. Targeting the most engaged group gives the highest open and click rates, which rebuilds trust fastest. [L0633, 2025-26]

### Warm up a new domain or provider

Procedure after switching providers or registering a new domain:

1. Ask the new provider for its onboarding or warm-up guidance. For a very large list, request a custom warm-up plan that states the daily send volumes. [L0633, 2025-26]
2. On day one, send only to the most engaged segment so the first send stays under the provider's limit. Klaviyo's first send is below 3,000 recipients. Provider limits are usually below 10,000. [L0633, 2025-26]
3. Increase the volume each day by the percentage the provider allows. This is typically 10 to 15 percent and sometimes up to 50 percent. Never increase faster than that. [L0633, 2025-26]
4. Optionally connect an automated warm-up tool such as Warmup Inbox to the domain and let it run for a couple of months. [L0633, 2025-26]
5. Monitor open rate, click rate and inbox placement every day. If they drop or red flags appear, reduce the volume and review the content. [L0633, 2025-26]
6. After about three to four weeks of gradual increase, move to your usual email strategy and send to the full list. [L0633, 2025-26]

Volume and timing rules:

- **Daily increase, two sources:** The usual safe increase cited is 10 to 15 percent per day, occasionally up to 50 percent. Some providers allow the daily send volume to roughly double each day. Follow the exact criteria your provider gives you, because they reflect what is safe for that platform. [L0633, 2025-26]
- **Full warm-up duration:** The full warm-up period for a switch or a new domain takes about three to four weeks. Do not move to the full list before that period ends. [L0633, 2025-26]
- **Gradual plan:** A gradual volume plan over three to four weeks protects the new provider's reputation and avoids underperformance. A business that skips the plan and sends to a 100,000-subscriber list straight away is likely to run into trouble. [L0633, 2025-26]
- **Full list on day one:** Sending the full list on the first day after a switch, especially when open rates are already weak, leads to deliverability problems. Skipping the gradual ramp also makes the damage to reputation longer and harder to repair later. [L0633, 2025-26]
- **Non-linear curve:** The warm-up is not linear, so every business may need to adjust its schedule. Monitor it week by week and expect changes depending on list and content. [L0633, 2025-26]
- **Red flags:** Watch for falling open rates or click rates. If they drop, reduce the volume, check content for spammy or misleading elements, and then increase again more slowly. [L0633, 2025-26]
- **Recovery after a switch:** After a provider switch, open rates should recover gradually toward the levels recorded in the old provider's 30-, 60- and 90-day baseline. This recovery depends on the domain building positive interactions, which lets more mail reach the inbox instead of spam. [L0633, 2025-26]

### Control send timing and batching

- Campaign send mode: use Gradual send over several hours, starting at 11 am Eastern, with 20 percent of recipients per hour, instead of sending the whole list at once. [L0607, undated]
- Sending a campaign to the whole list at one moment can overload the mail server and reduce deliverability. Spreading the send over several hours avoids this. [L0607, undated]
- Build sends in engagement buckets (for example 0-14, 15-30, 31-60 and 31-90 days engaged) and send them in batches. Smaller batches make it easier to see where opens begin to fall. [L0864, 2025-26]

### Write content for the primary inbox

- Email deliverability depends heavily on content quality. If emails are landing in spam, control content quality first. [L0475, 2026]
- Text-based emails with personalization generally land in the primary inbox more often than image-heavy emails. Image-heavy emails can go to the Promotions tab and be left unopened. Brand logo, footer and a few supporting images can still be added on top of text-heavy designs. [L0573, undated]
- Send more personalized emails that look less like ads, and include offers people want to open. Watch engagement, because opens signal to the inbox provider that subscribers want the mail. [L0510, 2018]
- A high click-through rate signals relevance to inbox providers such as Gmail. This supports deliverability and keeps emails in the primary inbox instead of the Promotions tab or spam folder. Opens without clicks over time signal that the email delivers little value. ** [L0602, 2021-22]
- Spam includes buying an email list, or emailing addresses that never opted in, such as contacts from an old address book. ** [L0665, 2022]
- Newsletters must include a working unsubscribe link. Missing or broken unsubscribe options and re-subscribing people by other means are the main causes of blacklisting. ** [L0665, 2022]

### Troubleshoot spam placement

Procedure if confirmation or order emails land in spam **:

1. Remove images from the affected emails and test again. [L0247, 2021]
2. Remove one trigger word at a time, such as "free", and send a test to a new address that is not in Klaviyo. [L0247, 2021]
3. Ask customers in early welcome emails to add the sender to their primary inbox. [L0247, 2021]
4. Ask early emails to elicit a reply with a specific question. [L0247, 2021]
5. Add a reply request to order confirmation emails to build engagement. [L0247, 2021]

Related rules:

- Sending to many bouncing addresses makes email providers such as Gmail treat the sender as a spammer. That lowers deliverability, so more emails end up in spam folders. ** [L0946, 2021-22]

### Understand Gmail tabs

- Emails often land in Gmail's Promotions tab or in spam. General tips are to send more personalized emails that look less like ads, include offers people want to open, and watch engagement. [L0510, 2018]
- Image-heavy emails can go to the Promotions tab and be left unopened. [L0573, undated]
- A high click-through rate keeps emails in the primary inbox instead of the Promotions tab or spam folder. [L0602, 2021-22]

### Measure opens and clicks with Apple MPP

- Apple Mail Privacy Protection (MPP) opens emails automatically through a proxy to prevent user tracking. This breaks open tracking. [L0264, 2025-26]
- Track both opens and clicks instead. Opens measure non-MPP engagement. Clicks prove real user action and bypass the proxy for MPP users. [L0264, 2025-26]

### Benchmarks for open rates

The sources give no general open-rate benchmark. The figures below are examples from single lessons, not targets. [L0864, 2025-26]

| Figure | Meaning | Source |
|---|---|---|
| Gmail 21% open rate, Yahoo 11.5% | In one example, the lesson treats Yahoo as clearly struggling. Any provider far below the others should be isolated and worked on separately. | [L0864, 2025-26] |
| Hotmail open rate around 4% | A warning sign. Unsubscribes after a large send may come mostly from that provider, so check the unsubscribe rate per provider. | [L0864, 2025-26] |
| Provider open rate above 30% | The threshold for widening a temporary exclusion segment gradually. | [L0864, 2025-26] |

### Diagnose a provider whose deliverability is failing

Procedure:

1. Open the campaign's Deliverability tab and check Performance by inbox provider. This shows whether the weak engagement is limited to one provider. [L0864, 2025-26]
2. Open Performance by domain to pinpoint the provider or domain with the low open rate. [L0864, 2025-26]
3. Create an exclusion segment for that provider's unengaged profiles (no opens or clicks between 15 and 365 days ago). [L0864, 2025-26]
4. Add this segment to the Don't send to field of the next campaigns. Clone a campaign to reuse the recipient settings if needed. [L0864, 2025-26]
5. Keep the segment excluded for about 7 days. Then check the provider's open rate again in the Deliverability tab after each send. [L0864, 2025-26]
6. When the provider's open rate rises above 30%, widen the segment gradually by editing its definition (for example, changing the 15-day window to 25 days). Check again after a few days rather than changing it immediately. [L0864, 2025-26]

Principles:

- Excluding inactive profiles from a provider for a short period lets their sender reputation recover. This improves inbox placement for the active profiles. Excluding them is a temporary fix, so the exclusion has to be reviewed and loosened as metrics improve. [L0864, 2025-26]

### Recover from a blacklisting

Procedure if a domain is blacklisted for email **:

1. Identify which blacklist is listing it. [L0665, 2022]
2. Search for how to remove it from that specific provider. [L0665, 2022]
3. Follow their free delisting process. [L0665, 2022]

### Run the deliverability audit

- The deliverability audit needs the brand's domain with DNS access and test accounts at Gmail, Hotmail and Yahoo. [L1361, 2025-26]
- The /email-domain-audit skill then produces a deliverability health report with recommended fixes. [L1361, 2025-26]


Part 3 of 29 of "15. Email and SMS: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/15-email-and-sms.md · Previous: https://dlichters.com/ai/ecom/deep/15-email-and-sms/02-platform-choice-account-setup-and-sender-identity.md · Next: https://dlichters.com/ai/ecom/deep/15-email-and-sms/04-list-building-and-opt-in-capture.md
