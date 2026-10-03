<template>
  <Card
    :headerTitle="'Animated Progress Bars'"
    :border="true"
    :padding="false"
    :cardBodyClass="'progress-showcase'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        The striped gradient can also be animated. Add
        <code> progress-bar-animated</code> to<code> progress-bar</code> to animate the stripes
        right to left via CSS3 animations.
      </p>
    </template>
    <div class="row">
      <div class="col">
        <div class="progress">
          <div
            class="progress-bar-animated bg-primary progress-bar-striped"
            role="progressbar"
            :style="{ width: '10%' }"
          ></div>
        </div>
        <div class="progress">
          <div
            class="progress-bar-animated progress-bar-striped bg-warning"
            role="progressbar"
            :style="{ width: '25%' }"
          ></div>
        </div>
        <div class="progress">
          <div
            class="progress-bar-animated progress-bar-striped bg-danger"
            role="progressbar"
            :style="{ width: '50%' }"
          ></div>
        </div>
        <div class="progress">
          <div
            class="progress-bar-animated progress-bar-striped bg-success"
            role="progressbar"
            :style="{ width: '75%' }"
          ></div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
