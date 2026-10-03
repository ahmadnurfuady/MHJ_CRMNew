<template>
  <Modal
    :title="'Compose Message'"
    :modalOpen="props.modalOpen"
    :sizeClass="'modal-lg'"
    @closeModal="closeModal()"
  >
    <div class="modal-body compose-modal">
      <form>
        <div class="row mb-lg-3 g-1 mb-2">
          <InputWrapper :title="'To :'" :class="'col-lg-2'">
            <div class="col-lg-10">
              <InputField :inputId="'to'" :inputType="'email'" :required="false" />
              <div class="add-bcc">
                <div class="d-flex gap-2">
                  <a class="btn" @click="handleFields('cc')">Cc </a>
                  <a class="btn" @click="handleFields('bcc')">Bcc</a>
                </div>
              </div>
            </div>
          </InputWrapper>
        </div>
        <div class="collapse row mb-lg-3 mb-2" id="collapseCc" :class="{ show: fields['cc'] }">
          <InputWrapper :title="'Cc :'" :class="'col-lg-2'">
            <div class="col-lg-10">
              <InputField
                :inputId="'composeCc'"
                :placeholder="'elanarob@gmail.com'"
                :inputType="'email'"
                :required="false"
              />
            </div>
          </InputWrapper>
        </div>
        <div class="collapse row mb-lg-3 mb-2" id="collapseBcc" :class="{ show: fields['bcc'] }">
          <InputWrapper :title="'Bcc :'" :class="'col-lg-2'">
            <div class="col-lg-10">
              <InputField
                :inputId="'composeBcc'"
                :placeholder="'stiphen@yahoo.com'"
                :inputType="'email'"
                :required="false"
              />
            </div>
          </InputWrapper>
        </div>
        <div class="row mb-lg-3 g-1 mb-2">
          <InputWrapper :title="'Subject :'" :class="'col-lg-2'">
            <div class="col-lg-10">
              <InputField :inputId="'composeSubject'" :inputType="'email'" :required="false" />
            </div>
          </InputWrapper>
        </div>
        <div class="toolbar-box mb-lg-3 mb-2">
          <ckeditor v-if="editor" :editor="editor"> </ckeditor>
        </div>
        <div class="row mb-3 align-items-center g-1">
          <InputWrapper :title="'Attachments :'" :class="'col-lg-2'">
            <div class="col-lg-10">
              <InputField
                :inputId="'formFileMultiple'"
                :inputType="'file'"
                :required="false"
                :multiple="true"
              />
            </div>
          </InputWrapper>
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button class="btn button-light-primary" type="button">Save As Draft</button>
      <button class="btn btn-primary" type="button" @click="closeModal()">Send</button>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent, onMounted } from 'vue'

const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Modal = defineAsyncComponent(() => import('@/components/shared/Modal.vue'))

const props = defineProps<{
  modalOpen: boolean
}>()

const emits = defineEmits(['closeModal'])
const fields = ref({
  cc: false,
  bcc: false,
})

const editor = ref()
const editorData = ref('')

onMounted(async () => {
  const { default: ClassicEditor } = await import('@ckeditor/ckeditor5-build-classic')
  editor.value = ClassicEditor
})
function handleFields(value: string) {
  fields.value[value as 'cc' | 'bcc'] = !fields.value[value as 'cc' | 'bcc']
}

function closeModal() {
  emits('closeModal')
}
</script>
