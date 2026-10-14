<template>
  <div class="container-fluid project-list-page">
    <div class="row project-cards">
      <div class="col-12">
        <section class="pipeline-overview">
          <header class="overview-heading">
            <div>
              <h4>Ringkasan Peluang</h4>
              <p>
                Semua peluang dalam satu tampilan. Pilih tahap untuk fokus ke
                tindak lanjut.
              </p>
            </div>
            <button
              class="add-project-button"
              type="button"
              @click="projectStore.openCreateModal()"
            >
              <span aria-hidden="true"
                ><vue-feather type="plus" size="20"
              /></span>
              Tambah Peluang
            </button>
          </header>

          <div class="overview-metrics">
            <article class="overview-card overview-card--total">
              <span class="overview-label">Total Peluang</span>
              <div class="overview-value-row">
                <strong>{{ formatTotal(summaryTotal) }}</strong>
                <span>peluang</span>
              </div>
              <small
                >{{ activeProjectCount }} aktif ·
                {{ lostProjectCount }} lost</small
              >
            </article>

            <article class="overview-card">
              <span class="overview-label">Nilai Pipeline</span>
              <strong class="pipeline-total-value">{{
                formatCompactMoney(pipelineTotal)
              }}</strong>
              <small>dari peluang yang tersedia</small>
            </article>

            <article class="overview-card overview-card--composition">
              <div>
                <strong>Komposisi pipeline</strong>
                <small>Nilai per tahap</small>
              </div>
              <div
                class="pipeline-composition"
                aria-label="Komposisi nilai pipeline"
              >
                <span
                  v-for="stage in stageCards"
                  :key="stage.value"
                  :style="{
                    width: `${stage.percentage}%`,
                    background: stage.color,
                  }"
                  :title="`${stage.title}: ${stage.percentage}%`"
                ></span>
              </div>
              <div class="composition-legend">
                <span
                  >{{ dominantStage.title }}
                  {{ dominantStage.percentage }}%</span
                >
                <span
                  >Aktif · {{ formatCompactMoney(activePipelineValue) }}</span
                >
                <span>Lost · {{ formatCompactMoney(lostPipelineValue) }}</span>
              </div>
            </article>
          </div>
        </section>
      </div>

      <div class="col-12">
        <section class="pipeline-stage-panel">
          <header class="stage-panel-heading">
            <div class="stage-title">
              <h5>Tahap peluang</h5>
              <span>pilih tahap untuk melihat daftar</span>
            </div>

            <div class="stage-controls">
              <div class="project-search" role="search">
                <label class="visually-hidden" for="project-search-input"
                  >Cari peluang</label
                >
                <vue-feather type="search" size="16" />
                <input
                  id="project-search-input"
                  v-model="searchQuery"
                  type="search"
                  placeholder="Cari peluang..."
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

              <select
                v-model="ownerFilter"
                class="owner-filter"
                aria-label="Filter pemilik peluang"
              >
                <option value="all">Semua pemilik</option>
                <option
                  v-for="owner in ownerOptions"
                  :key="owner"
                  :value="owner"
                >
                  {{ owner }}
                </option>
              </select>

              <div
                class="view-switcher"
                role="group"
                aria-label="Mode tampilan peluang"
              >
                <button
                  type="button"
                  :class="{ active: viewMode === 'board' }"
                  @click="viewMode = 'board'"
                >
                  Board
                </button>
                <button
                  type="button"
                  :class="{ active: viewMode === 'list' }"
                  @click="viewMode = 'list'"
                >
                  List
                </button>
              </div>
            </div>
          </header>

          <div class="stage-card-strip">
            <button
              class="stage-card stage-card--all"
              :class="{ active: activeTab === 'all' }"
              type="button"
              @click="activeTab = 'all'"
            >
              <span class="stage-card__top">
                <strong>All</strong>
                <em>{{ summaryTotal }}</em>
              </span>
              <span>{{ formatCompactMoney(pipelineTotal) }}</span>
            </button>
            <button
              v-for="stage in stageCards"
              :key="stage.value"
              class="stage-card"
              :class="{ active: activeTab === stage.value }"
              :style="{
                '--stage-color': stage.color,
                '--stage-soft': `${stage.color}18`,
              }"
              type="button"
              @click="selectStage(stage.value)"
            >
              <span class="stage-card__top">
                <strong>{{ stage.title }}</strong>
                <em>{{ stage.quantity }}</em>
              </span>
              <span>{{ formatCompactMoney(stage.totalValue) }}</span>
            </button>
          </div>

          <div class="projects-wrapper project-results-section">
            <div class="project-list-toolbar">
              <div>
                <h5>Daftar Peluang</h5>
                <span>{{ activeStageLabel }}</span>
              </div>
              <span class="project-result-count">
                {{ formatTotal(filteredProjects.length) }} ditampilkan
              </span>
            </div>
            <div class="tab-content" id="top-tabContent">
              <div class="tab-pane fade show active">
                <div
                  class="row g-4"
                  :class="{ 'project-grid--list': viewMode === 'list' }"
                >
                  <div
                    v-for="project in filteredProjects"
                    :key="project.id"
                    :class="
                      viewMode === 'list'
                        ? 'col-12'
                        : 'col-xxl-3 col-md-6 col-ed-4 box-col-6'
                    "
                  >
                    <ProjectDetails :project="project" />
                  </div>
                  <div
                    v-if="!projectLoading && !filteredProjects.length"
                    class="col-12 project-empty-state"
                  >
                    <vue-feather type="folder" size="24" />
                    <strong>Peluang tidak ditemukan</strong>
                    <span
                      >Coba gunakan nama peluang atau stage yang berbeda.</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            v-if="
              !usesSummaryData &&
              (projectList.length || projectPagination.page > 1)
            "
            class="project-pagination-card"
          >
            <div class="project-pagination-card__body">
              <span class="project-page-summary">
                Halaman {{ projectPagination.page }} dari
                {{ projectPagination.lastPage }}
              </span>
              <div
                class="pagination-actions"
                role="group"
                aria-label="Pagination Peluang"
              >
                <button
                  class="btn btn-outline-primary btn-sm pagination-button"
                  type="button"
                  :disabled="projectLoading || projectPagination.page <= 1"
                  @click="changeProjectPage(projectPagination.page - 1)"
                >
                  <vue-feather
                    type="chevron-left"
                    size="15"
                    class="me-1"
                  />Sebelumnya
                </button>
                <div
                  class="pagination-pages"
                  aria-label="Pilih halaman peluang"
                >
                  <template
                    v-for="item in visibleProjectPages"
                    :key="String(item)"
                  >
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
                        'pagination-page-button--active':
                          item === projectPagination.page,
                      }"
                      type="button"
                      :disabled="
                        projectLoading || item === projectPagination.page
                      "
                      :aria-current="
                        item === projectPagination.page ? 'page' : undefined
                      "
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
                    projectLoading ||
                    projectPagination.page >= projectPagination.lastPage
                  "
                  @click="changeProjectPage(projectPagination.page + 1)"
                >
                  Berikutnya<vue-feather
                    type="chevron-right"
                    size="15"
                    class="ms-1"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  computed,
  ref,
  defineAsyncComponent,
  onBeforeUnmount,
  onMounted,
  watch,
} from "vue";
import { storeToRefs } from "pinia";
import Swal from "sweetalert2";
import { projectTab } from "@/core/data/project";
import { useTask } from "@/store/task";
import { useProjectStore } from "@/store/project";
import type { Projects } from "@/types/project";

