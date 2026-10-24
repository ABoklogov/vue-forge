<template>
  <input
    class="vf-text-input"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<script setup lang="ts">
defineOptions({ name: 'VfTextInput' })
defineProps<{ modelValue?: string }>()
defineEmits<{ (e: 'update:modelValue', value: string): void }>()
</script>