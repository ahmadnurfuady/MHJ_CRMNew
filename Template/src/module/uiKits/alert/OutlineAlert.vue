<template>
  <Card
    :headerTitle="'Outline Dark and Light Alerts'"
    :border="true"
    :padding="false"
    :cardBodyClass="'outline-alerts'"
  >
    <template #header5>
      <p class="f-m-light mt-1">
        Use<code> border-* </code>utility class to provide matching border and border-width within
        any alert<code> [solid/double/inset/outset]</code>.
      </p>
    </template>
    <div class="row gy-3">
      <div class="col-xl-6">
        <div class="alert txt-primary border-primary alert-dismissible fade show" role="alert">
          <vue-feather :type="'clock'" />
          <p>
            The <b class="txt-primary">"border-primary" </b>class has the ability to generate on its
            own alerts.
          </p>
          <button class="btn-close" type="button" data-bs-dismiss="alert"></button>
        </div>

        <div
          class="alert txt-success border-success outline-2x alert-dismissible fade show alert-icons"
          role="alert"
        >
          <vue-feather :type="'thumbs-up'" />
          <p>
            The <b class="txt-success">"border-success" </b>with
            <b class="txt-success">"outline-2x" </b>class has the ability to generate on its own
            alerts.
          </p>
          <button class="btn-close" type="button" data-bs-dismiss="alert"></button>
        </div>
      </div>

      <div class="col-xl-6">
        <div
          class="alert txt-warning double-border border-warning alert-dismissible fade show alert-icons"
          role="alert"
        >
          <vue-feather :type="'alert-triangle'" />
          <p>
            The <b class="txt-warning">"double-border"</b>&<b class="txt-warning"
              >"border-warning" </b
            >class has the ability to generate on its own alerts.
          </p>
          <button class="btn-close" type="button" data-bs-dismiss="alert"></button>
        </div>

        <div
          class="alert txt-danger inset-border border-danger outline-2x alert-dismissible fade show alert-icons"
          role="alert"
        >
          <vue-feather :type="'alert-octagon'" />
          <p>
            The <b class="txt-danger">"inset-border" </b>with
            <b class="txt-danger">"border-danger" </b>class has the ability to generate on its own
            alerts.
          </p>
          <button class="btn-close" type="button" data-bs-dismiss="alert"></button>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
</script>
