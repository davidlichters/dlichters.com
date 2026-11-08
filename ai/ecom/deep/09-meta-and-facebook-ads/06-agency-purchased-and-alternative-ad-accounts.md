<!-- part of ecom/deep/09-meta-and-facebook-ads.md -->
Part 6 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/05-warm-up-sequence-and-timing.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/07-ban-recovery-appeals-and-meta-support.md

## Agency, Purchased and Alternative Ad Accounts

### When to Use an Agency Account or a Personal Account

- Personal ad accounts have spending caps and face random account restrictions. This distinction becomes critical when you prepare to scale real volume. [L0216, 2026]
- Agency accounts handle rising ad spend more reliably than personal accounts. They isolate business spending from personal-account policy enforcement and from platform-imposed architectural limits. [L0216, 2026]
- Agency accounts get higher trust and spending limits than personal accounts. They are far less likely to be restricted or shut down at random, and this matters most for a store about to start running large ad volume. [L1253, 2026]
- Agency and personal accounts perform the same on Meta. The choice depends only on how you pay and how much you scale. [L1028, 2026]
- Both account types connect a Shopify store to Meta through the same Facebook & Instagram setup. The choice affects payment and scaling, not the tracking connection. [L1028, 2026]
- Personal ad accounts vary extremely in stability. Some run without restrictions for years, while others are terminated or restricted the same day they launch. This unpredictability is itself a major risk. [L0216, 2026]
- Using a personal account for scaling is risky. It has no support and cannot be recovered after a ban. Meta support will not engage unless the account has Meta Verified (blue tick), and account age is considered. [L0351, 2026]
- A personal account paid by credit card is the simpler starting point for a store with small or moderate ad spend. [L1028, 2026]
- An agency account can technically be paid by credit card, but this is more cumbersome than with a personal account. [L1028, 2026]
- Use an agency account only in these cases:
  1. All personal ad accounts are banned and you cannot create new ones. [L0335, 2023]
  2. You hit an ad account spend cap after trying other ways to raise it. [L0335, 2023]
  3. The product is risky, such as beauty, weight loss or health products. [L0335, 2023]
- An agency account is useful when you want to scale above about $100,000 of ad spend per month, because agency support helps at that level. For normal spend it is not necessary. [L0335, 2023]
- When ad spend is scaled to very high numbers, you will eventually need to switch to an agency ad account. Plan this switch before it becomes urgent. [L1028, 2026]

### Payment and Deposits

- A personal ad account can be paid directly with a credit card. An agency ad account works like a debit source: you must deposit funds into it to have a balance before ads can run. [L1028, 2026]
- Opening deposits differ by provider:
  - Ruas Agency: $250 or $500. [L0216, 2026]
  - Kuro Network: $500 opening transfer. [L0351, 2026]
- Ruas Agency accounts are funded by international bank transfer or cryptocurrency, arranged through WhatsApp coordination with the agency contact. [L0216, 2026]
- Kuro agency accounts are topped up by crypto or bank transfer. The first top-up requires the $500 opening transfer. [L0351, 2026]
- For Kuro, the $500 opening transfer is created only after payment is confirmed. [L0351, 2026]

### Providers, Pricing and Terms

#### Ruas Agency

- Ruas Agency provides stable, enterprise-grade ad account infrastructure. Setup starts by texting the agency contact on WhatsApp. [L0216, 2026]
- Package B costs $250 per month plus 4% of total ad spend, with no setup fee. [L0216, 2026]
- Timezone for Ruas Agency accounts must be EST (Eastern Standard Time). [L0216, 2026]
- Switching from Kuro to ROAS Agency is optional, and staying on Kuro is also possible. ROAS Agency is offered as the more stable option because of recurring issues with Kuro. Choose it if account stability is the priority. [L1253, 2026]
- Staying with free ad account solutions such as Kuro, while facing recurring stability issues, costs more in lost time than Ruas Agency's $250 monthly fee. Predictable infrastructure and responsive support accelerate recovery from account problems. [L0216, 2026]

#### Kuro Network

Tier figures are partly unreadable in the source. Blank cells mean the figure is not shown.

