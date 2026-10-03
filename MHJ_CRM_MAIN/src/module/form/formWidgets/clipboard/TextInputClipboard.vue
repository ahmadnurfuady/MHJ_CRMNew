<template>
  <Card :headerTitle="'Clipboard on text input'" :border="true" :padding="false">
    <div class="clipboaard-container">
      <p class="card-description mb-2">Cut/copy from text input</p>

      <input
        class="form-control"
        type="text"
        name="clipboardExample1"
        placeholder="Type some text to copy / cut"
        v-model="clipboardExample1"
      />

      <div class="mt-3 text-end">
        <button
          class="btn btn-primary btn-clipboard me-1"
          type="button"
          @click="copyFunction(clipboardExample1)"
        >
          <i class="fa fa-copy"></i>
          Copy
        </button>
        <button
          class="btn btn-secondary btn-clipboard-cut"
          type="button"
          @click="cutFunction('clipboardExample1')"
        >
          <i class="fa fa-cut"></i>
          Cut
        </button>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import Swal from 'sweetalert2'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const clipboardExample1 = ref<string>('')

function showAlert(message: string, icon: 'success' | 'error') {
  Swal.fire({
    title: message,
    icon: icon,
    toast: true,
    timer: 2500,
    timerProgressBar: true,
    showConfirmButton: false,
    position: 'top-end',
  })
}

function copyFunction(txt: string) {
  if (!txt.trim()) {
    showAlert('Please enter some text before copying!', 'error')
    return
  }
  navigator.clipboard.writeText(txt)
  showAlert('Copied to clipboard!', 'success')
}

function cutFunction(field: string) {
  switch (field) {
    case 'clipboardExample1':
      if (!clipboardExample1.value.trim()) {
        showAlert('Nothing to cut!', 'error')
        return
      }
      navigator.clipboard.writeText(clipboardExample1.value)
      clipboardExample1.value = ''
      showAlert('Cut and cleared!', 'success')
      break
  }
}
</script>
