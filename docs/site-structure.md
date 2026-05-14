# Site Structure

This document maps the current Nuts Pet Food website for human contributors and AI coding agents.

## Build And Hosting

The project uses Vite with `root: 'src'` in `vite.config.mjs`. That means `src/index.html` is the entry page, not a top-level `index.html`.

Production output is written to top-level `dist/`:

```js
build: {
  outDir: '../dist'
}
```

GitHub Pages deployment is handled by `.github/workflows/static.yml`. It installs dependencies, runs `npm run build`, uploads `dist/`, and deploys the artifact. The domain is configured in `CNAME`.

## Public Page

`src/index.html` is a single-page site with these live sections:

- `nav` - logo, About link, Contact link, WhatsApp order CTA.
- `#hero` - primary brand statement, logo, trust badges, order CTA.
- `#about` - founder/product explanation and main proof points.
- social proof section - founder quote.
- `#order` - delivery promise, quick order form, product preview, order steps.
- `#contact` - WhatsApp, email, and Instagram contact options.
- `footer` - copyright and direct owner WhatsApp.

There are also inactive remnants:

- commented slideshow/about section in `src/index.html`
- commented floating WhatsApp CTA
- root-level product modal that is not used by the visible quick order form

Do not assume commented sections are production intent. Treat them as historical experiments unless the user explicitly asks to restore them.

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
- inactive slideshow/product/modal/gallery styles
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

`src/main.js` provides:

- smooth anchor scrolling
- scroll-triggered animation classes
- nav scrolled state
- product data for order previews
- quick order preview updates
- WhatsApp order URL generation

It also contains legacy or inactive behavior:

- category navigation for absent `.category-btn` and `.product-section` elements
- product modal behavior for absent `.product-card` elements
- commented slideshow logic
- gallery filtering/lightbox logic for absent gallery elements
- story video autoplay for absent `#storyVideo`

Guard clauses prevent most inactive code from breaking, but this file should be simplified when there is time.

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

The WhatsApp number used by the main order flow is `+62 878-6180-8065`.

The footer also includes an owner contact number: `+62 819-9937-6938`.

Before changing either number, confirm which number should receive customer orders.

## Data Duplication

Product information currently appears in both `src/index.html` and `src/main.js`. This is the most important structural weakness.

Until it is refactored, changes to recipe names or categories must update:

- the `<option>` labels and values in `src/index.html`
- the corresponding `productData` keys and display content in `src/main.js`

If these drift, the form may show one product name but send another in WhatsApp.
