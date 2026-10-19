<template>
  <div class="modal-header p-20">
    <h6 class="modal-title w-100 common-space">
      Riwayat Rumah Sakit
      <span class="pull-right">
        <a class="close-history" href="#" @click.prevent="closeHistory()">
          <SolarIcon name="icofont-close" class="icofont" />
        </a>
      </span>
    </h6>
  </div>
  <div class="history-details">
    <ActivityTimeline
      entity="companies"
      :entity-id="entityId"
      :title="`Aktivitas ${hospitalName}`"
      heading="Riwayat Rumah Sakit"
      :created-description="`Data rumah sakit ${hospitalName} dibuat.`"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

import ActivityTimeline from '@/components/shared/ActivityTimeline.vue'
import SolarIcon from '@/components/shared/SolarIcon.vue'
import { useContact } from '@/store/contact'

const contactStore = useContact()
const { contactState } = storeToRefs(contactStore)

const activeContact = computed(() => contactState.value.activeContact)
// Kontak di modul Rumah Sakit sebenarnya adalah company; remoteId dipakai
// sebagai entity_id di tabel companies.
const entityId = computed(() => activeContact.value?.remoteId ?? null)
const hospitalName = computed(() => activeContact.value?.company || 'Rumah Sakit')

function closeHistory() {
  contactState.value.historyVisible = false
}
</script>
