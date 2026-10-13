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
        path: 'examples/combobox',
        name: 'doc-example-combobox',
        component: () => import('@/pages/examples/ComboboxExample.vue'),
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
        path: 'examples/array-object',
        name: 'doc-example-array-object',
        component: () => import('@/pages/examples/ArrayObjectExample.vue'),
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

export default router
