<template>
  <div class="card hovercard text-center">
    <div class="cardheader"></div>
    <div class="user-image">
      <div class="avatar">
        <div class="common-align">
          <div>
            <img
              :src="profileImage"
              alt="Profile Image"
              id="output"
              v-if="appState.userProfile.profile"
            />
            <input
              type="file"
              accept="image/*"
              ref="fileInput"
              @change="onFileSelected($event)"
              id="fileInput"
              hidden
            />
            <div
              class="icon-wrapper"
              id="cancelButton"
              @click="removeProfile()"
              v-if="appState.userProfile.profile"
            >
              <i class="icofont icofont-error"></i>
            </div>
            <div
              class="icon-wrapper"
              @click="fileInput.click()"
              v-if="appState.userProfile.profile && fileInput"
            >
              <i class="icofont icofont-pencil-alt-5"></i>
            </div>
          </div>
        </div>
        <ul class="share-icons">
          <li>
            <a class="social-icon bg-primary" href="#"
              ><i class="fa-regular fa-face-smile fa-flip"></i
            ></a>
          </li>
          <li>
            <a class="social-icon bg-secondary" href="#"
              ><i class="fa-brands fa-weixin fa-flip"></i
            ></a>
          </li>
          <li>
            <a class="social-icon bg-warning" href="#"
              ><i class="fa-solid fa-share-nodes fa-flip"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="info market-tabs p-0">
      <ul class="nav nav-tabs border-tab tabs-scoial">
        <template v-for="(tab, index) in appState.tabs" :key="index">
          <template v-if="index == 2">
            <li class="nav-item">
              <div class="user-designation"></div>
              <div class="title">
                <a target="_blank" href="">{{ appState.profile.name }}</a>
              </div>
              <div class="desc mt-2">{{ appState.profile.designation }}</div>
            </li>
          </template>
          <li class="nav-item" @click="handleActiveTab(tab.value)">
            <a
              class="nav-link"
              href="#"
              :class="{ active: tab.value == appState.activeTab }"
              >{{ tab.title }}</a
            >
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, computed } from 'vue'

import { myProfile, socialAppTab } from '@/core/data/socialApp'
import type { AppState } from '@/types/socialApp'
import { getImages } from '@/utils/index'

const appState = reactive<AppState>({
  tabs: socialAppTab,
  profile: myProfile,
  userProfile: { ...myProfile },
  activeTab: 'timeline',
})

const emits = defineEmits(['currentTab'])

const fileInput = ref<HTMLInputElement | null>(null)

onMounted(() => {
  emits('currentTab', appState.activeTab)
})

const profileImage = computed(() => {
  const img = appState.userProfile.profile

  if (!img) return ''

  if (img.startsWith('data:') || img.startsWith('blob:')) {
    return img
  }
  return getImages(img)
})

function onFileSelected(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input?.files?.[0]

  if (file) {
    const reader = new FileReader()
    reader.onload = () => {
      if (appState.userProfile) appState.userProfile.profile = reader.result as string
    }
    reader.readAsDataURL(file)
  }
}

function removeProfile() {
  if (appState.userProfile) appState.userProfile.profile = `${getImages('forms/user2.png')}`
}

function handleActiveTab(value: string) {
  appState.activeTab = value
  emits('currentTab', appState.activeTab)
}
</script>
