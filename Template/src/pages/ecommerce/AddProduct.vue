<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <Card :headerTitle="'Product Form'" :padding="false" :border="true">
          <div class="row g-xl-5 g-3">
            <div class="col-xxl-3 col-xl-4 box-col-4e sidebar-left-wrapper">
              <ul class="sidebar-left-icons nav nav-pills">
                <li class="nav-item" v-for="(tab, index) in productState.tabs" :key="index">
                  <a
                    class="nav-link"
                    href="#"
                    :class="{ active: productState.activeTab == tab.value }"
                    @click.prevent="handleTab(tab.value, index + 1)"
                  >
                    <div class="nav-rounded">
                      <div class="product-icons">
                        <SvgIcon :icon="tab.icon" />
                      </div>
                    </div>
                    <div class="product-tab-content">
                      <h6>{{ tab.title }}</h6>
                      <p>{{ tab.description }}</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-xxl-9 col-xl-8 box-col-8 position-relative">
              <div class="tab-content custom-input">
                <div class="tab-pane fade show active">
                  <template v-if="productState.activeTab == 'product'">
                    <AddProductDetails
                      :activeTabId="productState.activeTabId"
                      @changeTab="handlePage($event)"
                    />
                  </template>
                  <template v-if="productState.activeTab == 'gallery'">
                    <ProductGallery
                      :activeTabId="productState.activeTabId"
                      @changeTab="handlePage($event)"
                    />
                  </template>
                  <template v-if="productState.activeTab == 'category'">
                    <ProductCategories
                      :activeTabId="productState.activeTabId"
                      @changeTab="handlePage($event)"
                    />
                  </template>
                  <template v-if="productState.activeTab == 'pricing'">
                    <ProductPriceDiscount
                      :activeTabId="productState.activeTabId"
                      @changeTab="handlePage($event)"
                    />
                  </template>
                  <template v-if="productState.activeTab == 'advance'">
                    <AdditionalOptions
                      :activeTabId="productState.activeTabId"
                      @changeTab="handlePage($event)"
                    />
                  </template>
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
import { defineAsyncComponent } from 'vue'

import { storeToRefs } from 'pinia'

import { useProduct } from '@/store/product'

const AddProductDetails = defineAsyncComponent(
  () => import('@/module/ecommerce/product/addProduct/AddProductDetails.vue')
)
const ProductGallery = defineAsyncComponent(
  () => import('@/module/ecommerce/product/addProduct/ProductGallery.vue')
)
const ProductCategories = defineAsyncComponent(
  () => import('@/module/ecommerce/product/addProduct/ProductCategories.vue')
)
const ProductPriceDiscount = defineAsyncComponent(
  () => import('@/module/ecommerce/product/addProduct/ProductPriceDiscount.vue')
)
const AdditionalOptions = defineAsyncComponent(
  () => import('@/module/ecommerce/product/addProduct/AdditionalOptions.vue')
)
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const productStore = useProduct()
const { productState } = storeToRefs(productStore)
const { handleTab, handlePage } = productStore
</script>
