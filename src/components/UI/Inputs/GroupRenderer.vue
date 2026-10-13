<template>
  <div>
    <label
      class="zyvnox-inline-flex zyvnox-items-center zyvnox-gap-2 zyvnox-text-sm zyvnox-font-medium zyvnox-mb-2 zyvnox-text-slate-900 zyvnox-transition-colors zyvnox-duration-200 dark:zyvnox-text-slate-100"
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
      class="zyvnox-bg-white zyvnox-border-1 zyvnox-border-solid zyvnox-border-slate-200 zyvnox-rounded-lg zyvnox-p-6 zyvnox-shadow-xl zyvnox-transition-all zyvnox-duration-200 zyvnox-animate-[zyvnox-fadeIn_400ms_ease-out] zyvnox-mb-4 zyvnox-z-10 dark:zyvnox-bg-slate-800 dark:zyvnox-border-slate-700"
    >
      <p
        v-if="props.error"
        class="zyvnox-text-sm zyvnox-text-red-500 zyvnox-mb-4 zyvnox-animate-[zyvnox-fadeIn_300ms_ease-out] dark:zyvnox-text-red-400"
      >
        {{ props.error }}
      </p>

      <template v-if="typeDesign === 'select' || typeDesign === 'dropdown'">
        <div class="zyvnox-relative zyvnox-mb-2">
          <!-- Custom Dropdown Trigger -->
          <div
            @click="isOpen = !isOpen"
            class="zyvnox-w-full zyvnox-py-3 zyvnox-pl-4 zyvnox-pr-4 zyvnox-text-base zyvnox-text-slate-900 zyvnox-bg-white zyvnox-border-1 zyvnox-border-solid zyvnox-border-slate-300 zyvnox-rounded-lg zyvnox-transition-all zyvnox-duration-200 zyvnox-box-border zyvnox-cursor-pointer zyvnox-flex zyvnox-items-center zyvnox-justify-between focus-visible:zyvnox-outline-none focus-visible:zyvnox-border-blue-500 focus-visible:zyvnox-ring-4 focus-visible:zyvnox-ring-blue-500/20 dark:zyvnox-bg-slate-800 dark:zyvnox-text-slate-100 dark:zyvnox-border-slate-600 dark:focus-visible:zyvnox-border-blue-400 dark:focus-visible:zyvnox-ring-blue-400/25"
            :class="{ 'zyvnox-rounded-b-none': isOpen }"
          >
            <span :class="{ 'zyvnox-text-slate-400 dark:zyvnox-text-slate-500': !selectedOption }">
              {{
                selectedOption
                  ? (props.optionsLabels?.[selectedOption] ?? selectedOption)
                  : labels?.placeholder?.select
              }}
            </span>
            <span
              class="zyvnox-i-mdi-chevron-down zyvnox-w-5 zyvnox-h-5 zyvnox-transition-transform zyvnox-duration-200 zyvnox-text-slate-500 dark:zyvnox-text-slate-400"
              :class="{ 'zyvnox-rotate-180': isOpen }"
            ></span>
          </div>

          <!-- Dropdown List -->
          <transition
            enter-active-class="zyvnox-animate-[zyvnox-slideDownFade_200ms_ease-out]"
            leave-active-class="zyvnox-transition-opacity zyvnox-duration-100 zyvnox-ease-in"
            leave-from-class="zyvnox-opacity-100"
            leave-to-class="zyvnox-opacity-0"
          >
            <ul
              v-if="isOpen"
              class="zyvnox-absolute zyvnox-list-none zyvnox-z-200 zyvnox-w-full zyvnox-px-2 zyvnox-mx-0 zyvnox-mt-[-1px] zyvnox-py-2 zyvnox-bg-white/95 zyvnox-border-1 zyvnox-border-solid zyvnox-border-blue-500 zyvnox-border-t-0 zyvnox-rounded-b-lg zyvnox-shadow-xl zyvnox-max-h-64 zyvnox-overflow-y-auto zyvnox-backdrop-blur-md zyvnox-box-border dark:zyvnox-bg-slate-800/95 dark:zyvnox-border-blue-400"
            >
              <li
                v-if="!required"
                @mousedown.prevent="selectAnOption(null)"
                class="zyvnox-px-4 zyvnox-py-3 zyvnox-cursor-pointer zyvnox-transition-colors zyvnox-duration-200 hover:zyvnox-bg-slate-50 dark:hover:zyvnox-bg-slate-700"
              >
                {{ labels?.noSelection }}
              </li>
              <li
                v-for="(schemaList, key) in options"
                :key="key"
                @mousedown.prevent="selectAnOption(key)"
                class="zyvnox-px-4 zyvnox-py-3 zyvnox-cursor-pointer zyvnox-transition-colors zyvnox-duration-200 hover:zyvnox-bg-slate-50 dark:hover:zyvnox-bg-slate-700"
                :class="{
                  'zyvnox-bg-blue-50 zyvnox-text-blue-700 zyvnox-font-medium dark:zyvnox-bg-blue-900/30 dark:zyvnox-text-blue-300':
                    selectedOption === key,
                }"
              >
                <div class="zyvnox-flex zyvnox-items-center zyvnox-justify-between zyvnox-gap-4">
                  <span class="zyvnox-truncate">{{ props.optionsLabels?.[key] ?? key }}</span>
                  <span
                    v-if="selectedOption === key"
                    class="zyvnox-i-mdi-check zyvnox-w-5 zyvnox-h-5 zyvnox-text-blue-500 zyvnox-shrink-0 zyvnox-transition-all zyvnox-duration-200 dark:zyvnox-text-blue-400"
                  ></span>
                </div>
              </li>
            </ul>
          </transition>
        </div>

        <FormFieldRenderer
          class="zyvnox-mt-6 zyvnox-animate-[zyvnox-revealContent_400ms_ease-out]"
          v-if="selectedOption && options[selectedOption]"
          v-for="(field, key) in options[selectedOption]"
          :form-data="props.formData"
          :errors="errors"
          :is-update="props.isUpdate"
          :lang="lang ?? 'en'"
          @update:model-value="(val: any, key: any) => $emit('update:model-value', val, key)"
          @push:errors="errorPush"
          @remove:errors="errorRemove"
          @create:Options="
            (k: string, o: string | number, v: string) =>
              $emit('create:Options', `${id}.options['${selectedOption}'].${k}`, o, v)
          "
          @multi-selected-change="(val, key) => $emit('multi-selected-change', val, key)"
          @selected-option-change="(val, key) => $emit('selected-option-change', val, key)"
          :key="key"
          :field="field"
          :field-key="key"
        />
      </template>

      <template v-else-if="typeDesign === 'cekbox'">
        <div
          v-for="(schemaList, key) in options"
          :key="key"
          class="zyvnox-mb-4 zyvnox-p-4 zyvnox-border-1 zyvnox-border-solid zyvnox-border-slate-200 zyvnox-rounded-lg zyvnox-transition-all zyvnox-duration-200 has-[:checked]:zyvnox-border-blue-500 has-[:checked]:zyvnox-bg-blue-50/50 dark:zyvnox-border-slate-700 dark:has-[:checked]:zyvnox-border-blue-400 dark:has-[:checked]:zyvnox-bg-blue-900/20 last:zyvnox-mb-0"
        >
          <label
            class="zyvnox-flex zyvnox-items-center zyvnox-gap-3 zyvnox-font-medium zyvnox-text-slate-900 zyvnox-cursor-pointer dark:zyvnox-text-slate-100 zyvnox-group"
          >
            <input
              type="checkbox"
              v-model="multiSelected"
              :value="key"
              class="zyvnox-opacity-0 zyvnox-w-0 zyvnox-h-0 zyvnox-absolute peer"
            />
            <div
              class="zyvnox-w-5 zyvnox-h-5 zyvnox-border-1.5 zyvnox-border-solid zyvnox-border-slate-700 zyvnox-rounded zyvnox-bg-white zyvnox-transition-all zyvnox-duration-200 zyvnox-shrink-0 zyvnox-flex zyvnox-items-center zyvnox-justify-center peer-checked:zyvnox-bg-blue-500 peer-checked:zyvnox-border-blue-500 dark:zyvnox-border-slate-500 dark:zyvnox-bg-slate-800 dark:peer-checked:zyvnox-bg-blue-500"
            >
              <span
                class="zyvnox-i-mdi-check zyvnox-w-3.5 zyvnox-h-3.5 dark:zyvnox-text-white zyvnox-opacity-0 group-has-[:checked]:zyvnox-opacity-100 zyvnox-transition-opacity"
              ></span>
            </div>
            {{ props.optionsLabels?.[key] ?? key }}
          </label>

          <div
            v-if="multiSelected.includes(key)"
            class="zyvnox-mt-4 zyvnox-pt-4 zyvnox-px-4 zyvnox-border-1.5 zyvnox-rounded-2xl zyvnox-border-solid zyvnox-border-blue-500 zyvnox-animate-[zyvnox-revealContent_400ms_ease-out] zyvnox-overflow-visible dark:zyvnox-border-blue-400"
          >
            <FormFieldRenderer
              v-for="(field, idx) in schemaList"
              :key="idx"
              :field="field"
              :field-key="idx"
              :form-data="props.formData"
              :errors="errors"
              :lang="lang ?? 'en'"
              :is-update="props.isUpdate"
              @update:model-value="(val: any, key: any) => $emit('update:model-value', val, key)"
              @push:errors="errorPush"
              @remove:errors="errorRemove"
              @create:Options="
                (k: string, o: string | number, v: string) =>
                  $emit('create:Options', `${id}.options['${key}'].${k}`, o, v)
              "
              @multi-selected-change="(val, key) => $emit('multi-selected-change', val, key)"
              @selected-option-change="(val, key) => $emit('selected-option-change', val, key)"
            />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SchemaGroupRendererProps, GlobalDefaultText } from '../../../configs/types'
