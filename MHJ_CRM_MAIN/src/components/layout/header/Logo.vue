<template>
  <div class="header-logo-wrapper col-auto p-0">
    <div class="logo-wrapper">
      <router-link :to="routes.Dashboards.Default">
        <img class="img-fluid for-light" :src="getImages('logo/logo_dark.png')" alt="logo" />
        <img class="img-fluid for-dark" :src="getImages('logo/logo.png')" alt="logo" />
      </router-link>
    </div>
    <div
      class="toggle-sidebar"
      role="button"
      tabindex="0"
      aria-label="Buka atau tutup menu navigasi"
      @click="toggleSidebar()"
      @keydown.enter="toggleSidebar()"
      @keydown.space.prevent="toggleSidebar()"
    >
      <vue-feather
        :type="'align-center'"
        class="status_toggle middle sidebar-toggle sidebar-toggle--desktop"
      />
      <SolarIcon
        name="widget"
        class="status_toggle middle sidebar-toggle sidebar-toggle--mobile"
        :size="21"
        color="var(--app-primary, #18a6e4)"
        secondary-color="#ffffff"
        :secondary-opacity="1"
        aria-hidden="true"
      />
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

<style scoped>
.sidebar-toggle--mobile {
  display: none;
}

@media (max-width: 991.98px) {
  .toggle-sidebar {
    display: inline-grid !important;
    width: 40px;
    height: 40px;
    flex: 0 0 40px;
    place-items: center;
    border-radius: 8px;
    margin-right: 12px !important;
    padding: 0 !important;
    border-right: none !important;
    background: var(--theme-default, var(--app-primary, #18a6e4));
    --white: #fff;
  }

  .toggle-sidebar::before,
  .sidebar-toggle--desktop {
    display: none !important;
  }

  .toggle-sidebar.toggle-sidebar .status_toggle.sidebar-toggle.sidebar-toggle--mobile[aria-hidden] {
    display: block;
    width: 21px !important;
    height: 21px !important;
    stroke: #ffffff !important;
  }
}
</style>
