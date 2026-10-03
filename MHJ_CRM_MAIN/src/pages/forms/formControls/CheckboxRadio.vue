<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <DefaultCheckbox />
      </div>
      <div class="col-12">
        <CustomCheckbox />
      </div>
      <div class="col-12">
        <DefaultRadio />
      </div>
      <div class="col-12">
        <ImageCheckbox />
      </div>
      <div class="col-12">
        <ImageRadio />
      </div>
      <div class="col-12">
        <CustomRadioButton />
      </div>
      <div class="col-12">
        <DefaultSwitches />
      </div>
      <div class="col-12">
        <InlineInputTypes />
      </div>
      <div class="col-xl-6">
        <AnimatedButtons />
      </div>
      <div class="col-xl-6">
        <BasicRadioCheckbox />
      </div>
      <div class="col-md-6">
        <RadioToggleButton />
      </div>
      <div class="col-md-6">
        <OutlineCheckboxStyle />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const DefaultCheckbox = defineAsyncComponent(
  () => import('@/module/form/formControl/checkboxRadio/DefaultCheckbox.vue')
)
const CustomCheckbox = defineAsyncComponent(
  () => import('@/module/form/formControl/checkboxRadio/CustomCheckbox.vue')
)
const DefaultRadio = defineAsyncComponent(
  () => import('@/module/form/formControl/checkboxRadio/DefaultRadio.vue')
)
const ImageCheckbox = defineAsyncComponent(
  () => import('@/module/form/formControl/checkboxRadio/ImageCheckbox.vue')
)
const ImageRadio = defineAsyncComponent(
  () => import('@/module/form/formControl/checkboxRadio/ImageRadio.vue')
)
const CustomRadioButton = defineAsyncComponent(
  () => import('@/module/form/formControl/checkboxRadio/CustomRadioButton.vue')
)
const DefaultSwitches = defineAsyncComponent(
  () => import('@/module/form/formControl/checkboxRadio/DefaultSwitches.vue')
)
const InlineInputTypes = defineAsyncComponent(
  () => import('@/module/form/formControl/checkboxRadio/InlineInputTypes.vue')
)
const AnimatedButtons = defineAsyncComponent(
  () => import('@/module/form/formControl/checkboxRadio/AnimatedButtons.vue')
)
const BasicRadioCheckbox = defineAsyncComponent(
  () => import('@/module/form/formControl/checkboxRadio/BasicRadioCheckbox.vue')
)
const RadioToggleButton = defineAsyncComponent(
  () => import('@/module/form/formControl/checkboxRadio/RadioToggleButton.vue')
)
const OutlineCheckboxStyle = defineAsyncComponent(
  () => import('@/module/form/formControl/checkboxRadio/OutlineCheckboxStyle.vue')
)
</script>
