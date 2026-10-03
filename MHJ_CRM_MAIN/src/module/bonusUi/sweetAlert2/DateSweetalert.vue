<template>
  <Card :cardClass="'height-equal'" :headerTitle="'Date Alert'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>Swal.fire</code> to prompt the user to select a departure date, with the current
        date as the minimum allowed date.
      </p>
    </template>

    <button class="btn btn-danger sweet-14" type="button" @click="open()">Click it!</button>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import Swal from 'sweetalert2'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

async function open() {
  const { value: date } = await Swal.fire({
    title: 'Select departure date',
    input: 'date',
    didOpen: () => {
      const today = new Date().toISOString()
      const inputElement = Swal.getInput()
      if (inputElement) {
        inputElement.min = today.split('T')[0]
      }
    },
  })
  if (date) {
    Swal.fire('Departure date', date)
  }
}
</script>
