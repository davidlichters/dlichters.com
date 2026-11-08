<!-- part of ecom/deep/04-store-build-and-shopify.md -->
Part 33 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/32-product-page-design-and-templates.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/34-creating-and-assigning-product-templates.md

### Variant descriptions and variant selection

- Decide whether variants appear on one page or on separate product pages by checking the top two or three future competitors in the niche and copying their approach. Default to one page with variations when the leaders use variants. [L0429, 2022]
- Standard and premium versions with different materials and build quality: look at how the top Google Shopping results display them, and copy their structure (one page with variants or separate pages) but write your own words. [L0467, 2019]
- Bold Product Options: an app that lets customers choose custom sizes and materials on the product page. Preset option values can update the price in real time, while free-text entry may not. Check with the app's support before relying on it. [L0467, 2019]
- A single Canva image of colour swatches does not let customers click a colour and add that variant to the cart. Clickable swatches need variant options built into the product, typically through an app (2025). [L0837, 2025]
- Set up variant-specific descriptions in this order:
  1. Create a variant metafield named "Variant description" with type Rich text.
  2. Create a snippet named "variant-description" and paste the complete corrected snippet code into it.
  3. Create a new product page template, hide the "Description" block, add a Custom Liquid block and paste `{% render 'variant-description' %}` into it.
  4. Assign the new product page template to every product that has variants. [L0621, undated]
- The variant metafield "Variant description" (type Rich text) stores formatted text separately for each variant. The snippet reads it as `custom.variant_description` and outputs it with the metafield_tag filter. [L0621, undated]
- Snippet code (variant-description.liquid), exactly as provided:

```
{%- comment -%}
Snippet: variant-description.liquid
Goal: Show a variant-specific description when available; otherwise fall back to
product.description.
Metafield: variants -> custom.variant_description (Rich text)
Notes:
- Scoped to this product section using section.id to avoid conflicts with quick-add or
multiple products.
{%- endcomment -%}

{%- assign current_variant = product.selected_or_first_available_variant -%}

<div id="VariantDescription-{{ section.id }}" class="rte" style="margin-top:1rem">
{%- if current_variant.metafields.custom.variant_description != blank -%}
{{ current_variant.metafields.custom.variant_description | metafield_tag }}
{%- else -%}
{{ product.description }}
{%- endif -%}
</div>

{%- comment -%}
Hidden templates (scoped by section.id)
{%- endcomment -%}
<div id="VariantDescriptionTemplates-{{ section.id }}" hidden>
<template id="DefaultProductDescription-{{ section.id }}">
{{ product.description }}
</template>

{%- for v in product.variants -%}
<template data-variant-id="{{ v.id }}">
{%- if v.metafields.custom.variant_description != blank -%}
{{ v.metafields.custom.variant_description | metafield_tag }}
{%- endif -%}
</template>
{%- endfor -%}
</div>

<script>
document.addEventListener('DOMContentLoaded', function {
  var sectionId = '{{ section.id }}';

  // Scope to this section only
  var sectionEl = document.getElementById('shopify-section-{{ section.id }}') ||
    document.querySelector('[data-section-id="{{ section.id }}"]') || document;

  var container = document.getElementById('VariantDescription-' + sectionId);
  if (!container) return;

  var templatesRoot = document.getElementById('VariantDescriptionTemplates-' + sectionId);
  var defaultTpl = templatesRoot ? templatesRoot.querySelector('#DefaultProductDescription-' + sectionId): null;
  var defaultHTML = defaultTpl ? defaultTpl.innerHTML.trim: '';

  var descMap = {};
  if (templatesRoot) {
    templatesRoot.querySelectorAll('template[data-variant-id]').forEach(function(t) {
      descMap[t.dataset.variantId] = t.innerHTML.trim;
    });
  }

  // Try multiple robust selectors for the variant ID input,
  // scoped to this section to avoid grabbing quick-add forms.
  var idInput =
    sectionEl.querySelector('#product-form-{{ section.id }} input[name="id"]') ||
    sectionEl.querySelector('form[action^="/cart/add"] input[name="id"]') ||
    sectionEl.querySelector('input[name="id"][type="hidden"]');

  // If no variant selector (e.g., single-variant product), keep initial render
  if (!idInput) return;

  function setDescription(variantId) {
    var html = descMap[variantId] || '';
    container.innerHTML = html || defaultHTML; // fallback to product.description
    container.style.display = (container.innerHTML.trim === '') ? 'none': '';
  }

  // Initialize
  setDescription(idInput.value);

  // Listen for option changes on the section's product form
  var form = idInput.form;
  if (form) {
    form.addEventListener('change', function {
      setDescription(idInput.value);
    });
  }

  // Watch the hidden variant id input for programmatic changes (theme JS)
  var mo = new MutationObserver(function {
    setDescription(idInput.value);
  });
  mo.observe(idInput, { attributes: true, attributeFilter: ['value'] });

  // Some themes dispatch custom events from option elements; listen broadly in this section
  sectionEl.addEventListener('change', function {
    setDescription(idInput.value);
  });

  // Handle back/forward nav that changes ?variant=
  window.addEventListener('popstate', function {
    setTimeout(function{ setDescription(idInput.value); }, 0);
  });
});
</script>
```
[L0621, undated]

