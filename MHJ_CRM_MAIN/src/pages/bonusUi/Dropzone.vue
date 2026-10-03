<template>
  <div class="container-fluid">
    <div class="row main-dropzone">
      <div class="col-lg-6">
        <Card
          :headerTitle="'Single File Upload'"
          :border="true"
          :padding="false"
          :cardClass="'height-equal'"
        >
          <template #header5>
            <p class="f-m-light mt-1">
              Use <code>FilePond</code> to implement a <strong>single file upload</strong> feature.
              Users can select or drag & drop only <strong>one file at a time</strong>. Additional
              files cannot be added until the existing file is removed. This behavior is enforced
              using <code>maxFiles</code> and file type restrictions (PNG, JPG).
            </p>
          </template>
          <form class="dropzone dropzone-secondary custom-scrollbar">
            <FilePond
              name="file"
              label-idle="<div class='dz-message needsclick'><i class='fa-solid fa-cloud-arrow-up fa-fade'></i><h6>Drop files here or click to upload.</h6><span class='note needsclick'>SVG, PNG, JPG <strong>or</strong> GIF</span></div>"
              :accepted-file-types="['image/png', 'image/jpeg']"
            />
          </form>
        </Card>
      </div>
      <div class="col-lg-6">
        <Card
          :headerTitle="'Multiple File Upload'"
          :border="true"
          :padding="false"
          :cardClass="'height-equal'"
        >
          <template #header5>
            <p class="f-m-light mt-1">
              Use <code>FilePond</code> to implement a
              <strong>multiple file upload</strong> feature. It allows users to select or drag &
              drop <strong>multiple files at once</strong>. The
              <code>allow-multiple</code> attribute enables uploading several files simultaneously.
              You can optionally restrict the number of files using <code>maxFiles</code>.
            </p>
          </template>

          <form class="dropzone dropzone-secondary custom-scrollbar">
            <FilePond
              class="multipal"
              name="file"
              label-idle="<div class='dz-message needsclick'><i class='fa-solid fa-cloud-arrow-up fa-fade'></i><h6>Drop files here or click to upload.</h6><span class='note needsclick'>SVG, PNG, JPG <strong>or</strong> GIF</span></div>"
              :accepted-file-types="['image/png', 'image/jpeg']"
              :allow-multiple="true"
              :max-files="10"
            />
          </form>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
