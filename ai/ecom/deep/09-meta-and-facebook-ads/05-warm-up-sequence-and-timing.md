<!-- part of ecom/deep/09-meta-and-facebook-ads.md -->
Part 5 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/04-account-trust-warm-up-and-ban-prevention.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/06-agency-purchased-and-alternative-ad-accounts.md

### Warm-Up Sequence and Timing

#### Full Warm-Up Sequence

Warm-up sequence for a new Meta ad account:

1. Log in to the Facebook profile only from one fixed device and one fixed IP address, using the same proxy every time, with no VPN switching [L1477, 2026].
2. Set up the page so it looks legitimate and branded, not scammy [L1477, 2026].
3. After the ad account is created, wait 1 to 2 hours before launching any ad [L1477, 2026].
4. Start with a $20 budget and let it spend about $8 to $10 before launching sales ads [L1477, 2026].
5. Spend small amounts first and avoid aggressive scaling: Day 1 spend $10 to $20, Day 2 spend $20 to $30, Day 3 onward run normal campaigns [L1477, 2026].
6. Do not run high budgets during the warm-up and do not edit business settings too much too early [L1477, 2026].

Rules that apply to this sequence:

- Always log in to the Facebook profile from the same device and the same IP address, and use the same proxy every single time. Switching VPNs or IP addresses between logins is a risk factor for Meta [L1477, 2026].
- Start a new ad account with a small spend, for example a $20 budget, and wait until about $8 to $10 has been spent before launching sales ads. Avoid aggressive scaling in the first days [L1477, 2026].
- Do not run high budgets right away on a new or warming ad account. Increase spend gradually, following the schedule of $10 to $20 on Day 1 and $20 to $30 on Day 2, before running normal campaigns from Day 3 [L1477, 2026].
- Before moving to sales campaigns, run an engagement campaign first to warm up the pixel and collect website activity data [L1027, 2026].

#### Waiting Times by Source

Each waiting time applies to a different action, so they do not conflict.

| Action | Waiting time | Source ids |
|---|---|---|
| Before any ad on a new ad account | 3-7 days, do not advertise on day one | [L0296, 2021+] |
| After creating a new ad account | 1-2 hours before launching any ad | [L1477, 2026] |
| After editing business profile or business settings | 1-2 hours before further changes | [L1477, 2026] |
| After a payment method fails | About 1 hour before trying again | [L1477, 2026] |
| Engagement warm-up before conversion campaigns | 1-2 days | [L0637, 2023+; L0650, undated] |
| Page posts before conversion campaigns | 2-3 posts over 1-2 days | [L0637, 2023+] |
| Before creating Business Manager and ad account (feed scrolling) | 15-30 minutes of scrolling the news feed | [L0351, 2026] |

- Scale spending gradually over weeks rather than jumping to large budgets immediately [L0296, 2021+].
- Do not launch 10-15 ad sets or campaigns on day one of a new ad account. That pattern can trigger Meta's automated restriction. Start small and scale slowly [L0637, 2023+].
- Do not edit the business profile or business settings in quick succession early on. Many edits in a short time raise the risk of a ban [L1477, 2026].

#### Full Warm-Up Procedure
Prevention sequence for a new Meta ad setup, in order:

1. Use a personal profile that is at least 2 years old, not a new dummy profile [L0637, 2023+].
2. Confirm the profile identity with an identity document [L0637, 2023+].
3. Enable two-factor authentication on the profile [L0637, 2023+].
4. Create a separate Business Manager at business.facebook.com/create, not a personal ad account [L0637, 2023+].
5. Verify the business in Business settings with a business document (LLC, Ltd or similar) [L0637, 2023+].
6. Add 1-2 trusted people to the Business Manager with page and pixel rights [L0637, 2023+].
7. Fill in the page's About section fully, reach 10-20 page likes, and post 2-3 simple posts over 1-2 days before any conversion campaign [L0637, 2023+].
8. Complete the free Facebook Advertising Policy Blueprint course and keep its certificate [L0637, 2023+].
9. Optionally warm up the ad account with an engagement campaign [L0637, 2023+].
10. Do not copy competitor creatives exactly [L0637, 2023+].
11. Keep the feedback score above 3 by communicating well and setting shipping time correctly [L0637, 2023+].
12. Reply fast to comments and messages [L0637, 2023+].
13. Pay every bill on time [L0637, 2023+].

