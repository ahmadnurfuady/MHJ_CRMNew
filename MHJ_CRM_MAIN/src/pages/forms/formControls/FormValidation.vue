<template>
  <div class="container-fluid form-validation">
    <div class="row">
      <div class="col-sm-12">
        <TooltipFormValidation />
      </div>
      <div class="col-xl-6">
        <BrowserDefault />
      </div>
      <div class="col-xl-6">
        <ValidationForm />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const TooltipFormValidation = defineAsyncComponent(
  () => import('@/module/form/formControl/formValidation/TooltipFormValidation.vue')
)
const BrowserDefault = defineAsyncComponent(
  () => import('@/module/form/formControl/formValidation/BrowserDefault.vue')
)
const ValidationForm = defineAsyncComponent(
  () => import('@/module/form/formControl/formValidation/ValidationForm.vue')
)
</script>
