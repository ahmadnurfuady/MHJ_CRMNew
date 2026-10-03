<template>
  <div class="container-fluid sale-report-wrapper">
    <div class="row">
      <div class="col-12">
        <Card :cardBodyClass="'px-0 pt-0'">
          <div class="sale-report table-responsive custom-scrollbar">
            <div class="recent-table">
              <Table
                :hasCheckbox="true"
                :tableConfig="tableConfig"
                :pageSize="12"
                :paginateDetails="true"
                :selectedRows="true"
                :dateFilter="true"
              ></Table>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { salesReport } from '@/core/data/reports'
import type { TableConfigs } from '@/types/common'
import { SalesReport } from '@/types/reports'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'))

const tableConfig = ref<TableConfigs>({
  columns: [
    { title: 'Order Month', fieldValue: 'orderMonth', sort: true },
    { title: 'Total Sales', fieldValue: 'totalSales', sort: true },
    { title: 'Average Order Value', fieldValue: 'averageOrderValue', sort: true },
    { title: 'Total Orders', fieldValue: 'totalOrders', sort: true },
    { title: 'Growth Percentage', fieldValue: 'growth', sort: true },
  ],
  data: salesReport as SalesReport[],
})
</script>
