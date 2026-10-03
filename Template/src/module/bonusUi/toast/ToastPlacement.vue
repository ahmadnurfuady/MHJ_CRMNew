<template>
  <Card
    :headerTitle="'Toast Placement'"
    :border="true"
    :padding="false"
    :cardBodyClass="'toast-rtl toast-dark'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use<code> hide </code>class to hide toast and <code>show </code>class to visible toast.
      </p>
    </template>

    <form>
      <div class="mb-3">
        <Select
          getValueKey="label"
          display-key="label"
          :placeholder="'Select a position...'"
          v-model="position"
          :options="toastPosition"
          :required="false"
          @update:modelValue="handlePosition($event)"
        />
      </div>
    </form>

    <div class="bg-light position-relative bd-example-toasts">
      <div
        class="toast-container p-3 position-absolute"
        id="toastPlacement"
        :class="positionClass ? positionClass : ''"
      >
        <div class="toast toast-fade show">
          <div class="toast-header toast-img">
            <img class="rounded me-2" :src="getImages('dashboard/profile.png')" alt="profile" />
            <strong class="me-auto">Riho Theme</strong>
            <small class="d-sm-block d-none">25 min ago</small>
          </div>
          <div class="toast-body toast-dark txt-dark">
            <p class="toast-content">
              <em class="txt-danger">Attackers</em> on malicious activity may trick you into doing
              something dangerous like installing software or revealing your personal information's.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { toastPosition } from '@/core/data/bonusUI/toast'
import { initSelectField } from '@/core/data/common'
import type { SelectField } from '@/types/common'
import { getImages } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))

const position = ref(initSelectField())
const positionClass = ref<string>('')

function handlePosition(value: SelectField) {
  if (value && value.selected) {
    positionClass.value = value.selected.value.toString()
  }
}
</script>
