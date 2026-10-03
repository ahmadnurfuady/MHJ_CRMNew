<template>
  <Card
    :headerTitle="'Animated Buttons'"
    :cardClass="'height-equal'"
    :border="true"
    :padding="false"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>radio_animated </code>to animate checkbox and radio buttons.
      </p>
    </template>
    <div class="row g-3">
      <div class="col-sm-6">
        <div class="card-wrapper border rounded-3 checkbox-checked">
          <h6 class="sub-title">Select your payment method</h6>
          <div v-for="(item, index) in paymentDetails" :key="index">
            <input
              class="radio_animated"
              :id="item.id"
              type="radio"
              name="payment"
              :checked="item.checked"
            />
            <label class="form-check-label" :for="item.id">{{ item.label }}</label>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card-wrapper border rounded-3 checkbox-checked">
          <h6 class="sub-title">What is your favorite social media?</h6>
          <div v-for="(item, index) in socialMedia" :key="index">
            <input
              class="checkbox_animated"
              :id="item.id"
              type="checkbox"
              :checked="item.checked"
            />
            <label class="form-check-label" :for="item.id">{{ item.label }}</label>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { paymentDetails, socialMedia } from '@/core/data/forms/formControl'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
