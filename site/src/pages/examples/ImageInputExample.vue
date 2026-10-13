<template>
  <div class="space-y-8">
    <header class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">
        ImageInput
      </h1>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Single image upload component with live canvas preview, pixel dimensions (min/max), aspect ratio enforcement, watermark overlay, and i18n support.
      </p>
    </header>

    <!-- Demo 1: Basic Image -->
    <DemoSection title="Basic Image Upload" description="Selects an image file or enters a remote image URL with instant preview.">
      <ImageInput
        v-model="basic"
        label="Store Hero Banner"
      />
      <div class="text-xs text-slate-500">
        Selection: <code class="font-mono font-bold">{{ typeof basic === 'string' ? basic : (basic?.name ?? '(none)') }}</code>
      </div>

      <template #code>
        <CodeBlock :code="basicCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 2: Real-time Pixel, Ratio & Size Validation -->
    <DemoSection
      title="Real-Time Validation (Dimensions, Ratio & Max Size)"
      description="Enforces strict image constraints: max 2048 KB, allowed types (JPEG/PNG/WEBP), aspect ratio 16:9, and max resolution 1920x1080."
    >
      <ImageInput
        v-model="validatedImage"
        label="Featured Product Showcase"
        tooltip="Must be 16:9 aspect ratio and maximum 1920x1080 pixels"
        tooltip-position="right"
        :validate="{
          maxSize: 2048,
          allowedTypes: ['jpeg', 'png', 'webp'],
          ratio: { Width: 16, Height: 9 },
          pixel: {
            maxWidth: 1920,
            maxHeight: 1080,
          },
        }"
      />
      <div class="text-xs text-slate-500 space-y-1 mt-2">
        <div class="text-slate-400 dark:text-slate-500">
          Constraints: max 2048 KB, allowed: <code class="font-mono">['jpeg', 'png', 'webp']</code>, ratio: 16:9, max dimensions: 1920x1080px.
        </div>
      </div>

      <template #code>
        <CodeBlock :code="validatedCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 3: With Watermark Overlay -->
    <DemoSection
      title="Image with Branding Watermark"
      description="Applies a semi-transparent branding watermark stamp on uploaded imagery."
    >
      <ImageInput
        v-model="watermarkImage"
        label="Watermarked Corporate Asset"
        :watermark="{
          url: '/favicon.svg',
          position: 'bottom-right',
          opacity: 0.7,
        }"
      />

      <template #code>
        <CodeBlock :code="watermarkCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 4: Error & Disabled States -->
    <DemoSection title="External Error & Disabled States" description="Visual invalid format alerts and read-only image previews.">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ImageInput
          v-model="errorVal"
          label="Profile Avatar"
          :error="'Avatar dimensions must not exceed 500x500 pixels'"
        />
        <ImageInput
          v-model="disabledVal"
          label="System Default Logo (Read-Only)"
          disabled
        />
      </div>

      <template #code>
        <CodeBlock :code="errorCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Props Table -->
    <section class="space-y-4">
      <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">Props</h2>
      <PropsTable :props="propsList" />
    </section>

    <!-- Events Table -->
    <section class="space-y-4">
      <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">Events</h2>
      <EventsTable :events="eventsList" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ImageInput } from '@zyvnox/vue-pack/components'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable, { type PropDef } from '@/components/PropsTable.vue'
import EventsTable, { type EventDef } from '@/components/EventsTable.vue'

const basic = ref<File | string | null>('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600')
const validatedImage = ref<File | string | null>(null)
const watermarkImage = ref<File | string | null>(null)
const errorVal = ref<File | string | null>(null)
const disabledVal = ref<File | string | null>('/favicon.svg')

const basicCode = `<template>
  <ImageInput
    v-model="heroBanner"
    label="Store Hero Banner"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ImageInput } from '@zyvnox/vue-pack/components'

const heroBanner = ref(null)
<\/script>`

const validatedCode = `<ImageInput
  v-model="productPhoto"
  label="Featured Product Showcase"
  :validate="{
    maxSize: 2048,
    allowedTypes: ['jpeg', 'png', 'webp'],
    ratio: { Width: 16, Height: 9 },
    pixel: {
      maxWidth: 1920,
      maxHeight: 1080,
    },
  }"
/>`

const watermarkCode = `<ImageInput
  v-model="asset"
  label="Watermarked Corporate Asset"
  :watermark="{
    url: '/favicon.svg',
    position: 'bottom-right',
    opacity: 0.7,
  }"
/>`

const errorCode = `<ImageInput
  v-model="avatar"
  label="Profile Avatar"
  error="Avatar dimensions must not exceed 500x500 pixels"
/>
<ImageInput
  v-model="logo"
  label="System Default Logo"
  disabled
/>`

const propsList: PropDef[] = [
  { name: 'modelValue', type: 'File | string | null', required: true, description: 'Reactive file object or remote image URL string' },
  { name: 'label', type: 'string', description: 'Label title displayed above upload area' },
  { name: 'id', type: 'string', default: 'setUID()', description: 'Unique DOM element ID' },
  { name: 'previewImage', type: 'string', description: 'Fallback preview image URL displayed before selection' },
  { name: 'previewAlt', type: 'string', description: 'Alt text for image accessibility' },
  {
    name: 'validate',
    type: '{ maxSize?: number, ratio?: { Width: number, Height: number }, pixel?: { maxWidth?: number, maxHeight?: number, minWidth?: number, minHeight?: number }, allowedTypes?: ImageType[] }',
    description: 'Client-side image validation. Checks file size (KB), aspect ratio, pixel boundaries, and allowed file formats.',
  },
  {
    name: 'watermark',
    type: '{ url: string, position?: string, opacity?: number, rotate?: number, size?: any }',
    description: 'Automatic client-side canvas watermarking configuration stamped on uploaded image.',
  },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Locks image input and prevents modifications' },
  { name: 'error', type: 'string | string[]', description: 'External validation error message(s) from parent form/schema' },
  { name: 'tooltip', type: 'string', description: 'Custom tooltip guidance text' },
  { name: 'tooltipPosition', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Tooltip popup location' },
  { name: 'tooltipIcon', type: 'string', default: "'❓'", description: 'Icon character or emoji displayed for tooltip trigger' },
  { name: 'lang', type: "'en' | 'id'", default: "'en'", description: 'Language code' },
]

const eventsList: EventDef[] = [
  { name: 'update:modelValue', type: '(value: File | string | null, id: string) => void', description: 'Emitted upon image selection, URL prompt, or removal' },
  { name: 'push:error', type: '(errors: string[], id: string) => void', description: 'Emitted when image violates size, aspect ratio, or pixel limits' },
  { name: 'remove:error', type: '(id: string) => void', description: 'Emitted when image passes all validation checks' },
]
</script>
