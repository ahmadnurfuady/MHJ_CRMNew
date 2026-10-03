<template>
  <div class="row product-rating-box">
    <div class="col-12">
      <div class="common-space mb-3">
        <h5 class="main-product-rating">
          {{ sellerRating.rating }}/5
          <i class="fa-solid fa-star"></i>
        </h5>
        <h6 class="ms-3 c-o-light">({{ sellerRating.totalRating }})</h6>
      </div>
    </div>
    <div class="col-12">
      <div class="rating-box">
        <ul>
          <li v-for="(count, index) in sellerRating.ratingCount" :key="index">
            <div class="rating-list">
              <h6>
                {{ rating[rating.length - index - 1] }}
                <i class="fa-solid fa-star"></i>
              </h6>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  :style="{ width: (count / sellerRating.totalRating) * 100 + '%' }"
                ></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { sellerDetails } from '@/core/data/seller'

const sellerRating = sellerDetails.rating
const rating = ref<number[]>(Array.from({ length: 5 }, (_, i) => i + 1))
</script>
