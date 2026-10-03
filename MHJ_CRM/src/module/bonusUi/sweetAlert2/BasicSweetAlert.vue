<template>
  <Card :cardClass="'height-equal'" :headerTitle="'Basic Example'" :border="true" :padding="false">
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
  Swal.fire({ title: 'Welcome! to the riho theme!' })
}
</script>
