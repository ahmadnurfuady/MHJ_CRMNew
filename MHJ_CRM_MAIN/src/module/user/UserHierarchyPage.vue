<template>
  <div class="card">
    <div class="card-header card-no-border d-flex align-items-center gap-3">
      <router-link :to="routes.User.UserList" class="btn btn-light btn-sm">
        <vue-feather type="arrow-left" size="15" class="me-1" />
        Kembali
      </router-link>
      <div>
        <h4 class="mb-0">Hierarki Pengguna</h4>
        <p class="f-m-light mt-1 mb-0">Struktur atasan dan bawahan berdasarkan jabatan.</p>
      </div>
    </div>

    <div class="card-body">

      <!-- Loading -->
      <div v-if="loading" class="text-center py-5">
        <LoadingSpinner text="Memuat data hierarki..." />
      </div>

      <!-- Error -->
      <div v-else-if="error" class="alert alert-light-danger border-left-danger">
        <i class="fa fa-exclamation-triangle me-2"></i>{{ error }}
      </div>

      <!-- Konten hierarki -->
      <div v-else-if="data" class="hierarchy-tree">

        <!-- ── Atasan ─────────────────────────────────────── -->
        <section class="h-section">
          <div class="h-section__label">
            <vue-feather type="chevrons-up" size="14" class="me-1" />
            Atasan Langsung
          </div>

          <p v-if="data.atasan.length === 0" class="h-empty">
            Tidak ada atasan langsung
          </p>

          <div
            v-for="person in data.atasan"
            :key="person.id"
            class="h-card h-card--atasan"
          >
            <div class="h-avatar h-avatar--blue-light">
              <vue-feather type="user" size="18" />
            </div>
            <div>
              <div class="fw-semibold f-14">{{ person.name }}</div>
              <div class="f-12 text-muted">{{ person.nama_jabatan || '—' }}</div>
            </div>
          </div>
        </section>

        <!-- Konektor atas → current -->
        <div class="h-connector" aria-hidden="true">
          <div class="h-connector__line"></div>
          <vue-feather type="chevron-down" size="14" class="h-connector__arrow" />
        </div>

        <!-- ── Pengguna ini (focal point) ──────────────────── -->
        <section class="h-section">
          <div class="h-section__label">
            <vue-feather type="user-check" size="14" class="me-1" />
            Pengguna Ini
          </div>
          <div class="h-card h-card--current">
            <div class="h-avatar h-avatar--white">
              <vue-feather type="user" size="18" />
            </div>
            <div>
              <div class="fw-bold f-15">{{ data.current_user.name }}</div>
              <div class="f-12" style="color: rgba(255,255,255,.75);">
                {{ data.current_user.nama_jabatan || '—' }}
              </div>
            </div>
          </div>
        </section>

        <!-- Konektor current → bawahan -->
        <div class="h-connector" aria-hidden="true">
          <vue-feather type="chevron-down" size="14" class="h-connector__arrow" />
          <div class="h-connector__line"></div>
        </div>

        <!-- ── Bawahan (dikelompokkan per jabatan) ──────────── -->
        <section class="h-section">
          <div class="h-section__label">
            <vue-feather type="chevrons-down" size="14" class="me-1" />
            Semua Bawahan
          </div>

          <p v-if="data.bawahan.length === 0" class="h-empty">
            Tidak ada bawahan
          </p>

          <div
            v-for="group in bawahanByJabatan"
            :key="group.jabatan"
            class="bawahan-group"
          >
            <!-- Header jabatan -->
            <div class="bawahan-group__header">
              <vue-feather type="briefcase" size="13" class="me-1 flex-shrink-0" />
              <span class="fw-bold">{{ group.jabatan }}</span>
              <span class="bawahan-group__badge">{{ group.members.length }}</span>
            </div>

            <!-- List nama dalam satu kotak -->
            <ul class="bawahan-group__list">
              <li
                v-for="person in group.members"
                :key="person.id"
                class="bawahan-group__item"
              >
                <vue-feather type="user" size="13" class="flex-shrink-0 text-muted" />
                <span class="f-14">{{ person.name }}</span>
              </li>
            </ul>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import { routes } from '@/router/routes'
import { getUserHierarchy } from '@/services/userService'
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue'
import type { HierarchyUser, UserHierarchyResponse } from '@/types/user'

