<template>
  <Card :headerTitle="'Scrollable Dropdown Menu'" :border="true" :padding="false">
    <template #header5>
      <p class="mt-1 mb-0">Dataset shows in scrollable dropdown menu.</p>
    </template>
    <div id="scrollable-dropdown-menu">
      <form class="theme-form">
        <div>
          <TypeAhead
            :items="scroll"
            class="form-control typeahead form-control"
            @onInput="listFilter"
            @onBlur="listFilter"
            placeholder="Countries"
            :minInputLength="options.minInputLength"
          />
        </div>
      </form>
    </div>
  </Card>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue'
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

const scroll = ref<string[]>([
  'Andorra',
  'United Arab Emirates',
  'Afghanistan',
  'Antigua and Barbuda',
  'Anguilla',
  'Albania',
  'Armenia',
  'Angola',
  'Antarctica',
  'Argentina',
  'American Samoa',
  'Austria',
  'Australia',
  'Aruba',
  'Åland',
  'Azerbaijan',
  'Bosnia and Herzegovina',
  'Barbados',
  'United Kingdom',
  'Grenada',
  'Georgia',
  'French Guiana',
  'Guernsey',
  'Ghana',
  'Gibraltar',
  'Greenland',
  'Gambia',
  'Guinea',
  'Guadeloupe',
  'Equatorial Guinea',
  'Greece',
  'South Georgia and the South Sandwich Islands',
  'Guatemala',
  'Guam',
  'Guinea-Bissau',
  'Guyana',
  'Yemen',
  'Mayotte',
  'South Africa',
  'Zambia',
  'Zimbabwe',
])
</script>
