<template>
  <div class="space-y-8">
    <header class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">
        BaseImage
      </h1>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Resilient image display component with broken image fallback, lazy loading support, and smooth load transitions.
      </p>
    </header>

    <!-- Demo 1: Standard Image -->
    <DemoSection title="Valid Image Display" description="Renders a valid image with proper aspect ratio and alt text.">
      <div class="max-w-xs">
        <BaseImage
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500"
          alt="Coding workspace setup"
        />
      </div>

      <template #code>
        <CodeBlock :code="basicCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 2: Broken Image Fallback -->
    <DemoSection title="Automatic Broken Image Fallback" description="Gracefully replaces 404 links or invalid URLs with an aesthetic placeholder.">
      <div class="max-w-xs">
        <BaseImage
          src="https://example.com/non-existent-image-404.png"
          alt="Missing asset illustration"
        />
      </div>

      <template #code>
        <CodeBlock :code="brokenCode" language="vue" />
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
import { BaseImage } from '@zyvnox/vue-pack/components'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable from '@/components/PropsTable.vue'

const basicCode = `<template>
  <BaseImage
    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
    alt="Coding workspace"
  />
</template>

<script setup lang="ts">
import { BaseImage } from '@zyvnox/vue-pack/components'
<\/script>`

const brokenCode = `<template>
  <!-- Gracefully falls back to placeholder when image fails to load -->
  <BaseImage
    src="https://example.com/non-existent-404.jpg"
    alt="Missing photo"
  />
</template>`

const propsList = [
  { name: 'src', type: 'string', required: true, description: 'Image asset source URL' },
  { name: 'alt', type: 'string', description: 'Accessible alternative description text' },
]
</script>

