<template>
  <Modal
    :title="'Add Seller'"
    :modalOpen="props.modalOpen"
    :sizeClass="'modal-xl'"
    :contentClass="'add-seller-modal'"
    :modalCentered="true"
    @closeModal="closeModal()"
  >
    <div class="modal-body basic-wizard important-validation">
      <div class="stepper-horizontal custom-scrollbar" id="stepper1">
        <template v-for="(tab, index) in addSellerTabs" :key="index">
          <div
            :class="[
              `stepper-${tab.class}`,
              {
                'active done':
                  tab.id < activeTab ||
                  (activeTab === addSellerTabs.length && tab.id === addSellerTabs.length),
              },
            ]"
          >
            <div class="step-circle">
              <span>{{ tab.id }}</span>
            </div>
            <div class="step-title">{{ tab.title }}</div>
            <div class="step-bar-left"></div>
            <div class="step-bar-right"></div>
          </div>
        </template>
      </div>
      <div id="form">
        <SellerPersonalInfo v-if="activeTab === 1" />
        <CompanyContactDetails v-if="activeTab === 2" />
        <CompanyOverview v-if="activeTab === 3" />
        <FinancialInfo v-if="activeTab === 4" />
        <template v-if="activeTab === 5">
          <form class="stepper-five row g-3 needs-validation" novalidate>
            <div class="col-12 m-0"></div>
            <div class="successful-form">
              <img
                class="img-fluid"
                :src="`${getImages('gif/dashboard-8/successful.gif')}`"
                alt="successful"
              />
              <h5>Congratulations</h5>
              <p>Well done! You have successfully completed.</p>
            </div>
          </form>
        </template>
      </div>
      <div class="wizard-footer d-flex gap-2 justify-content-end">
        <button
          class="btn button-light-primary"
          id="back-btn"
          @click="handleStep(-1)"
          :disabled="activeTab == 1"
        >
          Back
        </button>
        <button class="btn btn-primary" id="next-btn" @click="handleStep(1)">
          {{ activeTab == addSellerTabs.length ? 'Finish' : 'Next' }}
        </button>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { addSellerTabs } from '@/core/data/seller'
import { getImages } from '@/utils/index'

const Modal = defineAsyncComponent(() => import('@/components/shared/Modal.vue'))
const SellerPersonalInfo = defineAsyncComponent(
  () => import('@/module/ecommerce/seller/SellerPersonalInfo.vue')
)
const CompanyContactDetails = defineAsyncComponent(
  () => import('@/module/ecommerce/seller/CompanyContactDetails.vue')
)
const CompanyOverview = defineAsyncComponent(
  () => import('@/module/ecommerce/seller/CompanyOverview.vue')
)
const FinancialInfo = defineAsyncComponent(
  () => import('@/module/ecommerce/seller/FinancialInfo.vue')
)

const props = defineProps<{
  modalOpen: boolean
}>()

const emits = defineEmits(['closeModal'])
const activeTab = ref<number>(1)

function closeModal() {
  emits('closeModal')
}

function handleStep(value: number) {
  if (value == -1) {
    activeTab.value = activeTab.value - 1
  } else if (value == 1 && activeTab.value < addSellerTabs.length) {
    activeTab.value = activeTab.value + 1
  } else if (activeTab.value == 5) {
    activeTab.value = 1
    closeModal()
  }
}
</script>