#### Full Account Setup Procedure

To reduce account suspension risk on Meta: complete account verification and profile verification, provide detailed business information, wait 3-7 days before running any ads (do not advertise on day one), and scale spending gradually over weeks rather than jumping to large budgets immediately [L0296, 2021+]. Meta can ban a new advertiser, and the steps below are the setup sequence for it [L0296, 2021+]:

1. Do not run ads from a bare personal account [L0341, 2023].
2. Set up a business profile in Meta Business [L0341, 2023].
3. Enter your business details and provide as much accurate information as you are willing to share [L0341, 2023].
4. Set up two-factor authentication, especially for any admin accounts [L0341, 2023].
5. Complete identity verification when requested [L0341, 2023].

Meta trusts accounts that look legitimate, and it associates bad experiences with the platform [L0341, 2023].

### Payments and Spend Limits

- Payment failure is a serious risk on Meta. A card declined automatically by Facebook can lead to an immediate account ban. Always have two payment methods on the ad account, a main one and a backup if the first fails, because repeated failures lead to a ban [L0691, 2024].
- Do not add payment methods repeatedly in a row. If a payment method does not work, wait about 1 hour before trying again, because repeated attempts lead to a ban [L1477, 2026].
- Adding a card for ad payments can fail with an insufficient-funds error even when the card has enough money, which can then restrict the ad account. The cause was unconfirmed, so check the payment setup before spending on a new account [L0709, 2017+].
- Pay every bill on time [L0637, 2023+].
- A personal profile that cannot add a valid payment method may be banned, and the linked business account can then be banned too, even after business verification is completed. Verification alone does not protect an ad account if its payment method is invalid or fails [L0691, 2024].
- A new Facebook ad account has a spending limit that increases only after payments are made on time. If the ad account stops spending on a day, check the payment method in the payment settings, because a failed payment can silently stop delivery [L1216, undated].
- A CBO or ABO campaign that spends far below its daily limit can have a payment or account-history problem. Check that the ad account is set up correctly, and that no payments to Facebook are overdue in the payment gateway. If the problem persists, duplicate the campaign and run the copy [L1220, undated].
- Suspensions for unusual activity may require verifying your card again. Keep business details and payments fully legitimate to reduce risk [L0950, 2023].

#### Spending Limit Ladder

- A personal-profile Business Manager starts with a 50 USD spending limit and rises progressively to 100, 150 and 250 USD before the limit is removed [L1347, undated].
- Spending limits are raised by making payments on time and staying consistent, without billing failures. Add two payment methods, so that if the first one fails the second one is charged [L1347, undated].
- A seller's credit card was compromised and replaced, which caused several payment failures on Facebook. The seller believed these failures kept the spending limit low for longer, and then added a second payment method to avoid this in the future [L1347, undated].
- Late payment on the ad account can impose a spending limit. In one case the limit was 50 USD per day, rising about 130 USD per day weekly, but it reset to 15 USD per day after just a few account actions such as adding an ad set or duplicating a campaign [L1212, undated].
- Making changes to a restricted Facebook account, such as adding an ad set or duplicating a campaign, can drop the daily spend limit back to a lower level within 24 hours [L1212, undated].

### Trust Tiers and Asset Ranking

- Meta assigns advertisers spend tiers based on account age, Business Manager history and successful payment history. Very large advertisers spending roughly $100k to $1M or more can skip warm-up and launch campaigns directly [L0637, 2023+].
- Meta ranks business assets such as the Business Manager, Facebook pages and ad accounts by their spend history and places them in trust tiers. An asset with a longer, steadier spend record is trusted more [L0650, undated].
- Facebook was described as relatively lenient with copied creatives in general-store testing. TikTok and Pinterest were described as banning accounts much faster for the same behaviour [L0660, 2019+].

