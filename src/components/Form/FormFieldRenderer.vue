<template>
  <div>
    <TextInput
      v-if="field.type === 'text'"
      :id="fieldKey"
      :type="field.type"
      :label="label"
      :model-value="getValue() ?? ''"
      :error="getNested(errors, fieldKey)"
      :disabled="field.disabled"
      :validate="field.validate as TextValidation"
      :lang="lang"
      :placeholder="field.placeholder"
      :tooltip="field.tooltip"
      :tooltip-position="field.tooltipPosition"
      :tooltip-icon="field.tooltipIcon"
      @update:model-value="(val: any) => $emit('update:model-value', val, fieldKey)"
      @remove:error="handlers.removeError"
      @push:error="handlers.pushError"
    />

    <TelInput
      v-if="field.type === 'tel'"
      :id="fieldKey"
      :label="label"
      :model-value="getValue() ?? ''"
      :error="getNested(errors, fieldKey)"
      :disabled="field.disabled"
      :validate="field.validate"
      :lang="lang"
      :placeholder="field.placeholder"
      :tooltip="field.tooltip"
      :tooltip-position="field.tooltipPosition"
      :tooltip-icon="field.tooltipIcon"
      @update:model-value="(val: any) => $emit('update:model-value', val, fieldKey)"
      @remove:error="handlers.removeError"
      @push:error="handlers.pushError"
    />

    <CurrencyInput
      v-if="field.type === 'currency'"
      :id="fieldKey"
      :label="label"
      :model-value="getValue() ?? null"
      :error="getNested(errors, fieldKey)"
      :disabled="field.disabled"
      :validate="field.validate"
      :lang="lang"
      :placeholder="field.placeholder"
      :tooltip="field.tooltip"
      :tooltip-position="field.tooltipPosition"
      :tooltip-icon="field.tooltipIcon"
      @update:model-value="(val: any) => $emit('update:model-value', val, fieldKey)"
      @remove:error="handlers.removeError"
      @push:error="handlers.pushError"
    />

    <RateInput
      v-if="field.type === 'rate'"
      :id="fieldKey"
      :label="label"
      :model-value="getValue() ?? null"
      :error="getNested(errors, fieldKey)"
      :disabled="field.disabled"
      :validate="field.validate"
      :lang="lang"
      :tooltip="field.tooltip"
      :tooltip-position="field.tooltipPosition"
      :tooltip-icon="field.tooltipIcon"
      @update:model-value="(val: any) => $emit('update:model-value', val, fieldKey)"
    />

    <NumberInput
      v-if="field.type === 'number'"
      :id="fieldKey"
      :label="label"
      :placeholder="field.placeholder"
      :model-value="getValue() ?? ''"
      :error="getNested(errors, fieldKey)"
      :disabled="field.disabled"
      :lang="lang"
      :validate="field.validate as NumberValidation"
      :tooltip="field.tooltip"
      :tooltip-position="field.tooltipPosition"
      :tooltip-icon="field.tooltipIcon"
      @update:model-value="(val: any) => $emit('update:model-value', val, fieldKey)"
      @remove:error="handlers.removeError"
      @push:error="handlers.pushError"
    />

    <EmailInput
      v-if="field.type === 'email'"
      :id="fieldKey"
      :type="field.type"
      :label="label"
      :placeholder="field.placeholder"
      :model-value="getValue() ?? ''"
      :error="getNested(errors, fieldKey)"
      :disabled="field.disabled"
      :validate="field.validate as EmailValidation"
      :lang="lang"
      :tooltip="field.tooltip"
      :tooltip-position="field.tooltipPosition"
      :tooltip-icon="field.tooltipIcon"
      @update:model-value="(val: any) => $emit('update:model-value', val, fieldKey)"
      @remove:error="handlers.removeError"
      @push:error="handlers.pushError"
    />

    <TagInput
      v-if="field.type === 'tag'"
      :id="fieldKey"
      :label="label"
      :placeholder="field.placeholder"
      :model-value="getValue() ?? []"
      :error="getNested(errors, fieldKey)"
      :disabled="field.disabled"
      :lang="lang"
      :validate="field.validate"
      :tooltip="field.tooltip"
      :tooltip-position="field.tooltipPosition"
      :tooltip-icon="field.tooltipIcon"
      @update:model-value="(val: any) => $emit('update:model-value', val, fieldKey)"
    />

    <ToggleInput
      v-if="field.type === 'toggle'"
      :id="fieldKey"
      :label="label"
      :model-value="Boolean(getValue() ?? false)"
      :error="getNested(errors, fieldKey)"
      :disabled="field.disabled"
      :lang="lang"
      :tooltip="field.tooltip"
      :tooltip-position="field.tooltipPosition"
      :tooltip-icon="field.tooltipIcon"
      @update:model-value="(val: any) => $emit('update:model-value', val, fieldKey)"
    />

    <UrlInput
      v-if="field.type === 'url'"
      :id="fieldKey"
      :label="label"
      :placeholder="field.placeholder"
      :model-value="getValue() ?? ''"
      :error="getNested(errors, fieldKey)"
      :disabled="field.disabled"
      :validate="field.validate ?? true"
      :lang="lang"
      :tooltip="field.tooltip"
      :tooltip-position="field.tooltipPosition"
      :tooltip-icon="field.tooltipIcon"
      @update:model-value="(val: any) => $emit('update:model-value', val, fieldKey)"
      @remove:error="handlers.removeError(fieldKey)"
      @push:error="(msg: string) => handlers.pushError(msg, fieldKey)"
    />

    <PasswordInput
      v-if="field.type === 'password'"
      :id="fieldKey"
      :label="label"
      :lang="lang"
      :placeholder="field.placeholder"
      :model-value="getValue() ?? ''"
      :error="getNested(errors, fieldKey)"
      :disabled="field.disabled"
      :validate="field.validate"
      :tooltip="field.tooltip"
      :tooltip-position="field.tooltipPosition"
      :tooltip-icon="field.tooltipIcon"
      @update:model-value="(val: any) => $emit('update:model-value', val, fieldKey)"
      @remove:error="handlers.removeError"
      @push:error="handlers.pushError"
    />

    <TextAreaQuillInput
      v-if="field.type === 'quillEditor'"
      :id="fieldKey"
      :label="label"
      :error="getNested(errors, fieldKey)"
      :model-value="getValue() ?? ''"
      :disabled="field.disabled"
      :lang="lang"
      :validate="field.validate"
      :api="field.api"
      :tooltip="field.tooltip"
      :tooltip-position="field.tooltipPosition"
      :tooltip-icon="field.tooltipIcon"
      @update:modelValue="(val: any) => $emit('update:model-value', val, fieldKey)"
      @remove:error="handlers.removeError"
      @push:error="handlers.pushError"
    />
    <TextAreaInput
      v-if="field.type === 'textArea'"
      :id="fieldKey"
      :label="label"
      :error="getNested(errors, fieldKey)"
      :model-value="getValue() ?? ''"
      :disabled="field.disabled"
      :lang="lang"
      :validate="field.validate"
      :tooltip="field.tooltip"
      :tooltip-position="field.tooltipPosition"
      :tooltip-icon="field.tooltipIcon"
      @update:modelValue="(val: any) => $emit('update:model-value', val, fieldKey)"
      @remove:error="handlers.removeError"
      @push:error="handlers.pushError"
    />

    <ImageInput
      v-if="field.type === 'image'"
      :id="fieldKey"
      :label="label"
      :model-value="getValue() ?? null"
      :disabled="field.disabled"
      :preview-alt="fieldKey"
      @update:modelValue="(val: any) => $emit('update:model-value', val, fieldKey)"
      :validate="field.validate"
      :watermark="field.watermark"
      :error="getNested(errors, fieldKey)"
      @remove:error="handlers.removeError"
      @push:error="handlers.pushError"
      :lang="lang"
      :tooltip="field.tooltip"
      :tooltip-position="field.tooltipPosition"
      :tooltip-icon="field.tooltipIcon"
    />

    <ImageArrayInput
      v-if="field.type === 'imageArray'"
      :id="fieldKey"
      :label="label"
      :model-value="getValue() ?? []"
      :disabled="field.disabled"
      :preview-alt="fieldKey"
      @update:modelValue="(val: any) => $emit('update:model-value', val, fieldKey)"
      :validate="field.validate"
      :watermark="field.watermark"
      :error="getNested(errors, fieldKey)"
      @remove:error="handlers.removeError"
      @push:error="handlers.pushError"
      :lang="lang"
      :tooltip="field.tooltip"
      :tooltip-position="field.tooltipPosition"
      :tooltip-icon="field.tooltipIcon"
    />

    <FileInput
      v-if="field.type === 'file'"
      :id="fieldKey"
      :label="label"
      :model-value="getValue() ?? null"
      :disabled="field.disabled"
      :preview-alt="fieldKey"
      @update:modelValue="(val: any) => $emit('update:model-value', val, fieldKey)"
      :validate="field.validate"
      :error="getNested(errors, fieldKey)"
      @remove:error="handlers.removeError"
      @push:error="handlers.pushError"
      :lang="lang"
      :tooltip="field.tooltip"
      :tooltip-position="field.tooltipPosition"
      :tooltip-icon="field.tooltipIcon"
    />

    <FileArrayInput
      v-if="field.type === 'fileArray'"
      :id="fieldKey"
      :label="label"
      :model-value="getValue() ?? null"
      :disabled="field.disabled"
      :preview-alt="fieldKey"
      @update:modelValue="(val: any) => $emit('update:model-value', val, fieldKey)"
      :validate="field.validate"
      :error="getNested(errors, fieldKey)"
      @remove:error="handlers.removeError"
      @push:error="handlers.pushError"
      :lang="lang"
      :tooltip="field.tooltip"
      :tooltip-position="field.tooltipPosition"
      :tooltip-icon="field.tooltipIcon"
    />

    <ColorInput
      v-if="field.type === 'color'"
      :id="fieldKey"
      :label="label"
      :model-value="field.single ? (getValue() ?? '') : (getValue() ?? [])"
      @update:model-value="(val: any) => $emit('update:model-value', val, fieldKey)"
      :error="getNested(errors, fieldKey)"
      :disabled="field.disabled"
      :validate="field.validate"
      :single="field.single"
      :lang="lang"
      :tooltip="field.tooltip"
      :tooltip-position="field.tooltipPosition"
      :tooltip-icon="field.tooltipIcon"
    />

    <SelectedOptions
      v-if="field.type === 'select'"
      :id="fieldKey"
      :label="label"
      :options="field.options as (string | number)[]"
      :options-view="
        (field.optionsView as (string | number)[]) || (field.options as (string | number)[])
      "
      :options-is-number="field.optionsIsNumber"
      :type="field.type"
      :error="getNested(errors, fieldKey)"
      :required="field.required"
      :disabled="field.disabled"
      :model-value="getValue()"
      :with-create="field.withCreate"
      :demo="demo ?? false"
      :tooltip="field.tooltip"
      :tooltip-position="field.tooltipPosition"
      :tooltip-icon="field.tooltipIcon"
      @update:modelValue="(val: any) => $emit('update:model-value', val, fieldKey)"
      @create:Options="
        (k: string, o: string | number, v: string) => $emit('create:Options', k, o, v)
      "
      :lang="lang"
    />

    <ObjectInput
      v-if="field.type === 'object'"
      :id="fieldKey"
      :label="label"
      :schema="field.schema"
      :form-data="getNested(formData, fieldKey) ?? {}"
      :errors="(getNested(errors, fieldKey) as Errors) ?? {}"
      :disabled="field.disabled"
      :is-update="props.isUpdate"
      :lang="lang"
      :tooltip="field.tooltip"
      :tooltip-position="field.tooltipPosition"
      :tooltip-icon="field.tooltipIcon"
      @update:model-value="(val: any, key: string) => $emit('update:model-value', val, key)"
      @remove:errors="(key: string) => handlers.removeError(key)"
      @push:errors="(msg: string | string[], key: string) => handlers.pushError(msg, key)"
      @multi-selected-change="(val, key) => $emit('multi-selected-change', val, key)"
      @selected-option-change="(val, key) => $emit('selected-option-change', val, key)"
    />

    <ArrayObjectInput
      v-if="field.type === 'arrayObject'"
      :id="fieldKey"
      :label="label"
      :model-value="getValue() ?? []"
      :schema="field.schema"
      :disabled="field.disabled"
      :error="getNested(errors, fieldKey)"
      :lang="lang"
      :tooltip="field.tooltip"
      :tooltip-position="field.tooltipPosition"
      :tooltip-icon="field.tooltipIcon"
      @create:Options="
        (k: string, o: string | number, v: string) => $emit('create:Options', k, o, v)
      "
      @update:model-value="(items: any) => $emit('update:model-value', items, fieldKey)"
    />

    <DateInput
      v-if="field.type === 'date'"
      :id="fieldKey"
      :label="label"
      :model-value="getValue()"
      :error="getNested(errors, fieldKey)"
      :disabled="field.disabled"
      :placeholder="field.placeholder"
      :validate="field.validate"
      :lang="lang"
      :tooltip="field.tooltip"
      :tooltip-position="field.tooltipPosition"
      :tooltip-icon="field.tooltipIcon"
      @update:model-value="(val: any) => $emit('update:model-value', val, fieldKey)"
      @remove:error="handlers.removeError"
      @push:error="handlers.pushError"
    />

    <TimeInput
      v-if="field.type === 'time'"
      :id="fieldKey"
      :label="label"
      :model-value="getValue()"
      :error="getNested(errors, fieldKey)"
      :disabled="field.disabled"
      :placeholder="field.placeholder"
      :validate="field.validate"
      :lang="lang"
      :tooltip="field.tooltip"
      :tooltip-position="field.tooltipPosition"
      :tooltip-icon="field.tooltipIcon"
      @update:model-value="(val: any) => $emit('update:model-value', val, fieldKey)"
      @remove:error="handlers.removeError"
      @push:error="handlers.pushError"
    />

    <DateTimeInput
      v-if="field.type === 'dateTime'"
      :id="fieldKey"
      :label="label"
      :model-value="getValue()"
      :error="getNested(errors, fieldKey)"
      :disabled="field.disabled"
      :placeholder="field.placeholder"
      :validate="field.validate"
      :output-format="field.outputFormat"
      :lang="lang"
      :tooltip="field.tooltip"
      :tooltip-position="field.tooltipPosition"
      :tooltip-icon="field.tooltipIcon"
      @update:model-value="(val: any) => $emit('update:model-value', val, fieldKey)"
      @remove:error="handlers.removeError"
      @push:error="handlers.pushError"
    />

    <GroupRendererInput
      v-if="field.type === 'optionGroupSchema'"
      :id="fieldKey"
      :label="label"
      :type-design="field.typeDesign"
      :options="field.options"
      :options-labels="field.optionsLabels"
      :required="field.required"
      :disabled="field.disabled"
      :defaultValue="getValue()"
      :form-data="formData"
      :errors="errors"
      :error="getNested(errors, fieldKey)"
      :with-value="field.withValue"
      :is-update="props.isUpdate"
      :lang="lang"
      :tooltip="field.tooltip"
      :tooltip-position="field.tooltipPosition"
      :tooltip-icon="field.tooltipIcon"
      @create:Options="
        (k: string, o: string | number, v: string) => $emit('create:Options', k, o, v)
      "
      @multi-selected-change="(val, key) => $emit('multi-selected-change', val, key)"
      @selected-option-change="(val, key) => $emit('selected-option-change', val, key)"
      @update:model-value="(val: any, key: any) => $emit('update:model-value', val, key)"
      @remove:error="handlers.removeError"
      @push:error="handlers.pushError"
    />

    <MapPicker
      v-if="field.type === 'mapPicker'"
      v-bind="MapProps()"
      :errors="errors"
      :error="getNested(errors, fieldKey)"
      :lang="lang"
      @update:model-value="(val: any) => UpdateMapCoor(val)"
      @remove:error="handlers.removeError"
      @push:error="handlers.pushError"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { getNested } from '../../untils'
