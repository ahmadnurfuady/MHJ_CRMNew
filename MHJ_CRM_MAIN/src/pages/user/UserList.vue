<template>
  <div class="container-fluid user-list-wrapper">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header card-no-border text-end">
            <div class="card-header-right-icon">
              <router-link class="btn btn-primary f-w-500" :to="routes.User.AddUser">
                <i class="fa-solid fa-plus pe-2"></i>
                Add User
              </router-link>
            </div>
          </div>
          <div class="card-body pt-0 px-0">
            <div class="list-product user-list-table">
              <div class="table-responsive custom-scrollbar">
                <Table
                  :hasCheckbox="true"
                  :tableConfig="tableConfig"
                  :pageSize="10"
                  :paginateDetails="true"
                  :showPaginate="true"
                  :selectedRows="true"
                  :searchPlaceholder="'Search here... '"
                  @action="handleAction($event)"
                >
                  <template #name="{ row }">
                    <a href="#">{{ (row as Users).name }}</a>
                  </template>
                  <template #email="{ row }">
                    <p>{{ (row as Users).email }}</p>
                  </template>
                  <template #role="{ row }">
                    <p>{{ (row as Users).role }}</p>
                  </template>
                  <template #creationDate="{ row }">
                    <p>{{ (row as Users).creationDate }}</p>
                  </template>
                  <template #status="{ row }">
                    <span
                      class="badge"
                      :class="`badge-light-${STATUS_CLASSES[(row as Users).status as keyof typeof STATUS_CLASSES] || ''}`"
                    >
                      {{ (row as Users).status.charAt(0).toUpperCase() + (row as Users).status.slice(1) }}
                    </span>
                  </template>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue'

import { users } from '@/core/data/user'
import { routes } from '@/router/routes'
import type { TableClickedAction, TableConfigs } from '@/types/common'
import { Users } from '@/types/user'
import { titleCase } from '@/utils/index'

const STATUS_CLASSES = {
  active: 'success',
  pending: 'warning',
} as const

const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'))

const userList = ref<Users[]>([])
const tableConfig = ref<TableConfigs>({
  columns: [
    { title: 'Name', fieldValue: 'name', sort: true },
    { title: 'Email', fieldValue: 'email', sort: true },
    { title: 'Role', fieldValue: 'role', sort: true },
    { title: 'Creation Date', fieldValue: 'creationDate', sort: true },
    { title: 'Status', fieldValue: 'status', sort: true },
  ],
  rowAction: [
    {
      label: 'Edit',
      actionToPerform: 'edit',
      icon: 'edit-content',
      path: routes.User.AddUser,
    },
    {
      label: 'Delete',
      actionToPerform: 'delete',
      icon: 'trash1',
      modal: true,
      modelText: 'Do you really want to delete the user?',
    },
  ],
  data: [] as Users[],
})

onMounted(() => {
  userList.value = users
  tableConfig.value.data = users
})

function handleAction(value: TableClickedAction) {
  if (value.actionToPerform === 'delete' && value.data) {
    userList.value = userList.value.filter((user: Users) => user.id !== value.data.id)
    tableConfig.value = { ...tableConfig.value, data: userList.value }
  }
}
</script>
