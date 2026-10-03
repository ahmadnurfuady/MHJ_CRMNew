<template>
  <Card :headerTitle="'Lists with Radios'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">Use<code> form-check-input </code>to check your radio buttons.</p>
    </template>

    <ul class="list-group">
      <li class="list-group-item" v-for="(list, index) in radioList" :key="index">
        <input
          :class="`form-check-input me-2 checkbox-${list.class}`"
          :id="list.id"
          type="radio"
          name="listGroupRadio"
          value=""
          :checked="list.checked"
        />
        <label class="form-check-label mb-0" :for="list.id">{{ list.title }}</label>
      </li>
    </ul>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { radioList } from '@/core/data/uiKits/lists'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
