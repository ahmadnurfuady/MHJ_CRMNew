<template>
  <div class="akun-page">
    <div v-if="detailLoading && !user" class="akun-state" role="status">
      <span class="spinner-border text-primary" aria-hidden="true"></span>
      Memuat profil pengguna...
    </div>
    <div v-else-if="detailError && !user" class="akun-state akun-state--error" role="alert">
      <SolarIcon name="danger" :size="30" />
      <strong>Profil tidak dapat ditampilkan</strong>
      <p>{{ detailError }}</p>
      <button type="button" class="akun-retry" @click="loadUser">Coba lagi</button>
    </div>
    <div v-else-if="!user" class="akun-state">Data pengguna tidak tersedia.</div>

    <template v-else>
      <section class="akun-hero" aria-label="Ringkasan profil">
        <div class="akun-hero__main">
          <div class="akun-avatar-shell">
            <div class="akun-avatar" :style="avatarColorStyle(fullName || user.id)">
              <img v-if="profilePhoto" :src="profilePhoto" :alt="`Foto profil ${fullName}`" />
              <template v-else>{{ initials }}</template>
            </div>
            <button
              v-if="!isDetailMode"
              type="button"
              class="akun-photo-shortcut"
              :disabled="photoBusy"
              :aria-label="profilePhoto ? 'Ganti foto profil' : 'Tambah foto profil'"
              :title="profilePhoto ? 'Ganti foto profil' : 'Tambah foto profil'"
              @click="choosePhoto"
            >
              <SolarIcon name="camera" :size="16" color="currentColor" aria-hidden="true" />
            </button>
          </div>
          <div class="akun-identity">
            <div class="akun-eyebrow">
              <SolarIcon name="user" :size="13" color="currentColor" aria-hidden="true" />
              {{ isDetailMode ? 'DETAIL PENGGUNA' : 'PROFIL SAYA' }}
            </div>
            <h2>{{ fullName }}</h2>
            <p class="akun-role">{{ jabatanLabel === '-' ? roleLabel : jabatanLabel }}</p>
            <div class="akun-tags">
              <a v-if="user.email" class="akun-tag" :href="`mailto:${user.email}`">
                <SolarIcon name="mail" :size="16" color="currentColor" aria-hidden="true" />{{ user.email }}
              </a>
              <div v-if="cabangLabel !== '-'" class="akun-tag">
                <SolarIcon name="buildings" :size="16" color="currentColor" aria-hidden="true" />{{ cabangLabel }}
              </div>
              <div class="akun-tag akun-tag--role">
                <SolarIcon name="shield-user" :size="15" color="currentColor" aria-hidden="true" />{{ roleLabel }}
              </div>
              <div class="akun-tag" :class="{ 'akun-tag--active': activeStatus === 'Aktif', 'akun-tag--inactive': activeStatus === 'Tidak aktif' }">
                <i aria-hidden="true"></i>{{ activeStatus }}
              </div>
            </div>
          </div>
          <div v-if="!isDetailMode" class="akun-action-area">
            <input
              ref="photoInput"
              class="akun-photo-input"
              type="file"
              accept="image/jpeg,image/png,image/webp"
              aria-label="Pilih foto profil"
              :disabled="photoBusy"
              @change="uploadPhoto"
            />
            <div class="akun-actions">
              <button type="button" class="akun-button akun-button--primary" @click="openChangePassword">
                <SolarIcon name="lock" :size="16" color="currentColor" secondary-color="currentColor" />
                Ganti Password
              </button>
              <button type="button" class="akun-button" :disabled="photoBusy" @click="choosePhoto">
                <SolarIcon name="camera" :size="16" color="currentColor" aria-hidden="true" />
                {{ photoBusy ? 'Memproses...' : profilePhoto ? 'Ganti Foto' : 'Tambah Foto' }}
              </button>
              <button type="button" class="akun-button akun-button--logout" :disabled="loggingOut" @click="handleLogout">
                <SolarIcon name="logout" :size="16" color="currentColor" secondary-color="currentColor" />
                {{ loggingOut ? 'Sedang keluar...' : 'Keluar Akun' }}
              </button>
            </div>
            <p class="akun-photo-hint">JPG, PNG, WebP · Maks. 5 MB<br />Foto tersimpan di browser ini.</p>
            <button v-if="profilePhoto" type="button" class="akun-photo-remove" :disabled="photoBusy" @click="removePhoto">Hapus foto</button>
            <p v-if="photoError" class="akun-photo-error" role="alert">{{ photoError }}</p>
            <p v-if="photoMessage" class="akun-photo-message" role="status">{{ photoMessage }}</p>
          </div>
        </div>
      </section>

      <div v-if="detailError && !isDetailMode" class="akun-notice" role="status">
        Detail terbaru belum bisa dimuat. Data yang ditampilkan berasal dari sesi login.
        <button type="button" @click="loadUser">Coba lagi</button>
      </div>

      <div class="akun-sections">
        <section class="akun-section akun-section--personal">
          <header class="akun-section__header">
            <div class="akun-section__icon"><SolarIcon name="user" :size="21" color="currentColor" /></div>
            <div><h3>Informasi Pribadi</h3><p>Identitas dan kontak pengguna</p></div>
          </header>
          <div class="akun-fields">
            <div v-for="field in personalFields" :key="field.label" class="akun-field">
              <div class="akun-field__label">{{ field.label }}</div>
              <div class="akun-field__value">{{ field.value }}</div>
            </div>
          </div>
        </section>

        <section class="akun-section akun-section--work">
          <header class="akun-section__header">
            <div class="akun-section__icon"><SolarIcon name="case" :size="21" color="currentColor" /></div>
            <div><h3>Informasi Pekerjaan</h3><p>Penempatan dan peran di CRM</p></div>
          </header>
          <div class="akun-fields">
            <div v-for="field in workFields" :key="field.label" class="akun-field">
              <div class="akun-field__label">{{ field.label }}</div>
              <div class="akun-field__value">{{ field.value }}</div>
            </div>
          </div>
        </section>

        <section class="akun-section akun-section--account">
          <header class="akun-section__header">
            <div class="akun-section__icon"><SolarIcon name="shield-check" :size="21" color="currentColor" /></div>
            <div><h3>Informasi Akun</h3><p>Status akun yang tercatat di sistem</p></div>
          </header>
          <div class="akun-fields akun-fields--account">
            <div v-for="field in accountFields" :key="field.label" class="akun-field">
              <div class="akun-field__label">{{ field.label }}</div>
              <div class="akun-field__value">{{ field.value }}</div>
            </div>
          </div>
        </section>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import SolarIcon from '@/components/shared/SolarIcon.vue'
