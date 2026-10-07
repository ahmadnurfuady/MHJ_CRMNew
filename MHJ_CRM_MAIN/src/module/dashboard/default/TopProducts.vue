<template>
  <Card
    :cardClass="'height-equal'"
    :header="'total-revenue '"
    :padding="false"
    :headerTitle="t('dashboard.topProducts')"
    :cardBodyClass="'pt-0'"
  >
    <template #header5>
      <router-link :to="routes.Ecommerce.Products.ProductGrid">{{ t('common.viewAll') }}</router-link>
    </template>
    <div class="top-product-card">
      <ul>
        <li v-for="product in products" :key="product.id" class="d-flex top-product gap-2">
          <div>
            <img class="img-fluid product-img" :src="getImages(product.image)" alt="product" />
          </div>

          <div class="w-100 d-flex justify-content-between align-items-center">
            <div class="product-details">
              <div>
                <span class="badge rounded-pill badge-light text-dark">{{ product.sku }}</span>
              </div>
              <router-link
                :to="routes.Ecommerce.Products.ProductGrid"
                class="f-10 f-w-500 line-clamp"
              >
                {{ product.title }}</router-link
              >

              <span class="f-10 f-w-500 txt-primary">${{ product.price }}</span>
            </div>

            <div class="product-items">
              <div class="common-space gap-1">
                <span class="f-10 f-w-500 f-light">{{ t('dashboard.quantity') }} :</span>
                <span class="f-10 f-w-500">{{ product.qty }}</span>
              </div>

              <div class="common-space gap-1">
                <span class="f-10 f-w-500 f-light">{{ t('dashboard.revenue') }} :</span>
                <span class="f-10 f-w-500">${{ product.revenue }}</span>
              </div>

              <div class="common-space gap-1">
                <span class="f-10 f-w-500 f-light">{{ t('dashboard.profit') }} :</span>
                <span class="f-10 f-w-500">${{ product.profit }}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { topProducts } from '@/core/data/dashboard/default'
import { routes } from '@/router/routes'
import { TopProduct } from '@/types/dashboard/default'
import { getImages } from '@/utils/index'
import { defineAsyncComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const products = ref<TopProduct[]>(topProducts)
</script>
