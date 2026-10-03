<template>
  <Card
    :cardClass="'height-equal'"
    :headerTitle="'Title with a Text Under'"
    :border="true"
    :padding="false"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>Swal.fire</code> to display a SweetAlert2 popup with a title, message, and icon.
      </p>
    </template>

    <button class="btn btn-secondary sweet-2" type="button" @click="open()">Click it!</button>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import Swal from 'sweetalert2'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

function open() {
  Swal.fire({
    title: 'The Internet?',
    text: 'That thing is still around?',
    icon: 'question',
  })
}
</script>
