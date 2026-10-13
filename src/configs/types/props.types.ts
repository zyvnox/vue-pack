import type {
  SupportedLanguage,
  Errors,
  Schema,
  SubmitAuthOptionMap,
  Item,
  DataKeyConfig,
  DateOnly,
  DateTimeString,
  TimeOnly,
  ImageType,
  XOR,
  SeoFieldMapping,
  XORMany,
} from '../../index'
import type { SecureFetchOptions } from '../../lib/secureFetch'

export interface TooltipProps {
  /**
   * Custom tooltip text yang muncul saat user hover icon "?" di samping label.
   * Jika tidak diisi, tooltip TIDAK muncul (bukan auto-generate dari validasi).
   *
   * @example
   * tooltip: 'Masukkan nama lengkap sesuai KTP (tanpa gelar)'
   */
  tooltip?: string
  /**
   * Posisi tooltip relatif ke icon.
   * @default 'top'
   */
  tooltipPosition?: 'top' | 'bottom' | 'left' | 'right'
  /**
   * Icon yang ditampilkan di samping label.
   * @default '❓'
   */
  tooltipIcon?: string
}

export interface SchemaGroupRendererProps extends TooltipProps {
  id: string
  label?: string
  typeDesign: 'cekbox' | 'dropdown' | 'select'
  options: Record<string, Schema>
  optionsLabels?: Record<string, string>
  withValue?: boolean
  formData: Record<string, any>
  defaultValue?: string | [string, string]
  isUpdate?: boolean
  required?: boolean
  disabled?: boolean
  errors: Errors
  error?: string
  lang?: SupportedLanguage
}

export interface ArrayObjectProps extends TooltipProps {
  id?: string
  label?: string
  modelValue?: any[]
  isUpdate?: boolean
  disabled?: boolean
  schema: Schema
  error?: string
  lang?: SupportedLanguage
}

export interface SingleObjectProps extends TooltipProps {
  id?: string
  label?: string
  disabled?: boolean
  schema: Schema
  formData: Record<string, any>
  isUpdate?: boolean
  required?: boolean
  errors: Errors
  lang?: SupportedLanguage
}

export interface SelectDropdownProps extends TooltipProps {
  id?: string
  label: string
  optionsIsNumber?: boolean
  placeholder?: string
  options: (string | number)[]
  optionsView: (string | number)[]
  required?: boolean
  disabled?: boolean
  modelValue?: string | number | null
  error?: string
  withCreate?: {
    DB_NAME?: string
    schema: Schema
    endPoint: string
    validation?: Record<string, any>
    submitOption?: SubmitAuthOptionMap<Item>
    keys?: {
      optionsKey: string
      optionsViewKey: string
    }
  }
  demo?: boolean
  lang?: SupportedLanguage
}

export interface TextInputProps extends TooltipProps {
  id?: string
  label: string
  placeholder?: string
  modelValue?: string | number
  error?: string | string[]
  disabled?: boolean
  validate?: {
    duplicate?: (string | number)[]
    minLength?: number
    maxLength?: number
    pattern?: string
  }
  lang?: SupportedLanguage
}

export interface RateInputProps extends TooltipProps {
  id?: string
  label: string
  modelValue?: number
  error?: string | string[]
  disabled?: boolean
  validate?: {
    min?: number
    max?: number
  }
  lang?: SupportedLanguage
}

export interface TelInputProps extends TooltipProps {
  id?: string
  label: string
  placeholder?: string
  modelValue?: string
  error?: string | string[]
  disabled?: boolean
  validate?: Record<string, any>
  lang?: SupportedLanguage
}

export interface DateInputProps extends TooltipProps {
  id?: string
  label: string
  placeholder?: string
  modelValue?: DateOnly
  error?: string | string[]
  disabled?: boolean
  validate?: {
    minDate?: DateOnly
    maxDate?: DateOnly
  }
  lang?: SupportedLanguage
}

export interface TimeInputProps extends TooltipProps {
  id?: string
  label: string
  placeholder?: string
  modelValue?: TimeOnly
  error?: string | string[]
  disabled?: boolean
  validate?: {
    minTime?: TimeOnly
    maxTime?: TimeOnly
  }
  lang?: SupportedLanguage
}

