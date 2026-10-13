import type { GlobalDefaultText, SupportedLanguage, CustomLanguagePack } from '../../configs'

// Tipe untuk konfigurasi IndexedDB
export interface ZyvnoxIndexedDBConfig {
  dbName?: string
  dbVersion?: number
  storeSingle?: string[]
  storeArray?: string[]
}
export type JsgIndexedDBConfig = ZyvnoxIndexedDBConfig

// Tipe untuk konfigurasi i18n
export interface ZyvnoxI18nConfig {
  languages?: (
    | {
        lang: SupportedLanguage
        config: GlobalDefaultText
      }
    | CustomLanguagePack
  )[]
  override?: {
    errorRequired?: {
      lang: SupportedLanguage
      template: string
    }[]
    inputMessages?: {
      field: string
      lang: SupportedLanguage
      template: string
    }[]
  }
}
export type JsgI18nConfig = ZyvnoxI18nConfig

// Tipe konfigurasi utama
export interface ZyvnoxVuePackConfig {
  indexedDB?: ZyvnoxIndexedDBConfig
  i18n?: ZyvnoxI18nConfig
}
export type zyvnoxVuePackConfig = ZyvnoxVuePackConfig
