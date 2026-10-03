<template>
  <div class="container-fluid seller-details-wrapper" v-if="currentStore">
    <div class="row">
      <div class="col-12 ord-xxl-2 box-ord-2">
        <div class="row">
          <div
            class="col-xxl-3 col-sm-6"
            v-for="(details, index) in storeGeneralDetails"
            :key="index"
          >
            <StoreGeneralDetails :details="details" />
          </div>
        </div>
      </div>
      <div class="col-xl-9 xl-100 ord-xxl-3 box-ord-3 box-col-12">
        <div class="row">
          <div class="col-12">
            <SalesOverview />
          </div>
          <div class="col-12">
            <TopSellingProduct />
          </div>
          <div class="col-12">
            <SellerRecentOrder />
          </div>
          <div class="col-12">
            <div class="card heading-space seller-details-table">
              <div class="card-header card-no-border text-end">
                <div class="header-top">
                  <h5>All Products</h5>
                  <div class="card-header-right-icon">
                    <router-link
                      class="btn btn-light-primary f-w-500"
                      :to="routes.Ecommerce.Products.AddProduct"
                    >
                      <i class="fa-solid fa-plus pe-2"></i>
                      Add Products
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="card-body px-0 pt-0">
                <div class="list-product">
                  <div class="recent-table table-responsive custom-scrollbar">
                    <ProductListTable
                      :pageSize="6"
                      :hideColumns="['sku', 'qty']"
                    ></ProductListTable>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 ord-xxl-1 box-ord-1">
        <SellerDetailsSidebar :currentStore="currentStore" />
      </div>
    </div>
  </div>
  <template v-else> No Store Found. </template>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue'

import { useRouter } from 'vue-router'

import { storeGeneralDetails, stores } from '@/core/data/seller'
import { routes } from '@/router/routes'
import type { Store } from '@/types/seller'

const StoreGeneralDetails = defineAsyncComponent(
  () => import('@/module/ecommerce/seller/StoreGeneralDetails.vue')
)
const SalesOverview = defineAsyncComponent(
  () => import('@/module/ecommerce/seller/SalesOverview.vue')
)
const TopSellingProduct = defineAsyncComponent(
  () => import('@/module/ecommerce/seller/TopSellingProduct.vue')
)
const SellerRecentOrder = defineAsyncComponent(
  () => import('@/module/ecommerce/seller/SellerRecentOrder.vue')
)
const ProductListTable = defineAsyncComponent(
  () => import('@/module/ecommerce/product/productList/ProductListTable.vue')
)
const SellerDetailsSidebar = defineAsyncComponent(
  () => import('@/module/ecommerce/seller/SellerDetailsSidebar.vue')
)

const router = useRouter()

const storeId = router.currentRoute.value.params.id
const currentStore = ref<Store>()

onMounted(() => {
  if (storeId) {
    stores.find((store) => {
      if (store.id === Number(storeId)) {
        currentStore.value = store
      }
    })
  }
})
</script>
