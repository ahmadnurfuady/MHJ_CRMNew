<template>
  <Card
    :cardClass="'get-card'"
    :headerTitle="'Budget Distribution'"
    :padding="false"
    :cardBodyClass="'pt-0'"
  >
    <div class="project-chart-wrap">
      <div id="project-chart">
        <apexchart
          height="260"
          :series="budgetDistributionChart.series"
          :options="budgetDistributionChart.chartOptions"
        >
        </apexchart>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import { projectDetails } from '@/core/data/project'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const budgetDistributionChart = ref(projectDetails.finance.budgetDistribution)
</script>
