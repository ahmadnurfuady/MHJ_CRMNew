<template>
  <Card
    :headerTitle="'Inverse Table Background'"
    :border="true"
    :padding="false"
    :cardClass="'common-striped'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>bg-info, bg-success, bg-warning and bg-danger </code>classes with light text on
        dark backgrounds inside table element.<br />To set the light background color use
        <code>bg-[color] </code> class where <code> [color]</code> is the value of your selected
        color from stack color palette. So for teal color background class will be
        <code> bg-teal</code>.
      </p>
    </template>
    <div class="table-responsive custom-scrollbar">
      <table class="table table-striped bg-primary">
        <thead class="tbl-strip-thad-bdr">
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
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { inverseTableBackground } from '@/core/data/tables/basicTable'
import type { TableConfigs } from '@/types/common'
import type { InverseTableBackground } from '@/types/tables/basicTable'
import { columnValue } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const tableConfig = ref<TableConfigs>({
  columns: [
    { title: 'Id', fieldValue: 'id' },
    { title: 'First Name', fieldValue: 'firstName' },
    { title: 'Last Name', fieldValue: 'lastName' },
    { title: 'Company', fieldValue: 'company' },
    { title: 'Credit Volume', fieldValue: 'creditVolume' },
    { title: 'Username', fieldValue: 'userName' },
    { title: 'Role', fieldValue: 'role' },
    { title: 'Country', fieldValue: 'country' },
  ],
  data: inverseTableBackground as InverseTableBackground[],
})
</script>
