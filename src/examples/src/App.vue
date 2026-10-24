<script setup lang="ts">
import { ref } from 'vue'
// Импорт конкретных компонентов — для точечного тестирования
// (глобальная регистрация через app.use тоже работает — см. <VfButton/>)
import { Button, TextInput } from '@lib/index'
import '@lib/styles/index.scss'

const count = ref(0)
const text = ref('')
const loading = ref(false)

function simulateLoading() {
  loading.value = true
  setTimeout(() => (loading.value = false), 1500)
}
</script>

<template>
  <div class="playground">
    <header>
      <h1>🧪 VueForge Playground</h1>
      <p>Здесь тестируются компоненты библиотеки в реальном времени.</p>
    </header>

    <main>
      <!-- 1. Счётчик — проверка реактивности -->
      <section class="demo-block">
        <h2>Счётчик</h2>
        <button @click="count++">Кликов: {{ count }}</button>
      </section>

      <!-- 2. Button — named import -->
      <section class="demo-block">
        <h2>Button (named import)</h2>
        <div class="row">
          <Button>Default</Button>
          <Button type="submit">Submit</Button>
          <Button @click="simulateLoading">
            {{ loading ? 'Loading…' : 'Click me' }}
          </Button>
        </div>
      </section>

      <!-- 3. Button — глобальная регистрация через app.use(VueForge) -->
      <section class="demo-block">
        <h2>Button (global via app.use)</h2>
        <div class="row">
          <VfButton>Global Button</VfButton>
        </div>
        <p class="hint">
          Если этот блок рендерится — плагин регистрирует компоненты корректно.
        </p>
      </section>

      <!-- 4. TextInput с v-model -->
      <section class="demo-block">
        <h2>TextInput (v-model)</h2>
        <TextInput v-model="text" placeholder="Введите текст…" />
        <p class="hint">modelValue: <code>{{ text || '—' }}</code></p>
      </section>
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