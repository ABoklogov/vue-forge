import { createApp } from 'vue'
import App from './App.vue'

// Подключаем нашу библиотеку локально (через alias @lib)
import VueForge from '@lib/index'

// Если у библиотеки есть стили — импортируем их
// import '@lib/styles/index.scss'

const app = createApp(App)

// Регистрируем все компоненты библиотеки глобально
app.use(VueForge)

app.mount('#app')