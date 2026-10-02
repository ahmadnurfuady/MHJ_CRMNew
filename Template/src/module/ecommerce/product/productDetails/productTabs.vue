<template>
  <div class="card">
    <div class="row product-page-main">
      <div class="col-sm-12">
        <ul class="nav nav-tabs border-tab nav-primary mb-0" id="top-tab" role="tablist">
          <li class="nav-item" v-for="tab in productTabs" :key="tab.productId">
            <a
              class="nav-link"
              :class="{ active: tab.active }"
              :id="`${tab.productId}-tab`"
              data-bs-toggle="tab"
              :href="tab.target"
              role="tab"
              :aria-controls="tab.productId"
            >
              {{ tab.label }}
            </a>
          </li>
        </ul>
      </div>
      <div class="tab-content" id="top-tabContent">
        <div
          class="tab-pane fade"
          :class="{ 'show active': activeTab === 'top-home' }"
          id="top-home"
          role="tabpanel"
          aria-labelledby="top-home-tab"
        >
          <Description />
        </div>
        <div
          class="tab-pane fade"
          :class="{ 'show active': activeTab === 'contact-top' }"
          id="top-contact"
          role="tabpanel"
          aria-labelledby="contact-top-tab"
        >
          <AdditionalInfo />
        </div>
        <div
          class="tab-pane fade"
          :class="{ 'show active': activeTab === 'brand-top' }"
          id="top-brand"
          role="tabpanel"
          aria-labelledby="brand-top-tab"
        >
          <WriteReview />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { productTabs } from '@/core/data/ecommerce'
import { defineAsyncComponent, ref } from 'vue'
const Description = defineAsyncComponent(
  () => import('@/module/ecommerce/product/productDetails/Description.vue')
)
const AdditionalInfo = defineAsyncComponent(
  () => import('@/module/ecommerce/product/productDetails/AdditionalInfo.vue')
)
const WriteReview = defineAsyncComponent(
  () => import('@/module/ecommerce/product/productDetails/WriteReview.vue')
)

const activeTab = ref('top-home')
</script>
