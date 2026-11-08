<!-- part of ecom/deep/04-store-build-and-shopify.md -->
Part 17 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/16-product-photo-sourcing-and-editing.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/18-collection-templates.md

## Collections, tags and filters

### Collection types

- A collection is a product category. It groups related products so visitors can find a product type, size, color, price range or featured group without searching. [L0371, 2020-26; L1312, 2020-26; L0083, undated]
- Shopify has two collection types. A manual collection contains only the products added to it one by one. An automated collection includes every product that matches the conditions you set. [L1312, 2020-26; L0371, 2020-26; L0083, undated]
- Automated collections suit a store that keeps uploading products, because new items sort themselves into the right collections. [L1312, 2020-26; L0083, undated; L1303, 2021-22]
- Automated collections scale better and need no ongoing maintenance. [L0083, undated]
- In a dropshipping store, automated collections should be used exclusively. [L0083, undated]
- Manual collections only make sense when you want full control over a fixed list of products. [L0371, 2020-26]
- Stricter rule: do not assign products to collections manually at all. Use only tag-based automated collections. [L0088, undated]
- Automated collections update in real time when products are tagged or untagged. No manual syncing is needed. [L0083, undated]
- A product can belong to several collections at once, because each collection decides membership with its own rule. [L0083, undated; L0971, 2024]
- Automated collections can also be built by supplier, so every product from one supplier lands in that supplier's collection. Price-based automated collections work the same way. [L0371, 2020-26]
- Typical product-type collections for a stand-up desk store: straight, curved and L-shaped stand-up desks. [L0083, undated]
- Typical attribute collections: size, color, price range, featured items, bestsellers, staff picks, new arrivals and on-sale items. [L0083, undated; L0371, 2020-26]
- Typical collections for a niche store: product types within the niche, size, color, material or feature, price ranges, and featured groups such as Bestsellers, Staff Picks, New Arrivals and Sale. [L0371, 2020-26]
- Example: a bamboo L-shaped desk tagged with both "L-shaped" and "bamboo" is listed automatically in the L-shaped collection and in the bamboo collection. [L0371, 2020-26]
- Collections can also group by skill level (beginner, intermediate, advanced) or by brand, because customers search for those groupings. [L1463, 2021-22]
- Product types and collections have separate jobs. Assign each product one product type based on what it is, for example hybrid, shortboard, mid-length or longboard. Use collections for shopping paths such as price band, skill level, kids or color. [L1287, 2025]

### Planning which collections to create

- Set up collections before importing products. New products are then placed in the right collections as they are added, which keeps the organization consistent from the start. [L0083, undated]
- Before creating anything, list every collection you plan to use. Avoid over-building the structure and focus on collections that match your actual product range. [L0083, undated]
- Do not create every possible collection at the start. Collections can always be added later, so begin with the ones you are most likely to use. [L0371, 2020-26; L1312, 2020-26]
- Build the main collections first as separate entries. Sub-collections are created afterwards as additional separate entries. [L0083, undated]
- Sub-collections are created the same way as any other collection. Shopify has no special subcollection setting. The parent-child link is set later in the navigation menu. [L0371, 2020-26; L1312, 2020-26; L0083, undated]
- Do not configure menu placement while creating a collection. Link collections to the navigation once all collections exist. [L0083, undated; L1303, 2021-22]
- Brand collections should not be created until suppliers have approved your store, even if competitors show them. Other collections can be created first. [L0371, 2020-26; L1312, 2020-26]
- Product categories can be broader than one product type, as long as they are related. Unrelated categories look like a copied template and can trigger review. [L0855, 2023]
- Create one collection per product group when the store has several categories, for example couch covers, or beds and blankets. A store with only a few products can keep them all in one collection. [L1326, undated]
- Decide how products are grouped before building collections. For a non-technical beginner this was the hardest part of Shopify setup. [L1437, 2018]
- Avoid massive collections. Keep them specific and narrow, because long lists of near-identical products increase confusion. Very large collections only suit a store with very different products, such as a department store. [L1522, 2021-22]
- The same product can appear in several collections under different names, when customers may use different terms for it. Each name a shopper uses can lead them to the product. [L1522, 2021-22]
- Create collections around sub-styles within a niche, such as a gothic style or a colorful style, and group matching products in each. [L1325, 2020-26]
- Before naming style collections, check whether the store already has blog posts on those styles. Use the same terms, because existing topics show which style words the audience already recognizes. [L1325, 2020-26]
- Starting set sizes differ by source:
  - Five starting collections built around the product types you will sell, or five variations of one main product. This is a placeholder set, so pick them quickly and refine later. [L1303, 2021-22]
  - A starter set of six for a new demo store: Bestsellers, Staff picks, Top rated, New arrivals, On sale and one price-based collection such as Under 100. With three collections per row on desktop, six fill two rows. [L1309, 2020-26]
