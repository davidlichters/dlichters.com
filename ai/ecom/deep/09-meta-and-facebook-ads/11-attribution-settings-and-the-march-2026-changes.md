<!-- part of ecom/deep/09-meta-and-facebook-ads.md -->
Part 11 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/10-ads-manager-columns-custom-metrics-and-naming.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/12-campaign-structure-cbo-abo-objectives-and-budget-s.md

## Attribution Settings and the March 2026 Changes

### Attribution Settings for Standard Setups

#### Standard vs. Incremental Attribution

- Standard attribution is the setting for nearly all accounts. Meta selects engaged-view by default, and that default must be overridden to None to keep only the 7-day click window. [L0865, 2025-26]
- Incremental attribution uses more complex models to estimate whether an ad caused a conversion, while standard attribution uses the click and view windows. Standard attribution is the choice for nearly all accounts, and incremental attribution is only worth testing in specific cases. [L0865, 2025-26]
- For a CBO test ad set, keep Customer life cycle strategy on Get conversions from all audiences and the Attribution model on Standard, while the conversion event stays on Purchase. [L0348, 2026]

#### Setting Standard Attribution Step by Step

1. Open the ad set and go to Show more settings. [L0865, 2025-26]
2. Under Attribution setting, click the pencil and select Standard attribution (not Incremental attribution). [L0865, 2025-26]
3. Open Standard attribution selections with its pencil. [L0865, 2025-26]
4. Change the default of 7-day click, 1-day engaged-view, 1-day view to 7-day click only. [L0865, 2025-26]
5. Set Engaged-view to None and View-through to None. [L0865, 2025-26]

#### Setting Timing Rule

- Attribution settings can only be changed before a campaign or ad set is published. Once published they are locked, so the only fix is to duplicate the item and start over, which is why the settings must be checked before pressing Publish. [L0865, 2025-26]

### Attribution Windows: 7-Day Click vs. Engage-Through

#### Why the Window Matters for Reading Data

- Meta attribution can arrive days late, and at the time of the lesson the attribution window was 7 days. A sale can therefore appear after a campaign was switched off, so the start date in the name helps you read the data correctly. [L0648, undated]

### What Changed on March 17, 2026

#### The Change in Reporting

- On March 17 (2026) Meta redefined its attribution settings, so the same ad performance is reported differently without any new attribution windows being added. Ads Manager shows a grey notice at the top of the account about this change. [L1022, 2026]
- Before March 17, click-through attribution counted any interaction with an ad, including link clicks, likes, comments, saves, shares, story swipe-ups, Shop Now clicks, and clicks on carousels or dynamic catalog ads. After the change, click-through only counts real clicks, and all other interactions moved into engage-through. [L1022, 2026]
- Engage-through now covers all engagement types such as likes, comments, saves and shares. Engaged-view counts an ad view longer than a set threshold, reportedly around six to seven seconds, though that figure still needs confirmation. [L1022, 2026]

#### Effect on Reported Revenue

- Because revenue moved from click-through into engage-through, accounts that only report click-through saw conversions and revenue drop overnight even though ad performance itself did not change. Some accounts still report noticeably less revenue on click-through than before the update. [L1022, 2026]
- Adding click-through and engage-through together gives a number close to what was reported before the March 17 change. That is why the combined setting became the new reference for evergreen account structures. [L1022, 2026]

#### Recommended Settings After the Change

| Situation | Recommended setting | Notes |
|---|---|---|
| New campaigns from May 2026 | 7-day click plus 1-day engage-through | Set at ad set level. The 7-day click window was previously the only setting in use. [L1022, 2026] |
| Many accounts after the March 2026 redefinition | 1-day click plus 1-day engage-through | Came closest to the performance previously reported by 7-day click alone. Reported numbers stayed slightly above historical levels even with this setting. [L1022, 2026] |

- Recommended attribution setting for new campaigns from May 2026: 7-day click plus 1-day engage-through. It is set at ad set level, and the 7-day click window was previously the only setting in use. [L1022, 2026]
- After Meta's March 2026 attribution redefinition, data from many accounts showed that 1-day click plus 1-day engage-through came closest to the performance previously reported by 7-day click alone. Even with this combined setting, reported numbers stayed slightly above the historical levels. [L1022, 2026]

### Transition Rules

#### Principles for Changing Live Accounts

