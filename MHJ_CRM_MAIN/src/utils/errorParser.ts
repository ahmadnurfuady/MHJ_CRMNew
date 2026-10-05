/**
 * Parser pesan error dari backend Laravel & SQL Server.
 * Mengubah pesan error teknis/SQLSTATE mentah menjadi penjelasan yang mudah dipahami pengguna.
 */

export interface ParsedError {
  title: string
  message: string
  field?: string
  detail?: string
}

const COLUMN_FRIENDLY_NAMES: Record<string, string> = {
  no_handphone: 'No. Handphone / Telepon',
  nohandphone: 'No. Handphone / Telepon',
  telephone: 'No. Handphone / Telepon',
  phone: 'No. Handphone / Telepon',
  firstname: 'Nama Depan',
  lastname: 'Nama Belakang',
  name: 'Nama Lengkap',
  email: 'Alamat Email',
  password: 'Kata Sandi / Password',
  nik: 'NIK (Nomor Induk Kependudukan)',
  role: 'Role Pengguna',
  stafflevel: 'Staff Level',
  primaryteam: 'Primary Team',
  secondaryteam: 'Secondary Team',
  tipemarketing: 'Tipe Marketing',
  kodetipemarketing: 'Tipe Marketing',
  cabang: 'Cabang',
  kodecabang: 'Cabang',
  devisi: 'Devisi',
  kodedevisi: 'Devisi',
  jabatan: 'Jabatan',
  idjabatan: 'Jabatan',
}

function getFriendlyColumnName(rawCol: string): string {
  let clean = rawCol.trim()
  if (/^FK_/i.test(clean)) {
    const parts = clean.split('_')
    clean = parts[parts.length - 1]
  }
  return COLUMN_FRIENDLY_NAMES[clean.toLowerCase()] || clean
}

export function parseBackendError(error: unknown, defaultTitle = 'Gagal Menyimpan Data'): ParsedError {
  if (!error) {
    return {
      title: defaultTitle,
      message: 'Terjadi kesalahan yang tidak diketahui.',
    }
  }

  // Jika input bertipe string langsung
  if (typeof error === 'string') {
    return parseErrorMessageString(error, defaultTitle)
  }

  const err = error as any

  // 1. Cek respons Laravel Validation Errors (format: { errors: { field: [msg1, msg2] } })
  const errorsObj = err?.response?.data?.errors
  if (errorsObj && typeof errorsObj === 'object') {
    const fieldKeys = Object.keys(errorsObj)
    if (fieldKeys.length > 0) {
      const firstField = fieldKeys[0]
      const msgs = errorsObj[firstField]
      const firstMsg = Array.isArray(msgs) ? msgs[0] : String(msgs)
      return {
        title: 'Validasi Input Tidak Sesuai',
        field: firstField,
        message: firstMsg,
        detail: JSON.stringify(errorsObj, null, 2),
      }
    }
  }

  // 2. Cek respons pesan error umum dari backend
  const rawMsg: string =
    err?.response?.data?.message ||
    err?.response?.data?.msg ||
    err?.response?.data?.error ||
    err?.message ||
    'Terjadi kesalahan saat memproses data ke server.'

  return parseErrorMessageString(rawMsg, defaultTitle)
}

function parseErrorMessageString(rawMsg: string, defaultTitle: string): ParsedError {
  // A. SQL Server: Cannot insert the value NULL into column 'X'
  const nullMatch = rawMsg.match(/Cannot insert the value NULL into column '([^']+)'/i)
  if (nullMatch) {
    const rawCol = nullMatch[1]
    const friendlyName = getFriendlyColumnName(rawCol)
    return {
      title: 'Data Belum Lengkap',
      field: rawCol,
      message: `Kolom "${friendlyName}" wajib diisi dan tidak boleh dibiarkan kosong.`,
      detail: rawMsg,
    }
  }

  // B. SQL Server: FOREIGN KEY constraint conflict (FK_users_TipeMarketing dsb)
  const isFkConflict = /FOREIGN KEY|REFERENCE constraint/i.test(rawMsg)
  if (isFkConflict) {
    const tableColMatch = rawMsg.match(/column ['"]?([^'",\s]+)['"]?/i)
    const fkConstraintMatch = rawMsg.match(/FOREIGN KEY constraint ["']([^"']+)["']/i)
    const rawTarget = tableColMatch ? tableColMatch[1] : (fkConstraintMatch ? fkConstraintMatch[1] : '')
    const friendlyName = getFriendlyColumnName(rawTarget)
    return {
      title: 'Pilihan Data Master Tidak Sesuai',
      field: friendlyName,
      message: `Pilihan pada "${friendlyName}" tidak valid atau belum terdaftar di data master sistem. Harap pilih opsi yang tersedia pada dropdown.`,
      detail: rawMsg,
    }
  }

  // C. SQL Server: Violation of UNIQUE KEY constraint (Duplikat)
  if (/Violation of UNIQUE KEY constraint|duplicate key|Duplicate entry/i.test(rawMsg)) {
    return {
      title: 'Data Duplikat',
      message: 'Email atau NIK pengguna sudah terdaftar di sistem. Harap periksa kembali dan gunakan data yang berbeda.',
      detail: rawMsg,
    }
  }

  // D. SQL Server: String or binary data would be truncated (Karakter kepanjangan)
  if (/String or binary data would be truncated/i.test(rawMsg)) {
    return {
      title: 'Karakter Melebihi Batas',
      message: 'Salah satu input teks melebihi panjang maksimum karakter yang diizinkan oleh sistem.',
      detail: rawMsg,
    }
  }

  // E. Token / Sesi habis
  if (/token_expired|token_invalid|token_absent/i.test(rawMsg)) {
    return {
      title: 'Sesi Telah Berakhir',
      message: 'Sesi login Anda telah berakhir. Silakan login kembali.',
      detail: rawMsg,
    }
  }

  // F. Bersihkan potongan query internal seperti (SQL: exec sp_users_crud ...)
  const cleanMsg = rawMsg
    .replace(/\s*\(SQL:[\s\S]*?\)$/i, '')
    .replace(/SQLSTATE\[\w+\]:\s*/i, '')
    .trim()

  return {
    title: defaultTitle,
    message: cleanMsg || 'Terjadi kesalahan pada server saat memproses data pengguna.',
    detail: rawMsg,
  }
}
