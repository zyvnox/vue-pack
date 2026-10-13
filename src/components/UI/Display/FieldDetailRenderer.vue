<template>
  <div
    v-if="shouldShowField"
    class="zyvnox-pb-6 zyvnox-mb-6 zyvnox-border-b zyvnox-border-slate-200 dark:zyvnox-border-slate-700 last:zyvnox-mb-0 last:zyvnox-pb-0 last:zyvnox-border-b-0"
    :id="fieldKey"
  >
    <!-- String -->
    <div v-if="field.type === 'text'">
      <BaseLabel :label="label" />
      <p class="zyvnox-text-slate-700 dark:zyvnox-text-slate-200 zyvnox-leading-relaxed">
        {{ value || '-' }}
      </p>
    </div>

    <!-- Rich Text -->
    <div v-else-if="field.type === 'quillEditor'" class="quill-editor">
      <BaseLabel :label="label" />
      <article v-if="value" class="ql-editor zyvnox-max-w-none" v-html="value"></article>
      <p
        v-else
        class="zyvnox-text-slate-700 dark:zyvnox-text-slate-200 zyvnox-leading-relaxed zyvnox-italic"
      >
        -
      </p>
    </div>

    <!-- textArea -->
    <div v-else-if="field.type === 'textArea'">
      <BaseLabel :label="label" />
      <div v-if="value" class="prose-content" v-html="value"></div>
      <p
        v-else
        class="zyvnox-text-slate-700 dark:zyvnox-text-slate-200 zyvnox-leading-relaxed zyvnox-italic"
      >
        -
      </p>
    </div>

    <!-- Password -->
    <div v-else-if="field.type === 'password'">
      <BaseLabel :label="label" />
      <div class="zyvnox-flex zyvnox-items-center zyvnox-gap-4">
        <p
          class="zyvnox-text-slate-700 dark:zyvnox-text-slate-200 zyvnox-leading-relaxed zyvnox-font-mono"
        >
          {{ showPassword ? (value ?? '-') : value ? '•'.repeat(String(value).length) : '-' }}
        </p>
        <button
          v-if="value"
          type="button"
          class="zyvnox-text-sm zyvnox-text-blue-600 zyvnox-bg-transparent zyvnox-border-none zyvnox-cursor-pointer zyvnox-transition-colors hover:zyvnox-text-blue-500 dark:zyvnox-text-blue-400 dark:hover:zyvnox-text-blue-300"
          @click="showPassword = !showPassword"
        >
          {{ showPassword ? t('common.hide') : t('common.show') }}
        </button>
      </div>
    </div>

    <!-- Date -->
    <div v-else-if="field.type === 'date'">
      <BaseLabel :label="label" />
      <p class="zyvnox-text-slate-700 dark:zyvnox-text-slate-200 zyvnox-leading-relaxed">
        {{ value ? formatDate(value) : '-' }}
      </p>
    </div>

    <!-- Time -->
    <div v-else-if="field.type === 'time'">
      <BaseLabel :label="label" />
      <p class="zyvnox-text-slate-700 dark:zyvnox-text-slate-200 zyvnox-leading-relaxed">
        {{ value ? formatTime(value) : '-' }}
      </p>
    </div>

    <!-- DateTime -->
    <div v-else-if="field.type === 'dateTime'">
      <BaseLabel :label="label" />
      <p class="zyvnox-text-slate-700 dark:zyvnox-text-slate-200 zyvnox-leading-relaxed">
        {{ value ? formatDateTime(value) : '-' }}
      </p>
    </div>

    <!-- Toggle -->
    <div v-else-if="field.type === 'toggle'">
      <BaseLabel :label="label" />
      <p
        class="zyvnox-inline-flex zyvnox-items-center zyvnox-gap-2 zyvnox-px-3 zyvnox-py-1 zyvnox-font-medium zyvnox-rounded-full"
        :class="
          value
            ? 'zyvnox-bg-green-100 zyvnox-text-green-800 dark:zyvnox-bg-green-900 dark:zyvnox-text-green-200'
            : 'zyvnox-bg-red-100 zyvnox-text-red-800 dark:zyvnox-bg-red-900 dark:zyvnox-text-red-200'
        "
      >
        {{ value ? labels.btn.toogle.active : labels.btn.toogle.inactive }} ⦿
      </p>
    </div>

    <!-- File -->
    <div v-else-if="field.type === 'file'">
      <BaseLabel :label="label" />
      <div v-if="value">
        <a
          v-if="typeof value === 'string'"
          :href="value"
          target="_blank"
          rel="noopener noreferrer"
          class="zyvnox-font-medium zyvnox-text-blue-600 zyvnox-underline zyvnox-underline-offset-2 zyvnox-transition-colors hover:zyvnox-text-blue-500 dark:zyvnox-text-blue-400 dark:hover:zyvnox-text-blue-300"
        >
          {{ value.split('/').pop() || value }}
        </a>
        <div v-else-if="isFile(value)" class="zyvnox-flex zyvnox-items-center zyvnox-gap-2">
          <span>{{ value.name }}</span>
          <span class="zyvnox-text-sm zyvnox-text-slate-500 dark:zyvnox-text-slate-400"
            >({{ (value.size / 1024).toFixed(1) }} KB)</span
          >
          <a
            :href="createObjectUrl(value)"
            target="_blank"
            rel="noopener noreferrer"
            class="zyvnox-font-medium zyvnox-text-blue-600 zyvnox-underline zyvnox-underline-offset-2 zyvnox-transition-colors hover:zyvnox-text-blue-500 dark:zyvnox-text-blue-400 dark:hover:zyvnox-text-blue-300"
          >
            {{ t('common.preview') }}
          </a>
        </div>
      </div>
      <div
        v-else
        class="zyvnox-text-slate-700 dark:zyvnox-text-slate-200 zyvnox-leading-relaxed zyvnox-italic"
      >
        -
      </div>
    </div>

    <div v-else-if="field.type === 'fileArray'">
      <BaseLabel :label="label" />
      <div
        v-if="Array.isArray(value) && value.length"
        class="zyvnox-flex zyvnox-flex-col zyvnox-gap-2"
      >
        <div v-for="(fileItem, index) in value" :key="index">
          <a
            v-if="typeof fileItem === 'string'"
            :href="fileItem"
            target="_blank"
            rel="noopener noreferrer"
            class="zyvnox-font-medium zyvnox-text-blue-600 zyvnox-underline zyvnox-underline-offset-2 zyvnox-transition-colors hover:zyvnox-text-blue-500 dark:zyvnox-text-blue-400 dark:hover:zyvnox-text-blue-300"
          >
            {{ fileItem.split('/').pop() || fileItem }}
          </a>
          <div v-else-if="isFile(fileItem)" class="zyvnox-flex zyvnox-items-center zyvnox-gap-2">
            <span>{{ fileItem.name }}</span>
            <span class="zyvnox-text-sm zyvnox-text-slate-500 dark:zyvnox-text-slate-400"
              >({{ (fileItem.size / 1024).toFixed(1) }} KB)</span
            >
            <a
              :href="createObjectUrl(fileItem)"
              target="_blank"
              rel="noopener noreferrer"
              class="zyvnox-font-medium zyvnox-text-blue-600 zyvnox-underline zyvnox-underline-offset-2 zyvnox-transition-colors hover:zyvnox-text-blue-500 dark:zyvnox-text-blue-400 dark:hover:zyvnox-text-blue-300"
            >
              {{ t('common.preview') }}
            </a>
          </div>
        </div>
      </div>
      <div
        v-else
        class="zyvnox-text-slate-700 dark:zyvnox-text-slate-200 zyvnox-leading-relaxed zyvnox-italic"
      >
        -
      </div>
    </div>

    <!-- Number -->
    <div v-else-if="field.type === 'number'">
      <BaseLabel :label="label" />
      <p class="zyvnox-text-slate-700 dark:zyvnox-text-slate-200 zyvnox-leading-relaxed">
        {{ value ?? '-' }}
      </p>
    </div>

    <!-- Currency -->
    <div v-else-if="field.type === 'currency'">
      <BaseLabel :label="label" />
      <p class="zyvnox-text-slate-700 dark:zyvnox-text-slate-200 zyvnox-leading-relaxed">
        {{ value !== null && value !== undefined ? formatCurrency(value) : '-' }}
      </p>
    </div>

    <!-- Rate -->
    <div v-else-if="field.type === 'rate'">
      <BaseLabel :label="label" />
      <div v-if="value > 0" class="zyvnox-flex zyvnox-items-center zyvnox-gap-0.5">
        <template v-for="i in 5" :key="i">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            :class="
              i <= value
                ? 'zyvnox-text-amber-400'
                : 'zyvnox-text-slate-300 dark:zyvnox-text-slate-600'
            "
          >
            <path
              fill="currentColor"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
        </template>
        <span
          class="zyvnox-ml-2 zyvnox-text-sm zyvnox-font-medium zyvnox-text-slate-600 dark:zyvnox-text-slate-300"
          >({{ value }} / 5)</span
        >
      </div>
      <p
        v-else
        class="zyvnox-text-slate-700 dark:zyvnox-text-slate-200 zyvnox-leading-relaxed zyvnox-italic"
      >
        -
      </p>
    </div>

    <!-- Email -->
    <div v-else-if="field.type === 'email'">
      <BaseLabel :label="label" />
      <p class="zyvnox-text-slate-700 dark:zyvnox-text-slate-200 zyvnox-leading-relaxed">
        {{ value ?? '-' }}
      </p>
    </div>

    <!-- Url -->
    <div v-else-if="field.type === 'url'">
      <BaseLabel :label="label" />
      <a
        :href="value"
        target="_blank"
        rel="noopener noreferrer"
        class="zyvnox-font-medium zyvnox-text-blue-600 zyvnox-underline zyvnox-underline-offset-2 zyvnox-transition-colors hover:zyvnox-text-blue-500 dark:zyvnox-text-blue-400 dark:hover:zyvnox-text-blue-300"
      >
        {{ value ?? '-' }}
      </a>
    </div>

    <!-- Tel -->
    <div v-else-if="field.type === 'tel'">
      <BaseLabel :label="label" />
      <a
        v-if="value"
        :href="`tel:${value}`"
        class="zyvnox-font-medium zyvnox-text-blue-600 zyvnox-underline zyvnox-underline-offset-2 zyvnox-transition-colors hover:zyvnox-text-blue-500 dark:zyvnox-text-blue-400 dark:hover:zyvnox-text-blue-300"
      >
        {{ value }}
      </a>
      <p
        v-else
        class="zyvnox-text-slate-700 dark:zyvnox-text-slate-200 zyvnox-leading-relaxed zyvnox-italic"
      >
        -
      </p>
    </div>

    <!-- Tag -->
    <div v-else-if="field.type === 'tag'">
      <BaseLabel :label="label" />
      <div
        v-if="Array.isArray(value) && value.length"
        class="zyvnox-flex zyvnox-flex-wrap zyvnox-gap-2"
      >
        <span
          v-for="(tag, index) in value"
          :key="index"
          class="zyvnox-inline-block zyvnox-px-3 zyvnox-py-1 zyvnox-text-xs zyvnox-font-medium zyvnox-text-blue-800 zyvnox-bg-blue-100 zyvnox-rounded-full dark:zyvnox-bg-blue-900 dark:zyvnox-text-blue-300"
        >
          {{ tag }}
        </span>
      </div>
      <p
        v-else
        class="zyvnox-text-slate-700 dark:zyvnox-text-slate-200 zyvnox-leading-relaxed zyvnox-italic"
      >
        -
      </p>
    </div>

    <div v-else-if="field.type === 'object'">
      <BaseLabel :label="label" />
      <div
        v-if="value && typeof value === 'object' && Object.keys(value).length"
        class="zyvnox-p-4 zyvnox-border zyvnox-border-slate-200 zyvnox-rounded-md zyvnox-bg-slate-50 zyvnox-shadow-inner dark:zyvnox-border-slate-700 dark:zyvnox-bg-slate-800/50"
      >
        <FieldDetailRenderer
          v-for="(groupField, groupKey) in field.schema"
          :key="groupKey"
          :field="groupField"
          :field-key="groupKey"
          :form-data="value"
          :lang="lang"
          :value-null-view="valueNullView"
          :optional-text="optionalText"
          :required-text="requiredText"
          @image-click="emit('image-click', $event)"
        />
      </div>
      <div
        v-else
        class="zyvnox-text-slate-700 dark:zyvnox-text-slate-200 zyvnox-leading-relaxed zyvnox-italic"
      >
        -
      </div>
    </div>

    <!-- Image -->
    <div v-else-if="field.type === 'image'">
      <BaseLabel :label="label" />
      <div v-if="value">
        <BaseImage
          :src="value"
          :alt="label || t('common.preview')"
          :lang="lang"
          class="zyvnox-block zyvnox-rounded-md zyvnox-shadow-md zyvnox-border zyvnox-border-slate-200 zyvnox-cursor-pointer zyvnox-transition-all hover:zyvnox-scale-105 hover:zyvnox-shadow-lg zyvnox-w-full zyvnox-max-w-48 zyvnox-aspect-video zyvnox-object-contain dark:zyvnox-border-slate-700"
          @click="emit('image-click', value)"
        />
      </div>
      <div
        v-else
        class="zyvnox-text-slate-700 dark:zyvnox-text-slate-200 zyvnox-leading-relaxed zyvnox-italic"
      >
        -
      </div>
    </div>

    <div v-else-if="field.type === 'imageArray'">
      <BaseLabel :label="label" />
      <div
        v-if="Array.isArray(value) && value.length"
        class="zyvnox-flex zyvnox-flex-wrap zyvnox-gap-4"
      >
        <div v-for="(imageUrl, index) in value" :key="index">
          <BaseImage
            :src="imageUrl"
            :alt="`${label || t('common.preview')} ${index + 1}`"
            :lang="lang"
            class="zyvnox-block zyvnox-rounded-md zyvnox-shadow-md zyvnox-border zyvnox-border-slate-200 zyvnox-cursor-pointer zyvnox-transition-all hover:zyvnox-scale-105 hover:zyvnox-shadow-lg zyvnox-w-24 zyvnox-h-24 zyvnox-object-contain dark:zyvnox-border-slate-700"
            @click="emit('image-click', imageUrl)"
          />
        </div>
      </div>
      <div
        v-else
        class="zyvnox-text-slate-700 dark:zyvnox-text-slate-200 zyvnox-leading-relaxed zyvnox-italic"
      >
        -
      </div>
    </div>

    <!-- Color -->
    <div v-else-if="field.type === 'color'">
      <BaseLabel :label="label" />
      <div class="zyvnox-flex zyvnox-flex-wrap zyvnox-gap-2">
        <template v-if="Array.isArray(value) && value.length">
          <div
            v-for="(color, i) in value"
            :key="i"
            class="zyvnox-w-8 zyvnox-h-8 zyvnox-rounded-full zyvnox-border-2 zyvnox-border-white zyvnox-shadow-[0_0_0_1px] zyvnox-shadow-slate-300 zyvnox-cursor-pointer zyvnox-transition-transform hover:zyvnox-scale-110 dark:zyvnox-border-slate-800 dark:zyvnox-shadow-slate-600"
            :style="{ backgroundColor: color }"
            :title="color"
            @click="copyToClipboard(color)"
          ></div>
        </template>
        <div
          v-else
          class="zyvnox-text-slate-700 dark:zyvnox-text-slate-200 zyvnox-leading-relaxed zyvnox-italic"
        >
          -
        </div>
      </div>
    </div>

    <!-- Map -->
    <div v-else-if="field.type === 'mapPicker'">
      <BaseLabel :label="label" />
      <p
        v-if="!value"
        class="zyvnox-text-slate-700 dark:zyvnox-text-slate-200 zyvnox-leading-relaxed"
      >
        {{ '-' }}
      </p>
      <MapPicker
        v-else
        :id="fieldKey"
        :view-only="true"
        :geo-json="value.geoJson"
        :initial-lat="value.val[field.key.lat]"
        :initial-lng="value.val[field.key.lng]"
        :lang="lang"
      />
    </div>

    <!-- Select -->
    <div v-else-if="field.type === 'select'">
      <BaseLabel :label="label" />
      <p class="zyvnox-text-slate-700 dark:zyvnox-text-slate-200 zyvnox-leading-relaxed">
        {{ value || '-' }}
      </p>
    </div>

    <!-- Array -->
    <div v-else-if="field.type === 'arrayObject'">
      <BaseLabel :label="label" />
      <div
        v-if="Array.isArray(value) && value.length"
        class="zyvnox-flex zyvnox-flex-col zyvnox-gap-4"
      >
        <div
          v-for="(item, i) in value"
          :key="i"
          class="zyvnox-p-4 zyvnox-border zyvnox-border-slate-200 zyvnox-rounded-md zyvnox-bg-slate-50 zyvnox-shadow-inner dark:zyvnox-border-slate-700 dark:zyvnox-bg-slate-800/50"
        >
          <FieldDetailRenderer
            v-for="(groupField, groupKey) in field.schema"
            :key="groupKey"
            :field="groupField"
            :field-key="groupKey"
            :form-data="item"
            :lang="lang"
            :value-null-view="valueNullView"
            :optional-text="optionalText"
            :required-text="requiredText"
            @image-click="emit('image-click', $event)"
          />
        </div>
      </div>
      <div
        v-else
        class="zyvnox-text-slate-700 dark:zyvnox-text-slate-200 zyvnox-leading-relaxed zyvnox-italic"
      >
        -
      </div>
    </div>
  </div>

  <!-- Option Group Schema -->
  <div
    v-else-if="field.type === 'optionGroupSchema'"
    class="zyvnox-pb-6 zyvnox-mb-6 zyvnox-border-b zyvnox-border-slate-200 dark:zyvnox-border-slate-700 last:zyvnox-mb-0 last:zyvnox-pb-0 last:zyvnox-border-b-0"
  >
    <BaseLabel
      v-if="formData[fieldKey] || label"
      :label="formData[fieldKey] ? label + ':' + (formData[fieldKey] ?? '') : label"
      class="!zyvnox-text-lg !zyvnox-font-semibold !zyvnox-text-slate-900 dark:!zyvnox-text-slate-100 !zyvnox-border-l-4 !zyvnox-border-slate-400 !zyvnox-pl-3 dark:!zyvnox-border-slate-600"
    />
    <div class="zyvnox-flex zyvnox-flex-col zyvnox-gap-4">
      <div
        v-for="(schemaObj, optionLabel) in field.options"
        :key="optionLabel"
        class="zyvnox-p-4 zyvnox-border zyvnox-border-slate-200 zyvnox-rounded-md zyvnox-bg-slate-50 zyvnox-shadow-inner dark:zyvnox-border-slate-700 dark:zyvnox-bg-slate-800/50"
      >
        <BaseLabel :label="optionLabel" class="option-group-item-label" />
        <hr class="option-group-divider" />
        <FieldDetailRenderer
          v-for="(groupField, groupKey) in schemaObj"
          :key="groupKey"
          :field="groupField"
          :field-key="groupKey"
          :form-data="formData"
          :lang="lang"
          :value-null-view="valueNullView"
          :optional-text="optionalText"
          :required-text="requiredText"
          @image-click="emit('image-click', $event)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, ref } from 'vue'