import { usePageBackHandler, usePageTitle } from '@/composable/usePageHeader'
import { routes } from '@/router/routes'
import { useAuthStore } from '@/store/auth'
import { toCodeArray, userService, userFullName } from '@/services/userService'
import { deleteProfilePhoto, getProfilePhoto, prepareProfilePhoto, saveProfilePhoto } from '@/services/profilePhotoStorage'
import { avatarColorStyle } from '@/utils/avatar'
import { getUserErrorMessage } from '@/utils/errorParser'
import type { MasterOption, UserCrmItem, UserMasterOptions } from '@/types/user'

const props = defineProps<{ userId?: number }>()
const authStore = useAuthStore()
const router = useRouter()
const fetchedUser = ref<UserCrmItem | null>(null)
const detailLoading = ref(false)
const detailError = ref('')
const loggingOut = ref(false)
const photoInput = ref<HTMLInputElement | null>(null)
const profilePhoto = ref<string | null>(null)
const photoBusy = ref(false)
const photoError = ref('')
const photoMessage = ref('')
let loadSequence = 0

const isDetailMode = computed(() => Number.isFinite(props.userId) && Number(props.userId) > 0)
const user = computed<UserCrmItem | null>(() => {
  if (isDetailMode.value) return fetchedUser.value
  return fetchedUser.value ?? (authStore.user as unknown as UserCrmItem | null)
})
const fullName = computed(() => user.value ? userFullName(user.value) : '')
const initials = computed(() => {
  const words = fullName.value.replace(/[()]/g, '').split(/\s+/).filter(Boolean)
  return (words.length > 1 ? `${words[0]?.[0]}${words[1]?.[0]}` : words[0]?.slice(0, 2) || 'U').toUpperCase()
})
const normalizedRole = computed(() => String(user.value?.role ?? '').trim().toUpperCase())
const roleLabel = computed(() => {
  if (['MGR', 'MANAGER'].includes(normalizedRole.value)) return 'Manager'
  if (['STF', 'STAFF', 'KARYA', 'KARYAWAN'].includes(normalizedRole.value)) return 'Karyawan'
  const raw = String(user.value?.role ?? '').trim().replace(/[_-]+/g, ' ')
  return raw ? raw.replace(/\b\w/g, (letter) => letter.toUpperCase()) : 'Pengguna'
})
const activeStatus = computed(() => {
  if (user.value?.aktif === null || user.value?.aktif === undefined) return 'Status belum tersedia'
  return user.value.aktif === true || String(user.value.aktif) === '1' ? 'Aktif' : 'Tidak aktif'
})
const phoneNumber = computed(() =>
  displayValue(user.value?.no_handphone || user.value?.Telephone || (!isDetailMode.value ? authStore.user?.phone_number : null)),
)

