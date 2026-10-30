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
import { useSize } from '@/composables'
import type { VfSize } from '@/constants'

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
@use '../../styles/vars.scss' as *;
@use '../../styles/mixins.scss' as *;

.vf-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: 1px solid var(--vf-color-primary, #2149ff);
  background: var(--vf-color-primary, #2149ff);
  color: var(--vf-color-primary-text, #fff);
  cursor: pointer;
  font-family: inherit;
  transition: background 0.15s, border-color 0.15s;

  &:hover:not(:disabled) {
    background: var(--vf-color-primary-hover, #193fe9);
    border-color: var(--vf-color-primary-hover, #193fe9);
  }

  &:active:not(:disabled) {
    background: var(--vf-color-primary-pressed, #1739d0);
    border-color: var(--vf-color-primary-pressed, #1739d0);
  }

  &:focus-visible {
    outline: 2px solid var(--vf-color-focus, #6883ff);
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

@each $name, $_ in $sizes {
  .vf-size-#{$name} {
    @include vf-size($name);
  }
}
</style>