- The attribution setting of a published ad set cannot be changed afterwards, so an existing asset cannot simply be switched to 7-day click plus 1-day engage-through. The transition has to be done with new ad sets or campaigns. [L1022, 2026]
- Switching the whole ad account to the new attribution setting at once resets the learning phase of every asset and causes a large performance drop. The transition should happen gradually over a longer period. [L1022, 2026]
- Putting an ad set with a new attribution setting into the same CBO campaign as ad sets with the old setting makes Meta move most of the budget to the one with more attributed conversions. The new setting should be tested in a separate campaign instead. [L1022, 2026]

#### Transition Plan by Account Type

| Account type | Pace | Planned timeline | Reason |
|---|---|---|---|
| Satisfied with performance | Slow, new campaign runs alongside the old one | About six months | Little urgency, so the risk of a large drop is avoided. [L1022, 2026] |
| Break-even | Bigger changes acceptable | Short | Performance was weak to begin with, so there is little to lose. [L1022, 2026] |
| Losing money on first order | Fast switch with a short overlap | About three days of overlap | Little to lose, so bigger changes are acceptable. [L1022, 2026] |

#### Transition Procedure for a Satisfied Account

1. Keep the existing campaign running with its current attribution setting. [L1022, 2026]
2. Create a new campaign that uses 7-day click plus 1-day engage-through at ad set level. [L1022, 2026]
3. Launch all new ad sets and every new batch of creative only in the new campaign, never by adding the new setting to the existing campaign. [L1022, 2026]
4. Keep the original campaign running for as long as it produces a positive contribution margin, letting the new campaign take over gradually. [L1022, 2026]
5. Plan for a transition period of about six months. [L1022, 2026]

#### Transition Procedure for an Account Losing Money on First Order

1. Duplicate the entire campaign that is currently running. [L1022, 2026]
2. Switch the duplicate to 7-day click plus 1-day engage-through. [L1022, 2026]
3. Run the original and the duplicate side by side for about three days. [L1022, 2026]
4. Once the new campaign outperforms the old one, which usually happens almost immediately, turn off the original campaign. [L1022, 2026]
5. Run only the new campaign from then on and send all new ad sets into it. [L1022, 2026]

#### Transition Procedure for a Break-Even Account

- Copy the current campaign, change every attribution setting in the copy to 7-day click plus 1-day engage-through, load all the new creative into that copy, and from then on treat the new campaign as the account's structure. [L1022, 2026]
- Another route is to copy the best-performing ad sets into a fresh campaign with the correct setting, or to start new ad sets inside the existing campaign with that setting. Meta will favor the new ad sets, which is fine here because performance was weak to begin with. [L1022, 2026]

### Incremental Attribution (Older Advice, 2025 Onward)

#### What It Is

- Incremental attribution is an optimization option available since around October or November 2025 that aims at incremental conversions, using machine learning to predict whether an ad caused a purchase. After the March 2026 change, incremental reporting was in some accounts higher than 7-day click, which made it worth testing. [L1022, 2026]
- A purchase from someone who had never seen the brand before counts as incremental, while a buyer who had already visited the site, added to cart or was on the email list is unlikely to count as incremental. Results from incremental optimization therefore depend heavily on how many returning customers reach the account. [L1022, 2026]
- Some accounts show an option at ad set level to optimize purely for new customers under incremental attribution. [L1022, 2026]
- Incremental attribution optimization worked well for large brands that already optimize for incrementality, but it performed poorly for many smaller accounts when it first appeared in late 2025. Its results depend on how many returning customers the account already receives, so it should be tested before it is relied on. [L1022, 2026]

#### Test Procedure

1. Create a separate campaign with your best-performing evergreen ad sets. [L1022, 2026]
2. Run it with 7-day click plus 1-day engage-through as the optimization setting. [L1022, 2026]
3. Note the incremental number that comes out of the campaign. [L1022, 2026]
4. Break down new customer ROAS by audience segment and by spend split. [L1022, 2026]
5. Keep incremental only if it produces a better new customer ROAS than the 7-day click plus 1-day engage-through campaign. [L1022, 2026]

### Customer Lifecycle Settings

#### Where the Settings Are

- Customer lifecycle strategy sits at ad set level near the top of the screen. It offers Acquire new customers with exclusions, for example excluding purchasers from the last 180 days via the pixel and an existing customer list. [L1022, 2026]
- To tell Meta which buyers count as existing customers, open Account settings and scroll down to the existing customers section. Once this is set, the campaign reports the split between new and existing customers. [L1335, 2023+]

#### Status of the Setting

- Customer lifecycle strategy has shown poor results as of May 29, 2026, so it is not recommended for acquiring new customers. Incremental attribution is the better option to test for that goal. [L1022, 2026]


Part 11 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/10-ads-manager-columns-custom-metrics-and-naming.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/12-campaign-structure-cbo-abo-objectives-and-budget-s.md
