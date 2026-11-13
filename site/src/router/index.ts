import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import DocsLayout from '@/layouts/DocsLayout.vue'

const routes: RouteRecordRaw[] = [
  // 1. Standalone Home Page (domain.com /)
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/HomePage.vue'),
  },

  // 2. Dedicated Documentation Portal (domain.com/doc & /doc/...)
  {
    path: '/doc',
    component: DocsLayout,
    children: [
      {
        path: '',
        name: 'doc-home',
        component: () => import('@/pages/GettingStarted.vue'),
      },
      {
        path: 'getting-started',
        name: 'doc-getting-started',
        component: () => import('@/pages/GettingStarted.vue'),
      },
      {
        path: 'whats-new',
        name: 'doc-whats-new',
        component: () => import('@/pages/WhatsNewPage.vue'),
      },
      {
        path: 'installation',
        name: 'doc-installation',
        component: () => import('@/pages/InstallationPage.vue'),
      },
      {
        path: 'config',
        name: 'doc-config',
        component: () => import('@/pages/ConfigPage.vue'),
      },
      {
        path: 'i18n',
        name: 'doc-i18n',
        component: () => import('@/pages/I18nPage.vue'),
      },
      {
        path: 'sponsor',
        name: 'doc-sponsor',
        component: () => import('@/views/Sponsor.vue'),
      },
      // === Main Engines ===
      {
        path: 'examples/form-modal',
        name: 'doc-example-form-modal',
        component: () => import('@/pages/examples/FormModalExample.vue'),
      },
      {
        path: 'examples/tabel-data',
        name: 'doc-example-tabel-data',
        component: () => import('@/pages/examples/TabelDataExample.vue'),
      },
      // === Inputs ===
      {
        path: 'examples/text-input',
        name: 'doc-example-text-input',
        component: () => import('@/pages/examples/TextInputExample.vue'),
      },
      {
        path: 'examples/number-input',
        name: 'doc-example-number-input',
        component: () => import('@/pages/examples/NumberInputExample.vue'),
      },
      {
        path: 'examples/currency-input',
        name: 'doc-example-currency-input',
        component: () => import('@/pages/examples/CurrencyInputExample.vue'),
      },
      {
        path: 'examples/email-input',
        name: 'doc-example-email-input',
        component: () => import('@/pages/examples/EmailInputExample.vue'),
      },
      {
        path: 'examples/password-input',
        name: 'doc-example-password-input',
        component: () => import('@/pages/examples/PasswordInputExample.vue'),
      },
      {
        path: 'examples/tel-input',
        name: 'doc-example-tel-input',
        component: () => import('@/pages/examples/TelInputExample.vue'),
      },
      {
        path: 'examples/url-input',
        name: 'doc-example-url-input',
        component: () => import('@/pages/examples/UrlInputExample.vue'),
      },
      {
        path: 'examples/text-area-input',
        name: 'doc-example-text-area-input',
        component: () => import('@/pages/examples/TextAreaInputExample.vue'),
      },
      {
        path: 'examples/text-area-quill',
        name: 'doc-example-text-area-quill',
        component: () => import('@/pages/examples/TextAreaQuillExample.vue'),
      },
      {
        path: 'examples/text-area-quill-input',
        redirect: '/doc/examples/text-area-quill',
      },
      {
        path: 'examples/combobox',
        name: 'doc-example-combobox',
        component: () => import('@/pages/examples/ComboboxExample.vue'),
      },
      {
        path: 'examples/selected-options',
        redirect: '/doc/examples/combobox',
      },
      {
        path: 'examples/tag-input',
        name: 'doc-example-tag-input',
        component: () => import('@/pages/examples/TagInputExample.vue'),
      },
      {
        path: 'examples/color-picker',
        name: 'doc-example-color-picker',
        component: () => import('@/pages/examples/ColorPickerExample.vue'),
      },
      {
        path: 'examples/color-input',
        redirect: '/doc/examples/color-picker',
      },
      {
        path: 'examples/date-input',
        name: 'doc-example-date-input',
        component: () => import('@/pages/examples/DateInputExample.vue'),
      },
      {
        path: 'examples/time-input',
        name: 'doc-example-time-input',
        component: () => import('@/pages/examples/TimeInputExample.vue'),
      },
      {
        path: 'examples/date-time-input',
        name: 'doc-example-date-time-input',
        component: () => import('@/pages/examples/DateTimeInputExample.vue'),
      },
      {
        path: 'examples/file-input',
        name: 'doc-example-file-input',
        component: () => import('@/pages/examples/FileInputExample.vue'),
      },
      {
        path: 'examples/file-array-input',
        name: 'doc-example-file-array-input',
        component: () => import('@/pages/examples/FileArrayInputExample.vue'),
      },
      {
        path: 'examples/image-input',
        name: 'doc-example-image-input',
        component: () => import('@/pages/examples/ImageInputExample.vue'),
      },
      {
        path: 'examples/image-array-input',
        name: 'doc-example-image-array-input',
        component: () => import('@/pages/examples/ImageArrayInputExample.vue'),
      },
      {
        path: 'examples/toggle-input',
        name: 'doc-example-toggle-input',
        component: () => import('@/pages/examples/ToggleInputExample.vue'),
      },
      {
        path: 'examples/rate-input',
        name: 'doc-example-rate-input',
        component: () => import('@/pages/examples/RateInputExample.vue'),
      },
      {
        path: 'examples/location-picker',
        name: 'doc-example-location-picker',
        component: () => import('@/pages/examples/LocationPickerExample.vue'),
      },
      {
        path: 'examples/map-picker',
        redirect: '/doc/examples/location-picker',
      },
      {
        path: 'examples/array-object',
        name: 'doc-example-array-object',
        component: () => import('@/pages/examples/ArrayObjectExample.vue'),
      },
      {
        path: 'examples/array-object-input',
        redirect: '/doc/examples/array-object',
      },
      {
        path: 'examples/object-input',
        name: 'doc-example-object-input',
        component: () => import('@/pages/examples/ObjectInputExample.vue'),
      },
      {
        path: 'examples/group-renderer',
        name: 'doc-example-group-renderer',
        component: () => import('@/pages/examples/GroupRendererExample.vue'),
      },
      {
        path: 'examples/group-renderer-input',
        redirect: '/doc/examples/group-renderer',
      },
      // === Display ===
      {
        path: 'examples/safe-html',
        name: 'doc-example-safe-html',
        component: () => import('@/pages/examples/SafeHtmlExample.vue'),
      },
      {
        path: 'examples/base-image',
        name: 'doc-example-base-image',
        component: () => import('@/pages/examples/BaseImageExample.vue'),
      },
      {
        path: 'examples/tooltip',
        name: 'doc-example-tooltip',
        component: () => import('@/pages/examples/TooltipExample.vue'),
      },
      {
        path: 'examples/modal-detail-data',
        name: 'doc-example-modal-detail-data',
        component: () => import('@/pages/examples/ModalDetailDataExample.vue'),
      },
      // === Feedback ===
      {
        path: 'examples/alert-app',
        name: 'doc-example-alert-app',
        component: () => import('@/pages/examples/AlertAppExample.vue'),
      },
      {
        path: 'examples/loader',
        name: 'doc-example-loader',
        component: () => import('@/pages/examples/LoaderExample.vue'),
      },
      {
        path: 'examples/warning-form',
        name: 'doc-example-warning-form',
        component: () => import('@/pages/examples/WarningFormExample.vue'),
      },
      // === Tools ===
      {
        path: 'examples/seo-studio',
        name: 'doc-example-seo-studio',
        component: () => import('@/pages/examples/SeoStudioExample.vue'),
      },
    ],
  },

  // 3. Standalone Live Playground (domain.com/playground)
  {
    path: '/playground',
    name: 'playground',
    component: () => import('@/pages/PlaygroundPage.vue'),
  },

  // 4. Backward Compatibility Redirects (auto-remap legacy URLs)
  {
    path: '/getting-started',
    redirect: '/doc/getting-started',
  },
  {
    path: '/installation',
    redirect: '/doc/installation',
  },
  {
    path: '/config',
    redirect: '/doc/config',
  },
  {
    path: '/i18n',
    redirect: '/doc/i18n',
  },
  {
    path: '/sponsor',
    redirect: '/doc/sponsor',
  },
  {
    path: '/whats-new',
    redirect: '/doc/whats-new',
  },
  {
    path: '/examples/:pathMatch(.*)*',
    redirect: (to) => `/doc/examples/${to.params.pathMatch}`,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})

