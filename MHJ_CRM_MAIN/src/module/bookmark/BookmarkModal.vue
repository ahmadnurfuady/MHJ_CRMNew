<template>
  <Modal
    :title="props.modalTitle"
    :modalOpen="props.modalOpen"
    :sizeClass="'modal-lg'"
    @closeModal="close()"
  >
    <div class="modal-body custom-input">
      <form
        class="form-bookmark needs-validation"
        id="bookmark-form"
        @submit.prevent="handleSubmit()"
      >
        <div class="row g-2">
          <div class="mb-3 mt-0 col-md-12">
            <InputWrapper :title="'Web Url'">
              <InputField
                :formSubmitted="bookmarkState.formSubmitted"
                :errorMessage="'Web url is required.'"
                v-model:modelValue="bookmarkState.bookmarkForm.url"
                :inputId="'url'"
                :placeholder="'Enter web url'"
              />
            </InputWrapper>
          </div>
          <div class="mb-3 mt-0 col-md-12">
            <InputWrapper :title="'Title'">
              <InputField
                :formSubmitted="bookmarkState.formSubmitted"
                :errorMessage="'Title is required.'"
                v-model:modelValue="bookmarkState.bookmarkForm.title"
                :inputId="'title'"
                :placeholder="'Enter title'"
              />
            </InputWrapper>
          </div>
          <div class="mb-3 mt-0 col-md-12">
            <InputWrapper :title="'Description'">
              <InputField
                :formSubmitted="bookmarkState.formSubmitted"
                :errorMessage="'Description is required.'"
                v-model:modelValue="bookmarkState.bookmarkForm.description"
                :inputId="'description'"
                :inputType="'textarea'"
                :placeholder="'Enter description'"
              />
            </InputWrapper>
          </div>
          <div class="mt-0 col-md-6">
            <InputWrapper :title="'Tag'">
              <Select
                getValueKey="label"
                display-key="label"
                :placeholder="'Select tag'"
                v-model="bookmarkState.bookmarkForm.tag"
                :options="bookmarkTags"
                :errorMessage="'Please select tag.'"
                :formSubmitted="bookmarkState.formSubmitted"
              />
            </InputWrapper>
          </div>
          <div class="mt-0 col-md-6">
            <InputWrapper :title="'Collection'">
              <Select
                getValueKey="label"
                display-key="label"
                :placeholder="'Select collection'"
                v-model="bookmarkState.bookmarkForm.collection"
                :options="bookmarkCollection"
                :errorMessage="'Please select collection.'"
                :formSubmitted="bookmarkState.formSubmitted"
              />
            </InputWrapper>
          </div>
        </div>
        <input id="index_var" type="hidden" value="6" />
        <button class="btn btn-primary me-2" id="Bookmark" type="submit">Save</button>
        <button class="btn btn-secondary" type="button" @click.prevent="close()">Cancel</button>
      </form>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { defineAsyncComponent, onMounted } from 'vue'

import { storeToRefs } from 'pinia'

import { bookmarkCollection, bookmarkTags } from '@/core/data/bookmark'
import { useBookmark } from '@/store/bookmark'
import { assignFormFieldValue } from '@/utils/index'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))
const Modal = defineAsyncComponent(() => import('@/components/shared/Modal.vue'))

const bookmarkStore = useBookmark()
const { bookmarkState } = storeToRefs(bookmarkStore)
const { handleSubmit } = bookmarkStore

const props = withDefaults(
  defineProps<{
    modalOpen?: boolean
    modalTitle?: string
    editBookmark?: boolean
  }>(),
  {
    modalTitle: 'Add Bookmark',
    editBookmark: false,
  }
)

const emits = defineEmits(['closeModal'])

onMounted(() => {
  if (bookmarkState.value.currentBookmark) {
    bookmarkState.value.bookmarkForm = assignFormFieldValue(
      bookmarkState.value.bookmarkForm,
      bookmarkState.value.currentBookmark
    )
  }
})

function close() {
  emits('closeModal')
}
</script>
