<template>
  <div
    class="tab-pane fade show active"
    id="c-pills-home"
    role="tabpanel"
    aria-labelledby="c-pills-home-tab"
  >
    <LayoutType />
    <SidebarType />
    <SidebarIcon />
    <CustomColor />
    <ColorLayout />
    <MixLayout />
  </div>
</template>
<script lang="ts" setup>
import { useMenu } from '@/store/menu'
import { defineAsyncComponent } from 'vue'
const LayoutType = defineAsyncComponent(
  () => import('@/components/layout/customizer/LayoutType.vue')
)
const SidebarType = defineAsyncComponent(
  () => import('@/components/layout/customizer/SidebarType.vue')
)
const SidebarIcon = defineAsyncComponent(
  () => import('@/components/layout/customizer/SidebarIcon.vue')
)
const CustomColor = defineAsyncComponent(
  () => import('@/components/layout/customizer/CustomColor.vue')
)
const MixLayout = defineAsyncComponent(() => import('@/components/layout/customizer/MixLayout.vue'))
const ColorLayout = defineAsyncComponent(
  () => import('@/components/layout/customizer/ColorLayout.vue')
)
</script>
