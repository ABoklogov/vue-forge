import type { App, Plugin } from 'vue'
import { Button, TextInput } from './components'
import { DEFAULT_SIZE_FALLBACK, DEFAULT_SIZE_KEY } from './constants'
import { VueForgeOptions } from './types'

import './styles/index.scss'

export { Button, TextInput }
export * from './constants'  
export * from './types'
export * from './composables'
// export * from './utils'

export const version = '0.1.0'

const components = [Button, TextInput]

const VueForge: Plugin = {
  install(app: App, options: VueForgeOptions = {}) {
    app.provide(DEFAULT_SIZE_KEY, options.defaultSize ?? DEFAULT_SIZE_FALLBACK)

    for (const component of components) {
      if (component.name) {
        app.component(component.name, component)
      }
    }
  },
}

export default VueForge