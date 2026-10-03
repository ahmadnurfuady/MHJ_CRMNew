<template>
  <div class="header-faq">
    <h5 class="mb-0">{{ props.headerTitle }}</h5>
  </div>
  <div class="row" v-if="props.details">
    <div
      class="col-xl-3 xl-50 col-md-6 box-col-6"
      v-for="featured in props.details"
      :key="featured.id"
    >
      <div class="card features-faq product-box">
        <div class="faq-image product-img">
          <img class="img-fluid" :src="getImages(featured.image)" :alt="featured.title" />
          <div class="product-hover">
            <ul>
              <li>
                <i class="icon-link"></i>
              </li>
              <li>
                <i class="icon-import"></i>
              </li>
            </ul>
          </div>
        </div>
        <div class="card-body">
          <h6 class="pb-1">{{ featured.title }}</h6>
          <p class="c-light">{{ featured.description }}</p>
        </div>
        <div class="card-footer">
          <span>{{ featured.date }}</span>
          <span class="pull-right">
            <Rate :rating="featured.rating" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import type { featuredTutorial } from '@/types/knowledgeBase'
import { getImages } from '@/utils/index'

const Rate = defineAsyncComponent(() => import('@/components/shared/Rate.vue'))

const props = defineProps<{
  details: featuredTutorial[]
  headerTitle: string
}>()
</script>
