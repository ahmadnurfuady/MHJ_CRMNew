<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-6">
        <BasicModals />
      </div>
      <div class="col-lg-6">
        <SizesModals />
      </div>
      <div class="col-xl-12">
        <FullscreenModals />
      </div>
      <div class="col-xl-4 col-md-6">
        <Card :headerTitle="'Centered Modal'" :border="true" :padding="false">
          <template #header5>
            <p class="f-m-light mt-1">
              Use<code> modal-dialog-centered </code>through centered modal and set
              <code>data-bs-target </code>.
            </p>
          </template>
          <button class="btn btn-success" type="button" @click="openModal('centeredModal')">
            Vertically Centered
          </button>
        </Card>
      </div>
      <div class="col-xl-4 col-md-6">
        <Card :headerTitle="'Toggle Between Modal'" :border="true" :padding="false">
          <template #header5>
            <p class="f-m-light mt-1">
              Toggle between multiple modals with some clever placement of the
              <code>data-bs-target </code>and <code>data-bs-toggle</code> attributes.
            </p>
          </template>
          <a class="btn btn-dark" @click="openModal('connectAccountModal')">Open First Modal</a>
        </Card>
      </div>
      <div class="col-xl-4">
        <Card :headerTitle="'Static Backdrop Modal'" :border="true" :padding="false">
          <template #header5>
            <p class="f-m-light mt-1">
              When backdrop is set to static, the modal will not close when clicking outside of it.
              Click the button below to try it.
            </p>
          </template>
          <button class="btn btn-warning" type="button" @click="openModal('staticBackdrop')">
            Static Backdrop Modal
          </button>
        </Card>
      </div>
      <div class="col-md-6">
        <Card
          :cardClass="'height-equal'"
          :headerTitle="'Grid Modal'"
          :border="true"
          :padding="false"
        >
          <template #header5>
            <p class="f-m-light mt-1">
              Utilize the Bootstrap grid system within a modal by nesting
              <code> container-fluid </code> within the <code> modal-body</code> . Then, use the
              normal grid system classes as you would anywhere else.
            </p>
          </template>
          <button class="btn btn-warning" type="button" @click="openModal('gridModal')">
            Grid Modal
          </button>
        </Card>
      </div>
      <div class="col-md-6">
        <Card
          :cardClass="'height-equal'"
          :headerTitle="'Scrolling Long Content Modal'"
          :border="true"
          :padding="false"
        >
          <template #header5>
            <p class="f-m-light mt-1">
              You can also create a scrollable modal that allows scrolling the modal body by adding
              <code> modal-dialog-scrollable </code>to <code>modal-dialog</code>.
            </p>
          </template>
          <button
            class="btn btn-secondary"
            type="button"
            @click="openModal('scrollingContentModal')"
          >
            Scrolling Modal
          </button>
        </Card>
      </div>
      <div class="col-12">
        <CustomModals />
      </div>
    </div>
  </div>

  <CenteredModal :modalOpen="modals.centeredModal" @closeModal="closeModal('centeredModal')" />
  <ConnectAccountModal
    :modalOpen="modals.connectAccountModal"
    @closeModal="closeModal('connectAccountModal')"
  />
  <StaticBackdropModal
    :modalOpen="modals.staticBackdrop"
    @closeModal="closeModal('staticBackdrop')"
  />
  <GridModal :modalOpen="modals.gridModal" @closeModal="closeModal('gridModal')" />
  <ScrollingLongModal
    :modalOpen="modals.scrollingContentModal"
    @closeModal="closeModal('scrollingContentModal')"
  />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { modals } from '@/core/data/uiKits/modal'
import type { Modals } from '@/types/uiKits'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const BasicModals = defineAsyncComponent(
  () => import('@/module/uiKits/modal/basicModals/BasicModals.vue')
)
const SizesModals = defineAsyncComponent(
  () => import('@/module/uiKits/modal/sizesModal/SizeModals.vue')
)
const FullscreenModals = defineAsyncComponent(
  () => import('@/module/uiKits/modal/FullscreenModals.vue')
)
const CenteredModal = defineAsyncComponent(() => import('@/module/uiKits/modal/CenteredModal.vue'))
const ConnectAccountModal = defineAsyncComponent(
  () => import('@/module/uiKits/modal/ConnectAccountModal.vue')
)
const StaticBackdropModal = defineAsyncComponent(
  () => import('@/module/uiKits/modal/StaticBackdropModal.vue')
)
const GridModal = defineAsyncComponent(() => import('@/module/uiKits/modal/GridModal.vue'))
const ScrollingLongModal = defineAsyncComponent(
  () => import('@/module/uiKits/modal/ScrollingLongModal.vue')
)
const CustomModals = defineAsyncComponent(
  () => import('@/module/uiKits/modal/rihoCustomModals/CustomModals.vue')
)

function openModal(value: keyof Modals) {
  modals[value] = true
}

function closeModal(type: keyof Modals) {
  modals[type] = false
}
</script>
