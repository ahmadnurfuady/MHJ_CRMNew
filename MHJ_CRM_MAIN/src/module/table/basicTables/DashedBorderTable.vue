<template>
  <Card :headerTitle="'Dashed Border '" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>table-dashed</code> class for dash border for dotted border use class<code>
          table-dotted</code
        >
        for double border use class<code> table-double</code>.
      </p>
    </template>
    <div class="card-block row">
      <div class="col-sm-12 col-lg-12 col-xl-12">
        <div class="table-responsive custom-scrollbar">
          <table class="table table-dashed">
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
import { dashedBorderTable } from '@/core/data/tables/basicTable'

import type { TableConfigs } from '@/types/common'
import type { DashedBorderTable } from '@/types/tables/basicTable'

import { columnValue } from '@/utils/index'
import { defineAsyncComponent, ref } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const tableConfig = ref<TableConfigs>({
  columns: [
    { title: 'Id', fieldValue: 'id' },
    { title: 'Classname', fieldValue: 'className' },
    { title: 'Type', fieldValue: 'type' },
    { title: 'Hours', fieldValue: 'hours' },
    { title: 'Trainer', fieldValue: 'trainer' },
    { title: 'Spots', fieldValue: 'spots' },
  ],
  data: dashedBorderTable as DashedBorderTable[],
})
</script>