const titlesByRoute: Record<string, { title: string; desc: string }> = {
  home: {
    title: '@zyvnox/vue-pack — Schema-Driven Vue 3 Enterprise UI & Developer Toolkit',
    desc: 'Enterprise-grade Vue 3 component library featuring schema-driven FormModal, interactive TabelData suite, 25+ validated inputs, and real-time SEO engine.',
  },
  playground: {
    title: 'Interactive Playground & Monaco Editor — @zyvnox/vue-pack',
    desc: 'Live browser playground with Monaco code editor to test and experiment with @zyvnox/vue-pack components in real-time.',
  },
  'doc-home': {
    title: 'Getting Started — @zyvnox/vue-pack Documentation',
    desc: 'Learn how to get started with @zyvnox/vue-pack in Vue 3 projects: quick start, installation, and component usage.',
  },
  'doc-getting-started': {
    title: 'Getting Started — @zyvnox/vue-pack Documentation',
    desc: 'Learn how to get started with @zyvnox/vue-pack in Vue 3 projects: quick start, installation, and component usage.',
  },
  'doc-whats-new': {
    title: "What's New in v0.1.4 — @zyvnox/vue-pack",
    desc: 'Discover all new features, enhancements, and bug fixes in @zyvnox/vue-pack v0.1.4.',
  },
  'doc-installation': {
    title: 'Installation & Setup Guide — @zyvnox/vue-pack',
    desc: 'Step-by-step guide to installing @zyvnox/vue-pack via npm, pnpm, yarn, or CDN with Tailwind/UnoCSS support.',
  },
  'doc-config': {
    title: 'Configuration & Global Settings — @zyvnox/vue-pack',
    desc: 'Configure global options, custom styling, theme preferences, and plugin defaults in @zyvnox/vue-pack.',
  },
  'doc-i18n': {
    title: 'Internationalization (i18n) — @zyvnox/vue-pack',
    desc: 'Native multi-language support (English and Indonesian) with automatic location and timezone detection.',
  },
  'doc-sponsor': {
    title: 'Sponsor & Community Support — @zyvnox/vue-pack',
    desc: 'Support independent open-source development of @zyvnox/vue-pack on GitHub Sponsors, Ko-fi, or Saweria.',
  },
  'doc-example-form-modal': {
    title: 'FormModal (Schema-Driven Modal Form Generator) — @zyvnox/vue-pack',
    desc: 'Build modal forms automatically from JSON schema contracts with Zod validation, tabs, and SEO score indicators.',
  },
  'doc-example-tabel-data': {
    title: 'TabelData (Interactive Datatable Suite) — @zyvnox/vue-pack',
    desc: 'Powerful datatable with server-side pagination, sorting, search, selection, and CSV export.',
  },
  'doc-example-seo-studio': {
    title: 'SEO Studio (Real-Time On-Page Auditor) — @zyvnox/vue-pack',
    desc: 'Verify on-page SEO factors in real-time: keyword density, headings, meta tags, and Google SERP snippet preview.',
  },
  'doc-example-location-picker': {
    title: 'LocationPicker / MapPicker (Leaflet GPS & GeoJSON) — @zyvnox/vue-pack',
    desc: 'Interactive Leaflet map coordinate selector with device GPS sync, GeoJSON polygon validation, and geocoding.',
  },
}

