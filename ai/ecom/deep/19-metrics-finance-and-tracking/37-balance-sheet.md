<!-- part of ecom/deep/19-metrics-finance-and-tracking.md -->
Part 37 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/36-bookkeeping-p-l-balance-sheet-and-cash-flow.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/38-cash-management-profit-first-taxes-and-budgeting.md

### Balance sheet

- Assets are anything a business owns that can generate economic benefit, such as cash, inventory, investments and real estate. Liabilities are amounts owed to others, such as credit card balances, loans, unpaid wages and taxes owed. A rule of thumb is that assets put money in your pocket and liabilities take money out of it, so a home you live in is not counted as an asset in that sense. [L0484, 2021-22]
- Buying inventory is not an expense. It is a trade of cash for an equal value of inventory, so the net position does not change at the time of purchase. Inventory can be thought of as cash sitting on a shelf, and it only becomes income through the P&L when it is sold. [L0484, 2021-22]
- The balance sheet is a snapshot of account balances at one point in time. It lists assets (bank and credit account balances, inventory, and other items not on the P&L) against liabilities (loans, grants, and other amounts owed), with equity making up the rest. It shows balances, not increases or decreases, and its totals must reconcile as assets minus liabilities equals equity. [L0484, 2021-22]
- Check the balance sheet with Assets = Liabilities + Equity. In the example, liabilities of 149,000 plus equity of (88,165) give 60,835, which matches total assets of 60,834 within rounding. If the two sides differ by more than rounding, a line is missing or entered wrong. [L1046, 2021-22]
- Current year earnings in equity shows the net income of the current year to date. Retained earnings holds profit kept from earlier years after owner distributions. Review both together when judging whether the business is building equity over time. [L1046, 2021-22]
- Year-end cash in the example was 31,631 (business checking 31,176 and savings 456). Business cash rose over the year by a figure the course puts at about 29,000 to 34,000 after owner draws. [L1046, 2021-22]
- A balance sheet and a cash flow statement are two additional key reports that accompany the P&L, and both are critical for understanding the business. [L1246, 2021-22]

### Cash flow statement

