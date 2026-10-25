<script setup lang="ts">
import { computed, ref } from 'vue'
import { pages, type PageKey } from './pages/registry'
import './pages/_shared.css'

const current = ref<PageKey>('buttons')
const currentComponent = computed(() => pages[current.value].component)
</script>

<template>
  <div class="playground">
    <header>
      <h1>🧪 VueForge Playground</h1>
    </header>

    <nav class="tabs">
      <button
        v-for="(page, key) in pages"
        :key="key"
        :class="{ active: current === key }"
        @click="current = key"
      >
        {{ page.label }}
      </button>
    </nav>

    <main>
      <KeepAlive>
        <component :is="currentComponent" />
      </KeepAlive>
    </main>
  </div>
</template>

<style scoped>
.playground {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem;
  font-family: system-ui, -apple-system, sans-serif;
  color: #213547;
}
header h1 { margin-bottom: 0.5rem; }
</style>