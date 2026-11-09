<!-- part of ecom/deep/25-full-audit-details.md -->
Part 5 of 22 of "25. Full audit details: every course specific missing from chapters 01 to 24, by chapter". Map of all parts: https://dlichters.com/ai/ecom/deep/25-full-audit-details.md · Previous: https://dlichters.com/ai/ecom/deep/25-full-audit-details/04-store-build-and-shopify.md · Next: https://dlichters.com/ai/ecom/deep/25-full-audit-details/06-conversion-optimization.md

## 05. Apps and Tools

Main chapter: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md

### Ad Manage.ai, Automatisiertes Media Buying (Course E) [L0207, 2025-26]

- [08:16] On slow Wi-Fi the example launch of 8 ads took 1 minute 30 seconds.
- [05:20] After "Duplicate 1 Ad Set", the new (empty) ad set appears in Meta immediately with zero ads; speed depends on the Facebook API ("sometimes quick, sometimes longer").
- [05:20] Teacher's own default: launch new ads as Active (he only used Paused in the demo because the ads were not Course E ads); double-check "launch as Active" again before pressing Launch Ads [06:24].
- [04:14] Teacher does not like Table view for normal launches (it only creates a table version); use it only when each ad in the batch needs different settings.
- [06:24] Course E keeps one saved copy template (primary text, headline, description, CTA, website link with URL parameters) because their copy is similar for all ads; with a template, the whole job is: paste Drive/Dropbox/Frame link, duplicate ad set, press Launch Ads, come back in about 5 minutes; you can work in other tabs while it uploads.
- [03:15] TikTok asset library / TikTok posts / Axon asset library integration: you can copy your best-performing TikTok ads into the Meta ad account inside the platform by pasting the text/link from the TikTok asset library, without downloading and re-uploading files.
- [09:02] Insights tab = a Motion-style top-creatives report: amount spent, results, thumb-stop rate, top creatives, fatigued ads, "Ads last 90 days", landing page performance report; reports pulled from the API load more slowly. Fatigued-ads report default filter in screenshot: last 90 days, Frequency > 1.5, metrics frequency, amount spent, impressions, reach, CTR.
- [11:01] Automations can also launch the same Meta winners on Snapchat, Pinterest and Twitter and auto-pause underperformers; the cross-platform rules require the higher "In-House Plus" plan (teacher's account was on a lower plan at recording).
- [13:47] A Connect tab lets you launch ads automatically from Google Sheets (in addition to the free Sheets plugin).
- [14:34] Ad Manage.ai has an MCP connection: connect it to Claude so you can talk to Claude and Claude operates Ad Manage (manages the account) for you.
- [12:27] Inspiration library screenshot shows run-time per ad (for example "ran for 92d 23h", "245d", "217d") and a credit counter ("1,000 credits left, resets in 3 days", Top up). Clone Ad asks for website/product, brief, fonts (example Poppins), brand colours and logo, and generates an AI image with Claude. (the screenshot only shows 1,000 credits left and reset in 3 days.)
- [14:59] Recommendation: start on the Essential plan and upgrade to In-House later; the 40% discount applies to the first month only via the Course E link.

### Automatische Benachrichtigungen für abgebrochene Warenkörbe via Slack (Course A) [L0281, 2019+]

- [02:55] Source named for the 100x / 21-fold stats: report "Best Practices for Responding to Online Leads" by Dr. James Oldroyd (Whisper: "Aldroid"); the speaker says they see these numbers in their own businesses too.
- [08:42] "Abandoned cart age in hours" field: could be set to 1, 2, 3 or 24 hours for a delay; keep it at 0. Link the store "by clicking a button and typing in your Shopify login info".
- [13:03] Slack action setting "Broadcast to channel": no.
- [08:14] Other Shopify triggers available in Zapier: new orders, new product created, plus "show less common options".

### Automatisierungsgrundlagen mit Workflows und AI (Course E) [L0287, 2025-26]

- [18:08] Gmail trigger options shown: New Email, New Email Matching Search, New Attachment, New Label.
- [20:01] System prompt used: "You are an executive assistant. Your job is to identify whether your boss needs to reply to the email that you are provided. If he needs to reply (because it's a non-spam email from a real person, not a promotional or spam email), then output the response REPLY. If he does not need to reply, output the response DON'T REPLY. Do not include any additional markdown, preamble or anything of the sort. ONLY respond with REPLY or DON'T REPLY, nothing more, nothing less." Then "Here is the body of the email:" + Body Plain variable. Prompt formula: identity, role, context, output structure.
- [28:11] Draft-reply step mapping: Gmail "Create Draft Reply", thread = original Message ID, To = the From email, body = output of the AI step; draft instead of send to keep "a human in the loop".
- [04:07] AI-workflow example: when a competitor uploads a static ad, generate a visual for us with Higgsfield.
- [03:07] Example cadence: every Monday scrape r/cooking, ChatGPT summarises posts, Claude generates new marketing angles, Claude writes a UGC script per angle, save to ClickUp, Google Drive or Google Sheet.
- [02:27] Speaker has been building such automations "for over two years".

### Bing Webmaster Tools Konto einrichten (Course A) [L0303, 2020-26]

- [02:31-03:01] After import, Bing shows "Your profile is 20% complete". Filling in personal and company details is optional; the teacher doubts it improves anything. The only required step is the sitemap (already carried over by the GSC import).
- [00:37] Teacher's advice: sign in to Bing Webmaster Tools with the same email used for all Google accounts, so one login works everywhere and is not forgotten (not because the accounts link through it).

### Blog-Verteilung zu Social Media automatisieren mit Zapier (Course A) [L0312, 2023+]

- [05:19] Second time estimate for manual sharing: collecting title, text and link and posting to three social profiles takes about 15 to 20 minutes per post.
- [06:16] LinkedIn is worth adding as a target only if you have a business-to-business type business / sell mostly B2B; Facebook profile and Facebook business page are the default targets.
- [06:34] Reason for the 5-minute delay: added later because some pages have larger followings; during the window you can go into Zapier and turn the automation off for that post if a mistake was published ("rare case").
- [05:19] Example scope: each new podcast/blog post goes out to LinkedIn, the personal Facebook profile and the business Facebook page automatically (three destinations).

### Brandfetch MCP in Claude einrichten (Course E) [L0322, 2025-26]

- [03:14-04:21] The sample brand kit prompt (course lesson 1 "Creating your brand kit") has a placeholder "your website"; replace it with your URL and check there is no other reference to a website left in the prompt before running.
- [04:46] If voice is not detectable from the website, Claude asks for "two to three emails or product descriptions you're proud of, plus a line on how you want the brand to sound"; you can also paste copy from the web whose sound you like.

### Codex: AI-Agenten lokal herunterladen und ausführen (Course E) [L0366, 2025-26]

- [03:23] Codex access mode: "Full access" lets the agent run freely, while "Review" mode, which asks before actions, is the more careful alternative. The teacher used Full access with Extra High reasoning. (2025-26)
- [01:08] The recommendation for Codex over Claude Code is dated "as of 19 May" (2026), with the note that newer Claude models may later outweigh it. (2025-26)
- [01:53] Folder structure and data hygiene for agent folders is a separate 30 to 40 minute topic that this lesson does not cover. (2025-26)

### Essenzielle Shopify-Apps für E-Commerce-Automatisierung (Course C) [L0634, undated]

- [17:03-21:19] Klaviyo abandoned-cart email ladder: email 1 (sent 15 min after cart, no code, copy about "100% satisfaction guarantee" and items selling out), email 2 (4 h later) offers $5 off with code save5, email 3 (20 h later, cloned from email 2) steps up to $10 off with code save10 (create the new code in Shopify Discounts).
- [04:28] Teacher's stated personal experience for the pop-up: a fixed dollar discount ("Do you want five dollars off?") works better than a percentage because people cannot imagine what a percent is worth. Not stated as a rationale anywhere.

### Essenzielle und optionale Shopify-Apps für Dropshipping (Course C) [L0635, undated]

- [18:38] Looks review setup in this lesson: review-request email after 14 days (21 days if customers need longer to receive the product), review incentive discount "normally 10", beginner plan with 7-day free trial.

### Google Sheets Automatisierung für Abandoned-Cart-Tracking (Course A) [L0737, 2020-26]

- [00:53-01:32] Why log carts in a sheet: "what gets measured gets managed"; Shopify's default abandoned-checkouts view (Orders > Abandoned checkouts: checkout number, order date, placed by, email status, recovered or not) is "okay but not great" and is a section most owners know exists but rarely check.
- [02:29] The owner who is not on the phone logs into the sheet once a day or once every few days to see exactly how many abandoned carts came in, when the team reached out, what happened, how many were recovered, where it slips, and what to improve.
- [03:20] Use the sheet even when you are alone and have no phone person, "sooner than later": about two months later review the abandoned-cart close ratio; possible findings the teacher names: too slow to respond, calling without leaving voicemails, people saying prices are too high.
- [01:32] Example sheet shows customer email, name, phone, date created, a "were they emailed" status, and column H as the notes column where sales/phone people record what happened per call (picked up, wrong number, bought).

Part 5 of 22 of "25. Full audit details: every course specific missing from chapters 01 to 24, by chapter". Map of all parts: https://dlichters.com/ai/ecom/deep/25-full-audit-details.md · Previous: https://dlichters.com/ai/ecom/deep/25-full-audit-details/04-store-build-and-shopify.md · Next: https://dlichters.com/ai/ecom/deep/25-full-audit-details/06-conversion-optimization.md
