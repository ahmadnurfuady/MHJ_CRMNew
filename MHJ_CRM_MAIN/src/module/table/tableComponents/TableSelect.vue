<template>
  <Card :headerTitle="'Select'" :padding="false" :cardBodyClass="'p-0'">
    <div class="card-block row">
      <div class="col-sm-12 col-lg-12 col-xl-12">
        <div class="table-responsive custom-scrollbar">
          <table class="table table-bordered checkbox-td-width select-component">
            <tbody>
              <tr>
                <td>Single Select</td>
                <td class="w-50">
                  <Select
                    getValueKey="label"
                    display-key="label"
                    :placeholder="'Select value'"
                    v-model="selectValue.singleSelect"
                    :options="values"
                    S
                    :required="false"
                  />
                </td>
                <td><span>Use for basic select control.</span></td>
              </tr>
              <tr>
                <td>Disabled Select Mode</td>
                <td>
                  <Select
                    getValueKey="label"
                    display-key="label"
                    :placeholder="'Select value'"
                    v-model="selectValue.disableSelect"
                    :options="values"
                    :required="false"
                    :disabled="true"
                  />
                </td>
                <td>
                  <span>Use for disabled select control add <code>disabled</code>.</span>
                </td>
              </tr>
              <tr>
                <td>Large Select Mode</td>
                <td>
                  <Select
                    getValueKey="label"
                    display-key="label"
                    :placeholder="'Select value'"
                    v-model="selectValue.largeSelect"
                    :options="values"
                    :required="false"
                    :class="'form-control-lg mb-10'"
                  />

                  <Select
                    getValueKey="label"
                    display-key="label"
                    :placeholder="'Select value'"
                    v-model="selectValue.smallSelect"
                    :options="values"
                    :required="false"
                    :class="'form-control-sm mt-5 mb-10'"
                  />
                </td>
                <td>
                  <span
                    >Use for large and small select control add class <code>form-control-*</code
                    ><code>lg, sm</code>.</span
                  >
                </td>
              </tr>
              <tr>
                <td>Example Multiple Select</td>
                <td>
                  <Select
                    getValueKey="label"
                    display-key="label"
                    :placeholder="'Select value'"
                    v-model="selectValue.multiSelect"
                    :options="values"
                    :required="false"
                    :multiSelect="true"
                  />
                </td>
                <td>
                  <span
                    >Use for multi select control add code <code>multiSelect </code>on select.</span
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue'

import { initSelectField } from '@/core/data/common'
import type { Select } from '@/types/common'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))

const values = ref<Select[]>([])
const selectValue = ref({
  singleSelect: initSelectField(),
  disableSelect: initSelectField(),
  largeSelect: initSelectField(),
  smallSelect: initSelectField(),
  multiSelect: initSelectField(),
})

onMounted(() => {
  for (let i = 1; i <= 5; i++) {
    values.value.push({ value: i, label: i.toString() })
  }
})
</script>
