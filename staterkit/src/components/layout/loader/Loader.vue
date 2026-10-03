<template>
  <div class="loader-wrapper" :class="{ 'd-none': loaderHide }">
    <div class="loader">
      <div class="loader4"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
const loaderHide = ref(false)
let timeoutId: ReturnType<typeof setTimeout> | null = null

onMounted(() => {
  if (timeoutId) clearTimeout(timeoutId)
  timeoutId = setTimeout(() => {
    loaderHide.value = true
    timeoutId = null
  }, 1000)
})

onBeforeUnmount(() => {
  if (timeoutId) {
    clearTimeout(timeoutId)
    timeoutId = null
  }
})
</script>
