<template>
  <td>
    <div class="touchspin-wrapper">
      <button
        @click="$emit('decrement', item)"
        class="decrement-touchspin btn-touchspin touchspin-primary"
      >
        <i class="fa fa-minus"></i>
      </button>
      <input
        class="input-touchspin spin-outline-primary"
        type="number"
        v-model.number="item.quantity"
      />
      <button
        @click="$emit('increment', item)"
        class="increment-touchspin btn-touchspin touchspin-primary"
      >
        <i class="fa fa-plus"></i>
      </button>
    </div>
  </td>
  <td>
    <h4 class="txt-primary">&#36; {{ item.price * item.quantity }}</h4>
  </td>
  <td>
    <div class="product-action">
      <a class="square-white" data-bs-title="Wishlist">
        <SvgIcon icon="fill-wishlist" />
      </a>
      <a class="square-white trash-3" data-bs-title="Delete" @click="$emit('delete', item)">
        <SvgIcon icon="trash1" />
      </a>
    </div>
  </td>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))

defineProps({
  item: {
    type: Object,
    required: true,
  },
})

defineEmits(['increment', 'decrement', 'delete'])
</script>
