<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-6">
        <NumberingWizard />
      </div>
      <div class="col-xl-6">
        <StudentValidationForm />
      </div>
      <div class="col-md-12">
        <VerticalValidationWizard />
      </div>
      <div class="col-md-12">
        <ShippingForm />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const NumberingWizard = defineAsyncComponent(
  () => import('@/module/form/formLayout/formWizardOne/numberingWizard/NumberingWizard.vue')
)
const StudentValidationForm = defineAsyncComponent(
  () =>
    import('@/module/form/formLayout/formWizardOne/studentValidationForm/StudentValidationForm.vue')
)
const VerticalValidationWizard = defineAsyncComponent(
  () =>
    import(
      '@/module/form/formLayout/formWizardOne/verticalValidationWizard/VerticalValidationWizard.vue'
    )
)
const ShippingForm = defineAsyncComponent(
  () => import('@/module/form/formLayout/formWizardOne/shippingForm/ShippingForm.vue')
)
</script>
