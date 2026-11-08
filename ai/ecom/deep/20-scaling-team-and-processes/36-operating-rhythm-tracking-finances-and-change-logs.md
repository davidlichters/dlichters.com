<!-- part of ecom/deep/20-scaling-team-and-processes.md -->
Part 36 of 37 of "20. Scaling Team and Processes: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/20-scaling-team-and-processes.md · Previous: https://dlichters.com/ai/ecom/deep/20-scaling-team-and-processes/35-business-partners-mentors-and-community-support.md · Next: https://dlichters.com/ai/ecom/deep/20-scaling-team-and-processes/37-preparing-a-store-for-sale-or-shutdown.md

## Operating rhythm: tracking, finances and change logs

### Daily and weekly checks for a live store

#### Daily and weekly routines

Older advice from 2020:

Daily checks for a live store:
1. Confirm that all orders are going out. [L0961, 2020]
2. Keep the inbox at zero. [L0961, 2020]
3. Return every missed phone call. [L0961, 2020]

Weekly checks for a live store:
1. Audit every ad account to confirm that spending is profitable. [L0961, 2020]
2. Optimize any campaign that no longer makes money. [L0961, 2020]
3. Put more budget behind products that are earning well. [L0961, 2020]

Older advice from 2021: daily work after launch should include contacting new brands, following up with brands already contacted, and uploading and optimizing products, not just running ads. [L0962, 2021]

#### Weekly supplier outreach

- Schedule supplier outreach on a fixed weekday, ideally Monday to Friday, because many suppliers are closed on weekends. If Monday does not suit you, pick any weekday and block it in your calendar. [L0938, 2020-26]
- Set a recurring weekly calendar reminder for supplier outreach. Plan for the next one to two months, then keep the routine going as long as you are still building your supplier list. [L0938, 2020-26]
- Allow 30 minutes to 2 hours per week for supplier outreach, done as one dedicated block on a single day. Consistency matters more than the length of any single session. [L0938, 2020-26]

#### Daily reporting on new product tests

Daily reporting sequence for a new product test:
1. After the store or website is built, send the first report within 24 hours. [L1355, 2026]
2. After the product videos (creatives) are found, send the report within 24 hours. [L1355, 2026]
3. After the campaign is launched, report at the 24-hour mark for Day 1. [L1355, 2026]
4. Report within 24 hours after Day 2. [L1355, 2026]
5. Report within 24 hours after Day 3. [L1355, 2026]
6. Continue reporting every 24 hours after that until told otherwise. [L1355, 2026]

- Missing a daily report costs money and removes the support team's control over the test, so all required reports must be submitted before moving on to the next step. Do not proceed to a later phase while earlier reports are outstanding. [L1355, 2026]

### Tracking setup

- Inventory tracking is commonly disabled even for live stores because continuously checking stock across all products is impractical. Enable it only if you maintain an active inventory management system. [L0036, 2020-26]
- An automation that writes the recovery date when a paid order comes in captures sales made when nobody on the team could call, such as at night or during time off. This keeps the sheet accurate without someone updating it manually. [L0737, 2020-26]
- Set up the sheet and automations early, even when one person handles everything, so the data is available for month-over-month improvement. Tracking is worth doing from the start rather than after the team grows. [L0737, 2020-26]

### Planning that feeds daily work

- Older advice from 2021-22: turn each priority into the full list of tasks needed to achieve it within six months, and mark recurring tasks as weekly so they are entered once. These task lists then feed the daily to-do list, and the 90-day rocks are derived from them. [L0447, 2021]
- Older advice from 2021-22: the priority task lists in the planner feed the daily to-do lists for the owner and the team, so one plan aligns everyone on the same top priority each day. [L0447, 2021]

### Changelogs

#### Why every change is logged

