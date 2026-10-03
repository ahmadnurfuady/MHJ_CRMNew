<template>
  <div class="container-fluid list-product-view product-wrapper" :class="{ sidebaron: filtered }">
    <div class="row">
      <div class="col-sm-12">
        <div class="row g-3">
          <div class="col-md-3 col-sm-6">
            <div class="product-sidebar">
              <div class="filter-section">
                <div class="card">
                  <div class="card-header card-no-border">
                    <h6 class="mb-0 f-w-600" @click="collapseFilter()">
                      Filters<span class="pull-right">
                        <i class="fa fa-chevron-down toggle-data"></i
                      ></span>
                    </h6>
                  </div>
                  <ProductFilter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-header card-no-border text-end">
            <div class="card-header-right-icon">
              <router-link
                class="btn btn-primary f-w-500"
                :to="routes.Ecommerce.Products.AddProduct"
              >
                <i class="fa-solid fa-plus pe-2"></i>
                Add Products
              </router-link>
            </div>
          </div>
          <div class="card-body px-0 pt-0">
            <div class="list-product">
              <div class="recent-table table-responsive custom-scrollbar product-list-table">
                <ProductListTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { routes } from '@/router/routes'
import { defineAsyncComponent, ref } from 'vue'

const ProductFilter = defineAsyncComponent(
  () => import('@/module/ecommerce/common/ProductFilterBar.vue')
)

const ProductListTable = defineAsyncComponent(
  () => import('@/module/ecommerce/product/productList/ProductListTable.vue')
)

const filtered = ref<boolean>(false)
function collapseFilter() {
  filtered.value = !filtered.value
}
</script>