const masterOptions = ref<UserMasterOptions>({ cabang: [], devisi: [], tipeMarketing: [], jabatan: [] })
const jabatanLabel = computed(() => {
  const id = user.value?.idjabatan
  if (id === null || id === undefined || id === '') return '-'
  return labelFor(masterOptions.value.jabatan, String(id))
})
const cabangLabel = computed(() => {
  const labels = labelsFor(masterOptions.value.cabang, user.value?.KodeCabang)
  return labels !== '-' ? labels : displayValue(!isDetailMode.value ? authStore.user?.branch_name : null)
})
const devisiLabel = computed(() => {
  const labels = labelsFor(masterOptions.value.devisi, user.value?.KodeDevisi)
  return labels !== '-' ? labels : displayValue(!isDetailMode.value ? authStore.user?.division_name : null)
})

type ProfileField = { label: string; value: string }
const personalFields = computed<ProfileField[]>(() => [
  { label: 'Nama Lengkap', value: fullName.value },
  { label: 'Nama Depan', value: displayValue(user.value?.firstname) },
  { label: 'Nama Belakang', value: displayValue(user.value?.lastname) },
  { label: 'Email', value: displayValue(user.value?.email) },
  { label: 'No. Handphone', value: phoneNumber.value },
  { label: 'NIK', value: displayValue(user.value?.nik) },
])
const workFields = computed<ProfileField[]>(() => [
  { label: 'Role', value: roleLabel.value },
  { label: 'Jabatan', value: jabatanLabel.value },
  { label: 'Cabang', value: cabangLabel.value },
  { label: 'Divisi', value: devisiLabel.value },
  { label: 'Tipe Marketing', value: labelsFor(masterOptions.value.tipeMarketing, user.value?.KodeTipeMarketing) },
  { label: 'Tim Utama', value: displayValue(user.value?.primaryteam) },
  { label: 'Tim Sekunder', value: displayValue(user.value?.secondaryteam) },
  { label: 'Level Staf', value: displayValue(user.value?.stafflevel) },
])
const accountFields = computed<ProfileField[]>(() => [
  { label: 'ID Pengguna', value: displayValue(user.value?.id) },
  { label: 'Status Akun', value: activeStatus.value },
  { label: 'Verifikasi Email', value: user.value?.email_verified_at === undefined ? '-' : user.value?.email_verified_at ? 'Terverifikasi' : 'Belum diverifikasi' },
  { label: 'Dibuat Pada', value: formatDate(user.value?.created_at) },
  { label: 'Terakhir Diperbarui', value: formatDate(user.value?.updated_at) },
])

