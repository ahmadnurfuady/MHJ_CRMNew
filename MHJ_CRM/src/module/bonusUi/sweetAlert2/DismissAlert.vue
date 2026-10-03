<template>
  <Card :cardClass="'height-equal'" :headerTitle="'Dismiss Alert'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>Swal.fire</code> to display a SweetAlert2 popup with a title, message, and icon.
      </p>
    </template>

    <button class="btn btn-info sweet-3" type="button" @click="open()">Click it!</button>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import Swal from 'sweetalert2'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

function open() {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href="#">Why do I have this issue?</a>',
  })
}
</script>
