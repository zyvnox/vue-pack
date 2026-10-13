// src/plugin/vue.plugin.ts

import type { App, Plugin, Component } from 'vue'
import * as components from '../components'
import type { ZyvnoxVuePackConfig } from '../configs'
import initialize from '../init'

function toKebab(str: string) {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

const ZyvnoxVuePack: Plugin = {
  install(app: App, options?: ZyvnoxVuePackConfig) {
    for (const key in components) {
      if (/^[A-Z]/.test(key)) {
        const component = (components as Record<string, Component>)[key]
        if (component && typeof component === 'object') {
          app.component(key, component)
          const kebab = toKebab(key)
          if (kebab !== key) {
            app.component(kebab, component)
          }
        }
      }
    }
    if (options) initialize(options)
  },
}
export const zyvnoxComponents = ZyvnoxVuePack
export const install = ZyvnoxVuePack.install
export default ZyvnoxVuePack
