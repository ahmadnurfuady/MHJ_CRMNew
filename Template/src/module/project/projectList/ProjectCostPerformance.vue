<template>
  <div class="main-card-box bg-10-primary h-100">
    <div class="p-20 main-cost-performance">
      <h5>{{ performance.title }}</h5>
      <div class="common-space p-t-10">
        <div>
          <div class="cost-performance-wrapper">
            <div id="cost-performance">
              <apexchart
                height="250"
                :series="performance.chartSeries"
                :options="performance.chartOptions"
              >
              </apexchart>
            </div>
          </div>
        </div>
        <div class="cost-right-data">
          <ul>
            <li>
              <h6>${{ performance.totalBudget }}</h6>
              <span>Total Budget</span>
            </li>
            <li>
              <h6>${{ performance.actualCost }}</h6>
              <span>Actual Cost</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { projectCostPerformance } from '@/core/data/project'
import type { ProjectCostPerformance } from '@/types/project'

const performance = ref<ProjectCostPerformance>(projectCostPerformance)
</script>
