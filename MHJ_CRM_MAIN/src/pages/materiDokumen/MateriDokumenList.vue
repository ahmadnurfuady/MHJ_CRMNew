<template>
  <div class="container-fluid material-documents-page">
    <section class="material-documents-card">
      <header class="material-documents-card__header">
        <div>
          <span class="material-documents-card__eyebrow">PUSAT INFORMASI</span>
          <h1>Materi &amp; Dokumen</h1>
          <p>Akses materi pendukung dan dokumen internal untuk kebutuhan penawaran.</p>
        </div>
        <div class="material-documents-card__icon" aria-hidden="true">
          <SolarIcon name="documents" :size="30" color="currentColor" />
        </div>
      </header>

      <div class="material-documents-toolbar">
        <label class="document-search">
          <span class="visually-hidden">Cari materi atau dokumen</span>
          <SolarIcon
            name="magnifier"
            :size="19"
            color="var(--app-primary-dark, #087cae)"
            aria-hidden="true"
          />
          <input
            v-model="searchQuery"
            type="search"
            placeholder="Cari materi atau dokumen"
          />
        </label>

        <div class="category-filter" role="group" aria-label="Filter kategori dokumen">
          <button
            v-for="category in categories"
            :key="category"
            type="button"
            :class="{ active: selectedCategory === category }"
            :aria-pressed="selectedCategory === category"
            @click="selectedCategory = category"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <div v-if="filteredDocuments.length" class="document-list" aria-label="Daftar dokumen">
        <button
          v-for="document in pagedDocuments"
          :key="document.id"
          type="button"
          class="document-row"
          @click="openDocument"
        >
          <span class="document-row__icon" aria-hidden="true">
            <SolarIcon
              name="document-text"
              :size="25"
              color="var(--app-primary, #18a6e4)"
              secondary-color="var(--app-primary, #18a6e4)"
              :secondary-opacity="0.25"
            />
          </span>

          <span class="document-row__content">
            <strong>{{ document.title }}</strong>
            <small>{{ document.date }}</small>
          </span>

          <span class="document-row__meta">
            <span class="confidential-badge">{{ document.status }}</span>
            <SolarIcon
              name="alt-arrow-right"
              :size="20"
              color="#8a98a5"
              aria-hidden="true"
            />
          </span>
        </button>
      </div>

      <div v-else class="document-empty">
        <span class="document-empty__icon" aria-hidden="true">
          <SolarIcon name="document-text" :size="29" color="currentColor" />
        </span>
        <strong>Dokumen tidak ditemukan</strong>
        <p>Coba gunakan kata kunci atau kategori yang berbeda.</p>
      </div>

      <ListPagination
        v-if="filteredDocuments.length"
        v-model="currentPage"
        class="material-documents-pagination"
        :total-pages="totalPages"
        aria-label="Pagination Materi dan Dokumen"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

import ListPagination from '@/components/shared/ListPagination.vue'
import { routes } from '@/router/routes'

type DocumentCategory = 'Semua' | 'Harga' | 'Brosur' | 'Presentasi'

const router = useRouter()
const searchQuery = ref('')
const selectedCategory = ref<DocumentCategory>('Semua')
const currentPage = ref(1)
const PAGE_SIZE = 10
const categories: DocumentCategory[] = ['Semua', 'Harga', 'Brosur', 'Presentasi']

const documents = [
  {
    id: 'pricelist-alkes-q2-2026',
    title: 'Pricelist Alkes Q2 2026',
    date: '12 Mei 2026',
    category: 'Harga' as const,
    status: 'Rahasia',
  },
]

const filteredDocuments = computed(() => {
  const keyword = searchQuery.value.trim().toLocaleLowerCase('id-ID')

  return documents.filter((document) => {
    const matchesCategory =
      selectedCategory.value === 'Semua' || document.category === selectedCategory.value
    const matchesSearch = `${document.title} ${document.date} ${document.category}`
      .toLocaleLowerCase('id-ID')
      .includes(keyword)

    return matchesCategory && matchesSearch
  })
})

const totalPages = computed(() => Math.max(1, Math.ceil(filteredDocuments.value.length / PAGE_SIZE)))
const pagedDocuments = computed(() => {
  const start = (currentPage.value - 1) * PAGE_SIZE
  return filteredDocuments.value.slice(start, start + PAGE_SIZE)
})

watch([searchQuery, selectedCategory], () => {
  currentPage.value = 1
})

function openDocument() {
  void router.push(routes.MateriDokumen.Preview)
}
</script>

<style scoped>
.material-documents-page {
  --document-ink: #243240;
  padding-bottom: 34px;
}

.material-documents-card {
  overflow: hidden;
  border: 1px solid #e2e8ed;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 7px 24px rgba(30, 75, 105, 0.07);
}

.material-documents-card__header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  overflow: hidden;
  border-bottom: 1px solid #e5edf2;
  padding: 24px;
  background: linear-gradient(120deg, #fff 20%, var(--app-primary-wash, #f1faff) 100%);
}

.material-documents-card__header::after {
  position: absolute;
  top: -76px;
  right: 100px;
  width: 170px;
  height: 170px;
  border: 30px solid rgba(var(--app-primary-rgb, 24, 166, 228), 0.055);
  border-radius: 50%;
  content: '';
}

