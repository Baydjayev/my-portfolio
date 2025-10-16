# Baydjayev Mulkomon — Portfolio Website

A modern, responsive portfolio website built with React, TailwindCSS, and Framer Motion. It showcases Telegram bot development and web projects with smooth animations, an accessible UI, and a professional layout.

## 🚀 Features

- **Modern design**: Clean white, sky blue, and deep black palette
- **Responsive layout**: Mobile‑first, adapts to all screen sizes
- **Smooth animations**: Framer Motion entrance/hover effects
- **Sections**: Hero, About, Projects, Contact, Footer
- **Contact form**: Mailto integration (no backend required)
- **Accessible**: Semantic HTML and ARIA-friendly patterns
- **SEO-ready**: Helpful meta structure and shareable content

## 🛠️ Tech Stack

- **React 18** (hooks)
- **Vite 4** (dev server and bundler)
- **TailwindCSS 3** (utility-first styling)
- **Framer Motion 10** (animations)
- **PostCSS/Autoprefixer** (CSS processing)

## ✅ Prerequisites

- Node.js 16+ and npm

## 📦 Getting Started

1. Clone or download this repository
   ```bash
   git clone https://github.com/Baydjayev/portfolio.git
   cd portfolio
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Start the dev server (opens on port 3000)
   ```bash
   npm run dev
   ```
4. Visit `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

The optimized build is output to `dist/` and can be deployed to any static host.

## 🔧 Useful Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview the production build locally
- `npm run lint` — Run ESLint checks

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.jsx          # Landing section with animated profile image
│   ├── About.jsx         # Skills and experience with animated bars/timeline
│   ├── Projects.jsx      # Project cards grid with tech chips + GitHub links
│   ├── Contact.jsx       # Mailto form and social links
│   ├── Footer.jsx        # Footer with social links
│   └── Navigation.jsx    # Fixed header with smooth scroll
├── App.jsx               # App shell and section composition
├── main.jsx              # React entry point
└── index.css             # Global styles and Tailwind layers/utilities
public/
└── assets/               # Images used by components
```

## 🎨 Customization

### Colors
Primary palette is configured in Tailwind (see `tailwind.config.js`):
- White: `#ffffff`
- Sky Blue: `#7dd3fc`
- Deep Black: `#0b0b0b`

### Content
- Hero image: replace `/public/assets/profile-image.jpg`
- Contact links/email: edit `src/components/Contact.jsx`
- Projects list: edit `projects` array in `src/components/Projects.jsx`
- Skills/experience: edit `src/components/About.jsx`

### Examples

Add a new project (in `Projects.jsx`):
```jsx
{
  id: 7,
  title: 'Your Project',
  description: 'What it does...',
  image: '/assets/your-image.jpg',
  github: 'https://github.com/yourusername/your-project',
  technologies: ['React', 'TailwindCSS']
}
```

## 🚀 Deployment

### Vercel (recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag & drop the dist/ folder to Netlify Drop, or connect your repo
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# package.json → "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px–1024px
- Desktop: > 1024px

## ⚙️ Performance & UX

- Lazy-load images on project cards
- GPU-friendly, duration-based animations
- Vite tree‑shaking and code‑splitting

## 🧪 Troubleshooting

- Dev server doesn’t open: visit `http://localhost:3000` manually
- Styles not applied: ensure `index.css` imports Tailwind layers and rebuild
- Images not loading: place images under `public/assets/` and reference with `/assets/...`

## 🤝 Contributing

1. Fork the repo
2. Create a branch (`git checkout -b feature/my-change`)
3. Commit (`git commit -m "Describe change"`)
4. Push (`git push origin feature/my-change`)
5. Open a PR

## 📄 License

Open source under the MIT License.

## 📞 Contact

**Baydjayev Mulkomon**
- Telegram: [@Baydjayev](https://t.me/Baydjayev)
- Email: itmulkomon@gmail.com
- GitHub: [@Baydjayev](https://github.com/Baydjayev)

---

Built with ❤️ using React, TailwindCSS, and Framer Motion.