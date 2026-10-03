<template>
  <Card
    :cardClass="'height-equal'"
    :headerTitle="'Password Generator Alert'"
    :border="true"
    :padding="false"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>Swal.fire</code> to prompt the user to enter their password securely, and display
        the entered password if provided.
      </p>
    </template>

    <button class="btn btn-primary sweet-13" type="button" @click="open()">Click it!</button>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import Swal from 'sweetalert2'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

async function open() {
  const { value: password } = await Swal.fire({
    title: 'Enter your password',
    input: 'password',
    inputLabel: 'Password',
    inputPlaceholder: 'Enter your password',
    inputAttributes: {
      maxlength: '10',
      autocapitalize: 'off',
      autocorrect: 'off',
    },
  })
  if (password) {
    Swal.fire(`Entered password: ${password}`)
  }
}
</script>