function displayValue(value: unknown): string {
  const text = String(value ?? '').trim()
  return text || '-'
}

function formatDate(value: string | null | undefined): string {
  if (!value) return '-'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return '-'
  return new Intl.DateTimeFormat('id-ID', { dateStyle: 'medium', timeStyle: 'short' }).format(date)
}

function labelFor(options: MasterOption[], code: string): string {
  return options.find((option) => option.value === code)?.label ?? code
}

function labelsFor(options: MasterOption[], value: unknown): string {
  const codes = toCodeArray(value)
  return codes.length ? codes.map((code) => labelFor(options, code)).join(', ') : '-'
}

function handleBack(): void {
  if (!isDetailMode.value) {
    void router.push(routes.Dashboards.Default)
    return
  }
  if (window.history.state?.back) {
    router.back()
    return
  }
  void router.push(routes.User.UserList)
}

function openChangePassword() {
  void router.push({ path: routes.Auth.ForgotPassword, query: { source: 'profile' } })
}

function choosePhoto() {
  if (!isDetailMode.value && !photoBusy.value) photoInput.value?.click()
}

async function uploadPhoto(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  input.value = ''
  if (!file || photoBusy.value || isDetailMode.value) return
  const accountId = authStore.user?.id
  if (accountId === undefined || String(user.value?.id) !== String(accountId)) return

  photoBusy.value = true
  photoError.value = ''
  photoMessage.value = ''
  try {
    const photo = await prepareProfilePhoto(file)
    if (isDetailMode.value || String(authStore.user?.id) !== String(accountId) || String(user.value?.id) !== String(accountId)) return
    try {
      saveProfilePhoto(accountId, photo)
    } catch {
      throw new Error('Foto belum bisa disimpan. Penyimpanan browser penuh atau tidak tersedia.')
    }
    profilePhoto.value = photo
    photoMessage.value = 'Foto profil berhasil diperbarui.'
  } catch (error) {
    photoError.value = getUserErrorMessage(error, 'Foto profil gagal diperbarui.')
  } finally {
    photoBusy.value = false
  }
}

function removePhoto() {
  const accountId = authStore.user?.id
  if (isDetailMode.value || photoBusy.value || accountId === undefined || String(user.value?.id) !== String(accountId)) return
  photoError.value = ''
  photoMessage.value = ''
  try {
    deleteProfilePhoto(accountId)
    profilePhoto.value = null
    photoMessage.value = 'Foto dihapus. Avatar kembali ke inisial nama.'
  } catch {
    photoError.value = 'Foto belum bisa dihapus. Penyimpanan browser tidak tersedia.'
  }
}

async function handleLogout() {
  if (loggingOut.value) return
  loggingOut.value = true
  try {
    await authStore.logout()
    await router.replace('/auth/login')
  } finally {
    loggingOut.value = false
  }
}

async function loadUser() {
  const currentId = isDetailMode.value ? props.userId : authStore.user?.id
  const userId = Number(currentId)
  const sequence = ++loadSequence
  fetchedUser.value = null
  detailError.value = ''
  if (!Number.isSafeInteger(userId) || userId <= 0) {
    detailError.value = 'ID pengguna tidak tersedia. Silakan masuk kembali.'
    return
  }

  detailLoading.value = true
  try {
    const result = await userService.fetchUserById(userId)
    if (sequence !== loadSequence) return
    if (!result || String(result.id) !== String(userId)) throw new Error('Data pengguna tidak ditemukan.')
    fetchedUser.value = result
  } catch (error) {
    if (sequence !== loadSequence) return
    detailError.value = getUserErrorMessage(error, 'Gagal memuat detail pengguna.')
  } finally {
    if (sequence === loadSequence) detailLoading.value = false
  }
}

usePageTitle(computed(() => isDetailMode.value ? 'Detail Pengguna' : 'Akun Saya'))
usePageBackHandler(handleBack)
watch(
  () => user.value?.id,
  (userId) => {
    profilePhoto.value = userId === undefined ? null : getProfilePhoto(userId)
    photoError.value = ''
    photoMessage.value = ''
  },
  { immediate: true },
)
watch(
  () => isDetailMode.value ? props.userId : authStore.user?.id,
  () => void loadUser(),
  { immediate: true },
)
onMounted(async () => { masterOptions.value = await userService.loadMasterOptions() })
</script>

