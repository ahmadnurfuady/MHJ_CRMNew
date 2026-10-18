<template>
  <SolarIcon :name="icon" :class="[svgClass, svgInnerClass]" />
</template>

<script setup lang="ts">
import SolarIcon from '@/components/shared/SolarIcon.vue'

const props = defineProps<{
  icon?: string
  svgClass?: string
  svgInnerClass?: string
  type?: 'default' | 'fill' | 'stroke'
}>()

</script>
