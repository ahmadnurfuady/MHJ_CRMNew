<template>
  <Card
    :cardClass="'height-equal'"
    :headerTitle="'Small Progress Bars'"
    :border="true"
    :padding="false"
    :cardBodyClass="'progress-showcase progress-b-space'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code> sm-progress-bar</code> class to change progress size to small.
      </p>
    </template>

    <div class="row">
      <div class="col">
        <div class="progress sm-progress-bar overflow-visible mt-4">
          <div
            class="progress-bar-animated small-progressbar bg-primary rounded-pill progress-bar-striped"
            role="progressbar"
            :style="{ width: '30%' }"
          >
            <span class="txt-primary progress-label">30 MB Data</span
            ><span class="animate-circle"></span>
          </div>
        </div>
        <div class="progress sm-progress-bar overflow-visible">
          <div
            class="progress-bar-animated small-progressbar bg-primary rounded-pill progress-bar-striped"
            role="progressbar"
            :style="{ width: '50%' }"
          >
            <span class="txt-primary progress-label">50 MB Data</span
            ><span class="animate-circle"></span>
          </div>
        </div>
        <div class="progress sm-progress-bar overflow-visible">
          <div
            class="progress-bar-animated small-progressbar bg-primary rounded-pill progress-bar-striped"
            role="progressbar"
            :style="{ width: '75%' }"
          >
            <span class="txt-primary progress-label">75 MB Data</span
            ><span class="animate-circle"></span>
          </div>
        </div>
        <div class="progress sm-progress-bar overflow-visible">
          <div
            class="progress-bar-animated small-progressbar bg-primary rounded-pill progress-bar-striped"
            role="progressbar"
            :style="{ width: '90%' }"
          >
            <span class="txt-primary progress-label">90 MB Data</span
            ><span class="animate-circle"></span>
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
