<template>
  <Modal
    :title="props.modalDetails?.title"
    :sizeClass="props.modalDetails?.sizeClass"
    :modalOpen="props.modalOpen"
    @closeModal="close()"
  >
    <div class="modal-body dark-modal">
      <div class="large-modal-header">
        <vue-feather :type="'chevrons-right'" />
        <h6>Web Design</h6>
      </div>
      <p class="modal-padding-space">
        We build specialized websites for companies, list them on digital directories, and set up a
        sales funnel to boost ROI.
      </p>
      <div class="large-modal-header">
        <vue-feather :type="'chevrons-right'" />
        <h6>Content Marketing</h6>
      </div>
      <p class="modal-padding-space">
        Through better opportunities and knowledgeable marketing strategies, we aid business funnel.
        We won't only hit the target; instead, we'll aim higher and surpass the objectives.
      </p>
      <div class="large-modal-header">
        <vue-feather :type="'chevrons-right'" />
        <h6>PPC</h6>
      </div>
      <p class="modal-padding-space">
        Customized advertising to increase visitors and improve conversion. To increase retention,
        identify the correct audience and remarked to them.
      </p>
      <div class="large-modal-header">
        <vue-feather :type="'chevrons-right'" />
        <h6>UX Designer</h6>
      </div>
      <p class="modal-padding-space">
        The capacity to comprehend and experience other people's feelings is known as empathy. A
        positive consumer experience is prioritized by UX. The finest UX designers spend time
        studying individuals and their tendencies because of this. Designers may produce goods that
        genuinely engage and excite customers by having a thorough understanding of the end
        consumers.
      </p>
    </div>
    <template v-if="props.button">
      <div class="modal-footer">
        <button class="btn btn-secondary" type="button" @click="close()">Close</button>
        <button class="btn btn-primary" type="button">Save</button>
      </div>
    </template>
  </Modal>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import type { SizeModal } from '@/types/uiKits'

const Modal = defineAsyncComponent(() => import('@/components/shared/Modal.vue'))

const props = withDefaults(
  defineProps<{
    modalOpen: boolean
    modalDetails: SizeModal
    button?: boolean
  }>(),
  {
    button: false,
  }
)

const emits = defineEmits(['closeModal'])

function close() {
  emits('closeModal')
}
</script>
