<template>
  <Card
    :cardClass="'height-equal'"
    :headerTitle="'Rich Html Alert'"
    :border="true"
    :padding="false"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>Swal.fire</code> to display a SweetAlert2 popup with rich HTML content, including
        formatted text, links, and icons.
      </p>
    </template>
    <button class="btn btn-warning sweet-4" type="button" @click="open()">Click it!</button>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import Swal from 'sweetalert2'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

function open() {
  Swal.fire({
    title: '<strong>HTML <u>example</u></strong>',
    icon: 'info',
    html: `
        You can use <b>bold text</b>,
        <a href="#">links</a>,
        and other HTML tags
      `,
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> Great!
      `,
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText: `
        <i class="fa fa-thumbs-down"></i>
      `,
    cancelButtonAriaLabel: 'Thumbs down',
  })
}
</script>
