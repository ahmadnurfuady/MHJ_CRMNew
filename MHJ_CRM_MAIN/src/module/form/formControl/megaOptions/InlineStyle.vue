<template>
  <Card
    :headerTitle="'Inline Style'"
    :border="true"
    :padding="false"
    :cardBodyClass="'megaoptions-border-space-sm'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        To create inline megaoption add <code>mega-inline</code> class in form tag
      </p>
    </template>
    <form class="mega-inline">
      <div class="row">
        <div class="col-sm-6" v-for="(item, index) in inlineStyle" :key="index">
          <div class="card">
            <div class="d-flex p-20">
              <div :class="`form-check radio radio-${item.class} m-0 w-100`">
                <input
                  class="form-check-input"
                  :id="item.id"
                  type="radio"
                  name="radio1"
                  value="option1"
                />
                <label class="form-check-label mb-0 w-100" :for="item.id">
                  <span class="flex-grow-1">
                    <span class="mt-0 mega-title-badge">
                      {{ item.title }}
                      <span :class="`badge badge-${item.class} pull-right digits`">
                        {{ item.digit }}
                      </span>
                    </span>
                    <span>{{ item.label }}</span>
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div class="card-footer text-end" details>
      <button class="btn btn-primary m-r-15" type="submit">Submit</button>
      <button class="btn btn-light" type="submit">Cancel</button>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { inlineStyle } from '@/core/data/forms/formControl'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
