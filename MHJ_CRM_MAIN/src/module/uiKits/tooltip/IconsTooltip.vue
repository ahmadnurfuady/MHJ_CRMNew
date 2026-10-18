<template>
  <Card
    :headerTitle="'Icons Tooltip'"
    :border="true"
    :padding="false"
    :cardBodyClass="'svg-tooltip'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>btn-outline-* </code>class to alter the outline's color, and you can position the
        tooltip in any swing.
      </p>
    </template>

    <div class="common-flex">
      <div class="btn-outline-primary" v-tooltip :title="'Notification'">
        <SolarIcon name="icofont-envelope" class="icofont" />
      </div>
      <div class="btn-outline-danger" v-tooltip :title="'Message'">
        <SolarIcon name="icofont-ui-text-loading" class="icofont" />
      </div>
      <div class="btn-outline-dark" v-tooltip :title="'Send'">
        <SolarIcon name="icofont-location-arrow" class="icofont" />
      </div>
      <div class="btn-outline-danger" v-tooltip :title="'Like'">
        <SolarIcon name="icofont-heart-alt" class="icofont" />
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
