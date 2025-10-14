# Beginner Editing Guide

Welcome! This guide walks through the basics of updating the Nuts Pet Food website even if you have never written code before. Set aside 30–45 minutes for your first edit and follow the steps in order.

---

## 1. Set up your tools

1. **Install Node.js**
   - Visit [nodejs.org](https://nodejs.org/), download the "LTS" installer for your computer, and run it. This installs both Node.js and the `npm` tool we will use.
2. **Install a code editor**
   - Download [Visual Studio Code](https://code.visualstudio.com/). It is free and friendly for beginners.
3. **Download the project files**
   - Ask an existing developer to invite you to the GitHub repository.
   - Click the green **Code** button on GitHub and choose **Download ZIP**.
   - Unzip the folder somewhere easy to find (for example, your Desktop).

> 💡 *Tip:* Whenever you see text formatted like `this`, it means you should type the command exactly as shown.

---

## 2. Open the project in VS Code

1. Launch **VS Code**.
2. Click **File → Open Folder…** and choose the folder you unzipped (it should be named `nuts-pet-food`).
3. VS Code will show the project files in the left sidebar. The most important files are inside the `src` folder:
   - `index.html` – controls the words and structure on the page.
   - `style.css` – controls colors, spacing, and fonts.
   - `images/` – stores pictures used on the site.

---

## 3. Install project dependencies

We only have to do this the first time on a computer.

1. In VS Code choose **Terminal → New Terminal**.
2. A panel will open at the bottom. Make sure it shows the project folder path (ending in `nuts-pet-food`).
3. Run the install command:
   ```bash
   npm install
   ```
   - The first run can take a few minutes. Wait until the command finishes and you see a new prompt (usually starting with `>` or the folder name).

---

## 4. Start the preview server

1. In the same terminal run:
   ```bash
   npm run dev
   ```
2. After a few seconds you will see a message with a URL such as `http://localhost:5173/`.
3. Hold **Ctrl (or Cmd) + click** the URL to open it in your browser. This is your live preview—any saved changes will refresh automatically.

> 🛑 Leave this terminal window running while you edit. If you close it, the preview will stop.

---

## 5. Make a simple change

1. In VS Code click `src/index.html`.
2. Find the text you want to change (for example, the main headline).
3. Edit the text between the tags. For example:
   ```html
   <h1>Healthy, Crunchy Treats for Your Pets</h1>
   ```
4. Press **Ctrl/Cmd + S** to save. Switch back to the browser—your change should appear immediately.

### Changing a picture

1. Copy your new image into the `src/images/` folder.
2. In `index.html`, update the `<img>` tag to point to the new file name:
   ```html
   <img src="./images/new-treats-bag.jpg" alt="Bag of Nuts Pet Food treats" />
   ```
3. Save the file to see the updated picture in the browser.

### Adjusting colors or fonts

1. Open `src/style.css`.
2. Look for the section that matches what you want to change (for example, the header background).
3. Replace the color value with a new one:
   ```css
   .hero {
     background-color: #f3c06b;
   }
   ```
4. Save the file and check the preview.

---

## 6. Review your work

- Scroll through the preview site to make sure everything looks right.
- Check on a phone or resize the browser window to confirm the layout still works.
- Ask a teammate to review if you are unsure about a change.

---

## 7. Share your changes

Once you are happy with the edits you have two options:

### Option A – Ask a developer to publish

1. Leave the `nuts-pet-food` folder in place with your saved changes.
2. Let the team know which files you updated. They can pull your edits into the official Git repository and deploy them.

### Option B – Learn Git basics (recommended)

1. Ask a teammate to help you set up Git and GitHub Desktop.
2. Commit your changes with a clear message (for example, "Update hero headline and hero image").
3. Open a Pull Request for review.

---

## 8. Stopping the preview

- In the terminal window showing the dev server press **Ctrl + C** to stop it.
- You can restart it any time with `npm run dev`.

---

## Need help?

- Share screenshots or describe what you tried—no question is too small.
- Common fixes:
  - If the terminal says a command is unknown, make sure Node.js is installed and that you reopened VS Code after installing it.
  - If the browser does not refresh, confirm the dev server is still running.

Happy editing! 🎉
