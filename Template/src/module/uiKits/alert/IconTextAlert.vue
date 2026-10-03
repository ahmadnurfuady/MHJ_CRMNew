<template>
  <Card
    :headerTitle="'Alerts with Icons and Text Actions'"
    :border="true"
    :padding="false"
    :cardBodyClass="'dark-txt alert-text-action'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>border-*</code> class to add dismiss text instead of icon.
      </p>
    </template>
    <div class="alert border-warning alert-dismissible fade show p-0" role="alert">
      <div class="alert-arrow bg-warning"><i class="icon-timer"></i></div>
      <p>Your time Over after <strong class="txt-dark"> 5</strong> minute</p>
      <button class="p-0 border-0 me-2 ms-auto" type="button" data-bs-dismiss="alert">
        <span class="bg-warning px-3 py-1">Check</span>
      </button>
    </div>
    <div class="alert border-danger alert-dismissible fade show p-0 mb-0" role="alert">
      <div class="alert-arrow bg-danger"><i class="icon-heart"></i></div>
      <p>Oh snap! Change a few things up <strong class="txt-dark"> Notification check</strong></p>
      <button class="p-0 border-0 me-2 ms-auto" type="button" data-bs-dismiss="alert">
        <span class="bg-danger text-white px-3 py-1">Alert</span>
      </button>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
