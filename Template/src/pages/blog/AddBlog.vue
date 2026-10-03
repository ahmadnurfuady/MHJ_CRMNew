<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <Card
          :headerTitle="'Post Edit'"
          :border="true"
          :padding="false"
          :cardBodyClass="'add-post'"
        >
          <form class="row g-3">
            <div class="col-sm-12">
              <div class="mb-3">
                <InputWrapper :title="'Title:'">
                  <InputField :inputId="'title'" :placeholder="'Post Title'" :required="false" />
                </InputWrapper>
              </div>
              <div class="mb-3">
                <InputWrapper :title="'Type:'">
                  <div class="m-checkbox-inline">
                    <label :for="type.id" v-for="(type, index) in blogType" :key="index">
                      <input
                        class="radio_animated"
                        :id="type.id"
                        type="radio"
                        name="rdo-ani"
                        :checked="type.checked"
                      />
                      {{ type.title }}
                    </label>
                  </div>
                </InputWrapper>
              </div>
              <div class="mb-3">
                <InputWrapper :title="'Category:'">
                  <Select
                    :placeholder="'Select category'"
                    v-model="category"
                    :options="addBlogCategory"
                    :multiSelect="true"
                    :required="false"
                  />
                </InputWrapper>
              </div>
              <div class="email-wrapper">
                <div class="theme-form">
                  <div class="mb-3">
                    <InputWrapper :title="'Content:'" :class="'w-100'">
                      <div class="toolbar-box">
                        <ckeditor v-if="editor" :editor="editor"> </ckeditor>
                      </div>
                    </InputWrapper>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <form class="dropzone dropzone-secondary custom-scrollbar" id="multiFileUpload">
            <FilePond
              name="file"
              label-idle="<div class='dz-message needsclick'><i class='fa-solid fa-cloud-arrow-up fa-fade'></i><h6>Drop files here or click to upload.</h6><span class='note needsclick'>SVG, PNG, JPG <strong>or</strong> GIF</span></div>"
              allow-multiple
              :accepted-file-types="['image/png', 'image/jpeg']"
            />
          </form>
          <div class="common-flex justify-content-end mt-3">
            <button class="btn btn-primary" type="button">Post</button>
            <input class="btn btn-secondary" type="reset" value="Discard" />
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue'

import { addBlogCategory, blogType } from '@/core/data/blog'
import { initSelectField } from '@/core/data/common'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const InputWrapper = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputWrapper.vue')
)
const InputField = defineAsyncComponent(
  () => import('@/components/shared/formElements/InputField.vue')
)
const Select = defineAsyncComponent(() => import('@/components/shared/formElements/Select.vue'))

const editor = ref()
const category = ref(initSelectField())

onMounted(async () => {
  const { default: ClassicEditor } = await import('@ckeditor/ckeditor5-build-classic')
  editor.value = ClassicEditor
})
</script>