export interface DateTimeInputProps extends TooltipProps {
  id?: string
  label: string
  placeholder?: string
  modelValue?: DateTimeString | string
  error?: string | string[]
  disabled?: boolean
  validate?: {
    minDateTime?: DateTimeString
    maxDateTime?: DateTimeString
  }
  lang?: SupportedLanguage
  outputFormat?: 'local-offset' | 'utc'
}

export interface CurrencyInputProps extends TooltipProps {
  id?: string
  label: string
  placeholder?: string
  modelValue?: number
  error?: string | string[]
  disabled?: boolean
  validate?: {
    min?: number
    max?: number
  }
  lang?: SupportedLanguage
}
export interface NumberInputProps extends TooltipProps {
  id?: string
  label: string
  placeholder?: string
  modelValue?: string | number
  error?: string | string[]
  disabled?: boolean
  validate?: {
    min?: number
    max?: number
    integer?: boolean
    duplicate?: (string | number)[]
  }
  lang?: SupportedLanguage
}

export interface EmailInputProps extends TooltipProps {
  id?: string
  label: string
  placeholder?: string
  modelValue?: string | number
  error?: string | string[]
  disabled?: boolean
  validate?: {
    duplicate?: (string | number)[]
  }
  lang?: SupportedLanguage
}

export interface PasswordInputProps extends TooltipProps {
  id?: string
  label: string
  placeholder?: string
  modelValue?: string | number
  error?: string | string[]
  disabled?: boolean
  validate?: {
    minLength?: number
    maxLength?: number
    requireUppercase?: boolean
    requireLowercase?: boolean
    requireNumber?: boolean
    requireSpecialChar?: boolean
  }
  lang?: SupportedLanguage
}

export interface BaseInputProps extends TooltipProps {
  id?: string
  label: string
  type: string
  placeholder?: string
  modelValue?: string | number
  error?: string | string[]
  disabled?: boolean
  validate?: {
    text?: {
      duplicate: (string | number)[]
      minLength?: number
      maxLength?: number
      pattern?: string
    }
    number?: {
      min?: number
      max?: number
      integer?: boolean
      duplicate: (string | number)[]
    }
    email?: {
      duplicate?: (string | number)[]
    }
    password?: {
      minLength?: number
      maxLength?: number
      requireUppercase?: boolean
      requireLowercase?: boolean
      requireNumber?: boolean
      requireSpecialChar?: boolean
    }
  }
  lang?: SupportedLanguage
}

export interface QuillEditorProps extends TooltipProps {
  id?: string
  label?: string
  placeholder?: string
  modelValue?: string
  error?: string | string[]
  disabled?: boolean
  lang?: SupportedLanguage
  validate?: {
    minLength?: number
    maxLength?: number
  }
}

export interface TextEdiorQuillProps extends TooltipProps {
  id?: string
  label?: string
  placeholder?: string
  modelValue?: string
  error?: string | string[]
  disabled?: boolean
  lang?: SupportedLanguage
  validate?: {
    minLength?: number
    maxLength?: number
  }
  api?: {
    aiContentGeneration?: {
      api: string
      config: SecureFetchOptions
    }
    listImages?: {
      api: string
      config: SecureFetchOptions
    }
    uploadImage?: {
      api: string
      config: SecureFetchOptions
    }
    deleteImage?: {
      api: string
      config: SecureFetchOptions
    }
    uploadVideo?: {
      api: string
      config: SecureFetchOptions
    }
    listVideos?: {
      api: string
      config: SecureFetchOptions
    }
    deleteVideo?: {
      api: string
      config: SecureFetchOptions
    }
  }
}

export interface TextAreaProps extends TooltipProps {
  id?: string
  label?: string
  placeholder?: string
  modelValue?: string
  error?: string | string[]
  disabled?: boolean
  lang?: SupportedLanguage
  validate?: {
    minLength?: number
    maxLength?: number
  }
}

export interface MapPickerProps extends TooltipProps {
  id?: string
  label?: string
  modelValue?: Record<string, string>
  latKey?: string
  lngKey?: string
  initialLat?: string | number
  initialLng?: string | number
  error?: string | string[]
  disabled?: boolean
  viewOnly?: boolean
  required?: boolean
  validate?: XOR<
    {
      maxLat: number
      minLat: number
      maxLng: number
      minLng: number
    },
    {
      geoJson: string | Record<string, any> | JSON
    }
  >
  geocodeApi?: XORMany<
    [
      { geoapify: string },
      { google: string },
      { mapbox: string },
      { geocode: string },
      {
        custom: {
          handler: (query: string) => Promise<{ lat: number; lng: number } | null>
        }
      },
    ]
  >
  height?: string
  searchCity?: string // Default tetap Surabaya agar bisnis kamu aman
  searchCountry?: string
  geoJson?: JSON
  lang?: SupportedLanguage
}

