<template>
  <form class="row g-3 common-form">
    <div class="col-xxl-6 col-xl-12 col-md-6">
      <InputWrapper :title="'Publish Status'">
        <Select
          getValueKey="label"
          display-key="label"
          :placeholder="'Select publish status'"
          :required="false"
          v-model="status"
          :options="publishStatus"
        />
      </InputWrapper>
    </div>
    <div class="col-xxl-6 col-xl-12 col-md-6">
      <InputWrapper :title="'Publish Date & Time'">
        <Flatpickr class="form-control" v-model="date" :config="config" />
      </InputWrapper>
    </div>
    <div class="col-md-12 product-buttons">
      <button class="btn" type="button" @click="handleTab(-1)">
        <SvgIcon :icon="'back-arrow'"></SvgIcon>Previous
      </button>
      <button class="btn" type="button" @click="submit()">Submit</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { toast } from 'vue3-toastify'

import { initSelectField } from '@/core/data/common'
import { publishStatus } from '@/core/data/product'
import { useProduct } from '@/store/product'

const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))

const props = defineProps<{
  additionalTabId: number
}>()

const emits = defineEmits(['changeTab'])

const { changeTab } = useProduct()

const status = ref(initSelectField())

const date = ref(new Date())
const config = ref({
  enableTime: true,
  dateFormat: 'd-m-Y, H:i',
})

function handleTab(value: number) {
  if (props.additionalTabId) {
    const updatedId = changeTab(value, props.additionalTabId)
    if (updatedId) {
      emits('changeTab', updatedId)
    }
  }
}

function submit() {
  toast.success(`Submitted Successfully!!!`, {
    autoClose: 2000,
  })
}
</script>