const taskStore = useTask();
const { projectList } = storeToRefs(taskStore);
const projectStore = useProjectStore();
const {
  loading: projectLoading,
  pagination: projectPagination,
  summaryItems,
} = storeToRefs(projectStore);
const searchQuery = ref("");
const ownerFilter = ref("all");
const viewMode = ref<"board" | "list">("board");
const projectPageSize = ref(10);
let searchTimer: ReturnType<typeof setTimeout> | undefined;
let resizeTimer: ReturnType<typeof setTimeout> | undefined;

const LARGE_DESKTOP_BREAKPOINT = 1400;

onMounted(() => {
  projectPageSize.value = preferredProjectPageSize();
  window.addEventListener("resize", handleViewportResize);
  void loadProjects(1);
  void projectStore.fetchProjectSummary();
});

const ProjectDetails = defineAsyncComponent(
  () => import("@/module/project/projectList/ProjectDetails.vue"),
);

const activeTab = ref<string>("all");

const STAGE_COLORS: Record<string, string> = {
  qualified: "#18a6e4",
  presentation_demo: "#0e7490",
  quotation: "#ffae1a",
  negotiation: "#84d7eb",
  closed_won: "#0284c7",
  closed_lost: "#e72929",
  closed_cancel: "#84d7eb",
};

