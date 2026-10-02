<template>
  <Card
    :headerTitle="'Disabled Tooltip'"
    :border="true"
    :padding="false"
    :cardBodyClass="'fill-tooltip'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Elements with the disabled attribute aren't interactive, meaning users cannot focus, hover,
        or click them to trigger a tooltip (or popover). ideally made keyboard-focusable using
        <code>tabindex="0"</code>.
      </p>
    </template>
    <div class="common-flex">
      <span class="d-inline-block" v-tooltip :title="'Disabled tooltip'">
        <button class="btn btn-primary" type="button" disabled>Disabled button</button>
      </span>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
