<template>
  <div class="row">
    <template v-for="(chart, index) in expenseCharts" :key="index">
      <div
        :class="
          expenseCharts.length % 2 !== 0 && index === expenseCharts.length - 1
            ? 'col-md-4'
            : 'col-md-4 col-sm-6'
        "
      >
        <ProjectExpenseChart :chart="chart" />
      </div>
    </template>

    <div class="col-xxl-8 col-xl-12 col-lg-8 box-col-12">
      <BudgetDetails />
    </div>
    <div class="col-xxl-4 col-xl-12 col-lg-4 box-col-12">
      <BudgetDistribution />
    </div>
    <div class="col-12">
      <ProjectBudget />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { projectDetails } from '@/core/data/project'

const ProjectExpenseChart = defineAsyncComponent(
  () => import('@/module/project/projectDetails/projectFinance/ProjectExpenseChart.vue')
)
const BudgetDetails = defineAsyncComponent(
  () => import('@/module/project/projectDetails/projectFinance/BudgetDetails.vue')
)
const BudgetDistribution = defineAsyncComponent(
  () => import('@/module/project/projectDetails/projectFinance/BudgetDistribution.vue')
)
const ProjectBudget = defineAsyncComponent(
  () => import('@/module/project/projectDetails/projectFinance/ProjectBudget.vue')
)

const expenseCharts = ref(projectDetails.finance.expenses)
</script>
