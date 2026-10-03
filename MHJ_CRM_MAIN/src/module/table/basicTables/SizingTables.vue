<template>
  <Card :headerTitle="'Sizing Tables'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Example of extra large table, Add<code> table-xl</code> class to the<code> table</code> ,
        Large table Add <code> table-lg</code> , Default table Add <code>table-de</code> , Small
        table Add <code>table-sm </code>, Extra Small table Add <code>table-xs </code>to create a
        table.
      </p>
    </template>
    <div class="card-block row">
      <div class="col-sm-12 col-lg-12 col-xl-12">
        <div class="table-responsive custom-scrollbar">
          <table class="table table-lg">
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
                  <template v-else-if="column.fieldValue === 'status'">
                    <td :class="`font-${getCellData(details).class}`">
                      {{ columnValue(details, column.fieldValue) }}
                    </td>
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
import { sizingTable } from '@/core/data/tables/basicTable'
import type { TableConfigs, TableData } from '@/types/common'
import type { SizingTable } from '@/types/tables/basicTable'
import { columnValue } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const tableConfig = ref<TableConfigs>({
  columns: [
    { title: 'Id', fieldValue: 'id' },
    { title: 'Employee Name', fieldValue: 'employeeName' },
    { title: 'Date', fieldValue: 'date' },
    { title: 'Status', fieldValue: 'status' },
    { title: 'Hours', fieldValue: 'hours' },
    { title: 'Performance', fieldValue: 'performance' },
  ],
  data: sizingTable as SizingTable[],
})

function getCellData(details: TableData) {
  return {
    class: 'class' in details ? details.class : '',
  }
}
</script>