- Keep a running changelog of every change made to the store and its marketing, because over months you forget what was tweaked and why sales moved. Without this record, teams repeat failed tests and cannot tell which change caused a rise or drop in sales. Review it regularly so past experiments stay available when a similar idea comes up again. [L0410, 2020-26]
- Record every platform change in a log together with the date, the platform, the exact change, the expected result, and a baseline measured before the change. Fill in the result and its date later so each change can be judged on its own. [L1509, undated]
- Compare results against a 90-day trailing baseline rather than a single day, because one day of data is too noisy to show whether a change worked. Write the baseline into the log next to the change so the comparison is fixed in advance. [L1509, undated]
- A change logged without a baseline or a numeric expected result cannot be evaluated later. Always define the target metric and its current value before making the change. [L1509, undated]
- Keep a dedicated record of every ad, supplier and store change so you can explain what moved the metrics. [L0803, 2022]
- Keep a file of every letter, variant and result, because the record is what lets you repeat winners and avoid losers. A seller who loses the file must rebuild its knowledge from scratch. [L1369, undated]

#### Setting up the changelog spreadsheet

Procedure:
1. Open the master Google Docs changelog template from the provided link; it is read-only, so click File and then Make a copy to get an editable version in your own Google Drive. [L0410, 2020-26]
2. Alternatively, use File and Download to save it as Excel or CSV and open it in any spreadsheet software. [L0410, 2020-26]
3. For each change, fill the columns: Date (date the change was implemented), Platform (where the change was made, e.g. Google Ads or Shopify Email), Change (what was changed), Expected Results (a hypothesis of the outcome, stated as a number where possible), Additional Notes (anything you will need to remember later, such as starting budget or baseline). [L0410, 2020-26]
4. When the experiment ends, enter the Result Date (the end date of the test) and the Results (what actually happened). [L0410, 2020-26]
5. Compare the result with the expected result, then decide whether to stop the change or to adjust it and log the adjusted version as a new experiment row. [L0410, 2020-26]

Changelog template column layout (Google Docs / spreadsheet):

| Column | Name | Content |
|---|---|---|
| A | Date | Date the change was implemented |
| B | Platform | Platform where the change was made (e.g. Google Ads, Shopify Email) |
| C | Change | Description of the change |
| D | Expected Results | Hypothesis of the outcome, e.g. a target ROAS or open-rate increase |
| E | Additional Notes | Anything relevant to remember later, e.g. starting budget, baseline figure |
| F | Result Date | End date of the experiment (e.g. two weeks after the start date) |
| G | Results | What actually happened, entered as a number |

[L0410, 2020-26]

#### Log structure and example entries

Log structure (one row per change, dates as Excel serial numbers):

| Date | Platform | Change | Expected Result | Additional Notes | Result Date | Result |
|---|---|---|---|---|---|---|
| 45733.0 | Shopify Email | Opt-in bribe changed from % off to quiz | Increase revenue per opt-in | 90 day trailing revenue per opt-in = $80 | | |
| 45701.0 | Meta Ads | Updated creative for remarketing ads | Increase CTR | 90 day trailing CTR = 5% | | |
| 45691.0 | Meta Ads | Launched Advantage+ Shopping Campaign | >10x ROAS | Starting budget of $20/day | | |
| 45660.0 | Google Ads | Launched Demand-Gen Remarketing Campaign | >10x ROAS | Starting budget of $10/day | | |
| 45653.0 | Instagram | 3x weekly posts using AI-generated images & copy | 5x monthly engagement on organic posts | Current engagement = 100/month | | |
| 45630.0 | Shopify | Offer extended warranties | Sell 5 extended warranties/month | NA | | |
| 45611.0 | Shopify Email | Replaced email profile picture with moving.gif | Increase open rates by 5% | 90 day trailing open rate = 45% | | |
| 45553.0 | Google Ads | Launched YouTube Remarketing Ads | >10x ROAS | Starting budget of $10/day | | |

[L1509, undated]

Example of a Google Ads test logged in the changelog: on 18 September, YouTube remarketing ads were launched on Google Ads for the first time. Expected result: a return on ad spend above 10X, meaning more than $10 back per $1 spent. Additional note: starting budget of $10 per day. Result Date: two weeks after the start. Actual result: 5X ROAS, below the expected 10X, so the test was iterated instead of kept as is. [L0410, 2020-26]

Example of an iteration logged as a new row: after the first YouTube remarketing test returned 5X ROAS, the video ads in the campaign were swapped and the test was logged again as a new experiment with the expected result of over 10X ROAS. The note in the new row referenced the 5X result of the original test, so the link between the two experiments stayed visible. [L0410, 2020-26]

#### Deciding after a test and before repeating an idea

