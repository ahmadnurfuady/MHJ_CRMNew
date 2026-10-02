<template>
  <Card
    :headerTitle="props.details.title"
    :header="props.details.cardHeaderClass"
    :headerClass="props.details.headingClass"
    :border="true"
    :padding="false"
    :cardClass="'height-equal'"
    :cardBodyClass="props.details.cardBodyClass"
    v-if="props.details"
  >
    <template v-for="(list, index) in props.details.details" :key="index">
      <h6 :class="`pb-2 ${list.titleClass}`">{{ list.title }}</h6>
      <p :class="`mb-0 c-light ${list.descriptionClass}`">{{ list.description }}</p>
    </template>
    <template #details>
      <div :class="`card-footer ${props.details.cardFooterClass}`">
        <h6 :class="`mb-0 text-end ${props.details.footerClass}`">Riho Theme</h6>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import type { List } from '@/types/bonusUI'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const props = defineProps<{
  details: List
}>()
</script>
