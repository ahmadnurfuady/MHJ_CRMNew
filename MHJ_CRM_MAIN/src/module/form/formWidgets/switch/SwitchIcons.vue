<template>
  <Card
    :headerTitle="'Switch with Icons'"
    :border="true"
    :padding="false"
    :cardBodyClass="'common-flex switch-wrapper'"
  >
    <template #header5>
      <p class="f-m-light mt-1">Use <code>icon-state</code> class to visible icons in switches.</p>
    </template>
    <div class="d-flex" v-for="(item, index) of switchIcon" :key="index">
      <label class="col-form-label m-r-10">{{ item.text }}</label>
      <div :class="`flex-grow-1 ${item.class}`">
        <label class="switch">
          <input type="checkbox" :checked="item.value" :disabled="item.disable" />
          <span class="switch-state"></span>
        </label>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { switchIcon } from '@/core/data/forms/formWidgets'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
