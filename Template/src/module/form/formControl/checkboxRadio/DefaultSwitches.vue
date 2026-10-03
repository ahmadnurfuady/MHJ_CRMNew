<template>
  <Card :headerTitle="'Default Switches'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>form-switch</code> and <code>form-check-label </code>for switches.
      </p>
    </template>
    <div class="row g-3">
      <template v-for="(switches, index) in defaultSwitch" :key="index">
        <div :class="switches.class">
          <div class="card-wrapper border rounded-3 rtl-input checkbox-checked">
            <h6 class="sub-title">{{ switches.title }}</h6>
            <template v-for="(item, index) in switches.details" :key="index">
              <div
                class="form-check form-switch"
                :class="{ 'form-check-reverse': switches.reverseLabel }"
              >
                <input
                  class="form-check-input"
                  :id="item.id"
                  type="checkbox"
                  role="switch"
                  :checked="item.checked"
                  :disabled="item.disable"
                />
                <label class="form-check-label" :for="item.id">{{ item.label }}</label>
              </div>
            </template>
          </div>
        </div>
      </template>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { defaultSwitch } from '@/core/data/forms/formControl'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
