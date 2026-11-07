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

        /* Quill Placeholder Theme-Aware Styling */
        .rich-text-editor-wrapper .ql-editor.ql-blank::before,
        .ql-snow .ql-editor.ql-blank::before {
          color: #94a3b8 !important;
          font-style: normal !important;
          font-weight: 400 !important;
          left: 16px !important;
          right: 16px !important;
          opacity: 0.85 !important;
          pointer-events: none;
        }

        html.dark .rich-text-editor-wrapper .ql-editor.ql-blank::before,
        .dark .rich-text-editor-wrapper .ql-editor.ql-blank::before,
        html.dark .ql-snow .ql-editor.ql-blank::before,
        .dark .ql-snow .ql-editor.ql-blank::before {
          color: #f8fafc !important;
          opacity: 0.7 !important;
        }

        /* Pickers layout, alignment & arrow positioning */
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-font,
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-size,
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-header {
          width: auto !important;
          height: 28px !important;
          display: inline-flex !important;
          align-items: center !important;
          vertical-align: middle !important;
          float: none !important;
        }

        .rich-text-editor-wrapper .ql-toolbar.ql-snow .ql-picker.ql-font .ql-picker-label,
        .rich-text-editor-wrapper .ql-toolbar.ql-snow .ql-picker.ql-size .ql-picker-label,
        .rich-text-editor-wrapper .ql-toolbar.ql-snow .ql-picker.ql-header .ql-picker-label {
          height: 28px !important;
          width: auto !important;
          display: inline-flex !important;
          align-items: center !important;
          padding: 0 6px 0 8px !important;
          border-radius: 6px !important;
          border: 1px solid transparent !important;
          color: #475569 !important;
          font-size: 13px !important;
          white-space: nowrap !important;
          cursor: pointer !important;
          position: relative !important;
          transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease !important;
        }

        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-font .ql-picker-label::before,
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-size .ql-picker-label::before,
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-header .ql-picker-label::before {
          display: inline-block !important;
          line-height: 26px !important;
          vertical-align: middle !important;
        }

        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-font .ql-picker-label svg,
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-size .ql-picker-label svg,
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-header .ql-picker-label svg,
        .rich-text-editor-wrapper .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
          position: static !important;
          right: auto !important;
          top: auto !important;
          margin: 0 0 0 5px !important;
          transform: none !important;
          width: 13px !important;
          height: 13px !important;
          pointer-events: none !important;
          flex-shrink: 0 !important;
          align-self: center !important;
        }

        .rich-text-editor-wrapper .ql-toolbar.ql-snow .ql-picker.ql-font .ql-picker-label:hover,
        .rich-text-editor-wrapper .ql-toolbar.ql-snow .ql-picker.ql-size .ql-picker-label:hover,
        .rich-text-editor-wrapper .ql-toolbar.ql-snow .ql-picker.ql-header .ql-picker-label:hover,
        .rich-text-editor-wrapper .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
          background-color: #e2e8f0 !important;
          border-color: #cbd5e1 !important;
          color: #0f172a !important;
        }

        .rich-text-editor-wrapper .ql-snow .ql-picker-options {
          top: 100% !important;
          margin-top: 4px !important;
          min-width: 100% !important;
          width: max-content !important;
          max-width: 240px !important;
          max-height: 280px !important;
          overflow-y: auto !important;
          z-index: 50 !important;
          border-radius: 8px !important;
        }

        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before { content: 'Heading 1'; font-size: 15px; font-weight: 700; }
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before { content: 'Heading 2'; font-size: 14px; font-weight: 700; }
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before { content: 'Heading 3'; font-size: 13px; font-weight: 600; }
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before { content: 'Heading 4'; font-size: 12px; font-weight: 600; }
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before { content: 'Heading 5'; font-size: 12px; font-weight: 600; }
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before { content: 'Heading 6'; font-size: 11px; font-weight: 600; }
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-header .ql-picker-label:not([data-value])::before,
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-header .ql-picker-item:not([data-value])::before { content: 'Normal'; font-size: 13px; font-weight: 400; }

        html.dark .rich-text-editor-wrapper .ql-toolbar.ql-snow .ql-picker-label,
        .dark .rich-text-editor-wrapper .ql-toolbar.ql-snow .ql-picker-label {
          color: #cbd5e1;
        }

        html.dark .rich-text-editor-wrapper .ql-toolbar.ql-snow .ql-picker-label:hover,
        .dark .rich-text-editor-wrapper .ql-toolbar.ql-snow .ql-picker-label:hover {
          background-color: #1e293b;
          border-color: #334155;
          color: #ffffff;
        }

        /* Quill Image Resize Toolbar Styling */
        .ql-resize-overlay {
          border: 1.5px dashed #6366f1 !important;
          box-sizing: border-box !important;
        }

        .ql-resize-toolbar {
          position: absolute !important;
          top: -14px !important;
          left: 50% !important;
          right: auto !important;
          transform: translateX(-50%) !important;
          margin: 0 !important;
          height: auto !important;
          min-width: auto !important;
          display: inline-flex !important;
          flex-direction: row !important;
          align-items: center !important;
          gap: 3px !important;
          padding: 4px !important;
          border-radius: 8px !important;
          background-color: #ffffff !important;
          border: 1px solid #e2e8f0 !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12) !important;
          z-index: 9999 !important;
          white-space: nowrap !important;
          box-sizing: border-box !important;
          pointer-events: auto !important;
        }

        html.dark .ql-resize-toolbar,
        .dark .ql-resize-toolbar,
        :root.dark .ql-resize-toolbar {
          background-color: #1e293b !important;
          border-color: #334155 !important;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.45) !important;
        }

        .ql-resize-toolbar button {
          border: none !important;
          border-radius: 6px !important;
          padding: 4px 7px !important;
          min-width: 28px !important;
          height: 28px !important;
          cursor: pointer !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          font-size: 12px !important;
          font-weight: 500 !important;
          box-sizing: border-box !important;
          background-color: transparent !important;
          color: #475569 !important;
          transition: background-color 0.15s ease, color 0.15s ease !important;
          outline: none !important;
          box-shadow: none !important;
          vertical-align: middle !important;
        }

        html.dark .ql-resize-toolbar button,
        .dark .ql-resize-toolbar button,
        :root.dark .ql-resize-toolbar button {
          color: #cbd5e1 !important;
        }

        .ql-resize-toolbar button:hover {
          background-color: #f1f5f9 !important;
          color: #0f172a !important;
        }

        html.dark .ql-resize-toolbar button:hover,
        .dark .ql-resize-toolbar button:hover,
        :root.dark .ql-resize-toolbar button:hover {
          background-color: #334155 !important;
          color: #ffffff !important;
        }

        .ql-resize-toolbar button.active,
        .ql-resize-toolbar button.ql-active,
        .ql-resize-toolbar button[aria-pressed="true"] {
          background-color: #4f46e5 !important;
          color: #ffffff !important;
          font-weight: 600 !important;
          filter: none !important;
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.2) !important;
        }

        html.dark .ql-resize-toolbar button.active,
        html.dark .ql-resize-toolbar button.ql-active,
        html.dark .ql-resize-toolbar button[aria-pressed="true"],
        .dark .ql-resize-toolbar button.active,
        .dark .ql-resize-toolbar button.ql-active,
        .dark .ql-resize-toolbar button[aria-pressed="true"],
        :root.dark .ql-resize-toolbar button.active,
        :root.dark .ql-resize-toolbar button.ql-active,
        :root.dark .ql-resize-toolbar button[aria-pressed="true"] {
          background-color: #4f46e5 !important;
          color: #ffffff !important;
        }

        .ql-resize-toolbar button.active:hover,
        .ql-resize-toolbar button.ql-active:hover {
          background-color: #4338ca !important;
          color: #ffffff !important;
        }

        .ql-resize-toolbar svg {
          width: 16px !important;
          height: 16px !important;
          fill: currentColor !important;
          color: currentColor !important;
          pointer-events: none !important;
          display: inline-block !important;
          vertical-align: middle !important;
        }

        .ql-resize-toolbar svg path,
        .ql-resize-toolbar svg rect,
        .ql-resize-toolbar svg polygon,
        .ql-resize-toolbar svg polyline,
        .ql-resize-toolbar svg line,
        .ql-resize-toolbar svg circle,
        .ql-resize-toolbar .ql-fill {
          fill: currentColor !important;
        }

        .ql-resize-handle {
          width: 10px !important;
          height: 10px !important;
          border-radius: 2px !important;
          background-color: #4f46e5 !important;
          border: 1.5px solid #ffffff !important;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3) !important;
          box-sizing: border-box !important;
          opacity: 1 !important;
        }

        .ql-resize-display {
          background-color: #1e293b !important;
          color: #ffffff !important;
          border: 1px solid #334155 !important;
          border-radius: 4px !important;
          font-size: 11px !important;
          font-weight: 600 !important;
          padding: 3px 6px !important;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25) !important;
          box-sizing: border-box !important;
          opacity: 0.95 !important;
        }

        html:not(.dark) .ql-resize-display,
        :root:not(.dark) .ql-resize-display {
          background-color: #ffffff !important;
          color: #0f172a !important;
          border: 1px solid #cbd5e1 !important;
        }
      `,
    },
  ],
})