import { formatDate, formatTime, formatDateTime } from '../../../helpers'
import { BaseLabel, BaseImage } from './'
import { MapPicker } from '../Inputs'
import { useI18n } from '../../composables/useI18n'
import type {
  FormData,
  Field,
  Schema,
  SupportedLanguage,
  MapPickerField,
} from '../../../configs/types'
import { FieldDetailRenderer } from './index'
const showPassword = ref(false)
const props = defineProps<{
  field: Field
  fieldKey: string
  formData: FormData
  requiredText?: string
  valueNullView: boolean
  optionalText?: string
  lang?: SupportedLanguage
}>()

const emit = defineEmits<{
  (e: 'image-click', value: string): void
}>()

const value = computed(() => {
  // 1. Guard Clause: Jika bukan mapPicker, langsung kembalikan nilai mentah
  if (props.field.type !== 'mapPicker') {
    return props.formData[props.fieldKey]
  }

  const field = props.field as MapPickerField

  // Helper untuk mengambil data: Cek di dalam fieldKey (nested) dulu, baru ke root
  const getNestedOrRoot = (key: string) => {
    return props.formData[props.fieldKey]?.[key] ?? props.formData[key]
  }

  // --- LOGIKA GEOJSON ---
  let geoJson: Record<string, any> | null = null
  const geoKey = field.view?.geoJsonKey

  if (geoKey) {
    const rawGeo = getNestedOrRoot(geoKey)
    if (rawGeo) {
      try {
        geoJson = typeof rawGeo === 'string' ? JSON.parse(rawGeo) : rawGeo
      } catch (e) {
        console.error(`[MapPicker] Failed to parse geoJson for key: ${geoKey}`, e)
      }
    }
  }

  // --- LOGIKA LAT/LNG (VAL) ---
  let val: any = null

  if (field.withFieldKey) {
    // Jika withFieldKey aktif, ambil objek utuh dari fieldKey
    val = props.formData[props.fieldKey]
  } else {
    const { lat: latKey, lng: lngKey } = field.key || {}

    if (latKey && lngKey) {
      const lat = getNestedOrRoot(latKey)
      const lng = getNestedOrRoot(lngKey)

      if (lat !== undefined && lng !== undefined) {
        val = {
          [latKey]: lat,
          [lngKey]: lng,
        }
      }
    }
  }

  return {
    geoJson,
    val,
  }
})