import { useFormFieldRenderer } from './composables'
import type {
  Field,
  Errors,
  SupportedLanguage,
  FormData,
  MapPickerProps,
  MapPickerField,
} from '../../configs'
import type { DateTimeString } from '../../configs'
import {
  ArrayObjectInput,
  ColorInput,
  MapPicker,
  SelectedOptions,
  CurrencyInput,
  RateInput,
  DateInput,
  DateTimeInput,
  EmailInput,
  FileArrayInput,
  FileInput,
  GroupRendererInput,
  ImageArrayInput,
  ImageInput,
  NumberInput,
  ObjectInput,
  PasswordInput,
  TagInput,
  TextAreaInput,
  TelInput,
  TextAreaQuillInput,
  TextInput,
  TimeInput,
  ToggleInput,
  UrlInput,
} from '../../components/UI/Inputs'

const props = defineProps<{
  field: Field
  fieldKey: string
  formData: FormData
  errors: Errors
  isUpdate?: boolean
  lang: SupportedLanguage
  demo?: boolean
}>()

type TextValidation = {
  duplicate?: (string | number)[]
  minLength?: number
  maxLength?: number
  pattern?: string
}

type NumberValidation = {
  min?: number
  max?: number
  integer?: boolean
  duplicate?: (string | number)[]
}

