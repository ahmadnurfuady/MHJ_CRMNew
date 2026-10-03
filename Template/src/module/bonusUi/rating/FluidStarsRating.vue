<template>
  <Card
    :headerTitle="'Fluid Star Rating'"
    :border="true"
    :padding="false"
    :cardClass="'height-equal'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use<code>vue-star-rating</code> with a small <code>:increment</code> value to enable smooth,
        fine-grained rating steps.
      </p>
    </template>

    <div class="main-star-rating">
      <div class="common-flex star-box justify-content-center">
        <div class="rating">
          <StarRating :rating="3" :star-size="40" :increment="0.01" :max-rating="5" />
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
