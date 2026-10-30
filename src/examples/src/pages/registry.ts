import type { Component } from 'vue'
import ButtonsPage from './ButtonsPage.vue'
import InputsPage from './InputsPage.vue'
import ColorsPage from './ColorsPage.vue'
import SizesPage from './SizesPage.vue'
import ThemePage from './ThemePage.vue'

export interface PageDef {
  label: string
  component: Component
}

export const pages: Record<string, PageDef> = {
  sizes: { label: 'Sizes', component: SizesPage },
  colors: { label: 'Colors', component: ColorsPage },
  buttons: { label: 'Button', component: ButtonsPage },
  inputs: { label: 'Inputs', component: InputsPage },
  temes: { label: 'Temes', component: ThemePage },
}

export type PageKey = keyof typeof pages