import { defaultTextLabelsMap } from '../../../configs/i18n'
import { setUID } from '../../../untils'
import { useSchemaGroupRenderer } from './composables'
import { FormFieldRenderer } from '../../Form'
import { Tooltip } from '../Display'

import { inject, onMounted, ref, type Ref } from 'vue'

const emit = defineEmits<{
  (e: 'update:model-value', value: any, key: string): void
  (e: 'push:errors', message: string | string[], key: string): void
  (e: 'remove:errors', key: string): void
  (e: 'selected-option-change', val: string | null, key: string): void
  (e: 'multi-selected-change', val: string[], key: string): void
  (e: 'create:Options', key: string, options: string | number, optionView: string): void
}>()

const props = withDefaults(defineProps<SchemaGroupRendererProps>(), {
  id: setUID(),
  tooltipPosition: 'top',
  tooltipIcon: '❓',
})

const injected = inject<{ labels: Ref<GlobalDefaultText> }>('TableComponents', {
  labels: ref(defaultTextLabelsMap[props.lang ?? 'en']),
})

const labels = injected.labels
const { selectedOption, multiSelected, errorPush, errorRemove } = useSchemaGroupRenderer(
  props,
  emit,
)

const isOpen = ref(false)

function selectAnOption(key: string | null) {
  selectedOption.value = key
  isOpen.value = false
}
</script>
