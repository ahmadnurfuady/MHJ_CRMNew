<template>
  <TapTop />
  <div
    class="page-wrapper"
    id="pageWrapper"
    :class="display ? 'compact-wrapper ' : layout"
  >
    <div class="page-header" :class="{ close_icon: !uiState.show }">
      <Header />
    </div>
    <div class="page-body-wrapper">
      <div
        class="sidebar-wrapper"
        :data-layout="
          layoutState.svgIcon == 'stroke-svg' ? 'stroke-svg' : 'fill-svg'
        "
        :class="[{ close_icon: !uiState.show }]"
      >
        <Sidebar />
      </div>
      <div class="page-body">
        <BreadCrumbs />
        <router-view></router-view>
      </div>
      <Footer />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useLayout } from "@/store/layout";
import { useMenu } from "@/store/menu";
import { storeToRefs } from "pinia";
import { defineAsyncComponent, onMounted, onUnmounted, ref, watch } from "vue";
const Header = defineAsyncComponent(
  () => import("@/components/layout/header/Header.vue"),
);
const Sidebar = defineAsyncComponent(
  () => import("@/components/layout/sidebar/Sidebar.vue"),
);
const BreadCrumbs = defineAsyncComponent(
  () => import("@/components/layout/breadCrumb/BreadCrumbs.vue"),
);
const TapTop = defineAsyncComponent(
  () => import("@/components/layout/tapToTop/TapTop.vue"),
);
const Footer = defineAsyncComponent(
  () => import("@/components/layout/footer/Footer.vue"),
);

const display = ref(false);
const layout = ref({});
const storeLayout = useLayout();
const { layoutState } = storeToRefs(storeLayout);
const store = useMenu();
const { uiState } = storeToRefs(store);

watch(
  () => layoutState.value.layouts,
  () => {
    layout.value = layoutState.value.layouts.settings.sidebarSetting;
  },
  { deep: true },
);
watch(
  () => "router",
  () => {
    if (
      window.innerWidth < 991 &&
      layoutState.value.layouts.settings.layout === "Horizontal"
    ) {
    }
  },
);

function handleScroll() {
  if (window.innerWidth <= 1199) {
    display.value = true;
    uiState.value.show = false;
  } else {
    uiState.value.show = true;
    display.value = false;
  }
}

onMounted(() => {
  const savedLayout = localStorage.getItem("layout");

  if (savedLayout) {
    layoutState.value.layouts.settings.layout = savedLayout;
  }

  layout.value = layoutState.value.layouts.settings.sidebarSetting;
  handleScroll();
  window.addEventListener("resize", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleScroll);
});
</script>
