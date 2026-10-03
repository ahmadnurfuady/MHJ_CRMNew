<template>
  <Card
    :headerTitle="'Custom Forms'"
    :border="true"
    :padding="false"
    :cardBodyClass="'common-flex main-custom-form'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Input groups include support for
        <code>custom selects and custom file inputs</code>. Browser default versions of these are
        not supported.
      </p>
    </template>
    <div class="input-group">
      <label class="input-group-text" for="inputGroupSelect01">Options</label>
      <Select
        getValueKey="label"
        display-key="label"
        :placeholder="'Select your favorite pixelstrap theme'"
        v-model="form.favoritePixelstrapTheme"
        :options="selectTheme"
        :required="false"
      />
    </div>
    <div class="input-group">
      <Select
        getValueKey="label"
        display-key="label"
        :placeholder="'Select your favorite color'"
        v-model="form.favoriteColor"
        :options="selectColor"
        :required="false"
      />
      <label class="input-group-text" for="inputGroupSelect02">Options</label>
    </div>
    <div class="input-group">
      <button class="btn btn-outline-secondary" type="button">
        <i class="icofont icofont-credit-card"></i>
      </button>
      <Select
        getValueKey="label"
        display-key="label"
        :placeholder="'Select your favorite chocolate'"
        v-model="form.favoriteChocolate"
        :options="selectChocolates"
        :required="false"
      />
    </div>
    <div class="input-group">
      <Select
        getValueKey="label"
        display-key="label"
        :placeholder="'Select your favorite theme'"
        v-model="form.favoriteTheme"
        :options="selectTheme"
        :required="false"
      />
      <button class="btn btn-outline-secondary" type="button">Submit</button>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { reactive, defineAsyncComponent } from 'vue'

import { initSelectField } from '@/core/data/common'
import { selectChocolates, selectColor, selectTheme } from '@/core/data/forms/formControl'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))

const form = reactive({
  favoritePixelstrapTheme: initSelectField(),
  favoriteColor: initSelectField(),
  favoriteChocolate: initSelectField(),
  favoriteTheme: initSelectField(),
})
</script>
