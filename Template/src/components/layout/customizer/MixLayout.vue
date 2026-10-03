<template>
  <h5>Mix Layout</h5>
  <ul class="layout-grid customizer-mix">
    <li
      class="color-layout"
      :class="{ active: mixLayout === 'light' }"
      @click="customizeMixLayout('light')"
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
          <li class="bg-light sidebar"></li>
          <li class="bg-light body"></li>
        </ul>
      </div>
    </li>
    <li
      class="color-layout"
      data-attr="dark-sidebar"
      :class="{ active: mixLayout === 'dark-sidebar' }"
      @click="customizeMixLayout('dark-sidebar')"
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
    <li
      class="color-layout"
      data-attr="dark-only"
      :class="{ active: mixLayout === 'dark-only' }"
      @click="customizeMixLayout('dark-only')"
    >
      <div class="header bg-dark">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="body">
        <ul>
          <li class="bg-dark sidebar"></li>
          <li class="bg-dark body"></li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useLayout } from '@/store/layout'
import { storeToRefs } from 'pinia'

const store = useLayout()
const { layoutState } = storeToRefs(store)
const { setTheme } = store

const mixLayout = computed(() => layoutState.value.theme)

type MixLayoutType = 'light' | 'dark-sidebar' | 'dark-only'

function customizeMixLayout(val: MixLayoutType) {
  setTheme(val)
}
</script>
