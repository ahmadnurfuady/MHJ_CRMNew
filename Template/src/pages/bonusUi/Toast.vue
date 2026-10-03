<template>
  <div class="container-fluid default-toasts">
    <div class="row">
      <div class="col-12">
        <MessageToast />
      </div>
      <div class="col-md-6">
        <LiveToast />
      </div>
      <div class="col-md-6">
        <ColorsSchemesToast />
      </div>
      <div class="col-md-6">
        <StackingToasts />
      </div>
      <div class="col-md-6">
        <TranslucentToasts />
      </div>
      <div class="col-md-6">
        <DefaultToast />
      </div>
      <div class="col-md-6">
        <UniqueToast />
      </div>
      <div class="col-sm-12">
        <ToastPlacement />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const MessageToast = defineAsyncComponent(() => import('@/module/bonusUi/toast/MessageToast.vue'))
const LiveToast = defineAsyncComponent(() => import('@/module/bonusUi/toast/LiveToast.vue'))
const ColorsSchemesToast = defineAsyncComponent(
  () => import('@/module/bonusUi/toast/ColorsSchemesToast.vue')
)
const StackingToasts = defineAsyncComponent(
  () => import('@/module/bonusUi/toast/StackingToasts.vue')
)
const TranslucentToasts = defineAsyncComponent(
  () => import('@/module/bonusUi/toast/TranslucentToasts.vue')
)
const DefaultToast = defineAsyncComponent(() => import('@/module/bonusUi/toast/DefaultToast.vue'))
const UniqueToast = defineAsyncComponent(() => import('@/module/bonusUi/toast/UniqueToast.vue'))
const ToastPlacement = defineAsyncComponent(
  () => import('@/module/bonusUi/toast/ToastPlacement.vue')
)
</script>
