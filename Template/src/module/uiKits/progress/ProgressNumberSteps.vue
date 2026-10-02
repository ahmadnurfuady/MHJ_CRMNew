<template>
  <Card :headerTitle="'Progress with Number Steps'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use the <code> position-absolute </code>to set progress numbers steps.
      </p>
    </template>
    <div class="position-relative m-3 progress-number">
      <div class="progress progress-wrapper">
        <div
          class="progress-bar"
          role="progressbar"
          aria-label="Progress"
          :style="{ width: '50%' }"
        ></div>
      </div>
      <button
        class="position-absolute top-0 start-0 translate-middle btn-sm btn-primary rounded-circle"
        type="button"
      >
        1
      </button>
      <button
        class="position-absolute top-0 start-50 translate-middle btn-sm btn-primary rounded-circle"
        type="button"
      >
        2
      </button>
      <button
        class="progress-btn position-absolute top-0 start-100 translate-middle btn-sm rounded-circle"
        type="button"
      >
        3
      </button>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
