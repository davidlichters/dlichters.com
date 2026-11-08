<!-- part of ecom/deep/06-conversion-optimization.md -->
Part 22 of 40 of "6. Conversion Optimization: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/06-conversion-optimization.md · Previous: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/21-guarantees-and-risk-reversal.md · Next: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/23-collecting-and-displaying-reviews.md

### Phone number, social media and local cues

#### Phone number

- Include the phone number prominently for higher-ticket items, with the header recommended. Most calls come from people verifying legitimacy before placing an order, not from rejections. [L0268, 2020]
- Display the phone number large on the homepage and on every page of the store, so visitors see it without searching. Making the number highly visible builds trust and, paradoxically, reduces how often people actually call. [L0910, 2015]
- Placement of the phone number: the header is recommended for higher-ticket items (2020 advice), and the lesson's later rule is to show it on the homepage and every page. Both are compatible: the header covers every page, and a large number on the homepage supports it. [L0268, 2020; L0910, 2015]
- A phone number whose last three or four digits spell a niche word, such as 333-MICS for a podcast-microphone store, adds credibility at no extra cost. Number-search tools show which vanity numbers are available. [L0910, 2015]

#### Social media as a credibility check

- Before a shopper buys, they often check whether the store is a real, active business by looking for its Facebook page or Instagram account. Having both profiles and keeping them updated protects against the impression of a scam site and raises conversions. [L0653, 2020-26]
- Social media is a credibility check rather than a sales channel. The profiles must exist and show recent activity, so visitors who look them up find signs of a live business. [L0653, 2020-26]
- A survey cited in the lesson reported that 78% of respondents said a company's social-media posts affect their buying decisions. This is a secondary figure from a single survey and should be verified before being quoted. [L0653, 2020-26]
- Brand social pages are mainly for credibility, not follower counts. First-time visitors often search the store name on Google, and active Facebook and Instagram profiles that appear in the results reassure them before they buy. [L0654, 2020-26]
- The goal of the social pages is credibility, not going viral or collecting many likes. Visitors who look the business up should feel confident enough to place large orders. [L0654, 2020-26]
- Post on the brand's Facebook and Instagram pages once or twice a week to show the business is active. The posts do not need big news; product highlights, new supplier announcements or short updates are enough. [L0654, 2020-26]
- Post at least once a week, even if the post only links to a product in the store and gives a short reason why customers like it. This is an acceptable minimum for keeping the page looking active. [L0654, 2020-26]
- Frequency of posting: the recommended rhythm is one or two posts a week ([L0654, 2020-26]), and once a week is the acceptable minimum ([L0654, 2020-26]). Use the higher rhythm when you have material, and never let the minimum slip. [L0654, 2020-26]
- Do not create social pages, post once and then go a year without posting. A visitor who sees that the last post is a year old will assume the business has closed, which defeats the purpose. [L0654, 2020-26]
- Weekly-post concept prompt. Fill in the placeholders and use it as the prompt:

```
I'm [your name], and the owner of [your store domain]. I need concepts for our weekly posts on Facebook and Instagram, covering the next 30 weeks. Each week, please provide one post idea that's ready to publish without edits, such as a product spotlight, a store product link paired with a reason customers like it, a brief business update, or a tip tied to [your niche]. Keep every idea short, appropriate for a small online shop, and aligned with our brand.
```

  [L0654, 2020-26]

- After saving a Facebook page bio, check the live page to see whether the text is cut off. If it is, shorten the bio, save again and recheck until the whole text displays under the profile picture and header. [L0654, 2020-26]
- Services that artificially add likes and comments to ads do not directly improve CPM or quality ranking. Visible engagement can encourage real users to comment, which accelerates engagement growth organically and lowers CPM over time. [L0298, 2023]

#### Local and personal cues

- Add a personal note from the staff or owner on best-selling product pages. It should explain the product's benefits in plain words, instead of relying only on generic feature lists, and be based on what reviews say customers like. The note builds credibility and reduces questions. [L0910, 2015]
- Customers look for signs of a real business behind the store. Show who runs the store and how to reach them, because that answers the question of whether the seller exists. [L0423, 2019]
- Sell differentiators that are true, such as a woman-owned, veteran-owned or surfer-owned status, free shipping, a price-match guarantee, a 24/7 customer service channel or secure checkout. [L0342, 2020-26]

### Differentiator icons and honest claims

