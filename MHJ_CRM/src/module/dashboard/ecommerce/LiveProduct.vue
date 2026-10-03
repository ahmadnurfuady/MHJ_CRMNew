<template>
  <Card
    :headerTitle="'Live Product  '"
    :padding="false"
    :cardBodyClass="'pt-0'"
    :header="'total-revenue'"
  >
    <template #header5>
      <router-link :to="routes.Dashboards.Default"> View All</router-link>
    </template>
    <div class="table-order table-responsive custom-scrollbar custom-latest-table">
      <Table :hasCheckbox="true" :tableConfig="tableConfig" :pageSize="4" :pagination="false">
        <template #name="{ row }">
          <div class="product-name">
            <img class="order-table-images img-fluid" :src="getImages(row.image)" alt="user" />
            <div class="product-sub">
              <a class="f-14 f-w-600" href="#" @click.prevent="navigate()">{{
                row.name
              }}</a>
            </div>
          </div>
        </template>
        <template #gender="{ row }">
          <div class="product-sub">
            <a class="f-14 f-w-500" href="#" @click.prevent="navigate()">{{
              row.gender
            }}</a>
          </div>
        </template>
        <template #stockHtml="{ row }">
          <div class="media">
            <div class="media-body text-end switch-sm">
              <label class="switch">
                <input type="checkbox" :checked="row.stock" />
                <span class="switch-state"></span>
              </label>
            </div>
          </div>
        </template>
        <template #actionIcon="{ row }">
          <div class="dropdown">
            <div
              id="dropdownMenuButtonicon6"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              role="menu"
            >
              <svg class="invoice-icon">
                <use :href="`${baseUrl}svg/icon-sprite.svg#${row.actionIcon}`"></use>
              </svg>
            </div>
            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButtonicon6">
              <span class="dropdown-item">Last Month</span
              ><span class="dropdown-item">Last Week</span
              ><span class="dropdown-item">Last Day </span>
            </div>
          </div>
        </template>
      </Table>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ProductRow } from '@/types/dashboard/ecommerce'
import { productTableData } from '@/core/data/dashboard/ecommerce'
import { TableConfigs } from '@/types/common'
import { defineAsyncComponent, onMounted, ref } from 'vue'
import { useProductDetailsNavigation } from '@/composables/useProductNavigation'
import { routes } from '@/router/routes'
import { getImages } from '@/utils'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'))

const { navigateToProduct } = useProductDetailsNavigation()
const baseUrl = import.meta.env.BASE_URL

const tableConfig = ref<TableConfigs<ProductRow>>({
  columns: [
    { title: 'Product Name', fieldValue: 'name', sort: false },
    { title: 'Gender', fieldValue: 'gender', sort: false },
    { title: 'stock', fieldValue: 'stockHtml', sort: false },
    { title: 'Variants', fieldValue: 'variants', sort: false },
    { title: 'Action', fieldValue: 'actionIcon', sort: false },
  ],
  data: [] as ProductRow[],
})

onMounted(() => {
  tableConfig.value.data = productTableData
})

function navigate() {
  navigateToProduct('1')
}
</script>
