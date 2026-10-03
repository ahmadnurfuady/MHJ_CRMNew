<template>
  <Card
    :headerTitle="'Animated Star Rating'"
    :border="true"
    :padding="false"
    :cardClass="'height-equal'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>vue-star-rating</code> with <code>:animate</code> enabled for visual effects.
        Customize the look using props like <code>:active-color</code>, <code>:border-width</code>,
        <code>:padding</code>, and custom <code>:star-points</code> to shape the stars. Interactions
        can be activated with <code>:active-on-click</code>.
      </p>
    </template>

    <div class="main-star-rating">
      <div class="common-flex star-box justify-content-center">
        <div class="rating">
          <StarRating
            :rating="3"
            :star-size="40"
            :animate="true"
            :active-color="'var(--theme-default)'"
            :active-border-color="'var(--primary-70)'"
            :border-width="4"
            :star-points="[
              23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34, 46, 19, 31, 17,
            ]"
            :active-on-click="true"
            :padding="3"
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
