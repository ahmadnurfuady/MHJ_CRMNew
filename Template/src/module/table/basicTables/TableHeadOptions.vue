<template>
  <Card :headerTitle="'Table Head Options'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Similar to tables , use the modifier classes<code> table-[color]</code> to make
        <code>thead</code> appear in any color.
      </p>
    </template>
    <div class="card-block row">
      <div class="col-sm-12 col-lg-12 col-xl-12">
        <div class="table-responsive custom-scrollbar">
          <table class="table">
            <thead class="table-dark">
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

import { tableHeadOption } from '@/core/data/tables/basicTable'
import type { TableConfigs } from '@/types/common'
import type { TableHeadOption } from '@/types/tables/basicTable'
import { columnValue } from '@/utils/index'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const tableConfig = ref<TableConfigs>({
  columns: [
    { title: 'Id', fieldValue: 'id' },
    { title: 'First Name', fieldValue: 'firstName' },
    { title: 'Last Name', fieldValue: 'lastName' },
    { title: 'Username', fieldValue: 'userName' },
  ],
  data: tableHeadOption as TableHeadOption[],
})
</script>
