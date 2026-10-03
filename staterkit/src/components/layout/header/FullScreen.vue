<template>
  <SvgIcon icon="full-screen" @click.prevent="toggleFullscreen" />
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { defineAsyncComponent } from 'vue'
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
const fullScreen = ref<boolean>(false)

function toggleFullscreen() {
  if (fullScreen.value) {
    fullScreen.value = false
    document.exitFullscreen()
  } else {
    document.documentElement.requestFullscreen()
    fullScreen.value = true
  }
}
</script>
