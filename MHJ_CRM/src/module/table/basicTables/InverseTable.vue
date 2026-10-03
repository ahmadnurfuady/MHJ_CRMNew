<template>
  <Card :headerTitle="'Inverse Table'" :border="true" :padding="false" :cardBodyClass="'p-0'">
    <template #header5>
      <p class="f-m-light mt-1">Use <code>table-inverse</code> class inside table element.</p>
    </template>
    <div class="table-responsive custom-scrollbar">
      <table class="table table-inverse">
        <thead>
          <tr class="border-bottom-light">
            <template v-for="column in tableConfig.columns" :key="column.fieldValue">
              <th scope="col">{{ column.title }}</th>
            </template>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(details, index) in tableConfig.data" :key="index">
            <template v-for="column in tableConfig.columns" :key="column.fieldValue">
              <template v-if="column.fieldValue === 'id'">
                <th scope="row">{{ columnValue(details, column.fieldValue) }}</th>
              </template>
              <td v-html="columnValue(details, column.fieldValue)" v-else></td>
            </template>
          </tr>
        </tbody>
      </table>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { inverseTable } from '@/core/data/tables/basicTable'
import type { TableConfigs } from '@/types/common'
import type { InverseTable } from '@/types/tables/basicTable'
import { columnValue } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const tableConfig = ref<TableConfigs>({
  columns: [
    { title: 'Id', fieldValue: 'id' },
    { title: 'First Name', fieldValue: 'firstName' },
    { title: 'Last Name', fieldValue: 'lastName' },
    { title: 'Office', fieldValue: 'office' },
    { title: 'Position', fieldValue: 'position' },
    { title: 'Salary', fieldValue: 'salary' },
    { title: 'Join Date', fieldValue: 'joinDate' },
    { title: 'Age', fieldValue: 'age' },
  ],
  data: inverseTable as InverseTable[],
})
</script>