- The snippet shows the selected variant's own description and falls back to the main product description when that variant has none. If the resulting text is empty, the description container is hidden entirely. [L0621, undated]
- Hide the default Description block on the new product page template, so only the variant-description snippet displays the text. Insert the snippet through a Custom Liquid block. [L0621, undated]
- Assign the new template only to products with variants. Single-variant products have no variant selector, so the script keeps its initial render and does not update. [L0621, undated]
- Do not use unscoped selectors for the variant ID input or the section. Without section.id scoping, quick-add forms or several products on one page can receive wrong variant updates. [L0621, undated]
- The script must update the description in three cases: when the product form changes, when theme JavaScript changes the hidden variant ID value, and when back or forward navigation changes the variant in the URL. Themes differ, so the script listens to several events. [L0621, undated]
- Code copied from the PDF version of this material contains broken characters, such as curly quotes and missing operators (`||`, `?` and `:`). Replace the quotes with straight quotes and restore the operators before pasting, otherwise the snippet will not run. [L0621, undated]

### Buttons and cart behaviour

Conflicting sources on what Add to cart should do:

| Source | Value given | Condition stated |
|---|---|---|
| [L0268, 2020] | Customise the button to go directly to checkout instead of staying on the product page | None stated |
| [L0370, 2021-22] | Theme setting Enable cart redirection sends the user to the cart after adding a product | Setting exists; no guidance on when to use |
| [L0835, 2023] (2023) | Send one-off buyers directly to the cart after add to cart | One-off purchases; for stores where shoppers commonly buy several items, show a slider or cart option that lets them keep shopping |
| [L0339, undated] | Replace Buy Now with Add to Cart, install a cart drawer app such as Slide Cart, let customers continue or check out from the drawer | Cart drawer setup |
| [L0656, undated] | Shop Now button goes directly to checkout; Add to Cart followed by a separate cart page adds steps and loses buyers | Product page that needs a direct purchase path |
| [L0339, undated] | PageFly template, General tab, field After Add to Cart Action: the lesson sets Go to Checkout Page, but the speaker then says it should stay on the same page | Check which value fits the cart drawer setup before publishing |

- Two purchase buttons: an Add to Cart button for customers who keep shopping, and a Direct Buy button that starts checkout straight away through a payment provider. Offering both lets customers choose between a quick purchase and continued browsing. [L0339, undated]
- The Direct Buy button shows payment providers based on the visitor's device. On iPhone, Apple Pay is offered by default. On Android, it can offer Google Pay, PayPal or Shopify ShopPay. [L0339, undated]
- Place Add to cart and Buy now side by side under the price, and show an express payment button such as PayPal below them. Buyers can then pay without going through the cart first. [L0600, 2026]
- Direct payment button setup: it needs no manual setup in the template. It is dynamic code that tells Shopify it is a direct payment button and works with the device's available payment providers. [L0339, undated]
- After changing PageFly template settings: 1. Save the page. 2. Publish the page. 3. Export the template. [L0339, undated]
- Quantity: the default quantity selector can be set to the most common purchase amount (see [L0834, 2021] under Product information settings).

### Bundles, upsells and related products

- Recommendation grid: display product recommendations on product detail pages as a 2x3 grid (2 columns, 3 rows) instead of a single-row slider showing only 2 items. Add a magnifying-glass zoom feature and label the block Curated for you, which signals data-driven logic, rather than Recommended by us, which signals manual curation. [L0197, 2025-26]
- Related Products: use the section when offering add-on products that complement the main item. [L0104, undated]
- Recommendation blocks such as You may also like are common on competitor product pages. Add them once the store has enough products to recommend. [L0600, 2026]
- Bundles, steps:
  1. Install the Kaching Bundles app from the Shopify App Store.
  2. Create a 2-pack and a 3-pack bundle offer.
  3. Generate a niche-specific ebook using Claude.
  4. Design the ebook in Canva.
  5. Add the ebook as a free bonus.
  6. Highlight the bonus on the product page.
  7. Test and track the change in average order value (AOV). [L0860, 2026]
