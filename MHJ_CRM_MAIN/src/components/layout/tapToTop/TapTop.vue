<template>
  <div class="tap-top" :style="{ display: show ? 'block' : 'none' }">
    <vue-feather type="chevrons-up" @click="scrollToTop"></vue-feather>
  </div>
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
