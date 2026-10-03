export interface FontOption {
  label: string
  value: string
  cssFamily: string
}

export interface AppearanceSettings {
  primaryColor: string
  secondaryColor: string
  fontFamily: string
}

export const fontOptions: FontOption[] = [
  { label: 'Montserrat', value: 'Montserrat', cssFamily: "'Montserrat', sans-serif" },
  { label: 'Inter', value: 'Inter', cssFamily: "'Inter', sans-serif" },
  { label: 'Poppins', value: 'Poppins', cssFamily: "'Poppins', sans-serif" },
  { label: 'Roboto', value: 'Roboto', cssFamily: "'Roboto', sans-serif" },
]

export const defaultAppearance: AppearanceSettings = {
  primaryColor: '#18A6E4',
  secondaryColor: '#84D7EB',
  fontFamily: 'Montserrat',
}

export const appearanceStorageKeys = {
  primaryColor: 'primary_color',
  secondaryColor: 'secondary_color',
  fontFamily: 'font_family',
} as const

function normalizeHex(color: string): string {
  const value = color.trim().replace('#', '')

  if (/^[0-9a-fA-F]{3}$/.test(value)) {
    return `#${value
      .split('')
      .map((character) => `${character}${character}`)
      .join('')}`.toUpperCase()
  }

  if (/^[0-9a-fA-F]{6}$/.test(value)) {
    return `#${value}`.toUpperCase()
  }

  return defaultAppearance.primaryColor
}

function hexToRgb(color: string): [number, number, number] {
  const normalized = normalizeHex(color).slice(1)
  return [
    Number.parseInt(normalized.slice(0, 2), 16),
    Number.parseInt(normalized.slice(2, 4), 16),
    Number.parseInt(normalized.slice(4, 6), 16),
  ]
}

function rgbToHex(red: number, green: number, blue: number): string {
  return `#${[red, green, blue]
    .map((channel) => Math.round(channel).toString(16).padStart(2, '0'))
    .join('')}`.toUpperCase()
}

function mixColor(color: string, target: '#000000' | '#FFFFFF', targetWeight: number): string {
  const sourceRgb = hexToRgb(color)
  const targetRgb = hexToRgb(target)
  const weight = Math.min(Math.max(targetWeight, 0), 1)

  return rgbToHex(
    sourceRgb[0] * (1 - weight) + targetRgb[0] * weight,
    sourceRgb[1] * (1 - weight) + targetRgb[1] * weight,
    sourceRgb[2] * (1 - weight) + targetRgb[2] * weight
  )
}

export function getFontOption(fontFamily: string): FontOption {
  return fontOptions.find((font) => font.value === fontFamily) ?? fontOptions[0]
}

export function getStoredAppearance(): AppearanceSettings {
  const storedFont = localStorage.getItem(appearanceStorageKeys.fontFamily) ?? ''

  return {
    primaryColor:
      localStorage.getItem(appearanceStorageKeys.primaryColor) ?? defaultAppearance.primaryColor,
    secondaryColor:
      localStorage.getItem(appearanceStorageKeys.secondaryColor) ?? defaultAppearance.secondaryColor,
    fontFamily: getFontOption(storedFont || defaultAppearance.fontFamily).value,
  }
}

export function createAppearancePalette(primaryColor: string, secondaryColor: string) {
  const primary = normalizeHex(primaryColor)
  const secondary = normalizeHex(secondaryColor)
  const primaryDark = mixColor(primary, '#000000', 0.28)
  const primaryStrong = mixColor(primary, '#000000', 0.18)

  return {
    primary,
    primaryRgb: hexToRgb(primary).join(', '),
    primaryHover: mixColor(primary, '#000000', 0.12),
    primaryDark,
    primaryDarkRgb: hexToRgb(primaryDark).join(', '),
    primarySoft: mixColor(primary, '#FFFFFF', 0.82),
    primarySoftLight: mixColor(primary, '#FFFFFF', 0.88),
    primaryStrong,
    primaryStrongRgb: hexToRgb(primaryStrong).join(', '),
    primaryDeep: mixColor(primary, '#000000', 0.32),
    primaryBorder: mixColor(primary, '#FFFFFF', 0.68),
    primaryWash: mixColor(primary, '#FFFFFF', 0.94),
    secondary,
    secondaryRgb: hexToRgb(secondary).join(', '),
  }
}
