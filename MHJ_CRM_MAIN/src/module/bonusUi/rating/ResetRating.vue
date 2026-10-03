<template>
  <Card :headerTitle="'Reset Rating'" :border="true" :padding="false" :cardClass="'height-equal'">
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>vue-star-rating</code> to allow users to select a rating and reset it to zero with
        a single click. Use <code>v-model:rating</code> for two-way binding and a reset method to
        clear the selection.
      </p>
    </template>

    <div class="ratingCard">
      <div class="reset-rating">
        <div class="rating">
          <StarRating
            v-model:rating="rating"
            :star-size="40"
            :show-rating="false"
            :max-rating="5"
          />
        </div>
      </div>
      <div class="buttonContainer">
        <button class="reset-btn btn btn-primary" @click="resetRating()">Reset</button>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const rating = ref<number>(3)

function resetRating() {
  rating.value = 0
}
</script>
