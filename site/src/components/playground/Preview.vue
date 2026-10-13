<template>
  <div class="h-full flex flex-col bg-slate-50 dark:bg-slate-900 transition-colors duration-200">
    <div
      class="px-4 py-2 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 select-none transition-colors duration-200"
    >
      <div class="flex items-center gap-2 font-mono">
        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span class="font-semibold text-slate-800 dark:text-slate-200">Live Preview</span>
        <span
          class="text-[10px] text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800/60 px-1.5 py-0.5 rounded font-mono"
        >
          CDN Mode (Isolated iframe)
        </span>
      </div>
      <div class="flex items-center gap-3 text-[11px] text-slate-400 dark:text-slate-500">
        <span>Vue 3.5+</span>
        <span>•</span>
        <span>@zyvnox/vue-pack 0.1.0</span>
      </div>
    </div>

    <div class="flex-1 relative bg-slate-100 dark:bg-slate-950 p-2 transition-colors duration-200">
      <!-- Live Sandbox Iframe -->
      <iframe
        ref="iframeEl"
        class="w-full h-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-inner transition-colors duration-200"
        sandbox="allow-scripts allow-modals allow-same-origin"
        :srcdoc="generatedSrcDoc"
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    code: string
    isDark?: boolean
  }>(),
  {
    isDark: false,
  },
)

// Helper to parse SFC template and script parts
function parseSFC(sfcCode: string) {
  let template = ''
  let script = ''

  const templateMatch = sfcCode.match(/<template[^>]*>([\s\S]*?)<\/template>/i)
  if (templateMatch) {
    template = templateMatch[1].trim()
  } else {
    // If no template tag, assume the entire code is HTML/template
    template = sfcCode.trim()
  }

  const scriptMatch = sfcCode.match(/<script[^>]*>([\s\S]*?)<\/script>/i)
  if (scriptMatch) {
    script = scriptMatch[1].trim()
  }

  return { template, script }
}

const generatedSrcDoc = computed(() => {
  const { template, script } = parseSFC(props.code)

  // Clean script: remove static import declarations that we handle dynamically
  const cleanedScript = script
    .replace(/import\s+{[^}]+}\s+from\s+['"][^'"]+['"]/g, '')
    .replace(/import\s+['"][^'"]+['"]/g, '')
    .trim()

  return `<!DOCTYPE html>
<html lang="en" class="${props.isDark ? 'dark' : ''}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- CDN Stylesheet for @zyvnox/vue-pack with local fallback for pre-published dev -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@zyvnox/vue-pack@0.1.0/dist/style.css" onerror="this.onerror=null;this.href='/src/style.css';" />
  
  <!-- CDN Tailwind for layout in preview -->
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>

  <!-- Importmap -->
  <script type="importmap">
  {
    "imports": {
      "vue": "https://cdn.jsdelivr.net/npm/vue@3.5/dist/vue.esm-browser.js",
      "@zyvnox/vue-pack": "https://cdn.jsdelivr.net/npm/@zyvnox/vue-pack@0.1.0/dist/zyvnox-vue-pack.es.js",
      "@zyvnox/vue-pack/components": "https://cdn.jsdelivr.net/npm/@zyvnox/vue-pack@0.1.0/dist/components.es.js"
    }
  }
  <\/script>

  <style>
    html.dark body {
      background-color: #0f172a;
      color: #f8fafc;
    }
    html:not(.dark) body {
      background-color: #f8fafc;
      color: #0f172a;
    }
    body {
      font-family: ui-sans-serif, system-ui, sans-serif;
      margin: 0;
      padding: 1.5rem;
      transition: background-color 0.2s ease, color 0.2s ease;
    }
    #error-container {
      display: none;
      margin-bottom: 1rem;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;
      background-color: rgba(239, 68, 68, 0.15);
      border: 1px solid rgba(239, 68, 68, 0.4);
      color: #fca5a5;
      font-family: monospace;
      font-size: 0.75rem;
      white-space: pre-wrap;
    }
  </style>
</head>
<body>
  <div id="error-container"></div>
  <div id="app"></div>

  <script type="module">
    import { createApp, ref, reactive, computed, watch, onMounted } from 'vue'

    const errorEl = document.getElementById('error-container')
    function showError(msg) {
      if (errorEl) {
        errorEl.style.display = 'block'
        errorEl.textContent = 'Preview Error: ' + msg
      }
    }

    window.addEventListener('error', (e) => {
      showError(e.message || String(e))
    })

    async function init() {
      let Components = {}
      try {
        Components = await import('@zyvnox/vue-pack/components')
      } catch (err) {
        try {
          // Dev mode fallback before npm publish
          Components = await import('/src/components/index.ts')
        } catch (fallbackErr) {
          showError('Failed to load @zyvnox/vue-pack/components from CDN or local fallback.')
          return
        }
      }

      try {
        const App = {
          template: ${JSON.stringify(template || '<div>No template</div>')},
          setup() {
            try {
              ${cleanedScript}
              // Return all variables created in scope if any
              return {
                ...(typeof name !== 'undefined' ? { name } : {}),
                ...(typeof title !== 'undefined' ? { title } : {}),
                ...(typeof isOpen !== 'undefined' ? { isOpen } : {}),
                ...(typeof count !== 'undefined' ? { count } : {}),
              }
            } catch (setupErr) {
              showError(setupErr.message)
              return {}
            }
          }
        }

        const app = createApp(App)

        // Register all library components
        Object.entries(Components).forEach(([name, comp]) => {
          if (comp && (typeof comp === 'object' || typeof comp === 'function')) {
            app.component(name, comp)
          }
        })

        app.mount('#app')
      } catch (appErr) {
        showError(appErr.message)
      }
    }

    init()
  <\/script>
</body>
</html>`
})
</script>
