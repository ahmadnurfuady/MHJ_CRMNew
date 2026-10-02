export interface StackableSortableList {
  id: number
  title: string
  children?: StackableSortableList[]
}

export interface SwapList {
  id: number
  title: string
  icon: string
  children?: SwapList[]
}

export interface AbsoluteCard {
  bgColor: string
  heading: string
  image: string
  text: string
}

export interface AnimatedTimeline {
  year: number
  events: TimelineEvents[]
}

export interface TimelineEvents {
  id: number
  title: string
  description: string
  focused?: boolean
}
export interface HorizontalTimeline {
  id: number
  ulClass: string
  verticalLine: string
  details: Details[]
}

export interface Details {
  id: number
  divClass: string
  colorClass: string
  date: string
  title: string
  description: string
  class?: string
}

export interface Images {
  image: string
}

export interface NestedSwiper {
  image?: string
  images?: Images[]
}

export interface DarkVariant {
  img: string
  title: string
  description: string
}

export interface List {
  title: string
  class?: string
  cardClass?: string
  cardHeaderClass?: string
  cardBodyClass?: string
  cardFooterClass?: string
  footerClass?: string
  headingClass?: string
  cardType: string
  details: ListDetails[]
}

export interface ListDetails {
  name?: string
  active?: boolean
  icon?: string
  title?: string
  list?: boolean
  description?: string
  titleClass?: string
  descriptionClass?: string
}

export interface PaginationProps {
  disable?: boolean
  color: string
  alignmentClass?: string
  class?: string
  type?: string
  sizeClass?: string
  totalPages?: number
  pageSize?: number
}
