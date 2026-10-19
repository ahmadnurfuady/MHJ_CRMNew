<template>
  <ActivityTimeline
    entity="contacts"
    :entity-id="entityId"
    :title="`Aktivitas ${contactName}`"
    heading="Riwayat Kontak"
    :created-description="`Kontak ${contactName} ditambahkan.`"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import ActivityTimeline from '@/components/shared/ActivityTimeline.vue'
import { useContact } from '@/store/contact'

const contactStore = useContact()
const { contactState } = storeToRefs(contactStore)

const activeContact = computed(() => contactState.value.activeContact)
const entityId = computed(() => activeContact.value?.remoteId ?? null)
const contactName = computed(() => {
  const contact = activeContact.value
  const name = `${contact?.firstName || ''} ${contact?.lastName || ''}`.trim()
  return name || 'Kontak'
})
</script>
