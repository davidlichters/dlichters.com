<!-- part of ecom/deep/16-retargeting.md -->
Part 6 of 10 of "16. Retargeting: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/16-retargeting.md · Previous: https://dlichters.com/ai/ecom/deep/16-retargeting/05-retargeting-ad-types-and-creative.md · Next: https://dlichters.com/ai/ecom/deep/16-retargeting/07-abandoned-cart-and-checkout-recovery.md

## Ad Sequencing, Timing and Frequency

### Choosing a Sequencing Approach

- Ad sequencing decides which retargeting ad type a visitor sees and when. It has a large effect on results, so map it out before building retargeting campaigns. There are two approaches: step-by-step sequencing, where one ad is shown at a time, and all-in-one sequencing, where several ad types run at once. [L1241, 2021-22]
- Step-by-step sequencing works like a retargeting funnel. Each step addresses a different sticking point, problem or angle to re-engage the visitor and keep the brand top of mind until they are ready to buy. The order can and should be tested. [L1241, 2021-22]
- Step-by-step sequencing needs large audience volumes, because audiences are built in 7-day blocks. A 7-day Google Ads retargeting audience needs about 100 people, while a 7-day Facebook retargeting audience needs about 1,000 people. Step-by-step is therefore best for best-selling, high-traffic products. New stores may only reach the thresholds with the all-product-viewers audience. [L1241, 2021-22]
- Plan retargeting sequences for specific products and content before building ads, so that each ad has a clear purpose. Planning first also makes it faster to hand the creation of ads or emails to outsourced workers. [L0493, 2021-22]
- Focus retargeting sequences on what the customer might need to know or be convinced of before completing a sale. Practise building different retargeting ads to find which work best. [L0493, 2021-22]

### Step-by-Step Sequencing

**Product viewer schedule**

- Each ad links back to the site. [L1241, 2021-22]

| Days since product view | Ad type |
|---|---|
| 1-7 | Dynamic Retargeting Ad |
| 8-14 | Trusted Advisor Ad |
| 14-21 | Introduction Ad |
| 21-30 | Irresistible Deal Ad (special offer to re-engage; can be dynamic or static) |
| 30+ | The Informant Ad (valuable content piece with broad appeal to product viewers) |

[L1241, 2021-22]

- If the visitor buys at any point, the sequence stops. Continuing the sequence after the Informant Ad can restart the cycle through the content viewer sequence once the visitor clicks that content. [L1241, 2021-22]
- Sequence timeframes are flexible and can be changed or shortened. Examples given are 1-14 days, 14-30 days and 30-44 days. The timeframes shown are a proven example, not a fixed rule, so they should be tested. [L1241, 2021-22]

**Technical setup with audience exclusions**

- Use this setup for step-by-step sequencing:

1) Create audiences of all product viewers for the windows 1-7 days, 1-14 days, 1-21 days, 1-30 days and 30-90 days (or up to 90 days).
2) When setting up the ad for a window, exclude the audiences of all earlier windows. Example: to reach people in the 14-21 day range, exclude the 14-day audience and the 7-day audience.
3) Result: the ad only reaches people who fall inside that window, not the ones who already entered an earlier stage.

[L1241, 2021-22]

### All-in-One Sequencing

**When to use it**

- All-in-one sequencing runs different retargeting ad types at the same time, each in its own campaign or ad group, so the visitor sees them in no fixed order. It works best for smaller volumes, such as low-traffic products that cannot fill 7-day audiences above the threshold, which is often most of a catalogue. In that case the audience is typically the old product viewers bucket, excluding people who viewed high-volume products. [L1241, 2021-22]

**Windows**

- All ad types run concurrently in these windows:

| Ad type | Window |
|---|---|
| Dynamic Retargeting Ad | 1-30 days |
| Trusted Advisor Ad | 1-30 days |
| Introduction Ad | 1-30 days |
| The Informant Ad | 1-30 days |
| Irresistible Deal Ad | 30+ days |

[L1241, 2021-22]

- End the all-in-one sequence with either an Informant Ad or an Irresistible Deal Ad to get people across the line or back into the sequence. Do not run all-in-one sequencing for more than 30 days. [L1241, 2021-22]
- In all-in-one sequencing the order of ads is random, so a visitor may see the Introduction Ad before the Dynamic Retargeting Ad. This is less effective than a set order, but still far better than showing one identical ad for 30 days or more, because every ad type has value for someone who has already visited the site. [L1241, 2021-22]

**Frequency under all-in-one**

- When running several retargeting ad types at the same time, set the frequency very low in each campaign or ad set to avoid ad overload. Each individual ad type should show no more than once per day per user, and possibly only a couple of times per week. Because the ads may run on two, three or even four networks at the same time, the cap must hold across all networks. [L1241, 2021-22]
- This stricter limit applies to all-in-one only. For a single retargeting campaign the general cap is 3 or fewer per person per day. [L1241, 2021-22; L0563, 2021-22]

