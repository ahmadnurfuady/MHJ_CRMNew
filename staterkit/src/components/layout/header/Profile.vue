<template>
  <div class="media profile-media" @click="openTab()">
    <img
      class="b-r-10"
      :src="getImages('dashboard/profile.png')"
      alt="profile"
    />
    <div class="media-body d-xxl-block d-none box-col-none">
      <div class="d-flex align-items-center gap-2">
        <span>Alex Mora </span><i class="middle fa fa-angle-down"> </i>
      </div>
      <p class="mb-0 font-roboto">Admin</p>
    </div>
  </div>
  <ul class="profile-dropdown onhover-show-div" :class="show ? 'active' : ''">
    <li>
      <a href="javascript:void(0)">
        <vue-feather type="user"></vue-feather><span>Account </span></a
      >
    </li>
    <li>
      <a href="javascript:void(0)">
        <vue-feather type="mail"></vue-feather><span>Inbox</span></a
      >
    </li>
    <li>
      <a href="javascript:void(0)">
        <vue-feather type="settings"></vue-feather>
        <span>Settings</span></a
      >
    </li>
    <li>
      <a class="btn btn-pill btn-outline-primary btn-sm" @click="logout()"
        >Log Out</a
      >
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { getImages } from "@/utils/index";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const show = ref<boolean>(false);

function logout() {
  router.replace("/auth/login");
  localStorage.clear();
}
function openTab() {
  show.value = !show.value;
}
</script>
