<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <Card>
          <MdEditor
            v-model="text"
            :preview="false"
            language="en-US"
            :htmlPreview="false"
          />
        </Card>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from "vue";
const Card = defineAsyncComponent(() => import("@/components/shared/card/Card.vue"));
import { MdEditor } from "md-editor-v3";

const text = ref("");
</script>
