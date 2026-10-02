<template>
  <div class="review-box">
    <div class="row g-4">
      <div class="col-xl-6">
        <div class="product-rating-box">
          <div class="row">
            <div class="col-12">
              <div class="common-f-start mb-3">
                <h5 class="main-product-rating">4.5<i class="fa-solid fa-star"></i></h5>
                <h6 class="ms-3 c-o-light">5 Overall Rating</h6>
              </div>
            </div>
            <div class="col-12">
              <div class="rating-box">
                <ul>
                  <li v-for="data in ratingBreakdown" :key="data.id">
                    <div class="rating-list">
                      <h6>{{ data.ratingId }}<i class="fa-solid fa-star"></i></h6>
                      <div class="progress">
                        <div
                          class="progress-bar"
                          :style="{ width: data.percentage }"
                          role="progressbar"
                        ></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="review-title-2">
              <h5>Review this product</h5>
              <p>Let other customers know what you think</p>
              <a
                class="btn btn-primary"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#write-review-modal"
                >Write a Review</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-6">
        <div class="review-people">
          <ul class="review-list custom-scrollbar">
            <li v-for="data in reviews" :key="data.id">
              <div class="people-box">
                <img class="img-fluid" :src="getImages(data.image)" alt="images" />
                <div class="people-comment">
                  <div class="people-name">
                    <div>
                      <a class="name" href="#">{{ data.name }}</a>
                      <span class="c-o-light">( {{ data.product }} )</span>
                    </div>
                    <div class="product-rating">
                      <div class="common-flex">
                        <RatingStars :rating="data.rating" />
                      </div>
                    </div>
                    <h6 class="text-content">{{ data.date }}</h6>
                  </div>
                  <div class="reply">
                    <p>{{ data.review }}</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <ReviewModal />
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { ratingBreakdown, reviews } from '@/core/data/ecommerce'
import { getImages } from '@/utils/index'
const ReviewModal = defineAsyncComponent(
  () => import('@/module/ecommerce/product/productDetails/ReviewModal.vue')
)
const RatingStars = defineAsyncComponent(() => import('@/components/shared/RatingStars.vue'))
</script>
