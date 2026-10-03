<template>
  <Card
    :headerTitle="'Basic Modals'"
    :border="true"
    :padding="false"
    :cardBodyClass="'common-flex'"
  >
    <template #header5>
      <p class="mt-1 f-m-light">
        Different types of basic modals using like
        <code>simple / scrolling / tooltips / grid / varying modal</code>.
      </p>
    </template>

    <button class="btn btn-secondary" type="button" @click="openModal('simpleModalOpen')">
      Simple
    </button>
    <button class="btn btn-success" type="button" @click="openModal('scrollingModalOpen')">
      Scrolling Content
    </button>
    <button class="btn btn-info" type="button" @click="openModal('tooltipModalOpen')">
      Tooltips and Popovers
    </button>
    <button class="btn btn-primary" type="button" @click="openModal('rihoModalOpen')">
      Open Modal for Riho
    </button>

    <SimpleModal :modalOpen="modals.simpleModalOpen" @closeModal="closeModal('simpleModalOpen')" />
    <ScrollingContentModal
      :modalOpen="modals.scrollingModalOpen"
      @closeModal="closeModal('scrollingModalOpen')"
    />
    <TooltipPopoverModal
      :modalOpen="modals.tooltipModalOpen"
      @closeModal="closeModal('tooltipModalOpen')"
    />
    <RihoModal :modalOpen="modals.rihoModalOpen" @closeModal="closeModal('rihoModalOpen')" />
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { modals } from '@/core/data/uiKits/modal'
import type { Modals } from '@/types/uiKits'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const RihoModal = defineAsyncComponent(
  () => import('@/module/uiKits/modal/basicModals/RihoModal.vue')
)
const SimpleModal = defineAsyncComponent(
  () => import('@/module/uiKits/modal/basicModals/SimpleModal.vue')
)
const ScrollingContentModal = defineAsyncComponent(
  () => import('@/module/uiKits/modal/basicModals/ScrollingContentModal.vue')
)
const TooltipPopoverModal = defineAsyncComponent(
  () => import('@/module/uiKits/modal/basicModals/TooltipPopoverModal.vue')
)

function openModal(type: keyof Modals) {
  modals[type] = true
}

function closeModal(type: keyof Modals) {
  modals[type] = false
}
</script>
