<template>
  <Card
    :cardClass="'height-equal helper-height-equal'"
    :headerTitle="'Font Weight'"
    :border="true"
    :padding="false"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use font-weight classes like: <code>f-w-* [100 / 300 / 400 / 600 / 700 / 900]</code>.
      </p>
    </template>

    <div class="helper-common-box">
      <div class="f-w-100">You can set light font weight heading f-w-100</div>
    </div>
    <div class="helper-common-box">
      <div class="f-w-300">You can set light font weight heading f-w-300</div>
    </div>
    <div class="helper-common-box">
      <div class="f-w-400">You can set light font weight heading f-w-400</div>
    </div>
    <div class="helper-common-box">
      <div class="f-w-600">You can set bolder font weight heading f-w-600</div>
    </div>
    <div class="helper-common-box">
      <div class="f-w-700">You can set bold font weight heading f-w-700</div>
    </div>
    <div class="helper-common-box">
      <div class="f-w-900">You can set bold font weight heading f-w-900</div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
