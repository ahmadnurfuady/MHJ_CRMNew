<template>
  <div class="row attach-files-wrapper">
    <div class="col-12">
      <Card>
        <div class="common-f-start">
          <template v-for="(attachment, index) in attachmentType" :key="index">
            <div :class="`bg-10-${attachment.color}`">
              <div :class="`outer-file-circle shadow-10-${attachment.color}`">
                <SvgIcon :icon="attachment.icon" type="default"></SvgIcon>
              </div>
              <p :class="`mb-0 txt-${attachment.color}`">{{ attachment.title }}</p>
            </div>
          </template>
        </div>
      </Card>
    </div>

    <div class="col-12">
      <Card>
        <div class="upload-files-wrapper">
          <div class="create-file-box">
            <div class="d-flex">
              <SvgIcon :icon="'vector-create'" type="default"></SvgIcon>
              <div>
                <h6>Create Folder</h6>
                <p class="mb-0 c-o-light">Create folder in this zone</p>
              </div>
            </div>
          </div>
          <div class="upload-file-box">
            <div class="d-flex">
              <SvgIcon :icon="'vector-upload'" type="default"></SvgIcon>
              <div>
                <h6>Upload files</h6>
                <p class="mb-0 c-o-light">Drop your files in this zone</p>
              </div>
            </div>
          </div>

          <div v-for="(attachment, index) in attachments" :key="index">
            <router-link :to="routes.App.FileManager">
              <div class="d-flex">
                <SvgIcon :icon="attachment.fileIcon" type="default"></SvgIcon>
                <div>
                  <h6>{{ attachment.fileName }}</h6>
                  <p class="mb-0 c-o-light">Uploaded {{ attachment.uploadTime }} ago</p>
                </div>
              </div>
            </router-link>
            <div class="common-space">
              <p class="mb-0">{{ attachment.uploadSize }} GB</p>
              <span>{{ attachment.totalFileSize }} GB</span>
            </div>
            <div class="progress">
              <div
                class="progress-bar bg-primary"
                :style="{
                  width: (attachment.uploadSize / attachment.totalFileSize) * 100 + '%',
                }"
              ></div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import { routes } from '@/router/routes'
import { projectDetails } from '@/core/data/project'

const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

const attachmentType = ref(projectDetails.attachment.attachmentTypes)
const attachments = ref(projectDetails.attachment.attachments)
</script>
