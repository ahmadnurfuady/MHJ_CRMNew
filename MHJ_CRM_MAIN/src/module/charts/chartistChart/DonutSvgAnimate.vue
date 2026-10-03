<template>
  <Card :headerTitle="'Animating a Donut with Svg.animate'" :border="true" :padding="false">
    l<chartist
      class="ct-8 flot-chart-container"
      ratio="1"
      type="Pie"
      :data="chart6.data"
      :options="chart6.options"
    >
    </chartist>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { chart6 } from '@/core/data/charts/chartistChart'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
