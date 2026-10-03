<template>
  <div class="row">
    <InputWrapper :title="'Multivendor'" :class="'col-md-3'">
      <div class="col-md-9">
        <div class="form-check form-switch form-check-inline">
          <input
            class="form-check-input switch-primary check-size"
            type="checkbox"
            role="switch"
            checked
          />
          <p>
            <vue-feather :type="'info'"></vue-feather>
            *Enable or disable external vendors access to our online store.
          </p>
        </div>
      </div>
    </InputWrapper>
  </div>
  <div class="row">
    <InputWrapper :title="'Enable Wallet'" :class="'col-md-3'">
      <div class="col-md-9">
        <div class="form-check form-switch form-check-inline">
          <input
            class="form-check-input switch-primary check-size"
            type="checkbox"
            role="switch"
            checked
          />
          <p>
            <vue-feather :type="'info'"></vue-feather>
            *Enable the use of wallet balance for payment during checkout.
          </p>
        </div>
      </div>
    </InputWrapper>
  </div>
  <div class="row">
    <InputWrapper :title="'Enable Point'" :class="'col-md-3'">
      <div class="col-md-9">
        <div class="form-check form-switch form-check-inline">
          <input
            class="form-check-input switch-primary check-size"
            type="checkbox"
            role="switch"
            checked
          />
          <p>
            <vue-feather :type="'info'"></vue-feather>
            *Enable the use of points for payment during checkout.
          </p>
        </div>
      </div>
    </InputWrapper>
  </div>
  <div class="row">
    <InputWrapper :title="'Coupon Enable'" :class="'col-md-3'">
      <div class="col-md-9">
        <div class="form-check form-switch form-check-inline">
          <input
            class="form-check-input switch-primary check-size"
            type="checkbox"
            role="switch"
            checked
          />
          <p>
            <vue-feather :type="'info'"></vue-feather>
            *Allow customers to use coupons for payment at checkout.
          </p>
        </div>
      </div>
    </InputWrapper>
  </div>
  <div class="row">
    <InputWrapper :title="'Hide Stock Product'" :class="'col-md-3'">
      <div class="col-md-9">
        <div class="form-check form-switch form-check-inline">
          <input class="form-check-input switch-primary check-size" type="checkbox" role="switch" />
          <p>
            <vue-feather :type="'info'"></vue-feather>
            *Decide whether to show product stock or not.
          </p>
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
</script>
