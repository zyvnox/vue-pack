<template>
  <div class="zyvnox-relative zyvnox-w-full zyvnox-mb-4">
    <label
      v-if="label"
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

    <div class="zyvnox-relative">
      <input
        v-if="!isSimpleListOnly"
        type="text"
        v-model="searchQuery"
        :placeholder="labels?.placeholder?.select"
        @focus="!props.disabled && handleFocus()"
        @blur="handleBlur"
        :disabled="props.disabled"
        class="zyvnox-w-full zyvnox-py-3 zyvnox-pl-4 zyvnox-pr-10 zyvnox-text-base zyvnox-text-slate-900 zyvnox-bg-white zyvnox-border-1 zyvnox-border-solid zyvnox-border-slate-300 zyvnox-rounded-lg zyvnox-transition-all zyvnox-duration-200 zyvnox-box-border zyvnox-cursor-pointer focus:zyvnox-outline-none focus:zyvnox-border-blue-500 focus:zyvnox-ring-4 focus:zyvnox-ring-blue-500/20 disabled:zyvnox-bg-slate-100 disabled:zyvnox-text-slate-500 disabled:zyvnox-cursor-not-allowed dark:zyvnox-bg-slate-800 dark:zyvnox-text-slate-100 dark:zyvnox-border-slate-600 dark:focus:zyvnox-border-blue-400 dark:focus:zyvnox-ring-blue-400/25 dark:disabled:zyvnox-bg-slate-700"
        :class="{
          'zyvnox-border-red-400 focus:zyvnox-ring-red-500/20 dark:zyvnox-border-red-400 dark:focus:zyvnox-ring-red-400/25':
            props.error,
          'zyvnox-rounded-b-none': isOpen,
        }"
      />

      <div
        v-if="!isSimpleListOnly"
        class="zyvnox-absolute zyvnox-right-3 zyvnox-top-1/2 -zyvnox-translate-y-1/2 zyvnox-pointer-events-none zyvnox-text-slate-500 dark:zyvnox-text-slate-400"
      >
        <svg
          class="zyvnox-w-5 zyvnox-h-5 zyvnox-transition-transform zyvnox-duration-200"
          :class="{ 'zyvnox-rotate-180': isOpen }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>

      <div
        v-if="isSimpleListOnly"
        @click="!props.disabled && (isOpen = !isOpen) && !showCreateModal"
        class="zyvnox-w-full zyvnox-py-3 zyvnox-pl-4 zyvnox-pr-4 zyvnox-text-base zyvnox-text-slate-900 zyvnox-bg-white zyvnox-border-1 zyvnox-border-solid zyvnox-border-slate-300 zyvnox-rounded-lg zyvnox-transition-all zyvnox-duration-200 zyvnox-box-border zyvnox-cursor-pointer zyvnox-flex zyvnox-items-center zyvnox-justify-between focus-visible:zyvnox-outline-none focus-visible:zyvnox-border-blue-500 focus-visible:zyvnox-ring-4 focus-visible:zyvnox-ring-blue-500/20 dark:zyvnox-bg-slate-800 dark:zyvnox-text-slate-100 dark:zyvnox-border-slate-600 dark:focus-visible:zyvnox-border-blue-400 dark:focus-visible:zyvnox-ring-blue-400/25"
        :class="{
          'zyvnox-bg-slate-100 zyvnox-text-slate-500 zyvnox-cursor-not-allowed dark:zyvnox-bg-slate-700':
            props.disabled,
          'zyvnox-border-red-400 focus-visible:zyvnox-ring-red-500/20 dark:zyvnox-border-red-400 dark:focus-visible:zyvnox-ring-red-400/25':
            props.error,
          'zyvnox-rounded-b-none': isOpen,
        }"
      >
        <span :class="{ 'zyvnox-text-slate-400 dark:zyvnox-text-slate-500': !selectedViewLabel }">
          {{ selectedViewLabel || labels?.placeholder.select }}
        </span>
        <svg
          class="zyvnox-w-5 zyvnox-h-5 zyvnox-transition-transform zyvnox-duration-200 zyvnox-text-slate-500 dark:zyvnox-text-slate-400"
          :class="{ 'zyvnox-rotate-180': isOpen }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
    </div>

    <p
      v-if="props.error"
      class="zyvnox-text-sm zyvnox-text-red-500 zyvnox-mt-2 dark:zyvnox-text-red-400"
    >
      {{ props.error }}
    </p>

    <transition
      enter-active-class="zyvnox-animate-[zyvnox-slideDownFade_200ms_ease-out]"
      enter-from-class="zyvnox-opacity-0"
      enter-to-class="zyvnox-opacity-100"
      leave-active-class="zyvnox-transition-opacity zyvnox-duration-100 zyvnox-ease-in"
      leave-from-class="zyvnox-opacity-100"
      leave-to-class="zyvnox-opacity-0"
    >
      <ul
        v-if="isOpen && !showCreateModal"
        class="zyvnox-absolute zyvnox-list-none zyvnox-z-200 zyvnox-w-full zyvnox-px-2 zyvnox-mx-0 zyvnox-mt-[-1px] zyvnox-py-2 zyvnox-bg-white/95 zyvnox-border-1 zyvnox-border-solid zyvnox-border-blue-500 zyvnox-border-t-0 zyvnox-rounded-b-lg zyvnox-shadow-xl zyvnox-max-h-64 zyvnox-overflow-y-auto zyvnox-backdrop-blur-md zyvnox-box-border dark:zyvnox-bg-slate-800/95 dark:zyvnox-border-blue-400"
        :class="{
          'zyvnox-border-red-400 dark:zyvnox-border-red-400': props.error,
          'zyvnox-mt-1 zyvnox-border-t-1 zyvnox-border-solid zyvnox-border-slate-300 dark:zyvnox-border-slate-600 focus-within:zyvnox-border-blue-500 dark:focus-within:zyvnox-border-blue-400':
            isSimpleListOnly,
        }"
      >
        <li
          v-for="option in dropdownOptions"
          :key="option"
          @mousedown.prevent="selectOption(option)"
          class="zyvnox-px-4 zyvnox-py-3 zyvnox-cursor-pointer zyvnox-transition-colors zyvnox-duration-200 hover:zyvnox-bg-slate-50 dark:hover:zyvnox-bg-slate-700"
          :class="{
            'zyvnox-bg-blue-50 zyvnox-text-blue-700 zyvnox-font-medium dark:zyvnox-bg-blue-900/30 dark:zyvnox-text-blue-300':
              isSameValue(option, modelValue),
          }"
        >
          <div class="zyvnox-flex zyvnox-items-center zyvnox-justify-between zyvnox-gap-4">
            <span class="zyvnox-truncate">{{
              option === '' ? `— ${t('common.empty')} —` : getOptionView(option)
            }}</span>
            <svg
              v-if="option === modelValue"
              class="zyvnox-w-5 zyvnox-h-5 zyvnox-text-blue-500 zyvnox-shrink-0 zyvnox-transition-all zyvnox-duration-200 dark:zyvnox-text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
        </li>

        <li
          v-if="withCreate && searchQuery && isNewOption(searchQuery)"
          @mousedown.prevent="showCreateModal = true"
          class="zyvnox-px-4 zyvnox-py-3 zyvnox-cursor-pointer zyvnox-transition-colors zyvnox-duration-200 hover:zyvnox-bg-slate-50 zyvnox-text-blue-600 zyvnox-font-medium dark:zyvnox-text-blue-400 dark:hover:zyvnox-bg-slate-700"
        >
          <div class="zyvnox-flex zyvnox-items-center zyvnox-gap-2">
            <svg
              class="zyvnox-w-5 zyvnox-h-5 zyvnox-text-blue-600 dark:zyvnox-text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            {{ labels?.btn?.add ?? t('common.add') }} "{{ searchQuery }}"
          </div>
        </li>

        <li
          v-if="dropdownOptions.length === 0"
          class="zyvnox-px-4 zyvnox-py-3 zyvnox-text-slate-500 zyvnox-italic zyvnox-cursor-default dark:zyvnox-text-slate-400"
        >
          {{ withCreate ? t('table.noResult') : t('status.empty') }}
        </li>
      </ul>
    </transition>

    <FormModal
      v-if="showCreateModal && withCreate?.schema"
      :schema="withCreate.schema"
      :initial-data="{ name: searchQuery }"
      @submit="submitFormDataCreate"
      @cancel="() => (showCreateModal = false)"
      :lang="lang"
      @create:Options="
        (k: string, o: string | number, v: string) => $emit('create:Options', k, o, v)
      "
    />

    <Loader ref="loader" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, inject } from 'vue'
