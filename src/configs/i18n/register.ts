import { defaultMessagesErrorRequired } from './errors'
import { defaultTextLabelsMap } from './labels'
import { inputMessages } from './inputs'
import type {
  GlobalDefaultText,
  SupportedLanguage,
  CustomLanguagePack,
  DeepPartial,
} from '../types/globalText.types'

export type { CustomLanguagePack, DeepPartial }

function isObject(item: unknown): item is Record<string, any> {
  return typeof item === 'object' && item !== null && !Array.isArray(item)
}

export function deepMerge<T extends Record<string, any>>(
  target: T,
  source: Record<string, any>,
): T {
  const output: Record<string, any> = { ...target }
  for (const key of Object.keys(source)) {
    const sourceVal = source[key]
    const targetVal = output[key]
    if (isObject(targetVal) && isObject(sourceVal)) {
      output[key] = deepMerge(targetVal, sourceVal)
    } else if (sourceVal !== undefined) {
      output[key] = sourceVal
    }
  }
  return output as T
}

export function registerLanguage(pack: CustomLanguagePack): void
export function registerLanguage(lang: SupportedLanguage, config: GlobalDefaultText): void
export function registerLanguage(
  arg1: CustomLanguagePack | SupportedLanguage,
  arg2?: GlobalDefaultText,
): void {
  if (typeof arg1 === 'string' && arg2) {
    defaultTextLabelsMap[arg1] = arg2
    return
  }

  if (typeof arg1 === 'object' && arg1 !== null) {
    const pack = arg1 as CustomLanguagePack
    const lang = pack.lang

    // 1. Labels with fallback to pack.fallback or 'en'
    const fallbackBase =
      pack.fallback && defaultTextLabelsMap[pack.fallback]
        ? defaultTextLabelsMap[pack.fallback]
        : defaultTextLabelsMap.en

    const mergedLabels = pack.labels
      ? deepMerge(fallbackBase, pack.labels as Record<string, any>)
      : { ...fallbackBase }

    mergedLabels.lang = lang
    defaultTextLabelsMap[lang] = mergedLabels

    // 2. Error Required
    const fallbackErrorLang = pack.fallback ?? 'en'
    if (pack.errors?.required) {
      defaultMessagesErrorRequired[lang] = pack.errors.required
    } else if (!defaultMessagesErrorRequired[lang]) {
      defaultMessagesErrorRequired[lang] =
        defaultMessagesErrorRequired[fallbackErrorLang] ?? defaultMessagesErrorRequired.en
    }

    // 3. Inputs
    if (pack.inputs) {
      for (const [key, msg] of Object.entries(pack.inputs)) {
        if (!inputMessages[key]) {
          inputMessages[key] = {} as any
        }
        if (msg !== undefined) {
          inputMessages[key][lang] = msg
        }
      }
    }
  }
}

export function unregisterLanguage(lang: string): void {
  if (lang === 'en' || lang === 'id') return
  delete defaultTextLabelsMap[lang]
  delete defaultMessagesErrorRequired[lang]
  for (const key of Object.keys(inputMessages)) {
    if (inputMessages[key]) {
      delete inputMessages[key][lang]
    }
  }
}

export function isLanguageRegistered(lang: string): boolean {
  return Boolean(defaultTextLabelsMap[lang])
}

export function getAvailableLanguages(): string[] {
  return Object.keys(defaultTextLabelsMap)
}

export function registerErrorMessageRequired(lang: SupportedLanguage, template: string) {
  defaultMessagesErrorRequired[lang] = template
}

export function registerInputMessages(field: string, lang: SupportedLanguage, template: string) {
  if (!inputMessages[field]) inputMessages[field] = {} as any
  inputMessages[field][lang] = template
}
