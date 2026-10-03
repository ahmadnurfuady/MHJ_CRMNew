<template>
  <div class="advance-options">
    <ul class="nav nav-tabs border-tab">
      <li class="nav-item" v-for="(tab, index) in settingTabs" :key="index">
        <a
          class="nav-link"
          :class="{ active: activeTab === tab.value }"
          @click="handleTab(tab.value)"
          >{{ tab.title }}</a
        >
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane fade show active">
        <template v-if="activeTab === 'facebook-pixel'">
          <div class="row">
            <InputWrapper :title="'Status'" :class="'col-md-3 col-auto'">
              <div class="col-md-9 col-auto">
                <div class="form-check form-switch form-check-inline">
                  <div class="form-check form-switch form-check-inline">
                    <input
                      class="form-check-input switch-primary check-size"
                      type="checkbox"
                      role="switch"
                      checked
                    />
                  </div>
                </div>
              </div>
            </InputWrapper>
          </div>
          <div class="row">
            <InputWrapper :title="'Pixel Id'" :class="'col-md-3'">
              <div class="col-md-9">
                <InputField
                  :inputId="'pixel-id'"
                  :placeholder="'Enter pixel Id'"
                  v-model:modelValue="analyticsForm.facebookPixelId"
                  :required="false"
                />
              </div>
            </InputWrapper>
          </div>
        </template>
        <template v-else-if="activeTab === 'google-analytics'">
          <div class="row">
            <InputWrapper :title="'Status'" :class="'col-md-3 col-auto'">
              <div class="col-md-9 col-auto">
                <div class="form-check form-switch form-check-inline">
                  <div class="form-check form-switch form-check-inline">
                    <input
                      class="form-check-input switch-primary check-size"
                      type="checkbox"
                      role="switch"
                    />
                  </div>
                </div>
              </div>
            </InputWrapper>
          </div>
          <div class="row">
            <InputWrapper :title="'Measurement Id'" :class="'col-md-3'">
              <div class="col-md-9">
                <InputField
                  :inputId="'measurement-id'"
                  :placeholder="'Enter measurement Id'"
                  v-model:modelValue="analyticsForm.googleMeasurementId"
                  :required="false"
                />
              </div>
            </InputWrapper>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue'

import { initInputField } from '@/core/data/common'
import { analyticTabs } from '@/core/data/setting'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)

const settingTabs = analyticTabs
const activeTab = ref('facebook-pixel')

const analyticsForm = ref({
  facebookPixelId: initInputField(),
  googleMeasurementId: initInputField(),
})

onMounted(() => {
  analyticsForm.value = {
    facebookPixelId: { ...analyticsForm.value.facebookPixelId, data: '5899947538419005' },
    googleMeasurementId: {
      ...analyticsForm.value.googleMeasurementId,
      data: 'G-47FG4DEV34',
    },
  }
})

function handleTab(value: string) {
  activeTab.value = value
}
</script>
