<template>
  <Card :headerTitle="'Area Spaline Chart'" :border="true" :padding="false">
    <div id="area-spaline">
      <apexchart
        :height="350"
        type="area"
        :options="areaSpalineChartOptions"
        :series="areaSpalinesSeries"
      ></apexchart>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { areaSpalineChartOptions, areaSpalinesSeries } from '@/core/data/charts/apexChart'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
