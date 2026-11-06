# Executive Creative Developer & Senior Frontend Engineer Portfolio

An award-winning, premium personal portfolio website engineered from scratch with **Vite**, **React 18**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Featuring a sophisticated modern dark aesthetic, bold **Urbanist** typography, deep charcoal/near-black backgrounds (`#070709`), and refined **electric-lime accents** (`#d4ff00`).

---

## ✨ Features & Architecture Highlights

- **Visual Direction & Art Direction**: Inspired by premier creative developer portfolios and high-end design agencies. Clean layout hierarchy, deliberate whitespace, and zero visual clutter.
- **Urbanist Typography**: Integrated Google Fonts weights (300 to 900) for oversized headings, crisp subheads, and typographic rhythm.
- **Electric-Lime Accents**: Tasteful neon lime touches (`#d4ff00` / `#ccff00`) for focal points, interaction feedback, status pills, and glow states.
- **Interactive Sections Included**:
  1. **Hero Section**: Monogram branding, live availability status, oversized headline, personal tagline, prominent 'View Projects' and 'Contact Me' CTAs, social links, and live metrics ticker.
  2. **About Me**: Narrative storytelling, three core technical pillars (*Performance as Aesthetic*, *Craft in Micro-Details*, *Systems-First Thinking*), engineering standards card, and location/timezone pill.
  3. **Skills & Technologies**: Categorized competency matrix (*Frontend & UI*, *Creative & Motion*, *Architecture & Backend*, *Tooling & Ecosystem*) with interactive domain filter and dynamic Lucide icons.
  4. **Featured Projects**: Filterable project gallery (*Design System*, *Creative Tech*, *Full Stack*, *SaaS & UI*) with image previews, tech stacks, live demo links, repository links, and an **interactive Case Study Deep Dive modal**.
  5. **Experience**: Career trajectory timeline featuring active roles, verified metric achievements, and full technology breakdowns.
  6. **Education**: University degrees, HCI specializations, GPA honors, and academic leadership highlights.
  7. **Achievements & Honors**: Hackathon victories, design awards, open source milestones, and academic dean's list recognition.
  8. **Certifications**: Verified industry credentials (AWS, Meta, Frontend Masters, IAAP) with credential IDs and one-click copy buttons.
  9. **Contact & Dialogue**: Direct communication cards, instant "Copy Email" with toast feedback, and a functional interactive message dispatch form with validation.
  10. **Curriculum Vitae (Downloadable Resume)**: High-fidelity executive resume modal with one-click **ATS Markdown file download**, print preview trigger, and structured career history.
  11. **Navigation & Mobile Drawer**: Sticky header with active scroll section indicator, quick status pill, and responsive animated mobile drawer.
  12. **Polished Footer**: Back-to-top smooth scroll trigger, brand mark, navigation index, and social links.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Motion & Interactions**: [Framer Motion 11](https://www.framer.com/motion/)
- **Iconography**: [Lucide React](https://lucide.dev/)
- **Typography**: [Urbanist](https://fonts.google.com/specimen/Urbanist) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)

---

## 🚀 Getting Started Locally

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) and **npm** installed on your machine.

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application with Hot Module Replacement (HMR).

### 4. Build for Production
```bash
npm run build
```
Generates a type-checked, minified, and optimized static bundle inside the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```
Spins up a local server to test the generated production build.

---

## 📝 Customizing Your Information

All personal details, bio, projects, experience, skills, and links are centralized in a single configuration file:

📁 **`src/data/portfolioData.ts`**

Simply open this file and update:
- `personalInfo`: Name, role, email, phone, location, headline, bio paragraphs, social links, and metric stats.
- `skillCategories`: Your skills, categorized into domains with experience years and proficiency levels.
- `projects`: Your projects, categories, descriptions, metrics, preview images, GitHub repositories, and live URLs.
- `experienceData`: Your work history, companies, roles, dates, and achievements.
- `educationData`: Your academic degrees and universities.
- `achievementsData`: Hackathons, awards, and recognitions.
- `certificationsData`: Professional certificates and credential IDs.

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)

1. Push this repository to **GitHub**, **GitLab**, or **Bitbucket**.
2. Sign in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your repository. Vercel will automatically detect **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.
*(Note: A pre-configured `vercel.json` file is already included for SPA routing).*

### Deploy to Netlify

1. Sign in to [Netlify](https://www.netlify.com/).
2. Select **"Add new site"** → **"Import an existing project"**.
3. Link your Git repository.
4. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Deploy site**.
*(Note: A pre-configured `netlify.toml` file is already included for SPA routing).*

---

## 📄 License
MIT © 2026 Alex Vance. Free to use and adapt for your personal brand.

