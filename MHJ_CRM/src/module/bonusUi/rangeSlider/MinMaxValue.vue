<template>
  <Card :headerTitle="'Min Max Value'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>vue-3-slider-component</code> for defining a slider with custom
        <code>min</code> and <code>max</code> value boundaries.
      </p>
    </template>
    <form class="theme-form form-label-align-right range-slider">
      <VueSlider class="mb-3" v-model="value" :min="100" :max="1000" tooltip="always" />
    </form>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const value = ref<number>(500)
</script>
