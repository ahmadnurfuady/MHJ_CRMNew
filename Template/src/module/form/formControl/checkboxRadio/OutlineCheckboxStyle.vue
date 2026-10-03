<template>
  <Card
    :headerTitle="'Outlined Checkbox Styles'"
    :border="true"
    :padding="false"
    :cardBodyClass="'common-flex main-checkbox-toggle'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        The choice between these two approaches will depend on the type of toggle you are creating,
        and whether or not the toggle will make sense to users when announced as a checkbox or as an
        actual button. <code>[multiple selected]</code>.
      </p>
    </template>

    <template v-for="(item, index) in outlineCheckbox" :key="index">
      <input
        class="btn-check"
        :id="item.id"
        type="checkbox"
        :checked="item.checked"
        :disabled="item.disabled"
      />
      <label :class="`btn btn-outline-${item.class}`" :for="item.id">{{ item.label }}</label>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { outlineCheckbox } from '@/core/data/forms/formControl'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
