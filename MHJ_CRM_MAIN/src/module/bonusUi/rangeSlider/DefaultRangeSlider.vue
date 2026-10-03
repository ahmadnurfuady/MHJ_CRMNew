<template>
  <Card :headerTitle="'Default Range Slider'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>vue-3-slider-component</code> for creating a basic single-thumb range slider with
        default settings.
      </p>
    </template>
    <form class="theme-form form-label-align-right range-slider">
      <VueSlider class="mb-3" v-model="value" />
    </form>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const value = ref<number>(50)
</script>
