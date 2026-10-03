<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <TwoFactorAuthentication />
      </div>
      <div class="col-sm-12">
        <Card :cardBodyClass="'email-verify'">
          <div class="row g-3">
            <div class="col-md-6">
              <EmailVerification />
            </div>
            <div class="col-md-6">
              <VerificationCode />
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const TwoFactorAuthentication = defineAsyncComponent(
  () => import('@/module/form/formLayout/twoFactor/TwoFactorAuthentication.vue')
)
const EmailVerification = defineAsyncComponent(
  () => import('@/module/form/formLayout/twoFactor/EmailVerification.vue')
)
const VerificationCode = defineAsyncComponent(
  () => import('@/module/form/formLayout/twoFactor/VerificationCode.vue')
)
</script>
