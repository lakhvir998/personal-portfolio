# Personal Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, Tailwind CSS v4, and Framer Motion.

## Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive layout
- ⚡ Built with Vite for fast development and builds
- 🎭 Framer Motion for smooth animations
- 🎨 Tailwind CSS v4 for styling
- ✅ TypeScript for type safety
- 🧪 Unit tests with Vitest and Testing Library

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Animations
- **Vitest** - Testing framework

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Testing

```bash
npm run test
```

### Linting

```bash
npm run lint
```

## Deployment to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

The repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the `main` branch.

1. **Enable GitHub Pages in your repository:**

   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

2. **Update the base path** (if needed):

   - If your repository is NOT named `username.github.io`, update the base path in `vite.config.ts`:

   ```typescript
   base: process.env.GITHUB_PAGES === 'true' ? '/your-repo-name/' : '/',
   ```

3. **Push to main branch:**

   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

   The workflow will automatically build and deploy your site.

### Option 2: Manual Deployment

1. **Update the base path** in `vite.config.ts` if your repository is not named `username.github.io`:

   ```typescript
   base: process.env.GITHUB_PAGES === 'true' ? '/your-repo-name/' : '/',
   ```

2. **Build and deploy:**

   ```bash
   npm run deploy
   ```

   This will build the project and push the `dist` folder to the `gh-pages` branch.

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select the `gh-pages` branch and `/ (root)` folder
   - Click **Save**

Your portfolio will be available at:

- `https://yourusername.github.io/personal-portfolio/` (if repo is named `personal-portfolio`)
- `https://yourusername.github.io/` (if repo is named `username.github.io`)

## Project Structure

```
personal-portfolio/
├── src/
│   ├── components/     # Reusable UI components
│   ├── sections/       # Page sections (Hero, Skills, etc.)
│   ├── data/          # Portfolio data
│   ├── lib/           # Utility functions
│   └── main.tsx       # Entry point
├── public/            # Static assets
└── dist/              # Build output (generated)
```

## Customization

Edit `src/data/portfolio.ts` to update:

- Profile information
- Skills
- Experience
- Projects
- Social links

## License

MIT
