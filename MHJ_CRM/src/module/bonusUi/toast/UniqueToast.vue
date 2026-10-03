<template>
  <Card
    :cardClass="'height-equal'"
    :headerTitle="'Unique Toast'"
    :border="true"
    :padding="false"
    :cardBodyClass="'toast-rtl'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use<code> hide </code>class to hide toast and <code>show </code>class to visible toast.
      </p>
    </template>

    <div class="toast fade" :class="showToast ? 'show' : 'hide'">
      <div class="toast-header toast-img">
        <img class="rounded me-2" :src="getImages('dashboard/profile.png')" alt="profile" />
        <strong class="me-auto">Poco Theme</strong>
        <button class="btn-close" type="button" @click="closeToast()"></button>
      </div>
      <div class="toast-body toast-dark">
        <h6 class="mb-2">Your account will be permanently deleted?</h6>
        <p class="mb-0">Do you intend to continue?</p>
        <div class="mt-2 pt-2 border-top d-flex gap-2">
          <button class="btn btn-dark btn-sm" type="button">I'm not sure</button>
          <button class="btn btn-danger btn-sm" type="button" @click="closeToast()">
            Remove My Account
          </button>
        </div>
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
