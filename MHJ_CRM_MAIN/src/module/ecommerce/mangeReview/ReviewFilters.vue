<template>
  <div class="top-body">
    <div class="row g-3">
      <div class="col-auto">
        <div class="form-group">
          <label class="form-label">
            Rating
            <div class="dropdown bootstrap-select search-picker">
              <Select
                getValueKey="label"
                display-key="label"
                :placeholder="'Select rating'"
                :rating="true"
                v-model="form.rating"
                :options="rating"
                :required="false"
                @update:modelValue="onChange($event, 'rating')"
              />
            </div>
          </label>
        </div>
      </div>
      <div class="col-auto">
        <div class="form-group">
          <label class="form-label">
            Status
            <div class="dropdown bootstrap-select search-picker">
              <Select
                getValueKey="label"
                display-key="label"
                :placeholder="'Select status'"
                v-model="form.status"
                :options="reviewStatus"
                :required="false"
                @update:modelValue="onChange($event, 'status')"
              />
            </div>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import type { SelectField, Select } from '@/types/common'

const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))

const props = defineProps<{
  form: {
    rating: SelectField
    status: SelectField
  }
  rating: Select[]
  reviewStatus: Select[]
}>()

const emit = defineEmits<{
  (e: 'update', payload: { event: SelectField; field: 'rating' | 'status' }): void
}>()

function onChange(event: SelectField, field: 'rating' | 'status') {
  emit('update', { event, field })
}
</script>
