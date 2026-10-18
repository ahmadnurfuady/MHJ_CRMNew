<template>
  <form>
    <div class="form-group m-0">
      <input
        class="form-control"
        type="search"
        placeholder="Search.."
        v-model.trim="inputValue"
        @input="onInput"
      />
      <SolarIcon :name="inputValue ? 'd-none' : ''" />
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['update-search'])
const inputValue = ref('')
const onInput = () => {
  emit('update-search', inputValue.value)
}
</script>
