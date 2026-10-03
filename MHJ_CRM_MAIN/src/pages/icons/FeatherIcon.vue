<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12" v-for="(list, index) in featherIcon" :key="index">
        <Card :headerTitle="list.title" :border="true" :padding="false" :headerClass="'m-b-0'">
          <div class="row icon-lists feather-icons">
            <div
              class="col-12 col-sm-6 col-xl-4"
              @click="getDetails(icons)"
              v-for="(icons, i) in list.icons"
              :key="i"
            >
              <div class="media">
                <vue-feather :type="icons" />
                <div class="media-body align-self-center">
                  <h6 class="mt-0">{{ icons }}</h6>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>

  <div class="icon-hover-bottom p-fixed d-block" v-if="details.detailsVisible">
    <div class="container-fluid">
      <div class="row">
        <div class="icon-popup">
          <div class="close-icon">
            <i class="icofont icofont-close" @click="details.detailsVisible = false"></i>
          </div>
          <div class="icon-first">
            <vue-feather :type="details.icon" />
          </div>
          <div class="icon-class">
            <label class="icon-title">Class</label>
            <span>{{ details.icon }}</span>
          </div>
          <div class="icon-last icon-last">
            <label class="icon-title">Markup</label>
            <div class="form-inline">
              <div class="form-group">
                <input
                  class="inp-val form-control m-r-10"
                  id="input_copy"
                  type="text"
                  :value="`<vue-feather :type='${details.icon}' />`"
                  readonly
                />
                <button class="btn btn-primary notification" @click="copyText(details.icon)">
                  Copy text
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

import { featherIcon } from '@/core/data/icons/featherIcon'
import { toast } from 'vue3-toastify'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const details = ref({
  detailsVisible: false,
  icon: '',
})

function getDetails(value: string) {
  details.value = {
    detailsVisible: true,
    icon: value,
  }
}

function copyText(val: string) {
  navigator.clipboard.writeText(`<FeatherIcon :type='${val}'/>`)
  toast.success(`Code Copied to clipboard!`, {
    autoClose: 2000,
    position: 'bottom-right',
  })
}
</script>