router.afterEach((to) => {
  if (typeof document === 'undefined') return

  const routeName = String(to.name || '')
  const metaInfo = titlesByRoute[routeName]

  const pageTitle =
    metaInfo?.title ||
    (routeName.startsWith('doc-example-')
      ? `${routeName
          .replace('doc-example-', '')
          .split('-')
          .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
          .join('')} Component — @zyvnox/vue-pack`
      : '@zyvnox/vue-pack — Schema-Driven Vue 3 Enterprise UI')

  const pageDesc =
    metaInfo?.desc ||
    'Enterprise-grade Vue 3 component library featuring schema-driven FormModal, interactive TabelData, 25+ validated inputs, and real-time SEO engine.'

  document.title = pageTitle

  const setMeta = (name: string, content: string, isProperty = false) => {
    const attr = isProperty ? 'property' : 'name'
    let el = document.querySelector(`meta[${attr}="${name}"]`)
    if (!el) {
      el = document.createElement('meta')
      el.setAttribute(attr, name)
      document.head.appendChild(el)
    }
    el.setAttribute('content', content)
  }

  setMeta('description', pageDesc)
  setMeta('title', pageTitle)
  setMeta('og:title', pageTitle, true)
  setMeta('og:description', pageDesc, true)
  setMeta('twitter:title', pageTitle)
  setMeta('twitter:description', pageDesc)

  const cleanPath = to.path.startsWith('/') ? to.path : `/${to.path}`
  const canonicalUrl = `https://zyvnox.github.io/vue-pack${cleanPath === '/' ? '/' : cleanPath}`
  setMeta('og:url', canonicalUrl, true)
  setMeta('twitter:url', canonicalUrl)

  let linkCanonical = document.querySelector('link[rel="canonical"]')
  if (!linkCanonical) {
    linkCanonical = document.createElement('link')
    linkCanonical.setAttribute('rel', 'canonical')
    document.head.appendChild(linkCanonical)
  }
  linkCanonical.setAttribute('href', canonicalUrl)
})

export default router