<style scoped>
.akun-page {
  --akun-surface: #fff;
  --akun-soft: #f6fafc;
  --akun-border: #e5edf2;
  --akun-text: #102a43;
  --akun-muted: #627d98;
  --akun-chip-text: #486581;
  --akun-chip-surface: rgba(255, 255, 255, 0.78);
  --akun-accent: var(--theme-default, var(--app-primary, #18a6e4));
  --akun-accent-text: var(--app-primary-dark, #087cae);
  display: grid;
  gap: 20px;
  padding-bottom: 28px;
  color: var(--akun-text);
}

.akun-hero,
.akun-section,
.akun-state {
  min-width: 0;
  overflow: hidden;
  border: 1px solid var(--akun-border);
  border-radius: 16px;
  background: var(--akun-surface);
  box-shadow: 0 4px 18px rgba(27, 50, 69, 0.035);
}

.akun-hero__main {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  display: grid;
  grid-template-columns: 108px minmax(0, 1fr) auto;
  align-items: center;
  gap: 24px;
  padding: 24px;
  background:
    radial-gradient(circle at 88% 18%, rgba(var(--app-primary-rgb, 24, 166, 228), 0.16), transparent 24%),
    linear-gradient(135deg, var(--akun-surface) 0%, var(--akun-soft) 58%, var(--akun-soft) 100%);
}

.akun-hero {
  border-color: rgba(var(--app-primary-rgb, 24, 166, 228), 0.18);
  border-radius: 18px;
  box-shadow: 0 12px 32px rgba(22, 76, 105, 0.08);
}

.akun-hero__main::after {
  position: absolute;
  z-index: -1;
  right: -54px;
  bottom: -74px;
  width: 180px;
  height: 180px;
  border: 24px solid rgba(var(--app-primary-rgb, 24, 166, 228), 0.06);
  border-radius: 50%;
  content: '';
}

.akun-avatar-shell {
  position: relative;
  width: 96px;
  height: 96px;
}

.akun-avatar {
  display: grid;
  place-items: center;
  overflow: hidden;
  width: 96px;
  height: 96px;
  border: 5px solid #fff;
  border-radius: 24px;
  box-shadow: 0 10px 24px rgba(22, 76, 105, 0.15);
  font-size: 28px;
  font-weight: 800;
  letter-spacing: 0.8px;
}

.akun-avatar img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.akun-photo-shortcut {
  position: absolute;
  right: -4px;
  bottom: -4px;
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border: 3px solid #fff;
  border-radius: 50%;
  padding: 0;
  color: #fff;
  background: var(--akun-accent);
  box-shadow: 0 2px 8px rgba(22, 76, 105, 0.18);
  cursor: pointer;
}

.akun-identity {
  display: flex;
  min-width: 0;
  align-items: flex-start;
  flex-direction: column;
  gap: 5px;
}

.akun-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 2px;
  color: var(--akun-accent-text);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.akun-identity h2 {
  margin: 0;
  color: var(--akun-text);
  font-size: clamp(21px, 2vw, 27px);
  font-weight: 700;
  line-height: 1.35;
  overflow-wrap: anywhere;
}

.akun-role {
  margin: 0;
  color: var(--akun-muted);
  font-size: 13px;
  line-height: 1.5;
  overflow-wrap: anywhere;
}

.akun-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 7px;
}

.akun-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 27px;
  border: 1px solid rgba(var(--app-primary-rgb, 24, 166, 228), 0.13);
  border-radius: 999px;
  padding: 6px 10px;
  color: var(--akun-chip-text);
  background: var(--akun-chip-surface);
  font-size: 11px;
  font-weight: 400;
  line-height: 1.2;
  text-decoration: none;
  overflow-wrap: anywhere;
}

.akun-tag--role {
  color: var(--akun-accent-text);
  border-color: rgba(var(--app-primary-rgb, 24, 166, 228), 0.16);
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.07);
}

