<template>
  <Card :headerTitle="'Sizes Modal'" :border="true" :padding="false" :cardBodyClass="'common-flex'">
    <template #header5>
      <p class="mt-1 f-m-light">
        Modals have three optional sizes, available via modifier classes to be placed on a
        <code>modal-dialog</code>.
      </p>
    </template>

    <div class="btn btn-secondary" @click="openModal('fullScreen')">Full Screen Modal</div>
    <div class="btn btn-info" @click="openModal('extraLarge')">Extra Large Modal</div>
    <button class="btn btn-success" type="button" @click="openModal('large')">Large Modal</button>
    <button class="btn btn-primary" type="button" @click="openModal('small')">Small Modal</button>

    <SizeModal
      :modalOpen="isModalOpen"
      :modalDetails="modalDetails"
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
  } else if (value == 'extraLarge') {
    modalDetails = { title: 'Extra Large Modal', sizeClass: 'modal-xl' }
  } else if (value == 'large') {
    modalDetails = { title: 'Large Modal', sizeClass: 'modal-lg' }
  } else if (value == 'small') {
    modalDetails = { title: 'Small Modal', sizeClass: 'modal-sm' }
  }
}
</script>
