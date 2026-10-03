<template>
  <Card
    :cardClass="'common-hover'"
    :headerTitle="'Border Left'"
    :header="'border-l-primary'"
    :border="true"
    :padding="false"
  >
    <template #header5>
      <p class="mt-1 f-m-light">Use class of <code> border-*</code> for the left border.</p>
    </template>
    <p>
      You can design your creative card by taking only the
      <strong>border-l-primary </strong> class. If you want to use other colors like this:
      <strong>border-l-*</strong><br /><strong>Visit Us: </strong> 2600 Hollywood Blvd,Florida,
      United States- 33020<br /><strong>Mail Us:</strong>contact&#64;us&#64;gmail.com<br /><strong
        >Contact Number: </strong
      >(954) 357-7760
    </p>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
