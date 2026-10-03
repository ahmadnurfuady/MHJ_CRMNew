<template>
  <div class="container-fluid datatable-init default-datatable">
    <div class="col-sm-12">
      <Card>
        <div class="recent-table table-responsive custom-scroll">
          <Table
            :tableConfig="tableConfig"
            :pageSize="10"
            :paginateDetails="true"
            :showPaginate="true"
            :tableClass="'display table-striped border'"
            @action="handleAction($event)"
          ></Table>
        </div>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue'

import { employees } from '@/core/data/tables/dataTable'
import type { TableClickedAction, TableConfigs } from '@/types/common'
import type { Employee } from '@/types/tables/dataTable'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'))

const employeeList = ref(employees)

const tableConfig = ref<TableConfigs>({
  columns: [
    { title: 'Name', fieldValue: 'name', sort: true },
    { title: 'Position', fieldValue: 'position', sort: true },
    { title: 'Office', fieldValue: 'office', sort: true },
    { title: 'Age', fieldValue: 'age', sort: true },
    { title: 'Start date', fieldValue: 'startDate', sort: true },
    { title: 'Salary', fieldValue: 'salary', sort: true },
  ],
  rowAction: [
    {
      label: 'Delete',
      actionToPerform: 'delete',
      icon: 'trash1',
      modal: true,
    },
  ],
  data: [] as Employee[],
})

onMounted(() => {
  tableConfig.value.data = employeeList.value
})

function handleAction(value: TableClickedAction) {
  if (value.actionToPerform === 'delete' && value.data) {
    employeeList.value = employeeList.value.filter(
      (employee: Employee) => employee.id !== value.data.id
    )
    tableConfig.value = {
      ...tableConfig.value,
      data: employeeList.value,
    }
  }
}
</script>