| Tier | Price | Spend cap | Key features |
|---|---|---|---|
| Traction | $299/month | up to $5,000 monthly spend | 0% management fee, free setup, unlimited ad account replacement, crypto or bank top-up, you run your own campaigns, monthly rolling, cancel anytime |
| Motion | $499/month | higher cap, exact figure unreadable | managed Meta ad account, 0% management fee, unlimited ad account replacement, crypto or bank top-up, monthly rolling |
| Surge | $599/month | higher cap, exact figure unreadable | managed Meta ad account, free setup, unlimited ad account replacement, dedicated support rep on standby, priority policy and reinstatement queue, 1 month deposit required |
| Legacy | $2,500 one-time | no spend ceiling, client billed | takeover of an account, clients add their own cards, dedicated support, priority policy and reinstatement queue, 1 month deposit required |

- Each additional ad account costs $50 per month on top of the Traction plan. [L0351, 2026]
- The Traction tier suits early testing with daily deposits up to about $5,000 per month. Move to a higher tier only when spend and cash flow justify it. [L0351, 2026]
- A one-time $2,500 Legacy account is worth it for large spend, because the tax savings on high ad budgets outweigh the upfront cost. For small or testing budgets, a monthly tier is more practical. [L0351, 2026]
- Kuro's ad account request process is as follows:
  1. Name: enter the ad account name. [L0351, 2026]
  2. Industry: select the industry. [L0351, 2026]
  3. URL and ads: enter the store URL and the ads details. [L0351, 2026]
  4. Confirm: review and confirm, then send the opening transfer. [L0351, 2026]
- The first ad account is included in the plan. [L0351, 2026]

#### Pricing Comparison Across Sources

| Source | Provider | Monthly fee | Spend fee | Applies to |
|---|---|---|---|---|
| one source 2026 | Ruas Agency Package B | $250 | 4% of total ad spend | Ruas Package B |
| one source | Agency accounts (general) | about $250 per ad account | about 1% | Agency accounts in general, as stated in that source |

- The two sources conflict on the spend fee (4% versus about 1%). Use the Ruas figures for a Ruas Package B quote, and treat the one source figures as approximate general figures. Confirm the current quote with the provider before budgeting. [L0216, 2026; L0637, 2023+]

#### Other Providers

- Providers named in the source are Scale Infinity, ROAS Agency and HTTP Pool. Pricing is about $250 per ad account per month, plus about a 1% ad spend fee. High spending limits are a feature; one example account had a limit of $50,000. [L0637, 2023+]
- Agency accounts come from marketing agencies that already have a direct relationship with Meta. They are less likely to be banned, and the agency handles verification and appeals. Recovery of a banned agency account can take 1 to 2 hours to a day through the agency. [L0637, 2023+]
- Third-party providers such as ACC farm, ROAS agency and Scale Infinity sell aged Business Managers, profiles and ad accounts. Their use carries ban and policy risk, so treat them only as a last-resort fallback. [L1213, 2023]
- Agency-tier account providers are reported to replace banned accounts within one or two hours. Large agencies can also ask Meta's marketing team for agency accounts through direct contacts or LinkedIn outreach. [L1213, 2023]

### Referral Setup and First Contact

- If someone referred you, name them in your first message to the agency contact. If nobody referred you, skip the referral mention. [L1253, 2026]
- Request template for an agency ad account under Package B, citing the referral contact:

```
Request an agency ad account under Package B, citing your coach from one source as your referral contact.
```
[L0216, 2026]

- First message template, stating the Package B request and the referral name:

```
In your first message to the agency contact, state that you want an agency ad account on Package B, and include the name of the person who referred you if there is one.
```
[L1253, 2026]

### Opening a Ruas Agency Account

1. Contact the agency contact on WhatsApp, stating that you want Package B and were referred by your coach from one source. [L0216, 2026]
2. Gather the required details: your ad account name, website URL, Business Manager ID (BM ID), currency, timezone (EST), and initial deposit amount ($250 or $500). [L0216, 2026]
3. Submit these details to the agency contact when he requests them. [L0216, 2026]
4. The agency contact configures the account and provides access through Facebook Business Manager, linked to your BM ID. [L0216, 2026]
5. Coordinate with the agency contact via WhatsApp to complete the funding, choosing international bank transfer or cryptocurrency. [L0216, 2026]
6. Once the account is funded, you can begin running advertising campaigns. [L0216, 2026]