export interface FileInputProps extends TooltipProps {
  id?: string
  label?: string
  modelValue?: File | null | string
  disabled?: boolean
  validate?: {
    maxSize?: number
    allowedTypes?: string[]
  }
  lang?: string
  error?: string | string[]
}

export interface FileArrayInputProps extends TooltipProps {
  id?: string
  label?: string
  modelValue?: (File | string)[]
  disabled?: boolean
  validate?: {
    maxFiles?: number
    maxSize?: number
    allowedTypes?: string[]
  }
  lang?: string
  error?: string | string[]
}

export interface watermarkSize {
  width: number
  height: number
}

export interface watermarkMargin {
  top?: number
  bottom?: number
  left?: number
  right?: number
}

export interface watermarkPosition {
  x: number
  y: number
}

export interface ImageInputProps extends TooltipProps {
  id?: string
  label?: string
  modelValue?: File | null | string
  previewAlt?: string
  disabled?: boolean
  error?: string | string[]
  previewImage?: string
  validate?: {
    maxSize?: number
    ratio?: { Width: number; Height: number }
    pixel?: XOR<
      {
        maxWidth?: number
        maxHeight?: number
        minWidth?: number
        minHeight?: number
      },
      {
        width?: number
        height?: number
      }
    >
    allowedTypes?: ImageType[]
  }
  watermark?: {
    url: string | 'upload'
    position?: XOR<
      'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'full',
      watermarkPosition
    >
    transparant?: number
    size?: XOR<number, watermarkSize>
    margin?: XOR<watermarkMargin, number>
    rotate?: number
    opacity?: number
  }
  lang?: SupportedLanguage
}

export interface ImageArrayInputProps extends TooltipProps {
  id?: string
  label?: string
  modelValue?: (File | string)[]
  previewAlt?: string
  disabled?: boolean
  error?: string | string[]
  previewImages?: string[]
  validate?: {
    maxFiles?: number
    maxSize?: number
    ratio?: { Width: number; Height: number }
    pixel?: XOR<
      {
        maxWidth?: number
        maxHeight?: number
        minWidth?: number
        minHeight?: number
      },
      {
        width?: number
        height?: number
      }
    >
    allowedTypes?: ImageType[]
  }
  watermark?: {
    url: string | 'upload'
    position?: XOR<
      'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'full',
      watermarkPosition
    >
    transparant?: number
    size?: XOR<number, watermarkSize>
    margin?: XOR<watermarkMargin, number>
    rotate?: number
    opacity?: number
  }
  lang?: SupportedLanguage
}

export interface TagInputProps extends TooltipProps {
  id?: string
  label: string
  placeholder?: string
  modelValue?: string[]
  error?: string | string[]
  disabled?: boolean
  lang?: SupportedLanguage
  validate?: {
    min?: number
    max?: number
  }
}

export interface ToggleInputProps extends TooltipProps {
  id?: string
  label: string
  modelValue?: boolean
  disabled?: boolean
  lang?: SupportedLanguage
}

export interface UrlInputProps extends TooltipProps {
  id?: string
  label: string
  placeholder?: string
  modelValue?: string
  error?: string
  validate?: boolean
  disabled?: boolean
  lang?: SupportedLanguage
}

export interface FormModalProps<T = Record<string, any>> {
  id?: number | string | null
  initialData?: Partial<T>
  schema: Schema
  isUpdate?: boolean
  lang?: SupportedLanguage
  seo?: SeoFieldMapping
  demo?: boolean
}

export type FromModalProps<T = Record<string, any>> = FormModalProps<T>

export interface ColorPickerProps extends TooltipProps {
  id?: string
  selectedColors?: string[]
  modelValue?: string[] | string
  single?: boolean
  error?: string[]
  label?: string
  disabled?: boolean
  validate?: {
    min?: number
    max?: number
  }
  lang?: SupportedLanguage
}
