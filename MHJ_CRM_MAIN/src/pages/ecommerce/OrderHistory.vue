<template>
  <div class="container-fluid common-order-history">
    <div class="row">
      <div class="col-12">
        <OrderFilter />
      </div>
      <div class="col-12">
        <Card
          :cardClass="'heading-space'"
          :cardType="'dataTable'"
          :headerTitle="'New Orders'"
          :padding="false"
          :cardBodyClass="'pt-0 px-0'"
        >
          <div class="row">
            <div class="col-12">
              <div class="order-history-wrapper">
                <div class="recent-table table-responsive custom-scrollbar">
                  <Table
                    :tableConfig="tableConfig"
                    :hasCheckbox="true"
                    :pageSize="10"
                    :paginateDetails="true"
                    :showPaginate="true"
                    @action="handleAction($event)"
                  >
                    <template #orderNumber="{ row }">
                      <a href="#" @click.prevent="openOrderDetails(row.orderNumber)">
                        #{{ row.orderNumber }}
                      </a>
                    </template>
                    <template #orderDate="{ row }">
                      <p class="c-o-light">{{ row.orderDate }}</p>
                    </template>
                    <template #customerName="{ row }">
                      <p class="c-o-light">{{ row.customerName }}</p>
                    </template>
                    <template #totalAmount="{ row }">
                      <p class="c-o-light">${{ row.totalAmount }}</p>
                    </template>
                    <template #paymentStatus="{ row }">
                      <span
                        :class="`badge badge-light-${
                          row.paymentStatus == 'Pending'
                            ? 'warning'
                            : row.paymentStatus == 'Failed'
                              ? 'danger'
                              : row.paymentStatus == 'Completed'
                                ? 'success'
                                : ''
                        }`"
                      >
                        {{ row.paymentStatus }}
                      </span>
                    </template>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue'

import { useRouter } from 'vue-router'
import { orders } from '@/core/data/order'
import type { TableClickedAction, TableConfigs } from '@/types/common'
import type { Order } from '@/types/order'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'))
const OrderFilter = defineAsyncComponent(() => import('@/module/ecommerce/order/OrderFilter.vue'))

const router = useRouter()

const orderHistory = ref(orders)
const tableConfig = ref<TableConfigs<Order>>({
  columns: [
    { title: 'Order Number', fieldValue: 'orderNumber', sort: true },
    { title: 'Order Date', fieldValue: 'orderDate', sort: true },
    { title: 'Customer Name', fieldValue: 'customerName', sort: true },
    { title: 'Total Amount', fieldValue: 'totalAmount', sort: true },
    { title: 'Payment Status', fieldValue: 'paymentStatus', sort: true },
    { title: 'Payment Method', fieldValue: 'paymentMethod', sort: true },
  ],
  rowAction: [
    { label: 'View', actionToPerform: 'view', icon: 'eye' },
    {
      label: 'Delete',
      actionToPerform: 'delete',
      icon: 'trash1',
      modal: true,
      modelText: 'Do you really want to delete the order History?',
    },
  ],
  data: [] as Order[],
})

onMounted(() => {
  tableConfig.value.data = orderHistory.value
})

function handleAction(value: TableClickedAction) {
  if (value.actionToPerform === 'view' && value.data) {
    const orderData = value.data as Order
    const order = orderHistory.value.find((o) => o.id === orderData.id)
    if (order) {
      router.push(`/order/details/${order.orderNumber}`)
    }
  }

  if (value.actionToPerform === 'delete' && value.data) {
    const orderData = value.data as Order
    orderHistory.value = orderHistory.value.filter((order) => order.id !== orderData.id)
    tableConfig.value = { ...tableConfig.value, data: orderHistory.value }
  }
}

function openOrderDetails(orderNumber: string | number) {
  router.push(`/order/details/${orderNumber}`)
}
</script>
