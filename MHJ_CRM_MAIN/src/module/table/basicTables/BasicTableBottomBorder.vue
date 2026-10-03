<template>
  <Card
    :headerTitle="'Basic Table with Border Bottom Color'"
    :border="true"
    :padding="false"
    :cardBodyClass="'p-0'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>table</code> class to any table, and <code>border-bottom-* </code>class for Border
        bottom color.
      </p>
    </template>
    <div class="table-responsive custom-scrollbar">
      <table class="table border-bottom-table">
        <thead>
          <tr class="border-bottom-primary">
            <template v-for="column in tableConfig.columns" :key="column.fieldValue">
              <th scope="col">{{ column.title }}</th>
            </template>
          </tr>
        </thead>
        <tbody>
          <tr
            :class="`border-bottom-${isBorder(details)}`"
            v-for="(details, index) in tableConfig.data"
            :key="index"
          >
            <template v-for="column in tableConfig.columns" :key="column.fieldValue">
              <template v-if="column.fieldValue === 'id'">
                <th>{{ columnValue(details, column.fieldValue) }}</th>
              </template>
              <template v-else-if="column.fieldValue === 'firstName'">
                <td>
                  <img
                    class="img-30 me-2"
                    :src="getImages((details as BasicTable).imageUrl)"
                    alt="profile"
                  />{{ (details as BasicTable).firstName }}
                </td>
              </template>
              <template v-else-if="column.fieldValue === 'language'">
                <td>
                  <span :class="`badge badge-light-${(details as BasicTable).class}`">{{
                    (details as BasicTable).language
                  }}</span>
                </td>
              </template>
              <td v-else>{{ columnValue(details, column.fieldValue) }}</td>
            </template>
          </tr>
        </tbody>
      </table>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue'

import { basicTable } from '@/core/data/tables/basicTable'
import type { TableConfigs, TableData } from '@/types/common'
import type { BasicTable } from '@/types/tables/basicTable'
import { columnValue, getImages } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const tableConfig = ref<TableConfigs>({
  columns: [
    { title: 'Id', fieldValue: 'id' },
    { title: 'First Name', fieldValue: 'firstName' },
    { title: 'Last Name', fieldValue: 'lastName' },
    { title: 'Username', fieldValue: 'userName' },
    { title: 'Designation', fieldValue: 'designation' },
    { title: 'Company', fieldValue: 'company' },
    { title: 'Language', fieldValue: 'language' },
    { title: 'Country', fieldValue: 'country' },
  ],
  data: [] as BasicTable[],
})

onMounted(() => {
  tableConfig.value.data = basicTable
})

function isBorder(details: TableData) {
  if ('borderClass' in details) {
    return details.borderClass
  }
}
</script>
