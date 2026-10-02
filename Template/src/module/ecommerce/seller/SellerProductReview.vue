<template>
  <div class="review-people">
    <ul class="review-list custom-scrollbar">
      <li v-for="(review, index) in productReview" :key="index">
        <div class="people-box">
          <img class="img-fluid" :src="getImages(review.image)" :alt="review.name" />
          <div class="people-comment">
            <div class="people-name">
              <a class="name" href="#">{{ review.name }}</a>
              <div class="date-time">
                <h6 class="text-content">{{ review.product }}</h6>
                <div class="product-rating">
                  <div class="common-flex">
                    <StarRating
                      v-model:rating="review.rating"
                      :star-size="20"
                      :read-only="true"
                      :show-rating="false"
                      :max-rating="5"
                      :increment="0.5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>{{ review.reviewText }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { sellerDetails } from '@/core/data/seller'
import { getImages } from '@/utils/index'
const productReview = sellerDetails.review
</script>
