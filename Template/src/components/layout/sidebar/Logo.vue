<template>
  <div class="logo-wrapper">
    <router-link class="mhj-brand" :to="routes.Dashboards.Default">
      <span class="mhj-brand__name">MHJ Medika</span>
      <span class="mhj-brand__tagline">Sales Management CRM</span>
    </router-link>
    <div class="back-btn" @click="toggleSidebar()"><i class="fa fa-angle-left"> </i></div>
    <div class="toggle-sidebar" @click="toggleSidebar()">
      <vue-feather :type="'grid'" class="status_toggle middle sidebar-toggle"></vue-feather>
    </div>
  </div>
  <div class="logo-icon-wrapper">
    <router-link :to="routes.Dashboards.Default" aria-label="MHJ Medika">
      <span class="mhj-brand__mark">M</span>
    </router-link>
  </div>
</template>
<script lang="ts" setup>
import { routes } from '@/router/routes'
import { useMenu } from '@/store/menu'

const store = useMenu()
const { toggleSidebar } = store
</script>
