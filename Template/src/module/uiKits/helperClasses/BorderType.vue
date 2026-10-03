<template>
  <Card
    :headerTitle="
      props.borderType === 'inset' ? 'Ridge Border' : titleCase(props.borderType || '') + ' Border'
    "
    :border="true"
    :padding="false"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use<code> b-width-*</code> and <code> border-s-{{ props.borderType }}</code> to
        {{ props.borderType }} border.
      </p>
    </template>

    <div class="helper-common-box helper-p-wrapper">
      <div :class="`border-common-box border-s-${props.borderType} b-width-1`">b-width-1</div>
      <div :class="`border-common-box border-s-${props.borderType} b-width-2`">b-width-2</div>
      <div :class="`border-common-box border-s-${props.borderType} b-width-3`">b-width-3</div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { titleCase } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const props = defineProps<{
  borderType: string
}>()
</script>