- The same process in prose: text the agency contact to say you want an agency ad account. Ask for Package B, which has no setup fee, costs $250 per month, and charges a 4% fee on ad spend. Prepare the ad account name, URL, Client BM (Business Manager ID), currency, timezone and first top-up amount, and send them over. After you submit, the agency contact creates the ad account and gives access in your Facebook Business Manager under the Business Manager ID you provided. Fund the account by international bank transfer or crypto, arranging the top-up over WhatsApp. Once the top-up arrives, you can start running ads. [L1253, 2026]
- Reply to the agency contact with the setup details he asks for, filled in:

```
Ad account name: [name of the ad account]
URL: [store URL]
Client BM: [Business Manager ID]
Currency: [account currency]
Timezone: [account timezone]
First topup: [amount of the first top-up]
```
[L1253, 2026]

- In Facebook Business Manager, open the Ruas Agency ad account via the left sidebar: Accounts > Ad accounts. [L0216, 2026]
- After the agency contact sets up the account, it should appear under Accounts > Ad accounts. The same menu also lists Pages, Business asset groups, Apps and Commerce accounts. [L1253, 2026]

### Agency Compensation Structures

- Structure agency compensation as base compensation plus performance-based incentives, not as a percentage of ad spend alone. The base covers labour; incentives tie the upside to business outcomes. [L0217, 2025-26]
- If you use percentage-of-spend compensation, implement caps that reset the structure at higher revenue levels. Otherwise the agency earns exponentially more while doing similar work as you scale. [L0217, 2025-26]
- Verify that the agency has a coherent media buying methodology or doctrine that guides all its decisions. Examples are running everything on cost-cap automation, or using AOV multipliers to set spend minimums per creative. A consistent philosophy is better than ad-hoc changes. [L0217, 2025-26]

### Risks of Buying or Renting Accounts

- Buying ad accounts from third parties carries a risk of bans and loss of access, which can stop a store's advertising completely. Keep a clean, owned ad account and keep the ID verified. [L0774, 2023]
- Running Facebook ads through purchased ad accounts combined with a residential proxy was reported to lead to account bans and considerable instability. Account bans are a real risk for this approach, so a plan should not depend on a single ad account. [L0819, 2020+]
- Ad accounts can be bought from a vendor when an account has problems, but this is a ban risk because the same ad policies still apply. [L1171, 2024+]
- Some sellers on Fiverr offer access to Facebook ad accounts for $20 to $30 each. Purchased accounts risk restriction under Meta's policies, so treat this as a high-risk option, separate from your main business. [L1185, 2023]
- Pre-warmed Facebook ad accounts bought from Fiverr cost around 80 to 90 USD each. The buyer carries the ban risk. The lower price is considered a fair trade-off compared with subscription services charging 500 to 600 USD. [L1212, undated]
- Cheap pre-warmed accounts (about 80 to 90 USD each) carry ban risk that falls entirely on the buyer. Use them only for products with little ban risk, and avoid products likely to get an account blocked. [L1212, undated]
- Buying an existing Facebook ad account from a third party can bring its restriction history with it. If a purchased account spends far below its set budget, check its restriction status and payment setup before scaling spend. [L1220, undated]
- A new personal Facebook profile could not create a Business Manager or ad account in one country. Access to established family accounts was used as a workaround, but it depends on those accounts staying active. [L1431, 2020+]

### Renting Access to Client Accounts

- Access is gained by asking the client to give you access to their Facebook account, or to add you to their ad account. You can then run ads through a business account without using your own ad account. [L0440, 2023+]
- Use the client's own ad account when you want to protect your own ad account from problems. A ban on one account could otherwise damage the other as well. [L0440, 2023+]

### Account Priority Order After a Ban

1. Use your own profile first. [L0361, 2024]
2. If it is banned, use an old profile from a relative or friend you trust. It should look like a real profile and not have been created recently, for example not one month old. [L0361, 2024]
3. Use an agency account as the last option, because it is expensive. [L0361, 2024]

- If an ad account or Facebook page is banned during a test, create a new account and relaunch the same product. Keep access to multiple Facebook accounts so one ban does not stop sales. [L1173, undated]
- Facebook accounts can be banned even when the first ads run without issues. Plan a backup account process and consider TikTok as a parallel platform. [L1436, undated]

### Other Platforms

- TikTok agency accounts allow targeting across several countries, including Europe and Canada, without VPN workarounds. Agency accounts are the easiest way to target multiple regions. [L0950, 2023]


Part 6 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/05-warm-up-sequence-and-timing.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/07-ban-recovery-appeals-and-meta-support.md
