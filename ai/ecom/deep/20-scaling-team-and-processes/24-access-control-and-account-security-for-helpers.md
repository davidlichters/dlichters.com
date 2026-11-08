<!-- part of ecom/deep/20-scaling-team-and-processes.md -->
Part 24 of 37 of "20. Scaling Team and Processes: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/20-scaling-team-and-processes.md · Previous: https://dlichters.com/ai/ecom/deep/20-scaling-team-and-processes/23-performance-review-and-benchmarks.md · Next: https://dlichters.com/ai/ecom/deep/20-scaling-team-and-processes/25-testing-cadence-and-scale-or-kill-decision-rules.md

## Access control and account security for helpers

### When to add a team member
- A new store starts with one user, the owner. Hire staff only once the business can afford to pay them and doing the work yourself is no longer the better option. [L1306, 2020-26]
- The risk of a virtual assistant (VA) stealing or copying is real, but it should not stop you from hiring. Reduce it by vetting thoroughly, starting small and building trust gradually, not by avoiding delegation altogether. [L245.055]

### Vetting and phasing in a new VA
1. Learn about the person through interviews and reference checks. [L245.054]
2. Start with a small, low-risk project to assess reliability and character. [L245.054]
3. Gradually increase access to different business systems and information over time. [L245.054]
4. Do not hand over all sensitive information immediately to someone you do not know. [L245.054]

**First access for a new VA:**
- Begin with limited access: sales, orders and the support mailbox only. This tests how the working relationship goes. [L1173, undated]
- Extend access to other tools only after the assistant has delivered reliable work over a set period. The sources do not state how long that period is. [L1173, undated]

### Account types and permission levels

#### Shopify staff accounts
- Under Settings > Users, staff accounts give team members such as marketers or designers access to the store. [L1306, 2020-26]
- Shopify Staff Accounts lets the owner invite team members with their own logins and permissions. Use it to give helpers access without sharing the main owner account. [L1095, 2024]
- A staff account added through the invite form has full permissions, so it can change the whole store. Only add people you trust with full access. [L1300, 2021-22]

**Adding a staff account (2021-22 plan, older):**
1. Open Settings and go to Plan and permissions, which is the Account page in the Shopify admin. [L1300, 2021-22]
2. In the Staff section, click Add staff. Check the staff count, which on this plan is limited to 2 (shown as Staff (0 of 2)). [L1300, 2021-22]
3. Enter the First Name and Last Name of the staff member and the email address from their welcome email. [L1300, 2021-22]
4. This staff account will have full permissions. [L1300, 2021-22]
5. Click Send invite. [L1300, 2021-22]
6. The staff member accepts the invitation and works on the store through their own Shopify Partners account. [L1300, 2021-22]

*Conflict on the navigation path:* The 2021-22 guide uses Settings > Plan and permissions. The later guide uses Settings > Users. Use whichever path matches your admin screen. [L1300, 2021-22; L1306, 2020-26]

#### Shopify collaborator accounts
- Collaborator accounts let a developer, designer or marketer enter your Shopify admin without taking one of your staff account slots. [L1300, 2021-22]
- Collaborators do not count toward the staff limit. [L1327, 2026]
- Use collaborator accounts for freelancers who upload products. Shopify's collaborator code feature grants limited upload access only, while protecting payment methods, store settings and account security. Never share your Shopify login with freelancers uploading products. [L0128, undated]

**Giving an outside party access (supplier, 3PL, agency or support staff):**
1. Go to Settings > Users and open the organization account security page. [L1327, 2026]
2. Click Generate new code. [L1327, 2026]
3. Share the code together with the store's domain or store name identifier with the person who needs access. [L1327, 2026]
4. The outside party sends a collaborator request using that code. [L1327, 2026]
5. Review the request in your Shopify admin and approve it. [L1327, 2026]
6. Assign the appropriate role after approval. [L1327, 2026]

*Conflict on request type:* The 2021-22 guide describes two options in the Collaborator accounts section: allow any person to submit a collaborator request, or limit requests to people who hold a collaborator request code. The current procedure uses the code. Use the code option. [L1300, 2021-22; L1327, 2026]

#### Permission levels
| Access type | Default or rule | Source |
|---|---|---|
| Staff account via invite form | Full permissions | [L1300, 2021-22] |
| Collaborator | Smallest role that fits the job, such as Customer support, Online store editor or Limited permissions | [L1327, 2026] |
| Collaborator | Administrator is not the default choice | [L1327, 2026] |
| Apps and third-party agents (e.g., a China 3PL, bundle or review apps) | Also work through the roles system | [L1327, 2026] |

- Give each outside party the smallest role that fits their job, such as Customer support, Online store editor or Limited permissions, instead of Administrator. [L1327, 2026]
- Apps that need access, for example bundles or review apps, and third-party agents such as a China 3PL also work through this roles system. [L1327, 2026]

#### Shared logins
- Do not share one login across several people working at the same time. A second login on the same account logs the first user out with a message that another user has signed in from a different device. [L0892, 2026]
- For tools with no financial or customer data, a shared login can be used, such as a shared Canva account with extra seats for multiple users. [L0360, 2024]
- Individual seats are the safer option when more people need access. [L0360, 2024]

#### Google Workspace seats
| Option | Cost | Own login and inbox | Notes | Source |
|---|---|---|---|---|
| Additional user | $7 per month each | Yes | Only for employees who must sign in themselves | [L1197, 2020-26] |
| Alias address (e.g., returns@, firstname@) on the same domain | No extra cost | No | Accessed through the primary account's login | [L1197, 2020-26] |
| Annual plan user changes | Users can be added at any time |, | Users can only be removed when the contract renews | [L1197, 2020-26] |

