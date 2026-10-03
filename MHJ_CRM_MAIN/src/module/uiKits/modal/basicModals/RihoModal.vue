<template>
  <Transition name="modals">
    <div v-if="props.modalOpen" class="modal fade show d-block">
      <div class="modal-dialog" role="document">
        <OnClickOutside @trigger="close()" class="modal-content">
          <div class="modal-toggle-wrapper social-profile text-start dark-sign-up">
            <h3 class="modal-header justify-content-center border-0">Riho SIGN-UP</h3>
            <div class="modal-body">
              <form class="row g-3 needs-validation" novalidate @submit.prevent="submitForm()">
                <div class="col-md-6">
                  <InputWrapper :title="'First Name'" :required="true">
                    <InputField
                      :formSubmitted="formSubmitted"
                      :errorMessage="'First name is required.'"
                      v-model:modelValue="form.firstName"
                      :inputId="'first-name'"
                      :placeholder="'Enter first name'"
                    />
                  </InputWrapper>
                </div>
                <div class="col-md-6">
                  <InputWrapper :title="'Last Name'" :required="true">
                    <InputField
                      :formSubmitted="formSubmitted"
                      :errorMessage="'Last name is required.'"
                      v-model:modelValue="form.lastName"
                      :inputId="'last-name'"
                      :placeholder="'Enter last name'"
                    />
                  </InputWrapper>
                </div>
                <div class="col-md-12">
                  <div class="mb-3">
                    <InputWrapper :title="'Email address'" :required="true">
                      <InputField
                        :formSubmitted="formSubmitted"
                        :errorMessage="'Email is required.'"
                        v-model:modelValue="form.email"
                        :inputId="'email'"
                        :inputType="'email'"
                        :placeholder="'Rihotheme@gmail.com'"
                      />
                    </InputWrapper>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-check mb-3">
                    <Checkbox
                      :formSubmitted="formSubmitted"
                      :class="'form-check-input'"
                      :label="'You accept our Terms and Privacy Policy by clicking Submit below.'"
                      :errorMessage="'You must agree before submitting.'"
                      v-model:modelValue="form.condition"
                      :inputId="'condition'"
                    />
                  </div>
                  <button class="btn btn-primary" type="submit">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </OnClickOutside>
      </div>
    </div>
  </Transition>
  <Transition name="modals">
    <div class="modal-backdrop fade show" v-if="props.modalOpen"></div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { OnClickOutside } from '@vueuse/components'

import { initCheckboxField, initInputField } from '@/core/data/common'
import { resetForm } from '@/utils/index'
import { validateForm } from '@/utils/validators/formValidators'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Checkbox = defineAsyncComponent(() => import('@/components/shared/formElements/Checkbox.vue'))

const props = defineProps<{
  modalOpen: boolean
}>()

const emits = defineEmits(['closeModal'])

const form = ref({
  firstName: initInputField(),
  lastName: initInputField(),
  email: initInputField(),
  condition: initCheckboxField(),
})
const formSubmitted = ref(false)

function close() {
  submitForm()
}

function submitForm() {
  formSubmitted.value = true
  const { isValid, formData } = validateForm(form.value)

  if (isValid) {
    form.value = resetForm(form.value)
    formSubmitted.value = false
    emits('closeModal')
  }
}
</script>
