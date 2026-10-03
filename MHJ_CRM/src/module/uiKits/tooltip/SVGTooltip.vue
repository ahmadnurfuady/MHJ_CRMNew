<template>
  <Card
    :headerTitle="'SVG\'s Tooltip'"
    :border="true"
    :padding="false"
    :cardBodyClass="'svg-tooltip'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use<code> bg-light-* </code> to change light background color and <code>stroke-*</code> to
        change SVG colors.
      </p>
    </template>

    <div class="common-flex">
      <div class="bg-light-info" v-tooltip :title="'Notification'">
        <SvgIcon :icon="'email-box'" type="default" :class="'stroke-info'" />
      </div>
      <div class="bg-light-danger" type="default" v-tooltip :title="'Like'">
        <SvgIcon :icon="'stroke-bookmark'" :class="'stroke-danger'" />
      </div>
      <div class="bg-light-dark" type="default" v-tooltip :title="'Comment'">
        <SvgIcon :icon="'stroke-msg'" :class="'stroke-dark'" />
      </div>
      <div class="bg-light-primary" type="default" v-tooltip :title="'Share'">
        <SvgIcon :icon="'stroke-button'" :class="'stroke-primary'" />
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
</script>
