import type { App, Plugin } from 'vue'
import { Button, TextInput } from './components'

export { Button, TextInput }
// export * from './types'
// export * from './composables'
// export * from './utils'

export const version = '0.1.0'

const components = [Button, TextInput]

const VueForge: Plugin = {
  install(app: App) {
    components.forEach((component) => {
      if (component.name) {
        app.component(component.name, component)
      }
    })
  },
}

export default VueForge