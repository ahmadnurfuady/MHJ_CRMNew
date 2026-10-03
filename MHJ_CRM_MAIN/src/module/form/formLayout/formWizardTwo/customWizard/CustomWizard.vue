<template>
  <Card :headerTitle="props.title" :border="true" :padding="false">
    <div class="horizontal-wizard-wrapper" :class="{ 'vertical-options': type === 'vertical' }">
      <div class="row g-3">
        <div class="col-12 main-horizontal-header" :class="{ 'col-md-3': type === 'vertical' }">
          <div class="nav nav-pills horizontal-options" id="horizontal-wizard-tab">
            <template v-for="(tab, index) in customWizard" :key="index">
              <a
                class="nav-link"
                :class="{ active: activeTab === index + 1 }"
                @click="handleTab(index + 1)"
              >
                <div class="horizontal-wizard">
                  <div class="stroke-icon-wizard">
                    <i :class="`fa-solid fa-${tab.icon}`"></i>
                  </div>
                  <div class="horizontal-wizard-content">
                    <h6>{{ tab.title }}</h6>
                  </div>
                </div></a
              >
            </template>
          </div>
        </div>
        <div class="col-12" :class="{ 'col-md-9': type === 'vertical' }">
          <div class="tab-content dark-field" id="horizontal-wizard-tabContent">
            <div class="tab-pane fade show active">
              <CustomWizardPersonalInfo
                :form="form.personalInfo"
                :formSubmitted="formSubmitted"
                v-if="activeTab === 1"
              />
              <CustomWizardConnectAccount
                :form="form.connectBankAccount"
                :formSubmitted="formSubmitted"
                v-if="activeTab === 2"
              />
              <CustomWizardInquiries
                :form="form.inquiries"
                :formSubmitted="formSubmitted"
                v-if="activeTab === 3"
              />
              <CustomWizardComplete v-if="activeTab === 4" />

              <div class="common-flex justify-content-end mt-4">
                <template v-if="activeTab !== 1 && activeTab !== customWizard.length">
                  <button class="btn btn-primary" @click="handleStep(-1)">Previous</button>
                </template>
                <template v-if="activeTab >= 1 && activeTab < customWizard.length">
                  <button type="submit" class="btn btn-primary" @click="handleStep(1)">
                    Continue
                  </button>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, reactive, defineAsyncComponent } from 'vue'

import { initCheckboxField, initInputField, initSelectField } from '@/core/data/common'
import { customWizard } from '@/core/data/forms/formLayout'
import type { CustomWizard } from '@/types/forms/formLayout'
import { validateForm } from '@/utils/validators/formValidators'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const CustomWizardPersonalInfo = defineAsyncComponent(
  () => import('@/module/form/formLayout/formWizardTwo/customWizard/CustomWizardPersonalInfo.vue')
)
const CustomWizardConnectAccount = defineAsyncComponent(
  () => import('@/module/form/formLayout/formWizardTwo/customWizard/CustomWizardConnectAccount.vue')
)
const CustomWizardInquiries = defineAsyncComponent(
  () => import('@/module/form/formLayout/formWizardTwo/customWizard/CustomWizardInquiries.vue')
)
const CustomWizardComplete = defineAsyncComponent(
  () => import('@/module/form/formLayout/formWizardTwo/customWizard/CustomWizardComplete.vue')
)

const props = withDefaults(
  defineProps<{
    title?: string
    type?: string
  }>(),
  {
    title: 'Custom Horizontal Wizard',
  }
)

const activeTab = ref<number>(1)
const form = reactive<CustomWizard>({
  personalInfo: {
    firstName: initInputField(),
    lastName: initInputField(),
    email: initInputField(),
    state: initSelectField(),
    postalCode: initInputField(),
    contactNumber: initInputField(),
    infoAgreement: initCheckboxField(),
  },
  connectBankAccount: {
    aadharNumber: initInputField(),
    panNumber: initInputField(),
    bank: [],
  },
  inquiries: {
    selectNotificationPlatform: '',
    email: initInputField(),
    contactNumber: initInputField(),
    reason: initInputField(),
  },
})

const formSubmitted = ref<boolean>(false)
const formGroup = ['personalInfo', 'connectBankAccount', 'inquiries']
const nonRequiredField = ref<string[]>([])

function handleTab(value: number) {
  if (value) {
    activeTab.value = value
  }
}

function handleStep(value: number) {
  if (value == -1) {
    activeTab.value = activeTab.value - 1
  } else if (value == 1 && activeTab.value < customWizard.length) {
    formSubmitted.value = true
    const currentFormKey = formGroup[activeTab.value - 1]
    const currentForm = form[currentFormKey as keyof typeof form]

    if (activeTab.value === 3) {
      nonRequiredField.value = ['reason']
    }

    if (currentForm) {
      const { isValid, formData } = validateForm(currentForm, nonRequiredField.value)

      if (isValid) {
        activeTab.value = activeTab.value + 1
        formSubmitted.value = false
      }
    } else {
      activeTab.value = activeTab.value + 1
    }
  }
}
</script>
