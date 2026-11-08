<!-- part of ecom/deep/11-tiktok-and-short-video.md -->
Part 12 of 14 of "11. TikTok and Short Video: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/11-tiktok-and-short-video.md · Previous: https://dlichters.com/ai/ecom/deep/11-tiktok-and-short-video/11-campaign-setup-objectives-targeting-and-placements.md · Next: https://dlichters.com/ai/ecom/deep/11-tiktok-and-short-video/13-instagram-reels-and-trial-reels.md

## Testing Structures, Budgets and Automated Rules

### Campaign budget type

- Set the TikTok ad budget type to **Daily**, not **Lifetime**. Lifetime budgets cause spending delays and inconsistent algorithm behavior, especially in high-competition periods such as Q4. [L0309, 2024+]

### Campaign structure: ABO versus CBO

The sources use two budget structures. They differ in where the budget is set, not in what they measure.

| Structure | Where the budget is set | Values in the sources | ids |
|---|---|---|---|
| ABO (ad group budget) | Each ad group gets a fixed amount | $20 per ad group in a 7-15 video test; $20 per ad set on a product with a $10 margin | [L1376, undated; L1440, 2021+] |
| CBO (campaign budget) | One budget at campaign level, divided by TikTok across the ad groups | $50 per day split across five ads or ad groups; about 50 pounds or 50 Euro per day split across five ads | [L1375, undated; L0552, 2023; L1378, undated] |

- ABO assigns a fixed budget to each ad set. CBO sets one budget at campaign level, and TikTok divides it across the ad sets. The lesson recommends CBO for the five-ad testing structure. [L1378, undated]
- The sources imply a split by test design. Where each video needs a fixed, equal share of spend (7-15 videos at $20 each), use ABO. Where one campaign tests five ads and TikTok should divide the total, use CBO. [L1376, undated; L1375, undated; L0552, 2023; L1378, undated]
- The five-ad CBO structure is one campaign with five ads, a daily budget of about 50 pounds or 50 Euro split between the five ads, and the same campaign run consistently. [L0552, 2023; L1375, undated] (merged: both sources describe the same structure)

**Setting up CBO**

1. Go to the campaign level, turn on Campaign budget optimization, and set the budget. The example uses a campaign budget of $50 (50 Swiss francs in the Swiss account), spread across all ad sets. [L1378, undated]
2. After the campaign is published, a duplicate button appears on the ad group. Click it four times to create five ad groups in total. [L1378, undated]

### Budget trick: low campaign cap, high ad-set budgets

**Procedure (use with the warning below)**

1. Create a TikTok Ads campaign and set a campaign budget limit (e.g., $100 for daily spend). [L0309, 2024+]
2. Inside that campaign, create ad sets and set each ad set's budget to $2000-$5000. [L0309, 2024+]
3. The algorithm believes each ad set has more budget than the campaign allows, forcing faster spend. [L0309, 2024+]
4. The campaign-level cap ensures you never exceed your intended daily spend. [L0309, 2024+]
5. To increase overall spend, gradually raise the campaign-level limit in increments (e.g., +$50 at a time). [L0309, 2024+]

**What the trick does and does not do**

- The budget trick compresses the timeline for deciding whether a product is viable. It does not improve results or ROAS. Fast spending answers the question sooner; it does not change the outcome. [L0309, 2024+]
- The result is the same whether you spend $500 gradually over five days or in rapid bursts. Only the timeline changes. [L0309, 2024+]

### Warm-up spend

- TikTok ad accounts often need a daily budget of around 50 pounds or dollars to warm up the pixel. [L0552, 2023]
- Turning the campaign off early can damage its learning. Keep the same budget running for several days without increasing or decreasing it. [L0552, 2023]

### Creative testing

**Keep everything except the video identical**

- When testing several creatives, keep the offer, ad copy and audience identical across all ads, so that only the video differs. Otherwise a difference in results cannot be traced to the creative. [L1436, undated]

