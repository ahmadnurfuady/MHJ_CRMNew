<template>
  <Card :headerTitle="'Budget Details'" :cardType="'classic'" :cardBodyClass="'px-0 pt-0'">
    <div class="recent-table table-responsive custom-scrollbar overall-budget">
      <Table :tableConfig="tableConfig" :pageSize="4"></Table>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import { projectDetails } from '@/core/data/project'

import type { TableConfigs } from '@/types/common'

const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'))
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const tableConfig = ref<TableConfigs>({
  columns: [
    { title: 'Type', fieldValue: 'type', sort: true },
    {
      title: 'Total Budget',
      fieldValue: 'totalBudget',
      sort: true,
      type: 'price',
      decimalNumber: true,
    },
    {
      title: 'Expenses (USD)',
      fieldValue: 'expenses',
      sort: true,
      type: 'price',
      decimalNumber: true,
    },
    {
      title: 'Remaining (USD)',
      fieldValue: 'remaining',
      sort: true,
      type: 'price',
      decimalNumber: true,
    },
  ],
  data: projectDetails.finance.budgetDetails,
})
</script>
