<template>
  <Card :headerTitle="'RTL Support'" :border="true" :padding="false">
    <template #header5>
      <p class="mt-1 mb-0">Dataset shows in Right Side</p>
    </template>
    <div id="rtl-support">
      <form class="theme-form">
        <div>
          <TypeAhead
            :items="list"
            class="form-control typeahead form-control"
            dir="rtl"
            @onInput="listFilter"
            @onBlur="listFilter"
            placeholder="Countries"
            :minInputLength="options.minInputLength"
            :hint="options.hint"
          />
        </div>
      </form>
    </div>
  </Card>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))

interface Option {
  placeholder: string
  minInputLength: number
  hint: boolean
}
const listFiltered = ref<string[]>([])
const options = ref<Option>({
  placeholder: 'States of USA',
  minInputLength: 1,
  hint: false,
})

function listFilter(event: { items: string[] }) {
  listFiltered.value = event.items
}

const list = ref<string[]>(['India', 'USA', 'Australia', 'UEA', 'China'])
</script>
