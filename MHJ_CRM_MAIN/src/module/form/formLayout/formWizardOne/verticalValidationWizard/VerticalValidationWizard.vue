<template>
  <Card :headerTitle="'Vertical Validation Wizard'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">Fill up your true details and next proceed.</p>
    </template>
    <div class="vertical-main-wizard">
      <div class="row g-3">
        <div class="col-xxl-3 col-xl-4 col-12">
          <div class="nav flex-column header-vertical-wizard">
            <template v-for="(tab, index) of verticalValidation" :key="index">
              <a
                class="nav-link"
                :class="{ active: activeTab === index + 1 }"
                @click="handleTab(index + 1)"
              >
                <div class="vertical-wizard">
                  <div class="stroke-icon-wizard">
                    <i :class="`fa-solid fa-${tab.icon}`"></i>
                  </div>
                  <div class="vertical-wizard-content">
                    <h6>{{ tab.title }}</h6>
                    <p>{{ tab.description }}</p>
                  </div>
                </div>
              </a>
            </template>
          </div>
        </div>
        <div class="col-xxl-9 col-xl-8 col-12">
          <div class="tab-content">
            <div class="tab-pane fade show active">
              <VerticalValidationPersonalInfo
                :form="form.personalInfo"
                :formSubmitted="formSubmitted"
                v-if="activeTab === 1"
              />
              <VerticalValidationCardInfo
                :form="form.cardInfo"
                :formSubmitted="formSubmitted"
                v-if="activeTab === 2"
              />
              <VerticalValidationNetBanking
                :form="form.netBanking"
                :formSubmitted="formSubmitted"
                v-if="activeTab === 3"
              />

              <div class="col-12 d-flex justify-content-end gap-2">
                <template v-if="activeTab !== 1 && activeTab !== verticalValidation.length">
                  <button class="btn btn-primary" @click="handleStep(-1)">Previous</button>
                </template>
                <template v-if="activeTab >= 1 && activeTab < verticalValidation.length">
                  <button type="submit" class="btn btn-primary" @click="handleStep(1)">Next</button>
                </template>
                <template v-if="activeTab === verticalValidation.length">
                  <button type="submit" class="btn btn-success" @click="handleStep(1)">
                    Finish
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
import { verticalValidation } from '@/core/data/forms/formLayout'
import type { VerticalValidationForm } from '@/types/forms/formLayout'
import { validateForm } from '@/utils/validators/formValidators'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const VerticalValidationPersonalInfo = defineAsyncComponent(
  () =>
    import(
      '@/module/form/formLayout/formWizardOne/verticalValidationWizard/VerticalValidationPersonalInfo.vue'
    )
)
const VerticalValidationCardInfo = defineAsyncComponent(
  () =>
    import(
      '@/module/form/formLayout/formWizardOne/verticalValidationWizard/VerticalValidationCardInfo.vue'
    )
)
const VerticalValidationNetBanking = defineAsyncComponent(
  () =>
    import(
      '@/module/form/formLayout/formWizardOne/verticalValidationWizard/VerticalValidationNetBanking.vue'
    )
)

const activeTab = ref<number>(1)
const form = reactive<VerticalValidationForm>({
  personalInfo: {
    firstName: initInputField(),
    lastName: initInputField(),
    email: initInputField(),
    state: initSelectField(),
    zip: initInputField(),
    contactNumber: initInputField(),
    infoCondition: initCheckboxField(),
  },
  cardInfo: {
    paymentMethod: '',
    recipientUsername: initInputField(),
    username: initInputField(),
    cardNumber: initInputField(),
    expiration: initInputField(),
    cvv: initInputField(),
    document: initInputField(),
    isCardInfoCorrect: initCheckboxField(),
  },
  netBanking: {
    bank: '',
    feedback: initInputField(),
    isBankingCorrect: initCheckboxField(),
  },
})

function handleTab(value: number) {
  if (value) {
    activeTab.value = value
  }
}

const formSubmitted = ref<boolean>(false)
const formGroup = ['personalInfo', 'cardInfo', 'netBanking']
const nonRequiredField = ref<string[]>([])

function handleStep(value: number) {
  if (value == -1) {
    activeTab.value = activeTab.value - 1
  } else if (value == 1 && activeTab.value <= 3) {
    formSubmitted.value = true
    const currentFormKey = formGroup[activeTab.value - 1]
    const currentForm = form[currentFormKey as keyof typeof form]

    if (activeTab.value === 2) {
      nonRequiredField.value = ['document']
    }

    if (currentForm) {
      const { isValid, formData } = validateForm(currentForm, nonRequiredField.value)

      if (isValid) {
        if (activeTab.value < 3) {
          activeTab.value = activeTab.value + 1
        }
        formSubmitted.value = false
      }
    } else {
      activeTab.value = activeTab.value + 1
    }
  }
}
</script>
