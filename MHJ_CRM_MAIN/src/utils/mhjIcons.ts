export const MHJ_ICON_PATHS = {
  action_add: '/icons/mhj/duotone/action_add.svg',
  action_calculator: '/icons/mhj/duotone/action_calculator.svg',
  action_calendar_tugas: '/icons/mhj/duotone/action_calendar_tugas.svg',
  action_call: '/icons/mhj/duotone/action_call.svg',
  action_camera: '/icons/mhj/duotone/action_camera.svg',
  action_chat: '/icons/mhj/duotone/action_chat.svg',
  action_check: '/icons/mhj/duotone/action_check.svg',
  action_checklist: '/icons/mhj/duotone/action_checklist.svg',
  action_clock: '/icons/mhj/duotone/action_clock.svg',
  action_email: '/icons/mhj/duotone/action_email.svg',
  action_filter: '/icons/mhj/duotone/action_filter.svg',
  action_folder: '/icons/mhj/duotone/action_folder.svg',
  action_form_survey: '/icons/mhj/duotone/action_form_survey.svg',
  action_location: '/icons/mhj/duotone/action_location.svg',
  action_medical_kit: '/icons/mhj/duotone/action_medical_kit.svg',
  action_phone: '/icons/mhj/duotone/action_phone.svg',
  action_promo_ticket: '/icons/mhj/duotone/action_promo_ticket.svg',
  action_route: '/icons/mhj/duotone/action_route.svg',
  action_search: '/icons/mhj/duotone/action_search.svg',
  action_survey: '/icons/mhj/duotone/action_survey.svg',
  action_wallet: '/icons/mhj/duotone/action_wallet.svg',
  coverage_point_on_map: '/icons/mhj/duotone/coverage_point_on_map.svg',
  contact_card: '/icons/mhj/contact-menu/contact_card.svg',
  hospital_activity: '/icons/mhj/duotone/hospital_activity.svg',
  hospital_installed: '/icons/mhj/duotone/hospital_installed.svg',
  hospital_profile: '/icons/mhj/duotone/hospital_profile.svg',
  kpi_cart_large_2: '/icons/mhj/duotone/kpi_cart_large_2.svg',
  kpi_graph: '/icons/mhj/duotone/kpi_graph.svg',
  kpi_medal_ribbons_star: '/icons/mhj/duotone/kpi_medal_ribbons_star.svg',
  kpi_pin_list: '/icons/mhj/duotone/kpi_pin_list.svg',
  map_satellite: '/icons/mhj/duotone/satelite.svg',
  letter: '/icons/mhj/duotone/letter.svg',
  letter_unread: '/icons/mhj/duotone/letter_unread.svg',
  nav_contact: '/icons/mhj/duotone/nav_contact.svg',
  nav_home: '/icons/mhj/duotone/nav_home.svg',
  nav_peluang: '/icons/mhj/duotone/nav_peluang.svg',
  nav_profile: '/icons/mhj/duotone/nav_profile.svg',
  nav_task: '/icons/mhj/duotone/nav_task.svg',
  whatsapp: '/icons/mhj/whatsapp.svg',
} as const

export type MhjIconName = keyof typeof MHJ_ICON_PATHS

export function isMhjIconName(name: string): name is MhjIconName {
  return Object.prototype.hasOwnProperty.call(MHJ_ICON_PATHS, name)
}

interface NavigationIconSource {
  title?: string
  path?: string
  icon?: string
}

/** Identify every legacy label/path that represents the Faskes menu. */
export function isFaskesNavigationItem(item: NavigationIconSource): boolean {
  const value = `${item.title ?? ''} ${item.path ?? ''} ${item.icon ?? ''}`.toLowerCase()
  return /faskes|rumah\s*sakit|hospital|compan(?:y|ies)|(?:^|\s)rs(?:\s|$)/.test(value)
}

/** Resolve both static and backend-provided root menus to the official MHJ navigation set. */
export function resolveMhjNavigationIcon(
  item: NavigationIconSource,
): MhjIconName | undefined {
  const value = `${item.title ?? ''} ${item.path ?? ''} ${item.icon ?? ''}`.toLowerCase()

  if (/kontak|contact/.test(value)) return 'contact_card'
  if (/peluang|project|proyek|projek|deal/.test(value)) return 'nav_peluang'
  if (/tugas|task|checklist/.test(value)) return 'nav_task'
  if (/profil|profile|akun|users?/.test(value)) return 'nav_profile'
  if (/dashboard|beranda|\bhome\b|\/crmadmin\/?(?:\s|$)/.test(value)) return 'nav_home'

  return undefined
}
