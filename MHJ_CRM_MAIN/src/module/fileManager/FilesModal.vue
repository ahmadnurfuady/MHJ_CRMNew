<template>
  <template v-if="props.modalDetails">
    <Modal
      :title="props.modalDetails.title"
      :modalOpen="props.modalDetails.open"
      :modalCentered="true"
      @closeModal="closeModal()"
    >
      <div class="modal-body">
        <form class="row g-3 needs-validation" @submit.prevent="submit()">
          <div class="col-12">
            <input
              class="form-control"
              v-model="fileForm.fileName"
              placeholder="Enter name"
              :class="{ 'is-invalid': errorMessage }"
            />
            <div class="invalid-feedback" v-if="errorMessage">
              {{ errorMessage }}
            </div>
          </div>
          <button type="submit" class="btn btn-primary mt-10">Save</button>
        </form>
      </div>
    </Modal>
  </template>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, defineAsyncComponent } from 'vue'

import { fileFormats } from '@/core/data/fileManager'
import type { FileModalDetails } from '@/types/fileManager'

const Modal = defineAsyncComponent(() => import('@/components/shared/Modal.vue'))

const props = defineProps<{
  modalDetails: FileModalDetails
}>()

const emit = defineEmits(['closeModal', 'fileForm'])

const fileForm = ref({
  fileName: '',
  fileType: '',
})

const formSubmitted = ref<boolean>(false)
const errorMessage = ref<string>('')

onMounted(() => {
  if (props.modalDetails) {
    fileForm.value.fileType = props.modalDetails.type

    if (props.modalDetails.renameFile && props.modalDetails.file) {
      fileForm.value.fileName = props.modalDetails.file.name
    }
  }
})

watch(
  () => props.modalDetails,
  (newValue) => {
    if (newValue) {
      fileForm.value.fileType = newValue.type

      if (newValue.renameFile && newValue.file) {
        fileForm.value.fileName = newValue.file.name
      }
    }
  },
  { immediate: true }
)

function submit() {
  formSubmitted.value = true

  if (fileForm.value.fileName) {
    if (
      props.modalDetails &&
      (props.modalDetails.type == 'file' || props.modalDetails.type == 'rename')
    ) {
      const filename = fileForm.value.fileName
      if (filename.includes('.')) {
        const index = filename.lastIndexOf('.')

        if (index !== -1) {
          const fileType = filename.substring(index)
          const isValid = fileFormats.includes(fileType.toLowerCase())

          if (!isValid) {
            errorMessage.value = 'Invalid Format'
            return
          }
        }
      } else {
        fileForm.value.fileName += '.txt'
      }
    }
    emit('fileForm', fileForm.value)
    emit('closeModal')
  } else {
    if (props.modalDetails) {
      if (props.modalDetails.type == 'file') {
        errorMessage.value = 'File name is required.'
      } else if (props.modalDetails.type == 'folder') {
        errorMessage.value = 'Folder name is required.'
      }
    }
  }
}

function closeModal() {
  errorMessage.value = ''
  fileForm.value.fileName = ''
  emit('closeModal')
}
</script>
