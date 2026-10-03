<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <Card
          :headerTitle="'Modal with Animations'"
          :border="true"
          :padding="false"
          :cardBodyClass="'animated-modal-wrapper'"
        >
          <template #header5>
            <p class="f-m-light mt-1">Make use of the various modal fades and animations.</p>
          </template>
          <div class="row common-align">
            <div class="col-xl-6 col-md-8">
              <div class="animate-img" id="animation-box">
                <div class="card mb-0">
                  <div class="animate-widget">
                    <div>
                      <img class="img-fluid" :src="getImages('slider/6.jpg')" alt="Drawing-room" />
                    </div>
                    <div class="text-center p-25">
                      <h5>It&apos;s Magic!!</h5>
                      <span class="f-light"
                        >Select the animation options given below and then click on the launch
                        button.</span
                      >
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <form class="form-inline theme-form animated-modal">
                <div class="animated-modal-md-mb row">
                  <label class="col-md-2 mb-0 custom-col-2">IN</label>
                  <Select
                    getValueKey="label"
                    display-key="label"
                    :placeholder="'Select Value'"
                    v-model="modalValue.inValue"
                    :options="modalInValues"
                    :required="false"
                    :showOptions="true"
                    @update:modelValue="handlePosition($event, 'inValue')"
                  />
                </div>
                <div class="animated-modal-md-mb row">
                  <label class="col-md-2 mb-0 custom-col-2">Out</label>
                  <Select
                    getValueKey="label"
                    display-key="label"
                    :placeholder="'Select Value'"
                    v-model="modalValue.outValue"
                    :options="modalOutValues"
                    :required="false"
                    :showOptions="true"
                    @update:modelValue="handlePosition($event, 'outValue')"
                  />
                </div>
                <div class="mt-2 text-center w-100">
                  <button class="btn btn-primary" type="button" @click="openModal()">
                    Launch Modal
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
  <AnimatedModals
    :modalOpen="modalOpen"
    :dialogClass="modalDialogClass"
    @closeModal="closeModal()"
  />
  <div class="animated-toast position-fixed bottom-0 end-0 p-3">
    <div class="toast" id="liveToastFirst" role="alert" :class="{ show: toastVisible }">
      <div class="toast-header">
        <h6 class="me-auto">Use this value for animated modal</h6>
        <button class="btn-close" type="button" @click="toastVisible = false"></button>
      </div>
      <div class="toast-body" id="toasts-body">
        <p>{{ modalValue.inValue.data }}</p>
        <p>{{ modalValue.outValue.data }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { modalInValues, modalOutValues } from '@/core/data/bonusUI/animatedModal'
import { getImages } from '@/utils/index'
import { useAnimatedModal } from '@/composable/useAnimatedModal'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))
const AnimatedModals = defineAsyncComponent(
  () => import('@/module/bonusUi/animated/AnimatedModals.vue')
)

const {
  modalValue,
  modalOpen,
  modalDialogClass,
  toastVisible,
  handlePosition,
  openModal,
  closeModal,
} = useAnimatedModal()
</script>
