<template>
  <Card
    :headerTitle="'Basic progress bars'"
    :border="true"
    :padding="false"
    :cardBodyClass="'progress-showcase'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Progress components are built with two HTML elements, some CSS to set the width, and a few
        attributes. We use the <code> progress </code>as a wrapper to indicate the max value of the
        progress bar. The <code> progress-bar </code>requires an inline style, utility class, or
        custom CSS to set their width.
      </p>
    </template>
    <div class="row">
      <div class="col">
        <div class="progress">
          <div class="progress-bar" role="progressbar"></div>
        </div>
        <div class="progress">
          <div class="progress-bar bg-primary" role="progressbar" :style="{ width: '25%' }">
            25%
          </div>
        </div>
        <div class="progress">
          <div class="progress-bar bg-secondary" role="progressbar" :style="{ width: '50%' }">
            50%
          </div>
        </div>
        <div class="progress">
          <div class="progress-bar bg-success" role="progressbar" :style="{ width: '75%' }">
            75%
          </div>
        </div>
        <div class="progress">
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
