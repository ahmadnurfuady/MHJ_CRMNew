<template>
  <Card :headerTitle="'Aspect Ratios'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Aspect ratios can be customized with modifier classes. By default the following ratio
        classes are provided:<code>[ratio-1x1 / ratio-4x3 / ratio-16x9 / ratio-21x9]</code>.
      </p>
    </template>
    <div class="row gap-lg-0 gap-4">
      <div class="col-lg-3" v-for="details in aspectRatios" :key="details.id">
        <div :class="`ratio ratio-${details.class}`">
          <iframe
            src="https://www.youtube.com/embed/FjFWBcQPzSI?si=ZNk3GFvFTpZkPRlU"
            title="YouTube video"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { aspectRatios } from '@/core/data/bonusUI/ratios'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
