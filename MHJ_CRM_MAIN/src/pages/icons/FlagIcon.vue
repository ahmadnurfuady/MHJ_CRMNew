<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <Card :headerTitle="'Flag Icons'" :border="true" :padding="false" :headerClass="'m-b-0'">
          <div class="row icon-lists flag-icons">
            <template v-for="icon in flagIcon" :key="icon.name">
              <div class="col-12 col-sm-6 col-xl-4" @click="getDetails(icon.countryCode)">
                <div class="media">
                  <i :class="`flag-icon flag-icon-${icon.countryCode}`"></i>
                  <div class="media-body align-self-center">
                    <h5>{{ icon.countryCode.toUpperCase() }}</h5>
                    <h6 class="mt-0">{{ icon.name }}</h6>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </Card>
      </div>
    </div>
  </div>

  <div class="icon-hover-bottom p-fixed fa-fa-icon-show-div d-block" v-if="details.detailsVisible">
    <div class="container-fluid">
      <div class="row">
        <div class="icon-popup">
          <div class="close-icon">
            <i class="icofont icofont-close" @click="details.detailsVisible = false"></i>
          </div>
          <div class="icon-first">
            <i :class="`flag-icon flag-icon-${details.icon} fa-2x text-white`" id="icon_main"></i>
          </div>
          <div class="icon-class">
            <label class="icon-title">Class</label>
            <span>flag-icon flag-icon-{{ details.icon }}</span>
          </div>
          <div class="icon-last icon-last">
            <label class="icon-title">Markup</label>
            <div class="form-inline">
              <div class="form-group">
                <input
                  class="inp-val form-control m-r-10"
                  id="input_copy"
                  type="text"
                  :value="`<i class='flag-icon flag-icon-${details.icon}'></i>`"
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
import { flagIcon } from '@/core/data/icons/flagIcon'
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
  navigator.clipboard.writeText(`<i class="flag-icon flag-icon-${val}"></i>`)
  toast.success(`Code Copied to clipboard!`, {
    autoClose: 2000,
    position: 'bottom-right',
  })
}
</script>
