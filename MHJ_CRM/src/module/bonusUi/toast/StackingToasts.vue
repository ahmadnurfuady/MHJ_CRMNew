<template>
  <Card
    :headerTitle="'Stacking Toasts'"
    :border="true"
    :padding="false"
    :cardBodyClass="'toast-rtl'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        You can stack toasts by wrapping them in a toast container, which will vertically add some
        spacing.<code>[toast-*]</code> to change icons colors.
      </p>
    </template>

    <div class="toast-container position-static stacking-toast">
      <template v-for="toast in toasts" :key="toast.id">
        <div class="toast" :class="toast.show ? 'show' : 'hide'">
          <div class="toast-header">
            <vue-feather :type="toast.icon" :class="'toast-icons toast-' + toast.iconColor" />
            <strong class="me-auto">{{ toast.title }}</strong>
            <small :class="toast.time == 'just now' ? 'txt-danger' : 'txt-secondary'">{{
              toast.time
            }}</small>
            <button class="btn-close" type="button" @click="closeToast(toast.id)"></button>
          </div>
          <div class="toast-body toast-dark">{{ toast.description }}</div>
        </div>
      </template>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent, onBeforeUnmount } from 'vue'
import { stackingToast } from '@/core/data/bonusUI/toast'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const toasts = ref(stackingToast)

const toastTimers: Record<number, number> = {}

onMounted(() => {
  toasts.value.forEach((toast) => {
    if (!toast.show) return

    toastTimers[toast.id] = window.setTimeout(() => {
      toast.show = false
      delete toastTimers[toast.id]
    }, toast.timeOut)
  })
})

function closeToast(id: number) {
  const toast = toasts.value.find((t) => t.id === id)
  if (!toast) return
  toast.show = false
  if (toastTimers[id]) {
    clearTimeout(toastTimers[id])
    delete toastTimers[id]
  }
}

onBeforeUnmount(() => {
  Object.values(toastTimers).forEach((timer) => {
    if (timer) clearTimeout(timer)
  })
})
</script>
