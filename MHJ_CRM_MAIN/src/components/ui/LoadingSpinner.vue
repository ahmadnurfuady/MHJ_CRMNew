<template>
  <div class="loader-box" :class="wrapperClass">
    <div class="loader4" :style="customStyle"></div>
    <div v-if="text" class="mt-3 f-m-light text-muted">{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  text?: string
  size?: number | string
  wrapperClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  text: '',
  size: 36,
  wrapperClass: '',
})

const customStyle = computed(() => {
  const s = typeof props.size === 'number' ? `${props.size}px` : props.size
  return {
    fontSize: s,
  }
})
</script>
