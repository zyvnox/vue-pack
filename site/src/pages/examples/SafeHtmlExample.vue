<template>
  <div class="space-y-8">
    <header class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">
        SafeHtml (XSS Sanitizer)
      </h1>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Secure HTML rendering component powered by DOMPurify that automatically neutralizes malicious scripts, onerror vectors, and XSS exploits.
      </p>
    </header>

    <!-- Demo 1: Safe Markup -->
    <DemoSection title="Standard Formatted Markup" description="Renders safe HTML tags including headings, bold text, links, and lists.">
      <div class="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
        <SafeHtml :html="safeSnippet" />
      </div>

      <template #code>
        <CodeBlock :code="safeCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 2: XSS Attack Neutralization -->
    <DemoSection title="XSS Attack Stripping Demo" description="Demonstrates how embedded script tags and onerror vectors are safely sanitized.">
      <div class="space-y-2">
        <div class="text-xs text-slate-500">Untrusted Input String:</div>
        <pre class="p-2.5 rounded bg-rose-950/20 border border-rose-900/40 text-rose-400 font-mono text-xs">{{ maliciousSnippet }}</pre>

        <div class="text-xs text-slate-500 pt-2">Rendered Output via SafeHtml:</div>
        <div class="p-4 rounded-lg border border-emerald-300 dark:border-emerald-800 bg-emerald-50/40 dark:bg-emerald-950/20">
          <SafeHtml :html="maliciousSnippet" />
        </div>
      </div>

      <template #code>
        <CodeBlock :code="maliciousCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 3: Custom Wrapper Element -->
    <DemoSection title="Custom Wrapper Tag" description="Render as a paragraph, span, or section via the as prop.">
      <SafeHtml :html="'<span>Inline safe badge with <strong>bold</strong> text</span>'" as="div" class="text-xs text-blue-600 dark:text-blue-400" />

      <template #code>
        <CodeBlock code='<SafeHtml :html="content" as="div" />' language="vue" />
      </template>
    </DemoSection>

    <!-- Props Table -->
    <section class="space-y-4">
      <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">Props</h2>
      <PropsTable :props="propsList" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { SafeHtml } from '@zyvnox/vue-pack/components'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable from '@/components/PropsTable.vue'

const safeSnippet = `<h3>Enterprise Grade Security</h3><p>Content rendered through <strong>SafeHtml</strong> is checked by DOMPurify.</p>`
const maliciousSnippet = `<p>Safe text</p><script>alert('XSS Attack!')<\/script><img src="x" onerror="console.error('XSS injection attempt')" />`

const safeCode = `<template>
  <SafeHtml :html="safeContent" />
</template>

<script setup lang="ts">
import { SafeHtml } from '@zyvnox/vue-pack/components'
const safeContent = '<h3>Title</h3><p>Safe text...</p>'
<\/script>`

const maliciousCode = `<template>
  <!-- Neutralizes scripts and malicious attributes automatically -->
  <SafeHtml :html="rawUntrustedHtml" />
</template>`

const propsList = [
  { name: 'html', type: 'string', required: true, description: 'Raw HTML string to sanitize and display' },
  { name: 'as', type: 'string', default: "'div'", description: 'HTML tag used for outer wrapper element' },
  { name: 'config', type: 'DOMPurify.Config', description: 'Custom DOMPurify sanitizer options' },
]
</script>