- Bundle settings in Kaching: Settings > Let customers choose different variants for each item. Turn it off when the product has no variants. The related toggles Hide unavailable variant options and Show variant selection for single quantity deal bar are in the same settings. [L0861, 2026]
- Settings > Cart > Skip cart and go to checkout directly sends customers straight to checkout after adding a bundle. It is available but not required for the setup. [L0861, 2026]
- A gift product that shows Out of stock or is unavailable blocks the bundle from offering the free item. Check the gift product's inventory and make sure it is available before the bundle is published. [L0861, 2026]
- The gift product must be in stock, or the gift cannot be offered. Attach the e-book product as the gift product and do not leave it unattached. [L0862, 2026]
- Do not use bundle minimums (for example minimum order 2 units) unless they make logical sense for the customer. Sell a 2-pack, such as blinds 2-pack, instead of forcing two individual units. Bundles should address genuine customer needs (2023). [L0251, 2023]
- Rebuy, setup:
  1. Create the snippet `snippets/rebuyExtensions.liquid` with the code below, replacing 117326 with your own widget ID.

```
{% if product %}
<div data-rebuy-id="117326" data-rebuy-shopify-product-ids="{{ product.id }}"></div>
{% endif %}
```

  2. The `if product` wrapper makes the widget render only on product pages. Without it, the bundle would also try to load on other page types. [L0557, 2025-26]
- Advanced Liquid users can paste the widget div directly into the product template file instead of using a snippet. The snippet method is the simpler default. [L0557, 2025-26]
- A manually installed bundle may appear far down the product page, below other content, which is not ideal. Dynamic placement is needed to move it. [L0557, 2025-26]
- Dynamic placement (Rebuy):
  1. Open the product page in the storefront, right-click and choose Inspect.
  2. Use the element picker (top-left icon) to hover over the element the bundle should sit above, for example the next widget after the main product.
  3. Copy that element's id attribute.
  4. Return to the widget preview and expand Placement.
  5. Under LARGE SCREENS, enable dynamic placement, set Min Breakpoint to 999, leave Max Breakpoint at None, paste the selector with a leading `#` into Placement Selector, and set Placement Location to Before.
  6. Repeat the same settings under MEDIUM SCREENS and for the remaining screen sizes.
  7. Click Save.
  8. Refresh the product page a few times to confirm the change. [L0557, 2025-26]
- A CSS selector that points to an element ID must start with a hash sign, for example `#sidebar` or `#rebuy-widget-117210`. Without the `#`, the placement selector will not find the target. [L0557, 2025-26]
- Dynamic placement uses breakpoints: large screens start at a minimum of 999, and medium and other sizes are configured separately. Each size needs its own selector and placement location. [L0557, 2025-26]
- Placement location Before puts the dynamic bundle directly before the chosen target element, for example before the product recommendation carousel. [L0557, 2025-26]
- Rebuy gives each rendered widget container an element id in the form `rebuy-widget-<widget ID>`. To place one widget relative to another, use that id as the placement selector with a leading `#`. [L0557, 2025-26]

### Back order, out-of-stock and pre-order handling

Conflicting sources on out-of-stock products:

| Situation | Source | Action |
|---|---|---|
| Out of stock, keep the page live | [L0197, 2025-26] | Keep the page live, remove Add to Cart, keep Notify me when available visible, add a Try one of these instead recommendation block below using the recommendation engine filtered by customer behaviour and purchase history. Implementation: 4 clicks in Visually. |
| Backordered 2+ weeks | [L0251, 2023] (2023) | Keep the product live and do not pause ads. Add a note near Add to Cart: This product is currently backordered. Expected ship date: [date]. |
| Backordered indefinitely, no ETA | [L0251, 2023] (2023) | Either remove the product from the feed entirely or set CPC to $0 to stop ad spend. Optionally set inventory to zero and add a note suggesting similar in-stock alternatives with links. |
| Out of stock, do not delete | [L0274, 2023] (2023) | Do not delete the product. Set CPC to zero in ads, add the note Currently backordered, ETA [date] near Add to Cart, and recommend 2-3 in-stock alternatives. This keeps free organic traffic. |

