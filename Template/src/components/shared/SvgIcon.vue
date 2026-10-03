<template>
  <svg :class="svgClass">
    <use :href="iconPath" :class="svgInnerClass" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  icon?: string
  svgClass?: string
  svgInnerClass?: string
  type?: 'default' | 'fill' | 'stroke'
}>()

const iconPath = computed(() => {
  switch (props.type) {
    case 'fill':
      return `${import.meta.env.BASE_URL}svg/icon-sprite.svg#fill-${props.icon}`
    case 'stroke':
      return `${import.meta.env.BASE_URL}svg/icon-sprite.svg#stroke-${props.icon}`
    default:
      return `${import.meta.env.BASE_URL}svg/icon-sprite.svg#${props.icon}`
  }
})
</script>
