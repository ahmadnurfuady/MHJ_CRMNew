<template>
  <div class="container-fluid">
    <div class="select2-drpdwn">
      <div class="row">
        <div class="col-md-12">
          <SingleValueSelect />
        </div>
        <div class="col-sm-6">
          <DefaultSelect />
        </div>
        <div class="col-sm-6">
          <SlotTemplate />
        </div>
        <div class="col-sm-6">
          <SelectableTag />
        </div>
        <div class="col-sm-6">
          <ValidationTag />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const SingleValueSelect = defineAsyncComponent(
  () => import('@/module/form/formWidgets/select/SingleValueSelect.vue')
)
const DefaultSelect = defineAsyncComponent(
  () => import('@/module/form/formWidgets/select/DefaultSelect.vue')
)
const SlotTemplate = defineAsyncComponent(
  () => import('@/module/form/formWidgets/select/SlotTemplate.vue')
)
const SelectableTag = defineAsyncComponent(
  () => import('@/module/form/formWidgets/select/SelectableTag.vue')
)
const ValidationTag = defineAsyncComponent(
  () => import('@/module/form/formWidgets/select/ValidationTag.vue')
)
</script>
