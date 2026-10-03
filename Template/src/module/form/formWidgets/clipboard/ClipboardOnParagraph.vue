<template>
  <Card :headerTitle="'Clipboard On Paragraph'" :border="true" :padding="false">
    <div class="clipboaard-container">
      <p class="card-description mb-2">Copy from Paragraph</p>
      <h6 class="border rounded card-body f-w-400">
        {{ paragraphDetails }}
      </h6>
      <div class="mt-3 text-end">
        <button
          class="btn btn-info btn-clipboard"
          type="button"
          @click="copyFunction(paragraphDetails)"
        >
          <i class="fa fa-copy"></i>
          Copy
        </button>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import Swal from 'sweetalert2'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const paragraphDetails = ref<string>(
  "On that day, hopes and dreams were crushed. Even though it should have been anticipated, it nonetheless surprised me. The warning indicators have been disregarded in favour of the slim chance that it would actually occur. From a hopeful prospect, it had evolved into an unquestionable conviction that it must be fate. That was up until it wasn't, at which point all of the aspirations and dreams collapsed."
)

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