type EmailValidation = {
  duplicate?: (string | number)[]
}

const formData = ref({ ...props.formData })
const errors = ref({ ...props.errors })

const emit = defineEmits<{
  (e: 'update:model-value', val: any, key: string): void
  (e: 'push:errors', message: string, key: string): void
  (e: 'remove:errors', key: string): void
  (e: 'selected-option-change', val: string | null, key: string): void
  (e: 'multi-selected-change', val: string[], key: string): void
  (e: 'create:Options', key: string, options: string | number, optionView: string): void
}>()
watch(
  () => props,
  () => {
    formData.value = { ...props.formData }
    errors.value = { ...props.errors }
  },
  { immediate: true, deep: true },
)

const { label, handlers } = useFormFieldRenderer(props, emit)
const defaultValue = ref<any>(props.isUpdate ? undefined : props.field.value)
let firstDefaultValue: boolean = false
function getValue() {
  const value = getNested(formData.value, props.fieldKey)
  if (!value && !firstDefaultValue && typeof value !== 'boolean' && !props.isUpdate) {
    emit('update:model-value', defaultValue.value, props.fieldKey)
    firstDefaultValue = true
    return defaultValue.value
  }
  if (props.field.type === 'dateTime') {
    return value as DateTimeString
  }
  return value
}