**Creative-led structure (newer approach)**

- With a fully broad audience, the platform finds a pocket of buyers for each creative, so the creative is the variable to test. [L1194, undated]
- The older setup (per source) used five ad sets, each with three to five videos and two to three ad copies, duplicated five times with the same creatives. It spread spend across shared assets, so it did not show which single creative was the winner. [L1194, undated]
- The newer setup uses 10 ad sets with one unique video each on a fully broad audience. [L1194, undated]
- The reset procedure that uses this setup is under "Resetting accounts and pixels". [L1194, undated]

**Video and ad-copy test (ABO)**

1. Start with 7 to 15 different videos. [L1376, undated]
2. Create one campaign using ad group budgets (ABO, ad-group level budget). [L1376, undated]
3. Set the budget at $20 per ad group. [L1376, undated]
4. Use only the TikTok placement. [L1376, undated]
5. Set age to 25+ (adjust by product and gender). [L1376, undated]
6. Use no interest targeting: completely broad targeting. [L1376, undated]
7. Place one different video in each ad group. [L1376, undated]
8. Use an ad copy built from a short customer-language phrase (four or five words) naming the main benefit, and test several of them. [L1376, undated]

**Product test with a budget limit**

1. Choose 4 to 5 interests that correlate with the product, and narrow the targeting further when the product is niche. [L1440, 2021+]
2. Set about $20 per ad set on a product with a $10 profit margin. [L1440, 2021+]
3. When the spend reaches twice the cost per acquisition without a profitable result, switch that interest off and cycle it out. [L1440, 2021+; L0298, 2023]
4. Spend about $200 to $300 per product with a well-made creative. If nothing works by then, the product is unlikely to take off. [L1440, 2021+]
5. If the product still shows promise, try new creatives or a different marketing angle. [L1440, 2021+]
6. Scale horizontally or vertically once the test works. [L1440, 2021+]

### Evaluation window and daily noise

- Judge TikTok ad performance over a seven-day period rather than day by day. Daily results on low budgets fluctuate and can average out. Short-term swings do not necessarily mean a fault or a glitch. [L0552, 2023]
- Example: a test with a $50 or 50 Euro daily budget produced five to six sales on the first day, with seven add-to-carts and five checkouts (about 71% from add-to-cart to checkout). On the following day it produced zero sales despite four or five checkouts and add-to-carts. The speaker attributed this to random daily variation. [L0552, 2023]

### Day-of-week effects

- TikTok performance varies by day of week. Monday-Wednesday typically underperform, and Thursday-Sunday perform better. Adjust expectations and automation rules accordingly. [L0298, 2023]

### Automated rules

**Setting up rules in Ads Manager**

1. Go to Automated Rules in TikTok Ads Manager (top right). [L0309, 2024+]
2. Select "Manage Rules" or "Create New Rule." [L0309, 2024+]
3. For beginners, use two pre-built rule types: [L0309, 2024+]
   - (a) Control Budget: set a threshold (e.g., "total cost in last 3 days > $X") and an action (turn off campaign or notify). [L0309, 2024+]
   - (b) Enhance Performance: if CTR > 2-3% AND CPC < $1, increase daily budget by $50. [L0309, 2024+]
4. Learn the interface before deploying, as wrong settings can disable profitable campaigns. [L0309, 2024+]

**Kill rules based on break-even**

1. Rule 1: If spend equals 2x break-even cost per purchase with zero sales, pause immediately. [L0298, 2023]
2. Rule 2: If spend exceeds $80 and ROAS falls below break-even ROAS, pause the ad set. [L0298, 2023]

### Hour-level waste and bidding

- TikTok can spend budget in low-converting hours, unlike Facebook's delivery algorithm. Check spend by hour when TikTok campaigns run. [L0363, 2022+]
- Manual bidding is not needed on TikTok in most cases. The exception is dayparting blasts later on. [L1440, 2021+]

### Resetting accounts and pixels

