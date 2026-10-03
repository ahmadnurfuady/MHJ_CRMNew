<template>
  <Card :headerTitle="'Selectable Tag'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>vue3-tags-input</code> to select predefined tags from a dropdown, prevent
        duplicates, and allow inline editing of tags.
      </p>
    </template>
    <TagInput
      v-model:tags="tags"
      v-model="tag"
      :select="true"
      :select-items="selectItems"
      @on-select="handleSelectedTag"
      @on-tags-changed="handleChangeTag"
      placeholder="Select the tag"
    >
      <template #item="{ tag }">
        {{ tag.text }}
      </template>

      <template #no-data> No Data </template>

      <template #select-item="tag">
        {{ tag.text }}
      </template>
    </TagInput>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

interface Tag {
  text: string
}

const tag = ref<string>('')

const tags = ref<Tag[]>([])

const selectItems = ref<Tag[]>([
  { text: 'Riho' },
  { text: 'Tivo' },
  { text: 'Roxo' },
  { text: 'Viho' },
])

function handleSelectedTag(selected: Tag) {
  // Prevent duplicates
  if (!tags.value.find((t) => t.text === selected.text)) {
    tags.value.push(selected)
  }
}

function handleChangeTag(newTags: Tag[]) {
  tags.value = newTags
}
</script>
