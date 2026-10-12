<template>
  <div class="contact-history-panel">
    <header class="history-header">
      <div class="history-heading">
        <span class="history-heading__icon" aria-hidden="true">
          <vue-feather type="clock" size="19" />
        </span>
        <div>
          <p>Riwayat Kontak</p>
          <h5>Aktivitas {{ contactName }}</h5>
        </div>
      </div>
    </header>

    <div class="history-content">
      <div class="history-section-heading">
        <div>
          <h6>Timeline Aktivitas</h6>
          <p>Catatan perubahan dan aktivitas kontak.</p>
        </div>
        <span class="history-count">1 aktivitas</span>
      </div>

      <div class="history-timeline">
        <article class="history-entry">
          <div class="history-entry__marker" aria-hidden="true">
            <vue-feather type="user-plus" size="17" />
          </div>
          <div class="history-entry__content">
            <div class="history-entry__top">
              <h6>Kontak dibuat</h6>
              <span class="history-badge">Dibuat</span>
            </div>
            <p>{{ createdDescription }}</p>
            <time :datetime="createdAt || undefined">
              <vue-feather type="calendar" size="14" />
              {{ formattedCreatedAt }}
            </time>
          </div>
        </article>

        <div class="history-empty-state">
          <span aria-hidden="true"><vue-feather type="edit-3" size="20" /></span>
          <div>
            <strong>Belum ada perubahan data</strong>
            <p>Perubahan berikutnya pada kontak ini akan tampil di timeline.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs } from "pinia";

import { useContact } from "@/store/contact";

const contactStore = useContact();
const { contactState } = storeToRefs(contactStore);

const activeContact = computed(() => contactState.value.activeContact);
const contactName = computed(() => {
  const contact = activeContact.value;
  const name = `${contact?.firstName || ""} ${contact?.lastName || ""}`.trim();
  return name || "Kontak";
});
const createdAt = computed(() => activeContact.value?.createdAt || "");
const createdDescription = computed(() => {
  const source = activeContact.value?.source;
  return `${contactName.value} ditambahkan${source ? ` melalui sumber ${source}` : ""}.`;
});
const formattedCreatedAt = computed(() => {
  if (!createdAt.value) return "Tanggal pembuatan belum tersedia";
  const date = new Date(createdAt.value);
  if (Number.isNaN(date.getTime())) return createdAt.value;
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
});

</script>

<style scoped>
.contact-history-panel {
  overflow: hidden;
  border: 1px solid #e4eaf0;
  border-radius: 14px;
  background: #ffffff;
}

.history-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  border-bottom: 1px solid #e7edf2;
  padding: 18px 20px;
}

.history-heading {
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 12px;
}

.history-heading__icon {
  display: inline-flex;
  width: 42px;
  height: 42px;
  flex: 0 0 42px;
  align-items: center;
  justify-content: center;
  border-radius: 11px;
  color: var(--theme-default, #18a6e4);
  background: rgba(24, 166, 228, 0.1);
}

.history-heading p,
.history-section-heading p,
.history-entry__content p,
.history-empty-state p {
  margin: 0;
}

.history-heading p {
  margin-bottom: 2px;
  color: var(--theme-default, #18a6e4);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.history-heading h5,
.history-section-heading h6,
.history-entry__top h6 {
  margin: 0;
  color: #17212b;
}

.history-heading h5 {
  overflow: hidden;
  font-size: 17px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.history-content {
  padding: 20px;
}

.history-section-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;
}

.history-section-heading h6 {
  margin-bottom: 3px;
  font-size: 14px;
}

.history-section-heading p,
.history-empty-state p {
  color: #7a8792;
  font-size: 12px;
}

.history-count,
.history-badge {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  white-space: nowrap;
}

.history-count {
  padding: 5px 10px;
  color: #52606d;
  background: #f1f5f8;
  font-size: 11px;
  font-weight: 600;
}

.history-timeline {
  position: relative;
  display: grid;
  gap: 14px;
  padding-left: 3px;
}

.history-entry {
  position: relative;
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  gap: 12px;
}

.history-entry__marker {
  position: relative;
  z-index: 1;
  display: inline-flex;
  width: 42px;
  height: 42px;
  align-items: center;
  justify-content: center;
  border: 4px solid #ffffff;
  border-radius: 50%;
  color: #ffffff;
  background: var(--theme-default, #18a6e4);
  box-shadow: 0 0 0 1px rgba(24, 166, 228, 0.18);
}

.history-entry__content {
  min-width: 0;
  border: 1px solid #e6ecf1;
  border-radius: 11px;
  padding: 14px 15px;
  background: #fbfcfd;
}

.history-entry__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 5px;
}

.history-entry__top h6 {
  font-size: 14px;
}

.history-badge {
  padding: 4px 9px;
  color: #087cae;
  background: rgba(24, 166, 228, 0.1);
  font-size: 10px;
  font-weight: 700;
}

.history-entry__content p {
  margin-bottom: 8px;
  color: #52606d;
  font-size: 12px;
}

.history-entry__content time {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #82909c;
  font-size: 11px;
}

.history-empty-state {
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px dashed #dce4ea;
  border-radius: 11px;
  margin-left: 54px;
  padding: 14px 15px;
  background: #ffffff;
}

.history-empty-state > span {
  display: inline-flex;
  width: 36px;
  height: 36px;
  flex: 0 0 36px;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  color: #7b8794;
  background: #f1f4f7;
}

.history-empty-state strong {
  display: block;
  margin-bottom: 2px;
  color: #35424e;
  font-size: 12px;
}

@media (max-width: 575.98px) {
  .history-header,
  .history-section-heading {
    align-items: flex-start;
  }

  .history-header {
    padding: 15px;
  }

  .history-content {
    padding: 16px;
  }

  .history-section-heading {
    flex-direction: column;
    gap: 8px;
  }

  .history-empty-state {
    margin-left: 0;
  }
}
</style>
