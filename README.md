# Nuts Pet Food Website

Marketing and ordering site for Nuts Pet Food, a local Bali pet food supplier making canned dog and cat food from locally sourced, organic ingredients. The site is intentionally simple: explain the food, show the brand, and move customers to WhatsApp ordering quickly.

The site is built with [Vite](https://vite.dev/) and vanilla HTML, CSS, and JavaScript. It is hosted on GitHub Pages at `nutspetfood.com`.

## Current Site Shape

- Single-page public website served from `src/index.html`.
- Static assets, icons, favicons, and metadata files live under `src/images/`, `src/fonts/`, and `src/public/`.
- Styling is centralized in `src/style.css`.
- Lightweight behavior lives in `src/main.js`: smooth scrolling, scroll animation, nav state, product preview updates, and WhatsApp order message creation.
- GitHub Pages deploys the Vite production build from `dist/` using `.github/workflows/static.yml`.

## Quick Start

Use Node.js 20 LTS or newer. The GitHub Pages workflow uses `node-version: lts/*`, and Vite 7 expects a modern Node runtime.

```bash
npm install
npm run dev
```

Open the printed local URL, usually `http://localhost:5173/`.

Before proposing or merging a change, run:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Important Files

- `src/index.html` - page structure, copy, SEO metadata, WhatsApp links, and form options.
- `src/style.css` - visual system, responsive layout, components, and section styles.
- `src/main.js` - interactive behavior and product data used by the quick order form.
- `src/images/` - product, logo, pet, sticker, and background assets.
- `src/fonts/` - local display font assets used by the brand.
- `src/public/` - files copied to the site root, including favicon assets, `robots.txt`, `sitemap.xml`, and `site.webmanifest`.
- `vite.config.mjs` - Vite config. The project root is `src`, and builds are written to top-level `dist`.
- `.github/workflows/static.yml` - GitHub Pages deployment workflow.
- `docs/beginner-guide.md` - non-technical editing guide.
- `docs/site-structure.md` - page, asset, build, and deployment architecture.
- `docs/brand-and-theme.md` - brand voice, visual direction, and design rules for contributors.
- `docs/improvement-notes.md` - current assessment and recommended structure/design/code improvements.
- `AGENTS.md` - operating instructions for AI coding agents.

## Brand Direction

Nuts should feel local, trustworthy, handmade, and warm. The customer should understand within a few seconds:

- Nuts makes canned pet food in Bali.
- The food uses real, locally sourced, organic ingredients.
- There are no preservatives, fillers, or artificial shortcuts.
- Ordering happens mainly through WhatsApp.

Keep the tone authentic and direct. Avoid generic luxury pet brand language, vague wellness claims, or overproduced copy that makes the business feel less personal.

## Editing Guidance

For small copy changes, edit `src/index.html`.

For design changes, start with the CSS variables at the top of `src/style.css`, then adjust the section-specific styles lower in the file. Do not scatter one-off colors and spacing values unless the exception is deliberate.

For product or ordering changes, update both:

- the `<select id="orderProduct">` options in `src/index.html`
- the matching `productData` entries in `src/main.js`

Those two sources currently need to stay in sync. A future improvement should generate the form options from one product data source.

## Deployment

Pushing to `main` triggers `.github/workflows/static.yml`:

1. install dependencies with `npm ci`
2. run `npm run build`
3. upload `dist/`
4. publish to GitHub Pages

The custom domain is configured through `CNAME`.

## Is Vite The Right Choice?

Yes, Vite is reasonable for this site right now. The site is static, asset-heavy, and simple enough that a full framework would add more complexity than value. Vite gives fast local preview, asset handling, production minification, and a clean GitHub Pages build.

The bigger issue is not Vite. The site would benefit more from cleaning up content structure, consolidating product data, pruning unused code, and documenting design constraints than from changing frameworks.

## License

This project is private and not licensed for redistribution.
