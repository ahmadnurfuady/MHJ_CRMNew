export interface ImagesDetails {
  hoverDigits: number
  hoverClass: string
  text?: boolean
  images: Images[]
}

export interface Images {
  srcUrl: string
  previewUrl: string
  title?: string
  description?: string
  buttons?: Buttons[]
}

export interface GalleryGridDetails {
  srcUrl: string
  previewUrl: string
}

export interface Buttons {
  title: string
  color: string
}

export interface GalleryGridDesc {
  srcUrl: string
  previewUrl: string
  title: string
  text: string
}

export interface GalleryPlaceholder {
  srcUrl: string
  previewUrl: string
  title: string
  description: string
}

export interface MasonryImage {
  srcUrl: string
  previewUrl: string
}