- Initial collections are placeholders and are not final. Rebuild them once suppliers are confirmed and the real product types are known. [L1303, 2021-22]
- Research collection ideas from competitors:
  1. Pick the two to three future competitor stores in your niche and open their navigation menus. [L0083, undated]
  2. Hover over each main category in the navigation to see its subcategories. [L1312, 2020-26]
  3. Note how they group products: by type, brand, size or price range. [L1312, 2020-26]
  4. Write the ideas in a document such as Google Docs or Notes. List each main collection and indent its subcategories beneath it. [L1312, 2020-26]
  5. Keep the list focused. You need several collections, but not every possible one. [L1312, 2020-26]
- Empty category pages (soft 404) can be deleted if they are not needed, and re-added when products for them are found. [L0429, 2022]

### Creating a tag-based automated collection

Procedure, merged from the three source procedures and the one source variant:

1. Log in to the Shopify admin. Go to Products > Collections. The collections area is the first link under Products. [L0083, undated; L0371, 2020-26]
2. Click Create collection in the top right corner. [L0371, 2020-26; L1312, 2020-26]
3. If you do not sell in person, switch off the Point of sale option. [L0371, 2020-26; L1312, 2020-26]
4. Enter the collection name in the Title field. The title is the name customers see. [L0083, undated; L0371, 2020-26; L1312, 2020-26]
5. Leave the Description blank for now. It is the text shown above the products and can be added later. [L0083, undated; L0371, 2020-26; L1312, 2020-26]
6. Skip images for now. They can be added later. [L0083, undated; L0371, 2020-26; L1312, 2020-26]
7. Keep the default theme template unless your theme offers a different one that fits. [L0371, 2020-26; L1312, 2020-26; L1303, 2021-22]
8. Set Collection type to Automated. [L0083, undated; L0371, 2020-26; L1312, 2020-26]
9. Set the condition to Product tag, is equal to, and enter the tag exactly as it is used on the products, for example surfboards. [L0083, undated; L0371, 2020-26; L1312, 2020-26; L1326, undated]
10. Check the Search engine listing and the URL handle. Verify the URL handle matches the collection name. Leave the meta description for the later SEO phase. [L0083, undated; L0371, 2020-26; L1312, 2020-26]
11. Click Save and confirm the collection appears in the Collections list. [L0083, undated; L1312, 2020-26]
12. Repeat for each collection on your list. [L0371, 2020-26]

one source variant (short form, same logic): create the collection, for example titled Headphones, set Product tag is equal to headphones, save, add the tag to each product that belongs in it, then open the collection and confirm the products appear. [L1326, undated]

### Collection conditions

- Shopify conditions are fields such as price, supplier, tag, product type, product title, compare-at price, weight or inventory. Tag-based conditions are the most commonly used approach. [L1312, 2020-26; L0083, undated]
- Tag and Price are the two conditions used most in the course. [L0371, 2020-26]
- Set "Products must match" to all conditions if every condition has to be true. Set it to any condition if one match is enough. Conditions are the rules Shopify uses to decide membership automatically. [L1303, 2021-22]
- Available operators: is equal to, is not equal to, is greater than, is less than, starts with, ends with, contains and does not contain. Use is equal to when the value must match exactly and contains for partial matches. [L1303, 2021-22]
- Condition fields and typical use:

| Condition field | Typical use in collections |
|---|---|
| Product title | Match words in the product name |
| Product type | Match the product category set on each product |
| Product vendor | Match the brand or supplier name |
| Product tag | Match a keyword tag assigned to products (most common) |
| Product price | Filter by selling price |
| Compare at price | Filter by the compare-at price |
| Weight | Filter by product weight |
| Inventory stock | Filter by stock quantity |
| Variant's title | Match the variant name |

  [L1303, 2021-22]
- Tag the products of the same category with one shared keyword, then use the condition Product tag is equal to that keyword. Shopify pulls every product with the tag in automatically. [L1303, 2021-22]
- Matching by product title contains a keyword is an alternative to tags and works the same way if the keyword appears in product names. There is no single right method. Choose one and use it consistently across the initial collections. [L1303, 2021-22]
- Example of mixed conditions for an off-grid power products store:
  - Solar Power: product tag is equal to solar
  - Generators: product title contains generator
  - Water Filtration: product title contains water
  - Food Supplies: product tag is equal to food
  - Waste Disposal: product tag is equal to waste

  Mixing tag and title conditions is acceptable at this starting stage because the collections are placeholders. [L1303, 2021-22]
