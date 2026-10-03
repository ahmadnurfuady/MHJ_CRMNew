<template>
  <Card
    :headerTitle="'Radio Toggle Buttons'"
    :cardBodyClass="'common-flex main-radio-toggle'"
    :border="true"
    :padding="false"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        The choice between these two approaches will depend on the type of toggle you are creating,
        and whether or not the toggle will make sense to users when announced as a checkbox or as an
        actual button. <code>[any one selected]</code>.
      </p>
    </template>

    <template v-for="(radio, index) in radioToggle" :key="index">
      <input
        class="btn-check radio-light-secondary"
        :id="radio.id"
        type="radio"
        name="options"
        :checked="radio.checked"
        :disabled="radio.disabled"
      />
      <label class="btn list-light-secondary" :for="radio.id">{{ radio.label }}</label>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { radioToggle } from '@/core/data/forms/formControl'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
