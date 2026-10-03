<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-6">
        <DefaultCalendar />
      </div>
      <div class="col-xl-6">
        <BootstrapCalendar />
      </div>
      <div class="col-xl-6">
        <DatePicker />
      </div>
      <div class="col-xl-6">
        <TimePicker />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const DefaultCalendar = defineAsyncComponent(
  () => import('@/module/form/formWidgets/datePicker/DefaultCalendar.vue')
)
const BootstrapCalendar = defineAsyncComponent(
  () => import('@/module/form/formWidgets/datePicker/BootstrapCalendar.vue')
)
const DatePicker = defineAsyncComponent(
  () => import('@/module/form/formWidgets/datePicker/DatePicker.vue')
)
const TimePicker = defineAsyncComponent(
  () => import('@/module/form/formWidgets/datePicker/TimePicker.vue')
)
</script>
