<template>
  <div v-if="!route.meta.hideBreadcrumb" class="container-fluid">
    <div class="page-title">
      <div class="row">
        <div class="col-6">
          <h4>{{ pageTitle }}</h4>
        </div>
        <div class="col-6 p-0">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link :to="routes.Pages.SamplePages1">
                <SvgIcon icon="home" svgClass="stroke-icon" type="stroke" />
              </router-link>
            </li>
            <template v-for="(crumb, index) in breadcrumbs" :key="index">
              <li class="breadcrumb-item">{{ crumb.text }}</li>
              <li class="breadcrumb-item active">{{ crumb.subText }}</li>
            </template>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";
import { routes } from "@/router/routes";

interface Breadcrumb {
  text: string;
  subText: string;
}

const SvgIcon = defineAsyncComponent(
  () => import("@/components/shared/SvgIcon.vue"),
);

const route = useRoute();
const breadcrumbs = computed(
  () => (route.meta.breadcrumb as Breadcrumb[]) || [],
);
const pageTitle = computed(() => (route.meta.mainTitle as string) || "");
</script>