- Creating a collection with generic conditions:
  1. In the Shopify admin, click Products in the left-hand menu. [L1303, 2021-22]
  2. Under Products, open Collections. [L1303, 2021-22]
  3. In a new store, tick the box of the default Home page collection, then click Delete. [L1303, 2021-22]
  4. Click Create collection. [L1303, 2021-22]
  5. Enter the collection title, which is the name customers see. Leave the description empty if you do not need one. [L1303, 2021-22]
  6. Set Collection type to Automated. [L1303, 2021-22]
  7. Under Conditions, choose all conditions or any condition, then select a field, an operator and a value. [L1303, 2021-22]
  8. Click Save. [L1303, 2021-22]

### Price-band collections

- Price-band automated collections group products into bands, for example products priced 1 to 200, 2 to 300 and 3 to 500 dollars. Link them in the navigation as "Shop by price". This gives shoppers price sorting without extra apps. [L0968, 2021]
- Each band is a separate collection, so each product lands in the one matching its price. [L0371, 2020-26]
- Example band set for a stand-up desk store: $300 to $500, $500 to $800, $800 to $1,000, and $1,000 and up. [L0371, 2020-26]
- Example of a $300 to $500 price collection. [L0371, 2020-26]
- Price-range procedure:
  1. Navigate to Products > Collections and click Create collection. [L0083, undated]
  2. Select Collection type: Automated. [L0083, undated]
  3. For items priced $2,000 and above, set the condition Price is greater than $2,000. [L0083, undated]
  4. For items priced between $1,000 and $2,000, set two conditions: Price is greater than $999.99 AND Price is less than $2,000.01. [L0083, undated]
  5. Click Save. [L0083, undated]
- "$2,000 and up" setting: click Create collection, keep Collection type on Automated, change the condition field to Price, select "is greater than" and enter 2000. Keep Products must match on all conditions. Every product priced above that value that you upload later enters the collection automatically. [L1312, 2020-26]
- Price-range formula for $1,000 to $2,000 with Products must match set to all conditions:

  ```
  Condition 1: Price is greater than 999.99
  Condition 2: Price is less than 2000.01
  Result: products priced above 999.99 and below 2000.01 are included,
          so a product at exactly 1000.00 or 2000.00 belongs to this range.
  ```

  [L1312, 2020-26]
- Boundary rule: Shopify price conditions use "is greater than" and "is less than", which do not match a product priced exactly at the threshold. For a range, set the lower bound a cent below and the upper bound a cent above, such as 999.99 and 2000.01. [L0371, 2020-26; L1312, 2020-26]
- When price collections meet at a boundary, use offset limits instead of exact values. The $2,000-and-up collection only takes prices above 2000, so a product at exactly 2000.00 sits in the range collection and does not fall between two collections or appear in both. [L1312, 2020-26]
- A higher tier is built the same way: a "$200 and up" tier uses the single condition Price is greater than 200. Tiers can be stacked by changing only the threshold values. A range tier uses two conditions as in the $1,000 to $2,000 example. [L1312, 2020-26]
- Threshold values differ by store. The course examples use $2,000 and up [L0083, undated; L1312, 2020-26], $1,000 and up [L0371, 2020-26] and $200 and up [L1312, 2020-26]. Use the top band that matches your own price range. The same boundary rules apply in each case. [L0083, undated; L1312, 2020-26; L0371, 2020-26]

### Featured and sorting collections

- Featured collections group products such as bestsellers, staff picks, new arrivals or items currently on sale, instead of grouping by product type. They help visitors find popular or timely products quickly. [L1312, 2020-26]
- Featured collection examples: Bestsellers, Staff Picks, New Arrivals, Sale. [L0371, 2020-26]
- Featured groups for a demo store: Bestsellers, Staff picks, Top rated, New arrivals, On sale. [L1309, 2020-26]
- Featured groups as a filter: bestsellers, staff picks, new arrivals and top rated. The tags must already exist on products in the store, because a tag list only lists tags applied to products. [L0369, 2020-26]
- Organize products into collections and sort each collection with best sellers first, on the homepage and collection pages. Shoppers look for what others want most, which reduces the chance they leave. [L1098, 2019+]
- To see a store's best-selling products, open the collection URL /collections/all?sort_by=best_selling. [L0871, 2021+]

### Product types and tags

#### Tag basics

- Apply multiple tags to a product. Tags place products automatically into the matching collections, so the store is organized by category without manual collection assignment. [L0036, 2020-26]
- Tags are created automatically the first time you enter them in the tags field. There is no separate place to create them first. [L0036, 2020-26]
- A product can carry several tags and then appears in every collection whose tag rule it matches. [L0371, 2020-26]
- Tag-based automated collections are the primary method. [L0371, 2020-26]
- Each tag is one collection rule. Tags assigned to a product on its page decide where it appears. [L0971, 2024; L0371, 2020-26]
- Once a product is saved with a tag, it is added automatically to every automated collection whose Product tag condition matches that tag. [L0371, 2020-26]
- A tag-based condition of "product tag is equal to" only picks up products that carry that exact tag name. Use the same spelling on every product that should appear. [L1312, 2020-26]

