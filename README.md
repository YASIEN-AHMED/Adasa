# 📷 Adasa (عدسة) - Photography Blog & Magazine

A modern **Arabic RTL** web app for a photography blog: discover articles, explore by category, read full posts with author info, and subscribe to the newsletter.

## ✨ Features

- 🎯 **Home**: Hero section, featured articles, category cards, latest posts, newsletter signup
- 🎯 **Blog**: List all articles, filter by category (إضاءة، بورتريه، مناظر طبيعية، تقنيات، معدات)
- 🎯 **Recipe / Article Details**: Full content, ingredients/steps-style sections, author card, related info
- 🎯 **Nutrition-like Analysis**: Reading time, category badge, date, and author for each article
- 🎯 **Modern UI/UX**: Glass-style cards, gradients, smooth hover effects, Cairo font
- 🎯 **Responsive Layout**: Works on desktop and mobile with Bootstrap grid
- 🎯 **Static Data**: Articles and site info from in-app services (no external API required)

> Note: Content is **static** (services with seed data). You can later connect to a real API or CMS.

## 🛠️ Technologies Used

- **Angular 20** (Standalone components, lazy-loaded routes)
- **TypeScript 5.9**
- **HTML5** / **CSS3** (including custom styles & CSS variables)
- **Bootstrap 5**
- **Font Awesome**
- **RxJS**
- **Angular Localize** (Arabic locale for dates)

## 📁 Project Structure

```
Adasa Angular/
│
├── angular.json
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.app.json
├── public/                 # Static assets
├── src/
│   ├── index.html
│   ├── main.ts
│   ├── styles.css          # Global styles, variables, utilities
│   └── app/
│       ├── app.ts
│       ├── app.config.ts
│       ├── app.routes.ts
│       ├── core/           # Services & models
│       │   ├── models/
│       │   └── services/
│       ├── common/         # Shared UI components
│       │   └── components/
│       │       ├── badge/
│       │       ├── blog-post-card/
│       │       ├── category-card/
│       │       ├── glass-card/
│       │       ├── article-content/
│       │       └── ...
│       ├── layout/         # Shell layout
│       │   ├── navbar/
│       │   └── footer/
│       └── pages/          # Feature pages
│           ├── home/
│           ├── blog/
│           ├── about/
│           ├── privacy/
│           ├── terms/
│           └── not-found/
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18+ recommended)
- **npm** (comes with Node)

### Run locally (Windows / macOS / Linux)

1. Clone or download the project and open a terminal in the project folder.

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

   Or:

```bash
ng serve
```

4. Open your browser at:

- **http://localhost:4200**

### Build for production

```bash
npm run build
```

Output will be in the `dist/` folder (default project name: `assginment`).

## 📋 Usage

### Home

- Browse the hero section and “مقالات مختارة” (featured articles).
- Use “استكشف حسب الموضوع” to jump to categories.
- Check “أحدث المقالات” and the newsletter signup form.

### Blog

- Go to **المدونة** (Blog).
- Use category filters to narrow articles.
- Click any article card to open full details.

### Article details

- Read full content, author info, and reading time.
- Layout supports RTL and Arabic date formatting.

## 🌐 APIs & Integrations

This app **does not** depend on external APIs. All content is provided by in-app services:

- **SiteService**: Site name, tagline, description, social links
- **PostService**: Articles, authors, categories, images (seed data)
- **CategoryService**: Category list and counts

You can later replace these with HTTP calls to your own backend or CMS.

## 🔐 Security Note

- No API keys or secrets are used in the frontend.
- For future backend integration, keep any API keys on the server and call your own endpoints from Angular.

## 🧪 Testing

- Run unit tests:

```bash
npm test
```

- Manually: open DevTools (F12) and check Console and Network for errors.

## 🚀 Deployment

- Build: `npm run build`
- Deploy the contents of the `dist/<project-name>/browser` folder to any static host:
  - **GitHub Pages** (e.g. using `angular-cli-ghpages`)
  - **Netlify**
  - **Vercel**
  - Any web server (Nginx, Apache, etc.)

## 🐛 Known Notes

- Project name in `angular.json` / `package.json` is `assginment`; you can rename it if needed.
- Images and assets are referenced from `public/` or component-relative paths; ensure paths match after build.
- Food Log is not part of this project; this is a photography blog (Adasa / عدسة).

---

## 👨‍💻 Author

<div align="center">

### **Eng. Yasien Ahmed Elkelany**

💼 **Backend .NET Developer** | **Angular Frontend Developer**  
🏢 **General Authority for Investment**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/yasien-ahmed-b8ab41325)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:yasienahmed607@gmail.com)

[🔗 LinkedIn Profile](https://www.linkedin.com/in/yasien-ahmed-b8ab41325) | [📧 Email](mailto:yasienahmed607@gmail.com)

</div>

---

<div align="center">

**Made with ❤️ by Eng. Yasien Ahmed Elkelany**

⭐ Star this repo if you find it helpful!

</div>
