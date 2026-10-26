import Swal from 'sweetalert2'

export type SaveAction = 'created' | 'updated'

interface SaveSuccessOptions {
  entity: string
  action?: SaveAction
  text?: string
}

/** Popup sukses standar untuk seluruh proses tambah dan edit data. */
export function showSaveSuccess({
  entity,
  action = 'created',
  text,
}: SaveSuccessOptions) {
  const entityName = entity.trim()
  const defaultText = action === 'updated'
    ? `Perubahan data ${entityName.toLowerCase()} berhasil disimpan.`
    : `Data ${entityName.toLowerCase()} baru berhasil disimpan.`

  return Swal.fire({
    icon: 'success',
    title: `${entityName} berhasil disimpan`,
    text: text || defaultText,
    confirmButtonColor: 'var(--theme-default)',
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  })
}
