// types/schema.types.ts
import type {
  TextField,
  ImageField,
  ColorField,
  EmailField,
  PasswordField,
  NumberField,
  SelectField,
  ArrayObjectField,
  OptionGroupField,
  QuillEditorField,
  TagField,
  UrlField,
  ToggleField,
  ImageArrayField,
  FileArrayField,
  ObjectField,
  TextAreaField,
  DateField,
  TimeField,
  DateTimeField,
  FileField,
  XOR,
  CurrencyField,
  RateField,
  TelField,
  MapPickerField,
} from '../../index'

export type Field =
  | TextField
  | ImageArrayField
  | NumberField
  | FileArrayField
  | ImageField
  | ColorField
  | SelectField
  | EmailField
  | PasswordField
  | ArrayObjectField
  | UrlField
  | ToggleField
  | DateField
  | ObjectField
  | TimeField
  | QuillEditorField
  | DateTimeField
  | TagField
  | FileField
  | TextAreaField
  | OptionGroupField
  | CurrencyField
  | RateField
  | TelField
  | MapPickerField

export type Schema = Record<string, Field>
export type FormData = Record<string, any>
export type Errors = Record<string, any>

export type DataView = Record<string, string | dataProperty>

export interface dataProperty {
  valueKey: string
  tooltip?: string
  tooltipPosition?: 'top' | 'bottom' | 'left' | 'right'
  tooltipIcon?: string
  type:
    | 'image'
    | 'file'
    | 'url'
    | 'rate'
    | 'seo'
    | 'color'
    | 'date'
    | 'time'
    | 'dateTime'
    | 'text'
    | 'number'
    | 'email'
    | 'password'
    | 'currency'
    | 'textarea'
    | 'richtext'
    | 'select'
    | 'multiSelect'
    | 'boolean'
    | 'arrayObject'
    | 'arrayColor'
    | 'arrayImage'
    | 'arrayFile'
    | 'arrayUrl'
    | 'arrayNumber'
    | 'arrayText'
    | 'tag'
    | 'tel'
    | 'rate'
    | 'mapPicker'
  connect?: XOR<
    {
      withDB: {
        DB_NAME: string
        valueKey: string
      }
    },
    {
      withFetch: {
        url: string
        valueKey: string
      }
    }
  >
}
