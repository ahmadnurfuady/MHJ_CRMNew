<template>
  <Card
    :headerTitle="'Custom Star Rating'"
    :border="true"
    :padding="false"
    :cardClass="'height-equal'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>vue-star-rating</code> with custom star shapes by passing a custom
        <code>:star-points</code> array. Use <code>:rounded-corners</code> for rounded corner
      </p>
    </template>

    <div class="main-star-rating">
      <div class="common-flex star-box justify-content-center">
        <div class="rating">
          <StarRating
            :rating="3"
            :star-size="40"
            :rounded-corners="true"
            :border-width="4"
            :star-points="[
              23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34, 46, 19, 31, 17,
            ]"
            :show-rating="false"
            :max-rating="5"
          />
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
