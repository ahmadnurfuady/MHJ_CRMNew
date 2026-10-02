<template>
  <Card
    :headerTitle="'Latest Orders  '"
    :padding="false"
    :cardBodyClass="'pt-0'"
    :header="'total-revenue'"
  >
    <template #header5>
      <div class="d-flex align-items-center gap-2">
        <span class="update-data d-none d-md-block f-light">Data updates in every 3 hours</span>
        <div class="sales-chart-dropdown-select">
          <div class="card-header-right-icon">
            <div class="dropdown">
              <button
                class="btn dropdown-toggle"
                id="dropdownMenuButtondownMenu"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Today
              </button>
              <div
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownMenuButtondownMenu"
                role="menu"
              >
                <span class="dropdown-item">Last Month </span
                ><span class="dropdown-item">Last Week </span
                ><span class="dropdown-item">Last Day </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <div class="table-order table-responsive custom-scrollbar custom-latest-table">
      <Table :hasCheckbox="true" :tableConfig="tableConfig" :pageSize="5" :pagination="false">
        <template #productId="{ row }">
          <div class="product-name">
            <img
              class="order-table-images img-fluid"
              :src="getImages(row.productImage)"
              alt="product"
            />
            <div class="product-sub">
              <a class="f-14 f-w-500" href="#" @click.prevent="navigate()">
                {{ row.productName }}</a
              >
              <span class="f-light f-14 f-w-500 d-block">ID : {{ row.productId }}</span>
            </div>
          </div>
        </template>
        <template #customerName="{ row }">
          <div class="product-sub">
            <a class="f-14 f-w-500" href="#" @click.prevent="navigate()">{{ row.customerName }}</a>
            <span class="f-light f-14 f-w-500 d-block">{{ row.customerEmail }}</span>
          </div>
        </template>
        <template #status="{ row }">
          <div :class="`${row.statusClass} product-sub badge rounded-pill text-center` ">
            <span>{{ row.status }}</span>
          </div>
        </template>
        <template #invoiceIcon="{ row }">
          <div class="product-sub">
            <svg class="invoice-icon">
              <use :href="`${baseUrl}svg/icon-sprite.svg#${row.invoiceIcon}`"></use>
            </svg>
          </div>
        </template>
      </Table>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { OrderTableItem } from '@/types/dashboard/ecommerce'
import { orders } from '@/core/data/dashboard/ecommerce'
import { TableConfigs } from '@/types/common'
import { defineAsyncComponent, onMounted, ref } from 'vue'
import { useProductDetailsNavigation } from '@/composables/useProductNavigation'
import { getImages } from '@/utils'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'))

const { navigateToProduct } = useProductDetailsNavigation()
const baseUrl = import.meta.env.BASE_URL

const tableConfig = ref<TableConfigs<OrderTableItem>>({
  columns: [
    { title: 'Order ID', fieldValue: 'productId', sort: false },
    { title: 'Billing Name', fieldValue: 'customerName', sort: false },
    { title: 'Amount', fieldValue: 'amount', sort: false, type: 'price' },
    { title: 'Status', fieldValue: 'status', sort: false },
    { title: 'Invoice', fieldValue: 'invoiceIcon', sort: false },
  ],
  data: [] as OrderTableItem[],
})

onMounted(() => {
  tableConfig.value.data = orders
})

function navigate() {
  navigateToProduct('1')
}
</script>
