<template>
  <Card :headerTitle="'Validation Tag'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">Use <code>vue3-tags-input</code> for select options and edit.</p>
    </template>
    <form>
      <TagInput :tags="defaultTags" :validate="customValidate" placeholder="enter some tags" />
    </form>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const defaultTags = ['tag1']

function customValidate(value: string) {
  const regex = new RegExp(/^[a-zA-Z]+$/)
  return regex.test(value)
}
</script>
