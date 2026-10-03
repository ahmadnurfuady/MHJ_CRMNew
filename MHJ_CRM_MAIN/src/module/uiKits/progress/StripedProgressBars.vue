<template>
  <Card
    :headerTitle="'Striped Progress Bars'"
    :border="true"
    :padding="false"
    :cardBodyClass="'progress-showcase'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Add <code> progress-bar-striped</code> to any <code> progress-bar </code> to apply a stripe
        via CSS gradient over the progress bar's background color Using CSS Effects.
      </p>
    </template>

    <div class="row">
      <div class="col">
        <div class="progress">
          <div
            class="progress-bar bg-primary progress-bar-striped"
            role="progressbar"
            :style="{ width: '10%' }"
          ></div>
        </div>
        <div class="progress">
          <div
            class="progress-bar progress-bar-striped bg-warning"
            role="progressbar"
            :style="{ width: '25%' }"
          ></div>
        </div>
        <div class="progress">
          <div
            class="progress-bar progress-bar-striped bg-danger"
            role="progressbar"
            :style="{ width: '50%' }"
          ></div>
        </div>
        <div class="progress">
          <div
            class="progress-bar progress-bar-striped bg-success"
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
