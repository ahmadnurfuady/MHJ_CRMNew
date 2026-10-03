<template>
  <Card :cardClass="'height-equal'" :headerTitle="'Animated Alert'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">Use <code>Swal.fire </code>to open the sweetalert.</p>
    </template>

    <button class="btn btn-primary sweet-1" type="button" @click="open()">Click it!</button>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import Swal from 'sweetalert2'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

function open() {
  Swal.fire({
    title: 'Custom animation with Animate.css',
    showClass: {
      popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
    },
    hideClass: {
      popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
    },
  })
}
</script>
