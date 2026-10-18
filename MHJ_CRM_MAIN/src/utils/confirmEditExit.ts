import Swal from 'sweetalert2'

export async function confirmEditExit(): Promise<boolean> {
  const result = await Swal.fire({
    icon: 'warning',
    title: 'Tinggalkan halaman edit?',
    text: 'Perubahan yang belum disimpan akan hilang.',
    showCancelButton: true,
    confirmButtonText: 'Ya, kembali',
    cancelButtonText: 'Tetap di sini',
    confirmButtonColor: '#dc3545',
    cancelButtonColor: 'var(--theme-default)',
    reverseButtons: true,
    focusCancel: true,
  })

  return result.isConfirmed
}
