<template>
  <div class="container-fluid material-documents-page">
    <section class="material-documents-card">
      <header class="material-documents-card__header">
        <div>
          <span class="material-documents-card__eyebrow">MARKETING TOOLS</span>
          <h1>{{ selectedDivision ? selectedDivision.label : 'Pilih Divisi' }}</h1>
          <p>
            {{ selectedDivision
              ? 'Materi dan dokumen untuk divisi ini.'
              : 'Pilih divisi untuk melihat marketing tools yang tersedia.' }}
          </p>
        </div>
      </header>

      <div class="material-documents-toolbar">
        <button v-if="selectedDivision" type="button" class="division-back" @click="clearDivision">
          <SolarIcon name="alt-arrow-left" :size="18" aria-hidden="true" />
          Pilih divisi lain
        </button>
        <label class="document-search">
          <span class="visually-hidden">
            {{ selectedDivision ? 'Cari materi atau dokumen' : 'Cari divisi' }}
          </span>
          <SolarIcon
            name="magnifier"
            :size="19"
            color="var(--app-primary-dark, #087cae)"
            aria-hidden="true"
          />
          <input
            v-model="searchQuery"
            type="search"
            :placeholder="selectedDivision ? 'Cari materi atau dokumen' : 'Cari divisi'"
          />
        </label>
      </div>

      <div
        v-if="!selectedDivision && filteredDivisions.length"
        class="document-list"
        aria-label="Daftar divisi"
      >
        <button
          v-for="division in pagedDivisions"
          :key="division.value"
          type="button"
          class="document-row"
          @click="selectDivision(division)"
        >
          <span class="document-row__icon" aria-hidden="true">
            <SolarIcon name="folder-duotone" :size="25" color="var(--app-primary, #18a6e4)" />
          </span>
          <span class="document-row__content">
            <strong>{{ division.label }}</strong>
            <small>Kode divisi: {{ division.value }}</small>
          </span>
        </button>
      </div>

      <div
        v-else-if="selectedDivision && filteredDocuments.length"
        class="document-list"
        aria-label="Daftar dokumen"
      >
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

          <span class="confidential-badge">{{ document.status }}</span>
        </button>
      </div>

      <div v-else class="document-empty">
        <span class="document-empty__icon" aria-hidden="true">
          <SolarIcon name="document-text" :size="29" color="currentColor" />
        </span>
        <strong>{{ divisionError || (divisionLoading ? 'Memuat divisi...' : selectedDivision ? 'Dokumen tidak ditemukan' : 'Divisi tidak ditemukan') }}</strong>
        <p v-if="!divisionError && !divisionLoading">
          {{ selectedDivision
            ? 'Belum ada dokumen untuk divisi ini atau kata kunci yang dicari.'
            : 'Coba gunakan kata kunci divisi yang berbeda.' }}
        </p>
      </div>

      <ListPagination
        v-if="selectedDivision ? filteredDocuments.length : filteredDivisions.length"
        v-model="currentPage"
        class="material-documents-pagination"
        :total-pages="totalPages"
        :aria-label="selectedDivision ? 'Pagination dokumen' : 'Pagination divisi'"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

import ListPagination from '@/components/shared/ListPagination.vue'
import { usePageBackRoute } from '@/composable/usePageHeader'
import { routes } from '@/router/routes'
import { masterDataService } from '@/services/masterDataService'

type Division = { value: string; label: string }

const router = useRouter()
usePageBackRoute(routes.Dashboards.Default)
const searchQuery = ref('')
const selectedDivision = ref<Division | null>(null)
const divisions = ref<Division[]>([])
const divisionLoading = ref(true)
const divisionError = ref('')
const currentPage = ref(1)
const PAGE_SIZE = 10

const documents = [
  {
    id: 'pricelist-alkes-q2-2026',
    title: 'Pricelist Alkes Q2 2026',
    date: '12 Mei 2026',
    division: 'alkes',
    status: 'Rahasia',
  },
]

const filteredDivisions = computed(() => {
  const keyword = searchQuery.value.trim().toLocaleLowerCase('id-ID')
  return divisions.value.filter((division) =>
    division.label.toLocaleLowerCase('id-ID').includes(keyword),
  )
})

const filteredDocuments = computed(() => {
  const keyword = searchQuery.value.trim().toLocaleLowerCase('id-ID')

  return documents.filter((document) => {
    const matchesDivision = selectedDivision.value?.label
      .toLocaleLowerCase('id-ID')
      .includes(document.division)
    const matchesSearch = `${document.title} ${document.date}`
      .toLocaleLowerCase('id-ID')
      .includes(keyword)

    return matchesDivision && matchesSearch
  })
})

const totalPages = computed(() =>
  Math.max(1, Math.ceil((selectedDivision.value ? filteredDocuments.value : filteredDivisions.value).length / PAGE_SIZE)),
)
const pagedDivisions = computed(() => {
  const start = (currentPage.value - 1) * PAGE_SIZE
  return filteredDivisions.value.slice(start, start + PAGE_SIZE)
})
const pagedDocuments = computed(() => {
  const start = (currentPage.value - 1) * PAGE_SIZE
  return filteredDocuments.value.slice(start, start + PAGE_SIZE)
})

watch(searchQuery, () => {
  currentPage.value = 1
})

onMounted(async () => {
  try {
    divisions.value = (await masterDataService.getDevisi())
      .map((division) => ({
        value: String(division.KodeDevisi ?? '').trim(),
        label: String(division.NamaDevisi ?? '').trim() || String(division.KodeDevisi ?? '').trim(),
      }))
      .filter((division) => division.value !== '')
  } catch (error) {
    console.error('Gagal memuat daftar divisi:', error)
    divisionError.value = 'Daftar divisi gagal dimuat.'
  } finally {
    divisionLoading.value = false
  }
})

function selectDivision(division: Division) {
  selectedDivision.value = division
  searchQuery.value = ''
  currentPage.value = 1
}

function clearDivision() {
  selectedDivision.value = null
  searchQuery.value = ''
  currentPage.value = 1
}

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
  right: 24px;
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

.division-back {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  border: 0;
  padding: 8px 0;
  color: var(--app-primary-dark, #087cae);
  background: transparent;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
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

  .confidential-badge {
    padding: 6px 8px;
  }
}
</style>