- The 'why buy from us' icons in the pre-footer communicate what sets the store apart. They can show free shipping, a price-match guarantee, a 24/7 customer service channel, secure checkout or the owner's status. The one source theme allows up to seven icons, but one to seven can be used. [L0342, 2020-26]
- Use only differentiator claims that are true for the store. For example, show secure checkout only when the store runs on Shopify's checkout. Each claim needs a matching icon and a short label. [L0342, 2020-26]
- A visitor who sees a claim the store does not keep will notice, and false credibility signals damage trust. [L1380, 2022]

### Honesty limits

- Do not pretend things are what they are not. Perception-building must stay above board, honest and trustworthy, which matters most in highly competitive markets or when reselling products that other sellers also carry. [L0411, 2021-22]
- Show only the real average star rating and the real number of reviews on a store. Do not edit widget text to display a higher rating or a larger review count than the store actually has. [L1299, 2026]
- Generating fake reviews with AI and importing them into a live store to make it look established is deceptive. It can violate consumer-protection rules and app or platform policies, and it can put the store at risk of being shut down. [L1299, 2026]
- Writing your own reviews is acceptable only when they are based on real experiences or on material the supplier has approved for use. Inventing fake customer stories or posing as different people is not allowed. [L0908, 2020-26]
- Placeholder reviews for layout and QA only. This prompt produces test content and must never go live, be used in ads or be presented as customer proof. Use the prompt only for design and testing, with the output marked as required:

```
Act as a copywriter producing believable placeholder reviews, strictly for layout and QA work. Write 12 brief mock reviews, each one to three sentences long, for an item called [PRODUCT NAME]. Every entry needs an invented first name with a country flag emoji (for example Sarah 🇸🇬), a headline of one to five words, and a body of one to three sentences that refers to one concrete trait or advantage such as build quality, delivery, packaging, or outcomes. Put a star score from 1 to 5 after each review line. Vary the tone: some upbeat, some neutral, and one mildly negative. Start the output with the line "SAMPLE REVIEWS, FOR DESIGN/TEST ONLY. DO NOT PUBLISH." Each review goes on its own line in this pattern: SAMPLE, [Name] [flag], "[Headline]", [body]. ⭐️⭐️⭐️⭐️ Include no personal data and never suggest these came from real buyers. Keep everything invented and limited to layout or testing. These reviews must never go live on a storefront or into ads, and must never be used as genuine customer proof.
```

  [L1299, 2026]

- Published statements about the store's data and processes must be accurate, because they describe what the store actually does. [L1250, 2026]
- Percentages such as 91 or 97 percent of users noticing a result need a published survey base: how many people answered and how long they used the product, for example 100 users over 90 days. A figure without this basis is an unsupported claim and can create advertising risk. [L0600, 2026]
- Only show 'as seen in' logos if the brand was actually featured. Do not fabricate press or media mentions. [L1363, 2023]
- Testimonials and FAQ answers must come from real customers and real questions. [L0917, undated]
- Trust badges and claims are only useful when true for the store. False credibility signals can damage trust once a visitor notices. [L1380, 2022]
- Badges from a seal provider must be checked against sales data, because a seal that does not help can hurt. [L0910, 2015]
- Use a claim such as 'clinically proven' only when the evidence is real and can be cited. [L1210, undated]
- Featured-in logos from paid placements must be backed up by the actual placement. [L1348, 2023]
- The 78% social-media statistic and the 88% Zendesk review benchmark are secondary or vendor figures. Verify them before quoting. [L0653, 2020-26; L0908, 2020-26]
- Do not quote the 78% social-media statistic or the 88% review-trust benchmark as verified facts. Verify them before use. [L0653, 2020-26; L0908, 2020-26]
- Customer totals must come from your own order records, not from a competitor's page. [L0600, 2026]
- Do not show payment methods you do not accept. [L1050, 2020-26]
- Do not present a self-written review as a customer review. [L1325, 2020-26]

#### Further details

- Social media profiles for ecommerce stores build visitor trust through proof of active business operations rather than through follower volume or viral reach. Prospective customers often search for your store name on Google before completing a purchase; active, professional social profiles appearing in both search results and linked from your website reassure first-time visitors that your business is legitimate and currently operating. [L0157, undated]

- The 'About us / our story' page converts poorly, with roughly 3% of visitors reaching it, but it should still exist for trust. [L0577, 2023]

- Competitor stores show free shipping, a money-back promise and easy returns as trust badges near the product. Place these badges close to the add-to-cart button and state the exact terms. [L0600, 2026]


Part 22 of 40 of "6. Conversion Optimization: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/06-conversion-optimization.md · Previous: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/21-guarantees-and-risk-reversal.md · Next: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/23-collecting-and-displaying-reviews.md
