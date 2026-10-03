<template>
  <Card :headerTitle="'Form Loading'" :headerClass="'mb-0'" :border="true" :padding="false">
    <template #header5>
      <p class="f-m-light mt-1">
        Use <code>&lt;ngx-spinner&gt;</code> to display a loading spinner. Customize the background
        with the <code>bdColor</code> property, adjust the size using <code>size</code>, and change
        the spinner color with <code>color</code>. To set different spinner styles, use the
        <code>[type]</code> input. Supported types include <code>ball-clip-rotate</code>,
        <code>ball-fall</code>, and <code>ball-spin-clockwise</code>. Control its display mode with
        <code>[fullScreen]</code> as needed.
      </p>
    </template>
    <div class="form-main-wrapper">
      <div class="form-block-wrapper">
        <div class="card-wrapper border rounded-3 pay-info light-card">
          <form class="row g-3 needs-validation" novalidate>
            <div class="col-md-12">
              <InputWrapper :title="'Card Holder'">
                <InputField
                  :inputId="'card-holder'"
                  :placeholder="'Enter card holder name'"
                  :required="false"
                />
              </InputWrapper>
            </div>
            <div class="col-md-4">
              <InputWrapper :title="'Card Number'">
                <InputField
                  :inputId="'card-number'"
                  :placeholder="'xxxx xxxx xxxx xxxx'"
                  :inputType="'number'"
                  :required="false"
                />
              </InputWrapper>
            </div>
            <div class="col-md-4">
              <InputWrapper :title="'Expiration(MM/YY)'">
                <InputField
                  :inputId="'expiration'"
                  :placeholder="'xx/xx'"
                  :inputType="'number'"
                  :required="false"
                />
              </InputWrapper>
            </div>
            <div class="col-md-4">
              <InputWrapper :title="'CVV'">
                <InputField
                  :inputId="'cvv'"
                  :placeholder="'xxx'"
                  :inputType="'number'"
                  :required="false"
                />
              </InputWrapper>
            </div>
            <div class="col-12">
              <div class="form-check">
                <Checkbox
                  :class="'form-check-input'"
                  :label="'All the above information is correct'"
                  :inputId="'card-info-agreement'"
                  :required="false"
                />
              </div>
            </div>
          </form>
        </div>

        <loading-overlay
          :active="loadingShow"
          :is-full-page="false"
          :opacity="0.5"
          :color="'#343a40'"
          :background-color="'#ffffffcc'"
          :width="30"
          :height="30"
          :loader="['dots', 'bars'].includes(type) ? type : ''"
        >
          <!-- Custom slot shown when not using dots or bars -->
          <template v-if="!['dots', 'bars'].includes(type)" #default>
            <div class="custom-loader">
              <div class="text-center fw-semibold" :style="{ color: '#343a40' }">
                Please wait...
              </div>
            </div>
          </template>
        </loading-overlay>
      </div>
      <div class="common-flex">
        <button class="button btn btn-primary block-btn-1" @click="loading('custom')">
          Form Loader 1
        </button>
        <button class="button btn btn-primary block-btn-2" @click="loading('dots')">
          Form Loader 2
        </button>
        <button class="button btn btn-primary block-btn-3" @click="loading('bars')">
          Form Loader 3
        </button>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref, onBeforeUnmount } from 'vue'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)

const type = ref<string>('')
const loadingShow = ref<boolean>(false)

let loadingTimer: number | null = null

function loading(value: string) {
  type.value = value
  loadingShow.value = true
  if (loadingTimer) {
    clearTimeout(loadingTimer)
  }
  loadingTimer = window.setTimeout(() => {
    loadingShow.value = false
    loadingTimer = null
  }, 3000)
}

onBeforeUnmount(() => {
  if (loadingTimer) {
    clearTimeout(loadingTimer)
  }
})
</script>
