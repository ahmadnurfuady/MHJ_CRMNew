export interface Language {
  icon: string
  language: string
  text: string
  localeCode: string
  span?: string
}
export const language: Language[] = [
  {
    icon: 'flag-icon-id',
    language: 'Indonesia',
    text: 'ID',
    localeCode: 'id',
  },
  {
    icon: 'flag-icon-us',
    language: 'English',
    text: 'EN',
    localeCode: 'en',
    span: '(US)',
  },
  {
    icon: 'flag-icon-de',
    language: 'Deutsch',
    text: 'DE',
    localeCode: 'de',
  },
  {
    icon: 'flag-icon-es',
    language: 'Español',
    text: 'ES',
    localeCode: 'es',
  },
  {
    icon: 'flag-icon-fr',
    language: 'Français',
    text: 'FR',
    localeCode: 'fr',
  },
  {
    icon: 'flag-icon-pt',
    language: 'Português',
    text: 'PT',
    localeCode: 'pt',
    span: '(BR)',
  },
  {
    icon: 'flag-icon-cn',
    text: 'CN',
    language: '简体中文',
    localeCode: 'zh-CN',
  },
  {
    icon: 'flag-icon-ae',
    language: 'لعربية',
    span: '(AR)',
    text: 'AR',
    localeCode: 'ar',
  },
]
