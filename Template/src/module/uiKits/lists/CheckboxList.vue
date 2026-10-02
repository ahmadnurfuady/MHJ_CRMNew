<template>
  <Card :headerTitle="'Lists with Checkbox'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">Use<code> form-check-input </code>to check your checkbox.</p>
    </template>

    <ul class="list-group">
      <li class="list-group-item" v-for="(item, index) in list" :key="index">
        <Checkbox
          :inputId="item.id"
          :class="`me-1 checkbox-${item.class}`"
          :labelClass="`txt-${item.class} mb-0`"
          :label="item.title"
          v-model:modelValue="item.model"
          :required="false"
        />
      </li>
    </ul>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent, onMounted, ref } from 'vue'
import { checkboxList } from '@/core/data/uiKits/lists'
import { initializeCheckboxList } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const Checkbox = defineAsyncComponent(() => import('@/components/shared/formElements/Checkbox.vue'))

const list = ref(checkboxList)

onMounted(() => {
  initializeCheckboxList(list.value)
})
</script>