function MapProps() {
  const fieldMap = props.field as MapPickerField

  // Ambil nilai modelValue (koordinat saat ini)
  let modelValue: any = null
  if (fieldMap.withFieldKey) {
    modelValue = getNested(formData.value, props.fieldKey)
  } else {
    const latVal = getNested(formData.value, `${props.fieldKey}.${fieldMap.key.lat}`)
    const lngVal = getNested(formData.value, `${props.fieldKey}.${fieldMap.key.lng}`)
    if (latVal && lngVal) {
      modelValue = { [fieldMap.key.lat]: latVal, [fieldMap.key.lng]: lngVal }
    } else {
      const latVal = getNested(formData.value, fieldMap.key.lat)
      const lngVal = getNested(formData.value, fieldMap.key.lng)
      if (latVal && lngVal) {
        modelValue = { [fieldMap.key.lat]: latVal, [fieldMap.key.lng]: lngVal }
      }
    }
  }

  return {
    id: props.fieldKey,
    label: label.value,
    lang: props.lang,
    required: fieldMap.required,
    disabled: fieldMap.disabled,
    // TETAPKAN initialLat ke nilai asli dari schema, JANGAN diubah-ubah
    initialLat: fieldMap.initialLat,
    initialLng: fieldMap.initialLng,

    // Berikan modelValue agar peta tahu posisi pin saat ini
    modelValue: modelValue,

    searchCity: fieldMap.searchCity,
    searchCountry: fieldMap.searchCountry,
    latKey: fieldMap.key.lat,
    lngKey: fieldMap.key.lng,
    geocodeApi: fieldMap.geocodeApi,
    validate: fieldMap.validate,
    tooltip: fieldMap.tooltip,
    tooltipPosition: fieldMap.tooltipPosition,
    tooltipIcon: fieldMap.tooltipIcon,
  }
}

function UpdateMapCoor(val: any) {
  const fieldMap = props.field as MapPickerField
  // Format koordinat ke String 6 desimal sebelum dikirim
  const formattedPos = {
    [fieldMap.key.lat]:
      typeof val.lat === 'number' ? val[fieldMap.key.lat].toFixed(6) : val[fieldMap.key.lat],
    [fieldMap.key.lng]:
      typeof val.lng === 'number' ? val[fieldMap.key.lng].toFixed(6) : val[fieldMap.key.lng],
  }

  if (fieldMap.withFieldKey) {
    // Jika disimpan dalam satu object key
    emit('update:model-value', formattedPos, props.fieldKey)
  } else {
    // Jika disimpan terpisah (lat sendiri, lng sendiri)
    emit('update:model-value', formattedPos[fieldMap.key.lat], fieldMap.key.lat)
    emit('update:model-value', formattedPos[fieldMap.key.lng], fieldMap.key.lng)
  }
}
</script>
