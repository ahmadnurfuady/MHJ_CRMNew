<template>
  <div class="col-xxl-6" v-for="item in commonButtons" :key="item.id">
    <Card
      :headerTitle="item.headTitle"
      :border="true"
      :padding="false"
      :cardBodyClass="item.bodyClass"
    >
      <template #header5>
        <p class="f-m-light mt-1" :innerHTML="item.description"></p>
      </template>

      <button class="btn" :class="button.class" v-for="button in item.items" :key="button.class">
        <vue-feather :type="button.icon" v-if="button.icon"></vue-feather>
        <template v-if="button.text">
          {{ button.text }}
        </template>
        <i :class="button.simpleIcon" v-if="button.simpleIcon"></i>
        <span v-if="button.title">{{ button.title }}</span>
      </button>
    </Card>
  </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { commonButtons } from '@/core/data/buttons'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
