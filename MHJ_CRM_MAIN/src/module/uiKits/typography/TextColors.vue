<template>
  <Card :cardClass="'height-equal'" :headerTitle="'Text Colors'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">You give text color by using <code>txt-*</code> classes.</p>
    </template>

    <div class="d-flex flex-column gap-2">
      <p class="txt-primary mb-0">
        The <code>"txt-primary" </code>class can be used to create an text like this one.
      </p>
      <p class="txt-secondary mb-0">
        The <code>"txt-secondary" </code>class can be used to create an text like this one.
      </p>
      <p class="txt-success mb-0">
        The <code>"txt-success" </code>class can be used to create an text like this one. class
      </p>
      <p class="txt-info mb-0">
        The <code>"txt-info" </code>class can be used to create an text like this one. class
      </p>
      <p class="txt-warning mb-0">
        The <code>"txt-warning" </code>class can be used to create an text like this one.
      </p>
      <p class="txt-danger mb-0">
        The <code>"txt-danger" </code>class can be used to create an text like this one.
      </p>
      <p class="txt-dark mb-0">
        The <code>"txt-dark" </code>class can be used to create an text like this one.
      </p>
    </div>
  </Card>
</template>
<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
