<template>
  <div class="card">
    <div class="card-header card-no-border d-flex align-items-center gap-3">
      <router-link :to="routes.Dashboards.Default" class="btn btn-light btn-sm">
        <vue-feather type="arrow-left" size="15" class="me-1" />
        Kembali
      </router-link>
      <div>
        <h4 class="mb-0">Akun Saya</h4>
        <p class="f-m-light mt-1 mb-0">Informasi akun Anda yang terdaftar di sistem.</p>
      </div>
    </div>

    <div class="card-body">
      <div v-if="!user" class="text-center py-5 text-muted f-m-light">
        Data pengguna tidak tersedia.
      </div>

      <div v-else class="akun-layout">
        <!-- Avatar & role badge -->
        <div class="akun-avatar-col">
          <div class="akun-avatar">
            <vue-feather type="user" size="40" />
          </div>
          <div class="fw-bold f-16 mt-2 text-center">{{ fullName }}</div>
          <div class="akun-role-badge mt-1" :class="user.role === 'MGR' ? 'akun-role--mgr' : 'akun-role--stf'">
            <vue-feather :type="user.role === 'MGR' ? 'briefcase' : 'user'" size="12" class="me-1" />
            {{ user.role === 'MGR' ? 'Manager' : 'Karyawan' }}
          </div>
        </div>

        <!-- Data fields -->
        <div class="akun-fields">
          <AkunField icon="user" label="Nama Depan" :value="user.firstname" />
          <AkunField icon="user" label="Nama Belakang" :value="user.lastname" />
          <AkunField icon="mail" label="Email" :value="user.email" />
          <AkunField icon="phone" label="No. Handphone" :value="user.no_handphone" />
          <AkunField icon="credit-card" label="NIK" :value="user.nik" />
          <AkunField icon="briefcase" label="Jabatan" :value="jabatanLabel" />
          <AkunField
            icon="map-pin"
            label="Cabang"
            :value="labelsFor(masterOptions.cabang, user.KodeCabang)"
          />
          <AkunField
            icon="layers"
            label="Devisi"
            :value="labelsFor(masterOptions.devisi, user.KodeDevisi)"
          />
          <AkunField
            icon="tag"
            label="Tipe Marketing"
            :value="labelsFor(masterOptions.tipeMarketing, user.KodeTipeMarketing)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { routes } from '@/router/routes'
import { useAuthStore } from '@/store/auth'
import { toCodeArray, userService } from '@/services/userService'
import type { MasterOption, UserMasterOptions } from '@/types/user'

const authStore = useAuthStore()
const user = computed(() => authStore.user as (typeof authStore.user & {
  firstname?: string | null
  lastname?: string | null
  no_handphone?: string | null
  nik?: string | null
  role?: string | null
  idjabatan?: string | null
  KodeCabang?: unknown
  KodeDevisi?: unknown
  KodeTipeMarketing?: unknown
}) | null)

const fullName = computed(() => {
  if (!user.value) return ''
  const parts = [user.value.firstname, user.value.lastname].filter(Boolean)
  return parts.length ? parts.join(' ') : (user.value.name ?? '')
})

const masterOptions = ref<UserMasterOptions>({
  cabang: [],
  devisi: [],
  tipeMarketing: [],
  jabatan: [],
})

const jabatanLabel = computed(() => {
  if (!user.value?.idjabatan) return '-'
  const id = String(user.value.idjabatan)
  const found = masterOptions.value.jabatan.find((o) => o.value === id)
  return found?.label ?? id
})

function labelFor(options: MasterOption[], code?: string | null): string {
  if (!code) return '-'
  return options.find((o) => o.value === code)?.label ?? code
}

function labelsFor(options: MasterOption[], value: unknown): string {
  const codes = toCodeArray(value)
  if (codes.length === 0) return '-'
  return codes.map((c) => labelFor(options, c)).join(', ')
}

onMounted(async () => {
  masterOptions.value = await userService.loadMasterOptions()
})
</script>

<!-- Sub-komponen inline: baris field read-only -->
<script lang="ts">
import { defineComponent, h } from 'vue'

export const AkunField = defineComponent({
  name: 'AkunField',
  props: {
    icon: { type: String, required: true },
    label: { type: String, required: true },
    value: { type: String, default: null },
  },
  setup(props) {
    return () =>
      h('div', { class: 'akun-field' }, [
        h('div', { class: 'akun-field__label' }, props.label),
        h('div', { class: 'akun-field__value' }, props.value || '-'),
      ])
  },
})
</script>

<style scoped>
/* ─── Layout ───────────────────────────────────────────────────────────── */
.akun-layout {
  display: flex;
  gap: 2.5rem;
  align-items: flex-start;
}

@media (max-width: 640px) {
  .akun-layout {
    flex-direction: column;
    align-items: center;
  }
}

/* ─── Avatar col ───────────────────────────────────────────────────────── */
.akun-avatar-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  min-width: 140px;
}

.akun-avatar {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: rgba(24, 166, 228, 0.1);
  color: #18A6E4;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(24, 166, 228, 0.25);
}

.akun-role-badge {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.2rem 0.65rem;
  letter-spacing: 0.3px;
}

.akun-role--mgr {
  background: rgba(24, 166, 228, 0.12);
  color: #127CAB;
  border: 1px solid rgba(24, 166, 228, 0.3);
}

.akun-role--stf {
  background: rgba(3, 42, 78, 0.07);
  color: #032A4E;
  border: 1px solid rgba(3, 42, 78, 0.15);
}

/* ─── Fields grid ──────────────────────────────────────────────────────── */
.akun-fields {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.1rem 2rem;
}

/* dikontrol oleh AkunField defineComponent di atas */
:deep(.akun-field__label) {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: #adb5bd;
  margin-bottom: 0.2rem;
}

:deep(.akun-field__value) {
  font-size: 0.9rem;
  color: #032A4E;
  font-weight: 500;
  border-bottom: 1px solid #f1f3f5;
  padding-bottom: 0.35rem;
}
</style>
