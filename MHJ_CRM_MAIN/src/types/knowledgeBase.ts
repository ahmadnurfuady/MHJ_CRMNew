export interface KnowledgeBase {
  class: string
  title: string
  description: string
  icon: string
}

export interface BrowserArticle {
  colClass: string
  seeMore: number
  title: string
  titleIcon: string
  details: Details[]
}
export interface Details {
  listText: string
  textIcon: string
  tag: boolean
  tagTitle: string
}

export interface featuredTutorial {
  id: number
  rating: number
  image: string
  title: string
  description: string
  date: string
}

export interface articlesAndVideos {
  row: number
  details: ArticleDetails[]
}

export interface ArticleDetails {
  id: number
  icon: string
  title: string
  description: string
}
