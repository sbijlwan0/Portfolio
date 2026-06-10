# Sunil Bijalwan — Portfolio

A personal portfolio website built with **Angular 17**, designed to be hosted on **GitHub Pages**.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run locally
npm start
# → http://localhost:4200
```

## 📦 Build & Deploy to GitHub Pages

### One-time setup
1. Create a GitHub repository named `sunil-portfolio` (or any name you prefer)
2. Push this project to the `main` branch
3. Go to **Settings → Pages → Source → GitHub Actions**
4. The workflow in `.github/workflows/deploy.yml` will auto-deploy on every push

> **Note:** If your repo name is different from `sunil-portfolio`, update the `--base-href` flag in `package.json` → `build:prod` script:
> ```
> "build:prod": "ng build --configuration production --base-href /YOUR-REPO-NAME/"
> ```

### Manual build
```bash
npm run build:prod
# Output: dist/sunil-portfolio/browser/
```

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/       ← Sticky nav with mobile hamburger
│   │   ├── hero/         ← Typewriter animation hero
│   │   ├── about/        ← About + JSON code card
│   │   ├── skills/       ← Skill groups grid
│   │   ├── experience/   ← Tabbed work history
│   │   ├── domains/      ← Industry domains grid
│   │   └── contact/      ← Contact links
│   ├── app.component.*
│   └── app.module.ts
├── styles.css             ← Global design tokens
└── main.ts
```

## 🎨 Design

- **Colors:** Deep navy base, electric indigo accent, cyan highlights
- **Fonts:** Space Grotesk (display), Inter (body), JetBrains Mono (code)
- **Signature:** Animated terminal typewriter in the hero

## 📝 Customization

- Update contact links in `contact.component.ts`
- Add your LinkedIn/GitHub URLs in the same file
- Replace `src/assets/resume.pdf` with your actual resume PDF
- Tweak colors in `src/styles.css` under `:root`