### Feedback Score and Shipping Time

- Meta assigns the feedback score after a store has about 50-100 sales, on a scale of 0 to 5. It is judged from product quality, shipping times and customer communication, and is collected from direct customers via feedback forms [L0637, 2023+].
- Feedback score thresholds [L0637, 2023+]:
  - Below 2 restricts advertising for a page that is less than 1 year old.
  - A page below 2 can be restricted from running ads.
  - A score above 3 is considered good. Scores of 3-4.5 are the typical healthy range.
  - Accounts below 3 for several weeks risk a ban.
- Check the feedback score and any restrictions in Business Manager > Account Quality. You can also see ad rejections and each asset's status there. Shipping time is set in the same Account Quality area, below the feedback score [L0637, 2023+].
- Set shipping time in Business Manager > Account Quality, on the page's section, for your store. Set it to more than 6 weeks, up to 8 weeks, because Meta sends the feedback form only after the shipping time has passed [L0637, 2023+].
- If the shipping time is set too short, feedback forms reach customers before the parcel arrives and generate bad ratings [L0637, 2023+].
- Keep the real shipping time under 2 weeks with good suppliers and agents, but set the platform setting longer as a buffer [L0637, 2023+]. The platform setting (6-8 weeks) and the real shipping time (under 2 weeks) are two different values for two different purposes.
- Keep the feedback score above 3 by communicating well and setting shipping time correctly [L0637, 2023+]. Reply fast to comments and messages [L0637, 2023+].

### Policy-Risk Habits

#### Creatives and Claims

- Ad creatives and missing payments are the most common causes of Meta bans. Follow Meta's rules on prohibited content such as nudity and before-and-after images [L0691, 2024].
- Avoid health promises or other claims in ad text that Facebook may flag, since this can lead to the account being blocked [L0650, undated].
- Do not make scammy claims such as weight-loss promises in page posts or ad copy [L0637, 2023+].
- Check how a product looks in ad creatives and listing photos before running it on Facebook. Facebook can flag a product that looks like a weapon, such as a walking stick that resembles a gun, and the flag can lead to another account ban [L1440, 2021+].
- Running random, unvetted ads can get the whole ad account banned. Strict product research and ad checks protect the account from bans [L1131, 2018+].
- Selling branded products or running copied product images from AliExpress is a common cause of Facebook bans. Use only unbranded products [L1431, 2020+].
- Do not copy competitor creatives exactly [L0637, 2023+].
- Meta does not algorithmically compare new ad videos against other advertisers' videos to detect copies. The practical risk of reuse comes from a competitor reporting the ad, either through a DMCA notice or an ad report. This usually happens when the competitor is already in a dispute or was banned earlier [L1218, undated].
- Posting an identical ad file from a different account can link the accounts, because the ad files share metadata. If one ad is banned, the linked ad can be banned too [L0361, 2024]. The source suggested changing the file metadata or making a small change to the video before uploading. This is not recommended, because it is an attempt to hide a connection that Meta can detect. Run each account's ads from that account's own original creatives [L0361, 2024; L1195, 2026].
- Running identical creatives across several accounts or with many sellers can trigger Meta to restrict the Business Manager. In severe cases, copyright complaints can take down the Shopify store and ad accounts within days [L1195, 2026].

#### Products and Testing

- Use a separate ad account, or a separate Facebook account, for testing new products instead of your personal ad account. Testing products that get flagged can ban the account [L1173, undated].
- Products that carry ban risk, such as products with health claims, revealing skin or controversial topics, belong in a separate Business Manager (see Business Manager section) [L1347, undated].

#### Compliance Habits

- Facebook accounts that did not follow Facebook's ad prevention practices have a higher chance of being banned. Following the practices reduces the ban risk. The coach reported few ban problems among mentorship members who follow them [L0363, 2022+].
- Complete the free Facebook Advertising Policy Blueprint course and keep its certificate [L0637, 2023+].
- Keep business details and payments fully legitimate [L0950, 2023].

