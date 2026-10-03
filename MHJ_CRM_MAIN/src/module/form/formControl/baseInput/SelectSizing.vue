<template>
  <Card :headerTitle="'Select Sizing'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        <code>form-select</code> to trigger the custom styles. You may also choose from small and
        large custom selects to match our similarly sized text inputs. class:-
        <code>[form-select-lg/form-select-sm]</code>.
      </p>
    </template>
    <Select
      getValueKey="label"
      display-key="label"
      :placeholder="'What\'s your hobbies'"
      v-model="hobbies"
      :options="selectSizing"
      :required="false"
      :class="'form-select-sm'"
    />
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { initSelectField } from '@/core/data/common'
import { selectSizing } from '@/core/data/forms/formControl'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))

const hobbies = ref(initSelectField())
</script>
