<template>
  <Card
    :headerTitle="'Live Toast'"
    :border="true"
    :padding="false"
    :cardBodyClass="'position-relative common-flex live-toast'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>hide </code>class to hide toast and <code>show </code>class to visible toast and
        given directions.<code>[top-0/bottom-0/start-0/end-0]</code>
      </p>
    </template>

    <button class="btn btn-primary" type="button" @click="showToast('topRight')">
      Top-right Toast
    </button>
    <div class="toast-container position-fixed top-0 end-0 p-3 toast-index toast-rtl">
      <div class="toast toast fade" :class="{ show: toast['topRight'] }">
        <div class="toast-header toast-img">
          <img class="rounded me-2" :src="getImages('dashboard/profile.png')" alt="profile" />
          <strong class="me-auto">Yuri Theme</strong><small>5 min ago</small>
          <button class="btn-close" type="button" @click="closeToast('topRight')"></button>
        </div>
        <div class="toast-body toast-dark">Hello, I'm a web-designer.</div>
      </div>
    </div>

    <button class="btn btn-secondary" type="button" @click="showToast('bottomRight')">
      Bottom-right Toast
    </button>
    <div class="toast-container position-fixed bottom-0 end-0 p-3 toast-index toast-rtl">
      <div class="toast toast fade" :class="{ show: toast['bottomRight'] }">
        <div class="d-flex justify-content-between alert-secondary">
          <div class="toast-body">Your time over after 5 minute.</div>
          <button
            class="btn-close btn-close-white me-2 m-auto"
            type="button"
            @click="closeToast('bottomRight')"
          ></button>
        </div>
      </div>
    </div>

    <button class="btn btn-warning" type="button" @click="showToast('topLeft')">
      Top-left Toast
    </button>
    <div class="toast-container position-fixed start-0 top-0 p-3 toast-index toast-rtl">
      <div class="toast toast fade" :class="{ show: toast['topLeft'] }">
        <div class="toast-header toast-img">
          <img class="rounded me-2" :src="getImages('dashboard/profile.png')" alt="profile" />
          <strong class="me-auto">Riho Theme</strong>
          <small class="d-sm-block d-none">10 min ago</small>
          <button class="btn-close" type="button" @click="closeToast('topLeft')"></button>
        </div>
        <div class="toast-body toast-dark">
          <strong class="txt-success">Well done!</strong> You successfully read this important
          message.
        </div>
      </div>
    </div>

    <button class="btn btn-success" type="button" @click="showToast('bottomLeft')">
      Bottom-left Toast
    </button>
    <div class="toast-container position-fixed start-0 bottom-0 p-3 toast-index toast-rtl">
      <div class="toast toast fade" :class="{ show: toast['bottomLeft'] }">
        <div class="toast-header toast-img">
          <img class="rounded me-2" :src="getImages('dashboard/profile.png')" alt="profile" />
          <strong class="me-auto">Mofi Theme</strong>
          <button class="btn-close" type="button" @click="closeToast('bottomLeft')"></button>
        </div>
        <div class="toast-body toast-dark">
          <h6 class="mb-2">Your account will be permanently deleted?</h6>
          <p class="mb-0">Do you intend to continue?</p>
          <div class="mt-2 pt-2 border-top d-flex gap-2">
            <button class="btn btn-dark btn-sm" type="button">I'm not sure</button>
            <button class="btn btn-danger btn-sm" type="button" @click="closeToast('bottomLeft')">
              Remove My Account
            </button>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref, onBeforeUnmount } from 'vue'
import { getImages } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const toast = ref({
  topRight: false,
  bottomRight: false,
  topLeft: false,
  bottomLeft: false,
})

const toastTimers: Partial<Record<keyof typeof toast.value, number>> = {}

function showToast(value: keyof typeof toast.value) {
  toast.value[value] = true
  if (toastTimers[value]) {
    clearTimeout(toastTimers[value])
  }
  toastTimers[value] = window.setTimeout(() => {
    toast.value[value] = false
    delete toastTimers[value]
  }, 5000)
}

function closeToast(value: keyof typeof toast.value) {
  toast.value[value] = false
  if (toastTimers[value]) {
    clearTimeout(toastTimers[value])
    delete toastTimers[value]
  }
}

onBeforeUnmount(() => {
  Object.values(toastTimers).forEach((timer) => {
    if (timer) clearTimeout(timer)
  })
})
</script>