**When a reset is justified**

- A reset to a new ad account with a new pixel is a fast fix when CPM and CPC stay far outside benchmarks. A new account showed better CPM and CPC after only $6.60 in spend. [L1194, undated]
- This conflicts with the rule not to create a new account for each test. Reset only when CPM and CPC stay far outside benchmarks. Do not reset as routine practice between tests. [L1194, undated; L0552, 2023]

**Reset procedure**

1. Create a new ad account with a new pixel. [L1194, undated]
2. Launch 10 ad sets, each with one unique video (or one unique image) and a fully broad audience. [L1194, undated]
3. Let them spend, then switch off the underperforming ad sets. [L1194, undated]
4. When a winning creative appears, move it into its own campaign and duplicate that same creative into several ad sets. [L1194, undated]

## Benchmarks, Diagnosis and Scaling TikTok Ads

### Creative First: The Precondition for Scaling

- TikTok depends heavily on creative and much less on the scaling strategy. Self-scaling, CBO and ABO work mainly because the creatives are strong, not because of the method itself. [L0298, 2023]
- Before scaling, secure high-quality creatives. Either film original content, or replicate competitor content in your own style rather than copying it directly. [L0298, 2023]
- Running the same ads that already work for a successful product gives no advantage. A test has to differ from the product's original winning approach in angle, platform or funnel. [L0561, 2023+]
- Scale by producing more distinct video creatives, not by simply raising budget. Scaling budget too aggressively with too few creatives stops results quickly. Lower competition is also a reason to focus on creatives. [L1376, undated]

### Benchmarks: CPM, CPC, CTR and Conversion

| Metric | Reference or target | Context | Source |
|---|---|---|---|
| CPM | Typically $10-$15 | Costs are rising year over year | [L0296, 2021+] |
| CPM scale trigger | Below $10 | Part of the scale-readiness gate | [L1375, undated] |
| CPC scale trigger | Below $1 | Part of the scale-readiness gate | [L1375, undated] |
| CTR | Aim for 1.5% | Standard target | [L0774, 2023] |
| CTR, acceptable | About 0.8% | Acceptable when traffic and store conversion are good, because TikTok CPMs are much lower than Facebook CPMs | [L0774, 2023] |
| CTR, very good | About 0.7-0.8% | Stated as very good on TikTok | [L1436, undated] |
| CTR, scale trigger | Above 1.5% | Part of the scale-readiness gate | [L1375, undated] |
| Store conversion rate | Above 1.5% to 2% | Part of the scale-readiness gate | [L1375, undated] |

**Note on CTR sources:** The sources differ. [L0774, 2023] and [L1375, undated] use 1.5% as a target and scale trigger. [L1436, undated] describes about 1.52% as rare. Use 1.5% as the bar for scaling decisions, expect that many ads will sit below it, and accept about 0.8% when CPM is low and the store converts well. [L0774, 2023; L1375, undated; L1436, undated]

**Note on the transcript figure:** [L1436, undated] reads "0.7.8 percent" in the transcript, so treat the exact figure as approximate. [L1436, undated]

### Diagnosing Add-to-Cart Without Sales

- When TikTok traffic produces an add-to-cart rate of about 10% to 12% but almost no purchases, the audience is often the problem rather than the page. [L1345, 2021+]
- Excluding a younger group that browses without buying (for example 18 to 24) can lower add-to-cart volume while raising the purchase conversion rate. [L1345, 2021+]
- Judge audiences by purchase conversion, not by the number of add-to-carts. [L1345, 2021+]

### Scale-Readiness Gate

Start scaling when all of the following hold: [L1375, undated]

1. CPC is below $1. [L1375, undated]
2. CPM is below $10. [L1375, undated]
3. CTR is above 1.5%. [L1375, undated]
4. The store is making sales with a conversion rate above 1.5% to 2%. [L1375, undated]

Before scaling, check the claims in the ads against platform policy. Do not wait for the first sales to find out. [L0638, 2023]

