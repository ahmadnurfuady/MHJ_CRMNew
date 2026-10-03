<template>
  <div class="row">
    <InputWrapper :title="'Title'" :class="'col-md-3'">
      <div class="col-md-9">
        <InputField
          :inputId="'title'"
          :placeholder="'Enter title'"
          v-model:modelValue="deliveryForm.title"
          :required="false"
        />
      </div>
    </InputWrapper>
  </div>
  <div class="row">
    <InputWrapper :title="'Description'" :class="'col-md-3'">
      <div class="col-md-9">
        <InputField
          :inputId="'description'"
          :placeholder="'Enter description'"
          v-model:modelValue="deliveryForm.description"
          :required="false"
        />
      </div>
    </InputWrapper>
  </div>
  <div class="row">
    <InputWrapper :title="'Same Day Delivery'" :class="'col-md-3 col-sm-4 col-auto'">
      <div class="col-md-9 col-sm-8 col-auto">
        <div class="form-check form-switch form-check-inline">
          <div class="form-check form-switch form-check-inline">
            <input
              class="form-check-input switch-primary check-size"
              type="checkbox"
              role="switch"
              checked
            />
          </div>
        </div>
      </div>
    </InputWrapper>
  </div>
  <div class="row">
    <div class="col-12">
      <div class="row">
        <InputWrapper :title="'Title'" :class="'col-md-3'">
          <div class="col-md-9">
            <InputField
              :inputId="'title'"
              :placeholder="'Enter title'"
              v-model:modelValue="deliveryForm.sameDayTitle"
              :required="false"
            />
          </div>
        </InputWrapper>
      </div>
      <div class="row">
        <InputWrapper :title="'Description'" :class="'col-md-3'">
          <div class="col-md-9">
            <InputField
              :inputId="'description'"
              :placeholder="'Enter description'"
              v-model:modelValue="deliveryForm.sameDayDescription"
              :required="false"
            />
          </div>
        </InputWrapper>
      </div>
      <div class="row">
        <label class="col-md-3 form-label">Default Delivery</label>
        <div class="col-md-9">
          <div class="panel panel-default">
            <div class="panel-body">
              <div id="delivery_fields"></div>
              <div class="col-12">
                <div class="input-group-btn">
                  <button class="btn btn-success mb-4" type="button" @click="addSlot">
                    <span class="fa-solid fa-plus me-1"></span>
                    Add
                  </button>
                </div>
              </div>
              <div class="row g-2" v-for="(items, index) in deliveryForm.slots" :key="index">
                <div class="col-sm-6">
                  <InputField
                    :inputId="'slot-title-' + index"
                    :placeholder="'Enter title'"
                    v-model:modelValue="items.title"
                    :required="false"
                  />
                </div>
                <div class="col-sm-6">
                  <InputField
                    :inputId="'slot-time-' + index"
                    :placeholder="'Enter time'"
                    v-model:modelValue="items.time"
                    :required="false"
                  />
                </div>
                <template v-if="deliveryForm.slots.length > 1 && index != 0">
                  <div class="clear">
                    <button class="btn btn-danger" type="button" @click="removeSlot(index)">
                      Remove
                    </button>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue'

import { initInputField } from '@/core/data/common'
import type { InputField } from '@/types/common'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)

interface DeliverySlot {
  title: InputField
  time: InputField
}

const deliveryForm = ref({
  title: initInputField(),
  description: initInputField(),
  sameDayTitle: initInputField(),
  sameDayDescription: initInputField(),
  slots: [] as DeliverySlot[],
})

onMounted(async () => {
  deliveryForm.value.title.data = 'Standard Delivery'
  deliveryForm.value.description.data = 'Approx 2 to 5 Days'
  deliveryForm.value.sameDayTitle.data = 'Express Delivery'
  deliveryForm.value.sameDayDescription.data = 'Schedule'

  deliveryForm.value.slots.push({
    title: { data: 'Morning', errorMessage: '' },
    time: { data: '8:00 AM – 12:00 PM', errorMessage: '' },
  })
})

function addSlot() {
  deliveryForm.value.slots.push({
    title: initInputField(),
    time: initInputField(),
  })
}

function removeSlot(index: number) {
  deliveryForm.value.slots.splice(index, 1)
}
</script>
