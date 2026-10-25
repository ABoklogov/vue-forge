<script setup lang="ts">
defineOptions({ name: 'SizesPage' })
import { Button } from '@lib/index'

const sizes = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'] as const
</script>

<template>
  <section class="demo-block">
    <h2>Built-in sizes</h2>
    <div class="row">
      <Button v-for="s in sizes" :key="s" :size="s">{{ s.toUpperCase() }}</Button>
    </div>
  </section>

  <section class="demo-block">
    <h2>Custom size (xl)</h2>
    <p class="hint">
      Объявлен через CSS-переменные ниже. Компонент его не знает — работает через inline-style.
    </p>
    <div class="row">
      <Button size="xl">XL</Button>
      <Button size="xxl">XXL</Button>
      <Button size="xxxl">XXXL</Button>
    </div>
  </section>
</template>

<style>
:root {
  --vf-size-xl-height: 60px;
  --vf-size-xl-font-size: 20px;
  --vf-size-xl-radius: 16px;
  --vf-size-xl-padding-x: 24px;

  --vf-size-xxl-height: 66px;
  --vf-size-xxl-font-size: 22px;
  --vf-size-xxl-radius: 18px;
  --vf-size-xxl-padding-x: 28px;

  --vf-size-xxxl-height: 72px;
  --vf-size-xxxl-font-size: 24px;
  --vf-size-xxxl-radius: 20px;
  --vf-size-xxxl-padding-x: 32px;
}
</style>