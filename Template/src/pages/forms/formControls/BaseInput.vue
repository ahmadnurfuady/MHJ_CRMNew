<template>
  <div class="container-fluid base-input">
    <div class="row">
      <div class="col-md-6">
        <BasicForm />
      </div>
      <div class="col-md-6">
        <FloatingForm />
      </div>
      <div class="col-md-6">
        <SelectSizing />
      </div>
      <div class="col-md-6">
        <FormControlSizing />
      </div>
      <div class="col-md-6">
        <FileInput />
      </div>
      <div class="col-md-6">
        <FlatInputStyle />
      </div>
      <div class="col-xl-6">
        <BasicInputControl />
      </div>
      <div class="col-xl-6">
        <BasicFloatingInputControl />
      </div>
      <div class="col-md-6">
        <EdgesInputStyle />
      </div>
      <div class="col-md-6">
        <RaiseInputStyle />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const BasicForm = defineAsyncComponent(
  () => import('@/module/form/formControl/baseInput/BasicForm.vue')
)
const FloatingForm = defineAsyncComponent(
  () => import('@/module/form/formControl/baseInput/FloatingForm.vue')
)
const SelectSizing = defineAsyncComponent(
  () => import('@/module/form/formControl/baseInput/SelectSizing.vue')
)
const FormControlSizing = defineAsyncComponent(
  () => import('@/module/form/formControl/baseInput/FormControlSizing.vue')
)
const FileInput = defineAsyncComponent(
  () => import('@/module/form/formControl/baseInput/FileInput.vue')
)
const FlatInputStyle = defineAsyncComponent(
  () => import('@/module/form/formControl/baseInput/FlatInputStyle.vue')
)
const BasicInputControl = defineAsyncComponent(
  () => import('@/module/form/formControl/baseInput/BasicInputControl.vue')
)
const BasicFloatingInputControl = defineAsyncComponent(
  () => import('@/module/form/formControl/baseInput/BasicFloatingInputControl.vue')
)
const EdgesInputStyle = defineAsyncComponent(
  () => import('@/module/form/formControl/baseInput/EdgesInputStyle.vue')
)
const RaiseInputStyle = defineAsyncComponent(
  () => import('@/module/form/formControl/baseInput/RaiseInputStyle.vue')
)
</script>
