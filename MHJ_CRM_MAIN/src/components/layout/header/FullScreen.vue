<template>
  <button
    class="header-icon-action"
    type="button"
    :aria-label="isFullscreen ? 'Keluar dari layar penuh' : 'Tampilkan layar penuh'"
    :title="isFullscreen ? 'Keluar dari layar penuh' : 'Layar penuh'"
    @click="toggleFullscreen"
  >
    <SolarIcon
      :name="isFullscreen ? 'minimize' : 'maximize'"
      :size="24"
      color="var(--app-primary-deep, #032A4E)"
      secondary-color="var(--app-primary, #18A6E4)"
      :secondary-opacity="0.7"
      aria-hidden="true"
    />
  </button>
</template>
<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const isFullscreen = ref(false)

function syncFullscreenState() {
  isFullscreen.value = Boolean(document.fullscreenElement)
}

async function toggleFullscreen() {
  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen()
    } else {
      await document.documentElement.requestFullscreen()
    }
  } finally {
    syncFullscreenState()
  }
}

onMounted(() => {
  syncFullscreenState()
  document.addEventListener('fullscreenchange', syncFullscreenState)
})

onBeforeUnmount(() => {
  document.removeEventListener('fullscreenchange', syncFullscreenState)
})
</script>

<style scoped>
.header-icon-action {
  display: inline-grid;
  place-items: center;
  border: 0;
  padding: 0;
  color: inherit;
  background: transparent;
  line-height: 0;
  cursor: pointer;
}
</style>