- When a test fails to reach its expected ROAS, decide between two options: turn the campaign off, or change its structure, targeting, or ads and run it again as a new logged experiment. Either way, record the decision so the same idea is not retested without knowing the earlier outcome. [L0410, 2020-26]

Use the changelog in team meetings before a new idea is accepted:
1. When someone proposes a change, search the log for earlier tests of the same element or platform. [L0410, 2020-26]
2. If a matching test exists, read its Expected Results, Result Date and Results. [L0410, 2020-26]
3. Only propose the idea again if the earlier outcome is recorded as a different setup or was never run, and log the new attempt. [L0410, 2020-26]

### CRO test boards

- Trello boards can track every CRO test in one place, with columns for future tests, current tests, completed tests, insights and notes. Trello is easy to share with virtual assistants and team members, who often already know it. [L1364, 2021-22]
- The tool does not decide success, so a spreadsheet with the same columns or another project tool such as Asana or Basecamp works equally well. Pick the tool that keeps all tracking in one place and is quick to use. [L1364, 2021-22]

Structure of a CRO test tracking board:

| Column | Purpose |
|---|---|
| Future Tests | Test ideas planned but not started |
| Current Tests | Tests running now |
| Completed Tests | Finished tests, with sub-lists Winning Tests and Failed or Inconclusive Tests |
| Insights | Ideas for further tests drawn from results |
| Notes | Loose ideas and reminders not related to a current test |

[L1364, 2021-22]

Contents of each test card:

| Field | Content |
|---|---|
| Description | What is being tested and the exact change |
| Duration | How long the test will run |
| Notes | Specific data points or other points worth recording |
| Attachments | Exports from Google Analytics, Google Ads or Shopify with data linked to the test |

[L1364, 2021-22]

Test card workflow:
1. Create a card for each planned test in Future Tests with its description, duration and attachments. [L1364, 2021-22]
2. When the test starts, move the card to Current Tests. [L1364, 2021-22]
3. Set a calendar reminder for the end date and review running tests in a weekly to-do session. [L1364, 2021-22]
4. When the test ends, move the card to Completed Tests and update it with results, comments and any additional attachments. [L1364, 2021-22]
5. Decide whether the test is winning or failed or inconclusive. [L1364, 2021-22]
6. Copy the card into the matching winning or failed sub-list. [L1364, 2021-22]
7. If the test produced insights, add a card to Insights describing them, to feed future test ideas. [L1364, 2021-22]

### P&L and bookkeeping

#### Starting the P&L with Claude Code

Procedure:
1. Open Claude Code project and type "execute this project". [L0218, 2025-26]
2. Answer onboarding questions in one message: brand name, accounting software (Xero/QuickBooks/MYOB/spreadsheets), monthly revenue ballpark, and primary priority (e.g., margin visibility, ad ROI, cash forecasting). [L0218, 2025-26]
3. Review and approve the generated CFO_DECISION_LOG.md, MEMORY.md, and DATA_INVENTORY.md files. [L0218, 2025-26]
4. Drag Xero P&L export into folder. [L0218, 2025-26]
5. Ask iterative questions to improve formatting or analysis. [L0218, 2025-26]

- Claude Code is preferable to Claude Cowork for initial P&L projects. Pass the Xero transaction export and classification prompt directly to Claude Code rather than Cowork; it handles larger datasets and maintains better file organization. [L0218, 2025-26]

#### Operating expenses in the P&L

- Operating expenses are entered on a 30-day (monthly) basis, then multiplied by three to create a 90-day total that aligns with the 90-day revenue figures. [L0222, 2025-26]
- Include only fixed operating expenses, meaning costs that remain constant regardless of revenue level. Examples: employee salaries, rent, warehouse costs, subscriptions to Shopify, Klaviyo, Gorgias, and other software. Exclude variable expenses that fluctuate with sales volume. [L0222, 2025-26]
- Example monthly operating expenses: $25,000, which equals $75,000 for a 90-day period ($25,000 × 3). [L0222, 2025-26]

#### Scaling and fixed costs

- Scaling example: selling 50 products per month at 1,000 USD each gives 50,000 USD in revenue. Fixed costs stay roughly the same at about 30 USD (Shopify plus domain), so they barely increase as volume grows. [L0759, 2020-26]

