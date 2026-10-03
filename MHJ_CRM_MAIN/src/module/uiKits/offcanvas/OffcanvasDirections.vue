<template>
  <Card
    :headerTitle="'Offcanvas Directions'"
    :border="true"
    :padding="false"
    :cardBodyClass="'common-flex common-offcanvas'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use<code> Offcanvas-* </code>[top/end/bottom/start] class allows you to modify the offcanvas
        direction.
      </p>
    </template>
    <button class="btn btn-primary" type="button" @click="openOffcanvas('top')">
      Top Offcanvas
    </button>

    <button class="btn btn-secondary" type="button" @click="openOffcanvas('end')">
      Right Offcanvas
    </button>

    <button class="btn btn-dark" type="button" @click="openOffcanvas('bottom')">
      Bottom Offcanvas
    </button>

    <button class="btn btn-success" type="button" @click="openOffcanvas('start')">
      Left Offcanvas
    </button>

    <component
      :is="activeComponent"
      :details="details"
      v-if="details.direction"
      @closeOffcanvas="handleOffcanvas()"
    />
  </Card>
</template>

<script setup lang="ts">
import { ref, computed, defineAsyncComponent } from 'vue'

import { offcanvasDetails } from '@/core/data/uiKits/offcanvas'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const OffcanvasProjectForm = defineAsyncComponent(
  () => import('@/module/uiKits/offcanvas/OffcanvasProjectForm.vue')
)
const OffcanvasUserForm = defineAsyncComponent(
  () => import('@/module/uiKits/offcanvas/OffcanvasUserForm.vue')
)

const details = ref(offcanvasDetails.value)

const activeComponent = computed(() => {
  const direction = details.value.direction
  if (direction === 'top' || direction === 'bottom') return OffcanvasUserForm
  if (direction === 'start' || direction === 'end') return OffcanvasProjectForm
  return null
})

function openOffcanvas(direction: string) {
  details.value = {
    ...details.value,
    title: `Offcanvas ${direction.charAt(0).toUpperCase() + direction.slice(1)}`,
    direction,
  }
}

function handleOffcanvas() {
  details.value = offcanvasDetails.value
}
</script>
