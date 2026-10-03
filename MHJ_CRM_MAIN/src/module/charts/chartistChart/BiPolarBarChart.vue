<template>
  <Card :headerTitle="'Bi-polar bar chart'" :border="true" :padding="false">
    <chartist
      class="ct-9 flot-chart-container"
      ratio="1"
      type="Bar"
      :data="chart10.data"
      :options="chart10.options"
    ></chartist>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { chart10 } from '@/core/data/charts/chartistChart'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
