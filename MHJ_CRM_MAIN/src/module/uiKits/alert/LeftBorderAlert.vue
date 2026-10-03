<template>
  <Card
    :cardClass="'height-equal'"
    :headerTitle="'Left Border Alert'"
    :border="true"
    :padding="false"
    :cardBodyClass="'live-dark dark-alert-msg'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>border-left-*</code> class to add left border to alert.
      </p>
    </template>

    <div
      class="alert alert-light-dark light alert-dismissible fade show txt-dark border-left-dark"
      role="alert"
    >
      <vue-feather :type="'help-circle'" />
      <p>Dark Alert: border-left-wrapper</p>
      <button class="btn-close" type="button" data-bs-dismiss="alert"></button>
    </div>
    <div
      class="alert alert-light-secondary light alert-dismissible fade show txt-secondary border-left-secondary"
      role="alert"
    >
      <vue-feather :type="'alert-octagon'" />
      <p>Secondary Alert: border-left-secondary</p>
      <button class="btn-close" type="button" data-bs-dismiss="alert"></button>
    </div>
    <div
      class="alert alert-light-success light alert-dismissible fade show txt-success border-left-success"
      role="alert"
    >
      <vue-feather :type="'check-square'" />
      <p>Success Alert: border-left-success</p>
      <button class="btn-close" type="button" data-bs-dismiss="alert"></button>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
