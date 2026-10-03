<template>
  <div class="container-fluid main-scrollspy">
    <div class="row">
      <div class="col-12">
        <NavbarScrollspy />
      </div>
      <div class="col-12">
        <NestedScrollspy />
      </div>
      <div class="col-12">
        <ListGroupScrollspy />
      </div>
      <div class="col-12">
        <CustomScrollspy />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const NavbarScrollspy = defineAsyncComponent(
  () => import('@/module/bonusUi/scrollspy/NavbarScrollspy.vue')
)
const NestedScrollspy = defineAsyncComponent(
  () => import('@/module/bonusUi/scrollspy/NestedScrollspy.vue')
)
const ListGroupScrollspy = defineAsyncComponent(
  () => import('@/module/bonusUi/scrollspy/ListGroupScrollspy.vue')
)
const CustomScrollspy = defineAsyncComponent(
  () => import('@/module/bonusUi/scrollspy/CustomScrollspy.vue')
)
</script>
