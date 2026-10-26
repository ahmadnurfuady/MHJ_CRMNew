const PHOTO_PREFIX = 'mhj-crm:profile-photo:'
const MAX_PHOTO_BYTES = 5 * 1024 * 1024
const ALLOWED_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp'])

function photoKey(userId: string | number): string {
  return `${PHOTO_PREFIX}${encodeURIComponent(String(userId))}`
}

// The current user API has no photo field/upload endpoint. Keep browser photos
// separate from API user data, keyed by account rather than the active session.
export function getProfilePhoto(userId: string | number): string | null {
  try {
    const photo = localStorage.getItem(photoKey(userId))
    return photo?.startsWith('data:image/jpeg;base64,') ? photo : null
  } catch {
    return null
  }
}

export function saveProfilePhoto(userId: string | number, photo: string): void {
  localStorage.setItem(photoKey(userId), photo)
}

export function deleteProfilePhoto(userId: string | number): void {
  localStorage.removeItem(photoKey(userId))
}

export async function prepareProfilePhoto(file: File): Promise<string> {
  if (!ALLOWED_TYPES.has(file.type)) {
    throw new Error('Pilih foto berformat JPG, PNG, atau WebP.')
  }
  if (!file.size || file.size > MAX_PHOTO_BYTES) {
    throw new Error('Ukuran foto harus lebih dari 0 dan maksimal 5 MB.')
  }

  const source = URL.createObjectURL(file)
  try {
    const image = new Image()
    image.src = source
    await image.decode()
    const cropSize = Math.min(image.naturalWidth, image.naturalHeight)
    if (!cropSize) throw new Error('Foto tidak dapat dibaca.')

    const canvas = document.createElement('canvas')
    canvas.width = 512
    canvas.height = 512
    const context = canvas.getContext('2d')
    if (!context) throw new Error('Foto belum bisa diproses di browser ini.')
    context.fillStyle = '#ffffff'
    context.fillRect(0, 0, 512, 512)
    context.drawImage(
      image,
      (image.naturalWidth - cropSize) / 2,
      (image.naturalHeight - cropSize) / 2,
      cropSize,
      cropSize,
      0,
      0,
      512,
      512,
    )
    return canvas.toDataURL('image/jpeg', 0.88)
  } catch (error) {
    if (error instanceof DOMException) throw new Error('Foto tidak dapat dibaca. Pilih file foto lain.')
    throw error
  } finally {
    URL.revokeObjectURL(source)
  }
}
