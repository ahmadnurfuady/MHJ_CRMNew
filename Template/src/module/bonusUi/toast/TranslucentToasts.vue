<template>
  <Card
    :cardClass="'overflow-hidden'"
    :headerTitle="'Stacking Toasts'"
    :border="true"
    :padding="false"
    :cardBodyClass="'toast-rtl bg-dark'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use<code> hide </code>class to hide toast and <code>show </code>class to visible toast and
        given directions.<code>[toast-*]</code> to change icons colors.
      </p>
    </template>

    <div class="toast-container position-static stacking-toast">
      <template v-for="toast in toasts" :key="toast.id">
        <div class="toast" :class="toast.show ? 'show' : 'hide'">
          <div class="toast-header">
            <vue-feather :type="'disc'" :class="'toast-icons toast-' + toast.iconColor" />
            <strong class="me-auto">{{ toast.title }}</strong>
            <small
              class="text-muted d-sm-block d-none"
              :class="toast.time == 'just now' ? 'txt-danger' : 'txt-secondary'"
              >{{ toast.time }}</small
            >
            <button class="btn-close" type="button" @click="closeToast(toast.id)"></button>
          </div>
          <div class="toast-body toast-dark">{{ toast.description }}</div>
        </div>
      </template>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent, onMounted, onBeforeUnmount } from 'vue'
import { translucentToasts } from '@/core/data/bonusUI/toast'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const toasts = ref(translucentToasts)
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
