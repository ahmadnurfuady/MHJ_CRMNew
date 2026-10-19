export type ProjectDocumentKind = 'customer-po' | 'sales-order'
export type ProjectDocumentSource = 'upload' | 'generated'

export interface StoredProjectDocument {
  id: string
  projectId: number
  kind: ProjectDocumentKind
  source: ProjectDocumentSource
  fileName: string
  mimeType: string
  size: number
  createdAt: string
  blob: Blob
  metadata?: {
    documentNumber?: string
    customer?: string
    totalValue?: string
    completedOrderStep?: number
  }
}

const DATABASE_NAME = 'mhj-crm-project-documents'
const DATABASE_VERSION = 1
const STORE_NAME = 'documents'

function openDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DATABASE_NAME, DATABASE_VERSION)

    request.onupgradeneeded = () => {
      const database = request.result
      if (!database.objectStoreNames.contains(STORE_NAME)) {
        const store = database.createObjectStore(STORE_NAME, { keyPath: 'id' })
        store.createIndex('projectId', 'projectId')
      }
    }
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error ?? new Error('Penyimpanan dokumen tidak tersedia.'))
  })
}

export async function saveProjectDocument(document: StoredProjectDocument): Promise<void> {
  const database = await openDatabase()
  await new Promise<void>((resolve, reject) => {
    const transaction = database.transaction(STORE_NAME, 'readwrite')
    transaction.objectStore(STORE_NAME).put(document)
    transaction.oncomplete = () => resolve()
    transaction.onerror = () => reject(transaction.error ?? new Error('Dokumen gagal disimpan.'))
  })
  database.close()
}

export async function getProjectDocuments(projectId: number): Promise<StoredProjectDocument[]> {
  const database = await openDatabase()
  const documents = await new Promise<StoredProjectDocument[]>((resolve, reject) => {
    const transaction = database.transaction(STORE_NAME, 'readonly')
    const request = transaction.objectStore(STORE_NAME).index('projectId').getAll(projectId)
    request.onsuccess = () => resolve(request.result as StoredProjectDocument[])
    request.onerror = () => reject(request.error ?? new Error('Dokumen gagal dimuat.'))
  })
  database.close()
  return documents.sort((first, second) => second.createdAt.localeCompare(first.createdAt))
}

export function downloadStoredDocument(document: StoredProjectDocument): void {
  const url = URL.createObjectURL(document.blob)
  const link = window.document.createElement('a')
  link.href = url
  link.download = document.fileName
  link.click()
  window.setTimeout(() => URL.revokeObjectURL(url), 1_000)
}