import type { SelectDropdownProps } from '../../../configs/types'
import { submitData } from '../../../fetch'
import { Loader } from '../../../components/UI/Feedback'
import { FormModal } from '../../Form'
import { setUID } from '../../../untils'
import { useI18n } from '../../composables/useI18n'
import { Tooltip } from '../Display'
import type { ZodType } from 'zod'

// ----------------------------------------------------------------
// 1. PROPS & EMITS (Tetap sama)
// ----------------------------------------------------------------
const props = withDefaults(defineProps<SelectDropdownProps>(), {
  demo: false,
  id: setUID(),
  tooltipPosition: 'top',
  tooltipIcon: '❓',
})

const { t, labels } = useI18n(computed(() => props.lang))

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number, key: string): void
  (e: 'create:Options', key: string, options: string | number, optionView: string): void
}>()

// ----------------------------------------------------------------
// 2. STATE LOKAL (Salinan dari Props)
// ----------------------------------------------------------------
// Kita buat 'ref' lokal sebagai salinan dari props.
// Kita akan bekerja dengan 'ref' ini, BUKAN 'props'
const localOptions = ref<any[]>([...props.options])
const localOptionsView = ref<any[]>([...(props.optionsView || props.options)])

// Watcher untuk jaga-jaga jika parent MENGUBAH props (sinkronisasi 1 arah)
watch(
  () => props.options,
  (newOptions) => {
    localOptions.value = [...newOptions]
  },
  { deep: true },
)

