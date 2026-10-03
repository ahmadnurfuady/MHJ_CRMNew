<template>
  <Card
    :headerTitle="'Custom Height Progress Bars'"
    :border="true"
    :padding="false"
    :cardBodyClass="'progress-showcase'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Set a height value on the <code> progress-bar</code>, so if you change that value the
        outer<code> progress</code> will automatically resize accordingly.
      </p>
    </template>

    <div class="row">
      <div class="col">
        <div class="progress" :style="{ height: '1px' }">
          <div class="progress-bar bg-primary" role="progressbar" :style="{ width: '25%' }"></div>
        </div>
        <div class="progress" :style="{ height: '5px' }">
          <div class="progress-bar bg-warning" role="progressbar" :style="{ width: '50%' }"></div>
        </div>
        <div class="progress" :style="{ height: '11px' }">
          <div class="progress-bar bg-danger" role="progressbar" :style="{ width: '75%' }"></div>
        </div>
        <div class="progress" :style="{ height: '19px' }">
          <div class="progress-bar bg-info" role="progressbar" :style="{ width: '100%' }"></div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
