<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 p-0">
        <div>
          <div class="theme-form">
            <div class="wizard-4" id="wizard">
              <ul class="anchor">
                <li>
                  <router-link class="logo text-start ps-0" :to="'/'">
                    <img
                      class="img-fluid for-light"
                      :src="getImages('logo/logo_dark.png')"
                      alt="logo"
                    />
                    <img class="img-fluid for-dark" :src="getImages('logo/logo.png')" alt="logo" />
                  </router-link>
                </li>
                <li v-for="(tab, index) in registerTab" :key="index">
                  <a
                    href="#"
                    :class="
                      tab.id == activeTab
                        ? 'selected'
                        : tab.id < activeTab
                          ? 'done'
                          : tab.id > activeTab
                            ? 'disabled'
                            : ''
                    "
                  >
                    <h4>{{ index + 1 }}</h4>
                    <h5>{{ tab.title }}</h5>
                    <small>{{ tab.description }}</small>
                  </a>
                </li>
                <li>
                  <img :src="getImages('login/signup.png')" alt="image" />
                </li>
              </ul>
              <div class="step-container login-card">
                <div>
                  <RegisterPersonalInfo
                    :form="form.personalInfo"
                    :formSubmitted="formSubmitted"
                    v-if="activeTab === 1"
                  />
                  <RegisterAccountInfo
                    :form="form.accountInfo"
                    :formSubmitted="formSubmitted"
                    v-if="activeTab === 2"
                  />
                  <RegisterIdentityInfo
                    :form="form.identityInfo"
                    :formSubmitted="formSubmitted"
                    v-if="activeTab === 3"
                  />
                  <RegisterAddressInfo
                    :form="form.addressInfo"
                    :formSubmitted="formSubmitted"
                    v-if="activeTab === 4"
                  />
                </div>
              </div>
              <div class="action-bar">
                <button
                  class="btn btn-primary"
                  id="nextbtn"
                  @click="activeTab == registerTab.length ? finish() : handleStep(1)"
                >
                  {{ activeTab == registerTab.length ? 'Finish' : 'Next' }}
                </button>
                <button
                  class="btn btn-primary"
                  id="backbtn"
                  @click="handleStep(-1)"
                  :disabled="activeTab == 1"
                >
                  Previous
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch, defineAsyncComponent } from 'vue'

import { initInputField, initSelectField } from '@/core/data/common'
import { registerTab } from '@/core/data/registerWizard'
import type { RegisterWizardForm } from '@/types/registerWizard'
import { getImages, calculateAge } from '@/utils/index'
import { validateForm } from '@/utils/validators/formValidators'
import { toast } from 'vue3-toastify'

const RegisterPersonalInfo = defineAsyncComponent(
  () => import('@/module/auth/RegisterPersonalInfo.vue')
)
const RegisterAccountInfo = defineAsyncComponent(
  () => import('@/module/auth/RegisterAccountInfo.vue')
)
const RegisterIdentityInfo = defineAsyncComponent(
  () => import('@/module/auth/RegisterIdentityInfo.vue')
)
const RegisterAddressInfo = defineAsyncComponent(
  () => import('@/module/auth/RegisterAddressInfo.vue')
)

const activeTab = ref<number>(1)
const formSubmitted = ref<boolean>(false)
const formGroup = ['personalInfo', 'accountInfo', 'identityInfo', 'addressInfo']
const form = reactive<RegisterWizardForm>({
  personalInfo: {
    firstName: initInputField(),
    lastName: initInputField(),
    contact: initInputField(),
  },
  accountInfo: {
    email: initInputField(),
    password: initInputField(),
    confirmPassword: initInputField(),
  },
  identityInfo: {
    dob: initInputField(),
    age: initInputField(),
    havePassword: initSelectField(),
  },
  addressInfo: {
    country: initSelectField(),
    state: initSelectField(),
    city: initSelectField(),
  },
})

watch(
  () => form.identityInfo.dob.data,
  (newDob) => {
    if (newDob) {
      const age = calculateAge(newDob)
      if (age) {
        form.identityInfo.age.data = age
        form.identityInfo.age.errorMessage = ''
      }
    }
  }
)

function handleStep(value: number) {
  if (value == -1) {
    activeTab.value = activeTab.value - 1
  } else if (value == 1 && activeTab.value < registerTab.length) {
    formSubmitted.value = true
    const currentFormKey = formGroup[activeTab.value - 1]
    const currentForm = form[currentFormKey as keyof typeof form]

    if (currentForm) {
      const { isValid, formData } = validateForm(currentForm)

      if (isValid) {
        activeTab.value = activeTab.value + 1
        formSubmitted.value = false
      }
    } else {
      activeTab.value = activeTab.value + 1
    }
  }
}

function finish() {
  formSubmitted.value = true
  const currentFormKey = formGroup[activeTab.value - 1]
  const currentForm = form[currentFormKey as keyof typeof form]

  if (currentForm) {
    const { isValid } = validateForm(currentForm)

    if (isValid) {
      toast.success('Congratulation ! All step Done.')
      formSubmitted.value = false
    }
  }
}
</script>

<style scoped></style>
