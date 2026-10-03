<template>
  <Card
    :headerTitle="'Offcanvas Variations'"
    :border="true"
    :padding="false"
    :cardBodyClass="'common-flex common-offcanvas'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use<code> data-bs-scroll </code>attribute to enable <code>&lt;body&gt; </code>scrolling
        class and clicking outside of the offcanvas will not cause it to close if the backdrop is
        static.
      </p>
    </template>

    <button class="btn btn-info" type="button" @click="openScrolling()">
      Enable Body Scrolling
    </button>

    <button class="btn btn-warning" type="button" @click="openBackdropScrolling()">
      Enable Both Scrolling &amp; Backdrop
    </button>

    <button class="btn btn-info" type="button" @click="openStatic()">
      Toggle Static Offcanvas
    </button>

    <component
      :is="OffcanvasProjectForm"
      :details="details"
      v-if="details.direction"
      @closeOffcanvas="handleOffcanvas()"
    />
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import { offcanvasDetails } from '@/core/data/uiKits/offcanvas'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const OffcanvasProjectForm = defineAsyncComponent(
  () => import('@/module/uiKits/offcanvas/OffcanvasProjectForm.vue')
)

const details = ref(offcanvasDetails.value)

function openScrolling() {
  details.value = {
    ...details.value,
    title: 'Offcanvas Body Scrolling',
    direction: 'start',
    backdrop: false,
  }
}

function openBackdropScrolling() {
  details.value = {
    ...details.value,
    title: 'Backdrop with Scrolling',
    direction: 'start',
  }
}

function openStatic() {
  details.value = {
    ...details.value,
    title: 'Static Offcanvas',
    direction: 'start',
    outsideClose: false,
  }
}

function handleOffcanvas() {
  details.value = offcanvasDetails.value
}
</script>
