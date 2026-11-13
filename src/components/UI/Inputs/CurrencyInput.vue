<template>
  <div class="zyvnox-w-full zyvnox-relative zyvnox-mb-4">
    <label
      :for="id"
      class="zyvnox-inline-flex zyvnox-items-center zyvnox-gap-2 zyvnox-text-sm zyvnox-font-medium zyvnox-mb-2 zyvnox-text-slate-900 zyvnox-transition-colors zyvnox-duration-200 dark:zyvnox-text-slate-100"
      :class="{ 'zyvnox-text-red-500 dark:zyvnox-text-red-400': errorMessage.length || error }"
    >
      {{ label }}
      <Tooltip v-if="tooltip" :text="tooltip" :position="tooltipPosition ?? 'top'">
        <span class="zyvnox-text-slate-400 dark:zyvnox-text-slate-500 zyvnox-text-xs">
          {{ tooltipIcon ?? '❓' }}
        </span>
      </Tooltip>
    </label>

    <div class="zyvnox-relative zyvnox-flex zyvnox-items-center">
      <!-- Prefix Currency Indicator -->
      <div
        v-if="resolvedCurrencyPosition !== 'suffix'"
        class="zyvnox-absolute zyvnox-left-3 zyvnox-top-1/2 -zyvnox-translate-y-1/2 zyvnox-flex zyvnox-items-center zyvnox-z-10"
      >
        <div v-if="isSelectable" class="zyvnox-relative zyvnox-inline-flex zyvnox-items-center">
          <select
            :value="currencyMeta.code"
            :disabled="disabled"
            @change="handleSelectChange"
            class="currency-select-pill"
          >
            <option
              v-for="item in availableCurrencies"
              :key="item.code"
              :value="item.code"
            >
              {{ item.symbol }} {{ item.code }}
            </option>
          </select>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            class="currency-select-arrow"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <span
          v-else
          class="zyvnox-text-slate-500 dark:zyvnox-text-slate-400 zyvnox-font-medium zyvnox-select-none zyvnox-text-sm"
        >
          {{ currencySymbol }}
        </span>
      </div>

      <input
        :id="id"
        type="text"
        inputmode="numeric"
        :value="formattedValue"
        :disabled="disabled"
        @input="onInput"
        @blur="onBlur"
        :placeholder="placeholderText"
        :style="{
          paddingLeft: dynamicPaddingLeft,
          paddingRight: dynamicPaddingRight,
        }"
        class="zyvnox-w-full zyvnox-py-3 zyvnox-text-base zyvnox-text-slate-900 zyvnox-bg-white zyvnox-border zyvnox-border-slate-300 zyvnox-rounded-lg zyvnox-transition-all zyvnox-duration-200 zyvnox-box-border focus:zyvnox-outline-none focus:zyvnox-border-blue-500 focus:zyvnox-ring-4 focus:zyvnox-ring-blue-500/20 disabled:zyvnox-bg-slate-100 disabled:zyvnox-text-slate-500 disabled:zyvnox-cursor-not-allowed dark:zyvnox-bg-slate-800 dark:zyvnox-text-slate-100 dark:zyvnox-border-slate-600 dark:focus:zyvnox-border-blue-400 dark:focus:zyvnox-ring-blue-400/25 dark:disabled:zyvnox-bg-slate-700"
        :class="{
          'zyvnox-border-red-400 focus:zyvnox-ring-red-500/20 dark:zyvnox-border-red-400 dark:focus:zyvnox-ring-red-400/25':
            errorMessage.length || error,
        }"
      />

      <!-- Suffix Currency Indicator -->
      <div
        v-if="resolvedCurrencyPosition === 'suffix'"
        class="zyvnox-absolute zyvnox-right-3 zyvnox-top-1/2 -zyvnox-translate-y-1/2 zyvnox-flex zyvnox-items-center zyvnox-z-10"
      >
        <div v-if="isSelectable" class="zyvnox-relative zyvnox-inline-flex zyvnox-items-center">
          <select
            :value="currencyMeta.code"
            :disabled="disabled"
            @change="handleSelectChange"
            class="currency-select-pill"
          >
            <option
              v-for="item in availableCurrencies"
              :key="item.code"
              :value="item.code"
            >
              {{ item.symbol }} {{ item.code }}
            </option>
          </select>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            class="currency-select-arrow"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <span
          v-else
          class="zyvnox-text-slate-500 dark:zyvnox-text-slate-400 zyvnox-font-medium zyvnox-select-none zyvnox-text-sm"
        >
          {{ currencySymbol }}
        </span>
      </div>
    </div>

    <p
      v-for="(err, i) in errorMessage"
      :key="i"
      class="zyvnox-text-sm zyvnox-text-red-500 zyvnox-mt-2 zyvnox-animate-[fadeIn_300ms_ease-out] dark:zyvnox-text-red-400"
    >
      {{ err }}
    </p>
    <p
      v-if="typeof props.error === 'string' && errorMessage.length === 0"
      class="zyvnox-text-sm zyvnox-text-red-500 zyvnox-mt-2 zyvnox-animate-[fadeIn_300ms_ease-out] dark:zyvnox-text-red-400"
    >
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, ref, useAttrs, watch, type Ref } from 'vue'
import type { CurrencyInputProps } from '../../../configs/types/props.types'
import type { SupportedCurrency } from '../../../configs/types/field.types'
import type {
  GlobalDefaultText,
  SupportedLanguage,
} from '../../../configs/types/globalText.types'
import { defaultTextLabelsMap } from '../../../configs/i18n'
import { setUID } from '../../../untils'
import { getMessage } from '../../../helpers'
import { resolveCurrency, POPULAR_CURRENCIES } from '../../../helpers/currency'
import { Tooltip } from '../Display'
import { useCurrencyInput } from './composables'

