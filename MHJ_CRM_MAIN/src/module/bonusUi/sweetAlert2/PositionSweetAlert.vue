<template>
  <Card :cardClass="'height-equal'" :headerTitle="props.title" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        To set the position of a SweetAlert2 alert in Angular, use
        <code>position: '{{ position }}'</code>.
      </p>
    </template>

    <button :class="`btn btn-${buttonColor} sweet-16`" type="button" @click="open()">
      Click it!
    </button>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import Swal, { type SweetAlertPosition } from 'sweetalert2'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const props = defineProps<{
  title: string
  position: SweetAlertPosition
  buttonColor: string
}>()

function open() {
  Swal.fire({
    title: 'Signed in successfully',
    icon: 'success',
    toast: true,
    position: props.position,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  })
}
</script>
