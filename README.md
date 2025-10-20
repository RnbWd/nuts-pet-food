# Nuts Pet Food Website

This repository contains the marketing site for Nuts Pet Food. It is built with [Vite](https://vitejs.dev/) and vanilla JavaScript.

## Quick start

1. Install Node.js 18 or later from [nodejs.org](https://nodejs.org/).
2. Install the project dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the printed URL (usually `http://localhost:5173`) in your browser to preview changes in real time.

## Editing the site

If you're comfortable editing HTML, CSS, and JavaScript directly, the key files live in the [`src/`](src) folder:

- [`src/index.html`](src/index.html) – page structure and text.
- [`src/style.css`](src/style.css) – colors, fonts, and layout.
- [`src/main.js`](src/main.js) – light JavaScript that wires the page together.

For a step-by-step walkthrough aimed at new contributors with little to no coding experience, read the [Beginner Editing Guide](docs/beginner-guide.md).

## Deploying

The site automatically builds and publishes to GitHub Pages whenever you push changes to the `main` branch. You don't need to run any build commands—just follow the Git workflow below to publish your changes.

### Using Git in Cursor IDE (Recommended for Beginners)

Cursor has a built-in interface that makes working with Git easier:

1. **Pull the latest changes** (always do this first to get any updates):
   - Click the Source Control icon in the left sidebar (it looks like a branching diagram).
   - Click the `...` menu at the top of the Source Control panel.
   - Select **Pull** from the dropdown menu.

2. **Make your edits** to any files in the `src/` folder.

3. **Stage your changes**:
   - Open the Source Control panel (same icon as step 1).
   - You'll see a list of files you've changed.
   - Hover over each file and click the `+` icon to stage it (or click the `+` next to "Changes" to stage all files at once).

4. **Commit your changes**:
   - Type a brief message in the text box at the top describing what you changed (e.g., "Updated homepage text" or "Changed logo size").
   - Click the checkmark button (✓) or press `Cmd+Enter` to commit.

5. **Push to GitHub**:
   - Click the `...` menu again.
   - Select **Push** to upload your changes.
   - Your site will automatically update in a few minutes!

### Using Git from the Command Line (Alternative)

If you prefer typing commands, open the terminal in Cursor (`Terminal` → `New Terminal`) and run:

1. **Pull the latest changes:**

   ```bash
   git pull
   ```

2. **Make your edits** to files, then stage them:

   ```bash
   git add .
   ```

   This stages all changed files. To stage a specific file, replace `.` with the file path (e.g., `git add src/index.html`).

3. **Commit your changes:**

   ```bash
   git commit -m "Your message describing the changes"
   ```

4. **Push to GitHub:**
   ```bash
   git push
   ```

After pushing, GitHub Pages will automatically rebuild and deploy your site within a few minutes.

## License

This project is private and not licensed for redistribution.
