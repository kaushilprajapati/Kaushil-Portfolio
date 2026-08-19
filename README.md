# Kaushil Prajapati — Portfolio

A modern, animated personal portfolio for **Kaushil Prajapati**, Full-Stack Web & Mobile App Developer. Showcases nine flagship production builds across HR tech, food, sustainability, SaaS, sports, logistics, finance and fitness.

Built with **Vite + React + TypeScript + Tailwind CSS v4 + Framer Motion**, and deployed automatically to **GitHub Pages**.

---

## ✨ Features

- Premium dark theme with a warm "solar gold" accent and grain texture
- Animated hero, scroll-reveal sections, scroll progress bar, marquee
- Nine case studies with a rich, keyboard-dismissable modal (challenge, solution, highlights, tech, screenshot gallery, live link)
- Fully responsive (mobile-first) with a mobile nav
- Optimized WebP imagery (~1.9 MB total vs. 24 MB of source PNGs)
- SEO + Open Graph tags, custom favicon
- Zero-config GitHub Pages deploy via GitHub Actions

---

## 🚀 Quick start (local)

```bash
npm install
npm run dev
```

Open the printed local URL (default `http://localhost:5173`).

Build a production bundle:

```bash
npm run build
npm run preview
```

---

## 📸 Add your profile photo

The hero shows a monogram placeholder until you drop in a photo.

1. Save your headshot as **`public/profile.jpg`** (portrait / 4:5 works best).
2. That's it — the hero picks it up automatically.

---

## 🌐 Deploy to GitHub Pages

The repo ships with a GitHub Actions workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) that builds and publishes on every push to `main`. No build config to touch — asset paths are relative, so it works under `https://<user>.github.io/<repo>/` or a custom domain.

**One-time setup:**

1. Create a new repository on GitHub (e.g. `portfolio` or `<username>.github.io`).
2. Push this project:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: portfolio"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Wait for the **Deploy to GitHub Pages** action to finish (Actions tab). Your site goes live at the URL shown in the workflow summary.

Every later `git push` to `main` redeploys automatically.

> **Custom domain?** Add your domain under Settings → Pages, and drop a `CNAME` file (containing just the domain) into `public/`.

---

## 🗂️ Project structure

```
public/
  images/            # optimized WebP screenshots, grouped by project
  favicon.svg
  profile.jpg        # ← add your photo here
src/
  components/        # Navbar, Hero, Work, ProjectModal, About, Stack, Process, Contact, Footer …
  data/
    projects.ts      # all nine case studies
    site.ts          # bio, services, tech stack, process, contact
  App.tsx
  index.css          # design tokens + Tailwind theme
.github/workflows/deploy.yml
```

## ✏️ Editing content

- **Projects** → `src/data/projects.ts`
- **Bio / services / tech / contact links** → `src/data/site.ts`
  (update the `upwork`, `linkedin`, `github` URLs in `CONTACT` with your real profiles)

---

© 2026 Kaushil Prajapati. Modern software. Built right.
