<template>
  <Card
    :cardClass="'heading-space seller-order-table'"
    :cardType="'dataTable'"
    :headerTitle="'Recent Orders'"
    :padding="false"
    :cardBodyClass="'px-0 pt-0'"
  >
    <div class="list-product">
      <div class="recent-table table-responsive custom-scrollbar">
        <Table
          :tableConfig="tableConfig"
          :hasCheckbox="true"
          :pageSize="6"
          :paginateDetails="true"
          :showPaginate="true"
          :selectedRows="true"
          @action="handleAction($event)"
        >
          <template #orderNumber="{ row }">
            <a>{{ row.orderNumber }}</a>
          </template>
          <template #date="{ row }">
            <p class="c-o-light">{{ row.date }}</p>
          </template>
          <template #customerName="{ row }">
            <div class="common-flex align-items-center">
              <img
                class="img-fluid rounded-circle"
                :src="getImages(row.customerProfile)"
                alt="user"
              />
              <a href="#" @click.prevent="navigate()">{{ row.customerName }}</a>
            </div>
          </template>
          <template #amount="{ row }">
            <p class="c-o-light">${{ row.amount }}</p>
          </template>
          <template #payment="{ row }">
            <span
              :class="`badge badge-light-${
                row.payment == 'Completed'
                  ? 'success'
                  : row.payment == 'Shipped'
                    ? 'secondary'
                    : row.payment == 'Pending'
                      ? 'warning'
                      : ''
              }`"
            >
              {{ row.payment }}
            </span>
          </template>
        </Table>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue'

import { recentOrders } from '@/core/data/seller'
import type { TableClickedAction, TableConfigs } from '@/types/common'
import type { RecentOrdersItem } from '@/types/seller'
import { getImages } from '@/utils/index'
import { useRouter } from 'vue-router'
import { useProductDetailsNavigation } from '@/composables/useProductNavigation'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'))

const router = useRouter()
const { navigateToProduct } = useProductDetailsNavigation()

const tableConfig = ref<TableConfigs<RecentOrdersItem>>({
  columns: [
    { title: 'Order Number', fieldValue: 'orderNumber', sort: true },
    { title: 'Date', fieldValue: 'date', sort: true },
    { title: 'Customers', fieldValue: 'customerName', sort: true },
    { title: 'Amount', fieldValue: 'amount', sort: true },
    { title: 'Payment', fieldValue: 'payment', sort: true },
  ],
  rowAction: [
    {
      label: 'View',
      actionToPerform: 'view',
      icon: 'eye',
      path: '/order/details/:orderNumber',
    },
  ],
  data: [] as RecentOrdersItem[],
})

onMounted(() => {
  tableConfig.value.data = recentOrders
})

function navigate() {
  navigateToProduct('1')
}

function handleAction(value: TableClickedAction) {
  if (value.actionToPerform === 'view' && value.data) {
    const orderData = value.data as RecentOrdersItem
    const order = recentOrders.find((o) => o.id === orderData.id)
    if (order) {
      router.push(`/order/details/${order.orderNumber}`)
    }
  }
}
</script>