- Short-term backorders: do not remove the product or pause ads. [L0251, 2023]
- Indefinite backorders: removing the product from the feed or setting CPC to $0 prevents ad spend. The sources differ on deleting the product, see the table. [L0251, 2023; L0274, 2023]
- Back-order note: insert it in the product template near the Add to cart button. [L0856, 2024]
- Pre-orders with apps: Shopify apps can mark products as available for pre-order instead of out-of-stock. Customers reserve items for future delivery without removing stock from the catalogue, which preserves sales from demand that exists before supply arrives. [L0249, 2022]
- Pre-orders without an app (2023): store pre-orders are handled by direct communication with customers, not by a dedicated app. This is the more recent guidance and differs from the 2022 app-based approach. [L0855, 2023]
- Products with no back-order or stock status shown on the page can still hide Inventory status (see [L0472, 2025]). [L0472, 2025]

### Page builders: PageFly, GemPages and Builder.io

- PageFly: a Shopify app for building high-conversion product pages with template import and drag-and-drop customisation. The free version lets you publish one page while editing unlimited unpublished pages. Install it from the Shopify app store, then go to Pages > Product Pages. [L0321, undated]
- Importing a PageFly template:
  1. Install PageFly from the Shopify app store.
  2. Go to Pages > Product Pages.
  3. Click Import.
  4. Click Select File.
  5. Upload the downloaded template file.
  6. Once uploaded, duplicate the template with a unique product name.
  7. Begin editing images and copy.
  8. Check the mobile version separately.
  9. Hide all default Shopify theme sections by clicking the eye icon next to each.
  10. Publish the PageFly page. The default Shopify theme must stay hidden so only PageFly displays. [L0321, undated]
- To hide the default Shopify product page so PageFly appears alone: go to the product, find the default theme section showing product information, and click the eye icon to hide it. Repeat for all non-PageFly sections. Only the PageFly section should be visible. [L0321, undated]
- Changing page colours to match the brand in PageFly:
  1. Identify your brand colour, from existing branding or from ChatGPT suggestions.
  2. Locate the first icon or element with the old colour.
  3. Click the element and open the colour picker.
  4. Enter the brand colour as a hex code or RGB value.
  5. If several identical elements exist, copy the style of the updated element and paste it onto the others to apply the change across the page. [L0321, undated]
- Layout options: for custom sections with text and images side by side, use Layout > Row and Column options. Common layouts include 2-column, 3-column and 2-row by 3-column. Drag paragraph, image or GIF elements into columns. No custom coding is required. [L0321, undated]
- Time to build a high-converting product page: 30 minutes to 1 hour once you know the template and the ChatGPT copywriting workflow. First builds may take longer. [L0321, undated]
- Slideshow section:
  1. Drag a Slideshow component into the page section.
  2. Below the slideshow, drag a Paragraph component for descriptive text.
  3. To the side or below the text, drag an Icon component.
  4. Add product images to the slideshow.
  5. Fill the paragraph with feature or benefit descriptions.
  6. Select and style the icon to match the brand.
  7. Repeat for multiple images. PageFly allows this multi-component grouping; default Shopify themes do not. [L0321, undated]
- Page builders such as PageFly, Gem Pages and Builder.io allow complex landing page layouts that Shopify themes often cannot provide. PageFly is described as smoother to work with, Gem Pages can be buggy but has good support, and Builder.io is aimed at ecommerce. A page builder that goes down can take the store down with it, so use them carefully. [L0387, 2022]
- Shopify 2.0 free themes can handle about 75 percent of the landing page customisation described in the lesson. A customisable theme is needed for the rest, and page builders are an option for the remaining elements. [L0387, 2022]
- GemPages: a custom page builder for branded product and landing pages, with highlighted areas, slider testimonials, bundle package blocks and a mobile-friendly layout. PageFly was also mentioned, but its features were not confirmed in that source. [L0871, 2021+]
- Page builders named for landing pages are PageFly and GemPages, which can build custom product pages. Templates can be imported and images and text replaced. For simple products in home decor, jewellery or fashion, a normal theme is enough. [L0637, 2023+]
- Landing-page build with PageFly (2026): PageFly creates multi-column grids with image, review and rating rows without code. Free Shopify themes such as Debutify or Sense can build basic landing pages but offer less flexibility for custom sections than a dedicated builder. [L0916, 2022+]
- Build a landing page from a pre-built PageFly template:
  1. Open the template in PageFly.
  2. Insert your product into the template.
  3. Replace the product images with your own.
  4. Replace the copy with your product's copy, keeping the benefit lines and badges already in the template.
  5. Keep the included sections for brand comparison, FAQ, reviews and the 30-day money-back guarantee, and check they match your product. [L0916, 2022+]
