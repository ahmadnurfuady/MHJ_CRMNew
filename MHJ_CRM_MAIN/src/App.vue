<template>
  <Loader v-if="!loaderHide" />
  <RouterView />
</template>
<script setup lang="ts">
import { defineAsyncComponent, onMounted, onBeforeUnmount, ref } from 'vue'
import { RouterView } from 'vue-router'
import { useAuthStore } from '@/store/auth'

const Loader = defineAsyncComponent(() => import('@/components/layout/loader/Loader.vue'))

const authStore = useAuthStore()
const loaderHide = ref(false)
let loaderTimer: number | null = null

onMounted(() => {
  authStore.initSession()

  loaderTimer = window.setTimeout(() => {
    loaderHide.value = true
    loaderTimer = null
  }, 300)
})

onBeforeUnmount(() => {
  if (loaderTimer) {
    clearTimeout(loaderTimer)
  }
})
</script>
