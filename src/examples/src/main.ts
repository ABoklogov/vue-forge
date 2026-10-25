import { createApp } from 'vue'
import App from './App.vue'
import VueForge from '@lib/index'
import '@lib/styles/index.scss'

createApp(App).use(VueForge, { defaultSize: 's' }).mount('#app')