<template>
  <Card
    :headerTitle="'Custom Table Color with Hover and Stripped'"
    :border="true"
    :padding="false"
    :cardClass="'common-striped'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use class
        <code
          >table-hover, table-striped table-*table-info , table-success , table-success , table-info
          , table-danger , table-primary , table-secondary , table-light , table-active</code
        >
        inside table element.
      </p>
    </template>
    <div class="table-responsive custom-scrollbar">
      <table class="table table-striped bg-primary hover">
        <thead class="tbl-strip-thad-bdr">
          <tr>
            <template v-for="column in tableConfig.columns" :key="column.fieldValue">
              <th scope="col">{{ column.title }}</th>
            </template>
          </tr>
        </thead>
        <tbody>
          <tr
            :class="getCellData(details).class"
            v-for="(details, index) in tableConfig.data"
            :key="index"
          >
            <template v-for="column in tableConfig.columns" :key="column.fieldValue">
              <template
                v-if="['budget', 'domesticGross'].includes(String(column.fieldValue))"
              >
                <td>${{ columnValue(details, column.fieldValue) }}</td>
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
import { ref, defineAsyncComponent, onMounted } from 'vue'

import { customTable } from '@/core/data/tables/basicTable'
import type { TableConfigs, TableData, TableDataKey } from '@/types/common'
import type { CustomTable } from '@/types/tables/basicTable'
import { columnValue } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const tableConfig = ref<TableConfigs>({
  columns: [
    { title: 'Id', fieldValue: 'id' },
    { title: 'Film Title', fieldValue: 'filmTitle' },
    { title: 'Released', fieldValue: 'released' },
    { title: 'Studio', fieldValue: 'studio' },
    { title: 'Budget', fieldValue: 'budget' },
    { title: 'Domestic Gross', fieldValue: 'domesticGross' },
  ],
  data: [] as CustomTable[],
})

onMounted(() => {
  tableConfig.value.data = customTable
})

function getCellData(details: TableData, fieldValue?: TableDataKey) {
  return {
    value:
      fieldValue && fieldValue in details
        ? (() => {
            const values = details[fieldValue as keyof typeof details]
            return values && typeof values === 'object' && 'value' in values
              ? (values as { value?: unknown }).value
              : values
          })()
        : undefined,
    class: 'class' in details ? details.class : '',
  }
}
</script>
