<template>
  <template v-if="props.details">
    <Card
      :headerTitle="props.details.heading"
      :border="true"
      :padding="false"
      :headerClass="'txt-light'"
      :header="props.details.bgColor"
      :cardClass="'card-absolute'"
    >
      <div class="d-flex list-behavior-1 align-items-center">
        <div class="flex-shrink-0">
          <img class="tab-img img-fluid" :src="getImages(props.details.image)" alt="home" />
        </div>
        <div class="flex-grow-1">
          <p class="mb-xl-0 mb-sm-4" v-html="props.details.text"></p>
        </div>
      </div>
    </Card>
  </template>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'
import type { AbsoluteCard } from '@/types/bonusUI'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const props = defineProps<{
  details: AbsoluteCard
}>()
</script>
