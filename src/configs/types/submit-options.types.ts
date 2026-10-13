// types/submit-options.types.ts
import type { ZodType } from 'zod'

export type SubmitMode = 'create' | 'get' | 'update' | 'delete' | 'deleteMany'

export interface errorMessage {
  status: number
  message: string
}

export interface SubmitResponse<T = any> {
  message?: string
  data?: T
  response?: boolean | any
  status?: number
}

export interface SubmitOptions<T = any> {
  data?: T
  oldData?: T
  validation?: ZodType<T>
  endpoint: string
  mode: SubmitMode
  db?: string
  deleteDataDB?: boolean
  demo?: boolean
  authType: 'cookie' | 'bearer' | 'none' | 'custom'
  token?: string
  customHeaders?: Record<string, string>
}

export type SubmitAuthOptions<T> = {
  authType?: 'cookie' | 'bearer' | 'none' | 'custom'
  token?: string
  customHeaders?: Record<string, string>
}

export interface SubmitAuthOptionMap<T = any> {
  global?: SubmitAuthOptions<T>
  get?: SubmitAuthOptions<T>
  create?: SubmitAuthOptions<T>
  update?: SubmitAuthOptions<T>
  delete?: SubmitAuthOptions<T>
  deleteMany?: SubmitAuthOptions<T>
}
