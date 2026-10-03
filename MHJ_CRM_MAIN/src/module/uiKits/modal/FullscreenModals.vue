<template>
  <Card
    :headerTitle="'Fullscreen Modals'"
    :border="true"
    :padding="false"
    :cardBodyClass="'common-flex'"
  >
    <template #header5>
      <p class="mt-1 f-m-light">
        Another override is the option to pop up a modal that covers the user viewport, available
        via modifier classes that are placed on a<code> modal-dialog</code>.
      </p>
    </template>
    <button class="btn btn-outline-secondary-2x" type="button" @click="openModal('fullScreen')">
      Fullscreen Modal
    </button>
    <button class="btn btn-outline-info-2x" type="button" @click="openModal('below-sm')">
      Fullscreen Below sm
    </button>
    <button class="btn btn-outline-success-2x" type="button" @click="openModal('below-md')">
      Fullscreen Below md
    </button>
    <button class="btn btn-outline-warning-2x" type="button" @click="openModal('below-lg')">
      Fullscreen Below lg
    </button>
    <button class="btn btn-outline-primary-2x" type="button" @click="openModal('below-xl')">
      Fullscreen Below xl
    </button>
    <button class="btn btn-outline-danger-2x" type="button" @click="openModal('below-xxl')">
      Fullscreen Below xxl
    </button>
    <SizeModal
      :modalOpen="isModalOpen"
      :modalDetails="modalDetails"
      :button="true"
      @closeModal="isModalOpen = false"
    />
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const SizeModal = defineAsyncComponent(
  () => import('@/module/uiKits/modal/sizesModal/SizeModal.vue')
)

let modalDetails = {
  title: '',
  sizeClass: '',
}
const isModalOpen = ref<boolean>(false)

function openModal(value: string) {
  isModalOpen.value = true
  if (value == 'fullScreen') {
    modalDetails = { title: 'Full Screen Modal', sizeClass: 'modal-fullscreen' }
  } else if (value == 'below-sm') {
    modalDetails = { title: 'Fullscreen Below sm', sizeClass: 'modal-fullscreen-sm-down' }
  } else if (value == 'below-md') {
    modalDetails = { title: 'Fullscreen Below md', sizeClass: 'modal-fullscreen-md-down' }
  } else if (value == 'below-lg') {
    modalDetails = { title: 'Fullscreen Below lg', sizeClass: 'modal-fullscreen-lg-down' }
  } else if (value == 'below-xl') {
    modalDetails = { title: 'Fullscreen Below xl', sizeClass: 'modal-fullscreen-xl-down' }
  } else if (value == 'below-xxl') {
    modalDetails = { title: 'Fullscreen Below xxl', sizeClass: 'modal-fullscreen-xxl-down' }
  }
}
</script>
