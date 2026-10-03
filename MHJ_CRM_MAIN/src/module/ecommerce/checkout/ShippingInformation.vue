<template>
  <form class="stepper-two row g-3 needs-validation shipping-wizard" novalidate>
    <div class="col-xxl-5 col-md-6 box-col-6">
      <div class="shipping-title">
        <h6>Delivery Address</h6>
        <button class="btn btn-primary" type="button" @click="openModal()">
          <i class="fa-solid fa-square-plus f-20"></i>
        </button>
      </div>
      <div class="row g-3 mt-0 flex-column">
        <div class="col-12" v-for="(address, index) in userDetails.addresses" :key="index">
          <div class="card-wrapper border rounded-3 h-100 light-card">
            <div class="collect-address">
              <div class="d-flex gap-2 align-items-center">
                <div class="form-check radio radio-primary">
                  <input
                    class="form-check-input"
                    :id="address.radioId"
                    type="radio"
                    name="address"
                    :value="address.radioId"
                    v-model="selectedShipping"
                  />
                  <label class="form-check-label mb-0" :for="address.radioId">{{
                    userDetails.name
                  }}</label>
                </div>
              </div>
              <div class="card-icon">
                <i class="fa-solid fa-pencil"></i>
                <i class="fa-solid fa-trash-can"></i>
                <span class="badge badge-primary" v-if="address.tag">{{ address.tag }}</span>
              </div>
            </div>
            <div class="shipping-address">
              <span> <strong>Address: </strong>{{ address.address }} </span>
              <span> <strong>Pincode: </strong>{{ address.pinCode }} </span>
              <span> <strong>Contact: </strong>{{ address.contact }} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-7 col-md-6 box-col-6">
      <h6>Delivery Options</h6>
      <div class="row shipping-method g-3 mt-0 flex-column">
        <div class="col-12">
          <div class="card-wrapper border rounded-3 h-100 light-card">
            <div class="form-check radio radio-primary">
              <input
                class="form-check-input"
                id="shipping-choose3"
                type="radio"
                name="radio2"
                value="option1"
                checked
              />
              <label class="form-check-label mb-0" for="shipping-choose3"
                >Standard Delivery - Free</label
              >
            </div>
            <p>Estimated 5-7 days shipping</p>
          </div>
        </div>
        <div class="col-12">
          <div class="card-wrapper border rounded-3 h-100 light-card">
            <div class="form-check radio radio-primary">
              <input
                class="form-check-input"
                id="shipping-choose4"
                type="radio"
                name="radio2"
                value="option1"
              />
              <label class="form-check-label mb-0" for="shipping-choose4"
                >Express Delivery - $30</label
              >
            </div>
            <P>Estimated 1-2 days shipping</P>
          </div>
        </div>
        <div class="col-12">
          <div class="card-wrapper border rounded-3 h-100 light-card">
            <div class="form-check radio radio-primary">
              <input
                class="form-check-input"
                id="shipping-choose6"
                type="radio"
                name="radio2"
                value="option1"
              />
              <label class="form-check-label mb-0" for="shipping-choose6">Future Delivery</label>
            </div>
            <InputField
              :inputId="'date'"
              :inputType="'date'"
              :required="false"
              :class="'future-date'"
            />
          </div>
        </div>
      </div>
    </div>
  </form>

  <AddressModal :modalOpen="isModalOpen" @closeModal="isModalOpen = false" />
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { user } from '@/core/data/user'

const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const AddressModal = defineAsyncComponent(
  () => import('@/module/ecommerce/checkout/AddressModal.vue')
)

const userDetails = user
const selectedShipping = ref<string>('address-1')
const isModalOpen = ref<boolean>(false)

function openModal() {
  isModalOpen.value = true
}
</script>
