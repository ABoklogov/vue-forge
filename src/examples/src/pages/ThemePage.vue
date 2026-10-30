<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@lib/index'

defineOptions({ name: 'ThemePage' })

const primary = ref('#2149ff')

function applyPrimary(value: string) {
  document.documentElement.style.setProperty('--vf-color-primary', value)
}
</script>

<template>
  <section class="demo-block">
    <h2>Primary color</h2>
    <input
      type="color"
      :value="primary"
      @input="applyPrimary(($event.target as HTMLInputElement).value)"
    />
    <div class="row">
      <VfButton>Primary</VfButton>
    </div>
  </section>

  <section class="demo-block">
    <h2>Semantic colors</h2>
    <div class="row">
      <Button>Primary</Button>
      <Button style="--vf-color-primary: var(--vf-color-positive)">Positive</Button>
      <Button style="--vf-color-primary: var(--vf-color-negative)">Negative</Button>
      <Button style="--vf-color-primary: var(--vf-color-warning)">Warning</Button>
    </div>
  </section>
</template>