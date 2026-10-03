<template>
  <Card :headerTitle="'Clipboard on textarea'" :border="true" :padding="false">
    <div class="clipboaard-container">
      <p class="card-description mb-2">Cut/copy from textarea</p>
      <textarea
        class="form-control"
        id="clipboardExample2"
        v-model="clipboardExample2"
        name="clipboardExample2"
        rows="1"
        spellcheck="false"
      ></textarea>
      <div class="mt-3 text-end">
        <button
          class="btn btn-primary btn-clipboard me-1"
          type="button"
          @click="copyFunction(clipboardExample2)"
        >
          <i class="fa fa-copy"></i>
          Copy
        </button>
        <button
          class="btn btn-secondary btn-clipboard-cut"
          type="button"
          @click="cutFunction('clipboardExample2')"
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

const clipboardExample2 = ref<string>(
  'A web designer must always enhance their work since creating websites is a creative effort. Therefore, a web designer must be more imaginative to produce exceptional results. Blogs about web design assist web designers in learning about new technologies, offer lessons, news, direction for a freebie, and much more. These blogs allow web designers to stay creative and improve their abilities. Therefore, advice from web design blogs is required to improve your business.'
)

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
      if (!clipboardExample2.value.trim()) {
        showAlert('Nothing to cut!', 'error')
        return
      }
      navigator.clipboard.writeText(clipboardExample2.value)
      clipboardExample2.value = ''
      showAlert('Cut and cleared!', 'success')
      break
  }
}
</script>