const shouldShowField = computed(() => {
  const val = value.value
  if (props.valueNullView && props.field.type !== 'optionGroupSchema') return true
  // Perbaikan: Gunakan helper isTruthy untuk pengecekan yang lebih kuat
  return isTruthy(val)
})

const { t, labels } = useI18n(computed(() => props.lang))

const formatCurrency = (value: any) => {
  if (typeof value !== 'number') return value
  const lang = props.lang === 'id' ? 'id-ID' : 'en-US'
  const currency = props.lang === 'id' ? 'IDR' : 'USD'
  return new Intl.NumberFormat(lang, { style: 'currency', currency: currency }).format(value)
}

/**
 * Memeriksa apakah sebuah nilai dianggap "truthy" dalam konteks data.
 * Nilai null, undefined, string kosong, array kosong, dan objek kosong dianggap "falsy".
 */
const isTruthy = (val: unknown) => {
  return (
    val !== null && val !== undefined && val !== '' && !(Array.isArray(val) && val.length === 0)
  )
}

const label = computed(() => {
  let base = props.field.label || props.fieldKey || ''
  if (props.field.type === 'optionGroupSchema') {
    return props.field.label ?? ''
  }
  return base
})

const isFile = (val: unknown): val is File => val instanceof File
const createObjectUrl = (file: File) => URL.createObjectURL(file)

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).catch(console.error)
}
</script>
