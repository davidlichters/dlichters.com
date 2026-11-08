<!-- part of ecom/deep/20-scaling-team-and-processes.md -->
Part 29 of 37 of "20. Scaling Team and Processes: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/20-scaling-team-and-processes.md · Previous: https://dlichters.com/ai/ecom/deep/20-scaling-team-and-processes/28-scaling-meta-ads.md · Next: https://dlichters.com/ai/ecom/deep/20-scaling-team-and-processes/30-scaling-tiktok-pinterest-and-other-channels.md

### Duplication methods

- Triple duplication for a CBO with a $300 total start:
  1. Launch three campaigns with the same ad set at the same budget each.
  2. Start with a total of about $300, for example $100 per campaign, and check that setup is correct.
  3. Optionally start at $200 per scaling campaign.
  4. Add an automatic rule that turns a campaign off when it spends its break-even cost per purchase without producing a sale.
  5. If it fails, relaunch after a couple of weeks at a different budget. [L0349, 2024]
- Triple duplication with high budgets, using 200 USD per CBO as the example:
  1. Launch three identical CBO campaigns with the same ad sets and creatives, each on a high budget (the example used 200 USD per CBO).
  2. Let all three run until about 10 to 20 USD of spend.
  3. Turn off any CBO with very high CPCs and no sales.
  4. If one CBO has a sale in this phase, keep it running and turn off the other two.
  5. If no CBO has a sale after about 15 to 20 USD of spend (the break-even), turn off the weakest one and let the other two spend another 15 USD.
  6. If one of the two still has no sale after that, turn off both. [L0648, undated]
- Use triple duplication only after roughly two to three months, once the product works and the budget is high. For the start, a single CBO campaign is enough. [L0648, undated]
- Audience overlap above 15 to 20 percent is poor. More than three duplicated CBOs on the same audiences is likely to add competition with yourself, raise CPM and waste spend, so treat it as an untested risk. [L0648, undated]
- Duplicate the ad set five times into a CBO campaign, creating three CBOs, if the budget increase steps stop working. Keep the one that performs, close the others, then scale the budget of the winning CBO. [L0773, 2023]
- Three-campaign scaling structure:
  1. For each winning interest, create one CBO campaign with four ad sets.
  2. Put three creatives in each ad set.
  3. Duplicate that campaign so you have three campaigns.
  4. Launch all three together.
  5. Set an automatic rule that turns off campaigns with no sale after roughly eight to twelve hours or after spend equal to the break-even cost per purchase.
  6. Keep the best-performing campaign and turn off the other two. [L0692, 2023]
- Duplicating with one variable changed, used when budget changes and duplication do not work:
  1. Duplicate the ad set 3 to 4 times at the same budget.
  2. Change one thing per ad set, keeping the interest the same. For example, use men only or women only (depending on the product).
  3. Narrow the ad set to the best country.
  4. Narrow the ad set by age.
  5. Narrow the ad set to the best placement and platform. [L0375, undated; L0376, undated]
- Ad set variants for the one-variable method:
  1. Ad set 1: men only or women only (depends on the product).
  2. Ad set 2: narrow down to the best country.
  3. Ad set 3: narrow down the age range.
  4. Ad set 4: narrow down to the best placement and platform. [L0375, undated]
- Duplicating an ad set in Ads Manager:
  1. Open the campaign, ad set or ad that should be reused.
  2. Press Duplicate and then Duplicate again to create a copy inside the same level.
  3. For a new ad, rename the copy named copy and swap in the new creative.
  4. For a new ad set, duplicate the ad set and then change the name and the ads.
  5. For a new campaign, duplicate the campaign because it carries over all ad sets and ads inside it. [L0865, 2025-26]
- Copying ads between ad sets:
  1. Select the ads to copy with a click on the first one and Shift-click on the last one.
  2. Press Command C on a Mac to copy them.
  3. Open the target ad set and press Command V to paste the ads.
  4. While the pasted ads are still selected, remove the word copy at the end of their names.
  5. Use Edit > Find and replace, type dash copy in the find field, leave the replace field empty, press Replace and then save the draft. [L0865, 2025-26]
- Budget testing and duplication: a case where the first sales were about 1,700 in revenue (currency not stated). The budget was raised three times within 10 days, and each time Facebook cut it back the next day, while support staff could not explain the cap. Horizontal scaling with separate interest-based ad sets was used as a workaround. [L0644, undated]

### Automated rules and loss control

