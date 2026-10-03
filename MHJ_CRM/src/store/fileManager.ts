import { reactive } from 'vue'

import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify'

import { fileFormats, files } from '@/core/data/fileManager'
import type { FileManagerState, Files } from '@/types/fileManager'

export const useFileManager = defineStore('fileManager', () => {
  const fileManagerState = reactive<FileManagerState>({
    visibleFiles: files,
    allFiles: files,
    location: 'root',
    currentFolder: null as Files | null,
    selected: null as Files | null,
    folders: [],
    forwardStack: [],
    isSubFolder: false,
    isModalOpen: false,
    deleteModalOpen: false,

    modalDetails: {
      title: '',
      type: '',
      open: false,
      file: null,
      renameFile: false,
    },
  })

  const format = fileFormats

  function openDialog(title: string, type: string) {
    if (type == 'rename' && !fileManagerState.selected) {
      toast.error('Please select a file or folder to rename!', {
        autoClose: 2000,
      })
    } else {
      fileManagerState.isModalOpen = true
      const isRename = type === 'rename'
      const modalType =
        isRename && fileManagerState.selected ? fileManagerState.selected.type : type

      fileManagerState.modalDetails = {
        title: title,
        type: modalType,
        file: fileManagerState.selected,
        renameFile: type == 'rename' ? true : false,
        open: fileManagerState.isModalOpen,
      }
    }
  }

  function handleForm(form: { fileName: string; fileType: string }) {
    if (fileManagerState.modalDetails.renameFile) {
      // Update file/folder name
      const folder = fileManagerState.visibleFiles.find(
        (file) => file.id === fileManagerState.selected?.id
      )
      if (folder) {
        folder.name = form.fileName

        if (fileManagerState.selected && fileManagerState.selected.type === 'file') {
          folder.type = form.fileType
          folder.text = getFileText(form.fileName, fileManagerState.selected.type)
        }
      }
    } else {
      // Add file/folder
      if (form && form.fileName) {
        const newFile: Files = {
          id: getFileId(), // get max id from files data
          name: form.fileName,
          type: form.fileType,
          text: getFileText(form.fileName, fileManagerState.modalDetails.type), // get text based on file name
        }

        // Add parent id into sub folder
        if (newFile && newFile.type == 'folder' && fileManagerState.location !== 'root') {
          newFile.parentId = fileManagerState.currentFolder?.id
        }

        // Add file/folder into sub folder
        if (fileManagerState.currentFolder && fileManagerState.location !== 'root') {
          if (!fileManagerState.currentFolder.children) {
            fileManagerState.currentFolder.children = []
          }
          fileManagerState.currentFolder.children.push(newFile)
          fileManagerState.visibleFiles = [...fileManagerState.currentFolder.children]
        }
        // Add file/folder into root location
        else if (newFile && fileManagerState.visibleFiles) {
          fileManagerState.visibleFiles.push(newFile)
          fileManagerState.allFiles = fileManagerState.visibleFiles
        }
      }
    }
  }

  function deleteModal() {
    if (!fileManagerState.selected) {
      toast.error('Please select a file or folder which you want to delete!', {
        autoClose: 2000,
      })
    } else {
      fileManagerState.deleteModalOpen = true
    }
  }

  function remove(value: boolean) {
    if (value && fileManagerState.selected) {
      fileManagerState.visibleFiles.splice(
        fileManagerState.visibleFiles.indexOf(fileManagerState.selected),
        1
      )

      fileManagerState.folders = fileManagerState.folders.filter(
        (folder) => folder !== fileManagerState.selected
      )
      fileManagerState.forwardStack = fileManagerState.forwardStack.filter(
        (folder) => folder !== fileManagerState.selected
      )

      fileManagerState.selected = null
    }
  }

  // Get max id from all files
  function getFileId(): number {
    let maxId = 0

    const getId = (items: Files[]) => {
      for (const item of items) {
        if (item.id > maxId) {
          maxId = item.id
        }

        if (item.children && item.children.length > 0) {
          getId(item.children)
        }
      }
    }

    getId(fileManagerState.allFiles)
    return maxId + 1
  }

  // Get file text based on file type
  function getFileText(name: string, type: string): string {
    if (type !== 'file') return ''

    const fileName = name.toLowerCase()
    const fileFormat = fileFormats.find((ext) => fileName.endsWith(ext))

    return fileFormat ? fileFormat.replace('.', '').toUpperCase() : 'TXT'
  }

  function openFolder(id: number) {
    fileManagerState.selected = null

    const folder = fileManagerState.visibleFiles.find((file) => file.id === id)
    if (folder) {
      fileManagerState.folders.push(folder)
      fileManagerState.currentFolder = folder
      fileManagerState.forwardStack = []
      fileManagerState.isSubFolder = true

      fileManagerState.visibleFiles = folder.children || []
      fileManagerState.location += '/' + folder.name
    }
  }

  function navigate(direction: 'back' | 'next') {
    if (direction === 'back') {
      if (fileManagerState.folders.length > 1) {
        const last = fileManagerState.folders.pop()
        if (last) fileManagerState.forwardStack.push(last)

        const previous = fileManagerState.folders[fileManagerState.folders.length - 1]
        fileManagerState.currentFolder = previous
        fileManagerState.visibleFiles = previous.children || []
      } else {
        if (fileManagerState.currentFolder) {
          fileManagerState.forwardStack.push(fileManagerState.currentFolder)
        }
        goHome()
        return
      }
    } else if (direction === 'next') {
      if (fileManagerState.forwardStack.length > 0) {
        const nextFolder = fileManagerState.forwardStack.pop()
        if (nextFolder) {
          fileManagerState.folders.push(nextFolder)
          fileManagerState.currentFolder = nextFolder
          fileManagerState.visibleFiles = nextFolder.children || []
        }
      }
    }

    // Common to both directions
    fileManagerState.location =
      'root' + fileManagerState.folders.map((folder) => '/' + folder.name).join('')
    fileManagerState.isSubFolder = true
  }

  function goHome() {
    fileManagerState.location = 'root'
    fileManagerState.visibleFiles = fileManagerState.allFiles
    fileManagerState.folders = []
    fileManagerState.currentFolder = null
    fileManagerState.isSubFolder = false
  }

  function select(file: Files) {
    fileManagerState.selected = file
  }

  function closeModal(value: boolean) {
    fileManagerState.isModalOpen = value

    fileManagerState.modalDetails = {
      title: '',
      type: '',
      open: false,
      file: null,
      renameFile: false,
    }
  }

  return {
    fileManagerState,
    format,

    openDialog,
    handleForm,
    openFolder,
    navigate,
    goHome,
    select,
    closeModal,
    deleteModal,
    remove,
  }
})
