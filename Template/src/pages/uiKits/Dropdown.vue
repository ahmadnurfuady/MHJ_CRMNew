<template>
  <div class="container-fluid">
    <div class="row main-dropdown">
      <div class="col-xl-6">
        <BasicDropdowns />
      </div>
      <div class="col-xl-6">
        <RoundedDropdowns />
      </div>
      <div class="col-sm-12 col-xl-12">
        <SplitDropdowns />
      </div>
      <div class="col-xl-4 col-md-6">
        <HeadingDropdown />
      </div>
      <div class="col-xl-4 col-md-6">
        <WithInputDropdown />
      </div>
      <div class="col-xl-4 col-md-6 order-xl-0 order-lg-5">
        <DarkDropdown />
      </div>
      <div class="col-md-6 order-xxl-0 order-lg-3">
        <Card
          :headerTitle="'Unique Dropdown'"
          :border="true"
          :padding="false"
          :cardBodyClass="'rtl-dropdown'"
        >
          <template #header5>
            <p class="f-m-light mt-1">Unique way to represent form dropdown and text dropdown.</p>
          </template>
          <div class="common-flex">
            <UniqueDropdown />
          </div>
        </Card>
      </div>
      <div class="col-lg-6 order-xxl-0 order-lg-2">
        <JustifyContentsDropdown />
      </div>
      <div class="col-lg-12">
        <AlignmentOptionsDropdown />
      </div>
      <div class="col-lg-6 order-xxl-0 order-lg-4">
        <HelperCardsDropdown />
      </div>
      <div class="col-lg-6 order-xxl-0 order-lg-1">
        <DividerDropdowns />
      </div>
      <div class="col-md-12">
        <DropdownSizing />
      </div>
      <div class="col-xl-12 col-lg-6">
        <DropdownOptions />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const BasicDropdowns = defineAsyncComponent(
  () => import('@/module/uiKits/dropdown/BasicDropdowns.vue')
)
const RoundedDropdowns = defineAsyncComponent(
  () => import('@/module/uiKits/dropdown/RoundedDropdowns.vue')
)
const SplitDropdowns = defineAsyncComponent(
  () => import('@/module/uiKits/dropdown/SplitDropdowns.vue')
)
const HeadingDropdown = defineAsyncComponent(
  () => import('@/module/uiKits/dropdown/HeadingDropdown.vue')
)
const WithInputDropdown = defineAsyncComponent(
  () => import('@/module/uiKits/dropdown/WithInputDropdown.vue')
)
const DarkDropdown = defineAsyncComponent(() => import('@/module/uiKits/dropdown/DarkDropdown.vue'))
const UniqueDropdown = defineAsyncComponent(
  () => import('@/module/uiKits/dropdown/UniqueDropdown.vue')
)
const JustifyContentsDropdown = defineAsyncComponent(
  () => import('@/module/uiKits/dropdown/JustifyContentsDropdown.vue')
)
const AlignmentOptionsDropdown = defineAsyncComponent(
  () => import('@/module/uiKits/dropdown/AlignmentOptionsDropdown.vue')
)
const HelperCardsDropdown = defineAsyncComponent(
  () => import('@/module/uiKits/dropdown/HelperCardsDropdown.vue')
)
const DividerDropdowns = defineAsyncComponent(
  () => import('@/module/uiKits/dropdown/DividerDropdowns.vue')
)
const DropdownSizing = defineAsyncComponent(
  () => import('@/module/uiKits/dropdown/DropdownSizing.vue')
)
const DropdownOptions = defineAsyncComponent(
  () => import('@/module/uiKits/dropdown/DropdownOptions.vue')
)
</script>
