<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <Card :headerTitle="'Input Masks'" :border="true" :padding="false">
          <template #header5>
            <p class="f-m-light mt-1" header5>
              Input mask is used for formatting data for consistency and readability (Phone Number,
              Card Number, Date, Currency...etc)
            </p>
          </template>
          <div class="row g-3">
            <div class="col-sm-6">
              <div class="card-wrapper border rounded-3 light-card checkbox-checked">
                <h6 class="sub-title">Date Format</h6>
                <form class="row g-3">
                  <div class="col-12">
                    <InputWrapper :title="'Date'">
                      <input
                        id="cleave-date1"
                        class="form-control"
                        type="text"
                        placeholder="DD-MM-YYYY"
                        name="date"
                        :value="maskingForm.formattedDate"
                        @input="formatDate($event)"
                        maxlength="10"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-12">
                    <InputWrapper :title="'Date Format Type'">
                      <input
                        class="form-control"
                        id="cleave-date2"
                        type="text"
                        placeholder="MM-YYYY"
                        name="date2"
                        :maxlength="7"
                        v-model="maskingForm.formattedMonthDate"
                        @input="formatMonthDate($event)"
                      />
                    </InputWrapper>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card-wrapper border rounded-3 light-card checkbox-checked">
                <h6 class="sub-title">Time Format</h6>
                <form class="row g-3">
                  <div class="col-12">
                    <InputWrapper :title="'Time Format Type'">
                      <input
                        id="cleave-time1"
                        class="form-control"
                        type="text"
                        placeholder="hh:mm:ss"
                        name="time"
                        :value="maskingForm.formattedTime"
                        @input="formatTime($event)"
                        maxlength="8"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-12">
                    <InputWrapper :title="'Hour/month Type'">
                      <input
                        id="cleave-time2"
                        class="form-control"
                        type="text"
                        placeholder="hh:mm"
                        name="hourTime"
                        :value="maskingForm.formattedHourTime"
                        @input="formatHourTime($event)"
                        maxlength="5"
                      />
                    </InputWrapper>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-12">
              <div class="card-wrapper border rounded-3 light-card checkbox-checked">
                <h6 class="sub-title">Default Input Mask</h6>
                <form class="row g-3">
                  <div class="col-xxl-4 col-sm-6">
                    <InputWrapper :title="'Currency'">
                      <input
                        class="form-control"
                        id="currency-format"
                        type="text"
                        placeholder="Enter number"
                        name="currency"
                        v-model="maskingForm.currency"
                        @input="formatCurrency($event)"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-xxl-4 col-sm-6">
                    <InputWrapper :title="'Prefix'">
                      <input
                        class="form-control"
                        id="prefix"
                        type="text"
                        placeholder="Prefix-xxxx-xxxx-xxxx"
                        name="prefix"
                        v-model="maskingForm.prefixNumber"
                        @input="formatPrefix($event)"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-xxl-4 col-sm-6">
                    <InputWrapper :title="'Delimiter'">
                      <input
                        class="form-control"
                        id="delimiter"
                        type="text"
                        placeholder="xxx·xxx·xxx"
                        name="delimiter"
                        v-model="maskingForm.delimiterNumber"
                        @input="formatDelimiter($event)"
                        maxLength="11"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-xxl-4 col-sm-6">
                    <InputWrapper :title="'Phone Number'">
                      <input
                        class="form-control"
                        id="phone-number"
                        type="text"
                        placeholder="(xxx)xxx-xxxx"
                        name="phone-number"
                        v-model="maskingForm.phoneNumber"
                        @input="formatPhoneNumber($event)"
                        maxLength="14"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-xxl-4 col-sm-6">
                    <InputWrapper :title="'Card Number'">
                      <input
                        class="form-control"
                        id="card-number"
                        type="text"
                        placeholder="xxxx xxxx xxxx xxxx"
                        name="card-number"
                        v-model="maskingForm.cardNumber"
                        @input="formatCardNumber($event)"
                        maxLength="19"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-xxl-4 col-sm-6">
                    <InputWrapper :title="'Tailprefix'">
                      <input
                        class="form-control"
                        id="tailprefix"
                        type="text"
                        placeholder="0000.00€"
                        name="tailprefix"
                        v-model="maskingForm.tailPrefix"
                        @input="formatTailPrefix($event)"
                        maxLength="19"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-xxl-4 col-sm-6">
                    <InputWrapper :title="'IP Address'">
                      <input
                        class="form-control"
                        id="ip-address"
                        type="text"
                        placeholder="192.168.38.45"
                        name="ip-address"
                        v-model="maskingForm.ipAddress"
                        @input="formatIpAddress($event)"
                        maxLength="13"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-xxl-4 col-sm-6">
                    <InputWrapper :title="'Use Multiple Delimiters'">
                      <input
                        class="form-control"
                        id="multiple-delimiter"
                        type="text"
                        placeholder="489.254.587-47"
                        name="multiple-delimiter"
                        v-model="maskingForm.multipleDelimiter"
                        @input="formatMultipleDelimiter($event)"
                        maxLength="14"
                      />
                    </InputWrapper>
                  </div>
                  <div class="col-xxl-4 col-sm-6">
                    <InputWrapper :title="'Multiple Characters in Delimiter'">
                      <input
                        class="form-control"
                        id="multiple-characters"
                        type="text"
                        placeholder="777 | 777 | 777 | 777"
                        name="multiple-characters"
                        v-model="maskingForm.multipleCharacters"
                        @input="formatMultipleCharacters($event)"
                        maxLength="15"
                      />
                    </InputWrapper>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { maskingValue } from '@/utils/inputMask'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)

const {
  maskingForm,
  formatDate,
  formatMonthDate,
  formatTime,
  formatHourTime,
  formatCurrency,
  formatPrefix,
  formatDelimiter,
  formatPhoneNumber,
  formatCardNumber,
  formatTailPrefix,
  formatIpAddress,
  formatMultipleDelimiter,
  formatMultipleCharacters,
} = maskingValue()
</script>
