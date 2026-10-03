<template>
  <Card :headerTitle="'Capture Rating'" :border="true" :padding="false" :cardClass="'height-equal'">
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>vue-star-rating</code> to allow users to interactively select a rating. Use
        <code>v-model:rating</code> to bind the selected value, and display a message like
        <code>You have selected X stars</code> for user feedback.
      </p>
    </template>

    <div class="main-star-rating">
      <div class="common-flex star-box justify-content-center">
        <div class="rating">
          <StarRating
            v-model:rating="rating"
            :star-size="40"
            :show-rating="false"
            :max-rating="5"
          />
          <p class="mt-2">You have selected {{ rating }} star<span v-if="rating > 1">s</span>.</p>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const rating = ref<number>(3)
</script>