### Login, Device and IP Hygiene

- Log in to the Facebook profile only from one fixed device and one fixed IP address, using the same proxy every time [L1477, 2026].
- Always log in from the same device and the same IP address, and use the same proxy every single time. Switching VPNs or IP addresses between logins is a risk factor for Meta [L1477, 2026].
- Logging in from multiple devices is a common cause of instant bans. Avoid it in the first phase of an account [L1477, 2026].
- Using a VPN or proxy on Meta is a fast route to a block. For a US target, choose USA in the ad set targeting and do not use a VPN [L0691, 2024].
- Conflicting advice: one source suggested that, after a flagged IP or card history, a fresh agency account and a VPN could be used to get back to scaling. This is not recommended, because it evades Meta's enforcement and leads to permanent loss of assets. Use the consistent-device, consistent-IP approach above instead [L0351, 2026; L1477, 2026; L0691, 2024].
- A flagged payment card or IP history, such as a DMCA record tied to an area, can cause repeated bans on new Business Managers and ad accounts [L0351, 2026].
- Before creating a Business Manager and ad account, one source recommended scrolling the news feed for about 15 to 30 minutes. This was described as reducing bans on new accounts from a flagged IP or card [L0351, 2026].

### What Causes Instant Bans and Cascades

#### Common Triggers

- Common causes of instant Meta account bans are logging in through a VPN, logging in from multiple devices, repeatedly adding payment methods, running high budgets immediately, and editing business settings too much too early. Avoid all of these in the first phase of an account [L1477, 2026].
- Launching 10-15 ad sets or campaigns on day one of a new ad account [L0637, 2023+].
- Payment failure, where a card declined automatically by Facebook can lead to an immediate ban [L0691, 2024].
- Ad creatives and missing payments, the most common causes of bans [L0691, 2024].
- Not completing identity verification in time, which can lead to an instant suspension [L0341, 2023; L0343, 2023].
- A non-admin user without two-factor authentication on a business account [L0343, 2023].
- Running random, unvetted ads [L1131, 2018+].
- Selling branded or copied products [L1431, 2020+].
- A product that looks like a weapon [L1440, 2021+].
- Creating a second Business Manager soon after the first [L0806, 2024].
- Launching a conversion campaign on a brand-new page and account without warm-up [L0650, undated].

#### Cascades

- Account bans on Meta can cascade. A personal profile that cannot add a valid payment method may be banned, and the linked business account can then be banned too, even after business verification is completed [L0691, 2024].
- A ban on the ad account or Business Manager should not take down the personal profile, but a personal profile ban can block Facebook use entirely [L0637, 2023+].
- Linked accounts can be banned together when identical ad files share metadata [L0361, 2024].

### Recovery

- If an account is restricted, request help through Get support on the Meta business help page and complete the identity verification Meta asks for, instead of opening more accounts [L0806, 2024].
- When Meta asks for ID verification after a ban, it checks that a real, legitimate person runs the ads. Verify identity early so the platform already knows who you are [L0637, 2023+].
- Recovery solutions exist for properly set-up accounts that do face suspension [L0296, 2021+].
- Keep the Business Manager separate from the personal profile so that a Business Manager shutdown does not take down everything else. In the worst case, a new Business Manager can be created [L0637, 2023+].
- Do not open a new personal profile to get around a restriction, and do not open more accounts after a restriction. Both approaches are circumvention of enforcement [L1213, 2023; L0806, 2024].

#### Further details

- Account blocking occurs when ad quality scores drop below Facebook's normal threshold; Facebook determines quality through satisfaction surveys sent to recent customers about their purchase experience. Maintain account health by monitoring and improving performance. [L0238, 2019]


Part 5 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/04-account-trust-warm-up-and-ban-prevention.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/06-agency-purchased-and-alternative-ad-accounts.md
