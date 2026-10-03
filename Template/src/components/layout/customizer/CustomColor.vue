<template>
  <h5>Unlimited Color</h5>
  <ul class="layout-grid unlimited-color-layout">
    <input id="ColorPicker1" type="color" v-model="primary" name="Background" />
    <input id="ColorPicker2" type="color" v-model="secondary" name="Background" />
    <button
      type="button"
      class="color-apply-btn btn btn-primary color-apply-btn me-2"
      @click="customizeColor"
    >
      Apply
    </button>
    <button
      type="button"
      class="color-apply-btn btn btn-primary color-apply-btn"
      @click="resetColor()"
    >
      Reset
    </button>
  </ul>
</template>
<script lang="ts" setup>
import { useLayout } from '@/store/layout'
import { onMounted, ref } from 'vue'

const store = useLayout()
const { setColorScheme } = store
const primary = ref<string>('#18A6E4')
const secondary = ref<string>('#84D7EB')

function customizeColor() {
  const primaryColor = localStorage.getItem('primary_color') || '#18A6E4'
  const secondaryColor = localStorage.getItem('secondary_color') || '#84D7EB'
  setColorScheme({ primary: primary.value, secondary: secondary.value })
  primary.value = primaryColor
  secondary.value = secondaryColor
}

function resetColor() {
  primary.value = '#18A6E4'
  secondary.value = '#84D7EB'
  setColorScheme({ primary: primary.value, secondary: secondary.value })
  localStorage.getItem(primary.value)
  localStorage.getItem(secondary.value)
}

onMounted(() => {
  const primaryColor = localStorage.getItem('primary_color')
  const secondaryColor = localStorage.getItem('secondary_color')
  primary.value = primaryColor ? primaryColor : '#18A6E4'
  secondary.value = secondaryColor ? secondaryColor : '#84D7EB'
})
</script>
