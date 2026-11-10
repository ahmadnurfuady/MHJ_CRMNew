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
              v-if="canAddProject"
              class="add-project-button mhj-add-button"
              type="button"
              @click="projectStore.openCreateModal()"
            >
              <SolarIcon
                name="add"
                class="add-project-button__icon"
                :size="19"
                color="#ffffff"
                secondary-color="#ffffff"
                :secondary-opacity="1"
                aria-hidden="true"
              />
              Tambah Peluang
            </button>
          </header>

          <div
            class="overview-metrics"
            :class="{ 'overview-metrics--wide-value': hasWidePipelineValue }"
          >
            <article class="overview-card overview-card--total">
              <span class="overview-label">Total Peluang</span>
              <div class="overview-value-row">
                <strong>{{ formatTotal(summaryTotal) }}</strong>
                <span>peluang</span>
              </div>
              <small
                >{{ activeProjectCount }} aktif ·
                {{ lostProjectCount }} lost/cancel</small
              >
            </article>

            <article class="overview-card">
              <span class="overview-label">Nilai Peluang</span>
              <strong class="pipeline-total-value">{{
                formatMoney(pipelineTotal)
              }}</strong>
              <small>dari peluang yang tersedia</small>
            </article>

            <article class="overview-card overview-card--composition">
              <div>
                <strong>Komposisi peluang</strong>
                <small>Nilai per tahap</small>
              </div>
              <div
                class="pipeline-composition"
                aria-label="Komposisi nilai peluang"
              >
                <span
                  v-for="stage in stageCards"
                  :key="stage.value"
                  :style="{
                    flexGrow: Math.max(stage.totalValue || stage.quantity, 1),
                    background: stage.color,
                  }"
                  :title="`${stage.title}: ${stage.quantity} peluang`"
                ></span>
              </div>
              <div class="composition-legend">
                <span>Terbesar · {{ dominantStage.title }}</span>
                <span
                  >Aktif · {{ formatMoney(activePipelineValue) }}</span
                >
                <span>Lost/Cancel · {{ formatMoney(lostPipelineValue) }}</span>
              </div>
            </article>
          </div>
        </section>
      </div>

      <div v-if="missingCustomerProjects.length" class="col-12">
        <button
          type="button"
          class="opportunity-reminder"
          aria-label="Lihat peluang win yang perlu dilengkapi data pelanggan"
          @click="showOpportunityReminder(true)"
        >
          <span class="opportunity-reminder__icon" aria-hidden="true">
            <SolarIcon
              name="clipboard-list"
              :size="24"
              color="var(--app-primary, #18a6e4)"
              secondary-color="var(--app-primary, #18a6e4)"
              :secondary-opacity="0.35"
            />
          </span>
          <span class="opportunity-reminder__copy">
            <strong>{{ missingCustomerProjects.length }} peluang win perlu data pelanggan</strong>
            <small>Ketuk untuk lihat dan perbarui sekarang</small>
          </span>
          <SolarIcon name="arrow-right" class="opportunity-reminder__arrow" :size="20" aria-hidden="true" />
        </button>
      </div>

      <div class="col-12">
        <section ref="stagePanel" class="pipeline-stage-panel">
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
                <SolarIcon
                  name="magnifier"
                  class="crm-search-icon"
                  :size="18"
                  color="var(--app-primary-deep, #032A4E)"
                  secondary-color="var(--app-primary, #18A6E4)"
                  :secondary-opacity="0.75"
                  aria-hidden="true"
                />
                <input
                  id="project-search-input"
                  v-model="searchQuery"
                  type="text"
                  placeholder="Cari nama peluang, faskes, owner, atau kontak..."
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
              <span>{{ formatMoney(pipelineTotal) }}</span>
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
              <span>{{ formatMoney(stage.totalValue) }}</span>
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
                        : 'col-xxl-4 col-xl-6 col-md-6'
                    "
                  >
                    <ProjectDetails
                      :project="project"
                      :view-mode="viewMode"
                      :missing-requirements="wonMissingRequirements[project.id] ?? []"
                      :back-to="route.fullPath"
                    />
                  </div>
                  <div
                    v-if="!projectLoading && !filteredProjects.length"
                    class="col-12 project-empty-state"
                  >
                    <MhjIcon name="action_folder" />
                    <strong>Peluang tidak ditemukan</strong>
                    <span
                      >Coba gunakan nama peluang, faskes, owner, kontak, atau stage yang berbeda.</span
                    >
                  </div>
                </div>
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
  nextTick,
  onMounted,
  watch,
} from "vue";
import { storeToRefs } from "pinia";
import { useRoute, useRouter } from "vue-router";
import Swal from "sweetalert2";
import { projectTab } from "@/core/data/project";
import { routes } from "@/router/routes";
import { fetchWonMissingRequirements } from "@/services/projectOrderService";
import { useProjectStore } from "@/store/project";
import { useProjectPermissions } from "@/module/project/projectPermission";
import type { Projects } from "@/types/project";

const route = useRoute();
const router = useRouter();
const projectStore = useProjectStore();
const { canAddProject } = useProjectPermissions();
const {
  loading: projectLoading,
  summaryItems,
  ringkasan,
  stageSummaries,
} = storeToRefs(projectStore);
const searchQuery = ref("");
const ownerFilter = ref("all");
const stagePanel = ref<HTMLElement | null>(null);
const missingCustomerProjects = ref<Projects[]>([]);
const wonMissingRequirements = ref<Record<number, string[]>>({});
const reminderSessionKey = "project-list-win-customer-reminder-muted";
// Default tampilan peluang: list. User bisa pindah ke board via toggle di toolbar.
const viewMode = ref<"board" | "list">("list");

