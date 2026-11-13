<template>
  <label
    class="zyvnox-inline-flex zyvnox-items-center zyvnox-gap-2 zyvnox-text-sm zyvnox-font-semibold zyvnox-mb-3 zyvnox-text-slate-900 zyvnox-transition-colors zyvnox-duration-200 dark:zyvnox-text-slate-100"
    :class="{ 'zyvnox-text-red-500 dark:zyvnox-text-red-400': props.error }"
  >
    {{ label }}

    <Tooltip v-if="tooltip" :text="tooltip" :position="tooltipPosition ?? 'top'">
      <span class="zyvnox-text-slate-400 dark:zyvnox-text-slate-500 zyvnox-text-xs">
        {{ tooltipIcon ?? '❓' }}
      </span>
    </Tooltip>
  </label>
  <div
    class="zyvnox-bg-white zyvnox-border-1 zyvnox-border-solid zyvnox-border-slate-200 zyvnox-rounded-lg zyvnox-p-6 zyvnox-shadow-sm zyvnox-transition-colors zyvnox-duration-200 zyvnox-mb-4 dark:zyvnox-bg-slate-800 dark:zyvnox-border-slate-700"
    :class="{
      'zyvnox-border-red-300 zyvnox-bg-red-50 dark:zyvnox-border-red-800 dark:zyvnox-bg-red-900/10':
        props.error,
    }"
  >
    <div class="zyvnox-flex zyvnox-flex-col zyvnox-gap-3 zyvnox-box-border">
      <div
        v-for="(item, idx) in localItems"
        :key="idx"
        class="zyvnox-bg-slate-50 zyvnox-border-1 zyvnox-border-solid zyvnox-border-slate-200 zyvnox-rounded-lg zyvnox-transition-all zyvnox-duration-200 zyvnox-animate-[zyvnox-slideIn_500ms_ease-out_backwards] hover:zyvnox-bg-white hover:-zyvnox-translate-y-0.5 hover:zyvnox-shadow-md dark:zyvnox-bg-slate-700 dark:zyvnox-border-slate-600 dark:hover:zyvnox-bg-slate-600"
        :style="{ animationDelay: `${idx * 50}ms` }"
      >
        <div
          class="zyvnox-flex zyvnox-justify-between zyvnox-items-center zyvnox-p-3 zyvnox-gap-4 max-[640px]:zyvnox-flex-col max-[640px]:zyvnox-items-start"
        >
          <div class="zyvnox-flex zyvnox-items-center zyvnox-gap-3 zyvnox-min-w-0 zyvnox-flex-wrap sm:zyvnox-flex-nowrap">
            <!-- Custom Display Slots -->
            <template v-if="hasDisplaySlots()">
              <div
                v-for="(slot, sIdx) in getDisplaySlots(item, idx)"
                :key="`${idx}-${slot.key}-${sIdx}`"
                class="zyvnox-flex zyvnox-items-center zyvnox-shrink-0 zyvnox-max-w-full"
              >
                <!-- Image Slot -->
                <div v-if="slot.type === 'image'" class="zyvnox-shrink-0">
                  <img
                    v-if="slot.value"
                    :src="getImageSrc(slot.value)"
                    :alt="t('common.preview')"
                    class="zyvnox-w-12 zyvnox-h-12 zyvnox-object-cover zyvnox-rounded-lg zyvnox-border-2 zyvnox-border-white zyvnox-shadow-sm dark:zyvnox-border-slate-600 zyvnox-bg-slate-100 dark:zyvnox-bg-slate-800"
                  />
                  <div
                    v-else
                    class="zyvnox-w-12 zyvnox-h-12 zyvnox-rounded-lg zyvnox-border-1 zyvnox-border-dashed zyvnox-border-slate-300 dark:zyvnox-border-slate-600 zyvnox-flex zyvnox-items-center zyvnox-justify-center zyvnox-text-slate-400 zyvnox-text-xs"
                  >
                    🖼️
                  </div>
                </div>

                <!-- File / Document Slot -->
                <div
                  v-else-if="slot.type === 'file'"
                  class="zyvnox-inline-flex zyvnox-items-center zyvnox-gap-1.5 zyvnox-px-2.5 zyvnox-py-1 zyvnox-rounded-md zyvnox-bg-slate-100 dark:zyvnox-bg-slate-800/80 zyvnox-border-1 zyvnox-border-solid zyvnox-border-slate-200 dark:zyvnox-border-slate-700 zyvnox-text-xs"
                >
                  <span
                    class="zyvnox-px-1.5 zyvnox-py-0.5 zyvnox-rounded zyvnox-text-[10px] zyvnox-font-bold zyvnox-uppercase"
                    :class="getFileExtBadgeClass(slot.meta?.ext)"
                  >
                    {{ slot.meta?.ext || 'FILE' }}
                  </span>
                  <span
                    class="zyvnox-font-medium zyvnox-text-slate-700 dark:zyvnox-text-slate-200 zyvnox-truncate zyvnox-max-w-[160px]"
                    :title="slot.value"
                  >
                    {{ slot.value }}
                  </span>
                </div>

                <!-- HTML / Rich Text Slot -->
                <div
                  v-else-if="slot.type === 'html'"
                  class="zyvnox-text-xs zyvnox-text-slate-700 dark:zyvnox-text-slate-300 zyvnox-truncate zyvnox-max-w-[220px] [&_p]:zyvnox-inline [&_p]:zyvnox-m-0"
                  v-html="sanitizeHtml(slot.value)"
                />

                <!-- Badge Slot (Price / Qty) -->
                <span
                  v-else-if="slot.type === 'badge'"
                  class="zyvnox-inline-flex zyvnox-items-center zyvnox-px-2.5 zyvnox-py-1 zyvnox-rounded-md zyvnox-text-xs zyvnox-font-semibold"
                  :class="
                    slot.meta?.variant === 'price'
                      ? 'zyvnox-bg-emerald-50 zyvnox-text-emerald-700 zyvnox-border-1 zyvnox-border-solid zyvnox-border-emerald-200 dark:zyvnox-bg-emerald-950/60 dark:zyvnox-text-emerald-400 dark:zyvnox-border-emerald-800'
                      : 'zyvnox-bg-blue-50 zyvnox-text-blue-700 zyvnox-border-1 zyvnox-border-solid zyvnox-border-blue-200 dark:zyvnox-bg-blue-950/60 dark:zyvnox-text-blue-400 dark:zyvnox-border-blue-800'
                  "
                >
                  {{ slot.formattedValue || slot.value }}
                </span>

                <!-- Plain Text Slot -->
                <span
                  v-else
                  class="zyvnox-font-medium zyvnox-text-slate-900 zyvnox-truncate zyvnox-max-w-[200px] sm:zyvnox-max-w-[260px] dark:zyvnox-text-slate-100 zyvnox-text-sm"
                  :class="{ 'zyvnox-font-semibold': sIdx === 0 }"
                  :title="String(slot.value)"
                >
                  {{ slot.value }}
                </span>
              </div>
            </template>

            <!-- Fallback Default Mode -->
            <template v-else>
              <img
                v-if="item?.image"
                :src="getImageSrc(item.image)"
                class="zyvnox-w-12 zyvnox-h-12 zyvnox-object-cover zyvnox-rounded-full zyvnox-border-2 zyvnox-border-white zyvnox-shadow-sm zyvnox-shrink-0 dark:zyvnox-border-slate-500"
                :alt="t('common.preview')"
              />
              <span
                class="zyvnox-font-medium zyvnox-text-slate-900 zyvnox-whitespace-nowrap zyvnox-overflow-hidden zyvnox-text-ellipsis dark:zyvnox-text-slate-100"
              >
                {{ item?.title || item?.name || `${t('counter.item')} ${idx + 1}` }}
              </span>
            </template>
          </div>
          <div
            class="zyvnox-flex zyvnox-items-center zyvnox-gap-4 zyvnox-shrink-0 max-[640px]:zyvnox-w-full max-[640px]:zyvnox-justify-end max-[640px]:zyvnox-pt-2 max-[640px]:zyvnox-border-t-1 max-[640px]:zyvnox-border-solid max-[640px]:zyvnox-border-slate-200 dark:max-[640px]:zyvnox-border-slate-600"
          >
            <span
              role="button"
              tabindex="0"
              class="zyvnox-font-semibold zyvnox-text-sm zyvnox-cursor-pointer zyvnox-transition-all zyvnox-duration-200 zyvnox-text-blue-600 hover:zyvnox-scale-110 hover:zyvnox-underline disabled:zyvnox-opacity-50 disabled:zyvnox-cursor-not-allowed disabled:zyvnox-pointer-events-none disabled:zyvnox-transform-none dark:zyvnox-text-blue-400"
              @click="!disabled && handleEditClick(idx)"
              :class="{
                'zyvnox-opacity-50 zyvnox-cursor-not-allowed zyvnox-pointer-events-none': disabled,
              }"
            >
              {{ labels?.btn?.edit || t('btn.edit') }}
            </span>

            <span
              role="button"
              tabindex="0"
              class="zyvnox-font-semibold zyvnox-text-sm zyvnox-cursor-pointer zyvnox-transition-all zyvnox-duration-200 zyvnox-text-red-600 hover:zyvnox-scale-110 hover:zyvnox-underline disabled:zyvnox-opacity-50 disabled:zyvnox-cursor-not-allowed disabled:zyvnox-pointer-events-none disabled:zyvnox-transform-none dark:zyvnox-text-red-400"
              @click="!disabled && remove(idx)"
              :class="{
                'zyvnox-opacity-50 zyvnox-cursor-not-allowed zyvnox-pointer-events-none': disabled,
              }"
            >
              {{ labels?.btn?.remove || t('btn.remove') }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <button
      type="button"
      @click="handleAddClick"
      class="zyvnox-inline-flex zyvnox-items-center zyvnox-gap-2 zyvnox-mt-5 zyvnox-px-5 zyvnox-py-2.5 zyvnox-font-semibold zyvnox-text-sm zyvnox-border-none zyvnox-rounded-md zyvnox-text-white zyvnox-bg-blue-600 zyvnox-cursor-pointer zyvnox-transition-all zyvnox-duration-200 hover:zyvnox-bg-blue-700 hover:-zyvnox-translate-y-0.5 hover:zyvnox-shadow-lg disabled:zyvnox-bg-slate-400 disabled:zyvnox-cursor-not-allowed dark:zyvnox-bg-blue-500 dark:hover:zyvnox-bg-blue-400 dark:disabled:zyvnox-bg-slate-600 before:zyvnox-content-['+'] before:zyvnox-text-xl before:zyvnox-leading-none"
      :disabled="disabled"
    >
      {{ addButtonText }}
    </button>

    <FormModal
      v-if="showModal"
      :id="currentEditItem.id || null"
      :schema="props.schema"
      :initial-data="currentEditItem"
      :is-update="currentEditIndex !== null"
      :lang="props.lang"
      @create:Options="
        (k: string, o: string | number, v: string) => $emit('create:Options', k, o, v)
      "
      @submit="handleSubmit"
      @cancel="() => (showModal = false)"
    />

    <p
      v-if="props.error"
      class="zyvnox-mt-2 zyvnox-text-sm zyvnox-text-red-500 zyvnox-animate-[slideIn_300ms_ease-out] dark:zyvnox-text-red-400"
    >
      {{ props.error }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { setUID } from '../../../untils'
import { sanitizeHtml } from '../../../untils/sanitize'
import { FormModal } from '../../Form'
import { useArrayObject } from './composables'
import { useI18n } from '../../composables/useI18n'
import type { ArrayObjectProps, ArrayObjectDisplayConfig } from '../../../configs/types/props.types'
import { Tooltip } from '../Display'

const attrs = useAttrs()

const props = withDefaults(defineProps<ArrayObjectProps>(), {
  id: setUID(),
  tooltipPosition: 'top',
  tooltipIcon: '❓',
})

const activeDisplay = computed<ArrayObjectDisplayConfig | undefined>(() => {
  return props.display || (attrs.display as ArrayObjectDisplayConfig | undefined)
})

const { t, labels } = useI18n(computed(() => props.lang))

const emit = defineEmits<{
  (e: 'update:modelValue', value: any[], key: string): void
  (e: 'create:Options', key: string, options: string | number, optionView: string): void
}>()

interface DisplaySlot {
  key: string
  type: 'image' | 'file' | 'html' | 'badge' | 'text'
  value: any
  formattedValue?: string
  meta?: Record<string, any>
}

function hasDisplaySlots(): boolean {
  const d = activeDisplay.value
  if (!d || typeof d !== 'object') return false
  return Object.keys(d).length > 0
}

function resolveItemValue(item: Record<string, any>, entryKey: string, entryVal?: string) {
  if (!item || typeof item !== 'object') return undefined
  if (entryVal && item[entryVal] !== undefined) return item[entryVal]
  if (item[entryKey] !== undefined) return item[entryKey]
  if (entryKey.endsWith('Key')) {
    const stripped = entryKey.slice(0, -3)
    if (item[stripped] !== undefined) return item[stripped]
  }
  if (entryVal) return item[entryVal]
  return undefined
}

function classifySlot(entryKey: string, val: any, entryVal?: string): DisplaySlot {
  const combinedKey = `${entryKey} ${entryVal || ''}`.toLowerCase()

  // 1. Image detection
  const isImageKey =
    combinedKey.includes('image') ||
    combinedKey.includes('photo') ||
    combinedKey.includes('thumb') ||
    combinedKey.includes('avatar') ||
    combinedKey.includes('logo') ||
    combinedKey.includes('picture') ||
    combinedKey.includes('img')

  const isImageVal =
    (typeof val === 'string' &&
      (/\.(jpg|jpeg|png|webp|gif|svg|avif)(\?.*)?$/i.test(val) ||
        val.startsWith('data:image/') ||
        val.startsWith('blob:'))) ||
    (typeof File !== 'undefined' && val instanceof File && val.type.startsWith('image/'))

  if (isImageKey || isImageVal) {
    let src = ''
    if (typeof val === 'string') src = val
    else if (typeof File !== 'undefined' && val instanceof File) src = URL.createObjectURL(val)
    else if (val && typeof val === 'object') src = val.url || val.src || ''
    return { key: entryKey, type: 'image', value: src }
  }

  // 2. File / Document detection
  const isFileKey =
    combinedKey.includes('file') ||
    combinedKey.includes('pdf') ||
    combinedKey.includes('doc') ||
    combinedKey.includes('attachment') ||
    combinedKey.includes('lampiran')

  const isFileVal =
    (typeof val === 'string' &&
      /\.(pdf|docx?|xlsx?|csv|txt|zip|rar|7z|json|xml)$/i.test(val.split('?')[0])) ||
    (typeof File !== 'undefined' && val instanceof File)

  if (isFileKey || isFileVal) {
    let fileName = ''
    if (typeof val === 'string') {
      fileName = val.split('/').pop()?.split('?')[0] || val
    } else if (typeof File !== 'undefined' && val instanceof File) {
      fileName = val.name
    } else if (val && typeof val === 'object') {
      fileName = val.name || val.filename || 'Document'
    } else {
      fileName = String(val)
    }
    const ext = fileName.includes('.') ? fileName.split('.').pop()?.toUpperCase() : 'FILE'
    return {
      key: entryKey,
      type: 'file',
      value: fileName,
      meta: { ext, raw: val },
    }
  }

  // 3. HTML / Rich Text detection
  const isHtmlKey =
    combinedKey.includes('html') ||
    combinedKey.includes('markup') ||
    combinedKey.includes('rich')

  const isHtmlVal = typeof val === 'string' && /<[a-z][\s\S]*>/i.test(val)

  if (isHtmlKey || isHtmlVal) {
    return { key: entryKey, type: 'html', value: String(val) }
  }

  // 4. Currency / Price detection
  const isPriceKey =
    combinedKey.includes('price') ||
    combinedKey.includes('harga') ||
    combinedKey.includes('cost') ||
    combinedKey.includes('amount') ||
    combinedKey.includes('total')

  if (isPriceKey) {
    const num = Number(val)
    const formatted = !isNaN(num)
      ? new Intl.NumberFormat(props.lang === 'id' ? 'id-ID' : 'en-US', {
          style: 'currency',
          currency: props.lang === 'id' ? 'IDR' : 'USD',
          maximumFractionDigits: 0,
        }).format(num)
      : String(val)
    return {
      key: entryKey,
      type: 'badge',
      value: val,
      formattedValue: formatted,
      meta: { variant: 'price' },
    }
  }

  // 5. Quantity / Stock / Counter badge
  const isQtyKey =
    combinedKey.includes('quantity') ||
    combinedKey.includes('qty') ||
    combinedKey.includes('stock') ||
    combinedKey.includes('count') ||
    combinedKey.includes('jumlah')

  if (isQtyKey) {
    return {
      key: entryKey,
      type: 'badge',
      value: val,
      formattedValue: `${val} ${props.lang === 'id' ? 'unit' : 'qty'}`,
      meta: { variant: 'qty' },
    }
  }

  // 6. Generic Text
  return {
    key: entryKey,
    type: 'text',
    value: String(val),
  }
}

function getDisplaySlots(item: Record<string, any>, idx: number): DisplaySlot[] {
  const d = activeDisplay.value
  if (!d || typeof d !== 'object') return []
  const entries = Object.entries(d).slice(0, 3)
  const slots: DisplaySlot[] = []

  for (const [entryKey, entryVal] of entries) {
    const rawVal = resolveItemValue(item, entryKey, entryVal)
    if (rawVal === undefined || rawVal === null || rawVal === '') continue
    const slot = classifySlot(entryKey, rawVal, entryVal)
    slots.push(slot)
  }

  if (slots.length === 0) {
    slots.push({
      key: 'fallback',
      type: 'text',
      value: item?.title || item?.name || `${t('counter.item')} ${idx + 1}`,
    })
  }

  return slots
}

function getFileExtBadgeClass(ext?: string): string {
  const e = (ext || '').toUpperCase()
  if (e === 'PDF') {
    return 'zyvnox-bg-red-100 zyvnox-text-red-700 dark:zyvnox-bg-red-950/80 dark:zyvnox-text-red-400'
  }
  if (e === 'DOC' || e === 'DOCX') {
    return 'zyvnox-bg-blue-100 zyvnox-text-blue-700 dark:zyvnox-bg-blue-950/80 dark:zyvnox-text-blue-400'
  }
  if (e === 'XLS' || e === 'XLSX' || e === 'CSV') {
    return 'zyvnox-bg-emerald-100 zyvnox-text-emerald-700 dark:zyvnox-bg-emerald-950/80 dark:zyvnox-text-emerald-400'
  }
  if (e === 'ZIP' || e === 'RAR' || e === '7Z') {
    return 'zyvnox-bg-amber-100 zyvnox-text-amber-700 dark:zyvnox-bg-amber-950/80 dark:zyvnox-text-amber-400'
  }
  return 'zyvnox-bg-slate-200 zyvnox-text-slate-700 dark:zyvnox-bg-slate-700 dark:zyvnox-text-slate-300'
}

const {
  showModal,
  currentEditItem,
  currentEditIndex,
  addButtonText,
  handleAddClick,
  handleEditClick,
  handleSubmit,
  remove,
  getImageSrc,
  localItems,
} = useArrayObject(props, labels, emit)
</script>
