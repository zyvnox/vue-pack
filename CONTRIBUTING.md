# Contributing to @zyvnox/vue-pack

Thank you for your interest in contributing to **@zyvnox/vue-pack**! 🎉

We are excited to welcome contributions from the community. Whether you are fixing a bug, proposing a new component, enhancing documentation, or improving test coverage, your help makes this library better for everyone.

Please take a few moments to review this guide to ensure a smooth and pleasant contribution experience.

---

## 📋 Table of Contents

- [Code of Conduct](#-code-of-conduct)
- [How Can I Contribute?](#-how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements & New Features](#suggesting-enhancements--new-features)
  - [Improving Documentation](#improving-documentation)
- [Local Development Setup](#-local-development-setup)
  - [Prerequisites](#prerequisites)
  - [1. Fork and Clone the Repository](#1-fork-and-clone-the-repository)
  - [2. Install Dependencies](#2-install-dependencies)
  - [3. Running the Development Server & Playground](#3-running-the-development-server--playground)
  - [4. Available Scripts](#4-available-scripts)
- [Coding Guidelines & Architectural Standards](#-coding-guidelines--architectural-standards)
  - [Vue 3 & TypeScript Standards](#vue-3--typescript-standards)
  - [UnoCSS Styling & `zyvnox-` Prefix](#unocss-styling--zyvnox--prefix)
  - [SSR & Isomorphic Safety](#ssr--isomorphic-safety)
  - [Internationalization (i18n)](#internationalization-i18n)
  - [External APIs & Fallbacks](#external-apis--fallbacks)
- [Commit Message Conventions](#-commit-message-conventions)
- [Pull Request (PR) Workflow](#-pull-request-pr-workflow)
- [Community & Support](#-community--support)
- [License](#-license)

---

## 📜 Code of Conduct

We are committed to providing a welcoming, inclusive, and harassment-free environment for everyone. Please be respectful, considerate, and constructive in all interactions, issues, and pull request discussions.

---

## 💡 How Can I Contribute?

### Reporting Bugs

Before submitting a new issue, please search existing [GitHub Issues](https://github.com/zyvnox/vue-pack/issues) to verify if the bug has already been reported.

When creating a new bug report, please provide as much context as possible:

1. **Clear, descriptive title**: Summarize the problem concisely.
2. **Environment Information**:
   - `@zyvnox/vue-pack` version (e.g., `0.1.1`)
   - Vue version (e.g., `3.5.18`)
   - Node.js runtime version
   - Browser & OS (e.g., Chrome 129 on macOS / Firefox on Linux)
   - Bundler / Framework (e.g., Vite 6, Nuxt 3, Astro)
3. **Steps to Reproduce**: Detailed, step-by-step instructions.
4. **Minimal Reproduction**: A link to a minimal reproducible repository or StackBlitz / CodeSandbox demo.
5. **Expected vs. Actual Behavior**: What did you expect to happen, and what actually occurred?
6. **Logs & Screenshots**: Include terminal outputs, browser console errors, or screenshots.

### Suggesting Enhancements & New Features

Feature requests are very welcome! When proposing new components, schema props, or utility functions:

1. **Explain the Use Case**: Why is this feature needed? What real-world dashboard or enterprise problem does it solve?
2. **Proposed API / Schema Design**: Describe how the schema definition, props, or emits should look.
3. **Compatibility**: Consider whether the proposal introduces breaking changes or affects SSR / tree-shaking.

### Improving Documentation

Found a typo, an outdated example, or an unclear explanation? Pull requests for documentation in `README.md`, JSDoc / TSDoc comments, or playground examples are always appreciated!

---

## 💻 Local Development Setup

### Prerequisites

Ensure your development environment meets the following requirements:

- **Node.js**: `^22.22.2 || ^24.15.0 || >=26.0.0` (as defined in `package.json` engines)
- **Package Manager**: `npm` (v10+) or `pnpm` (v9+)
- **Git**

### 1. Fork and Clone the Repository

1. Fork the official repository [github.com/zyvnox/vue-pack](https://github.com/zyvnox/vue-pack) to your GitHub account.
2. Clone your fork locally:
   ```bash
   git clone https://github.com/<your-username>/vue-pack.git
   cd vue-pack
   ```
3. Set up the upstream remote to stay synchronized with the main repository:
   ```bash
   git remote add upstream https://github.com/zyvnox/vue-pack.git
   git fetch upstream
   ```

### 2. Install Dependencies

Install root dependencies:

```bash
npm install
```

### 3. Running the Development Server & Live Environments

### 3. Running the Development Server

Runs Vite directly against the `src/` source code with instant Hot Module Replacement (HMR). **No prior build is required.** Every modification you make to components, schemas, or utilities in `src/` is reflected immediately in the documentation site and live playground.

```bash
npm run dev
```

Visit:

- Documentation Home: `http://localhost:5173/`
- Live Coding Playground: `http://localhost:5173/playground`

### 4. Available Scripts

Here are the primary npm scripts available in the project:

| Script                 | Command                                    | Purpose                                                                             |
| :--------------------- | :----------------------------------------- | :---------------------------------------------------------------------------------- |
| `npm run dev`          | `vite --config vite.config.ts --port=5173` | Starts the documentation site & live playground with live HMR directly from `src/`. |
| `npm run dev:site`     | `vite --config vite.config.ts --port=5173` | Alias for `npm run dev`.                                                            |
| `npm run build`        | `run-p type-check "build-only {@}" --`     | Performs type checking and compiles NPM bundles, CDN UMD bundle, and `.d.ts` types. |
| `npm run build-only`   | `vite build`                               | Compiles the library bundles and type declarations without pre-check.               |
| `npm run type-check`   | `vue-tsc --build`                          | Runs strict TypeScript type checking across the project.                            |
| `npm test`             | `vitest run --config vitest.config.ts`     | Runs the test suite via Vitest.                                                     |
| `npm run format`       | `prettier --write src/`                    | Automatically formats all source code using Prettier.                               |
| `npm run site:build`   | `cd site && npm run build`                 | Compiles the documentation site and playground for production static hosting.       |
| `npm run site:preview` | `cd site && npm run preview`               | Previews the compiled documentation site locally.                                   |

---

## 📐 Coding Guidelines & Architectural Standards

To maintain high code quality and enterprise reliability, please follow these guidelines:

### Vue 3 & TypeScript Standards

- **Composition API**: Always use `<script setup lang="ts">`.
- **Strict Typing**: Avoid using `any` whenever possible. Define interfaces and types in `src/configs/types/` and re-export them via `src/configs/types/index.ts`.
- **Zod Schema Inference**: When defining models or form payloads, leverage Zod v4 schemas and TypeScript inference (`z.infer<typeof schema>`).
- **Explicit Props & Emits**: Use type-based declaration for props (`defineProps<Props>()`) with `withDefaults()`, and typed emits (`defineEmits<{ (e: 'event', ...): void }>()`).

### UnoCSS Styling & `zyvnox-` Prefix

- **Zero Scoped CSS**: We intentionally do **not** use `<style scoped>` in components to avoid style bloat and unexpected CSS specificity wars.
- **Prefix Isolation**: All utility classes generated for components must use the **`zyvnox-`** prefix (e.g., `zyvnox-flex`, `zyvnox-p-4`, `zyvnox-bg-white`, `dark:zyvnox-bg-slate-800`).
- **Dark Mode**: Support dark mode seamlessly using standard `dark:zyvnox-*` selectors triggered by the `dark` class on the root HTML element.

### SSR & Isomorphic Safety

`@zyvnox/vue-pack` supports isomorphic environments like Nuxt 3 and Node.js SSR:

- Never invoke browser-only globals (`window`, `document`, `navigator`, `localStorage`, `indexedDB`) during top-level component setup.
- Browser-dependent libraries (such as Leaflet for `LocationPicker` or Quill for `TextAreaQuill`) must be imported dynamically inside `onMounted()`:
  ```typescript
  onMounted(async () => {
    const leafletModule = await import('leaflet')
    L = leafletModule.default || leafletModule
    initMap()
  })
  ```
- Use the `isIndexedDBSupported()` utility or SSR checks before accessing storage APIs.

### Internationalization (i18n)

- Whenever adding labels, error messages, or placeholders to UI components, register the translations in both English (`en`) and Indonesian (`id`) dictionaries inside `src/configs/i18n/`.
- Use the `useI18n()` composable to retrieve translated keys reactively:
  ```typescript
  const { t, labels } = useI18n(computed(() => props.lang))
  ```

### External APIs & Fallbacks

- When adding features that interact with external services (such as geocoding or reverse geocoding), always provide a clean, free fallback (like OpenStreetMap Nominatim) while allowing users to override the service using configuration props or custom handlers (e.g., `geocodeApi.custom.handler`).
- Always respect third-party rate limits and usage policies.

---

## 📝 Commit Message Conventions

We adhere to the [Conventional Commits](https://www.conventionalcommits.org/) specification. This helps generate clean change logs and enables predictable release tagging.

### Format

```
<type>(<optional scope>): <description>

[optional body]

[optional footer(s)]
```

### Commit Types

| Type       | Description                                                        | Example                                                       |
| :--------- | :----------------------------------------------------------------- | :------------------------------------------------------------ |
| `feat`     | A new feature or component                                         | `feat(components): add TagInput max tags limit`               |
| `fix`      | A bug fix                                                          | `fix(LocationPicker): fix geocoding fallback for empty query` |
| `docs`     | Documentation changes                                              | `docs: add Nominatim external service guide to README`        |
| `style`    | Formatting, whitespace, missing semi-colons (no code logic change) | `style: format table pagination template`                     |
| `refactor` | Refactoring code without fixing bugs or adding features            | `refactor(indexedDB): streamline dynamic store creation`      |
| `perf`     | Performance improvement                                            | `perf(TabelData): optimize virtual row re-rendering`          |
| `test`     | Adding missing tests or refactoring existing tests                 | `test: add unit tests for safeHtml XSS stripping`             |
| `build`    | Changes to build configuration, dependencies, or bundler           | `build: update Vite to 8.3 and rolldown plugins`              |
| `ci`       | Changes to CI workflows or release automation                      | `ci: add GitHub Actions workflow for vitest`                  |
| `chore`    | Maintenance tasks that do not modify src or test files             | `chore: update THIRD_PARTY_LICENSES list`                     |

---

## 🔄 Pull Request (PR) Workflow

Follow these steps to submit a Pull Request:

### 1. Create a Branch

Never work directly on the `main` or `master` branch. Create a feature or bugfix branch with a descriptive name:

```bash
git checkout -b feat/add-color-presets
# or
git checkout -b fix/location-picker-zoom
```

### 2. Make Your Changes & Keep Them Focused

- Keep PRs focused on a single issue or feature. Avoid bundling unrelated refactors into a single PR.
- Preserve existing comments and architecture conventions.

### 3. Verify Code Quality Locally

Before opening a PR, ensure that the codebase is clean, typed, and formatted:

```bash
# 1. Format code
npm run format

# 2. Check TypeScript types
npm run type-check

# 3. Run unit tests
npm test
```

### 4. Push and Open a Pull Request

Push your branch to your forked repository:

```bash
git push -u origin feat/add-color-presets
```

Then, go to the repository on GitHub and click **"Compare & pull request"**.

### 5. PR Title and Description

- Use Conventional Commit format for your PR title (e.g., `feat(inputs): add preset colors support to ColorPicker`).
- In the PR description, explain:
  - **What**: Summary of the changes.
  - **Why**: Motivation or issue being resolved (link with `Closes #123` or `Fixes #456`).
  - **How**: Technical decisions made.
  - **Testing**: How you verified that your changes work.

### 6. Review & Iterate

- Maintainers will review your pull request. Be open to feedback and discussion.
- If requested changes arise, push new commits to your branch—the PR will update automatically.
- Once approved, maintainers will squash and merge your PR into the main branch.

---

## 💬 Community & Support

- **Discussions**: Have an architecture question or want to discuss an idea before writing code? Start a thread on [GitHub Discussions](https://github.com/zyvnox/vue-pack/discussions).
- **Issue Tracker**: Found a bug? Open a ticket at [GitHub Issues](https://github.com/zyvnox/vue-pack/issues).

---

## 📄 License

By contributing to **@zyvnox/vue-pack**, you agree that your contributions will be licensed under the project's [MIT License](LICENSE).
