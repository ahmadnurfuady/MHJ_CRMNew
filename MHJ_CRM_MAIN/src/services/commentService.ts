import { api } from '@/services/api'

/**
 * Tipe parent yang didukung backend (via `parent_type` di tabel `dbvnotes`).
 * Nilai mengikuti konvensi APK agar entry web dan APK saling kompatibel.
 */
export type CommentParentType =
  | 'project'
  | 'deal'
  | 'contact'
  | 'company'
  | 'task'

export interface CommentAttachment {
  name: string
  path: string
  type: 'photo' | 'document'
  fileurl?: string
}

export interface CommentRow {
  id: number
  parent_type: string
  parent_id: number
  notes: string | null
  body?: string | null
  visibility: number | null
  created_by: number | null
  sender_name: string | null
  created_at: string
  updated_at?: string | null
  attachment?: string | CommentAttachment[] | null
  attachments?: string | CommentAttachment[] | null
}

export interface Comment {
  id: number
  body: string
  authorId: number | null
  authorName: string
  createdAt: string
  attachments: CommentAttachment[]
  visibility: number
}

/** GET /api/history?noteable_type=X&noteable_id=Y */
export async function fetchComments(
  parentType: CommentParentType,
  parentId: number,
): Promise<Comment[]> {
  const response = await api.getbydata<CommentRow[]>('/history', {
    noteable_type: parentType,
    noteable_id: parentId,
  })
  const rows = Array.isArray(response.data) ? response.data : []
  return rows.map(normalizeComment)
}

export interface SaveCommentPayload {
  parentType: CommentParentType
  parentId: number
  body: string
  photos?: File[]
  documents?: File[]
  visibility?: number
  /** Attachment lama yang masih dipertahankan (saat edit). */
  existingAttachments?: CommentAttachment[]
  /** ID komentar untuk aksi update ('U'); kosong untuk insert ('I'). */
  idnote?: number | null
  choice?: 'I' | 'U' | 'D'
}

/** POST /api/history/inputnote (multipart). */
export async function saveComment(payload: SaveCommentPayload): Promise<void> {
  const form = new FormData()
  form.append('choice', payload.choice ?? 'I')
  if (payload.idnote != null) form.append('idnote', String(payload.idnote))
  form.append('noteable_type', payload.parentType)
  form.append('noteable_id', String(payload.parentId))
  form.append('body', payload.body)
  form.append('visibility', String(payload.visibility ?? 0))

  if (payload.existingAttachments?.length) {
    form.append('existing_attachments', JSON.stringify(payload.existingAttachments))
  }

  payload.photos?.forEach((file) => form.append('photos[]', file))
  payload.documents?.forEach((file) => form.append('documents[]', file))

  await api.postForm('/history/inputnote', form)
}

/**
 * Hapus komentar (choice='D'). BE tetap memakai endpoint inputnote supaya
 * audit trail konsisten dengan jalur create/update.
 */
export async function deleteComment(
  idnote: number,
  parentType: CommentParentType,
  parentId: number,
): Promise<void> {
  const form = new FormData()
  form.append('choice', 'D')
  form.append('idnote', String(idnote))
  form.append('noteable_type', parentType)
  form.append('noteable_id', String(parentId))
  form.append('body', '')
  form.append('visibility', '0')
  await api.postForm('/history/inputnote', form)
}

function normalizeComment(row: CommentRow): Comment {
  return {
    id: row.id,
    body: (row.notes ?? row.body ?? '').toString(),
    authorId: row.created_by,
    authorName: row.sender_name?.trim() || 'Pengguna',
    createdAt: row.created_at,
    attachments: normalizeAttachments(row.attachments ?? row.attachment ?? null),
    visibility: row.visibility ?? 0,
  }
}

function normalizeAttachments(
  raw: string | CommentAttachment[] | null | undefined,
): CommentAttachment[] {
  if (!raw) return []
  let parsed: unknown = raw
  if (typeof raw === 'string') {
    try {
      parsed = JSON.parse(raw)
    } catch {
      return []
    }
  }
  if (!Array.isArray(parsed)) return []
  return parsed
    .map((item): CommentAttachment | null => {
      if (!item || typeof item !== 'object') return null
      const obj = item as Record<string, unknown>
      const path = (obj.path ?? obj.fileurl ?? obj.url) as string | undefined
      if (!path) return null
      const typeValue = (obj.type as string | undefined) ?? guessTypeFromPath(path)
      return {
        name: String(obj.name ?? obj.filename ?? path.split('/').pop() ?? 'Lampiran'),
        path,
        type: typeValue === 'photo' ? 'photo' : 'document',
      }
    })
    .filter((x): x is CommentAttachment => x !== null)
}

function guessTypeFromPath(path: string): 'photo' | 'document' {
  const ext = path.split('.').pop()?.toLowerCase() ?? ''
  const photoExt = new Set(['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp', 'heic'])
  return photoExt.has(ext) ? 'photo' : 'document'
}