- For campaigns with a 100,000+ dollar budget, implement automated rules to prevent losses at each scaling stage. [L0298, 2023]
- Set an automatic rule that switches off a scaling campaign once its spend reaches the break-even cost per purchase without a single sale. Automatic rules matter because campaigns may launch overnight and run unattended. [L0349, 2024]
- Set an automatic rule that turns off campaigns with no sale after roughly eight to twelve hours, or after spend equal to the break-even cost per purchase. [L0692, 2023]
- Losses on individual days are normal under about $1,000 daily spend, so a profitable day can absorb one or two losing days. Consistent results usually appear once a campaign has spent above $500, and a bigger budget can show inconsistent CBO days that the other campaigns offset. [L0645, 2023]
- Review the allocation of a campaign regularly and turn off the weak ad sets after enough data has accumulated. [L0639, 2023]
- Scaling a winning interest: confirm the interest has at least 6 profitable sales, then choose a scaling method:
  1. Raise the ad set budget (example: from $20 to $40 per day), or duplicate the winning interest into a CBO campaign.
  2. For a CBO duplication, use a $100 campaign budget with the winning interest copied 4 times, so each copy reaches a different pocket.
  3. Test both methods, since one may work better than the other in a given account.
  4. Check which ad sets receive budget and cut underperformers once you have enough data. [L0639, 2023]

### Self-scaling, events and refresh

- Use self-scaling (automated budget increases every 2 to 4 hours) only during specific high-intent events: Halloween, BFCM, Cyber Monday, or with very aggressive offers (60% off vs. typical 40%). [L0298, 2023]
- Self-scaling works during events because people have high purchase intent and expect sales. During normal days, frequent budget increases hurt performance. [L0298, 2023]
- Winning Facebook campaigns often fade after about one to two months. Plan to refresh by changing the creative, the hook or the audience, or by duplicating into a new campaign before results drop. [L1213, 2023]

### Creative testing allocation and budget split

- Allocate 20% of daily ad budget to creative testing. If the daily budget is 500 dollars, dedicate 100 dollars to testing. [L0298, 2023]
- Keep spending 15 to 20 percent of the budget on testing new audiences and creatives, even for products that have worked for months. Keep a separate audience testing sandbox and creative testing sandbox to do this. [L0648, undated]
- Split a daily ad budget into 20% for testing, 10% for retargeting and 70% for existing winning audiences and scaling campaigns. Example: on $100 per day, allocate $20 to testing, $10 to retargeting and $70 to scaling. [L1213, 2023]
- Keep testing new interests with 15 to 20 percent of the budget so the next winners can be moved into CBO. [L0645, 2023]
- Testing across formats, such as bottom-of-funnel, UGC, natives and whitelist pages, maximizes the chance that something works. A format that fails still gives information, and a winner in one format is still a win. [L1476, 2026]
- Aggressive scaling to very high monthly revenue needs winning audiences, winning creatives, strong email and SMS marketing, and Google Ads in place. Without these assets, scaling spend usually causes losses. [L1213, 2023]

### Advantage+ and campaign build

- Advantage+ campaign setup under the Sales objective:
  1. Click Create and choose the Sales objective.
  2. Keep Buying type on Auction and click Continue.
  3. Enter the campaign name with product, budget type, creative type and date or year.
  4. Under Budget, choose Advantage+ campaign budget (CBO) and enter the daily budget.
  5. Set Campaign bid strategy to Highest volume or value.
  6. Name the ad set after its creative.
  7. Under Conversion, set Conversion location to Website, Performance goal to Maximize number of conversions, Dataset to the default pixel and Conversion event to Purchase.
  8. Under Show more settings, open Attribution setting, choose Standard attribution and set the selections to 7-day click only, with engaged-view and view-through set to None.
  9. Check the start date, end date and time zone.
  10. Set ad set spending limits only if needed.
  11. Under Audience, keep Broad, 18 to 65+ and all genders, and keep Advantage+ audience on.
  12. Keep Placements on Automatic with Advantage+ placements on.
  13. Name the ad.
  14. Under Identity, select the Facebook Page and check the Instagram account.
  15. Under Ad setup, choose Create ad, Manual upload and Single image or video.
  16. Enter the destination URL to a collection or product page and keep Use shop default off.
  17. Under Creative, leave Source URL empty, turn off the catalog if it is not optimized and crop the vertical 9:16 version.
  18. Enter primary text, a headline if wanted and choose Shop Now.
  19. Skip Meta AI options and turn off Enhancements except Show products when the catalog is optimized.
  20. Set URL parameters, check the preview, then press Publish. [L0865, 2025-26]
- There is no single strategy that works for every product or ad account. Keep testing broad and interest approaches and scale whichever one proves profitable. [L1161, 2024+]

### Bottom-of-funnel scaling

