<template>
  <Card :cardClass="'overflow-hidden'" :headerTitle="'Blockquote'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        The <code>&lt;blockquote&gt;</code> tag specifies a section that is quoted from another
        source.
      </p>
    </template>

    <div class="figure d-block dark-blockquote">
      <blockquote class="blockquote light-card mb-2">
        <p class="mb-0">The only impossible journey is the one you never begin.</p>
        <span class="blockquote-footer pt-3">Tony Robbins</span>
      </blockquote>
    </div>
    <div class="figure text-center d-block dark-blockquote">
      <blockquote class="blockquote light-card mb-2">
        <p class="mb-0">
          In this life we cannot do great things. We can only do small things with great love.
        </p>
        <span class="blockquote-footer pt-3">Mother Teresa</span>
      </blockquote>
    </div>
    <div class="figure text-end d-block dark-blockquote">
      <blockquote class="blockquote mb-0 light-card mb-2 bg">
        <p class="mb-0">Live in the sunshine, swim the sea, drink the wild air.</p>
        <span class="blockquote-footer pt-3">Ralph Waldo Emerson</span>
      </blockquote>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
