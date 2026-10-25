# @zyvnox/vue-pack v0.1.2 Early Release

<div align="center">

[![NPM Version](https://img.shields.io/npm/v/@zyvnox/vue-pack?style=for-the-badge&color=blue&logo=npm)](https://www.npmjs.com/package/@zyvnox/vue-pack)
[![Status](https://img.shields.io/badge/Status-v0.1.2%20Early%20Release-amber?style=for-the-badge)](https://github.com/zyvnox/vue-pack)
[![NPM Downloads](https://img.shields.io/npm/dm/@zyvnox/vue-pack?style=for-the-badge&color=brightgreen)](https://www.npmjs.com/package/@zyvnox/vue-pack)
[![Vue 3](https://img.shields.io/badge/Vue-3.5+-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Vite 6](https://img.shields.io/badge/Vite-6.0+-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Zod](https://img.shields.io/badge/Zod-v4%20%7C%20v3-3E67B1?style=for-the-badge&logo=zod&logoColor=white)](https://zod.dev/)
[![Leaflet](https://img.shields.io/badge/Leaflet-1.9+-199900?style=for-the-badge&logo=leaflet&logoColor=white)](https://leafletjs.com/)
[![Quill](https://img.shields.io/badge/Quill-2.0+-e23e2a?style=for-the-badge&logo=quill&logoColor=white)](https://quilljs.com/)
[![UnoCSS](https://img.shields.io/badge/UnoCSS-Prefixed-grey?style=for-the-badge&logo=unocss&logoColor=white)](https://unocss.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**Enterprise Schema-Driven Vue 3 Component Library, Datatable Suite, and Offline-First Storage Utilities.**

[Overview](#-overview) • [What's New](#-whats-new-in-v012) • [Project Structure](#-project-structure) • [Built With](#-built-with--core-dependencies) • [Installation & CDN](#-installation) • [Quick Start](#-quick-start) • [Subpath Architecture](#-subpath-architecture) • [SEO Studio & SERP Preview](#-real-time-seo-studio--serp-preview) • [Development & Scripts](#-development--workflow-scripts) • [API Reference](#-complete-subpath-api-reference) • [Contributing](#-contributing) • [License](#-license)

</div>

> ⚠️ **v0.1.2 Early Release Notice:** This library is currently in active early development. Public APIs are subject to change prior to `v1.0.0` stable. For production use cases, please pin exact versions or test changes carefully. Feedback, issues, and contributions are warmly appreciated!

---

## 📖 Overview

`@zyvnox/vue-pack` is a modern, high-performance Vue 3 component library and developer toolbelt engineered specifically for rapid development of administrative back-offices, complex CRUD platforms, and data-intensive enterprise systems.

Instead of writing redundant templates, form state handlers, and table logic from scratch, `@zyvnox/vue-pack` provides a declarative, schema-driven approach:

1. **Schema-Driven Form Engine (`FormModal`)**: Automatically generates multi-layout reactive forms with nested objects, arrays, document uploaders, rich-text editors, and GIS maps directly from JSON/TypeScript schemas.
2. **Enterprise Datatable Suite (`TabelData`)**: Supports server-side & client-side data workflows, full-text searching, multi-column sorting, pagination, customizable cell renderers, and end-to-end CRUD orchestration.
3. **Deep Zod Schema Validation**: Compile-time type inference and runtime validation with Zod (v4 and v3) across forms, table mutations, and storage pipelines.
4. **Autonomous Offline-First Storage (`indexedDB`)**: Dynamic object store generation, reactive queries, migration-free schema handling, and Zod cache validation.
5. **Zero-Pollution Subpath Exports**: Granular subpaths allowing aggressive tree-shaking—import only the storage module or HTTP fetch client without bundling UI code.
6. **SSR & Isomorphic Security**: Safe HTML sanitization powered by DOMPurify with Node.js fallback, and isolated browser-dependent modules (Leaflet & Quill) for seamless Nuxt 3 integration.
7. **Namespace-Protected Styling**: 100% utility classes scoped with the `zyvnox-` prefix to guarantee **zero CSS collisions** with host application stylesheets.

---

## ✨ Key Features

| Feature                       | Description                                                                                                  |
| :---------------------------- | :----------------------------------------------------------------------------------------------------------- |
| 🧩 **Schema-Driven UI**       | Define entire form layouts and datatable views declaratively via TypeScript/JSON schema configurations.      |
| 🌳 **Subpath Tree-Shaking**   | Granular subpath imports (`/vue`, `/init`, `/indexedDB`, `/secureFetch`, `/config`, `/components`, `/type`). |
| 🛡️ **Type-Safe Validation**   | First-class Zod support with full type inference (`z.infer<T>`) for form state and CRUD mutation pipelines.  |
| 💾 **IndexedDB Engine**       | Autonomous IndexedDB manager with on-demand store creation, Zod cache filtering, and batch transactions.     |
| 🔒 **Secure Fetch Client**    | Built-in HTTP client handling Cookie credentials, Bearer tokens, custom headers, and `SecureFetchError`.     |
| 🗺️ **GIS & Rich Text**        | Interactive Leaflet maps (`MapPicker`) with route distance calculation and Quill 2.0 WYSIWYG editor (`TextAreaQuillInput`). |
| 🌐 **Extensible i18n System** | Built-in languages (`en`, `id`) with dynamic `registerLanguage` API and deep-merge fallback.                 |
| 🎨 **Zero Scoped CSS**        | Atomic UnoCSS classes prefixed with `zyvnox-` ensuring no conflicting style overrides in your app.           |
| ⚡ **Isomorphic & SSR Ready** | Hydration-safe components, safe SSR sanitization fallbacks, and Nuxt 3 compatibility.                        |

---

## 🚀 What's New in v0.1.2

Release `v0.1.2` delivers a comprehensive overhaul of feedback and alert UI components, smart validation routing, and developer experience enhancements:

### 🎨 Visual & Feedback System Redesign
- **`LoaderSuccessError` (`Loader`)**:
  - Replaced the previous SVG spinner with an ultra-smooth, hardware-accelerated 60fps dual-ring CSS spinner.
  - Added native first-class support for the `'warning'` status with an amber/yellow warning triangle icon.
  - Eliminated dark mode double-circle border artifacts and clipped borders.
- **`WarningForm` (Action Confirmation Dialog)**:
  - **Unified `type` Prop API**: Deprecated legacy boolean flags (`:is-green`, `isWarning`, `isYellow`) in favor of a single, clean `type` prop:
    ```vue
    <!-- v0.1.2 Unified Syntax -->
    <WarningForm
      :show="isOpen"
      type="warning" <!-- 'danger' | 'warning' | 'success' | 'info' -->
      title="Discard Changes?"
      desc="Are you sure you want to discard your draft? Unsaved changes will be lost."
      confirm-text="Yes, Discard"
      cancel-text="Keep Editing"
      @confirm="handleDiscard"
      @cancel="isOpen = false"
    />
    ```
  - Fixed transparent confirm button styling across dark and light themes, ensuring consistent solid color fills.
  - Overhauled dialog iconography with clean outline icons (`CheckCircle`, `AlertTriangle`, `Trash2`, `HelpCircle`).
- **`AlertApp`**:
  - Added yellow/amber warning alert mode (`bg-amber-500/10`, `text-amber-400`, `border-amber-500/30`).
  - Redesigned dark mode alert surfaces with tinted translucent backgrounds and color-matched borders.

### 🛡️ Smart Validation & HTTP 400 Bad Request Routing
- **`TabelData` & `FormModal` Form Handlers**:
  - Frontend validation errors and HTTP `400 Bad Request` responses are now automatically classified as **warnings** (amber) rather than fatal server errors (red).
  - Fatal error indicators (red) are now strictly reserved for true server crashes (`HTTP 500+`) or unhandled exceptions, giving users clearer, more actionable feedback.

### 🛠️ Developer Experience & Tooling
- **Dev Server Style Sync**:
  - Configured Vite build plugin `sync-style-to-src` so `src/style.css` stays continuously synchronized with `dist/style.css`.
  - Resolved CSS rule discrepancies between `npm run dev` and `npm run site:preview`.
- **Live Playground & Monaco Editor Updates**:
  - Fixed auto-complete and example code snippets in the Monaco Editor Playground to use canonical component names (`MapPicker`, `TextAreaQuillInput`).
- **Interactive Documentation**:
  - Added a dedicated [What's New Documentation Page](https://zyvnox.github.io/vue-pack/doc/whats-new) (`/doc/whats-new`) with live interactive previews and migration notes.

---

## 🏗️ Project Structure

`@zyvnox/vue-pack` is organized into distinct workspaces to separate core library code, documentation showcase, and distribution builds:

```
vue-pack/
├── src/                    # 📦 Core Library Source Code
│   ├── components/         # Reusable UI components (FormModal, TabelData, Inputs, Display, Feedback)
│   ├── configs/            # Schemas, TypeScript contracts, default configurations
│   ├── lib/                # IndexedDB autonomous engine, secureFetch HTTP client
│   ├── plugin/             # Vue 3 plugin (ZyvnoxVuePack)
│   ├── init.ts             # Headless initialization helper (IndexedDB + i18n)
│   └── style.css           # Bundled UnoCSS utilities with scoped zyvnox- prefix
│
├── site/                   # 📚 Documentation & Live Playground Application (Port 5173)
│   ├── src/                # Vue 3 SPA with Vue Router
│   │   ├── pages/          # Interactive docs, Getting Started, Real-Time SEO Studio
│   │   ├── pages/          # PlaygroundPage.vue (Live split-pane sandbox under /playground slug)
│   │   ├── components/     # CodeEditor.vue & Preview.vue (isolated iframe live sandbox)
│   │   └── router/         # Client-side routing: '/' (Docs) & '/playground' (Playground)
│   └── package.json        # Sub-workspace dependencies (@zyvnox/vue-pack-site)
│
├── dist/                   # 🚀 Production Distribution (generated via `npm run build`)
│   ├── *.es.js             # Granular ES Modules (subpath tree-shakeable)
│   ├── *.cjs.js            # CommonJS bundles
│   ├── cdn/                # Standalone UMD distribution (dist/cdn/vue-pack.umd.js)
│   ├── types/              # Static TypeScript declaration files (.d.ts)
│   └── style.css           # Compiled atomic stylesheet
│
└── vite.config.ts          # Vite build config for NPM/CDN outputs & documentation site
```

### Single Application Platform: `site` as Index & `playground` as Slug

`@zyvnox/vue-pack` operates as a unified web platform served from a single host (`domain.com` or `http://localhost:5173`):

- **`site` (Index Route: `/` → `domain.com`)**:
  The main documentation portal containing comprehensive API documentation, component guides, interactive showcases, and the **Real-Time SEO Studio & SERP Preview**.
- **`playground` (Slug Route: `/playground` → `domain.com/playground`)**:
  The live split-pane sandbox seamlessly integrated under the `/playground` slug. Allows developers to test Vue 3.5 & `@zyvnox/vue-pack` CDN builds via an isolated `iframe` and live code editor in real time.
- **Unified Local Development**:
  Simply run `npm run dev` or `npm run dev:site` (`http://localhost:5173`) to access both `/` (documentation) and `/playground` (live playground) simultaneously.

---

## 🛠️ Built With & Core Dependencies

`@zyvnox/vue-pack` is built on top of industry-standard, high-performance open-source libraries. Below is the complete overview of core technologies powering the package:

### 🚀 Core Framework & Validation

- **[Vue 3](https://vuejs.org/)** (`^3.5.18`) — The progressive TypeScript framework powering the reactive component core, Composition API (`<script setup>`), generic components, and custom directives.
- **[Zod](https://zod.dev/)** (`^4.0.10` / `^3.23.0`) — TypeScript-first schema declaration and runtime validation library powering strict type safety across form schemas, table actions, and offline storage validation.

### 🎨 UI, Media & Specialized Engines

- **[Leaflet](https://leafletjs.com/)** (`^1.9.4`) — Leading mobile-friendly interactive mapping library powering the `MapPicker` GIS component for pin markers, tile layers, boundary bounds, and GeoJSON rendering.
- **[Quill](https://quilljs.com/)** (`2.0.2`) — Powerful rich text editor with a modern modular architecture, driving the `TextAreaQuillInput` component with pixel-level typography, code views, and AI drafting capabilities.
- **[quill-resize-module](https://github.com/kensnyder/quill-image-resize-module)** (`^2.1.0-beta.0`) — Modular add-on enabling interactive image resizing and alignment within Quill rich text fields.
- **[Iconify (Material Design Icons)](https://icon-sets.iconify.design/mdi/)** (`^1.2.3`) — Comprehensive collection of Material Design vector icons integrated into UnoCSS for fast, resolution-independent UI glyphs.

### 🛡️ Security & Utility Primitives

- **[DOMPurify](https://github.com/cure53/DOMPurify)** (`^3.2.6`) — Super-fast, cross-site scripting (XSS) sanitizer for HTML, securing dynamic content inside the `SafeHtml` component.
- **[Lodash-es](https://lodash.com/)** (`^4.18.1`) & **[lodash.isequal](https://www.npmjs.com/package/lodash.isequal)** (`^4.5.0`) — Modular utility functions utilized for deep equality comparison, debounce optimization, and reactive object cloning.

### ⚡ Styling Engine

- **[UnoCSS](https://unocss.dev/)** (`^66.6.0`) — High-performance, instant atomic CSS engine powering the entire library's design system using the scoped `zyvnox-` namespace prefix.

### 🛠️ Build, Testing & Tooling

- **[Vite](https://vitejs.dev/)** (`^8.0.16`) & **[@vitejs/plugin-vue](https://github.com/vitejs/vite-plugin-vue)** — Next-generation frontend build tooling and multi-format library bundler (ESM and CJS).
- **[TypeScript](https://www.typescriptlang.org/)** (`5.6`) & **[vue-tsc](https://github.com/vuejs/language-tools)** (`2.1`) — Strict static type checker ensuring bulletproof type declarations and compile-time correctness.
- **[vite-plugin-dts](https://github.com/qmhc/vite-plugin-dts)** (`^5.1.2`) — Declaration file generator producing isolated TypeScript `.d.ts` bundles for all subpaths.
- **[Vitest](https://vitest.dev/)** (`^5.0.3`) & **[@vue/test-utils](https://test-utils.vuejs.org/)** & **[JSDOM](https://github.com/jsdom/jsdom)** — Lightning-fast unit and component test runner with simulated DOM environments.
- **[Prettier](https://prettier.io/)** (`3.6.2`) — Automated code formatting and style consistency.
- **[license-checker-rseidelsohn](https://github.com/RSeidelsohn/license-checker-rseidelsohn)** (`^4.4.2`) — Automated dependency licensing and attribution audit tool.

---

## 📦 Installation

### 1. Package Managers (npm, pnpm, yarn, bun)

Install `@zyvnox/vue-pack` along with its required peer dependencies:

```bash
# npm
npm install @zyvnox/vue-pack vue@^3.5.0 zod@^4.0.0 leaflet@^1.9.4

# pnpm
pnpm add @zyvnox/vue-pack vue@^3.5.0 zod@^4.0.0 leaflet@^1.9.4

# yarn
yarn add @zyvnox/vue-pack vue@^3.5.0 zod@^4.0.0 leaflet@^1.9.4

# bun
bun add @zyvnox/vue-pack vue@^3.5.0 zod@^4.0.0 leaflet@^1.9.4
```

> **Peer Dependencies Note:**
>
> - **`vue`** (`>= 3.5.0`): Required for generic component type inference, `<script setup>`, and reactive primitives.
> - **`zod`** (`>= 3.23.0 || >= 4.0.0`): Powers runtime validation across forms, datatable CRUD actions, and IndexedDB cache parsing.
> - **`leaflet`** (`>= 1.9.4`): Required when utilizing the `MapPicker` GIS map component.

---

### 2. CDN Usage (Zero-Build & Browser Direct)

`@zyvnox/vue-pack` is 100% CDN-ready and can be consumed directly inside static HTML files or modern browser environments without any local build step or node_modules installation.

#### CDN Providers

- **jsDelivr**: `https://cdn.jsdelivr.net/npm/@zyvnox/vue-pack@0.1.2/`
- **unpkg**: `https://unpkg.com/@zyvnox/vue-pack@0.1.2/`
- **esm.sh**: `https://esm.sh/@zyvnox/vue-pack@0.1.2`

#### Option 1: Native ES Modules with W3C Import Map (Recommended for Modern Browsers)

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Zyvnox Vue Pack CDN</title>
    <!-- 1. Include Pre-compiled UnoCSS Stylesheet -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@zyvnox/vue-pack@0.1.2/dist/style.css"
    />

    <!-- 2. W3C Import Map for Pure ESM Browser Resolution -->
    <script type="importmap">
      {
        "imports": {
          "vue": "https://cdn.jsdelivr.net/npm/vue@3.5.18/dist/vue.esm-browser.prod.js",
          "@zyvnox/vue-pack": "https://cdn.jsdelivr.net/npm/@zyvnox/vue-pack@0.1.2/dist/cdn/vue-pack.es.js"
        }
      }
    </script>
  </head>
  <body>
    <div id="app"></div>

    <script type="module">
      import { createApp, ref } from 'vue'
      import { TextInput, AlertApp } from '@zyvnox/vue-pack'

      createApp({
        components: { TextInput, AlertApp },
        template: `
          <div class="zyvnox-p-6 zyvnox-max-w-md zyvnox-mx-auto zyvnox-space-y-4">
            <AlertApp type="success" title="CDN Loaded!">Vue 3 + Zyvnox Vue Pack via CDN.</AlertApp>
            <TextInput v-model="name" label="Your Name" placeholder="Enter name..." />
          </div>
        `,
        setup() {
          const name = ref('')
          return { name }
        },
      }).mount('#app')
    </script>
  </body>
</html>
```

#### Option 2: Classic UMD `<script>` Tag (Global `window.ZyvnoxVuePack`)

For legacy setups or quick non-modular prototyping:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Zyvnox Vue Pack UMD</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@zyvnox/vue-pack@0.1.2/dist/style.css"
    />

    <!-- Vue 3 Peer Dependency (Global build) -->
    <script src="https://cdn.jsdelivr.net/npm/vue@3.5.18/dist/vue.global.prod.js"></script>

    <!-- Zyvnox Vue Pack Standalone UMD Bundle -->
    <script src="https://cdn.jsdelivr.net/npm/@zyvnox/vue-pack@0.1.2/dist/cdn/vue-pack.umd.js"></script>
  </head>
  <body>
    <div id="app"></div>

    <script>
      const { createApp } = Vue
      const { ZyvnoxVuePack } = window.ZyvnoxVuePack

      const app = createApp({
        template: `
          <div class="zyvnox-p-6">
            <zyvnox-text-input label="UMD Input" placeholder="Works seamlessly!" />
          </div>
        `,
      })

      // Register ZyvnoxVuePack plugin globally
      app.use(ZyvnoxVuePack)
      app.mount('#app')
    </script>
  </body>
</html>
```

---

## 🗂️ Subpath Architecture

To maximize tree-shaking and avoid unnecessary bundle bloat, `@zyvnox/vue-pack` provides strict subpath exports:

```
@zyvnox/vue-pack
├── .                 # Umbrella bundle (components, configs, utilities, fetch)
├── /vue              # Vue 3 Plugin (Global registration & options injection)
├── /init             # Headless initializer for IndexedDB and i18n
├── /indexedDB        # Offline-first IndexedDB manager with Zod cache validation
├── /secureFetch      # Authenticated HTTP Client & SecureFetchError
├── /config           # Type-safe configuration helper (defineConfig)
├── /components       # All Vue components (FormModal, TabelData, Inputs, Display, Feedback)
├── /type             # Pure TypeScript interfaces, schema types, and contracts
└── /style.css        # Bundled and prefixed UnoCSS stylesheet
```

---

## 🚀 Quick Start

### Option A: Global Plugin Registration (Best for SPAs)

Register all components globally and initialize client-side storage and i18n in your entry file (`main.ts`):

```typescript
// src/main.ts
import { createApp } from 'vue'
import App from './App.vue'

// 1. Import library stylesheet
import '@zyvnox/vue-pack/style.css'

// 2. Import Vue plugin and configuration helper
import ZyvnoxVuePack from '@zyvnox/vue-pack/vue'
import { defineConfig } from '@zyvnox/vue-pack/config'

const app = createApp(App)

// 3. Register plugin with global options
app.use(
  ZyvnoxVuePack,
  defineConfig({
    indexedDB: {
      dbName: 'EnterpriseERP_DB',
      dbVersion: 1,
      storeSingle: ['session_data', 'app_settings'],
      storeArray: ['products', 'orders', 'customers'],
    },
    i18n: {
      // Optional language overrides
    },
  }),
)

app.mount('#app')
```

### Option B: Modular Subpath Imports (Best for Tree-Shaking & Nuxt)

Import individual components or utilities directly in your Single File Components without registering the global plugin:

```vue
<template>
  <div class="p-6">
    <TabelData :base="tableConfig" :validation="tableValidation" @refreshData="fetchData" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { z } from 'zod'
import '@zyvnox/vue-pack/style.css'
import { TabelData } from '@zyvnox/vue-pack/components'
import type { BaseConfig, TabelValidationSchema } from '@zyvnox/vue-pack/type'

// 1. Define Zod Schema
const productSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(3, 'Product name must have at least 3 characters'),
  price: z.number().positive('Price must be greater than zero'),
})

type Product = z.infer<typeof productSchema>

// 2. Configure Table Schema & Views
const tableConfig = ref<BaseConfig<Product>>({
  source: {
    DB_NAME: 'products',
  },
  schema: {
    global: {
      name: { type: 'text', label: 'Product Name', required: true },
      price: { type: 'currency', label: 'Price (IDR)', required: true },
    },
  },
  headersTabelDisplay: ['name', 'price'],
  dataTabelDisplay: {
    name: { type: 'text', valueKey: 'name' },
    price: { type: 'currency', valueKey: 'price' },
  },
})

// 3. Bind CRUD Validation
const tableValidation: TabelValidationSchema<Product> = {
  create: productSchema,
  update: productSchema,
  delete: z.object({ id: z.number() }),
}

const fetchData = () => {
  console.log('Table refreshed')
}
</script>
```

### Option C: Native Browser Direct via CDN & Import Maps (Zero Build)

Run `@zyvnox/vue-pack` directly in pure HTML without Node.js or bundlers, mirroring the setup in the live playground:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Zyvnox Quick Start</title>
    <!-- Scoped stylesheet -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@zyvnox/vue-pack@0.1.2/dist/style.css"
    />

    <!-- W3C Browser Import Map -->
    <script type="importmap">
      {
        "imports": {
          "vue": "https://cdn.jsdelivr.net/npm/vue@3.5.18/dist/vue.esm-browser.prod.js",
          "@zyvnox/vue-pack": "https://cdn.jsdelivr.net/npm/@zyvnox/vue-pack@0.1.2/dist/cdn/vue-pack.es.js"
        }
      }
    </script>
  </head>
  <body class="zyvnox-bg-slate-50 dark:zyvnox-bg-slate-900 zyvnox-p-8">
    <div id="app"></div>

    <script type="module">
      import { createApp, ref } from 'vue'
      import { TextInput, AlertApp } from '@zyvnox/vue-pack'

      createApp({
        components: { TextInput, AlertApp },
        template: `
          <div class="zyvnox-max-w-lg zyvnox-mx-auto zyvnox-bg-white dark:zyvnox-bg-slate-800 zyvnox-p-6 zyvnox-rounded-2xl zyvnox-shadow-sm zyvnox-space-y-4">
            <AlertApp type="info" title="Zero Build Environment">
              Running entirely in browser via native ES Modules!
            </AlertApp>
            <TextInput v-model="email" label="Email Address" placeholder="you@company.com" />
            <p class="zyvnox-text-sm zyvnox-text-slate-500">Value: {{ email }}</p>
          </div>
        `,
        setup() {
          const email = ref('')
          return { email }
        },
      }).mount('#app')
    </script>
  </body>
</html>
```

---

## 🔍 Real-Time SEO Studio & SERP Preview

`@zyvnox/vue-pack` includes real-time on-page SEO analysis engines and interactive Google SERP snippet previews (showcased in `site/src/pages/examples/SeoStudioExample.vue`).

### Key SEO Capabilities

1. **Real-Time On-Page Auditor**:
   - **Meta Title Check**: Analyzes character count against the optimal 50–60 character threshold with pixel-width truncation estimations.
   - **Meta Description Check**: Evaluates length against the 150–160 character limit.
   - **Focus Keyword Relevance**: Checks keyword presence in Title, Meta Description, Headings (H1, H2, H3), lead introductory paragraph, and image alt attributes.
   - **False-Positive Density Elimination**: Filters common stop words and computes accurate keyword density percentages (target range 1.0% – 2.5%).
   - **Heading Tree Hierarchy**: Validates single H1 rule, ordered H2/H3 levels, and missing heading warnings.
   - **Link Analysis**: Verifies internal vs external link distribution and missing anchor text.

2. **Google SERP Snippet Preview**:
   - Realistic desktop & mobile Google search result rendering.
   - Domain breadcrumb URL (`https://example.com › article-slug`).
   - Dynamic favicon / site icon rendering (fetches `/favicon.svg` or `/favicon.ico` relative to domain origin).
   - Blue clickable SERP Title with clamp truncation.
   - Description snippet preview with keyword bolding simulation.

### Interactive Demo in `site/`

To test the Real-Time SEO Studio with sample data:

```bash
npm run dev:site
```

Navigate to **"SEO Studio"** in the sidebar, or load optimal/suboptimal presets to inspect score recalculations and Google SERP rendering in real time.

---

## 💻 Development & Workflow Scripts

`@zyvnox/vue-pack` provides dedicated scripts for developing the core library, testing in the documentation & playground site, and compiling production outputs:

| Command                | Port / Target           | Purpose / Description                                                                                        |
| :--------------------- | :---------------------- | :----------------------------------------------------------------------------------------------------------- |
| `npm run dev`          | `http://localhost:5173` | Runs the full documentation site & live playground with instant HMR and direct source aliases (`src/*`).     |
| `npm run dev:site`     | `http://localhost:5173` | Alias for `npm run dev`.                                                                                     |
| `npm run build`        | `dist/` & `dist/cdn/`   | Runs type checks, compiles NPM bundles (ESM + CJS), standalone CDN UMD bundle, and TypeScript `.d.ts` types. |
| `npm run build-only`   | `dist/`                 | Compiles library bundles and types without running the pre-build type check.                                 |
| `npm run type-check`   | TypeScript CLI          | Executes strict static type analysis via `vue-tsc --build`.                                                  |
| `npm test`             | Vitest Runner           | Executes unit and component tests with Vitest.                                                               |
| `npm run format`       | Prettier CLI            | Formats codebase according to Prettier rules.                                                                |
| `npm run site:build`   | `site/dist`             | Compiles the documentation site and live playground for static web hosting.                                  |
| `npm run site:preview` | `site/dist`             | Previews the compiled documentation site locally.                                                            |

> [!TIP]
> **No Pre-Build Required for Development**:
> Running `npm run dev:site` or `npm run dev` works immediately without requiring `npm run build` beforehand because Vite maps `@zyvnox/vue-pack/*` directly to `src/*`.

---

## 🌐 External Services & Third-Party APIs

`@zyvnox/vue-pack` integrates with external mapping and geocoding services to provide interactive GIS capabilities out of the box.

### 1. OpenStreetMap Tile Server

The `MapPicker` component loads base cartography tiles by default from the **OpenStreetMap Tile Server**:

- **Tile Endpoint**: `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`
- **Attribution**: Automatically credited with `'© OpenStreetMap'`.
- **Usage Terms**: Must comply with the [OpenStreetMap Tile Usage Policy](https://operations.osmfoundation.org/policies/tiles/).

### 2. Address Geocoding: Default Nominatim API

For interactive address and place searches, `MapPicker` connects to the **OpenStreetMap Nominatim Geocoding API**:

- **Default Endpoint**:
  ```
  https://nominatim.openstreetmap.org/search?q={query}&format=json&limit=1
  ```
- **Default Behavior**: This Nominatim API is executed automatically as the **default fallback** when a user performs a search, **if and only if** no custom configuration is provided via the `geocodeApi` prop (or schema field `geocodeApi`) or when `geocodeApi.custom.handler` (or `api.custom.handler`) is omitted.
- **Fair Use & Policy Notice**:
  The public Nominatim instance is provided free of charge by the OpenStreetMap Foundation. It is governed by the [Nominatim Usage Policy](https://operations.osmfoundation.org/policies/nominatim/), which enforces:
  - An absolute maximum rate limit of **1 request per second (1 req/s)**.
  - Requirement for meaningful HTTP User-Agents.
  - Prohibition of automated high-volume bulk geocoding.

> [!IMPORTANT]
> While Nominatim works seamlessly out of the box for testing, prototypes, and low-traffic back-offices, **production enterprise applications with high search frequency should configure a dedicated geocoding provider or custom backend handler** to ensure high availability and prevent rate-limiting.

### 3. Configuring Alternative Geocoding Providers (`geocodeApi`)

You can override the default Nominatim API by providing the `geocodeApi` prop on `<MapPicker>` or inside your form schema (`type: 'mapPicker'`):

#### A. Commercial Providers

Supply your API key for Google Maps, Geoapify, or Geocode.xyz:

```vue
<template>
  <!-- Using Google Maps Geocoding API -->
  <MapPicker v-model="location" :geocodeApi="{ google: 'YOUR_GOOGLE_MAPS_API_KEY' }" />

  <!-- Or using Geoapify API -->
  <MapPicker v-model="location" :geocodeApi="{ geoapify: 'YOUR_GEOAPIFY_API_KEY' }" />

  <!-- Or using Geocode.xyz -->
  <MapPicker v-model="location" :geocodeApi="{ geocode: 'YOUR_GEOCODE_XYZ_KEY' }" />
</template>
```

#### B. Custom Backend Proxy or Enterprise Handler (`custom.handler`)

To keep API keys hidden on the server or use a self-hosted geocoding engine (e.g., Pelias, Photon, or a custom microservice), define a `custom.handler`:

```vue
<template>
  <MapPicker
    v-model="location"
    :geocodeApi="{
      custom: {
        handler: handleCustomGeocode,
      },
    }"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MapPicker } from '@zyvnox/vue-pack/components'

const location = ref({ lat: '-7.250445', lng: '112.768845' })

// Custom asynchronous geocoding function
const handleCustomGeocode = async (query: string): Promise<{ lat: number; lng: number } | null> => {
  try {
    const response = await fetch(`/api/v1/geo/search?q=${encodeURIComponent(query)}`)
    const data = await response.json()
    if (data && data.latitude && data.longitude) {
      return { lat: Number(data.latitude), lng: Number(data.longitude) }
    }
    return null
  } catch (error) {
    console.error('Custom geocode failed:', error)
    return null
  }
}
</script>
```

#### Execution Priority Hierarchy:

When the user triggers a search in `MapPicker`, the component checks providers in the following order:

1. `geocodeApi.custom.handler` (If defined, takes precedence over all third-party services)
2. `geocodeApi.google` (Google Maps Geocoding API)
3. `geocodeApi.geoapify` (Geoapify Geocoding API)
4. `geocodeApi.geocode` (Geocode.xyz API)
5. **Fallback**: Default Nominatim OpenStreetMap API (`https://nominatim.openstreetmap.org/...`)

---

## 📚 Complete Subpath API Reference

### 1. Subpath: `@zyvnox/vue-pack/components`

Exports all UI components, categorized into **Form**, **Datatable**, **Display**, **Feedback**, and **Inputs**.

#### A. `FormModal` (Schema-Driven Form Generator Modal)

A comprehensive dialog component that dynamically generates multi-column forms based on declarative schema definitions with built-in validation, live SEO scoring, and nested data management.

##### Props (`FormModalProps<T>`)

| Prop          | TypeScript Type            | Default      | Description                                                                    |
| :------------ | :------------------------- | :----------- | :----------------------------------------------------------------------------- |
| `schema`      | `Schema`                   | _(Required)_ | Record of field specifications defining form fields and validations.           |
| `initialData` | `Partial<T>`               | `{}`         | Initial data object to populate form fields for Create or Update.              |
| `isUpdate`    | `boolean`                  | `false`      | When `true`, displays update title, edit icons, and update handlers.           |
| `id`          | `number \| string \| null` | `null`       | Primary ID of the entity being updated.                                        |
| `lang`        | `SupportedLanguage`        | `'en'`       | Active language code (built-in: `'en'`, `'id'`, or custom registered code).    |
| `seo`         | `SeoFieldMapping`          | `undefined`  | Optional mapping of SEO title, description, and keywords for live SEO scoring. |
| `demo`        | `boolean`                  | `false`      | When `true`, mutations are handled offline via IndexedDB mock.                 |

##### Emits

| Event Name        | Payload                                                 | Description                                                                      |
| :---------------- | :------------------------------------------------------ | :------------------------------------------------------------------------------- |
| `submit`          | `(value: Record<string, any>)`                          | Emitted when all form fields pass validation and submit button is clicked.       |
| `cancel`          | `()`                                                    | Emitted when modal is closed or discarded.                                       |
| `DataChildRemove` | `(ids: number[])`                                       | Emitted when children items from an `arrayObject` field are marked for deletion. |
| `create:Options`  | `(key: string, option: string \| number, view: string)` | Emitted when a new option is dynamically created in a combobox/select.           |

##### Example Schema Definition:

```typescript
import type { Schema } from '@zyvnox/vue-pack/type'

export const userFormSchema: Schema = {
  fullName: {
    type: 'text',
    label: 'Full Name',
    required: true,
    tooltip: 'Enter full legal name as shown on national identity card',
    tooltipPosition: 'top',
    validate: { minLength: 3, maxLength: 50 },
  },
  email: {
    type: 'email',
    label: 'Email Address',
    required: true,
    tooltip: 'Corporate or primary contact email address',
  },
  role: {
    type: 'select',
    options: ['admin', 'editor', 'viewer'],
    optionsView: ['Administrator', 'Editor', 'Viewer'],
    label: 'User Role',
    required: true,
    tooltip: 'Operational permission level assigned to this account',
  },
  bio: {
    type: 'quillEditor',
    label: 'Biography',
    placeholder: 'Write user biography...',
  },
}
```

##### Custom Tooltip System (`BaseField`)

All form fields and table columns support custom schema-driven tooltips without confusing auto-validation popups. The tooltip trigger icon only renders if `tooltip` is explicitly specified:

| Property          | Type                                     | Default     | Description                                                |
| :---------------- | :--------------------------------------- | :---------- | :--------------------------------------------------------- |
| `tooltip`         | `string`                                 | `undefined` | Custom explanation displayed upon hover or keyboard focus. |
| `tooltipPosition` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'`     | Preferred placement with viewport collision auto-flipping. |
| `tooltipIcon`     | `string`                                 | `'❓'`      | Custom trigger glyph alongside the label or table header.  |

---

#### B. `TabelData` (Enterprise Datatable)

A powerful datatable engine handling local IndexedDB or remote REST API data, automatic pagination, search queries, multi-format cell renderers, and built-in modal CRUD.

##### Props (`TabelDataProperty<Item>`)

| Prop            | TypeScript Type               | Default                                           | Description                                                                                                                          |
| :-------------- | :---------------------------- | :------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------- |
| `base`          | `BaseConfig<Item>`            | _(Required)_                                      | Core table configuration: data source, form schemas, headers, and display views.                                                     |
| `keys`          | `DataKeyConfig`               | `{ idKey: 'id', idsKey: 'ids', nameKey: 'name' }` | Key mapping for primary IDs and labels.                                                                                              |
| `feature`       | `TabelFeatureToggles`         | All `true`                                        | Feature flags: `searchQueryActive`, `sortable`, `createActive`, `updateActive`, `deleteActive`, `deleteManyActive`, `displayActive`. |
| `pagination`    | `TabelPagination`             | `{ itemsPerPage: 10, maxVisiblePages: 5 }`        | Pagination limits, row count options, and indicators.                                                                                |
| `validation`    | `TabelValidationSchema<Item>` | `{}`                                              | Zod schemas mapped to `create`, `update`, `delete`, and `deleteMany`.                                                                |
| `endPoints`     | `TabelEndpoints`              | `{}`                                              | REST API endpoints for CRUD (`create`, `update`, `delete`, `deleteMany`).                                                            |
| `submitOption`  | `SubmitAuthOptionMap<Item>`   | `{}`                                              | Authentication configurations (`authType`, `token`, `customHeaders`) per mode.                                                       |
| `customActions` | `CustomAction[]`              | `[]`                                              | Additional action buttons in each row (`key`, `label`, `icon`, `class`).                                                             |
| `demo`          | `boolean`                     | `false`                                           | Offline demo mode backed by IndexedDB.                                                                                               |

##### Emits

| Event Name     | Payload                                   | Description                                                                |
| :------------- | :---------------------------------------- | :------------------------------------------------------------------------- |
| `create`       | `()`                                      | Triggered when user opens the creation dialog or manual create is toggled. |
| `edit`         | `(value: FormData, id: number \| string)` | Triggered when user initiates row editing.                                 |
| `show`         | `(value: FormData, id: number \| string)` | Triggered when user opens row detail view.                                 |
| `delete`       | `(id: number \| string)`                  | Triggered when a single row deletion is confirmed.                         |
| `deleteMany`   | `(ids: number[])`                         | Triggered when batch row deletion is confirmed.                            |
| `refreshData`  | `()`                                      | Triggered after successful mutations to notify parent to refetch.          |
| `customAction` | `(payload: { key: string, item: Item })`  | Triggered when a custom action button is clicked.                          |

---

#### C. `SafeHtml` (SSR-Safe HTML Renderer)

Renders sanitized HTML safely across both client and server environments using DOMPurify.

##### Props

| Prop     | TypeScript Type    | Default          | Description                                                        |
| :------- | :----------------- | :--------------- | :----------------------------------------------------------------- |
| `html`   | `string`           | _(Required)_     | Untrusted raw HTML string to sanitize.                             |
| `as`     | `string`           | `'div'`          | The wrapping HTML tag name (e.g., `'div'`, `'span'`, `'article'`). |
| `config` | `DOMPurify.Config` | `DEFAULT_CONFIG` | Custom DOMPurify options to override default rules.                |

---

#### D. Specialized Input Collection

All inputs emit standard Vue 3 `v-model` (`update:modelValue`) events and validation errors (`push:error`, `remove:error`):

| Component Name                   | Description                | Key Features                                                                                         |
| :------------------------------- | :------------------------- | :--------------------------------------------------------------------------------------------------- |
| `TextInput`                      | Single-line text input     | Min/max length, duplicate checks, pattern regex.                                                     |
| `NumberInput`                    | Numeric input              | Min/max bounds, integer-only constraint, duplicate checks.                                           |
| `CurrencyInput`                  | Currency formatted input   | Locale-aware auto formatting (IDR/USD) with numeric model value.                                     |
| `RateInput`                      | Star rating input          | Customizable max stars and interactive hover rating.                                                 |
| `EmailInput`                     | RFC-compliant email input  | Email syntax validation and duplicate verification.                                                  |
| `TelInput`                       | Phone number input         | International format regex validation and phone icons.                                               |
| `UrlInput`                       | Web URL input              | Protocol-verified URL validation and link helper.                                                    |
| `PasswordInput`                  | Secure password field      | Visibility toggling, uppercase, lowercase, numeric & symbol rules.                                   |
| `TextAreaInput`                  | Multiline plain text       | Character limits and resizable rows.                                                                 |
| `TextAreaQuillInput`             | Rich text editor (WYSIWYG) | Quill 2.0 integration, image resize module, custom font sizes, code view, AI generator hook.         |
| `MapPicker`                      | GIS Map Coordinates Picker | Leaflet integration, OSM tiles, Nominatim fallback search, custom geocoders, GeoJSON boundary check. |
| `DateInput`                      | Date picker (`YYYY-MM-DD`) | Min and max date constraint bounds.                                                                  |
| `DateTimeInput`                  | Date & Time picker         | ISO datetime string output.                                                                          |
| `TimeInput`                      | Time picker (`HH:mm`)      | Min/max time bounds.                                                                                 |
| `SelectedOptions`                | Searchable dropdown        | Dynamic async fetch, local filtering, on-the-fly option creation.                                    |
| `ToggleInput`                    | Switch toggle input        | Boolean state switch.                                                                                |
| `TagInput`                       | Tag chips manager          | String array with min/max tag limits.                                                                |
| `ColorInput`                     | Hex/RGB color selector     | Single and multi-color selection presets.                                                            |
| `FileInput` / `FileArrayInput`   | Document file uploaders    | Size limit checks, MIME-type white-listing, multi-file arrays.                                       |
| `ImageInput` / `ImageArrayInput` | Image upload with preview  | Aspect ratio enforcement, resolution constraints, canvas watermarking.                               |
| `ArrayObjectInput`               | Nested form array manager  | Dynamic row additions, schema recursiveness, child deletion tracking.                                |
| `ObjectInput`                    | Single nested object       | Scoped schema grouping within a parent form.                                                         |
| `GroupRendererInput`             | Multi-column fieldset      | Grouped fields with responsive grid columns.                                                         |

---

#### E. Feedback & Overlay Components

Zyvnox Vue Pack provides enterprise-grade, theme-aware feedback components:

| Component Name | Description | Key Features & Props |
| :--- | :--- | :--- |
| `LoaderSuccessError` (`Loader`) | Fullscreen or container status overlay | Smooth 60fps CSS spinner, supports `type: 'loading' \| 'success' \| 'warning' \| 'error'`. |
| `WarningForm` | Confirmation modal dialog | Action confirmation dialog with unified `type: 'danger' \| 'warning' \| 'success' \| 'info'`, solid button states, and custom action callbacks. |
| `AlertApp` | Inline contextual status banner | Supports `'info'`, `'success'`, `'warning'`, `'error'`, translucent dark surfaces, and auto-dismiss timer. |

##### `WarningForm` Usage
```vue
<template>
  <WarningForm
    :show="showConfirm"
    type="warning"
    title="Discard Changes?"
    desc="Any unsaved modifications will be permanently lost."
    confirm-text="Discard"
    cancel-text="Keep Editing"
    @confirm="handleDiscard"
    @cancel="showConfirm = false"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { WarningForm } from '@zyvnox/vue-pack'

const showConfirm = ref(false)
function handleDiscard() {
  showConfirm.value = false
  // discard logic
}
</script>
```

##### `Loader` Usage
```vue
<template>
  <LoaderSuccessError ref="loaderRef" />
  <button @click="runTask">Run Task</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { LoaderSuccessError } from '@zyvnox/vue-pack'

const loaderRef = ref<InstanceType<typeof LoaderSuccessError>>()

async function runTask() {
  loaderRef.value?.show({ type: 'loading', message: 'Processing order...' })
  try {
    await processOrder()
    loaderRef.value?.show({ type: 'success', message: 'Order completed successfully!' })
  } catch (err: any) {
    if (err?.status === 400) {
      loaderRef.value?.show({ type: 'warning', message: 'Validation failed. Please verify input.' })
    } else {
      loaderRef.value?.show({ type: 'error', message: 'Internal server error occurred.' })
    }
  }
}
</script>
```

---

### 2. Subpath: `@zyvnox/vue-pack/indexedDB`

An offline-first, dynamic IndexedDB manager that automatically creates and upgrades object stores on-demand without manual database migration steps.

```typescript
import {
  saveToIndexedDB,
  getFromIndexedDB,
  getSingleFromIndexedDB,
  getItemById,
  updateItemInStore,
  deleteItemFromStore,
  removeFromIndexedDB,
  clearStore,
  configureIndexedDB,
  isIndexedDBSupported,
} from '@zyvnox/vue-pack/indexedDB'
```

#### Functions Specification

##### `saveToIndexedDB(data: Record<string, any>): Promise<void>`

Batch saves or updates records into specified stores. Single stores store values under the `'current'` key; array stores are batch updated.

##### `getFromIndexedDB<T = any>(storeName: string, schema?: ZodType<T>): Promise<T[]>`

Retrieves all records from an array object store. If a Zod `schema` is provided, every item is validated against it—corrupted or obsolete records are automatically filtered out.

```typescript
import { z } from 'zod'
import { getFromIndexedDB } from '@zyvnox/vue-pack/indexedDB'

const userCacheSchema = z.object({
  id: z.number(),
  username: z.string(),
  lastLogin: z.string(),
})

type UserCache = z.infer<typeof userCacheSchema>

// Guaranteed type-safe T[] matching the Zod schema
const users = await getFromIndexedDB<UserCache>('users', userCacheSchema)
```

##### `getSingleFromIndexedDB<T = any>(storeName: string, key = 'current', schema?: ZodType<T>): Promise<T | undefined>`

Retrieves a single configuration or session record by key.

##### `getItemById<T = any>(storeName: string, id: string | number, schema?: ZodType<T>): Promise<T | undefined>`

Finds a specific entity by its primary key from an array store.

##### `updateItemInStore<T = any>(storeName: string, item: T): Promise<void>`

Puts/updates an individual item into an array store.

##### `deleteItemFromStore(storeName: string, id: string | number): Promise<void>`

Deletes a single item by ID from an array store.

##### `removeFromIndexedDB(data: Record<string, number[] | number>): Promise<void>`

Batch deletes items from multiple stores in a single transaction.

##### `clearStore(storeName: string): Promise<void>`

Clears all records inside the given object store.

##### `isIndexedDBSupported(): boolean`

Returns `true` if executed in a browser environment with `indexedDB` available; `false` in SSR / Node.js.

---

### 3. Subpath: `@zyvnox/vue-pack/secureFetch`

A lightweight, authenticated fetch client equipped with automatic credentials handling, header injections, and rich error propagation.

```typescript
import { secureFetch, secureFetchJson, SecureFetchError } from '@zyvnox/vue-pack/secureFetch'
```

#### `secureFetch(input: RequestInfo | URL, options?: SecureFetchOptions): Promise<Response>`

##### Parameters (`SecureFetchOptions`)

| Parameter        | Type                                         | Default     | Description                                                                                |
| :--------------- | :------------------------------------------- | :---------- | :----------------------------------------------------------------------------------------- |
| `authType`       | `'cookie' \| 'bearer' \| 'none' \| 'custom'` | `'cookie'`  | Authentication strategy. `'cookie'` sets `credentials: 'include'`.                         |
| `token`          | `string`                                     | `undefined` | JWT or access token appended to `Authorization: Bearer <token>` when `authType: 'bearer'`. |
| `customHeaders`  | `Record<string, string>`                     | `undefined` | Custom headers map when `authType: 'custom'`.                                              |
| `...RequestInit` | Standard `fetch` init                        | `{}`        | Method, body, mode, cache, signal, etc.                                                    |

##### Returns

Standard Fetch `Promise<Response>`. Rejects with `SecureFetchError` if response status is not 2xx.

#### `secureFetchJson<T = any>(input: RequestInfo | URL, options?: SecureFetchOptions): Promise<T>`

Convenience wrapper that executes `secureFetch` and automatically awaits `.json()` parsed into type `T`.

#### `SecureFetchError`

```typescript
class SecureFetchError extends Error {
  status: number
  response?: Response
  errorBody?: any
}
```

##### Example:

```typescript
import { secureFetchJson, SecureFetchError } from '@zyvnox/vue-pack/secureFetch'

interface UserProfile {
  id: string
  name: string
  email: string
}

try {
  const profile = await secureFetchJson<UserProfile>('/api/v1/profile', {
    authType: 'bearer',
    token: 'jwt.token.here',
  })
  console.log(profile.name)
} catch (error) {
  if (error instanceof SecureFetchError) {
    console.error(`HTTP ${error.status}: ${error.message}`, error.errorBody)
  }
}
```

---

### 4. Subpath: `@zyvnox/vue-pack/config`

Provides a type-safe configuration helper for application-level library defaults.

```typescript
import { defineConfig } from '@zyvnox/vue-pack/config'

export default defineConfig({
  indexedDB: {
    dbName: 'FinanceAppDB',
    dbVersion: 1,
    storeSingle: ['preferences'],
    storeArray: ['transactions', 'ledgers'],
  },
  i18n: {
    languages: [
      {
        lang: 'id',
        labels: {
          search: 'Telusuri transaksi...',
        },
      },
    ],
  },
})
```

---

### 5. Subpath: `@zyvnox/vue-pack/init`

Headless initialization engine. Useful for web workers, background tasks, or scripts where Vue components are not mounted but IndexedDB or i18n dictionaries need configuration.

```typescript
import initialize from '@zyvnox/vue-pack/init'

initialize({
  indexedDB: {
    dbName: 'BackgroundWorkerDB',
    storeArray: ['sync_queue'],
  },
})
```

---

### 6. Subpath: `@zyvnox/vue-pack/type`

Exports all TypeScript contracts, schemas, props, and interface definitions.

```typescript
import type {
  Schema,
  Field,
  BaseConfig,
  TabelDataProperty,
  TabelValidationSchema,
  FormModalProps,
  SupportedLanguage,
  SecureFetchOptions,
  IndexedDBConfig,
} from '@zyvnox/vue-pack/type'
```

---

## 🛡️ Zod Validation & Schema Integration

Validation in `@zyvnox/vue-pack` natively supports Zod schemas (`z.ZodType<T>`).

### 1. Standalone Validation Helpers

The library exports runtime validation utilities from `@zyvnox/vue-pack`:

```typescript
import { z } from 'zod'
import { validate, safeValidate } from '@zyvnox/vue-pack'

const invoiceSchema = z.object({
  invoiceNumber: z.string().min(5),
  amount: z.number().positive(),
  dueDate: z.string(),
})

// 1. Throwing validator (returns inferred type)
const invoice = validate(invoiceSchema, rawData)

// 2. Safe validator (does not throw)
const result = safeValidate(invoiceSchema, rawData)
if (result.success) {
  console.log(result.data.amount)
} else {
  console.error(result.error.message, result.error.issues)
}
```

### 2. Form & Datatable CRUD Validation Pipeline

Attach your Zod schemas directly to `TabelData` props to enforce strict type checking across all CRUD actions:

```typescript
import { z } from 'zod'
import type { TabelValidationSchema } from '@zyvnox/vue-pack/type'

export const itemSchema = z.object({
  id: z.number().optional(),
  title: z.string().min(4, 'Title must be at least 4 characters'),
  sku: z.string().regex(/^[A-Z0-9-]+$/, 'Invalid SKU format'),
  stock: z.number().int().min(0),
})

export type Item = z.infer<typeof itemSchema>

export const itemValidation: TabelValidationSchema<Item> = {
  create: itemSchema,
  update: itemSchema.partial(),
  delete: z.object({ id: z.number() }),
  deleteMany: z.object({ ids: z.array(z.number()) }),
}
```

---

## 🌐 Nuxt 3 / SSR Compatibility

`@zyvnox/vue-pack` is designed with isomorphic architecture in mind. All DOM-dependent features are isolated from Node.js runtime crashes:

1. **HTML Sanitization**: `SafeHtml` uses browser detection and safe SSR string-stripping fallback.
2. **IndexedDB**: All storage calls gracefully resolve or return empty arrays on the server.
3. **Quill & Leaflet**: Both engines utilize dynamic browser imports inside `onMounted`.

### Nuxt 3 Configuration Recommendation

In your `nuxt.config.ts`, transpile the library and import the stylesheet:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  css: ['@zyvnox/vue-pack/style.css'],
  build: {
    transpile: ['@zyvnox/vue-pack'],
  },
})
```

When rendering components that interact directly with the DOM (such as map pickers or full rich-text editors), wrap them in Nuxt's `<ClientOnly>` component:

```vue
<template>
  <ClientOnly fallback-tag="div" fallback="Loading map editor...">
    <MapPicker v-model="coordinates" label="Branch Location" />
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MapPicker } from '@zyvnox/vue-pack/components'

const coordinates = ref({ lat: '-7.250445', lng: '112.768845' })
</script>
```

---

## 🎨 Styling & UnoCSS Consumer Setup

All components in `@zyvnox/vue-pack` are styled exclusively using **UnoCSS** utility classes with the custom namespace prefix: **`zyvnox-`** (zero `<style scoped>` tags in components).

### Option 1: Quick Setup (Precompiled Stylesheet)

If you don't use UnoCSS in your application or prefer zero-build styling, simply import the pre-bundled stylesheet in your application's entry file (`main.ts` or `app.vue`):

```typescript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

// Import compiled UnoCSS styles
import '@zyvnox/vue-pack/style.css'

createApp(App).mount('#app')
```

### Option 2: Full UnoCSS Integration (Recommended for UnoCSS Users)

If your project already uses UnoCSS, configure UnoCSS to scan the component source templates and enable the `zyvnox-` prefix:

```typescript
// uno.config.ts
import { defineConfig, presetWind4, presetAttributify, presetIcons, presetTypography } from 'unocss'

export default defineConfig({
  content: {
    pipeline: {
      include: [
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // Scan library files from node_modules
        'node_modules/@zyvnox/vue-pack/**/*.{vue,js,ts}',
      ],
    },
  },
  presets: [
    presetWind4({
      prefix: 'zyvnox-',
      dark: 'class',
    }),
    presetAttributify({
      prefix: 'zyvnox-',
      prefixedOnly: true,
    }),
    presetIcons({
      scale: 1.2,
      prefix: 'zyvnox-i-',
    }),
    presetTypography({
      cssVarPrefix: 'zyvnox-',
    }),
  ],
})
```

### Dark Mode Support

Dark mode follows the standard `class="dark"` convention on `document.documentElement` (`<html>` element). All components seamlessly react to theme changes using `dark:zyvnox-*` tokens.

---

## 🌍 Internationalization (i18n) & Custom Language Packs

`@zyvnox/vue-pack` bundles `en` (English) and `id` (Indonesian) out of the box to optimize bundle performance. You can dynamically register any language using `registerLanguage` or via the `init()` plugin configuration.

### Fallback Deep-Merge Behavior

Any custom language pack automatically **deep-merges** with the English (`en`) dictionary as a baseline. You only need to provide the keys you wish to customize or translate; missing keys safely fallback to English without runtime errors.

### Method 1: Using `registerLanguage` API

```typescript
import {
  registerLanguage,
  isLanguageRegistered,
  getAvailableLanguages,
} from '@zyvnox/vue-pack/init'

// Register Spanish
registerLanguage({
  lang: 'es',
  labels: {
    search: 'Buscar',
    btn: {
      create: 'Crear',
      update: 'Actualizar',
      close: 'Cerrar',
      cancel: 'Cancelar',
    },
    message: {
      notFound: 'Datos no encontrados',
    },
  },
  errors: {
    required: '{label} es obligatorio',
  },
  inputs: {
    email: 'Correo electrónico no válido',
  },
})

// Query language availability
console.log(getAvailableLanguages()) // ['en', 'id', 'es']
console.log(isLanguageRegistered('es')) // true
```

### Method 2: Using the `useI18n` Composable in Custom Components

You can consume reactive, strongly-typed translations directly in your own Vue 3 components:

```vue
<template>
  <div>
    <!-- Direct nested key translation -->
    <button>{{ t('common.save') }}</button>

    <!-- Interpolation with dynamic parameters -->
    <p>{{ t('table.noResult', { query: searchQuery }) }}</p>

    <!-- Reactive dictionary access -->
    <span>{{ labels.counter.showing }} {{ count }} {{ labels.counter.entries }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from '@zyvnox/vue-pack/components'

const currentLang = ref('en')
const { t, labels } = useI18n(currentLang)

const searchQuery = ref('MacBook')
const count = ref(42)
</script>
```

---

## 🤝 Contributing

We welcome contributions from the community! Whether reporting a bug, proposing a new feature, or submitting a pull request, please review our detailed guidelines:

👉 **[Read the Full Contributing Guide (CONTRIBUTING.md)](CONTRIBUTING.md)**

### Quick Contribution Steps:

1. Fork the repository on GitHub.
2. Clone locally and install dependencies: `npm install`
3. Launch the development server: `npm run dev`
4. Verify tests and type integrity: `npm run type-check && npm test`
5. Commit using Conventional Commits (`feat:`, `fix:`, `docs:`)
6. Open a Pull Request targeting `main`.

---

## 🐛 Bug Reports & Feature Requests

Have a suggestion or found an issue?

- **Bug Report:** [Open a Bug Report](https://github.com/zyvnox/vue-pack/issues/new?template=bug_report.md)
- **Feature Request:** [Request a Feature](https://github.com/zyvnox/vue-pack/issues/new?template=feature_request.md)
- **Discussions / Q&A:** [GitHub Discussions](https://github.com/zyvnox/vue-pack/discussions)

Please include `@zyvnox/vue-pack` version (`0.1.2`), your Vue version, and a minimal reproduction.

---

## 💖 Support

If `@zyvnox/vue-pack` streamlines your workflow and saves you engineering hours, consider supporting ongoing development:

- **Ko-fi:** [https://ko-fi.com/zyvnox](https://ko-fi.com/zyvnox)
- **Saweria (QRIS & E-Wallet):** [https://saweria.co/zyvnox](https://saweria.co/zyvnox)

---

## 📄 License & Attributions

This project is open-source software licensed under the **[MIT License](LICENSE)** © [Zyvnox](https://github.com/zyvnox).

### Third-Party Licenses

This library integrates and bundles third-party open-source components (including Leaflet, Quill, DOMPurify, Lodash, and Iconify). Complete legal license notices and copyright attestations are generated and preserved in **[THIRD_PARTY_LICENSES.md](THIRD_PARTY_LICENSES.md)** and **[THIRD_PARTY_LICENSES.json](THIRD_PARTY_LICENSES.json)**.

---

<div align="center">
  <sub>Built with ❤️ by <b>Zyvnox</b> for high-performance Vue 3 engineering.</sub>
</div>
