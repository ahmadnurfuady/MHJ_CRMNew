<template>
  <Card :headerTitle="'Skill Status'">
    <div class="chart-container skill-chart">
      <div id="circle-chart">
        <apexchart
          type="radialBar"
          :height="395"
          :options="widgetsChart5"
          :series="widgetsChartSeries5"
        ></apexchart>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { widgetsChartSeries5, widgetsChart5 } from '@/core/data/widgets/chart'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
