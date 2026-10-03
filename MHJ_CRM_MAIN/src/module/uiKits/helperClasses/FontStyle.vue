<template>
  <Card
    :cardClass="'height-equal helper-height-equal'"
    :headerTitle="'Font-style'"
    :border="true"
    :padding="false"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use font-style like:
        <code> f-s-* [normal / italic / oblique / initial / inherit]</code>.
      </p>
    </template>

    <p class="f-s-normal">This is a <strong>f-s-normal</strong> font-style</p>
    <p class="f-s-italic">This is a <strong>f-s-italic</strong> font-style</p>
    <p class="f-s-oblique">This is a <strong>f-s-oblique</strong> font-style</p>
    <p class="f-s-initial">This is a <strong>f-s-initial</strong> font-style</p>
    <p class="f-s-inherit">This is a <strong>f-s-inherit</strong> font-style</p>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
