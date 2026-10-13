// src/plugin/vue.plugin.ts

import type { App, Plugin, Component } from 'vue'
import * as components from '../components'
import type { ZyvnoxVuePackConfig } from '../configs'
import initialize from '../init'

const ZyvnoxVuePack: Plugin = {
  install(app: App, options?: ZyvnoxVuePackConfig) {
    for (const key in components) {
      const component = (components as Record<string, Component>)[key]
      if (component && (component.name || (component as any).__name)) {
        app.component(key, component)
      }
    }
    if (options) initialize(options)
  },
}
export const zyvnoxComponents = ZyvnoxVuePack
export default ZyvnoxVuePack
