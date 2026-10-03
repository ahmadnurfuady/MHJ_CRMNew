<template>
  <div class="row">
    <InputWrapper :title="'Status'" :class="'col-md-3'">
      <div class="col-md-9">
        <div class="form-check form-switch form-check-inline">
          <input class="form-check-input switch-primary check-size" type="checkbox" role="switch" />
        </div>
      </div>
    </InputWrapper>
  </div>
  <div class="row">
    <InputWrapper :title="'Min Withdraw Amount'" :class="'col-md-3'">
      <div class="col-md-9">
        <div class="input-group">
          <span class="input-group-text" id="commissionRate">
            <i class="fa-solid fa-dollar-sign"></i>
          </span>
          <InputField
            :inputId="'min-withdraw-amount'"
            :placeholder="'Enter min withdraw amount'"
            :inputType="'number'"
            :required="false"
          />
        </div>
        <div class="helper-text">
          <p class="fst-italic c-o-light">
            *Payout Minimum for Sellers: Specify the min amount sellers can request for withdrawal.
          </p>
        </div>
      </div>
    </InputWrapper>
  </div>
  <div class="row">
    <InputWrapper :title="'Commission Rate'" :class="'col-md-3'">
      <div class="col-md-9">
        <div class="input-group">
          <InputField
            :inputId="'commission-rate'"
            :placeholder="'Enter commission rate'"
            :inputType="'number'"
            :required="false"
          />
          <span class="input-group-text" id="categoryCommission">%</span>
        </div>
        <div class="helper-text">
          <p class="fst-italic c-o-light">
            *Set the rate at which admin receives a commission from seller earnings.
          </p>
        </div>
      </div>
    </InputWrapper>
  </div>
  <div class="row g-lg-3 g-0">
    <InputWrapper :title="'Category Based Commission'" :class="'col-md-3'">
      <div class="col-md-9">
        <div class="input-group">
          <div class="form-check form-switch form-check-inline">
            <input
              class="form-check-input switch-primary check-size"
              type="checkbox"
              role="switch"
            />
          </div>
          <div class="helper-text">
            <p class="fst-italic c-o-light">
              *Enable the functionality to apply commissions based on product categories. To
              configure, navigate to the Product Category module and set the respective commission
              rates.
            </p>
          </div>
        </div>
      </div>
    </InputWrapper>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
</script>