.akun-tag--active {
  color: #16855f;
  border-color: #d3efdf;
  background: #edf9f3;
}

.akun-tag--inactive {
  color: #ba4545;
  border-color: #f2d8d8;
  background: #fff3f3;
}

.akun-tag i {
  flex: 0 0 6px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
}

.akun-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
}

.akun-action-area {
  align-self: start;
  text-align: right;
}

.akun-photo-input {
  display: none;
}

.akun-photo-hint,
.akun-photo-error,
.akun-photo-message {
  max-width: 380px;
  margin: 10px 0 0 auto;
  color: var(--akun-muted);
  font-size: 11px;
  line-height: 1.6;
}

.akun-photo-error {
  color: #bd4141;
}

.akun-photo-message {
  color: #16855f;
}

.akun-photo-remove {
  margin-top: 6px;
  border: 0;
  padding: 2px;
  color: var(--akun-muted);
  background: transparent;
  font: inherit;
  font-size: 11px;
  text-decoration: underline;
  cursor: pointer;
}

.akun-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-height: 38px;
  border: 1px solid #d8e5ec;
  border-radius: 9px;
  padding: 8px 12px;
  color: var(--akun-chip-text);
  background: var(--akun-surface);
  font: inherit;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  white-space: nowrap;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(22, 76, 105, 0.05);
  transition: border-color 0.18s, color 0.18s, background 0.18s;
}

.akun-button:hover:not(:disabled) {
  border-color: var(--akun-accent);
}

.akun-button:focus-visible,
.akun-photo-shortcut:focus-visible,
.akun-photo-remove:focus-visible,
.akun-retry:focus-visible,
.akun-notice button:focus-visible {
  outline: 3px solid rgba(var(--app-primary-rgb, 24, 166, 228), 0.25);
  outline-offset: 3px;
}

.akun-button:disabled {
  cursor: wait;
  opacity: 0.65;
}

.akun-button--primary {
  border-color: var(--akun-accent);
  color: #fff;
  background: var(--akun-accent);
  box-shadow: 0 4px 12px rgba(var(--app-primary-rgb, 24, 166, 228), 0.16);
}

