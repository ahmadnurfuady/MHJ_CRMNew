<template>
  <Loader v-if="!loaderHide" />
  <RouterView />
</template>
<script setup lang="ts">
import { defineAsyncComponent, onMounted, onBeforeUnmount, ref } from 'vue'
import { RouterView } from 'vue-router'

const Loader = defineAsyncComponent(() => import('@/components/layout/loader/Loader.vue'))

const loaderHide = ref(false)
let loaderTimer: number | null = null

onMounted(() => {
  loaderTimer = window.setTimeout(() => {
    loaderHide.value = true
    loaderTimer = null
  }, 2500)
})

onBeforeUnmount(() => {
  if (loaderTimer) {
    clearTimeout(loaderTimer)
  }
})
</script>
