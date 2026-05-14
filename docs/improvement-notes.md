# Codebase And Website Improvement Notes

This is a practical assessment of the current site after reviewing the repository.

## Summary

The site is not structurally wrong. A Vite-powered static site is a good fit for a local pet food supplier with a mostly single-page marketing and WhatsApp ordering flow.

The design direction is also not wrong. The warm palette, handmade tone, trust badges, and WhatsApp-first ordering match the business better than a slick corporate design would.

The main problems are maintainability and focus:

- product data is duplicated between HTML and JavaScript
- there is unused code from removed sections
- the CSS file is large and mixes active and inactive styles
- the site could show the actual canned product and ordering path more clearly

## Keep Vite

Keep Vite for now.

Reasons:

- GitHub Pages deployment is already working around Vite output.
- The site does not need React, Next.js, server rendering, or a CMS yet.
- Vite handles local preview, production builds, minification, and asset copying well.
- The site can remain cheap, fast, and easy to host.

Consider a larger framework only if the business later needs dynamic inventory, checkout, multi-language routing, a blog, or admin-managed content.

## Recommended Structure

Near-term structure should stay simple:

```text
src/
  index.html
  main.js
  style.css
  images/
  fonts/
  public/
docs/
  beginner-guide.md
  brand-and-theme.md
  site-structure.md
  improvement-notes.md
AGENTS.md
README.md
```

If the CSS and JS keep growing, split them later:

```text
src/
  data/products.js
  scripts/order.js
  scripts/navigation.js
  styles/base.css
  styles/theme.css
  styles/sections.css
```

Do not split files only for neatness. Split when edits become risky because unrelated concerns are packed together.

## Highest-Value Code Improvements

1. Create one product data source.

   Move all recipe names, categories, prices, images, and ingredients into a single JavaScript data structure. Render the `<select>` options from that data so the order form cannot drift.

2. Remove inactive code.

   Delete or archive the commented slideshow, unused modal behavior, gallery/lightbox behavior, and unused CSS once the business confirms those sections are not coming back.

3. Clarify WhatsApp numbers.

   The main order flow uses `+62 878-6180-8065`, while the footer owner link uses `+62 819-9937-6938`. Confirm whether both should remain and document the purpose of each.

4. Improve product credibility.

   Add a compact product/menu section with actual cans, recipe groups, and storage/delivery notes. The current order form is useful, but shoppers may want more confidence before opening WhatsApp.

5. Update date-sensitive content.

   The footer still says `2025`. Either update it for 2026 or render the year dynamically.

6. Add basic quality checks.

   Add a script for formatting markdown/CSS/HTML consistently and consider a simple link check or accessibility smoke test before deployment.

## Design Assessment

The design is directionally right, but it can be made calmer and more credible.

Keep:

- warm handmade palette
- Bali/local emphasis
- clear WhatsApp CTA
- trust badges
- founder quote
- single-page structure

Improve:

- reduce emoji reliance in critical UI
- show more actual product packaging and food
- make the order form feel like the main conversion object
- remove inactive visual systems from CSS
- make spacing and section rhythm more consistent

The site should not become a dense ecommerce catalog. It should feel like a beautiful local product page with a very direct ordering path.

## Suggested Content Structure

Best current order:

1. Hero: brand, product, Bali, WhatsApp CTA.
2. Product proof: what is inside the cans and why it is different.
3. Menu/order: dog, cat, puppy recipes and quantity.
4. How delivery works.
5. Founder/local proof.
6. Contact.

The current site mostly follows this, but the product/menu proof could be stronger before the customer reaches the form.

## When To Add More Tooling

Add tooling only when it solves a real problem:

- Add a CMS when a non-technical owner updates products weekly.
- Add routing when SEO requires separate pages for dog food, cat food, delivery, or ingredients.
- Add image optimization workflow when asset size becomes a measurable performance issue.
- Add tests when JavaScript behavior grows beyond the current simple order form.

Until then, keep the site static and maintainable.
