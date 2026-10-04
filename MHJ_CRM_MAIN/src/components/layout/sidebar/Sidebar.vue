<template>
  <Logo />
  <nav class="sidebar-main">
    <li class="left-arrow" :class="{ disabled: sidebar.hideLeftArrow }" @click="arrowLeft">
      <vue-feather type="arrow-left"></vue-feather>
    </li>
    <div id="sidebar-menu">
      <ul
        class="sidebar-links custom-scrollbar d-flex flex-column"
        id="simple-bar"
        :style="[
          layoutObject?.includes('horizontal-wrapper')
            ? { 'margin-left': sidebar.margin + 'px' }
            : {},
        ]"
      >
        <li class="back-btn">
          <router-link :to="routes.Dashboards.Default">
            <img class="img-fluid" :src="getImages('logo/logo-icon.png')" alt="images" />
          </router-link>
          <div class="mobile-back text-end">
            <span>Back</span><i class="fa-solid fa-angle-right ps-2" aria-hidden="true"></i>
          </div>
        </li>
        <li class="pin-title sidebar-main-title" :class="menuState.pinedArray.length ? 'show' : ''">
          <div>
            <h6>Pinned</h6>
          </div>
        </li>
        <NavMenu v-for="(menuItem, index) in menu" :key="index" :menu-item="menuItem" />
      </ul>
    </div>
    <li class="right-arrow" :class="{ disabled: sidebar.hideRightArrow }" @click="arrowRight">
      <vue-feather type="arrow-right"></vue-feather>
    </li>
  </nav>
</template>

<script lang="ts" setup>
import { computed, defineAsyncComponent, onMounted, onUnmounted, reactive, ref } from 'vue'
import { getImages } from '@/utils/index'
import { routes } from '@/router/routes'
import { useMenu } from '@/store/menu'
import { storeToRefs } from 'pinia'
import { useLayout } from '@/store/layout'

const Logo = defineAsyncComponent(() => import('@/components/layout/sidebar/Logo.vue'))

const NavMenu = defineAsyncComponent(() => import('@/components/layout/sidebar/NavMenu.vue'))

const store = useMenu()
const storeLayout = useLayout()
const { menuState, uiState } = storeToRefs(store)
const { layoutState } = storeToRefs(storeLayout)
// Harus computed: loadUserMenu mengganti array menu, bukan memutasinya,
// sehingga referensi yang disalin sekali saat setup tidak akan ikut diperbarui.
const menu = computed(() => menuState.value.menu)
const sidebarRef = ref<HTMLDivElement | null>(null)
let timeoutId: number | undefined

const layoutObject = computed({
  get() {
    return layoutState.value.layouts.settings.sidebarSetting
  },
  set() {
    return layoutState.value.layouts.settings.sidebarSetting
  },
})

const sidebar = reactive({
  margin: uiState.value.margin,
  hideLeftArrow: uiState.value.hideLeftArrow,
  hideRightArrow: uiState.value.hideRightArrow,
  isActive: false,
})

function arrowRight() {
  if (sidebar.isActive == false) {
    sidebar.isActive = !sidebar.isActive
  }
  if (sidebar.margin >= -3700) {
    sidebar.margin = sidebar.margin - 500
    sidebar.hideLeftArrow = false
    sidebar.hideRightArrow = false
  }
  if (sidebar.margin == -3700) {
    sidebar.hideRightArrow = true
  }
}

function arrowLeft() {
  if (sidebar.margin <= -500) {
    sidebar.margin = sidebar.margin + 500
    sidebar.hideLeftArrow = false
    sidebar.hideRightArrow = false
  }
  if (sidebar.margin == 0) {
    sidebar.hideLeftArrow = true
  }
}

onMounted(() => {
  timeoutId = window.setTimeout(() => {
    if (sidebarRef.value) {
      if (uiState.value.menuWidth > window.innerWidth) {
        sidebar.hideRightArrow = false
        uiState.value.hideLeftArrowRTL = false
      } else {
        sidebar.hideRightArrow = false
        uiState.value.hideLeftArrowRTL = true
      }
    }
  }, 500)

  if (sidebar.margin === 0) {
    sidebar.hideRightArrow = false
  }
})

onUnmounted(() => {
  if (timeoutId) clearTimeout(timeoutId)
})
</script>
