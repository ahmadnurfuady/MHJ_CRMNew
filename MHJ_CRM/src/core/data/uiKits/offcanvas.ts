import { ref } from 'vue'

import type { OffcanvasDetails } from '@/types/uiKits'

export const offcanvasDetails = ref<OffcanvasDetails>({
  title: '',
  direction: '',
  backdrop: true,
  scroll: false,
  outsideClose: true,
})
