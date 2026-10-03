<template>
  <div class="touchspin-wrapper" v-for="(details, index) of list" :key="index">
    <button
      :class="`decrement-touchspin btn-touchspin ${touchSpinClass}-${details.color}`"
      @click="changeValue(details.id, -1)"
    >
      <i class="fa-solid fa-minus"> </i>
    </button>
    <input
      :class="`input-touchspin spin-outline-${details.color}`"
      type="number"
      :value="details.value"
    />
    <button
      :class="`increment-touchspin btn-touchspin ${touchSpinClass}-${details.color}`"
      @click="changeValue(details.id, 1)"
    >
      <i class="fa-solid fa-plus"> </i>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import { touchSpinDetails } from '@/core/data/forms/formWidgets'
import type { TouchSpin } from '@/types/forms/formWidgets'

const props = withDefaults(
  defineProps<{
    outlined?: boolean
  }>(),
  {
    outlined: false,
  }
)

const touchSpinClass = ref<string>('')
const touchspin = touchSpinDetails
const list = ref(JSON.parse(JSON.stringify(touchspin)))

onMounted(() => {
  if (props.outlined) {
    touchSpinClass.value = 'spin-border'
  } else {
    touchSpinClass.value = 'touchspin'
  }
})

function changeValue(id: number, value: number) {
  list.value.forEach((details: TouchSpin) => {
    if (details.id === id) {
      if (value === -1 && details.value > 0) {
        details.value -= 1
      } else if (value === 1) {
        details.value += 1
      }
    }
  })
}
</script>
