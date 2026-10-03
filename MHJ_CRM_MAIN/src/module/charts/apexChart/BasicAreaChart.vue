<template>
  <Card :headerTitle="'Basic Area Chart'" :border="true" :padding="false">
    <div id="basic-apex">
      <apexchart
        :height="350"
        type="area"
        :options="basicAreaChart"
        :series="basicAreaSeries"
      ></apexchart>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { basicAreaChart, basicAreaSeries } from '@/core/data/charts/apexChart'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
