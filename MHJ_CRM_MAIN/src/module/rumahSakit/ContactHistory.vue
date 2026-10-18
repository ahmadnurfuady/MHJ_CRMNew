<template>
  <div class="modal-header p-20">
    <h6 class="modal-title w-100 common-space">
      Riwayat Rumah Sakit
      <span class="pull-right">
        <a class="close-history" href="#" @click.prevent="closeHistory()">
          <SolarIcon name="icofont-close" class="icofont" />
        </a>
      </span>
    </h6>
  </div>
  <div class="history-details">
    <div class="text-center">
      <SolarIcon name="icofont-ui-edit" class="icofont" />
      <p>Rumah Sakit belum pernah diubah.</p>
    </div>
    <div class="d-flex">
      <SolarIcon name="icofont-star" class="icofont" />
      <div class="flex-grow-1 mt-0">
        <h6 class="mt-0">Rumah Sakit Dibuat</h6>
        <p class="mb-0">Data rumah sakit dibuat</p>
        <span class="f-12 c-light">Jan 12, 2025 4:00</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useContact } from '@/store/contact'

const contactStore = useContact()
const { contactState } = storeToRefs(contactStore)

function closeHistory() {
  contactState.value.historyVisible = false
}
</script>
