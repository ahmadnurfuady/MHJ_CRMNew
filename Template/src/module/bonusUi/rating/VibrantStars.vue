<template>
  <Card :headerTitle="'Vibrant Rating'" :border="true" :padding="false" :cardClass="'height-equal'">
    <template #header5>
      <p class="f-m-light mt-1">
        The <code>Vibrant Rating</code> uses <code>vue-star-rating</code> to display a visually
        rich, static star rating. Customize the appearance with <code>:active-color</code> and
        <code>:inactive-color</code> to match your theme.
      </p>
    </template>

    <div class="main-star-rating">
      <div class="common-flex star-box justify-content-center">
        <div class="rating">
          <StarRating
            :rating="3"
            :star-size="40"
            :inactive-color="'var(--theme-secondary)'"
            :active-color="'var(--theme-default)'"
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
