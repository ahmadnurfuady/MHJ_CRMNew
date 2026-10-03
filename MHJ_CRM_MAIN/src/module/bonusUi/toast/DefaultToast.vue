<template>
  <Card
    :cardClass="'height-equal'"
    :headerTitle="'Default Toast'"
    :border="true"
    :padding="false"
    :cardBodyClass="'toast-rtl'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use<code> hide </code>class to hide toast and <code>show </code>class to visible toast.
      </p>
    </template>

    <div class="toast default-show-toast toast" :class="showToast ? 'show' : 'hide'">
      <div class="toast-header toast-img">
        <img class="rounded me-2" :src="getImages('dashboard/profile.png')" alt="profile" />
        <strong class="me-auto">Oliva Theme</strong>
        <small class="d-sm-block d-none">10 min ago</small>
        <button class="btn-close" type="button" @click="closeToast()"></button>
      </div>
      <div class="toast-body toast-dark">
        <strong class="txt-success">Well done!</strong> You successfully read this important
        message.
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'

import { getImages } from '@/utils'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const showToast = ref<boolean>(true)

function closeToast() {
  showToast.value = false
}
</script>
