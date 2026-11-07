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
import { computed, defineAsyncComponent, watch } from "vue";
import { useRoute } from "vue-router";
import { useContact } from "@/store/contact";
import { useHospitalPermissions } from "@/module/rumahSakit/hospitalPermission";

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

const contactStore = useContact();
const { canAddHospital } = useHospitalPermissions();
contactStore.setScope("hospital");
watch(canAddHospital, (allowed) => {
  if (!allowed && contactStore.contactState.hospitalEditId === null) {
    contactStore.contactState.openAddContactModal = false;
  }
});
</script>
