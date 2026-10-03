<template>
  <Card
    :headerTitle="'Copy Portion From Paragraph'"
    :border="true"
    :padding="false"
    :cardClass="'height-equal'"
  >
    <div class="clipboaard-container">
      <p class="card-description mb-2">Copy Portion From Paragraph</p>
      <h6 class="border rounded card-body f-w-300">
        <span class="bg-primary text-white p-1" id="clipboardExample4">{{ copyHighlightTxt }}</span>
        that are visible online. Take a website design course to learn how to create an appealing
        and responsive website. In the discipline of web design, there are degree, diploma,
        postgraduate degree, and certificate programmes. A web designer is responsible for a
        website's look, feel, and occasionally even content.
      </h6>
      <div class="mt-3 text-end">
        <button
          class="btn btn-secondary btn-clipboard"
          type="button"
          @click="copyFunction(copyHighlightTxt)"
        >
          <i class="fa fa-copy"></i>
          Copy highlighted text
        </button>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import Swal from 'sweetalert2'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const copyHighlightTxt = ref<string>('Web design is the process of creating websites')

function copyFunction(txt: string) {
  navigator.clipboard.writeText(txt)
  Swal.fire({
    title: 'Copied to Clipboard',
    icon: 'success',
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  })
}
</script>
