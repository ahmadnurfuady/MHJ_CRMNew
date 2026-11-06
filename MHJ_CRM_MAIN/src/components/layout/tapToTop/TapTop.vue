<template>
  <button
    class="tap-top"
    type="button"
    :style="{ display: show ? 'flex' : 'none' }"
    aria-label="Kembali ke atas"
    title="Kembali ke atas"
    @click="scrollToTop"
  >
    <SolarIcon name="arrow-up" :size="20" color="currentColor" aria-hidden="true" />
  </button>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps<{
  targetId?: string
}>()

const show = ref(false)
let scrollTarget: HTMLElement | Window = window

function getScrollTop(): number {
  return scrollTarget instanceof Window ? window.scrollY : scrollTarget.scrollTop
}

function updateVisibility() {
  show.value = getScrollTop() > 300
}

function scrollToTop() {
  scrollTarget.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  scrollTarget = (props.targetId && document.getElementById(props.targetId)) || window
  scrollTarget.addEventListener('scroll', updateVisibility, { passive: true })
  updateVisibility()
})

onBeforeUnmount(() => {
  scrollTarget.removeEventListener('scroll', updateVisibility)
})
</script>

<style scoped>
.tap-top {
  align-items: center;
  justify-content: center;
  padding: 0;
  line-height: 1;
}
</style>