#### When to upgrade bookkeeping

- Older advice from 2021-22: start with the main goal of making sales and more sales; bookkeeping should not be perfected before the business has revenue to account for. Only move to proper accounting once questions about cash flow or money in the bank become important, or once you can afford to pay someone or have the time to set it up yourself. [L1516, 2021-22]
- A practical threshold for upgrading from a DIY bookkeeping setup to professional accounting is roughly 10,000 to 20,000 in monthly revenue. The figure is in the course's currency; the German course copy states it in euros. Above that level the business is considered real and should be run more seriously. [L1516, 2021-22]
- Scaling a dropshipping business means taking on bigger problems, which need better tools and different, more advanced help than the starter setup provides. The starter tools are not wrong, they are simply not suited to a business that is just getting started. [L1516, 2021-22]
- A spreadsheet is recommended while the store has low order volume. When revenue grows, you have a bookkeeper or accountant, and the extra cost is justified, switch to a paid accounting tool such as Xero.com, which the author describes as the one used once the business had an accountant. [L1202, 2021+]

Decide when to upgrade from a basic bookkeeping setup to proper accounting:
1. Upgrade once questions about where the money goes or why the bank balance does not match the P&L keep coming up. [L1516, 2021-22]
2. Upgrade when cash flow becomes important to you. [L1516, 2021-22]
3. Upgrade when you have the money to hire someone for bookkeeping, or the time to set it up yourself. [L1516, 2021-22]
4. If you are unsure, upgrade when monthly revenue reaches 10,000 to 20,000. [L1516, 2021-22]
5. Upgrade when the business moves into a growth phase with full financial systems. [L1516, 2021-22]

Until one of these applies, put the focus on getting sales. [L1516, 2021-22]

#### Who does the books

- When a store grows, a fractional CFO or a better accountant can provide a finance plan and budget, and can advise on financial issues that do not matter at the starter stage. [L1516, 2021-22]
- Hiring a cheap bookkeeper from freelance marketplaces such as Upwork, Fiverr or general online job boards is risky, because poor work is often not visible for many months. A business owner without accounting skills usually cannot inspect the work, and a clean-up by experienced professionals later costs far more than good work would have. [L1516, 2021-22]
- When hiring an external bookkeeper, choose someone who has proven experience with e-commerce businesses, ideally with dropshippers, rather than an unknown freelancer. Specialists in e-commerce accounting exist, and a business owner who has run an e-commerce store themselves may offer this service. [L1516, 2021-22]
- Professional e-commerce bookkeeping typically costs at least a few hundred dollars per month, which is the minimum a reputable bookkeeping company charges for this type of work. [L1516, 2021-22]
- If the owner dislikes doing the books or lacks the time to do them, a done-for-you e-commerce bookkeeping service is a reasonable option once the business has grown. Choose a provider that specializes in e-commerce and can show it works with many dropshippers. [L1516, 2021-22]
- Bookkeeping is needed for the owner to understand performance and solve problems. The main goal of the books is clarity about what is happening in the business, not a formal record for its own sake. [L1516, 2021-22]
- Outsourcing bookkeeping to a trained VA is allowed and encouraged when the owner purchases a course, as long as the course is used in the business for the assistant's training. [L1516, 2021-22]
- Once manual tracking is established, you can delegate order profit entry to a virtual assistant. Full automation with Zapier-style automations is possible but is an advanced setup; if you are not comfortable with such tools, hire someone to build it. [L1201, 2021-22]

Budget-conscious alternative to hiring an agency or freelancer (presented as far better than hiring an unknown cheap freelancer):
1. Hire a virtual assistant who already has some bookkeeping experience. [L1516, 2021-22]
2. Give the assistant access to a DIY e-commerce bookkeeping course that the business owner has purchased or has free access to. [L1516, 2021-22]
3. Have the assistant learn the bookkeeping process from the course and apply it to the business. [L1516, 2021-22]

Options compared:

