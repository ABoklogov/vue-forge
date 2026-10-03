import type { App, Plugin } from 'vue'

// Импорт компонентов (пока заглушки — замените на свои)
// import Button from './components/Button'
// import Input from './components/Input'

// Импорт композаблов
// import { useTheme } from './composables/useTheme'

// Именованный экспорт (для tree-shaking)
// export { Button, Input, useTheme }

// Экспорт типов
// export * from './types'

// Пример-заглушка, чтобы файл был валидным
export const version = '0.1.0'

// Плагин для app.use(MyVueLib)
const components: any[] = [
  // Button,
  // Input,
]

const MyVueLib: Plugin = {
  install(app: App) {
    components.forEach((component) => {
      if (component.name) {
        app.component(component.name, component)
      }
    })
  },
}

export default MyVueLib