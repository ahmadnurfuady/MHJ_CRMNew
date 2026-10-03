<template>
  <Card :cardBodyClass="'authentication-body'">
    <div class="authentication-wrapper">
      <h5>Two-factor Authentication</h5>
      <p>Click on the authentication button below and scan the QR code</p>
      <img :src="getImages('forms/qr-scan.png')" alt="qr-scan" />
    </div>
    <a class="btn btn-primary mt-5" href="#" role="button" @click.prevent="openModal()"
      >2 Factor Authentication</a
    >
  </Card>

  <TwoFactorAuthenticationModal
    :modalOpen="authenticationModalOpen"
    @closeModal="authenticationModalOpen = false"
  />
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'

import { getImages } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const TwoFactorAuthenticationModal = defineAsyncComponent(
  () => import('@/module/form/formLayout/twoFactor/TwoFactorAuthenticationModal.vue')
)

const authenticationModalOpen = ref<boolean>(false)

function openModal() {
  authenticationModalOpen.value = true
}
</script>
