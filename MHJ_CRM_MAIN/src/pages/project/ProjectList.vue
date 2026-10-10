<template>
  <div class="container-fluid">
    <div class="row project-cards">
      <div class="col-md-12 project-list">
        <Card
          :headerTitle="'Proyek Overview'"
          :headerClass="'m-0'"
          :border="true"
          :padding="false"
        >
          <div class="row g-3">
            <div class="col-xxl-3 col-sm-6 box-col-6">
              <ProjectCostPerformance />
            </div>
            <div class="col-xxl-3 col-sm-6 box-col-6">
              <ProjectRating />
            </div>
            <div class="col-xxl-3 col-sm-6 box-col-6">
              <ProjectProfessionalTeam />
            </div>
            <div class="col-xxl-3 col-sm-6 box-col-6">
              <TotalProjects />
            </div>
          </div>
        </Card>
      </div>
      <div class="col-12">
        <ProjectStatusTab :projects="projectList" @activeTabValue="handleActiveTab($event)" />
      </div>
      <div class="col-sm-12">
        <Card :cardBodyClass="'projects-wrapper'">
          <div class="project-list-toolbar">
            <div class="project-search" role="search">
              <label class="visually-hidden" for="project-search-input">Cari proyek</label>
              <vue-feather type="search" size="17" />
              <input
                id="project-search-input"
                v-model="searchQuery"
                type="search"
                placeholder="Cari nama proyek..."
                autocomplete="off"
              />
              <span
                v-if="projectLoading"
                class="spinner-border spinner-border-sm project-search__loading"
                aria-hidden="true"
              ></span>
              <button
                v-else-if="searchQuery"
                class="project-search__clear"
                type="button"
                aria-label="Hapus pencarian"
                @click="searchQuery = ''"
              >
                <vue-feather type="x" size="15" />
              </button>
            </div>
            <span class="project-result-count">
              {{ formatTotal(projectPagination.total || filteredProjects.length) }} proyek
            </span>
          </div>
          <div class="tab-content" id="top-tabContent">
            <div class="tab-pane fade show active">
              <div class="row g-4">
                <div
                  v-for="project in filteredProjects"
                  :key="project.id"
                  class="col-xxl-3 col-md-6 col-ed-4 box-col-6"
                >
                  <ProjectDetails :project="project" />
                </div>
                <div
                  v-if="!projectLoading && !filteredProjects.length"
                  class="col-12 project-empty-state"
                >
                  <vue-feather type="folder" size="24" />
                  <strong>Proyek tidak ditemukan</strong>
                  <span>Coba gunakan nama proyek atau stage yang berbeda.</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div
        v-if="projectList.length || projectPagination.page > 1"
        class="col-sm-12"
      >
        <div class="card project-pagination-card mb-0">
          <div class="card-body project-pagination-card__body">
            <span class="project-page-summary">
              Halaman {{ projectPagination.page }} dari {{ projectPagination.lastPage }}
            </span>
            <div class="pagination-actions" role="group" aria-label="Pagination Proyek">
              <button
                class="btn btn-outline-primary btn-sm pagination-button"
                type="button"
                :disabled="projectLoading || projectPagination.page <= 1"
                @click="changeProjectPage(projectPagination.page - 1)"
              >
                <vue-feather type="chevron-left" size="15" class="me-1" />Sebelumnya
              </button>
              <div class="pagination-pages" aria-label="Pilih halaman proyek">
                <template v-for="item in visibleProjectPages" :key="String(item)">
                  <span
                    v-if="typeof item === 'string'"
                    class="pagination-ellipsis"
                    aria-hidden="true"
                  >
                    …
                  </span>
                  <button
                    v-else
                    class="btn btn-sm pagination-page-button"
                    :class="{
                      'pagination-page-button--active': item === projectPagination.page,
                    }"
                    type="button"
                    :disabled="projectLoading || item === projectPagination.page"
                    :aria-current="item === projectPagination.page ? 'page' : undefined"
                    :aria-label="`Ke halaman ${item}`"
                    @click="changeProjectPage(item)"
                  >
                    {{ item }}
                  </button>
                </template>
              </div>
              <button
                class="btn btn-outline-primary btn-sm pagination-button"
                type="button"
                :disabled="
                  projectLoading || projectPagination.page >= projectPagination.lastPage
                "
                @click="changeProjectPage(projectPagination.page + 1)"
              >
                Berikutnya<vue-feather type="chevron-right" size="15" class="ms-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref, defineAsyncComponent, onBeforeUnmount, onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import Swal from 'sweetalert2'
import { useTask } from '@/store/task'
import { useProjectStore } from '@/store/project'

const taskStore = useTask()
const { projectList } = storeToRefs(taskStore)
const projectStore = useProjectStore()
const { loading: projectLoading, pagination: projectPagination } = storeToRefs(projectStore)
const searchQuery = ref('')
const projectPageSize = ref(10)
let searchTimer: ReturnType<typeof setTimeout> | undefined
let resizeTimer: ReturnType<typeof setTimeout> | undefined

const LARGE_DESKTOP_BREAKPOINT = 1400

onMounted(() => {
  projectPageSize.value = preferredProjectPageSize()
  window.addEventListener('resize', handleViewportResize)
  void loadProjects(1)
})

const Card = defineAsyncComponent(() => import('@/components/shared/card/Card.vue'))
const ProjectCostPerformance = defineAsyncComponent(
  () => import('@/module/project/projectList/ProjectCostPerformance.vue')
)
const ProjectRating = defineAsyncComponent(
  () => import('@/module/project/projectList/ProjectRating.vue')
)
const ProjectProfessionalTeam = defineAsyncComponent(
  () => import('@/module/project/projectList/ProjectProfessionalTeam.vue')
)
const TotalProjects = defineAsyncComponent(
  () => import('@/module/project/projectList/TotalProjects.vue')
)
const ProjectStatusTab = defineAsyncComponent(
  () => import('@/module/project/projectList/ProjectStatusTab.vue')
)
const ProjectDetails = defineAsyncComponent(
  () => import('@/module/project/projectList/ProjectDetails.vue')
)

