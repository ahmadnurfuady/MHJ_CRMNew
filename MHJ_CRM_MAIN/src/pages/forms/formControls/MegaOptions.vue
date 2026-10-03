<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <VariationRadio />
      </div>
      <div class="col-sm-12">
        <VariationCheckbox />
      </div>
      <div class="col-sm-12 col-xxl-6 box-col-6">
        <DefaultStyle />
      </div>
      <div class="col-sm-12 col-xxl-6 box-col-6">
        <WithoutBordersStyle />
      </div>
      <div class="col-sm-12 col-xxl-6 box-col-6">
        <SolidBorderStyle />
      </div>
      <div class="col-sm-12 col-xxl-6 box-col-6">
        <OfferStyleBorder />
      </div>
      <div class="col-sm-12">
        <InlineStyle />
      </div>
      <div class="col-sm-12 col-xxl-6 box-col-12">
        <VerticalStyle />
      </div>
      <div class="col-sm-12 col-xxl-6 box-col-12">
        <HorizontalStyle />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const VariationRadio = defineAsyncComponent(
  () => import('@/module/form/formControl/megaOptions/VariationRadio.vue')
)
const VariationCheckbox = defineAsyncComponent(
  () => import('@/module/form/formControl/megaOptions/VariationCheckbox.vue')
)
const DefaultStyle = defineAsyncComponent(
  () => import('@/module/form/formControl/megaOptions/DefaultStyle.vue')
)
const WithoutBordersStyle = defineAsyncComponent(
  () => import('@/module/form/formControl/megaOptions/WithoutBordersStyle.vue')
)
const SolidBorderStyle = defineAsyncComponent(
  () => import('@/module/form/formControl/megaOptions/SolidBorderStyle.vue')
)
const OfferStyleBorder = defineAsyncComponent(
  () => import('@/module/form/formControl/megaOptions/OfferStyleBorder.vue')
)
const InlineStyle = defineAsyncComponent(
  () => import('@/module/form/formControl/megaOptions/InlineStyle.vue')
)
const VerticalStyle = defineAsyncComponent(
  () => import('@/module/form/formControl/megaOptions/VerticalStyle.vue')
)
const HorizontalStyle = defineAsyncComponent(
  () => import('@/module/form/formControl/megaOptions/HorizontalStyle.vue')
)
</script>
