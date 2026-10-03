<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xxl-3 col-lg-4 col-sm-6 col-12 box-col-4">
        <PositionSweetAlert
          :title="'Position Top Start'"
          :position="'top-start'"
          :buttonColor="'secondary'"
        />
      </div>
      <div class="col-xxl-3 col-lg-4 col-sm-6 col-12 box-col-4">
        <PositionSweetAlert
          :title="'Position Top End'"
          :position="'top-end'"
          :buttonColor="'info'"
        />
      </div>
      <div class="col-xxl-3 col-lg-4 col-sm-6 col-12 box-col-4">
        <PositionSweetAlert
          :title="'Position Bottom Start'"
          :position="'bottom-start'"
          :buttonColor="'warning'"
        />
      </div>
      <div class="col-xxl-3 col-lg-4 col-sm-6 col-12 box-col-4">
        <PositionSweetAlert
          :title="'Position Bottom End'"
          :position="'bottom-end'"
          :buttonColor="'primary'"
        />
      </div>
      <div class="col-xxl-3 col-lg-4 col-sm-6 col-12 box-col-4">
        <BasicSweetAlert />
      </div>
      <div class="col-xxl-3 col-lg-4 col-sm-6 col-12 box-col-4">
        <TitleTextSweetAlert />
      </div>
      <div class="col-xxl-3 col-lg-4 col-sm-6 col-12 box-col-4">
        <DismissAlert />
      </div>
      <div class="col-xxl-3 col-lg-4 col-sm-6 col-12 box-col-4">
        <HtmlTextAlert />
      </div>
      <div class="col-xxl-3 col-lg-4 col-sm-6 col-12 box-col-4">
        <ConfirmationAlert />
      </div>
      <div class="col-xxl-3 col-lg-4 col-sm-6 col-12 box-col-4">
        <AnimatedAlert />
      </div>
      <div class="col-xxl-3 col-lg-4 col-sm-6 col-12 box-col-4">
        <ConfirmationTriggerSweetAlert />
      </div>
      <div class="col-xxl-3 col-lg-4 col-sm-6 col-12 box-col-4">
        <ImageMessageSweetAlert />
      </div>
      <div class="col-xxl-3 col-lg-4 col-sm-6 col-12 box-col-4">
        <TimerSweetAlert />
      </div>
      <div class="col-xxl-3 col-lg-4 col-sm-6 col-12 box-col-4">
        <AJAXRequestSweetAlert />
      </div>
      <div class="col-xxl-3 col-lg-4 col-sm-6 col-12 box-col-4">
        <ConfirmationApprovalSweetalert />
      </div>
      <div class="col-xxl-3 col-lg-4 col-sm-6 col-12 box-col-4">
        <RTLSupportSweetalert />
      </div>
      <div class="col-xxl-3 col-lg-4 col-sm-6 col-12 box-col-4">
        <PasswordGeneratorSweetalert />
      </div>
      <div class="col-xxl-3 col-lg-4 col-sm-6 col-12 box-col-4">
        <DateSweetalert />
      </div>
      <div class="col-xxl-3 col-lg-4 col-sm-6 col-12 box-col-4">
        <CustomPositionedSweetalert />
      </div>
      <div class="col-xxl-3 col-lg-4 col-sm-6 col-12 box-col-4">
        <FormSweetalert />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const PositionSweetAlert = defineAsyncComponent(
  () => import('@/module/bonusUi/sweetAlert2/PositionSweetAlert.vue')
)
const BasicSweetAlert = defineAsyncComponent(
  () => import('@/module/bonusUi/sweetAlert2/BasicSweetAlert.vue')
)
const TitleTextSweetAlert = defineAsyncComponent(
  () => import('@/module/bonusUi/sweetAlert2/TitleTextSweetAlert.vue')
)
const DismissAlert = defineAsyncComponent(
  () => import('@/module/bonusUi/sweetAlert2/DismissAlert.vue')
)
const HtmlTextAlert = defineAsyncComponent(
  () => import('@/module/bonusUi/sweetAlert2/HtmlTextAlert.vue')
)
const ConfirmationAlert = defineAsyncComponent(
  () => import('@/module/bonusUi/sweetAlert2/ConfirmationAlert.vue')
)
const AnimatedAlert = defineAsyncComponent(
  () => import('@/module/bonusUi/sweetAlert2/AnimatedAlert.vue')
)
const ConfirmationTriggerSweetAlert = defineAsyncComponent(
  () => import('@/module/bonusUi/sweetAlert2/ConfirmationTriggerSweetAlert.vue')
)
const ImageMessageSweetAlert = defineAsyncComponent(
  () => import('@/module/bonusUi/sweetAlert2/ImageMessageSweetAlert.vue')
)
const TimerSweetAlert = defineAsyncComponent(
  () => import('@/module/bonusUi/sweetAlert2/TimerSweetAlert.vue')
)
const AJAXRequestSweetAlert = defineAsyncComponent(
  () => import('@/module/bonusUi/sweetAlert2/AJAXRequestSweetAlert.vue')
)
const ConfirmationApprovalSweetalert = defineAsyncComponent(
  () => import('@/module/bonusUi/sweetAlert2/ConfirmationApprovalSweetalert.vue')
)
const RTLSupportSweetalert = defineAsyncComponent(
  () => import('@/module/bonusUi/sweetAlert2/RTLSupportSweetalert.vue')
)
const PasswordGeneratorSweetalert = defineAsyncComponent(
  () => import('@/module/bonusUi/sweetAlert2/PasswordGeneratorSweetalert.vue')
)
const DateSweetalert = defineAsyncComponent(
  () => import('@/module/bonusUi/sweetAlert2/DateSweetalert.vue')
)
const FormSweetalert = defineAsyncComponent(
  () => import('@/module/bonusUi/sweetAlert2/FormSweetalert.vue')
)
const CustomPositionedSweetalert = defineAsyncComponent(
  () => import('@/module/bonusUi/sweetAlert2/CustomPositionedSweetalert.vue')
)
</script>