### Schedules by Days Since View

**Product viewers**

- Product-viewer retargeting, such as dynamic product ads on Google or Facebook, is useful for about seven days after the view. Beyond that the ad has passed its usefulness and should stop running. [L0719, 2021-22]
- For specific product viewers, show a product reminder ad and social proof first, then show relevant content in the 14 to 21 day window, or up to 30 days, in case they need more information before buying. [L0415, 2021-22]
- Use the following windows, audiences and content for each group. [L0415, 2021-22]

| Audience | Timing window | Ad to show | Content to use |
|---|---|---|---|
| Specific content viewers | 1 to 7 days after viewing another piece of content | Informant ad | Follow-up content on a more specific problem that leads to products |
| Product viewers who did not buy | 30+ days after viewing a product, after all other ads have run | Informant ad for re-engagement | Content that approaches the topic from a different angle than what they saw before |
| Specific product viewers | 14 to 21 days, or up to 30 days | Product reminder ad and social proof first, then informant ad | Content relevant to the exact product the viewer looked at |

[L0415, 2021-22]

- For specific content viewers, show the informant ad to people 1 to 7 days after they viewed another piece of content. [L0415, 2021-22]
- Show trusted advisor ads to people who saw a product reminder ad and still have not bought. Start them after the reminder ad, running for 7 to 14 days. [L1398, 2021-22]
- Use this 30-day stop rule for most audiences: stop retargeting after the first 30 days, because the chance of a sale after that is very low. Customer lists are the exception. [L1390, 2021-22]
- Note: the table above shows an Informant ad from 30+ days for product viewers who did not buy, after all other ads have run. This applies only once the 30-day stop rule is set aside for that re-engagement step. Test this before running it for long periods. [L0415, 2021-22; L1390, 2021-22]

**Product-page review sequence**

- For a large catalog without product-specific audiences, show dynamic product ads for the first 7 days so the shopper sees the products they viewed. After that, switch to a business-wide trusted advisor ad that features reviews of the store. [L1398, 2021-22]
- Do not run dynamic product ads for 30 days in a retargeting audience. Limit them to about the first 7 days, then move the audience to a different ad. [L1398, 2021-22]
- Use this sequence for product-page retargeting with review ads:

1) Show a product reminder ad with the product image to viewers of high-volume product pages who have not bought.
2) If they still have not bought after the reminder ad, show trusted advisor ads with reviews for 7 to 14 days, rotating several review variations.
3) For a large catalog without product-specific audiences, show dynamic product ads for about the first 7 days so the shopper sees the products they viewed, then switch to a business-wide trusted advisor ad that features reviews of the store.

[L1398, 2021-22]

- Split product viewers into groups by time since the view, assign a different ad to each group, and refresh the messages so repeated viewers do not see the same ad. Use the following procedure:

1) Split product viewers into groups by time since the view: 7, 14, 21 and 30 days.
2) Assign a different ad to each group so visitors see a series of ads from different angles over a month.
3) Use static ads for trust and review messages, and dynamic product ads for the shortest window.
4) Refresh the messages in each group so repeated viewers do not see the same ad.

[L0719, 2021-22]

### Offers and Messages by Timing

- Front-load the budget and the strongest offers into the first 7 days after a visit, when interest is highest. Spend less and change the message for the older windows so that the audience stays engaged without being overexposed. [L1076, 2019]
- During the first 7 days after a visit, show dynamic product ads that bring the visitor back to the product they viewed, plus static ads with videos, testimonials and real product photos to build trust. In later windows, show promotions and content and run the same campaigns that are sent by email. [L1076, 2019]
- Retarget visitors with different entry offers based on how they behave on the site. Keep testing and improving these offers, because the optimisation never really ends. [L0334, 2017]
- For people who already know the brand, restart the story with fresh angles, social proof and an offer such as a bundle discount. These viewers may be on the fence and need a new reason to buy. [L0524, 2023]
- Retargeting needs new creatives, because the audience has already seen the top-of-funnel ads and will get irritated by repetition. Use offers such as an extra discount compared with the new visitor and real customer reviews to remove doubts. [L0648, undated]

### Matching the Ad to the Objection

