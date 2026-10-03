<template>
  <Card :headerTitle="'Light Tooltips'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>button-light-*</code> to change light background color and
        <code>data-bs-placement='*' </code>to tooltip positions change.
      </p>
    </template>

    <div class="common-flex">
      <button class="mb-0 me-0 btn button-light-primary" v-tooltip :title="'Primary'">
        Primary
      </button>
      <button class="mb-0 me-0 btn button-light-secondary" v-tooltip :title="'Secondary'">
        Secondary
      </button>
      <button class="mb-0 me-0 btn button-light-warning" v-tooltip :title="'Warning'">
        Warning
      </button>
      <button class="mb-0 me-0 btn button-light-success" v-tooltip :title="'Success'">
        Success
      </button>
      <button class="mb-0 me-0 btn button-light-danger" v-tooltip :title="'Danger'">Danger</button>
      <button class="mb-0 me-0 btn button-light-info" v-tooltip :title="'info'">Info</button>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
