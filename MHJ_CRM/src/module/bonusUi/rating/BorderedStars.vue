<template>
  <Card
    :headerTitle="'Border Star Rating'"
    :border="true"
    :padding="false"
    :cardClass="'height-equal'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>vue-star-rating</code> to render a static star rating with prominent borders. Use
        props <code>:border-width</code> to control the border thickness. Set
        <code>:show-rating="false"</code> to hide the numeric score.
      </p>
    </template>

    <div class="main-star-rating">
      <div class="common-flex star-box justify-content-center">
        <div class="rating">
          <StarRating
            :rating="3"
            :star-size="40"
            :border-width="5"
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
