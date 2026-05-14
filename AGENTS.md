# AGENTS.md

Instructions for AI coding agents working on the Nuts Pet Food website.

## Project Summary

This is the GitHub Pages website for Nuts Pet Food, a Bali-based supplier of canned food for dogs and cats. The business position is simple and specific: locally made canned pet food, locally sourced organic ingredients, no preservatives or fillers, and WhatsApp-first ordering.

The implementation is a Vite static site with vanilla HTML, CSS, and JavaScript. Do not introduce a larger framework unless the user explicitly asks for it and the tradeoff is documented.

## Commands

```bash
npm install
npm run dev
npm test
npm run build
npm run preview
npm run format
```

Run `npm test` and `npm run build` before handing off code changes. For markdown-only changes, build is optional but still useful when documentation references project commands or deployment behavior.

## Architecture

- `src/index.html` is the only public page.
- `src/style.css` contains the full visual system and responsive styles.
- `src/main.js` contains DOM behavior.
- `src/data/products.js` is the single product/category/contact source.
- `src/order.js` contains pure WhatsApp order helpers.
- `src/public/` is copied to the web root by Vite because `root` is set to `src`.
- `dist/` is generated and ignored by git.
- `.github/workflows/static.yml` deploys `dist/` to GitHub Pages on pushes to `main`.

See `docs/site-structure.md` for a more detailed map.

## Brand And Product Rules

Preserve these facts unless the user says they changed:

- Business name: Nuts Pet Food.
- Location: Bali, Indonesia.
- Product: canned pet food for dogs and cats.
- Ingredients: locally sourced, organic, natural ingredients.
- Ordering channel: WhatsApp is primary.
- Brand feel: simple, authentic, warm, handmade, local, beautiful.

Avoid making the site feel like a generic SaaS landing page or a clinical veterinary product. Keep the tone human and concrete.

See `docs/brand-and-theme.md` before changing layout, copy, colors, typography, imagery, or calls to action.

## Editing Rules

- Keep the first screen focused on brand, product, Bali, and ordering.
- Keep WhatsApp ordering easy to find in the nav, hero, order section, and contact section.
- Prefer direct content edits over abstract component work.
- Keep dependencies minimal.
- Do not add React, routing, CMS tooling, Tailwind usage, or analytics by default.
- Maintain accessibility basics: meaningful alt text, visible focus styles, semantic headings, and keyboard-safe interactions.
- Keep mobile behavior first. Many customers will arrive from Instagram, WhatsApp, or mobile search.

## Product Data

Product options are generated from `src/data/products.js`. When changing recipes, categories, prices, images, or the WhatsApp number, update that file first and run `npm test`.

## Known Codebase Issues

- `src/style.css` is still the largest file and should stay focused on active sections only.
- Product names, ingredients, and WhatsApp copy should be treated as customer-facing business content, not placeholder code.

See `docs/improvement-notes.md` for prioritized cleanup ideas.

## Safe Change Pattern

1. Read `README.md`, this file, and any relevant file under `docs/`.
2. Inspect the actual HTML/CSS/JS before editing.
3. Make the smallest coherent change.
4. Run `npm test`.
5. Run `npm run build`.
6. If the change affects layout, preview on mobile and desktop widths.
7. Summarize changed files and any remaining risk.

## Design Judgment

The current design direction is directionally right: warm, handmade, single-page, WhatsApp-first. The structure is also mostly right for a local supplier. The main risks are clutter, stale code, and duplication. Prefer refinement and cleanup over a redesign.
