<template>
  <div class="d-flex page-notification">
    <img
      class="img-50 img-fluid m-r-20 rounded-circle"
      :src="getImages(profile.profile)"
      :alt="profile.name"
    />
    <div class="flex-grow-1">
      <h6 class="font-primary pb-1">My Page</h6>
      <span class="d-block">
        <span>
          <i class="fa-regular fa-comments"> </i>
          <span class="px-2">
            Messages
            <span class="badge rounded-pill badge-light ms-2"> {{ profile.message }}</span>
          </span>
        </span>
      </span>
      <span class="d-block">
        <span>
          <i class="fa-regular fa-bell"> </i>
          <span class="px-2">
            Notification
            <span class="badge rounded-pill badge-light ms-2">{{ profile.notification }}</span>
          </span>
        </span>
      </span>
    </div>
  </div>
  <div class="social-btngroup d-flex">
    <button class="btn btn-primary text-center" type="button">Likes</button>
    <button class="btn btn-light text-center ms-2" type="button">View</button>
  </div>
  <div class="likes-profile text-center">
    <h5>
      <span class="counter">
        <i class="fa-solid fa-heart font-danger"></i>
        {{ profile.totalLikes }}</span
      >
    </h5>
  </div>
  <div class="text-center">{{ profile.thisWeekLikes }} New Likes This Week</div>
  <div class="customers text-center social-group">
    <GroupItem :items="profile.likedBy" :imgClass="'img-40'" :showItems="profile.likedBy.length" />
  </div>
  <img class="img-fluid mt-xl-5 mt-4 w-100" :src="getImages(profile.postImage)" />
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import { getImages } from '@/utils/index'
import { myProfile } from '@/core/data/socialApp'
import type { MyProfile } from '@/types/socialApp'

const GroupItem = defineAsyncComponent(() => import('@/components/shared/GroupItem.vue'))

const profile = ref<MyProfile>(myProfile)
</script>
