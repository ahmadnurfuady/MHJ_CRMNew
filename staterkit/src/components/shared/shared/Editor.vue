<template>
  <ckeditor v-if="editor" :editor="editor"> </ckeditor>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const editor = ref()

onMounted(async () => {
  const { default: ClassicEditor } = await import('@ckeditor/ckeditor5-build-classic')
  editor.value = ClassicEditor
})
</script>
