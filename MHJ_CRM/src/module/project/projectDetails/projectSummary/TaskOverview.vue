<template>
  <Card
    :cardType="'classic'"
    :headerTitle="taskOverviewChart.title"
    :sortDescription="taskOverviewChart.sortDescription"
    :cardBodyClass="'pt-0'"
    :buttonText="'View All'"
    :path="routes.App.Task"
  >
    <div class="task-overview">
      <apexchart
        height="363"
        :series="taskOverviewChart.series"
        :options="taskOverviewChart.chartOptions"
      >
      </apexchart>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import { projectDetails } from '@/core/data/project'
import { routes } from '@/router/routes'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const taskOverviewChart = ref(projectDetails.projectSummary.taskOverviewChart)
</script>
