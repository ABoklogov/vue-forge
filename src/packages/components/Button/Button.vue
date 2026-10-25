<template>
  <button
    class="vf-button"
    :class="sizeClass"
    :style="sizeStyle"
    :type="type"
    :disabled="disabled || loading"
  >
    <span v-if="loading" class="vf-button__spinner" />
    <slot />
  </button>
</template>

<script setup lang="ts">
import { useSize } from '@/composables';
import { VfSize } from '@/constants';

defineOptions({ name: 'VfButton' })


const props = withDefaults(
  defineProps<{
    size?: VfSize
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    loading?: boolean
  }>(),
  {
    type: 'button',
    disabled: false,
    loading: false,
  },
)

const { sizeClass, sizeStyle } = useSize(() => props.size, 'm')
</script>

<style lang="scss">
// ⚠️ НЕ scoped — иначе CSS-переменные не пробросятся через :root
@use '../../styles/vars.scss' as *;
@use '../../styles/index.scss' as *;

.vf-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: 1px solid #d1d5db;
  background: #fff;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.15s, border-color 0.15s;

  &:hover:not(:disabled) { background: #f3f4f6; }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
}

// Генерируем классы для всех «встроенных» размеров
@each $name, $_ in $sizes {
  .vf-size-#{$name} {
    @include vf-size($name);
  }
}
</style>