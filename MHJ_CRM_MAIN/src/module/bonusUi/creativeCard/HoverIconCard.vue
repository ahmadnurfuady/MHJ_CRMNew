<template>
  <Card :cardClass="'common-hover'">
    <a class="effect-card custom-effect-card" href="#">
      <div class="common-box1 common-align">
        <vue-feather :type="'plus-square'" />
        <h5>Add the title of the card</h5>
      </div>
      <p class="mb-0">
        This is an example card for you to use. you are able to include subtitles in your according.
      </p>
      <div class="go-corner">
        <div class="go-arrow"></div>
      </div>
    </a>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
