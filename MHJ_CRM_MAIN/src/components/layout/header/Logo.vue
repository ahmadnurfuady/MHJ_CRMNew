<template>
  <div class="header-logo-wrapper col-auto p-0">
    <div class="logo-wrapper">
      <router-link :to="routes.Dashboards.Default">
        <img class="img-fluid for-light" :src="getImages('logo/logo_dark.png')" alt="logo" />
        <img class="img-fluid for-dark" :src="getImages('logo/logo.png')" alt="logo" />
      </router-link>
    </div>
    <div class="toggle-sidebar" @click="toggleSidebar()">
      <vue-feather :type="'align-center'" class="status_toggle middle sidebar-toggle"></vue-feather>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { getImages } from '@/utils/index'
import { routes } from '@/router/routes'
import { useMenu } from '@/store/menu'

const store = useMenu()
const { toggleSidebar } = store
</script>
