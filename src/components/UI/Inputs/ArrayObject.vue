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
          <div class="zyvnox-flex zyvnox-items-center zyvnox-gap-4 zyvnox-min-w-0">
            <img
              v-if="item?.image"
              :src="getImageSrc(item.image)"
              class="zyvnox-w-14 zyvnox-h-14 zyvnox-object-cover zyvnox-rounded-full zyvnox-border-2 zyvnox-border-white zyvnox-shadow-sm zyvnox-shrink-0 dark:zyvnox-border-slate-500"
              :alt="t('common.preview')"
            />
            <span
              class="zyvnox-font-medium zyvnox-text-slate-900 zyvnox-whitespace-nowrap zyvnox-overflow-hidden zyvnox-text-ellipsis dark:zyvnox-text-slate-100"
              >{{ item?.name || `${t('counter.item')} ${idx + 1}` }}</span
            >
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
import { computed } from 'vue'
import { setUID } from '../../../untils'
import { FormModal } from '../../Form'
import { useArrayObject } from './composables'
import { useI18n } from '../../composables/useI18n'
import type { ArrayObjectProps } from '../../../configs/types'
import { Tooltip } from '../Display'

const props = withDefaults(defineProps<ArrayObjectProps>(), {
  id: setUID(),
  tooltipPosition: 'top',
  tooltipIcon: '❓',
})

const { t, labels } = useI18n(computed(() => props.lang))

const emit = defineEmits<{
  (e: 'update:modelValue', value: any[], key: string): void
  (e: 'create:Options', key: string, options: string | number, optionView: string): void
}>()

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
