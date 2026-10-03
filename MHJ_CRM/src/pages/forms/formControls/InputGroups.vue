<template>
  <div class="container-fluid main-input-group">
    <div class="row">
      <div class="col-md-6">
        <ButtonAddons />
      </div>
      <div class="col-md-6">
        <CustomForms />
      </div>
      <div class="col-xl-6">
        <CustomFileInput />
      </div>
      <div class="col-xl-6">
        <ButtonDropdown />
      </div>
      <div class="col-md-6">
        <SegmentedButtons />
      </div>
      <div class="col-md-6">
        <CheckboxRadioField />
      </div>
      <div class="col-md-6">
        <SizingGroup />
      </div>
      <div class="col-md-6">
        <MultipleInputs />
      </div>
      <div class="col-xl-6">
        <BasicInputGroups />
      </div>
      <div class="col-xl-6">
        <VariationAddons />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const ButtonAddons = defineAsyncComponent(
  () => import('@/module/form/formControl/inputGroups/ButtonAddons.vue')
)
const CustomForms = defineAsyncComponent(
  () => import('@/module/form/formControl/inputGroups/CustomForms.vue')
)
const CustomFileInput = defineAsyncComponent(
  () => import('@/module/form/formControl/inputGroups/CustomFileInput.vue')
)
const ButtonDropdown = defineAsyncComponent(
  () => import('@/module/form/formControl/inputGroups/ButtonDropdown.vue')
)
const SegmentedButtons = defineAsyncComponent(
  () => import('@/module/form/formControl/inputGroups/SegmentedButtons.vue')
)
const CheckboxRadioField = defineAsyncComponent(
  () => import('@/module/form/formControl/inputGroups/CheckboxRadioField.vue')
)
const SizingGroup = defineAsyncComponent(
  () => import('@/module/form/formControl/inputGroups/SizingGroup.vue')
)
const MultipleInputs = defineAsyncComponent(
  () => import('@/module/form/formControl/inputGroups/MultipleInputs.vue')
)
const BasicInputGroups = defineAsyncComponent(
  () => import('@/module/form/formControl/inputGroups/BasicInputGroups.vue')
)
const VariationAddons = defineAsyncComponent(
  () => import('@/module/form/formControl/inputGroups/VariationAddons.vue')
)
</script>
