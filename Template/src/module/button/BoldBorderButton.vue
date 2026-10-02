<template>
  <div class="col-12">
    <Card
      :headerTitle="'Bold Border Outline Buttons'"
      :border="true"
      :padding="false"
      :cardBodyClass="'common-flex'"
    >
      <template #header5>
        <p class="f-m-light mt-1">
          Use <code> btn-outline-*-2x</code> class for bold outline buttons.
        </p>
      </template>

      <button
        class="btn primary-2x"
        :class="'btn-outline-' + item.class"
        v-for="item in boldBorder"
        :key="item.class"
      >
        {{ item.title }}
      </button>
    </Card>
  </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { boldBorder } from '@/core/data/buttons'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
