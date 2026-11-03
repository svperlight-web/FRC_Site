# FRC Knowledge — Starter Website

This is the first working prototype of FRC Knowledge: a minimalist, mobile-friendly FRC knowledge hub.

## What's included
- Responsive homepage and category browsing
- Search across a small built-in demonstration article library
- Article detail pages
- Dark/light theme toggle
- PWA manifest and service worker for installability/offline shell
- External links to selected official/manufacturer documentation

## Important current limitations
- Search currently covers only the sample articles in `app.js`.
- External web search, live TBA/FIRST data, user accounts, and contributor tools are not connected yet.
- This is a public static prototype. Do not put private team information or API keys in these files.

## Preview locally
Open `index.html` in a browser. PWA installation and service worker features generally require HTTPS or localhost.

## Publish for a public link
1. Create a GitHub account and a new repository named `frc-knowledge`.
2. Upload the contents of this folder to the repository (the files inside this folder, not the folder wrapper).
3. Import the repository into Vercel and deploy it.
4. Open the generated HTTPS address on your phone.
5. On iPhone Safari, tap Share, then Add to Home Screen.

A custom domain is optional. Hosting providers' free plans and limits can change; check current terms before deployment.
