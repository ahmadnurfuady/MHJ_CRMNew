<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-4 col-md-6">
        <DefaultList />
      </div>
      <div class="col-xl-4 col-md-6">
        <ActiveLists />
      </div>
      <div class="col-xl-4 col-md-12">
        <FlushLists />
      </div>
      <div class="col-xxl-6 col-sm-12 box-col-12">
        <ContextualClassesList />
      </div>
      <div class="col-xxl-6 col-12 box-col-12">
        <HorizontalLists />
      </div>
      <div class="col-md-12">
        <CustomContentLists />
      </div>
      <div class="col-xl-4 col-md-6">
        <CheckboxList />
      </div>
      <div class="col-xl-4 col-md-6">
        <RadioList />
      </div>
      <div class="col-xl-4 col-12">
        <NumberList />
      </div>
      <div class="col-sm-12 col-xl-12">
        <JavaScriptBehaviorList />
      </div>
      <div class="col-xxl-4 col-md-6">
        <NumberBadgeList />
      </div>
      <div class="col-xxl-4 col-md-6">
        <DisabledLists />
      </div>
      <div class="col-xxl-4">
        <ScrollableLists />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const DefaultList = defineAsyncComponent(() => import('@/module/uiKits/lists/DefaultList.vue'))
const ActiveLists = defineAsyncComponent(() => import('@/module/uiKits/lists/ActiveLists.vue'))
const FlushLists = defineAsyncComponent(() => import('@/module/uiKits/lists/FlushLists.vue'))
const ContextualClassesList = defineAsyncComponent(
  () => import('@/module/uiKits/lists/ContextualClassesList.vue')
)
const HorizontalLists = defineAsyncComponent(
  () => import('@/module/uiKits/lists/HorizontalLists.vue')
)
const CustomContentLists = defineAsyncComponent(
  () => import('@/module/uiKits/lists/CustomContentLists.vue')
)
const CheckboxList = defineAsyncComponent(() => import('@/module/uiKits/lists/CheckboxList.vue'))
const RadioList = defineAsyncComponent(() => import('@/module/uiKits/lists/RadioList.vue'))
const NumberList = defineAsyncComponent(() => import('@/module/uiKits/lists/NumberList.vue'))
const JavaScriptBehaviorList = defineAsyncComponent(
  () => import('@/module/uiKits/lists/JavaScriptBehaviorList.vue')
)
const NumberBadgeList = defineAsyncComponent(
  () => import('@/module/uiKits/lists/NumberBadgeList.vue')
)
const DisabledLists = defineAsyncComponent(() => import('@/module/uiKits/lists/DisabledLists.vue'))
const ScrollableLists = defineAsyncComponent(
  () => import('@/module/uiKits/lists/ScrollableLists.vue')
)
</script>
