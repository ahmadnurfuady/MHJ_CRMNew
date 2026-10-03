<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xxl-9 col-xl-8 box-col-8e">
        <div class="row">
          <div class="col-12">
            <Card
              :headerTitle="'Order Status'"
              :border="true"
              :padding="false"
              :cardBodyClass="'track-order-details'"
            >
              <h6 id="order-status-timeline">
                <div :class="`status-bar progress step-${currentTab}`"></div>
                <div class="main-status-line">
                  <ul>
                    <li v-for="(tab, index) in detailsTab" :key="index">
                      <div class="order-process" :class="{ active: tab.id <= currentTab }">
                        <span>{{ tab.id }}</span>
                      </div>
                      <h6>{{ tab.title }}</h6>
                    </li>
                  </ul>
                </div>
              </h6>
            </Card>
          </div>
          <div class="col-12">
            <Card
              :headerTitle="`Order Number: #${orderNumber}`"
              :padding="false"
              :cardBodyClass="'order-details-product pt-0'"
            >
              <div class="table-responsive custom-scrollbar">
                <Table
                  :tableConfig="tableConfig"
                  :pageSize="4"
                  :search="false"
                  :pagination="false"
                >
                  <template #productImage="{ row }">
                    <div class="light-product-box">
                      <img
                        class="img-fluid"
                        :src="getImages(row.productImage)"
                        :alt="row.productName"
                      />
                    </div>
                  </template>
                  <template #productName="{ row }">
                    <ul>
                      <li>
                        <h6>
                          <a href="#">{{ row.productName }}</a>
                        </h6>
                      </li>
                      <li>
                        <p>{{ row.brand }}</p>
                        <span class="common-dot"></span
                        ><span>Color:<span> {{ row.color }}</span></span>
                      </li>
                    </ul>
                  </template>
                </Table>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div class="col-xxl-3 col-xl-4 box-col-4">
        <div class="row">
          <div class="col-12">
            <BillingDetails :billingDetails="orderDetails.billingDetails" />
          </div>
          <div class="col-12">
            <CustomerDetails :customerDetails="orderDetails.customerDetails" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue'

import { useRouter } from 'vue-router'

import { orderDetails, orderDetailsTab } from '@/core/data/order'
import type { TableConfigs } from '@/types/common'
import type { OrderDetailsProduct } from '@/types/order'
import { getImages } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const Table = defineAsyncComponent(() => import('@/components/shared/Table.vue'))
const BillingDetails = defineAsyncComponent(
  () => import('@/module/ecommerce/order/BillingDetails.vue')
)
const CustomerDetails = defineAsyncComponent(
  () => import('@/module/ecommerce/order/CustomerDetails.vue')
)

const router = useRouter()

const detailsTab = orderDetailsTab
const orderDetailsList = ref(orderDetails)
const currentTab = ref<number>(3)

const orderNumber = router.currentRoute.value.params.orderNumber

const tableConfig = ref<TableConfigs<OrderDetailsProduct>>({
  columns: [
    { title: 'Image', fieldValue: 'productImage', sort: true },
    { title: 'Product', fieldValue: 'productName', sort: true },
    {
      title: 'Price',
      fieldValue: 'discountPrice',
      sort: true,
      type: 'price',
      decimalNumber: true,
    },
    { title: 'Qty', fieldValue: 'quantity', sort: true },
    {
      title: 'Subtotal',
      fieldValue: 'subTotal',
      sort: true,
      type: 'price',
      decimalNumber: true,
    },
  ],
  data: [] as OrderDetailsProduct[],
})

onMounted(() => {
  const products = orderDetailsList.value.products.map((product: OrderDetailsProduct) => {
    const formattedProduct = { ...product }
    const subTotal = product.quantity * (product.discountPrice ?? product.price)
    formattedProduct.subTotal = subTotal

    return formattedProduct
  })

  tableConfig.value.data = products ? products : []
})
</script>
