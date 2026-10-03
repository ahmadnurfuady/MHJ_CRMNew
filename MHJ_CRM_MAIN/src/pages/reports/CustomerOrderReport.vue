<template>
  <div class="container-fluid customer-order-wrapper">
    <div class="row">
      <div class="col-12">
        <Card :cardBodyClass="'px-0 pt-0'">
          <div class="customer-order-report table-responsive custom-scrollbar">
            <div class="recent-table">
              <Table
                :hasCheckbox="true"
                :tableConfig="tableConfig"
                :pageSize="10"
                :paginateDetails="true"
                :selectedRows="true"
                :dateFilter="true"
              >
                <template #customerName="{ row }">
                  <div class="customer-details">
                    <img
                      class="img-fluid"
                      :src="getImages(row.customerProfile)"
                      :alt="row.customerName"
                    />
                    <div>
                      <a href="#">{{ row.customerName }}</a>
                      <p class="c-o-light">{{ row.customerEmail }}</p>
                    </div>
                  </div>
                </template>
                <template #customerGroup="{ row }">
                  <ul class="common-f-start customer-group">
                    <template v-if="Array.isArray(row.customerGroup)">
                      <li
                        v-for="(groupMember, index) in row.customerGroup"
                        :key="index"
                      >
                        <img
                          v-if="groupMember.profile"
                          class="common-circle"
                          :src="getImages(groupMember.profile)"
                          alt="user"
                        />
                        <div
                          v-else
                          class="common-circle"
                          :class="`bg-lighter-${getTextColor(getUserText(groupMember.name ?? ''))}`"
                        >
                          {{ getUserText(groupMember.name ?? '', 'singleText') }}
                        </div>
                      </li>
                    </template>
                    <li v-else>{{ row.customerGroup }}</li>
                  </ul>
                </template>
              </Table>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue'
import { customerOrderReport } from '@/core/data/reports'
import type { TableConfigs, Profile } from '@/types/common'
import type { CustomerOrderReport } from '@/types/reports'
import { getTextColor, getUserText, getImages } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'))

const tableConfig = ref<TableConfigs<CustomerOrderReport>>({
  columns: [
    { title: 'Customer Name', fieldValue: 'customerName', sort: true },
    { title: 'Customer Group', fieldValue: 'customerGroup', sort: true },
    { title: 'No. Of Orders', fieldValue: 'orders', sort: true },
    { title: 'No. Of Products', fieldValue: 'items', sort: true },
    { title: 'Total', fieldValue: 'total', sort: true, type: 'price' },
  ],
  data: [] as CustomerOrderReport[],
})

onMounted(() => {
  tableConfig.value.data = customerOrderReport
})
</script>
