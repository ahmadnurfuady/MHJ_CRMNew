<template>
  <h5>Layout Type</h5>
  <ul class="main-layout d-flex align-items-center layout-grid">
    <li
      data-attr="ltr"
      :class="{ active: layoutType == 'ltr' }"
      @click="customizeLayoutType('ltr')"
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
          <li class="bg-light body">
            <span class="badge badge-primary">LTR</span>
          </li>
        </ul>
      </div>
    </li>
    <li
      data-attr="rtl"
      :class="{ active: layoutType == 'rtl' }"
      @click="customizeLayoutType('rtl')"
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
          <li class="bg-light body">
            <span class="badge badge-primary">RTL</span>
          </li>
          <li class="bg-light sidebar"></li>
        </ul>
      </div>
    </li>
    <li
      v-bind:style="layoutState.boxLayout ? '' : 'display: none;'"
      data-attr="box"
      :class="{ active: layoutType == 'box-layout' }"
      @click="customizeLayoutType('box-layout')"
      class="box-layout px-3"
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
          <li class="bg-light body">
            <span class="badge badge-primary">Box</span>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useLayout } from '@/store/layout'
import { storeToRefs } from 'pinia'

const store = useLayout()
const { layoutState } = storeToRefs(store)
const { setLayoutType } = store

const layoutType = computed(() => layoutState.value.layoutType)

function customizeLayoutType(val: 'ltr' | 'rtl' | 'box-layout') {
  setLayoutType(val)
}
</script>
