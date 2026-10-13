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
        <span>@zyvnox/vue-pack {{ version }}</span>
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
    version?: string
  }>(),
  {
    isDark: false,
    version: '0.1.1',
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

  // Extract explicitly imported component names from the user's script
  const importedComponents = new Set<string>()
  const importMatches = script.matchAll(/import\s+\{([^}]+)\}\s+from\s+['"][^'"]+['"]/g)
  for (const m of importMatches) {
    if (m[1]) {
      m[1].split(',').forEach((item) => {
        const parts = item.trim().split(/\s+as\s+/)
        const localName = parts[parts.length - 1].trim()
        if (localName) importedComponents.add(localName)
      })
    }
  }
  const defaultImports = script.matchAll(/import\s+([a-zA-Z0-9_$]+)\s+from\s+['"][^'"]+['"]/g)
  for (const m of defaultImports) {
    if (m[1] && !m[1].startsWith('{')) {
      importedComponents.add(m[1].trim())
    }
  }

  // Clean script: remove static import declarations that we handle dynamically
  const cleanedScript = script
    .replace(/import\s+[\s\S]*?from\s+['"][^'"]+['"];?/g, '')
    .replace(/import\s+['"][^'"]+['"];?/g, '')
    .trim()

  // Generate binding lines ONLY for explicitly imported identifiers
  const importedBindingLines = Array.from(importedComponents)
    .map(
      (name) =>
        `const ${name} = (window.ZyvnoxVuePack && window.ZyvnoxVuePack['${name}']) || (window.Vue && window.Vue['${name}']) || undefined;`,
    )
    .join('\n')

  // Extract declared variable/function identifiers to expose them to template
  const declaredIds = new Set<string>()
  for (const id of importedComponents) {
    declaredIds.add(id)
  }
  const varMatches = cleanedScript.matchAll(/(?:const|let|var|function)\s+([a-zA-Z0-9_$]+)/g)
  for (const m of varMatches) {
    if (m[1]) declaredIds.add(m[1])
  }
  // Common fallback reactive variables
  ;['name', 'title', 'isOpen', 'count'].forEach((id) => declaredIds.add(id))

  const returnScope = `{ ${Array.from(declaredIds)
    .map((id) => `...(typeof ${id} !== 'undefined' ? { ${id} } : {})`)
    .join(', ')} }`

  return `
<!DOCTYPE html>
<html lang="en" class="${props.isDark ? 'dark' : ''}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- CDN Stylesheet for @zyvnox/vue-pack with resilient CDN fallback -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@unocss/reset/tailwind.min.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@zyvnox/vue-pack@${props.version}/dist/style.css" onerror="this.onerror=null;this.href='https://esm.sh/@zyvnox/vue-pack@${props.version}/dist/style.css';" />
  
  <!-- CDN Tailwind for layout in preview -->
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>

  <!-- Vue 3.5 Global Build (with complete in-browser Runtime Template Compiler) -->
  <script src="https://cdn.jsdelivr.net/npm/vue@3.5/dist/vue.global.js"><\/script>

  <!-- @zyvnox/vue-pack Standalone CDN UMD Bundle (with all dependencies pre-bundled) -->
  <script src="https://cdn.jsdelivr.net/npm/@zyvnox/vue-pack@${props.version}/dist/cdn/vue-pack.umd.js" onerror="this.onerror=null;this.src='https://unpkg.com/@zyvnox/vue-pack@${props.version}/dist/cdn/vue-pack.umd.js';"><\/script>
  <script src="https://cdn.jsdelivr.net/npm/@unocss/runtime"><\/script>
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

  <script>
    (function() {
      const errorEl = document.getElementById('error-container')
      function showError(msg) {
        if (errorEl) {
          errorEl.style.display = 'block'
          errorEl.textContent = 'Preview Error: ' + msg
        }
      }

      window.addEventListener('error', function(e) {
        showError(e.message || String(e))
      })

      window.addEventListener('unhandledrejection', function(e) {
        showError(e.reason?.message || String(e.reason))
      })

      function start() {
        if (!window.Vue) {
          showError('Vue 3 failed to load from CDN. Please check your internet connection.')
          return
        }

        const {
          createApp,
          ref,
          shallowRef,
          reactive,
          shallowReactive,
          computed,
          watch,
          watchEffect,
          onMounted,
          onUnmounted,
          onUpdated,
          nextTick,
          provide,
          inject,
          toRef,
          toRefs,
          unref,
          isRef
        } = window.Vue

        const Components = window.ZyvnoxVuePack || {}

        function toKebab(str) {
          return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
        }

        // Only register components that were EXPLICITLY imported in the script
        const importedComponentMap = {}
        const explicitlyImported = ${JSON.stringify(Array.from(importedComponents))}
        explicitlyImported.forEach(function(name) {
          if (Components[name]) {
            importedComponentMap[name] = Components[name]
            const kebab = toKebab(name)
            if (kebab !== name) {
              importedComponentMap[kebab] = Components[name]
            }
          }
        })

        try {
          const App = {
            template: ${JSON.stringify(template || '<div class="p-4 text-slate-500">No template provided</div>')},
            components: importedComponentMap,
            setup() {
              try {
                ${importedBindingLines}
                ${cleanedScript}
                return ${returnScope}
              } catch (setupErr) {
                showError('Script Setup Error: ' + setupErr.message)
                return {}
              }
            }
          }

          const app = createApp(App)

          app.config.errorHandler = function(err) {
            showError('Vue Runtime Error: ' + (err.message || String(err)))
          }

          app.config.warnHandler = function(msg) {
            console.warn('[Vue warn]:', msg)
            if (msg.includes('Failed to resolve component')) {
              showError(msg)
            }
          }

          app.mount('#app')
        } catch (err) {
          showError('App Mount Error: ' + (err.message || String(err)))
        }
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start)
      } else {
        start()
      }
    })()
  <\/script>
</body>
</html>`
})
</script>
