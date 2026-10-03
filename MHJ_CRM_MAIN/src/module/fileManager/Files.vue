<template>
  <Card :headerTitle="'All Files'" :border="true" :padding="false">
    <template #header5>
      <p class="mb-0 f-light">Recently opened files</p>
    </template>

    <div class="common-file-manager">
      <div class="filemanger">
        <div class="top-menu">
          <button @click="openDialog('New File', 'file')">
            <i class="fa-solid fa-file-circle-plus"></i>
            Add Files
          </button>
          <button @click="openDialog('New Folder', 'folder')">
            <i class="fa-regular fa-folder-open"></i>
            Add Folder
          </button>
          <button @click="openDialog('Rename', 'rename')">
            <i class="fa-solid fa-pen-to-square"></i>
            Rename
          </button>
          <button @click="deleteModal()">
            <i class="fa-solid fa-trash"></i>
            Delete
          </button>
        </div>
        <div class="top-folder-path">
          <div class="path-action-btns">
            <button
              id="backwardBtn"
              @click="navigate('back')"
              :disabled="!fileManagerState.isSubFolder"
            >
              <i class="fa-solid fa-arrow-left"></i>
            </button>
            <button
              id="forwardBtn"
              @click="navigate('next')"
              :disabled="fileManagerState.forwardStack.length === 0"
            >
              <i class="fa-solid fa-arrow-right"></i>
            </button>
            <button @click="goHome()">
              <i class="fa-solid fa-house"></i>
            </button>
          </div>
          <div class="folder-path-write">
            <input
              class="folder-path-input"
              type="text"
              v-model="fileManagerState.location"
              readonly
            />
            <button class="block-btn-1">
              <i class="fa-solid fa-arrows-rotate"></i>
            </button>
          </div>
        </div>
        <div class="file-manager-grid block-wrapper">
          <template v-if="fileManagerState.visibleFiles.length">
            <div
              :class="{
                file: file.type == 'file',
                folder: file.type == 'folder',
                'item-selected':
                  fileManagerState.selected && fileManagerState.selected.id == file.id,
              }"
              v-for="(file, index) in fileManagerState.visibleFiles"
              :key="index"
              @dblclick="file.type == 'folder' ? openFolder(file.id) : ''"
              @click="select(file)"
            >
              <div class="doc-icon-container" v-if="file.type == 'file'" @click="select(file)">
                <div class="doc-icon">
                  <p>{{ file.text }}</p>
                </div>
              </div>
              <div
                class="folder-icon-container"
                v-if="file.type == 'folder'"
                @dblclick="openFolder(file.id)"
                @click="select(file)"
              >
                <div class="folder-icon"></div>
              </div>
              <div class="common-space">
                <p class="folder-name">{{ file.name }}</p>
              </div>
            </div>
          </template>
          <template v-if="!fileManagerState.visibleFiles.length">
            <div class="folderEmpty" :style="{ display: 'block' }">
              <SvgIcon :icon="'folder-empty'" type="default"></SvgIcon>
              <h5>This folder is currently empty!</h5>
            </div>
          </template>
        </div>
      </div>
    </div>
  </Card>

  <FilesModal
    v-if="fileManagerState.isModalOpen"
    :modalDetails="fileManagerState.modalDetails"
    @fileForm="handleForm($event)"
    @closeModal="closeModal($event)"
  />

  <DeleteFileModal
    v-if="fileManagerState.deleteModalOpen"
    :modalOpen="fileManagerState.deleteModalOpen"
    @delete="remove($event)"
    @closeModal="fileManagerState.deleteModalOpen = false"
  />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useFileManager } from '@/store/fileManager'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const SvgIcon = defineAsyncComponent(() => import('@/components/shared/SvgIcon.vue'))
const FilesModal = defineAsyncComponent(() => import('@/module/fileManager/FilesModal.vue'))
const DeleteFileModal = defineAsyncComponent(
  () => import('@/module/fileManager/DeleteFileModal.vue')
)

const fileManagerStore = useFileManager()
const { fileManagerState } = storeToRefs(fileManagerStore)
const {
  openDialog,
  handleForm,
  navigate,
  goHome,
  select,
  openFolder,
  closeModal,
  deleteModal,
  remove,
} = fileManagerStore
</script>