onMounted(async () => {
  const showAutomaticPopup = sessionStorage.getItem(reminderSessionKey) !== "1";
  if (showAutomaticPopup) {
    Swal.fire({
      title: "Memeriksa peluang win...",
      text: "Menyiapkan reminder data pelanggan.",
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      didOpen: () => Swal.showLoading(),
    });
  }
  await projectStore.fetchProjectSummary();
  await loadOpportunityReminder(showAutomaticPopup);
});

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function openWonStage(): Promise<void> {
  activeTab.value = "closed_won";
  searchQuery.value = "";
  ownerFilter.value = "all";
  await nextTick();
  stagePanel.value?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function openProjectDetail(projectId: number): void {
  router.push({
    path: routes.Project.ProjectDetails,
    query: { id: String(projectId), backTo: route.fullPath },
  });
}

async function showOpportunityReminder(showProjectList = true, allowSessionMute = false): Promise<void> {
  const count = missingCustomerProjects.value.length;
  if (!count) return;
  let muteForSession = false;
  const projectCards = missingCustomerProjects.value
    .map((project) => `
      <li class="win-reminder-project" data-project-id="${project.id}" tabindex="0" role="button" style="margin:0 0 8px;border:1px solid rgba(24,166,228,.18);border-radius:12px;padding:11px 13px;background:linear-gradient(105deg,#fff 0%,#f8fcfe 62%,rgba(24,166,228,.08) 100%);box-shadow:0 4px 12px rgba(31,92,120,.05);cursor:pointer;transition:border-color .18s ease,box-shadow .18s ease,transform .18s ease">
        <span style="display:flex;align-items:flex-start;gap:10px">
          <span style="display:grid;width:32px;height:32px;flex:0 0 32px;place-items:center;border-radius:9px;color:#159ed8;background:rgba(24,166,228,.09);font-size:14px;font-weight:800">W</span>
          <span style="display:block;min-width:0">
            <strong style="display:block;color:#243b53;font-size:13px;line-height:1.4">${escapeHtml(project.projectName || "Peluang tanpa nama")}</strong>
            <span style="display:block;margin-top:3px;color:#829ab1;font-size:11px;line-height:1.4">${escapeHtml(project.companyName || "Faskes belum tersedia")}</span>
            <span style="display:inline-block;margin-top:7px;border-radius:999px;padding:3px 8px;color:#087fae;background:rgba(24,166,228,.09);font-size:9px;font-weight:700">Data pelanggan belum diisi</span>
          </span>
        </span>
      </li>
    `)
    .join("");

  if (showProjectList) {
    await Swal.fire({
      title: `${count} peluang win perlu data pelanggan`,
      html: `<ul style="max-height:340px;margin:0;padding:2px 3px 0 0;overflow-y:auto;list-style:none;text-align:left">${projectCards}</ul>`,
      showConfirmButton: false,
      showCloseButton: true,
      customClass: { popup: "win-project-list-popup" },
      didOpen: (popup) => {
        popup.querySelectorAll<HTMLElement>(".win-reminder-project").forEach((card) => {
          const openCard = () => {
            const projectId = Number(card.dataset.projectId);
            if (!Number.isFinite(projectId) || projectId <= 0) return;
            Swal.close();
            openProjectDetail(projectId);
          };
          card.addEventListener("click", openCard);
          card.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              openCard();
            }
          });
        });
      },
    });
    return;
  }

  const popupContent = showProjectList
    ? `
      <p style="margin:0 0 10px;color:#64748b;font-size:13px">Peluang berikut sudah Win tetapi Data Pelanggannya belum dilengkapi:</p>
      <ul style="max-height:280px;margin:0;padding:0 3px 0 0;overflow-y:auto;list-style:none;text-align:left">${projectCards}</ul>
    `
    : '<p style="margin:0;color:#64748b;font-size:13px">Segera lengkapi Data Pelanggan agar proses pesanan dapat dilanjutkan.</p>';

  const result = await Swal.fire({
    icon: "info",
    title: `${count} peluang win perlu data pelanggan`,
    html: popupContent,
    confirmButtonText: "Lihat dan perbarui sekarang",
    showCancelButton: true,
    cancelButtonText: "Nanti",
    confirmButtonColor: "var(--theme-default)",
    customClass: allowSessionMute ? { popup: "win-reminder-popup" } : undefined,
    footer: allowSessionMute
      ? '<div style="width:100%;margin:0;padding-left:50px;text-align:left"><label for="mute-win-reminder" style="display:flex;align-items:center;gap:8px;margin:0;cursor:pointer;color:#64748b;font-size:12px"><input id="mute-win-reminder" type="checkbox" style="width:16px;height:16px;flex:0 0 16px;accent-color:var(--theme-default)" /> Jangan tampilkan untuk sesi ini</label></div>'
      : undefined,
    didOpen: () => {
      if (!allowSessionMute) return;
      const checkbox = document.getElementById("mute-win-reminder") as HTMLInputElement | null;
      checkbox?.addEventListener("change", () => {
        muteForSession = checkbox.checked;
      });
    },
  });

  if (muteForSession) sessionStorage.setItem(reminderSessionKey, "1");
  if (result.isConfirmed) await openWonStage();
}

async function loadOpportunityReminder(showAutomaticPopup: boolean): Promise<void> {
  // Reminder diambil dari BE dalam 1 call (`/project/wonmissingrequirements`).
  // BE sudah memfilter peluang Won sesuai scope user dan mengecek keberadaan
  // Data Pelanggan + Surat Pesanan, jadi FE tak perlu N call per peluang.
  let items: Awaited<ReturnType<typeof fetchWonMissingRequirements>> = [];
  try {
    items = await fetchWonMissingRequirements();
  } catch (error) {
    console.warn("Gagal memuat reminder peluang Win:", error);
    if (showAutomaticPopup) Swal.close();
    return;
  }

  wonMissingRequirements.value = Object.fromEntries(
    items
      .filter((item) => item.missing.length)
      .map((item) => [item.project_id, item.missing]),
  );
  missingCustomerProjects.value = items
    .filter((item) => item.missing_customer)
    .map((item) => ({
      id: item.project_id,
      projectName: item.project_name ?? item.projects_name ?? "",
      companyName: item.company_name ?? "",
    } as Projects));

  const count = missingCustomerProjects.value.length;
  if (!count) {
    if (showAutomaticPopup) Swal.close();
    return;
  }
  if (showAutomaticPopup) await showOpportunityReminder(false, true);
}

const ProjectDetails = defineAsyncComponent(
  () => import("@/module/project/projectList/ProjectDetails.vue"),
);

const validStages = new Set(["all", ...projectTab.map((stage) => stage.value)]);
const stageFromQuery = Array.isArray(route.query.stage)
  ? route.query.stage[0]
  : route.query.stage;
const activeTab = ref<string>(
  typeof stageFromQuery === "string" && validStages.has(stageFromQuery)
    ? stageFromQuery
    : "all",
);

watch(activeTab, (stage) => {
  const query = { ...route.query };
  if (stage === "all") delete query.stage;
  else query.stage = stage;
  void router.replace({ query });
});

watch(
  () => route.query.stage,
  (stageQuery) => {
    const stage = Array.isArray(stageQuery) ? stageQuery[0] : stageQuery;
    activeTab.value =
      typeof stage === "string" && validStages.has(stage) ? stage : "all";
  },
);

const STAGE_COLORS: Record<string, string> = {
  qualified: "#2563eb",
  presentation_demo: "#0891b2",
  quotation: "#d97706",
  negotiation: "#7c3aed",
  closed_won: "#16a34a",
  closed_lost: "#dc2626",
  closed_cancel: "#64748b",
};

const summaryProjects = computed(() => summaryItems.value);

// Seluruh angka ringkasan dan tahap merupakan hasil final dari backend.
const pipelineTotal = computed(() => ringkasan.value?.totalValue ?? 0);
const hasWidePipelineValue = computed(
  () => formatMoney(pipelineTotal.value).length >= 16,
);