const route = useRoute()

const loading = ref(true)
const error = ref<string | null>(null)
const data = ref<UserHierarchyResponse | null>(null)

const userId = computed(() => {
  const raw = Array.isArray(route.query.id) ? route.query.id[0] : route.query.id
  const n = Number(raw)
  return Number.isFinite(n) && n > 0 ? n : null
})

/** Kelompokkan bawahan berdasarkan nama_jabatan, urutan kemunculan pertama dipertahankan. */
const bawahanByJabatan = computed<Array<{ jabatan: string; members: HierarchyUser[] }>>(() => {
  if (!data.value?.bawahan.length) return []
  const map = new Map<string, HierarchyUser[]>()
  for (const person of data.value.bawahan) {
    const key = person.nama_jabatan?.trim() || 'Tanpa Jabatan'
    const bucket = map.get(key) ?? []
    bucket.push(person)
    map.set(key, bucket)
  }
  return Array.from(map.entries()).map(([jabatan, members]) => ({ jabatan, members }))
})

onMounted(async () => {
  if (userId.value === null) {
    error.value = 'ID pengguna tidak ditemukan. Kembali ke halaman User List dan coba lagi.'
    loading.value = false
    return
  }
  try {
    data.value = await getUserHierarchy(userId.value)
  } catch {
    error.value = 'Gagal memuat data hierarki. Silakan coba lagi.'
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
/* ─── Layout pohon ─────────────────────────────────────────────────────── */
.hierarchy-tree {
  display: flex;
  flex-direction: column;
  max-width: 520px;
  margin: 0 auto;
}

/* ─── Section wrapper ──────────────────────────────────────────────────── */
.h-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.h-section__label {
  display: flex;
  align-items: center;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #6c757d;
  margin-bottom: 0.15rem;
}

.h-empty {
  font-size: 0.875rem;
  color: #6c757d;
  font-style: italic;
  margin: 0;
}

/* ─── Konektor ─────────────────────────────────────────────────────────── */
.h-connector {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.1rem 0;
  color: rgba(24, 166, 228, 0.5);
}

.h-connector__line {
  width: 2px;
  height: 20px;
  background: rgba(24, 166, 228, 0.35);
}

.h-connector__arrow {
  color: rgba(24, 166, 228, 0.55);
}

/* ─── Card generik ─────────────────────────────────────────────────────── */
.h-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.7rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e9ecef;
}

/* Atasan */
.h-card--atasan {
  border-color: rgba(24, 166, 228, 0.3);
  background: rgba(24, 166, 228, 0.05);
}

/* Focal point */
.h-card--current {
  border-color: #18A6E4;
  background: linear-gradient(135deg, #18A6E4 0%, #127CAB 100%);
  color: #fff;
  box-shadow: 0 4px 16px rgba(24, 166, 228, 0.28);
}

/* ─── Avatar ───────────────────────────────────────────────────────────── */
.h-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  flex-shrink: 0;
}

.h-avatar--blue-light {
  background: rgba(24, 166, 228, 0.15);
  color: #18A6E4;
}

.h-avatar--white {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
}

/* ─── Grup jabatan bawahan ─────────────────────────────────────────────── */
.bawahan-group {
  border: 1px solid #e9ecef;
  border-radius: 0.5rem;
  overflow: hidden;
}

.bawahan-group + .bawahan-group {
  margin-top: 0.6rem;
}

.bawahan-group__header {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.5rem 0.85rem;
  background: rgba(3, 42, 78, 0.06);
  border-bottom: 1px solid #e9ecef;
  border-left: 3px solid #18A6E4;
  font-size: 0.8rem;
  color: #032A4E;
  text-transform: uppercase;
  letter-spacing: 0.4px;
}

.bawahan-group__badge {
  margin-left: auto;
  background: #18A6E4;
  color: #fff;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 0.1rem 0.45rem;
  border-radius: 999px;
  line-height: 1.5;
}

/* List nama dalam satu kotak (tanpa kartu per-orang) */
.bawahan-group__list {
  list-style: none;
  margin: 0;
  padding: 0.35rem 0;
}

.bawahan-group__item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.85rem;
  color: #52526c;
}

.bawahan-group__item:not(:last-child) {
  border-bottom: 1px solid #f1f1f1;
}

.bawahan-group__item:hover {
  background: #f8f9fa;
}
</style>
