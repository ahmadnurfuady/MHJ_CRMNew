<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <CustomSwitch />
      </div>
      <CommonSwitch />
      <div class="col-md-6">
        <DisabledOutlineSwitch />
      </div>
      <div class="col-md-6">
        <VariationSwitches />
      </div>
      <div class="col-md-12">
        <SwitchSizing />
      </div>
      <div class="col-md-12">
        <SwitchIcons />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const CustomSwitch = defineAsyncComponent(
  () => import('@/module/form/formWidgets/switch/CustomSwitch.vue')
)
const CommonSwitch = defineAsyncComponent(
  () => import('@/module/form/formWidgets/switch/CommonSwitch.vue')
)
const DisabledOutlineSwitch = defineAsyncComponent(
  () => import('@/module/form/formWidgets/switch/DisabledOutlineSwitch.vue')
)
const VariationSwitches = defineAsyncComponent(
  () => import('@/module/form/formWidgets/switch/VariationSwitches.vue')
)
const SwitchSizing = defineAsyncComponent(
  () => import('@/module/form/formWidgets/switch/SwitchSizing.vue')
)
const SwitchIcons = defineAsyncComponent(
  () => import('@/module/form/formWidgets/switch/SwitchIcons.vue')
)
</script>
