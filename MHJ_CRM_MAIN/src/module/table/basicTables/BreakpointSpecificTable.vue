<template>
  <Card :headerTitle="'Breakpoint Specific'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>table-responsive"❴-sm|-md|-lg|-xl|-xxl❵"</code> functions like a heading for a
        table. It helps users with screen readers to find a table and understand what it’s about and
        decide if they want to read it.
      </p>
    </template>
    <div class="card-block row">
      <div class="col-sm-12 col-lg-12 col-xl-12">
        <div class="table-responsive custom-scrollbar">
          <table class="table table-responsive-sm">
            <thead>
              <tr>
                <template v-for="column in tableConfig.columns" :key="column.fieldValue">
                  <th scope="col">{{ column.title }}</th>
                </template>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(details, index) in tableConfig.data" :key="index">
                <template v-for="column in tableConfig.columns" :key="column.fieldValue">
                  <template v-if="column.fieldValue === 'id'">
                    <th>{{ columnValue(details, column.fieldValue) }}</th>
                  </template>
                  <td v-html="columnValue(details, column.fieldValue)" v-else></td>
                </template>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { breakpointTable } from '@/core/data/tables/basicTable'
import type { TableConfigs } from '@/types/common'
import type { BreakpointTable } from '@/types/tables/basicTable'
import { columnValue } from '@/utils/index'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const tableConfig = ref<TableConfigs>({
  columns: [
    { title: 'Id', fieldValue: 'id' },
    { title: 'Name', fieldValue: 'name' },
    { title: 'Order Id', fieldValue: 'orderId' },
    { title: 'Price', fieldValue: 'price' },
    { title: 'Quantity', fieldValue: 'quantity' },
    { title: 'Total', fieldValue: 'total' },
  ],
  data: breakpointTable as BreakpointTable[],
})
</script>