### Scaling Methods

**CBO scaling procedure**

1. Launch a CBO campaign at a $250-$300 budget. [L0298, 2023]
2. Create 4 ad groups (ad sets). [L0298, 2023]
3. Place your best-performing creative in each ad group. [L0298, 2023]
4. Set up automated rules to manage performance. [L0298, 2023]
5. If profitable, scale by self-scaling (for example 250 → 350 → 500 → 700), verifying profitability after each increase. [L0298, 2023]

**Same-day budget increase procedure**

1. On a day when an ad set performs well, raise its budget that same day. [L1469, 2023+]
2. Check results within about three to four hours. [L1469, 2023+]
3. If results stay good, keep the increased budget and continue. [L1469, 2023+]

**Duplication**

- To scale an ad that works, duplicate the ad set into a CBO campaign with a budget of $51 instead of $50. The speaker's experience was that a $51 budget bids better against competitors. [L1469, 2023+]
- Open targeting usually performs well on TikTok. When a particular interest is working, duplicate it to reach the right audience. [L1469, 2023+]
- Duplicate winning creatives as well. [L1469, 2023+]

**Cost cap**

- A cost cap works well for scaling TikTok ads once a winning creative and audience have been identified. [L1469, 2023+]

**Targeting for new CBOs**

- Scaling can mean launching new CBOs with the same broad targeting. [L1375, undated]
- Alternatively, test interest targeting by filling the ad group audience instead of leaving it blank. [L1375, undated]
- Sources differ on the default: [L1469, 2023+] says open targeting usually performs well, while [L1375, undated] recommends testing interests. Use open targeting as the default, and test interests as a separate step. [L1375, undated; L1469, 2023+]

**New countries**

- When ads meet the metric targets and the market is narrow, such as only the US, test additional countries like Canada, Australia and New Zealand, or entirely different markets. [L1375, undated]

### Spend Ceilings

- Spend on TikTok ads alone reached about $1,000 per day in the source. Going higher became difficult without a different strategy. [L0637, 2023+]
- Products priced below $60 held up better at higher spend than products priced above $60. [L0637, 2023+]
- Plan a second channel or a new creative strategy before exceeding about $1,000 per day. [L0637, 2023+]
- The same level appears in euros in another unit: about 1,000 euros per day, consistently, for winning products in a niche. The source notes that this scale was limited by the niche. [L1440, 2021+]
- Treat the two figures as the same order of magnitude, since the currency differs between the units. The dollar figure applies to the US-dollar context, and the euro figure applies to the euro context of its source. [L0637, 2023+; L1440, 2021+]

### Multi-Account Fallback

- Running several TikTok ad accounts in parallel lets a seller move spend to a backup account when one is restricted. [L0638, 2023]
- This is a fallback for account bans. It is not a sanctioned way around policy violations, so the underlying policy issue still has to be fixed. [L0638, 2023]
- On TikTok, a strong product with strong creatives tends to perform even on a new ad account. Weaker products depend heavily on the standing and history of the account. [L0638, 2023]
- When testing across accounts, judge the product and creative, since these are the most consistent variables. [L0638, 2023]

### Ad Restrictions and Prohibited Claims

- TikTok can flag and ban ads or products that make before-and-after claims or weight-loss claims. This often happens within a week or two of launch. [L0638, 2023]
- Check the claims against the platform policy before scaling, not after the first sales arrive. [L0638, 2023]
- If an account is restricted, the backup-account fallback applies, but the policy issue must still be fixed. [L0638, 2023]


Part 12 of 14 of "11. TikTok and Short Video: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/11-tiktok-and-short-video.md · Previous: https://dlichters.com/ai/ecom/deep/11-tiktok-and-short-video/11-campaign-setup-objectives-targeting-and-placements.md · Next: https://dlichters.com/ai/ecom/deep/11-tiktok-and-short-video/13-instagram-reels-and-trial-reels.md
