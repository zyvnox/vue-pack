import {
  defineConfig,
  presetAttributify,
  transformerDirectives,
  presetWind4,
  presetIcons,
  presetTypography,
} from 'unocss'

export default defineConfig({
  content: {
    filesystem: ['src/**/*.{astro,js,ts,vue}', 'site/src/**/*.{astro,js,ts,vue}'],
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
      collections: {
        mdi: () => import('@iconify-json/mdi/icons.json').then((i) => i.default as any),
      },
      scale: 1.2,
      prefix: 'zyvnox-i-',
    }),
    presetTypography({
      cssVarPrefix: 'zyvnox-',
    }),
  ],
  transformers: [transformerDirectives()],
  shortcuts: [
    [
      'zyvnox-btn',
      'zyvnox-px-4 zyvnox-py-2 zyvnox-rounded-md zyvnox-font-medium zyvnox-transition-colors zyvnox-cursor-pointer zyvnox-inline-flex zyvnox-items-center zyvnox-justify-center zyvnox-gap-2',
    ],
    [
      'zyvnox-btn-primary',
      'zyvnox-btn zyvnox-bg-primary zyvnox-text-white hover:zyvnox-opacity-90',
    ],
    ['zyvnox-btn-danger', 'zyvnox-btn zyvnox-bg-danger zyvnox-text-white hover:zyvnox-opacity-90'],
    [
      'zyvnox-input-base',
      'zyvnox-w-full zyvnox-border zyvnox-rounded-md zyvnox-px-3 zyvnox-py-2 focus:zyvnox-outline-none focus:zyvnox-ring-2 focus:zyvnox-ring-primary',
    ],
    [
      'zyvnox-modal-backdrop',
      'zyvnox-fixed zyvnox-inset-0 zyvnox-z-50 zyvnox-flex zyvnox-items-center zyvnox-justify-center zyvnox-bg-black/60 zyvnox-backdrop-blur-sm',
    ],
    [
      'zyvnox-card',
      'zyvnox-bg-white dark:zyvnox-bg-slate-900 zyvnox-rounded-xl zyvnox-border zyvnox-border-slate-200 dark:zyvnox-border-slate-800 zyvnox-shadow-sm',
    ],
  ],
  theme: {
    colors: {
      primary: '#3b82f6',
      danger: '#ef4444',
      'bg-main': '#ffffff',
      'zyvnox-primary': '#3b82f6',
      'zyvnox-danger': '#ef4444',
      'zyvnox-bg-main': '#ffffff',
    },
  },
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
        @keyframes zyvnox-slideInFade { from { opacity: 0; transform: translateX(-10px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes zyvnox-revealContent { from { opacity: 0; transform: translateY(-10px); max-height: 0; } to { opacity: 1; transform: translateY(0); max-height: 1000px; } }
        @keyframes zyvnox-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .zyvnox-animate-spin { animation: zyvnox-spin 0.9s linear infinite !important; }
        
        /* Vue Transitions & Modals */
        .zyvnox-modal-overlay-enter-active { animation: zyvnox-fadeIn 0.3s ease-out; }
        .zyvnox-modal-overlay-leave-active { animation: zyvnox-fadeIn 0.2s ease-in reverse; }
        .zyvnox-modal-container-enter-active { animation: zyvnox-slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .zyvnox-modal-container-leave-active { animation: zyvnox-slideUp 0.2s cubic-bezier(0.16, 1, 0.3, 1) reverse; }
        .zyvnox-modal-fade-enter-active, .zyvnox-modal-fade-leave-active { transition: opacity 0.3s ease; }
        .zyvnox-modal-fade-enter-from, .zyvnox-modal-fade-leave-to { opacity: 0; }
        .zyvnox-form-field-enter-active { animation: zyvnox-slideIn 0.4s ease-out; }
        .zyvnox-form-field-move { transition: transform 0.4s ease; }
        .zyvnox-form-field-leave-active { position: absolute; }
        .zyvnox-action-menu-enter-active, .zyvnox-action-menu-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
        .zyvnox-action-menu-enter-from, .zyvnox-action-menu-leave-to { opacity: 0; transform: translateY(-10px); }
        .zyvnox-seo-popup-enter-active, .zyvnox-seo-popup-leave-active { transition: opacity 0.2s ease; }
        .zyvnox-seo-popup-enter-from, .zyvnox-seo-popup-leave-to { opacity: 0; }
        
        /* Scrollbar Styling */
        .zyvnox-modal-scrollbar { scrollbar-width: thin; scrollbar-color: #cbd5e1 transparent; }
        .dark .zyvnox-modal-scrollbar, html.dark .zyvnox-modal-scrollbar { scrollbar-color: #475569 transparent; }
        .zyvnox-modal-scrollbar::-webkit-scrollbar { width: 8px; height: 8px; }
        .zyvnox-modal-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .zyvnox-modal-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
        .zyvnox-modal-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
        .dark .zyvnox-modal-scrollbar::-webkit-scrollbar-thumb, html.dark .zyvnox-modal-scrollbar::-webkit-scrollbar-thumb { background: #475569; }
        .dark .zyvnox-modal-scrollbar::-webkit-scrollbar-thumb:hover, html.dark .zyvnox-modal-scrollbar::-webkit-scrollbar-thumb:hover { background: #64748b; }
        
        .table-scroll-container::-webkit-scrollbar, .zyvnox-overflow-auto::-webkit-scrollbar { width: 4px; height: 4px; }
        .table-scroll-container::-webkit-scrollbar-track, .zyvnox-overflow-auto::-webkit-scrollbar-track { background: transparent; border-radius: 4px; }
        .table-scroll-container::-webkit-scrollbar-thumb, .zyvnox-overflow-auto::-webkit-scrollbar-thumb { background: #525252; border-radius: 50px; }
        .table-scroll-container::-webkit-scrollbar-thumb:hover, .zyvnox-overflow-auto::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
        
        /* Leaflet Map */
        .zyvnox-pin-marker {
          position: relative;
          width: 24px;
          height: 24px;
          background: var(--pin-color, #dc2626);
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
          z-index: 10;
        }
        .dark-mode-active .leaflet-tile-container img {
          filter: invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%) !important;
          opacity: 1 !important;
        }
        .dark-mode-active {
          background: #1e293b !important;
        }
        .zyvnox-cursor-not-allowed, .zyvnox-map-disabled, .zyvnox-map-disabled .leaflet-container,
        .zyvnox-map-disabled .leaflet-marker-icon, .zyvnox-map-disabled .leaflet-interactive {
          cursor: not-allowed !important;
        }
        .zyvnox-map-disabled {
          filter: grayscale(0.2) opacity(0.8);
          pointer-events: auto;
        }
        .zyvnox-map-disabled .zyvnox-pin-marker {
          cursor: not-allowed !important;
        }
        .leaflet-container {
          transition: background-color 0.3s ease;
        }

        /* Quill Editor */
        .ql-snow .ql-stroke { stroke: currentColor; }
        .ql-snow .ql-fill { fill: currentColor; }
        .rich-text-editor-wrapper .ql-toolbar.ql-snow {
          border-radius: 0.75rem 0.75rem 0 0;
          padding: 8px;
        }
        .rich-text-editor-wrapper .ql-container.ql-snow {
          flex-grow: 1;
          overflow: hidden;
        }

        /* FIX: Sembunyikan Placeholder saat Quill Disabled/Read-Only */
        .rich-text-editor-wrapper .ql-disabled .ql-editor.ql-blank::before,
        .rich-text-editor-wrapper .ql-container.ql-disabled::before {
          display: none !important;
        }

        .rich-text-editor-wrapper .ql-editor {
          overflow-y: auto;
          height: 100%;
        }
        .rich-text-editor-wrapper .ql-editor img {
          display: inline-block !important;
        }
        .rich-text-editor-wrapper .ql-editor img[style*='float: left'] {
          margin-right: 1.5rem !important;
          margin-bottom: 0.5rem;
        }
        .rich-text-editor-wrapper .ql-editor img[style*='float: right'] {
          margin-left: 1.5rem !important;
          margin-bottom: 0.5rem;
        }
        html.dark .rich-text-editor-wrapper .ql-toolbar.ql-snow,
        .dark .rich-text-editor-wrapper .ql-toolbar.ql-snow {
          background-color: #111827;
          border-color: #374151 !important;
        }
        html.dark .rich-text-editor-wrapper .ql-container.ql-snow,
        .dark .rich-text-editor-wrapper .ql-container.ql-snow {
          background-color: #1f2937;
          border-color: #374151 !important;
          color: #f3f4f6;
        }
        html.dark .rich-text-editor-wrapper .ql-snow .ql-stroke,
        .dark .rich-text-editor-wrapper .ql-snow .ql-stroke {
          stroke: #f3f4f6;
        }
        html.dark .rich-text-editor-wrapper .ql-snow .ql-fill,
        .dark .rich-text-editor-wrapper .ql-snow .ql-fill {
          fill: #f3f4f6;
        }
        html.dark .rich-text-editor-wrapper .ql-snow .ql-picker,
        .dark .rich-text-editor-wrapper .ql-snow .ql-picker {
          color: #f3f4f6;
        }
        html.dark .rich-text-editor-wrapper .ql-snow .ql-picker-options,
        .dark .rich-text-editor-wrapper .ql-snow .ql-picker-options {
          background-color: #374151 !important;
          border-color: #4b5563 !important;
          color: #f3f4f6 !important;
        }

        /* Quill Enhanced Toolbar & Pickers */
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-size {
          width: 150px;
        }
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-font {
          width: 150px;
        }
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-header {
          width: 150px;
        }

        /* Custom Pixel Font Sizes in Snow Picker */
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="9px"]::before,
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="9px"]::before { content: '9px'; font-size: 9px; }
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="10px"]::before,
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="10px"]::before { content: '10px'; font-size: 10px; }
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="11px"]::before,
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="11px"]::before { content: '11px'; font-size: 11px; }
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="12px"]::before,
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="12px"]::before { content: '12px'; font-size: 12px; }
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="13px"]::before,
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="13px"]::before { content: '13px'; font-size: 13px; }
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="14px"]::before,
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="14px"]::before { content: '14px (Normal)'; font-size: 14px; }
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="16px"]::before,
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="16px"]::before { content: '16px'; font-size: 16px; }
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="18px"]::before,
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="18px"]::before { content: '18px'; font-size: 18px; }
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="20px"]::before,
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="20px"]::before { content: '20px'; font-size: 20px; }
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="22px"]::before,
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="22px"]::before { content: '22px'; font-size: 22px; }
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="24px"]::before,
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="24px"]::before { content: '24px'; font-size: 24px; }
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="28px"]::before,
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="28px"]::before { content: '28px'; font-size: 28px; }
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="32px"]::before,
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="32px"]::before { content: '32px'; font-size: 32px; }
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="36px"]::before,
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="36px"]::before { content: '36px'; font-size: 36px; }
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="48px"]::before,
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="48px"]::before { content: '48px'; font-size: 48px; }

        /* Custom Font Families in Snow Picker & Editor */
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="inter"]::before,
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="inter"]::before { content: 'Inter'; font-family: 'Inter', sans-serif; }
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="roboto"]::before,
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="roboto"]::before { content: 'Roboto'; font-family: 'Roboto', sans-serif; }
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="poppins"]::before,
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="poppins"]::before { content: 'Poppins'; font-family: 'Poppins', sans-serif; }
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="arial"]::before,
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="arial"]::before { content: 'Arial'; font-family: Arial, sans-serif; }
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="georgia"]::before,
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="georgia"]::before { content: 'Georgia'; font-family: Georgia, serif; }
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="times-new-roman"]::before,
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="times-new-roman"]::before { content: 'Times New Roman'; font-family: 'Times New Roman', serif; }
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="courier-new"]::before,
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="courier-new"]::before { content: 'Courier New'; font-family: 'Courier New', monospace; }
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="trebuchet-ms"]::before,
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="trebuchet-ms"]::before { content: 'Trebuchet MS'; font-family: 'Trebuchet MS', sans-serif; }
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="verdana"]::before,
        .rich-text-editor-wrapper .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="verdana"]::before { content: 'Verdana'; font-family: Verdana, sans-serif; }

        /* Headings H1 to H6 styling inside Editor */
        .rich-text-editor-wrapper .ql-editor h1 { font-size: 2.25rem; font-weight: 700; margin-top: 1.25rem; margin-bottom: 0.5rem; line-height: 1.2; }
        .rich-text-editor-wrapper .ql-editor h2 { font-size: 1.75rem; font-weight: 700; margin-top: 1rem; margin-bottom: 0.4rem; line-height: 1.25; }
        .rich-text-editor-wrapper .ql-editor h3 { font-size: 1.35rem; font-weight: 600; margin-top: 0.85rem; margin-bottom: 0.35rem; line-height: 1.3; }
        .rich-text-editor-wrapper .ql-editor h4 { font-size: 1.15rem; font-weight: 600; margin-top: 0.75rem; margin-bottom: 0.3rem; line-height: 1.35; }
        .rich-text-editor-wrapper .ql-editor h5 { font-size: 1rem; font-weight: 600; margin-top: 0.65rem; margin-bottom: 0.25rem; line-height: 1.4; }
        .rich-text-editor-wrapper .ql-editor h6 { font-size: 0.875rem; font-weight: 600; margin-top: 0.5rem; margin-bottom: 0.25rem; line-height: 1.4; }
        .rich-text-editor-wrapper .ql-editor hr { border: none; border-top: 2px solid #e2e8f0; margin: 1.5rem 0; }
        html.dark .rich-text-editor-wrapper .ql-editor hr, .dark .rich-text-editor-wrapper .ql-editor hr { border-top-color: #334155; }

        .rich-text-editor-wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          width: 100%;
          margin-bottom: 1.5rem;
        }
        .editor-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }
        .quill-editor-container {
          min-height: 350px;
          height: 350px;
          display: flex;
          flex-direction: column;
        }
        .editor-maximized {
          position: fixed;
          inset: 0;
          z-index: 9999;
          padding: 1.5rem;
          background-color: #ffffff;
          height: 100vh;
          width: 100vw;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }
        html.dark .editor-maximized, .dark .editor-maximized {
          background-color: #0f172a;
        }
        .editor-maximized .quill-editor-container,
        .editor-maximized .ql-container {
          height: 100% !important;
          flex-grow: 1;
        }
        .editor-maximized .ql-editor {
          flex-grow: 1;
          overflow-y: auto;
        }
        .upload-overlay {
          position: absolute;
          inset: 0;
          z-index: 100;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(4px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        html.dark .upload-overlay, .dark .upload-overlay {
          background: rgba(31, 41, 55, 0.85) !important;
          color: #f3f4f6 !important;
        }
        .ai-gen-button {
          background: rgba(147, 51, 234, 0.1) !important;
          border-radius: 6px !important;
          border: 1px solid rgba(147, 51, 234, 0.2) !important;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9333ea !important;
        }
        .ai-gen-button:hover {
          background: rgba(147, 51, 234, 0.2) !important;
          transform: scale(1.05);
        }
        .code-view-editor {
          width: 100%;
          min-height: 350px;
          height: 350px;
          flex-grow: 1;
          padding: 1rem;
          font-family: monospace;
          font-size: 14px;
          resize: vertical;
          outline: none;
        }
        html.dark .code-view-editor, .dark .code-view-editor {
          background-color: #1f2937;
          color: #f3f4f6;
          border-color: #374151;
        }
        .editor-maximized .code-view-editor {
          flex-grow: 1;
          height: 100%;
        }

        /* Global Space Utilities Fix */
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
