<template>
  <div class="header-wrapper row m-0">
    <Logo />
    <div class="left-header col-xxl-5 col-xl-6 col-lg-5 col-md-4 col-sm-3 p-0">
      <div>
        <div class="d-flex align-items-center gap-2">
          <h4 class="f-w-600">{{ t('header.welcome', { name: displayName }) }}</h4>
          <img class="mt-0" :src="getImages('hand.gif')" alt="hand-gif" />
        </div>
      </div>
      <div class="welcome-content d-xl-block d-none">
        <span class="text-truncate col-12">{{ t('header.subtitle') }}</span>
      </div>
    </div>
    <div class="nav-right col-xxl-7 col-xl-6 col-md-7 col-8 pull-right right-header p-0 ms-auto">
      <ul class="nav-menus">
        <li class="d-md-block d-none">
          <SearchBar />
        </li>
        <li class="mobile-search-action d-md-none d-block">
          <SearchInput />
        </li>
        <li class="fullscreen-body">
          <FullScreen />
        </li>
        <li class="onhover-dropdown notification-down">
          <NotificationBox />
        </li>
        <li class="settings-nav onhover-dropdown">
          <SettingsAction />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'
import { useAuthStore } from '@/store/auth'
import { useI18n } from 'vue-i18n'

const authStore = useAuthStore()
const { t } = useI18n()

const displayName = computed(() => {
  const u = authStore.user
  if (!u) return ''
  const first = u.firstname?.trim()
  const last = u.lastname?.trim()
  if (first || last) return [first, last].filter(Boolean).join(' ')
  return u.name || ''
})

const SearchBar = defineAsyncComponent(
  () => import('@/components/layout/header/serach/SearchBar.vue')
)
const SearchInput = defineAsyncComponent(() => import('@/components/layout/header/SearchInput.vue'))
const Logo = defineAsyncComponent(() => import('@/components/layout/header/Logo.vue'))
const FullScreen = defineAsyncComponent(() => import('@/components/layout/header/FullScreen.vue'))
const NotificationBox = defineAsyncComponent(
  () => import('@/components/layout/header/NotificationBox.vue')
)
const SettingsAction = defineAsyncComponent(
  () => import('@/components/layout/header/SettingsAction.vue')
)
</script>

<style scoped>
.notification-down::before {
  display: none !important;
}

:global(.page-wrapper .page-header .header-wrapper .nav-right > ul > li.fullscreen-body),
:global(.page-wrapper .page-header .header-wrapper .nav-right > ul > li.notification-down),
:global(.page-wrapper .page-header .header-wrapper .nav-right > ul > li.settings-nav),
:global(.page-wrapper .page-header .header-wrapper .nav-right > ul > li.mobile-search-action) {
  width: 48px;
  height: 48px;
  flex: 0 0 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 !important;
  border-radius: 50% !important;
  text-align: center;
}

:global(.page-wrapper .page-header .header-wrapper .nav-right > ul > li.mobile-search-action) {
  background-color: #fff;
}

@media (max-width: 767.98px) {
  :global(.page-wrapper .page-header .header-wrapper .nav-right > ul > li.mobile-search-action) {
    display: inline-flex !important;
  }
}
</style>
