<template>
  <Modal
    :title="'Add Address'"
    :modalOpen="props.modalOpen"
    :sizeClass="'modal-lg'"
    :modalCentered="true"
    @closeModal="closeModal()"
  >
    <div class="modal-body">
      <form class="row g-3 needs-validation" novalidate>
        <div class="col-12">
          <InputWrapper :title="'Name'">
            <InputField :inputId="'name'" :placeholder="'Enter name'" :required="false" />
          </InputWrapper>
        </div>
        <div class="col-12">
          <InputWrapper :title="'Current Address'">
            <InputField
              :inputId="'current-address'"
              :placeholder="'Enter your current address'"
              :inputType="'textarea'"
              :required="false"
            />
          </InputWrapper>
        </div>
        <div class="col-sm-6">
          <InputWrapper :title="'Country'">
            <Select
              getValueKey="label"
              display-key="label"
              :placeholder="'Select country'"
              v-model="infoForm.country"
              :options="country"
              :required="false"
              @update:modelValue="countryChange($event)"
            />
          </InputWrapper>
        </div>
        <div class="col-sm-6">
          <InputWrapper :title="'State'">
            <Select
              getValueKey="label"
              display-key="label"
              :placeholder="'Select state'"
              v-model="infoForm.state"
              :options="states"
              :required="false"
            />
          </InputWrapper>
        </div>
        <div class="col-sm-6">
          <InputWrapper :title="'City'">
            <InputField :inputId="'city'" :placeholder="'Enter city'" :required="false" />
          </InputWrapper>
        </div>
        <div class="col-sm-6">
          <InputWrapper :title="'Postal Code'">
            <InputField
              :inputId="'postal-code'"
              :placeholder="'Enter postal code'"
              :required="false"
            />
          </InputWrapper>
        </div>
        <div class="col-12">
          <InputWrapper :title="'Contact Number'">
            <InputField
              :inputId="'contact-number'"
              :placeholder="'Enter contact number'"
              :inputType="'number'"
              :required="false"
            />
          </InputWrapper>
        </div>
        <div class="col-12">
          <div class="modal-footer gap-2 pb-0">
            <button class="btn button-light-primary m-0" type="button" @click="closeModal()">
              Cancel
            </button>
            <button class="btn btn-primary m-0" type="button">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { initSelectField } from '@/core/data/common'
import { country } from '@/core/data/country'
import type { Select, SelectField } from '@/types/common'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))
const Modal = defineAsyncComponent(() => import('@/components/shared/Modal.vue'))

const props = defineProps<{
  modalOpen?: boolean
}>()

const emits = defineEmits(['closeModal'])

const infoForm = ref({
  country: initSelectField(),
  state: initSelectField(),
})
const states = ref<Select[]>([])

function countryChange(value: SelectField) {
  if (value && value.selected && value.selected.data) {
    states.value = value.selected.data
  }
}

function closeModal() {
  emits('closeModal')
}
</script>
