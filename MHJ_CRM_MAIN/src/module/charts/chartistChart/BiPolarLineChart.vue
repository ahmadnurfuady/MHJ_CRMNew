<template>
  <Card :headerTitle="'Bi-polar Line chart with area only'" :border="true" :padding="false">
    <chartist
      class="ct-5 flot-chart-container"
      ratio="1"
      type="Line"
      :data="chart3.data"
      :options="chart3.options"
    ></chartist>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { chart3 } from '@/core/data/charts/chartistChart'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