function parseProjectAmount(project: Projects) {
  const directValue = project.amountValue ?? project.projectValue;
  if (typeof directValue === "number" && Number.isFinite(directValue))
    return directValue;

  const normalized = String(project.budget || "").replace(/[^\d,.-]/g, "");
  if (!normalized) return 0;
  const lastSeparator = Math.max(
    normalized.lastIndexOf(","),
    normalized.lastIndexOf("."),
  );
  const decimalLength =
    lastSeparator < 0 ? 0 : normalized.length - lastSeparator - 1;
  if (lastSeparator < 0 || decimalLength === 3) {
    return Number(normalized.replace(/[,.]/g, "")) || 0;
  }
  const integer = normalized.slice(0, lastSeparator).replace(/[,.]/g, "");
  const decimal = normalized.slice(lastSeparator + 1);
  return Number(`${integer}.${decimal}`) || 0;
}

const summaryProjects = computed(() =>
  summaryItems.value.length ? summaryItems.value : projectList.value,
);

const pipelineTotal = computed(() =>
  summaryProjects.value.reduce(
    (total, project) => total + parseProjectAmount(project),
    0,
  ),
);

const stageCards = computed(() => {
  const stages = projectTab
    .filter((stage) => stage.value !== "all")
    .map((stage) => {
      const projects = summaryProjects.value.filter(
        (project) => project.status === stage.value,
      );
      return {
        ...stage,
        color: STAGE_COLORS[stage.value] || "#94a3b8",
        quantity: projects.length,
        totalValue: projects.reduce(
          (total, project) => total + parseProjectAmount(project),
          0,
        ),
        percentage: 0,
      };
    });
  const countTotal = stages.reduce((total, stage) => total + stage.quantity, 0);

  return stages.map((stage) => ({
    ...stage,
    percentage: Math.round(
      pipelineTotal.value > 0
        ? (stage.totalValue / pipelineTotal.value) * 100
        : countTotal > 0
          ? (stage.quantity / countTotal) * 100
          : 0,
    ),
  }));
});

const summaryTotal = computed(() =>
  Math.max(projectPagination.value.total, summaryProjects.value.length),
);
const closedStatuses = new Set(["closed_won", "closed_lost", "closed_cancel"]);
const activeProjects = computed(() =>
  summaryProjects.value.filter(
    (project) => !closedStatuses.has(project.status),
  ),
);
const activeProjectCount = computed(() => activeProjects.value.length);
const lostProjectCount = computed(
  () =>
    summaryProjects.value.filter((project) => project.status === "closed_lost")
      .length,
);
const activePipelineValue = computed(() =>
  activeProjects.value.reduce(
    (total, project) => total + parseProjectAmount(project),
    0,
  ),
);
const lostPipelineValue = computed(() =>
  summaryProjects.value
    .filter((project) => project.status === "closed_lost")
    .reduce((total, project) => total + parseProjectAmount(project), 0),
);
const dominantStage = computed(() =>
  stageCards.value.reduce(
    (dominant, stage) =>
      stage.percentage > dominant.percentage ? stage : dominant,
    { title: "Belum ada data", percentage: 0 },
  ),
);
const ownerOptions = computed(() =>
  [
    ...new Set(
      summaryProjects.value
        .map((project) => project.ownerName?.trim())
        .filter((owner): owner is string => Boolean(owner)),
    ),
  ].sort((left, right) => left.localeCompare(right)),
);
const activeStageLabel = computed(() =>
  activeTab.value === "all"
    ? "Semua tahap peluang"
    : stageCards.value.find((stage) => stage.value === activeTab.value)
        ?.title || "Tahap peluang",
);

const usesSummaryData = computed(
  () => activeTab.value !== "all" || ownerFilter.value !== "all",
);
const filteredProjects = computed(() => {
  const source = usesSummaryData.value
    ? summaryProjects.value
    : projectList.value;
  const query = searchQuery.value.trim().toLocaleLowerCase("id-ID");

  return source.filter((project) => {
    const matchesStage =
      activeTab.value === "all" || project.status === activeTab.value;
    const matchesOwner =
      ownerFilter.value === "all" || project.ownerName === ownerFilter.value;
    const matchesSearch =
      !query ||
      [project.projectName, project.productNames, project.companyName].some(
        (value) =>
          String(value || "")
            .toLocaleLowerCase("id-ID")
            .includes(query),
      );
    return matchesStage && matchesOwner && matchesSearch;
  });
});

