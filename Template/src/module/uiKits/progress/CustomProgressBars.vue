<template>
  <Card
    :headerTitle="'Custom Progress Bars'"
    :border="true"
    :padding="false"
    :cardBodyClass="'progress-showcase'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use the <code> progress-bar-animated </code>and <code> progress-bar-striped </code>to
        animate the stripes right to left.
      </p>
    </template>

    <div class="row">
      <div class="col">
        <h6 class="mb-2">0% Getting Started</h6>
        <div class="progress mb-4">
          <div
            class="progress-bar-animated progress-bar-striped text-center"
            role="progressbar"
          ></div>
        </div>
        <h6 class="mb-2">30% Getting Uploading...</h6>
        <div class="progress mb-4">
          <div
            class="progress-bar-animated progress-bar-striped bg-primary text-center"
            role="progressbar"
            :style="{ width: '30%' }"
          >
            30%
          </div>
        </div>
        <h6 class="mb-2">60% Getting Pause...</h6>
        <div class="progress mb-4">
          <div
            class="progress-bar-animated progress-bar-striped bg-secondary text-center"
            role="progressbar"
            :style="{ width: '60%' }"
          >
            60%
          </div>
        </div>
        <h6 class="mb-2">70% Getting Uploading...</h6>
        <div class="progress mb-4">
          <div
            class="progress-bar-animated progress-bar-striped bg-success text-center"
            role="progressbar"
            :style="{ width: '70%' }"
          >
            70%
          </div>
        </div>
        <h6 class="mb-2">100% Completed</h6>
        <div class="progress">
          <div
            class="progress-bar-animated progress-bar-striped bg-dark text-center"
            role="progressbar"
            :style="{ width: '100%' }"
          >
            100%
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
