<template>
  <Card
    :cardClass="'height-equal'"
    :headerTitle="'Confirmation with Approvals'"
    :border="true"
    :padding="false"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>Swal.mixin</code> to create a custom-styled confirmation dialog with Bootstrap
        buttons. The dialog asks the user if they are sure about deleting an item, and shows a
        success or error message depending on their response.
      </p>
    </template>

    <button class="btn btn-primary sweet-11" type="button" @click="open()">Click it!</button>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import Swal from 'sweetalert2'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

function open() {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger',
    },
    buttonsStyling: false,
  })
  swalWithBootstrapButtons
    .fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire({
          title: 'Cancelled',
          text: 'Your imaginary file is safe :)',
          icon: 'error',
        })
      }
    })
}
</script>
