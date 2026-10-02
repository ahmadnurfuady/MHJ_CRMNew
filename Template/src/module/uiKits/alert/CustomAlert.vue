<template>
  <Card
    :cardClass="'height-equal'"
    :headerTitle="'Custom Alert Popup'"
    :border="true"
    :padding="false"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use<code> alert </code>class can be used to generate a custom alert.
      </p>
    </template>
    <div class="alert-box">
      <div class="alert alert-dismissible justify-content-center p-0 fade show" role="alert">
        <div class="alert-body">
          <SvgIcon :icon="'alert-popup'" />
          <h6 class="mb-1">A Crucial Update is Now Available</h6>
          <p>
            For improved security and functionality, install the most recent version right away.
          </p>
          <div class="button-box">
            <button class="btn light-background">Later</button>
            <button class="btn btn-warning">Right Now</button>
          </div>
        </div>
        <button class="btn-close" type="button" data-bs-dismiss="alert"></button>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
</script>
