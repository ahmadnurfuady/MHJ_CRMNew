<template>
  <div class="container-fluid sale-return-wrapper">
    <div class="row">
      <div class="col-12">
        <Card :cardBodyClass="'px-0 pt-0'">
          <div class="sale-return-report table-responsive custom-scrollbar">
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

import { salesReturnReport } from '@/core/data/reports'
import type { TableConfigs } from '@/types/common'
import { SalesReturnReport } from '@/types/reports'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'))

const tableConfig = ref<TableConfigs>({
  columns: [
    { title: 'Month', fieldValue: 'month', sort: true },
    { title: 'Total Items', fieldValue: 'totalItem', sort: true },
    { title: 'Ordered', fieldValue: 'order', sort: true },
    { title: 'Returned', fieldValue: 'return', sort: true },
    { title: 'Reason of Return', fieldValue: 'reason', sort: true },
    { title: 'Total Replace', fieldValue: 'totalReplace', sort: true },
    { title: 'Total Return', fieldValue: 'totalReturn', sort: true, type: 'price' },
  ],
  data: salesReturnReport as SalesReturnReport[],
})
</script>