- The cash flow statement shows every cash movement into and out of bank and credit accounts, covering incomes, expenses, asset purchases and liability payments. It is always recorded on a cash basis and is the link that connects the P&L and balance sheet to the bank account. It is divided into operating activities (customer receipts, supplier and employee payments, interest, taxes), investing activities (equipment sales, inventory purchases) and financing activities (dividends, credit card payoffs or borrowing). [L0484, 2021-22]
- Cash flow statement arithmetic: net cash from operating activities + net cash from investing activities + net cash from financing activities = net increase (or decrease) in cash. Ending cash equals beginning cash plus that net increase, and the ending figure must match the bank and credit card balances. [L0484, 2021-22]
- Net change in cash equals operating cash flow plus investing cash flow plus financing cash flow. Ending cash equals beginning cash plus that net change, so the cash flow statement should close exactly to the bank and clearing balances on the balance sheet. [L1046, 2021-22]
- The cash flow net from operations should roughly match profit but will differ because of timing. Sales are recorded when a customer buys, while cash only arrives when the payment processor pays out. [L1046, 2021-22]
- Net cash from operating activities = cash receipts from customers minus payments to suppliers and employees plus other operating cash receipts. The example gives 1,557,243 minus 1,421,467 plus 23,515, which equals about 159,290 (the course's operating cash figure). This three-line view summarizes the whole profit and loss for cash purposes. [L1046, 2021-22]
- Inventory purchases and similar non-P&L cash payments belong in investing activities, not operating activities. For dropshipping stores, the main investing item is payments in transit, which is cash already earned from payment processors but not yet in the bank. [L1046, 2021-22]
- Read the signs in the cash flow statement as direction of cash. Negative financing cash means net debt repayment or owner distributions leaving the business, while positive financing cash means new borrowing or owner money coming in. A negative financing line is not automatically bad when it reflects paying down card debt. [L1046, 2021-22]

### Three reports together

- The three monthly financial reports (P&L, balance sheet, cash flow statement) can be used together to cross-check one another. If two of them are available, the third can be derived. [L0484, 2021-22]
- A P&L can show profit while the bank account does not match it, which is a common problem for growing e-commerce stores. Reconciling the P&L against bank balances is a key check. [L1516, 2021-22]

### Monthly reporting routine

- Monthly financial review order: [L1046, 2021-22]
  1. Pull the profit and loss statement for the month and year to date.
  2. Calculate gross margin and net margin with one consistent denominator.
  3. Review the monthly gross profit trend against sales to spot timing effects.
  4. Review the balance sheet: cash, clearing accounts, credit card and loan balances, and whether liabilities are growing faster than assets.
  5. Review the cash flow statement: operating cash, investing (payments in transit and inventory), and financing (card balances, loan payments, owner draws).
  6. Check the large cost lines: outbound shipping, advertising spend, freelancers, interest expense and travel.
  7. Turn the findings into actions, starting with the biggest margin lever.
- Accounting software such as Zero can produce these monthly reports from connected store and bank data. A spreadsheet can imitate the same layout for practice or for quick what-if calculations. [L1046, 2021-22]
- A growing store creates predictable financial questions: where the money is going when the P&L shows profit but the bank balance does not match, how much is owed to suppliers, and why the bank balance is unexpectedly high. Knowing the answers to these questions is what bookkeeping is for. [L1516, 2021-22]

### Reconciliation and data checks

- Export no more than six months of transaction data at a time to avoid confusion during AI classification. Longer periods require too much context and reduce accuracy. [L0218, 2025-26]
- Processing 22,000 transactions from a six-month period takes approximately one hour with Claude Cowork on Opus 4.6. [L0218, 2025-26]
- Export Xero transactions: [L0218, 2025-26]
  1. Open Xero and reconcile transactions through your target end date (max six months back).
  2. Select all accounts and add Contact as a column.
  3. Click Update.
  4. Select Excel and export the transaction list.
  5. Save the file for use in Claude Cowork.
- Flag any Xero export data more than 30 days old as potentially stale before drawing financial conclusions. Check export dates immediately upon receipt. [L0218, 2025-26]
- Treat mismatches as urgent priority: revenue recorded on platforms not matching bank deposits, COGS not matching supplier invoices, or ad spend not matching bank statements. Flag these as potential discrepancies immediately. [L0218, 2025-26]
- Check that the Shopify tax settings are configured, since the store then shows tax data in its reports. [L0970, 2023]

### AI-assisted finance reports

- Do not copy-paste transaction data into Claude manually. Drag the exported Xero file into the Claude Code project folder, where the AI reads it directly. This avoids manual entry errors and maintains data integrity. [L0218, 2025-26]
- Ask the AI CFO system questions directly rather than external tools such as ChatGPT. The Claude instance has full context of your financial structure, transaction history and business decisions, enabling more accurate and specific answers. [L0218, 2025-26]
- Use Excel instead of Google Sheets for Stage 2 (Claude Code forecasting). Excel has better integration with VS Code, superior context window handling, and formatting precision that Google Sheets cannot yet match. [L0218, 2025-26]
- In the Claude Cowork interface (the source reads Cord/Claude Cowork), click "Work in a folder" so that all output files are automatically organized in a single project folder, which persists across sessions. [L0218, 2025-26]
- After the AI builds the P&L, require a summary with the following, then review for accuracy before using it in forecasts: [L0218, 2025-26]
  1. Total revenue per month (actual vs forecast).
  2. Total expenses per month.
  3. Net profit per month.
  4. List of rows added that were not in the template.
  5. List of rows removed due to no data.
  6. Any transactions the AI remained uncertain about.
- If Claude Cowork formulas break during the first P&L generation, reinforce formula-building requirements explicitly in the prompt and regenerate. The AI will correct this and ensure every total row contains functional SUM formulas. [L0218, 2025-26]
- For any bulk financial model change in Claude Code: [L0218, 2025-26]
  1. Create a PLAN.md file outlining the proposed changes.
  2. Wait for explicit "Approved" confirmation from the user.
  3. Execute only after approval.

### Budgets, business logs and what-if models

- Monthly fixed expenses listed in the sheet: [L0900, undated]

| Expense | Monthly value |
|---|---|
| app 1 | 14.0 |
| app 2 | 12.0 |
| Shopify | 79.0 |
| VA | 500.0 |
| designer | 1.0 |
| inventory | 0.0 |

- Create a business log tab in your P&L spreadsheet recording every change: date, what changed (for example, a pricing adjustment from $100 to $110), and impact details. Include this log when sharing the spreadsheet with Claude Code, as it provides critical context for spotting trends and analyzing profitability shifts. [L0218, 2025-26]
- Use the CFO system to test profitability scenarios. Analyze what happens if a major expense (for example, the Gorgias customer service tool subscription) is removed, if specific team members are replaced with lower-cost alternatives (for example, a VA in the Philippines instead of a local employee), or if marketing spend efficiency improves. The system recalculates net profit impact instantly. [L0218, 2025-26]

### Annual financial examples

- Fictional but realistic example: a US-style summer seasonal outdoor dropshipping store with 2020 total income of about 1.55 million dollars (sales 1,826,410, less discounts of 34,197 and returns and cancellations of 237,813). Cost of goods sold was about 1.3 million, made up of product cost 1,151,214, outbound shipping 98,131 and merchant fees 46,733. Gross profit was 258,322, which the course presents as about 14 percent (see the margin note above for the 16.6 percent figure on total income). Operating expenses were 143,694, including advertising of about 62,000 and freelancers of about 18,000, leaving operating income of 114,627. Card rewards of 23,514 brought net income to 138,142, about 9 percent.
  - Monthly pattern: sales were low in January and February, with a January net loss of almost 10,000. Revenue jumped by about 100,000 in April, reached 110,000 to 115,000 in May and peaked at 287,000 in June. It then fell to about 164,000 in July, rose to about 220,000 in August, dropped to 85,000 to 86,000 in September, recovered to 100,000 to 107,000 in October, fell to 67,000 in November and was about 98,000 in December.
  - In the fall the store paid suppliers for earlier orders faster than new sales came in, producing a gross profit deficit of about 32,000 in one fall month.
  - Year-end balance sheet: cash 31,631, total assets about 60,834, and liabilities of 149,000, made up of credit card A 20,359, PPP loan 3,056, credit card B 84,402 and a long-term bank loan of 41,184. Liabilities were more than twice assets. Operating cash flow was about 159,290.
  - The diagnosis was that profitability, not sales, was the main problem. The planned fixes were higher-margin suppliers, supplier pricing and shipping renegotiation, discount limits, price tests and reduced marketing focus. [L1046, 2021-22]


Part 37 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/36-bookkeeping-p-l-balance-sheet-and-cash-flow.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/38-cash-management-profit-first-taxes-and-budgeting.md
