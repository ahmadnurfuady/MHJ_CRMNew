<template>
  <Card :headerTitle="props.title" :border="true" :padding="false">
    <div
      class="horizontal-wizard-wrapper vertical-variations"
      :class="{ 'vertical-options': type === 'vertical' }"
    >
      <div class="row g-3">
        <div class="col-12 main-horizontal-header" :class="{ 'col-xl-3': type === 'vertical' }">
          <div class="nav nav-pills horizontal-options">
            <template v-for="(tab, index) of businessWizard" :key="index">
              <a
                class="nav-link"
                :class="{ active: activeTab === index + 1 }"
                @click="handleTab(index + 1)"
              >
                <div class="horizontal-wizard">
                  <div class="stroke-icon-wizard">
                    <span>{{ tab.id }}</span>
                  </div>
                  <div class="horizontal-wizard-content">
                    <h6>{{ tab.title }}</h6>
                  </div>
                </div>
              </a>
            </template>
          </div>
        </div>
        <div class="col-12" :class="{ 'col-xl-9': type === 'vertical' }">
          <div class="tab-content dark-field">
            <div class="tab-pane fade show active">
              <BusinessWizardChooseAccount
                :form="form.account"
                :formSubmitted="formSubmitted"
                v-if="activeTab === 1"
              />
              <BusinessWizardBusinessSetting
                :form="form.businessSetting"
                :formSubmitted="formSubmitted"
                v-if="activeTab === 2"
              />
              <BusinessWizardContactDetails
                :form="form.contactDetails"
                :formSubmitted="formSubmitted"
                v-if="activeTab === 3"
              />
              <BusinessWizardPayDetails
                :form="form.payDetails"
                :formSubmitted="formSubmitted"
                v-if="activeTab === 4"
              />
              <BusinessWizardComplete v-if="activeTab === 5" />

              <div class="common-flex justify-content-end mt-4">
                <template v-if="activeTab !== 1 && activeTab !== businessWizard.length">
                  <button class="btn btn-primary" @click="handleStep(-1)">Previous</button>
                </template>
                <template v-if="activeTab >= 1 && activeTab < businessWizard.length">
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
import { businessWizard } from '@/core/data/forms/formLayout'
import type { BusinessWizard } from '@/types/forms/formLayout'
import { validateForm } from '@/utils/validators/formValidators'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const BusinessWizardChooseAccount = defineAsyncComponent(
  () =>
    import('@/module/form/formLayout/formWizardTwo/businessWizard/BusinessWizardChooseAccount.vue')
)
const BusinessWizardBusinessSetting = defineAsyncComponent(
  () =>
    import(
      '@/module/form/formLayout/formWizardTwo/businessWizard/BusinessWizardBusinessSetting.vue'
    )
)
const BusinessWizardContactDetails = defineAsyncComponent(
  () =>
    import('@/module/form/formLayout/formWizardTwo/businessWizard/BusinessWizardContactDetails.vue')
)
const BusinessWizardPayDetails = defineAsyncComponent(
  () => import('@/module/form/formLayout/formWizardTwo/businessWizard/BusinessWizardPayDetails.vue')
)
const BusinessWizardComplete = defineAsyncComponent(
  () => import('@/module/form/formLayout/formWizardTwo/businessWizard/BusinessWizardComplete.vue')
)

const props = withDefaults(
  defineProps<{
    title?: string
    type?: string
  }>(),
  {
    title: 'Business Vertical Wizard',
  }
)

const activeTab = ref<number>(1)
const form = reactive<BusinessWizard>({
  account: {
    accountType: '',
  },
  businessSetting: {
    accountName: initInputField(),
    email: initInputField(),
    projectDescription: initInputField(),
    project: [],
  },
  contactDetails: {
    organizationName: initInputField(),
    email: initInputField(),
    organizationType: initSelectField(),
    organizationDescription: initInputField(),
  },
  payDetails: {
    cardHolder: initInputField(),
    cardNumber: initInputField(),
    expiration: initInputField(),
    cvv: initInputField(),
    isInformationCorrect: initCheckboxField(),
  },
})

const formSubmitted = ref<boolean>(false)
const formGroup = ['account', 'businessSetting', 'contactDetails', 'payDetails']

function handleTab(value: number) {
  if (value) {
    activeTab.value = value
  }
}

function handleStep(value: number) {
  if (value == -1) {
    activeTab.value = activeTab.value - 1
  } else if (value == 1 && activeTab.value < businessWizard.length) {
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
</script>
