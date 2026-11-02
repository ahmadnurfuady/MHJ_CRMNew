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
    <SolarIcon
      v-if="menuItem?.type != 'headtitle' && menuItem?.icon"
      name="pin"
      class="sidebar-pin"
      :class="{ 'is-pinned': menuItem.title && menuState.pinedArray.includes(menuItem.title) }"
      :size="24"
      color="#ffffff"
      secondary-color="#ffffff"
      :secondary-opacity="1"
      :aria-label="menuItem.title ? `Pin ${menuItem.title}` : 'Pin menu'"
      :title="menuItem.title ? `Pin ${menuItem.title}` : 'Pin menu'"
      role="button"
      tabindex="0"
      @click.stop="getPined(menuItem)"
      @keydown.enter.stop="getPined(menuItem)"
      @keydown.space.prevent.stop="getPined(menuItem)"
    />
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
      <SolarIcon
        v-if="isFaskesNavigationItem(menuItem)"
        name="hospital"
        class="sidebar-mhj-icon sidebar-faskes-icon"
        :size="18"
        color="#ffffff"
        secondary-color="#ffffff"
        :secondary-opacity="0.45"
        aria-hidden="true"
      />
      <SolarIcon
        v-else-if="isPeluangNavigationItem(menuItem)"
        name="chart-2"
        class="sidebar-mhj-icon sidebar-opportunity-icon"
        :size="18"
        color="#ffffff"
        secondary-color="#ffffff"
        :secondary-opacity="1"
        aria-hidden="true"
      />
      <MhjIcon
        v-else-if="resolveMhjNavigationIcon(menuItem) && !isTaskNavigationItem(menuItem)"
        :name="resolveMhjNavigationIcon(menuItem)!"
        class="sidebar-mhj-icon"
        :size="18"
      />
      <SolarIcon
        v-else-if="isTaskNavigationItem(menuItem)"
        name="checklist"
        class="sidebar-solar-icon"
        :size="18"
        color="#ffffff"
        secondary-color="#ffffff"
        :secondary-opacity="1"
        aria-hidden="true"
      />
      <template v-else>
        <SolarIcon
          :name="resolveSidebarIcon(menuItem)"
          class="sidebar-solar-icon"
          :size="18"
          color="#ffffff"
          secondary-color="#ffffff"
          :secondary-opacity="1"
          aria-hidden="true"
          v-if="menuItem.icon && isBoldSidebarIcon(menuItem)"
        />
        <SvgIcon
          :icon="resolveSidebarIcon(menuItem)"
          svgClass="stroke-icon"
          :stroke-width="resolveSidebarIconStrokeWidth(menuItem)"
          v-else-if="menuItem.icon && layoutState.svgIcon == 'stroke-svg'"
          type="stroke"
        />
        <SvgIcon
          :icon="resolveSidebarIcon(menuItem)"
          svgClass="fill-icon"
          :stroke-width="resolveSidebarIconStrokeWidth(menuItem)"
          v-else-if="menuItem.icon && layoutState.svgIcon == 'fill-svg'"
          type="fill"
        />
      </template>

      <span class="lan-3" v-if="menuItem.icon">{{ $t(menuItem.title) }}</span>
      <template v-else>{{ $t(menuItem.title) }}</template>

      <div class="according-menu" v-if="menuItem.children">
        <SolarIcon
          :name="menuItem.active ? 'chevron-down' : 'chevron-right'"
          class="sidebar-chevron"
          :size="18"
          color="#ffffff"
          aria-hidden="true"
        />
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
import { isFaskesNavigationItem, resolveMhjNavigationIcon } from '@/utils/mhjIcons'

const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))

const router = useRouter()
const route = useRoute()
const store = useMenu()
const storeLayout = useLayout()
const { menuState, uiState } = storeToRefs(store)
const { layoutState } = storeToRefs(storeLayout)
const { getPined, toggleMenu } = store

const props = defineProps<{
  menuItem: MenuItem
}>()

function isActive(path: string) {
  return path === route.path
}

function isPeluangNavigationItem(item: MenuItem) {
  const value = `${item.title ?? ''} ${item.path ?? ''} ${item.icon ?? ''}`.toLowerCase()
  return /peluang|project|proyek|projek|deal/.test(value)
}

function isTaskNavigationItem(item: MenuItem) {
  const value = `${item.title ?? ''} ${item.path ?? ''} ${item.icon ?? ''}`.toLowerCase()
  return /tugas|task|checklist/.test(value)
}

function resolveSidebarIcon(item: MenuItem) {
  const value = `${item.title ?? ''} ${item.path ?? ''} ${item.icon ?? ''}`.toLowerCase()

  if (/master/.test(value)) return 'file-text'
  if (/settings?/.test(value)) return 'settings'
  if (/kalender|calendar/.test(value)) return 'calendar'
  if (/laporan|reports?/.test(value)) return 'chart'
  return item.icon
}

function isBoldSidebarIcon(item: MenuItem): boolean {
  const value = `${item.title ?? ''} ${item.path ?? ''} ${item.icon ?? ''}`.toLowerCase()
  return /master/.test(value) || /settings?/.test(value) || /kalender|calendar/.test(value) || /laporan|reports?/.test(value)
}

function resolveSidebarIconStrokeWidth(_item: MenuItem) {
  return undefined
}

const onMenuClick = (menuItem: MenuItem) => {
  if (menuItem.children && menuItem.children.length) {
    toggleMenu(menuItem)
  } else if (menuItem.path) {
    void router.push(menuItem.path).finally(() => {
      if (window.innerWidth <= 991) {
        uiState.value.show = false
      }
    })
  }
}
</script>

<style scoped>
.sidebar-faskes-icon,
.sidebar-link:hover > .sidebar-faskes-icon {
  fill: none !important;
  stroke: none !important;
  pointer-events: none;
  transform: none !important;
  transition: none !important;
}

/* Kontak & Faskes harus identik pada sidebar samping dan sidebar atas. */
.sidebar-link :deep(.sidebar-mhj-icon[data-mhj-icon='contact_card']),
.sidebar-link :deep(.sidebar-faskes-icon),
.sidebar-link :deep(.sidebar-opportunity-icon) {
  display: inline-block !important;
  width: 18px !important;
  height: 18px !important;
  flex: 0 0 18px;
  margin-right: 10px !important;
  filter: brightness(0) invert(1) !important;
  opacity: 1 !important;
  vertical-align: -2px;
  transform: none !important;
  transition: none !important;
}

/* Master, Settings, Kalender, Laporan: bold solid putih tanpa outline. */
.sidebar-link :deep(.sidebar-solar-icon) {
  display: inline-block !important;
  width: 18px !important;
  height: 18px !important;
  flex: 0 0 18px;
  margin-right: 10px !important;
  vertical-align: -2px;
  transform: none !important;
  transition: none !important;
}
</style>
