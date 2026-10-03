<template>
  <h5>SIDEBAR TYPE</h5>
  <ul class="sidebar-type layout-grid">
    <li
      data-attr="normal-sidebar"
      @click="customizeSidebarSetting('horizontal-wrapper ', 'Horizontal')"
    >
      <div class="header bg-light">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="body">
        <ul>
          <li class="bg-dark sidebar"></li>
          <li class="bg-light body"></li>
        </ul>
      </div>
    </li>
    <li data-attr="compact-sidebar" @click="customizeSidebarSetting('compact-wrapper', 'default')">
      <div class="header bg-light">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="body">
        <ul>
          <li class="bg-dark sidebar"></li>
          <li class="bg-light body"></li>
        </ul>
      </div>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useMenu } from '@/store/menu'
import { useLayout } from '@/store/layout'
import { storeToRefs } from 'pinia'

const store = useLayout()
const storeMenu = useMenu()
const { uiState } = storeToRefs(storeMenu)
const { layoutState } = storeToRefs(store)
const { setCustomizeSidebarType } = store
const customizer = ref<string>('')
const margin = ref(uiState.value.margin)

function customizeSidebarSetting(val: string, layout: string) {
  layoutState.value.layouts.settings.sidebarSetting = val
  setCustomizeSidebarType(val)
  margin.value = 0
  customizer.value = ''
}

onMounted(() => {
  const savedSidebar = localStorage.getItem('SidebarType')

  if (savedSidebar) {
    layoutState.value.layouts.settings.sidebarSetting = savedSidebar
    setCustomizeSidebarType(savedSidebar)
  } else {
    layoutState.value.layouts.settings.sidebarSetting = 'compact-wrapper'
    setCustomizeSidebarType('compact-wrapper')
    localStorage.setItem('SidebarType', 'compact-wrapper')
  }
})
</script>
