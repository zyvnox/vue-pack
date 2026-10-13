import type {
  DataKeyConfig,
  Item,
  SubmitAuthOptionMap,
  Schema,
  XORMany,
  XOR,
  DateOnly,
  TimeOnly,
  DateTimeString,
  watermarkMargin,
  watermarkPosition,
  watermarkSize,
} from '../..'
export const ImageTypes = [
  'png',
  'jpg',
  'jpeg',
  'gif',
  'bmp',
  'webp',
  'heif',
  'heic',
  'tiff',
  'tif',
  'svg',
  'avif',
  'ico',
  'jfif',
] as const

export type ImageType = (typeof ImageTypes)[number]
import type { SecureFetchOptions } from '../../lib/secureFetch'
export const fieldTypes = [
  'text',
  'email',
  'password',
  'number',
  'image',
  'color',
  'select',
  'arrayObject',
  'quillEditor',
  'optionGroupSchema',
  'tag',
  'object',
  'url',
  'toggle',
  'date',
  'time',
  'dateTime',
  'imageArray', // 🔹 baru
  'file',
  'fileArray', // 🔹 baru
  'textArea',
  'currency',
  'rate',
  'tel',
  'mapPicker',
] as const

export const formDesign = ['form', 'news'] as const

export type FieldType = (typeof fieldTypes)[number]
export type FormDesign = (typeof formDesign)[number]

export interface BaseField {
  type: FieldType
  label?: string
  baseKey?: BaseKey
  value?: any
  required?: boolean
  disabled?: boolean
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
export interface BaseKey {
  base?: string | number
  name?: any
}

export interface ObjectField extends BaseField {
  type: 'object'
  schema: Schema
}

export interface UrlField extends BaseField {
  type: 'url'
  placeholder?: string
  validate?: boolean
}

export interface FileField extends BaseField {
  type: 'file'
  validate?: {
    maxSize?: number
    allowedTypes?: string[]
  }
}

export interface ToggleField extends BaseField {
  type: 'toggle'
}

export interface TextField extends BaseField {
  type: 'text'
  placeholder?: string
  validate?: {
    duplicate?: (string | number)[] | boolean
    minLength?: number
    maxLength?: number
    pattern?: string
  }
}

export interface EmailField extends BaseField {
  type: 'email'
  placeholder?: string
  validate?: {
    duplicate?: (string | number)[] | boolean
  }
}

export interface PasswordField extends BaseField {
  type: 'password'
  placeholder?: string
  validate?: {
    minLength?: number
    maxLength?: number
    requireUppercase?: boolean
    requireLowercase?: boolean
    requireNumber?: boolean
    requireSpecialChar?: boolean
  }
}

export interface CurrencyField extends BaseField {
  type: 'currency'
  placeholder?: string
  validate?: {
    min?: number
    max?: number
  }
}

export interface RateField extends BaseField {
  type: 'rate'
  validate?: {
    min?: number
    max?: number
  }
}

export interface TelField extends BaseField {
  type: 'tel'
  placeholder?: string
  validate?: {
    min?: number
    max?: number
  }
}

export interface NumberField extends BaseField {
  type: 'number'
  placeholder?: string
  validate?: {
    min?: number
    max?: number
    integer?: boolean
    duplicate?: (string | number)[] | boolean
  }
}

// 2. Interface untuk SCHEMA EDITOR
export interface QuillEditorField extends BaseField {
  type: 'quillEditor'
  placeholder?: string
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

export interface DateField extends BaseField {
  type: 'date'
  placeholder?: string
  validate?: {
    minDate?: DateOnly
    maxDate?: DateOnly
  }
}

export interface TimeField extends BaseField {
  type: 'time'
  placeholder?: string
  validate?: {
    minTime?: TimeOnly // format "HH:mm"
    maxTime?: TimeOnly
  }
}

export interface DateTimeField extends BaseField {
  type: 'dateTime'
  placeholder?: string
  validate?: {
    minDateTime?: DateTimeString
    maxDateTime?: DateTimeString
  }
  outputFormat?: 'local-offset' | 'utc'
}

export interface TextAreaField extends BaseField {
  type: 'textArea'
  placeholder?: string
  validate?: {
    minLength?: number
    maxLength?: number
  }
}

export interface ImageField extends BaseField {
  type: 'image'
  validate?: {
    maxSize?: number
    ratio?: {
      Width: number
      Height: number
    }
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
}

// 🔹 untuk multiple image
export interface ImageArrayField extends BaseField {
  type: 'imageArray'
  validate?: {
    maxFiles?: number
    maxSize?: number
    ratio?: {
      Width: number
      Height: number
    }
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
}

// 🔹 untuk multiple file
export interface FileArrayField extends BaseField {
  type: 'fileArray'
  validate?: {
    maxFiles?: number
    maxSize?: number // per file
    allowedTypes?: string[]
  }
}

export interface ColorField extends BaseField {
  type: 'color'
  single?: boolean
  validate?: {
    min?: number
    max?: number
  }
}

export interface MapPickerField extends BaseField {
  type: 'mapPicker'
  initialLat?: string | number
  initialLng?: string | number
  withFieldKey?: boolean
  key: {
    lat: string
    lng: string
  }
  view?: {
    geoJsonKey: string
  }
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
  searchCity?: string
  searchCountry?: string
}

export type OptionsSource =
  | { url: string; valueKey: string; viewKey?: string }
  | { DB_NAME: string; valueKey: string; viewKey?: string }

export interface SelectField extends BaseField {
  type: 'select'
  placeholder?: string
  optionsIsNumber?: boolean
  options: (string | number)[] | OptionsSource
  optionsView?: (string | number)[]
  DB_NAME?: string
  withCreate?: {
    DB_NAME?: string
    schema: Schema
    endPoint: string
    validation?: object
    submitOption?: SubmitAuthOptionMap<Item>
    keys: {
      optionsKey: string
      optionsViewKey: string
    }
  }
}

export interface TagField extends BaseField {
  type: 'tag'
  placeholder?: string
  validate?: {
    min?: number
    max?: number
  }
}

export interface ArrayObjectField extends BaseField {
  type: 'arrayObject'
  initialItem?: Record<string, any>
  DB_NAME?: string
  endPoint?: {
    delete?: string
    deleteMany?: string
    update?: string
    create?: string
  }
  schema: Schema
}

export type connectedMap = {
  valueKey: string
  viewKey?: string
  connect?:
    | {
        withDB?: {
          DB_NAME: string
          valueKey: string
          viewKey?: string
        }
      }
    | {
        withFetch?: {
          url: string
          valueKey: string
          viewKey?: string
        }
      }
  connectKey?: string
}

export interface OptionGroupField extends BaseField {
  type: 'optionGroupSchema'
  typeDesign: 'cekbox' | 'select'
  optionsLabels?: Record<string, string>
  options: Record<string, Schema>
  withValue?: boolean
}
