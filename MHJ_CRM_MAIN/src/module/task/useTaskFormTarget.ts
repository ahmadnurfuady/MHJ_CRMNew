import { computed, ref, watch } from 'vue'
import { useAuthStore } from '@/store/auth'
import { userService } from '@/services/userService'

export function useTaskFormTarget() {
  const auth = useAuthStore()
  const specialist = ref(false)
  const ready = ref(false)

  watch(() => auth.user?.id, async (id, _previous, onCleanup) => {
    let cancelled = false
    onCleanup(() => { cancelled = true })
    ready.value = false
    specialist.value = false
    const userId = Number(id)
    if (Number.isSafeInteger(userId) && userId > 0) {
      try {
        const [user, jabatan] = await Promise.all([
          userService.fetchUserById(userId),
          userService.getMasterJabatan(),
        ])
        if (cancelled) return
        const position = jabatan.find((option) => option.value === String(user?.idjabatan ?? ''))
        specialist.value = position?.label.trim().toLowerCase().replace(/[\s_-]+/g, '') === 'applicationspecialist'
      } catch {
        // Jika detail jabatan tidak tersedia, gunakan form Sales.
      }
    }
    if (!cancelled) ready.value = true
  }, { immediate: true })

  return {
    taskFormTarget: computed(() => specialist.value ? '#app-specialist-task-modal' : '#sales-task-modal'),
    taskFormReady: ready,
  }
}
