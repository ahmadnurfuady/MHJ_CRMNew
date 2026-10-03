<template>
  <Card :headerTitle="'Default Select'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">Use <code>ngx-chips</code> for select options and edit.</p>
    </template>
    <form>
      <TagInput :tags="defaultTags" placeholder="enter some tags" />
    </form>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const defaultTags = ['tag1', 'tag2', 'tag3']
</script>