const attrs = useAttrs()

const props = withDefaults(defineProps<CurrencyInputProps>(), {
  id: setUID(),
  currencyPosition: 'prefix',
  tooltipPosition: 'top',
  tooltipIcon: '❓',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: number | null, key: string): void
  (e: 'update:currency', currency: string, key: string): void
  (e: 'push:error', message: string[], key: string): void
  (e: 'remove:error', key: string): void
}>()

const resolvedCurrency = computed<string | undefined>(() => {
  return (
    props.currency ??
    (attrs.currency as string | undefined) ??
    (attrs['currency'] as string | undefined)
  )
})

const resolvedCurrencyPosition = computed<'prefix' | 'suffix'>(() => {
  const pos =
    props.currencyPosition ??
    (attrs['currency-position'] as 'prefix' | 'suffix' | undefined) ??
    (attrs.currencyPosition as 'prefix' | 'suffix' | undefined)
  return pos === 'suffix' ? 'suffix' : 'prefix'
})

const resolvedCurrencies = computed<SupportedCurrency[] | undefined>(() => {
  return (
    props.currencies ??
    (attrs.currencies as SupportedCurrency[] | undefined) ??
    (attrs['currencies'] as SupportedCurrency[] | undefined)
  )
})

const resolvedAllowCurrencySelect = computed<boolean>(() => {
  return Boolean(
    props.allowCurrencySelect ||
      attrs['allow-currency-select'] !== undefined ||
      attrs.allowCurrencySelect !== undefined ||
      attrs['allow-currency-select'] === '' ||
      attrs.allowCurrencySelect === true,
  )
})

const injected = inject<{ labels: Ref<GlobalDefaultText> }>('TableComponents', {
  labels: ref(defaultTextLabelsMap[props.lang ?? 'en']),
})

const labels = injected.labels
const lang = computed(() => (labels?.value?.lang as SupportedLanguage) ?? props.lang ?? 'en')

const {
  formattedValue,
  currencySymbol,
  currencyMeta,
  setCurrency,
  onInput,
  onBlur,
} = useCurrencyInput(props, emit, {
  currency: resolvedCurrency,
})

const isSelectable = computed(
  () =>
    Boolean(
      resolvedAllowCurrencySelect.value ||
        (resolvedCurrencies.value && resolvedCurrencies.value.length > 0),
    ),
)

const availableCurrencies = computed(() => {
  if (resolvedCurrencies.value && resolvedCurrencies.value.length > 0) {
    return resolvedCurrencies.value.map((curr) => {
      const meta = resolveCurrency(curr, lang.value)
      return { code: meta.code, symbol: meta.symbol, label: `${meta.code} - ${meta.symbol}` }
    })
  }
  return POPULAR_CURRENCIES
})

function handleSelectChange(e: Event) {
  const target = e.target as HTMLSelectElement
  setCurrency(target.value)
}

const dynamicPaddingLeft = computed(() => {
  if (resolvedCurrencyPosition.value === 'suffix') return '16px'
  if (isSelectable.value) return '104px'
  const len = currencySymbol.value.length
  const px = Math.max(40, len * 11 + 22)
  return `${px}px`
})

const dynamicPaddingRight = computed(() => {
  if (resolvedCurrencyPosition.value !== 'suffix') return '16px'
  if (isSelectable.value) return '104px'
  const len = currencySymbol.value.length
  const px = Math.max(40, len * 11 + 22)
  return `${px}px`
})

const errorMessage = ref<string[]>([])

watch(
  () => ({ val: props.modelValue, disabled: props.disabled, validate: props.validate }),
  ({ val, disabled, validate }) => {
    if (disabled) {
      errorMessage.value = []
      emit('remove:error', props.id)
      return
    }

    const err: string[] = []
    const numVal: number | undefined | null = val

    if (validate && numVal !== null && numVal !== undefined) {
      if (validate.min !== undefined && numVal < validate.min) {
        err.push(getMessage('numberMin', { min: String(validate.min) }, lang.value))
      }
      if (validate.max !== undefined && numVal > validate.max) {
        err.push(getMessage('numberMax', { max: String(validate.max) }, lang.value))
      }
    }

    errorMessage.value = err
    err.length ? emit('push:error', err, props.id) : emit('remove:error', props.id)
  },
  { deep: true, immediate: true },
)

const placeholderText = computed(() => props.placeholder ?? labels.value.placeholder?.number ?? '')
</script>

<style scoped>
.currency-select-pill {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #f1f5f9;
  color: #1e293b;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  height: 28px;
  line-height: 28px;
  padding: 0 24px 0 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
}

:root.dark .currency-select-pill,
.dark .currency-select-pill,
html.dark .currency-select-pill {
  background-color: #334155;
  color: #f8fafc;
  border-color: #475569;
}

.currency-select-pill:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
}

.currency-select-pill:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.currency-select-arrow {
  position: absolute;
  right: 7px;
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
  pointer-events: none;
  color: #64748b;
}

:root.dark .currency-select-arrow,
.dark .currency-select-arrow,
html.dark .currency-select-arrow {
  color: #94a3b8;
}

.currency-select-pill option {
  background-color: #ffffff;
  color: #0f172a;
}

:root.dark .currency-select-pill option,
.dark .currency-select-pill option,
html.dark .currency-select-pill option {
  background-color: #1e293b;
  color: #f8fafc;
}
</style>
