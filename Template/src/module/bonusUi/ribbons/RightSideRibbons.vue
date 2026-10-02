<template>
  <Card :headerTitle="'Variations Of Right Ribbons'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use class of
        <code>ribbon-*</code
        >[ribbon-right/ribbon-clip-right/ribbon-vertical-right/ribbon-bookmark/ribbon-clip-bottom-right/ribbon-vertical-right]
        through create ribbons and all ribbon colors are available.<code>[ribbon-*]</code>
      </p>
    </template>
    <div class="row g-3">
      <div class="col-sm-6 col-xl-4" v-for="details in rightRibbons" :key="details.id">
        <div :class="`${details.class} border border-1 height-equal`">
          <div :class="`ribbon ribbon-${details.ribbonClass}`" v-html="details.ribbonText"></div>
          <p v-html="details.text"></p>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { rightRibbons } from '@/core/data/bonusUI/ribbons'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
