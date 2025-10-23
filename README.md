# Shashwat Kumar — Portfolio ⚡

A fast, responsive, single-page portfolio showcasing AI Engineering & Data Science work. Built with React, featuring LLM/RAG systems, multimodal analytics, data/ML pipelines, and MLOps projects.

**Live Demo:** [shashwat53.github.io/shashwat-portfolio53](https://shashwat53.github.io/shashwat-portfolio53/)

## Features

- **Hero & Summary** — Professional introduction and current focus
- **Skills** — LLMs, RAG, multimodal AI, MLOps, data engineering
- **Work Experience** — Nokia, Intuit, IBM, Jio
- **Research & Publications** — KPMG×Columbia RAG; Video OCR; academic papers
- **Open Source & Links** — GitHub, LinkedIn, Kaggle, email
- **Dark mode** with fully responsive layout

## Tech Stack

- React (Create React App)
- SCSS with custom theming
- Font Awesome 5 icons
- Lottie animations

## Quick Start

**Clone and install:**

```bash
git clone https://github.com/Shashwat53/shashwat-portfolio53.git
cd shashwat-portfolio53
npm install
```

**Run locally:**

```bash
npm start
```

Open [localhost:3000](http://localhost:3000)

## Customization

### Content

Edit `src/portfolio.js` to update:

- Personal greeting and bio
- Social links (GitHub, LinkedIn, Kaggle, email)
- Skills, experience, projects, education
- Skills icons (use Font Awesome 5 class names)

### Theme Colors

Modify `src/_globalColor.scss` to change the color scheme.

### SEO & Meta

Update page title and meta tags in `public/index.html`.

### GitHub Data (Optional)

To display GitHub repos dynamically, create a `.env` file:

```env
REACT_APP_GITHUB_TOKEN=your_github_token
GITHUB_USERNAME=Shashwat53
USE_GITHUB_DATA=true
```

**Note:** Don't commit `.env` to version control. Use a classic GitHub token with no special scopes.

## Project Structure

```
shashwat-portfolio53/
├── public/
│   └── index.html          # SEO & meta tags
├── src/
│   ├── portfolio.js        # Main content file
│   ├── _globalColor.scss   # Theme colors
│   └── containers/         # Page sections & components
└── package.json
```

## Research & Publications

Featured work includes:

- **Predictive Analytics for COVID-19** (Elsevier/Procedia) — [PDF](https://pdf.sciencedirectassets.com/280203/1-s2.0-S1877050923X00143/1-s2.0-S1877050923021063/main.pdf)
- **SecureCloudX: Cloud Data Encryption** (Springer CCIS) — [Chapter](https://link.springer.com/chapter/10.1007/978-3-031-81458-7_6)
- **Cropable: Crop Disease Detection** (E3S Web of Conferences) — [PDF](https://www.e3s-conferences.org/articles/e3sconf/pdf/2024/21/e3sconf_icecs2024_01001.pdf)

## Build & Deploy

**Build for production:**

```bash
npm run build
```

Output directory: `build/`

### Deploy to GitHub Pages

1. Set homepage in `package.json`:

```json
"homepage": "https://Shashwat53.github.io/shashwat-portfolio53"
```

2. Install gh-pages:

```bash
npm install --save-dev gh-pages
```

3. Add deploy scripts to `package.json`:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

4. Deploy:

```bash
npm run deploy
```

5. Enable GitHub Pages in repo Settings → Pages → Source: `gh-pages` branch

### Deploy to Netlify/Vercel

**Netlify:**

- New site from Git → select repo
- Build command: `npm run build`
- Publish directory: `build`

**Vercel:**

- Import repository
- Framework: Create React App
- Use default settings

## Technical Highlights

**LLMs/RAG:** LoRA/QLoRA fine-tuning, prompt engineering, agentic AI, LLM-as-judge
**Retrieval:** FAISS, BGE, Neo4j hybrid search
**Multimodal:** SigLip, V-JEPA, MS-CLAP, Jina embeddings
**Data/MLOps:** Spark/Databricks ETL, Airflow/MLflow, FastAPI/Docker, Superglue, AWS/GCP/Azure

## License

MIT © Shashwat Kumar