- Match the ad type to the visitor's position and objection in the funnel. Visitors near a purchase can receive dynamic product ads, visitors who distrust the business need reviews and the unique selling proposition, and undecided visitors need helpful related content or alternative product suggestions that fit their problem. [L0563, 2021-22]
- Match the retargeting ad to the reason a visitor did not buy. A trust barrier calls for a static ad with reviews, a bestseller can get an ad built on its own reviews, and an undecided visitor can be sent to a content piece such as a buying guide. [L0719, 2021-22]
- Rotating different ads lets you address different objections and pain points, because each person may be held back by a different reason. It also prevents the same ad from being pushed at one person continually. [L0563, 2021-22]
- Do not show the same retargeting ad to everyone. Split retargeting by audience stage and by the page or action the visitor took, with different messages for each group. Showing every visitor the same dynamic product ads for 30 days, with a discount at the end, ignores prospects who do not yet trust the brand or still have a problem they have not defined. [L0414, 2021-22]

### Frequency Caps

- Frequency means how many times one person in an audience sees your ad within a set period, usually per day, though it can also be measured per week or per month. [L0563, 2021-22]
- Almost every retargeting platform lets you set a frequency cap at the campaign or ad group level. [L0563, 2021-22]
- Set the frequency cap for retargeting campaigns to 3 or fewer impressions per person per day. Campaigns running on a single network can sometimes be set to 2 or 1 per day, depending on how many ads run. [L0563, 2021-22]
- Control ad frequency so the ads do not annoy the viewer. Repetition should build curiosity, not irritation. [L0415, 2021-22]
- Use this procedure to set frequency and rotation:

1. Set the campaign or ad group frequency cap to 3 or fewer impressions per person per day.
2. Change ad types, images and copy regularly; this does not have to be done manually.
3. Split a long retargeting window into blocks. Example: for a 30-day window, show ad A for days 1 to 10, ad B for days 11 to 20, and ad C for days 21 to 30.

[L0563, 2021-22]

- Google allows audiences to retarget the same person for up to 540 days. That setting is extreme, and showing the same ad to a non-buyer for a long period has a negative effect. [L0563, 2021-22]

### Cross-Network Impression Math

- When retargeting runs on several networks at once, the frequency cap must be lowered because the impressions add up across all networks. Lower the cap further if many retargeting campaigns run in parallel. [L0563, 2021-22]
- Use this formula for the maximum daily impressions per person:

  Maximum daily impressions per person = number of retargeting networks x frequency cap per network

  Example: 4 networks x 3 = 12 impressions per person per day.

  [L0563, 2021-22]

- The more often someone sees an ad, the less likely they are to click it, which lowers click-through rate. On Google and Facebook a low click-through rate reduces relevance and quality scores, which weakens auction performance and can raise costs. [L0563, 2021-22]

### Creative Rotation

- Use the same image across all placements so the viewer repeatedly sees the same ad in different places. Repeated exposure raises curiosity, so people who did not click at first often click later. [L0415, 2021-22]
- Within a window, change the images and copy across the sequence, as the procedure above describes: rotate ad blocks across the window and change ad types, images and copy regularly. The same image is used across placements for one ad, while different ads carry different images from one block to the next. [L0563, 2021-22; L0415, 2021-22]
- Rotate at least three different remarketing ads during a promotion so the same audience does not see one message repeatedly. [L1115, 2024]
- Refresh the messages in each group so repeated viewers do not see the same ad. [L0719, 2021-22]

### Avoiding Repeated Ads and Creepy Copy

- Showing retargeting ads too many times per day, or running the same ad to the same person for too long, lowers effectiveness and annoys people. Repeated identical messages feel spammy and creepy. [L0563, 2021-22]
- Showing the same dynamic product ad every day for 30 days annoys people and produces little return. This is why many retargeting campaigns report no results. [L0719, 2021-22]
- Showing the same retargeting ad for 30 days or longer wastes the sequence and loses the chance to re-engage visitors with new angles. Running several ad types at once without lowering the frequency causes ad overload, for example seeing three of each ad per day. [L1241, 2021-22]
- Showing the same dynamic product ads to a visitor for 30 days is a weak retargeting method. Rotate a series of different ads with different messages across the 30-day window. [L0473, 2021-22]
- Ad copy that tells a visitor they were on your site today or yesterday puts people off. Avoid any wording that reveals you know what they did on the site. [L0563, 2021-22]
- Many people do not know that advertisers see only anonymous cookie data, so they may worry that tracking reveals their identity, location or other personal information. Explicit tracking references increase that worry, especially after recent privacy scandals. [L0563, 2021-22]

## Content-Based Retargeting

### Why content matters for retargeting

- A store with only product pages has little useful material to show visitors who have already left, so meaningful retargeting is very difficult without content. [L0500, 2021-22]
- ** Visitors who have not bought yet often lack enough information to feel confident. Useful content can help them move past that hesitation and back into the sales funnel. [L0415, 2021-22]
- ** Content pieces published on the store's website can also serve as the basis for retargeting ads that re-engage people who already visited the site. Plan the content so it can be reused in those ads, not only in organic posts. [L0381, 2021-22]

### Building the content library

