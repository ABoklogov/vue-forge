<template>
  <button class="vf-button" :type="type">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineOptions({ name: 'VfButton' })
withDefaults(defineProps<{ type?: 'button' | 'submit' | 'reset' }>(), {
  type: 'button',
})
</script>

<style scoped>
.vf-button {
  
}
</style>