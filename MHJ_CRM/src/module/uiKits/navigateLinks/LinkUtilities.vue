<template>
  <Card :headerTitle="'Link Utilities'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Colored links can also be modified by our <code>link utilities</code>.
      </p>
    </template>

    <p v-for="(link, index) in colors" :key="index">
      <a
        :class="`link-${link.color} link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover`"
        href="#"
      >
        Link {{ link.color }}
      </a>
    </p>
    <p>
      <a
        class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
        href="#!"
        >Link emphasis</a
      >
    </p>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import { colorsTwo } from '@/core/data/uiKits/helperClasses'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const colors = ref(colorsTwo)
</script>
