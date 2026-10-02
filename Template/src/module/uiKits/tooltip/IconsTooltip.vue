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
        <i class="icofont icofont-envelope"></i>
      </div>
      <div class="btn-outline-danger" v-tooltip :title="'Message'">
        <i class="icofont icofont-ui-text-loading"></i>
      </div>
      <div class="btn-outline-dark" v-tooltip :title="'Send'">
        <i class="icofont icofont-location-arrow"></i>
      </div>
      <div class="btn-outline-danger" v-tooltip :title="'Like'">
        <i class="icofont icofont-heart-alt"></i>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
