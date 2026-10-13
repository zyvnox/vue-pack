import {
  defineConfig,
  presetAttributify,
  presetWind4,
  presetIcons,
  presetTypography,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  content: {
    filesystem: ['src/**/*.{vue,js,ts}', '../src/**/*.{vue,js,ts}'],
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
