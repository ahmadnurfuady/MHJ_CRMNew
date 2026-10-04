<template>
  <div class="media profile-media" @click="openTab()">
    <img class="b-r-10" :src="getImages('dashboard/profile.png')" alt="profile" />
    <div class="media-body d-xxl-block d-none box-col-none">
      <div class="d-flex align-items-center gap-2">
        <span>{{ authStore.user?.name || 'Admin' }} </span><i class="middle fa fa-angle-down"> </i>
      </div>
      <p class="mb-0 font-roboto">{{ authStore.user?.email || 'Admin' }}</p>
    </div>
  </div>
  <ul class="profile-dropdown onhover-show-div" :class="show ? 'active' : ''">
    <li>
      <router-link :to="routes.User.UserProfile">
        <vue-feather type="user"></vue-feather><span>Account </span></router-link
      >
    </li>
    <li>
      <router-link :to="routes.App.MailBox">
        <vue-feather type="mail"></vue-feather><span>Inbox</span></router-link
      >
    </li>
    <li>
      <router-link :to="routes.User.AddUser">
        <vue-feather type="settings"></vue-feather>
        <span>Settings</span></router-link
      >
    </li>
    <li>
      <a class="btn btn-pill btn-outline-primary btn-sm" @click="handleLogout()">Log Out</a>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { getImages } from '@/utils/index'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { routes } from '@/router/routes'
import { useAuthStore } from '@/store/auth'

const router = useRouter()
const authStore = useAuthStore()
const show = ref<boolean>(false)

async function handleLogout() {
  await authStore.logout()
  router.replace('/auth/login')
}
function openTab() {
  show.value = !show.value
}
</script>
