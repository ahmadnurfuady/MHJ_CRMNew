<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <ContactDetails />
      </div>
    </div>
  </div>

  <PrintContactModal />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { useContact } from "@/store/contact";

const ContactDetails = defineAsyncComponent(
  () => import("@/module/rumahSakit/ContactDetails.vue"),
);
const PrintContactModal = defineAsyncComponent(
  () => import("@/module/rumahSakit/PrintContactModal.vue"),
);

useContact().setScope("hospital");
</script>
