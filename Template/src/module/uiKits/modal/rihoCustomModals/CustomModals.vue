<template>
  <Card :headerTitle="'Riho Custom Modals'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">Custom modal made by Riho.</p>
    </template>

    <div class="row g-3">
      <div class="col-xl-4 col-md-6 custom-alert text-center">
        <CustomModalCard :title="dialog1Title" :description="dialog1Description">
          <button
            class="btn btn-primary mx-auto mt-3"
            type="button"
            @click="openModal('profileModal')"
          >
            Click Here
          </button>
        </CustomModalCard>
      </div>
      <div class="col-xl-4 col-md-6 custom-alert text-center">
        <CustomModalCard :title="dialog2Title" :description="dialog2Description">
          <button
            class="btn btn-primary mx-auto mt-3"
            type="button"
            @click="openModal('resultModal')"
          >
            Click Here
          </button>
        </CustomModalCard>
      </div>
      <div class="col-xl-4 col-md-12 custom-alert text-center">
        <CustomModalCard :title="dialog3Title" :description="dialog3Description">
          <button
            class="btn btn-primary mx-auto mt-3"
            type="button"
            @click="openModal('balanceModal')"
          >
            Click Here
          </button>
        </CustomModalCard>
      </div>
    </div>
  </Card>

  <ProfileModal :modalOpen="modals.profileModal" @closeModal="closeModal('profileModal')" />
  <ResultModal :modalOpen="modals.resultModal" @closeModal="closeModal('resultModal')" />
  <BalanceModal :modalOpen="modals.balanceModal" @closeModal="closeModal('balanceModal')" />
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { modals } from '@/core/data/uiKits/modal'
import type { Modals } from '@/types/uiKits'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const CustomModalCard = defineAsyncComponent(
  () => import('@/module/uiKits/modal/rihoCustomModals/CustomModalCard.vue')
)
const ProfileModal = defineAsyncComponent(
  () => import('@/module/uiKits/modal/rihoCustomModals/ProfileModal.vue')
)
const ResultModal = defineAsyncComponent(
  () => import('@/module/uiKits/modal/rihoCustomModals/ResultModal.vue')
)
const BalanceModal = defineAsyncComponent(
  () => import('@/module/uiKits/modal/rihoCustomModals/BalanceModal.vue')
)

const dialog1Title = ref<string>('<span>Dialog 1 -</span>Profile Dialog')
const dialog1Description = ref<string>('Example of riho dashboard profile card.')

const dialog2Title = ref<string>('<span>Dialog 2 -</span>Result Dialog')
const dialog2Description = ref<string>('Example of riho login-form.')

const dialog3Title = ref<string>('<span>Dialog 3 -</span>Balance Dialog')
const dialog3Description = ref<string>('Example of riho dashboard balance card.')

function openModal(value: keyof Modals) {
  modals[value] = true
}

function closeModal(type: keyof Modals) {
  modals[type] = false
}
</script>
