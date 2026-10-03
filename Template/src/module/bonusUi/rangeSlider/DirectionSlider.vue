<template>
  <Card :headerTitle="'Direction Range Slider'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>vue-3-slider-component</code> with the <code>direction</code> prop set to
        <code>'rtl'</code> for rendering a right-to-left range slider layout.
      </p>
    </template>

    <form class="theme-form form-label-align-right range-slider">
      <VueSlider class="mb-3" v-model="value" direction="rtl" />
    </form>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const value = ref<number>(50)
</script>