#### Adding tags to a product

Procedure, merged from the course variants:

1. Go to Shopify Admin > Products and click into the product, or select the product. [L0103, undated; L0369, 2020-26; L0890, 2020-26]
2. Scroll to the Tags section, or open the Tags field. [L0103, undated; L1326, undated]
3. Add relevant tags, for example longboards, blue, hybrid. Each product that should appear under a filter needs the matching tag. [L0103, undated; L0369, 2020-26; L1326, undated]
4. Click Save. The product immediately becomes available in all matching filter tags and collections. [L0103, undated; L0369, 2020-26; L0890, 2020-26]
5. Refresh the storefront collection page to confirm the product appears. [L0890, 2020-26]

#### Tag hygiene

- Tag spelling must be identical in the product tags and in the collection or filter entries. Example: "Shortboards" written as one word in both places. A spelling difference means the filter does not match the tagged products, so the grid shows fewer or no results. [L1010, 2020-26; L0369, 2020-26; L0890, 2020-26]
- A tag list only matches exactly, including spelling, spacing and capitalization. A mismatch hides that option even for tagged products. [L0369, 2020-26]
- Mistake, two-word tag: a tag written as one word did not match the two-word version, so only two of three options appeared until the tag was corrected. [L0369, 2020-26]
- Fixing case problems:
  1. Open the product in the Shopify admin. [L1111, 2020]
  2. Click edit. [L1111, 2020]
  3. Delete the existing tags. [L1111, 2020]
  4. Re-enter the tags in the correct case, such as lowercase. [L1111, 2020]
- Shopify has no bulk tag management interface. Tags cannot be deleted in one place. To remove a tag, it must be removed from every product individually. [L0255, 2025]
- Once a tag has been autocompleted in Shopify, the system remembers it. Removing it from all products does not delete it from autocomplete. [L0255, 2025]
- Tag lists can be filled in advance, but only tags carried by at least one product show as filter options. A tag such as "purple" with no matching product produces no option. [L0890, 2020-26]

#### Changing product membership

- Membership is controlled from the product page, not from the collection. Removing a tag from a product makes it leave the collection. [L0971, 2024]
- Procedure to find why a product is in an unwanted collection:
  1. Open Shopify admin > Products > Collections. [L0971, 2024]
  2. Check the number of products and the condition of the collection. [L0971, 2024]
  3. Open the collection to confirm the rule, for example Product tag is equal to bestsellers. [L0971, 2024]
  4. Open the product page and review the tags applied. [L0971, 2024]
  5. Remove the tag to remove the product from the collection. [L0971, 2024]
- Duplicate collections: when collections created by hand and by the supplier share the same tag, products appear twice. Check the collection conditions and remove the shared tag from one of the collections. [L0856, 2024]
- Automated collections need no manual syncing. Refresh after saving changes, and if a new filter value is missing, wait a moment and refresh again before troubleshooting. [L0890, 2020-26; L0083, undated]

### SEO and handle fields

- The key fields on the Create collection form are Title, Description, Images, Theme template, Collection type, Conditions, Search engine listing and URL handle. [L0371, 2020-26]
- The Title is the name customers see. The Collection type decides whether products are added by hand or by conditions. [L0371, 2020-26]
- The URL handle is created from the Title by default. It usually looks like your-domain.com/collections/keyword. Always check it before saving, because it should end with the exact collection name. [L0371, 2020-26; L1312, 2020-26; L0083, undated]
- The URL of a collection follows the pattern yourdomain.com/collections/keyword. The handle copies the title by default, so check it before saving. [L1312, 2020-26]
- Do not edit the SEO fields (collection description, page title, meta description) during the initial setup. They are configured in a later stage. [L0083, undated]
- Check the search listing during setup, but leave the meta description for the later SEO phase. [L0371, 2020-26; L1312, 2020-26]
- Collection SEO is set under Search engine listing preview, then Edit website SEO. Add a title and description for search engines. The listing preview shows how the collection will appear in results. [L1303, 2021-22]
- The collection description is useful for SEO and appears above the product list. Long descriptions go below the product grid. [L1312, 2020-26; L0368, 2020-26]
- A short description of one or two sentences can stay at the top without a noticeable effect. [L0368, 2020-26]
- Renaming a collection: on an established store, rename it and add a redirect from the old URL. This keeps traffic and links to the old page. On a new store with no live products, redirects are not necessary. [L1114, 2023]
- Text over collection images is a theme option, not an image edit, so no Photoshop or Canva work is needed. Enable the text overlay in the theme settings and enter the text. Whether to use it is a preference, so judge by how it looks. [L0664, 2020]


Part 17 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/16-product-photo-sourcing-and-editing.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/18-collection-templates.md
