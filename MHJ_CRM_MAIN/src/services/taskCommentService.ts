import { api } from '@/services/api'

/**
 * Rekaman komentar persis seperti yang disimpan APK di kolom tasks.comments
 * (nvarchar(MAX) berisi JSON array). Field opsional di web ditambahkan di BE
 * (author_id, frmdvc) tapi tetap kompatibel dengan rekaman lama dari APK yang
 * belum punya field-field tersebut.
 */
export interface TaskComment {
  id: string
  author: string
  author_id?: number | null
  message: string
  timeAgo?: string
  initial?: string
  avatarColor?: number
  frmdvc?: string | null
  created_at: string
}

interface CommentsResponse {
  data: TaskComment[]
}

/**
 * Normalisasi tiap rekaman: rekaman lama dari APK tidak punya field `frmdvc`,
 * jadi anggap default 'APK' agar chip sumber selalu muncul.
 */
function normalize(list: unknown): TaskComment[] {
  if (!Array.isArray(list)) return []
  return list.map((raw) => {
    const r = raw as Partial<TaskComment>
    return {
      id: String(r.id ?? ''),
      author: String(r.author ?? ''),
      author_id: typeof r.author_id === 'number' ? r.author_id : null,
      message: String(r.message ?? ''),
      timeAgo: r.timeAgo,
      initial: r.initial,
      avatarColor: r.avatarColor,
      frmdvc: r.frmdvc || 'APK',
      created_at: String(r.created_at ?? ''),
    }
  })
}

/** GET /api/tasks/comments?id=X */
export async function fetchTaskComments(taskId: number): Promise<TaskComment[]> {
  const response = await api.getbydata<CommentsResponse>('/tasks/comments', { id: taskId })
  return normalize(response.data?.data)
}

/** POST /api/tasks/comments { id, message } — author diambil dari user login. */
export async function addTaskComment(taskId: number, message: string): Promise<TaskComment[]> {
  const response = await api.post<CommentsResponse>('/tasks/comments', {
    id: taskId,
    message,
  })
  return normalize(response.data?.data)
}

/** POST /api/tasks/comments/delete { id, comment_id } — hanya pemilik. */
export async function deleteTaskComment(
  taskId: number,
  commentId: string,
): Promise<TaskComment[]> {
  const response = await api.post<CommentsResponse>('/tasks/comments/delete', {
    id: taskId,
    comment_id: commentId,
  })
  return normalize(response.data?.data)
}
