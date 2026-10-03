<template>
  <Card
    :headerTitle="'Dismissing Light Alert'"
    :border="true"
    :padding="false"
    :cardBodyClass="'dark-alert-msg'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>alert-light-*</code> class can be used to generate a light alerts and<code>
          alert-dismissible</code
        >
        utility class to remove the alerts.
      </p>
    </template>

    <div class="alert alert-light-warning alert-dismissible fade show" role="alert">
      <vue-feather :type="'bell'" />
      <p>
        The
        <a class="alert-link txt-warning" href="#">"alert-bg-warning" </a>class can
        be used to create an alert like this one.
      </p>
      <button class="btn-close" type="button" data-bs-dismiss="alert"></button>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
