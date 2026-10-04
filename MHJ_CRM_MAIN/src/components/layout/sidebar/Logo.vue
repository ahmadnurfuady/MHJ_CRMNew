<template>
  <div class="logo-wrapper">
    <router-link class="logo-link" :to="routes.Dashboards.Default">
      <img class="img-fluid" :src="getImages('logo/logo-white.png')" alt=""
    /></router-link>
    <div class="back-btn" @click="toggleSidebar()"><i class="fa fa-angle-left"> </i></div>
    <div class="toggle-sidebar" @click="toggleSidebar()">
      <vue-feather :type="'grid'" class="status_toggle middle sidebar-toggle"></vue-feather>
    </div>
  </div>
  <div class="logo-icon-wrapper">
    <router-link :to="routes.Dashboards.Default">
      <img class="logo-icon-img" :src="getImages('logo/logo-icon-white.png')" alt="img"
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
<style scoped>
/* Reserve space so logo doesn't slide under the grid toggle icon */
.logo-link {
  display: block;
  padding-right: 50px;
}

/* Center and adjust padding for minimized logo container without breaking display toggle */
.logo-icon-wrapper {
  padding: 16px 0 !important;
  text-align: center !important;
}

.logo-icon-wrapper a {
  display: inline-block;
  text-align: center;
}

/* Minimized logo icon sized proportionally to sidebar and navigation icons */
.logo-icon-img {
  width: 26px !important;
  height: 26px !important;
  max-width: 26px !important;
  max-height: 26px !important;
  object-fit: contain;
  display: block;
  margin: 0 auto;
}
</style>

