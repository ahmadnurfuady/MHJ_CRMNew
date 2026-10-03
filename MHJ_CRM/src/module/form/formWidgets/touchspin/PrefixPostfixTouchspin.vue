<template>
  <div class="input-group">
    <button
      :class="`decrement-touchspin btn-touchspin touchspin-${props.color}`"
      @click="decrement(0)"
    >
      <i class="fa-solid fa-minus"></i>
    </button>
    <button class="btn-outline-warning" id="button-addon1" type="button" v-if="props.button">
      Pre
    </button>
    <span class="input-group-text" v-else>$</span>
    <input
      :class="`input-touchspin spin-outline-${props.color}`"
      type="number"
      :value="counter[0]"
    />
    <button
      :class="`increment-touchspin btn-touchspin touchspin-${props.color}`"
      @click="increment(0)"
    >
      <i class="fa-solid fa-plus"></i>
    </button>
  </div>
  <div class="input-group">
    <button
      :class="`decrement-touchspin btn-touchspin touchspin-${props.color}`"
      @click="decrement(1)"
    >
      <i class="fa-solid fa-minus"></i>
    </button>
    <input
      :class="`input-touchspin spin-outline-${props.color}`"
      type="number"
      :value="counter[1]"
    />
    <button class="btn-outline-warning" id="button-addon2" type="button" v-if="props.button">
      Post
    </button>
    <span class="input-group-text" v-else>%</span>
    <button
      :class="`increment-touchspin btn-touchspin touchspin-${props.color}`"
      @click="increment(1)"
    >
      <i class="fa-solid fa-plus"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    button?: boolean
    color?: string
  }>(),
  {
    button: false,
  }
)

const counter = ref([0, 0])

function increment(i: number) {
  if (i == 0 || i == 1) {
    counter.value[i] += 1
  }
}

function decrement(i: number) {
  if (i == 0 || i == 1) {
    if (counter.value[i] > 0) {
      counter.value[i] -= 1
    }
  }
}
</script>
