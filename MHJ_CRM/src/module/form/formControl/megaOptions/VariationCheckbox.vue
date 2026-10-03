<template>
  <Card :headerTitle="'Variation Checkbox'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        We can create any creative design by using
        <code>(type='checkbox')</code>attribute.
      </p>
    </template>
    <div class="row g-3">
      <div class="col-xl-4 col-md-5">
        <div class="card-wrapper border rounded-3 h-100 checkbox-checked">
          <h6 class="sub-title">
            Which of the following activities do you enjoy doing in your free time?
          </h6>
          <div class="payment-wrapper" v-for="(item, index) in checkBox" :key="index">
            <div class="payment-first">
              <div :class="`form-check checkbox checkbox-${item.class}`">
                <input
                  class="form-check-input"
                  :id="item.id"
                  type="checkbox"
                  :checked="item.checked"
                />
                <label class="form-check-label mb-0" :for="item.id">{{ item.label }} </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-8 col-md-7">
        <div class="card-wrapper border rounded-3 h-100 checkbox-checked">
          <section class="main-upgrade">
            <div>
              <i class="fa fa-rocket"></i>
              <h5 class="mb-2">It&apos;s time to <span class="txt-primary">upgrade</span></h5>
              <p class="text-muted mb-2">
                Select the theme that best suits your requirements, and you're ready to go!
              </p>
            </div>
            <div class="variation-box">
              <div class="selection-box" v-for="(item, index) in themeSales" :key="index">
                <input id="feature1" type="checkbox" :checked="item.checked" />
                <div class="custom--mega-checkbox">
                  <ul class="d-flex flex-column">
                    <li>{{ item.list }}</li>
                    <li class="txt-primary">{{ item.sales }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { checkBox, themeSales } from '@/core/data/forms/formControl'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
