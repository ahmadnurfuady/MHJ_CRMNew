<template>
  <div
    :class="
      filtered ? 'container-fluid product-wrapper sidebaron' : 'container-fluid product-wrapper'
    "
  >
    <div class="product-grid">
      <div class="feature-products">
        <div class="common-f-start justify-content-md-end mb-3">
          <router-link :to="routes.Ecommerce.Products.AddProduct" class="btn btn-primary f-w-500">
            <i class="fa fa-plus pe-2"></i>Add Products
          </router-link>
        </div>
        <div class="row">
          <div class="col-md-6 products-total">
            <div class="square-product-setting d-inline-block">
              <a class="icon-grid grid-layout-view" @click="gridView()"
                ><vue-feather type="grid"></vue-feather
              ></a>
            </div>
            <div class="square-product-setting d-inline-block">
              <a class="icon-grid m-0 list-layout-view" @click="listView()"
                ><vue-feather type="list"></vue-feather
              ></a>
            </div>
            <span class="d-none-productlist filter-toggle" @click="collapseFilter()"
              >Filters
              <span class="ms-2"
                ><vue-feather class="toggle-data" type="chevron-down"></vue-feather
              ></span>
            </span>
            <div class="grid-options d-inline-block">
              <ul>
                <li @click="grid2(true)">
                  <a class="product-2-layout-view">
                    <span class="line-grid line-grid-1 bg-primary"></span>
                    <span class="line-grid line-grid-2 bg-primary"></span
                  ></a>
                </li>
                <li @click="grid3()">
                  <a class="product-3-layout-view">
                    <span class="line-grid line-grid-3 bg-primary"></span>
                    <span class="line-grid line-grid-4 bg-primary"></span>
                    <span class="line-grid line-grid-5 bg-primary"></span
                  ></a>
                </li>
                <li @click="grid4()">
                  <a class="product-4-layout-view">
                    <span class="line-grid line-grid-6 bg-primary"></span>
                    <span class="line-grid line-grid-7 bg-primary"></span>
                    <span class="line-grid line-grid-8 bg-primary"></span>
                    <span class="line-grid line-grid-9 bg-primary"></span
                  ></a>
                </li>
                <li @click="grid6()">
                  <a class="product-6-layout-view">
                    <span class="line-grid line-grid-10 bg-primary"></span>
                    <span class="line-grid line-grid-11 bg-primary"></span>
                    <span class="line-grid line-grid-12 bg-primary"></span>
                    <span class="line-grid line-grid-13 bg-primary"></span>
                    <span class="line-grid line-grid-14 bg-primary"></span>
                    <span class="line-grid line-grid-15 bg-primary"></span
                  ></a>
                </li>
              </ul>
            </div>
          </div>
          <ShowingProduct />
        </div>
        <div class="row">
          <div class="col-sm-3">
            <div class="product-sidebar" :class="filtered ? 'open' : ''">
              <div class="filter-section">
                <div class="card">
                  <div class="card-header">
                    <h6 class="mb-0 f-w-700">
                      Filters
                      <span class="pull-right" @click="collapseFilter()">
                        <i class="fa fa-chevron-down toggle-data"></i>
                      </span>
                    </h6>
                  </div>
                  <ProductFilterBar @allFilters="allFilter" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-9 col-sm-12">
            <ProductSearch @update-search="updateSearchTerm" />
          </div>
        </div>
      </div>
      <ProductDetail :search-term="productState.searchTerm" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { useProduct } from '@/store/product'
import { routes } from '@/router/routes'
import { Product } from '@/types/product'
import { storeToRefs } from 'pinia'

const ShowingProduct = defineAsyncComponent(
  () => import('@/module/ecommerce/product/grid/ShowingProduct.vue')
)
const ProductFilterBar = defineAsyncComponent(
  () => import('@/module/ecommerce/common/ProductFilterBar.vue')
)
const ProductDetail = defineAsyncComponent(
  () => import('@/module/ecommerce/product/grid/ProductDetail.vue')
)
const ProductSearch = defineAsyncComponent(
  () => import('@/module/ecommerce/product/grid/ProductSearch.vue')
)

const filtered = ref<boolean>(false)
const store = useProduct()
const { productState } = storeToRefs(store)
const { setTags, grid2, grid3, grid4, grid6, listView, gridView } = store
const allFilters = ref<Product[]>([])

function allFilter(selectedVal: object[]) {
  const products = selectedVal as Product[]
  allFilters.value = products
  setTags(products)
}

function collapseFilter() {
  filtered.value = !filtered.value
}

const updateSearchTerm = (newSearchTerm: string) => {
  productState.value.searchTerm = newSearchTerm
}
</script>
