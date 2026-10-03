<template>
  <div class="col-12">
    <Card
      :headerTitle="'Button Groups'"
      :border="true"
      :padding="false"
      :cardBodyClass="'btn-groups'"
    >
      <template #header5>
        <p class="f-m-light mt-1">
          Wrap a series of buttons with <code>btn </code>in <code>btn-group </code> and for custom
          class used for sizes: <code>btn-lg </code>& <code>btn-sm</code>.
        </p>
      </template>

      <div class="row g-3">
        <div class="col-xxl-4 col-md-6 box-col-6" v-for="item in buttonGroups" :key="item.id">
          <div class="card-wrapper border rounded-3 h-100">
            <h6 class="sub-title fw-bold">{{ item.headTitle }}</h6>
            <div :class="item.class">
              <div
                :class="group.class"
                v-for="group in item.item"
                :key="group.class"
                role="group"
                aria-label="Basic example"
              >
                <button
                  class="btn"
                  :class="button.class"
                  type="button"
                  v-for="button in group.button"
                  :key="button.class"
                >
                  <template v-if="button.text"> {{ button.text }} </template>
                  <vue-feather :type="button.icon" v-if="button.icon"></vue-feather>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { buttonGroups } from '@/core/data/buttons'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
