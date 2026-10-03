<template>
  <Card
    :headerTitle="'Multiple Bars'"
    :border="true"
    :padding="false"
    :cardBodyClass="'progress-showcase'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Include multiple progress bars in a progress component if you need.
      </p>
    </template>

    <div class="row">
      <div class="col">
        <div class="progress">
          <div class="progress-bar bg-primary" role="progressbar" :style="{ width: '30%' }"></div>
          <div class="progress-bar bg-secondary" role="progressbar" :style="{ width: '20%' }"></div>
          <div class="progress-bar bg-success" role="progressbar" :style="{ width: '15%' }"></div>
        </div>
        <div class="progress">
          <div class="progress-bar bg-primary" role="progressbar" :style="{ width: '10%' }"></div>
          <div class="progress-bar bg-secondary" role="progressbar" :style="{ width: '10%' }"></div>
          <div class="progress-bar bg-success" role="progressbar" :style="{ width: '10%' }"></div>
          <div class="progress-bar bg-info" role="progressbar" :style="{ width: '10%' }"></div>
          <div class="progress-bar bg-warning" role="progressbar" :style="{ width: '10%' }"></div>
          <div class="progress-bar bg-danger" role="progressbar" :style="{ width: '10%' }"></div>
          <div class="progress-bar bg-primary" role="progressbar" :style="{ width: '10%' }"></div>
          <div class="progress-bar bg-light" role="progressbar" :style="{ width: '10%' }"></div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