watch(
  () => props.optionsView,
  (newViews) => {
    localOptionsView.value = [...(newViews || props.options)]
  },
  { deep: true },
)

// ----------------------------------------------------------------
// 3. STATE KOMPONEN (Tetap sama)
// ----------------------------------------------------------------
const isOpen = ref(false)
const searchQuery = ref('')
const showCreateModal = ref(false)
const loader = ref<InstanceType<typeof Loader> | null>(null)

// ----------------------------------------------------------------
// 4. FUNGSI & COMPUTED (Dimodifikasi untuk menggunakan STATE LOKAL)
// ----------------------------------------------------------------
const handleFocus = () => {
  isOpen.value = true
  searchQuery.value = selectedViewLabel.value || ''
}

const handleBlur = () => {
  setTimeout(() => {
    isOpen.value = false
  }, 200)
}

const isSameValue = (a: any, b: any): boolean => {
  return props.optionsIsNumber ? Number(a) === Number(b) : String(a) === String(b)
}

const selectedViewLabel = computed(() => getOptionView(props.modelValue ?? ''))

// DIUBAH: Menggunakan 'localOptions.value' dan 'localOptionsView.value'
const getOptionView = (option: string | number | null): string => {
  const index = localOptions.value.findIndex((opt) => opt === option)
  return index !== -1 && (localOptionsView.value?.length ?? 0) > index
    ? localOptionsView.value![index].toString()
    : (option?.toString?.() ?? '')
}

// Watcher untuk v-model (Tidak berubah, tapi bergantung pada 'getOptionView' yang baru)
watch(
  () => props.modelValue,
  (newVal) => {
    if (newVal === null) {
      emit('update:modelValue', '', props.id)
    }
    if (!isOpen.value) {
      searchQuery.value = getOptionView(newVal ?? '')
    }
  },
  { immediate: true, deep: true },
)

// DIUBAH: Menggunakan 'localOptions.value'
const isSimpleListOnly = computed(() => !props.withCreate && localOptions.value.length < 5)

