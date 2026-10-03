<template>
  <div class="tab-content custom-input">
    <div class="sidebar-body advance-options">
      <ul class="nav nav-tabs border-tab mb-0">
        <li class="nav-item" v-for="(tab, index) in productState.additionalTabs" :key="index">
          <a
            class="nav-link"
            :class="{ active: productState.additionalActiveTab === tab.value }"
            @click="handleAdditionalTab(tab.value, index + 1)"
            >{{ tab.title }}</a
          >
        </li>
      </ul>
      <div class="tab-content" id="advance-option-tabContent">
        <div class="tab-pane fade show active">
          <div class="meta-body">
            <template v-if="productState.additionalActiveTab == 'inventory'">
              <InventoryDetails
                :activeTabId="props.activeTabId"
                :additionalTabId="productState.additionalTabId"
                @previousPage="handlePreviousPage($event)"
                @nextPage="handleAdditionalPage($event)"
              />
            </template>
            <template v-if="productState.additionalActiveTab == 'seo_tag'">
              <SEOTagDetails
                :additionalTabId="productState.additionalTabId"
                @changeTab="handleAdditionalPage($event)"
              />
            </template>
            <template v-if="productState.additionalActiveTab == 'shipping'">
              <ShippingDetails
                :additionalTabId="productState.additionalTabId"
                @changeTab="handleAdditionalPage($event)"
              />
            </template>
            <template v-if="productState.additionalActiveTab == 'variations'">
              <VariationDetails
                :additionalTabId="productState.additionalTabId"
                @changeTab="handleAdditionalPage($event)"
              />
            </template>
            <template v-if="productState.additionalActiveTab == 'publish'">
              <PublicationDetails
                :additionalTabId="productState.additionalTabId"
                @changeTab="handleAdditionalPage($event)"
              />
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { storeToRefs } from 'pinia'

import { useProduct } from '@/store/product'

const InventoryDetails = defineAsyncComponent(
  () => import('@/module/ecommerce/product/addProduct/InventoryDetails.vue')
)
const SEOTagDetails = defineAsyncComponent(
  () => import('@/module/ecommerce/product/addProduct/SEOTagDetails.vue')
)
const ShippingDetails = defineAsyncComponent(
  () => import('@/module/ecommerce/product/addProduct/ShippingDetails.vue')
)
const VariationDetails = defineAsyncComponent(
  () => import('@/module/ecommerce/product/addProduct/VariationDetails.vue')
)
const PublicationDetails = defineAsyncComponent(
  () => import('@/module/ecommerce/product/addProduct/PublicationDetails.vue')
)

const props = defineProps<{
  activeTabId: number
}>()

const emits = defineEmits(['changeTab'])

const productStore = useProduct()
const { productState } = storeToRefs(productStore)
const { handleAdditionalTab, handleAdditionalPage } = productStore

function handlePreviousPage(page: number) {
  if (page) {
    emits('changeTab', page)
  }
}
</script>
