import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import DocsLayout from '@/layouts/DocsLayout.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: DocsLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/pages/HomePage.vue'),
      },
      {
        path: 'getting-started',
        name: 'getting-started',
        component: () => import('@/pages/GettingStarted.vue'),
      },
      {
        path: 'installation',
        name: 'installation',
        component: () => import('@/pages/InstallationPage.vue'),
      },
      {
        path: 'config',
        name: 'config',
        component: () => import('@/pages/ConfigPage.vue'),
      },
      {
        path: 'i18n',
        name: 'i18n',
        component: () => import('@/pages/I18nPage.vue'),
      },
      {
        path: 'sponsor',
        name: 'sponsor',
        component: () => import('@/views/Sponsor.vue'),
      },
      // === Main Engines ===
      {
        path: 'examples/form-modal',
        name: 'example-form-modal',
        component: () => import('@/pages/examples/FormModalExample.vue'),
      },
      {
        path: 'examples/tabel-data',
        name: 'example-tabel-data',
        component: () => import('@/pages/examples/TabelDataExample.vue'),
      },
      // === Inputs ===
      {
        path: 'examples/text-input',
        name: 'example-text-input',
        component: () => import('@/pages/examples/TextInputExample.vue'),
      },
      {
        path: 'examples/number-input',
        name: 'example-number-input',
        component: () => import('@/pages/examples/NumberInputExample.vue'),
      },
      {
        path: 'examples/currency-input',
        name: 'example-currency-input',
        component: () => import('@/pages/examples/CurrencyInputExample.vue'),
      },
      {
        path: 'examples/email-input',
        name: 'example-email-input',
        component: () => import('@/pages/examples/EmailInputExample.vue'),
      },
      {
        path: 'examples/password-input',
        name: 'example-password-input',
        component: () => import('@/pages/examples/PasswordInputExample.vue'),
      },
      {
        path: 'examples/tel-input',
        name: 'example-tel-input',
        component: () => import('@/pages/examples/TelInputExample.vue'),
      },
      {
        path: 'examples/url-input',
        name: 'example-url-input',
        component: () => import('@/pages/examples/UrlInputExample.vue'),
      },
      {
        path: 'examples/text-area-input',
        name: 'example-text-area-input',
        component: () => import('@/pages/examples/TextAreaInputExample.vue'),
      },
      {
        path: 'examples/text-area-quill',
        name: 'example-text-area-quill',
        component: () => import('@/pages/examples/TextAreaQuillExample.vue'),
      },
      {
        path: 'examples/combobox',
        name: 'example-combobox',
        component: () => import('@/pages/examples/ComboboxExample.vue'),
      },
      {
        path: 'examples/tag-input',
        name: 'example-tag-input',
        component: () => import('@/pages/examples/TagInputExample.vue'),
      },
      {
        path: 'examples/color-picker',
        name: 'example-color-picker',
        component: () => import('@/pages/examples/ColorPickerExample.vue'),
      },
      {
        path: 'examples/date-input',
        name: 'example-date-input',
        component: () => import('@/pages/examples/DateInputExample.vue'),
      },
      {
        path: 'examples/time-input',
        name: 'example-time-input',
        component: () => import('@/pages/examples/TimeInputExample.vue'),
      },
      {
        path: 'examples/date-time-input',
        name: 'example-date-time-input',
        component: () => import('@/pages/examples/DateTimeInputExample.vue'),
      },
      {
        path: 'examples/file-input',
        name: 'example-file-input',
        component: () => import('@/pages/examples/FileInputExample.vue'),
      },
      {
        path: 'examples/file-array-input',
        name: 'example-file-array-input',
        component: () => import('@/pages/examples/FileArrayInputExample.vue'),
      },
      {
        path: 'examples/image-input',
        name: 'example-image-input',
        component: () => import('@/pages/examples/ImageInputExample.vue'),
      },
      {
        path: 'examples/image-array-input',
        name: 'example-image-array-input',
        component: () => import('@/pages/examples/ImageArrayInputExample.vue'),
      },
      {
        path: 'examples/toggle-input',
        name: 'example-toggle-input',
        component: () => import('@/pages/examples/ToggleInputExample.vue'),
      },
      {
        path: 'examples/rate-input',
        name: 'example-rate-input',
        component: () => import('@/pages/examples/RateInputExample.vue'),
      },
      {
        path: 'examples/location-picker',
        name: 'example-location-picker',
        component: () => import('@/pages/examples/LocationPickerExample.vue'),
      },
      {
        path: 'examples/array-object',
        name: 'example-array-object',
        component: () => import('@/pages/examples/ArrayObjectExample.vue'),
      },
      {
        path: 'examples/object-input',
        name: 'example-object-input',
        component: () => import('@/pages/examples/ObjectInputExample.vue'),
      },
      {
        path: 'examples/group-renderer',
        name: 'example-group-renderer',
        component: () => import('@/pages/examples/GroupRendererExample.vue'),
      },
      // === Display ===
      {
        path: 'examples/safe-html',
        name: 'example-safe-html',
        component: () => import('@/pages/examples/SafeHtmlExample.vue'),
      },
      {
        path: 'examples/base-image',
        name: 'example-base-image',
        component: () => import('@/pages/examples/BaseImageExample.vue'),
      },
      {
        path: 'examples/tooltip',
        name: 'example-tooltip',
        component: () => import('@/pages/examples/TooltipExample.vue'),
      },
      {
        path: 'examples/modal-detail-data',
        name: 'example-modal-detail-data',
        component: () => import('@/pages/examples/ModalDetailDataExample.vue'),
      },
      // === Feedback ===
      {
        path: 'examples/alert-app',
        name: 'example-alert-app',
        component: () => import('@/pages/examples/AlertAppExample.vue'),
      },
      {
        path: 'examples/loader',
        name: 'example-loader',
        component: () => import('@/pages/examples/LoaderExample.vue'),
      },
      {
        path: 'examples/warning-form',
        name: 'example-warning-form',
        component: () => import('@/pages/examples/WarningFormExample.vue'),
      },
      // === Tools ===
      {
        path: 'examples/seo-studio',
        name: 'example-seo-studio',
        component: () => import('@/pages/examples/SeoStudioExample.vue'),
      },
    ],
  },
  {
    path: '/playground',
    name: 'playground',
    component: () => import('@/pages/PlaygroundPage.vue'),
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
