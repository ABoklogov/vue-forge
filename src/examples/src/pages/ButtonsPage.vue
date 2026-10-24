<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@lib/index'

defineOptions({ name: 'ButtonsPage' })

const loading = ref(false)
function simulateLoading() {
  loading.value = true
  setTimeout(() => (loading.value = false), 1500)
}
</script>

<template>
  <section class="demo-block">
    <h2>Basic</h2>
    <div class="row">
      <Button>Default</Button>
      <Button type="submit">Submit</Button>
    </div>
  </section>

  <section class="demo-block">
    <h2>Loading (controlled)</h2>
    <div class="row">
      <Button @click="simulateLoading">
        {{ loading ? 'Loading…' : 'Click me' }}
      </Button>
    </div>
  </section>

  <section class="demo-block">
    <h2>Global registration (via app.use)</h2>
    <div class="row">
      <VfButton>Global Button</VfButton>
    </div>
    <p class="hint">Если рендерится — плагин работает.</p>
  </section>
</template>