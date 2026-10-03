<template>
  <Card
    :headerTitle="'Message Toasts'"
    :border="true"
    :padding="false"
    :cardBodyClass="'common-flex common-toasts'"
  >
    <button class="btn btn-success" type="button" @click="showToast('success')">
      Success Toast
    </button>
    <div class="toast-container position-fixed top-0 end-0 p-3 toast-index toast-rtl">
      <div class="toast" :class="{ show: toast['success'] }">
        <div class="common-space alert-light-success">
          <div class="toast-body">
            <vue-feather :type="'check-square'" :class="'close-search stroke-success'" />
            Success: We've updated your info
          </div>
          <button
            class="btn-close"
            type="button"
            data-bs-dismiss="toast"
            aria-label="Close"
            @click="closeToast('success')"
          ></button>
        </div>
      </div>
    </div>

    <button class="btn btn-warning" type="button" @click="showToast('warning')">
      Warning Toast
    </button>
    <div class="toast-container position-fixed top-50 end-0 p-3 toast-index toast-rtl">
      <div class="toast" :class="{ show: toast['warning'] }">
        <div class="common-space alert-light-warning">
          <div class="toast-body">
            <vue-feather :type="'alert-triangle'" :class="'close-search stroke-warning'" />
            Software drivers needed to be updated in advance
          </div>
          <button class="btn-close" type="button" @click="closeToast('warning')"></button>
        </div>
      </div>
    </div>

    <button class="btn btn-danger" type="button" @click="showToast('error')">Error Toast</button>
    <div class="toast-container position-fixed bottom-0 end-0 p-3 toast-index toast-rtl">
      <div class="toast" :class="{ show: toast['error'] }">
        <div class="common-space alert-light-danger">
          <div class="toast-body">
            <vue-feather :type="'x-circle'" :class="'close-search stroke-danger'" />
            A database connection error has occurred
          </div>
          <button class="btn-close" type="button" @click="closeToast('error')"></button>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref, onBeforeUnmount } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const toast = ref({
  success: false,
  warning: false,
  error: false,
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
