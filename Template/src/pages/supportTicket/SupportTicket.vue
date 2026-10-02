<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <h5>Support Ticket List</h5>
            <p class="f-m-light mt-1">List of ticket open by customers</p>
          </div>
          <div class="card-body">
            <div class="gx-3">
              <TicketList />
            </div>
            <div class="table-responsive support-ticket-table custom-scrollbar">
              <Table
                :tableConfig="tableConfig"
                :pageSize="10"
                :showPaginate="true"
                :paginateDetails="true"
              >
                <template #name="{ row }">
                  <div class="d-flex">
                    <img
                      class="rounded-circle img-30 me-3"
                      :src="getImages((row as SupportDB).image)"
                      alt="Generic placeholder image"
                    />
                    <div class="flex-grow-1 align-self-center">
                      <div>{{ (row as SupportDB).name }}</div>
                    </div>
                  </div>
                </template>
                <template #progress="{ row }">
                  <div class="progress-showcase">
                    <div class="progress sm-progress-bar">
                      <div
                        class="progress-bar"
                        :class="`bg-${(row as SupportDB).skill}`"
                        role="progressbar"
                        :style="{ width: (row as SupportDB).progress }"
                      ></div>
                    </div>
                  </div>
                </template>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue'

import { supportDataTable } from '@/core/data/supportTicket'
import type { TableConfigs } from '@/types/common'
import type { SupportDB } from '@/types/supportTicket'
import { getImages } from '@/utils/index'

const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'))
const TicketList = defineAsyncComponent(() => import('@/module/supportTicket/TicketList.vue'))

const tableConfig = ref<TableConfigs>({
  columns: [
    { title: 'Name', fieldValue: 'name', sort: true },
    { title: 'Position', fieldValue: 'position', sort: true },
    { title: 'Salary', fieldValue: 'salary', sort: true, type: 'price' },
    { title: 'Office', fieldValue: 'office', sort: true },
    { title: 'Skill', fieldValue: 'progress', sort: true },
    { title: 'Extn', fieldValue: 'extNumber', sort: true },
    { title: 'E-mail', fieldValue: 'email', sort: true },
  ],
  data: [] as SupportDB[],
})

onMounted(() => {
  tableConfig.value.data = supportDataTable
})
</script>