.akun-button--primary:hover {
  background: var(--app-primary-dark, #087cae);
}

.akun-button--logout {
  color: #ba4545;
  border-color: #efcece;
  background: var(--akun-surface);
}

.akun-button--logout:hover:not(:disabled) {
  background: #fff3f3;
}

.akun-sections {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(260px, 310px);
  grid-template-areas: "personal account" "work account";
  align-items: start;
  gap: 20px;
}

.akun-section--personal {
  grid-area: personal;
}

.akun-section--work {
  grid-area: work;
}

.akun-section--account {
  grid-area: account;
}

.akun-section__header {
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid var(--akun-border);
  padding: 19px 24px;
}

.akun-section__icon {
  display: grid;
  flex: 0 0 38px;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  color: var(--akun-accent-text);
  background: rgba(var(--app-primary-rgb, 24, 166, 228), 0.08);
}

.akun-section__header h3 {
  margin: 0;
  color: var(--akun-text);
  font-size: 15px;
  font-weight: 600;
  line-height: 1.4;
}

.akun-section__header p {
  margin: 4px 0 0;
  color: var(--akun-muted);
  font-size: 11px;
  line-height: 1.5;
}

.akun-fields {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: 24px;
  padding: 3px 24px 14px;
}

.akun-fields--account {
  grid-template-columns: minmax(0, 1fr);
}

.akun-field {
  min-width: 0;
  border-bottom: 1px solid var(--akun-border);
  padding: 17px 0 16px;
}

.akun-fields--account .akun-field:last-child {
  border-bottom: 0;
}

.akun-field__label {
  margin-bottom: 7px;
  color: var(--akun-muted);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
}

.akun-field__value {
  color: var(--akun-text);
  font-size: 13px;
  font-weight: 500;
  line-height: 1.6;
  overflow-wrap: anywhere;
}

.akun-state {
  display: grid;
  place-items: center;
  gap: 12px;
  min-height: 200px;
  padding: 28px;
  color: var(--akun-muted);
  text-align: center;
}

.akun-state--error {
  color: #b55050;
}

.akun-state p {
  margin: 0;
}

.akun-retry,
.akun-notice button {
  border: 0;
  border-radius: 3px;
  padding: 0;
  color: var(--akun-accent-text);
  background: transparent;
  font-weight: 600;
  cursor: pointer;
}

.akun-notice {
  border: 1px solid #f2d899;
  border-radius: 10px;
  padding: 12px 16px;
  color: #805c16;
  background: #fff9e9;
  font-size: 12px;
  line-height: 1.6;
}

.akun-notice button {
  margin-left: 8px;
}

:global(body.dark-only .akun-page) {
  --akun-surface: var(--mhj-dark-surface, #1b2633);
  --akun-soft: var(--mhj-dark-surface-raised, #233244);
  --akun-border: var(--mhj-dark-divider, rgba(255, 255, 255, 0.13));
  --akun-text: var(--mhj-dark-text, #f1f5f9);
  --akun-muted: var(--mhj-dark-text-muted, #b6c2d0);
  --akun-chip-text: var(--mhj-dark-text-muted, #b6c2d0);
  --akun-chip-surface: var(--mhj-dark-surface-muted, #17212d);
  --akun-accent-text: var(--app-primary-soft-light, #b9e8fa);
}

:global(body.dark-only .akun-page .akun-photo-error) {
  color: #fca5a5;
}

:global(body.dark-only .akun-page .akun-photo-message) {
  color: #86efac;
}

:global(body.dark-only .akun-page .akun-tag--active) {
  color: #86efac;
  border-color: rgba(34, 197, 94, 0.25);
  background: rgba(34, 197, 94, 0.12);
}

:global(body.dark-only .akun-page .akun-tag--inactive),
:global(body.dark-only .akun-page .akun-button--logout) {
  color: #fca5a5;
  border-color: rgba(239, 68, 68, 0.3);
}

:global(body.dark-only .akun-page .akun-tag--inactive),
:global(body.dark-only .akun-page .akun-button--logout:hover:not(:disabled)) {
  background: rgba(239, 68, 68, 0.1);
}

:global(body.dark-only .akun-page .akun-notice) {
  color: #fcd34d;
  border-color: rgba(245, 158, 11, 0.3);
  background: rgba(245, 158, 11, 0.1);
}

@media (max-width: 1250px) {
  .akun-fields {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .akun-fields--account {
    grid-template-columns: minmax(0, 1fr);
  }

  .akun-hero__main {
    grid-template-columns: 108px minmax(0, 1fr);
  }

  .akun-action-area {
    grid-column: 1 / -1;
  }

  .akun-actions {
    justify-content: flex-end;
  }
}

@media (max-width: 1050px) {
  .akun-sections {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas: "personal" "work" "account";
  }

  .akun-fields--account {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .akun-page {
    gap: 16px;
  }

  .akun-hero__main {
    grid-template-columns: 72px minmax(0, 1fr);
    gap: 14px;
    padding: 17px;
  }

  .akun-avatar-shell,
  .akun-avatar {
    width: 72px;
    height: 72px;
  }

  .akun-avatar {
    border-width: 4px;
    border-radius: 19px;
    font-size: 22px;
  }

  .akun-identity h2 {
    font-size: 20px;
  }

  .akun-actions {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 3px;
  }

  .akun-button {
    padding-inline: 10px;
    font-size: 11px;
  }

  .akun-button--logout {
    grid-column: 1 / -1;
  }

  .akun-section__header {
    padding: 17px 20px;
  }

  .akun-fields,
  .akun-fields--account {
    grid-template-columns: minmax(0, 1fr);
    padding-inline: 20px;
  }

  .akun-field {
    padding-block: 13px;
  }
}
</style>
