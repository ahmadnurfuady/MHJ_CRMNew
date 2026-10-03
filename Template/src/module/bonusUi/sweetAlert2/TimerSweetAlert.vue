<template>
  <Card
    :cardClass="'height-equal'"
    :headerTitle="'Auto Close Timer'"
    :border="true"
    :padding="false"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>Swal.fire</code> to display an auto-closing alert with a countdown timer and
        progress bar.
      </p>
    </template>

    <button class="btn btn-danger sweet-9" type="button" @click="open()">Click it!</button>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import Swal from 'sweetalert2'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

function open() {
  let timerInterval: ReturnType<typeof setInterval>
  Swal.fire({
    title: 'Auto close alert!',
    html: 'I will close in <b></b> milliseconds.',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading()
      const timer = Swal?.getPopup()?.querySelector('b')
      if (timer)
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`
        }, 100)
    },
    willClose: () => {
      clearInterval(timerInterval)
    },
  })
}
</script>
