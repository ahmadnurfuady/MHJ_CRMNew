<template>
  <div class="logo-wrapper">
    <a href="javascript:void(0)">
      <img class="img-fluid" :src="getImages('logo/logo.png')" alt=""
    /></a>
    <div class="back-btn" @click="toggleSidebar()">
      <i class="fa fa-angle-left"> </i>
    </div>
    <div class="toggle-sidebar" @click="toggleSidebar()">
      <vue-feather
        :type="'grid'"
        class="status_toggle middle sidebar-toggle"
      ></vue-feather>
    </div>
  </div>
  <div class="logo-icon-wrapper">
    <a href="javascript:void(0)">
      <img class="img-fluid" :src="getImages('logo/logo-icon.png')" alt="img"
    /></a>
  </div>
</template>
<script lang="ts" setup>
import { getImages } from "@/utils/index";
import { useMenu } from "@/store/menu";

const store = useMenu();
const { toggleSidebar } = store;
</script>
