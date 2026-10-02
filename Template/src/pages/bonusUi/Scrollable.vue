<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-6">
        <CustomScrollbar />
      </div>
      <div class="col-xl-6">
        <SmallSizeScrollbar />
      </div>
      <div class="col-xxl-4 col-md-6">
        <BadgesScrollbar />
      </div>
      <div class="col-xxl-4 col-md-6">
        <ProfileScrollbar />
      </div>
      <div class="col-xxl-4 col-md-12">
        <ScrollableContent />
      </div>
      <div class="col-xl-6">
        <HorizontalScrollbar />
      </div>
      <div class="col-xl-6">
        <BothSideScrollbar />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const CustomScrollbar = defineAsyncComponent(
  () => import('@/module/bonusUi/scrollable/CustomScrollbar.vue')
)
const SmallSizeScrollbar = defineAsyncComponent(
  () => import('@/module/bonusUi/scrollable/SmallSizeScrollbar.vue')
)
const BadgesScrollbar = defineAsyncComponent(
  () => import('@/module/bonusUi/scrollable/BadgesScrollbar.vue')
)
const ProfileScrollbar = defineAsyncComponent(
  () => import('@/module/bonusUi/scrollable/ProfileScrollbar.vue')
)
const ScrollableContent = defineAsyncComponent(
  () => import('@/module/bonusUi/scrollable/ScrollableContent.vue')
)
const HorizontalScrollbar = defineAsyncComponent(
  () => import('@/module/bonusUi/scrollable/HorizontalScrollbar.vue')
)
const BothSideScrollbar = defineAsyncComponent(
  () => import('@/module/bonusUi/scrollable/BothSideScrollbar.vue')
)
</script>
