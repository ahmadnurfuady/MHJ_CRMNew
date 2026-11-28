export type Prospect = {
  fullName: string
  institution: string
  interestedProducts: string
  interestLevel: string
  createdAt: string
}

export const storageKey = 'mhj-survey-prospects-inahef-2026'
export const eventName = 'INAHEF 2026'

export function loadProspects(): Prospect[] {
  try {
    const stored = JSON.parse(localStorage.getItem(storageKey) || '[]')
    return Array.isArray(stored) ? stored : []
  } catch {
    return []
  }
}

export function downloadProspects(prospects: Prospect[]): void {
  if (!prospects.length) return
  const escapeXml = (value: string) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;')
  const cell = (value: string, style = '') => `<Cell${style ? ` ss:StyleID="${style}"` : ''}><Data ss:Type="String">${escapeXml(value)}</Data></Cell>`
  const headers = ['No', 'Event', 'Nama Lengkap', 'Asal Faskes / Instansi', 'Alkes yang Diminati', 'Tingkat Ketertarikan', 'Tanggal Input']
  const rows = prospects.map((prospect, index) => [
    String(index + 1), eventName, prospect.fullName, prospect.institution,
    prospect.interestedProducts, prospect.interestLevel,
    new Date(prospect.createdAt).toLocaleString('id-ID', { dateStyle: 'short', timeStyle: 'short' }),
  ])
  const tableRows = [
    `<Row>${cell('LAPORAN HASIL FORM SURVEY PROSPEK', 'Title')}</Row>`,
    `<Row>${cell('Event: Semua Event')}</Row>`,
    '<Row/>',
    `<Row>${headers.map((header) => cell(header, 'Header')).join('')}</Row>`,
    ...rows.map((row) => `<Row>${row.map((value) => cell(value)).join('')}</Row>`),
  ].join('')
  const workbook = `<?xml version="1.0"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
 <Styles>
  <Style ss:ID="Default" ss:Name="Normal"><Font ss:FontName="Arial" ss:Size="11"/></Style>
  <Style ss:ID="Title"><Font ss:FontName="Arial" ss:Size="14" ss:Bold="1"/></Style>
  <Style ss:ID="Header"><Font ss:FontName="Arial" ss:Size="11" ss:Bold="1" ss:Color="#FFFFFF"/><Interior ss:Color="#168AC1" ss:Pattern="Solid"/></Style>
 </Styles>
 <Worksheet ss:Name="Hasil Survey"><Table>${tableRows}</Table></Worksheet>
</Workbook>`
  const url = URL.createObjectURL(new Blob([`\ufeff${workbook}`], { type: 'application/vnd.ms-excel;charset=utf-8' }))
  const link = document.createElement('a')
  link.href = url
  link.download = `Hasil_Survey_Semua_Event_${Date.now()}.xls`
  document.body.appendChild(link)
  link.click()
  link.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 0)
}