.material-documents-card__eyebrow {
  display: block;
  margin-bottom: 4px;
  color: var(--app-primary-dark, #087cae);
  font-size: 9.5px;
  font-weight: 800;
  letter-spacing: 0.11em;
}

.material-documents-card__header h1 {
  margin: 0;
  color: var(--document-ink);
  font-size: 22px;
  font-weight: 750;
}

.material-documents-card__header p {
  margin: 6px 0 0;
  color: #748391;
  font-size: 12px;
}

.material-documents-card__icon {
  position: relative;
  z-index: 1;
  display: grid;
  width: 58px;
  height: 58px;
  flex: 0 0 58px;
  place-items: center;
  border-radius: 17px;
  color: var(--app-primary, #18a6e4);
  background: var(--app-primary-soft, #dff4fc);
}

.material-documents-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 20px 22px;
}

.document-search {
  display: flex;
  width: min(420px, 100%);
  min-height: 46px;
  align-items: center;
  gap: 10px;
  border: 1px solid #dfe7ec;
  border-radius: 16px;
  padding: 0 15px;
  background: #fff;
  box-shadow: 0 3px 12px rgba(31, 41, 55, 0.04);
  transition: border-color 0.18s ease, box-shadow 0.18s ease;
}

.document-search:focus-within {
  border-color: var(--app-primary-border, #66c4eb);
  box-shadow: 0 0 0 3px rgba(var(--app-primary-rgb, 24, 166, 228), 0.1);
}

.document-search input {
  width: 100%;
  min-width: 0;
  border: 0;
  outline: 0;
  color: var(--document-ink);
  background: transparent;
  font-size: 12px;
}

.document-search input::placeholder {
  color: #98a5af;
}

.category-filter {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
}

.category-filter button {
  min-height: 36px;
  border: 0;
  border-radius: 999px;
  padding: 7px 15px;
  color: #526170;
  background: #f1f5f9;
  font-size: 11px;
  font-weight: 700;
  transition: color 0.18s ease, background 0.18s ease, box-shadow 0.18s ease;
}

.category-filter button:hover {
  color: var(--app-primary-dark, #087cae);
  background: #e7f5fb;
}

.category-filter button.active {
  color: var(--app-primary-dark, #087cae);
  background: #e0f2fe;
  box-shadow: inset 0 0 0 1px rgba(var(--app-primary-rgb, 24, 166, 228), 0.12);
}

.document-list {
  border-top: 1px solid #edf1f4;
  padding: 0 22px 22px;
}

.material-documents-pagination {
  margin: 0 22px 22px;
}

.document-row {
  display: grid;
  width: 100%;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 15px;
  margin-top: 16px;
  border: 1px solid #e2e8ed;
  border-radius: 16px;
  padding: 16px 18px;
  color: inherit;
  background: #fff;
  box-shadow: 0 4px 16px rgba(31, 55, 75, 0.045);
  text-align: left;
  cursor: pointer;
  transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
}

.document-row:hover,
.document-row:focus-visible {
  border-color: var(--app-primary-border, #b9dfef);
  outline: 0;
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(31, 75, 105, 0.1);
}

.document-row__icon {
  display: grid;
  width: 48px;
  height: 48px;
  place-items: center;
  border-radius: 14px;
  background: #f0f9ff;
}

.document-row__content {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 4px;
}

.document-row__content strong {
  overflow: hidden;
  color: var(--document-ink);
  font-size: 13px;
  font-weight: 750;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.document-row__content small {
  color: #8996a1;
  font-size: 10.5px;
  font-weight: 550;
}

.document-row__meta {
  display: flex;
  align-items: center;
  gap: 14px;
}

.confidential-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 7px 11px;
  color: #e11d48;
  background: #fff1f2;
  font-size: 9.5px;
  font-weight: 750;
}

.document-empty {
  display: flex;
  min-height: 240px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #edf1f4;
  padding: 30px;
  text-align: center;
}

.document-empty__icon {
  display: grid;
  width: 56px;
  height: 56px;
  margin-bottom: 12px;
  place-items: center;
  border-radius: 16px;
  color: var(--app-primary, #18a6e4);
  background: var(--app-primary-wash, #eaf7fc);
}

.document-empty strong {
  color: var(--document-ink);
  font-size: 14px;
}

.document-empty p {
  margin: 6px 0 0;
  color: #82909b;
  font-size: 11px;
}

@media (max-width: 850px) {
  .material-documents-toolbar {
    align-items: stretch;
    flex-direction: column;
  }

  .category-filter {
    justify-content: flex-start;
  }
}

@media (max-width: 575px) {
  .material-documents-card,
  .material-documents-card__header {
    border-radius: 16px;
  }

  .material-documents-card__header,
  .material-documents-toolbar {
    padding: 18px;
  }

  .material-documents-card__icon {
    display: none;
  }

  .category-filter {
    flex-wrap: nowrap;
    justify-content: flex-start;
    overflow-x: auto;
    padding-bottom: 3px;
  }

  .category-filter button {
    flex: 0 0 auto;
  }

  .document-list {
    padding: 0 14px 16px;
  }

  .document-row {
    gap: 11px;
    padding: 14px;
  }

  .document-row__icon {
    width: 43px;
    height: 43px;
  }

  .document-row__meta {
    gap: 7px;
  }

  .confidential-badge {
    padding: 6px 8px;
  }
}
</style>
