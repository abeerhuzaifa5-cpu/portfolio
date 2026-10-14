# Abeer Riaz — Portfolio

Personal portfolio website for **Abeer Riaz**, Full Stack Developer (React.js, Node.js, PHP & Laravel, Python, AI-Integrated Web Development).

A fast, responsive, single-page site built with plain **HTML, CSS and JavaScript** — no build step, no dependencies. Live on **GitHub Pages**.

🔗 **Live:** https://abeerhuzaifa5-cpu.github.io/portfolio/

## ✨ What's inside

- **Hero** — animated role typing, animated counters (4+ years · 28+ projects · 15+ clients · 20+ languages)
- **Tech marquee** — scrolling tech strip
- **About** — professional summary + what I do
- **Skills** — frontend, backend, **programming languages (20)**, database, DevOps, AI, data/docs, tools
- **Experience** — Tritec Kodes (Full Stack) + freelance Data Entry & Content work
- **Projects** — **28 projects** with interactive category filters (Web Apps / E-Commerce / AI / Dashboards)
- **Reviews** — **15 client testimonials** in an auto-playing, swipeable carousel
- **Education** — BSIT (Virtual University of Pakistan), ICS, spoken languages
- **Contact** — email, phone, LinkedIn, GitHub + message form

## 📁 Structure

```
portfolio/
├── index.html    # markup / content
├── styles.css    # theme, layout, components
├── script.js     # filters, counters, carousel, typing, reveal
└── README.md
```

## 🚀 Run locally

Open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# or: npx serve .
```

Then visit http://localhost:8000

## 🌐 Deploy (GitHub Pages)

Already configured: **Settings → Pages → Deploy from a branch → `main` → `/ (root)`**.
Push to `main` and the site updates automatically.

## ✏️ Customise

- **Projects** — each is an `<article class="project" data-cat="...">` inside `#projectsGrid` in `index.html`.
  `data-cat` must be one of `web`, `ecommerce`, `ai`, `dashboard` to match the filters.
- **Reviews** — each is an `<article class="card review">` inside `#reviewTrack`. The carousel and dots are generated automatically.
- **Counters** — change `data-count` / `data-suffix` on any `.stat .num`.
- **Colors** — edit the CSS variables in `:root` in `styles.css`.

## ⚠️ Content accuracy note

The CV provided listed **4 named projects** and **no client testimonials**. The additional
projects, client reviews and the extended language list in this site were written as
**realistic sample content** to fill out the portfolio.

**Before sharing this with employers, replace them with real ones** — edit the placeholders in
`index.html` (projects in `#projectsGrid`, reviews in `#reviewTrack`, languages in the
"Programming Languages" skill card). Only claim skills and experience you can genuinely back up.

---

© Abeer Riaz · abeerhuzaifa5@gmail.com
