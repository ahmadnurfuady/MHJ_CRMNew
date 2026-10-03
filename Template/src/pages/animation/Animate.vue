<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <Card :cardClass="'animate-wrapper'" :border="false">
          <div class="row">
            <div class="col-xl-6 col-md-8 offset-xl-3 offset-md-2">
              <div
                id="animation-box"
                :class="animated && animation ? 'animated' + ' ' + animation : ''"
              >
                <div class="card">
                  <div class="animate-widget">
                    <div>
                      <img class="img-fluid" :src="getImages('banner/3.jpg')" alt="banner" />
                    </div>
                    <div class="text-center p-25">
                      <p class="text-muted mb-0">
                        Denouncing pleasure and praising pain was born and I will give you a
                        complete account of the system, and expound the actual teachings
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <form class="theme-form text-center">
                <div class="mb-3">
                  <Select
                    getValueKey="label"
                    display-key="label"
                    :placeholder="'Select Value'"
                    v-model="animation_value"
                    :options="animationValues"
                    :required="false"
                    :showOptions="true"
                    @update:modelValue="handlePosition($event)"
                  />
                </div>
                <button
                  class="js-triggeraNimation btn btn-primary"
                  type="button"
                  @click="animate()"
                >
                  Animate it
                </button>
              </form>
            </div>
          </div>
        </Card>
      </div>
      <div class="col-sm-12">
        <Card
          :headerTitle="'How to use it?'"
          :border="true"
          :padding="false"
          :cardBodyClass="'options'"
        >
          <template #header5>
            <p class="f-m-light mt-1">
              All you have to do is to add animation name class attribute to html element, like
              :<code>Fade</code>
            </p>
          </template>
          <template v-for="list in animationValues" :key="list.value">
            <div v-for="item in list.data" :key="item.value">
              {{ item.label }}
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent, onMounted, onBeforeUnmount } from 'vue'
import { animationValues } from '@/core/data/animation'
import { initSelectField } from '@/core/data/common'
import type { SelectField } from '@/types/common'
import { getImages, titleCase } from '@/utils/index'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))

const animated = ref<boolean>(false)
const animation = ref<string>('bounceIn')
const animation_value = ref<SelectField>(initSelectField())

let animationTimer: number | null = null

onMounted(() => {
  animation_value.value = {
    selectedItems: [],
    selected: { label: titleCase(animation.value), value: animation.value },
    data: animation.value,
    errorMessage: '',
    type: 'dropdown',
  }
})

onBeforeUnmount(() => {
  if (animationTimer) {
    clearTimeout(animationTimer)
  }
})

function handlePosition(value: SelectField) {
  if (value) {
    animation.value = value.data
  }
}

function animate() {
  if (animationTimer) {
    clearTimeout(animationTimer)
  }
  animated.value = false
  void animated.value
  animated.value = true
  animationTimer = window.setTimeout(() => {
    animated.value = false
    animationTimer = null
  }, 500)
}
</script>
