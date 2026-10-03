<template>
  <Card :headerTitle="'Without Borders Style'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        By adding <code>plain-style </code>& <code>mega-inline</code> to use default style for
        checkbox buttons.
      </p>
    </template>
    <form class="mega-inline plain-style">
      <div class="row">
        <div class="col-sm-6" v-for="(border, index) in withoutBorderStyle" :key="index">
          <div class="card">
            <div class="d-flex p-20">
              <div :class="`form-check checkbox ${border.checkboxClass} m-0`">
                <input
                  class="form-check-input"
                  :id="border.id"
                  :type="border.type"
                  :checked="border.checked"
                />
                <label class="form-check-label" :for="border.id">
                  <span class="flex-grow-1 megaoption-space">
                    <span class="mt-0 mega-title-badge">
                      {{ border.price }}
                      <span :class="`badge badge-${border.badgeClass} pull-right digits`">{{
                        border.speed
                      }}</span>
                    </span>
                    <span>{{ border.description }}</span>
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
      <button class="btn button-light-primary" type="submit">Cancel</button>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { withoutBorderStyle } from '@/core/data/forms/formControl'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
