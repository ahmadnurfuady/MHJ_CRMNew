<template>
  <Card :headerTitle="'Single-value Select'" :border="true" :padding="false">
    <form class="row g-3 select2-wrapper">
      <div class="col-xl-3 col-sm-6">
        <Select
          getValueKey="label"
          display-key="label"
          :placeholder="'Please select'"
          v-model="selectValue.theme"
          :options="selectTheme"
          :required="false"
          :class="'bg-light-primary'"
        />
      </div>
      <div class="col-xl-3 col-sm-6">
        <Select
          getValueKey="label"
          display-key="label"
          :placeholder="'Please select'"
          v-model="selectValue.designation"
          :options="designation"
          :required="false"
          :class="'bg-light-secondary'"
        />
      </div>
      <div class="col-xl-3 col-sm-6">
        <Select
          getValueKey="label"
          display-key="label"
          :placeholder="'Please select'"
          v-model="selectValue.component"
          :options="component"
          :required="false"
          :class="'bg-light-primary'"
        />
      </div>
      <div class="col-xl-3 col-sm-6">
        <Select
          getValueKey="label"
          display-key="label"
          :placeholder="'Please select'"
          v-model="selectValue.details"
          :options="selectDetails"
          :required="false"
          :class="'bg-light-secondary'"
        />
      </div>
    </form>
  </Card>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { initSelectField } from '@/core/data/common'
import { component, designation, selectDetails, selectTheme } from '@/core/data/forms/formWidgets'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))

const selectValue = ref({
  theme: initSelectField(),
  designation: initSelectField(),
  component: initSelectField(),
  details: initSelectField(),
})
</script>
