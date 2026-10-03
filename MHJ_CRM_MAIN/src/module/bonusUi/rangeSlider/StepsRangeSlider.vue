<template>
  <Card :headerTitle="'Step Range Slider'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>vue-3-slider-component</code> for creating a step range slider by setting the
        <code>interval</code> prop. You can also display marks for each step using the
        <code>marks</code> prop.
      </p>
    </template>

    <form class="theme-form form-label-align-right range-slider">
      <VueSlider class="mb-3" v-model="value" :interval="10" marks />
    </form>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const value = ref<number>(50)
</script>
