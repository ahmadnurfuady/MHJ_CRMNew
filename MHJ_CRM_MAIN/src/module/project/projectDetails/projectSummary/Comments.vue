<template>
  <CommentsPanel
    parent-type="project"
    :parent-id="projectId"
    :title="`Komentar ${projectName}`"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import CommentsPanel from '@/components/shared/CommentsPanel.vue'
import { useProjectStore } from '@/store/project'

const projectStore = useProjectStore()
const { selectedItem } = storeToRefs(projectStore)

const projectId = computed(() => selectedItem.value?.id ?? null)
const projectName = computed(() => selectedItem.value?.projectName || 'Peluang')
</script>
