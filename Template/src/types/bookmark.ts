import type { InputField, Select, SelectField, Tabs } from './common'

export interface Bookmark {
  id: number
  title: string
  description: string
  collection: string
  image: string
  url: string
  tag: string
  isFavorite: boolean
}

export interface BookmarkFormModal {
  url: InputField
  title: InputField
  description: InputField
  tag: SelectField
  collection: SelectField
}

export interface BookmarkState {
  bookmarkTabsList: Tabs[]
  bookmarkTagsList: Select[]
  bookmarkList: Bookmark[]
  activeTab: Tabs
  isListView: boolean
  formSubmitted: boolean
  isBookmarkModalOpen: boolean
  currentBookmark: Bookmark | null
  bookmarkForm: BookmarkForm
}

export interface BookmarkForm {
  url: InputField
  title: InputField
  description: InputField
  tag: SelectField
  collection: SelectField
}
