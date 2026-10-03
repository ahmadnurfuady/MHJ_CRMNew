<template>
  <Card :headerTitle="'Default Calendar'" :cardBodyClass="'card-wrapper'">
    <template #header5>
      <p class="f-m-light mt-1">
        Display the calendar in an always-open state with the<code> inline </code>option.
      </p>
    </template>
    <div class="row g-3">
      <div class="col-12">
        <div class="input-group main-inline-calender">
          <Flatpickr v-model="date" :config="config" class="form-control" />
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const date = ref(new Date())
const config = ref({
  inline: true,
  dateFormat: 'Y-m-d',
})
</script>
