<template>
  <Card :headerTitle="'Star Rating'" :border="true" :padding="false" :cardClass="'height-equal'">
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>vue-star-rating</code> to display a static star rating with a default value using
        props like <code>:rating</code>, <code>:star-size</code>, and <code>:read-only</code>.
      </p>
    </template>

    <div class="main-star-rating">
      <div class="common-flex star-box justify-content-center">
        <div class="rating">
          <StarRating
            :rating="3"
            :star-size="40"
            :read-only="true"
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