- Copying an existing page template from a page builder such as PageFly, changing the images and rewriting the copy is a quick way to build a landing page for a new product. PageFly offers a template library, and a plan with a number of page slots was mentioned at around $20 per month. [L0552, 2023]
- Free-theme vs. page builder: for simple products, a normal theme can be enough, while complex landing pages need a builder. [L0637, 2023+; L0387, 2022]
- Free-theme split test: run ads for two days on PageFly, then two days on the one source theme, and compare which performs better. Some products favour PageFly and others the one source theme. Both are free. [L0773, 2023]
- Free-gift and offer blocks in PageFly-based pages are handled in the template; see the free-gift procedure under Descriptions and trust elements. [L0469, 2021]

### Testing and choosing a page approach

- Split-test landing pages and themes with equal ad time per variant before choosing one. [L0773, 2023]
- Test each added feature (sticky add-to-cart bar, gift option, colour swatches) separately. [L0709, 2017+]
- Copy a competitor's page structure where it works, but measure. Heavy editing can reduce sales. [L0660, 2019+]
- Preview a product page after saving: click Preview at the top, check the customer view (product image, name, price and description), then return to the editor to make changes. [L0036, 2020-26]

### Editing the product page and template structure

- In the Shopify admin, go to Sales channels > Online store > Themes and click Edit theme to open the theme editor. [L1192, 2020-26]
- In the theme editor, select Homepage at the top, then Products, then the Default product template. This template applies to all products unless another template is assigned to them. [L1192, 2020-26]
- Path to the product page settings: Online Store > Themes > Edit theme > choose Products > Default product. Changes made on the default product template apply to all other products in the store. [L1189, 2020-26]
- In the Manhattan theme, go to Online Store > Themes, click Customize, and switch the page dropdown at the top from Homepage to Products. All product page layout options are then controlled through the default product template. [L0976, 2024+]
- To reach the section settings on the Default product template, open the section list with the small arrow next to the section name, then click Product information. This is where the sticky media, SKU, price, variant, quantity and buy button options are configured. [L1189, 2020-26]
- Do not edit the Default product template unless every product page should change, because it is assigned to all products by default. [L1116, 2025]

### Template strategy

- Start with only the default product template. Add more product templates later, only when product pages must look different, for example by supplier or for specific products, and assign each template to the matching products. [L0976, 2024+]
- Give each product its own page template so its content, such as collapsible tabs, can be edited without changing the other products. Sharing one template across products causes every edit to spread to all of them. [L1013, 2026]
- one source describes one product detail page being reused for a group of 4 to 10 related products, such as books in the same genre or handyman tools. The related products can be launched together or one after another on the same page layout. [L1013, 2026]
- Separate product page templates let different products have different layouts, such as a quote request page, a free gift offer, a bonus product or a product page without a discount code. Assign the template per product rather than changing the default for all products. [L1287, 2025]
- Product page templates can differ in more than the delivery window, since any section of the product page can be edited separately for each template. [L1192, 2020-26]
- A newly created product template has zero assigned products by default, and it only affects products that are explicitly assigned to it. [L1192, 2020-26]
- A product keeps using the default template until a template is assigned to it, so preview each product after assignment to confirm it shows the correct delivery window. [L1192, 2020-26]
- Before editing collapsible tabs or other sections, confirm the template selection. Changes made in the wrong template spread to all products that share that template. [L1013, 2026]
- If a product is left on Default product, any change made in the product template in the theme editor also changes the main product page and every other product using that default template. Always assign the product's own template before editing it. [L1013, 2026]
- In the theme editor's product template dropdown, a label such as "Assigned to 1 product" shows how many products use the selected template. Before editing, confirm that each individual product template is assigned to exactly one product, so changes stay isolated. [L1013, 2026]
- Check the Theme template field whenever a product page does not show the blocks you expect. One product can get its own layout while the others keep the default. [L1188, 2026]


Part 33 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/32-product-page-design-and-templates.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/34-creating-and-assigning-product-templates.md
