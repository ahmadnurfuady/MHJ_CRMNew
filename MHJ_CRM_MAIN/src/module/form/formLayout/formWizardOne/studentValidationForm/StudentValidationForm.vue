<template>
  <Card
    :headerTitle="'Student Validation Form'"
    :border="true"
    :padding="false"
    :cardClass="'height-equal'"
    :cardBodyClass="'custom-input'"
  >
    <template #header5>
      <p class="f-m-light mt-1">Please make sure fill all the filed before click on next button.</p>
    </template>

    <form class="form-wizard" id="regForm">
      <StudentValidationPersonalInfo
        :form="form.personalInfo"
        :formSubmitted="formSubmitted"
        v-if="activeTab === 1"
      />
      <StudentValidationProfile
        :form="form.profile"
        :formSubmitted="formSubmitted"
        v-if="activeTab === 2"
      />
      <StudentValidationSocialLinks
        :form="form.socialLinks"
        :formSubmitted="formSubmitted"
        v-if="activeTab === 3"
      />
      <div>
        <div class="text-end pt-3">
          <button
            class="btn btn-secondary"
            id="prevBtn"
            type="button"
            @click="handleStep(-1)"
            :disabled="activeTab == 1"
          >
            Previous
          </button>
          <button class="btn btn-primary ms-2" id="nextBtn" type="button" @click="handleStep(1)">
            {{ activeTab == 3 ? 'Submit' : 'Next' }}
          </button>
        </div>
      </div>
      <div class="text-center">
        <span class="step"></span>
        <span class="step"></span>
        <span class="step"></span>
        <span class="step"></span>
      </div>
    </form>
  </Card>
</template>

<script setup lang="ts">
import { ref, reactive, defineAsyncComponent } from 'vue'

import { initInputField, initSelectField } from '@/core/data/common'
import type { StudentValidationForm } from '@/types/forms/formLayout'
import { validateForm } from '@/utils/validators/formValidators'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const StudentValidationPersonalInfo = defineAsyncComponent(
  () =>
    import(
      '@/module/form/formLayout/formWizardOne/studentValidationForm/StudentValidationPersonalInfo.vue'
    )
)
const StudentValidationProfile = defineAsyncComponent(
  () =>
    import(
      '@/module/form/formLayout/formWizardOne/studentValidationForm/StudentValidationProfile.vue'
    )
)
const StudentValidationSocialLinks = defineAsyncComponent(
  () =>
    import(
      '@/module/form/formLayout/formWizardOne/studentValidationForm/StudentValidationSocialLinks.vue'
    )
)

const activeTab = ref<number>(1)

const form = reactive<StudentValidationForm>({
  personalInfo: {
    name: initInputField(),
    email: initInputField(),
    password: initInputField(),
    confirmPassword: initInputField(),
  },
  profile: {
    profileImage: initInputField(),
    profileUrl: initInputField(),
    profileDescription: initInputField(),
  },
  socialLinks: {
    twitter: initInputField(),
    github: initInputField(),
    document: initInputField(),
    position: initSelectField(),
    whyThisPosition: initInputField(),
  },
})

const formSubmitted = ref<boolean>(false)
const formGroup = ['personalInfo', 'profile', 'socialLinks']
const nonRequiredField = ref<string[]>([])

function handleStep(value: number) {
  if (value == -1) {
    activeTab.value = activeTab.value - 1
  } else if (value == 1 && activeTab.value <= 3) {
    formSubmitted.value = true
    const currentFormKey = formGroup[activeTab.value - 1]
    const currentForm = form[currentFormKey as keyof typeof form]

    if (activeTab.value === 2) {
      nonRequiredField.value = ['profile_image']
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