- BOF has a hard scaling ceiling due to a limited warm audience size. For solution-aware products, BOF remains profitable indefinitely but cannot scale beyond the fixed daily impression supply. BOF harvests warm conversions rather than generating the volume needed for $1M+ monthly revenue. [L0315, 2026]
- Attempting to scale BOF to large monthly revenue targets is a mistake. The warm audience pool is inherently small, imposing a strict ceiling on impressions and spend. Though BOF delivers high ROAS on available inventory, the limited scale makes it unsuitable as a primary growth driver. [L0315, 2026]
- Introduce new bottom-of-funnel concepts weekly (e.g., new testimonials, new benefits angles, new social proof). Rotate fatigued ad sets out. Do not constantly refresh if your video campaign is working well, because the inflating warm audience keeps ROAS high even on existing ads. [L0316, 2026]
- Scale bottom-of-funnel budget only until ROAS drops to your comfort threshold. If your breakeven ROAS is 1.5X, scale until you reach 2.5X ROAS, then hold budget steady. Do not overscale. Monitor ROAS and reduce if it drops below your target. [L0316, 2026]
- Set bottom-of-funnel budget at roughly 30% of what your video ads are spending. This is a guideline, not a fixed rule. Adjust based on ROAS and available inventory. If your video campaign is still strong, the warm pool keeps inflating, and you can maintain steady bottom-of-funnel budget without constant increases. [L0316, 2026]
- Adding new ads is better than reducing budget. If an account is underperforming, introduce new ad concepts and variations to give the algorithm more material to work with, rather than cutting spend. Reducing spend only shrinks the business; growing requires adding new creative constantly. [L0316, 2026]

### Targeting, demographics and ceilings

- Choose a single winning gender and age from the breakdown rather than mixing all demographics. For a product aimed at both genders, check whether men or women perform better and focus budget on the stronger group. [L0773, 2023]
- Facebook groups audience targeting at the ad account level, so ads in different campaigns can still reach the same people. Separate campaigns per format are still worth it to control budget and scale each format on its own. [L1476, 2026]
- Every ad has a scaling ceiling where spend stops being profitable. Example from the lesson: one ad can take about $2,000 a day, another dies at about $100 a day, images may cap near $200 a day, and strong videos can scale to about $3,000 a day. Separate formats let each one run at its own ceiling. [L1476, 2026]
- Facebook's campaign budget optimization shifts budget by percentage and can push about 95 percent of spend into one favored ad, whatever the total budget. Putting different formats into one campaign lets a favored video starve the other ads. [L1476, 2026]
- If an ad in a campaign gets no spend, move it to its own separate campaign to give it a fair test. The point of a new campaign is to isolate the variable. [L1476, 2026]
- The copy-analysis method for finding winning ads is most useful once you are scaling. Apply it when you are moving beyond testing. [L0772, 2026]
- Scale a CBO campaign with a low-volume test before extending it: a budget step only follows a stable result with a strong audience and targeting. [L0637, 2023+]

### Team, time and staffing

- After switching to the Power Five approach, a whole team needs about 5 hours per week for Facebook ads, down from more than 50 hours per week with three people. [L0649, 2019]
- If lead generation is not running yet, focus first on hot dynamic, hot static, customers goodwill and promotions. Lead generation comes after these are working. [L0649, 2019]
- Quick wins come first: set up dynamic remarketing with varied ads, add a short video ad for hot traffic, run a goodwill video, promote to warm audiences and match email promotions. Lead magnets, opt-in pages and designed assets can wait. [L0649, 2019]
- At the business-owner stage, a trained virtual assistant can set up and manage Facebook ad campaigns while the founder reviews them, analyzes results and makes the final spending and offer decisions. Hire an ad manager only if they are trained on your account or show a strong CV with past client results. [L1432, undated]

### Segmentation by profit margin

- Segment alpha-beta campaigns by profit margin only after campaigns have generated enough historical data to identify which products drive the most sales with the highest profit margins. This requires completing all standard optimizations (negative keywords, site conversion optimization) and is not a day-one activity for new stores. [L0224, 2024+]

#### Further details

- A product went from launch on 13 to 14 June to about $100k in 40 days. The first CBO on 18 June started at $100, went to $200 after about 12 hours at a ROAS above 3, then to $300 with ROAS 3.1 and spend of about $285. Daily ad spend reached about $1,400 to $1,500 and one campaign generated about $4,000 in revenue, with later daily spend of about $1,300 at a ROAS of 2.45 and return of about $3,221. [L0645, 2023]


Part 29 of 37 of "20. Scaling Team and Processes: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/20-scaling-team-and-processes.md · Previous: https://dlichters.com/ai/ecom/deep/20-scaling-team-and-processes/28-scaling-meta-ads.md · Next: https://dlichters.com/ai/ecom/deep/20-scaling-team-and-processes/30-scaling-tiktok-pinterest-and-other-channels.md
