<template>
  <div class="col-xl-4 col-sm-6">
    <Card
      :headerTitle="'Icons Switch'"
      :cardClass="'height-equal'"
      :border="true"
      :padding="false"
      :cardBodyClass="'common-flex flex-column switch-wrapper'"
    >
      <template #header5>
        <p class="f-m-light mt-1">
          For defined icons switches, use <code> switch-state</code> and<code> icon-state</code>.
        </p>
      </template>
      <div class="d-flex" v-for="(item, index) in colors" :key="index">
        <div class="text-end icon-state">
          <label class="switch mb-0">
            <input type="checkbox" checked />
            <span :class="`switch-state bg-${item.color}`"></span>
          </label>
        </div>
        <label class="col-form-label m-l-10">{{ titleCase(item.color) }} Switch</label>
      </div>
    </Card>
  </div>

  <div class="col-xl-4 col-sm-6">
    <Card
      :headerTitle="'Uncheck Switch'"
      :cardClass="'height-equal'"
      :border="true"
      :padding="false"
      :cardBodyClass="'common-flex flex-column switch-wrapper'"
    >
      <template #header5>
        <p class="f-m-light mt-1">
          Use <code>switch-state</code> class to create uncheck switches.
        </p>
      </template>
      <div class="d-flex" v-for="(item, index) in colors" :key="index">
        <div class="text-end">
          <label class="switch mb-0">
            <input type="checkbox" checked />
            <span :class="`switch-state bg-${item.color}`"></span>
          </label>
        </div>
        <label class="col-form-label m-l-10">Unchecked {{ titleCase(item.color) }} Switch</label>
      </div>
    </Card>
  </div>

  <div class="col-xl-4">
    <Card
      :headerTitle="'Borders with Icons'"
      :cardClass="'height-equal'"
      :border="true"
      :padding="false"
      :cardBodyClass="'common-flex flex-column switch-wrapper'"
    >
      <template #header5>
        <p class="f-m-light mt-1">
          Use <code>switch-outline </code>and <code>icon-state</code> class to create outline with
          icons.
        </p>
      </template>
      <div class="d-flex" v-for="(item, index) in colors" :key="index">
        <div class="text-end icon-state switch-outline">
          <label class="switch mb-0">
            <input type="checkbox" checked />
            <span :class="`switch-state bg-${item.color}`"></span>
          </label>
        </div>
        <label class="col-form-label m-l-10">Bordered {{ titleCase(item.color) }} Switch</label>
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { colors } from '@/core/data/common'
import { titleCase } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
