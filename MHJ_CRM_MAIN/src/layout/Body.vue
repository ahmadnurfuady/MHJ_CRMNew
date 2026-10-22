<template>
  <TapTop target-id="page-content-scroll" />
  <div
    class="page-wrapper app-shell"
    id="pageWrapper"
    :class="display ? 'compact-wrapper ' : layout"
  >
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
        <div id="page-content-scroll" ref="pageScrollRef" class="page-content-scroll">
          <BreadCrumbs />
          <router-view></router-view>
          <Footer />
        </div>
      </div>
    </div>
  </div>
  <Customizer />
  <ProjectCreateModal v-if="projectStore.createModalOpen" />
</template>
<script lang="ts" setup>
import { useLayout } from '@/store/layout'
import { useMenu } from '@/store/menu'
import { storeToRefs } from 'pinia'
import { useWindowSize } from '@vueuse/core'
import { defineAsyncComponent, nextTick, onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { startPermissionWatcher, stopPermissionWatcher } from '@/services/permissionWatcher'
import { useProjectStore } from '@/store/project'
import { useNotificationStore } from '@/store/notification'

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
const ProjectCreateModal = defineAsyncComponent(
  () => import('@/module/project/projectCreate/ProjectCreateModal.vue')
)

const display = ref(false)
const layout = ref({})
const pageScrollRef = ref<HTMLElement | null>(null)
const route = useRoute()
const storeLayout = useLayout()
const { layoutState } = storeToRefs(storeLayout)
const store = useMenu()
const projectStore = useProjectStore()
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

watch(
  () => route.fullPath,
  async () => {
    await nextTick()
    pageScrollRef.value?.scrollTo({ top: 0, behavior: 'auto' })
  },
)

onMounted(() => {
  const savedLayout = localStorage.getItem('layout')

  if (savedLayout) {
    layoutState.value.layouts.settings.layout = savedLayout
  }

  layout.value = layoutState.value.layouts.settings.sidebarSetting
  startPermissionWatcher()
  useNotificationStore().init()
})

onBeforeUnmount(() => {
  stopPermissionWatcher()
  useNotificationStore().stop()
})
</script>

<style scoped>
.app-shell {
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
}

.app-shell .page-body-wrapper {
  height: 100%;
  overflow: hidden;
}

.app-shell .page-body {
  box-sizing: border-box;
  height: calc(100vh - 136px);
  height: calc(100dvh - 136px);
  min-height: 0;
  padding-right: 0 !important;
  padding-bottom: 0 !important;
  padding-left: 0 !important;
  overflow: hidden;
}

.app-shell.compact-wrapper .page-body {
  height: calc(100vh - 56px);
  height: calc(100dvh - 56px);
}

.app-shell.horizontal-wrapper .page-body {
  height: calc(100vh - 110px);
  height: calc(100dvh - 110px);
}

.page-content-scroll {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-gutter: stable;
}

.page-content-scroll :deep(.footer) {
  width: 100%;
  margin-top: auto;
  margin-right: 0 !important;
  margin-left: 0 !important;
}

.app-shell.compact-wrapper :deep(.sidebar-wrapper) {
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
}

.app-shell.compact-wrapper :deep(.sidebar-wrapper > .logo-wrapper),
.app-shell.compact-wrapper :deep(.sidebar-wrapper > .logo-icon-wrapper) {
  flex: 0 0 auto;
}

.app-shell.compact-wrapper :deep(.sidebar-main) {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
}

.app-shell.compact-wrapper :deep(#sidebar-menu) {
  flex: 1 1 auto;
  min-height: 0;
  overflow: hidden;
}

.app-shell.compact-wrapper :deep(.sidebar-links) {
  box-sizing: border-box;
  height: 100% !important;
  min-height: 0;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  padding-top: 20px;
  padding-bottom: 32px;
  overflow-x: hidden !important;
  overflow-y: auto !important;
  overscroll-behavior: contain;
  scrollbar-gutter: stable;
  scrollbar-color: rgba(255, 255, 255, 0.45) transparent;
  scrollbar-width: thin;
}

.app-shell.compact-wrapper :deep(.sidebar-links::-webkit-scrollbar) {
  width: 5px;
}

.app-shell.compact-wrapper :deep(.sidebar-links::-webkit-scrollbar-thumb) {
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.45);
}

@media (max-width: 1199.98px) {
  .app-shell.compact-wrapper .page-body {
    height: calc(100vh - 78px);
    height: calc(100dvh - 78px);
  }
}

@media (max-width: 767.98px) {
  .app-shell.compact-wrapper .page-body {
    height: calc(100vh - 57px);
    height: calc(100dvh - 57px);
  }
}
</style>