### Tool access for VAs: conflicting guidance
Sources differ on how far VA access should go. Each rule applies to a different situation:

| Situation | Guidance | Source | Date |
|---|---|---|---|
| VA needs the tools for daily work | Give access to all tools they need, including system logins. Accepting this risk is necessary for the work to function. | [L1122, 2016] | Undated |
| VA must place orders or pay suppliers | Give system logins plus the relevant bank account details and credit cards. Without these they cannot complete ordering or payments. Misuse is considered uncommon in practice. | [L1122, 2016] | Undated |
| VA places orders and decides on supplier purchases | Give access to supplier pricing and ordering so they can decide and place orders on your behalf. Trust and information access are needed for them to work well. | [L1109, 2018] | 2018 |
| Shopify store, financial data and customer data | Use a staff or collaborator account with limited, view-only access to the sections they need. Do not give admin login. Restrict access to financial and customer data. | [L0360, 2024] | 2024 |
| Supplier orders | VA gets passwords, supplier price lists, contracts and credit card details needed to place supplier orders. | [L1473, 2019] | Undated |
| Owner's bank or personal financial accounts | Not given to the VA. | [L1473, 2019] | Undated |
| Profit margin data | Not given to the VA, since it is not needed for daily tasks. | [L1473, 2019] | Undated |

*How the sources fit together:* The undated broad-access rules and the 2024 restriction meet at Shopify and financial or customer data. The 2024 restriction applies there. The broad rules apply to the other tools the job needs. The 2018 rule is older, and it matches the undated ordering rules. [L1122, 2016; L0360, 2024; L1109, 2018]

### Discount and decision limits for VAs
- The VA may grant discounts of up to 10% without asking the owner, since all suppliers accept that margin. [L1473, 2019]
- Any larger discount or other decision needs the owner's approval. [L1473, 2019]

### Protecting finances and sensitive data
- Restrict access to financial and customer data for every helper. [L0360, 2024]
- Billing history, meaning past payments to Shopify, is shown under Settings > Billing. [L1306, 2020-26]
- If the P&L is accessed by multiple team members or is sensitive internal data, create a separate restricted-access sheet. Share only the read-only output with the team, and keep transaction-level data isolated. [L0218, 2025-26]

**Maximum security for sensitive financial data used with AI tools:**
1. Use an old cleared laptop with a fresh OS. [L0218, 2025-26]
2. Create a brand new Google Drive account on that device. [L0218, 2025-26]
3. Create a separate Google Drive for this project only. [L0218, 2025-26]
4. Grant sheet access only to this new email address. [L0218, 2025-26]
5. Store this laptop offline except during AI sessions. [L0218, 2025-26]

### Reviewing who has access
- In Business settings, the Users list shows every person with access to the business portfolio. [L0651, 2026]
- The Last active column shows who has been working in the portfolio. [L0651, 2026]
- The Invite people button adds new users, and the Export button downloads the list. [L0651, 2026]
- Use this list to review access before adding or removing people. [L0651, 2026]

### Storing login details
- Keep the login details for every tool the team uses, such as the phone system Mighty Call and Shopify, on one card in the corporate information board. [L1396, 2021-22]
- Staff can then find access details without asking the owner, and forgotten passwords stop blocking work. [L1396, 2021-22]
- Limit who can view that board, because it holds credentials. [L1396, 2021-22]

### Freelancers and outside parties
- Giving freelancers direct access to the store is dangerous, because a single wrong click can damage the entire store. [L1396, 2021-22]
- A Fiverr freelancer was found to have copied a logo instead of creating one. [L1396, 2021-22]
- Limit store access to trusted staff. Use freelancers only for isolated tasks that do not need store access. [L1396, 2021-22]

### Fixing access problems

#### When a team member makes themselves a domain owner
1. Remove the meta tag they used to claim ownership. [L1281, 2022]
2. Message them calmly and ask them to remove themselves as an owner as soon as possible. [L1281, 2022]
3. Grant only the access they need, and ask them to request any future access in advance. [L1281, 2022]

**Message template:**
```text
Hi [name], I just got an email from Google saying you were added as an owner of [store domain]. If you need extra access, let me know and I will grant what is needed. Please remove yourself as an owner of the domain as soon as possible. In future, if you need more access to any tool, ask me in advance.
```
[L1281, 2022]

#### Keeping the response calm
- Most access problems from team members come from carelessness rather than intent. [L1281, 2022]
- Keep the response calm and fix the access, so the working relationship stays intact. [L1281, 2022]

#### Further details

- 1. When hiring a virtual assistant, learn about the person through interviews and reference checks; 2. Start with a small, low-risk project to assess reliability and character; 3. Gradually increase access to different business systems and information over time; 4. Do not hand over all sensitive information immediately to someone you do not know. [L0245, 2020]

- Risk of VA theft/copying is real but should not prevent hiring; mitigate by vetting thoroughly, starting small, and building trust gradually rather than avoiding delegation entirely. [L0245, 2020]


Part 24 of 37 of "20. Scaling Team and Processes: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/20-scaling-team-and-processes.md · Previous: https://dlichters.com/ai/ecom/deep/20-scaling-team-and-processes/23-performance-review-and-benchmarks.md · Next: https://dlichters.com/ai/ecom/deep/20-scaling-team-and-processes/25-testing-cadence-and-scale-or-kill-decision-rules.md
