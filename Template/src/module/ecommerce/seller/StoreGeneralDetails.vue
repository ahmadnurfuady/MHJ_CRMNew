<template>
  <Card :cardClass="'widget-11 widget-hover'" v-if="props.details">
    <div class="common-align justify-content-start">
      <div :class="`analytics-tread bg-light-${props.details.color}`">
        <SvgIcon
          :icon="props.details.icon"
          :class="
            props.details.type && props.details.type == 'stroke'
              ? 'stroke-' + props.details.color
              : 'fill-' + props.details.color
          "
        ></SvgIcon>
      </div>
      <div>
        <span class="c-o-light">{{ props.details.title }}</span>
        <h4>{{ props.details.value }}</h4>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import type { StoreGeneralDetails } from '@/types/seller'

const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const props = defineProps<{
  details: StoreGeneralDetails
}>()
</script>
