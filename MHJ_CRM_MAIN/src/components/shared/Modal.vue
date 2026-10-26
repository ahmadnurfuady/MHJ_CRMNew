<template>
  <Transition name="modals">
    <div v-if="props.modalOpen" class="modal fade show d-block">
      <div
        class="modal-dialog"
        :class="[
          props.sizeClass,
          props.dialogClass,
          { 'modal-dialog-centered': props.modalCentered },
        ]"
      >
        <!-- Klik di luar form sengaja tidak menutup modal agar isian tidak hilang;
             tutup hanya lewat tombol X / Batal. -->
        <div class="modal-content" :class="contentClass">
          <div class="modal-header" v-if="props.title">
            <h5 class="modal-title">{{ props.title }}</h5>
            <button class="btn-close" type="button" @click="closeModal"></button>
          </div>
          <slot />
        </div>
      </div>
    </div>
  </Transition>
  <Transition name="modals">
    <div class="modal-backdrop fade show" v-if="props.modalOpen"></div>
  </Transition>
</template>

<script setup lang="ts">
import { ModalProps } from '@/types/common'

const props = withDefaults(defineProps<ModalProps>(), {
  modalOpen: false,
  modalCentered: false,
  staticBackdrop: false,
})

const emit = defineEmits(['closeModal'])

function closeModal() {
  emit('closeModal')
}
</script>
