<template>
  <Card :headerTitle="'Colored Tooltip'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>btn-*</code> to change dark background color and
        <code>data-bs-placement='*' </code>to tooltip positions change.
      </p>
    </template>
    <div class="common-flex">
      <button class="mb-0 me-0 btn btn-primary" v-tooltip :title="'Primary'">Primary</button>
      <button class="mb-0 me-0 btn btn-secondary" v-tooltip :title="'Secondary'">Secondary</button>
      <button class="mb-0 me-0 btn btn-warning" v-tooltip :title="'Warning'">Warning</button>
      <button class="mb-0 me-0 btn btn-success" v-tooltip :title="'Success'">Success</button>
      <button class="mb-0 me-0 btn btn-danger" v-tooltip :title="'Danger'">Danger</button>
      <button class="mb-0 me-0 btn btn-info" v-tooltip :title="'info'">Info</button>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
