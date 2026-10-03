<template>
  <h5>Light layout</h5>
  <ul class="layout-grid customizer-color">
    <li
      class="color-layout"
      data-attr="color-1"
      @click="handleColorLayout('light', '#006666', '#FF6150')"
    >
      <div></div>
    </li>
    <li
      class="color-layout"
      data-attr="color-2"
      @click="handleColorLayout('light', '#1D5B79', '#A16B56')"
    >
      <div></div>
    </li>
    <li
      class="color-layout"
      data-attr="color-3"
      @click="handleColorLayout('light', '#4A55A2', '#F0A360')"
    >
      <div></div>
    </li>
    <li
      class="color-layout"
      data-attr="color-4"
      @click="handleColorLayout('light', '#167A93', '#eeb82f')"
    >
      <div></div>
    </li>
    <li
      class="color-layout"
      data-attr="color-5"
      @click="handleColorLayout('light', '#423964', '#FFA47A')"
    >
      <div></div>
    </li>
    <li
      class="color-layout"
      data-attr="color-6"
      @click="handleColorLayout('light', '#4b2a4b', '#FE7088')"
    >
      <div></div>
    </li>
  </ul>

  <h5>Dark Layout</h5>
  <ul class="layout-grid customizer-color dark">
    <li
      class="color-layout"
      data-attr="color-1"
      @click="handleColorLayout('dark-only', '#006666', '#6b7024')"
    >
      <div></div>
    </li>
    <li
      class="color-layout"
      data-attr="color-2"
      @click="handleColorLayout('dark-only', '#1D5B79', '#583729')"
    >
      <div></div>
    </li>
    <li
      class="color-layout"
      data-attr="color-3"
      @click="handleColorLayout('dark-only', '#4A55A2', '#FFA47A')"
    >
      <div></div>
    </li>
    <li
      class="color-layout"
      data-attr="color-4"
      @click="handleColorLayout('dark-only', '#167A93', '#F0A360')"
    >
      <div></div>
    </li>
    <li
      class="color-layout"
      data-attr="color-5"
      @click="handleColorLayout('dark-only', '#423964', '#468B97')"
    >
      <div></div>
    </li>
    <li
      class="color-layout"
      data-attr="color-6"
      @click="handleColorLayout('dark-only', '#4b2a4b', '#4b2a4b')"
    >
      <div></div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useLayout } from '@/store/layout'

const layoutStore = useLayout()

function handleColorLayout(layoutType: string, primary: string, secondary: string) {
  layoutStore.addStyle(primary, secondary)
  layoutStore.setLayout({ class: layoutType })
  // Removed window.location.reload()
}
</script>
