<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <TextInputClipboard />
      </div>
      <div class="col-sm-12 col-md-6">
        <TextareaClipboard />
      </div>
      <div class="col-sm-12 col-md-6">
        <ClipboardOnParagraph />
      </div>
      <div class="col-sm-12 col-md-6">
        <CopyPortion />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const TextInputClipboard = defineAsyncComponent(
  () => import('@/module/form/formWidgets/clipboard/TextInputClipboard.vue')
)
const TextareaClipboard = defineAsyncComponent(
  () => import('@/module/form/formWidgets/clipboard/TextareaClipboard.vue')
)
const ClipboardOnParagraph = defineAsyncComponent(
  () => import('@/module/form/formWidgets/clipboard/ClipboardOnParagraph.vue')
)
const CopyPortion = defineAsyncComponent(
  () => import('@/module/form/formWidgets/clipboard/CopyPortion.vue')
)
</script>
