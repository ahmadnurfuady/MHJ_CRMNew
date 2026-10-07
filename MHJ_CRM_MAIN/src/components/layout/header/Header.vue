<template>
  <div class="header-wrapper row m-0">
    <Logo />
    <div class="left-header col-xxl-5 col-xl-6 col-lg-5 col-md-4 col-sm-3 p-0">
      <div>
        <a class="toggle-sidebar" href="#">
          <i class="iconly-Category icli"> </i
        ></a>
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
        <li class="d-md-none d-block">
          <SearchInput />
        </li>
        <li class="language-nav">
          <Language />
        </li>
        <li class="fullscreen-body">
          <FullScreen />
        </li>
        <li class="onhover-dropdown bookmark-star">
          <BookmarkSearch />
        </li>
        <li>
          <Mode />
        </li>
        <li class="onhover-dropdown notification-down">
          <NotificationBox />
        </li>
        <li class="profile-nav onhover-dropdown">
          <Profile />
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
const Language = defineAsyncComponent(() => import('@/components/layout/header/Language.vue'))
const Logo = defineAsyncComponent(() => import('@/components/layout/header/Logo.vue'))
const FullScreen = defineAsyncComponent(() => import('@/components/layout/header/FullScreen.vue'))
const BookmarkSearch = defineAsyncComponent(
  () => import('@/components/layout/header/BookmarkSearch.vue')
)
const Mode = defineAsyncComponent(() => import('@/components/layout/header/Mode.vue'))
const NotificationBox = defineAsyncComponent(
  () => import('@/components/layout/header/NotificationBox.vue')
)
const Profile = defineAsyncComponent(() => import('@/components/layout/header/Profile.vue'))
</script>
