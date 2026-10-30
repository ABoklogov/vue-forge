import { createApp } from 'vue'
import App from './App.vue'
import VueForge from '@lib/index'

createApp(App).use(VueForge, { defaultSize: 's' }).mount('#app')