<template>
  <Card :headerTitle="'Dismissing Dark Alert'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>alert-*</code> class can be used to generate a dark alerts and<code>
          alert-dismissible</code
        >
        utility class to remove the alerts.
      </p>
    </template>

    <div class="alert alert-dark dark alert-dismissible fade show" role="alert">
      <vue-feather :type="'heart'" />
      <p class="txt-light">
        The <a class="alert-link txt-light" href="#">"alert-dark" </a>class can be
        used to create an alert like this one.
      </p>
      <button class="btn-close" type="button" data-bs-dismiss="alert"></button>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
