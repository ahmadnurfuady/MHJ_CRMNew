<template>
  <Card :headerTitle="'Extreme responsive configuration'" :border="true" :padding="false">
    <chartist
      class="ct-12 flot-chart-container"
      ratio="1"
      type="Bar"
      :data="chart9.data"
      :options="chart9.options"
      :responsiveOptions="chart9.responsiveOptions"
    ></chartist>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { chart9 } from '@/core/data/charts/chartistChart'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
