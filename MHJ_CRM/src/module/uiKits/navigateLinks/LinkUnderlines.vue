<template>
  <Card
    :cardClass="'height-equal'"
    :headerTitle="'Link Underlines'"
    :border="true"
    :padding="false"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>link-underline-* </code>classes to link underlines. Change the underline's color
        independent of the link text color.
      </p>
    </template>

    <p v-for="(link, index) in colors" :key="index">
      <a :class="`link-underline-${link.color}`" href="#">
        {{ titleCase(link.color) }} underline
      </a>
    </p>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { colorsTwo } from '@/core/data/uiKits/helperClasses'
import { titleCase } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const colors = ref(colorsTwo)
</script>
