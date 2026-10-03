<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <Card>
          <div class="ck-editor">
            <ckeditor v-if="editor" :editor="editor"> </ckeditor>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const editor = ref()

onMounted(async () => {
  const { default: ClassicEditor } = await import('@ckeditor/ckeditor5-build-classic')
  editor.value = ClassicEditor
})
</script>

<style scoped></style>
