<template>
  <div
    class="zyvnox-w-full zyvnox-mb-6 zyvnox-animate-[zyvnox-slideUpFade_500ms_ease-out_backwards]"
  >
    <label
      class="zyvnox-inline-flex zyvnox-items-center zyvnox-gap-2 zyvnox-text-lg zyvnox-font-semibold zyvnox-mb-3 zyvnox-text-slate-900 zyvnox-pl-1 zyvnox-border-l-20 zyvnox-border-slate-200 zyvnox-transition-all zyvnox-duration-200 dark:zyvnox-text-slate-100 dark:zyvnox-border-slate-600"
    >
      {{ props.label }}

      <Tooltip v-if="tooltip" :text="tooltip" :position="tooltipPosition ?? 'top'">
        <span class="zyvnox-text-slate-400 dark:zyvnox-text-slate-500 zyvnox-text-xs">
          {{ tooltipIcon ?? '❓' }}
        </span>
      </Tooltip>
    </label>
    <div
      class="zyvnox-bg-slate-50 zyvnox-border-1 zyvnox-border-solid zyvnox-border-slate-200 zyvnox-rounded-xl zyvnox-p-6 zyvnox-shadow-sm zyvnox-flex zyvnox-flex-col zyvnox-gap-6 dark:zyvnox-bg-slate-800 dark:zyvnox-border-slate-700 max-[640px]:zyvnox-p-4 max-[640px]:zyvnox-gap-4"
    >
      <FormFieldRenderer
        v-for="(field, myKey) in props.schema"
        :key="myKey"
        :field="field"
        :field-key="myKey"
        :form-data="props.formData"
        :errors="props.errors"
        :lang="lang ?? 'en'"
        :is-update="props.isUpdate"
        @update:model-value="
          (val: any, key: string) => $emit('update:model-value', val, props.id + '.' + key)
        "
        @remove:errors="(key: string) => $emit('remove:errors', props.id + '.' + key)"
        @push:errors="
          (msg: string | string[], key: string) => $emit('push:errors', msg, props.id + '.' + key)
        "
        @create:Options="
          (k: string, o: string | number, v: string) =>
            $emit('create:Options', props.id + '.schema.' + k, o, v)
        "
        @multi-selected-change="
          (val, key) => $emit('multi-selected-change', val, props.id + '.' + key)
        "
        @selected-option-change="
          (val, key) => $emit('selected-option-change', val, props.id + '.' + key)
        "
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { FormFieldRenderer } from '../../Form'
import type { SingleObjectProps } from '../../../configs/types'
import { setUID } from '../../../untils'
import { Tooltip } from '../Display'

const props = withDefaults(defineProps<SingleObjectProps>(), {
  id: setUID(),
  tooltipPosition: 'top',
  tooltipIcon: '❓',
})
defineEmits<{
  (e: 'update:model-value', val: any, key: string): void
  (e: 'selected-option-change', val: string | null, key: string): void
  (e: 'multi-selected-change', val: string[], key: string): void
  (e: 'push:errors', message: string | string[], key: string): void
  (e: 'remove:errors', key: string): void
  (e: 'create:Options', key: string, options: string | number, optionView: string): void
}>()

const formData = ref({ ...props.formData })
const errors = ref({ ...props.errors })

watch(
  () => props,
  () => {
    formData.value = { ...props.formData }
    errors.value = { ...props.errors }
  },
  { immediate: true, deep: true },
)
</script>
