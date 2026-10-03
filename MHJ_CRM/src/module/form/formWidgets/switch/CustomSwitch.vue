<template>
  <Card :headerTitle="'Custom switch'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        A switch has the markup of a custom checkbox but uses the .form-switch class to render a
        <code>toggle switch</code>.
      </p>
    </template>

    <div class="row g-3">
      <div class="col-md-4 col-sm-6">
        <div class="card-wrapper border rounded-3">
          <div class="form-check-size">
            <template v-for="(item, index) in colors" :key="index">
              <div class="form-check form-switch form-check-inline">
                <input
                  :class="`form-check-input switch-${item.color} check-size`"
                  type="checkbox"
                  role="switch"
                  checked
                />
              </div>
            </template>
          </div>
        </div>
      </div>

      <div class="col-md-4 col-sm-6">
        <div class="card-wrapper border rounded-3 radius-none">
          <div class="form-check-size default-square">
            <template v-for="(item, index) in colors" :key="index">
              <div class="form-check form-switch form-check-inline">
                <input
                  :class="`form-check-input switch-${item.color} check-size`"
                  type="checkbox"
                  role="switch"
                  checked
                />
              </div>
            </template>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card-wrapper border rounded-3 common-flex">
          <div class="form-check-size">
            <template v-for="(item, index) in colors" :key="index">
              <div class="form-check form-switch form-check-inline">
                <input
                  :class="`form-check-input switch-${item.color} check-size`"
                  type="checkbox"
                  role="switch"
                  checked
                  disabled
                />
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { colors } from '@/core/data/common'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
