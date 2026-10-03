<template>
  <Card :cardClass="'o-hidden'" :cardBodyClass="'row pb-0 m-0'" v-if="props.chart">
    <div class="col-xl-9 col-lg-8 col-9 p-0">
      <h6 class="mb-2">{{ props.chart.title }}</h6>
      <h4>{{ props.chart.value }}</h4>
      <span>{{ props.chart.description }}</span>
    </div>
    <div class="col-xl-3 col-lg-4 col-3 text-end p-0">
      <h6 class="txt-success">{{ props.chart.increaseValue }}</h6>
    </div>
    <template #details>
      <div>
        <div id="chart-widget1">
          <apexchart
            ref="chart"
            height="200"
            :series="props.chart.chartSeries"
            :options="props.chart.chartDetails"
          >
          </apexchart>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import type { CommonLineCharts } from '@/types/widgets/chart'
import { defineAsyncComponent } from 'vue'

const props = defineProps<{
  chart: CommonLineCharts
}>()

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