const visibleProjectPages = computed<Array<number | string>>(() => {
  const totalPages = Math.max(1, projectPagination.value.lastPage);
  const currentPage = Math.min(
    Math.max(1, projectPagination.value.page),
    totalPages,
  );

  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const pageSet = new Set([
    1,
    totalPages,
    currentPage - 1,
    currentPage,
    currentPage + 1,
  ]);
  if (currentPage <= 3) {
    pageSet.add(2);
    pageSet.add(3);
  }
  if (currentPage >= totalPages - 2) {
    pageSet.add(totalPages - 2);
    pageSet.add(totalPages - 1);
  }

  const pages = [...pageSet]
    .filter((page) => page >= 1 && page <= totalPages)
    .sort((left, right) => left - right);
  const items: Array<number | string> = [];
  pages.forEach((page, index) => {
    const previousPage = pages[index - 1];
    if (previousPage !== undefined && page - previousPage > 1) {
      items.push(`ellipsis-${previousPage}-${page}`);
    }
    items.push(page);
  });
  return items;
});

watch(searchQuery, () => {
  if (searchTimer) clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    void loadProjects(1);
  }, 350);
});

function loadProjects(page: number) {
  return projectStore
    .fetchProjects({
      page,
      per_page: projectPageSize.value,
      search: searchQuery.value.trim() || undefined,
    })
    .catch(() => {
      Swal.fire({
        icon: "error",
        text: projectStore.error ?? "Gagal memuat data peluang.",
      });
    });
}

function preferredProjectPageSize() {
  return window.innerWidth >= LARGE_DESKTOP_BREAKPOINT ? 15 : 10;
}

function handleViewportResize() {
  if (resizeTimer) clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    const nextPageSize = preferredProjectPageSize();
    if (nextPageSize === projectPageSize.value) return;
    projectPageSize.value = nextPageSize;
    void loadProjects(1);
  }, 250);
}

function changeProjectPage(page: number) {
  if (
    page < 1 ||
    page > projectPagination.value.lastPage ||
    page === projectPagination.value.page
  )
    return;
  void loadProjects(page);
}

function formatTotal(total: number) {
  return new Intl.NumberFormat("id-ID").format(total);
}

function formatCompactMoney(value: number) {
  if (!Number.isFinite(value) || value <= 0) return "Rp 0";
  if (value >= 1_000_000) {
    const millions = new Intl.NumberFormat("id-ID", {
      maximumFractionDigits: 1,
    }).format(value / 1_000_000);
    return `Rp ${millions} jt`;
  }
  if (value >= 1_000) {
    const thousands = new Intl.NumberFormat("id-ID", {
      maximumFractionDigits: 1,
    }).format(value / 1_000);
    return `Rp ${thousands} rb`;
  }
  return `Rp ${new Intl.NumberFormat("id-ID").format(value)}`;
}

function selectStage(value: string) {
  activeTab.value = activeTab.value === value ? "all" : value;
}

onBeforeUnmount(() => {
  if (searchTimer) clearTimeout(searchTimer);
  if (resizeTimer) clearTimeout(resizeTimer);
  window.removeEventListener("resize", handleViewportResize);
});
</script>

