<template>
  <Card
    :headerTitle="'Default Style'"
    :border="true"
    :padding="false"
    :cardBodyClass="'megaoptions-border-space-sm'"
  >
    <template #header5>
      <p class="f-m-light mt-1" header5>It's a default style for radio buttons.</p>
    </template>
    <form class="mega-inline">
      <div class="row">
        <div class="col-sm-6" v-for="(item, index) in defaultStyle" :key="index">
          <div class="card">
            <div class="d-flex p-20">
              <div :class="`form-check radio ${item.radioClass} m-0`">
                <input
                  class="form-check-input"
                  :id="item.id"
                  type="radio"
                  :name="item.name"
                  :value="item.value"
                />
                <label class="form-check-label" :for="item.id">
                  <span class="flex-grow-1 megaoption-space">
                    <span class="mt-0 mega-title-badge">
                      {{ item.label }}
                      <span :class="`badge badge-${item.badgeClass} pull-right digits`">{{
                        item.badge
                      }}</span>
                    </span>
                    <span>{{ item.description }}</span>
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <template #details>
      <div class="card-footer text-end">
        <button class="btn btn-primary m-r-15" type="submit">Submit</button>
        <button class="btn btn-light" type="submit">Cancel</button>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { defaultStyle } from '@/core/data/forms/formControl'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
>
