<template>
  <Card
    :cardClass="'height-equal'"
    :headerTitle="'Comprehensive RTL Support'"
    :border="true"
    :padding="false"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>Swal.fire</code> to display a confirmation dialog in Arabic asking the user if
        they want to continue, with "Yes" and "No" buttons.
      </p>
    </template>

    <button class="btn btn-secondary sweet-12" type="button" @click="open()">Click it!</button>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import Swal from 'sweetalert2'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

function open() {
  Swal.fire({
    title: 'هل تريد الاستمرار؟',
    icon: 'question',
    iconHtml: '؟',
    confirmButtonText: 'نعم',
    cancelButtonText: 'لا',
    showCancelButton: true,
    showCloseButton: true,
  })
}
</script>
