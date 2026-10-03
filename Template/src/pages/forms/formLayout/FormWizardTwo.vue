<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <CustomWizard />
      </div>
      <div class="col-sm-12">
        <BusinessWizard :type="'vertical'" />
      </div>
      <div class="col-sm-12">
        <CustomWizard :type="'vertical'" :title="'Custom Vertical Wizard'" />
      </div>
      <div class="col-sm-12">
        <BusinessWizard :title="'Business Horizontal Wizard'" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const CustomWizard = defineAsyncComponent(
  () => import('@/module/form/formLayout/formWizardTwo/customWizard/CustomWizard.vue')
)
const BusinessWizard = defineAsyncComponent(
  () => import('@/module/form/formLayout/formWizardTwo/businessWizard/BusinessWizard.vue')
)
</script>
