<template>
  <Card
    :headerTitle="'Numbering Wizard'"
    :border="true"
    :padding="false"
    :cardClass="'height-equal'"
    :cardBodyClass="'basic-wizard important-validation'"
  >
    <template #header5>
      <p class="f-m-light mt-1">Fill up your details and proceed next steps.</p>
    </template>
    <div class="stepper-horizontal custom-scrollbar" id="stepper1">
      <template v-for="(tab, index) of numberingTabs" :key="index">
        <div
          :class="[
            `stepper-${tab.class}`,
            {
              'active done':
                tab.id < activeTab ||
                (activeTab === numberingTabs.length && tab.id === numberingTabs.length),
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
    <div id="msform">
      <NumericWizardBasicInfo
        :form="form.basicInfo"
        :formSubmitted="formSubmitted"
        v-if="activeTab === 1"
      />
      <NumericWizardCardInfo
        :form="form.cardInfo"
        :formSubmitted="formSubmitted"
        v-if="activeTab === 2"
      />
      <NumericWizardFeedback
        :form="form.feedback"
        :formSubmitted="formSubmitted"
        v-if="activeTab === 3"
      />
      <NumericWizardCompleted v-if="activeTab === 4" />
    </div>

    <div class="wizard-footer d-flex gap-2 justify-content-end">
      <button
        class="btn button-light-primary"
        id="backbtn"
        @click="handleStep(-1)"
        :disabled="activeTab == 1"
      >
        Back
      </button>
      <button class="btn btn-primary" id="nextbtn" @click="handleStep(1)">
        {{ activeTab == numberingTabs.length ? 'Finish' : 'Next' }}
      </button>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, reactive, defineAsyncComponent } from 'vue'

import { initCheckboxField, initInputField, initSelectField } from '@/core/data/common'
import { numberingWizardTabs } from '@/core/data/forms/formLayout'
import type { NumberingWizardForm } from '@/types/forms/formLayout'
import { validateForm } from '@/utils/validators/formValidators'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const NumericWizardBasicInfo = defineAsyncComponent(
  () => import('@/module/form/formLayout/formWizardOne/numberingWizard/NumericWizardBasicInfo.vue')
)
const NumericWizardCardInfo = defineAsyncComponent(
  () => import('@/module/form/formLayout/formWizardOne/numberingWizard/NumericWizardCardInfo.vue')
)
const NumericWizardFeedback = defineAsyncComponent(
  () => import('@/module/form/formLayout/formWizardOne/numberingWizard/NumericWizardFeedback.vue')
)
const NumericWizardCompleted = defineAsyncComponent(
  () => import('@/module/form/formLayout/formWizardOne/numberingWizard/NumericWizardCompleted.vue')
)

const numberingTabs = ref(numberingWizardTabs)
const activeTab = ref<number>(1)

const form = reactive<NumberingWizardForm>({
  basicInfo: {
    email: initInputField(),
    firstName: initInputField(),
    password: initInputField(),
    confirmPassword: initInputField(),
    basicInfoAgreement: initCheckboxField(),
  },
  cardInfo: {
    placeholderName: initInputField(),
    cardNumber: initInputField(),
    expiration: initInputField(),
    cvv: initInputField(),
    uploadDocument: initInputField(),
    isInformationCorrect: initCheckboxField(),
  },
  feedback: {
    linkedIn: initInputField(),
    github: initInputField(),
    state: initSelectField(),
    feedback: initInputField(),
    feedbackAgreement: initCheckboxField(),
  },
})

const formSubmitted = ref<boolean>(false)
const formGroup = ['basicInfo', 'cardInfo', 'feedback']
const nonRequiredField = ref<string[]>([])

function handleStep(value: number) {
  if (value == -1) {
    activeTab.value = activeTab.value - 1
  } else if (value == 1 && activeTab.value < numberingTabs.value.length) {
    formSubmitted.value = true
    const currentFormKey = formGroup[activeTab.value - 1]
    const currentForm = form[currentFormKey as keyof typeof form]
    if (activeTab.value === 2) {
      nonRequiredField.value = ['uploadDocument']
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
