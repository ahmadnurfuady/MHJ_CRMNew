<template>
  <Card
    :cardClass="'heading-space vendor-selling-table'"
    :cardType="'dataTable'"
    :headerTitle="'Top Selling Products'"
    :dropdownType="'simple'"
    :padding="false"
    :cardBodyClass="'px-0 pt-0 common-option'"
  >
    <div class="recent-table table-responsive currency-table recent-order-table custom-scrollbar">
      <Table
        :tableConfig="tableConfig"
        :hasCheckbox="true"
        :pageSize="6"
        :paginateDetails="true"
        :showPaginate="true"
        :selectedRows="true"
      ></Table>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'
import { topSellingProducts } from '@/core/data/seller'
import type { TableConfigs } from '@/types/common'
import type { TopSellingProduct } from '@/types/seller'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'))

const tableConfig = ref<TableConfigs>({
  columns: [
    { title: 'Product', fieldValue: 'productName', sort: true },
    { title: 'Category', fieldValue: 'category', sort: true },
    { title: 'Price', fieldValue: 'price', sort: true },
    { title: 'Orders', fieldValue: 'orders', sort: true },
    { title: 'Stock', fieldValue: 'stock', sort: true },
    { title: 'Total Amount', fieldValue: 'totalAmount', sort: true },
  ],
  data: [] as TopSellingProduct[],
})

onMounted(() => {
  tableConfig.value.data = topSellingProducts.map((product: TopSellingProduct) => {
    const formattedProduct = { ...product }
    formattedProduct.productName = `<div class="product-names">
                                <div class="light-product-box">
                                  <img class="img-fluid" src="${getImages(
                                    product.productImage
                                  )}" alt="${product.productName}"></div>
                                <p>${product.productName}</p>
                              </div>`
    product.category = `<p class="c-o-light">${product.category}</p>`
    formattedProduct.price = `<p class="c-o-light">${'$' + product.price}</p>`
    formattedProduct.orders = `<p class="c-o-light">${product.orders}</p>`
    formattedProduct.stock = `<p class="c-o-light">${product.stock}</p>`
    formattedProduct.totalAmount = `<p class="c-o-light">${'$' + product.totalAmount}</p>`

    return formattedProduct
  })
})
</script>
