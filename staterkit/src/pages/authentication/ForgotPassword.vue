<template>
  <div class="container-fluid p-0">
    <div class="row">
      <div class="col-12">
        <div class="login-card login-dark">
          <div>
            <div>
              <router-link class="logo" :to="'/'">
                <img
                  class="img-fluid for-light"
                  :src="getImages('logo/logo_dark.png')"
                  alt="logo"
                />
                <img class="img-fluid for-dark" :src="getImages('logo/logo.png')" alt="logo" />
              </router-link>
            </div>
            <div class="login-main">
              <form class="theme-form" @submit.prevent="sendOTP()">
                <h4>Forgot Password</h4>
                <div class="form-group">
                  <InputWrapper
                    :title="'Enter Your Mobile Number'"
                    :class="'col-form-label'"
                    :required="true"
                  >
                    <div class="row">
                      <div class="col-4 col-sm-3">
                        <Select
                          getValueKey="label"
                          display-key="label"
                          :placeholder="'Code'"
                          v-model="form.countryCode"
                          :options="countryCodes"
                          :formSubmitted="formSubmitted"
                          :errorMessage="'Please select a valid country code.'"
                        />
                      </div>
                      <div class="col-8 col-sm-9">
                        <InputField
                          :formSubmitted="formSubmitted"
                          :errorMessage="'Mobile number is required.'"
                          v-model:modelValue="form.contactNumber"
                          :inputId="'mobile-number'"
                        />
                      </div>
                      <div class="col-12">
                        <div class="text-end">
                          <button class="btn btn-primary btn-block m-t-10" type="submit">
                            Send
                          </button>
                        </div>
                      </div>
                    </div>
                  </InputWrapper>
                </div>
                <div class="mt-4 mb-4">
                  <span class="reset-password-link">
                    If don't receive OTP?  
                    <button
                      class="btn btn-link text-danger"
                      :disabled="!resendEnabled"
                      type="button"
                      @click.prevent="handleOTP()"
                    >
                      Resend
                    </button>
                    <span v-if="!resendEnabled && timer < 30" class="text-muted">
                      ({{ timer }}s)</span
                    >
                  </span>
                </div>
                <div class="form-group" v-if="otpSent">
                  <label class="col-form-label pt-0">Enter OTP</label>
                  <div class="row">
                    <div class="col" v-for="(digit, index) in otpDigits" :key="index">
                      <input
                        type="text"
                        class="form-control text-center opt-text"
                        maxlength="1"
                        v-model="otpDigits[index]"
                        @input="handleInput(index)"
                        @keydown="handleKeyDown(index, $event)"
                        ref="inputs"
                      />
                    </div>
                  </div>
                  <button
                    class="btn btn-primary btn-block w-100 mt-3"
                    type="button"
                    :class="{ disabled: showLoader }"
                    @click.prevent="verifyOTP()"
                  >
                    Verify
                    <i class="fa-solid fa-spinner fa-spin-pulse" v-if="showLoader"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, onUnmounted } from 'vue'

import { storeToRefs } from 'pinia'

import { countryCodes } from '@/core/data/country'
import { usePassword } from '@/store/handlePassword'
import { getImages } from '@/utils/index'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))

const passwordStore = usePassword()
const { form, formSubmitted, resendEnabled, timer, otpSent, otpDigits, showLoader, inputs } =
  storeToRefs(passwordStore)
const { sendOTP, handleOTP, handleInput, handleKeyDown, verifyOTP, clearTimers } = passwordStore

onUnmounted(() => {
  clearTimers()
})
</script>
