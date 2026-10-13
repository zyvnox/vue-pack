import { inputMessages, type SupportedLanguage } from '..'

export function getMessage(
  key: keyof typeof inputMessages,
  vars?: Record<string, string | number>,
  lang?: SupportedLanguage,
) {
  let msg = inputMessages[key][lang ?? 'en'] || inputMessages[key].en
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      msg = msg.replace(`{${k}}`, String(v))
    }
  }
  return msg
}
