export interface FileTypes {
  name: string
  totalFiles: number
  size: string
  icon: string
}

export interface PricingPlan {
  name: string
  price: string
  storage: string
  status: string
  image: string
}

export interface Files {
  id: number
  parentId?: number
  name: string
  type: string
  text?: string
  children?: Files[]
}

export interface FileModalDetails {
  title: string
  type: string
  file: Files | null
  renameFile: boolean
  open: boolean
}

export interface FileManagerState {
  visibleFiles: Files[]
  allFiles: Files[]
  location: string
  currentFolder: Files | null
  selected: Files | null
  folders: Files[]
  forwardStack: Files[]
  isSubFolder: boolean
  isModalOpen: boolean
  deleteModalOpen: boolean
  modalDetails: FileModalDetails
}
