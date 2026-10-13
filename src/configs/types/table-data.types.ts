// types/table-data.types.ts
import type { ZodType } from 'zod'
import type {
  DataView,
  Schema,
  FormDesign,
  SubmitAuthOptionMap,
  SupportedLanguage,
  XOR,
  SeoFieldMapping,
} from '../../index'

export interface BaseConfig<Item> {
  source: XOR<
    {
      DB_NAME: string
      connect?: Array<{
        key: string
        DB_NAME: string
        connectKey: string
      }>
    },
    {
      fetchApi: {
        get: string
        getAll: string
        autoRefresh?: {
          time: number
        }
        connect?: Array<{
          key: string // parent field untuk join
          url: string
          connectKey: string // child field untuk join
          valueKey?: string // optional: nama field hasil di parent (default = DB_NAME)
        }>
      }
    }
  >
  data?: Item[]
  dataTabelDisplay?: DataView
  dataTabelCustomDisplay?: Item[]
  headersTabelDisplay?: string[]
  justTabel?: boolean
  lang?: SupportedLanguage
  schema: FormSchema
  seoDisplay?: string
}

export interface FormSchema {
  SeoDisplay?: SeoFieldMapping
  global?: Schema
  display?: Schema
  create?: Schema
  update?: Schema
}

export interface TabelTextLabels {
  btn: {
    add?: string
    display?: string
    delete?: string
    deleteMany?: string
    next?: string
    prev?: string
    create?: string
    update?: string
  }
  action?: string
  message?: {
    notFound?: string
  }
  warning?: {
    delete?: string
    deleteMany?: string
  }
}

export interface DataKeyConfig {
  idKey?: string
  idsKey?: string
  nameKey?: string
}

export interface TabelFeatureToggles {
  btnInfoActive?: boolean
  searchQueryActive?: boolean
  sortable?: boolean
  createActive?: boolean
  updateActive?: boolean
  deleteActive?: boolean
  deleteManyActive?: boolean
  displayActive?: boolean
  JustTabel?: boolean
}

export interface TabelManualControl {
  create?: boolean
  update?: boolean
  delete?: boolean
  deleteMany?: boolean
  display?: boolean
}

export interface TabelPagination {
  itemsPerPage?: number
  maxVisiblePages?: number
  maxDataTabelRowDisplay?: number
  indicator?: {
    displayingText?: string
    dataText?: string
  }
}

export interface TabelValidationSchema<
  T = any,
  TCreate = Partial<T>,
  TUpdate = Partial<T>,
  TDelete = { id: string | number } | string | number | Record<string, any>,
  TDeleteMany = { ids: (string | number)[] } | (string | number)[] | Record<string, any>,
> {
  create?: ZodType<TCreate>
  update?: ZodType<TUpdate>
  delete?: ZodType<TDelete>
  deleteMany?: ZodType<TDeleteMany>
}

export interface TabelEndpoints {
  create?: string
  update?: string
  delete?: string
  deleteMany?: string
}

export interface CustomAction {
  key: string
  label: string
  icon?: string
  class?: string
}

export interface TabelSharedConfig<Item = any> {
  keys?: DataKeyConfig
  formDesign?: FormDesign
  submitOption?: SubmitAuthOptionMap<Item>
  customActions?: CustomAction[]
  feature?: TabelFeatureToggles
  pagination?: TabelPagination
  validation?: TabelValidationSchema<Item>
  manual?: TabelManualControl
  endPoints?: TabelEndpoints
  demo?: boolean
}

export interface TabelDataProperty<Item = any> extends TabelSharedConfig<Item> {
  base: Omit<BaseConfig<Item>, 'data'>
}

export interface TabelDataConfig<Item = any> extends TabelSharedConfig<Item> {
  base: BaseConfig<Item>
  data?: any
}
