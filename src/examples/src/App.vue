<script setup lang="ts">
import { ref } from 'vue'

// Импорт компонентов напрямую (для точечного тестирования)
// import { Button, Input } from '@lib/index'

const count = ref(0)

function increment() {
  count.value++
}
</script>

<template>
  <div class="playground">
    <header>
      <h1>🧪 My Vue Lib — Playground</h1>
      <p>Здесь тестируются компоненты библиотеки в реальном времени.</p>
    </header>

    <main>
      <section class="demo-block">
        <h2>Счётчик (пример реактивности)</h2>
        <button @click="increment">Кликов: {{ count }}</button>
      </section>

      <!--
        Добавляйте сюда блоки для каждого компонента библиотеки:

        <section class="demo-block">
          <h2>Button</h2>
          <Button type="primary">Primary</Button>
          <Button type="secondary">Secondary</Button>
        </section>

        <section class="demo-block">
          <h2>Input</h2>
          <Input v-model="text" placeholder="Введите текст" />
        </section>
      -->
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

header h1 {
  margin-bottom: 0.5rem;
}

header p {
  color: #666;
  margin-bottom: 2rem;
}

.demo-block {
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #fafafa;
}

.demo-block h2 {
  margin-top: 0;
  font-size: 1rem;
  color: #444;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
</style>