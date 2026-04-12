# 🌐 Wasit Manat — Personal Portfolio

> A modern, fully responsive personal portfolio website for a Computer Science & Engineering student — built with pure HTML, CSS, and JavaScript. No frameworks. No dependencies. Just open `index.html` and go.

[![Live Demo](https://img.shields.io/badge/Live-Demo-00c9a7?style=flat-square&logo=github)](https://wasitmanat.github.io)
[![GitHub](https://img.shields.io/badge/GitHub-wasitmanat-0f172a?style=flat-square&logo=github)](https://github.com/wasitmanat)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-wasitmanat-0a66c2?style=flat-square&logo=linkedin)](https://linkedin.com/in/wasitmanat)

---

## ✨ Features

- **Dark / Light Mode** — toggle with one click, preference saved in `localStorage`
- **Typing Animation** — cycles through roles in the hero section
- **Scroll Fade-In** — staggered reveal animations on scroll using IntersectionObserver
- **Active Nav Highlight** — navbar link updates as you scroll through sections
- **Project Filtering** — filter cards by category (Web / C++ / Other)
- **Animated Skill Bars** — progress bars animate into view on scroll
- **Live GitHub Stats** — streak, top languages, and contribution graph via `github-readme-stats`
- **Responsive** — mobile, tablet, and desktop layouts
- **Downloadable Resume** — direct PDF download button in hero
- **Frontend Contact Form** — ready to wire up to Formspree or any backend
- **No frameworks** — zero npm, zero build step, zero dependencies

---

## 🗂️ Project Structure

```
portfolio/
├── index.html       # Main HTML — all sections and content
├── styles.css       # All styling — variables, layout, animations, responsive
├── script.js        # Theme toggle, typing animation, scroll effects, filtering
├── CV__WASIT_MANAT.pdf  # Your resume (add this file for the download button)
└── README.md
```

---

## 🚀 Deploy on GitHub Pages

1. **Fork or push** this repo to your GitHub account
2. Go to **Settings → Pages**
3. Under **Source**, select `Deploy from a branch`
4. Choose `main` branch → `/ (root)` → click **Save**
5. Your site will be live at `https://<your-username>.github.io/<repo-name>`

> **Tip:** If your repo is named exactly `wasitmanat.github.io`, it deploys to `https://wasitmanat.github.io` directly.

---

## 🛠️ Customization Guide

### Add Your Photo
In `index.html`, find the `avatar-placeholder` block and replace it:
```html
<!-- Remove this block -->
<div class="avatar-placeholder"> ... </div>

<!-- Add this instead -->
<img src="photo.jpg" alt="Wasit Manat" class="avatar-img" />
```
Place `photo.jpg` in the root folder alongside `index.html`.

### Connect the Contact Form
The form currently simulates a send. To make it real, sign up at [formspree.io](https://formspree.io) and replace the `setTimeout` block in `script.js`:

```js
// In handleFormSubmit(), replace the setTimeout with:
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: e.target.name.value,
    email: e.target.email.value,
    message: e.target.message.value,
  }),
});
```

### Add a New Project
In `index.html`, duplicate any `.project-card` block inside `#projectsGrid` and update the content. Set `data-category` to `web`, `cpp`, or `other` for filtering:
```html
<div class="project-card fade-in" data-category="web">
  ...
</div>
```

### Update Typed Roles
In `script.js`, edit the `phrases` array:
```js
const phrases = [
  'CSE Student',
  'Your Custom Role',
  ...
];
```

---

## 🎨 Design System

| Token | Value |
|---|---|
| Accent (light) | `#00c9a7` |
| Accent (dark) | `#64ffda` |
| Display font | DM Serif Display |
| Body font | Outfit |
| Mono font | DM Mono |
| Base radius | 12px |

All colors are managed via CSS custom properties in `:root` and `[data-theme="dark"]` — easy to retheme by changing a few variables at the top of `styles.css`.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Designed & built with ♥ in Dhaka, Bangladesh by <a href="https://github.com/wasitmanat">Wasit Manat</a></p>
