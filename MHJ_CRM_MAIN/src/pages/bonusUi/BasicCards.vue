<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12 col-xl-6">
        <BasicCard />
      </div>
      <div class="col-sm-12 col-xl-6">
        <FlatCard />
      </div>
      <div class="col-sm-12 col-xl-6">
        <NoShadowCard />
      </div>
      <div class="col-sm-12 col-xl-6">
        <IconHeading />
      </div>
      <div class="col-sm-12">
        <DarkCard />
      </div>
      <template v-for="(details, index) in infoCard.slice(3, 6)" :key="index">
        <div :class="index === infoCard.length - 4 ? 'col-xl-4 col-12' : 'col-xl-4 col-sm-6'">
          <InfoCard :details="details"></InfoCard>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { list } from '@/core/data/bonusUI/draggableCard'

const BasicCard = defineAsyncComponent(() => import('@/module/bonusUi/basicCard/BasicCard.vue'))
const FlatCard = defineAsyncComponent(() => import('@/module/bonusUi/basicCard/FlatCard.vue'))
const NoShadowCard = defineAsyncComponent(
  () => import('@/module/bonusUi/basicCard/NoShadowCard.vue')
)
const IconHeading = defineAsyncComponent(() => import('@/module/bonusUi/basicCard/IconHeading.vue'))
const DarkCard = defineAsyncComponent(() => import('@/module/bonusUi/basicCard/DarkCard.vue'))
const InfoCard = defineAsyncComponent(() => import('@/module/bonusUi/basicCard/InfoCard.vue'))

const infoCard = ref([...list])
</script>
