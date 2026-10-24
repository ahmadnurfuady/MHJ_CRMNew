import { onBeforeUnmount, ref, watch, isRef, type MaybeRefOrGetter } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

/**
 * Override judul yang ditampilkan di BreadCrumbs global. Komponen halaman
 * memanggil `usePageTitle("Judul khusus")` untuk mengganti `route.meta.mainTitle`
 * selama halaman tersebut aktif. Nilai null → kembali ke judul default.
 */
export const pageTitleOverride = ref<string | null>(null)

/**
 * Target navigasi untuk tombol "kembali" opsional di BreadCrumbs. Komponen
 * halaman memanggil `usePageBackRoute(...)` untuk menampilkan tombol kembali
 * di sebelah kiri judul breadcrumb; dibersihkan otomatis saat unmount.
 */
export const pageBackRoute = ref<RouteLocationRaw | null>(null)

function resolveValue<T>(source: MaybeRefOrGetter<T>): T {
  if (typeof source === 'function') return (source as () => T)()
  if (isRef(source)) return source.value
  return source as T
}

/**
 * Set judul breadcrumb untuk halaman ini. Nilainya dibersihkan saat unmount.
 */
export function usePageTitle(title: MaybeRefOrGetter<string | null>) {
  pageTitleOverride.value = resolveValue(title)

  if (typeof title !== 'string') {
    watch(
      () => resolveValue(title),
      (value) => {
        pageTitleOverride.value = value
      },
    )
  }

  onBeforeUnmount(() => {
    pageTitleOverride.value = null
  })
}

/**
 * Set rute tujuan tombol "kembali" di breadcrumb. Dibersihkan saat unmount.
 */
export function usePageBackRoute(target: MaybeRefOrGetter<RouteLocationRaw | null>) {
  pageBackRoute.value = resolveValue(target)

  if (typeof target !== 'object' || isRef(target) || typeof target === 'function') {
    watch(
      () => resolveValue(target),
      (value) => {
        pageBackRoute.value = value
      },
    )
  }

  onBeforeUnmount(() => {
    pageBackRoute.value = null
  })
}
