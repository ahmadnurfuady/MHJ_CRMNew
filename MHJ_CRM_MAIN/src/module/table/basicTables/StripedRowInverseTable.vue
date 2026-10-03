<template>
  <Card :headerTitle="'Striped Row with Inverse Table'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>table-striped</code> to add zebra-striping to any table row within the
        <code></code>. This styling doesn't work in IE8 and below as :nth-child CSS selector isn't
        supported.
      </p>
    </template>
    <div class="card-block row">
      <div class="col-sm-12 col-lg-12 col-xl-12">
        <div class="table-responsive custom-scrollbar">
          <table class="table table-inverse table-striped">
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

import { stripedRow } from '@/core/data/tables/basicTable'
import type { TableConfigs } from '@/types/common'
import type { StripedRow } from '@/types/tables/basicTable'
import { columnValue } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const tableConfig = ref<TableConfigs>({
  columns: [
    { title: 'Id', fieldValue: 'id' },
    { title: 'Dessert', fieldValue: 'dessert' },
    { title: 'Calories', fieldValue: 'calories' },
    { title: 'Fat', fieldValue: 'fat' },
    { title: 'Price', fieldValue: 'price' },
  ],
  data: stripedRow as StripedRow[],
})
</script>
