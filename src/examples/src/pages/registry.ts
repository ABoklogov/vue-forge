import type { Component } from 'vue'
import ButtonsPage from './ButtonsPage.vue'
import InputsPage from './InputsPage.vue'
import ColorsPage from './ColorsPage.vue'

export interface PageDef {
  label: string
  component: Component
}

export const pages: Record<string, PageDef> = {
  buttons: { label: 'Button', component: ButtonsPage },
  inputs: { label: 'Inputs', component: InputsPage },
  colors: { label: 'Colors', component: ColorsPage },
}

export type PageKey = keyof typeof pages