<template>
  <Card :cardClass="'widget-2 budget-card'" :cardBodyClass="'common-space'" v-if="props.chart">
    <div>
      <span class="pb-2 c-o-light">{{ props.chart.title }}</span>
      <h4>${{ props.chart.value }}</h4>
      <span
        :class="`f-14 txt-${props.chart.profitType == 'profit' ? 'success' : 'danger'} f-w-500`"
      >
        <vue-feather
          :type="props.chart.profitType == 'profit' ? 'arrow-up' : 'arrow-down'"
          :class="'me-1'"
        ></vue-feather>
        {{ props.chart.profitType == 'profit' ? '+' : '-' }}{{ props.chart.profit }}%
      </span>
    </div>
    <div class="expense-chart-wrap">
      <div id="expense-chart">
        <apexchart
          v-if="props.chart.chartDetails.chart"
          :height="props.chart.chartDetails.chart.height"
          :series="props.chart.chartSeries"
          :options="props.chart.chartDetails"
        >
        </apexchart>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import type { Expenses } from '@/types/project'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const props = defineProps<{
  chart?: Expenses
}>()
</script>
