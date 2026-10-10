<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <RumahSakitDetail v-if="detailId" :hospital-id="detailId" />
        <ContactDetails v-else />
      </div>
    </div>
  </div>

  <PrintContactModal v-if="!detailId" />
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";
import { useContact } from "@/store/contact";

const ContactDetails = defineAsyncComponent(
  () => import("@/module/rumahSakit/ContactDetails.vue"),
);
const PrintContactModal = defineAsyncComponent(
  () => import("@/module/rumahSakit/PrintContactModal.vue"),
);
const RumahSakitDetail = defineAsyncComponent(
  () => import("@/pages/rumahSakit/RumahSakitDetail.vue"),
);

const route = useRoute();
const detailId = computed(() => {
  const id = Number(route.query.detail);
  return Number.isFinite(id) && id > 0 ? id : 0;
});

useContact().setScope("hospital");
</script>
