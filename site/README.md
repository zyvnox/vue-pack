# @zyvnox/vue-pack — Documentation & Showcase Site

Documentation & showcase site for **[@zyvnox/vue-pack](https://npmjs.com/package/@zyvnox/vue-pack)**.

## 🎯 Purpose

This site provides the full documentation, component showcases, real-time SEO Studio, SERP preview, and interactive props/events tables for `@zyvnox/vue-pack`.

- ✅ Own `package.json` (standalone project)
- ✅ Complete interactive documentation, copy-able code snippets, live state, and props/events tables for every component
- ✅ Real-time SEO Studio with search snippet, social graph, and schema audit
- ✅ Zero relative imports to `../src` in production mode

## 🚀 Quick Setup

```bash
# 1. From workspace root, launch site dev server:
pnpm dev:site

# Or via npm:
npm run dev:site
```

Open [http://localhost:5173](http://localhost:5173)

## 📚 Documentation Structure

- **Getting Started** — Overview, philosophy, and first component setup (NPM & CDN tabs)
- **Installation** — Package managers (npm, pnpm, yarn, bun), peer dependencies, and UnoCSS configuration
- **Configuration** — `defineConfig`, IndexedDB storage settings, and UnoCSS setup
- **i18n Guide** — Built-in `en` / `id` dictionaries, custom languages with `registerLanguage`, and override labels
- **Component Showcase & Examples** — 30+ interactive pages covering form engines, datatables, all inputs, display widgets, feedback dialogs, and utilities (including SEO Studio)

## 🔄 Development Workflow

```bash
# From workspace root:
pnpm dev:site         # Runs site dev server on http://localhost:5173
pnpm site:build       # Type-checks and builds site for production
```
