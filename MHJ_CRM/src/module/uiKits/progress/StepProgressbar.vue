<template>
  <Card
    :headerTitle="'Step Progressbar'"
    :border="true"
    :padding="false"
    :cardBodyClass="'progress-showcase step-progress-wrapper'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code> step-progress-wrapper</code> class to make step progressbar.
      </p>
    </template>

    <div class="step-progress-box">
      <ul class="custom-scrollbar">
        <li v-for="(step, index) in stepProgressBar" :key="index">
          <vue-feather :type="step.icon" :class="'bookmark-search'" />
          <div
            class="p-step"
            :class="[{ active: index <= activeStep }, step.value]"
            @click="handleStep(index)"
          >
            <p>{{ index + 1 }}</p>
            <vue-feather :type="'check'" :class="'bookmark-search'" />
          </div>
          <h6>{{ step.title }}</h6>
        </li>
      </ul>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { stepProgressBar } from '@/core/data/uiKits/progressBar'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const activeStep = ref<number>(2)

function handleStep(index: number) {
  activeStep.value = index
}
</script>
