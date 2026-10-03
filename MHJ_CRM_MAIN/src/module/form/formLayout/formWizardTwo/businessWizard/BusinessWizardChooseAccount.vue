<template>
  <form class="row g-3 needs-validation" novalidate v-if="props.form">
    <div class="col-12">
      <h5>Select The Type of Account</h5>
      <p>
        It has long been known that distracting information on a page will lose a reader's
        attention.
      </p>
    </div>
    <div class="col-12">
      <div class="form-check radio radio-primary ps-0 select-account">
        <ul class="radio-wrapper">
          <li v-for="(type, index) in accountType" :key="index">
            <input
              class="form-check-input"
              :id="type.id"
              type="radio"
              name="radio2"
              :value="type.title"
              v-model="props.form.accountType"
            />
            <label class="form-check-label mb-0" :for="type.id">
              <i :class="`fa-solid fa-${type.icon}`"></i>
              <span class="d-flex flex-column">
                <span>{{ type.title }} </span>
                <span>{{ type.description }}</span>
              </span>
            </label>
          </li>
        </ul>
        <template v-if="!props.form.accountType && props.formSubmitted">
          <div class="invalid-feedback d-block">Please select the account type.</div>
        </template>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { accountType } from '@/core/data/forms/formLayout'
import type { BusinessWizardAccount } from '@/types/forms/formLayout'

const props = defineProps<{
  form: BusinessWizardAccount
  formSubmitted: boolean
}>()

const defaultChecked = accountType.find((type) => type.checked)
if (defaultChecked && props.form) {
  props.form.accountType = defaultChecked.title
}
</script>
