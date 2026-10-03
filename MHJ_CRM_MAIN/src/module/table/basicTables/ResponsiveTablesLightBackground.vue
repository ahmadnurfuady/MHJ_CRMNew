<template>
  <Card :headerTitle="'Responsive Tables with Light Background'">
    <template #header5>
      <p class="f-m-light mt-1">
        A <code>table-responsive , light-card</code> inside table element.
      </p>
    </template>
    <div class="card-block row">
      <div class="col-sm-12 col-lg-12 col-xl-12">
        <div class="table-responsive custom-scrollbar">
          <table class="table light-card">
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
import { responsiveTable } from '@/core/data/tables/basicTable'
import type { TableConfigs, TableData } from '@/types/common'
import type { ResponsiveTable } from '@/types/tables/basicTable'
import { columnValue } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const tableConfig = ref<TableConfigs>({
  columns: [
    { title: 'Id', fieldValue: 'id' },
    { title: 'Task', fieldValue: 'task' },
    { title: 'Email', fieldValue: 'email' },
    { title: 'Phone', fieldValue: 'phone' },
    { title: 'Assign', fieldValue: 'assign' },
    { title: 'Date', fieldValue: 'date' },
    { title: 'Price', fieldValue: 'price' },
    { title: 'Status', fieldValue: 'status' },
    { title: 'Progress', fieldValue: 'progress' },
  ],
  data: responsiveTable as ResponsiveTable[],
})

function getCellData(details: TableData) {
  return {
    class: 'class' in details ? details.class : '',
  }
}
</script>
