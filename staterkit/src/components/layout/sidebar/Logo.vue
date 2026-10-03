<template>
  <div class="logo-wrapper">
    <router-link :to="routes.Dashboards.Default">
      <img class="img-fluid" :src="getImages('logo/logo.png')" alt=""
    /></router-link>
    <div class="back-btn" @click="toggleSidebar()"><i class="fa fa-angle-left"> </i></div>
    <div class="toggle-sidebar" @click="toggleSidebar()">
      <vue-feather :type="'grid'" class="status_toggle middle sidebar-toggle"></vue-feather>
    </div>
  </div>
  <div class="logo-icon-wrapper">
    <router-link :to="routes.Dashboards.Default">
      <img class="img-fluid" :src="getImages('logo/logo-icon.png')" alt="img"
    /></router-link>
  </div>
</template>
<script lang="ts" setup>
import { getImages } from '@/utils/index'
import { routes } from '@/router/routes'
import { useMenu } from '@/store/menu'

const store = useMenu()
const { toggleSidebar } = store
</script>