const stageSummaryMap = computed(
  () => new Map(stageSummaries.value.map((stage) => [stage.status, stage])),
);

const stageCards = computed(() =>
  projectTab
    .filter((stage) => stage.value !== "all")
    .map((stage) => {
      const backendStage = stageSummaryMap.value.get(stage.value);
      return {
        value: stage.value,
        title: backendStage?.stageName || stage.title,
        color: STAGE_COLORS[stage.value] || "#94a3b8",
        quantity: backendStage?.quantity ?? 0,
        totalValue: backendStage?.totalValue ?? 0,
      };
    }),
);

const summaryTotal = computed(() => ringkasan.value?.totalPeluang ?? 0);
const activeProjectCount = computed(() => ringkasan.value?.totalAktif ?? 0);
const lostProjectCount = computed(() => ringkasan.value?.totalLostCancel ?? 0);
const activePipelineValue = computed(() => ringkasan.value?.valueAktif ?? 0);
const lostPipelineValue = computed(() => ringkasan.value?.valueLostCancel ?? 0);
const dominantStage = computed(() => {
  const terbanyak = ringkasan.value?.stageTerbanyak;
  return terbanyak
    ? {
        title: terbanyak.stageName || "Belum ada data",
        totalValue: terbanyak.totalValue,
        quantity: terbanyak.quantity,
      }
    : { title: "Belum ada data", totalValue: 0, quantity: 0 };
});
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

const filteredProjects = computed(() => {
  const source = summaryProjects.value;
  const query = searchQuery.value.trim().toLocaleLowerCase("id-ID");

  return source.filter((project) => {
    const matchesStage =
      activeTab.value === "all" || project.status === activeTab.value;
    const matchesOwner =
      ownerFilter.value === "all" || project.ownerName === ownerFilter.value;
    const contactNames = (project.contacts ?? [])
      .map((contact) => contact?.name ?? "")
      .filter((name) => name.trim() !== "");
    const primaryContactName = contactNames[0] ?? project.contactName ?? "";
    const searchableValues: Array<string | number | undefined> = [
      project.projectName,
      project.productNames,
      project.companyName,
      project.ownerName,
      primaryContactName,
      ...contactNames,
    ];
    const matchesSearch =
      !query ||
      searchableValues.some((value) =>
        String(value || "")
          .toLocaleLowerCase("id-ID")
          .includes(query),
      );
    return matchesStage && matchesOwner && matchesSearch;
  });
});


function formatTotal(total: number) {
  return new Intl.NumberFormat("id-ID").format(total);
}

function formatMoney(value: number) {
  if (!Number.isFinite(value)) return "Rp 0";
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    currencyDisplay: "narrowSymbol",
    minimumFractionDigits: 0,
    maximumFractionDigits: 20,
  }).format(value);
}

function selectStage(value: string) {
  activeTab.value = activeTab.value === value ? "all" : value;
}

</script>

