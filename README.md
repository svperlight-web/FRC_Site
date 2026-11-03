# FRC Knowledge — Free edition

A mobile-friendly, static FRC and robotics knowledge website. This edition is designed to run without paid APIs, API keys, subscriptions, or a backend.

## Search behavior
- Searches the built-in article library instantly and ranks matches by title, tags, summary, and article text.
- Creates targeted external search links for official FIRST resources, WPILib, REV, CTRE, Chief Delphi, GitHub, and broader robotics/engineering topics.
- External links open search results on Google or Bing. This site does not scrape those services, fetch their results automatically, or generate AI answers.
- The local library can be expanded by adding reviewed articles to the `articles` array in `app.js`.

## Free hosting with GitHub Pages
1. Upload the contents of this folder to the root of the public `frc-knowledge` GitHub repository. Replace the existing files with these versions.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch **main** and folder **/(root)**, then save.
5. Wait for GitHub Pages to publish the site. The public URL will appear in the Pages settings.
6. On iPhone, open the URL in Safari, tap Share, then **Add to Home Screen**.

## Files
- `index.html` — page structure
- `styles.css` — visual design
- `app.js` — local article database, ranking, and external search links
- `manifest.webmanifest` and `sw.js` — installable/offline PWA support
- `icons/` — app icon

## Important notes
- This project has no backend and requires no secrets or environment variables.
- GitHub Pages is intended for static sites. This edition does not need Vercel.
- Search engine links are external search pages, not live search results embedded in FRC Knowledge.
- Competition rules change. Always verify decisions against the current official FIRST manual, updates, and Q&A.
- FRC Knowledge is an independent community project and is not affiliated with FIRST.
