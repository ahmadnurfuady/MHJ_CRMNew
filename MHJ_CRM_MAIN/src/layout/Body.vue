<template>
  <TapTop target-id="page-content-scroll" />
  <div
    class="page-wrapper app-shell"
    id="pageWrapper"
    :class="display ? 'compact-wrapper ' : layout"
    :style="{ '--app-header-height': `${headerHeight}px` }"
  >
    <div ref="pageHeaderRef" class="page-header" :class="{ close_icon: !uiState.show }">
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
          <BreadCrumbs :refreshing="refreshingPage" @refresh="refreshCurrentPage" />
          <router-view v-slot="{ Component }">
            <component :is="Component" :key="`${route.fullPath}:${pageRefreshKey}`" />
          </router-view>
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
const layout = ref('')
const pageHeaderRef = ref<HTMLElement | null>(null)
const headerHeight = ref(79)
const pageScrollRef = ref<HTMLElement | null>(null)
const pageRefreshKey = ref(0)
const refreshingPage = ref(false)
let refreshIndicatorTimer: number | undefined
let headerResizeObserver: ResizeObserver | undefined
const route = useRoute()
const storeLayout = useLayout()
const { layoutState } = storeToRefs(storeLayout)
const store = useMenu()
const projectStore = useProjectStore()
const { uiState } = storeToRefs(store)
const { width } = useWindowSize()

async function refreshCurrentPage() {
  if (refreshingPage.value) return

  refreshingPage.value = true
  pageRefreshKey.value += 1
  await nextTick()

  if (refreshIndicatorTimer) window.clearTimeout(refreshIndicatorTimer)
  refreshIndicatorTimer = window.setTimeout(() => {
    refreshingPage.value = false
  }, 700)
}

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

  if (pageHeaderRef.value) {
    const updateHeaderHeight = () => {
      if (pageHeaderRef.value) {
        headerHeight.value = Math.ceil(pageHeaderRef.value.getBoundingClientRect().height)
      }
    }

    updateHeaderHeight()
    headerResizeObserver = new ResizeObserver(updateHeaderHeight)
    headerResizeObserver.observe(pageHeaderRef.value)
  }

  startPermissionWatcher()
  useNotificationStore().init()
})

onBeforeUnmount(() => {
  if (refreshIndicatorTimer) window.clearTimeout(refreshIndicatorTimer)
  headerResizeObserver?.disconnect()
  stopPermissionWatcher()
  useNotificationStore().stop()
})
</script>

<style scoped>
.app-shell {
  height: 100vh;
  height: 100dvh;
  overflow: visible;
}

:global(html),
:global(body),
:global(#app) {
  overflow-x: auto;
}

:global(body) {
  touch-action: pan-x pan-y pinch-zoom;
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

.app-shell.horizontal-wrapper .page-body-wrapper > .sidebar-wrapper {
  top: var(--app-header-height, 79px);
  border-top-color: rgba(255, 255, 255, 0.18);
  background-color: var(--theme-default, var(--app-primary, #18a6e4));
  box-shadow: 0 9px 24px rgba(var(--app-primary-dark-rgb, 3, 42, 78), 0.16);
}

.app-shell.horizontal-wrapper :deep(.sidebar-main > .left-arrow),
.app-shell.horizontal-wrapper :deep(.sidebar-main > .right-arrow) {
  color: #fff;
  background-color: var(--theme-default, var(--app-primary, #18a6e4));
}

.app-shell.horizontal-wrapper :deep(.sidebar-main > .left-arrow svg),
.app-shell.horizontal-wrapper :deep(.sidebar-main > .right-arrow svg) {
  stroke: #fff;
}

.app-shell.horizontal-wrapper
  :deep(.sidebar-links > .sidebar-list > .sidebar-link) {
  color: #fff !important;
  background-color: transparent !important;
}

.app-shell.horizontal-wrapper
  :deep(.sidebar-links > .sidebar-list > .sidebar-link:hover),
.app-shell.horizontal-wrapper
  :deep(.sidebar-links > .sidebar-list > .sidebar-link.active) {
  color: #fff !important;
  background-color: rgba(255, 255, 255, 0.16) !important;
}

.app-shell.horizontal-wrapper
  :deep(.sidebar-links > .sidebar-list > .sidebar-link > span) {
  color: #fff !important;
}

.app-shell.horizontal-wrapper
  :deep(.sidebar-links > .sidebar-list > .sidebar-link > svg) {
  width: 18px;
  height: 18px;
  margin-right: 10px;
  vertical-align: -2px;
  float: none;
  transition: all 0.3s ease;
}

.app-shell.horizontal-wrapper
  :deep(.sidebar-links > .sidebar-list > .sidebar-link > .sidebar-mhj-icon) {
  width: 18px;
  height: 18px;
  margin-right: 10px;
  filter: brightness(0) invert(1);
  opacity: 1;
  vertical-align: -2px;
  transition: filter 0.3s ease, opacity 0.3s ease;
}

.app-shell.horizontal-wrapper
  :deep(.sidebar-links > .sidebar-list > .sidebar-link > .solar-icon) {
  color: #fff !important;
  opacity: 1;
}

.app-shell.horizontal-wrapper
  :deep(.sidebar-links > .sidebar-list > .sidebar-link.active > .sidebar-mhj-icon),
.app-shell.horizontal-wrapper
  :deep(.sidebar-links > .sidebar-list > .sidebar-link:hover > .sidebar-mhj-icon),
.app-shell.horizontal-wrapper
  :deep(.sidebar-links > .sidebar-list > .sidebar-link.active > .solar-icon),
.app-shell.horizontal-wrapper
  :deep(.sidebar-links > .sidebar-list > .sidebar-link:hover > .solar-icon) {
  opacity: 1;
}

.app-shell.horizontal-wrapper .page-body-wrapper > .page-body {
  height: calc(100vh - var(--app-header-height, 79px) - 54px);
  height: calc(100dvh - var(--app-header-height, 79px) - 54px);
  margin-top: calc(var(--app-header-height, 79px) + 54px) !important;
}

.page-content-scroll {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior-x: auto;
  overscroll-behavior-y: contain;
  scrollbar-gutter: stable;
  touch-action: pan-x pan-y pinch-zoom;
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
  overscroll-behavior-x: auto;
  overscroll-behavior-y: contain;
  scrollbar-gutter: stable;
  scrollbar-color: rgba(255, 255, 255, 0.45) transparent;
  scrollbar-width: thin;
  touch-action: pan-x pan-y pinch-zoom;
}

.app-shell.compact-wrapper
  :deep(.sidebar-mhj-icon[data-mhj-icon='nav_task'] svg path) {
  stroke: #fff !important;
  stroke-width: 1 !important;
  stroke-linejoin: round;
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