| Option | Who does the books | Cost named | Main risk named |
|---|---|---|---|
| Done-for-you e-commerce bookkeeping service | Specialist firm | At least a few hundred dollars per month | Low when the firm has proven e-commerce experience |
| Cheap freelancer from Upwork, Fiverr or online job boards | Unknown freelancer | Low | Poor work often shows only months later, and the clean-up by professionals costs a lot |
| Virtual assistant with some bookkeeping experience, trained with a DIY e-commerce bookkeeping course | Virtual assistant under the owner's supervision | Not stated | Depends on the assistant's skill and training |

[L1516, 2021-22]

#### Financial review cadence

- Review the financial reports every month, because the monthly picture is what allows decisions before problems compound. Reports should be reviewed alongside the cash position, not only the sales figures. [L1046, 2021-22]
- An outside bookkeeper or advisor who knows ecommerce can translate the reports into clear actions. Where an advisor is not affordable, a self-taught bookkeeping course can also provide the same reports. [L1046, 2021-22]
- Financial analysis is built in layers: first understand the profit and loss, balance sheet and cash flow, then address cash flow, supplier and profit problems in turn. Each analysis answers some questions and raises new ones. [L1046, 2021-22]

### Profit allocation

#### Reinvest before taking profit

- Early profits from a drop shipping store should be reinvested, not taken out, so that you can work through the full cycle of finding a winner, testing, scaling, creating unique content, and eventually moving toward a private label or bulk-buying brand. Take profit out only once you have a second store running and enough experience to do so without taking a personal financial hit. [L1215, 2023+]

#### 90-10 rule for budget and time

- Follow the 90-10 rule monthly: allocate 90% of time and budget to proven, repeatable methods that drive revenue. Allocate 10% to experimental channels or strategies. If an experiment works, move it to the proven 90%; use the freed 10% for new tests. [L0253, 2024]

#### Paying yourself

Procedure:
1. Calculate your personal monthly expenses. [L0801, 2021]
2. Pay yourself a fixed salary from the business account, for example 500 dollars per week, once the business is running. [L0801, 2021]
3. At the end of each month or quarter, check the net profit left in the business. [L0801, 2021]
4. Decide a distribution based on goals and the profit available, for example distributing 150,000 dollars at the end of a quarter when net profit passes 200,000 dollars. [L0801, 2021]
5. Keep some profit in the business and avoid drawing the entire balance. [L0801, 2021]

- Set distributions from goals, not from what is left in the account. Tie a quarterly or monthly distribution to a target net profit so you do not overdraw the business. [L0801, 2021]

#### Planning sheet

- A two-tab spreadsheet works for planning: one tab holds the Profit First allocations from revenue, and the other holds the strategic planning with current team, staff pay, remaining budget, and max and target capacity. The lesson used a spreadsheet for this, and the owner should update it with real numbers. [L1334, 2021-22]

### Hiring thresholds tied to revenue

- A new expense can be funded by raising revenue or by raising that expense's allocation percentage. This forces a check on whether the expense, such as a software tool or a hire, is necessary. [L1200, 2021-22]
- Tie each hire or large expense to a revenue threshold, so growth is paid for before it is committed. For example, a new staff member should be added only once real revenue reaches a set level that covers their cost. [L1200, 2021-22]
- Staff share benchmarks differ by source:
  - About 35% of real revenue: observed in one established dropshipping company that used this method. [L1200, 2021-22]
  - 30%: the figure used in the lesson's example. [L1200, 2021-22]
  - Use 35% or 30% only as a reference point. The right staff percentage depends on the business's actual payroll and should be set from its own numbers. [L1200, 2021-22]

### Reviewing metrics

- Every e-commerce store should have someone who asks each month what revenue can be reached next, comparing the latest month and the upcoming quarter, so growth opportunities are not missed. [L0463, 2020-26]
- Review the changelog regularly so past experiments stay available for comparison. [L0410, 2020-26]
- Compare each change against its logged baseline and expected result, using the 90-day trailing figure. [L1509, undated]
- Review the monthly financial reports alongside the cash position. [L1046, 2021-22]


Part 36 of 37 of "20. Scaling Team and Processes: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/20-scaling-team-and-processes.md · Previous: https://dlichters.com/ai/ecom/deep/20-scaling-team-and-processes/35-business-partners-mentors-and-community-support.md · Next: https://dlichters.com/ai/ecom/deep/20-scaling-team-and-processes/37-preparing-a-store-for-sale-or-shutdown.md
