<template>
  <div class="space-y-8">
    <header class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">
        ImageArrayInput (Photo Gallery Dropzone)
      </h1>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Multi-image gallery uploader featuring thumbnail grid preview, individual image deletion, max file count boundaries, format & dimension validation, and tooltip guidance.
      </p>
    </header>

    <!-- Demo 1: Basic Multi-Image -->
    <DemoSection title="Multi-Image Gallery Dropzone" description="Upload multiple photos with grid previews and deletion controls.">
      <ImageArrayInput
        v-model="basic"
        label="Product Showcase Gallery"
      />
      <div class="text-xs text-slate-500">
        Images Uploaded: <code class="font-mono font-bold">{{ basic?.length || 0 }}</code>
      </div>

      <template #code>
        <CodeBlock :code="basicCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 2: Real-time Multi-Image Constraints -->
    <DemoSection
      title="Real-Time Validation (Max Count, Allowed Types & Max Size)"
      description="Restricts gallery to max 4 photos, limits each file to 3000 KB (3MB), and requires JPEG/PNG/WEBP formats."
    >
      <ImageArrayInput
        v-model="validatedPhotos"
        label="Property Portfolio Gallery"
        tooltip="Upload up to 4 high-resolution photos in JPG, PNG, or WEBP format"
        tooltip-position="right"
        :validate="{
          maxFiles: 4,
          maxSize: 3000,
          allowedTypes: ['jpeg', 'png', 'webp'],
        }"
      />
      <div class="text-xs text-slate-500 space-y-1 mt-2">
        <div class="text-slate-400 dark:text-slate-500">
          Constraints: maxFiles: 4, maxSize: 3000 KB per photo, allowed: <code class="font-mono">['jpeg', 'png', 'webp']</code>.
        </div>
      </div>

      <template #code>
        <CodeBlock :code="validatedCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 3: With Pre-populated Photos -->
    <DemoSection title="With Existing Photos Previews" description="Pre-populates existing image URLs in gallery.">
      <ImageArrayInput
        v-model="presetPhotosList"
        label="Real Estate Property Showcase"
        :preview-images="presetPhotos"
      />

      <template #code>
        <CodeBlock :code="tooltipCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 4: Error & Disabled States -->
    <DemoSection title="External Error & Disabled States" description="Visual invalid photo count alerts and locked gallery views.">
      <div class="space-y-4">
        <ImageArrayInput
          v-model="errorVal"
          label="Catalog Thumbnail Set"
          :error="'You must provide at least 2 catalog images'"
        />
        <ImageArrayInput
          v-model="disabledVal"
          label="Locked Archive Gallery (Read-Only)"
          disabled
          :preview-images="presetPhotos.slice(0, 2)"
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
import { ImageArrayInput } from '@zyvnox/vue-pack/components'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable, { type PropDef } from '@/components/PropsTable.vue'
import EventsTable, { type EventDef } from '@/components/EventsTable.vue'

const basic = ref<(File | string)[]>([])
const validatedPhotos = ref<(File | string)[]>([])
const presetPhotosList = ref<(File | string)[]>([
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=300',
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=300',
])
const errorVal = ref<(File | string)[]>([])
const disabledVal = ref<(File | string)[]>([])

const presetPhotos = [
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=300',
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=300',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300',
]

const basicCode = `<template>
  <ImageArrayInput
    v-model="photos"
    label="Product Showcase Gallery"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ImageArrayInput } from '@zyvnox/vue-pack/components'

const photos = ref([])
<\/script>`

const validatedCode = `<ImageArrayInput
  v-model="propertyPhotos"
  label="Property Portfolio Gallery"
  tooltip="Upload up to 4 high-res photos"
  tooltip-position="right"
  :validate="{
    maxFiles: 4,
    maxSize: 3000,
    allowedTypes: ['jpeg', 'png', 'webp'],
  }"
/>`

const tooltipCode = `<ImageArrayInput
  v-model="photos"
  label="Real Estate Showcase"
  :preview-images="existingUrls"
/>`

const errorCode = `<ImageArrayInput
  v-model="thumbnails"
  label="Catalog Thumbnail Set"
  error="You must provide at least 2 catalog images"
/>
<ImageArrayInput
  v-model="lockedGallery"
  label="Locked Archive Gallery"
  disabled
/>`

const propsList: PropDef[] = [
  { name: 'modelValue', type: '(File | string)[]', required: true, description: 'Reactive array of image files or remote URL strings' },
  { name: 'label', type: 'string', description: 'Field label title displayed above gallery' },
  { name: 'id', type: 'string', default: 'setUID()', description: 'Unique DOM element ID' },
  { name: 'previewImages', type: 'string[]', description: 'Array of image URLs for initial thumbnail gallery' },
  { name: 'previewAlt', type: 'string', description: 'Alt accessibility text for gallery images' },
  {
    name: 'validate',
    type: '{ maxFiles?: number, maxSize?: number, ratio?: { Width: number, Height: number }, pixel?: any, allowedTypes?: ImageType[] }',
    description: 'Multi-image gallery validation rules: max total image count, file size (KB) per image, pixel resolution bounds, and allowed image types.',
  },
  {
    name: 'watermark',
    type: '{ url: string, position?: string, opacity?: number, rotate?: number, size?: any }',
    description: 'Automatic client-side canvas watermarking configuration applied to all uploaded photos.',
  },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables photo uploads and deletion actions' },
  { name: 'error', type: 'string | string[]', description: 'External validation error message(s) from parent form/schema' },
  { name: 'tooltip', type: 'string', description: 'Custom tooltip guidance text' },
  { name: 'tooltipPosition', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Tooltip popup location' },
  { name: 'tooltipIcon', type: 'string', default: "'❓'", description: 'Icon character or emoji displayed for tooltip trigger' },
  { name: 'lang', type: "'en' | 'id'", default: "'en'", description: 'Language code' },
]

const eventsList: EventDef[] = [
  { name: 'update:modelValue', type: '(value: (File | string)[]) => void', description: 'Emitted upon photo uploads or removals' },
  { name: 'push:error', type: '(errors: string[], id: string) => void', description: 'Emitted when gallery violates maxFiles, maxSize, or allowedTypes' },
  { name: 'remove:error', type: '(id: string) => void', description: 'Emitted when gallery satisfies all validation rules' },
]
</script>