// DIUBAH: Menggunakan 'localOptions.value' dan 'localOptionsView.value'
const filteredOptions = computed(() => {
  const query = searchQuery.value.toLowerCase().trim()
  const match: any[] = localOptions.value.filter((_, idx) => {
    const label = localOptionsView.value[idx].toString()?.toLowerCase?.() ?? ''
    return label.includes(query)
  })

  const exists = localOptionsView.value.some(
    (label) => label.toString().toLowerCase().trim() === query,
  )

  return query && !exists ? [...match] : match
})

// DIUBAH: Menggunakan 'localOptions.value' dan 'localOptionsView.value'
const filteredExistingOptions = computed(() => {
  const query = searchQuery.value.toLowerCase().trim()
  return localOptions.value.filter((_, idx) => {
    const label = localOptionsView.value[idx].toString()?.toLowerCase?.() ?? ''
    return label.includes(query)
  })
})

// DIUBAH: Menggunakan 'localOptions.value'
const dropdownOptions = computed(() => {
  const baseOptions = isSimpleListOnly.value
    ? localOptions.value
    : props.withCreate
      ? filteredOptions.value
      : filteredExistingOptions.value

  const includeNullOption = !props.required && !localOptions.value.includes('') ? [''] : []

  return [...includeNullOption, ...baseOptions]
})

// DIUBAH: Menggunakan 'localOptionsView.value'
const isNewOption = (option: string | number): boolean => {
  const normalizedOption = option?.toString?.().toLowerCase?.()
  return !localOptionsView.value.some(
    (label) => label.toString().toLowerCase() === normalizedOption,
  )
}

const selectOption = (option: string | number) => {
  if (props.disabled) return
  const value = props.optionsIsNumber && option !== '' ? Number(option) : option
  emit('update:modelValue', value, props.id)
  isOpen.value = false
  searchQuery.value = getOptionView(value)
}

// ----------------------------------------------------------------
// 5. FUNGSI SUBMIT (MODIFIKASI INTI)
// ----------------------------------------------------------------
const submitFormDataCreate = async (formData: Record<string, any>) => {
  if (!props.withCreate!.endPoint || !props.withCreate!.DB_NAME) {
    loader.value?.show('error', 'Server Error!')
    return
  }

  try {
    loader.value?.show('loading', 'Please wait...')
    const { image, ...data } = formData
    const authType: 'cookie' | 'bearer' | 'none' | 'custom' =
      props.withCreate?.submitOption?.delete?.authType ??
      props.withCreate?.submitOption?.global?.authType ??
      'cookie'
    const token: string | undefined =
      props.withCreate?.submitOption?.delete?.token ??
      props.withCreate?.submitOption?.global?.token ??
      undefined
    const customHeaders: Record<string, string> | undefined =
      props.withCreate?.submitOption?.delete?.customHeaders ??
      props.withCreate?.submitOption?.global?.customHeaders ??
      undefined
    const res = await submitData({
      data,
      validation: (props.withCreate?.validation as ZodType<any>) ?? undefined,
      endpoint: props.withCreate!.endPoint,
      mode: 'create',
      db: props.withCreate?.DB_NAME,
      authType,
      demo: props.demo,
      token,
      customHeaders,
    })

    loader.value?.show('success', 'Data created successfully')
    const valueToInsert = res.data[props.withCreate?.keys?.optionsKey ?? 'id']
    const labelToInsert = res.data[props.withCreate?.keys?.optionsViewKey ?? 'name']
    if (valueToInsert != null && labelToInsert != null) {
      const alreadyExists = localOptions.value.some(
        (opt) => opt?.toString().toLowerCase() === valueToInsert.toString().toLowerCase(),
      )
      if (!alreadyExists) {
        localOptions.value.push(valueToInsert)
        localOptionsView.value.push(labelToInsert)
      }
    }
    emit('update:modelValue', valueToInsert, props.id)
    emit('create:Options', props.id, valueToInsert, labelToInsert)

    showCreateModal.value = false
    isOpen.value = false
  } catch (err) {
    console.error(err)
    loader.value?.show('error', 'Failed to create data')
  }
}
</script>
