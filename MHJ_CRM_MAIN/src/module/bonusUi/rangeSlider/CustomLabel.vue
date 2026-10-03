<template>
  <Card :headerTitle="'Custom Label Slider'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>vue-3-slider-component</code> for sliders with custom labels using the
        <code>marks</code> prop.
      </p>
    </template>
    <form class="theme-form form-label-align-right range-slider">
      <VueSlider class="mb-3" v-model="value" :marks="labels" :min="0" :max="4" />
    </form>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const value = ref<number>(2)
const labels = { '0': '😭', '1': '😢', '2': '😑', '3': '😊', '4': '😆' }
</script>
