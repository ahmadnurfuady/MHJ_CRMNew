<template>
  <form class="stepper-three row g-3 needs-validation shipping-wizard" novalidate>
    <div class="payment-info-wrapper">
      <div class="row shipping-method g-3">
        <div class="col-12">
          <div class="card-wrapper border rounded-3 light-card">
            <div>
              <div class="form-check radio radio-primary">
                <input
                  class="form-check-input"
                  id="shipping-choose9"
                  type="radio"
                  name="radio3"
                  value="option1"
                  checked
                />
                <label class="form-check-label mb-0 f-w-500" for="shipping-choose9">Paypal</label>
              </div>
              <p>You will be taken to the paypal website to finish your transaction safely</p>
            </div>
            <div>
              <img :src="`${getImages('checkout/paypal.png')}`" alt="paypal" />
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="card-wrapper border rounded-3 pay-info light-card">
            <div>
              <div>
                <div class="form-check radio radio-primary">
                  <input
                    class="form-check-input"
                    id="shipping-choose8"
                    type="radio"
                    name="radio3"
                    value="option1"
                  />
                  <label class="form-check-label mb-0 f-w-500" for="shipping-choose8"
                    >Credit Card</label
                  >
                </div>
                <P
                  >Transferring money securely through your bank account. Mastercard, Visa,
                  Discover, and Stripe are all accepted</P
                >
              </div>
              <div>
                <img :src="`${getImages('forms/credit-card.png')}`" alt="card" />
              </div>
            </div>
            <div class="row g-3">
              <div class="col-md-12">
                <InputWrapper :title="'Card Holder'">
                  <InputField
                    :inputId="'card-holder'"
                    :placeholder="'Enter card holder name'"
                    :required="false"
                  />
                </InputWrapper>
              </div>
              <div class="col-12">
                <InputWrapper :title="'Card Number'">
                  <InputField
                    :inputId="'card-number'"
                    :placeholder="'xxxx xxxx xxxx xxxx'"
                    :inputType="'number'"
                    :required="false"
                  />
                </InputWrapper>
              </div>
              <div class="col-sm-6">
                <InputWrapper :title="'Expiration(MM/YY)'">
                  <InputField
                    :inputId="'expiration'"
                    :placeholder="'xx/xx'"
                    :inputType="'number'"
                    :required="false"
                  />
                </InputWrapper>
              </div>
              <div class="col-sm-6">
                <InputWrapper :title="'CVV'">
                  <InputField
                    :inputId="'cvv'"
                    :placeholder="'xxx'"
                    :inputType="'number'"
                    :required="false"
                  />
                </InputWrapper>
              </div>
              <div class="col-12">
                <InputWrapper :title="'Upload Documentation'">
                  <InputField
                    :inputId="'document'"
                    :placeholder="'file'"
                    :inputType="'file'"
                    :required="false"
                  />
                </InputWrapper>
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input
                    class="form-check-input checkbox-primary"
                    id="invalidCheck01"
                    type="checkbox"
                    value=""
                  />
                  <label class="form-check-label" for="invalidCheck01"
                    >All the above information is correct</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="card-wrapper border rounded-3 light-card">
            <div>
              <div class="form-check radio radio-primary">
                <input
                  class="form-check-input"
                  id="shipping-choose7"
                  type="radio"
                  name="radio3"
                  value="option1"
                />
                <label class="form-check-label mb-0 f-w-500" for="shipping-choose7"
                  >Cash On Delivery</label
                >
              </div>
              <p>After your order is delivered, make a cash payment</p>
            </div>
            <div>
              <img :src="`${getImages('forms/delivery.png')}`" alt="delivery" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { getImages } from '@/utils'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
</script>