<style scoped>
.project-list-page {
  --pipeline-blue: var(--theme-default, #18a6e4);
  padding-bottom: 28px;
}

.pipeline-overview,
.pipeline-stage-panel {
  min-width: 0;
  overflow: hidden;
  border: 1px solid #e2e8ee;
  border-radius: 18px;
  margin-bottom: 18px;
  background: #ffffff;
  box-shadow: 0 8px 24px rgba(31, 52, 73, 0.045);
}

.overview-heading,
.stage-panel-heading,
.project-list-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

.overview-heading {
  margin: 0;
  border-bottom: 1px solid #e8eef2;
  padding: 20px 24px;
}

.overview-heading h4,
.stage-title h5,
.project-list-toolbar h5 {
  margin: 0;
  color: #243b53;
  font-weight: 700;
}

.overview-heading h4 {
  font-size: 23px;
}

.overview-heading p,
.stage-title > span,
.project-list-toolbar > div > span {
  margin: 4px 0 0;
  color: #829ab1;
  font-size: 11px;
}

.add-project-button {
  display: inline-flex;
  min-height: 48px;
  flex: 0 0 auto;
  align-items: center;
  gap: 9px;
  border: 0;
  border-radius: 13px;
  padding: 6px 16px 6px 7px;
  color: #ffffff;
  background: linear-gradient(135deg, #1ba5d5, #18a6e4);
  box-shadow:
    0 5px 0 #a9e5f6,
    0 10px 22px rgba(24, 166, 228, 0.14);
  font-size: 12px;
  font-weight: 700;
  transition:
    box-shadow 0.18s ease,
    transform 0.18s ease;
}

.add-project-button > span {
  display: inline-flex;
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: rgba(4, 111, 156, 0.22);
}

.add-project-button > span,
.add-project-button > span :deep(svg) {
  color: #ffffff !important;
  stroke: #ffffff !important;
}

.add-project-button:hover,
.add-project-button:focus-visible {
  color: #ffffff;
  box-shadow:
    0 4px 0 #a9e5f6,
    0 12px 25px rgba(24, 166, 228, 0.2);
  transform: translateY(-1px);
}

.add-project-button:focus-visible {
  outline: 3px solid rgba(24, 166, 228, 0.18);
  outline-offset: 3px;
}

.overview-metrics {
  display: grid;
  grid-template-columns: minmax(230px, 0.75fr) minmax(280px, 1.05fr) minmax(
      380px,
      1.5fr
    );
  gap: 14px;
  padding: 22px 24px 24px;
}

.overview-card {
  position: relative;
  overflow: hidden;
  min-height: 126px;
  border: 1px solid #dfe8ee;
  border-radius: 16px;
  padding: 18px 21px;
  background: #ffffff;
  box-shadow: 0 7px 20px rgba(31, 52, 73, 0.035);
}

.overview-card--total::before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 5px;
  background: var(--pipeline-blue);
  content: "";
}

.overview-label {
  display: block;
  margin-bottom: 13px;
  color: #0284b8;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.overview-value-row {
  display: flex;
  align-items: baseline;
  gap: 14px;
}

.overview-value-row strong,
.pipeline-total-value {
  display: block;
  color: #243b53;
  font-size: clamp(25px, 2.6vw, 37px);
  font-weight: 700;
  line-height: 1.05;
}

.overview-value-row > span {
  color: #718096;
  font-size: 12px;
}

.overview-card > small,
.overview-card--composition small {
  display: block;
  margin-top: 8px;
  color: #829ab1;
  font-size: 10px;
}

.overview-card--composition > div:first-child > strong {
  display: block;
  color: #334e68;
  font-size: 13px;
}

.pipeline-composition {
  display: flex;
  height: 8px;
  overflow: hidden;
  border-radius: 999px;
  margin-top: 14px;
  background: #edf3f6;
}

.pipeline-composition span {
  min-width: 0;
  border-right: 2px solid #ffffff;
  transition: width 0.25s ease;
}

.pipeline-composition span:last-child {
  border-right: 0;
}

.composition-legend {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-top: 13px;
  color: #718096;
  font-size: 10px;
}

.composition-legend span:nth-child(2) {
  color: #0795c9;
  text-align: center;
}

.composition-legend span:last-child {
  color: #e85d68;
  text-align: right;
}

.pipeline-stage-panel {
  margin-top: 0;
}

.stage-panel-heading {
  align-items: center;
  border-bottom: 1px solid #e8eef2;
  margin: 0;
  padding: 18px 24px;
}

.stage-title {
  display: flex;
  min-width: 0;
  align-items: baseline;
  gap: 18px;
}

.stage-title h5 {
  flex: 0 0 auto;
  font-size: 16px;
}

.stage-controls {
  display: flex;
  min-width: 0;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
}

.stage-controls .project-search {
  width: min(290px, 34vw);
}

.owner-filter {
  width: 160px;
  height: 42px;
  border: 1px solid #d8e2e8;
  border-radius: 11px;
  padding: 0 34px 0 12px;
  color: #334e68;
  background-color: #ffffff;
  font-size: 11px;
  outline: none;
}

.owner-filter:focus {
  border-color: var(--pipeline-blue);
  box-shadow: 0 0 0 3px rgba(24, 166, 228, 0.12);
}

.view-switcher {
  display: flex;
  gap: 7px;
}

.view-switcher button {
  height: 42px;
  border: 1px solid #d8e2e8;
  border-radius: 11px;
  padding: 0 15px;
  color: #718096;
  background: #ffffff;
  font-size: 11px;
  font-weight: 600;
}

.view-switcher button.active {
  border-color: var(--pipeline-blue);
  color: #ffffff;
  background: var(--pipeline-blue);
}

.stage-card-strip {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  min-width: 0;
  gap: 11px;
  padding: 20px 24px 24px;
}

.stage-card {
  --stage-color: var(--pipeline-blue);
  --stage-soft: rgba(24, 166, 228, 0.08);
  min-width: 0;
  min-height: 102px;
  border: 1px solid #dfe7ec;
  border-radius: 14px;
  padding: 16px 18px;
  color: #334e68;
  background: #ffffff;
  text-align: left;
  transition:
    border-color 0.18s ease,
    box-shadow 0.18s ease,
    transform 0.18s ease;
}

.stage-card:hover {
  border-color: var(--stage-color);
  box-shadow: 0 6px 15px rgba(31, 52, 73, 0.055);
  transform: translateY(-1px);
}

.stage-card.active {
  border-color: var(--stage-color);
  color: var(--stage-color);
  background: var(--stage-soft);
}

.stage-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
}

