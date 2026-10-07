<template>
  <li
    :class="[
      {
        'sidebar-main-title': menuItem?.type == 'headtitle',
        'sidebar-list': menuItem?.icon,
      },
      menuItem?.title && menuState.pinedArray.includes(menuItem.title) ? 'pined' : '',
    ]"
  >
    <div v-if="menuItem?.type == 'headtitle'">
      <h6 class="lan-1">{{ $t(menuItem?.headTitle || '') }}</h6>
    </div>
    <i
      v-if="menuItem?.type != 'headtitle' && menuItem?.icon"
      class="fa fa-thumb-tack"
      @click="getPined(menuItem)"
    ></i>
    <label
      v-if="menuItem?.badgeType"
      class="badge badge-new"
      :class="'badge-light-' + menuItem.badgeType"
      >{{ $t(menuItem.badge || '') }}</label
    >
    <router-link
      :to="menuItem?.children ? '' : menuItem?.path || ''"
      v-if="menuItem && menuItem?.title"
      :class="[
        {
          active: (menuItem.path && isActive(menuItem.path)) || menuItem.active,
        },
        menuItem.icon ? 'sidebar-link sidebar-title ' : 'submenu-title',
      ]"
      @click.prevent="onMenuClick(menuItem)"
    >
      <SvgIcon
        :icon="menuItem.icon"
        svgClass="stroke-icon"
        v-if="menuItem.icon && layoutState.svgIcon == 'stroke-svg'"
        type="stroke"
      />
      <SvgIcon
        :icon="menuItem.icon"
        svgClass="fill-icon"
        v-if="menuItem.icon && layoutState.svgIcon == 'fill-svg'"
        type="fill"
      />

      <span class="lan-3" v-if="menuItem.icon">{{ $t(menuItem.title) }}</span>
      <template v-else>{{ $t(menuItem.title) }}</template>

      <div class="according-menu" v-if="menuItem.children">
        <i
          class="pull-right"
          :class="[menuItem.active ? 'fa fa-angle-down' : 'fa fa-angle-right']"
        ></i>
      </div>
    </router-link>
    <ul
      class="sidebar-submenu"
      v-if="menuItem?.children"
      :style="{ display: menuItem.active ? 'block' : 'none' }"
    >
      <NavMenu
        v-for="(childItem, index) in menuItem?.children"
        :key="index"
        :menu-item="childItem"
      />
    </ul>
  </li>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { useMenu } from '@/store/menu'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useLayout } from '@/store/layout'
import { MenuItem } from '@/types/menu'

const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))

const router = useRouter()
const route = useRoute()
const store = useMenu()
const storeLayout = useLayout()
const { menuState } = storeToRefs(store)
const { layoutState } = storeToRefs(storeLayout)
const { getPined, toggleMenu } = store

const props = defineProps<{
  menuItem: MenuItem
}>()

function isActive(path: string) {
  return path === route.path
}

const onMenuClick = (menuItem: MenuItem) => {
  if (menuItem.children && menuItem.children.length) {
    toggleMenu(menuItem)
  } else if (menuItem.path) {
    router.push(menuItem.path)
  }
}
</script>
