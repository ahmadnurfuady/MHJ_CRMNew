<template>
  <div class="container-fluid role-permission-wrapper">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header card-no-border text-end">
            <div class="card-header-right-icon">
              <a
                class="btn btn-primary f-w-500"
                href="#"
                @click.prevent="openPermissionModal()"
              >
                <i class="fa-solid fa-plus pe-2"></i>Add Permission
              </a>
            </div>
          </div>
          <div class="card-body pt-0 px-0">
            <div class="list-product permission-table">
              <div class="table-responsive custom-scrollbar">
                <Table
                  :hasCheckbox="true"
                  :tableConfig="tableConfig"
                  :searchPlaceholder="'Search here... '"
                  :pageSize="10"
                  :paginateDetails="true"
                  :showPaginate="true"
                  :selectedRows="true"
                  @action="handleAction($event)"
                ></Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <RolesPermissionModal :modalOpen="isModalOpen" @closeModal="isModalOpen = false" />
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue'

import { roles } from '@/core/data/user'
import type { TableClickedAction, TableConfigs } from '@/types/common'
import type { Role } from '@/types/user'
import { titleCase } from '@/utils/index'

const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'))
const RolesPermissionModal = defineAsyncComponent(
  () => import('@/module/user/RolesPermissionModal.vue')
)

const isModalOpen = ref<boolean>(false)

const roleList = ref<Role[]>([])
const tableConfig = ref<TableConfigs>({
  columns: [
    { title: 'Role Name', fieldValue: 'role', sort: true },
    { title: 'Creation Date', fieldValue: 'creationDate', sort: true },
    { title: 'Last Updated Date', fieldValue: 'lastUpdateDate', sort: true },
    { title: 'Status', fieldValue: 'status', sort: true },
  ],
  rowAction: [
    { label: 'Edit', actionToPerform: 'edit', icon: 'edit-content' },
    {
      label: 'Delete',
      actionToPerform: 'delete',
      icon: 'trash1',
      modal: true,
      modelText: 'Do you really want to delete the role?',
    },
  ],
  data: [] as Role[],
})

onMounted(() => {
  roleList.value = roles
  tableConfig.value.data = formatRoleDetails(roles)
})

function handleAction(value: TableClickedAction) {
  if (value.actionToPerform === 'delete' && value.data) {
    roleList.value = roleList.value.filter((role: Role) => role.id !== value.data.id)
    tableConfig.value = { ...tableConfig.value, data: formatRoleDetails(roleList.value) }
  }
}

function formatRoleDetails(roles: Role[]): Role[] {
  return roles.map((role: Role) => {
    const formattedRole = { ...role }
    formattedRole.role = `<p">${role.role}</p>`

    formattedRole.creationDate = `<p>${role.creationDate}</p>`
    formattedRole.lastUpdateDate = `<p>${role.lastUpdateDate}</p>`
    formattedRole.status = `<span class="badge badge-light-${
      role.status == 'active' ? 'success' : role.status == 'pending' ? 'warning' : ''
    }">${titleCase(role.status)}</span>`
    return formattedRole
  })
}

function openPermissionModal() {
  isModalOpen.value = true
}
</script>
