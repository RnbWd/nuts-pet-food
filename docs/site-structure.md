# Site Structure

This document maps the current Nuts Pet Food website for human contributors and AI coding agents.

## Build And Hosting

The project uses Vite with `root: 'src'` in `vite.config.mjs`. That means `src/index.html` is the entry page, not a top-level `index.html`.

Production output is written to top-level `dist/`:

```js
build: {
  outDir: '../dist';
}
```

GitHub Pages deployment is handled by `.github/workflows/static.yml`. It installs dependencies, runs `npm run build`, uploads `dist/`, and deploys the artifact. The domain is configured in `CNAME`.

## Public Page

`src/index.html` is a single-page site with these live sections:

- `nav` - logo, About link, Contact link, WhatsApp order CTA.
- `#hero` - primary brand statement, logo, trust badges, order CTA.
- `#about` - founder/product explanation and main proof points.
- social proof section - founder quote.
- menu preview section - product category proof cards generated from product data.
- `#order` - delivery promise, quick order form, product preview, order steps.
- `#contact` - WhatsApp, email, and Instagram contact options.
- `footer` - copyright and direct owner WhatsApp.

Removed historical slideshow, gallery, floating CTA, and product modal remnants should stay removed unless the business explicitly asks to bring them back.

## Styling

`src/style.css` owns all styling.

High-level organization:

- local fonts
- CSS variables
- base body/focus/motion styles
- buttons and cards
- navigation
- hero and trust badges
- sections and order form
- menu preview and order form
- why-choose, social proof, contact, footer
- responsive media queries

The current visual system is warm and food-oriented:

- cream/peach backgrounds
- orange/gold/red accents
- dark ink text
- rounded, friendly components
- Mabook as a display font
- Inter as the body font

When changing colors, start at `:root`. When changing a section, search for the section class first instead of adding duplicate selectors at the bottom.

## JavaScript

Product data lives in `src/data/products.js`.

`src/order.js` provides pure helpers for:

- quantity normalization
- WhatsApp order messages
- WhatsApp order URLs

`src/main.js` provides:

- smooth anchor scrolling
- scroll-triggered animation classes
- nav scrolled state
- menu preview rendering
- quick order preview updates
- WhatsApp order URL generation

## Assets

Images live in `src/images/`.

Important asset groups:

- `nuts-label.png`, `nuts-logo.png`, `logo-one.png` - brand marks.
- `dog-transparent/`, `cat-transparent/`, `puppy-transparent/`, `kitten-transparent/` - pet imagery in multiple sizes/formats.
- `dog-bike/` - responsive dog-bike imagery.
- sticker and icon files - trust markers and product graphics.
- `nuts-video.mp4` - story/media asset currently not visible on the page.

Favicons, manifest, robots, and sitemap live in `src/public/` and are served from the site root.

## Ordering Flow

The visible order flow is intentionally low-friction:

1. customer chooses a recipe
2. customer chooses quantity
3. product preview updates
4. submit opens WhatsApp with a prefilled message

The WhatsApp number used everywhere is `+62 878-6180-8065`.

## Data Duplication

Product information is centralized in `src/data/products.js`. The order select and menu preview are rendered from that data so recipe names and WhatsApp messages cannot drift apart.
