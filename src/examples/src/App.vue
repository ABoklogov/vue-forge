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
header p { color: #666; margin-bottom: 2rem; }
.demo-block {
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #fafafa;
}
.demo-block h2 {
  margin-top: 0;
  font-size: 0.9rem;
  color: #444;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.row {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  align-items: center;
}
.hint {
  margin-top: 0.75rem;
  font-size: 0.875rem;
  color: #6b7280;
}
code {
  background: #eef2ff;
  padding: 0.1rem 0.35rem;
  border-radius: 4px;
}
</style>