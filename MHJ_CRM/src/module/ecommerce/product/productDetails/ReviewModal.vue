<template>
  <div class="modal fade" id="write-review-modal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content category-popup custom-input">
        <div class="modal-header">
          <h5 class="modal-title">Write a Review</h5>
          <button
            class="btn-close"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="product-review-rating">
            <span>Rating</span>
            <div class="product-rating main-star-rating">
              <div class="common-flex star-box">
                <RatingStars :rating="4" />
              </div>
            </div>
          </div>
          <form class="row g-3 needs-validation" novalidate>
            <div class="col-md-12">
              <label class="form-label" for="validationCustom01">Name</label>
              <input
                class="form-control"
                id="validationCustom01"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>
            <div class="col-12">
              <label class="form-label" for="validationTextarea">Your Review</label>
              <textarea
                class="form-control"
                id="validationTextarea"
                placeholder="Enter your review"
                required
              ></textarea>
            </div>
            <div class="col-12">
              <button class="btn btn-primary" type="submit">Submit Review</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const RatingStars = defineAsyncComponent(() => import('@/components/shared/RatingStars.vue'))
</script>