.stage-card__top strong {
  overflow: hidden;
  color: #0f172a;
  font-size: 15px;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.stage-card__top em {
  display: inline-flex;
  min-width: 34px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  color: #334e68;
  background: #f0f3f5;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
}

.stage-card.active .stage-card__top em {
  color: #ffffff;
  background: var(--stage-color);
}

.stage-card > span:last-child {
  color: #718096;
  font-size: 14px;
  font-weight: 600;
}

.stage-card--all .stage-card__top strong {
  color: #0f172a;
}

.stage-card--all.active .stage-card__top strong {
  color: #0f172a;
}

.stage-card.active > span:last-child {
  color: inherit;
}

.project-results-section {
  border-top: 1px solid #e8eef2;
  padding: 22px 24px 24px;
}

.project-list-toolbar {
  margin-bottom: 24px;
}

.project-list-toolbar h5 {
  font-size: 16px;
}

.project-search {
  display: flex;
  height: 42px;
  min-width: 0;
  box-sizing: border-box;
  align-items: center;
  gap: 9px;
  border: 1px solid #cbd5e1;
  border-radius: 11px;
  padding: 0 11px;
  background: #ffffff;
  color: #64748b;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
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

.project-grid--list > div {
  width: 100%;
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

.project-pagination-card {
  border-top: 1px solid #e8eef2;
  background: #fbfdfe;
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

@media (max-width: 1199.98px) {
  .overview-metrics {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .overview-card--composition {
    grid-column: 1 / -1;
  }
}

@media (max-width: 991.98px) {
  .stage-panel-heading {
    align-items: stretch;
    flex-direction: column;
  }

  .stage-controls {
    justify-content: flex-start;
  }

  .stage-controls .project-search {
    width: min(100%, 360px);
  }

  .stage-card-strip {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 767.98px) {
  .overview-heading {
    align-items: flex-start;
  }

  .stage-title {
    flex-wrap: wrap;
    gap: 5px 14px;
  }

  .stage-controls {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
  }

  .stage-controls .project-search {
    grid-column: 1 / -1;
    width: 100%;
  }

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

@media (max-width: 575.98px) {
  .pipeline-overview,
  .pipeline-stage-panel {
    border-radius: 14px;
  }

  .overview-heading {
    flex-direction: column;
    padding: 18px;
  }

  .overview-heading h4 {
    font-size: 20px;
  }

  .add-project-button {
    width: 100%;
    justify-content: center;
  }

  .overview-metrics {
    grid-template-columns: 1fr;
    padding: 18px;
  }

  .overview-card--composition {
    grid-column: auto;
  }

  .composition-legend {
    grid-template-columns: 1fr;
    gap: 5px;
  }

  .composition-legend span:nth-child(2),
  .composition-legend span:last-child {
    text-align: left;
  }

  .stage-controls {
    grid-template-columns: minmax(0, 1fr) auto;
  }

  .stage-panel-heading,
  .stage-card-strip,
  .project-results-section {
    padding: 18px;
  }

  .owner-filter {
    width: 100%;
  }

  .view-switcher button {
    padding-inline: 11px;
  }
}

@media (max-width: 419.98px) {
  .stage-card-strip {
    grid-template-columns: 1fr;
  }
}
</style>
