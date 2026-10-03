<template>
  <Table
    :hasCheckbox="true"
    :tableConfig="tableConfig"
    :pageSize="pageSize"
    :paginateDetails="true"
    :showPaginate="true"
    :selectedRows="true"
    @action="handleAction($event)"
  >
    <template #name="{ row }">
      <div class="product-names">
        <div class="light-product-box">
          <img
            class="img-fluid"
            :src="getImages(row.images[0])"
            :alt="row.name"
          />
        </div>
        <span>{{ row.name }}</span>
      </div>
    </template>
    <template #stockStatus="{ row }">
      <span
        class="badge"
        :class="
          row.stockStatus === 'in Stock' ? 'badge-light-primary' : 'badge-light-secondary'
        "
      >
        {{ row.stockStatus }}
      </span>
    </template>
    <template #star="{ row }">
      <RatingStars :rating="row.star" />
    </template>
  </Table>
</template>
<script lang="ts" setup>
import { products } from '@/core/data/product'
import { TableClickedAction, TableConfigs } from '@/types/common'
import { Product } from '@/types/product'
import { defineAsyncComponent, onMounted, ref, watch } from 'vue'
import { getImages } from '@/utils/index'
import { routes } from '@/router/routes'

const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'))
const RatingStars = defineAsyncComponent(() => import('@/components/shared/RatingStars.vue'))
const props = withDefaults(
  defineProps<{
    pageSize?: number
    hideColumns?: string[]
  }>(),
  {
    pageSize: 14,
    hideColumns: () => [],
  }
)

const productList = ref<Product[]>([])
const tableConfig = ref<TableConfigs<Product>>({
  columns: [
    { title: 'Product Name', fieldValue: 'name', sort: true },
    { title: 'SKU', fieldValue: 'id', sort: true },
    { title: 'Category', fieldValue: 'category', sort: true },
    { title: 'Price', fieldValue: 'price', sort: true },
    { title: 'Qty', fieldValue: 'quantity', sort: true },
    { title: 'Status', fieldValue: 'stockStatus', sort: true },
    { title: 'Rating', fieldValue: 'star', sort: true },
  ],
  rowAction: [
    {
      label: 'Edit',
      actionToPerform: 'edit',
      icon: 'edit-content',
      path: routes.Ecommerce.Products.AddProduct,
    },
    { label: 'Delete', actionToPerform: 'delete', icon: 'trash1', modal: true },
  ],
  data: [] as Product[],
})

watch(
  () => [...props.hideColumns],
  (newValue) => {
    if (newValue) {
      tableConfig.value.columns.forEach((column) => {
        column.hideColumn = newValue.includes(column.fieldValue as string)
      })
    }
  },
  { immediate: true }
)

onMounted(() => {
  tableConfig.value.data = products
  productList.value = products
})

function handleAction(value: TableClickedAction) {
  if (value.actionToPerform === 'delete' && value.data) {
    const id = value.data.id
    productList.value = productList.value.filter((product: Product) => product.id !== id)
    tableConfig.value.data = productList.value
  }
}
</script>