const activeTab = ref<string>('all')

const filteredProjects = computed(() =>
  activeTab.value === 'all'
    ? projectList.value
    : projectList.value.filter((project) => project.status === activeTab.value)
)

const visibleProjectPages = computed<Array<number | string>>(() => {
  const totalPages = Math.max(1, projectPagination.value.lastPage)
  const currentPage = Math.min(Math.max(1, projectPagination.value.page), totalPages)

  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1)
  }

  const pageSet = new Set([
    1,
    totalPages,
    currentPage - 1,
    currentPage,
    currentPage + 1,
  ])
  if (currentPage <= 3) {
    pageSet.add(2)
    pageSet.add(3)
  }
  if (currentPage >= totalPages - 2) {
    pageSet.add(totalPages - 2)
    pageSet.add(totalPages - 1)
  }

  const pages = [...pageSet]
    .filter((page) => page >= 1 && page <= totalPages)
    .sort((left, right) => left - right)
  const items: Array<number | string> = []
  pages.forEach((page, index) => {
    const previousPage = pages[index - 1]
    if (previousPage !== undefined && page - previousPage > 1) {
      items.push(`ellipsis-${previousPage}-${page}`)
    }
    items.push(page)
  })
  return items
})

watch(searchQuery, () => {
  if (searchTimer) clearTimeout(searchTimer)
  searchTimer = setTimeout(() => {
    void loadProjects(1)
  }, 350)
})

function loadProjects(page: number) {
  return projectStore
    .fetchProjects({
      page,
      per_page: projectPageSize.value,
      search: searchQuery.value.trim() || undefined,
    })
    .catch(() => {
      Swal.fire({ icon: 'error', text: projectStore.error ?? 'Gagal memuat data proyek.' })
    })
}

function preferredProjectPageSize() {
  return window.innerWidth >= LARGE_DESKTOP_BREAKPOINT ? 15 : 10
}

function handleViewportResize() {
  if (resizeTimer) clearTimeout(resizeTimer)
  resizeTimer = setTimeout(() => {
    const nextPageSize = preferredProjectPageSize()
    if (nextPageSize === projectPageSize.value) return
    projectPageSize.value = nextPageSize
    void loadProjects(1)
  }, 250)
}

function changeProjectPage(page: number) {
  if (
    page < 1 ||
    page > projectPagination.value.lastPage ||
    page === projectPagination.value.page
  ) return
  void loadProjects(page)
}

function formatTotal(total: number) {
  return new Intl.NumberFormat('id-ID').format(total)
}

function handleActiveTab(value: string) {
  if (value) {
    activeTab.value = value
  }
}

onBeforeUnmount(() => {
  if (searchTimer) clearTimeout(searchTimer)
  if (resizeTimer) clearTimeout(resizeTimer)
  window.removeEventListener('resize', handleViewportResize)
})
</script>

<style scoped>
.project-list-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
}

.project-search {
  display: flex;
  width: min(100%, 460px);
  height: 44px;
  min-width: 0;
  box-sizing: border-box;
  align-items: center;
  gap: 9px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 0 11px;
  background: #ffffff;
  color: #64748b;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.project-search:focus-within {
  border-color: #18a6e4;
  box-shadow: 0 0 0 3px rgba(24, 166, 228, 0.14);
}

.project-search input {
  width: 100%;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: #0f172a;
  font-size: 13px;
}

.project-search input::placeholder {
  color: #94a3b8;
}

.project-search__loading {
  width: 15px;
  height: 15px;
  flex: 0 0 15px;
  color: #18a6e4;
}

.project-search__clear {
  display: inline-flex;
  width: 24px;
  height: 24px;
  flex: 0 0 24px;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 50%;
  padding: 0;
  background: #f1f5f9;
  color: #64748b;
}

.project-result-count,
.project-page-summary {
  color: #64748b;
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
}

.project-empty-state {
  display: flex;
  min-height: 220px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  color: #64748b;
  text-align: center;
}

.project-empty-state svg {
  color: #18a6e4;
}

.project-pagination-card__body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 72px 18px 24px;
}

.pagination-actions,
.pagination-pages {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.pagination-actions {
  gap: 0.5rem;
}

.pagination-pages {
  gap: 0.25rem;
}

.pagination-button {
  display: inline-flex;
  width: auto;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem !important;
  padding-inline: 0.875rem;
}

.pagination-page-button {
  display: inline-flex;
  width: 34px;
  height: 34px;
  align-items: center;
  justify-content: center;
  border: 1px solid #cbd5e1;
  border-radius: 0.375rem !important;
  padding: 0;
  background: #ffffff;
  color: #475569;
  font-weight: 600;
}

.pagination-page-button:hover:not(:disabled) {
  border-color: #18a6e4;
  color: #18a6e4;
}

.pagination-page-button--active,
.pagination-page-button--active:disabled {
  border-color: #18a6e4;
  background: #18a6e4;
  color: #ffffff;
  opacity: 1;
}

.pagination-ellipsis {
  min-width: 20px;
  color: #64748b;
  text-align: center;
}

@media (max-width: 767.98px) {
  .project-list-toolbar,
  .project-pagination-card__body {
    align-items: stretch;
    flex-direction: column;
  }

  .project-search {
    width: 100%;
  }

  .project-pagination-card__body {
    padding-right: 64px;
  }

  .pagination-actions {
    justify-content: flex-start;
  }
}
</style>
