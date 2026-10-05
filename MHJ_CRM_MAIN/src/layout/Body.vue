<template>
  <TapTop />
  <div class="page-wrapper" id="pageWrapper" :class="display ? 'compact-wrapper ' : layout">
    <div class="page-header" :class="{ close_icon: !uiState.show }">
      <Header />
    </div>
    <div class="page-body-wrapper">
      <div
        class="sidebar-wrapper"
        :data-layout="layoutState.svgIcon == 'stroke-svg' ? 'stroke-svg' : 'fill-svg'"
        :class="[{ close_icon: !uiState.show }]"
      >
        <Sidebar />
      </div>
      <div class="page-body">
        <BreadCrumbs />
        <router-view></router-view>
      </div>
      <Footer />
    </div>
  </div>
  <Customizer />
</template>
<script lang="ts" setup>
import { useLayout } from '@/store/layout'
import { useMenu } from '@/store/menu'
import { storeToRefs } from 'pinia'
import { useWindowSize } from '@vueuse/core'
import { defineAsyncComponent, onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { startPermissionWatcher, stopPermissionWatcher } from '@/services/permissionWatcher'

const Header = defineAsyncComponent(() => import('@/components/layout/header/Header.vue'))
const Sidebar = defineAsyncComponent(() => import('@/components/layout/sidebar/Sidebar.vue'))
const BreadCrumbs = defineAsyncComponent(
  () => import('@/components/layout/breadCrumb/BreadCrumbs.vue')
)
const TapTop = defineAsyncComponent(() => import('@/components/layout/tapToTop/TapTop.vue'))
const Footer = defineAsyncComponent(() => import('@/components/layout/footer/Footer.vue'))
const Customizer = defineAsyncComponent(
  () => import('@/components/layout/customizer/Customizer.vue')
)

const display = ref(false)
const layout = ref({})
const storeLayout = useLayout()
const { layoutState } = storeToRefs(storeLayout)
const store = useMenu()
const { uiState } = storeToRefs(store)
const { width } = useWindowSize()

watch(
  () => layoutState.value.layouts.settings.sidebarSetting,
  (newSetting) => {
    layout.value = newSetting
  }
)

watch(width, (newWidth) => {
  if (newWidth <= 1199) {
    display.value = true
    uiState.value.show = false
  } else {
    uiState.value.show = true
    display.value = false
  }
}, { immediate: true })

onMounted(() => {
  const savedLayout = localStorage.getItem('layout')

  if (savedLayout) {
    layoutState.value.layouts.settings.layout = savedLayout
  }

  layout.value = layoutState.value.layouts.settings.sidebarSetting
  startPermissionWatcher()
})

onBeforeUnmount(() => {
  stopPermissionWatcher()
})
</script>
