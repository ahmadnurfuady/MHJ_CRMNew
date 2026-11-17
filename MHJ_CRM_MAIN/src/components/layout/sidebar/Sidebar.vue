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
            <span>{{ t('common.back') }}</span
            ><SolarIcon name="fa-angle-right" class="ps-2" aria-hidden="true" />
          </div>
        </li>
        <li
          class="pin-title"
          :style="menuState.pinedArray.length ? 'display:block !important; list-style:none; padding:10px 20px 4px; order:-1;' : 'display:none !important;'"
        >
          <h6 style="font-size:11px; font-weight:700; letter-spacing:0.8px; text-transform:capitalize; opacity:1; margin-bottom:0; color:white;">
            {{ t('common.pinned') }}
          </h6>
        </li>
        <li
          v-if="menuState.pinedArray.length"
          style="list-style:none; margin: 6px 20px; border-top: 1px solid rgba(255,255,255,0.25);"
        ></li>
        <li style="display:block !important; list-style:none; padding: 10px 20px 4px;">
          <h6 style="font-size:11px; font-weight:700; letter-spacing:0.8px; text-transform:capitalize; opacity:1; margin-bottom:0; color:white;">
            {{ t('General') }}
          </h6>
        </li>
        <NavMenu v-for="(menuItem, index) in menu" :key="index" :menu-item="menuItem" />
      </ul>
    </div>
    <footer class="sidebar-footer">
      <button class="sidebar-logout" type="button" @click="handleLogout">
        <SolarIcon name="logout" :size="18" color="#ffffff" secondary-color="#ffffff" aria-hidden="true" />
        <span class="sidebar-logout-label">Keluar</span>
      </button>
    </footer>
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
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/auth'

const { t } = useI18n()
const router = useRouter()
const authStore = useAuthStore()

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

async function handleLogout() {
  await authStore.logout()
  router.replace('/auth/login')
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

<style scoped>
.sidebar-footer {
  flex: 0 0 auto;
  padding: 12px 20px calc(20px + env(safe-area-inset-bottom, 0px));
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.sidebar-logout {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #dc3545;
  border-radius: 10px;
  background: #dc3545;
  color: #fff !important;
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
}

.sidebar-logout:hover,
.sidebar-logout:focus-visible {
  border-color: #b02a37;
  background: #b02a37;
}

.sidebar-logout-label {
  color: #fff !important;
}

.sidebar-logout :deep(svg) {
  flex: 0 0 18px;
}

:global(.sidebar-wrapper.close_icon) .sidebar-footer {
  padding-right: 12px;
  padding-left: 12px;
}

:global(.sidebar-wrapper.close_icon) .sidebar-logout {
  justify-content: center;
  padding-right: 10px;
  padding-left: 10px;
}

:global(.sidebar-wrapper.close_icon) .sidebar-logout-label,
:global(.horizontal-wrapper) .sidebar-footer {
  display: none;
}
</style>
