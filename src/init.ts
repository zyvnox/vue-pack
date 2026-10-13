import { configureIndexedDB } from './lib/indexedDB'
import {
  registerLanguage,
  registerErrorMessageRequired,
  registerInputMessages,
} from './configs/i18n/register'
import type { GlobalDefaultText, ZyvnoxVuePackConfig, SupportedLanguage } from './configs'

export default function initialize(configs?: ZyvnoxVuePackConfig) {
  if (configs?.indexedDB) {
    configureIndexedDB({
      dbName: configs.indexedDB.dbName,
      dbVersion: configs.indexedDB.dbVersion,
      storeSingle: configs.indexedDB.storeSingle,
      storeArray: configs.indexedDB.storeArray,
    })
  }

  // Setup i18n
  if (configs?.i18n) {
    configs.i18n.languages?.forEach((item: any) => {
      if ('config' in item && item.config) {
        registerLanguage(item.lang, item.config)
      } else {
        registerLanguage(item)
      }
    })

    configs.i18n.override?.errorRequired?.forEach(
      ({ lang, template }: { lang: SupportedLanguage; template: string }) => {
        registerErrorMessageRequired(lang, template)
      },
    )

    configs.i18n.override?.inputMessages?.forEach(
      ({ field, lang, template }: { field: string; lang: SupportedLanguage; template: string }) => {
        registerInputMessages(field, lang, template)
      },
    )
  }
}
