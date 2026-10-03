<template>
  <div class="row">
    <InputWrapper :title="'Signup Points'" :class="'col-md-3'">
      <div class="col-md-9">
        <div class="input-group">
          <span class="input-group-text" id="minPerOrder">
            <i class="fa-regular fa-gem"></i>
          </span>
          <InputField
            :inputId="'signup-points'"
            :placeholder="'Enter signup points'"
            v-model:modelValue="walletPointForm.signupPoints"
            :required="false"
          />
        </div>
        <div class="helper-text">
          <p class="fst-italic c-o-light">*Provide points to new users as a signup incentive.</p>
        </div>
      </div>
    </InputWrapper>
  </div>
  <div class="row">
    <InputWrapper :title="'Min Per Order Amount'" :class="'col-md-3'">
      <div class="col-md-9">
        <div class="input-group">
          <span class="input-group-text" id="collectPointOrder">
            <i class="fa-solid fa-dollar-sign"></i>
          </span>
          <InputField
            :inputId="'min-order-amount'"
            :placeholder="'Enter min per order amount'"
            v-model:modelValue="walletPointForm.minOrderAmount"
            :required="false"
          />
        </div>
        <div class="helper-text">
          <p class="fst-italic c-o-light">
            *Collect points when orders meet or exceed the minimum value.
          </p>
        </div>
      </div>
    </InputWrapper>
  </div>
  <div class="row">
    <InputWrapper :title="'Point Currency Ratio'" :class="'col-md-3'">
      <div class="col-md-9">
        <InputField
          :inputId="'point-currency-ratio'"
          :placeholder="'Enter point current ratio'"
          :helperText="'Determine the conversion factor from points to currency.'"
          v-model:modelValue="walletPointForm.pointCurrencyRatio"
          :required="false"
        />
      </div>
    </InputWrapper>
  </div>
  <div class="row">
    <InputWrapper :title="'Reward Per Order Point'" :class="'col-md-3'">
      <div class="col-md-9">
        <InputField
          :inputId="'per-order-point'"
          :placeholder="'Enter reward per order point'"
          :helperText="'Earn reward points based on each orders value.<br>(Rewards Points = (Total Order Amount / Min Per Order Amount) * Reward Per Order Point).'"
          v-model:modelValue="walletPointForm.rewardPerPoint"
          :required="false"
        />
      </div>
    </InputWrapper>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue'

import { initInputField } from '@/core/data/common'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)

const walletPointForm = ref({
  signupPoints: initInputField(),
  minOrderAmount: initInputField(),
  pointCurrencyRatio: initInputField(),
  rewardPerPoint: initInputField(),
})

onMounted(async () => {
  walletPointForm.value.signupPoints.data = '150'
  walletPointForm.value.minOrderAmount.data = '10'
  walletPointForm.value.pointCurrencyRatio.data = '30'
  walletPointForm.value.rewardPerPoint.data = '10'
})
</script>