<style scoped>
.project-list-page {
  --pipeline-blue: var(--theme-default, #18a6e4);
  padding-bottom: 28px;
}

:global(.win-reminder-popup .swal2-actions) {
  margin-bottom: 0;
}

:global(.win-reminder-popup .swal2-footer) {
  margin: 6px 0 0;
  border-top: 0;
  padding: 0 1em 1em;
}

:global(.win-project-list-popup .win-reminder-project:hover),
:global(.win-project-list-popup .win-reminder-project:focus-visible) {
  border-color: rgba(var(--app-primary-rgb, 24, 166, 228), 0.48) !important;
  box-shadow: 0 8px 20px rgba(var(--app-primary-rgb, 24, 166, 228), 0.13) !important;
  outline: none;
  transform: translateY(-1px);
}

.opportunity-reminder {
  display: grid;
  width: 100%;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 13px;
  margin-bottom: 18px;
  border: 1px solid rgba(var(--app-primary-rgb, 24, 166, 228), 0.2);
  border-radius: 15px;
  padding: 15px 18px;
  background: linear-gradient(105deg, #fff 0%, var(--app-primary-wash, #f8fcfe) 58%, rgba(var(--app-primary-rgb, 24, 166, 228), 0.1) 100%);
  box-shadow: 0 7px 20px rgba(31, 92, 120, 0.06);
  text-align: left;
  transition: border-color 0.18s ease, box-shadow 0.18s ease, transform 0.18s ease;
}

.opportunity-reminder:hover,
.opportunity-reminder:focus-visible {
  border-color: rgba(var(--app-primary-rgb, 24, 166, 228), 0.45);
  box-shadow: 0 10px 26px rgba(var(--app-primary-rgb, 24, 166, 228), 0.13);
  outline: none;
  transform: translateY(-1px);
}

.opportunity-reminder__icon {
  display: grid;
  width: 46px;
  height: 46px;
  place-items: center;
  border-radius: 13px;
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.09);
}

.opportunity-reminder__copy { display: block; min-width: 0; }
.opportunity-reminder__copy strong,
.opportunity-reminder__copy small { display: block; }
.opportunity-reminder__copy strong { color: var(--app-primary-deep, #032a4e); font-size: 14px; font-weight: 700; }
.opportunity-reminder__copy small { margin-top: 3px; color: #718096; font-size: 11px; }
.opportunity-reminder__arrow { color: var(--app-primary, #18a6e4); }

:global(body.dark-only) .opportunity-reminder {
  border-color: rgba(var(--app-primary-rgb, 24, 166, 228), 0.3);
  background: linear-gradient(105deg, #202730, #25313c);
}
:global(body.dark-only) .opportunity-reminder__copy strong { color: #eef3f6; }
:global(body.dark-only) .opportunity-reminder__copy small { color: #aab7c2; }

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
  height: 44px;
  min-height: 44px;
  max-height: 44px;
  box-sizing: border-box;
  flex: 0 0 auto;
  align-items: center;
  gap: 9px;
  border: 0;
  border-radius: 13px;
  padding: 6px 16px;
  color: #ffffff;
  background: linear-gradient(135deg, var(--app-secondary, #1ba5d5), var(--app-primary, #18a6e4));
  box-shadow:
    0 5px 0 var(--app-primary-border, #a9e5f6),
    0 10px 22px rgba(var(--app-primary-rgb, 24, 166, 228), 0.14);
  font-size: 12px;
  font-weight: 700;
  transition:
    box-shadow 0.18s ease,
    transform 0.18s ease;
}

.add-project-button .add-project-button__icon {
  flex: 0 0 19px;
  color: #ffffff !important;
  stroke: #ffffff !important;
  filter: brightness(0) invert(1);
}

.add-project-button:hover,
.add-project-button:focus-visible {
  color: #ffffff;
  box-shadow:
    0 4px 0 var(--app-primary-border, #a9e5f6),
    0 12px 25px rgba(var(--app-primary-rgb, 24, 166, 228), 0.2);
  transform: translateY(-1px);
}

.add-project-button:focus-visible {
  outline: 3px solid rgba(var(--app-primary-rgb, 24, 166, 228), 0.18);
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

.overview-metrics--wide-value {
  grid-template-columns: minmax(230px, 0.75fr) minmax(420px, 1.75fr);
}

.overview-metrics--wide-value .overview-card--composition {
  grid-column: 1 / -1;
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
  color: var(--app-primary-dark, #0284b8);
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

.pipeline-total-value {
  max-width: 100%;
  overflow-wrap: anywhere;
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
  flex-basis: 0;
  min-width: 0;
  border-right: 2px solid #ffffff;
  transition: flex-grow 0.25s ease;
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
  color: var(--app-primary, #0795c9);
  text-align: center;
}

.composition-legend span:last-child {
  color: #e85d68;
  text-align: right;
}

.pipeline-stage-panel {
  margin-top: 0;
  overflow: visible;
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
  box-shadow: 0 0 0 3px rgba(var(--app-primary-rgb, 24, 166, 228), 0.12);
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
  --stage-soft: rgba(var(--app-primary-rgb, 24, 166, 228), 0.08);
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
  container-type: inline-size;
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

.project-search .crm-search-icon {
  flex: 0 0 18px;
}

.project-search:focus-within {
  border-color: var(--app-primary, #18a6e4);
  box-shadow: 0 0 0 3px rgba(var(--app-primary-rgb, 24, 166, 228), 0.14);
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
  color: var(--app-primary, #18a6e4);
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

/* Kartu peluang memakai class khusus agar tidak bertabrakan dengan style card template. */
:deep(.opp-card) {
  --opp-stage: #475569;
  --opp-blue: var(--app-primary, #18a6e4);
  --opp-blue-soft: var(--app-primary-wash, #eef9fd);
  --opp-blue-border: var(--app-primary-border, #bde9f7);
  --opp-blue-glow: rgba(var(--app-primary-rgb, 24, 166, 228), 0.15);
  position: relative;
  isolation: isolate;
  display: grid;
  min-width: 0;
  height: 100%;
  overflow: visible;
  border: 1px solid #e2e8f0;
  border-radius: 18px;
  color: #172033;
  background: #ffffff;
  box-shadow: 0 8px 26px rgba(30, 48, 68, 0.07);
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

:deep(.opp-card:hover),
:deep(.opp-card:focus-visible) {
  border-color: var(--opp-blue-border);
  box-shadow: 0 16px 38px var(--opp-blue-glow);
  transform: translateY(-3px);
}

:deep(.opp-card:focus-visible) {
  outline: 3px solid var(--opp-blue-glow);
  outline-offset: 3px;
}

:deep(.opp-card--board) {
  grid-template-columns: minmax(0, 1fr) minmax(112px, 44%);
  grid-template-areas:
    "stage stage"
    "main main"
    "contact contact"
    "timing timing"
    "owner value"
    "audit audit";
  grid-template-rows: auto minmax(76px, auto) auto auto auto auto;
  padding: 21px 20px 18px;
}

:deep(.opp-card__stage) {
  grid-area: stage;
  display: flex;
  min-width: 0;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

:deep(.opp-stage-status) {
  display: inline-flex;
  min-width: 0;
  align-items: center;
  gap: 7px;
}

:deep(.opp-requirement-alert) {
  display: inline-grid;
  width: 24px;
  height: 24px;
  flex: 0 0 24px;
  place-items: center;
  border: 1px solid #fecaca;
  border-radius: 50%;
  color: #ffffff;
  background: #dc2626;
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
  font-size: 14px;
  font-weight: 850;
  line-height: 1;
  cursor: help;
}

:deep(.opp-stage-pill) {
  display: inline-flex;
  min-width: 0;
  align-items: center;
  gap: 7px;
  border: 1px solid color-mix(in srgb, var(--opp-stage) 28%, #ffffff);
  border-radius: 999px;
  padding: 6px 10px;
  color: var(--opp-stage);
  background: color-mix(in srgb, var(--opp-stage) 8%, #ffffff);
  font-size: 12px;
  font-weight: 750;
  letter-spacing: 0.025em;
  line-height: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

:deep(.opp-stage-pill__dot) {
  width: 7px;
  height: 7px;
  flex: 0 0 7px;
  border-radius: 50%;
  background: var(--opp-stage);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--opp-stage) 13%, transparent);
}

:deep(.opp-created) {
  display: inline-flex;
  min-width: 0;
  align-items: center;
  gap: 6px;
  color: #718096;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
}

:deep(.opp-created span) {
  overflow: hidden;
  text-overflow: ellipsis;
}

:deep(.opp-created svg) {
  color: #7b8794;
  stroke: currentColor;
}

:deep(.opp-card__main) {
  grid-area: main;
  display: block;
  min-width: 0;
}

:deep(.opp-card--board .opp-card__main) {
  margin-top: 16px;
  padding-bottom: 16px;
}

:deep(.opp-card__copy) {
  min-width: 0;
}

:deep(.opp-card__copy > small) {
  display: none;
  color: #94a3b8;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

:deep(.opp-card__copy h5) {
  display: -webkit-box;
  overflow: hidden;
  margin: 0 0 6px;
  color: #172033;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.38;
  overflow-wrap: anywhere;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

:deep(.opp-card__copy p) {
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 7px;
  margin: 0;
  color: #68768a;
  font-size: 13px;
}

:deep(.opp-card__copy p span) {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

:deep(.opp-card__address) {
  margin-top: 4px !important;
  color: #94a3b8 !important;
  font-size: 12px !important;
}

:deep(.opp-card__address svg) {
  flex: 0 0 13px;
  color: var(--opp-blue, #18a6e4);
  stroke: currentColor;
}

:deep(.opp-card--list .opp-card__address span) {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

:deep(.opp-card__owner) {
  grid-area: owner;
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 10px;
}

:deep(.opp-card--board .opp-card__owner) {
  border-top: 1px solid #edf1f5;
  padding: 13px 0;
}

:deep(.opp-avatar) {
  display: grid;
  width: 35px;
  height: 35px;
  flex: 0 0 35px;
  place-items: center;
  border: 2px solid #ffffff;
  border-radius: 50%;
  color: #ffffff;
  background: linear-gradient(145deg, var(--app-primary, #18a6e4), var(--app-primary-dark, #087eaf));
  box-shadow: 0 0 0 1px var(--opp-blue-border);
  font-size: 11px;
  font-style: normal;
  font-weight: 750;
}

:deep(.opp-avatar--owner) {
  background: var(--opp-blue);
}

:deep(.opp-card__owner > div),
:deep(.opp-contact-name),
:deep(.opp-contact-empty) {
  min-width: 0;
}

:deep(.opp-contact-name) {
  flex: 1 1 auto;
}

:deep(.opp-card__owner small),
:deep(.opp-card__timing small),
:deep(.opp-contact-name small),
:deep(.opp-contact-empty small),
:deep(.opp-card__value small) {
  display: block;
  margin-bottom: 3px;
  color: #94a3b8;
  font-size: 11px;
  font-weight: 600;
  line-height: 1.2;
}

:deep(.opp-card__owner strong),
:deep(.opp-contact-name strong),
:deep(.opp-contact-empty strong) {
  display: block;
  overflow: hidden;
  color: #2d3748;
  font-size: 13px;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* ───── Dibuat / Diperbarui oleh di bawah Owner ─────────────────────
 * Dua varian:
 *   - .opp-owner-audit--board : sejajar (grid 2 kolom) di kartu board
 *   - .opp-owner-audit--list  : vertikal (kebawah) di kartu list, ukuran
 *                               label lebih kecil dari "Owner"
 */
:deep(.opp-owner-audit) {
  margin-top: 8px;
  min-width: 0;
}
:deep(.opp-owner-audit__item) {
  display: block;
  min-width: 0;
}
:deep(.opp-owner-audit__item small) {
  display: block;
  margin-bottom: 2px;
  color: #94a3b8;
  font-size: 10px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: 0.2px;
}
:deep(.opp-owner-audit__item strong) {
  display: block;
  overflow: hidden;
  color: #475569;
  font-size: 11.5px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* List: menumpuk ke bawah, label lebih kecil dari "Owner". */
:deep(.opp-owner-audit--list) {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

/* Board: section "Dibuat oleh" + "Diperbarui oleh" di baris paling bawah
 * (grid-area: audit), bentuk pil sama persis dengan .opp-card__timing. */
:deep(.opp-card__audit) {
  grid-area: audit;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  min-width: 0;
  gap: 9px;
  margin-top: 13px;
  padding-top: 13px;
  border-top: 1px solid #edf1f5;
}

:deep(.opp-card--list .opp-card__audit) {
  display: none;
}
:deep(.opp-card__audit > div) {
  display: block;
  min-width: 0;
  border-radius: 10px;
  padding: 9px 10px;
  background: #f7f9fb;
}
:deep(.opp-card__audit small) {
  display: block;
  margin-bottom: 3px;
  color: #94a3b8;
  font-size: 11px;
  font-weight: 600;
  line-height: 1.2;
}
:deep(.opp-card__audit strong) {
  display: block;
  overflow: hidden;
  color: #2d3748;
  font-size: 13px;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
}

:deep(.opp-card__timing) {
  grid-area: timing;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  min-width: 0;
  gap: 9px;
}

:deep(.opp-card--board .opp-card__timing) {
  border-top: 1px solid #edf1f5;
  padding: 13px 0;
}

:deep(.opp-card__timing > div) {
  display: block;
  min-width: 0;
  border-radius: 10px;
  padding: 9px 10px;
  background: #f7f9fb;
}

:deep(.opp-card__timing strong) {
  display: block;
  overflow: hidden;
  color: #3f4b5c;
  font-size: 12px;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
}

:deep(.opp-card__contact) {
  grid-area: contact;
  position: relative;
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 9px;
}

:deep(.opp-card--board .opp-card__contact) {
  border-top: 1px solid #edf1f5;
  padding-top: 14px;
}

:deep(.opp-more-contacts) {
  position: relative;
  flex: 0 0 auto;
}

:deep(.opp-more-contacts > button) {
  display: grid;
  width: 29px;
  height: 29px;
  place-items: center;
  border: 1px solid #dce4eb;
  border-radius: 9px;
  padding: 0;
  color: #64748b;
  background: #f8fafc;
  transition: 0.18s ease;
}

:deep(.opp-more-contacts > button:hover),
:deep(.opp-more-contacts > button:focus-visible) {
  border-color: var(--opp-blue-border);
  color: var(--opp-blue);
  background: var(--opp-blue-soft);
  outline: 0;
}

:deep(.opp-contact-popover) {
  position: absolute;
  z-index: 30;
  right: 0;
  bottom: calc(100% + 9px);
  display: none;
  width: 250px;
  border: 1px solid #dce5ec;
  border-radius: 13px;
  padding: 10px;
  background: #ffffff;
  box-shadow: 0 16px 38px rgba(30, 48, 68, 0.18);
}

:deep(.opp-more-contacts:hover .opp-contact-popover),
:deep(.opp-more-contacts:focus-within .opp-contact-popover) {
  display: grid;
  gap: 3px;
}

:deep(.opp-contact-popover > p) {
  margin: 0 0 5px;
  padding: 2px 5px 7px;
  border-bottom: 1px solid #edf1f5;
  color: #64748b;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

:deep(.opp-contact-popover > div) {
  display: grid;
  grid-template-columns: 30px minmax(0, 1fr);
  align-items: center;
  gap: 9px;
  border-radius: 9px;
  padding: 6px 5px;
}

:deep(.opp-contact-popover > div:hover) {
  background: var(--opp-blue-soft);
}

:deep(.opp-avatar--small) {
  width: 29px;
  height: 29px;
  flex-basis: 29px;
  font-size: 8px;
}

:deep(.opp-contact-popover strong),
:deep(.opp-contact-popover small) {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

:deep(.opp-contact-popover strong) {
  color: #283548;
  font-size: 10px;
}

:deep(.opp-contact-popover small) {
  margin-top: 2px;
  color: #8a97a8;
  font-size: 9px;
}

:deep(.opp-card__value) {
  grid-area: value;
  min-width: 0;
  text-align: right;
}

:deep(.opp-card--board .opp-card__value) {
  border-top: 1px solid #edf1f5;
  padding-top: 14px;
}

:deep(.opp-card__value strong) {
  display: block;
  overflow: hidden;
  color: var(--opp-blue);
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -0.015em;
  text-overflow: ellipsis;
  white-space: nowrap;
}

:deep(.opp-card__value > span) {
  display: none;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  margin-top: 5px;
  color: var(--opp-blue);
  font-size: 10px;
  font-weight: 650;
}

/* Mode list: satu baris informatif, bukan kartu board yang dilebarkan. */
:deep(.opp-card--list) {
  display: block;
  min-height: 0;
  padding: 0;
}

:deep(.opp-list-layout),
:deep(.opp-list-footer),
:deep(.opp-list-cell),
:deep(.opp-list-contact),
:deep(.opp-list-footer > div),
:deep(.opp-list-footer span) {
  min-width: 0;
}

:deep(.opp-list-layout) {
  display: grid;
  grid-template-columns: minmax(145px, 0.62fr) minmax(0, 1.18fr) minmax(210px, 0.78fr);
  padding: 8px 20px;
}

:deep(.opp-list-project-header) {
  grid-column: 1 / 4;
  grid-row: 1;
  min-width: 0;
  padding: 12px 0 15px;
}

:deep(.opp-list-cell--status) {
  grid-column: 1;
  grid-row: 2;
}

:deep(.opp-list-cell--hospital) {
  grid-column: 2;
  grid-row: 2;
}

:deep(.opp-list-cell--estimate) {
  grid-column: 1;
  grid-row: 3;
}

:deep(.opp-list-cell--address) {
  grid-column: 2;
  grid-row: 3;
}

:deep(.opp-list-cell--stage-time) {
  grid-column: 1;
  grid-row: 4;
}

:deep(.opp-list-cell--value) {
  grid-column: 2;
  grid-row: 4;
}

:deep(.opp-list-cell) {
  display: flex;
  min-height: 61px;
  justify-content: center;
  flex-direction: column;
  padding: 10px 16px;
}

:deep(.opp-list-cell--status),
:deep(.opp-list-cell--estimate),
:deep(.opp-list-cell--stage-time) {
  padding-left: 0;
}

:deep(.opp-list-cell--hospital),
:deep(.opp-list-cell--address),
:deep(.opp-list-cell--value) {
  padding-right: 0;
}

:deep(.opp-list-project-header small),
:deep(.opp-list-cell small),
:deep(.opp-list-footer small) {
  display: block;
  margin-bottom: 4px;
  color: #94a3b8;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.035em;
  line-height: 1.2;
  text-transform: uppercase;
}

:deep(.opp-list-project-header > strong),
:deep(.opp-list-cell > strong),
:deep(.opp-list-footer strong) {
  display: block;
  overflow: hidden;
  color: #2d3748;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.4;
  text-overflow: ellipsis;
  white-space: nowrap;
}

:deep(.opp-list-project-header > strong) {
  display: -webkit-box;
  color: #172033;
  font-size: 18px;
  line-height: 1.4;
  overflow-wrap: anywhere;
  white-space: normal;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

:deep(.opp-list-cell--status .opp-stage-status) {
  width: fit-content;
  max-width: 100%;
}

:deep(.opp-list-cell--value > strong) {
  color: var(--opp-blue);
  font-size: 18px;
  font-weight: 800;
}

:deep(.opp-list-contact) {
  grid-column: 3;
  grid-row: 2 / 5;
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0 0 0 20px;
  padding: 11px 0 10px;
  text-align: left;
}

:deep(.opp-list-contact > small) {
  display: inline-flex;
  width: 100%;
  align-items: center;
  gap: 7px;
  margin-bottom: 10px;
  color: var(--opp-blue);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.055em;
  text-transform: uppercase;
}

:deep(.opp-list-contact > small::before) {
  width: 6px;
  height: 6px;
  flex: 0 0 6px;
  border-radius: 50%;
  background: var(--opp-blue);
  box-shadow: 0 0 0 4px var(--opp-blue-soft);
  content: "";
}

:deep(.opp-list-contact__items) {
  display: grid;
  width: 100%;
  gap: 8px;
}

:deep(.opp-list-contact__items > div) {
  display: grid;
  grid-template-columns: 22px minmax(0, 1fr);
  min-width: 0;
  align-items: center;
  gap: 8px;
  padding: 0;
  text-align: left;
}

:deep(.opp-list-contact__items strong),
:deep(.opp-list-contact__items > div > span) {
  display: block;
  overflow: hidden;
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
}

:deep(.opp-list-contact__items strong) {
  color: #2d3748;
  font-size: 12px;
  font-weight: 750;
  line-height: 1.4;
}

:deep(.opp-list-contact__items > div > span) {
  display: grid;
  width: 22px;
  height: 22px;
  place-items: center;
  border-radius: 7px;
  color: var(--opp-blue);
  background: var(--opp-blue-soft);
  font-size: 10px;
  font-weight: 800;
  text-align: center;
}

:deep(.opp-list-contact__detail),
:deep(.opp-list-contact__empty) {
  display: block;
  overflow: hidden;
  max-width: 100%;
  margin-top: 5px;
  color: #829ab1;
  font-size: 11px;
  line-height: 1.4;
  text-overflow: ellipsis;
  white-space: nowrap;
}

:deep(.opp-list-contact__more) {
  display: inline-flex;
  width: fit-content;
  margin: 10px 0 0 30px;
  padding: 0;
  color: var(--opp-blue);
  font-size: 10px;
  font-weight: 700;
}

:deep(.opp-list-footer) {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-radius: 0 0 18px 18px;
  padding: 15px 20px 17px;
  background: #f8fafc;
}

:deep(.opp-list-footer > div) {
  display: flex;
  min-height: 42px;
  justify-content: center;
  flex-direction: column;
  border-right: 1px solid #e2e8f0;
  padding: 0 18px;
}

:deep(.opp-list-footer > div:first-child) {
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 10px;
  padding-left: 0;
}

:deep(.opp-list-footer > div:last-child) {
  border-right: 0;
  padding-right: 0;
}

:deep(.opp-list-footer > div:first-child > span:last-child) {
  min-width: 0;
}

:deep(.opp-list-footer__date) {
  display: block;
  overflow: hidden;
  margin-top: 3px;
  color: #94a3b8;
  font-size: 10px;
  line-height: 1.3;
  text-overflow: ellipsis;
  white-space: nowrap;
}

:global(body.dark-only) :deep(.opp-list-footer) {
  background: var(--mhj-dark-surface-muted, #17212d);
}

:global(body.dark-only) :deep(.opp-list-footer > div) {
  border-color: var(--mhj-dark-divider, rgba(255, 255, 255, 0.12));
}

:global(body.dark-only) :deep(.opp-list-project-header > strong),
:global(body.dark-only) :deep(.opp-list-cell > strong),
:global(body.dark-only) :deep(.opp-list-contact__items strong),
:global(body.dark-only) :deep(.opp-list-footer strong) {
  color: var(--mhj-dark-text, #f1f5f9);
}

:global(body.dark-only) :deep(.opp-list-contact__items > div > span) {
  color: var(--mhj-dark-text-muted, #b6c2d0);
}

:global(body.dark-only) :deep(.opp-list-project-header small),
:global(body.dark-only) :deep(.opp-list-cell small),
:global(body.dark-only) :deep(.opp-list-contact > small),
:global(body.dark-only) :deep(.opp-list-contact__detail),
:global(body.dark-only) :deep(.opp-list-contact__empty),
:global(body.dark-only) :deep(.opp-list-footer small) {
  color: var(--mhj-dark-text-muted, #b6c2d0);
}

:global(body.dark-only) :deep(.opp-list-footer__date) {
  color: var(--mhj-dark-text-muted, #b6c2d0);
}

:global(body.dark-only) :deep(.opp-list-cell--value > strong) {
  color: var(--app-primary-soft-light, #b9e8fa);
}

:deep(.opp-card--list .opp-card__stage) {
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 9px;
}

:deep(.opp-card--list .opp-card__main) {
  display: block;
}

:deep(.opp-card--list .opp-card__copy > small) {
  display: block;
  margin-bottom: 3px;
}

:deep(.opp-card--list .opp-card__copy h5) {
  margin-bottom: 5px;
  font-size: 15px;
  -webkit-line-clamp: 1;
}

:deep(.opp-card--list .opp-card__owner),
:deep(.opp-card--list .opp-card__timing),
:deep(.opp-card--list .opp-card__contact) {
  min-height: 58px;
  border-left: 1px solid #edf1f5;
  padding-left: 15px;
}

:deep(.opp-card--list .opp-card__contact) {
  min-height: 0;
  border-left: 0;
  padding-left: 0;
}

:deep(.opp-card--list .opp-card__contact .opp-avatar) {
  width: 30px;
  height: 30px;
  flex-basis: 30px;
}

:deep(.opp-card--list .opp-card__timing) {
  grid-template-columns: 1fr;
  align-content: center;
  gap: 8px;
}

:deep(.opp-card--list .opp-card__timing > div) {
  padding: 5px 8px;
}

:deep(.opp-card--list .opp-card__value) {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 8px 16px;
  margin-top: 8px;
  border-top: 1px solid #edf1f5;
  border-left: 0;
  border-radius: 12px;
  padding: 12px 14px;
  background: linear-gradient(90deg, var(--opp-blue-soft), transparent 72%);
  text-align: left;
}

:deep(.opp-card--list .opp-card__value small) {
  margin: 0;
  white-space: nowrap;
}

:deep(.opp-card--list .opp-card__value strong) {
  min-width: 0;
  overflow: hidden;
  font-size: clamp(16px, 2vw, 20px);
  text-align: right;
  text-overflow: ellipsis;
  white-space: nowrap;
}

:deep(.opp-card--list .opp-card__value > span) {
  display: inline-flex;
  margin-top: 0;
  white-space: nowrap;
}

:deep(.opp-card--list .opp-contact-popover) {
  right: 0;
  bottom: auto;
  top: calc(100% + 9px);
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
  color: var(--app-primary, #18a6e4);
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

:global(body.dark-only .project-pagination-card) {
  border-color: var(--mhj-dark-divider, rgba(255, 255, 255, 0.14));
  background: var(--mhj-dark-surface-muted, #17212d);
}

:global(body.dark-only .project-page-summary),
:global(body.dark-only .pagination-ellipsis) {
  color: var(--mhj-dark-text-muted, #b6c2d0) !important;
}

:global(body.dark-only .project-pagination-card .pagination-button) {
  border-color: var(--mhj-dark-border, rgba(var(--app-primary-rgb, 24, 166, 228), 0.3));
  color: var(--app-primary-soft-light, #b9e8fa);
  background: var(--mhj-dark-surface-raised, #233244);
}

:global(body.dark-only .project-pagination-card .pagination-button:hover:not(:disabled)),
:global(body.dark-only .project-pagination-card .pagination-button:focus-visible) {
  border-color: var(--theme-default, var(--app-primary, #18a6e4));
  color: var(--mhj-dark-text, #f1f5f9);
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.2);
}

:global(body.dark-only .project-pagination-card .pagination-button:disabled) {
  color: var(--mhj-dark-text-muted, #b6c2d0);
  opacity: 0.7;
}

:global(body.dark-only .project-pagination-card .pagination-page-button--active),
:global(body.dark-only .project-pagination-card .pagination-page-button--active:disabled) {
  border-color: var(--theme-default, var(--app-primary, #18a6e4)) !important;
  color: #fff !important;
  background: var(--theme-default, var(--app-primary, #18a6e4)) !important;
  opacity: 1;
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
  border-color: var(--app-primary, #18a6e4);
  color: var(--app-primary, #18a6e4);
}

.pagination-page-button--active,
.pagination-page-button--active:disabled {
  border-color: var(--app-primary, #18a6e4);
  background: var(--app-primary, #18a6e4);
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

  :deep(.opp-card--list) {
    grid-template-columns: 130px minmax(220px, 1fr) minmax(190px, 0.8fr);
    grid-template-areas:
      "stage main main"
      "stage contact contact"
      "owner timing value";
    gap: 14px 18px;
    padding: 19px 20px 18px;
  }

  :deep(.opp-card--list .opp-card__owner),
  :deep(.opp-card--list .opp-card__timing),
  :deep(.opp-card--list .opp-card__contact),
  :deep(.opp-card--list .opp-card__value) {
    min-height: 52px;
    border-top: 1px solid #edf1f5;
    border-left: 0;
    padding-top: 12px;
    padding-left: 0;
  }

  :deep(.opp-card--list .opp-card__timing) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  :deep(.opp-card--list .opp-card__contact) {
    min-height: 0;
    border-top: 0;
    padding-top: 0;
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

  :deep(.opp-card--list),
  :deep(.opp-card--board) {
    grid-template-columns: minmax(0, 1fr) auto;
    grid-template-areas:
      "stage stage"
      "main main"
      "contact contact"
      "timing timing"
      "owner value"
      "audit audit";
    grid-template-rows: auto;
    gap: 0;
    min-height: 0;
    padding: 20px 18px 17px;
  }

  :deep(.opp-card--list .opp-card__stage) {
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

  :deep(.opp-card--list .opp-card__main),
  :deep(.opp-card--board .opp-card__main) {
    margin-top: 15px;
    padding-bottom: 15px;
  }

  :deep(.opp-card--list .opp-card__copy > small) {
    display: none;
  }

  :deep(.opp-card--list .opp-card__copy h5) {
    font-size: 14px;
    -webkit-line-clamp: 2;
  }

  :deep(.opp-card--list .opp-card__owner),
  :deep(.opp-card--list .opp-card__timing),
  :deep(.opp-card--list .opp-card__contact),
  :deep(.opp-card--list .opp-card__value) {
    min-height: 0;
    border-top: 1px solid #edf1f5;
    border-left: 0;
    padding: 13px 0;
  }

  :deep(.opp-card--list .opp-card__timing) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  :deep(.opp-card--list .opp-card__value) {
    align-items: flex-end;
    padding-left: 12px;
  }

  :deep(.opp-card--list .opp-card__value > span) {
    display: none;
  }

  :deep(.opp-card--list .opp-contact-popover) {
    top: auto;
    bottom: calc(100% + 9px);
  }
}

@media (max-width: 575.98px) {
  .opportunity-reminder { padding: 12px; }
  .opportunity-reminder__icon { width: 40px; height: 40px; }
  .opportunity-reminder__copy strong { font-size: 13px; }
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

/* Mode list mengikuti lebar area hasil, bukan viewport yang masih termasuk sidebar. */
@container (max-width: 980px) {
  :deep(.opp-card--list) {
    grid-template-columns: minmax(105px, 0.55fr) minmax(0, 1fr) minmax(150px, 0.72fr);
    grid-template-areas:
      "stage main main"
      "stage contact contact"
      "owner timing timing"
      "value value value";
    gap: 14px 18px;
    padding: 19px 20px 18px;
  }

  :deep(.opp-card--list .opp-card__owner),
  :deep(.opp-card--list .opp-card__timing) {
    min-height: 52px;
    border-top: 1px solid #edf1f5;
    border-left: 0;
    padding-top: 12px;
    padding-left: 0;
  }

  :deep(.opp-card--list .opp-card__contact) {
    min-height: 0;
    border: 0;
    padding: 0;
  }

  :deep(.opp-card--list .opp-card__timing) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@container (max-width: 650px) {
  :deep(.opp-card--list),
  :deep(.opp-card--board) {
    grid-template-columns: minmax(0, 1fr) minmax(110px, 42%);
    grid-template-areas:
      "stage stage"
      "main main"
      "contact contact"
      "timing timing"
      "owner value"
      "audit audit";
    grid-template-rows: auto;
    gap: 0;
    min-height: 0;
    padding: 20px 18px 17px;
  }

  :deep(.opp-card--list .opp-card__stage) {
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

  :deep(.opp-card--list .opp-card__main),
  :deep(.opp-card--board .opp-card__main) {
    margin-top: 15px;
    padding-bottom: 15px;
  }

  :deep(.opp-card--list .opp-card__copy > small) {
    display: none;
  }

  :deep(.opp-card--list .opp-card__copy h5) {
    font-size: 17px;
    -webkit-line-clamp: 2;
  }

  :deep(.opp-card--list .opp-card__owner),
  :deep(.opp-card--list .opp-card__timing),
  :deep(.opp-card--list .opp-card__contact) {
    min-height: 0;
    border-top: 1px solid #edf1f5;
    border-left: 0;
    padding: 13px 0;
  }

  :deep(.opp-card--list .opp-card__timing) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  :deep(.opp-card--list .opp-card__contact) {
    padding: 14px 0 0;
  }

  :deep(.opp-card--list .opp-card__contact .opp-avatar) {
    width: 35px;
    height: 35px;
    flex-basis: 35px;
  }

  :deep(.opp-card--list .opp-card__value) {
    display: block;
    margin-top: 0;
    border-top: 1px solid #edf1f5;
    border-radius: 0;
    padding: 14px 0 0 12px;
    background: transparent;
    text-align: right;
  }

  :deep(.opp-card--list .opp-card__value small) {
    margin-bottom: 3px;
  }

  :deep(.opp-card--list .opp-card__value strong) {
    font-size: 20px;
    text-align: right;
  }

  :deep(.opp-card--list .opp-card__value > span),
  :deep(.opp-card--list .opp-owner-audit--list) {
    display: none;
  }

  :deep(.opp-card--list .opp-card__audit) {
    display: grid;
  }
}

@container (max-width: 430px) {
  :deep(.opp-card--list),
  :deep(.opp-card--board) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas:
      "stage"
      "main"
      "contact"
      "timing"
      "owner"
      "value"
      "audit";
  }

  :deep(.opp-card__stage) {
    align-items: flex-start;
    flex-wrap: wrap;
  }

  :deep(.opp-stage-status) {
    max-width: 100%;
  }

  :deep(.opp-card__timing),
  :deep(.opp-card__audit) {
    grid-template-columns: minmax(0, 1fr);
  }

  :deep(.opp-card--list .opp-card__value),
  :deep(.opp-card--board .opp-card__value) {
    align-items: flex-start;
    border-top: 1px solid #edf1f5;
    padding: 13px 0 0;
    text-align: left;
  }

  :deep(.opp-card__value strong) {
    max-width: 100%;
    font-size: 18px;
  }

  :deep(.opp-card--list .opp-card__value strong) {
    text-align: left;
  }
}

@container (max-width: 650px) {
  :deep(.opp-card--list) {
    display: block;
    padding: 0;
  }

  :deep(.opp-list-layout) {
    grid-template-columns: minmax(112px, 0.72fr) minmax(0, 1.28fr);
    padding-inline: 16px;
  }

  :deep(.opp-list-project-header) {
    grid-column: 1 / -1;
    grid-row: 1;
  }

  :deep(.opp-list-cell--status) {
    grid-column: 1;
    grid-row: 2;
  }

  :deep(.opp-list-cell--hospital) {
    grid-column: 2;
    grid-row: 2;
  }

  :deep(.opp-list-cell--estimate) {
    grid-column: 1;
    grid-row: 3;
  }

  :deep(.opp-list-cell--address) {
    grid-column: 2;
    grid-row: 3;
  }

  :deep(.opp-list-cell--stage-time) {
    grid-column: 1;
    grid-row: 4;
  }

  :deep(.opp-list-cell--value) {
    grid-column: 2;
    grid-row: 4;
  }

  :deep(.opp-list-contact) {
    grid-column: 1 / -1;
    grid-row: 5;
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
    justify-items: start;
    gap: 3px 10px;
    margin: 10px 0 8px;
    padding: 14px;
    text-align: left;
  }

  :deep(.opp-list-contact > small) {
    grid-column: 1 / -1;
    margin-bottom: 0;
  }

  :deep(.opp-list-contact__items),
  :deep(.opp-list-contact__empty) {
    grid-column: 1;
    margin-top: 0;
    text-align: left;
  }

  :deep(.opp-list-contact__items:first-of-type) {
    grid-column: 1;
  }

  :deep(.opp-list-contact__more) {
    grid-column: 2;
    grid-row: 2;
    margin-top: 0;
    white-space: nowrap;
  }

  :deep(.opp-list-cell) {
    min-height: 58px;
    padding-inline: 12px;
  }

  :deep(.opp-list-cell--status),
  :deep(.opp-list-cell--estimate),
  :deep(.opp-list-cell--stage-time) {
    padding-left: 0;
  }

  :deep(.opp-list-cell--hospital),
  :deep(.opp-list-cell--address),
  :deep(.opp-list-cell--value) {
    padding-right: 0;
  }

  :deep(.opp-list-project-header > strong) {
    font-size: 16px;
  }

  :deep(.opp-list-cell--value > strong) {
    font-size: 16px;
  }

  :deep(.opp-list-footer) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    padding: 13px 16px 15px;
  }

  :deep(.opp-list-footer > div),
  :deep(.opp-list-footer > div:first-child),
  :deep(.opp-list-footer > div:last-child) {
    min-height: 42px;
    padding: 0 9px;
  }

  :deep(.opp-list-footer > div:first-child) {
    align-items: flex-start;
    flex-direction: column;
    gap: 0;
    padding-left: 0;
  }

  :deep(.opp-list-footer > div:last-child) {
    padding-right: 0;
  }

  :deep(.opp-list-footer .opp-avatar) {
    display: none;
  }

  :deep(.opp-list-footer strong) {
    font-size: 11px;
  }
}
</style>
