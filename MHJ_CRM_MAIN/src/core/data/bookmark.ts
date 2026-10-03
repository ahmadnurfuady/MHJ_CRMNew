import type { Bookmark } from '@/types/bookmark'
import type { Select, Tabs } from '@/types/common'

export const bookmarkFilter: Tabs[] = [
  {
    id: 1,
    title: 'Created by me',
    value: 'created_by_me',
  },
  {
    id: 2,
    title: 'Favorites',
    value: 'favorites',
  },
  {
    id: 3,
    title: 'Shared With Me',
    value: 'shared_with_me',
  },
  {
    id: 4,
    title: 'My Bookmark',
    value: 'my_bookmark',
  },
]

export const bookmarkTags: Select[] = [
  {
    label: 'Notification',
    value: 'notification',
  },
  {
    label: 'Newsletter',
    value: 'newsletter',
  },
  {
    label: 'Business',
    value: 'business',
  },
  {
    label: 'Holidays',
    value: 'holidays',
  },
  {
    label: 'Important',
    value: 'important',
  },
  {
    label: 'Organization',
    value: 'organization',
  },
]

export const bookmarks: Bookmark[] = [
  {
    id: 1,
    title: 'Admin Template',
    description:
      'is beautifully crafted, clean and modern designed admin theme with 6 different demos and light - dark versions.',
    collection: 'general',
    image: 'lightgallry/01.jpg',
    url: 'http://admin.pixelstrap.com/ltr/landing-page.html',
    tag: 'business',
    isFavorite: false,
  },
  {
    id: 2,
    title: 'Universal Template',
    description: 'Universal is beautifully crafted, clean and modern designed admin theme',
    collection: 'general',
    image: 'lightgallry/02.jpg',
    url: 'https://angular.pixelstrap.com/universal/landing',
    tag: 'organization',
    isFavorite: true,
  },
  {
    id: 3,
    title: 'Angular Theme',
    description: 'Riho is beautifully crafted, clean and modern designed admin theme',
    collection: 'fs',
    image: 'lightgallry/03.jpg',
    url: 'https://angular.pixelstrap.com/Riho/landing',
    tag: 'holidays',
    isFavorite: false,
  },
  {
    id: 4,
    title: 'Multikart Admin',
    description: 'Multikart admin is modern designed admin theme',
    collection: 'general',
    image: 'lightgallry/04.jpg',
    url: 'http://themes.pixelstrap.com/multikart/back-end/index.html',
    tag: 'newsletter',
    isFavorite: true,
  },
  {
    id: 5,
    title: 'Ecommerce theme',
    description:
      'Multikart HTML template is an apparently simple but highly functional tempalate designed for creating a flourisahing online business.',
    collection: 'general',
    image: 'lightgallry/05.jpg',
    url: 'http://themes.pixelstrap.com/multikart',
    tag: 'business',
    isFavorite: false,
  },
  {
    id: 6,
    title: 'Tovo app landing page',
    description: 'Amazing landing page with easy customization',
    collection: 'fs',
    image: 'lightgallry/06.jpg',
    url: 'http://vue.pixelstrap.com/tova/home-one',
    tag: 'important',
    isFavorite: true,
  },
]

export const bookmarkGroup: Select[] = [
  {
    value: 'my_bookmarks',
    label: 'My Bookmarks',
  },
]

export const bookmarkCollection: Select[] = [
  {
    value: 'general',
    label: 'General',
  },
  {
    value: 'fs',
    label: 'Fs',
  },
]
