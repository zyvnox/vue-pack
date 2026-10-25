import {
  defineConfig,
  presetAttributify,
  presetWind4,
  presetIcons,
  presetTypography,
  transformerDirectives,
} from 'unocss'

import { resolve } from 'node:path'

export default defineConfig({
  content: {
    filesystem: [
      resolve(import.meta.dirname, 'src/**/*.{vue,js,ts}'),
      resolve(import.meta.dirname, '../src/**/*.{vue,js,ts}'),
    ],
  },
  presets: [
    presetWind4({ dark: 'class' }),
    presetAttributify(),
    presetIcons({
      collections: {
        mdi: () => import('@iconify-json/mdi/icons.json').then((i) => i.default as any),
      },
      scale: 1.2,
      prefix: 'i-',
    }),
    presetTypography(),
  ],
  transformers: [transformerDirectives()],
  preflights: [
    {
      getCSS: () => `
        @keyframes zyvnox-fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes zyvnox-slideUp { from { opacity: 0; transform: translateY(30px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes zyvnox-slideIn { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes zyvnox-slideInFromBottom { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes zyvnox-popIn { 0% { transform: scale(0.6); opacity: 0; } 80% { transform: scale(1.05); opacity: 1; } 100% { transform: scale(1); opacity: 1; } }
        @keyframes zyvnox-scaleIn { from { opacity: 0; transform: translateY(20px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes zyvnox-slideUpFade { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes zyvnox-slideDownFade { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes zyvnox-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .zyvnox-animate-spin { animation: zyvnox-spin 0.9s linear infinite !important; }

        .space-y-1 > :not([hidden]) ~ :not([hidden]), .zyvnox-space-y-1 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.25rem !important; }
        .space-y-2 > :not([hidden]) ~ :not([hidden]), .zyvnox-space-y-2 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.5rem !important; }
        .space-y-3 > :not([hidden]) ~ :not([hidden]), .zyvnox-space-y-3 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.75rem !important; }
        .space-y-4 > :not([hidden]) ~ :not([hidden]), .zyvnox-space-y-4 > :not([hidden]) ~ :not([hidden]) { margin-top: 1rem !important; }
        .space-y-6 > :not([hidden]) ~ :not([hidden]), .zyvnox-space-y-6 > :not([hidden]) ~ :not([hidden]) { margin-top: 1.5rem !important; }
        .space-y-8 > :not([hidden]) ~ :not([hidden]), .zyvnox-space-y-8 > :not([hidden]) ~ :not([hidden]) { margin-top: 2rem !important; }
        .space-y-10 > :not([hidden]) ~ :not([hidden]), .zyvnox-space-y-10 > :not([hidden]) ~ :not([hidden]) { margin-top: 2.5rem !important; }
        .space-y-12 > :not([hidden]) ~ :not([hidden]), .zyvnox-space-y-12 > :not([hidden]) ~ :not([hidden]) { margin-top: 3rem !important; }
        .space-x-1 > :not([hidden]) ~ :not([hidden]), .zyvnox-space-x-1 > :not([hidden]) ~ :not([hidden]) { margin-left: 0.25rem !important; }
        .space-x-2 > :not([hidden]) ~ :not([hidden]), .zyvnox-space-x-2 > :not([hidden]) ~ :not([hidden]) { margin-left: 0.5rem !important; }
        .space-x-3 > :not([hidden]) ~ :not([hidden]), .zyvnox-space-x-3 > :not([hidden]) ~ :not([hidden]) { margin-left: 0.75rem !important; }
        .space-x-4 > :not([hidden]) ~ :not([hidden]), .zyvnox-space-x-4 > :not([hidden]) ~ :not([hidden]) { margin-left: 1rem !important; }
      `,
    },
  ],
})
