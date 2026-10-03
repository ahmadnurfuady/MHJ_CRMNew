<template>
  <Card :headerTitle="'Default Radio Buttons'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>form-check-input </code>and <code>form-check-label </code>for radio buttons.
      </p>
    </template>
    <div class="row g-3">
      <div class="col-sm-6 col-xl-4" v-for="(item, i) in defaultRadioList" :key="i">
        <div class="card-wrapper border rounded-3 checkbox-checked">
          <h6 class="sub-title">{{ item.title }}</h6>
          <div
            class="form-check"
            :class="{ 'form-check-reverse p-0': radio.reverseLabel }"
            v-for="(radio, index) in item.details"
            :key="index"
          >
            <input
              class="form-check-input"
              :id="radio.id"
              type="radio"
              :name="radio.name"
              :value="radio.name"
              v-model="defaultRadioList[i].selectedValue"
              :disabled="radio.disable"
            />
            <label class="form-check-label" :for="radio.id">{{ radio.label }}</label>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { defaultRadio } from '@/core/data/forms/formControl'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const defaultRadioList = ref(defaultRadio)
</script>