- Develop content continuously and promote it to cold traffic. Use the same content to fill out remarketing plans, so one content library serves both acquisition and retargeting. ** [L0415, 2021-22]
- Not all content must promote products directly. ** Top-of-funnel content can hook a viewer, and a follow-up piece on a more specific problem can then lead them to products. [L0415, 2021-22]
- Base content on customer feedback, such as questions asked by customers or virtual assistants and hesitations they mention. Turn these into emails and Facebook ads sent to the full list, so that every piece of content works toward making buyers feel safer and trust the brand. [L1076, 2019]

### Matching content to pain points

- Choose the content piece for a retargeting ad by matching its main problem to a pain point the visitor already linked to the products or pages they viewed. ** [L0415, 2021-22]
- The content should answer that problem directly and link naturally to relevant products without a hard sell. ** [L0415, 2021-22]
- Do not show generic content to specific product viewers. The content must be relevant to the exact product audience the viewer belongs to, otherwise the ad does not answer their reason for not buying. ** [L0415, 2021-22]

### Sequencing content before offers

- Do not move people straight from a meme or engagement post to an expensive product offer, because they do not know or trust the brand yet. Show them several pieces of content first, such as recipes, reviews, and videos, before presenting any offer. [L0487, 2018]

### Content audiences

- Create a separate retargeting audience for each content piece used in these ads. Viewers who click that content enter the new audience and move through a product sales funnel built around the products in that content. ** [L0415, 2021-22]
- A second audience for a product reminder ad is people who read a content page that recommends the product, such as a buyer's guide or a best-of article. Retarget these readers with the ad whether or not they clicked through to the product page. ** [L1169, 2021-22]
- Content-based reminders work because the reader has already received a recommendation. The reminder moves them to the next funnel step, which is looking at the product itself. The ad is also simple to set up and keeps the product in front of the reader. ** [L1169, 2021-22]
- The content-page audience for product reminder ads uses the same 1 to 7 day window after the visit as the product-page audience. Ads are shown only within that window, so the product stays in mind while the reader decides. ** [L1169, 2021-22]
- Visitors who arrive through a content piece can be added to a retargeting audience, so they can later be served retargeting ads that move them into the sales funnel. ** [L1421, 2021-22]

### Social engagement audiences

- People who engage with a Facebook post about a piece of content, such as liking, commenting or clicking, can be added to a retargeting audience. ** [L0385, 2021-22]
- Those people can be shown retargeting ads later in the funnel, so a small content campaign can feed the retargeting pool at low cost. ** [L0385, 2021-22]

### Content viewer sequence

**

1. Build the audience only from people who stayed on the content page for a minimum of about 30 seconds, ideally 1 to 2 minutes, since they are the most worth retargeting. Include people who arrive at the content from a retargeting ad, as well as cold visitors. [L1241, 2021-22]
2. Days 1 to 7: show a Product Reminder Ad for the product that the content recommends. This is needed because the visitor may have read the content without clicking through to the product page. If they did visit the product page and did not buy, the reminder is still relevant. [L1241, 2021-22]
3. After that, run the same sequence as the product viewer sequence for that specific product: Trusted Advisor Ad, Introduction Ad and Irresistible Deal Ad. [L1241, 2021-22]
4. After 30 or more days, show an Informant Ad that points to a different piece of content or a different angle on the problem that started the sequence. [L1241, 2021-22]

### Timing and re-engagement

- Product viewers who have not bought after all other ads have run for 30 days can be re-engaged with content. ** [L0415, 2021-22]
- Use content that approaches the topic differently from what they saw before. ** [L0415, 2021-22]

### Advertorial retargeting logic

1. Identify visitors who reached the advertorial but did not click through to the offer page. [L1131, 2018+]
2. Show them an ad that educates them further about the product and explains the benefits. [L1131, 2018+]
3. Include a discount such as 40 percent off or 10 dollars off. [L1131, 2018+]
4. Send the ad click directly to the offer page instead of the advertorial. [L1131, 2018+]

### Site-wide and dynamic retargeting with content

- Use a site-wide retargeting pixel to remind visitors of your store, and use article or content retargeting to drive readers of your content back to your website. [L0643, 2015]
- Dynamic multi-product ads show several products from your store, with the best-converting products at the front. [L0643, 2015]

### Email capture from readers

- A content visit does not need to produce a sale, but an opt-in form should be present on the content page to collect leads. ** [L1421, 2021-22]


Part 6 of 10 of "16. Retargeting: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/16-retargeting.md · Previous: https://dlichters.com/ai/ecom/deep/16-retargeting/05-retargeting-ad-types-and-creative.md · Next: https://dlichters.com/ai/ecom/deep/16-retargeting/07-abandoned-cart-and-checkout-recovery.md
