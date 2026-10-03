<template>
  <Card
    :cardClass="'height-equal'"
    :headerTitle="'Large Progress Bars'"
    :border="true"
    :padding="false"
    :cardBodyClass="'progress-showcase'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code> lg-progress-bar</code> class to change progress size to large.
      </p>
    </template>

    <div class="row">
      <div class="col">
        <div class="progress lg-progress-bar">
          <div class="progress-bar bg-primary" role="progressbar" :style="{ width: '25%' }">
            25%
          </div>
        </div>
        <div class="progress lg-progress-bar">
          <div class="progress-bar bg-secondary" role="progressbar" :style="{ width: '50%' }">
            50%
          </div>
        </div>
        <div class="progress lg-progress-bar">
          <div class="progress-bar bg-success" role="progressbar" :style="{ width: '75%' }">
            75%
          </div>
        </div>
        <div class="progress lg-progress-bar">
          <div class="progress-bar bg-info" role="progressbar" :style="{ width: '100%' }">100%</div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
